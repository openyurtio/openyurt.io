---
title: Yurt-Manager
---

## 1.功能简介

Yurt-Manager 组件由多个控制器和 webhook 组成，用于确保 Kubernetes 在云边协同场景下像在正常数据中心一样工作，例如轻松管理多区域工作负载，为边缘工作负载（DaemonSet 和静态 Pod）提供 AdvancedRollingUpdate 和 OTA 升级等功能。
建议将 Yurt-Manager 组件与 Kubernetes 控制平面组件（如 Kube-Controller-Manager）共同定位。Yurt-Manager 作为一个 Deployment 部署，通常包括两个实例，一个master和一个slave。

每个控制器和 webhook 的描述如下。

### 1.1 csrapprover 控制器

由于 Kubernetes 中对 CSR（证书签名请求）的严格批准策略，OpenYurt 组件（例如 YurtHub）生成的 CSR 不会自动被 Kube-Controller-Manager 批准。
因此，Yurt-Manager 内的名为 csrapprover 的控制器负责批准 OpenYurt 组件的 CSR。

### 1.2 daemonpodupdater 控制器

在云边协同场景中，当存在 NotReady 节点时，DaemonSet 的传统 RollingUpdate 策略很容易受阻。为解决这个问题，daemonpodupdater 控制器提出了两种新的升级模型：AdvancedRollingUpdate 和 OTA（空中）升级。
AdvancedRollingUpdate 策略首先升级 Ready 节点上的 Daemon Pod，并跳过 NotReady 节点。当节点从 NotReady 转为 Ready 时，该节点上的Daemon Pod 会自动升级。
OTA 策略用于边缘节点所有者（而非集群所有者）决定升级工作负载的场景。这种方法尤其适用于电动汽车等情况，其中边缘节点所有者对升级过程具有更大的控制权。

### 1.3 delegatelease 控制器

delegatelease 控制器需要与 pool-coordinator 组件协同工作。当节点与云断开连接时，通过 pool-coordinator 组件报告的节点Leader将带有 `openyurt.io/delegate-heartbeat=true` annotation。
在检测到具有此annotation的Lease后，delegatelease 控制器将给节点打上 `openyurt.io/unschedulable` 污点，确保新创建的 Pod 无法调度到此类节点上。

### 1.4 podbinding 控制器

某些边缘服务要求在节点故障时 Pod 不被驱逐，而要求特定 Pod 绑定到特定节点。例如，图像处理应用程序需要绑定到连接到摄像头的计算机，而智能交通应用程序必须固定到位于特定路口的计算机。
用户可以向节点添加 `apps.openyurt.io/binding=true` annotation 来启用 Pod与节点绑定的功能，确保该节点上的所有 Pod 都与其绑定并且不受云边网络的影响。

podbinding 控制器在节点的 `apps.openyurt.io/binding` annotation 被修改时负责管理 Pod 容忍度。如果节点的 `apps.openyurt.io/binding` annotation 为 true，
Pod 中 `node.kubernetes.io/not-ready` 和 `node.kubernetes.io/unreachable` 容忍度的 TolerationSeconds 将设置为 0，这样即使云边网络离线，也不会驱逐节点上的 Pod。
相反，如果节点annotation没有设置为 true，则 Pod 中 `node.kubernetes.io/not-ready` 和 `node.kubernetes.io/unreachable` 容忍度的 TolerationSeconds 将设置为 300 秒。

### 1.5 ravenl3 控制器

ravenl3 控制器用于 Kubernetes 原生 L3 路由解决方案，提供跨区域的负载均衡和流量管理。在云边协同场景中，边缘服务和应用程序需要跨多个区域和数据中心进行通信。
ravenl3 控制器负责监控节点和服务，自动创建和更新 L3 路由表，确保边缘应用程序之间的通信高效可靠。

### 1.6 nodepool 控制器/webhook

NodePool 根据特定的节点属性（如地区、CPU架构、云提供商等）将节点池的概念进行抽象化，以便在池级别统一管理节点。

我们习惯于通过不同的 Kubernetes 标签对节点进行分组和管理，但随着节点和标签数量的增加，节点的操作和维护（如批量配置调度策略、污点等）将变得越来越复杂，如下图所示：
![img](../../../../../static/img/nodepool1.png)

nodepool 控制器/webhook 可以从节点池的角度管理不同边缘区域中的节点，如下图所示：

![img](../../../../../static/img/nodepool2.png)

### 1.7 poolcoordinatorcert 控制器

poolcoordinatorcert 控制器负责为 pool-coordinator 组件准备证书和 kubeconfig 文件。所有证书和 kubeconfig 文件都以 Secret 资源的形式存储在系统中。

### 1.8 servicetopology 控制器

servicetopology 控制器用于协助 YurtHub 中的 [servicetopology filter](../user-manuals/resource-access-control/resource-access-control.md) 为集群提供服务拓扑路由功能。
当服务的拓扑注释被修改时，servicetopology 控制器会更新相应的Endpoints和 EndpointSlices，从而触发节点端的服务拓扑更新。

### 1.9 yurtstaticset controller/webhook

由于边缘设备数量庞大且分布式，手动部署和升级云边协作场景中的静态 Pod 可能导致操作挑战和错误风险增加。为解决这个问题，OpenYurt 引入了名为 YurtStaticSet 的新自定义资源定义（CRD），以改进静态 Pod 的管理。
yurtstaticset 控制器/webhook为静态 Pod 提供了诸如 AdvancedRollingUpdate 和 Over-The-Air（OTA）升级功能。

### 1.10 yurtappset 控制器/webhook

随着边缘应用程序地理分布越来越广泛，需求日益多样化，管理其运行和维护变得越来越复杂。例如：

- 升级镜像需要逐个修改部署。
- 需要定义部署的命名规则以指示相同的应用程序。
- 对于同一应用程序的多个部署，除名称、节点选择器和副本外，其他配置差异相对较小。

YurtAppSet CRD 提供了一个定义应用程序的模板，并管理多个工作负载以支持各种区域。YurtAppSet 中的工作负载针对一个节点池进行部署，目前支持的类型有 StatefulSet 和 Deployment。
yurtappset 控制器/webhook根据 YurtAppSet 中的Pool配置创建子工作负载，每个资源具有期望数量的 Pod 副本。

使用单个 YurtAppSet 实例，您可以自动维护多个 Deployment 或 StatefulSet 配置，同时保留不同池的差异化配置，例如副本。

![img](../../../../../static/img/nodepool3.png)

### 1.11 yurtappdaemon 控制器/webhook

在边缘场景中，同一区域的边缘节点通常分配到同一个 NodePool。某些系统组件（如 CoreDNS）通常需要在 NodePool 级别进行部署。创建 NodePool 时，目标是自动生成这些系统组件，而无需手动操作。
yurtappdaemon 控制器/webhook确保所有或部分 NodePools 使用 Deployment 模板（当前不支持 StatefulSet）运行副本。创建 NodePools 时，这些子部署会被添加到集群中，由 yurtappdaemon 控制器管理其创建和更新。

![img](../../../../../static/img/yurt-app-daemon.png)