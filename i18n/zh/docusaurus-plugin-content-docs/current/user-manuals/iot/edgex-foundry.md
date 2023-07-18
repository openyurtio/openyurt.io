---
title: 云原生管理端设备
---


本文档主要讲述如何在已有的OpenYurt集群上安装YurtIoTDock，并通过部署虚拟端设备来展示如何通过云原生的方式管理边缘端设备。

对于有兴趣的读者，可以去相关的github仓库参考本文使用组件的具体实现：[Yurt-Device-Controller](https://github.com/openyurtio/yurt-device-controller) 
和 [Yurt-EdgeX-Manager](https://github.com/openyurtio/yurt-edgex-manager)

如果你还没有OpenYurt集群，你可以使用 [yurtctl工具](https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md) 
来初始化一个OpenYurt集群或将一个Kubernetes集群转换为OpenYurt集群。

# 环境要求

- OpenYurt v1.4.0+
- 安装了 [Yurt-Manager](https://github.com/openyurtio/yurt-app-manager) 组件

- 与master不在同一局域网下的节点都需要部署coreDNS pod
- 将访问coreDNS service的流量改为节点池内闭环，参考[教程](https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/service-topology.md)



# 1. 创建节点池
首先标记节点来区分云端和边缘端，标记openyurt-worker节点为云端节点，标记openyurt-worker2节点为边缘节点
```powershell
# 将openyurt-worker标记为云端节点
$ kubectl label node openyurt-worker openyurt.io/is-edge-worker="false"
# 将openyurt-worker2标记为边缘节点
$ kubectl label node openyurt-worker2 openyurt.io/is-edge-worker="true"
```

创建一个beijing云端节点池，将云端节点(openyurt-worker)加入到beijing节点池

```powershell
# 创建beijing节点池
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: beijing
spec:
  type: Cloud
EOF

# 将云端节点加入北京节点池
$ kubectl label node openyurt-worker apps.openyurt.io/desired-nodepool=beijing

# 检查节点池状态
$ kubectl get nodepool
NAME       TYPE    READYNODES   NOTREADYNODES   AGE
beijing    Cloud   1            0               4m22s
```

创建一个shanghai边缘节点池，并将边缘节点加入到shanghai节点池



```powershell
# 创建shanghai节点池
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: shanghai
spec:
  type: Edge
EOF

# 将边缘节点加入shanghai节点池
$ kubectl label node openyurt-worker2 apps.openyurt.io/desired-nodepool=shanghai

# 检查节点池状态
$ kubectl get nodepool
NAME       TYPE    READYNODES   NOTREADYNODES   AGE
beijing    Cloud   1            0               4m22s
shanghai   Edge    1            0               3m39s
```

# 2. 在节点池内创建IoT系统PlatformAdmin

配置好使用EdgeX版本，选择在shanghai节点池中创建

```powershell
# 在节点池shanghai中创建minnesota版本的EdgeX
$ cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: shanghai
EOF

# 检查部署情况
$ kubectl get po
NAME                                                              READY   STATUS    RESTARTS        AGE
edgex-app-rules-engine-shanghai-8tnnj-65db7c5c46-bst8b            1/1     Running   0               3m54s
edgex-core-command-shanghai-6q8zr-6d88f9f66b-5qtsp                1/1     Running   1 (2m44s ago)   3m55s
edgex-core-common-config-bootstrapper-shanghai-whtmd-74ddctldvb   1/1     Running   0               3m54s
edgex-core-consul-shanghai-972wx-796f644c7f-tnspb                 1/1     Running   0               3m55s
edgex-core-data-shanghai-r6c2g-7879ffb76-zzhfb                    1/1     Running   1 (2m23s ago)   3m55s
edgex-core-metadata-shanghai-5qdcn-549bf54564-cpzdf               1/1     Running   0               3m55s
edgex-device-rest-shanghai-ncdzs-6ccf98ddfb-zbzrj                 1/1     Running   1 (2m32s ago)   3m55s
edgex-device-virtual-shanghai-9tz4g-d6cc8d9c-8j9v5                1/1     Running   0               3m54s
edgex-kuiper-shanghai-c26wk-65cf99c6fc-wgs6r                      1/1     Running   0               3m54s
edgex-redis-shanghai-ztpbz-5655bb88dd-6hzfs                       1/1     Running   0               3m54s
edgex-support-notifications-shanghai-59qt8-6695cb4bc8-8sln5       1/1     Running   0               3m53s
edgex-support-scheduler-shanghai-kd665-5599dcc995-gpz7j           1/1     Running   0               3m53s
edgex-ui-go-shanghai-b67c6-5f85b98658-568lk                       1/1     Running   0               3m55s
```