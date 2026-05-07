---
title: Join a node
---

This document outlines the procedures for joining a node into an OpenYurt cluster. There are two primary methods depending on the node's initial state:

- [1. Joining a New Node from Scratch](#1-joining-a-new-node-from-scratch)
  - [Prerequisites](#prerequisites)
  - [1.1 Using `yurtadm join`](#11-using-yurtadm-join)
  - [1.2 Component and CNI Handling](#12-component-and-cni-handling)

## 1. Joining a New Node from Scratch

This method is for nodes that are not yet part of any Kubernetes cluster. The `yurtadm join` command streamlines this process by installing necessary components and connecting the node to the OpenYurt cluster.

### Prerequisites

Before joining, ensure the following conditions are met on the node:
- A container runtime (like containerd or Docker) is installed and running.
- The swap partition is turned off.
- The node has network connectivity to the Kubernetes API server.

### 1.1 Using `yurtadm join`

The `yurtadm join` command handles the installation of `kubeadm`, `kubelet`, and `kube-proxy`, and then joins the node to the cluster.

**To join an edge node:**

* [yurtadm](https://github.com/openyurtio/openyurt/releases) binary can be downloaded from the OpenYurt Releases page.
* how to compile `yurtadm` binary, please refer to the link [here](../../installation/yurtadm-init.md#21-compile-yurtadm)
```sh
yurtadm join <apiserver-address>:6443 --token=<apiserver-token> --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5
```

If the edge node uses `containerd` as its runtime, you must specify the `--cri-socket` parameter:
```sh
yurtadm join <apiserver-address>:6443 --token=<token> --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5
```

**To join a cloud node:**

```sh
yurtadm join <apiserver-address>:6443 --token=<token> --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5
```

**Parameter Explanation:**
- `<apiserver-address>:6443`: The address of the apiserver.
- `--token`: The bootstrap token for authenticating with the cluster. Refer to the [Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/) on how to generate a token.
- `--node-type`: openyurt node type, which can be `cloud` or `edge`.

### 1.2 Component and CNI Handling

`yurtadm join` will automatically handle component installation.
- **Kubernetes Components**: It installs `kubelet`, `kubeadm`, etc. You can pre-place these binaries in your `$PATH` to use a specific version, but `yurtadm` will verify that their major and minor versions match the cluster's Kubernetes version.
- **CNI Binaries**: The join process pulls specially modified CNI binaries (e.g., for Flannel) to suit edge environments. If you have prepared your own CNI binaries, place them under `/opt/cni/bin` and use the `--reuse-cni-bin=true` flag with the `yurtadm join` command.