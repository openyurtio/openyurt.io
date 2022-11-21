---
title: Introduction
slug: /
---

Welcome to the world of OpenYurt!

OpenYurt is the intelligent edge computing platform which aims to extend the Cloud Native ecosystem to edge computing and IoT scenarios.
By making non-intrusive enhancements, it empowers customer to manage large scale edge computing workloads in different architecture (e.g., ARM and X86) in a native Kubernetes manner.

OpenYurt has been widely used in typical edge computing scenarios such as the IoT, distributed cloud , logistics, transportation, manufacturing, retail, CDN etc.


## Key Features
- **Out-of-the-box cloud-edge-device collaboration capability**

Edge computing has the characteristics of typical resource heterogeneity, large-scale, and multi-regional distribution.
OpenYurt adopts an integrated cloud-edge-device architecture, which enables the unified management of massive edge resources and services in the cloud.
On the one hand, it seamlessly integrates existing capabilities on the cloud such as elastic expansion, intelligent operation, logging, and DevOps,
ensuring high availability of edge services.On the other hand, with the help of the cloud-edge-device integration channel, a large number of cloud-based capabilities,
including middleware, security, AI, storage, and network management capabilities, are sunk to the edge, reducing the cost of self-construction of common cloud services on the edge side.

- **Powerful edge service self-healing capability**

In Kubernetes, if the edge node restarts when offline, the service will be disrupted because it cannot be automatically restored.
With the powerful edge service self-healing capability in OpenYurt, it can be easily resolved the impact of node offline and node restart
on edge services and ensure the service runs reliably. When the edge node network is restored, the status of edge services will be synchronized
with cloud management and data consistency will be maintained.

- **Rich edge service orchestration capability**

For edge scenarios, OpenYurt pioneers the concept of Pool, which can manage the node resources, applications, and service traffic in a pool.
At the resource level, the ability of NodePool is abstracted, and edge site resources can be classified and divided according to geographical distribution.
At the application management level, a set of application deployment models, such as YurtAppSet, YurtAppDaemon, and edge ingress(YurtIngress)
models, are designed. At the traffic service level, traffic can be accessed in a closed loop within the node pool.

- **Cloud-native device management capability**

OpenYurt abstracts and defines a cloud native model of leaf devices in edge computing scenario from the following perspectives:
basic properties, main capabilities and what information can be transmitted. In addition, with good compatibility, OpenYurt seamlessly
integrates mainstream IoT device management solutions. Finally, through cloud native declarative API, OpenYurt provides developers
the ability of data collection, processing and control over edge devices.


## What's Next
Here are some recommended next steps:
- Start to install [OpenYurt](./installation/summary.md).
- Learn OpenYurt's [Architecture](./core-concepts/architecture.md).
