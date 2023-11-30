---
title: OpenYurt Precondition
---
## 1.Background

OpenYurt need to change kubernetes component configurations to adapt to edge environment. The components include:Kube-apiserver, Kube-Controller-Manager, CoreDNS,KubeProxy etc。

## 2. Kube-Controller-Manager Adjustment

In order to make the yurt-controller-mamanger work properly, we need to turn off the default nodelifecycle controller in Kube-Controller-Manager.
The nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper `--controllers`option.
Assume that the original option looks like `--controllers=*,bootstrapsigner,tokencleaner`, to disable
the nodelifecycle controller, we change the option to `--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner`.

If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in to the master node,
then above operations can be done by revising the file `/etc/kubernetes/manifests/kube-controller-manager.yaml`. After revision, the kube-controller-manager will be
restarted automatically.

## 3. Kube-apiserver Adjustment

To make sure kube-apiserver on the master node use `hostname:port` to access kubelet, and at the same time this hostname resolution request should be handled by `yurt-tunnel-dns` pod. We should apply some adjustments to kube-apiserver configurations.

We assume your kube-apiserver is installed through static pod(/etc/kubernetes/manifests/kube-apiserver.yaml)

1. modifiy dnsPolicy="None"
2. add dnsConfig configurations which set the `nameservers` as the `clusterIP` of `yurt-tunnel-dns service` (assumed to be `1.2.3.4` here)
3. modify startup parameters `--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP`, to make sure that Kube-apiserver prefers to use Hostname to access kubelet
4. delete startup parameters `--kubelet-certificate-authority`, to make sure that kube-apisever don't calibrate TLS certificate of yurt-tunnel-server (If you create your cluster from kubeadm, this step can be omitted since it don't have this settings by default)

```bash
$ vi /etc/kubernetes/manifests/kube-apiserver.yaml
apiVersion: v1
kind: Pod
...
spec:
  dnsPolicy: "None" # 1. dnsPolicy修改为None
  dnsConfig:        # 2. 增加dnsConfig配置
    nameservers:
      - 1.2.3.4 # 使用yurt-tunnel-dns service的clusterIP替换
    searches:
      - kube-system.svc.cluster.local
      - svc.cluster.local
      - cluster.local
    options:
      - name: ndots
        value: "5"
  containers:
  - command:
    - kube-apiserver
  ...
    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. 把Hostname放在第一位
  ...
```

## 4. CoreDNS Adjustment

In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, domain name resolution could not cross `NodePool`, so CoreDNS need to use `Daemonset` or `YurtAppDaemon` to deploy. At the same time, we should also set the topologyKeys of kube-dns service as NodePool.

### 4.1 Configure CoreDNS Service

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

### 4.2 Use CoreDNS DaemonSet

The original CoreDNS is deployed by `DaemonSet`, please modify the settings manually (the CoreDNS image version can be adjusted to demand).

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
```

### 4.3 Scale Down CoreDNS Deployment Replicas

Only support when CoreDNS is deployed by deployment workload.

```shell
kubectl scale --replicas=0 deployment/coredns -n kube-system
```

## 5. KubeProxy Adjustment

The k8s cluster created by kubeadm will generate a kubeconfig for kubeproxy. If we do not modify default configuration like [`Service Topology`](https://kubernetes.io/docs/concepts/services-networking/service-topology/) and [`Topology Aware Hints`](https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/), KubeProxy will use the kubeconfig to get all endpoints.

In cloud-edge scenario, edge node could not communicate with each other, so endpoints need implement nodepool topology.

### 5.1 KubeProxy Service Topology

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
