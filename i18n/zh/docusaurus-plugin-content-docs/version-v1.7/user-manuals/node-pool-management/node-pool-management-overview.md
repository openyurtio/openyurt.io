---
title: 节点池管理概述
---

## 背景

NodePool（节点池）是 OpenYurt 中 Kubernetes 集群内节点的逻辑分组，具有相似配置和特征的节点被归入同一个节点池。在 OpenYurt 中，节点池用于管理和组织运行在具有相似硬件能力或网络配置设备上的边缘节点。该功能提供了一种机制，用于定义在边缘环境中应参与特定工作负载或功能的节点。

自 v1beta2 起，OpenYurt 节点池支持在节点池内选举 Hub Leader。启用后，节点池内的 Hub Leader 会将 List/Watch 事件分发给同一节点池中的其他 Hub。这减少了发往 Kubernetes API Server 的请求数量，从而使每个集群能够部署更多的边缘节点。更多详情请参阅[创建节点池](./create-a-node-pool.md)。
