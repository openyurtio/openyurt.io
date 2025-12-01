---
title: Yurt-Manager
---

## 1. 功能简介

Yurt-Manager 组件由多个控制器和 webhook 组成，用于确保 Kubernetes 在云边协同场景下像在正常数据中心一样工作，例如轻松管理多区域工作负载，为边缘工作负载（DaemonSet 和静态 Pod）提供 AdvancedRollingUpdate 和 OTA 升级等功能。
建议将 Yurt-Manager 组件与 Kubernetes 控制平面组件（如 Kube-Controller-Manager）部署在同一台机器上。Yurt-Manager 作为一个 Deployment 部署，通常包括两个实例，一个 master 和一个 slave。组件的架构图如下：

![yurt-manager](../../../../../static/img/docs/core-concepts/yurt-manager-arch.png)

1. 使用参数 `--controllers` 可以精确控制哪些控制器被激活或者停用。符号 `*` 用来启用所有默认激活的控制器；`foo` 专门用来启动名为 `foo` 的控制器；相对地，`-foo` 则用来停用名为 `foo` 的控制器。请注意，各个控制器名称需要用逗号来分隔。
2. `Controller Webhooks` 将随其对应的控制器一同被启用或关闭。另一方面，独立 Webhooks（`Independent Webhooks`）默认处于启用状态，但可以通过使用启动参数 `--disable-independent-webhooks` 来进行关闭。独立 Webhook Node 主要根据其所属节点池的属性为节点打上适当的标签。

## 2. 控制器和 Webhook 介绍

### 2.1 边缘自治相关控制器

#### 2.1.1 nodelifecycle 控制器

在启用 `nodelifecycle` 控制器之前，必须首先禁用原有 `Kube-Controller-Manager` 组件中的同名控制器。新增的 `nodelifecycle` 控制器相较于原生版本提供了改进的功能：对于带有 `apps.openyurt.io/binding=true annotation` 的节点，即使节点状态变为 `NotReady`，控制器也不会将 `Pod.Status` 中的 `Ready` 属性设置为 `false`。

#### 2.1.2 podbinding 控制器

对于一些边缘计算服务，它们要求在节点出现故障时，其运行的 Pod 不应被驱逐，从而实现 Pod 与节点的持久绑定。例如，一个连接到特定摄像头的图像处理应用，或者需要部署在特定路口的智能交通系统。
通过为节点添加 `apps.openyurt.io/binding=true annotation`，可以启用 Pod 与节点的绑定功能，保证节点上的所有 Pod 均与之绑定，并且不受到云端和边缘网络状态变化的影响。
podbinding 控制器负责在 `apps.openyurt.io/binding annotation` 被更改时，管理 Pod 的容忍策略。当节点标记为 `apps.openyurt.io/binding=true` 时，Pod 的 `node.kubernetes.io/not-ready` 和 `node.kubernetes.io/unreachable` 容忍时间（TolerationSeconds）将被设置为 0，这样即便在云端与边缘网络断开的情况下，Pod 也不会从节点上被驱逐。
反之，如果节点未被设置为 true，这些容忍时间将默认为 300 秒。

#### 2.1.3 delegatelease 控制器

`delegatelease` 控制器设计为与 `yurt-coordinator` 组件配合工作。在节点与云端的连接中断时，通过 `yurt-coordinator` 组件会上报带有 `openyurt.io/delegate-heartbeat=true annotation` 的节点 `Lease`。`delegatelease` 控制器在检测到含有此注释的 Lease 时，会给节点添加 `openyurt.io/unschedulable` 的污点标记，以确保新创建的 Pod 不会被调度到这些节点上。

#### 2.1.4 yurtcoordinatorcert 控制器

yurtcoordinatorcert 控制器的职责是为 yurt-coordinator 组件生成相关的证书和 kubeconfig 文件。该控制器确保所有的证书和 kubeconfig 文件都以 Secret 资源的形式安全地存储在系统中。

### 2.2 Raven 相关控制器

#### 2.2.1 gatewaypickup 控制器

Raven 组件定义了新的 CRD Gateway 作为实现跨网络域网络通信信息载体，通过对节点打 Label 划分网络域，为每个网络域创建一个 Gateway 集群资源，对 Gateway 的 Spec 进行配置，为每个网络域选择一些节点作为备用的网关，择 gatewaypickup 控制器负责协调 Gateway，为每个网络域从备选的网关节点中选举网关，并且记录本网络域的节点信息。

#### 2.2.2 gatewaydns 控制器

Raven L7 需要将所有 NodeName+Port 的 Http 请求转发到本网络域的网关节点，由网关节点负责跨域或本域转发，对 NodeName 的解析需要部署 Raven 专用的 DNS，[安装方法与简介](../installation/raven-l7-proxy-prepare.md)，其中，Raven 专用的 DNS 采用 host 插件的方式将一个 Configmap 挂载进 DNS 内，这个 Configmap 记录将所有 NodeName 都解析到`kube-system/x-raven-proxy-internal-svc`的 ClusterIP,这个 Service 后端挂载着网关节点，即可实现所有七层请求都转发到网关节点进行代理。而 GatewayDNS 控制器就是动态维护这个 configmap 的条目。

#### 2.2.3 gatewayinternalservice 控制器

Raven L7 需要将将所有 NodeName+Port 的 Http 请求转发到本网络域的网关节点，由网关节点负责跨域或本域转发，GatewayDNS 控制维护 Configmap 解决了 NodeName 的地址解析，将请求转发到`kube-system/x-raven-proxy-internal-svc`的 ClusterIP，gatewaypublicservice 控制器即负责维护这个 service 的生命周期，但 Http 请求的端口根据实际业务设计而变化，因此通过配置 Gateway Spec.ProxyConfig，配置代理的 Http/Https 端口，gatewaypublicservice 控制器根据配置为 x-raven-proxy-internal-svc 配置端口转发，所有的 https/http 请求转发到 raven agent 的 10263/10264 端口

#### 2.2.4 gatewaypublicservice 控制器

Raven 的 Gateway 可采用 LoadBalancer 和 PublicIP 两种暴露方式提供给边缘侧网关节点构建跨域隧道，如果 LoadBalancer 的方式暴露，gatewaypublicservice 控制器负责维护一个 Loadbalancer 的 Service 和 Endpoints 的生命周期

### 2.3 工作负载相关控制器

#### 2.3.1 daemonpodupdater 控制器

在云边协同场景中，当存在 NotReady 节点时，DaemonSet 的传统 RollingUpdate 升级策略很容易阻塞。为解决这个问题，daemonpodupdater 控制器提出了两种新的升级模型：AdvancedRollingUpdate 和 OTA（空中）升级。
AdvancedRollingUpdate 策略首先升级 Ready 节点上的 Daemon Pod，并跳过 NotReady 节点。当节点从 NotReady 转为 Ready 时，该节点上的 Daemon Pod 会自动升级。
OTA 策略用于边缘节点所有者（而非集群所有者）决定升级工作负载的场景。这种方法尤其适用于电动汽车等情况，其中边缘节点所有者对升级过程具有完全控制权。

#### 2.3.2 yurtappset 控制器/webhook

> OpenYurt 1.5 版本开始，我们将之前 yurtappset, yurtappdaemon 和 yurtappoverrider 的能力合并到了 yurtappset v1beta1 中。

应用集（YurtAppSet）是 OpenYurt 提供的功能，旨在简化边缘计算场景下分散部署的复杂性。通过更上层的抽象，对多个工作负载（Workload 资源，如 Deployment）进行统一管理，比如创建、更新和删除等操作。

YurtAppSet 提供以下能力，可以帮助您有效解决传统方案的更新效率低、管理复杂和配置冗余等问题，提高运维效率和应用部署的灵活性。

- workloadTemplate：统一模板定义

YurtAppSet 允许您通过单一的 workloadTemplate 定义来统一管理位于多个地域的工作负载。这种方式不仅减少了重复的部署配置，还可以让批量操作如创建、更新和删除变得更加高效和一致。

- nodepoolSelector：自动化部署

YurtAppSet 通过 nodepoolSelector 机制灵活选择目标节点池，实现了与节点池动态变化的同步。随着新节点池的创建或现有节点池的移除，nodepoolSelector 将自动识别并匹配最新的合适节点池进行 Workload 分发部署，帮助您减轻运维负担。

- workloadTweaks：地域差异化定制配置

当地域间的应用需求存在差异时，YurtAppSet 提供了 workloadTweaks 功能，允许对特定区域的 Workload 进行定制化调整，从而满足各地域的特定要求，您无需独立管理或更新每个 Workload。

#### 2.3.3 yurtstaticset controller/webhook

考虑到边缘设备众多且分布广泛，手动部署和升级云边环境中的静态 Pod 可能会带来巨大的操作挑战和风险。为了克服这些挑战，OpenYurt 推出了一种名为 YurtStaticSet 的新型自定义资源定义（CRD），旨在改善静态 Pod 的管理体验。
yurtstaticset 控制器/webhook 为静态 Pod 引入了 AdvancedRollingUpdate 和 Over-The-Air（OTA）两种升级机制，确保在云边协同环境中对静态 Pod 进行有效的版本控制和无缝升级。

### 2.4 其他

#### 2.4.1 nodepool 控制器/webhook

用户通常借助各种 Kubernetes 标签来对节点进行分组与管理。但是，随着节点和标签数量的持续增长，对节点进行操作和维护的工作——比如实施调度策略、批量设置污点等——变得日益繁琐和复杂。
为了简化这一过程，NodePool 把一组具有共同特性的节点（如地理位置、CPU 架构、所属云服务提供商等）抽象成一个节点池，使得节点可以在这一更高层级上进行统一管理。通过这种抽象，NodePool 为集群中的节点分组带来了清晰的结构，极大地简化了节点的整体操作和维护流程。
同时在创建节点池时会根据节点池类型添加`nodepool.openyurt.io/type`标签，默认为`edge`。

#### 2.4.2 csrapprover 控制器

在 Kubernetes 中，CSR（证书签名请求）的审批策略非常严格，这意味着 OpenYurt 组件（如 YurtHub）生成的 CSR 不会自动获得 Kube-Controller-Manager 的批准。
为了解决这一问题，Yurt-Manager 中的 csrapprover 控制器被设计用来负责审批 OpenYurt 组件的 CSR 请求，确保正常运行。

#### 2.4.3 platformadmin 控制器/webhook

PlatformAdmin 从之前版本的 EdgeX CRD 演进而来，是边缘设备管理平台的抽象，用户只需要输入设置接入的平台、需要部署的 NodePool 的名字、需要部署的版本等等，就可以在节点池部署一套边缘设备管理平台。

platformadmin-controller 集成在 yurt-manager 中，负责将 PlatformAdmin CR 解析为对应的 configmap、service 和 yurtappset，从而实现边缘设备管理平台的部署。

同时，它还负责将 yurt-iot-dock 分发到对应的节点池，以实现边缘端设备同步，且用户可以通过 PlatformAdmin CR 的 components 字段来选择需要部署的 edgex 可选组件，**这一部分请参考[云原生管理端设备章节](../user-manuals/iot/edgex-foundry.md)**。

![img](../../../../../static/img/docs/core-concepts/platform-adminv1.4.0.png)

#### 2.4.4 servicetopologyendpoints/servicetopologyendpointslices 控制器

servicetopology 控制器用于协助 YurtHub 中的 [servicetopology filter](../user-manuals/resource-access-control/resource-access-control.md) 为集群提供服务拓扑路由功能。
当 Service 的拓扑 Annotation 被修改时，servicetopology 控制器会更新相应的 Endpoints 和 EndpointSlices，从而触发节点端 YurtHub 中的服务拓扑更新。
