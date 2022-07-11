---
slug: Enable-MetalLB-in-OpenYurt
title: Edge LoadBalancer service support based on MetalLB
authors: [zzguang]
tags:  [ openyurt ]
---

##  背景介绍
在云边协同场景下，虽然云端已经具备了较为全面的云原生能力，但边缘侧由于特定的网络环境及应用场景的限制，往往无法提供像云端一样丰富的能力，而实际上用户业务应用的主战场却在边缘侧，
这就导致边缘侧在使用云原生能力的时候或多或少存在一些gaps，而如何解决这些gaps也成为云边协同基础设施软件力求解决的关键问题。本文针对边缘侧服务暴露给集群外访问的场景，来探讨一下在
OpenYurt边缘侧解决上述问题的方法，希望能起到抛砖引玉的效果。

在原生Kubernetes集群中，如果想将服务暴露出来供集群外部访问，通常可以考虑以下几种方式：
- HostNetwork
- ExternalIPs
- NodePort
- LoadBalancer
- Ingress  

其中前三种方式，由于自身存在一定的局限性，在条件允许的情况下，通常用户更倾向于选择后两种方式。而对Ingress方式而言，云端Ingress功能通常会搭配云端SLB服务一起使用，
SLB负责从用户请求到节点维度的负载均衡，而Ingress负责从节点到pod维度的负载均衡，这样就实现了从用户请求到应用pod的全链路的负载均衡功能。然而在云边协同场景下，由于边缘侧并不具备云端SLB服务的能力，边缘Ingress或边缘应用无法暴露LoadBalancer类型的服务供集群外访问，这也成为了边缘侧对外暴露服务的一大痛点。

为了解决上述痛点，目前在开源社区，有几个方案可供选择：MetalLB, PureLB和OpenELB。  
- MetalLB:  https://github.com/metallb
- PureLB:   https://github.com/purelb
- OpenELB:  https://github.com/openelb

关于三个项目之间的比较，可以从网上查到一些相关介绍，整体来说，它们实现的功能大同小异，从项目成熟度及流行度的角度考虑，我们选择以MetalLB为例，探讨一下如何通过MetalLB在OpenYurt
边缘侧实现对LoadBalancer类型service的支持。


##  初识MetalLB
###  两个任务
MetalLB的工作原理可以总体归纳为完成两个任务：
```
1）. 为LoadBalancer类型的service分配外网可访问的IP地址
2）. 分配IP地址后，让集群外部知晓该IP地址存在于集群中
```
###  两类组件
MetalLB通过两类组件实现上述任务：Controller和Speaker
```
Controller负责监听service的变化，为LoadBalancer类型的service分配IP地址并进行IP的生命周期管理。
Speaker则依据service的变化，按具体的协议发起相应的广播或应答，根据工作模式（Layer2/BGP）的不同，可采用Leader节点或负载均衡的方式来响应请求，
从而实现了将分配的IP地址让集群外知晓的目的。其中Controller是以Deployment的方式部署，而Speaker则是以Daemonset的方式部署在集群中各个节点上。
```
###  两种模式
MetalLB有两种工作模式：Layer2和BGP
```
Layer2模式指的是选取集群中某个节点作为Leader来接收所有对LoadBalancer service的访问流量，它使用标准的地址发现协议实现服务IP对集群外可达。
BGP模式指的是在集群中的所有节点与周边连接的路由器建立BGP会话，并告知路由器如何转发流量到LoadBalancer service对应的IP地址。

Layer2模式和BGP模式各有优缺点：
Layer2模式的优点在于其普适性，它可以在任意以太网环境下工作，不依赖特定的硬件，甚至不需要路由器。
缺点是它并未实现真正意义上的负载均衡，所有对service的访问流量都将路由到Leader节点上，再由该节点上的kube-prox将流量分发到对应的后端pod上，
而当Leader节点出现故障时，会切换到其他节点接管服务，因此Layer2模式存在单节点流量瓶颈及节点故障切换不及时的局限性。
BGP模式的优势在于它实现了真正意义上的负载均衡，流量不再像Layer2模式一样只能路由到Leader节点，而是集群中所有节点都有机会参与流量转发。
其缺点一是依赖硬件路由器设备，二是无法优雅的应对节点IP地址后端集的变化，当集群有节点宕机时，与LoadBalancer service关联的所有连接都将中断。
```
###  两个配置
通过以上介绍，我们可以看到使用MetalLB的时候，用户需要进行以下两个配置：
```
1）. 配置IP地址池，供MetalLB给LoadBalancer service分配IP地址时使用
2）. 配置MetalLB的工作模式，选择采用Layer2或者BGP模式
```

##  部署MetalLB
运行MetalLB环境要求：
```
1). 运行Kubernetes 1.13.0或更高版本的集群
2). 集群网络配置，MetalLB兼容大部分网络CNI方案，但对有些CNI的兼容可能存在个别问题，具体可以参考以下链接：
    https://metallb.universe.tf/installation/network-addons/
3). 供MetalLB使用的一组IP地址
4). 如果使用BGP模式，您还需要一个或多个能够支持BGP协议的路由器
```
下面我们以k8s 1.18.20， MetalLB 0.11.0为例来具体看一下MetalLB在OpenYurt环境下的部署和用法。  
要部署MetalLB到OpenYurt集群的边缘侧，有多种方式可供选择，无论选择何种方式，部署MetalLB意味着部署以下资源到集群中：
```
1）. 创建metallb-system namespace
2）. 部署MetalLb Controller Deployment，它作用于集群范围，负责为相关service分配IP地址
3) . 部署MetalLb Speaker Daemonset到各个节点上，它负责根据用户选择的工作模式使用对应的协议让service对外可达
4) . 部署Controller和Speaker对应的service account以及组件运行所需的RBAC权限
```
由于我们不需要在云端部署，我们需要针对原生的MetalLB稍作调整，确保相关资源只会部署到边缘侧。

下面就以Manifest部署方式为例，看一下如何部署MetalLB到OpenYurt集群中：
```
创建metallb-system namespace:
    kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/namespace.yaml

拉取metallb yaml：
    wget https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/metallb.yaml

修改metallb.yaml, Controller和Speaker的nodeSelector中添加只部署到边缘节点的限制：
    nodeSelector:
      openyurt.io/is-edge-worker：'true'

部署metallb相关资源：
    kubectl apply -f metallb.yaml
```
此时MetalLB相关的组件已经部署完毕并开始运行，但由于我们并没有进行上述两个配置（IP地址池、MetalLB工作模式），Controller和Speaker一直处于idle状态。
因此要使MetalLB正常工作，我们还需要根据本地网络情况部署一个相应的configmap（以Layer2模式为例）：

```
cat <<EOF | kubectl apply -f -

apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.122.90-192.168.122.100

EOF
```
至此，MetalLB的Controller和Speaker真正进入了工作就绪状态。


##  使用MetalLB
MetalLB部署成功后，我们就可以在边缘侧创建LoadBalancer类型的service了，举例说明如下：  
创建一个应用Deployment：
```
cat <<EOF | kubectl apply -f -

apiVersion: apps/v1
kind: Deployment
metadata:
  name: edgeapp-deployment
  labels:
    app: edgeapp
spec:
  selector:
    matchLabels:
      app: edgeapp
  template:
    metadata:
      labels:
        app: edgeapp
    spec:
      containers:
      - name: nginx
        image: nginx:1.19.4
        ports:
        - containerPort: 80
      nodeSelector:
        openyurt.io/is-edge-worker: 'true'

EOF
```
创建一个与该Deployment对应的LoadBalancer service：
```
cat <<EOF | kubectl apply -f -

apiVersion: v1
kind: Service
metadata:
  name: edgeapp-svc
spec:
  selector:
    app: edgeapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer

EOF
```
验证LoadBalancer service是否创建成功：
```
#kubectl get service
NAMESPACE     NAME              TYPE           CLUSTER-IP        EXTERNAL-IP        PORT(S)           AGE
default       kubernetes        ClusterIP      192.167.0.1       <none>             443/TCP           10d
default       edgeapp-svc       LoadBalancer   192.167.188.185   192.168.122.90     80:31378/TCP      9s
```
从EXTERNAL-IP中，可以看到LoadBalancer service已经从IP地址池中获取了IP地址。

验证LoadBalancer service是否可以访问：
```
#curl 192.168.122.90
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
```


##  注意事项
1). 从Kubernetes v1.14.2开始，如果kube-proxy采用IPVS模式，必须打开strict ARP模式

```
    kubectl edit configmap -n kube-system kube-proxy

    apiVersion: kubeproxy.config.k8s.io/v1alpha1
    kind: KubeProxyConfiguration
    mode: "ipvs"
    ipvs:
      strictARP: true
```
2). 用户可以配置多个IP地址池，创建LoadBalancer service的时候可以通过annotations选择使用哪个地址池  
3). 配置IP地址池时，通常IP地址是公网IP以便集群外可以访问，如果配成集群内私网IP，那该服务只能在集群内被访问


##  参考链接
https://metallb.universe.tf/  
https://www.51cto.com/article/707574.html  
https://blog.csdn.net/shigiaz/article/details/118390917
