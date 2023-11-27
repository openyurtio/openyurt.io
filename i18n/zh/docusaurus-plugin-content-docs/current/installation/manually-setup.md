---
title: 在Kubernetes上安装
---

本教程展示了如何手动部署 OpenYurt 集群。我们假设用户已经安装好一个 Kubernetes 集群。

## 1 Kubernetes 集群环境

用户需要先自行准备好一个 Kubernetes 集群(可以通过[kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)工具搭建)，本文档中以 1 节点的 Kubernetes 为例。

```bash
$ kubectl get nodes
NAME                      STATUS   ROLES                  AGE     VERSION
izwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11
```

## 2 OpenYurt 安装前置条件

1. 如果 Raven 开启节点转发模式，需要保证集群中所有节点 IP 不冲突。
2. 如果采用 Docker 作为容器运行时则需要做以下调整，避免 Docker 修改 iptables FORWARD 链默认规则为 DROP，从而导致 Raven Gateway 节点流量转发失败：

```bash
iptables -w -P FORWARD ACCEPT
 sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \
 /lib/systemd/system/docker.service
```

3. 通过 Raven 提供的 VPN 隧道,边缘节点 pods 的域名解析将由主节点或云节点上的 CoreDNS 实例进行处理，因此可能引发解析延迟或者超时失败。如果您在意解析延迟或者超时失败，我们建议您根据[CoreDNS 调整](./coredns-prepare.md)教程调整“CoreDNS 部署”。
4. 为了适应边缘复杂的网络条件，我们需要关闭 k8s 原生的节点生命周期管理控制器，具体操作参考[Kube-Controller-Manager 安装相关配置调整](./kcm-prepare.md)。
5. 我们建议通过[Helm](https://helm.sh/)来安装 OpenYurt 组件，在进行安装之前，请确保[helm CLI](https://helm.sh/docs/intro/install/)已经正确安装。

## 3 部署 OpenYurt 的控制面组件

接下来要用到的所有 helm charts 都可以在[openyurt-helm 仓库](https://github.com/openyurtio/openyurt-helm)中找到。请按照以下方式添加仓库：

```bash
helm repo add openyurt https://openyurtio.github.io/openyurt-helm
```

您可以运行 `helm search repo openyurt` 来查看这些 helm charts，并且我们建议使用最新版本.

### 3.1 安装 yurt-manager

yurt-manager 应该在通过 yurtadm 命令加入节点之前启动，因为节点上的 yurthub 组件依赖于 yurt-manager 来批准 csr。所以请确保 yurt-manager 组件在主节点或任何其他没有 yurthub 组件的节点上运行。

```bash
helm upgrade --install yurt-manager -n kube-system openyurt/yurt-manager
```

确保 yurt-manager 组件的 pod 和服务配置已被成功创建：

```bash
kubectl get pod -n kube-system | grep yurt-manager
kubectl get svc -n kube-system | grep yurt-manager
```

### 3.2 安装 yurthub 相关配置

yurthub 相关配置包括 yurtstaticset 模板，以及 yurthub 相关的 ConfigMap 和 ClusterRole。同时在安装 yurthub 配置时，我们需要将`kubernetesServerAddr`字段设置为 Kubernetes 服务器地址（使用`kubectl config view`来查找）。
以 Kubernetes 服务器地址`https://1.2.3.4:6443`为例。

```bash
helm upgrade --install yurt-hub -n kube-system --set kubernetesServerAddr=https://1.2.3.4:6443 openyurt/yurthub
```

确保 yurthub yurtstaticset 和 yurthub cloud yurtstaticset 已经成功创建：

```
kubectl get yss -n kube-system
```

### 3.3 安装跨网络域通信组件 Raven

[Raven](../core-concepts/raven.md)提供了云、边位于不同网络区域的网络通信能力, 可通过 Helm 安装：

```bash
helm upgrade --install raven-agent -n kube-system openyurt/raven-agent
```

确认 Raven-Agent 组件的 pod 和 service 配置已经成功创建:

```bash
kubectl get pod -n kube-system | grep raven-agent
```

如果您需要开启raven七层代理能力，需要参考[Raven七层代理调整](raven-l7-proxy-prepare.md)对集群进行配置

## 4. 注意

以上操作仅针对 Master 节点，如果集群中还有其他节点，还需要额外调整，操作方法可以参考: [在存量的 K8s 节点上安装 OpenYurt Node 组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)
