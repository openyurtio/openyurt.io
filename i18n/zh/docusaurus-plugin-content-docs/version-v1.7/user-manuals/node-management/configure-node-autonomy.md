---
title: 配置节点自治
---

在云边环境中，云与边之间的网络断连是常见情况。OpenYurt 提供了多层次的节点自治能力，以确保边缘服务在断连期间仍能稳定运行。

本文档介绍三项关键的自治功能：

- [1. 断连重启自愈](#1-断连重启自愈)
- [2. 断连期间防止 Pod 驱逐](#2-断连期间防止-pod-驱逐)
  - [2.1 单节点自治时长](#21-单节点自治时长)
  - [2.2 心跳委托（通过 Yurt-Coordinator）](#22-心跳委托通过-yurt-coordinator)

## 1. 断连重启自愈

**背景：** 在原生 Kubernetes 中，如果边缘节点或其 `kubelet` 组件在与云端断连期间重启，它将无法恢复正在运行的 Pod，因为 Pod 的定义存储在内存中，且无法从 API Server 获取。

**OpenYurt 的解决方案：** OpenYurt 的核心边缘组件 **YurtHub** 解决了这个问题。YurtHub 作为节点上所有 API Server 请求的本地代理和缓存。当节点在线时，它会缓存必要的数据（如 Pod 规格）。如果节点或 `kubelet` 在网络断连期间重启，`kubelet` 可以从 YurtHub 的本地缓存中获取所需数据，从而成功恢复并重启业务容器。

**使用方法：**
此自愈能力在任何运行 YurtHub 的边缘节点上默认启用。使用 `yurtadm join` 加入集群的节点会自动安装 YurtHub。

## 2. 断连期间防止 Pod 驱逐

**背景：** 原生 Kubernetes 会在 `kubelet` 一定时间（例如 5 分钟）无法上报心跳后驱逐（删除并重新调度）节点上的 Pod。在边缘场景中，这并不理想，因为网络断连是常见现象，并不一定意味着节点出现故障。

OpenYurt 提供了两种机制来防止不必要的 Pod 驱逐。

### 2.1 单节点自治时长

这是大多数边缘节点的推荐方案。它允许你为每个边缘节点配置特定的驱逐超时时间，覆盖集群的全局超时设置。

**使用方法：**
要启用此功能，请为边缘节点添加 `node.openyurt.io/autonomy-duration` 注解。

```bash
# 首先，确保节点已被标记为边缘节点
kubectl label node my-edge-node openyurt.io/is-edge-worker=true

# 推荐：设置 24 小时自治时长
# 这意味着控制平面将等待 24 小时才会驱逐该节点上的 Pod。
kubectl annotate node my-edge-node node.openyurt.io/autonomy-duration="24h"

# 要实现无限自治（Pod 永远不会因心跳丢失而被驱逐）
kubectl annotate node my-edge-node node.openyurt.io/autonomy-duration="0"
```

时长格式可参考[此处](https://pkg.go.dev/maze.io/x/duration#ParseDuration)。

### 2.2 心跳委托（通过 Yurt-Coordinator）

对于更高级的场景，OpenYurt 提供了通过 `Yurt-Coordinator` 组件实现的心跳委托机制。当边缘节点与云端的连接丢失但其本地网络（在同一 NodePool 内）保持连通时，另一个节点（Leader YurtHub）可以代表它向云端发送心跳信号。

这使节点在云端保持 `Ready` 状态，从而防止 Pod 被驱逐，并通过添加特殊 Taint 阻止调度器将新的 Pod 分配到此断连节点。

**使用方法：**
这是一项高级功能，需要谨慎设置：
- 确保 OpenYurt 版本为 1.2.0 或更高。
- 确保每个 NodePool 中运行了一个 `Yurt-Coordinator` 实例。
- 启动 YurtHub 组件时，使用 `--enable-coordinator=true` 参数。
