---
title: 本地构建和测试
---

OpenYurt主仓库（[openyurtio/openyurt](https://github.com/openyurtio/openyurt)）中目前`(v0.5.0, commit: ef26d5c6)`包含以下组件：

1. yurthub
2. yurt-controller-manager
3. yurt-tunnel-server
4. yurt-tunnel-agent
5. yurtctl
6. yurt-node-servant  

本文主要介绍了在完成对上述组件的开发后，如何进行编译源码、打包镜像、运行组件和测试验证等工作。

## 如何构建

OpenYurt在[Makefile](https://github.com/openyurtio/openyurt/blob/master/Makefile)中提供了多种构建方式。其中`make release`是最便捷的构建命令，包括编译和打包镜像等步骤，可以覆盖绝大多数场景。其使用方式如下：

```bash
make release WHAT="${components[@]}" ARCH="${archs[@]}" REGION="${your_region}"
```

其中`WHAT`表示需要构建的组件（名称见文章开头），`ARCH`表示组件运行的目标架构，目前支持amd64, arm和arm64三种架构。这两个参数能以数组的形式传入，来进行不同组合。

`REGION`参数影响编译时选用的GOPROXY，目前支持"cn","us"两种。cn表示使用`GOPROXY=https://goproxy.cn`，us表示使用`GOPROXY=https://proxy.golang.org`。默认值是us，因此在国内的用户建议设置`REGION=cn`来保证构建过程正确进行。

用例：

```bash
make release WHAT="yurtctl yurthub" ARCH="arm64 amd64" REGION=cn
```

命令执行完成后可以在`_output`目录下找到镜像和对应的可执行二进制文件，在`dockerbuild`目录下可以找到构建镜像的dockerfile，同时可以看到，通过`make release`构建出的可执行二进制文件和镜像都是基于linux平台的。在`make relase`命令中，操作系统平台是目前是不能改变的，如果有相关需求可以用下述的其他方法。

OpenYurt的Makefile中还提供了`make build`命令，通过该命令可以完成对各个组件的编译，同时该命令可以指定编译的目标平台（包括操作系统和架构）。下面以编译yurtctl为例，解释`make build`的使用方法，其他组件类似。

### 本地平台编译

```bash
make build WHAT=yurtctl
```

该命令会根据本地平台的操作系统和架构编译yurtctl，并把编译出来的可执行二进制文件放在_output目录下。

### 交叉编译

#### Mac

```bash
GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtctl
```

通过该命令可以实现编译能在特定平台运行的yurtctl，这里最好加上`CGO_ENABLED=0`来避免一些兼容上的问题。通过这个命令可以在Mac上编译不同平台的yurtctl.

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
   运行go build命令进行编译，这里需要加上`-ldflags=$Env:GOLDFLAGS`选项，还可以通过-o来调整编译好的yurtctl的保存位置。

```powershell
go build -ldflags=$Env:GOLDFLAGS cmd/yurtctl/yurtctl.go
```

### 手动打包镜像

本节描述各个组件的dockerfile，便于通过`docker build`命令来手动打包组件镜像，下面是yurtctl和yurt-node-servant的架构与基础镜像之间的关系表。  

| 架构  | 基础镜像           |
| ----- | ------------------ |
| amd64 | amd64/alpine:3.9   |
| arm64 | arm64v8/alpine:3.9 |
| arm   | arm32v7/alpine:3.9 |

以变量`baseimage`代指基础镜像

#### yurtctl（yurt-servant） dockerfile

```dockerfile
FROM ${baseimage}
ADD yurtctl /usr/local/bin/yurtctl
```

#### yurt-node-servant dockerfile

```dockerfile
FROM ${baseimage}
ADD entry.sh /usr/local/bin/entry.sh
RUN chmod +x /usr/local/bin/entry.sh
ADD yurt-node-servant /usr/local/bin/node-servant
```

#### 其他组件的dockerfile

其他组件的基础镜像和上述两个不同。其中arch为架构名称，包括amd64，arm和arm64；component表示组件名称，包括yurthub，yurt-controller-manager，yurt-tunnel-server和yurt-tunnel-agent。

```dockerfile
FROM k8s.gcr.io/debian-iptables-${arch}:v11.0.2
COPY ${component} /usr/local/bin/${component}
ENTRYPOINT ["/usr/local/bin/${component}"]
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

### 手动进行e2e测试

首先按照下述步骤手动构建e2e测试工具yurt-e2e-test：

1) 进入openyurt目录：
```bash
$ cd openyurt
```

2) 构建yurt-e2e-test：
```bash
$ make e2e
```

然后就可以使用构建好的yurt-e2e-test进行测试了。
1) 下面的命令会在OpenYurt集群中运行一些基础的测试用例，跳过自治测试：
```bash
$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./
```

2) 如果你想运行包括自治测试在内的所有测试，可以通过如下命令完成：
```bash
$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./  --enable-yurt-autonomy=true
```
目前的自治测试需要自己重新启动节点，yurt-e2e-test会等待节点重启并检查pod的状态。

3) 如果你想在阿里云ECS或ENS上运行包括自治测试在内的所有e2e测试，方法同上。

测试结果可以在stdout或yurt-e2e-test-report_01.xml文件（所在目录由`--report-dir`参数指定）中查看。其中yurt-e2e-test可执行文件的位置会根据操作系统和架构的不同而不同，可能需要根据实际情况改变。

## 常见问题

1. 编译时出现"go: github.com...unknown revision xxx"  
   通常是git的版本过低造成的，可以尝试升级git版本。

2. 编译时出现"unsupported GOOS/GOARCH pair xxx/xxx"  
   go不能支持所有的GOOS/GOARCH组合，如go1.17.3不支持windows/arm64。可以通过`go tool dist list`来查看支持的GOOS/GOARCH组合。

3. 运行交叉编译的可执行二进制文件时出现"cannot execute binary file: Exec format error"  
   通常是没有成功完成交叉编译，导致运行平台与当前平台不同，无法识别文件格式。在Windows上进行交叉编译尤其需要注意开启管理员权限。
