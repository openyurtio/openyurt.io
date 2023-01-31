---
title: Architecture
---

Below is the architecture of OpenYurt.

![img](../../../static/img/docs/core-concepts/arch.png)

The blue box represents the original Kubernetes components, and the orange box represents the OpenYurt components.

### Node category

- Cloud Node：The nodes running in cloud side, connecting to master with cloud intranet. Centralized control plane components are deployed in cloud side. The nodes are labeled with `openyurt.io/is-edge-worker: false`.
- Edge Node：The nodes running in edge side, connecting to master with public internet. They are usually close to edge production environment, and thus contains the mainly edge workloads. The nodes are labeled with `openyurt.io/is-edge-worker: true`.

### Traffic from edge to cloud kube-apiserver

YurtHub manages the network traffic from edge to cloud kube-apiserver and caches cloud data.
Components in edge nodes such as kubelet, kube-proxy and flannel access the cloud kube-apiserver via YurtHub.
When the edge nodes are disconnected from cloud, the caches are used to resume status to avoid workload disruption.

### Traffic in data plane

Raven builds VPN channels to ensure connectivity from cloud to edge or edge to edge include the host network and the container network in order to achieve cloud to edge and edge to edge network communication, which is mainly due to the network domain of the edge node is not in the same network plane as the network domain on the cloud, and the edge nodes are not exposed on the public network.

### OpenYurt Components

- **Raven-Controller-Manager/Raven:**
  - Raven is component of the OpenYurt to enhance cluster networking capabilities. This enhancement is focused on edge-edge and edge-cloud communication in OpenYurt.
    In short, it will provide layer 3 network connectivity among pods in different physical regions, as there are in one vanilla Kubernetes cluster.
  - Deployment pattern: Deployment for Raven-Controller-Manager in cloud nodes, DaemonSet for Raven in all nodes.

- **YurtHub:**
  - YurtHub is a sidecar in node level, it performs the role of traffic proxy between kube nodes and kube-apiserver.
    It has two running modes: edge and cloud. In edge mode, it will cache the data returned from cloud, and store in local disk.
  - Deployment pattern: Static pod in each node.

- **YurtControllerManager：**
  - YurtControllerManager is centralized controller, which consists of NodeLifeCycle Controller(for not evicting pods in autonomy nodes) and YurtCSRController(for approval of edge certificates).
  - Deployment pattern: Deployment in cloud nodes.

- **YurtAppManager:**
  - YurtAppManager is application controller for managing cross region workloads. It consists of the management of Nodepools(node groups), YurtAppSet(previous named UnitedDeployment)(nodepool level workloads), YurtAppDaemon(nodepool level daemonset), and YurtIngress(nodepool level ingress).
  - Deployment pattern: Deployment in cloud nodes.

- **YurtDeviceController/YurtEdgeXManager:**
  - YurtDeviceController and YurtEdgeXManager manage edge devices in cloud native way, they combine EdgeX Foundry and OpenYurt seamlessly, providing IOT solutions in an easy, efficient way.
  - Deployment pattern: Deployment for YurtEdgeXManager in cloud nodes, YurtAppSet for YurtDeviceController in each edge nodepool.

- **Pool-Coordinator:**
  - Provide KV data storage (stored only in memory) and distributed lock capabilities in the node pool, so that YurtHub can elect a Leader, so as to realize heartbeat proxy, cloud edge traffic reuse, operation and maintenance monitoring in the node pool, etc.
  - Deployment pattern: YurtAppDaemon and ensures one instance per edge node pool.