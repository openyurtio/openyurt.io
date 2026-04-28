---
title: 主机网络
---

本文档介绍 OpenYurt 的主机网络模式 NodePool 功能，该功能允许边缘节点在不安装 CNI 组件（如 Flannel、kube-proxy、CoreDNS）的情况下，使用宿主机网络运行 Pod。

## 背景

在典型的云边架构中，每个 Kubernetes 节点都会运行 CNI 相关组件 —— kube-proxy 用于 Service 负载均衡，Flannel（或其他 CNI）用于 Pod 间网络通信，CoreDNS 用于 Pod 间的 DNS 解析。这些组件会消耗 CPU、内存和网络资源。

在某些边缘场景中，节点只需要运行简单的轻量级工作负载，这些负载：
- 直接通过宿主机网络通信（例如调用外部 API、向云端上报数据）
- 不需要通过 Kubernetes Service 或 DNS 访问其他 Pod
- 不需要跨节点的 Pod 到 Pod 通信

对于这些节点来说，运行 kube-proxy、Flannel 和 CoreDNS 是不必要的，会浪费宝贵的边缘资源。OpenYurt 的**主机网络模式 NodePool**正是为了解决这个问题。

## 架构

### 工作原理

当你创建一个 `hostNetwork: true` 的 NodePool 时，OpenYurt 会自动处理以下事项：

1. **节点标签注入** — Node Defaulting Webhook 会为属于主机网络 NodePool 的每个节点自动添加标签 `nodepool.openyurt.io/hostnetwork: "true"`。

2. **CNI 组件隔离** — CNI 组件（Flannel、kube-proxy、CoreDNS 等）配置了 `nodeAffinity`，排除带有 `nodepool.openyurt.io/hostnetwork: "true"` 标签的节点，因此这些组件不会被部署到主机网络节点上。

3. **Pod 调度防护** — Pod Defaulting Webhook 确保带有注解 `apps.openyurt.io/exclude-host-network-pool: "true"` 的 Pod 会自动获得 NodeAffinity 规则，防止被调度到主机网络节点上。

<div align="center">
  <img src="../../../../static/img/docs/user-manuals/network/hostnetwork-arch.png" width="70%" alt="主机网络架构" />
</div>

### 标准节点 vs 主机网络节点对比

| 特性 | 标准节点 | 主机网络节点 |
|------|---------|-------------|
| CNI 插件 | Flannel / Calico 等 | 不需要 |
| kube-proxy | 需要 | 不需要 |
| Pod 网络 | Overlay / VPC | 宿主机网络命名空间 |
| Service 访问 | 通过 ClusterIP | 通过 NodePort / 宿主机 IP |
| DNS（CoreDNS） | 可用 | 不需要 |
| 资源开销 | 较高（CNI + kube-proxy + CoreDNS Pod） | 极低 |
| Pod IP 分配 | 来自 PodCIDR | 使用节点 IP |
| 跨节点 Pod 通信 | 支持 | 不支持 |

## 前置条件

在使用主机网络模式 NodePool 之前，请确保以下条件：

1. **已安装 Yurt-Manager** — NodePool 控制器和 Webhook 集成在 Yurt-Manager 组件中。如果尚未安装，请参考[安装指南](../../../installation/manually-setup.md)。

2. **CNI 组件已配置反亲和** — Flannel、kube-proxy、CoreDNS 等基础设施组件必须包含以下 `nodeAffinity` 配置，以避免调度到主机网络节点上：

```yaml
affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
      - matchExpressions:
        - key: nodepool.openyurt.io/hostnetwork
          operator: NotIn
          values:
          - "true"
```

> **注意**：如果你使用官方 Helm Charts 或 `yurtctl` 部署 OpenYurt，此配置可能已默认应用。请检查你的部署清单。

## 使用指南

### 步骤 1：创建主机网络 NodePool 并接入节点

创建带有 `hostNetwork: true` 的 NodePool 并将边缘节点加入其中。详细操作请参考：
- [创建节点池](../../node-pool-management/create-a-node-pool.md) — 在 NodePool spec 中设置 `spec.hostNetwork: true`。
- [编辑节点池](../../node-pool-management/edit-a-node-pool.md) — 配置节点池的标签、注解和污点。
- [接入节点](../../node-management/join-a-node.md) — 通过标签将边缘节点分配到主机网络 NodePool。

节点加入主机网络 NodePool 后，Node Defaulting Webhook 会自动为节点添加 `nodepool.openyurt.io/hostnetwork: "true"` 标签。

### 步骤 2：在主机网络节点上部署工作负载

运行在主机网络节点上的 Pod 应在 spec 中使用 `hostNetwork: true`，并通过 `nodeSelector` 指定节点池：

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: edge-collector
spec:
  hostNetwork: true
  containers:
  - name: collector
    image: <your-image>
  nodeSelector:
    apps.openyurt.io/nodepool: <your-hostnetwork-nodepool-name>
```

### 步骤 3：排除依赖 CNI 的 Pod

如果你有依赖 CNI 网络的 Pod（例如需要通过 Service 或 DNS 与其他 Pod 通信），可以添加注解 `apps.openyurt.io/exclude-host-network-pool: "true"`，Pod Defaulting Webhook 会自动为其添加 NodeAffinity，防止这些 Pod 被调度到主机网络节点上：

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
  annotations:
    apps.openyurt.io/exclude-host-network-pool: "true"
spec:
  containers:
  - name: app
    image: <your-image>
```

这在同时包含标准节点池和主机网络节点池的部署场景中非常有用，可以确保依赖 CNI 的工作负载只运行在标准节点上。

## 限制与已知行为

### NodePool 创建后不可修改 hostNetwork

就像 Kubernetes 不允许修改运行中 Pod 的 `hostNetwork` 字段一样，OpenYurt 不允许在 NodePool 创建后修改其 `hostNetwork` 字段。NodePool 验证 Webhook 会强制执行此限制。

### 主机网络节点上 Pod 的网络限制

主机网络节点上的 Pod：
- **不能**通过 Kubernetes Service 访问其他 Pod（没有 kube-proxy）
- **不能**解析集群内部 DNS 名称（节点上没有 CoreDNS）
- **不能**通过 Overlay 网络与其他节点上的 Pod 通信（没有 Flannel）
- **可以**直接访问宿主机网络、外部 API 和本地服务
- **可以**通过节点 IP 地址和 hostPort 被访问

### 节点不能在标准节点池和主机网络节点池之间移动

由于网络配置是在节点加入主机网络 NodePool 时设置的，将节点在标准 NodePool 和主机网络 NodePool 之间切换（反之亦然）需要重置节点并重新加入。

## 常见问题

**Q：我可以在同一个集群中同时运行标准 NodePool 和主机网络 NodePool 吗？**

可以。这正是预期的使用模式。标准 NodePool 处理需要完整 Kubernetes 网络（Service、DNS、Pod 间通信）的工作负载，而主机网络 NodePool 处理轻量级边缘工作负载。

**Q：主机网络节点上的 Pod 能与标准节点上的 Pod 通信吗？**

可以通过节点 IP 地址直接通信，但不能通过 Kubernetes Service 或 DNS，因为主机网络节点上没有部署 kube-proxy 和 CoreDNS。

**Q：如果我手动从节点移除 hostNetwork 标签会怎样？**

节点的网络配置不会自动恢复。要将节点切换回标准网络，必须重置该节点并重新加入到标准 NodePool。
