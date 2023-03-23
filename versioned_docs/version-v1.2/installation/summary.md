---
title: Summary
---

OpenYurt Cluster installation is divided into two parts: Install OpenYurt Control Plane components and join nodes.

> *Some common problems you may encounter have been listed in the [FAQ](../faq/yurthub.md).*

### Part 1: Install Control Plane Components

We recommend users to install Control Plane Components manually at present. and other solutions will be supported in the later version.

  - **[Manually Setup](./manually-setup.md)**
    - Recommend to use in a production environment
    - Need to prepare a Kubernetes Control Plane
  
### Part 2: [Join Nodes](./yurtadm-join.md)

End users can join nodes into an OpenYurt cluster directly with [`yurtadm join` command](./yurtadm-join.md#1-joining-nodes-from-scratch) or [install OpenYurt node components manually](./yurtadm-join.md#2-install-openyurt-node-components) on the already joined node.
