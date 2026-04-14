---
title: 本地启动集群
---

## 环境准备

在运行本地集群相关命令前，请先完成以下环境配置。

1. **安装 Go** — 从 [go.dev/dl](https://go.dev/dl/) 下载并安装合适版本的 Go，安装后执行 `go version` 确认。

2. **安装 Docker** — 安装 Docker Engine，确保 Docker 守护进程已启动。详见 [Get Docker](https://docs.docker.com/get-docker/)。

3. **将 `GOPATH/bin` 加入 `PATH`** — 通过 `go install` 安装的工具（例如 `kind`）会放在 `$(go env GOPATH)/bin` 下，需将该目录加入 `PATH`，否则无法在终端中直接执行。

```bash
export PATH="$(go env GOPATH)/bin:$PATH"
```

保存后执行 `source ~/.zshrc`（或对应配置文件）或重新打开终端，再通过 `echo "$PATH"` 或运行已安装的工具确认生效。

## 使用方法

OpenYurt提供了一种在本地快速启动集群的方法，通过运行脚本[local-up-openyurt.sh](https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local-up-openyurt.sh)，可以一键式在本地创建OpenYurt集群。该脚本正确完成后，可以直接通过kubectl命令访问集群。除上述环境准备外，还需安装 kubectl 等依赖，以及按需通过 `make docker-build` 在本地准备好 OpenYurt 各组件镜像。使用方法如下：

```bash
# 先构建OpenYurt镜像
make docker-build

#本地启动OpenYurt集群
NODES_NUM=5 DISABLE_DEFAULT_CNI=true make local-up-openyurt

#运行e2e测试
make e2e-tests
```

> 默认在linux/amd64平台运行，需要在mac环境运行时需要指定平台信息，执行命令为: `make local-up-openyurt TARGET_PLATFORMS=linux/arm64`

## 实现原理

总的来说，`local-up-openyurt.sh`会使用当前openyurt目录下的源文件启动OpenYurt集群。可以通过设置环境变量来控制脚本的行为。

脚本会通过`kind`来启动一个kubernetes集群。可以通过设置`KUBERNETESVERSION`来指定集群的kubernetes的版本。如，通过运行`export KUBERNETESVERSION=1.34`可以指定使用1.34版本的kind镜像。还可以通过设置`NODES_NUM`来指定启动集群中包含节点的数量。
>注意：
>1. `KUBERNETESVERSION`的格式只能是`1.xx`。默认值为`1.34`。
>2. `NODES_NUM`的值不能小于2。启动的集群中最后会包含1个control-plane节点，`NODES_NUM-1`个worker节点。默认值为2。

最后将在kubernetes集群中安装OpenYurt组件，包括`yurthub`，`yurt-manager`，`raven`。

现在，一个OpenYurt集群就启动完成了。可以直接通过`kubectl`命令来与集群进行交互。`kind`会自动将启动的集群的kubeconfig储存在`KUBECONFIG`所指路径（默认为`${HOME}/.kube/config`）。如果在该目录下已经有了kubeconfig，`kind`会为该kubeconfig增加新的context，并切换current-context指向刚刚创建的集群。可以通过`kubectl config use-context ${PREVIOUS_CONTEXT_NAME}`命令切回原来的集群。context相关的更多信息可以参考该[文档](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters)。另外可以通过设置`KIND_KUBECONFIG`来指定其他的路径。

## 环境变量说明

可以通过以下环境变量来控制脚本的行为：

1. **KIND_KUBECONFIG**

KIND_KUBECONFIG表示kind为新集群创建的kubeconfig文件的路径。默认值为`$HOME/.kube/config`。

2. **NODES_NUM**

NODES_NUM表示创建的集群中包含的节点的数量，最后集群中会有1个control-plane节点和NODES_NUM-1个worker节点。因此NODES_NUM的值不能小于2，默认值为`2`。

3. **KUBERNETESVERSION**

KUBERNETESVERSION表示创建的集群使用的kubernetes版本，格式为"1.xx"。目前能指定的版本有1.32和～1.34。默认值为`1.34`。

4. **TIMEOUT**

TIMEOUT表示在创建集群期间等待组件（control-plane，yurt-manager）就绪的最长时间。默认值为`120s`。

## 提示

启动 OpenYurt 集群（例如通过 `local-up-openyurt`）时，建议在宿主机上对以下与 `inotify` 相关的内核参数做调优，以避免在大量文件被监听（例如容器运行时或开发工具）时出现 watch 队列耗尽等问题。

推荐配置：

| 参数 | 推荐值 |
|------|--------|
| `fs.inotify.max_user_watches` | 524288 |
| `fs.inotify.max_user_instances` | 2048 |
| `fs.inotify.max_queued_events` | 524288 |

重启前临时生效可执行：

```bash
sudo sysctl -w fs.inotify.max_user_watches=524288
sudo sysctl -w fs.inotify.max_user_instances=2048
sudo sysctl -w fs.inotify.max_queued_events=524288
```

若需开机持久化，将上述 `key=value` 写入 `/etc/sysctl.d/` 下的配置文件（例如 `/etc/sysctl.d/99-openyurt-local.conf`），然后执行 `sudo sysctl --system`。