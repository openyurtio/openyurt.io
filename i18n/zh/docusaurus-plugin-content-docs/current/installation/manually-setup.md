---
title: 手动安装OpenYurt
---

本教程展示了如何手动部署 OpenYurt 集群。本教程使用是一个双节点Kubernetes集群，使用的所有 `yaml` 文件都可以在 [openyurt repo](https://github.com/openyurtio/openyurt/tree/master/config/setup)和[yurt-app-manager repo](https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup)下找到。

## 1 提前准备

用户需要先自行准备好一个Kubernetes集群(可以通过[kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)工具搭建)，本文档中以2节点的Kubernetes为例。
```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11
```

## 2 给云端节点和边缘节点打标签

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

## 3 部署OpenYurt的Control-Plane组件

### 3.1 安装Yurt-controller-manager

部署 `yurt-controller-manager`，防止在与 `apiserver` 断开期间，自治边缘节点上的Pod被驱逐。

```bash
$ kubectl apply -f config/setup/yurt-controller-manager.yaml
deployment.apps/yurt-controller-manager created
```
#### 备注:
由于 `Docker` 对匿名请求开启了拉取速率限制，您可能会遇到错误信息提示，比如："You have reached your pull rate limit. xxxx"。在这种情况下，您需要创建一个 `docker-registry` 密码来拉取镜像。

```
$ kubectl create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system
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

#### 3.2.1 部署Yurt-App-Manager

添加OpenYurt的Helm仓库：

```
helm repo add openyurt https://openyurtio.github.io/openyurt-helm
```

安装`yurt-app-manager`:

```shell
helm install -n kube-system yurt-app-manager openyurt/yurt-app-manager
```

确认`yurt-app-manager`组件已经成功创建:

```
kubectl get pod -n kube-system | grep yurt-app-manager
```

#### 3.2.2 创建节点池

为了更好的管理节点和节点上的流量(如Service流量拓扑管理)，我们推荐把二层网络互通的节点放在同一个节点池。本例中为云边各自创建一个节点池，具体如下:

```
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: master
spec:
  type: Cloud
---
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: worker
spec:
  type: Edge
EOF
```

#### 3.2.3 节点加入节点池

分别讲云端和边缘节点加入3.2.2中创建的节点池，具体如下:

```
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master
node/us-west-1.192.168.0.87 labeled
$ kubectl label node us-west-1.192.168.0.88  apps.openyurt.io/desired-nodepool=worker
node/us-west-1.192.168.0.88 labeled
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

当yurt-tunnel-server和yurt-tunnel-agent安装完成后，可以通过命令`kubectl -n kube-system get po`等确认一下yurt-tunnel组件是否正常启动。

### 3.4 安装Yurthub配置

通过如下命令安装Yurthub配置(如: RBAC, configmap):
```bash
$ kubectl apply -f config/setup/yurthub-cfg.yaml
```

## 4. Master节点调整

为了保证Yurt-Controller-Manager可以正常工作，需要关闭Kube-Controller-Manager中的NodeLifeCycle controller(目前正在优化，使Kube-Controller-Manager无需调整)。

同时为了保证Master节点上的Kube-apiserver访问kubelet的流量，可以无感知的经过yurt-tunnel-server/yurt-tunnel-agent，需要调整kube-apiserver组件的相关配置。

### 4.1 Kube-Controller-Manager调整

Kube-Controller-Manager配置调整方法如下:
- [Kube-Controller-Manager](./openyurt-prepare.md#2-kube-controller-manager调整)

### 4.2 Kube-apiserver调整

Kube-apiserver配置调整方法如下:
- [Kube-apiserver](./openyurt-prepare.md#3-kube-apiserver调整)

### 4.3 部署cloud工作模式的Yurthub

- master节点上kube-apiserver通过Hostname访问kubelet时，为保证只访问Cloud节点池内的CoreDNS进行域名解析，需要在master节点上部署working-mode=cloud的Yurthub。
- 从[openyurt repo](https://github.com/openyurtio/openyurt/blob/master/config/setup/yurthub.yaml)获取yurthub.yaml，执行如下修改后上传到master节点的/etc/kubernets/manifests目录。
- 获取 apiserver 的地址 (即ip:port) 和 [bootstrap token](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/) ，用于替换模板文件 `yurthub.yaml` 中的对应值

在下面的命令中，我们假设 apiserver 的地址是 `1.2.3.4:5678`，bootstrap token 是 `07401b.f395accd246ae52d`

```
# vi /etc/kubernetes/manifests/yurt-hub.yaml
...
    command:
    - yurthub
    - --v=2
    - --server-addr=https://1.2.3.4:5678
    - --node-name=$(NODE_NAME)
    - --join-token=07401b.f395accd246ae52d
    - --working-mode=cloud # 添加--working-mode=cloud
...
```

Yurthub 将在几分钟内准备就绪。

### 4.4 配置Kubelet

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

## 5. Addons调整

当Master节点调整完成后，kubeadm默认安装kube-proxy和CoreDNS也可以开始调整配置，从而适配云边协同场景。调整配置方法如下:
- [CoreDNS](./openyurt-prepare.md#4-coredns调整)
- [KubeProxy](./openyurt-prepare.md#5-kubeproxy调整)

当kube-proxy/CoreDNS所有pods重启完成后，可以通过命令`kubectl logs/exec`等确认一下yurt-tunnel组件是否正常工作。

## 6. 接入边缘节点

已经是Kubernetes集群的工作节点(如: `node/us-west-1.192.168.0.88`)，我们需要在节点安装OpenYurt的节点端组件(如Yurthub)。 当然，也可以从0开始往集群中接入新节点。

### 6.1 已接入节点的配置调整

下述操作，仅仅针对已经是Kubernetes集群的工作节点。

#### 6.1.1 部署Edge工作模式的Yurthub

边缘节点上的Yurthub部署流程参照【[4.3 部署cloud工作模式的Yurthub](#43-部署cloud工作模式的yurthub)】章节，同时**修改Yurthub的启动参数--working-mode=edge**即可

Yurthub 将在几分钟内准备就绪。

#### 6.1.2 配置Kubelet

边缘节点上的Kubelet配置流程，请完全参照【[4.4 配置Kubelet](#44-配置kubelet)】章节

#### 6.1.3 重建节点上的Pods

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

### 6.2 从零接入新节点

用户可以直接使用`yurtadm join`命令往集群中接入边缘节点。命令的详细信息可以参考链接： [yurtadm join](./yurtadm-init-join.md#23joining-nodes-to-cluster)