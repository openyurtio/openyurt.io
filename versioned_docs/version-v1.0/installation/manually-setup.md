---
title: Manually Setup
---

This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to [yurtadm docs](./yurtadm-init.md).

## 1. Precondition

Make sure you already have a Kubernetes cluster with at least one node. We recommend to create your Kubernetes cluster with [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) tool.

```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
```

### 1.1 Label cloud nodes

When disconnected from the apiserver, only the pod running on the autonomous edge node will
be prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node
and the edge node, by using label `openyurt.io/is-edge-worker`.
we will use node `us-west-1.192.168.0.87` as the cloud node. We label the cloud node with value `false`,

```bash
$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false
node/us-west-1.192.168.0.87 labeled
```

## 2.  OpenYurt Setup Preparation

### 2.1 Adjust Kube-Controller-Manager 

To make Yurt-Controller-Manager function properly, we need to disable the NodeLifeCycle controller in Kube-Controller-Manager. (Currently being optimized, this operation will not be needed in the future)

The adjustment operation is as following:

- [Kube-Controller-Manager](./openyurt-prepare.md#2-kube-controller-manager-adjustment)

### 2.2 Deploy Yurt-Tunnel dedicated DNS

When cloud components(such as Kube-apiserver, prometheus, metrics-server) access edge side through `hostname:port`, their `hostname` domain should resolve to `yurt-tunnel-server` to make the requests pass through `yurt-tunnel` to target edge node imperceptibly. We should make sure that these DNS domain resolution requests are sent to the Yurt-Tunnel dedicated DNS server (named yurt-tunnel-dns).

Install yurt-tunnel-dns with the following command:

```bash
kubectl apply -f config/setup/yurt-tunnel-dns.yaml
```

After installation, we can check if yurt-tunnel-dns started successfully with `kubectl -n kube-system get po`. Also we can get the `clusterIP` of `yurt-tunnel-dns service` which will be used later with `kubectl -n kube-system get svc yurt-tunnel-dns`.

### 2.3 Adjust Kube-apiserver

To ensure that the kube-apiserver on the Master node uses `hostname:port` to access the kubelet, and also to ensure that the domain name resolution of `hostname` is performed using the `yurt-tunnel-dns pod`. The relevant configuration of the kube-apiserver component needs to be adjusted.

The adjust operations are as following:

- [Kube-apiserver](./openyurt-prepare.md#3-kube-apiserver-adjustment)

### 2.4 Adjust Addons

Kube-proxy and CoreDNS which are installed by kubeadm by default should also be adjusted to adapt to cloud-edge scenarios. The adjust operations are as following:

- [CoreDNS](./openyurt-prepare.md#4-coredns-adjustment)
- [KubeProxy](./openyurt-prepare.md#5-kubeproxy-adjustment)

## 3. Setup Control-Plane components of OpenYurt

We recommend to install OpenYurt components with [Helm](https://helm.sh/), please make sure that [`helm CLI` has been installed](https://helm.sh/docs/intro/install/) properly before moving on. All the helm charts used in this tutorial can be found in [openyurt-helm repo](https://github.com/openyurtio/openyurt-helm).

### 3.1 Setup `openyurt/yurt-app-manager` components

#### 3.1.1 Install yurt-app-manager

[Yurt-App-Manager](../core-concepts/yurt-app-manager.md) is a functional component that provides united edge management capabilities for an OpenYurt cluster. You can install this component with helm.

```bash
helm install yurt-app-manager -n kube-system ./charts/yurt-app-manager/
```

You can check if yurt-app-manager pod and service have been installed successfully with:

```bash
kubectl get pod -n kube-system | grep yurt-app-manager
kubectl get svc -n kube-system | grep yurt-app-manager
```

#### 3.1.2 Create NodePool

To better manage the nodes and the traffic on the nodes (e.g., Service traffic topology management), we recommend putting the nodes of the Layer 2 network interworking in the same node pool. In this example, a node pool is created for cloud side as follows:

```bash
cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: master
spec:
  type: Cloud
EOF
```

#### 3.1.3 Add node into NodePool

Add the cloud node into nodepool created in 3.1.2:

```bash
$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master
node/us-west-1.192.168.0.87 labeled
```

### 3.2 Setup `openyurt/openyurt` components

Componentes in the `openyurt/openyurt` includes:

- [yurt-controller-manager](../core-concepts/yurt-controller-manager.md): it prevents apiserver from evicting pods running on the autonomous edge nodes during disconnection.
- [yurt-tunnel-server](../core-concepts/yurttunnel.md): it constructs the cloud-edge tunnel on the server side
- [yurt-tunnel-agent](../core-concepts/yurttunnel.md): it constructs the cloud-edge tunnel on the edge side

> If your cloud node and edge node are in different network domains, please overwrite the default charts parameters for yurt-tunnel components in `values.yaml`:
>
> - `yurtTunnelAgent.parameters.tunnelserverAddr="ip:port"`: the public ip along with port of tunnel server where tunnel agent can connect to
> - `yurtTunnelServer.parameters.certIps="ip1,ip2"`: the public ip of tunnel server
> - `yurtTunnelServer.parameters.certDnsNames="dns_name1,dns_name2"`: the dns name of tunnel server [OPTIONAL]

We can install all the components above with helm:

```bash
helm install openyurt -n kube-system ./charts/openyurt/
```

If everthing went well, you'll see something like this after typing `helm list -A`

```bash
$ helm list -A 
NAME            	NAMESPACE  	REVISION	UPDATED                                	STATUS  	CHART                 	APP VERSION
openyurt        	kube-system	1       	2022-09-07 17:06:17.764754411 +0800 CST	deployed	openyurt-1.0.0        	1.0.0      
yurt-app-manager	kube-system	1       	2022-09-07 17:36:30.371904902 +0800 CST	deployed	yurt-app-manager-0.1.2	0.8.0
```

## 4. Attention

The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to [Install OpenYurt Node on Existing K8s Nodes](./yurtadm-join.md#2-install-openyurt-node-components).
