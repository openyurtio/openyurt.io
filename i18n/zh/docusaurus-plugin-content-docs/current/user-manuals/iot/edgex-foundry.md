---
title: 云原生管理端设备
---

本文档主要讲述如何在已有的OpenYurt集群上使用PlatformAdmin部署EdgeX系统和YurtIoTDock组件。
在 OpenYurt v1.4 版本中，我们升级了原来的 yurt-edgex-manager 和 yurt-device-controller 组件。前者已经内置于 yurt-manager 中，用户可以通过编写 Yaml 文件来创建 PlatformAdmin 资源，简单几行配置就可以往节点池内构建一套完整的 EdgeX 系统；后者更名为 yurt-iot-dock ，会在 PlatformAdmin 创建时自动下发到边缘侧，实现帮助用户一键实现端设备托管的能力。

如果你还没有OpenYurt集群，你可以使用yurtadm工具来初始化一个OpenYurt集群或将一个Kubernetes集群转换为OpenYurt集群。

## 环境要求

- OpenYurt v1.4.0+
- 安装了`yurt-manager`组件

- 与master不在同一局域网下的节点都需要部署coreDNS pod
- 将访问coreDNS service的流量改为节点池内闭环，参考[教程](https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/service-topology.md)

## 端设备平台管理

### 1. 创建节点池

首先创建两个节点池，一个是名为beijing的云端节点池，一个是名为hangzhou的边缘节点池。

```shell
# 创建beijing节点池
cat << EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: beijing
spec:
  type: Cloud
EOF

# 创建hangzhou节点池
cat << EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: hangzhou
spec:
  type: Edge
EOF
```

然后将指定的节点加入节点池，标记openyurt-worker节点为云端节点，标记openyurt-worker2节点为边缘节点

```shell
# 将openyurt-worker标记为云端节点
kubectl label node openyurt-worker apps.openyurt.io/nodepool=beijing
# 将openyurt-worker2标记为边缘节点
kubectl label node openyurt-worker2 apps.openyurt.io/nodepool=hangzhou
```

最后检查节点池状态，确保节点池状态正常

```shell
# 检查节点池状态
kubectl get np
NAME       TYPE    READYNODES   NOTREADYNODES   AGE
beijing    Cloud   1            0               4d18h
hangzhou   Edge    1            0               4d18h
```

### 2. 在节点池内创建IoT系统PlatformAdmin

配置好使用EdgeX版本，选择在hangzhou节点池中创建

```shell
# 在节点池hangzhou中创建minnesota版本的EdgeX
cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
EOF

# 检查部署情况
kubectl get po
NAME                                                              READY   STATUS    RESTARTS   AGE
edgex-core-command-hangzhou-4j6pz-8668ff94d7-hqw2r                1/1     Running   0          61s
edgex-core-common-config-bootstrapper-hangzhou-jnw2q-57bd99xr9p   1/1     Running   0          61s
edgex-core-consul-hangzhou-6p9tj-798489c647-6xz4m                 1/1     Running   0          61s
edgex-core-metadata-hangzhou-6l7v5-6f964fc4f-67f9p                1/1     Running   0          61s
edgex-redis-hangzhou-cwgsw-5c7d7fc478-fsgp9                       1/1     Running   0          61s
```

### 3. 部署可选组件

目前v1.4.0的PlatformAdmin支持通过components字段一键部署可选组件，下面是通过components字段部署yurt-iot-dock、edgex-device-virtual、edgex-device-rest的例子

```shell
# 在刚才部署的PlatformAdmin之上增加components字段
cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
  components:
  - name: yurt-iot-dock
  - name: edgex-device-virtual
  - name: edgex-device-rest
EOF

# 可以看到可选的components已经部署起来了
kubectl get po
NAME                                                              READY   STATUS    RESTARTS   AGE
edgex-core-command-hangzhou-cwgs2-77bb5d9cdd-zp89r                1/1     Running   0          20m
edgex-core-common-config-bootstrapper-hangzhou-bqhnb-57bd9c4q5q   1/1     Running   0          20m
edgex-core-consul-hangzhou-5rl7c-66dbc9c7d7-dqvm8                 1/1     Running   0          20m
edgex-core-metadata-hangzhou-srpff-dd6c6f9cb-2cj9k                1/1     Running   0          20m
edgex-device-rest-hangzhou-v7p99-7b8bb4f5d4-kz8sq                 1/1     Running   0          7m49s
edgex-device-virtual-hangzhou-ssz59-796f948c69-5k4tc              1/1     Running   0          7m49s
edgex-redis-hangzhou-bk5g5-5fbdf6fffb-cmf6d                       1/1     Running   0          20m
yurt-iot-dock-hangzhou-56f98-8549f848f5-v2pjn                     1/1     Running   0          7m49s
```

### 4. 修改组件配置

PlatfromAdmin给高阶用户提供了自定义配置的入口，所有PlatformAdmin的配置都通过一个名为platformadmin-framework的configmap控制，通过修改这个configmap的值用户可以修改每个组件的配置，下面是platformadmin-framework的一个例子

```yaml
apiVersion: v1
data:
  framework: |
    components:
    - deployment:
        selector:
          matchLabels:
            app: edgex-core-command
        strategy: {}
        template:
          metadata:
            creationTimestamp: null
            labels:
              app: edgex-core-command
          spec:
            containers:
            - env:
              - name: SERVICE_HOST
                value: edgex-core-command
              - name: EXTERNALMQTT_URL
                value: tcp://edgex-mqtt-broker:1883
              envFrom:
              - configMapRef:
                  name: common-variables
              image: openyurt/core-command:3.0.0
              imagePullPolicy: IfNotPresent
              name: edgex-core-command
              ports:
              - containerPort: 59882
                name: tcp-59882
                protocol: TCP
              resources: {}
            hostname: edgex-core-command
      name: edgex-core-command
      service:
        ports:
        - name: tcp-59882
          port: 59882
          protocol: TCP
          targetPort: 59882
        selector:
          app: edgex-core-command
...
```

### 5. 手动添加组件

考虑到某些用户可能需要新增一些自己编写或修改的组件，PlatformAdmin的component机制也支持用户新增组件。新增组件需要遵守如下步骤：

#### 配置PlatformAdmin

在PlatformAdmin的components字段中加入需要新增的组件的名字，比如我们想要增加一个名为nginx-demo的组件

```shell
# 在components字段中增加nginx-demo
cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
  components:
  - name: yurt-iot-dock
  - name: edgex-device-virtual
  - name: edgex-device-rest
  - name: nginx-demo
EOF
```

#### 填写PlatformAdminFramework

由于AutoCollector收集的标准配置文件并不存在nginx-demo这个组件，所以platformadmin-framework中并没有对应的配置，这时用户可以手动增加这个组件

```yaml
# 使用kubectl edit修改configmap中的内容
kubectl edit cm platformadmin-framework

# 新增nginx-demo配套的deployment和service
apiVersion: v1
data:
  framework: |
    components:
    - deployment:
        selector:
          matchLabels:
            app: nginx-demo
        strategy: {}
        template:
          metadata:
            creationTimestamp: null
            labels:
              app: nginx-demo
          spec:
            containers:
            - image: nginx
              imagePullPolicy: IfNotPresent
              name: nginx-demo
              ports:
              - containerPort: 80
                name: nginx
                protocol: TCP
              resources: {}
            hostname: nginx-demo
      name: nginx-demo
      service:
        ports:
        - name: nginx
          port: 80
          protocol: TCP
          targetPort: 80
        selector:
          app: nginx-demo
...
```

保存退出后可以看到nginx-demo这个组件已经被部署起来了

```shell
# deployment成功创建，pod已经成功部署
kubectl get po
NAME                                                              READY   STATUS    RESTARTS   AGE
edgex-core-command-hangzhou-2mvhc-77bb5d9cdd-7xtgp                1/1     Running   0          4m17s
edgex-core-common-config-bootstrapper-hangzhou-tp2qc-57bd9cpj8p   1/1     Running   0          4m17s
edgex-core-consul-hangzhou-hhnvv-66dbc9c7d7-cp5c9                 1/1     Running   0          4m17s
edgex-core-metadata-hangzhou-pd9b2-dd6c6f9cb-xzx45                1/1     Running   0          4m17s
edgex-device-rest-hangzhou-l55qd-7b8bb4f5d4-s7pw6                 1/1     Running   0          4m17s
edgex-device-virtual-hangzhou-ftrg9-796f948c69-rfpnk              1/1     Running   0          4m17s
edgex-redis-hangzhou-9hnpn-5fbdf6fffb-vzh5k                       1/1     Running   0          4m17s
nginx-demo-hangzhou-p5p2k-5cd7c897d6-49ss9                        1/1     Running   0          108s
yurt-iot-dock-hangzhou-gg85j-8549f848f5-sbhmk                     1/1     Running   0          4m17s

# 对应的service也成功创建
kubectl get svc
NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
edgex-core-command     ClusterIP   10.96.146.121   <none>        59882/TCP   4m54s
edgex-core-consul      ClusterIP   10.96.39.123    <none>        8500/TCP    4m54s
edgex-core-metadata    ClusterIP   10.96.58.12     <none>        59881/TCP   4m54s
edgex-device-rest      ClusterIP   10.96.39.152    <none>        59986/TCP   4m54s
edgex-device-virtual   ClusterIP   10.96.165.130   <none>        59900/TCP   4m54s
edgex-redis            ClusterIP   10.96.159.68    <none>        6379/TCP    4m54s
kubernetes             ClusterIP   10.96.0.1       <none>        443/TCP     8d
nginx-demo             ClusterIP   10.96.40.228    <none>        80/TCP      2m25s
```

如果想要一键移除这个组件的话，只需要在components字段中去掉对应的name就行，PlatformAdmin会自动回收对应名字的组件

```shell
# 在components字段中删除nginx-demo
cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
  components:
  - name: yurt-iot-dock
  - name: edgex-device-virtual
  - name: edgex-device-rest
  # - name: nginx-demo
EOF

# 可以看到对应的deployment和service都回收了
kubectl get deploy
NAME                                                   READY   UP-TO-DATE   AVAILABLE   AGE
edgex-core-command-hangzhou-2mvhc                      1/1     1            1           7m50s
edgex-core-common-config-bootstrapper-hangzhou-tp2qc   1/1     1            1           7m50s
edgex-core-consul-hangzhou-hhnvv                       1/1     1            1           7m50s
edgex-core-metadata-hangzhou-pd9b2                     1/1     1            1           7m50s
edgex-device-rest-hangzhou-l55qd                       1/1     1            1           7m50s
edgex-device-virtual-hangzhou-ftrg9                    1/1     1            1           7m50s
edgex-redis-hangzhou-9hnpn                             1/1     1            1           7m50s
yurt-iot-dock-hangzhou-gg85j                           1/1     1            1           7m50s

kubectl get svc
NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
edgex-core-command     ClusterIP   10.96.146.121   <none>        59882/TCP   8m1s
edgex-core-consul      ClusterIP   10.96.39.123    <none>        8500/TCP    8m1s
edgex-core-metadata    ClusterIP   10.96.58.12     <none>        59881/TCP   8m1s
edgex-device-rest      ClusterIP   10.96.39.152    <none>        59986/TCP   8m1s
edgex-device-virtual   ClusterIP   10.96.165.130   <none>        59900/TCP   8m1s
edgex-redis            ClusterIP   10.96.159.68    <none>        6379/TCP    8m1s
kubernetes             ClusterIP   10.96.0.1       <none>        443/TCP     8d
```

**注：不建议在platformadmin-framework中直接修改组件名，这会导致组件脱离platformadmin管控！**

## 端设备管理

TODO: 介绍如何使用yurt-iot-dock管理端设备
