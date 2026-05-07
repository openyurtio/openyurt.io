---
title: 编辑节点池
---

**OpenYurt NodePool 资源的最新版本为 `apps.openyurt.io/v1beta2`。**

**字段说明请参阅最新的 [API 参考](../../reference/api_reference.md)。**

## 概述

编辑 NodePool 会更新其 `spec` 中**允许修改**的字段（以及可选地更新 NodePool 对象 `metadata` 上的标签或注解）。部分 `spec` 字段在创建后不可变更，见下文 [创建后不可修改的字段](#创建后不可修改的字段)。nodepool 控制器会将允许下发的配置**同步到池内节点**：例如在 NodePool `spec` 中定义的标签、注解和污点，会下发到属于该池的节点。

本文说明如何使用 `kubectl` 修改 NodePool。

## 创建后不可修改的字段

以下 `spec` 字段在**创建时确定**，创建后**不支持**再编辑。若尝试修改，API 服务器或准入控制会拒绝该更新：

- `spec.type`（`Cloud` 或 `Edge`）
- `spec.hostNetwork`
- `spec.interConnectivity`

若需要不同的取值，请**新建 NodePool** 并在创建时写入目标配置，再按运维流程迁移节点（见 [创建节点池](./create-a-node-pool.md)、[接入节点](../node-management/join-a-node.md)）。

## 开始之前

- 需已安装并运行 [Yurt-Manager](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components)（其中包含 nodepool 控制器）。
- 需要具备在 `apps.openyurt.io` API 组下 **更新** `nodepools` 的 RBAC 权限。

## 查看当前 NodePool

```shell
kubectl get nodepool <NodePoolName>
kubectl get np <NodePoolName> -o yaml
```

支持使用短名称 `np`。

## 编辑 NodePool

### 方式一：`kubectl edit`（交互式）

在编辑器中打开集群中的实时对象，保存退出后即向 API 提交变更。

```shell
kubectl edit nodepool <NodePoolName>
```

若校验或准入拒绝该变更，编辑器通常会重新打开并显示错误信息。

### 方式二：`kubectl apply`（声明式）

维护 YAML 清单文件，修改所需字段后执行：

```shell
kubectl apply -f nodepool.yaml
```

与操作其他 Kubernetes 对象一样，注意 `apiVersion`、`kind`、`metadata.name` 以及并发修改时的 `resourceVersion`，避免意外覆盖他人变更。

### 方式三：`kubectl patch`（局部更新）

适合脚本或小范围修改。示例：在节点模板中新增或更新一个标签：

```shell
kubectl patch nodepool <NodePoolName> --type merge -p '{"spec":{"labels":{"apps.openyurt.io/example":"updated"}}}'
```

请勿通过 patch（或其它更新方式）修改 [创建后不可修改的字段](#创建后不可修改的字段) 中所列项。

## 常见可修改项

各字段含义见 [创建节点池](./create-a-node-pool.md)。创建后通常仍可调整的包括：

| 类别 | 示例字段 |
|------|----------|
| 节点模板 | `spec.annotations`、`spec.labels`、`spec.taints` |
| Hub Leader | `spec.enableLeaderElection`、`spec.leaderElectionStrategy`、`spec.leaderReplicas`、`spec.leaderNodeLabelSelector`、`spec.poolScopeMetadata` |

更新 NodePool 上的标签、注解或污点后，请等待控制器完成同步，必要时在成员节点上核对：

```shell
kubectl get node <NodeName> -o yaml
```

## 限制与相关说明

- **不可变的 `spec` 字段**：`spec.type`、`spec.hostNetwork`、`spec.interConnectivity` 在节点池创建后不可修改，详见 [创建后不可修改的字段](#创建后不可修改的字段)。
- **资源名称**：不能通过修改 `metadata.name` 为 NodePool「改名」。若需使用新名称，应新建 NodePool 并按流程关联节点（见 [接入节点](../node-management/join-a-node.md)）。
- **节点归属**：节点属于哪个池由节点标签及控制器行为决定，不能仅靠任意编辑 NodePool 来「迁移」节点。节点上的绑定标签 `apps.openyurt.io/nodepool` 由 OpenYurt 管理，请勿依赖手工修改来移动节点，详见 [删除节点池](./delete-a-node-pool.md)。
- **删除节点池**：见 [删除节点池](./delete-a-node-pool.md)。

## 编辑后验证

```shell
kubectl get nodepool <NodePoolName> -o yaml
kubectl get nodepools
```

若启用了 Leader 选举，可查看 `status.leaderEndpoints` 以及 `kubectl get nodepools` 的扩展列，说明见 [创建节点池](./create-a-node-pool.md)。
