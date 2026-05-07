---
title: Delete a node pool
---

**The latest version of OpenYurt NodePool resource is `apps.openyurt.io/v1beta2`.**

**Please refer to the latest [API Reference](../../reference/api_reference.md) for details.**

## Constraints

You **cannot** delete a NodePool while it still contains one or more nodes. The control plane rejects the delete request until no Node in the cluster is still a member of that pool.

### Node pool label on nodes is immutable

The binding label `apps.openyurt.io/nodepool` on a Node is **managed by OpenYurt**. After a node is associated with a pool, you **must not** rely on deleting or changing this label to move or “unbind” the node:

- The label **cannot** be removed manually.
- The label **cannot** be modified manually (for example, to point the node at another pool).

Trying to clear or edit it with `kubectl label` is not a supported way to empty a NodePool. The only supported way to reduce pool membership is for the corresponding **Node objects to leave the cluster** (see below).

## Check whether the pool has nodes

List nodes that belong to the pool by label:

```shell
kubectl get nodes -l apps.openyurt.io/nodepool=<NodePoolName>
```

You can also inspect the NodePool status:

```shell
kubectl get nodepool <NodePoolName> -o yaml
```

If `status.nodes` is non-empty, the pool still has members and cannot be deleted.

## Before deleting the NodePool: remove nodes from the cluster

To delete a NodePool, every node that currently belongs to that pool must **no longer exist as a Node** in the cluster. In practice, after you have drained workloads as appropriate, remove each such node from the API (for example `kubectl delete node <NodeName>`), following your operational procedure for decommissioning nodes.

For a typical flow using `yurtadm`, see [Remove a node](../node-management/remove-a-node.md).

After those Node objects are gone, confirm the pool has no members:

```shell
kubectl get nodes -l apps.openyurt.io/nodepool=<NodePoolName>
```

The output should list no nodes.

## Delete the NodePool

When the pool has no nodes, delete the resource:

```shell
kubectl delete nodepool <NodePoolName>
```

The short name `np` is also supported:

```shell
kubectl delete np <NodePoolName>
```
