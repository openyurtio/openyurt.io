---
title: Introduction
slug: /
---

欢迎来到OpenYurt的世界!

OpenYurt中的Yurt(/jɜːrt/)意译为蒙古包，期望以其“形”来表示边缘计算侧重于创建一个集中管理但物理分布的开放基础设施。

**OpenYurt 是业界首个非侵入的边缘计算云原生平台开源项目。主推“Kubernetes零修改”，“云边端一体化”等设计理念**，提供诸如边缘自治、
跨网络域的云边流量治理、大规模边缘业务管理、边缘设备的云原生管理，异构资源支持等能力。OpenYurt 旨在帮助用户解决在海量边、
端资源上完成大规模应用交付、运维、管控的问题，同时为用户提供与云上Kubernetes集群一致的使用体验。

## 核心能力
- **边缘自治**

在原生Kubernetes中，当边云边网络异常(如缘节点离线或边缘节点与云端管控间的网络不稳定)时，可能会触发对边缘节点上业务的驱逐与重建，
同时边缘节点重启时由于无法从云端管控获取业务Pod元数据导致无法恢复边缘业务。通过OpenYurt的边缘自治能力，可以轻松的解决云边网络异常对边缘业务的影响，
确保边缘业务可以7*24小时提供服务。同时当云边网络恢复后，边缘工作负载的状态将与云端管控同步并保持数据的一致性。

- **边缘网络治理**

在边缘场景下，由于大多数边缘节点没有暴露在公网之上，云端管控无法和边缘节点主动建立网络链接，导致原生Kubernetes的应用运维 APIs(logs/exec/port-forward)无法工作。
通过OpenYurt的边缘网络治理能力，可以在无感知状态下满足边缘的运维需求，同时也将支持跨公网的云边，边边之间的业务访问。

- **边缘应用管理**

在边缘场景下，边缘节点通常具备很强的区域性、地域性、或者其他逻辑上的分组特性（比如相同 CPU 架构、同一个运营商、云提供商），
不同分组的节点间往往存在网络不互通、资源不共享、资源异构、应用独立等明显的隔离属性。在OpenYurt中从单元化管理视角， 
抽象了NodePool(3层内网互通的一组节点)/YurtAppSet/YurtAppDaemon等单元化资源，提供边缘场景下节点和应用的大规模管理能力。

- **边缘设备管理**

提出 kubernetes-native非侵入、可扩展的边缘设备管理标准，使 Kubernetes 业务负载模型和 IOT 设备管理模型无缝融合。
目前EdgeX Foundry 作为云原生设备管理模型的首个实现并成功在OpenYurt系统中落地，大大降低 EdgeX Foundry 在 Kubernetes 上的部署管理的复杂度同时也提升了边缘设备的管理效率。


## 关系对比
### OpenYurt vs. Kubernetes
Kubernetes主要用于数据中心中容器化业务的编排及调度，对节点间网络连接有比较高的要求，同时Kubernetes也不涉及边缘设备的管理。OpenYurt通过非侵入，
插件形式增强Kubernetes，可以简单认为OpenYurt=Kubernetes + 各个Yurt组件(如Yurthub，Yurt-tunnel，Yurt-app-manager等)。
OpenYurt解决了边缘场景下常见挑战，如网络连接不稳定，边缘自治，边缘设备管理等问题，使Kubernetes可以以云边一体化架构运行在边缘场景。

### OpenYurt vs. K3s
OpenYurt和K3S都是基于Kubernetes来适配边缘场景的云原生平台。OpenYurt对Kubernetes系统是零修改，而K3s裁剪了Kubernetes中的部分功能。
同时OpenYurt是云边一体化架构，即Kubernetes Master运行在云端(或中心端)，Kubernetes workers运行在边缘端，它们是通过公网连接的。而K3s是整体全部下沉到边缘端。

### OpenYurt vs. KubeEdge
KubeEdge也是基于Kubernetes来适配边缘场景的云原生平台。KubeEdge中抛弃了Kubernetes中的list/watch机制，同时对Kubernetes worker中的组件(如kubelet，kube-proxy)
进行了重构并耦合了边缘设备管理。而OpenYurt对Kubernetes系统零修改，并通过无绑定方式集成开源社区成熟IOT方案来解决边缘设备管理。