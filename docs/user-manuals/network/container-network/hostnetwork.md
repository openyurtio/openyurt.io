---
title: Host Network
---

This document introduces OpenYurt's Host Network mode NodePool feature, which allows edge nodes to run pods using the host network stack without requiring CNI components (such as Flannel, kube-proxy, or CoreDNS).

## Background

In a typical cloud-edge architecture, every Kubernetes node runs CNI-related components — kube-proxy for Service load balancing, Flannel (or another CNI) for inter-pod networking, and CoreDNS for pod-to-pod DNS resolution. These components consume CPU, memory, and network resources.

In certain edge scenarios, nodes only need to run simple, lightweight workloads that:
- Communicate directly via the host network (e.g., calling external APIs, reporting data to the cloud)
- Do not need to access other pods via Kubernetes Service or DNS
- Do not require cross-node pod-to-pod communication

For these nodes, running kube-proxy, Flannel, and CoreDNS is unnecessary and wastes valuable edge resources. OpenYurt's **Host Network mode NodePool** addresses this problem.

## Architecture

### How It Works

When you create a NodePool with `hostNetwork: true`, OpenYurt handles the following automatically:

1. **Node Label Injection** — The Node Defaulting Webhook adds the label `nodepool.openyurt.io/hostnetwork: "true"` to every node in the Host Network NodePool.

2. **CNI Isolation** — CNI components (Flannel, kube-proxy, CoreDNS, etc.) are configured with `nodeAffinity` to exclude nodes carrying the `nodepool.openyurt.io/hostnetwork: "true"` label, so these components will not be deployed on host network nodes.

3. **Pod Scheduling Guard** — The Pod Defaulting Webhook ensures that pods with the annotation `apps.openyurt.io/exclude-host-network-pool: "true"` are automatically given NodeAffinity rules to prevent scheduling onto host network nodes.

<div align="center">
  <img src="../../../../static/img/docs/user-manuals/network/hostnetwork-arch.png" width="70%" alt="Host Network Architecture" />
</div>

### Comparison: Standard Node vs. Host Network Node

| Feature | Standard Node | Host Network Node |
|---------|--------------|-------------------|
| CNI Plugin | Flannel / Calico / etc. | Not required |
| kube-proxy | Required | Not needed |
| Pod network | Overlay / VPC | Host network namespace |
| Service access | Via ClusterIP | Via NodePort / host IP |
| DNS (CoreDNS) | Available | Not needed |
| Resource overhead | Higher (CNI + kube-proxy + CoreDNS pods) | Minimal |
| Pod IP assignment | From PodCIDR | Uses node IP |
| Cross-node pod communication | Supported | Not supported |

## Prerequisites

Before using the Host Network mode NodePool, ensure the following:

1. **Yurt-Manager is installed** — The NodePool controller and webhooks are integrated in the Yurt-Manager component. Refer to the [installation guide](../../../installation/manually-setup.md) if not already installed.

2. **CNI components have anti-affinity configured** — Flannel, kube-proxy, CoreDNS, and other infrastructure components must include the following `nodeAffinity` to avoid scheduling on host network nodes:

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

> **Note**: If you deployed OpenYurt using the official Helm charts or `yurtctl`, this configuration may already be applied by default. Verify your deployment manifests.

## Getting Started

### Step 1: Create a Host Network NodePool and Add Nodes

Create a NodePool with `hostNetwork: true` and add your edge nodes to it. For detailed steps, see:
- [Create a Node Pool](../../node-pool-management/create-a-node-pool.md) — Set `spec.hostNetwork: true` in the NodePool spec.
- [Edit a Node Pool](../../node-pool-management/edit-a-node-pool.md) — Configure labels, annotations, and taints for the NodePool.
- [Join a Node](../../node-management/join-a-node.md) — Label edge nodes to assign them to the Host Network NodePool.

After a node is added to a Host Network NodePool, the Node Defaulting Webhook automatically adds the label `nodepool.openyurt.io/hostnetwork: "true"` to the node.

### Step 2: Deploy Workloads on Host Network Nodes

Pods running on Host Network nodes should use `hostNetwork: true` in their spec and target the node pool via `nodeSelector`:

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

### Step 3: Exclude CNI-Dependent Pods from Host Network Nodes

If you have pods that require CNI networking (e.g., they need to communicate with other pods via Service or DNS), add the annotation `apps.openyurt.io/exclude-host-network-pool: "true"`. The Pod Defaulting Webhook will automatically add NodeAffinity to prevent these pods from being scheduled onto host network nodes:

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

This is useful for deployments that span both standard and host network node pools, ensuring CNI-dependent workloads only run on standard nodes.

## Restrictions and Known Behaviors

### Cannot Modify hostNetwork After NodePool Creation

Just as Kubernetes does not allow modifying a running pod's `hostNetwork` field, OpenYurt does not allow changing the `hostNetwork` field of a NodePool after creation. The NodePool validation webhook enforces this restriction.

### Pod Network Limitations on Host Network Nodes

Pods on Host Network nodes:
- **Cannot** access other pods via Kubernetes Service (no kube-proxy)
- **Cannot** resolve internal cluster DNS names (no CoreDNS on the node)
- **Cannot** communicate with pods on other nodes via overlay network (no Flannel)
- **Can** directly access the host network, external APIs, and local services
- **Can** be accessed via the node's IP address and hostPort

### Node Cannot Be Moved Between Standard and Host Network NodePools

Because network setup is applied when the node joins a Host Network NodePool, moving a node between a standard NodePool and a Host Network NodePool (or vice versa) requires resetting the node and re-joining it.

## FAQ

**Q: Can I run both standard and Host Network NodePools in the same cluster?**

Yes. This is the intended usage pattern. Standard NodePools handle workloads that need full Kubernetes networking (Services, DNS, pod-to-pod communication), while Host Network NodePools handle lightweight edge workloads.

**Q: Can pods on Host Network nodes communicate with pods on standard nodes?**

Directly via the node's IP address, yes. But not via Kubernetes Service or DNS, since kube-proxy and CoreDNS are not deployed on Host Network nodes.

**Q: What happens if I remove the hostNetwork label from a node manually?**

The node's network configuration will not be automatically restored. To switch a node back to standard networking, you must reset the node and re-join it to a standard NodePool.
