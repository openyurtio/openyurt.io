---
title: 应用管理概述
---

在云边协同环境中，OpenYurt 对原生 Kubernetes 工作负载类型进行了扩展，以应对异构节点池、不稳定云边带宽以及分布式边缘节点上的细粒度升级控制等挑战。

## YurtAppSet

YurtAppSet 支持基于 NodePool 的单元化应用部署。它不会在所有节点池中使用统一配置，而是为每个匹配的 NodePool 创建子工作负载（Deployment 或 StatefulSet），并通过 `workloadTweaks` 实现按池覆盖配置，如副本数、容器镜像和任意字段补丁。

详细使用方法请参考 [YurtAppSet](./yurt-app-set.md)。

## YurtStaticSet

YurtStaticSet 接管了静态 Pod 的管理工作。原生 Kubernetes 中，静态 Pod 需要在每个节点上通过 `/etc/kubernetes/manifests` 目录下的配置文件手动创建和升级。YurtStaticSet 提供集中化的模板分发，并支持 AdvancedRollingUpdate 和 OTA 两种升级策略。

详细使用方法请参考 [YurtStaticSet](./yurt-static-set.md)。

## DaemonSet 升级模型

OpenYurt 通过 `daemonPodUpdater` 控制器为原生 DaemonSet 扩展了两种升级模式：

- **AdvancedRollingUpdate** — 滚动升级时自动跳过 `Not-Ready` 节点，节点恢复后继续完成升级。
- **OTA** — 在 Pod 状态中设置 `PodNeedUpgrade` 条件，通过 YurtHub 的 REST API 实现按需按 Pod 升级。

要启用这两种模式之一，需在 DaemonSet 上添加注解 `apps.openyurt.io/update-strategy`，并将 `.spec.updateStrategy.type` 设为 `OnDelete`。

详细使用方法请参考 [DaemonSet 升级模型](./daemon-pod-updater.md)。
