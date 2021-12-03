---
slug: How-to-use-yurtctl-convert-revert
title: Kubernetes与OpenYurt无缝转换（命令式）
authors: [adamzhoul]
tags:  [ openyurt ]
---


打开openYurt的README.md，在简单介绍之后就是Getting started:

```
 yurtctl convert --provider [minikube|kubeadm|kind] // To convert an existing Kubernetes cluster to an OpenYurt cluster
 yurtctl revert // To uninstall and revert back to the original cluster settings
```

简单一行命令就可体验OpenYurt了，感觉非常方便。

稍等！为什么是 convert/revert 而不是 install/uninstall ?

这个命令对集群做了什么？

看来，在执行它之前有必要搞清楚它到底做了什么。



## yurtctl convert 到底做了些什么？

### 核心流程

跟随openYurt[源代码](https://github.com/openyurtio/openyurt/blob/5063752a9f6645270e3177e39a46df8c23145af2/pkg/yurtctl/cmd/convert/convert.go#L300)，梳理了convert的核心流程：


```
1. 检查
   1.1 检查所有node节点状态为ready
2. 组件部署
  2.1 给node节点打上相应的label。
  2.2 使用deployment部署yurt-controller-manager。
  2.3 使用deployment部署yurt-tunnel-server。
  2.4 使用daemonset部署yurt-tunnel-agent，部署在边缘节点上。
  2.5 使用deployment部署yurt-app-manager。
3. k8s组件修改
  3.1 修改kube-controller-manager.yaml，用来disable nodelifecycle controller
4. 节点转换
   4.1 写入yurthub.yaml到/etc/kubernetes/manifests，启动静态pod
   4.2 修改kubelet配置，使得kubelet访问yurthub而不是直连apiServer
```

可见1、2并没有什么特别，只是常规的服务部署

3，则是对原有k8s系统组件的操作，需要特别注意

4-节点转换看着也并不复杂，却对边缘至关重要。



### disable nodelifecycle controller 做了什么？

工作内容：

    1. 查询控制面节点
    2. 创建job，通过` nodeName: {{.nodeName}}` 确保job的pod调度到对应node上执行(通过nsenter的方式执行，修改宿主机上文件)。
    3. sed -i 's/--controllers=/--controllers=-nodelifecycle,/g' /etc/kubernetes/manifests/kube-controller-manager.yaml

查看kube-controller-manager.yaml

```
...
containers:
- command:
- kube-controller-manager
- --allocate-node-cidrs=true
    ...
- --controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner
...
```
可见，上面的一系列操作最终就是修改了kube-controller-manager的启动命令。

查看kube-controller-manager启动参数说明：

    --controllers 代表需要开启的controller列表

可见，sed命令就是去掉了nodelifecycle这个controller。


那，nodelifecycle controller是做什么的？

简单来说：

    1. 不断监听，kubelet上报上来的node信息
    2. 如果某个node状态异常，或者说长时间没有上报等
      2.1 驱逐这个node节点或者其他 ---> 导致上面的pod被重新调度

可见，对于处于弱网环境的边缘节点，很容易就命中异常状态，导致node被驱逐，pod被重新调度。

所以这里把它去掉了。使用yurt-controller-manager来代替它。

即使节点心跳丢失，处于自治模式的节点中的pod也不会从APIServer中驱逐。

注：这里自治模式的节点，指的就是边缘节点。我们通常会通过加annotation的方式把节点标记为自治节点。



### 节点转换是怎么实现的，云端节点和边缘节点有什么差异?

同样，是通过跑job的方式，在目标宿主机上下文中执行相关操作。

不过，相比于暴力使用nsenter，这里用了更加优雅的方式。通过将宿主机根路径 volume挂载到容器里的方式。



##### kubelet的修改

在文件/var/lib/kubelet/kubeadm-flags.env 中为KUBELET_KUBEADM_ARGS添加配置：

` --kubeconfig=/var/lib/openyurt/kubelet.conf --bootstrap-kubeconfig= `

作用：

    1. 参数：--kubeconfig ， 给kubelet指定了访问apiServer的配置文件。
    2. 当--kubeconfig 文件存在，--bootstrap-kubeconfig为空时，
       kubelet启动就不需要通过bootstrap-token置换文件证书等过程，直接读取kubeconfig文件访问apiServer。
    3. 由于KUBELET_KUBEADM_ARGS 是kubelet启动参数的最后一部分，所以可以起到覆盖前面参数的作用。

其中`/var/lib/openyurt/kubelet.conf`内容如下，直接将流量指定到yurthub：

```
apiVersion: v1
clusters:
- cluster:
server: http://127.0.0.1:10261
name: default-cluster
contexts:
- context:
cluster: default-cluster
namespace: default
user: default-auth
name: default-context
current-context: default-context
kind: Config
preferences: {}
```



##### yurthub的启动细节

yurthub容器启动参数如下：

```
command:
- yurthub
- --v=2
- --server-addr=__kubernetes_service_addr__
- --node-name=$(NODE_NAME)
- --join-token=__join_token__
- --working-mode=__working_mode__
```

通过参数我们可看出：

    1. server-addr 指定了云端apiServer地址。注意这里的地址一定是公网可访问地址，否则异构网络下会有问题。
    2. join-token 就是加入节点的token，可使用`kubeadm token create`来创建。k8s提供机制，通过token置换出正常访问的kubeconf文件。
    3. working-mode： cloud/edge。这就是边缘节点和云端节点的差异。



我们都知道yurthub可以用来做缓存，是解决边缘自治的重要环节。那么云端为什么也需要部署？为什么还要区分edge或者cloud工作模式？

简单查看yurthub源代码 cmd/yurthub/app/start.go:

``` golang
if cfg.WorkingMode == util.WorkingModeEdge {
    cacheMgr, err = cachemanager.NewCacheManager(cfg.StorageWrapper, cfg.SerializerManager, cfg.RESTMapperManager, cfg.SharedFactory)
    ...
} else {
    klog.Infof("%d. disable cache manager for node %s because it is a cloud node", trace, cfg.NodeName)
}
if cfg.WorkingMode == util.WorkingModeEdge {
    ...
    gcMgr, err := gc.NewGCManager(cfg, restConfigMgr, stopCh)
} else {
    klog.Infof("%d. disable gc manager for node %s because it is a cloud node", trace, cfg.NodeName)
}
```

可见，云端yurthub，少做了 cache、GC的工作。

查看[issue](https://github.com/openyurtio/openyurt/issues/450) 可了解：云端也可以利用yurthub提供的data-filtering能力来控制service的流量

当然，云端也不需要做cache等工作。



### 命令行参数

在执行过程中，有几个参数比较重要：

--cloud-nodes 用于标识哪些是云端节点，多个节点用逗号分隔：node1,node2

--deploy-yurttunnel 标记是否要部署yurttunnel

--kubeadm-conf-path 标记节点机器上kubeadm配置文件路径。默认：/etc/systemd/system/kubelet.service.d/10-kubeadm.conf

更多参数，可使用 yurtctl convert --help 来查看。



### 总结

简单来说，convert核心做了几个事情：

    1. disable k8s 的nodelifecontroller，用自己的yurtcontrollermanager来替换它的职责。
    2. 安装自己的各类组件，deployment、damenonset 等模式部署。（这类资源部署无需任何担心，因为搞不坏集群，也不太会出现问题。）
    3. 边缘节点：启动yurthub静态pod;将kubelet流量转发到yurthub。

可见，convert的事情还是比较可控的。执行yurtctl convert 也不用太担心。

当然，最后的担心也应该由 yurtctl revert 来彻底消除！



## yurtctl revert 又干了些什么？

### 核心流程

    1. 检查
      1.1 确保所有node都已经ready
    2. 删除自身部署组件
      2.1 删除 yurt-controller-manager deployment以及相关资源 
      2.2 删除yurt-tunnel-agent以及相关资源
      2.2 删除yurt-tunnel-server以及相关资源  
      2.3 删除yurt-app-manager以及相关资源
    3. k8s组件修改
      3.1 开启nodelifecontroller, 这个很好理解，就是把修改的命令通过sed命令改回来。
    4. 云端、边缘节点转换为原生节点
      4.1 修改kubelet配置，直连apiServer
      4.2 删除yurthub相关配置、目录

整个revert的过程就是convert的反向操作，还比较好理解。

需要注意的是。如果convert失败，比如job执行超时或者失败。job是不会被删除的。

即使yurtctl revert 也不会删除。目的是为了保留现场方便定位问题。

如果需要重新执行yurtctl convert， 需要手动删除job。

```
kubectl get job -n kube-system -A |grep convert
kubectl delete job -n kube-system < job-name>
```





## 总结

yurtctl convert/revert 命令是最快捷体验openYurt功能的方法之一。

在了解了这两个命令的实现原理，也就对openYurt的技术方案了解大半了。

执行命令也不担心了，so easy！
