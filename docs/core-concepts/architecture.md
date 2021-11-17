---
title: Architecture
---

OpenYurt follows a classic cloud-edge architecture design.
It uses a centralized Kubernetes control plane residing in the cloud site to
manage multiple edge nodes residing in the edge sites. Each edge node has moderate compute resources available in 
order to run edge applications plus the required OpenYurt components. The edge nodes in a cluster can span
multiple physical regions, which are referred to as `Pools` in OpenYurt.


![](../resources/architecture.png)


The above figure demonstrates the core OpenYurt architecture. The major components consist of:

- **YurtHub**: A node daemon that serves as a proxy for the outbound traffic from typical
  Kubernetes node daemons such as Kubelet, Kubeproxy, CNI plugins and so on. It caches the
  states of all the API resources that they might access in the edge node's local storage.
  In case the edge node is disconnected to the cloud, YurtHub can recover the states when the node restarts.
  
- **Yurt controller manager**: It supplements the upstream node controller to support edge computing requirements. 
  For example, Pods in the nodes that are in the `autonomy` mode will not be evicted from APIServer even if the
  node heartbeats are missing.
  
- **Yurt app manager**: It manages two CRD resources introduced in OpenYurt: [NodePool](https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md)
  and [YurtAppSet](https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md) (previous UnitedDeployment). The former provides a convenient
  management for a pool of nodes within the same region or site. The latter defines a pool based application management workload.
  
- **Yurt tunnel (server/agent)**: `TunnelServer` connects with the `TunnelAgent` daemon running in each edge node via a
  reverse proxy to establish a secure network access between the cloud site control plane and the edge nodes
  that are connected to the intranet.

In addition, OpenYurt also includes auxiliary controllers for integration and customization purposes.
- **Node resource manager**: It manages additional edge node resources such as LVM, QuotaPath and Persistent Memory.
  Please refer to [node-resource-manager](https://github.com/openyurtio/node-resource-manager) repo for more details.
- **Integrating EdgeX Foundry platform and uses Kubernetes CRD to manage edge devices!**

OpenYurt introduces [Yurt-edgex-manager](https://github.com/openyurtio/yurt-edgex-manager) to manage the lifecycle of the EdgeX Foundry software suite,
and [Yurt-device-controller](https://github.com/openyurtio/yurt-device-controller) to manage edge devices hosted by EdgeX Foundry
via Kubernetes custom resources. Please refer to the respective repos for more details.