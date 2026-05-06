---
title: Kube-Controller-Manager 安装相关配置调整
---

## 1.背景说明

在云边协同场景下，边缘节点通过公网与中心控制面连接，网络连接可能是不稳定的，k8s 原生的节点生命周期管理逻辑不适用于这种不稳定的网络条件。OpenYurt 使用定制的`nodelifecycle`控制器来管理节点的生命周期，因此我们需要关闭 Kube-Controller-Manager 中原生的 `nodelifecycle` 控制器避免冲突。

### 2. 禁用 nodelifecycle 控制器

可以通过配置 `--controllers` 参数值并重启 `kube-controller-manager` 来禁用 `nodelifecycle` 控制器。假设最初的参数值像这样 `--controllers=*,bootstrapsigner,tokencleaner`，要禁用 `nodelifecycle` 控制器，我们需要将参数值更改为 `--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner`。

如果 `kube-controller-manager` 是以静态 pod 的方式部署在 master 节点上，并且您有登录 master 节点的权限，则可以通过修改 `/etc/kubernetes/manifests/kube-controller-manager.yaml` 文件来完成上述操作。修改后，`kube-controller-manager` 会自动重启。

```bash
$ vi /etc/kubernetes/manifests/kube-controller-manager.yaml
apiVersion: v1
kind: Pod
...
spec:
  containers:
  - command:
    - kube-controller-manager
    - --allocate-node-cidrs=true
    - --authentication-kubeconfig=/etc/kubernetes/controller-manager.conf
    ...
    - --controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner #禁用nodelifecycle控制器
    ...
```
