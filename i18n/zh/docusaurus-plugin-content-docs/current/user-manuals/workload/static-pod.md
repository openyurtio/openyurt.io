---
title: StaticPod
---

## 背景介绍

静态 pod 是 K8s 中一种特殊的 pod，它由 Kubelet 直接进行管理。静态 pod 也常用于云边协同的场景中，比如一些 AI 相关的业务。 在 OpenYurt 中，核心组件
`YurtHub` 就是通过静态 pod 进行部署的。静态 pod 一般通过 `/etc/kubernetes/manifests` 目录下的配置文件进行创建，通过人工手动替换/修改配置文件完成升级，这个过程中 Kubelet
直接负责了静态 pod 的创建、删除任务。由于边缘侧设备数量多、位置分布分散等特点，若通过人工完成云边协同场景下静态 pod 的部署、升级等工作，势必会带来沉重的操作负担与失误风险。
因此，OpenYurt 新增 CRD `StaticPod` 来增强对于静态 pod 的管理，通过的控制器提供了滚动更新、OTA 升级等能力。

## 配置

```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: StaticPod
metadata:
  # ···
spec:
  # static pod 配置文件名称
  staticPodManifest: xxx
  # 升级策略，支持 auto 与 ota 升级方式
  upgradeStrategy:
    type: auto
    # auto 升级方式可以设置滚动更新最大不可用数量，默认值为 10%
    # maxUnavailable: 3
  # static pod 模板配置
  template:
  #  ···
```

## 用户使用

### 1）部署 OpenYurt

static-pod 控制器集成于 Yurt-Manager 组件，使用前需要安装部署Yurt-Manager，相关操作可以参照[部署OpenYurt组件](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components)

### 2） 创建 static pod

`StaticPod` Operator 不负责静态 pod 初始的部署，部署静态节点需手动完成或者通过 `yurtadm` 工具实现。作为示例，本文通过 `Kind` 创建一个具有三个工作节点的集群，并且每个节点上手动部署静态 pod。

``` yaml
cat >  nginx.yaml << EOF
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: web
    image: nginx:1.19.1
EOF
```


### 3）部署 `StaticPod` CR

`StaticPod` 资源通过 `namespace/name` 与静态 pod 对应。 因此，我们创建一个 `namespace:default, name:nginx` 的CR实例接管该静态 pod。

``` yaml
cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: StaticPod
metadata:
  name: nginx
spec:
  staticPodManifest: nginx
  upgradeStrategy:
    type: auto
    maxUnavailable: 3
  template:
    metadata:
      name: nginx
    spec:
      containers:
      - name: web
        image: nginx:1.19.1
EOF
```

### 4) 静态 pod 升级

通过 `StaticPod` 资源可以轻松实现对静态 pod 的管理，其中就包括升级静态 pod。 `StaticPod` 支持两种升级方式，分别为 `auto` 模式与 `ota` 模式。
简单来说，`auto` 模式实现了跃过 `not-ready` 节点的滚动更新升级能力； `ota` 模式则支持用户自主控制升级流程。 两种模式的详细介绍参见 [DaemonSet 升级模型](https://openyurt.io/docs/user-manuals/workload/daemon-pod-updater/#background)

#### Auto 升级
- 升级之前查看集群中的静态 pod
``` shell
$ kubectl get pods | grep nginx

default  nginx-openyurt-e2e-test-worker    1/1     Running   0   3h4m   10.244.2.3   openyurt-e2e-test-worker   
default  nginx-openyurt-e2e-test-worker2   1/1     Running   0   3h4m   10.244.1.2   openyurt-e2e-test-worker2  
default  nginx-openyurt-e2e-test-worker3   1/1     Running   0   3h5m   10.244.3.3   openyurt-e2e-test-worker3  

$ kubectl describe pods nginx-openyurt-e2e-test-worker

···
Containers:
  web:
    ···
    # 此时 nginx pod 的版本是1.19.1
    Image:          nginx:1.19.1
    ···
···
```

- 修改 `StaticPod` spec，将容器镜像从 nginx:1.19.1 升级版本至 nginx:1.19.2
``` yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: StaticPod
metadata:
  name: nginx
spec:
    ···
    spec:
      containers:
      - name: web
        image: nginx:1.19.2

```

- 查看资源状态, 可以看到三个静态 pods 均升级完成。 `TOTALNUMBER` 代表 `StaticPod nginx` 在该集群中匹配多少对应的静态 pods， `READYNUMBER` 代表就绪 pods 的数量，`UPGRADEDNUMBER` 表示多少 pods 已经升级至最新版本。
``` shell
$ kubectl get staticpods nginx

NAME    AGE     TOTALNUMBER   READYNUMBER   UPGRADEDNUMBER
nginx   4m20s   3             3             3
```

- 查看集群中相应的静态 pods
``` yaml
$ kubectl describe pods nginx-openyurt-e2e-test-worker

···
Containers:
  web:
    ···
    # 此时 nginx pod 的版本已经升级至1.19.2
    Image:          nginx:1.19.2
    ···
···
```

#### OTA升级

1. OTA 升级接口

   `YurtHub` 提供了两个 OTA 升级相关的 REST APIs。
   - `GET /pods`
   通过该接口可以获取节点上 pods 信息。
   - `POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade`
   通过该接口用户可以指定更新某个静态 Pod。路径参数 `ns` 与 `podname` 分别代表 Pod 的命名空间以及名称。

2. OTA 升级流程
   - OTA 升级中通过 pod status 中 `PodNeedUpgrade` condition 字段表示升级状态，当值为 `true` 时表示存在可升级版本，反正不可升级。
   - 通过主动调用上述 upgrade API 接口即可实现静态 pod 升级任务

