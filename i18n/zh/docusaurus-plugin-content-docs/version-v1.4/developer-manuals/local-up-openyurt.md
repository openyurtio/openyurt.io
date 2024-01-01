---
title: 本地启动集群
---

## 使用方法

OpenYurt提供了一种在本地快速启动集群的方法，通过运行脚本[local_up_openyurt.sh](https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local_up_openyurt.sh)，可以一键式在本地创建OpenYurt集群。该脚本正确完成后，可以直接通过kubectl命令访问集群。在运行前需要安装docker、kubectl、go和kind等依赖软件，以及`make docker-build`在本地准备好OpenYurt各组件镜像。使用方法如下：

```bash
# 先构建OpenYurt镜像，再启动OpenYurt集群
make docker-build-and-up-openyurt

# 镜像已经构建完成，仅在本地启动OpenYurt集群
make local-up-openyurt
```

> 默认在linux/amd64平台运行，需要在mac环境运行时需要指定平台信息，执行命令为: `make local-up-openyurt TARGET_PLATFORMS=linux/arm64`

## 实现原理

总的来说，`local_up_openyurt.sh`会使用当前openyurt目录下的源文件启动OpenYurt集群。可以通过设置环境变量来控制脚本的行为。

脚本会通过`kind`来启动一个kubernetes集群。可以通过设置`KUBERNETESVERSION`来指定集群的kubernetes的版本。如，通过运行`export KUBERNETESVERSION=1.23`可以指定使用1.23版本的kind镜像。还可以通过设置`NODES_NUM`来指定启动集群中包含节点的数量。
>注意：
>1. `KUBERNETESVERSION`的格式只能是`1.xx`。默认值为`1.22`。
>2. `NODES_NUM`的值不能小于2。启动的集群中最后会包含1个control-plane节点，`NODES_NUM-1`个worker节点。默认值为2。

最后将在kubernetes集群中安装OpenYurt组件，包括`yurthub`，`yurt-controller-manager`，`yurt-tunnel-agent`和`yurt-tunnel-server`。

现在，一个OpenYurt集群就启动完成了。可以直接通过`kubectl`命令来与集群进行交互。`kind`会自动将启动的集群的kubeconfig储存在`KUBECONFIG`所指路径（默认为`${HOME}/.kube/config`）。如果在该目录下已经有了kubeconfig，`kind`会为该kubeconfig增加新的context，并切换current-context指向刚刚创建的集群。可以通过`kubectl config use-context ${PREVIOUS_CONTEXT_NAME}`命令切回原来的集群。context相关的更多信息可以参考该[文档](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters)。另外可以通过设置`KIND_KUBECONFIG`来指定其他的路径。

## 环境变量说明

可以通过以下环境变量来控制脚本的行为：

1. **KIND_KUBECONFIG**

KIND_KUBECONFIG表示kind为新集群创建的kubeconfig文件的路径。默认值为`$HOME/.kube/config`。

2. **NODES_NUM**

NODES_NUM表示创建的集群中包含的节点的数量，最后集群中会有1个control-plane节点和NODES_NUM-1个worker节点。因此NODES_NUM的值不能小于2，默认值为`2`。

3. **KUBERNETESVERSION**

KUBERNETESVERSION表示创建的集群使用的kubernetes版本，格式为"1.xx"。目前能指定的版本有1.17～1.23。默认值为`1.22`。

4. **TIMEOUT**

TIMEOUT表示在创建集群期间等待组件（control-plane，yurt-tunnel-server，yurt-tunnel-agent）就绪的最长时间。默认值为`120s`。