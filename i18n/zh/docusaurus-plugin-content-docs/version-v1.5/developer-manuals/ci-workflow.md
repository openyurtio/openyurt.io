---
title: CI Workflow
---

本文会介绍OpenYurt社区在合入代码前的CI Workflow，了解这些知识会有助于Pull Request的顺利合入。OpenYurt通过Github Actions来构建CI Workflow，详细信息可见[官方文档](https://docs.github.com/cn/actionsh)。OpenYurt的Github Actions配置在[ci.yaml](https://github.com/openyurtio/openyurt/blob/master/.github/workflows/ci.yaml)中。

OpenYurt目前的CI WorkFlow主要由以下部分构成：

1. check-license
2. golangci-lint
3. markdownlint-misspell-shellcheck
4. unit-tests
5. build-binaries
6. e2e-tests

向OpenYurt仓库提交Pull Requst后，会自动触发OpenYurt的Github Actions运行上述检查。一个准备好合入的Pull Request需要通过所有六个检查，通过检查的PR如图所示：

![pr-passed-ci](../../../../../static/img/docs/developer-manuals/pr-passed-ci.png)

如果出现了未通过的检查，可以通过右方的`Details`找到检查的报错日志来定位问题。本文会给出各个检查的内容说明，使你能够对其有大致的概念，以便于理解问题产生的原因。上述检查都可以在本地运行。

## check-license

`check-license`会检查OpenYurt目录下所有的`.go`和`.sh`文件是否带有license声明。 它会执行脚本[check_license.sh](https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/check_license.sh)来完成上述检查，如果发现有文件不满足条件，会输出相关的文件路径。  

license是指源码开头注释中的一段许可证声明，下面是OpenYurt使用的license，其中的年份可以根据实际情况灵活变化：

```text
Copyright 2021 The OpenYurt Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## golangci-lint

`golangci-lint`会检查go源码是否符合规范，它使用Go的静态代码检查工具`golangci-lint`并配置其中的插件来对代码进行检查，详细信息可以参看[官方文档](https://golangci-lint.run/)，本节会介绍OpenYurt中使用到的一些检查插件。

OpenYurt的`golangci-lint`配置在[.golangci.yaml](https://github.com/openyurtio/openyurt/blob/master/.golangci.yaml)文件中，启用了如下插件，
详细的检查内容见各插件文档或仓库。

| 插件名                                                                            | 描述                                                                         |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [deadcode](https://github.com/remyoudompheng/go-misc/tree/master/deadcode)        | 检查是否存在没有使用的代码                                                   |
| [gofmt](https://pkg.go.dev/cmd/gofmt)                                             | 检查代码是否符合gofmt的标准                                                  |
| [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports?utm_source=godoc) | 检查代码的imports是否完备                                                    |
| [gci](https://github.com/daixiang0/gci)                                           | 检查代码的imports先后顺序是否为标准库、第三方库、OpenYurt库                  |
| [ineffassign](https://github.com/gordonklaus/ineffassign)                         | 检查代码中是否有无效的赋值，即赋值后变量未被使用                             |
| [misspell](https://github.com/client9/misspell)                                   | 检查注释中的单词拼写是否错误                                                 |
| [vet](https://pkg.go.dev/cmd/vet)                                                 | 用于检查一些编译器发现不了的错误，如Printf中的格式字符串和参数的个数是否匹配 |

本地可以通过命令行执行`make lint`来运行检查，该命令会自动安装并运行`golangci-lint`。相比于Github Actions中的日志，本地运行能获取更多的信息，能精确到问题的行数并给出产生问题的插件名称，有利于问题的解决。因此，这里推荐在提交Pull Request前先在本地运行一遍`make lint`。

## markdownlint-misspell-shellcheck

这里使用了[pouchlinter](https://github.com/pouchcontainer/pouchlinter)的镜像，这个镜像里打包了一些常用的lint工具，包括这里会使用的[misspell](https://github.com/client9/misspell)，[markdownlint](https://github.com/markdownlint/markdownlint)。misspell会检查文件中单词的拼写是否正确，如果找到不正确的会给出具体的位置；markdownlint会检查markdown文件的格式是否符合指定的markdown规范，具体的规范定义可以参考[文档](https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md)，在这里除了`MD010`,`MD013`,`MD022`,`MD024`,`MD029`,`MD031`,`MD032`,`MD033`,`MD034`,`MD036`以外的规范都会检查。 

## unit-tests

单元测试会执行名字带有`_test.go`后缀的文件，这些文件通常包含了对某个函数逻辑、模块功能的测试用例。这里会通过以下命令来执行单元测试:

```bash
make test
```

## build-binaries

这一步会尝试构建OpenYurt仓库的各个组件在linux/amd64平台上的可执行二进制文件（因为Github Actions运行的平台是linux/amd64）。构建的组件有：`yurtctl`, `yurt-node-servant`, `yurt-hub`, `yurt-controller-manager`, `yurt-tunnel-server`和`yurt-tunnel-agent`。 这里会使用如下命令编译各个组件：

``` bash
make build
```

## e2e-tests

这一步会用kind构建一个包含两个节点的OpenYurt集群，然后运行`test`目录下的测试用例。OpenYurt中也给出了在本地运行这些e2e测试用例的方法，可以参看“本地构建和测试”中的[e2e测试](./how-to-build-and-test.md#e2e测试)。目前Github Actions中运行的e2e测试有以下几种：

| 测试名称                 | 描述                                         |
| ------------------------ | -------------------------------------------- |
| cluster_info             | 尝试获取一些集群信息，包括pod数量，namespace |
| pod_operate_test         | 尝试在边缘节点上创建、删除pod                |
| pod_operate_test_on_edge | 尝试在边缘节点的pod中执行命令                |
