---
title: Join Nodes
---

There are two ways to join nodes into OpenYurt cluster in terms of the node status.

- [Join a node into OpenYurt cluster from scratch](./yurtadm-join.md#1-joining-nodes-from-scratch)
- [Install OpenYurt node components](./yurtadm-join.md#2-install-openyurt-node-components)

## 1. Joining nodes from scratch

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

* how to compile `yurtadm` binary, please reference link [here](./yurtadm-init.md#21-compile-yurtadm)

## 2. Install OpenYurt node components

only install node components of OpenYurt on nodes that already have been joined in the Kubernetes cluster.

### 2.1 Setup Yurthub

Before proceeding, we need to prepare the following items:
1. Get the apiserver's address (i.e., ip:port) and a [bootstrap token](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/), which will be used to replace the placeholder in the template file `config/setup/yurthub.yaml`.

In the following command, we assume that the address of the apiserver is 1.2.3.4:5678 and bootstrap token is 07401b.f395accd246ae52d
```bash
$ cat config/setup/yurthub.yaml |
sed 's|__kubernetes_master_address__|1.2.3.4:5678|;
s|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&
scp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests
```
and the Yurthub will be ready in minutes.

### 2.2 Configure Kubelet

we need to reset the kubelet service to let it access the apiserver through the yurthub (The following steps assume that we have logged on to the edge node as the root user).
As kubelet will connect to the Yurthub through HTTP, so we create a new kubeconfig file for the kubelet service.
```bash
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

In order for let kubelet to use the new kubeconfig, we edit the drop-in file of the kubelet service (i.e., `/etc/systemd/system/kubelet.service.d/10-kubeadm.conf` or `/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf` for CentOS)
```bash
sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\/etc\/kubernetes\/bootstrap-kubelet.conf\ --kubeconfig=\/etc\/kubernetes\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\/var\/lib\/openyurt\/kubelet.conf|g" \
    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
```

then, we restart the kubelet service
```bash
# assume we are logged in to the edge node already
$ systemctl daemon-reload && systemctl restart kubelet
```

Finally, we need to make sure node is ready after kubelet restart.
```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11
```

### 2.3 Restart Pods

After Yurthub installation and kubelet restart, all pods on this edge node should be recreated in order to make sure pods access kube-apiserver through Yurthub.
Before performing this operation, confirm the impact on the production environment.
```
$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88
kube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>

// then delete all pods above except yurthub pod.
$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr
```