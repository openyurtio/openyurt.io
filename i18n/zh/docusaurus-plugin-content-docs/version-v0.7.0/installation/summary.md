---
title: 介绍
---
想要安装一个 OpenYurt 集群，OpenYurt 提供了以下几种方式：
- **OpenYurt Experience Center**
  - 推荐在测试环境中使用
  - 用户在网页上申请账户后可直接获取一个集群，但只有一个 master 节点。用户可以将节点加入集群。
- **Yurtctl init/join**
  - 推荐在测试环境中使用
  - 节点可以不安装 kubelet 等 kubernetes 组件
- **YurtCluster**
  - 可在生产环境中使用
  - 需要有一个 Kubernetes 集群
- **Yurtctl convert/revert**
  - 推荐在测试环境中使用
  - 需要有一个 Kubernetes 集群
- **Manually Setup**
  - 可在生产环境中使用
  - 需要有一个 Kubernetes 集群

