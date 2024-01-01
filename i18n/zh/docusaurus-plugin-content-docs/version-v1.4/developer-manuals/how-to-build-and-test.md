---
title: 本地构建和测试
---

OpenYurt主仓库（[openyurtio/openyurt](https://github.com/openyurtio/openyurt)）中目前`(v1.4.0, commit: c1a47601312502adab12070b8ad42b48494239af)`包含以下组件：

1. yurthub
2. yurt-manager
3. yurtadm
4. yurt-node-servant
5. yurt-iot-dock
6. raven in `openyurtio/raven` repo

本文主要介绍了在完成对上述组件的开发后，如何进行编译源码、打包镜像、运行组件和测试验证等工作。

## 如何构建

### 构建二进制

OpenYurt的[Makefile](https://github.com/openyurtio/openyurt/blob/master/Makefile)中提供了`make build`命令，通过该命令可以完成对各个组件的编译。下面以编译yurtadm为例，解释`make build`的使用方法，其他组件类似。

```bash
make build WHAT=cmd/yurtadm
```

该命令会根据本机的操作系统和架构编译yurtadm，并把编译出来的可执行二进制文件放在_output目录下。

### 构建镜像

`make docker-build`是最便捷的镜像构建命令，包括编译和打包镜像等步骤，可以覆盖绝大多数场景。其使用方式如下：

```bash
make docker-build TARGET_PLATFORMS="${TARGET_PLATFORMS}" REGION="${your_region}"
```

`TARGET_PLATFORMS`: 表示组件运行的目标架构，目前支持linux/amd64, linux/arm和linux/arm64三种架构。

`REGION`: 参数影响编译时选用的GOPROXY，中国国内的用户建议设置`REGION=cn`来保证构建过程正确进行(cn表示使用`GOPROXY=https://goproxy.cn`)。

用例：

```bash
make docker-build TARGET_PLATFORMS=linux/amd64 REGION=cn
```

命令执行完成后在本地生成OpenYurt各个组件的镜像，可以通过`docker images`查看。

### 交叉编译

#### Mac

```bash
GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=cmd/yurtadm
```

通过该命令可以实现在mac环境中编译能在特定平台上运行的yurtadm，这里最好加上`CGO_ENABLED=0`来避免一些兼容上的问题。通过这个命令可以在Mac上编译不同平台的yurtadm.

#### Windows

由于在Windows上通常没有make命令（如果你没有用Cygwin的话），需要自己执行`go build`，powershell中执行方法如下（以管理员权限运行）：

1. 设置环境变量  
   在运行前需要设置环境变量`target_os`和`target_arch`，设为需要的操作系统和架构。

```powershell
$Env:GOOS = $Env:target_os
$Env:GOARCH = $Env:target_arch
$Env:CGO_ENABLED = 0
$Env:GOLDFLAGS = "-s -w 
-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt
-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io
-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)
-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)
-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')"
```

2. 使用go build进行编译  
   运行go build命令进行编译，这里需要加上`-ldflags=$Env:GOLDFLAGS`选项，还可以通过-o来调整编译好的yurtadm的保存位置。

```powershell
go build -ldflags=$Env:GOLDFLAGS cmd/yurtadm/yurtadm.go
```

## 如何测试

OpenYurt中提供的测试包括单元测试和e2e测试两种。

### 单元测试

单元测试会执行cmd和pkg目录下的`*_test.go`文件，通过以下命令即可完成

```bash
make test
```

### e2e测试

本节将介绍如何运行OpenYurt的e2e test。在社区提供的测试用例中，节点的自治（autonomy）测试仍然处于开发阶段。

如果已经启动了一个OpenYurt集群，你可以直接按照这节的步骤来运行e2e测试。如果还没有OpenYurt集群，可以通过“本地启动集群”中所述步骤，在本地快速启动一个OpenYurt集群。

在搭建好OpenYurt集群后可以通过以下命令运行e2e目录下的测试用例对集群进行e2e测试：

```bash
make e2e-tests
```

该命令会在_output目录的相应平台目录下生成e2e测试工具yurt-e2e-test，并利用KUBECONFIG环境变量（默认值为`$HOME/.kube/config`）指明的kubeconfig文件访问集群，运行测试。可以在stdout中看到如下测试结果：

```bash
Ran 5 of 5 Specs in 82.279 seconds
SUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped
PASS
```

如果你需要指定测试工具yurt-e2e-test的行为（如运行额外的自治测试），可以按照下一节的步骤进行。

## 常见问题

1. 编译时出现"go: github.com...unknown revision xxx"  
   通常是git的版本过低造成的，可以尝试升级git版本。

2. 编译时出现"unsupported GOOS/GOARCH pair xxx/xxx"  
   go不能支持所有的GOOS/GOARCH组合，如go1.17.3不支持windows/arm64。可以通过`go tool dist list`来查看支持的GOOS/GOARCH组合。

3. 运行交叉编译的可执行二进制文件时出现"cannot execute binary file: Exec format error"  
   通常是没有成功完成交叉编译，导致运行平台与当前平台不同，无法识别文件格式。在Windows上进行交叉编译尤其需要注意开启管理员权限。
