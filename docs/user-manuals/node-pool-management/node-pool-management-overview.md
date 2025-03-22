---
title: Node pool management overview
---

## Background
A NodePool in OpenYurt is a logical grouping of nodes within a Kubernetes cluster that share similar configuration and characteristics. In OpenYurt, NodePools are used to manage and organize edge nodes that run on devices with similar hardware capabilities or network configurations. This feature provides a mechanism to define the nodes that should participate in a particular workload or function in an edge environment.

Since v1beta2, OpenYurt Nodepools supports electing hub leaders within the Nodepool. When enabled, a leader within the Nodepool will redistribute list/watch events to other hubs in the same nodepool. This reduces the number of requests going towards the Kubernetes API server and allows an increase in number of edge nodes deployed per cluster. Please refer to [create a node pool](./create-a-node-pool.md) for further details. 
