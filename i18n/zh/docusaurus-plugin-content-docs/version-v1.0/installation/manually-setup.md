---
title: 在Kubernetes上安装
---

本教程展示了如何手动部署 OpenYurt 集群。我们假设用户已经安装好一个Kubernetes集群。如果想从头开始创建OpenYurt集群，请参考[yurtadm 文档](./yurtadm-init.md)。

## 1 Kubernetes集群环境

用户需要先自行准备好一个Kubernetes集群(可以通过[kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)工具搭建)，本文档中以1节点的Kubernetes为例。

```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
```

### 1.1 给云端节点打标签

当与 `apiserver` 断开连接时，只有运行在边缘自治的节点上的Pod才不会被驱逐。因此，我们首先需要通过打 `openyurt.io/is-edge-worker` 的标签的方式，将节点分为云端节点和边缘节点。
我们将 `us-west-1.192.168.0.87` 作为云端节点，将标签的 `value` 值设置为 `false`

```bash
$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false
node/us-west-1.192.168.0.87 labeled
```

## 2 OpenYurt安装准备

### 2.1 Kube-Controller-Manager调整

为了保证Yurt-Controller-Manager可以正常工作，需要关闭Kube-Controller-Manager中的NodeLifeCycle controller(目前正在优化，后续Kube-Controller-Manager将无需调整)。

Kube-Controller-Manager配置调整方法如下:

- [Kube-Controller-Manager](./openyurt-prepare.md#2-kube-controller-manager调整)

### 2.2 部署Yurt-Tunnel专用DNS

云端组件(如Kube-apiserver, prometheus, metrics-server等)通过`hostname:port`访问边缘时，为了让`hostname`域名解析到`yurt-tunnel-server`,从而让请求无感知
经过`yurt-tunnel-server/yurt-tunnel-agent`到达边缘节点。需要确保组件的DNS域名解析请求发送到Yurt-Tunnel专用的DNS(取名为yurt-tunnel-dns)。

通过如下命令安装yurt-tunnel-dns:

```bash
kubectl apply -f config/setup/yurt-tunnel-dns.yaml
```

当安装完成后，可以通过命令`kubectl -n kube-system get po`等确认一下yurt-tunnel-dns组件是否正常启动。并且通过`kubectl -n kube-system get svc yurt-tunnel-dns`获取到`yurt-tunnel-dns service`的`clusterIP`.

### 2.3 Kube-apiserver调整

为了保证Master节点上kube-apiserver使用`hostname:port`访问kubelet，同时保证使用`yurt-tunnel-dns pod`对`hostname`进行域名解析。需要调整kube-apiserver组件的相关配置。

Kube-apiserver配置调整方法如下:

- [Kube-apiserver](./openyurt-prepare.md#3-kube-apiserver调整)

### 2.4 Addons调整

kubeadm默认安装kube-proxy和CoreDNS的配置也需要配置，从而适配云边协同场景。调整配置方法如下:

- [CoreDNS](./openyurt-prepare.md#4-coredns调整)
- [KubeProxy](./openyurt-prepare.md#5-kubeproxy调整)

## 3 部署OpenYurt的Control-Plane组件

我们推荐使用[Helm](https://helm.sh/)安装OpenYurt组件。请先保证在你的环境中已经[安装helm](https://helm.sh/docs/intro/install/)。另外，接下来要用到的所有helm charts都可以在[openyurt-helm 仓库](https://github.com/openyurtio/openyurt-helm)中找到。

### 3.1 部署`openyurt/yurt-app-manager`组件

#### 3.1.1 安装 yurt-app-manager

[Yurt-App-Manager](../core-concepts/yurt-app-manager.md)是OpenYurt集群提供边缘单元化管理的功能组件，全面提升在边缘场景下的应用部署效率，降低边缘节点和应用运维的复杂度。通过helm安装该组件：

```bash
helm install yurt-app-manager -n kube-system ./charts/yurt-app-manager/
```

确认yurt-app-manager组件已经成功创建:

```bash
kubectl get pod -n kube-system | grep yurt-app-manager
kubectl get svc -n kube-system | grep yurt-app-manager
```

#### 3.1.2 创建节点池

为了更好的管理节点和节点上的流量(如Service流量拓扑管理)，我们推荐把二层网络互通的节点放在同一个节点池。本例中为云端创建一个节点池，具体如下:

```bash
cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: master
spec:
  type: Cloud
EOF
```

#### 3.1.3 节点加入节点池

将云端节点加入3.1.2中创建的云端节点池，具体如下:

```bash
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master
node/us-west-1.192.168.0.87 labeled
```

### 3.2 部署`openyurt/openyurt`组件

在`openyurt/openyurt`中的组件包括：

- [yurt-controller-manager](../core-concepts/yurt-controller-manager.md): 防止apiserver在断开连接时驱逐运行在边缘节点上的pod
- [yurt-tunnel-server](../core-concepts/yurttunnel.md): 在云端构建云边隧道
- [yurt-tunnel-agent](../core-concepts/yurttunnel.md): 在边缘侧构建云边隧道

> 如果你的云边节点不在同一网络平面内, 请手动修改`values.yaml`中tunnel相关参数:
>
> - `yurtTunnelAgent.parameters.tunnelserverAddr="ip:port"`: 用于tunnel agent连接tunnel server的公网IP与端口
> - `yurtTunnelServer.parameters.certIps="ip1,ip2"`: tunnel server的公网IP
> - `yurtTunnelServer.parameters.certDnsNames="dns_name1,dns_name2"`: tunnel server的DNS名称 [OPTIONAL]

我们可以通过helm安装以上组件:

```bash
helm install openyurt -n kube-system ./charts/openyurt/
```

可以通过`helm list -A`确认是否安装成功：

```bash
$ helm list -A 
NAME            	NAMESPACE  	REVISION	UPDATED                                	STATUS  	CHART                 	APP VERSION
openyurt        	kube-system	1       	2022-09-07 17:06:17.764754411 +0800 CST	deployed	openyurt-1.0.0        	1.0.0      
yurt-app-manager	kube-system	1       	2022-09-07 17:36:30.371904902 +0800 CST	deployed	yurt-app-manager-0.1.2	0.8.0
```

## 4. 注意

以上操作仅针对Master节点，如果集群中还有其他节点，还需要额外调整，操作方法可以参考: [在存量的K8s节点上安装OpenYurt Node组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)
