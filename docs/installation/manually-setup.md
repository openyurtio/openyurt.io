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
* The IP addresses of all nodes in the cluster must be different if Raven enables node forwarding
* You must make the following adjustments if using docker as container runtime, which is mainly to avoid docker modifying the iptables forward chain and damaged the node forward.
  ```bash
  iptables -w -P FORWARD ACCEPT
  sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \
  /lib/systemd/system/docker.service
  ```
* Domain Name resolution from pods on edge nodes will be handled by CoreDNS instance on master node or cloud node through VPN tunnel that provided by Raven, so some resolution latency or timeout will be caused by network. we recommend you to adjust `CoreDNS Deployment` according to [CoreDNS Adjustment](./coredns-prepare.md) tutorial if you care about latency or timeout.

## 3. Setup Control-Plane components of OpenYurt

We recommend to install OpenYurt components with [Helm](https://helm.sh/), please make sure that [`helm CLI` has been installed](https://helm.sh/docs/intro/install/) properly before moving on. All the helm charts used in this tutorial can be found in [openyurt-helm repo](https://github.com/openyurtio/openyurt-helm).
Yurt-Manager is similar to Kube-Controller-Manager, which contains multiple OpenYurt controllers and webhooks, which contain controllers for cross-network domain、edge autonomy、device manager and iot controllers, etc., can be installed through Helm
```bash
helm upgrade --install openyurt -n kube-system openyurt/openyurt
```

Ensure that the pod and service configurations of the yurt control-plane component have been created successfully:

```bash
kubectl get pod -n kube-system | grep yurt-manager
kubectl get svc -n kube-system | grep yurt-manager
```

## 4. Setup Cross-Network-Domain Communication components of OpenYurt

[Raven](../core-concepts/raven.md) provides network communication capabilities when the cloud and the edge are in different network areas， which include two components raven-controller-manager and raven-agent.
```bash
helm upgrade --install raven-agent -n kube-system openyurt/raven-agent
```

Ensure that the pod of the raven agent component have been created successfully:
```bash
kubectl get pod -n kube-system | grep raven-agent
```

## 5. Attention

The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to [Install OpenYurt Node on Existing K8s Nodes](./yurtadm-join.md#2-install-openyurt-node-components).
