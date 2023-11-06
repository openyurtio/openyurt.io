---
title: Edge Pod Network
---

## Background

In Cloud Edge usage scenarios，in order to ensure the workloads on the edge nodes can still work stably even in condition of the cloud edge network is disconnected, openyurt provides the edge node autonomy capability. It can realize the automatic restart for the abnormal pod and the auto start of the pods when the edge node is restarted. However, in order to ensure that the node and pod restart will not affect the edge container network when the cloud edge network is disconnected, some network configurations need to be adapted.

## Flannel: VTEP MAC address kept
### use case
If we adopt flannel as CNI plugin and VXLAN as the backend, when a VTEP device is created on a node（generally named: flannel.1）, the VNI and VTEP info will be record in the node annotations，so that other nodes can create the related route and forward rules.
Flannel arch is shown below:

![flannel-architecture](../../../../static/img/docs/user-manuals/network/flannel-architecture.png)

Let's take an example with 2 edge nodes：
- node2 creates flannel.1 device，MAC address is "9e:c9:07:f9:b3:8b"，IP address is "172.30.133.0", the related info will be record in node2 annotations:
```yaml
# node2 annotations with vtep info.
flannel.alpha.coreos.com/backend-data: '{"VtepMAC":"9e:c9:07:f9:b3:8b"}'
flannel.alpha.coreos.com/public-ip: 10.0.0.20
```
- node1 will leverage the related info in node2 to configure the fdb/arp/routing info in host network:
```shell script
# node1 host network namespace.
fdb:   9e:c9:07:f9:b3:8b dev flannel.1 dst 10.0.0.20 self permanent
arp:   ? (172.30.133.0) at 9e:c9:07:f9:b3:8b [ether] PERM on flannel.1
route: 172.30.133.0/26 via 172.30.133.0 dev flannel.1 onlink
```
Every time node2 restarts, flannel will re-create the vtep device, and the MAC address of vtep will also be changed and updated to node2 annotations. However, if node2 or node1 is disconnected from the cloud network at this time, node1 will not be notified about the change of node2's MAC address, which will cause the pod on node1 and node2 to fail to communicate normally.

### Solution: Add Mac address kept capability in Flannel
Every time the edge node restarts, flannel firstly reads the MAC address information in the node's annotations (from the local cache of apiserver or yurthub). If it exists, it uses this MAC address as the VTEP MAC address.

In order to implement this capability, the flannel source code modifications reference:

```shell script
git clone https://github.com/flannel-io/flannel.git;
cd flannel;
git reset --hard e634dabe0af446b765db3b729085b32f97ff6fe6;
wget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0001-flannel-keep-vtep-mac.patch;
git am 0001-flannel-keep-vtep-mac.patch;
```
flannel-edge image location:
```
Docker image location: docker.io/openyurt/flannel-edge:v0.14.0-1
Aliyun image location: registry.cn-hangzhou.aliyuncs.com/openyurt/flannel-edge:v0.14.0-1
```
## IPAM: Pod IP address kept
### user case
In most scenarios, the pod is assigned an IP address through host-local. Host-local selects the idle IP address from nodecidr and assigns it to the new pod, and records the allocated IP address information in the local file.

For example, if the IPAM data directory is /var/lib/cni/networks/cbr0, its record information is as below:

```shell script
$ ls /var/lib/cni/networks/cbr0
172.30.132.194  172.30.132.198  172.30.132.201
```
When the cloud edge network is disconnected, pod restart will cause the host-local to reassign an IP address, and the change of pod IP address cannot be synchronized to the cloud. Components such as Kube proxy on other edge nodes cannot be notified about the change of pod IP, so the cluster IP address cannot be used to access the pod.

### Solution: Pod IP address kept
To solve this problem, you need to adjust the host-local code: the format of recording IP address is `{ip}-{pod namespace}-{pod name}`. When the pod restarts, host-local will firstly assign the IP address of the pod with the same name in the record.

The assigned pod IP records are changed as below:

```shell script
$ ls /var/lib/cni/networks/cbr0
172.30.132.194_kube-system_coredns-vstxh  172.30.132.198_kube-system_nginx-76df748b9-4cz95  172.30.132.201_kube-system_nginx-76df748b9-nf5l9
```
host-local source code modifications reference:
```shell script
git clone https://github.com/containernetworking/plugins.git ;
cd plugins;
git reset --hard 9ebe139e77e82afb122e335328007bca86905ae4;
wget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0002-ipam-keep-pod-ip.patch;
git am 0002-ipam-keep-pod-ip.patch;
```
host-local cni rpm update:
```shell
rpm -ivh https://github.com/openyurtio/openyurt/releases/download/v0.7.0/openyurt-cni-0.8.7-0.x86_64.rpm
```

## Add "get node" permission for Flannel
After the flannel is adjusted, the permission of "get node" needs to be added along with the original RBAC, below is the modification reference:
```diff
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: flannel
rules:
  - apiGroups:
      - ""
    resources:
      - pods
    verbs:
      - get
  - apiGroups:
      - ""
    resources:
      - nodes
    verbs:
+     - get
      - list
      - watch
  - apiGroups:
      - ""
    resources:
      - nodes/status
    verbs:
      - patch
```
