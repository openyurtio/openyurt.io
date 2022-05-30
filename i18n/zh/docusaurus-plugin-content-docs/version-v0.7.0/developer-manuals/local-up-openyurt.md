---
title: 本地启动集群
---

## 使用方法

OpenYurt提供了一种在本地快速启动集群的方法，通过运行脚本[local_up_openyurt.sh](https://github.com/openyurtio/openyurt/blob/master/hack/local_up_openyurt.sh)，可以自动完成对源码的编译、镜像打包、启动OpenYurt集群等工作。该脚本正确完成后，可以直接通过kubectl命令访问集群。在运行前需要安装docker、kubectl、go和kind等依赖软件。使用方法如下：

```bash
sudo -E REGION=cn bash hack/local_up_openyurt.sh
```

> 注意该脚本只能保证在linux/amd64上的可用性，其他平台未经过测试。如果在运行local_up_openyurt.sh时出现“ERROR: failed to load image .. not found"，那很可能是因为与运行平台不兼容，请在linux/amd64上运行，或者手动部署。

## 实现原理

总的来说，`local_up_openyurt.sh`会使用当前openyurt目录下的源文件启动OpenYurt集群。可以通过设置环境变量来控制脚本的行为。

首先，脚本会启动一个docker容器来构建可执行二进制文件和镜像。这些构建的可执行二进制文件和镜像运行的目标平台和本地平台一样。比如说，如果本地是linux/amd64，那么只有linux/amd64相关的可执行二进制文件和镜像会被构建。构建出来的可执行二进制文件和镜像放在`_output`目录下。

然后，脚本会通过`kind`来启动一个kubernetes集群。可以通过设置`KUBERNETESVERSION`来指定集群的kubernetes的版本。如，通过运行`export KUBERNETESVERSION=1.18`可以指定使用1.18版本的kind镜像。还可以通过设置`NODES_NUM`来指定启动集群中包含节点的数量。
>注意：
>1. `KUBERNETESVERSION`的格式只能是`1.xx`。默认值为`1.20`。
>2. `NODES_NUM`的值不能小于2。启动的集群中最后会包含1个control-plane节点，`NODES_NUM-1`个worker节点。默认值为2。

最后，通过`yurtctl`工具将kubernetes集群转换为OpenYurt集群。`yurtctl`会使用刚刚构建好的镜像来转换集群，包括`yurthub`，`yurt-controller-manager`，`yurt-tunnel-agent`和`yurt-tunnel-server`。可以通过`export YURTTUNNEL=disable`命令跳过`yurt-tunnel`相关组件的部署。

现在，一个OpenYurt集群就启动完成了。可以直接通过`kubectl`命令来与集群进行交互。`kind`会自动将启动的集群的kubeconfig储存在`KUBECONFIG`所指路径（默认为${HOME}/.kube/config）。如果在该目录下已经有了kubeconfig，`kind`会为该kubeconfig增加新的context，并切换current-context指向刚刚创建的集群。可以通过`kubectl config use-context ${PREVIOUS_CONTEXT_NAME}`命令切回原来的集群。context相关的更多信息可以参考该[文档](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters)。另外可以通过设置`KIND_KUBECONFIG`来指定其他的路径。

## 环境变量说明

可以通过以下环境变量来控制脚本的行为：

1. **REGION**  
REGION可以设为cn和us，来决定使用哪个GOPROXY。默认值为`us`。

2. **KIND_KUBECONFIG**  
KIND_KUBECONFIG表示kind为新集群创建的kubeconfig文件的路径。默认值为`$HOME/.kube/config`。

3. **NODES_NUM**  
NODES_NUM表示创建的集群中包含的节点的数量，最后集群中会有1个control-plane节点和NODES_NUM-1个worker节点。因此NODES_NUM的值不能小于2，默认值为`2`。

4. **KUBERNETESVERSION**  
KUBERNETESVERSION表示创建的集群使用的kubernetes版本，格式为"1.xx"。目前能指定的版本有1.18，1.19和1.20。默认值为`1.20`。

5. **TIMEOUT**  
TIMEOUT表示在创建集群期间等待组件（control-plane，yurt-tunnel-server，yurt-tunnel-agent）就绪的最长时间。默认值为`120s`。

6. **YURTTUNNEL**  
YURTTUNNEL用于判断是否需要部署yurt-tunnel-server和yurt-tunnel-agent，通过设置`YURTTUNNEL=disable`可以不部署yurt-tunnel相关组件。默认值为`enable`。
