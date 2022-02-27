# 边缘节点使用 WasmEdge

这篇文章将介绍如何在 OpenYurt 集群中运行一个 WasmEdge 应用程序。

[WasmEdge](https://wasmedge.org/) 是符合 OCI 标准的，且[兼容 k8s ](https://wasmedge.org/book/en/kubernetes.html)的轻量级 WebAssembly runtime。 相较于 [Linux 容器](https://wasmedge.org/wasm_linux_container/)，WasmEdge 是更好的边缘轻量级容器替代选项。 WasmEdge 提供基于能力的安全沙箱，对底层操作系统服务做很少的假设，同时在前端支持[多种编程语言](https://wasmedge.org/book/en/dev.html)。 

### 准备工作

首先，关闭 swap 分区

```
sudo swapoff -a      
free -m    //验证
```

接下来，配置两个节点的文件 `node/etc/hosts`



然后，加载内核模块  `br_netfilter`，并调整内核参数。

```
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


然后，设置 `rp-filter` 值，将文件 `/etc/sysctl.d/10-network-security.conf` 中两个参数的值由 2 改为 1，且将 `/proc/sys/net/ipv4/ip_forward` 设置为 1。

```
sudo vi /etc/sysctl.d/10-network-security.conf
echo 1 > /proc/sys/net/ipv4/ip_forward
sudo sysctl --system
```

#### 安装 OpenYurt

现在，我们可以在 Edge 节点上安装 OpenYurt 来控制它下面的 containerd、crun 和 wasmedge 堆栈。

构建 OpenYrut 集群最简单的方法是使用 OpenYurt 体验中心。 你只需注册一个用于测试的帐户，然后就可以获得一个 OpenYurt 集群。 接下来，你可以使用 `yurtctl join` 命令行来加入边缘节点。 在[此处](https://openyurt.io/docs/installation/openyurt-experience-center/overview/)查看更多详细信息。

或者，你也可以根据[指南](https://openyurt.io/zh/docs/installation/summary/)，使用 yurtctl convert 将 K8s 集群转换为 OpenYurt 集群并安装 OpenYurt 组件。


### 安装 Containerd

使用下面的命令行在边缘节点上安装 containerd 。

```
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

由于 crun 项目默认支持 WasmEdge，我们只需要为 crun 配置 containerd 配置即可。 所以我们需要修改 `/etc/containerd/config.toml` 中的 runc 参数为 crun，添加 `pod_annotation`。

```
sudo mkdir -p /etc/containerd/
sudo bash -c "containerd config default > /etc/containerd/config.toml"
wget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/containerd/containerd_config.diff
sudo patch -d/ -p0 < containerd_config.diff
```

之后，重启 containerd 使配置生效。

```
systemctl start containerd
```

### 安装 WasmEdge

使用下面的安装脚本，在 edge 节点上安装 WasmEdge。

```
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash
```

### 安装并构建 crun

我们需要在 edge node 上构建一个支持 WasmEdge 的 crun 二进制文件。目前，最直接的方法是你自己从源代码开始构建 crun。首先请确保你在 Ubuntu 20.04  已经安装了 crun 的依赖项。如果你使用的是其他版本的 Linux，请参考[官方文档](https://github.com/containers/crun#readme)。


```
sudo apt update
sudo apt install -y make git gcc build-essential pkgconf libtool \
    libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \
    go-md2man libtool autoconf python3 automake
```

接下来，配置、构建、安装带有 WasmEdge 支持的 `crun` 二进制文件

```
sudo make install
git clone https://github.com/containers/crun
cd crun
./autogen.sh
./configure —with-wasmedge
make
sudo make install
```

### 安装 OpenYurt

现在，我们可以在 Edge 节点上安装 OpenYurt 来控制它下面的 containerd、crun 和 wasmedge 堆栈。

构建 OpenYrut 集群最简单的方法是使用 OpenYurt 体验中心。 你只需注册一个用于测试的帐户，然后就可以获得一个 OpenYurt 集群。 接下来，你可以使用 `yurtctl join` 命令行来加入边缘节点。 在[此处](https://openyurt.io/docs/installation/openyurt-experience-center/overview/)查看更多详细信息。 目前，OpenYurt 体验中心提供的 OpenYurt 组件版本为 **0.6.0**（最新版），Kubernetes 版本为 1.20.11。

或者，你也可以根据下面的指南，从头开始构建 OpenYurt 集群。

### 设置一个 K8s 集群

这里我们使用 yurtctl convert 将 K8s 集群转换为 OpenYurt 集群，所以我们需要先搭建一个k8s 集群。 需要注意的一点，如果你使用 `yurtctl init/join` 来设置OpenYurt 集群并加入节点，你可以跳过这一步。

```
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

### 运行一个简单的 WebAssembly app

接下来，让我们通过 Kubernetes 集群作为 pod 中的容器运行 WebAssembly 程序。 本节将从 Docker hub 拉取基于 WebAssembly 的容器镜像开始。 如果你想知道如何编译、打包 WebAssembly 程序并将其作为容器镜像发布到 Docker hub，请参阅 [WasmEdge Book](https://wasmedge.org/book/en/kubernetes/demo/wasi.html)。

从 master 节点的另一个终端窗口输入以下命令，然后开始使用集群。

```
root@master:~# kubectl cluster-info
Kubernetes master is running at https://192.168.3.167:6443
KubeDNS is running at https://192.168.3.167:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
```


因为 kubectl 1.18.9 没有 annotations 参数，所以我们在这里需要调整命令行。 如果使用的是 OpenYurt Experience Center ，其默认版本为 OpenYurt 0.6.0 和 Kubernetes 1.20.11，请直接参阅 WasmEdge Book 中的 [Kubernetes 部分](https://wasmedge.org/book/en/kubernetes/kubernetes.html)来运行 wasm 应用程序。

```
// kubectl 1.18.9
$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation  --overrides='{"kind":"Pod","metadata":{"annotations":{"module.wasm.image/variant":"compat"}} , "apiVersion":"v1", "spec": {"hostNetwork": true}}' /wasi_example_main.wasm 50000000

// kubectl 1.20.11
$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation --annotations="module.wasm.image/variant=compat" --overrides='{"kind":"Pod", "apiVersion":"v1", "spec": {"hostNetwork": true}}' /wasi_example_main.wasm 50000000
```


容器化应用程序的输出被打印到控制台。 所有 Kubernetes 版本都是一样的。

```
Random number: 1123434661
Random bytes: [25, 169, 202, 211, 22, 29, 128, 133, 168, 185, 114, 161, 48, 154, 56, 54, 99, 5, 229, 161, 225, 47, 85, 133, 90, 61, 156, 86, 3, 14, 10, 69, 185, 225, 226, 181, 141, 67, 44, 121, 157, 98, 247, 148, 201, 248, 236, 190, 217, 245, 131, 68, 124, 28, 193, 143, 215, 32, 184, 50, 71, 92, 148, 35, 180, 112, 125, 12, 152, 111, 32, 30, 86, 15, 107, 225, 39, 30, 178, 215, 182, 113, 216, 137, 98, 189, 72, 68, 107, 246, 108, 210, 148, 191, 28, 40, 233, 200, 222, 132, 247, 207, 239, 32, 79, 238, 18, 62, 67, 114, 186, 6, 212, 215, 31, 13, 53, 138, 97, 169, 28, 183, 235, 221, 218, 81, 84, 235]
Printed from wasi: This is from a main function
This is from a main function
The env vars are as follows.
The args are as follows.
/wasi_example_main.wasm
50000000
File content is This is in a file
pod "wasi-demo" deleted
```

现在，你可以通过 Kubernetes 命令行查看 pod 状态。

```
crictl ps -a
```

你可以在日志中看到从调度到运行 WebAssembly 工作负载的事件。

```
CONTAINER           IMAGE               CREATED             STATE               
NAME                 ATTEMPT             POD ID
0c176ed65599a       0423b8eb71e31       8 seconds ago       Exited              wasi-demo    
```

这样完成了。接下来，你可以使用 OpenYurt 管理自己的 WasmEdge 应用。
