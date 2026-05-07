---
title: Join Nodes
---

There are two ways to join nodes into OpenYurt cluster in terms of the node status.

- [Join a node into OpenYurt cluster from scratch](./yurtadm-join.md#1-joining-nodes-from-scratch)
- [Install OpenYurt node components](./yurtadm-join.md#2-install-openyurt-node-components)

## 1. Joining nodes from scratch

### 1.1 yurtadm join

Users can join cloud nodes and edge nodes to the OpenYurt cluster using Yurtadm join. Note that when joining a node, the runtime needs to be installed on the node and the swap partition is turned off.

Execute the following command to join the edge node to cluster:

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5
```

Execute the following command to join the cloud node to cluster:

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5
```

When the runtime of the edge node is containerd, the `cri-socket` parameter needs to be configured. For example, change the command above of joining the edge node to:

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5
```

* how to compile `yurtadm` binary, please refer to the link [here](./yurtadm-init.md#21-compile-yurtadm)

Explanation of parameters:

- `1.2.3.4:6443`:  The address of apiserver
- `--token`：bootstrap token(how to get bootstrap token, please refer to the link [here](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/))
- `--node-type`：openyurt node type，can be cloud or edge

The process of `yurtadm join` will automatically install the following k8s components:

- kubeadm
- kubectl
- kubelet
- kube-proxy

The process of `yurtadm join` will pull specially modified cni binaries, the modifications can be found [here](../user-manuals/network/container-network/flannel.md). If you want to use cni binaries that uses prepared beforehand, the cni binaries should be placed under `/opt/cni/bin` directory. Then configure yurtadm parameter `--reuse-cni-bin=true` for `yurtadm join` command.

Also, You can pre-place the `kubelet` and `kubeadm` components in the directories named by the PATH environment variable. However, there are restrictions on the version of `kubelet` and `kubeadm`. `yurtadm` will check if the `major version` and `minor version` are the same as the cluster kubernetes version(Follow semver specification).

### 1.2 yurtadm reset

`yurtadm reset` can be used when it is necessary to delete a node that was joined using `yurtadm join`. Here are the detailed steps:

In master：

```
kubectl drain {NodeName} --delete-local-data --force --ignore-daemonsets
kubectl delete node {NodeName}
```

In joined node:

1\. execute `yurtadm reset`

```
yurtadm reset
```

2\. delete `/etc/cni/net.d` dir：

```
rm -rf /etc/cni/net.d
```


## 2. Install OpenYurt node components

The following operations are intended only for existing worker nodes that are already part of a Kubernetes cluster (Node deployment via kubeadm and usage of `systemd` are highly recommended). OpenYurt provides a declarative **Label-Driven YurtHub mechanism** to automatically convert a standard node into an edge node.

### 2.1 convert

Suppose we want to integrate an existing Kubernetes node into a NodePool to manage units and enable edge autonomy.

First, ensure that you have created the corresponding `NodePool` object with the `Edge` type:

```bash
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta2
kind: NodePool
metadata:
  name: worker
spec:
  type: Edge
EOF
```

Then, simply assign the node to the target NodePool using labels to trigger the automated conversion into an OpenYurt edge node:

```bash
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/nodepool=worker
```

**Conversion Process & Workload Impact:**
- *Automated Processing:* After the label is applied, the `YurtNodeConversionController` will automatically dispatch the `node-servant` Job to execute the conversion operations on the host: deploying the `yurthub` systemd service, appending local proxy settings for the Kubelet, and finally applying the `openyurt.io/is-edge-worker=true` label.
- *Workload Continuity:* To allow existing workloads to reconnect to the APIServer via the newly established local `yurthub`, the control plane will delete Pods on this node to trigger their recreation. **Important Note:** This brief process may impact service availability, and bare Pods pose a significant risk. Please ensure node-level migration measures or high-availability safeguards are in place beforehand.

### 2.2 revert
If you subsequently wish to **detach** the node and revert it to a native Kubernetes state directly connected to the APIServer (Revert):

```bash
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/nodepool-
```
The controller will automatically uninstall YurtHub, revert the Kubelet parameter overrides, and restart the node's Kubelet.

> The legacy practice of manually appending the `openyurt.io/is-edge-worker=true` label by users has been completely superseded by the Controller. This label is now a read-only factual state maintained by the controller, and manual modification is no longer recommended.
