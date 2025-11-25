---
title: Configure node autonomy
---

In a cloud-edge environment, network disconnections between the cloud and edge are common. OpenYurt provides multiple levels of node autonomy capabilities to ensure that edge services remain stable and operational during such disconnections.

This document describes three key autonomy features:

- [1. Self-Healing from Restarts During Disconnection](#1-self-healing-from-restarts-during-disconnection)
- [2. Preventing Pod Eviction During Disconnection](#2-preventing-pod-eviction-during-disconnection)
  - [2.1 Per-Node Autonomy Duration](#21-per-node-autonomy-duration)
  - [2.2 Heartbeat Delegation (via Yurt-Coordinator)](#22-heartbeat-delegation-via-yurt-coordinator)

## 1. Self-Healing from Restarts During Disconnection

**Background:** In native Kubernetes, if an edge node or its `kubelet` component restarts while disconnected from the cloud, it cannot recover the running pods because their definitions are stored in memory and cannot be fetched from the API server.

**OpenYurt's Solution:** OpenYurt's core edge component, **YurtHub**, solves this problem. YurtHub acts as a local proxy and cache for all API server requests on the node. When the node is online, it caches necessary data (like Pod specs). If the node or `kubelet` restarts during a network disconnection, `kubelet` can retrieve the required data from YurtHub's local cache, enabling it to successfully recover and restart the business containers.

**How to Use:**
This self-healing capability is enabled by default on any edge node where YurtHub is running. Nodes joined to the cluster using `yurtadm join` will have YurtHub installed automatically.

## 2. Preventing Pod Eviction During Disconnection

**Background:** Native Kubernetes will evict (delete and reschedule) pods from a node if the `kubelet` fails to report its heartbeat for a certain period (e.g., 5 minutes). In edge scenarios, this is undesirable as network disconnections are common and do not necessarily mean the node is faulty.

OpenYurt provides two mechanisms to prevent unwanted pod evictions.

### 2.1 Per-Node Autonomy Duration

This is the recommended approach for most edge nodes. It allows you to configure a specific eviction timeout for each edge node, overriding the cluster's global timeout.

**How to Use:**
To enable this feature, add the `node.openyurt.io/autonomy-duration` annotation to your edge node.

```bash
# First, ensure the node is labeled as an edge node
kubectl label node my-edge-node openyurt.io/is-edge-worker=true

# Recommended: Set a 24-hour autonomy duration
# This means the control plane will wait 24 hours before evicting pods from this node.
kubectl annotate node my-edge-node node.openyurt.io/autonomy-duration="24h"

# To achieve indefinite autonomy (pods will never be evicted due to heartbeat loss)
kubectl annotate node my-edge-node node.openyurt.io/autonomy-duration="0"
```

The duration format can be found [here](https://pkg.go.dev/maze.io/x/duration#ParseDuration).

### 2.2 Heartbeat Delegation (via Yurt-Coordinator)

For more advanced scenarios, OpenYurt provides a heartbeat delegation mechanism using the `Yurt-Coordinator` component. When an edge node's connection to the cloud is lost but its local network (within the same NodePool) is stable, another node (the leader YurtHub) can send heartbeat signals to the cloud on its behalf.

This keeps the node in a `Ready` state in the cloud, thus preventing pod evictions and stopping the scheduler from assigning new pods to this disconnected node by adding a special taint.

**How to Use:**
This is an advanced feature that requires careful setup:
- Ensure your OpenYurt version is 1.2.0 or newer.
- Ensure a `Yurt-Coordinator` instance is running in each NodePool.
- Start the YurtHub component with the `--enable-coordinator=true` flag.
