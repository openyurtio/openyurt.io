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

如何编译`yurtadm`二进制，可以参考[链接](./yurtadm-init.md#21编译-yurtadm)

`yurtadm join` 的过程会自动安装以下k8s组件：

- kubeadm
- kubectl
- kubelet
- kube-proxy

`yurtadm join`的过程中，将会拉取经过特殊修改的cni二进制文件，修改的内容可以参考[链接]。如果你想要使用预先准备好的cni二进制文件，你应该将它们放置在目录`/opt/cni/bin`下，接着在使用`yurtadm join`时添加`--reuse-cni-bin=true`参数即可。

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

下述操作，仅仅针对已经是 Kubernetes 集群的工作节点（推荐节点由 kubeadm 方式部署，且宿主机使用 `systemd`）。OpenYurt 提供了一种声明式的 **Label-Driven YurtHub (基于标签驱动的自动转换)** 机制来将普通节点纳管为边缘节点。

### 2.1 convert

假设我们需要将一个存量的 Kubernetes 节点接入单元化管理并开启边缘自治能力。

首先，确保你创建了对应的节点池 (`NodePool`) 对象，且其类型为 `Edge`：

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

接着，只需赋予存量节点对应的节点池标签，即可触发向 OpenYurt 的自动转换：

```bash
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/nodepool=worker
```

**转换过程说明与业务影响：**
- *自动处理：* 打上标签后，`YurtNodeConversionController` 将自动调度 `node-servant` Job 在宿主机上执行转换操作：包括下发 `yurthub` systemd 服务、为 Kubelet 追加本地代理配置、并在最后打上 `openyurt.io/is-edge-worker=true`。
- *业务感知：* 为了让原本在跑的工作负载重新连接至本地的 `yurthub` APIServer 出口，控制平面会删除这台节点上的Pod 并触发其重建。**请务必注意**，在这短暂的处理期间可能会影响业务可用性，裸 Pod 将极具风险，请提前做好节点级的迁移准备或具备故障高可用预案。

### 2.2 revert
若是未来你希望**剥离**该节点，使其恢复到原生的 Kubernetes 直连 APIServer 的状态（Revert）：

```bash
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/nodepool-
```
控制器会自动卸载 YurtHub，撤销 kubelet 配置上的参数覆写并重启恢复。

> 旧版本中用户手工打上 `openyurt.io/is-edge-worker=true` 的操作将被 Controller 完全接管。目前该标签为控制器维护的只读事实标签，不再建议用户人工修改。
