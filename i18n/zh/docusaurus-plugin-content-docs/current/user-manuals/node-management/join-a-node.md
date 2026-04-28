---
title: 添加节点
---

本文档介绍了将节点加入 OpenYurt 集群的操作流程。根据节点的初始状态，有两种方法：

- [1. 从零加入新节点](#1-从零加入新节点)
  - [前置条件](#前置条件)
  - [1.1 使用 `yurtadm join`](#11-使用-yurtadm-join)
  - [1.2 组件和 CNI 处理](#12-组件和-cni-处理)
- [2. 转换现有 Kubernetes 节点](#2-转换现有-kubernetes-节点)
  - [2.1 为节点打 Label 和 Annotation](#21-为节点打-label-和-annotation)
  - [2.2 安装 YurtHub](#22-安装-yurthub)
  - [2.3 重新配置 Kubelet](#23-重新配置-kubelet)
  - [2.4 重启节点上的 Pod](#24-重启节点上的-pod)

## 1. 从零加入新节点

此方法适用于尚未加入任何 Kubernetes 集群的节点。`yurtadm join` 命令通过安装必要的组件并将节点连接到 OpenYurt 集群来简化此过程。

### 前置条件

在加入节点之前，请确保节点满足以下条件：
- 已安装并运行容器运行时（如 containerd 或 Docker）。
- 已关闭 Swap 分区。
- 节点具有到 Kubernetes API Server 的网络连通性。

### 1.1 使用 `yurtadm join`

`yurtadm join` 命令负责安装 `kubeadm`、`kubelet` 和 `kube-proxy`，然后将节点加入集群。

**加入边缘节点：**

* 可从 [OpenYurt Releases](https://github.com/openyurtio/openyurt/releases) 页面下载 `yurtadm` 二进制文件。
* 如何编译 `yurtadm` 二进制文件，请参阅[此处](../../installation/yurtadm-init.md)。

```sh
yurtadm join <apiserver-address>:6443 --token=<apiserver-token> --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5
```

如果边缘节点使用 `containerd` 作为容器运行时，则必须指定 `--cri-socket` 参数：

```sh
yurtadm join <apiserver-address>:6443 --token=<token> --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5
```

**加入云节点：**

```sh
yurtadm join <apiserver-address>:6443 --token=<token> --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5
```

**参数说明：**
- `<apiserver-address>:6443`：API Server 的地址。
- `--token`：用于向集群进行身份验证的 Bootstrap Token。有关如何生成 Token，请参阅 [Kubernetes 文档](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/)。
- `--node-type`：OpenYurt 节点类型，可选值为 `cloud` 或 `edge`。

### 1.2 组件和 CNI 处理

`yurtadm join` 会自动处理组件安装。
- **Kubernetes 组件**：它会安装 `kubelet`、`kubeadm` 等。你可以提前将特定版本的二进制文件放入 `$PATH` 中，但 `yurtadm` 会验证它们的主版本和次版本是否与集群的 Kubernetes 版本匹配。
- **CNI 二进制文件**：加入过程会拉取经过特殊修改的 CNI 二进制文件（例如适用于 Flannel 的版本），以适应边缘环境。如果你已准备好自己的 CNI 二进制文件，请将其放置在 `/opt/cni/bin` 下，并在执行 `yurtadm join` 命令时使用 `--reuse-cni-bin=true` 参数。

## 2. 转换现有 Kubernetes 节点

此方法适用于已经存在于 Kubernetes 集群中、需要转换为 OpenYurt 节点的节点。

### 2.1 为节点打 Label 和 Annotation

首先，为节点添加 OpenYurt 相关的 Label 和 Annotation，以标识其节点类型。

```sh
# 将节点标记为边缘节点
kubectl label node <node-name> openyurt.io/is-edge-worker=true

# 或标记为云节点
kubectl label node <node-name> openyurt.io/is-edge-worker=false
```

### 2.2 安装 YurtHub

YurtHub 是 OpenYurt 的核心边缘组件，负责缓存 API Server 请求、实现节点自治等功能。

1. 从 [OpenYurt Releases](https://github.com/openyurtio/openyurt/releases) 页面下载 `yurthub` 二进制文件。
2. 将 `yurthub` 放置到节点的 `/usr/local/bin/` 目录下。
3. 配置 YurtHub 的 systemd 服务文件，并启动服务。

YurtHub 启动时的关键参数：
- `--node-name`：当前节点的名称。
- `--serve-secure-port`：YurtHub 监听的端口（通常为 10261）。
- `--kube-ca-file`：API Server 的 CA 证书路径。
- `--kubernetes-server-addr`：API Server 的地址。
- `--node-type`：节点类型，`cloud` 或 `edge`。

### 2.3 重新配置 Kubelet

需要将 Kubelet 的 `--kubeconfig` 指向 YurtHub 的地址，而不是直接指向 API Server。

1. 编辑 Kubelet 的 kubeconfig 文件，将 server 地址修改为 YurtHub 的监听地址（例如 `https://127.0.0.1:10261`）。
2. 重启 Kubelet 服务：

```sh
systemctl restart kubelet
```

### 2.4 重启节点上的 Pod

配置完成后，重启节点上的 Pod 以确保它们通过 YurtHub 与 API Server 通信。

```sh
# 驱逐节点上的所有 Pod（不包括 DaemonSet 管理的 Pod）
kubectl drain <node-name> --delete-emptydir-data --force --ignore-daemonsets

# 取消驱逐，允许调度新的 Pod
kubectl uncordon <node-name>
```
