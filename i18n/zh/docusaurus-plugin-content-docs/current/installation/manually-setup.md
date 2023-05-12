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

1. 如果Raven开启节点转发模式，需要保证集群中所有节点IP不冲突。
2. 如果采用Docker作为容器运行时则需要做以下调整，避免Docker修改iptables FORWARD链默认规则为DROP，从而导致Raven Gateway节点流量转发失败：
  ```bash
  iptables -w -P FORWARD ACCEPT
   sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \
   /lib/systemd/system/docker.service
  ```
3. 通过Raven提供的VPN隧道,边缘节点pods的域名解析将由主节点或云节点上的CoreDNS实例进行处理，因此可能引发解析延迟或者超时失败。如果您在意解析延迟或者超时失败，我们建议您根据[CoreDNS调整](./coredns-prepare.md)教程调整“CoreDNS部署”。

## 3 部署OpenYurt的控制面组件

我们推荐使用[Helm](https://helm.sh/)安装OpenYurt的控制面组件。请先保证在你的环境中已经[安装helm](https://helm.sh/docs/intro/install/)。另外，接下来要用到的所有helm charts都可以在[openyurt-helm 仓库](https://github.com/openyurtio/openyurt-helm)中找到。

Yurt-Manager与Kube-Controller-Manager类似，包含了OpenYurt多个Controller以及Webhook，其中包含了边缘自治、单元化管理、跨网络域组件Raven控制器、设备以及iot相关控制器等，可通过Helm安装该组件：
```bash
helm upgrade --install openyurt -n kube-system openyurt/openyurt
```

确认yurt-manager组件的pod和service配置已经成功创建:

```bash
kubectl get pod -n kube-system | grep yurt-manager
kubectl get svc -n kube-system | grep yurt-manager
```

## 4 部署OpenYurt的跨网络域通信组件
[Raven](../core-concepts/raven.md)提供了云、边位于不同网络区域的网络通信能力, 可通过Helm安装：
```bash
helm upgrade --install raven-agent -n kube-system openyurt/raven-agent
```

确认Raven-Agent组件的pod和service配置已经成功创建:
```bash
kubectl get pod -n kube-system | grep raven-agent
```

## 5. 注意
以上操作仅针对Master节点，如果集群中还有其他节点，还需要额外调整，操作方法可以参考: [在存量的K8s节点上安装OpenYurt Node组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)
