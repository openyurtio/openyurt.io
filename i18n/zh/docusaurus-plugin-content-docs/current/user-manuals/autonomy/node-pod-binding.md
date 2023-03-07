---
title: 业务与节点绑定
---

## 使用场景

一些边缘业务要求在节点故障时也不要对Pod进行驱逐，它们需要将特定的Pod绑定到特定的节点上。比如图像处理的应用需要绑定到摄像头对应的机器上，智慧交通的应用需要固定在某个路口的机器上。

## 如何使用

在 OpenYurt 中，用户可以通过以下方式开启/关闭绑定功能。

1. **修改节点 Annotation**

用户可以通过给 Node 添加 Annotation，开启绑定功能，节点上的所有Pod都将绑定到该节点上，不会受云边网络的影响。

```bash
# node1 开启节点绑定
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true
```

通过以下两种方式的命令，关闭节点绑定。

```bash
# 通过删除 annotation 关闭绑定功能
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy-

# 通过修改 node.beta.openyurt.io/autonomy 值为 false 关闭节点绑定功能
kubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false
```

2. **修改Pod Annotation**

用户也可以通过给 Pod 添加 Annotation，开启绑定功能，该Pod将绑定到节点上，不会受云边网络的影响（也可以通过修改Deployment里的`Deployment.Spec.Template.Annotations`字段，使所有Pod都开启绑定）。

```bash
# pod1 开启绑定
kubectl annotate pods pod1 apps.openyurt.io/binding=true
```

通过以下两种方式的命令，关闭绑定。

```bash
# 通过删除 annotation 关闭绑定
kubectl annotate pods pod1 apps.openyurt.io/binding-

# 通过修改 node.beta.openyurt.io/autonomy 值为 false 关闭绑定
kubectl annotate --overwrite pods pod1 apps.openyurt.io/binding=false
```

## 注意事项

- 边缘节点开启节点绑定功能后，无论是云边网络断连导致的节点NotReady，还是本身节点故障导致的节点NotReady，边缘节点上的业务Pod都不会被驱逐。
- 云端节点不建议开启节点绑定。如果云端节点开启了绑定，节点为非 Ready 状态时，其业务容器不会被驱逐并重新调度。
- 在OpenYurt 1.2.0 版本以后，如果开启Pool-Coordinator，边缘节点通过心跳代理机制可以在云边网络断连的情况下仍保持Ready状态。此时节点绑定能力将保障即使节点故障导致NotReady业务Pod也不会被驱逐。