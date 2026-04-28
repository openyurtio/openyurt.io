---
title: 节点管理概述
---

## 节点管理概述

OpenYurt 中的节点管理涵盖云边工作节点的全生命周期——从接入、弹性配置到下线。其主要目标是在云边网络不稳定的情况下保障工作负载的可靠性，同时支持可扩展的运维操作。以下概述三个关键流程。

### 添加节点

`yurtadm join` 用于引导新机器或将现有 Kubernetes 工作节点转换为运行 YurtHub 并接入 OpenYurt 控制平面。有关前置条件、命令选项（包括 `--node-type`）以及 CNI 复用注意事项，请参阅 [`join-a-node.md`](./join-a-node.md)。

### 配置节点自治

节点加入后，应配置自治窗口以避免在云边断连时发生不必要的驱逐。关于应用 `node.openyurt.io/autonomy-duration` 注解以及启用 Yurt-Coordinator 心跳委托的指导，请参阅 [`configure-node-autonomy.md`](./configure-node-autonomy.md)。

### 移除节点

要下线一台机器，请按照 [`remove-a-node.md`](./remove-a-node.md) 中的流程操作：驱逐节点、删除其 Kubernetes 对象，然后运行 `yurtadm reset` 并清理 CNI 产物。这可以确保集群元数据的一致性，并防止残留工作负载继续运行。
