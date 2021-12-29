---
title: 使用 YurtCluster Operator 部署边缘集群
---

##1. 背景说明
当您准备在生产环境使用 OpenYurt 时，官方推荐使用 [YurtCluster Operator](https://github.com/openyurtio/yurtcluster-operator) 。
YurtCluster Operator 提供了云原生声名式 Cluster API，能够根据声明的配置自动在标准 Kubernetes 集群上部署和配置 OpenYurt 相关组件，
使其具备提供边缘计算服务的能力（即将普通集群一键转换为 OpenYurt 边缘集群），同时负责动态追踪和管理 OpenYurt 集群的生命周期，包括集群扩容、升级等，
保障边缘集群始终运行在最佳状态。

## 2. 安装流程

### 2.1 前置准备

在开始前，您需要先准备一个普通的 Kubernetes 集群。如果您还没有一个可用集群，可以参考使用 [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) 等工具搭建一个新的集群。
当然，如果您只是想体验 YurtCluster Operator 的相关功能，也可以基于社区推荐的 [kind](https://kind.sigs.k8s.io/docs/) 、[minikube](https://minikube.sigs.k8s.io/) 等工具快速拉起一个用于本地开发测试使用的 Kubernetes 集群。

本文仅介绍通过 kind 工具拉起集群的一般方法，关于其它工具的使用请参照其对应的官方说明文档。

kind 依赖 Docker 软件，请确保您的机器上已经正确安装了 [Docker](https://docs.docker.com/get-docker/) 程序，关于 [kind 的安装请参照文档](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) 。

准备一个 `kind-cluster.yaml` 文件，定义一个 “1 control-plane + 3 worker” 的 Kubernetes 集群：



```yaml
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
nodes:
- role: control-plane
- role: worker
- role: worker
- role: worker
```

执行如下命令，初始化集群：

```bash
# kind create cluster --config kind-cluster.yaml

Creating cluster "kind" ...
 ✓ Ensuring node image (kindest/node:v1.21.1) 🖼 
 ✓ Preparing nodes 📦 📦 📦 📦  
 ✓ Writing configuration 📜 
 ✓ Starting control-plane 🕹️ 
 ✓ Installing CNI 🔌 
 ✓ Installing StorageClass 💾 
 ✓ Joining worker nodes 🚜 
Set kubectl context to "kind-kind"
You can now use your cluster with:

kubectl cluster-info --context kind-kind

Have a nice day! 👋
```

检查集群是否已经 Ready：



```sh
# kubectl get node

NAME                 STATUS   ROLES                  AGE     VERSION
kind-control-plane   Ready    control-plane,master   6m30s   v1.21.1
kind-worker          Ready    <none>                 5m56s   v1.21.1
kind-worker2         Ready    <none>                 5m57s   v1.21.1
kind-worker3         Ready    <none>                 5m57s   v1.21.1
```

### 2.2 部署 YurtCluster Operator

YurtCluster Operator 提供了 Helm Chart 部署包，可以通过 Helm 实现一键部署，

YurtCluster Operator 属于集群生命周期核心管控组件，需要部署在 `kube-system`命名空间：

```bash
# git clone https://github.com/openyurtio/yurtcluster-operator
# cd yurtcluster-operator/charts
# helm install yurtcluster-operator . -n kube-system

NAME: yurtcluster-operator
LAST DEPLOYED: Tue Dec 28 10:45:28 2021
NAMESPACE: kube-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

YurtCluster Operator 采用了分布式架构，包含一个 manager 组件（支持多副本高可用部署），以及运行在各个节点上的 agent 组件。
manager 组件负责统一管理集群组件的安装部署以及 YurtCluster 的状态更新等，agent 专注于处理本节点的节点配置（转换）任务。
YurtCluster Operator 的 helm chart 中同时包含了 YurtAppManager 和 YurtControllerManager 子 chart，它们作为 OpenYurt 集群的核心组件，会被同步安装。

检查 YurtCluster 组件是否已经就绪（就绪状态会看到类似如下输出）：

```bash
# kubectl get pod -n kube-system | grep yurt

yurt-app-manager-7998648c47-5s9tp            1/1     Running   0          4m45s
yurt-app-manager-7998648c47-bdkfd            1/1     Running   0          4m45s
yurt-app-manager-7998648c47-rg8zn            1/1     Running   0          4m45s
yurt-controller-manager-868b85cc4b-5ktf2     1/1     Running   0          4m45s
yurt-controller-manager-868b85cc4b-gkwlf     1/1     Running   0          4m45s
yurt-controller-manager-868b85cc4b-pwwmx     1/1     Running   0          4m45s
yurt-operator-agent-2sx77                    1/1     Running   0          4m45s
yurt-operator-agent-lhqgm                    1/1     Running   0          4m45s
yurt-operator-agent-tfk9q                    1/1     Running   0          4m45s
yurt-operator-agent-x9rrs                    1/1     Running   0          4m45s
yurt-operator-manager-7476dc9b4-v28tx        1/1     Running   0          4m45s
```

### 2.3 标记节点类型
为了验证 YurtCluster Operator 的节点转换能力，需要预先对节点进行分组。本文基于如下表格对节点分组：

| NodeName           | Role         | Label                       |
| ------------------ | ------------ | --------------------------- |
| kind-control-plane | ControlPlane | -                           |
| kind-worker        | CloudNode    | openyurt.io/node-type=cloud |
| kind-worker2       | EdgeNode     | openyurt.io/node-type=edge  |
| kind-worker3       | EdgeNode     | openyurt.io/node-type=edge  |

```bash
# kubectl label node kind-worker openyurt.io/node-type=cloud
# kubectl label node kind-worker2 openyurt.io/node-type=edge
# kubectl label node kind-worker3 openyurt.io/node-type=edge
```

### 2.4 部署 YurtCluster CR 对象

YurtCluster 是自定义的 Kubernetes CRD，定义了 OpenYurt 集群的期望状态，包括 OpenYurt 集群组件仓库地址、使用的 OpenYurt 版本号、
云端节点集合、边缘节点集合以及关键系统组件 YurtHub、YurtTunnel 的相关配置，全量的 Scheme 定义请参照源码 
[API 定义](https://github.com/openyurtio/yurtcluster-operator/blob/main/api/v1alpha1/yurtcluster_types.go) 。



本文以部署 OpenYurt v0.5.0 版本为例，准备 CR 定义 `yurtcluster.yaml` 如下：

```yaml
apiVersion: operator.openyurt.io/v1alpha1
kind: YurtCluster
metadata:
  name: cluster
spec:
  yurtVersion: "v0.5.0"
  cloudNodes:
    selector:
      nodeSelectorTerms:
        - matchExpressions:
            - key: openyurt.io/node-type
              operator: In
              values:
                - "cloud"
  edgeNodes:
    selector:
      nodeSelectorTerms:
        - matchExpressions:
            - key: openyurt.io/node-type
              operator: In
              values:
                - "edge"
```

注意：YurtCluster 在集群中是单例的，只有名字为 `cluster` 的 YurtCluster CR 会被系统接收和处理。

在上述 YurtCluster CR 中，定义了 CloudNode 需要具备标签 `openyurt.io/node-type=cloud`，EdgeNode 需要具备标签 `openyurt.io/node-type=edge`。

部署 YurtCluster CR 到集群：

```bash
# kubectl apply -f yurtcluster.yaml

yurtcluster.operator.openyurt.io/cluster created
```

查看 YurtCluster 状态（yurtcluster 可简写为 yc）：

```bash
# kubectl get yc

NAME      PHASE
cluster   Converting
```

可以看到，集群正在转换配置中，等到 PHASE 转为 Succeed，即表明配置已完成。

```bash
# kubectl get yc

NAME      PHASE
cluster   Succeed
```

通过查看 YurtCluster 的 Status 字段，可以获取转换详情信息：

```bash
# kubectl get yc cluster -oyaml

...
status:
  nodeConditions:
    kind-worker:
      lastTransitionTime: "2021-12-28T03:34:40Z"
      message: Node was converted into CloudNode successfully
      observedGeneration: 2
      reason: CloudNodeConvert
      status: "True"
    kind-worker2:
      lastTransitionTime: "2021-12-28T03:35:05Z"
      message: Node was converted into EdgeNode successfully
      observedGeneration: 2
      reason: EdgeNodeConvert
      status: "True"
    kind-worker3:
      lastTransitionTime: "2021-12-28T03:35:04Z"
      message: Node was converted into EdgeNode successfully
      observedGeneration: 2
      reason: EdgeNodeConvert
      status: "True"
  observedGeneration: 2
  phase: Succeed
```

按照预期，kind-worker 被配置为 CloudNode， kind-worker2 和 kind-worker3 被配置为 EdgeNode。



检查 yurthub 是否已经全部启动完成：

```bash
# kubectl get pod -n kube-system | grep yurt-hub

yurt-hub-kind-worker                         1/1     Running   0          8m
yurt-hub-kind-worker2                        1/1     Running   0          8m
yurt-hub-kind-worker3                        1/1     Running   0          8m
```



检查 YurtTunnel 是否已经全部启动完成：

```bash
# kubectl get pod -n kube-system | grep yurt-tunnel

yurt-tunnel-agent-5fxz6                      1/1     Running   0          8m
yurt-tunnel-agent-vfkmd                      1/1     Running   0          8m
yurt-tunnel-server-f7md8                     1/1     Running   0          8m
```

## 3. 验证集群

### 3.1 拉取边缘节点 Pod 日志 (验证 Tunnel 正确工作）

```bash
# kubectl logs -f -n kube-system yurt-tunnel-agent-5fxz6

I1228 03:34:26.670053       1 start.go:51] yurttunnel-agent version: projectinfo.Info{GitVersion:"v0.5.0", GitCommit:"71d1da7", BuildDate:"2021-09-29T02:50:58Z", GoVersion:"go1.15.15", Compiler:"gc", Platform:"linux/amd64"}
I1228 03:34:26.670629       1 options.go:136] ipv4=172.18.0.3&host=kind-worker2 is set for agent identifies
I1228 03:34:26.670791       1 options.go:141] neither --kube-config nor --apiserver-addr is set, will use /etc/kubernetes/kubelet.conf as the kubeconfig
I1228 03:34:26.670820       1 options.go:145] create the clientset based on the kubeconfig(/etc/kubernetes/kubelet.conf).
I1228 03:34:26.723640       1 start.go:87] yurttunnel-server address: 172.18.0.5:32444
W1228 03:34:26.724153       1 filestore_wrapper.go:49] unexpected error occurred when loading the certificate: no cert/key files read at "/var/lib/yurttunnel-agent/pki/yurttunnel-agent-current.pem", ("", "") or ("/var/lib/yurttunnel-agent/pki", "/var/lib/yurttunnel-agent/pki"), will regenerate it
I1228 03:34:31.724563       1 start.go:106] certificate yurttunnel-agent ok
I1228 03:34:31.725038       1 anpagent.go:57] start serving grpc request redirected from yurttunnel-server: 172.18.0.5:32444
I1228 03:34:31.725567       1 util.go:71] "start handling meta requests(metrics/pprof)" server endpoint="127.0.0.1:10266"
I1228 03:34:31.734083       1 client.go:224] "Connect to" server="6e11745a-79bb-4486-8222-7f75d7697e10"
I1228 03:34:31.734122       1 clientset.go:190] "sync added client connecting to proxy server" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"
I1228 03:34:31.734146       1 client.go:326] "Start serving" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"
I1228 06:37:06.772662       1 client.go:412] received dial request to tcp:172.18.0.3:10250 with random=7660323324116104765 and connID=1
```

能够获取到日志，即表明 tunnel 组件已经正确工作。

### 3.2 拉取 YurtHub 组件日志（验证 YurtHub 正确工作）

```bash
# kubectl logs -f -n kube-system yurt-hub-kind-worker

...
I1228 03:34:34.186522       1 util.go:232] start proxying: get /api/v1/services?limit=500&resourceVersion=0, in flight requests: 4
I1228 03:34:34.187236       1 util.go:215] kubelet list nodes: /api/v1/nodes?fieldSelector=metadata.name%3Dkind-worker&limit=500&resourceVersion=0 with status code 200, spent 8.468841ms
I1228 03:34:34.197137       1 util.go:232] start proxying: get /api/v1/nodes?allowWatchBookmarks=true&fieldSelector=metadata.name%3Dkind-worker&resourceVersion=14139&timeout=8m26s&timeoutSeconds=506&watch=true, in flight requests: 4
I1228 03:34:34.207398       1 handler.go:83] mutate master service into ClusterIP:Port=169.254.2.1:10268 for request kubelet list services: https://kind-control-plane:6443/api/v1/services?limit=500&resourceVersion=0
I1228 03:34:34.214583       1 util.go:215] kubelet list services: /api/v1/services?limit=500&resourceVersion=0 with status code 200, spent 27.805893ms
I1228 03:34:34.216177       1 util.go:232] start proxying: get /api/v1/services?allowWatchBookmarks=true&resourceVersion=13727&timeout=8m14s&timeoutSeconds=494&watch=true, in flight requests: 4
...
```

看到类似如上的日志，则表明 YurtHub 已经成功代理了 kubelet 的请求。

## 4. 清理

执行以下命令清理 OpenYurt 集群：

```bash
# kubectl delete yc cluster
# helm uninstall yurtcluster-operator	-n kube-system
```




