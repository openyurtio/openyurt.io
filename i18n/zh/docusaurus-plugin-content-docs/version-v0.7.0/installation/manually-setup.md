---
title: 手动转换
---

本教程展示了如何手动部署 OpenYurt 集群。本教程使用是一个双节点ACK(版本1.14.8)的集群，使用的所有 `yaml` 文件都可以在 `config/setup/` 下找到。

## 给云端节点和边缘节点打标签

当与 `apiserver` 断开连接时，只有运行在边缘自治的节点上的Pod才不会被驱逐。因此，我们首先需要通过打 `openyurt.io/is-edge-worker` 的标签的方式，将节点分为云端节点和边缘节点。假设给定的 `Kubernetes` 集群有两个节点：

```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.14.8-aliyun.1
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.14.8-aliyun.1
```

我们将 `us-west-1.192.168.0.87` 作为云端节点，将标签的 `value` 值设置为 `false`

```bash
$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false
node/us-west-1.192.168.0.87 labeled
```

然后边缘节点设置为 `true`

```bash
$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true
node/us-west-1.192.168.0.88 labeled
```

为了激活自治模式，我们需要通过如下命令给边缘节点添加注解。

```bash
$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true
node/us-west-1.192.168.0.88 annotated
```

## 部署 Yurt-controller-manager

接下来，我们需要部署 `yurt-controller-manager`，防止在与 `apiserver` 断开期间，自治边缘节点上的Pod被驱逐。

```bash
$ kubectl apply -f config/setup/yurt-controller-manager.yaml
deployment.apps/yurt-controller-manager created
```
### 备注
由于 `Docker` 对匿名请求开启了拉取速率限制，您可能会遇到错误信息提示，比如："You have reached your pull rate limit. xxxx"。在这种情况下，您需要创建一个 `docker-registry` 密码来拉取镜像。

```
$kc create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system
```

然后编辑 `config/setup/yurt-controller-manager.yaml`。

```yaml
...
      containers:
      - name: yurt-controller-manager
        image: openyurt/yurt-controller-manager:latest
        command:
        - yurt-controller-manager
      imagePullSecrets:
      - name: dockerpass
```
## 禁用默认的 `nodelifecycle` 控制器

为了让 `yurt-controller-mamanger` 能够正常工作，我们需要关闭默认的 `nodelifecycle` 控制器。可以通过配置 `--controllers` 参数值并重启 `kube-controller-manager` 来禁用 `nodelifecycle` 控制器。

假设最初的参数值像这样 `--controllers=*,bootstrapsigner,tokencleaner`，要禁用 `nodelifecycle` 控制器，我们需要将参数值更改为 `--controllers=*,bootstrapsigner,tokencleaner,-nodelifecycle`。

如果 `kube-controller-manager` 是以静态 pod 的方式部署在 master 节点上，并且您有登录 master 节点的权限，则可以通过修改 `/etc/kubernetes/manifests/kube-controller-manager.yaml` 文件来完成上述操作。修改后，`kube-controller-manager` 会自动重启。

## 部署 Yurthub

在 `yurt-controller-manager` 启动并正常运行后，我们需要以静态 pod 的方式部署 `Yurthub`。

在开始之前，我们需要做如下准备：

1. 为 yurthub 创建全局配置(即RBAC, configmap)

```bash
$ kubectl apply -f config/setup/yurthub-cfg.yaml
```

2. 获取 apiserver 的地址 (即ip:port) 和 [bootstrap token](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/) ，用于替换模板文件 `config/setup/yurthub.yaml` 中的对应值

在下面的命令中，我们假设 apiserver 的地址是 `1.2.3.4:5678`，bootstrap token 是 `07401b.f395accd246ae52d`

```bash
$ cat config/setup/yurthub.yaml |
sed 's|__kubernetes_master_address__|1.2.3.4:5678|;
s|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&
scp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests
```

Yurthub 将在几分钟内准备就绪。

## 部署 Yurt-tunnel (可选)

请参考此 [文档](https://github.com/openyurtio/openyurt.io/blob/master/docs/installation/yurt-tunnel-tutorial.md#5-setup-the-yurt-tunnel-manually) 手动部署 Yurttunnel。

## 重置 Kubelet

至此，我们已经为 OpenYurt 集群部署了所有必需的组件，接下来，我们只需要重置 kubelet 服务，让它通过 yurthub 访问apiserver (以下步骤假设我们以root身份登录到边缘节点)。由于 kubelet 会通过 http 连接 Yurthub，所以我们为 kubelet 服务创建一个新的 kubeconfig 文件。

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

为了让 kubelet 使用新的 kubeconfig，我们编辑 kubelet 服务的 drop-in 文件(即 `/etc/systemd/system/kubelet.service.d/10-kubeadm.conf`)。

```bash
sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\/etc\/kubernetes\/bootstrap-kubelet.conf\ --kubeconfig=\/etc\/kubernetes\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\/var\/lib\/openyurt\/kubelet.conf|g" \
    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
```

最后，我们重启 kubelet 服务。

```bash
# assume we are logged in to the edge node already
$ systemctl daemon-reload && systemctl restart kubelet
```
