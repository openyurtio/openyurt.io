---
title: Network management overview
---

OpenYurt provides a set of networking features designed to meet the unique requirements of edge computing environments. These features address challenges such as limited bandwidth, cross-region connectivity, lightweight edge nodes, and traffic locality.

The network management capabilities in OpenYurt are organized into the following areas:

## Container Network

Container network management covers the CNI configuration and behavior for edge nodes, including optimizations for edge autonomy:

- **[Host Network](./container-network/hostnetwork.md)** — Deploy edge nodes that use the host network stack without requiring CNI components (Flannel, kube-proxy, CoreDNS), saving resources on lightweight edge nodes.
- **[Flannel](./container-network/flannel.md)** — Flannel edge optimizations including VTEP MAC address preservation and Pod IP retention for edge node restarts and cloud-edge disconnection scenarios.

## Service

Service management features control how traffic is routed and exposed in cloud-edge architectures:

- **[Service Topology](./service/service-topology.md)** — Route Service traffic based on NodePool topology to keep edge traffic local and avoid cross-region data transfer.
- **[NodePort Isolation](./service/nodeport-isolation.md)** — Control NodePort exposure on specific nodes to limit service visibility at the edge.

## Cross-Region Network

- **[Raven](./raven.md)** — Build VPN channels between cloud and edge (or edge and edge) to ensure connectivity across different physical regions and network domains. Raven provides both Layer 3 tunnel and Layer 7 proxy modes for comprehensive edge-to-edge and edge-to-cloud communication.
