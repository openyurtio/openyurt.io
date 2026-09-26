---
title: Convert a worker node to an edge node
---

Starting with OpenYurt v1.7.0, an existing Kubernetes worker node can be converted into an edge node by adding it to an `Edge` node pool. The `yurt-node-conversion-controller` in `yurt-manager` watches the node pool label and runs a `node-servant` Job that installs YurtHub on the node, so `yurtadm` is not required for this flow.

## Prerequisites

- `yurt-manager` v1.7.0 or later is installed. The `yurt-node-conversion-controller` ships with it.
- An `Edge` node pool exists. See [Create a node pool](../node-pool-management/create-a-node-pool.md).
- The target node is a worker already registered in the cluster.

## Convert a node

Label the node with the target `Edge` pool. This is the only label you set on the node; the controller manages the rest.

```shell
$ kubectl label node <node> apps.openyurt.io/nodepool=<edge-pool>
```

> The pool must be `type: Edge`. Labeling a node into a `Cloud` pool associates it with the pool but does not start a conversion.

> Do not set `openyurt.io/is-edge-worker` manually. The controller writes that label once the conversion succeeds. Setting it by hand can make the controller skip the conversion or start a revert.

After the label is added, the controller:

1. Cordons the node (`spec.unschedulable: true`) for the duration of the conversion.
2. Creates a Job named `node-servant-conversion-<node>` in the `kube-system` namespace (`backoffLimit: 3`) that installs YurtHub on the host.
3. On success, sets `openyurt.io/is-edge-worker=true`, uncordons the node, and records the outcome in the `YurtNodeConversionFailed` node condition.

## Verify the conversion

The result is reported through the `YurtNodeConversionFailed` node condition:

| State | `status` | `reason` |
| --- | --- | --- |
| In progress | `False` | `Converting` |
| Success | `False` | `Converted` |
| Failure | `True` | `ConvertFailed` |

Check the condition:

```shell
$ kubectl get node <node> -o jsonpath='{range .status.conditions[?(@.type=="YurtNodeConversionFailed")]}{.status}{" "}{.reason}{"\n"}{end}'
False Converted
```

A converted node also carries the `is-edge-worker` label and is schedulable again:

```shell
$ kubectl get node <node> -o jsonpath='{.metadata.labels.openyurt\.io/is-edge-worker}{"\n"}'
true
```

## Troubleshoot a failed conversion

If the Job fails, the controller keeps the node cordoned and sets `YurtNodeConversionFailed` to `status: "True"`, `reason: ConvertFailed`. The failure message is copied from the Job.

Inspect the Job and its logs:

```shell
$ kubectl get job node-servant-conversion-<node> -n kube-system
$ kubectl logs job/node-servant-conversion-<node> -n kube-system
```

Finished Jobs are kept for two hours (`ttlSecondsAfterFinished: 7200`) so the logs stay available. After fixing the underlying cause, delete the failed Job. The label is still present, so the controller starts a new conversion round:

```shell
$ kubectl delete job node-servant-conversion-<node> -n kube-system
```
