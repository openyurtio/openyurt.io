---
title: Raven
---

## 1. 背景介绍

在边缘计算中，边-边和边-云通信是常见的网络通信场景，在OpenYurt中，我们已经引入了YurtTunnel来应对边云协作中的运维和监控的网络问题，提供对边缘节点执行 kubectl exec/logs 并从边缘节点获取监控指标的功能，但是YurtTunnel 解决的问题只是边云通信的一个子集，我们还需要提供边-边、边-云容器网络通信的解决方案。

即在OpenYurt集群中，位于不同物理区域的Pod可能需要使用Pod IP、Service IP 或Service name与其他Pod通信，虽然这些Pod位于单个K8s集群中，但它们处于不同物理区域（网络域）中，无法直接通信。因此，我们提出了Raven项目来解决这一问题。


## 2. 整体架构

如下图所示，目前Raven的架构主要包含以下两个组件：

![img](../../static/img/docs/core-concepts/raven.png)

- **Raven Controller Manager**：标准的Kubernetes控制器，以Deployment的方式部署在部分云上节点中，负责监控边缘节点状态，为每一个边缘节点池选取一个跨边流量的出口作为gateway node，并能够在当前gateway node失活的情况下完成gateway node的切换，所有的跨边流量都将由各个边缘节点池的gateway node完成转发；
- **Raven Agent**：以DaemonSet的方式部署，运行在集群的每一个节点，它根据每个节点的角色（gateway or non-gateway）在节点上配置路由信息或VPN隧道信息；

上述两个组件通过一个[Gateway CRD](https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go) 来交换配置路由和建立VPN隧道的必要信息，如下图所示：

![img](../../static/img/docs/core-concepts/raven-sequence-diag.png)

更多实现细节可以参考Raven项目的代码仓库：

- [raven-controller-manager](https://github.com/openyurtio/raven-controller-manager)
- [raven](https://github.com/openyurtio/raven)


## 3. 特性及优势

特性：

- 无侵入：对原生的K8s CNI网络无侵入，仅劫持跨边流量进行转发
- 安全：使用成熟稳定的IPsec技术对跨边流量进行加密

优势：

- Raven在跨边流量的处理上会尽量利用边缘本身的网络能力，尽可能地创建边-边的VPN隧道，不会把所有的跨边流量都通过云上中心端转发
- Raven对在同一边缘节点池的流量不进行劫持，复用集群本身的CNI能力

## 4. 版本记录

Raven Controller Manager版本：

| 版本号 | 镜像地址                                     | 发布时间    | 发布内容 | 备注                  |
| ------ |------------------------------------------|---------| -------- |---------------------|
| v0.1.0 | openyurt/raven-controller-manager:v0.1.0 | 2022.05 | 首次发布 | 支持  Gateway Node 选举 |

Raven Agent版本：

| 版本号 | 镜像地址                        | 发布时间    | 发布内容 | 备注                |
| ------ |-----------------------------|---------| -------- |-------------------|
| v0.1.0 | openyurt/raven-agent:v0.1.0 | 2022.05 | 首次发布 | 支持 IPSec 作为VPN 后端 |

## 5. 未来计划

- 云端支持LB的公网暴露方式 【[issue #22](https://github.com/openyurtio/raven/issues/22)】 
- 支持NAT穿越 【[issue #13](https://github.com/openyurtio/raven/issues/13)】 
- 支持分布式路由决策 【[issue #14](https://github.com/openyurtio/raven/issues/14)】
  - 路由路径的cost计算 
  - 根据cost计算最短路径 
  - 在路径更改期间保持网络连接处于active状态

欢迎感兴趣的同学加入我们，贡献代码！！！
