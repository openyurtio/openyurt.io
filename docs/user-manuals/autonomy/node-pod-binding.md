---
title: pod node binding
---

## Background introduction

Some edge services require that Pods not be evicted in the event of a node failure, but that a specific Pod be bound to a specific node. For example, the application of image processing needs to be bound to the machine corresponding to the camera, and the application of intelligent transportation needs to be fixed to the machine at a certain intersection.

## How to use 

Users can enable/disable binding feature by following steps.

- **Add Binding Annotation to Node**

Users can add binding annotation: `apps.openyurt.io/binding=true`(node.beta.openyurt.io/autonomy=true is deprecated) to nodes to enable the Edge Binding feature, and all Pods on the node will be bound to that node and will not be affected by the cloud-edge network.

```bash
# enable Edge Binding on node1
kubectl annotate nodes node1 apps.openyurt.io/binding=true
```

There're following two ways to disable the Edge Binding of node.

```bash
# remove the binding annotation
kubectl annotate nodes node1 apps.openyurt.io/binding-
# set the value of binding annotation as false
kubectl annotate --overwrite nodes node1 apps.openyurt.io/binding=false
```

## Note

- Edge Node After the node binding function is enabled,  pods on edge nodes will not be evicted, no matter the node NotReady caused by cloud edge network disconnection or node fault.
- Node binding is not recommended for cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady.
- After OpenYurt version 1.2.0, if a Pool-Coordinator is enabled, edge nodes can maintain the Ready state even when the cloud edge network is disconnected using the heartbeat proxy mechanism. In this case, the node binding capability ensures that NotReady service Pods will not be evicted even if the node fails.