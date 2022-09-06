---
title: 在Kubernetes上安装
---

本教程展示了如何手动部署 OpenYurt 集群。本教程使用是一个双节点Kubernetes集群，使用的所有 `yaml` 文件都可以在 [openyurt repo](https://github.com/openyurtio/openyurt/tree/master/config/setup)和[yurt-app-manager repo](https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup)下找到。

## 1 Kubernetes集群环境

用户需要先自行准备好一个Kubernetes集群(可以通过[kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/)工具搭建)，本文档中以1节点的Kubernetes为例。
```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11
```

### 1.1 给云端节点和边缘节点打标签

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

## 2 OpenYurt安装准备

### 2.1 Kube-Controller-Manager调整

为了保证Yurt-Controller-Manager可以正常工作，需要关闭Kube-Controller-Manager中的NodeLifeCycle controller(目前正在优化，后续Kube-Controller-Manager将无需调整)。

Kube-Controller-Manager配置调整方法如下:
- [Kube-Controller-Manager](./openyurt-prepare.md#2-kube-controller-manager调整)

### 2.2 部署Yurt-Tunnel专用DNS

云端组件(如Kube-apiserver, prometheus, metrics-server等)通过`hostname:port`访问边缘时，为了让`hostname`域名解析到`yurt-tunnel-server`,从而让请求无感知
经过`yurt-tunnel-server/yurt-tunnel-agent`到达边缘节点。需要确保组件的DNS域名解析请求发送到Yurt-Tunnel专用的DNS(取名为yurt-tunnel-dns)。

通过如下命令安装yurt-tunnel-dns:
```bash
$ kubectl apply -f config/setup/yurt-tunnel-dns.yaml
```

当安装完成后，可以通过命令`kubectl -n kube-system get po`等确认一下yurt-tunnel-dns组件是否正常启动。并且通过`kubectl -n kube-system get svc yurt-tunnel-dns`获取到`yurt-tunnel-dns service`的`clusterIP`.

### 2.3 Kube-apiserver调整

为了保证Master节点上kube-apiserver使用`hostname:port`访问kubelet，同时保证使用`yurt-tunnel-dns pod`对`hostname`进行域名解析。需要调整kube-apiserver组件的相关配置。

Kube-apiserver配置调整方法如下:
- [Kube-apiserver](./openyurt-prepare.md#3-kube-apiserver调整)

### 2.4 Addons调整

kubeadm默认安装kube-proxy和CoreDNS的配置也需要配置，从而适配云边协同场景。调整配置方法如下:
- [CoreDNS](./openyurt-prepare.md#4-coredns调整)
- [KubeProxy](./openyurt-prepare.md#5-kubeproxy调整)

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

首先从[yurt-app-manager repo](https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup)获取`config/setup/all_in_one.yaml`。执行如下命令:
```
$ kubectl apply -f config/setup/all_in_one.yaml
```

确认yurt-app-manager组件已经成功创建:
```
$ kubectl get pod -n kube-system | grep yurt-app-manager
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

## 4. 注意

节点`us-west-1.192.168.0.88` 需要在OpenYurt集群中正常工作，需要在节点上安装好OpenYurt Node Components。安装方法可以参考: [在存量的K8s节点上安装OpenYurt Node组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)
