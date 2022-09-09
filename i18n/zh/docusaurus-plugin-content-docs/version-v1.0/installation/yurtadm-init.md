---
title: 从零开始安装
---

## 1. 背景说明

为了让用户快速拥有一个 OpenYurt 测试集群，OpenYurt 提供了命令 yurtadm。`yurtadm init` 可以初始化一个 latest 版本的 openyurt 集群，yurt-controller-manager、yurt-tunnel-server、yurt-app-manager 等组件会自动部署，省去了手动部署的各种操作。后续扩展集群，用户可以使用命令 `yurtadm join`，将边缘节点或者云端节点加入集群。

## 2. 使用流程

### 2.1 编译 yurtadm

在进行初始化集群时，需要先获取 yurtadm 可执行文件。 要快速构建和安装设置 yurtadm ，在编译系统已安装了 git, golang 1.13+ 和 bash 的前提下你可以执行以下命令来完成安装：

```
git clone https://github.com/openyurtio/openyurt.git
cd openyurt
make build WHAT="yurtadm" ARCH="amd64" REGION=cn
```

可执行文件 `yurtadm` 将存放在 `_output/local/bin/linux/amd64/` 目录下。可以将 yurtadm 命令放到系统环境变量中，便于后续使用：

```
cp _output/local/bin/linux/amd64/yurtadm /usr/local/bin/
```

### 2.2 yurtadm init

`yurtadm init` 可以初始化一个 latest 版本 的 openyurt 集群 (目前使用的 kubernetes 版本是1.22.8)。

例子：

```
yurtadm init --apiserver-advertise-address=47.115.228.119 --yurt-tunnel-server-address=47.115.228.119 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12
```

对参数的解释：

- `--apiserver-advertise-address`：要安装的集群的master节点的ip地址
- `--yurt-tunnel-server-address`：yurt-tunnel-server 的地址
- `--pod-network-cidr`：podSubnet，为 Pod 所使用的子网
- `--service-cidr`：serviceSubnet，Kubernetes 服务所使用的子网

`yurtadm init` 使用 sealer 安装集群。这个过程会自动安装以下组件：

- kubeadm
- kubectl
- kubelet
- kube-proxy
- docker

**额外操作**

sealer (当前 v0.8.6 版本)  的 k8s1.22.8 基础镜像的打包过程中将镜像服务器地址修改为了 sea.hub:5000，所以如果使用 `yurtadm join` 的是`yurtadm init`的节点的话会出现边缘节点的 `sea.hub:5000/kube-proxy:v1.22.8` 镜像拉不下来, ImagePullBackOff。所以这里需要手动 `kubectl edit ds kube-proxy -n kube-system`，将镜像替换为 `registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.22.8`



## 3. 实现细节

`yurtadm init` 底层使用 `sealer run` 实现。

sealer 制作的 openyurt 集群镜像的相关文件会放在 `/var/lib/sealer/data/my-cluster/rootfs` 目录下。所有文件相关信息见：https://github.com/windydayc/openyurt-cluster-image



## 4. 常见问题

**1\. yurtadm init 过程中 helm 安装出错： Release "yurt-app-manager" does not exist. Installing it now.**
**Error: failed to download "openyurt/yurt-app-manager" (hint: running `helm repo update` may help)**

手动执行 helm 安装 yurt-app-manager 的过程：

```bash
# 进入集群镜像的上下文目录
cd /var/lib/sealer/data/my-cluster/rootfs
# 安装 yurt-app-manager
helm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml
```



**2. yurtadm init 中途安装失败，如何把环境清理干净？**

按照 http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed 来清理。


