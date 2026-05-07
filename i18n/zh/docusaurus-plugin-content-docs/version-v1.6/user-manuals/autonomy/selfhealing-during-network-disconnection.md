---
title: 断网业务重启恢复
---

## 使用场景

在原生Kubernetes架构下，Slave Agent(Kubelet) 的容器信息都保存在内存中，而断网状态下又无法从云端获取业务数据，如果此时边缘节点或者边缘节点的Kubelet发生异常重启，它们将无法进行业务容器恢复。

## 架构与原理
OpenYurt在边缘测引入了一个重要的组件——[YurtHub](../../core-concepts/yurthub.md)。YurtHub在边缘节点上提供 web 缓存及请求代理的的能力，节点上系统组件(如kubelet)以及业务容器和云端通信都将经由该组件代理。断网情况下，边缘有任务可以通过本地缓存不依赖云端数据恢复。

## 开启方法

断网自愈功能由YurtHub组件提供，所有安装了YurtHub（Edge mode）的节点都自动支持该能力。使用[`yurtadm`接入的节点](../../installation/yurtadm-join.md)将自动准备好YurtHub，否则需要手动安装YurtHub组件。