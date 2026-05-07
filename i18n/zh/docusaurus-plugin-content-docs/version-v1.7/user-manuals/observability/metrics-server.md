---
title: 使用 Metrics Server 采集边缘节点指标
---

本文说明在 OpenYurt 边缘集群中，如何让云端组件 **metrics-server** 正常拉取边缘节点（kubelet）的资源用量指标。

在默认配置下，metrics-server 会优先通过节点的 **InternalIP** 访问 kubelet。云、边处于不同网络域时，云端往往无法直连边缘节点的 InternalIP，因此需要借助 **Raven** 做跨网络域转发，并让 metrics-server 改为通过 **Hostname** 访问 kubelet；同时将节点主机名解析到 Raven 云上 Gateway，由 Gateway 经隧道转发到目标边缘节点。

## 前提条件

- 已具备可用的 OpenYurt 集群（若尚未安装，可参考 [安装手册](../../installation/summary.md)）。
- 边缘场景需已部署 **Raven**，并完成 **Raven Proxy 专用 DNS**（使节点 hostname 能解析到云上 Gateway）。若未安装 Raven，请先完成下列第 1 步。

## 配置步骤

### 1. 安装 Raven（若已安装可跳过）

边缘节点 IP 无法从云端直连时，需要 Raven 提供跨网络域通信能力。安装方式见 [在 Kubernetes 上安装](../../installation/manually-setup.md) 中的 **3.3 安装跨网络域通信组件 Raven**。

### 2. 部署 Raven Proxy 专用 DNS

需要将节点 **hostname** 解析到 Raven 的云上 Gateway，以便 `hostname:Port` 形式的访问能经 Gateway 转发到对应边缘节点。具体步骤见 [Raven 七层代理准备](../../installation/raven-l7-proxy-prepare.md)（raven-proxy-dns）。

### 3. 修改 metrics-server 运行参数

为让 metrics-server 使用节点 **Hostname**（而非 InternalIP）去解析并访问 kubelet，在 metrics-server 的容器启动参数中增加：

```text
--kubelet-preferred-address-types=Hostname
```

常见做法是在 `kube-system` 命名空间下编辑 metrics-server 的 Deployment，在容器 `args` 中加入上述参数（或与现有 `--kubelet-preferred-address-types` 合并为以 Hostname 优先的列表，具体以集群当前部署方式为准）。

### 4. 验证

在配置生效后执行：

```bash
kubectl top pods -A
kubectl top node <边缘节点名称>
```

若各 Pod、边缘节点均能正常显示 CPU/内存等指标，说明配置成功。
