---
title: 节点接入
---

用户根据节点自身的状况，选择下述其中一种方法来接入节点

- [从零开始把节点加入集群](./yurtadm-join.md#1-从零开始把节点加入集群)
- [在存量的K8s节点上安装OpenYurt Node组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)

## 1. 从零开始把节点加入集群

### 1.1 yurtadm join

用户可以通过 Yurtadm join 将云端节点、边缘节点加入 OpenYurt 集群。注意，在加入节点时，需要在节点上安装运行时，并关闭交换分区。

执行以下命令加入边缘节点：

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5
```

执行以下命令加入云端节点：

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5
```

当边缘节点runtime为containerd时，需要配置`cri-socket`参数，如上面执行命令加入边缘节点改为：

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5
```

对参数的解释：

- `1.2.3.4:6443`: apiserver 的地址
- `--token`：bootstrap token（如何获取可以参考[链接](https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/bootstrap-tokens/)）
- `--node-type`：openyurt 节点类型，可以为：cloud 或者 edge

如何编译`yurtadm`二进制，可以参考[链接](../developer-manuals/how-to-build-and-test.md)

`yurtadm join` 的过程会自动安装以下k8s组件：

- kubeadm
- kubectl
- kubelet
- kube-proxy

`yurtadm join`的过程中，将会拉取经过特殊修改的cni二进制文件，修改的内容可以参考[链接](../user-manuals/network/edge-pod-network.md)。如果你想要使用预先准备好的cni二进制文件，你应该将它们放置在目录`/opt/cni/bin`下，接着在使用`yurtadm join`时添加`--reuse-cni-bin=true`参数即可。

你也可以将`kubelet`和`kubeadm`组件提前预置在PATH环境变量中。不过对于`kubelet`和`kubeadm`的版本有一些限制，`yurtadm`会检查组件的`major version`和`minor version`是否与集群Kubernetes版本相同（这遵循semver规范）。

### 1.2 yurtadm reset

当需要删除使用 `yurtadm join` 加入的节点时，可以使用 `yurtadm reset`。下面是详细步骤：

在 master 节点上：

```
kubectl drain {NodeName} --delete-local-data --force --ignore-daemonsets
kubectl delete node {NodeName}
```

在 join 的节点上：

1\. 执行 `yurtadm reset`

```
yurtadm reset
```

2\. 删除 `/etc/cni/net.d`目录：

```
rm -rf /etc/cni/net.d
```

## 2. 在存量的K8s节点上安装OpenYurt Node组件

下述操作，仅仅针对已经是Kubernetes集群的工作节点。

### 2.1 给节点打标签

OpenYurt需要根据节点的`openyurt.io/is-edge-worker`标签区分云端节点和边缘节点，从而在云边断联情况下判断是否驱逐节点上Pod. 假设我们的节点`us-west-1.192.168.0.88`是一个边缘节点，则

```bash
$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true
node/us-west-1.192.168.0.88 labeled
```

> 如果`us-west-1.192.168.0.88`不是一个边缘节点，则将`true`改为`false`即可

为了激活自治模式，我们需要通过如下命令给边缘节点添加注解。

```bash
$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true
node/us-west-1.192.168.0.88 annotated
```

如果希望使用OpenYurt的单元化管理能力，我们可以将该节点加入节点池中：

```bash
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: worker
spec:
  type: Edge
EOF
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=worker
```

### 2.2 部署Edge工作模式的Yurthub

- 从[openyurt repo](https://github.com/openyurtio/openyurt/blob/master/config/setup/yurthub.yaml)获取yurthub.yaml，执行如下修改后上传到边缘节点的/etc/kubernets/manifests目录。
- 获取 apiserver 的地址 (即ip:port) 和 [bootstrap token](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/) ，用于替换模板文件 `yurthub.yaml` 中的对应值

在下面的命令中，我们假设 apiserver 的地址是 `1.2.3.4:5678`，bootstrap token 是 `07401b.f395accd246ae52d`

```bash
$ vi /etc/kubernetes/manifests/yurt-hub.yaml
...
    command:
    - yurthub
    - --v=2
    - --server-addr=https://1.2.3.4:5678
    - --node-name=$(NODE_NAME)
    - --join-token=07401b.f395accd246ae52d
...
```

Yurthub 将在几分钟内准备就绪。

### 2.3 配置Kubelet

接下来需要重置kubelet服务，让kubelet通过Yurthub访问apiserver (以下步骤假设我们以root身份登录到边缘节点)。由于 kubelet 会通过 http 连接 Yurthub，所以我们为 kubelet 服务创建一个新的 kubeconfig 文件。

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

为了让 kubelet 使用新的 kubeconfig，我们编辑 kubelet 服务的 drop-in 文件(即 `/etc/systemd/system/kubelet.service.d/10-kubeadm.conf` 或者  `/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf` 在 CentOS 系统上))。

```bash
sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\/etc\/kubernetes\/bootstrap-kubelet.conf\ --kubeconfig=\/etc\/kubernetes\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\/var\/lib\/openyurt\/kubelet.conf|g" \
    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
```

然后，我们重启 kubelet 服务。

```bash
# assume we are logged in to the edge node already
$ systemctl daemon-reload && systemctl restart kubelet
```

最后，当重启Kubelet之后需要确认节点状态是否Ready。

```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11
```

### 2.4 重建节点上的Pods

当安装完Yurthub并且调整好Kubelet配置后，为了让节点上所有Pods(Yurthub除外)都可以通过Yurthub访问Kube-apiserver，所有需要重建节点上所有Pods(Yurthub pod除外)。请务必确认该操作对生产环境的影响后再执行。

```bash
$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88
kube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>

// 删除节点上所有pods(Yurthub pod除外)
$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr

// 确认节点上所有pods正常运行
$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88
kube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   coredns-qq6ad                             1/1     Running   0          19d     10.148.2.198   us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-flannel-ds-j123d                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-proxy-a2qdc                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
```
