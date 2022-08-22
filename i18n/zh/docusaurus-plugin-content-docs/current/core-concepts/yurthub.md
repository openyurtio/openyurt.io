---
title: YurtHub
---

## 1. 功能简介

YurtHub 作为 OpenYurt 中的一个重要组件，在云边场景下为边缘侧提供了许多扩展能力。

### 1）边缘自治

目前 OpenYurt 提供边缘节点自治功能：即在云边网络断连时，边缘节点重启或者业务容器重启的情况下，业务容器能够在边缘节点自动恢复，而不会被云端驱逐、重新调度。

YurtHub 通过本地缓存资源，使得在云边网络断连的情况下，Pod 以及 Kubelet 也能够通过 YurtHub 获取所需资源而保持其正常运行。

![img](../../../../../static/img/docs/core-concepts/yurthub-autonomy.png)

### 2）流量闭环

在原生的 k8s 集群中，服务 Service 资源的后端范围是整个集群。在 OpenYurt 中，可以通过 NodePool 划分节点，对节点进行分区管理。由此，资源的管理可以以节点池为基本单位，比如使用 YurtAppSet 管理不同节点池中的 Pod 资源。

在这样的背景下，不同节点池中的资源具有一定的独立性，分区中的节点可能要求对 Service 访问流量只在同一区域内流通，而不会跨节点分区访问。因此，YurtHub 提供了流量闭环的功能：将 Service 对应的后端限制在同一节点池中，使得 Service 的访问流量只在同一节点池中流通。

![img](../../../../../static/img/docs/core-concepts/yurthub-service-topology.png)

### 3）Pod 无缝迁移

在原生 k8s 集群中，默认情况下，Pod 通过 InClusterConfig 地址访问 Kube APIServer。在云边场景中，云端与边缘可能位于不同的网络平面，此时，Pod 就无法通过 InClusterConfig 地址访问到 Kube APIServer。同时，在云边断连的情况下，边缘 Pod 需要重启时，由于无法连接 Kube APIServer 获取资源配置而重启失败。

为了解决以上两个问题，YurtHub 提供了 Pod 零修改迁移到边缘环境中的能力。对于使用 InClusterConfig 访问 Kube APIServer 的 Pod，YurtHub 在不修改 Pod 本身的配置的前提下，自动调整节点上 Pod 的访问地址，将 Pod 的请求转发至 YurtHub，使得 Pod 在云边断网时也能够正常运行，实现了 Pod 在云场景下到云边场景的无缝迁移。

![img](../../../../../static/img/docs/core-concepts/yurthub-pod.png)

### 4）多云端地址支持

YurtHub 支持多云端地址访问，以满足专有云场景中多个 Kube APIServer 同时工作、边缘计算场景中专线和公网通信同时工作的情况。YurtHub 中云端地址的负载均衡模式有两种方式：

- rr(round-robin)：轮转模式，默认选择该模式；
- priority: 优先级模式，高优先级地址故障后才使用低优先级地址。

### 5）节点证书管理

目前，YurtHub 作为客户端将请求转发至 Kube APIServer。同时，YurtHub 提供了 HTTP、HTTPS 服务端口，节点 Pod 以及 Kubelet 可以通过 HTTP 或者 HTTPS 与 YurtHub 进行连接，此时 YurtHub 又作为服务端接收节点上的 Pod 以及 Kubelet 的请求。由于集群组件之间为安全通信，所以 YurtHub 需要拥有客户端证书以及服务端证书，并对其进行管理。

YurtHub 的客户端证书以及服务端证书使用了 Kubernetes 中的节点证书自动轮换功能，当节点证书过期前，自动向云端申请新的节点证书。同时，也解决了因云边网络断连，造成证书轮换失败，当网络恢复时证书已经过期而轮换再次失败的问题。

## 2. 组件架构

YurtHub 既可以运行在云端节点上，也可以运行在边缘节点上。所以，其支持两种工作模式：“edge”，“cloud”。

### 1）Edge 模式

对于 “edge” 模式的 YurtHub，其组件架构如下图所示。

![img](../../../../../static/img/docs/core-concepts/yurthub-edge.png)

架构图中清晰得表明了请求在 YurtHub 中的流向。

- 在云边网络状况良好的情况下，节点上的 Pod 以及 Kubelet 的请求通过 Load Balancer 发送给 Kube APIServer，Load Balancer 接收到响应消息后，对响应消息进行数据过滤处理，并根据请求类型对响应体中的资源进行本地缓存，之后再将响应返回给请求方。
- 在云边网络状况断开的情况下，节点上的 Pod 以及 Kubelet 的请求由 Local Proxy 进行处理，Local Proxy 通过对本地缓存数据进行操作，返回响应信息。

根据数据流，可以简单的将 YurtHub 中的模块分为云端服务模块以及本地服务模块。
本地服务模块主要包含以下子模块：

- **Local Proxy**
   负责在云边断网的情况下，处理节点 Pod 以及 Kubelet 的资源请求，使得请求方能够对网络断连无感知。Local Proxy 处理请求时，对于本地支持的操作（Get、List、Watch），构建响应信息并返回对应的资源；对于本地不支持的操作（Delete、Create、Update等），返回操作失败信息。过程中调用了 Cache Manager 模块。

- **Cache Manager**
   负责资源的本地存储以及获取。主要提供了对请求响应消息进行本地存储的方法，该方法被 Load Balancer 使用；提供了根据请求从磁盘获取对应资源的方法，该方法被 Local Proxy 使用。

- **Storage Manager**
     定义了在磁盘上操作资源的基本方法，包括 Create、Update、Delete、Get、List 等。最终资源以序列化格式存储在本地磁盘上。

- **Network Manager**
   负责设置主机 iptables 中的规则，将本地 Pod 以及 Kubelet 发往 Kube APIServer 的请求转发至 YurtHub 中。

云端服务模块主要包含以下子模块：

- **Certificate Manager**
   负责管理 YurtHub 作为客户端与 Kube APIServer 连接所需的信息，包括 YurtHub 客户端证书、集群 ca 证书。
   当证书管理模式为 “kubelet” ，即 YurtHub 使用 Kubelet 客户端证书时，Certificate Manager 保证 YurtHub 使用最新的 Kubelet 客户端证书；当证书管理模式为 “hubself” 时，Certificate Manager 负责客户端证书的申请以及更新。

- **Health Check**
   负责定期检测 Kube APIServer 是否可以访问，设置 Kube APIServer 的健康状态，作为请求转发给云端或者本地处理的依据。此外，Health Check 还负责将 YurtHub 的心跳信息更新到云端。

- **Load Balancer**
   负责与 Kube APIServer 建立连接，将节点上的 Pod 以及 Kubelet 的请求转发至云端，LB 模块支持多云端地址访问，云端的负载均衡模式可以选择轮转模式（round-robin）或者优先级模式（priority）。
   同时，LB 模块还负责对请求的响应消息进行处理以及本地缓存，其中对响应消息的处理调用了 Data Filtering Framework 模块，本地缓存调用了 Storage Manager 模块。

- **Data Filtering Framework**
    对请求响应消息进行数据过滤处理，以扩展 YurtHub 的能力。目前包含了三个过滤器：

  - MasterService Filter：提供了使用 InClusterConfig 的业务 Pod 零修改就可以运行在边缘环境的能力。
  - ServiceTopology Filter：提供了流量闭环的能力，将服务访问的后端限制在节点所在的 NodePool 中。

  - DiscardCloudService Filter：当云端与边缘位于不同网络平面时，边缘通过公网访问而不是 PodIP 访问后端服务，以确保边缘能够正确访问。

- **GC Manager**
   在 YurtHub 每次重启时，将节点上存储的并且云端已经不存在的 Pod 资源进行回收。之后每隔一定时间对节点上缓存的 kubelet、kube-proxy event 资源进行回收删除操作。

### 2）Cloud 模式

 对于 “cloud” 模式的 YurtHub，其组件架构如下图所示。

![img](../../../../../static/img/docs/core-concepts/yurthub-cloud.png)

与 edge 模式相比，由于云端网络稳定，不用检测节点与 Kube APIServer 的连接状况，YurtHub 将所有的请求转发至 Kube APIServer，YurtHub 也不需要本地缓存数据。所以 cloud 模式的 YurtHub 关闭了与本地处理请求相关的模块。

## 3. 启动参数

```plain
--access-server-through-hub  默认值: true
```

Pod 是否通过 YurtHub 连接 kube-apiserver。

```plain
--bind-address  默认值: "127.0.0.1"
```

YurtHub server 的 IP 地址，Yurthub server监听该地址上的pprof，token更新，healthz以及metrics请求，与 --serve-port 搭配使用。

```plain
--bind-proxy-address  默认值: "127.0.0.1"
```

YurtHub Proxy server 的 IP 地址，Yurthub Proxy server代理发往kube-api-server的请求，与 --proxy-port 搭配使用。

```plain
--cert-mgr-mode  默认值: "hubself"
```

配置 YurtHub 使用的证书。如果值为 “hubself”，则使用 YurtHub 申请的证书；如果值为 “kubelet”，则使用 kubelet 的证书。

```plain
--disabled-resource-filters
```

关闭的过滤器列表。默认所有的过滤器都打开。

```plain
--disk-cache-path   默认值: "/etc/kubernetes/cache/"
```  

Kubernetes 存储元数据的路径。

```plain
--dummy-if-ip  默认值: "169.254.2.1"
```

YurtHub 虚拟接口的 IP 地址，用于容器内部连接 YurtHub。取值范围不为 169.254.31.0/24 以及 169.254.1.1/32。

```plain  
--dummy-if-name  默认值: "YurtHub-dummy0"
```

YurtHub 虚拟接口的名字。
  
```plain
--enable-dummy-if  默认值: true
```

是否启用 YurtHub 的虚拟接口。

```plain
--enable-iptables  默认值: true
```

是否开启本地 iptables 管理。

```plain
--enable-node-pool  默认值: true
```

yurthub是否需要list/watch nodepool资源。

```plain
--enable-resource-filter  默认值: true
```  

是否开启 YurtHub 对请求响应的过滤功能。

```plain
--gc-frequency  默认值: 120min
```

回收缓存的频率（单位：分钟）。

```plain  
--heartbeat-failed-retry  默认值: 3
```

YurtHub 心跳信息更新失败后重试的次数。

```plain
--heartbeat-healthy-threshold  默认值: 2
```

Kube APIServer 重新被设置为健康状态前，连续被检测为健康状态的次数。

```plain
--heartbeat-timeout-seconds  默认值: 2
```

YurtHub 更新心跳信息时，连接超时的时间（单位：秒）。
  
```plain
--hub-cert-organizations
```

额外需要添加到yurthub证书中的organization名称，多个名称间用逗号隔开，例如“org1,org2”。

```plain
--join-token
```

启动引导令牌，当 --cert-mgr-mode 为 "hubself" 时，YurtHub 通过 join-token 申请证书。

```plain
--kubelet-ca-file  默认值: "/etc/kubernetes/pki/ca.crt"
```  

Kubelet 使用的 CA 文件路径。

```plain
--kubelet-client-certificate  默认值: "/var/lib/kubelet/pki/kubelet-client-current.pem"
```

Kubelet 的客户端证书路径。

```plain  
--kubelet-health-grace-period  默认值: 40s
```

允许 kubelet 没有响应的时间，超过这个时间后，YurtHub 不再发送心跳信息。
  
```plain
--lb-mode  默认值: "rr"
```

云端地址的负载均衡模式。如果值为 "rr"，表示轮转模式；如果值为 "priority"，表示优先级模式，高优先级地址故障后才使用低优先级地址。

```plain
--max-requests-in-flight  默认值: 250
```

YurtHub 和确定服务器的总并发限制。

```plain
--node-name
```

YurtHub 所在节点的节点名。

```plain
--nodepool-name
```

YurtHub 所在的节点池

```plain  
--profiling  默认值: true
```

是否打开 profile。
  
```plain
--proxy-port  默认值: "10261"
```

转发 HTTP 请求的端口，发往此端口的 HTTP 请求会转发至 kube-apiserver。

```plain
--proxy-secure-port  默认值: "10268"
```

转发 HTTPS 请求的端口，发往此端口的 HTTPS 请求会转发至 kube-apiserver。

```plain
--root-dir  默认值: "/var/lib/YurtHub"
```

存放 YurtHub 文件的目录。

```plain
--serve-port  默认值: "10267"
```

YurtHub server处理 HTTP 请求的端口，与--bind-address搭配使用。

```plain  
--server-addr
```

kube-apiserver 的地址。值的格式为 "server1,server2,..."。

```plain
--version
```

是否输出 YurtHub 的版本信息。

```plain
--working-mode  默认值: "edge"
```

YurtHub 的工作模式。如果值为 "edge"，表示边缘节点；如果值为 "cloud"，表示云端节点。

