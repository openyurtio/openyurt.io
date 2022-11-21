---
title: OpenYurt 安装相关Kubernetes配置调整
---
## 1.背景说明

为适应云边协同场景，用户需要对K8S做一些调整，如Kube-Controller-Manager, CoreDNS, KubeProxy等。

## 2. Kube-Controller-Manager调整

为了让 `yurt-controller-mamanger` 能够正常工作，我们需要关闭Kube-Controller-Manager中的 `nodelifecycle` 控制器。可以通过配置 `--controllers` 参数值并重启 `kube-controller-manager` 来禁用 `nodelifecycle` 控制器。

假设最初的参数值像这样 `--controllers=*,bootstrapsigner,tokencleaner`，要禁用 `nodelifecycle` 控制器，我们需要将参数值更改为 `--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner`。

如果 `kube-controller-manager` 是以静态 pod 的方式部署在 master 节点上，并且您有登录 master 节点的权限，则可以通过修改 `/etc/kubernetes/manifests/kube-controller-manager.yaml` 文件来完成上述操作。修改后，`kube-controller-manager` 会自动重启。

## 3. Kube-apiserver调整

为了保证Master节点上kube-apiserver使用`hostname:port`访问kubelet，同时确保使用`yurt-tunnel-dns pod`对`hostname`进行域名解析。kube-apiserver的相关配置调整如下:

假定kube-apiserver是使用static pod安装(/etc/kubernetes/manifests/kube-apiserver.yaml)
1. 修改dnsPolicy="None"
2. 增加dnsConfig配置，其中的`nameservers`配置为`yurt-tunnel-dns service`的`clusterIP`(这里假定为`1.2.3.4`)
3. 修改启动参数--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP，确保Kube-apiserver优先使用Hostname访问kubelet
4. 删除启动参数--kubelet-certificate-authority，确保kube-apiserver不校验yurt-tunnel-server的TLS证书(kubeadm搭建的集群中，默认没有配置该参数，可直接忽略)

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

## 4. CoreDNS调整

一般场景下，CoreDNS是以Deployment形式部署，在边端场景下，域名解析请求无法跨`NodePool`，所以CoreDNS需要以`Daemonset`或者`YurtAppDaemon`形式部署，同时kube-dns service流量拓扑配置成NodePool。

### 4.1 CoreDNS 支持服务流量拓扑

增加annotation，利用OpenYurt中Yurthub的边缘数据过滤机制实现服务流量拓扑能力，确保节点上的域名解析请求只会发给同一节点池内的CoreDNS。

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

### 4.2 CoreDNS DaemonSet部署

如果CoreDNS原本使用DaemonSet部署，可以手工进行如下调整(CoreDNS的镜像可调整为自己的版本)：

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

### 4.3 减少CoreDNS Deployment 副本数

如果k8s不是用Deployment部署，可以不进行操作。

```shell
kubectl scale --replicas=0 deployment/coredns -n kube-system
```

## 5. KubeProxy调整

kubeadm部署的k8s集群会为KubeProxy生成kubeconfig配置，在不配置[`Service Topology`](https://kubernetes.io/docs/concepts/services-networking/service-topology/) 和 [`Topology Aware Hints`](https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/) 情况下，KubeProxy使用这个kubeconfig拿到的endpoints是全量的。

云边端场景下，边缘节点间很有可能无法互通，因此需要endpoints基于nodepool进行拓扑。直接将kube-proxy的kubeconfig配置删除，将apiserver请求经过yurthub即可解决服务拓扑问题。

### 5.1 KubeProxy支持流量拓扑

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
      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf <-- 删除这个配置
      qps: 0
    clusterCIDR: 100.64.0.0/10
    configSyncPeriod: 0s
// 省略
```
