# 边缘节点使用 Kata Containers

这篇文章将介绍如何在 OpenYurt 集群中安装和设置整个工具链的步骤，以运行一个 Kata Containers 作为 OCI 运行时的 Pod。

[Kata Containers](https://katacontainers.io/) 是符合 OCI 标准的，且[兼容 k8s](https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/run-kata-with-k8s.md) 的轻量级安全容器。相较于 Linux 容器，Kata Containers 致力于使用轻量级虚拟机构建安全的容器运行时，使用这些虚拟机的方式和其性能类似于容器，但使用硬件虚拟化技术作为第二层防御提供更强大的工作负载隔离。

## 1 准备工作

首先，关闭 swap 分区。

```shell
sudo swapoff -a      
free -m    // 验证
```

然后，配置两个节点的 `/etc/hosts` 文件。

```
127.0.0.1 localhost
127.0.1.1 vagrant

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
127.0.2.1 k8s-node01 k8s-node01
192.168.44.140 k8s-master
192.168.44.141 k8s-node01
```

之后，加载内核模块 `br_netfilter`，并调整内核参数。

```shell
//load the module
sudo modprobe br_netfilter

//verify   
lsmod | grep br_netfilter

// create k8s.conf
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sudo sysctl --system 
```

最后，设置 `rp-filter` 值，将文件 `/etc/sysctl.d/10-network-security.conf` 中两个参数的值由 2 改为 1，且将 `/proc/sys/net/ipv4/ip_forward` 设置为 1。

```shell
sudo vim /etc/sysctl.d/10-network-security.conf
echo 1 > /proc/sys/net/ipv4/ip_forward
sudo sysctl --system
```

## 2 安装 OpenYurt

现在，我们可以在 Edge 节点上安装 OpenYurt 来控制它下面的 Containerd、Kata Containers 堆栈。

构建 OpenYrut 集群最简单的方法是使用 OpenYurt 体验中心。 你只需注册一个用于测试的帐户，然后就可以获得一个 OpenYurt 集群。 接下来，你可以使用 `yurtctl join` 命令行来加入边缘节点。 在[此处](https://openyurt.io/docs/installation/openyurt-experience-center/overview/)查看更多详细信息。

或者，你也可以根据[指南](https://openyurt.io/zh/docs/installation/summary/)，使用 yurtctl convert 将 K8s 集群转换为 OpenYurt 集群并安装 OpenYurt 组件。

## 3 设置一个 K8s 集群

这里我们使用 `yurtctl convert` 将 K8s 集群转换为 OpenYurt 集群，所以我们需要先搭建一个 K8s 集群。 需要注意的一点，如果你使用 `yurtctl init/join` 来设置OpenYurt 集群并加入节点，你可以跳过这一步。

```shell
$ sudo apt-get update && sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https
// add K8s source
$ curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -
$ sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF
$ deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
// install K8s components 1.18.9
$ sudo apt-get update && sudo apt-get install -y kubelet=1.18.9-00 kubeadm=1.18.9-00 kubectl=1.18.9-00 
// Initialize the master node
$ sudo kubeadm init --pod-network-cidr 172.16.0.0/16 \
--apiserver-advertise-address=192.168.3.167 \
--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers
// join the work node
$ kubeadm join 192.168.3.167:6443 --token 3zefbt.99e6denc1cxpk9fg \
   --discovery-token-ca-cert-hash sha256:8077d4e7dd6eee64a999d56866ae4336073ed5ffc3f23281d757276b08b9b195
```

## 4 安装 Containerd

使用下面的命令行在边缘节点上安装 Containerd。

```shell
export VERSION="1.5.7"
echo -e "Version: $VERSION"
echo -e "Installing libseccomp2 ..."
sudo apt install -y libseccomp2
echo -e "Installing wget"
sudo apt install -y wget

wget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz
wget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum
sha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum

sudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz
sudo systemctl daemon-reload
```

### 4.1 配置文件

Containerd 启动需要一个配置文件，当启动 Containerd 之后会根据这个配置文件去启动，默认位置是： `/etc/containerd/config.toml`。通过如下命令创建：

```shell
containerd config default > /etc/containerd/config.toml
```

## 5 安装 Kata Containers

使用 Kata Containers 作为 OCI 运行时，需要在 Kubernetes 集群的 node 上安装 Kata。

这里使用直接从 GitHub 下载最新压缩包的方式安装，如有需要也可以下载其他版本进行安装。

### 5.1 下载 Kata Containers

Ubuntu 上还没有 2.x 的安装包，即通过 apt 还无法安装。
下载并解压缩：

```shell
wget https://github.com/kata-containers/kata-containers/releases/download/2.3.3/kata-static-2.3.3-x86_64.tar.xz
tar -C / -Jxvf kata-static-2.3.3-x86_64.tar.xz
```

Kata 相关文件都会被解压到 `/opt/kata/` 下面。Kata 的配置文件在 `/opt/kata/share/defaults/kata-containers/` 下面，每种 Hypervisor 都有一个对应的文件，默认使用 `QEMU`。

```shell
$ ls -tl /opt/kata/share/defaults/kata-containers/

total 64
-rw-r--r-- 1 1001 121 14828 Jan  6 11:55 configuration-fc.toml
-rw-r--r-- 1 1001 121 24159 Jan  6 11:55 configuration-qemu.toml
lrwxrwxrwx 1 1001 121    23 Jan  6 11:55 configuration.toml -> configuration-qemu.toml
-rw-r--r-- 1 1001 121  9405 Jan  6 11:55 configuration-acrn.toml
-rw-r--r-- 1 1001 121 11528 Jan  6 11:55 configuration-clh.toml
```

### 5.2 配置 kata 作为 runtime

为 containerd 添加 Kata 运行时。这需要编辑 `/etc/containerd/config.toml` 文件，在合适的位置添加下面的内容（注意配置项目的嵌套关系）。

```shell
$ vim /etc/containerd/config.toml

        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata]
          runtime_type = "io.containerd.kata.v2"
          pod_annotations = ["io.katacontainers.*"]
          privileged_without_host_devices = true
```

之后，重启 containerd 使配置生效。

```shell
systemctl start containerd
```

## 6 运行一个 Kata Containers 作为 OCI 运行时的 Pod

接下来，让我们在 OpenYurt 集群中运行一个 Kata 作为 OCI 运行时的 Pod。

### 6.1 创建 Kata 的 RuntimeClass 资源

RuntimeClass 是一个用于选择容器运行时配置的特性，容器运行时配置用于运行 Pod 中的容器。可以在不同的 Pod 设置不同的 RuntimeClass，以提供性能与安全性之间的平衡。

针对每个 handler 需要创建一个 RuntimeClass 对象。
RuntimeClass 资源当前只有两个重要的字段：RuntimeClass 名 (metadata.name) 和 handler (handler)。 对象定义如下所示：

```shell
$ vim runtimeclass-kata.yaml

apiVersion: node.k8s.io/v1
kind: RuntimeClass
metadata:
  name: kata  # 用来引用 RuntimeClass 的名字
handler: kata  # 对应的 CRI 配置的名称
```

使用 `kubectl apply` 来载入 RuntimeClass：

```shell
kubectl apply -f runtimeclass-kata.yaml
```

### 6.2 使用 Kata 作为运行时启动 Pod

采用 `yaml` 文件的方式配置 Pod 的参数：

```shell
$ vim nginx-kata.yaml

apiVersion: v1
kind: Pod
metadata:
  name: nginx-kata
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  nodeSelector:
    disktype: k8s-node01	# 设置在 k8s-node01 上运行 Pod
  runtimeClassName: kata	# 设置运行时为 Kata
```

创建并启动 Pod：

```shell
$ kubectl create -f nginx-kata.yaml
```

查看 Pod：

```shell
$ kubectl get pod -o wide

NAME         READY   STATUS    RESTARTS   AGE   IP             NODE           NOMINATED NODE   READINESS GATES
nginx-kata   1/1     Running   0          35s   192.168.1.21   k8s-worker01   <none>           <none>
```

在 k8s-node01 节点上使用 `crictl` 查看 Pod 使用的运行时为 Kata：

```shell
$ crictl pods

POD ID              CREATED              STATE               NAME                        NAMESPACE           ATTEMPT             RUNTIME
7e74e3aba1cd9       49 seconds ago       Ready               nginx-kata                  default             0                   kata
```