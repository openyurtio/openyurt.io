---
title: Node Autonomy
---

## 1. Background

The capability of Node Autonomy ensures that pods can run stably on edge nodes even when the network between cloud and edge jitters.

With Node Autonomy of OpenYurt, when cloud-edge network breaks, pods running on edge nodes can still run as they are instead of being rescheduled, and in addition they can successfully recover when the edge node restart.

## 2. How to Use

Users can enable/disable Node Autonomy feature by following steps.

- **Add Autonomy Annotation Manually**

Users can add autonomy annotation to nodes to enable the Node Autonomy feature.

```bash
# enable Node Autonomy on node1
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true
```

There're following two ways to disable the Node Autonomy of node.

```bash
# remove the autonomy annotation
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy-

# set the value of autonomy annotation as false
kubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false
```

- **Enable/Disable Node Autonomy with Yurtctl**

After compiling the Yurtctl, users can use it to enable/disable the Node Autonomy feature.

```bash
# enable autonomy on node1, node2
yurtctl markautonomous -a node1,node2

# enable autonomy on all edge nodes
yurtctl markautonomous
```

## 3. Note

- If enable the Node Autonomy feature, pods running on the node will never be evicted, no matter the NotReady is caused by disconnection between cloud and edge or by the breakdown of node itself.
- It is not recommended to enable the Node Autonomy feature on cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady.
