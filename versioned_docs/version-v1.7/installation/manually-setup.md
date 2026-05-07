---
title: Manually Setup
---

This tutorial shows how to setup OpenYurt control plane components manually. We assume you already have a Kubernetes control plane setup properly.

## 1. Precondition

Make sure you already have a Kubernetes control plane with at least one node. We recommend to create your Kubernetes cluster with [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) tool.

```bash
$ kubectl get nodes
NAME                      STATUS   ROLES                  AGE     VERSION
izwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11
```

## 2. Prerequisites for installing the OpenYurt control plane

- The IP addresses of all nodes in the cluster must be different if Raven enables node forwarding
- You must make the following adjustments if using docker as container runtime, which is mainly to avoid docker modifying the iptables forward chain and damaged the node forward.
  ```bash
  iptables -w -P FORWARD ACCEPT
  sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \
  /lib/systemd/system/docker.service
  ```
- Domain Name resolution from pods on edge nodes will be handled by CoreDNS instance on master node or cloud node through VPN tunnel that provided by Raven, so some resolution latency or timeout will be caused by network. we recommend you to adjust `CoreDNS Deployment` according to [CoreDNS Adjustment](./coredns-prepare.md) tutorial if you care about latency or timeout.
- To adapt to the complex network scenarios at the edge, we need to disable the original node lifecycle management controller of the k8s. For details, see [Kube-Controller-Manager Installation Configuration Adjustments](./kcm-prepare.md).
- We recommend installing OpenYurt components via [Helm](https://helm.sh/), please make sure [helm CLI](https://helm.sh/docs/intro/install/) is installed properly before proceeding.

## 3. Install OpenYurt control plane components

All the helm charts used in this tutorial can be found in [openyurt-helm repo](https://github.com/openyurtio/openyurt-helm). please add the repo as follows:

```bash
helm repo add openyurt https://openyurtio.github.io/charts
```

You can then run `helm search repo openyurt` to see the charts.

### 3.1 Install yurt-manager

yurt-manager should be installed before joining edge nodes via the yurtadm command, as it provides the controllers and webhooks required for OpenYurt features.
Please ensure that the yurt-manager component is running on the control plane node.

```bash
helm upgrade --install yurt-manager -n kube-system openyurt/yurt-manager
```

Ensure that the pod and service configurations of the yurt-manager component have been created successfully:

```bash
kubectl get pod -n kube-system | grep yurt-manager
kubectl get svc -n kube-system | grep yurt-manager
```

### 3.2 Install raven component

[Raven](../core-concepts/raven.md) provides network communication capabilities when the cloud and the edge are in different network areas, which include two components raven-controller-manager and raven-agent.

```bash
helm upgrade --install raven-agent -n kube-system openyurt/raven-agent
```

Ensure that the pod of the raven agent component have been created successfully:

You need to configure the cluster by referring to [raven-l7-proxy-prepare.md](./raven-l7-proxy-prepare.md) if you need to enable raven l7 proxy.

```bash
kubectl get pod -n kube-system | grep raven-agent
```

## 4. Attention

The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to [Install OpenYurt Node on Existing K8s Nodes](./yurtadm-join.md#2-install-openyurt-node-components).
