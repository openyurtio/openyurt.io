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
NAME     STATUS   ROLES                  AGE   VERSION
master   Ready    control-plane,master   24d   v1.20.0
node1    Ready    <none>                 24d   v1.20.0
node2    Ready    <none>                 24d   v1.20.0
```

使用 Yurtctl convert 命令进行集群转换。转换时，需要指定集群中的云端节点列表。

```sh
$ _output/bin/yurtctl convert --provider ack --cloud-nodes master
[preflight] Running pre-flight checks
[preflight] Running node-servant-preflight-convert jobs to check on edge and cloud nodes. Job running may take a long time, and job failure will affect the execution of the next stage
[runConvert] Label all nodes with edgeworker label, annotate all nodes with autonomy annotation
[runConvert] Deploying yurt-controller-manager
[runConvert] Running jobs for convert. Job running may take a long time, and job failure will not affect the execution of the next stage
[runConvert] Running disable-node-controller jobs to disable node-controller
	[INFO] servant job(yurtctl-disable-node-controller-master) has succeeded
[runConvert] Running node-servant-convert jobs to deploy the yurt-hub and reset the kubelet service on edge and cloud nodes
	[INFO] servant job(node-servant-convert-node1) has succeeded
	[INFO] servant job(node-servant-convert-node2) has succeeded
	[INFO] servant job(node-servant-convert-master) has succeeded
[runConvert] If any job fails, you can get job information through 'kubectl get jobs -n kube-system' to debug.
	Note that before the next conversion, please delete all related jobs so as not to affect the conversion.
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

OpenYurt 集群状况：

```sh
$ kubectl get pod -A
NAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE
kube-system   coredns-54d67798b7-28r2s                   1/1     Running   0          24d
kube-system   coredns-54d67798b7-wlmh8                   1/1     Running   0          24d
kube-system   etcd-master                                1/1     Running   0          24d
kube-system   kube-apiserver-master                      1/1     Running   0          24d
kube-system   kube-controller-manager-master             1/1     Running   0          13d
kube-system   kube-flannel-ds-4fmxr                      1/1     Running   0          24d
kube-system   kube-flannel-ds-7r2fh                      1/1     Running   0          24d
kube-system   kube-flannel-ds-j2xs5                      1/1     Running   0          24d
kube-system   kube-proxy-6jh7s                           1/1     Running   0          24d
kube-system   kube-proxy-9zdnz                           1/1     Running   0          24d
kube-system   kube-proxy-trw2v                           1/1     Running   0          24d
kube-system   kube-scheduler-master                      1/1     Running   0          24d
kube-system   yurt-controller-manager-77b97fd47b-mhhxq   1/1     Running   0          13d
kube-system   yurt-hub-master                            1/1     Running   0          13d
kube-system   yurt-hub-node1                             1/1     Running   0          13d
kube-system   yurt-hub-node2                             1/1     Running   0          13d
```

在测试环境中，通过执行以下命令将 OpenYurt 集群转换为 Kubernetes 集群：

```sh
$ ./yurtctl revert
I0107 11:36:25.694505    8473 revert.go:169] yurt controller manager is removed
I0107 11:36:25.703390    8473 revert.go:178] serviceaccount for yurt controller manager is removed
I0107 11:36:25.706450    8473 revert.go:187] clusterrole for yurt controller manager is removed
I0107 11:36:25.709956    8473 revert.go:196] clusterrolebinding for yurt controller manager is removed
I0107 11:36:25.720702    8473 revert.go:356] deployment for yurt app manager is removed
I0107 11:36:25.721580    8473 revert.go:366] Role for yurt app manager is removed
I0107 11:36:25.722411    8473 revert.go:375] ClusterRole for yurt app manager is removed
I0107 11:36:25.723257    8473 revert.go:384] ClusterRoleBinding for yurt app manager is removed
I0107 11:36:25.724132    8473 revert.go:394] RoleBinding for yurt app manager is removed
I0107 11:36:25.870416    8473 revert.go:404] secret for yurt app manager is removed
I0107 11:36:26.070564    8473 revert.go:414] Service for yurt app manager is removed
I0107 11:36:26.071558    8473 revert.go:424] MutatingWebhookConfiguration for yurt app manager is removed
I0107 11:36:26.072505    8473 revert.go:434] ValidatingWebhookConfiguration for yurt app manager is removed
I0107 11:36:26.082843    8473 revert.go:443] crd for yurt app manager is removed
I0107 11:36:26.092951    8473 revert.go:452] UnitedDeploymentcrd for yurt app manager is removed
I0107 11:36:26.092968    8473 revert.go:212] yurt app manager is removed
	[INFO] servant job(yurtctl-enable-node-controller-master) has succeeded
I0107 11:36:56.118458    8473 revert.go:226] complete enabling node-controller
	[INFO] servant job(node-servant-revert-node1) has succeeded
	[INFO] servant job(node-servant-revert-node2) has succeeded
	[INFO] servant job(node-servant-revert-master) has succeeded
I0107 11:37:16.135272    8473 revert.go:239] complete removing yurt-hub and resetting kubelet service
I0107 11:37:16.148484    8473 revert.go:246] delete yurthub clusterrole and clusterrolebinding
I0107 11:37:16.155288    8473 revert.go:262] label openyurt.io/is-edge-worker is removed from node master
I0107 11:37:16.155303    8473 revert.go:264] annotation node.beta.openyurt.io/autonomy is removed from node master
I0107 11:37:16.159211    8473 revert.go:262] label openyurt.io/is-edge-worker is removed from node node1
I0107 11:37:16.159229    8473 revert.go:264] annotation node.beta.openyurt.io/autonomy is removed from node node1
I0107 11:37:16.163365    8473 revert.go:262] label openyurt.io/is-edge-worker is removed from node node2
I0107 11:37:16.163384    8473 revert.go:264] annotation node.beta.openyurt.io/autonomy is removed from node node2
```

注意，在执行前需要确保所有边缘节点状态正常，以避免转换过程中发生错误。



