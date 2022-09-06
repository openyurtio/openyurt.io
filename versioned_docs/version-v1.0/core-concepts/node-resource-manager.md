---
title: NodeResourceManager
---

### abstract

Node-resource-manager is a component used to manage local resources in an OpenYurt cluster, user can dynamically configure local resources on hosts in a cluster by modifying a ConfigMap resource.



 Node-resource-manager can initialize an existing block device or persistent memory device on the host into the following two local storage devices:

- An LVM created based on a block device or persistent memory device
- QuotaPath created on a block device or persistent memory device

Any changes to ConfigMap will be treated as changes to local resources on woker nodes in the cluster. For data security reasons, the plug-in will not delete any local resources


At the same time, with [csi](https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver) component, local storage devices can be used quickly and easily in Openyurt cluster.


### architecture

 
 
 This component consists of two main parts, one is the Node-resource-Topo ConfigMap defined in the kube-system namespace in the cluster, One is the Node-Resource-manager Daemonset, which is deployed under the Kube-system namespace in the cluster. The Node-resource-manager on each Node produces and manages user-defined local resources by mounting node-resource-Topo ConfigMap.

![img](../../../static/img/docs/core-concepts/node-resource-manager.png)


### 

### samples



#### Create Configmap

Create a ConfigMap in a cluster. This section shows a generic ConfigMap configuration. For details, see
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



The previous configuration provides the following functions

- In the test cluster,  we used two pieces of equipment : /dev/VDB & / dev/VDC  to create an LVM volumegroup on the worker node: "cn - zhangjiakou. 192.168.3.114 ".  Devices here can add paths that do not exist,  because the plug-in will automatically ignore this path during the node initialisation .
- Meanwhile, we format the block device "/dev/vdb" to prjquota format on worker node "cn-beijing.192.168.3.35", and  mount it to path "/mnt/path1",  and then subdirectories created under this path can set the maximum quota for each directory. Devices here can also add paths that do not exist, the component will automatically select the first existing block device for formatting and binding. 



#### Installation of node-resource-manager



```yaml
kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml
```



### Best practices of Edge local storage 



https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4