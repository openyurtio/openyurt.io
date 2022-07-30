---
title: 手动安装OpenYurt
---

本教程展示了如何手动部署 OpenYurt 集群。本教程使用是一个双节点Kubernetes集群，使用的所有 `yaml` 文件都可以在 [openyurt repo](https://github.com/openyurtio/openyurt/tree/master/config/setup)和[yurt-app-manager repo](https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup)下找到。

## 1. 提前准备

用户需要先自行准备好一个Kubernetes集群(可以通过[kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)工具搭建)，本文档中以2节点的Kubernetes为例。
```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11
```

为了适配云边协同的场景，原生Kubernetes集群的部分组件配置需要适当调整，包含组件有：`Kube-Controller-Manager`, `CoreDNS`, `KubeProxy`。配置调整方法如下:
- [Kube-Controller-Manager](./openyurt-prepare.md#1-kube-controller-manager调整)
- [CoreDNS](./openyurt-prepare.md#2-coredns调整)
- [KubeProxy](./openyurt-prepare.md#33-kubeproxy调整)

## 2. 给云端节点和边缘节点打标签

当与 `apiserver` 断开连接时，只有运行在边缘自治的节点上的Pod才不会被驱逐。因此，我们首先需要通过打 `openyurt.io/is-edge-worker` 的标签的方式，将节点分为云端节点和边缘节点。
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

## 3. 部署OpenYurt的Control-Plane组件

### 3.1 安装Yurt-controller-manager

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

### 3.2 安装Yurt-App-Manager

首先从[yurt-app-manager repo](https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup)获取`config/setup/all_in_one.yaml`。执行如下命令:
```
$ kubectl apply -f config/setup/all_in_one.yaml
```

确认yurt-app-manager组件已经成功创建:
```
$ kubectl get pod -n kube-system | grep yurt-app-manager
```

### 3.3 安装Yurt-tunnel

通过如下命令安装yurt-tunnel-server:
```bash
$ kubectl apply -f config/setup/yurt-tunnel-server.yaml
```

然后再安装yurt-tunnel-agent:
```bash
kubectl apply -f config/setup/yurt-tunnel-agent.yaml
```

当yurt-tunnel-server和yurt-tunnel-agent安装完成后，可以通过命令`kubectl logs/exec`等确认一下yurt-tunnel组件是否正常工作。

### 3.4 安装Yurthub配置

通过如下命令安装Yurthub配置(如: RBAC, configmap):
```bash
$ kubectl apply -f config/setup/yurthub-cfg.yaml
```

## 4. 接入边缘节点

已经是Kubernetes集群的工作节点(如: `node/us-west-1.192.168.0.88`)，我们需要在节点安装OpenYurt的节点端组件(如Yurthub)。 当然，也可以从0开始往集群中接入新节点。

### 4.1 已接入节点的配置调整

下述操作，仅仅针对已经是Kubernetes集群的工作节点。

#### 4.1.1 安装Yurthub

在开始之前，我们需要做如下准备：

1. 获取 apiserver 的地址 (即ip:port) 和 [bootstrap token](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/) ，用于替换模板文件 `config/setup/yurthub.yaml` 中的对应值

在下面的命令中，我们假设 apiserver 的地址是 `1.2.3.4:5678`，bootstrap token 是 `07401b.f395accd246ae52d`

```bash
$ cat config/setup/yurthub.yaml |
sed 's|__kubernetes_master_address__|1.2.3.4:5678|;
s|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&
scp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests
```

Yurthub 将在几分钟内准备就绪。

#### 4.1.2 配置Kubelet

接下来需要重置 kubelet 服务，让它通过 yurthub 访问apiserver (以下步骤假设我们以root身份登录到边缘节点)。由于 kubelet 会通过 http 连接 Yurthub，所以我们为 kubelet 服务创建一个新的 kubeconfig 文件。

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

#### 4.1.3 重建节点上的Pods

当安装完Yurthub并且调整好Kubelet配置后，为了让节点上所有Pods(Yurthub除外)都可以通过Yurthub访问Kube-apiserver，所有需要重建节点上所有Pods(Yurthub pod除外)。请务必确认该操作对生产环境的影响后再执行。
```
$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88
kube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>

// 删除节点上所有的pods(Yurthub pod除外)
$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr
```

### 4.2 从零接入新节点

用户可以直接使用`yurtadm join`命令往集群中接入边缘节点。命令的详细信息可以参考链接： [yurtadm join](./yurtadm-init-join.md#23joining-nodes-to-cluster)