---
title: 断网节点心跳代理
---

## 使用场景

在原生 Kubernetes 中，边缘节点心跳一定时间没有上报时，云端控制器将对节点上 Pod 进行驱逐(删除并在正常节点上重建)。云边协同场景下，边缘业务有不一样的需求。一些业务期待云边网络断连造成心跳无法上报时(此时节点本身正常)，业务 Pod 可以保持(不发生驱逐)，仅节点故障时才对 Pod 进行迁移重建。

## 架构与原理

OpenYurt 1.2版本首创了基于 Yurt-Coordinator+YurtHub 的中心式心跳代理机制，如下图：

![heartbeat-delegation](../../../../../../static/img/docs/user-manuals/autonomy/heartbeat-delegation.png)

- 节点的云边网络正常时，Kubelet 通过 YurtHub 组件同时上报心跳到云端和 Yurt-Coordinator 两处。
- 节点的云边网络断连时，Kubelet 通过 YurtHub 组件上报心跳到云端失败，此时上报到 Yurt-Coordinator 的心跳带上特定标签。
- Leader YurtHub 会实时 list/watch Yurt-Coordinator 中的心跳数据，当获得的心跳数据中带有特定标签时将帮助转发该心跳到云端。

通过 Yurt-Coordinator 和 YurtHub 协同实现的心跳代理机制，保障了节点在云边网络断连状态下，心跳仍可继续上报到云端，从而保证节点上业务 Pod 不被驱逐。同时心跳被代理上报的节点，也会被实时加上特殊的 taints，用于限制管控调度新 Pod 到该节点。

## 开启方法

心跳代理功能由Yurt-Coordinator支持，如果希望使用该能力，请注意以下配置：
- 确保 OpenYurt 版本大于1.2.0
- 确保 每个节点池中运行了一个Yurt-Coordinator 实例
- YurtHub组件启动参数 --enable-coordinator = true