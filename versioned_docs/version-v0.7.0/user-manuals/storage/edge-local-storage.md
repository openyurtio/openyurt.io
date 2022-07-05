---
title: Edge Local Storage
---

### 1. Check the local storage resources on the node

Check the corresponding Relation between existing block devices and nodes.

### 2. Create Configmap

Create a ConfigMap in a cluster. Here is a relatively generic ConfigMap configuration that configures local storage resources. For details, see [DOC](https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md)

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

The previous configuration provides the following functionsThe previous configuration provides the following functions

- In the test cluster,  we used two pieces of equipment : /dev/VDB & / dev/VDC  to create an LVM volumegroup on the worker node: "cn - zhangjiakou. 192.168.3.114 ".  Devices here can add paths that do not exist,  because the plug-in will automatically ignore this path during the node initialisation.

- Meanwhile, we format the block device "/dev/vdb" to prjquota format on worker node "cn-beijing.192.168.3.35", and  mount it to path "/mnt/path1",  and then subdirectories created under this path can set the maximum quota for each directory. Devices here can also add paths that do not exist, the component will automatically select the first existing block device for formatting and binding. 

### 3. Install node-resource-manager

```shell
kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml
```

### 4. Deploy application in cluster（with lvm）

#### Create storageclass

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

Parameters. vgName is the VolumeGroup defined in node-resource-topo configmap, named volumegroup1.

#### Create PVC

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

You need to specify the node where the storage is located in the PVC's annotation,

#### Create application

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
      volumes:
        - name: lvm-pvc
          persistentVolumeClaim:
            claimName: lvm-pvc
EOF
```

Above, we have completed the basic use of local storage, Quotapath mode is basically the same, just need to change the StorageClass.
