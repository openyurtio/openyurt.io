---
title: FAQ
---

## **开发入门**
**1. 想参与OpenYurt开源社区，都需要什么知识储备？**

无论参与任何开源社区，首先最重要的是时间和热情。而对知识储备本身没有太多要求，因为可以由浅入深逐步参与和贡献开源社区。根据个人理解，介绍一下各个阶段可以做的事情以及收获。
 - 初期: 完全无经验
   - 文档: 社区需要各类文档，可以参与到文档翻译，功能点的查漏补缺等
   - 代码: 如简单的unit tests
   - 社区: issue讨论，pull requests comment。欢迎在任何issue和pull request中发表个人的意见，抑或是提出各种疑问。以及参加每一次社区会议，准备一些简单问题提问都是欢迎的。
   - 目的及收获：了解项目的定位，基础功能，基本可以把项目搭建和简单使用起来。同时也与开源社区贡献者熟络起来，可以让其帮留意一些简单可贡献的代码点。

 - 入门: 完成初期阶段后，熟悉了基本的开发语言以及社区开发流程
   - 社区：更活跃参与到的issue和pull requests讨论，提出更多有建设性的建议
   - 代码：开始深度阅读开源项目的源码，讨论某些具体的设计以及分析其方案优劣。可以对某些独立的模块，特性进行开发，并提交pull requests
   - 文档： 根据代码pull requests，更新相关的用户文档
   - 目的及收获：成为社区member，并且打算成为此开源项目的深度贡献者。

 - 熟练：完成入门后，基本属于社区深度贡献者了
   - 社区： 整理自己的重要贡献，在社区会议或者外部会议中进行分享，为项目的影响力做出贡献
   - 代码：对社区有深入的理解并获取到社区的信任，开始负责重要特性，并给社区提交proposal，并获得社区积极反馈等。同时对开发语言也有深入理解，已经有不少实战的产出等。
   - 文档：贡献完整特性的社区文档
   - 目的及收获：社区reviewer+，并且可能在生产环境中使用该开源项目。并且参与社区某些特性，发展方向的规划与讨论。

** 2. golang推荐用什么版本？**

OpenYurt版本是v1.1.0以上时，推荐golang版本：v1.17及以上

** 3. 平时开发推荐使用什么IDE？**

这个属于是golang的范畴，这里个人推荐goland，vscode等IDE

** 4. 如何在本地搭建一个开发测试用的OpenYurt集群环境？**
   
目前支持一键式在Linux和Mac系统上搭建一套基于KinD的OpenYurt集群。命令如下:
- Linux环境: make docker-build-and-up-openyurt
- Mac环境(MACBook Pro M1): make docker-build-and-up-openyurt TARGET_PLATFORMS=linux/arm64

上述命令首先会构建OpenYurt各组件镜像，然后基于KinD创建K8s集群，接着会调整K8s配置以及安装各个OpenYurt组件。
由于墙的原因，如果是国内的开发者，可以在上述命令后增加: REGION=cn，确保可以拉取到项目依赖。

** 5. 开发完代码，可以在本地执行哪些检查？**
   
当直接往Github提交pull request时，可能会碰到github action的问题，建议在提交pr前，可以在本地执行下列检查:
- 语法格式等检查: make lint
- unit tests检查: make test
- 编译检查: make build
- e2e检查: make e2e-tests

同时执行e2e检查时，需要提前先搭建基于KinD的OpenYurt集群，方法参照问题【如何在本地搭建一个开发测试用的OpenYurt集群环境】.

** 6. dockerhub拉取OpenYurt组件镜像失败，如何解决 **

以openyurt/yurthub:v1.2镜像为例，如果由于网络原因拉取失败，可以考虑从阿里云镜像仓库拉取：registry.cn-hangzhou.aliyuncs.com/openyurt/yurthub:v1.2
其他组件镜像可以相同办法解决。

另外镜像是支持的arch有amd64, arm, arm64，镜像拉取时容器runtime会自动根据主机arch拉取对应的镜像，并不需要对镜像做任何修改。

## ** Yurthub **

** 1. Yurthub数据缓存目录？**

边缘节点上meta数据缓存路径为：/etc/kubernetes/cache/{componentName}/{resource}/{namespace}/{name}

** 2. Yurthub组件使用证书存储目录？**

- client证书: /var/lib/yurthub/pki/yurthub-current.pem
   用于访问云端kube-apiserver，权限同kubelet节点证书
- server证书: /var/lib/yurthub/pki/yurthub-server-current.pem
   用于Yurthub启动https server，边缘节点上各个组件访问

目前证书有效期统一由kube-controller-manager组件决定(默认1年)，暂时不支持用户自配置。同时证书在过期前Yurthub会执行证书轮转请求来更新证书。如果由于网络原因导致证书过期(一直轮转失败)，Yurthub将使用bootstrap token重新申请证书。当然bootstrap token也过期的话，需要用户在边缘节点上执行: POST http://127.0.0.1:10267/v1/token -D "jointoken:xxx" 来更新bootstrap token即可，注意前面的xxx替换为有效的bootstrap token。

** 3. 如何查看有哪些请求经过Yurthub转发给kube-apiserver？**

边缘节点上执行：curl http://127.0.0.1:10267/metrics 查看下面内容即可：

![img](../../../../static/img/docs/faq/flight-requests-in-yurthub.png)

node_yurthub_in_flight_requests_collector每一行代表一种类型请求，由client/resource/verb三元组决定。后面的数量0表示请求发生过，但是当前已经结束。数字1表示为当前有一个1个该请求。

这里有两点需要注意一下：
- list/watch一般配套出现的，如果只有list，没有watch，可能意味list请求没有结束，被Yurthub卡住了。比如yurt-app-manager没有部署，导致nodePool资源没有ready，而yurthub的servicetopology filter会依赖nodePool资源。因此yurthub的servicetopology filter一直无法就绪，会阻塞coredns/kube-proxy list endpointslice请求。
- 如果yurthub重启了，可能出现只有watch，没有list的请求，这是正常现象。

** 4. 如何查看边缘节点各个组件与kube-apiserver交互的通信流量？**

边缘节点上执行：curl http://127.0.0.1:10267/metrics 查看下面内容即可：

![img](../../../../static/img/docs/faq/response-traffic-in-yurthub.png)

通过node_yurthub_proxy_traffic_collector的信息，可以查看到各个请求从云端返回数据的总流量。单位为Byte
所以在边缘节点上的pod，一定要减少对大规模资源(如node，pods，endpointslice等的全量list请求)，否则会占用大量的公网带宽。

** 5. 使用InClusterConfig的Pod没有经过Yurthub访问云端的kube-apiserver？**

使用yurtadm join安装的节点，节点上的pod通过InClusterConfig访问kube-apiserver时，会自动经过Yurthub，从而复用到Yurthub的数据缓存，过滤，流量统计等一系列能力。如果发现Yurthub的metrics并没有相关请求记录时，可以通过如下方法分析定位：
- 确定pod是否使用的是InClusterConfig，还是直接使用kube-apiserver地址访问
- 查看Pod(容器)中的环境变量: KUBERNETES_SERVICE_HOST和KUBERNETES_SERVICE_PORT，它们的值是否对应Yurthub的监听地址(默认为：169.254.2.1:10268)，这里地址一般对不上。
- 如果不是的话，查看一下/etc/kubernetes/cache/kubelet/services/default/kubernetes文件中内容，看Service的ClusterIP和Port是否为Yurthub监听地址(默认为：169.254.2.1:10268)，这里地址一般是正确的。

如果现象如上所示：删除并重建一下Pod即可，再查看其环境变量是否已经正常。

** 6. 边缘节点上，Service topology能力未生效**

- 查看/etc/kubernetes/cache/kube-proxy下对应endpointslice数据是否正确，不正确的情况下，重启kube-proxy看可以恢复
- 查看yurthub的metrics，看kube-proxy list endpointslice请求是否结束(数量为0表示结束)，如果该list请求没有结束的话，说明yurthub中的service topology filter还没有ready，一般是因为yurt-app-manager组件没有部署，导致nodePool资源没有创建。

** 7. Yurthub无法正常启动，主机上也未发现Exited的Yurthub容器**

- journalctl -u kubelet查看kubelet组件日志，发现有错误信息：`dial tcp 127.0.0.1:10261: connect: connection refused`，表示Yurthub未正常启动
- docker ps -a查看主机上是否有Exited状态的Yurthub容器
- 如果没有Exited状态的Yurthub容器，请在kubelet日志查看Yurthub无法启动原因

** 8. Yurthub无法正常启动，日志显示在等待证书生成？**
   
Yurthub需要的证书没有生成成功，可以通过下述方法来定位：
- 对集群执行：kubectl get csr，查看相关节点的证书csr是否有生成
- 如果csr未生成，一般是传入的bootstrap token是无效的token，清理节点后，使用有效bootstrap token再接入即可。
- 如果csr已经生成，但是状态一直是pending状态，表示yurt-controller-manager一直无法approve该csr，一般是yurt-controller-manager和yurthub版本不一致引起的，升级到相应版本即可解决。

** 9. 边缘节点上Yurthub缓存中的某个组件的meta data被删除了，如何恢复？**

节点和云端网络连接正常状态下，重建一下对应pod即可恢复相关缓存meta数据。

** 10. 节点接入时，Yurthub正常启动成功，但是所有请求一直报证书错误？**

这种情况可能是因为节点上有残留的Yurthub证书，导致Yurthub启动时复用了该证书，从而产生证书报错的问题。可以在/var/lib/yurthub/pki目录下执行ls -la看下各个文件的生成时间，看生成时间是否合理。
同时在历史操作过的节点，重新接入集群时，建议先执行一次yurtadm reset，先清理一下节点上数据。

** 11. 用户自己的pod经过Yurthub访问云端的kube-apiserver，但是边缘节点上没有该Pod的缓存数据？**
    
Yurthub默认只会为kubelet，kube-proxy，coredns，flannel，tunnel-agent组件(通过http request heder中的User-Agent来确认)缓存数据，其他client(如client-A)的数据需要缓存，需要在kube-system/yurthub-cfg configmap中的cache_agents字段中增加：client-A，然后删除并重建该client-A Pod。
同时cache_agents也支持通用配置符：*, 这样所有的clients的response都会自动被缓存，但是用户需要自行关注缓存对本地磁盘的占用状况。

## **yurt-tunnel**

** 1. 如何定位`kubectl exec`命令执行失败原因，可以根据下图中流程来确定。**

![img](../../../../static/img/yurt-tunnel-troubleshooting.png)

- 如果在kube-apiserver的日志无法找到`exec`请求相关的信息，请把kube-apiserver组件日志级别调整为3(--v=3)
- 请确保kube-apiserver使用`yurt-tunnel-dns` pod来进行域名解析，kube-apiserver配置调整文档请参考: https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment

另外还有一些yurt-tunnel相关的issue，也可能为您提供一些帮助。

** 2. kubectl logs 边缘节点的pod出现：error: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)** 

问题描述：https://github.com/openyurtio/openyurt/issues/984

没有使用最新的 yurt-tunnel-agent:latest  镜像，查看一下镜像创建时间，如果不是最新的镜像，需要重新pull一下镜像。

** 3. kubectl logs 边缘节点的pod出现：error: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))** 

具体问题描述：https://github.com/openyurtio/openyurt/issues/984

删除 /var/lib/yurttunnel-server/pki 目录，然后重新部署yurt-tunnel:

```bash
rm -rf /var/lib/yurttunnel-server/pki
kubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system
```

** 4. kubectl exec报错: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel**

`kubectl port-forward`也可能出现上述类似报错信息。
```bash
root@control-plane:~# kubectl port-forward <...>
error: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel: write unix @->/tmp/interceptor-proxier.sock: write: broken pipe
```

当`yurt-tunnel-server/agent` 连接无法建立，将会触发这个问题。 比如yurt-tunnel-agent未部署到相应的边缘节点，导致连接没有建立从而触发此问题。
在这种情况下，强烈建议通过 [Setup OpenYurt components](https://openyurt.io/docs/installation/manually-setup#32-setup-openyurtopenyurt-components) 确保 `yurt-tunnel-server /agent` pod 被部署到适当的云和边缘节点。

当节点确定不需要部署`yurt-tunnel-server/agent`时，但是`kubectl exec/port-forward`请求还是碰到此问题，则可能与`/etc/hosts`中的网络设置有关。
比如`/etc/hosts`包含的网络配置，导致请求会通过`yurt-tunnel-server/agent`。同时节点上不会运行 `yurt-tunnel-agent`，所以此请求最终将失败并显示错误消息。

在这种情况下，需要注释掉/etc/hosts中不相关的IP地址和主机名。
更多详情请参考[issue 1024](https://github.com/openyurtio/openyurt/issues/1024)。

## **CoreDNS**

** 1. 边缘的跨节点Pod通过service不可访问，但是直接通过PodIP是互通的**

首先通过podIP可以访问，说明跨节点的容器网络(如flannel的vxlan)是正常的，然后是service不能访问的问题，可以如下来分析：
- 在pod的net namespace内，直接访问service clusterIP是否可达
- 如果不可达，说明kube-proxy对service的后端实例配置可能出问题，一般是service topology的问题，分析可以参照问题【边缘节点上，Service topology能力未生效】
- 如果通过service clusterIP可达，说明是域名解析的问题。可以按下面方法分析：
- 进入pod的net和mount namespace，查看/etc/resolv.conf 文件内容，看dns nameserver地址，一般是kube-dns service的clusterIP
- 执行命令：dig @{dns nameserver} {service name} 发现不通
- 执行命令： dig @{coreDNS pod ip} {service name} 可以通
- 说明是kubed-dns service的服务拓扑路由选择没有生效，可以参照Yurthub问题【边缘节点上，Service topology能力未生效】

## **yurtadm**

**1. yurtadm join 报错：crictl not found in system path**

节点没有安装 docker，安装docker就可以解决此问题。

**2. yurtadm join 报错：[ERROR FileExisting-conntrack]: conntrack not found in system path**

执行 `yum install -y conntrack` 然后重新执行 yurtadm join 命令即可。

## **prometheus**
**1. prometheus无法访问边缘节点**

prometheus无法获得边缘节点node-exporter信息

![img](../../../../static/img/docs/faq/prometheus-endpoint-shooting.png)

**排查方式**

1、登录到prometheus-pod所在节点，查看prometheus容器的运行日志

```shell
$ crictl ps -a
$ crictl logs $containerID<b9a9f9d9fdb1e>
```

![img](../../../../static/img/docs/faq/crictl-ps-shooting.png)

2、查看prometheus容器DNS配置文件resolv.conf，获得域名解析服务器地址

```shell
crictl inspect $containerID<b9a9f9d9fdb1e>
```

![img](../../../../static/img/docs/faq/crictl-inspect-shooting.png)

```shell
$ cat /var/lib/containerd/io.containerd.grpc.v1.cri/sandboxes/ebdbfc2212eb1390f24f02445e7737c62421c84caef92623/resolv.conf
```

![img](../../../../static/img/docs/faq/crictl-cat-resolv-shooting.png)

获知prometheus pod 的域名解析服务器`nameserver`地址

3、使用`dig`命令，域名解析服务器设置为prometheus的`nameserver`地址，解析服务无法访问的域名，得到其对应解析出的ip

```shell
$ dig @10.96.0.10 $无法访问的服务域名名称<edge-pi-node-02>
```

![img](../../../../static/img/docs/faq/crictl-dig-shooting.png)

> **若没有`dig`命令则按照对应系统如下安装dns工具包**
>
> ```shell
> $ apt install dnsutils  #ubuntu系统
> $ yum install bind-utils  #centos系统
> ```

4、用`curl`命令，使用刚刚解析的ip地址替换之前不可达的服务域名，看是否可以进行访问

`https://edge-pi-node-02:10250/metrics ` 替换为：`https://10.104.253.212:10250/metrics`

```shell
$ curl -k -v https://10.104.253.212:10250/metrics
```

如果可以正常访问则`curl`命令结果如下，且ipvs模式下节点应该有创建对应ip的虚拟服务转发规则

![img](../../../../static/img/docs/faq/crictl-curl-ipvs-shooting.png)