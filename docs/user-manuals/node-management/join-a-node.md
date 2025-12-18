---
title: Join a node
---

This document outlines the procedures for joining a node into an OpenYurt cluster. There are two primary methods depending on the node's initial state:

- [1. Joining a New Node from Scratch](#1-joining-a-new-node-from-scratch)
  - [Prerequisites](#prerequisites)
  - [1.1 Using `yurtadm join`](#11-using-yurtadm-join)
  - [1.2 Component and CNI Handling](#12-component-and-cni-handling)
- [2. Converting an Existing Kubernetes Node](#2-converting-an-existing-kubernetes-node)
  - [2.1 Label and Annotate the Node](#21-label-and-annotate-the-node)
  - [2.2 Setup YurtHub](#22-setup-yurthub)
  - [2.3 Reconfigure Kubelet](#23-reconfigure-kubelet)
  - [2.4 Restart Pods on the Node](#24-restart-pods-on-the-node)

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



## 2. Converting an Existing Kubernetes Node

This method is for nodes that are already part of a standard Kubernetes cluster and you want to convert them into OpenYurt edge or cloud nodes. This involves labeling the node and manually setting up YurtHub.

### 2.1 Label and Annotate the Node

First, identify the node as either an `edge` or `cloud` node using a label.

**Labeling an edge node:**
```bash
kubectl label node <node-name> openyurt.io/is-edge-worker=true
```
> For a cloud node, set the label value to `false`.

**Enabling node autonomy (Optional):**
To prevent pods from being evicted when an edge node loses connection to the control plane, add the `autonomy-duration` annotation. The node.openyurt.io/autonomy-duration annotation will map to the tolerationSeconds field in the Pod, a value of 0 indicates that Pods will never be evicted. The duration format can be found [here](https://pkg.go.dev/maze.io/x/duration#ParseDuration).
```bash
kubectl annotate node <node-name> node.openyurt.io/autonomy-duration=0
```

**Adding the node to a NodePool (Optional):**
To leverage OpenYurt's unitization capabilities, you can assign the node to a `NodePool`.
```bash
# First, create a NodePool if it doesn't exist
cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta2
kind: NodePool
metadata:
  name: worker
spec:
  type: Edge
EOF

# Then, label the node to associate it with the NodePool
kubectl label node <node-name> apps.openyurt.io/desired-nodepool=worker
```

### 2.2 Setup YurtHub

YurtHub is a critical component that acts as a proxy between the `kubelet` and the API server. It is typically deployed as a static pod.

1.  **Prepare the YurtHub manifest:**
    - Get a bootstrap token and the API server's address.
    - Use these values to populate a YurtHub manifest template (e.g., [`config/setup/yurthub.yaml`](https://github.com/openyurtio/openyurt/blob/master/config/setup/yurthub.yaml)).
    
    ```bash
    # Replace placeholders and copy the manifest to the target node\'s manifests directory
    cat config/setup/yurthub.yaml | 
    sed 's|__kubernetes_master_address__|<apiserver_address>|;
    s|__bootstrap_token__|<token>|' > /tmp/yurthub.yaml
    scp /tmp/yurthub.yaml root@<node-ip>:/etc/kubernetes/manifests/
    ```

### 2.3 Reconfigure Kubelet

Next, reconfigure the `kubelet` on the node to communicate through YurtHub instead of directly with the API server.

1.  **Create a new kubeconfig for kubelet:**
    This kubeconfig points `kubelet` to the local YurtHub instance (`http://127.0.0.1:10261`).

    ```bash
    # Run these commands on the target node
    mkdir -p /var/lib/openyurt
    cat << EOF > /var/lib/openyurt/kubelet.conf
    apiVersion: v1
    clusters:
    - cluster:
        server: http://127.0.0.1:10261
      name: default-cluster
    contexts:
    - context:
        cluster: default-cluster
        namespace: default
        user: default-auth
      name: default-context
    current-context: default-context
    kind: Config
    preferences: {}
    EOF
    ```

2.  **Update the kubelet service configuration:**
    Modify the `kubelet`'s systemd drop-in file to use the new kubeconfig. The file path may vary depending on your OS (e.g., `/etc/systemd/system/kubelet.service.d/10-kubeadm.conf`).
    ```bash
    sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\/etc\/kubernetes\/bootstrap-kubelet.conf\ --kubeconfig=\/etc\/kubernetes\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\/var\/lib\/openyurt\/kubelet.conf|g" \
    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
    ```

3.  **Restart the kubelet service:**
    ```bash
    # Run on the target node
    systemctl daemon-reload && systemctl restart kubelet
    ```
    After restarting, verify the node returns to a `Ready` state using `kubectl get nodes`.

### 2.4 Restart Pods on the Node

Finally, to ensure all pods on the node communicate through YurtHub, they must be recreated.

**Warning:** This operation will cause a brief service interruption. Confirm the impact on your production environment before proceeding.

```bash
# 1. List all pods running on the converted node
kubectl get pod -A -o wide | grep <node-name>

# 2. Delete all user pods and system pods (except the yurthub pod)
#    The Kubernetes controllers will automatically recreate them.
kubectl delete pod <pod-1> <pod-2> -n <namespace>
```