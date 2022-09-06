---
title: YurtControllerManager
---




## 1.Introduction

As an extension of Kube Controller Manager, Yurt Controller Manager is used to keep other components functioning properly and provide node autonomy feature.



### 1.1 Taking Over Node Life Cycle Management

In vanilla Kubernetes, pods on node in NotReady or Unknown state will be evicted and rescheduled.

In edge computing, the network connection between cloud and edge is unstable, the edge nodes could lose connection to the cloud frequently,
which makes pod eviction and rescheduling happen frequently on edge nodes. To deal with that, OpenYurt provides node autonomy feature.
For node with node autonomy feature enabled, control plane on the cloud will not evict pods on the node, which ensure the workloads will not be disrupted.

Yurt controller manager takes over the work of nodelicycle controller in Kube-controller-manager, constantly monitors the state of nodes in the cluster.
For node in NotReady or Unknown state, if the node autonomy feature is enabled, the pods are prevented from being evicted by removing the "node.kubernetes.io/unscheduled" taint on the node.



**Notice: When installing Yurt Controller Manager, the nodelicycle controller in kube-controller-manager need to be disabled**



### 1.2 Certificates Approval for OpenYurt Components

The OpenYurt components Yurttunnel Server and Yurthub are the server side to Yurttunnel Agent and pods respectively.
Due to the strict approval policy for CSR(Certificate Signing Request) in Kubernetes,
the CSRs created by Yurttunnel Server and Yurthub will not auto-approve by kube-controller-manager.
Therefore, Yurt Controller Manager undertakes the work of approving the CSRs of Yurttunnel Server and Yurthub.



