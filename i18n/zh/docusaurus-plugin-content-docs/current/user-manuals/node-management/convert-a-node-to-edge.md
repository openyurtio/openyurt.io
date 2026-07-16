---
title: 将工作节点转换为边缘节点
---

从 OpenYurt v1.7.0 开始，可以通过把一个已有的 Kubernetes 工作节点加入到 `Edge` 类型的节点池，将其转换为边缘节点。`yurt-manager` 中的 `yurt-node-conversion-controller` 会监听节点池标签，并运行一个 `node-servant` Job 在节点上安装 YurtHub，因此该流程不需要使用 `yurtadm`。

## 前置条件

- 已安装 `yurt-manager` v1.7.0 或更高版本，`yurt-node-conversion-controller` 随其一起提供。
- 已存在一个 `Edge` 类型的节点池。参见[创建节点池](../node-pool-management/create-a-node-pool.md)。
- 目标节点是集群中已注册的工作节点。

## 转换节点

给节点打上目标 `Edge` 节点池的标签。你只需在节点上设置这一个标签，其余由控制器管理。

```shell
$ kubectl label node <node> apps.openyurt.io/nodepool=<edge-pool>
```

> 节点池必须是 `type: Edge`。将节点加入 `Cloud` 节点池只会建立关联，并不会触发转换。

> 不要手动设置 `openyurt.io/is-edge-worker`。该标签由控制器在转换成功后写入，手动设置可能导致控制器跳过转换或触发回退（revert）。

标签添加后，控制器会：

1. 在转换期间将节点标记为不可调度（`spec.unschedulable: true`）。
2. 在 `kube-system` 命名空间创建名为 `node-servant-conversion-<node>` 的 Job（`backoffLimit: 3`），由它在节点上安装 YurtHub。
3. 转换成功后设置 `openyurt.io/is-edge-worker=true`，恢复节点可调度，并将结果记录到 `YurtNodeConversionFailed` 节点状态条件中。

## 验证转换结果

转换结果通过 `YurtNodeConversionFailed` 节点状态条件反馈：

| 状态 | `status` | `reason` |
| --- | --- | --- |
| 进行中 | `False` | `Converting` |
| 成功 | `False` | `Converted` |
| 失败 | `True` | `ConvertFailed` |

查看该条件：

```shell
$ kubectl get node <node> -o jsonpath='{range .status.conditions[?(@.type=="YurtNodeConversionFailed")]}{.status}{" "}{.reason}{"\n"}{end}'
False Converted
```

转换完成的节点还会带有 `is-edge-worker` 标签，并恢复为可调度状态：

```shell
$ kubectl get node <node> -o jsonpath='{.metadata.labels.openyurt\.io/is-edge-worker}{"\n"}'
true
```

## 排查失败的转换

如果 Job 失败，控制器会保持节点不可调度，并把 `YurtNodeConversionFailed` 设为 `status: "True"`、`reason: ConvertFailed`，失败信息会从 Job 中复制过来。

查看 Job 及其日志：

```shell
$ kubectl get job node-servant-conversion-<node> -n kube-system
$ kubectl logs job/node-servant-conversion-<node> -n kube-system
```

已结束的 Job 会保留两小时（`ttlSecondsAfterFinished: 7200`），以便查看日志。定位并修复根因后，删除失败的 Job。由于标签仍然存在，控制器会重新发起一轮转换：

```shell
$ kubectl delete job node-servant-conversion-<node> -n kube-system
```
