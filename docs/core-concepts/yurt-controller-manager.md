---
title: YurtControllerManager
---




## 1.功能简介

Yurt Controller Manager 作为 kube-controller-manager 的扩展，支持了其他组件的正常运行以及边缘自治功能的实现。



### 1.1 接管节点的生命周期

在原生的 Kubernetes 集群中，会驱逐状态为 NotReady 以及 Unknown 节点上的 Pod，对 Pod 进行重新调度以及重建。

在边缘场景中，云边网络异常经常发生，边缘节点可能经常离线，这导致边缘业务频繁驱逐和重建。针对这种情况，OpenYurt 提供了节点自治的能力，
对于开启了节点自治的边缘节点，云端管控面不对该节点上的 Pod 进行驱逐，确保了工作负载不被中断。

在实现上，Yurt Controller Manager 接管了 kube-controller-manager 中 nodelifecycle 控制器的工作，不断监听集群中节点的状态，
对于状态为 NotReady 以及 Unknown 的节点，如果节点开启了自治功能，通过移除节点  "node.kubernetes.io/unschedulable" 污点的方式确保节点上的 Pod 不被驱逐。



**注意：安装 Yurt Controller Manager 时，需要关闭 kube-controller-manager 中的 nodelifecycle 控制器。**



### 1.2 组件证书批准

OpenYurt 中组件 Yurttunnel Server 以及 Yurthub 需要作为服务端分别向 Yurttunnel Agent、节点上的 Pod 提供服务。
由于原生的 Kubernetes 对服务证书的申请有严格要求，无法自动批准 Yurttunnel Server 以及 Yurthub 服务端的证书，
所以 Yurt Controller Manager 承担了这份工作——批准 Yurttunnel Server 以及 Yurthub 服务端证书的申请。



