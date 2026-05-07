---
title: Edit a node pool
---

**The latest version of OpenYurt NodePool resource is `apps.openyurt.io/v1beta2`.**

**Please refer to the latest [API Reference](../../reference/api_reference.md) for details.**

## Overview

Editing a NodePool updates **supported** fields in its `spec` (and optionally `metadata` labels or annotations on the NodePool object itself). Some `spec` fields are immutable after creation; see [Fields that cannot be updated](#fields-that-cannot-be-updated). The nodepool controller reconciles allowed fields to **member nodes**: for example, labels, annotations, and taints defined in the NodePool `spec` are propagated to nodes that belong to the pool.

This document describes how to change a NodePool with `kubectl`.

## Fields that cannot be updated

The following `spec` fields are **fixed at creation** and **must not** be changed afterward. The API server or admission control will reject updates that modify them:

- `spec.type` (`Cloud` or `Edge`)
- `spec.hostNetwork`
- `spec.interConnectivity`

If you need a different value for any of these, **create a new NodePool** with the desired settings and move nodes according to your operational procedure (see [Create a node pool](./create-a-node-pool.md) and [Join a node](../node-management/join-a-node.md)).

## Before you begin

- [Yurt-Manager](https://openyurt.io/docs/installation/manually-setup/) (which includes the nodepool controller) must be installed and running.
- You need RBAC permission to update `nodepools` in the `apps.openyurt.io` API group.

## View the current NodePool

```shell
kubectl get nodepool <NodePoolName>
kubectl get np <NodePoolName> -o yaml
```

The short name `np` is supported.

## Edit a NodePool

### Option 1: `kubectl edit` (interactive)

Opens the live object in your editor. After you save and exit, the update is submitted to the API server.

```shell
kubectl edit nodepool <NodePoolName>
```

If validation or admission rejects the change, the editor usually reopens with an error message.

### Option 2: `kubectl apply` (declarative)

Maintain a manifest file, change the fields you need, then apply:

```shell
kubectl apply -f nodepool.yaml
```

Use the same `apiVersion`, `kind`, `metadata.name`, and `resourceVersion` behavior as for any Kubernetes object: avoid overwriting concurrent changes unintentionally when editing YAML by hand.

### Option 3: `kubectl patch` (targeted updates)

Useful for small or scripted changes. Example: add or replace a label in the node template:

```shell
kubectl patch nodepool <NodePoolName> --type merge -p '{"spec":{"labels":{"apps.openyurt.io/example":"updated"}}}'
```

Do not use patch (or any update) to change the immutable fields in [Fields that cannot be updated](#fields-that-cannot-be-updated).

## Common fields you can change

Semantics of these fields are described in [Create a node pool](./create-a-node-pool.md). Typical updates include:

| Area | Examples |
|------|----------|
| Node template | `spec.annotations`, `spec.labels`, `spec.taints` |
| Hub leader | `spec.enableLeaderElection`, `spec.leaderElectionStrategy`, `spec.leaderReplicas`, `spec.leaderNodeLabelSelector`, `spec.poolScopeMetadata` |

After you update labels, annotations, or taints on the NodePool, allow time for reconciliation and verify on a member node if needed:

```shell
kubectl get node <NodeName> -o yaml
```

## Limitations and related topics

- **Immutable `spec` fields**: `spec.type`, `spec.hostNetwork`, and `spec.interConnectivity` cannot be changed after the NodePool is created. See [Fields that cannot be updated](#fields-that-cannot-be-updated).
- **Resource name**: You cannot rename a NodePool by editing `metadata.name`. To use a different pool name, create a new NodePool and follow your procedure for associating nodes (see [Join a node](../node-management/join-a-node.md)).
- **Node membership**: Which nodes belong to a pool is driven by node labels and controller behavior, not by arbitrary edits to the NodePool alone. The binding label `apps.openyurt.io/nodepool` on a Node is managed by OpenYurt; do not rely on manually changing it to move nodes. See [Delete a node pool](./delete-a-node-pool.md).
- **Removing a pool**: See [Delete a node pool](./delete-a-node-pool.md).

## Verify after editing

```shell
kubectl get nodepool <NodePoolName> -o yaml
kubectl get nodepools
```

For pools with leader election enabled, inspect `status.leaderEndpoints` and the extra columns from `kubectl get nodepools` as described in [Create a node pool](./create-a-node-pool.md).
