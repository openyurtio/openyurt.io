---
title: Yurtctl convert/revert
---

## 1.背景说明

由于 OpenYurt 对 Kubernetes 无侵入，所以 OpenYurt 提供了 Yurtctl convert/revert 命令，用于 Kubernetes 集群和 OpenYurt 集群的转换。该命令适用于测试环境，不推荐在生产环境中使用。



## 2.使用流程

### 2.1编译 Yurtctl

要快速构建和安装设置 `yurtctl` ，在编译系统已安装了 golang 1.13+ 和 bash 的前提下你可以执行以下命令来完成安装：

~~~sh
```sh
$ git clone https://github.com/openyurtio/openyurt.git
$ cd openyurt
$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn
```
~~~

生成的可执行文件将存放在 `_output/bin/` 目录下。

### 2.2 Kubernetes To OpenYurt

在测试环境中，当用户已经拥有一个 Kubernetes 集群时，可以使用 Yurtctl convert 命令，快速地将集群转换为 OpenYurt 集群。目前，OpenYurt 支持 minkube、kind 以及手动搭建的 Kubernets 集群的转换。

查看原生 Kubernetes 集群：

```sh
$ kubectl get node
NAME                     STATUS   ROLES    AGE   VERSION
us-west-1.192.168.0.87   Ready    <none>   19h   v1.14.8-aliyun.1
us-west-1.192.168.0.88   Ready    <none>   19h   v1.14.8-aliyun.1
us-west-1.192.168.0.89   Ready    <none>   19h   v1.14.8-aliyun.1
```

使用 Yurtctl convert 命令进行集群转换。转换时，需要指定集群中的云端节点列表。

```sh
$ _output/bin/yurtctl convert --provider ack --cloud-nodes us-west-1.192.168.0.87,us-west-1.192.168.0.88
I0529 11:21:05.835781    9231 convert.go:145] mark us-west-1.192.168.0.87 as the cloud-node
I0529 11:21:05.835781    9231 convert.go:145] mark us-west-1.192.168.0.88 as the cloud-node
I0529 11:21:05.861064    9231 convert.go:153] mark us-west-1.192.168.0.89 as the edge-node
I0529 11:21:05.951483    9231 convert.go:183] deploy the yurt controller manager
I0529 11:21:05.974443    9231 convert.go:195] deploying the yurt-hub and resetting the kubelet service...
I0529 11:21:26.075075    9231 util.go:147] servant job(node-servant-convert-us-west-1.192.168.0.89) has succeeded
```

转换完成之后，集群中会部署 yurt-controller-manager，yurt-hub 等组件。此外，边缘节点会自动开启节点自治功能。

在转换时 Yurtctl 提供了选项，用户可以选择设置 OpenYurt 集群的配置：

```
--deploy-yurttunnel				是否部署 yurttunnel-server 以及 yurttunnel-agent
--enable-app-manager			是否部署 yurt-app-manager
--yurthub-image										yurthub 镜像
--yurt-controller-manager-image		yurt-controller-manager 镜像
--yurt-tunnel-server-image				yurttunnel-server 镜像
--yurt-tunnel-agent-image					yurttunnel-agent 镜像
--yurt-app-manager-image					yurt-app-manager-image 镜像
```

更多配置可以使用 `yurtctl convert -h` 获取。
注意：如果转换失败，请查询失败的 Job 的运行情况进行错误排查，并删除相关的 Job，以避免下一次转换发生错误。

### 2.3 OpenYurt To Kubernetes

在测试环境中，通过执行以下命令将 OpenYurt 集群转换为 Kubernetes 集群：

```sh
$ _output/bin/yurtctl revert
revert.go:100] label openyurt.io/is-edge-worker is removed
revert.go:110] yurt controller manager is removed
revert.go:124] ServiceAccount node-controller is created
util.go:137] servant job(node-servant-revert-minikube-m02) has succeeded
revert.go:133] yurt-hub is removed, kubelet service is reset
```

注意，在执行前需要确保所有边缘节点状态正常，以避免转换过程中发生错误。





