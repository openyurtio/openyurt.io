---
title: Architecture
---


OpenYurt的整体架构如下:

![img](../../../static/img/docs/core-concepts/arch.png)

其中蓝色框为原生Kubernets组件，橙色框中组件为OpenYurt组件。



### 节点分类

- Cloud Node：通过内网与Kubernetes Master连接，主要用于部署运行中心控制组件。节点Label: openyurt.io/is-edge-worker: false
- Edge Node：通过公网与Kubernetes Master连接，一般和边缘生产环境距离较近，主要用于部署运行边缘业务容器。节点Label: openyurt.io/is-edge-worker: true



### 边缘访问云端Kube-apiserver的管控流量

Edge Node上的Kubelet, kube-proxy, Flannel以及其他云原生组建访问云端kube-apiserver的流量都会经过YurtHub组件，同时YurtHub组件会在本机磁盘上缓存云端返回的数据，当云边网络异常时YurtHub将使用本地缓存数据来恢复边缘业务。



### 云端访问边缘的运维流量

由于边缘节点一般不暴露在公网上，为了从云端向边缘下发运维指令时(如kubectl exec往边缘容器下发命令)，或者收集边缘运行数据(如prometheus拉取边缘kubelet的metrics)时，这些运维流量将会经过YurtTunnel Agent和YurtTunnel Server构建的双向认证的安全反向隧道，最后由YurtTunnel Agent转发到目标边缘节点。



### OpenYurt组件介绍

- **YurtHub:**
  - 节点维度的SideCar，节点上组件和kube-apiserver之间的流量代理，有边缘(edge)和云端(cloud)两种运行模式。其中边缘YurtHub会缓存云端返回的数据。
  - 部署形态：以Static Pod形态运行在每个节点上。

- **YurtControllerManager：**
  - 中心的控制器，目前包括NodeLifeCycle Controller(不驱逐自治节点上的Pod)，YurtCSRController(用于Approve边缘的证书申请)
  - 部署形态：Deployment形态部署在Cloud Node上

- **YurtAppManager:**

  - 跨地域的资源及业务负载管理器，目前包括NodePool(节点池管理)，YurtAppSet(之前叫UnitedDeployment)(节点池维度的业务负载管理)，YurtAppDaemon(节点池维度的Daemonset)
  - 部署形态： Deployment形态部署在Cloud Node上

- **YurtTunnel(Server/Agent):**
  - 构建双向认证加密的云边反向隧道，用于转发云端到边缘的运维监控流量。
  - 部署形态：YurtTunnel Server以Deployment形态部署在Cloud Node上，YurtTunnel Agent以DaemonSet部署在Edge Node上

- **YurtDeviceController/YurtEdgeXManager:**
  - 用于边缘IOT解决方案的非侵入融合，通过云原生模式管控边缘设备。目前EdgeX Foundry已经无缝集成到OpenYurt架构中。
  - YurtEdgeXManager以Deployment形态部署在Cloud Node上，YurtDeviceController以YurtAppSet(之前叫UnitedDeployment)形态部署在Edge Node上，每个NodePool上部署一套YurtDeviceController。

- **NodeResourceManager:**
  - 管理 OpenYurt 集群本地资源的组件，用户可以通过修改集群内 ConfigMap 的定义来动态配置集群内宿主机上的本地资源。
  - 以DaemonSet形态部署在Edge Node上



