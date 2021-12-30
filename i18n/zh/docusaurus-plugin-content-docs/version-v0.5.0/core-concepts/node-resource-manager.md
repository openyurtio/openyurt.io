---
title: NodeResourceManager
---

### 简介

node-resource-manager 是用于管理 OpenYurt 集群本地资源的组件，用户可以通过修改集群内 ConfigMap 来动态配置集群内宿主机上的本地资源。



该组件主要功能是将宿主机上已有的块设备或者持久化内存设备初始化成以下两种本地存储设备

- 基于块设备或者是持久化内存设备创建的 LVM
- 基于块设备或者是持久化内存设备创建的 QuotaPath

后续任何对 ConfigMap 的修改都将视为对集群内的某些宿主机上的本地资源的修改，出于数据安全考虑，插件中不会有对任何本地资源做删除的操作。



同时配合 [csi 组件](https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver) 可以在 Openyurt 集群中快速便捷的使用本地存储设备。



### 架构

该组件主要包含两个部分， 一个是定义在集群中 kube-system namespace 的 node-resource-topo ConfigMap,

一个是部署在集群中 kube-system namespace 下面的 node-resource-manager Daemonset,

每个 Node 节点上的 node-resource-manager 通过挂载 node-resource-topo ConfigMap 的方式生产并管理用户定义的本地资源。

![img](../../../../../static/img/docs/core-concepts/node-resource-manager.png)


### 

### 使用例子



#### 创建Configmap

在集群中创建ConfigMap, 这里展示一个相对通用的 Configmap 配置，详细说明请参见
https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: node-resource-topo
  namespace: kube-system
data:
  volumegroup: |-
    volumegroup:
    - name: volumegroup1
      key: kubernetes.io/hostname
      operator: In
      value: cn-zhangjiakou.192.168.3.114
      topology:
        type: device
        devices:
        - /dev/vdb
        - /dev/vdc
  quotapath: |-
    quotapath:
    - name: /mnt/path1
      key: kubernetes.io/hostname
      operator: In
      value: cn-beijing.192.168.3.35
      topology:
        type: device
        options: prjquota
        fstype: ext4
        devices:
        - /dev/vdb
```



以上配置可以完成如下功能

- 在集群中的 cn-zhangjiakou.192.168.3.114 节点上使用 /dev/vdb & /dev/vdc 这两个块设备创建一个 lvm volumegroup。这里的 devices 可以添加不存在的路径， 插件在节点上初始化的时候会自动忽略。
- 在集群中的 cn-beijing.192.168.3.35 节点上使用 /dev/vdb 这个块设备格式化成 prjquota 格式，并挂载到/mnt/path1 这个路径上，后续再这个路径下面创建的子目录都可以设定每个目录的最大quota，同样， 这里的 devices 里面可以填写不存在路径，组件会自动选择第一个存在的块设备完成格式化和绑定的操作



#### 安装 node-resource-manager



```yaml
kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml
```



### 边缘本地存储最佳实践



https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4