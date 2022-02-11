---
title: Edge Local Storage
---

### 1. 确认节点上的本地存储资源

确认节点上已经存在的块设备和节点的对应关系。

### 2. 创建Configmap

在集群中创建ConfigMap, 这里展示一个相对通用的 Configmap 配置，在这个Configmap 配置中配置本地存储资源。详细说明请参见 [文档](https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md)

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

以上配置可以完成如下功能;

在集群中的 cn-zhangjiakou.192.168.3.114 节点上使用 /dev/vdb & /dev/vdc 这两个块设备创建一个 lvm volumegroup。这里的 devices 可以添加不存在的路径， 插件在节点上初始化的时候会自动忽略。
在集群中的 cn-beijing.192.168.3.35 节点上使用 /dev/vdb 这个块设备格式化成 prjquota 格式，并挂载到/mnt/path1 这个路径上，后续再这个路径下面创建的子目录都可以设定每个目录的最大quota，同样， 这里的 devices 里面可以填写不存在路径，组件会自动选择第一个存在的块设备完成格式化和绑定的操作

### 3. 安装 node-resource-manager

```shell
kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml
```

### 4. 在集群中部署应用（以lvm为例）

#### 创建 storageclass

```yaml
cat <<EOF | kubectl apply -f -
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
    name: csi-local
provisioner: localplugin.csi.alibabacloud.com
parameters:
    volumeType: LVM
    vgName: volumegroup1
    fsType: ext4
    lvmType: "striping"
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
EOF
```

parameters.vgName为在node-resource-topo configmap中定义的VolumeGroup名称volumegroup1。

#### 创建PVC

```yaml
cat << EOF | kubectl apply -f -
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: lvm-pvc
  annotations:
    volume.kubernetes.io/selected-node: cn-zhangjiakou.192.168.3.114
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 2Gi
  storageClassName: csi-local
EOF
```

这里需要在 pvc 的 annotation 中指定存储所在的节点，

#### 创建应用

```yaml
cat << EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deployment-lvm
  labels:
    app: nginx
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.9
        volumeMounts:
          - name: lvm-pvc
            mountPath: "/data"
      tolerations:
      - operator: Equal
        key: node-role.openyurt.io/edge
        effect: NoSchedule        
      volumes:
        - name: lvm-pvc
          persistentVolumeClaim:
            claimName: lvm-pvc
EOF
```

以上，我们就完成了本地存储的基本使用， Quotapath 模式基本相同，只需改造 StorageClass 即可。
