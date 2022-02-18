---
title: Yurtctl init/join
---

## 1.背景说明

为了让用户快速拥有一个 OpenYurt 测试集群，OpenYurt 提供了命令 Yurtctl init 初始化集群，用户只需要选择 OpenYurt 集群的镜像版本，就可以创建对应版本的 OpenYurt，Yurt -APP-Manager、Yurt-Controller-Manager、Yurttunnel-Server、Yurttunnel-Agent 组件会自动部署。

后续扩展集群，用户可以使用命令 Yurtctl join，将边缘节点或者云端节点加入集群。



## 2.使用流程

### 2.1编译 Yurtctl
在进行初始化集群时，需要先获取 Yurtctl 可执行文件。
要快速构建和安装设置 yurtctl ，在编译系统已安装了 golang 1.13+ 和 bash 的前提下你可以执行以下命令来完成安装：

```sh
$ git clone https://github.com/openyurtio/openyurt.git
$ cd openyurt
$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn
```

可执行文件将存放在 `_output/bin/` 目录下。

### 2.2初始化集群

执行以下命令初始化集群：

```sh
$ _output/bin/yurtctl init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234
```

其中主要参数为：

```sh
 --apiserver-advertise-address    master节点的IP地址
 --passwd                         master节点的ssh登入密码
 --openyurt-version               OpenYurt集群的版本
```

如果想要配置更多信息，可以通过 `-h`  来获取。

### 2.4节点加入

用户可以通过 Yurtctl join 将云端节点、边缘节点加入 OpenYurt 集群。注意，在加入节点时，需要在节点上安装运行时，并关闭交换分区。

执行以下命令加入边缘节点：

```sh
$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5
```

执行以下命令加入云端节点：

```sh
$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5
```

当边缘节点runtime为containerd时，需要配置`cri-socket`参数，如上面执行命令加入边缘节点改为：
```sh
$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5
```


## 3.实现细节
### 3.1 Yurtctl init
为了降低 Yurtctl init 的使用难度，提高的集群安装成功概率，Yurtctl init 通过开源工具 [sealer](https://github.com/alibaba/sealer) 
初始化 OpenYurt 集群。在实现上，Yurtctl init 会下载 sealer 二进制文件，sealer 会下载 OpenYurt 官方提供的集群镜像并安装集群。
此外，Yurtctl init 也支持用户个性化配置 OpenYurt 集群镜像。
