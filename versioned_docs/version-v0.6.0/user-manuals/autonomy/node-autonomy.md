---
title: Node Autonomy
---

## 1. 背景说明

节点自治使得在云边网络不稳定的情况下，边缘业务可以稳定工作。

在 OpenYurt 中，用户可以通过使用节点自治功能，保证在云边网络断连时，边缘节点上的业务容器可以持续工作而不被重新调度，或者在容器重启、边缘节点重启时，业务容器可以自动恢复。



## 2. 功能使用

在 OpenYurt 中，用户可以通过以下方式开启/关闭节点自治功能。



- **手动修改节点 Annotation**

用户可以通过给 Node 添加 Annotation，开启节点自治功能。

```bash
# node1 开启节点自治
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true
```

通过以下两种方式的命令，关闭节点自治。

```bash
# 通过删除 annotation 关闭节点自治
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy-

# 通过修改 node.beta.openyurt.io/autonomy 值为 false 关闭节点自治
kubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false
```



- **使用 Yurtctl 开启/关闭节点自治**

用户本地编译 Yurtctl 可执行文件后，可以使用 Yurtctl 开启节点自治。

```bash
# node1, node2 开启节点自治
yurtctl markautonomous -a node1,node2

# 所有边缘节点开启节点自治
yurtctl markautonomous
```



## 3. 注意事项

- 边缘节点开启节点自治功能后，无论是云边网络断连导致的节点NotReady，还是本身节点故障导致的节点NotReady，边缘节点上的业务Pod都不会被驱逐。
- 云端节点不建议开启节点自治。如果云端节点开启了节点自治，节点为非 Ready 状态时，其业务容器不会被驱逐并重新调度。

- 使用 Yurtctl convert 命令转换集群时，默认会将所有的边缘节点开启节点自治。