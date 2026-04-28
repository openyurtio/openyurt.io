---
title: 本地构建和测试
---

本文介绍了在完成组件开发后，如何构建和测试代码。

## 如何构建

### 构建二进制文件

OpenYurt [Makefile](https://github.com/openyurtio/openyurt/blob/master/Makefile) 中提供了 `make build` 命令，可以通过该命令完成对各个组件的编译。下面以 yurtadm 为例解释 `make build` 的用法，其他组件类似。

```bash
make build WHAT=cmd/yurtadm
```

该命令会根据本机的操作系统和架构编译 yurtadm，并把编译出来的可执行二进制文件放在 _output 目录下。

### 构建镜像

`make docker-build` 是最便捷的镜像构建命令，包括编译和打包镜像等步骤，可以覆盖绝大多数场景。其使用方式如下：

```bash
make docker-build TARGET_PLATFORMS="${TARGET_PLATFORMS}" REGION="${your_region}"
```

`TARGET_PLATFORMS`：表示组件运行的目标操作系统和架构，目前支持 linux/amd64、linux/arm 和 linux/arm64 三种。

`REGION`：该参数影响编译时使用的 GOPROXY。建议中国国内的用户设置 `REGION=cn` 以保证构建过程正常进行（cn 表示 `GOPROXY=https://goproxy.cn`）。

使用示例：

```bash
make docker-build TARGET_PLATFORMS=linux/amd64 REGION=cn
```

命令执行完成后会在本地生成 OpenYurt 各个组件的镜像，可以通过 `docker images` 查看。

### 交叉编译

#### Mac

```bash
GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtadm
```

通过设置 `target_os` 和 `target_arch`，该命令可以编译出在目标平台上运行的 yurtadm 二进制文件。为避免兼容性问题，建议设置 `CGO_ENABLED=0`。

## 如何测试

OpenYurt 中包含两种类型的测试：单元测试和 e2e 测试。

### 单元测试

单元测试会执行 cmd 和 pkg 目录下文件名以 `_test.go` 结尾的测试代码。

```bash
make test
```

### e2e 测试

本节介绍如何为 OpenYurt 构建并运行 e2e 测试。节点自治（autonomy）的测试仍在开发中。

如果你已经搭建好了 OpenYurt 集群，可以直接按照以下步骤进行测试。否则，你可以参考 [本地启动 OpenYurt](./local-up-openyurt.md) 的说明在本地快速启动 OpenYurt。

你可以使用以下命令运行 e2e 测试。假设你已经进入了 openyurt 工作目录，运行：

```bash
make e2e-tests
```

该命令会在 OpenYurt 集群上运行 e2e 测试。它会使用 `${KUBECONFIG}` 路径下的 kubeconfig，默认路径为 `$HOME/.kube/config`。如果找不到配置文件，将会报错退出。测试结果会显示在 stdout 上：

```bash
Ran 5 of 5 Specs in 82.279 seconds
SUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped
PASS
```

如果你需要进一步配置 yurt-e2e-test 的行为（例如运行自治 e2e 测试用例），可以按照下一节的步骤手动运行 e2e 测试。

## 常见问题

1. 构建时出现"go: github.com...unknown revision xxx"  
   通常是由于你主机上的 git 版本过低，可以尝试升级 git。

2. 编译时出现"unsupported GOOS/GOARCH pair xxx/xxx"  
   go 不支持所有的 GOOS/GOARCH 组合，例如 go1.17.3 不支持 windows/arm64。你可以通过 `go tool dist list` 查看所有支持的平台组合。

3. 运行在其他平台上编译的二进制文件时出现"cannot execute binary file: Exec format error"  
   通常是由于交叉编译未成功，操作系统无法识别文件格式。在 Windows 上进行交叉编译时，请确保以管理员权限运行。
