---
title: Summary
---

OpenYurt Cluster installation is divided into two parts: Install OpenYurt Control Plane components and join nodes.

> *Some common problems you may encounter have been listed in the [FAQ](../faq.md).*

### Part 1: Install Control Plane Components

For different situations, there are several ways to install OpenYurt Control Plane components:

  - **[Manually Setup](./manually-setup.md)**
    - Recommend to use in a production environment
    - Need to prepare a Kubernetes Control Plane
  - **[Yurtadm init](./yurtadm-init.md)**
    - Use in a test environment
    - Install OpenYurt Control Plane components(including Kubernetes) from scratch.
  - **[OpenYurt Experience Center](./openyurt-experience-center/overview.md)**
    - Use in a test environment
    - Users can directly obtain a cluster(only include control plane components) with limited permissions after applying for an account on the webpage.
  - **YurtCluster**
    - Use in a test environment, and will be deprecated in the future.
    - Need to prepare a Kubernetes Control Plane
  
### Part 2: [Join Nodes](./yurtadm-join.md)

End users can join nodes into an OpenYurt cluster directly with [`yurtadm join` command](./yurtadm-join.md#1-joining-nodes-from-scratch) or [install OpenYurt node components manually](./yurtadm-join.md#2-install-openyurt-node-components) on the already joined node.
