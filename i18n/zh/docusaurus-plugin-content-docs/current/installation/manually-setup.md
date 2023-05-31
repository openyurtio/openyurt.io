---
title: 在Kubernetes上安装
---

本教程展示了如何手动部署 OpenYurt 集群。我们假设用户已经安装好一个Kubernetes集群。

## 1 Kubernetes集群环境

用户需要先自行准备好一个Kubernetes集群(可以通过[kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)工具搭建)，本文档中以1节点的Kubernetes为例。

```bash
$ kubectl get nodes
NAME                      STATUS   ROLES                  AGE     VERSION
izwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11
```

## 2 OpenYurt安装前置条件

1. 如果Raven开启节点转发模式，需要保证集群中所有节点IP不冲突。
2. 如果采用Docker作为容器运行时则需要做以下调整，避免Docker修改iptables FORWARD链默认规则为DROP，从而导致Raven Gateway节点流量转发失败：
  ```bash
  iptables -w -P FORWARD ACCEPT
   sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \
   /lib/systemd/system/docker.service
  ```
3. 通过Raven提供的VPN隧道,边缘节点pods的域名解析将由主节点或云节点上的CoreDNS实例进行处理，因此可能引发解析延迟或者超时失败。如果您在意解析延迟或者超时失败，我们建议您根据[CoreDNS调整](./coredns-prepare.md)教程调整“CoreDNS部署”。
4. 我们建议通过[Helm](https://helm.sh/)来安装OpenYurt组件，在进行安装之前，请确保[helm CLI](https://helm.sh/docs/intro/install/)已经正确安装。

## 3 部署OpenYurt的控制面组件

接下来要用到的所有helm charts都可以在[openyurt-helm 仓库](https://github.com/openyurtio/openyurt-helm)中找到。

### 3.1 安装yurt-manager

yurt-manager应该在通过yurtadm命令加入节点之前启动，因为节点上的yurthub组件依赖于yurt-manager来批准csr。所以请确保yurt-manager组件在主节点或任何其他没有yurthub组件的节点上运行。
```bash
helm upgrade --install yurt-manager -n kube-system openyurt/yurt-manager
```

确保yurt-manager组件的pod和服务配置已被成功创建：
```bash
kubectl get pod -n kube-system | grep yurt-manager
kubectl get svc -n kube-system | grep yurt-manager
```

### 3.2 安装yurthub相关配置

yurthub相关配置包括yurtstaticset模板，以及yurthub相关的ConfigMap和ClusterRole。同时在安装yurthub配置时，我们需要将`kubernetesServerAddr`字段设置为Kubernetes服务器地址（使用`kubectl config view`来查找）。
以Kubernetes服务器地址`https://1.2.3.4:6443`为例。
```bash
helm upgrade --install yurt-hub -n kube-system --set kubernetesServerAddr=https://1.2.3.4:6443 openyurt/yurthub
```

确保yurthub yurtstaticset和yurthub cloud yurtstaticset已经成功创建：
```
kubectl get yss -n kube-system
```

### 3.3 安装跨网络域通信组件Raven
[Raven](../core-concepts/raven.md)提供了云、边位于不同网络区域的网络通信能力, 可通过Helm安装：
```bash
helm upgrade --install raven-agent -n kube-system openyurt/raven-agent
```

确认Raven-Agent组件的pod和service配置已经成功创建:
```bash
kubectl get pod -n kube-system | grep raven-agent
```

## 4. 注意
以上操作仅针对Master节点，如果集群中还有其他节点，还需要额外调整，操作方法可以参考: [在存量的K8s节点上安装OpenYurt Node组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)
