---
title: YurtAppOverrider
---

## 背景介绍

多地域多节点池背景下我们已有 YurtAppDaemon 和 YurtAppSet，但它们在配置的个性化能力上有所不足。为了降低耦合度和向后兼容，我们引入了 YurtAppOverrider 来进行个性化渲染，为了简化配置，我们将它的能力区分为基础渲染（镜像和副本数量）和高级渲染（任意字段）。

## 用户使用

### 1）部署 OpenYurt

`YurtAppOverrider` 控制器和 Webhook 集成于 Yurt-Manager 组件，使用前需要安装部署Yurt-Manager，相关操作可以参照[部署OpenYurt组件](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components)

### 2） 使用样例

- 创建一个与现有资源绑定的 YurtAppOverrider

```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
```
以上配置我们先暂时搁置 entries 聚焦于 subject。Subject 字段表明创建出来的 YurtAppOverrider 会与他所在命名空间下指定的 kind 和 name的资源做绑定。

- 个性化副本数量和镜像（基础渲染）
```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
- pools:
    beijing
    hangzhou
  items:
  - image:
      containerName: nginx
      imageClaim: nginx:1.14.2
  - replicas: 3
- pools:
    shanghai
  items:
  - image:
      containerName: nginx
      imageClaim: nginx:1.13.2
  - replicas: 5
```
通过上述配置，我们可以将北京杭州节点池的副本数量配置为3，镜像版本为1.14.2，可以将上海节点池的副本数量配置为5，镜像版本为1.13.2。

- 实现hostPath的更改（高级渲染）
```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
- pools:
    hangzhou
  patches:
  - operation: add
    path: /spec/template/spec/volumes/-
    value:
      name: test-volume
      hostPath:
        path: /var/lib/docker
        type: Directory
  - operation: replace
    path: /spec/template/spec/containers/0/volumeMounts/-
    value:
      name: shared-dir
      mountPath: /var/lib/docker
- pools:
    beijing
  patches:
  - operation: add
    path: /spec/template/spec/volumes/-
    value:
      name: test-volume
      hostPath:
        path: /data/logs
        type: Directory
  - operation: replace
    path: /spec/template/spec/containers/0/volumeMounts/-
    value:
      name: shared-dir
      mountPath: /data/logs
```
通过上述 patches 字段，我们可以实现不同节点池个性化配置 hostpath 的能力。对于每一个 patch 由 operation、path、value 组成，可以对任意字段进行 add、remove、replace 的操作，其语法规则符合 json-patch 的语法。

- 其他特性
```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
- pools:
    '*'
    '-beijing'
  patches:
  - operation: add
    path: /spec/template/spec/volumes/-
    value:
      name: foo
      configMap:
        name: configmap-{{nodepool}}
```
通过上述配置，我们可以在每一个节点池（除北京节点池）都引入与节点池对应的 configmap。为了简化配置，我们可以使用 `'*'` 表示所有节点池，可以在节点池名字前加 `-` 来表示去除该节点池。此外，可以通过`{{nodepool}}`匹配节点池来做到批量配置。（注：如果使用批量配置，那与之对应的configmap需要遵守一定的命名规则即将上述的`{{nodepool}}`替换为真正的节点池名）