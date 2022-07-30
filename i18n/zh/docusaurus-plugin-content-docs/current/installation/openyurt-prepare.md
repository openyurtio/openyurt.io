---
title: OpenYurt 安装前置条件
---
## 0.背景说明

OpenYurt为适应边端环境，需要用户对K8S做一些调整，如：Kube-Controller-Manager, CoreDNS, KubeProxy等。

## 1. Kube-Controller-Manager调整

为了让 `yurt-controller-mamanger` 能够正常工作，我们需要关闭Kube-Controller-Manager中的 `nodelifecycle` 控制器。可以通过配置 `--controllers` 参数值并重启 `kube-controller-manager` 来禁用 `nodelifecycle` 控制器。

假设最初的参数值像这样 `--controllers=*,bootstrapsigner,tokencleaner`，要禁用 `nodelifecycle` 控制器，我们需要将参数值更改为 `--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner`。

如果 `kube-controller-manager` 是以静态 pod 的方式部署在 master 节点上，并且您有登录 master 节点的权限，则可以通过修改 `/etc/kubernetes/manifests/kube-controller-manager.yaml` 文件来完成上述操作。修改后，`kube-controller-manager` 会自动重启。

## 2. CoreDNS调整

一般场景下，CoreDNS是以Deployment形式部署，在边端场景下，域名解析请求无法跨`NodePool`，所以CoreDNS需要以`Daemonset`或者`YurtAppDaemon`形式部署，以实现将hostname解析为tunnelserver地址。

### 2.1 CoreDNS 配置修改

修改`kube-system` `namespace`下的`ConfigMap` `coredns`，增加如下内容：

```yaml
        hosts /etc/edge/tunnel-nodes { # 增加hosts插件
            reload 300ms
            fallthrough
        }
```

修改后效果如下：

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
        hosts /etc/edge/tunnel-nodes { # 增加hosts插件
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



### 2.2 CoreDNS 支持服务拓扑

增加annotation，利用openyurt的机制实现边缘服务选择。

```shell
# 利用openyurt实现endpoint过滤
kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'
```

修改后效果：

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
  clusterIP: 10.254.0.10
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

### 2.3 CoreDNS DaemonSet部署

如果CoreDNS原本使用DaemonSet部署，可以手工进行如下调整：

1）可以调整CoreDNS的镜像为自己的版本；

2）需要挂载Volume ConfigMap `yurt-tunnel-nodes`；

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

### 2.4 减少CoreDNS Deployment 副本数

如果k8s不是用Deployment部署，可以不进行操作。

```shell
kubectl scale --replicas=0 deployment/coredns -n kube-system
```

## 3. KubeProxy调整

kubeadm部署的k8s集群会为KubeProxy生成kubeconfig配置，在不配置[`Service Topology`](https://kubernetes.io/docs/concepts/services-networking/service-topology/) 和 [`Topology Aware Hints`](https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/) 情况下，KubeProxy使用这个kubeconfig拿到的endpoints是全量的。

云边端场景下，边缘节点间很有可能无法互通，因此需要endpoints基于nodepool进行拓扑。直接将kube-proxy的kubeconfig配置删除，将apiserver请求经过yurthub即可解决服务拓扑问题。

### KubeProxy支持流量拓扑

```shell
kubectl edit cm -n kube-system kube-proxy
```

注释掉`config.conf`文件下的`clientConnection.kubeconfig`，修改完后效果如下：

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
// 省略
```

### 重启KubeProxy Pod

为使上述配置生效，需要重启kubeproxy的pod，**线上环境谨慎操作**。

```shell
kubectl delete pod -n kube-system -l k8s-app=kube-proxy
```

### KubeProxy功能验证

可以通过KubeProxy的日志进行验证是否修改成功，**为防止日志过多，生产环境谨慎使用**。

```shell
kubectl edit ds -n kube-system kube-proxy
```

在command后面追加参数`--v=6`，修改后效果：

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

检查KubeProxy的Pod输出日志，如果apiserver地址是：`169.254.2.1:10268`代表修改成功。日志输出样例：

```text
I0521 02:57:01.986790       1 round_trippers.go:454] GET https://169.254.2.1:10268/api/v1/nodes/jd-sh-qianyi-test-02 200 OK in 12 milliseconds
I0521 02:57:02.021682       1 round_trippers.go:454] POST https://169.254.2.1:10268/api/v1/namespaces/default/events 201 Created in 4 milliseconds                                                       
```
