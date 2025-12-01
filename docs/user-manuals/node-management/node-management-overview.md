---
title: Node management overview
---

## Node Management Overview

Node management in OpenYurt governs the full lifecycle of cloud and edge workers—from onboarding and resilience configuration to decommissioning. Its primary objective is to maintain workload reliability across unstable cloud-edge networks while supporting scalable operations. The following summarizes the three key procedures.

### Joining Nodes

yurtadm join is used to bootstrap new machines or convert existing Kubernetes workers to run YurtHub and integrate with the OpenYurt control plane. See [`join-a-node.md`](./join-a-node.md) for prerequisites, command options (including --node-type), and CNI reuse considerations.

### Configuring Node Autonomy

Once joined, nodes should be configured with an autonomy window to avoid unnecessary evictions during cloud-edge disconnections. Refer to [`configure-node-autonomy.md`](./configure-node-autonomy.md) for applying the `node.openyurt.io/autonomy-duration` annotation and for guidance on enabling Yurt-Coordinator heartbeat delegation.

### Removing Nodes

To decommission a machine, follow the procedure in [`remove-a-node.md`](./remove-a-node.md): drain the node, delete its Kubernetes object, then run yurtadm reset and clean up CNI artifacts. This ensures consistent cluster metadata and prevents residual workloads from persisting.