---
title: 网络管理概述
---

OpenYurt 提供了一系列网络功能，以满足边缘计算环境的独特需求。这些功能解决了带宽受限、跨区域连接、轻量级边缘节点和流量本地化等挑战。

OpenYurt 的网络管理能力主要分为以下几个方面：

## 容器网络

容器网络管理涵盖边缘节点的 CNI 配置和行为，包括边缘自治场景下的优化：

- **[主机网络](./container-network/hostnetwork.md)** — 部署使用宿主机网络栈的边缘节点，无需安装 CNI 组件（Flannel、kube-proxy、CoreDNS），节省轻量级边缘节点资源。
- **[Flannel](./container-network/flannel.md)** — Flannel 边缘优化，包括 VTEP MAC 地址保留和 Pod IP 保留，以应对边缘节点重启和云边断连场景。

## 服务

服务管理功能控制云边架构中的流量路由和暴露方式：

- **[服务拓扑](./service/service-topology.md)** — 根据节点池拓扑路由 Service 流量，保持边缘流量本地化，避免跨区域数据传输。
- **[NodePort 隔离](./service/nodeport-isolation.md)** — 控制特定节点上的 NodePort 暴露，限制边缘服务的可见范围。

## 跨区域网络

- **[Raven](./raven.md)** — 在云与边、边与边之间构建 VPN 通道，确保跨物理区域和网络域的连通性。Raven 提供 Layer 3 隧道和 Layer 7 代理两种模式，实现全面的边到边和边到云通信。
