---
title: 介绍
---

OpenYurt集群安装分成2个部分，分别为`安装OpenYurt管控组件`和`节点接入`。

> *一些安装过程中可能遇到的问题可以参考[FAQ](../faq.md)。*

### Part 1: 安装OpenYurt管控组件

OpenYurt社区提供了以下几种方式来帮助安装OpenYurt管控组件：
  - **[在Kubernetes上安装OpenYurt管控组件](./manually-setup.md)**
    - 推荐生产环境中使用
    - 需要先准备一个生产可用的Kubernetes集群, 然后手动安装各个OpenYurt管控组件
  - **[OpenYurt体验中心](./openyurt-experience-center/overview.md)**
    - 推荐在测试环境中使用
    - 用户在网页上申请体验中心账户后可直接获取一个包括OpenYurt Control Plane的集群，但用户只能在有限权限下活动，而且需要接入自己的节点体验OpenYurt的完整能力。
  - **YurtCluster**
    - 可在测试环境中使用，另外后续会下线该方法
    - 需要有一个Kubernetes集群

### Part 2: [节点接入](./yurtadm-join.md)

社区用户可以[通过`yurtadm join`命令](./yurtadm-join.md#1-从零开始把节点加入集群)从零开始将节点加入到OpenYurt集群中，或者在存量的K8s工作节点上[手动安装OpenYurt节点组件](./yurtadm-join.md#2-在存量的k8s节点上安装openyurt-node组件)来实现节点接入。