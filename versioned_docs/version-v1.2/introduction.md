---
title: Introduction
slug: /
---

Welcome to the world of OpenYurt!

**OpenYurt is the first edge computing platform that is non-intrusive to cloud-native systems in the industry**. It unifies the management of scattered massive edge heterogeneous resources (such as CDN sites, IoT all-in-one machines and other edge computing power) from the control side (located in the cloud or central server room, etc.).
It helps users to easily complete large-scale application delivery, operation and maintenance, and control on massive edge resources. 
OpenYurt has the following features:
- Non-instrusive to Kubernetes

  In the cloud-edge scenario, users can follow up on new Kubernetes community releases or resolve CVEs in an inexpensive way, and easily share the technical dividends of the Kubernetes ecosystem.

- Cloud-Edge-Device Fully Collaboration

  By building edge autonomy, cross-regional network communication, multi-regional application arrangement, application upgrade model, cross-platform (such as amd64, arm, arm64) edge resource management, cloud native device management and other capabilities, cloud-edge-device can work together efficiently.
At the same time, users can get a consistent experience with the data center Kubernetes cluster.

- Declarative Device Management

  OpenYurt supports loosely coupled integrated IoT device management solutions (such as EdgeX Foundry) and provides a cloud-native way to manage end devices, effectively solving the management and operation problems of end devices in the edge computing scenario of the Internet of Things.


OpenYurt will continue to work on exploring cloud-native edge computing platform standards for cloud-edge-device collaboration, and will also combine community mainstream computing, networking, storage, application orchestration, security, AI, IoT and other projects or solutions to build a complete upstream and downstream ecology.


## Key Features
- **Powerful edge autonomy capability**

In edge computing scenario, the network connections between edge and cloud are diversified (e.g. 5G, WIFI, etc.). Network jitter or node offline will lead to node heartbeat cannot be reported to the cloud in real time, which triggers the eviction and reconstruction of edge services.
At the same time, in the abnormal state of cloud-edge network connection, edge services on the nodes will not be automatically restored when the edge nodes restart due to the inability to obtain workload data from the cloud, which leads to service interruption of the edge services.
OpenYurt provides strong autonomy capability for edge services by enhancing the workload eviction control capability in the cloud and introducing local caching and heartbeat proxy reporting mechanisms at the edge to ensure the continuous and reliable operation of edge services.
At the same time, when the edge node network is restored, the state of the edge service will be synchronized with the cloud control and ensure the data consistency.

- **Cross-region network communication capability**

In the cloud edge scenario, the cloud to edge / edge to edge are in different physical network planes. Generally only the cloud side exposes public network service addresses, and the native CNI container network can only address data-plane communication in a single region (layer 2 or layer 3 connectivity scenario).
The cloud to edge / edge to edge network communication capability built by raven not only elegantly solves the data-plane communication needs across geographies, but also maintains seamless compatibility with the native CNI container network solution.
At the same time, the cloud-edge traffic reuse capability provided by pool-coordinator significantly reduces the amount of control plane communication data between cloud-edges.

- **Multi-region resource and application management**

For edge scenarios, OpenYurt pioneers the concept of Pool, which can manage the node resources, applications, and service traffic in a pool.
At the resource level, the ability of NodePool is abstracted, and edge site resources can be classified and divided according to geographical distribution.
At the application management level, a set of application deployment models, such as YurtAppSet, YurtAppDaemon, and edge ingress(YurtIngress)
models, are designed. At the traffic service level, traffic can be accessed in a closed loop within the node pool. At the application upgrading level, OTA and Auto upgrading strategies are designed which allow edge application owners to intervene in upgrade decisions
addressings the issue that NodeNotReady may cause the native rolling upgrade model to block.

- **Cloud-native device management capability**

OpenYurt abstracts and defines a cloud native model of leaf devices in edge computing scenario from the following perspectives:
basic properties, main capabilities and what information can be transmitted. In addition, with good compatibility, OpenYurt seamlessly
integrates mainstream IoT device management solutions. Finally, through cloud native declarative API, OpenYurt provides developers
the ability of data collection, processing and control over edge devices.


## What's Next
Here are some recommended next steps:
- Start to install [OpenYurt](./installation/summary.md).
- Learn OpenYurt's [Architecture](./core-concepts/architecture.md).
