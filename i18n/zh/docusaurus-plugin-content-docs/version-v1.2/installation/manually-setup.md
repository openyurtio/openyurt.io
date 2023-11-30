---
title: 在Kubernetes上安装
---

本教程展示了如何手动部署 OpenYurt 集群。我们假设用户已经安装好一个Kubernetes集群。如果想从头开始创建OpenYurt集群，请参考[yurtadm 文档](./yurtadm-init.md)。

## 1 Kubernetes集群环境

用户需要先自行准备好一个Kubernetes集群(可以通过[kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)工具搭建)，本文档中以1节点的Kubernetes为例。

```bash
$ kubectl get nodes
NAME                      STATUS   ROLES                  AGE     VERSION
izwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11
```

### 1.1 给云端节点打标签

当与 `apiserver` 断开连接时，只有运行在边缘自治的节点上的Pod才不会被驱逐。因此，我们首先需要通过打 `openyurt.io/is-edge-worker` 的标签的方式，将节点分为云端节点和边缘节点。
我们将 `izwz9dohcv74iegqecp4axz` 作为云端节点，将标签的 `value` 值设置为 `false`

```bash
$ kubectl label node izwz9dohcv74iegqecp4axz openyurt.io/is-edge-worker=false
izwz9dohcv74iegqecp4axz labeled
```

## 2 OpenYurt安装前置条件

1. 保证集群中所有节点IP不冲突。
2. 如果采用docker作为容器运行时则需要做以下调整，避免Docker修改iptables FORWARD链默认规则为DROP，从而导致Raven Gateway节点流量转发失败：
  ```bash
  iptables -w -P FORWARD ACCEPT
   sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \
   /lib/systemd/system/docker.service
  ```
3. 通过Raven提供的VPN隧道,边缘节点pods的域名解析将由主节点或云节点上的CoreDNS实例进行处理，因此可能引发解析延迟或者超时失败。如果您在意解析延迟或者超时失败，我们建议您根据[CoreDNS调整](./coredns-prepare.md)教程调整“CoreDNS部署”。

## 3 部署OpenYurt的Control-Plane组件

我们推荐使用[Helm](https://helm.sh/)安装OpenYurt组件。请先保证在你的环境中已经[安装helm](https://helm.sh/docs/intro/install/)。另外，接下来要用到的所有helm charts都可以在[openyurt-helm 仓库](https://github.com/openyurtio/openyurt-helm)中找到。

### 3.1 部署`openyurt/yurt-app-manager`组件

#### 3.1.1 安装 yurt-app-manager

[Yurt-App-Manager](../core-concepts/yurt-app-manager.md)是OpenYurt集群提供边缘单元化管理的功能组件，全面提升在边缘场景下的应用部署效率，降低边缘节点和应用运维的复杂度。通过helm安装该组件：

```bash
helm install yurt-app-manager -n kube-system .
```

确认yurt-app-manager组件的pod和service配置已经成功创建:

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
$ kubectl label node izwz9dohcv74iegqecp4axz apps.openyurt.io/desired-nodepool=master
izwz9dohcv74iegqecp4axz labeled
```

### 3.2 部署`openyurt/yurt-controller-manager`组件
[yurt-controller-manager](../core-concepts/yurt-controller-manager.md)防止apiserver在断开连接时驱逐运行在边缘节点上的pod
我们可以通过helm安装以上组件:

```bash
helm install openyurt ./openyurt -n kube-system
```

可以通过`helm list -A`确认是否安装成功：

```bash
$ helm list -A 
NAME            	NAMESPACE  	REVISION	UPDATED                                	STATUS  	CHART                 	APP VERSION
openyurt        	kube-system	1       	2022-09-07 17:06:17.764754411 +0800 CST	deployed	openyurt-1.0.0        	1.0.0      
yurt-app-manager	kube-system	1       	2022-09-07 17:36:30.371904902 +0800 CST	deployed	yurt-app-manager-0.1.2	0.8.0
```
## 4 部署OpenYurt的跨网络域通信组件
[Raven](../core-concepts/raven.md)提供了云、边位于不同网络区域的网络通信能力，raven项目包含两个组件raven-controller-manager和raven-agent构成：
### 4.1 部署`raven-controller-manager`组件
[raven-controller-manager](https://github.com/openyurtio/raven-controller-manager)是一个自定义CR Gateway的标准kubernetes控制器，被部署在云端节点（可为master或cloud节点），Gateway CR管理不同物理区域的节点，动态选举物理区域内一个合格节点作为Gateway节点。 
```bash
git clone https://github.com/openyurtio/raven-controller-manager.git
cd raven-controller-manager
git checkout v0.3.0
make generate-deploy-yaml
kubectl apply -f _output/yamls/raven-controller-manager.yaml
```

### 4.2 部署`raven-agent`组件
```bash
git clone https://github.com/openyurtio/raven.git
cd raven
git checkout v0.3.0
FORWARD_NODE_IP=true make deploy
```

## 5. 注意

以上操作仅针对Master节点，如果集群中还有其他节点，还需要额外调整，操作方法可以参考: [在存量的K8s节点上安装OpenYurt Node组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)
