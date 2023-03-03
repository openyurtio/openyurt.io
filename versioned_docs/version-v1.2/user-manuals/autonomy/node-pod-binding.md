---
title: pod node binding
---

## Background introduction

Some edge services require that Pods not be evicted in the event of a node failure, but that a specific Pod be bound to a specific node. For example, the application of image processing needs to be bound to the machine corresponding to the camera, and the application of intelligent transportation needs to be fixed to the machine at a certain intersection.

## How to use 

Users can enable/disable binding feature by following steps.

- **Add Binding Annotation to Node**

Users can add binding annotation to nodes to enable the Edge Binding feature, and all Pods on the node will be bound to that node and will not be affected by the cloud-edge network.

```bash
# enable Edge Binding on node1
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true
```

There're following two ways to disable the Edge Binding of node.

```bash
# remove the binding annotation
kubectl annotate nodes node1 node.beta.openyurt.io/autonomy-
# set the value of binding annotation as false
kubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false
```

- **Add Binding Annotation to Pod**

Users can also by adding the Annotation to the Pod to enable binding (or modify the `Deployment.Spec.Template.Annotations` field, all Pods will be affected), the Pod will be bound to the node, not affected by cloud edge network.

```bash
# pod1 enable Binding
kubectl annotate pods pod1 apps.openyurt.io/binding=true
```

There're following two ways to disable Binding.

```bash
# remove the binding annotation
kubectl annotate pods pod1 apps.openyurt.io/binding-
# set the value of binding annotation as false
kubectl annotate --overwrite pods pod1 apps.openyurt.io/binding=false
```

## Note

- Edge Node After the node binding function is enabled,  pods on edge nodes will not be expelled, no matter the node NotReady caused by cloud edge network disconnection or node fault.
- Node binding is not recommended for cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady.
- After OpenYurt version 1.2.0, if a Pool-Coordinator is enabled, edge nodes can maintain the Ready state even when the cloud edge network is disconnected using the heartbeat proxy mechanism. In this case, the node binding capability ensures that NotReady service Pods will not be expelled even if the node fails.