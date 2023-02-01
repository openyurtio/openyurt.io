---
title: Manually Setup
---

This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to [yurtadm docs](./yurtadm-init.md).

## 1. Precondition

Make sure you already have a Kubernetes cluster with at least one node. We recommend to create your Kubernetes cluster with [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) tool.

```bash
$ kubectl get nodes
NAME                      STATUS   ROLES                  AGE     VERSION
izwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11
```

### 1.1 Label cloud nodes

When disconnected from the apiserver, only the pod running on the autonomous edge node will
be prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node
and the edge node, by using label `openyurt.io/is-edge-worker`.
we will use node `izwz9dohcv74iegqecp4axz` as the cloud node. We label the cloud node with value `false`,

```bash
$ kubectl label node izwz9dohcv74iegqecp4axz openyurt.io/is-edge-worker=false
izwz9dohcv74iegqecp4axz labeled
```

## 2.  OpenYurt Setup Pre-requirement
* The IP addresses of all nodes in the cluster must be different
* You must make the following adjustments if using docker as container runtime, which is mainly to avoid docker modifying the iptables forward chain and damaged the node forward.
  ```bash
  iptables -w -P FORWARD ACCEPT
  sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \
  /lib/systemd/system/docker.service
  ```
* Domain Name resolution from pods on edge nodes will be handled by CoreDNS instance on master node or cloud node through VPN tunnel that provided by Raven, so some resolution latency or timeout will be caused by network. we recommend you to adjust `CoreDNS Deployment` according to [CoreDNS Adjustment](./coredns-prepare.md) tutorial if you care about latency or timeout.

## 3. Setup Control-Plane components of OpenYurt

We recommend to install OpenYurt components with [Helm](https://helm.sh/), please make sure that [`helm CLI` has been installed](https://helm.sh/docs/intro/install/) properly before moving on. All the helm charts used in this tutorial can be found in [openyurt-helm repo](https://github.com/openyurtio/openyurt-helm).

### 3.1 Setup `openyurt/yurt-app-manager` components

#### 3.1.1 Install yurt-app-manager

[Yurt-App-Manager](../core-concepts/yurt-app-manager.md) is a functional component that provides united edge management capabilities for an OpenYurt cluster. You can install this component with helm.

```bash
helm install  yurt-app-manager -n kube-system ./charts/yurt-app-manager --set image.tag=latest
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
$ kubectl label node izwz9dohcv74iegqecp4axz apps.openyurt.io/desired-nodepool=master
izwz9dohcv74iegqecp4axz labeled
```

### 3.2 Setup `openyurt/yurt-controller-manager` components

- [yurt-controller-manager](../core-concepts/yurt-controller-manager.md): it prevents apiserver from evicting pods running on the autonomous edge nodes during disconnection.

We can install all the components above with helm:

```bash
cat <<EOF | helm install openyurt ./charts/openyurt -n kube-system -f -
yurtControllerManager:
  image:
    tag: latest
EOF
```

If everthing went well, you'll see something like this after typing `helm list -A`

```bash
$ helm list -A 
NAME            	NAMESPACE  	REVISION	UPDATED                                	STATUS  	CHART                 	APP VERSION
openyurt        	kube-system	1       	2022-09-07 17:06:17.764754411 +0800 CST	deployed	openyurt-1.0.0        	1.0.0      
yurt-app-manager	kube-system	1       	2022-09-07 17:36:30.371904902 +0800 CST	deployed	yurt-app-manager-0.1.2	0.8.0
```

## 4. Setup Cross-Network-Domain Communication components of OpenYurt

[Raven](../core-concepts/raven.md) provides network communication capabilities when the cloud and the edge are in different network areas， which include two components raven-controller-manager and raven-agent.

### 4.1 Setup `raven-controller-manager` component
[raven-controller-manager](https://github.com/openyurtio/raven-controller-manager) is a standard kubernetes controller for the Gateway, a custom cluster resource, deployed on cloud nodes (which can be master or Cloud nodes). Gateway CR manages nodes in different physical zones and dynamically elects a qualified node in the physical zone as a Gateway node.
```bash
git clone https://github.com/openyurtio/raven-controller-manager.git
cd raven-controller-manager
git checkout v0.3.0
make generate-deploy-yaml
kubectl apply -f _output/yamls/raven-controller-manager.yaml
```

### 4.2 Setup`raven-agent` component
```bash
git clone https://github.com/openyurtio/raven.git
cd raven
git checkout v0.3.0
FORWARD_NODE_IP=true make deploy
```

## 5. Attention

The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to [Install OpenYurt Node on Existing K8s Nodes](./yurtadm-join.md#2-install-openyurt-node-components).
