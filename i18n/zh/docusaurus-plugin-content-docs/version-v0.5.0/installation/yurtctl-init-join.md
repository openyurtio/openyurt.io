---
title: 创建OpenYurt测试集群(Yurtctl init/join)
---

## 1.背景说明

为了让用户快速拥有一个 OpenYurt 测试集群，OpenYurt 提供了命令 Yurtctl init 初始化集群，Yurt -APP-Manager、Yurt-Controller-Manager、
Yurttunnel-Server、Yurttunnel-Agent 组件会自动部署。后续扩展集群，用户可以使用命令 Yurtctl join，将边缘节点或者云端节点加入集群。

## 2.使用流程

### 2.1前置准备

对于 Yurtctl init 以及 Yurtctl join，用户在使用前需要在节点上安装运行时，并且关闭交换分区。

### 2.2编译 Yurtctl 

在进行初始化集群时，需要先获取 Yurtctl 可执行文件。
要快速构建和安装设置 yurtctl ，在编译系统已安装了 golang 1.13+ 和 bash 的前提下你可以执行以下命令来完成安装：

```sh
$ git clone https://github.com/openyurtio/openyurt.git
$ cd openyurt
$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn
```

可执行文件将存放在 `_output/bin/` 目录下。

### 2.3初始化集群

执行以下命令初始化集群：

```sh
$ _output/bin/yurtctl init --kubernetes-version=v1.18.8 --pod-network-cidr=10.244.0.0/16
```

此外，用户可以通过设置参数 `--yurt-version` 配置 OpenYurt 组件的版本。如果想要配置更多信息，可以通过 `-h`  来获取。

### 2.4节点加入

用户可以通过 Yurtctl join 将云端节点、边缘节点加入 OpenYurt 集群。注意，在加入节点时，同样需要在节点上安装运行时，并关闭交换分区。

执行以下命令加入边缘节点：

```sh
$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge-node --discovery-token-unsafe-skip-ca-verification --v=5

```

执行以下命令加入云端节点：

```sh
$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud-node --discovery-token-unsafe-skip-ca-verification --v=5

```







