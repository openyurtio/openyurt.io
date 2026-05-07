---
title: 删除节点池
---

**OpenYurt NodePool 资源的最新版本为 `apps.openyurt.io/v1beta2`。**

**字段与行为说明请以最新的 [API 参考](../../reference/api_reference.md) 为准。**

## 约束说明

当节点池内**仍存在节点**时，**不能**删除该节点池。只有当集群中已没有任何仍属于该池的 Node 资源时，删除才会被允许。

### 节点上的节点池标签不可变更

节点上的绑定标签 `apps.openyurt.io/nodepool` **由 OpenYurt 管理**。节点与节点池建立关联后，**不要**指望通过删除或修改该标签来迁移节点或“解绑”：

- 该标签**不支持**手动删除。
- 该标签**不支持**手动修改（例如改为指向其他节点池）。

使用 `kubectl label` 去清空或改写该标签不是受支持的清空节点池方式。若要减少池中节点，唯一受支持的做法是让对应的 **Node 对象从集群中移除**（见下文）。

## 确认节点池内是否还有节点

通过标签查看仍属于该节点池的节点：

```shell
kubectl get nodes -l apps.openyurt.io/nodepool=<节点池名称>
```

也可查看 NodePool 的 `status`：

```shell
kubectl get nodepool <节点池名称> -o yaml
```

若 `status.nodes` 非空，说明池中仍有节点，此时不能删除该 NodePool。

## 删除节点池前：将节点从集群中移除

要删除某个 NodePool，当前仍属于该池的每个节点都必须**不再作为 Node 存在于集群中**。在按规范完成驱逐等工作后，从 API 中删除对应 Node（例如执行 `kubectl delete node <节点名称>`），具体步骤请遵循你们下线节点的运维规范。

若使用 `yurtadm`，典型流程可参考 [移除节点](../node-management/remove-a-node.md)。

待这些 Node 对象均已删除后，再次确认池中已无成员：

```shell
kubectl get nodes -l apps.openyurt.io/nodepool=<节点池名称>
```

应无节点输出。

## 删除 NodePool

确认节点池内已无节点后，删除资源：

```shell
kubectl delete nodepool <节点池名称>
```

也可使用简写 `np`：

```shell
kubectl delete np <节点池名称>
```
