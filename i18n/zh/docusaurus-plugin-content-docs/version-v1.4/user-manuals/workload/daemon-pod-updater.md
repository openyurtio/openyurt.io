---
title: DaemonSet 升级模型
---

## 背景介绍

在边缘化场景下，原生 DaemonSet 升级模型无法满足用户现有需求。在云边网络断连的情况下，DaemonSet 升级流程可能被阻塞。除此之外，原生升级模型并未提供相应的升级操作接口，节点上用户无法自主控制应用升级。

为了解决上述问题，我们对原生 DaemonSet 升级模型进行扩展，新增自定义控制器`daemonPodUpdater-controller`，提供 AdvancedRollingUpdate 与 OTA 两种升级模型。
- AdvancedRollingUpdate 模型：解决云边断连时，节点`Not-Ready`导致的 DaemonSet 升级阻塞问题，在升级过程中会忽略`Not-Ready`节点，从而保证升级流程的顺利完成，并且在节点状态从`Not-Ready`转变为`Ready`后，自动完成 DaemonSet 应用的升级。
- OTA 模型：新增 Pod status condition `PodNeedUpgrade`来表明更新可用信息。YurtHub OTA 升级组件可以通过该 condition 判断 DaemonSet 应用是否存在新版本。

## 配置
```yaml
# AdvancedRollingUpdate 或 OTA 升级模型配置文件示例
apiVersion: apps/v1
kind: DaemonSet
metadata:
  # ···
  annotations:
    # 该注解是使用 AdvancedRollingUpdate 或者 OTA 升级模型的前提条件之一，目前支持的配置值为"AdvancedRollingUpdate" 或者 "OTA"。
    apps.openyurt.io/update-strategy: AdvancedRollingUpdate
    # 该注解用于滚动更新时设置最大不可用 pod 数量，仅在 AdvancedRollingUpdate 模式下起作用。
    # 该注解支持的配置值与原生 DaemonSet 配置中 maxUnavailable 相同，默认值为10%。
    apps.openyurt.io/max-unavailable: 30%
  # ···
spec:
  # ···
  # 使用 AdvancedRollingUpdate 或者 OTA 升级模型的另一个前提条件是将 updateStrategy 设置为 OnDelete。
  updateStrategy:
    type: OnDelete
  # ···
```
总的来说，如果你希望使用 AdvancedRollingUpdate 或者 OTA 升级模型，那么你需要将注解 `apps.openyurt.io/update-strategy` 设置为 "AdvancedRollingUpdate" 或者 "OTA", 并且将 `.spec.updateStrategy.type` 设置为 "OnDelete"。


## 用户使用：

### 1）安装Yurt-Manager组件
`daemonpodupdater`控制器集成于`Yurt-Manager`组件，使用 AdvancedRollingUpdate 或 OTA 升级模型前需要安装部署`Yurt-Manager`，相关操作可以参照[部署OpenYurt组件](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components)

### 2）使用 AdvancedRollingUpdate 升级模型
- 创建 daemonset 实例
```shell
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  annotations:
    apps.openyurt.io/update-strategy: AdvancedRollingUpdate
spec:
  selector:
    matchLabels:
      app: nginx
  updateStrategy:
    type: OnDelete
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.19.4

EOF
```

- 查看 nginx-daemonset pods
```shell
$ kubectl get pods | grep nginx-daemonset

nginx-daemonset-bv5jg   1/1     Running   0          21m   10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-fhsr6   1/1     Running   0          21m   10.244.1.2   openyurt-e2e-test-worker    <none>           <none>
nginx-daemonset-lmmtd   1/1     Running   0          21m   10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>
```

- 模拟云边网络断连, 假定断开边缘节点`openyurt-e2e-test-worker2`、`openyurt-e2e-test-worker3`与云端节点的网络连接，该示例采用Kind创建集群，可以通过将容器从虚拟网桥中移除的方式模式网络断连
```shell
$ docker network disconnect kind openyurt-e2e-test-worker2
$ docker network disconnect kind openyurt-e2e-test-worker3

$ kubectl get nodes -o wide
AME                              STATUS     ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME
openyurt-e2e-test-control-plane   Ready      control-plane,master   36m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker          Ready      <none>                 35m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker2         NotReady   <none>                 35m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker3         NotReady   <none>                 35m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
```

- 更新 daemonset，将容器镜像从 nginx:1.19.4 修改为 nginx:1.19.5
```shell
***
containers:
      - name: nginx
        image: nginx:1.19.5
***
```

- 查看 pods：`openyurt-e2e-test-worker`节点上旧 pod `default/nginx-daemonset-fhsr6`已被删除，新 pod `default/nginx-daemonset-slp5t`被创建; 两个网络断连节点上的 pods 暂不进行更新升级
```shell
nginx-daemonset-bv5jg   1/1     Running   0          33m     10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-lmmtd   1/1     Running   0          33m     10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>
nginx-daemonset-slp5t   1/1     Running   0          5m54s   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>
```

- 恢复节点网络连接
```shell
$ docker network connect kind openyurt-e2e-test-worker2
$ docker network connect kind openyurt-e2e-test-worker3

$ kubectl get nodes -o wide
NAME                              STATUS   ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME
openyurt-e2e-test-control-plane   Ready    control-plane,master   49m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker          Ready    <none>                 48m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker2         Ready    <none>                 48m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker3         Ready    <none>                 48m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
```

- 查看 pods, 所有节点上 daemonset pods 均已完成更新升级
```shell
nginx-daemonset-kbkf6   1/1     Running   0          88s   10.244.3.3   openyurt-e2e-test-worker2   <none>           <none>
nginx-daemonset-scgtv   1/1     Running   0          51s   10.244.2.3   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-slp5t   1/1     Running   0          11m   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>
```

- 查看 pods 镜像版本，均已升级至nginx:1.19.5
```shell
***
Containers:
  nginx:
    Container ID:   containerd://f7d4b3f1257a0d1d8da862671c11cb094f9fba1ba0041b7a5f783d9c9e4d8449
    Image:          nginx:1.19.5
    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Fri, 14 Oct 2022 14:21:25 +0800
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-wrhj8 (ro)
***
```

### 3）OTA 升级模型

#### OTA 升级接口
YurtHub 提供了两个 OTA 升级相关的 REST APIs。
1. `GET /pods`

    通过该接口可以获取节点上 pods 信息。

2. `POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade`

    通过该接口用户可以指定更新某个 DaemonSet Pod。路径参数 `ns` 与 `podname` 分别代表 Pod 的 命名空间以及名称。

#### OTA 升级示例
- 创建 daemonset 实例
```shell
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  annotations:
    apps.openyurt.io/update-strategy: OTA
spec:
  selector:
    matchLabels:
      app: nginx
  updateStrategy:
    type: OnDelete
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.19.4

EOF

# get nginx-daemonset pods
$ kubectl get pods -o wide | grep nginx-daemonset
nginx-daemonset-bwzss   1/1     Running   0          92s   10.244.3.4   openyurt-e2e-test-worker2   <none>           <none>
nginx-daemonset-ppf9p   1/1     Running   0          92s   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>
nginx-daemonset-rgp9h   1/1     Running   0          92s   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>
```

- 查看 pod status condition `PodNeedUpgrade`， 以`openyurt-e2e-test-worker2`节点上 pod `nginx-daemonset-bwzss` 为例
```shell
$ kubectl describe pods nginx-daemonset-bwzss

***
Conditions:
  Type              Status
  PodNeedUpgrade    False
***
```

- 更新 daemonset，将容器镜像从 nginx:1.19.4修改为 nginx:1.19.5
```shell
***
containers:
      - name: nginx
        image: nginx:1.19.5
***
```

- 再次查看 pod status condition `PodNeedUpgrade`
```shell
$ kubectl describe pods nginx-daemonset-bwzss

***
Conditions:
  Type              Status
  PodNeedUpgrade    True
***
```

- 进入节点`openyurt-e2e-test-worker2`，执行 OTA 升级
```shell
# Kind 集群中需要先进入边缘节点
$ docker exec -it openyurt-e2e-test-worker2 /bin/bash

# 调用 Upgrade API, 该升级接口仅在边缘节点上提供
$ curl -X POST 127.0.0.1:10267/openyurt.io/v1/namespaces/default/pods/nginx-daemonset-bwzss/upgrade
Start updating pod default/nginx-daemonset-bwzss
```

- 检查 OTA 升级结果, 节点`openyurt-e2e-test-worker2`上pod `nginx-daemonset-bwzss`已经被删除，新创建 pod 为 `nginx-daemonset-vrvhn`
```shell
# 检查 OTA 升级结果
$ kubectl get pods -o wide | grep nginx-daemonset
nginx-daemonset-ppf9p   1/1     Running   0          15m   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>
nginx-daemonset-rgp9h   1/1     Running   0          15m   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-vrvhn   1/1     Running   0          63s   10.244.3.5   openyurt-e2e-test-worker2   <none>           <none>

# 查看容器镜像版本
$ kubectl describe pods nginx-daemonset-vrvhn
***
Containers:
  nginx:
    Container ID:   containerd://18df6aa88076639353ea0b3d87f340cd4c86ab27a7f154bce06345e9764c997a
    Image:          nginx:1.19.5
    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Fri, 14 Oct 2022 16:25:20 +0800
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-p6kjh (ro)
***
```