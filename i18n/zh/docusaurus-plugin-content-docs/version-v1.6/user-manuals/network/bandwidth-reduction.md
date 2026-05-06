---
title: 减少云边网络带宽
---

## 背景介绍

[性能测试](https://openyurt.io/docs/test-report/yurthub-performance-test/#traffic) 表明，在大规模 OpenYurt 集群中，如果 pod 被删除并重新创建，云边之间的通信流量将迅速增加，
因为边缘节点上的 kube-proxy 组件会实时监听所有 endpoints/endpointslices 数据的变化。 请注意，通常相同的 endpoints/endpointslices 数据将被传输到节点池中的每一个边缘节点，考虑到云边缘网络流量将使用公共网络，
这会给用户带来公网流量成本压力。因此OpenYurt社区对降低云边通信流量一直有比较强的诉求。

## 云边流量复用的架构与原理

如何在不侵入修改的 Kubernetes 的情况下来满足需求，首先比较容易考虑到的方案是在节点池内增加一个sync组件，实时同步云端的数据，然后再分发给节点池中各个组件。但是这个方案落地将面临不小的挑战，
首先数据访问请求都是边缘主动向云端发起的，sync需要拦截这些请求并给请求返回数据。同时如果sync组件故障，边缘的请求将面临中断，而保障sync组件的高可用会非常棘手。

OpenYurt社区首创基于Yurt-Coordinator+YurtHub的云边流量复用机制，既可以与原生Kubernetes的云边通信链路无缝融合，又优雅的保障了通信链路的高可用(YurtHub Leader选举)，实现云边通信成本的消减。

在节点池内，节点从云端获取的数据，可以分为两种类型：
- pool-scoped metadata:  组件从云端获取的数据完全一致，如每个节点的kube-proxy获取到的endpointslices
- node-scoped metadata: 组件从云端获取的数据和自身节点相关，如每个节点的kubelet获取到的pods

而性能测试结果也表明，主要占用云边带宽的数据是 pool-scoped metadata。因此通过在节点池中复用 pool-scoped metadata，从而可以大幅降低云边的数据通信量。如下图所示：

![bandwidth-reduction](../../../../../../static/img/docs/user-manuals/network/bandwidth-reduction.png)

- 节点池中所有YurtHub组件通过节点池中的Yurt-Coordinator进行选举产生Leader，只有和云端网络连接正常的YurtHub才会成为Leader。当Leader节点的云边网络连接异常时，Leader将被其他Follower自动替换。
- YurtHub Leader主动从云端实时获取 pool-scoped metadata(如Endpointslices)，然后存入节点池的Yurt-Coordinator组件中
- 节点上组件(如Kube-Proxy)通过YurtHub来获取 pool-scoped metadata时，YurtHub将从Yurt-Coordinator返回实时的数据。

## 开启方法

云边流量复用能力在OpenYurt集群中是默认开启的，需要注意以下配置。
- 确保 OpenYurt 版本大于1.2.0
- 确保 每个节点池中运行了一个Yurt-Coordinator 实例
- YurtHub组件启动参数 --enable-coordinator = true

