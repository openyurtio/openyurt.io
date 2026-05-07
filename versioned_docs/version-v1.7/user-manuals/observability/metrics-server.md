---
title: Metrics Server
---

This guide explains how to run **metrics-server** in the cloud so it can scrape resource usage metrics from edge nodes (kubelet) in an OpenYurt cluster.

By default, metrics-server prefers the node **InternalIP** when talking to kubelet. When the cloud and edge sit in different network domains, the cloud often cannot reach edge InternalIPs directly. You then rely on **Raven** for cross-domain connectivity, configure **metrics-server** to use **Hostname** instead of InternalIP, and resolve node hostnames to the Raven gateway in the cloud. Traffic flows through that gateway and the tunnel to the target edge node.

## Prerequisites

- A working OpenYurt cluster (if you need to create or convert one, see the [installation summary](../../installation/summary.md)).
- For edge scenarios, **Raven** must be installed and **Raven Proxy DNS** (`raven-proxy-dns`) must be deployed so node hostnames resolve to the cloud-side gateway. If Raven is not installed yet, complete step 1 below first.

## Configuration steps

### 1. Install Raven (skip if already installed)

When edge node IPs are not reachable from the cloud, Raven provides cross-network-domain communication. Follow [Manually Setup](../../installation/manually-setup.md), section **3.3 Install raven component**.

### 2. Deploy Raven Proxy DNS

Node **hostnames** must resolve to the Raven cloud gateway so accesses in the form `hostname:port` are forwarded to the correct edge node. See [Raven L7 proxy preparation](../../installation/raven-l7-proxy-prepare.md) for `raven-proxy-dns`.

### 3. Change metrics-server flags

To make metrics-server use the node **Hostname** (instead of InternalIP) when resolving and contacting kubelet, add the following container argument:

```text
--kubelet-preferred-address-types=Hostname
```

A typical approach is to edit the metrics-server Deployment in the `kube-system` namespace and add this flag to the container `args`. If `--kubelet-preferred-address-types` is already set, merge the value so **Hostname** is preferred, according to how metrics-server is deployed in your cluster.

### 4. Verify

After the change rolls out, run:

```bash
kubectl top pods -A
kubectl top node <edge-node-name>
```

If CPU and memory metrics appear for pods and the edge node, the setup is working.
