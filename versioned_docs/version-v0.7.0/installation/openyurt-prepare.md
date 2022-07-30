---
title: OpenYurt Precondition
---
## 0.Background

OpenYurt need to change kubernetes component configurations to adapt to edge environment. The components include: Kube-Controller-Manager, CoreDNS,KubeProxy etc。

## 1. Kube-Controller-Manager Adjustment

In order to make the yurt-controller-mamanger work properly, we need to turn off the default nodelifecycle controller in Kube-Controller-Manager.
The nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper `--controllers`option.
Assume that the original option looks like `--controllers=*,bootstrapsigner,tokencleaner`, to disable
the nodelifecycle controller, we change the option to `--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner`.

If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in to the master node,
then above operations can be done by revising the file `/etc/kubernetes/manifests/kube-controller-manager.yaml`. After revision, the kube-controller-manager will be
restarted automatically.

## 2. CoreDNS Adjustment

In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, domain name resolution could not cross `NodePool`, so CoreDNS need to use `Daemonset` or `YurtAppDaemon` to deploy. Its main function is to resolve hostname to tunnelserver address.

### 2.1 Configure CoreDNS ConfigMap

Add hosts for `coredns` `ConfigMap` in `kube-system` `namespace`：

```yaml
        hosts /etc/edge/tunnel-nodes {
            reload 300ms
            fallthrough
        }
```

The results of modifications:

```yaml
apiVersion: v1
data:
  Corefile: |
    .:53 {
        errors
        log . {
          class denial success

        }
        health {
           lameduck 5s
        }
        ready
        hosts /etc/edge/tunnel-nodes { # add hosts plugin
            reload 300ms
            fallthrough
        }
        kubernetes cluster.local in-addr.arpa ip6.arpa {
           pods insecure
           fallthrough in-addr.arpa ip6.arpa
           ttl 30
        }
        prometheus :9153
        forward . /etc/resolv.conf {
           max_concurrent 1000
        }
        cache 30
        loop
        reload
        loadbalance
    }
kind: ConfigMap
metadata:
  name: coredns
  namespace: kube-system
```

### 2.2 Configure CoreDNS Service

Add annotation to coredns service, which could use openyurt’s ability to choose local endpoint.

```shell
kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'
```

The results of modifications:

```yaml
apiVersion: v1
kind: Service
metadata:
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool
    prometheus.io/port: "9153"
    prometheus.io/scrape: "true"
  creationTimestamp: "2022-02-14T10:13:37Z"
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: "true"
    kubernetes.io/name: KubeDNS
  name: kube-dns
  namespace: kube-system
  resourceVersion: "65474309"
  selfLink: /api/v1/namespaces/kube-system/services/kube-dns
  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1
spec:
  clusterIP: xx.xx.xx.xx
  ports:
  - name: dns
    port: 53
    protocol: UDP
    targetPort: 53
  - name: dns-tcp
    port: 53
    protocol: TCP
    targetPort: 53
  - name: metrics
    port: 9153
    protocol: TCP
    targetPort: 9153
  selector:
    k8s-app: kube-dns
  sessionAffinity: None
  type: ClusterIP
```

### 2.3 Use CoreDNS DaemonSet

The original CoreDNS is deployed by `DaemonSet`, please follow below steps to modify.
1) change the coredns to your version;
2) mount ConfigMap `yurt-tunnel-nodes` to pod；

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  labels:
    k8s-app: kube-dns
  name: coredns
  namespace: kube-system
spec:
  selector:
    matchLabels:
      k8s-app: kube-dns
  template:
    metadata:
      labels:
        k8s-app: kube-dns
    spec:
      containers:
      - args:
        - -conf
        - /etc/coredns/Corefile
        image: registry.aliyuncs.com/google_containers/coredns:1.7.0
        livenessProbe:
          failureThreshold: 5
          httpGet:
            path: /health
            port: 8080
            scheme: HTTP
          initialDelaySeconds: 60
          periodSeconds: 10
          successThreshold: 1
          timeoutSeconds: 5
        name: coredns
        ports:
        - containerPort: 53
          name: dns
          protocol: UDP
        - containerPort: 53
          name: dns-tcp
          protocol: TCP
        - containerPort: 9153
          name: metrics
          protocol: TCP
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /ready
            port: 8181
            scheme: HTTP
          periodSeconds: 10
          successThreshold: 1
          timeoutSeconds: 1
        resources:
          limits:
            memory: 170Mi
          requests:
            cpu: 100m
            memory: 70Mi
        securityContext:
          allowPrivilegeEscalation: false
          capabilities:
            add:
            - NET_BIND_SERVICE
            drop:
            - all
          readOnlyRootFilesystem: true
        volumeMounts:
        - mountPath: /etc/coredns
          name: config-volume
          readOnly: true
        - mountPath: /etc/edge
          name: hosts
          readOnly: true
      dnsPolicy: Default
      nodeSelector:
        kubernetes.io/os: linux
      priorityClassName: system-cluster-critical
      serviceAccount: coredns
      serviceAccountName: coredns
      tolerations:
      - operator: Exists
      - key: CriticalAddonsOnly
        operator: Exists
      - effect: NoSchedule
        key: node-role.kubernetes.io/master
      volumes:
      - configMap:
          defaultMode: 420
          items:
          - key: Corefile
            path: Corefile
          name: coredns
        name: config-volume
      - configMap:
          defaultMode: 420
          name: yurt-tunnel-nodes
        name: hosts
```

### 2.4 Scale Down CoreDNS Deployment Replicas

Only support when CoreDNS is deployed by deployment workload.

```shell
kubectl scale --replicas=0 deployment/coredns -n kube-system
```

## 3. KubeProxy Adjustment

The k8s cluster created by kubeadm will generate a kubeconfig for kubeproxy. If we do not modify default configuration like [`Service Topology`](https://kubernetes.io/docs/concepts/services-networking/service-topology/) and [`Topology Aware Hints`](https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/), KubeProxy will use the kubeconfig to get all endpoints.

In cloud-edge scenario, edge node could not communicate with each other, so endpoints need implement nodepool topology.

### KubeProxy Service Topology

```shell
kubectl edit cm -n kube-system kube-proxy
```

Comment `config.conf` file's property `clientConnection.kubeconfig`，so kube-proxy will use [InClusterConfig](https://kubernetes.io/docs/tasks/run-application/access-api-from-pod/#directly-accessing-the-rest-api) to access kube-apiserver. the modification result：

```yaml
apiVersion: v1
data:
  config.conf: |-
    apiVersion: kubeproxy.config.k8s.io/v1alpha1
    bindAddress: 0.0.0.0
    bindAddressHardFail: false
    clientConnection:
      acceptContentTypes: ""
      burst: 0
      contentType: ""
      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf
      qps: 0
    clusterCIDR: 100.64.0.0/10
    configSyncPeriod: 0s
// ...
```

### Restart KubeProxy Pod

To put the new configuration into effect, we should restart `kubeproxy`, be cautiously used in a production environment.

```shell
kubectl delete pod -n kube-system -l k8s-app=kube-proxy
```

### KubeProxy Functional Verification

We could verify modify result by view `KubeProxy` log. **We don't recommend you to change the flags as the logs maybe outbreak.**

```shell
kubectl edit ds -n kube-system kube-proxy
```

Append parameter `--v=6` to container's command, and the change result is:

```shell
apiVersion: apps/v1
kind: DaemonSet
metadata:
  annotations:
    deprecated.daemonset.template.generation: "3"
  creationTimestamp: "2022-05-10T06:27:27Z"
  generation: 3
  labels:
    k8s-app: kube-proxy
  name: kube-proxy
  namespace: kube-system
  resourceVersion: "5377081"
  uid: 0f8eccdd-d26f-48f0-8401-8d762a630dc8
spec:
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: kube-proxy
  template:
    metadata:
      creationTimestamp: null
      labels:
        k8s-app: kube-proxy
    spec:
      containers:
      - command:
        - /usr/local/bin/kube-proxy
        - --config=/var/lib/kube-proxy/config.conf
        - --hostname-override=$(NODE_NAME)
        - --v=6
```

Check `KubeProxy`'s stdout, if `ApiServer`'s address is `169.254.2.1:10268` which means modify success. The sample logs like:

```text
I0521 02:57:01.986790       1 round_trippers.go:454] GET https://169.254.2.1:10268/api/v1/nodes/jd-sh-qianyi-test-02 200 OK in 12 milliseconds
I0521 02:57:02.021682       1 round_trippers.go:454] POST https://169.254.2.1:10268/api/v1/namespaces/default/events 201 Created in 4 milliseconds                                                       
```


