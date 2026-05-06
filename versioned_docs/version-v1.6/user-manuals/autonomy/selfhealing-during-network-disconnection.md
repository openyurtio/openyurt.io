---
title: selfhealing from restarting during network disconnection 
---

## Background introduction

Under the original Kubernetes architecture, the container information of Slave Agent(Kubelet) is stored in the memory, and the business data cannot be obtained from the cloud when the network is disconnected. If the edge node or the edge node's Kubelet restarts abnormally, they will not be able to recover the business container.

## Architecture design

OpenYurt introduces an important component in edge side —— [YurtHub](../../core-concepts/yurthub.md). YurtHub's used to provide web caching and request proxies on edge nodes through which system components on the node (such as kubelet) as well as business containers and cloud communications will be brokered. In the case of offline, tasks on the edge side can be recovered without relying on cloud data through local cache.

## How to use

The network disconnection self-healing ability is provided by the YurtHub component. All nodes with YurtHub (in Edge mode) installed automatically support this function. Node joined with [yurtadm](../../installation/yurtadm-join.md) will automatically have YurtHub installed. Otherwise, you need to manually install the YurtHub component.