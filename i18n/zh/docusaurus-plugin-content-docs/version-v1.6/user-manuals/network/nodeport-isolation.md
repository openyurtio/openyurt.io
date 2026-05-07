---
title: NodePort端口监听隔离
---

## 背景介绍

这个功能源于社区的需求，详细讨论可以在 issue [#1183](https://github.com/openyurtio/openyurt/issues/1183)中找到。

> In edge network scenarios, service isolation is required. For example, when using a NodePort type service, it should only serve specific node pools.

## 架构与原理

引入了一个名为 nodeportisolation 的新过滤器来处理此功能，并为 NodePort Service添加了一个新的注解 `nodeport.openyurt.io/listen`，以在 YurtHub 中触发 nodeportisolation 过滤器。
nodeportisolation 过滤器根据服务中的 `nodeport.openyurt.io/listen` 注解设置重新组装 kube-proxy list/watch 服务请求的response。

有关数据过滤框架详细设计的更多信息，请参考[resource-access-control]（.../resource-access-control/resource-access-control.md）。

## 开启方法

以下是为 NodePort/LoadBalancer 服务引入 nodeport.openyurt.io/listen 注解的说明：

- key：nodeport.openyurt.io/listen
- value：用 ',' 分隔的节点池名称列表

  - `foo`：使指定的 NodePort Service在名为 foo 的节点池中的节点上监听。
  - `-foo`：禁止指定的 NodePort Service在名为 foo 的节点池中的节点上监听。
  - `*`：使指定的 NodePort Service在所有节点池中的节点上监听。
  - 如果配置中有重复的节点池名称，将使用第一个配置。
  - 如果未配置节点池名称，将在这些未配置的节点池中的节点上禁用这个 NodePort Service 监听。
  - 孤儿节点（不位于节点池中）将与原生 Kubernetes 相同对待，因此 NodePort Service 将在孤儿节点上监听。

- 注解设置示例：

```
  - `nodeport.openyurt.io/listen=foo, bar`：在 `foo` 和 `bar` 节点池中的节点上启用这个 NodePort Service监听。
  - `nodeport.openyurt.io/listen=foo, *`：在所有节点池中的节点上启用这个 NodePort Service监听。
  - `nodeport.openyurt.io/listen=-foo, -bar`：在所有节点池中的节点上禁用这个 NodePort Service监听。
  - `nodeport.openyurt.io/listen=-foo, *`：仅在 `foo` 节点池中的节点上禁用这个 NodePort Service监听。
  - `nodeport.openyurt.io/listen=foo,-foo`：在 `foo` 节点池中的节点上启用这个 NodePort Service监听。
  - `nodeport.openyurt.io/listen=-foo`：在所有节点池中的节点上禁用这个 NodePort Service监听（包括 `foo` 节点池）。
```
