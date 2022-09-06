---
title: Manually Setup
---

This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a
two-nodes Kubernetes cluster, and all the yaml files used in this tutorial can be found
at [openyurt repo](https://github.com/openyurtio/openyurt/tree/master/config/setup) or [yurt-app-manager repo](https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup).

## 1. Precondition

Make sure you already have installed a two-nodes Kubernetes cluster. like [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) tool.
```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11
```

OpenYurt need to change kubernetes component configurations to adapt to edge environment. Please complete the following configurations for `Kube-Controller-Manager`, `CoreDNS`, `KubeProxy`.
- [Kube-Controller-Manager](./openyurt-prepare.md#1-kube-controller-manager-adjustment)
- [CoreDNS](./openyurt-prepare.md#2-coredns-adjustment)
- [KubeProxy](./openyurt-prepare.md#3-kubeproxy-adjustment)

## 2. Label cloud nodes and edge nodes

When disconnected from the apiserver, only the pod running on the autonomous edge node will
be prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node
and the edge node, by using label `openyurt.io/is-edge-worker`. 
we will use node `us-west-1.192.168.0.87` as the cloud node.

We label the cloud node with value `false`,
```bash
$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false
node/us-west-1.192.168.0.87 labeled
```

and the edge node with value `true`.
```bash
$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true
node/us-west-1.192.168.0.88 labeled
```

To activate the autonomous mode, we annotate the edge node by typing following command
```bash
$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true
node/us-west-1.192.168.0.88 annotated
```

## 3. Setup Control-Plane components of OpenYurt

### 3.1 Setup Yurt-controller-manager

Next, we need to deploy the Yurt controller manager, which prevents apiserver from evicting pods running on the
autonomous edge nodes during disconnection.
```bash
$ kubectl apply -f config/setup/yurt-controller-manager.yaml
deployment.apps/yurt-controller-manager created
```
#### Note:
Since Docker turn on pull rate limit on anonymous request. You may encounter error message like "You have reached your pull rate limit. xxxx". In that case you will need to create a docker-registry secret to pull the image.
```
$ kubectl create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system
```
Then edit the config/setup/yurt-controller-manager.yaml
```yaml
...
      containers:
      - name: yurt-controller-manager
        image: openyurt/yurt-controller-manager:latest
        command:
        - yurt-controller-manager
      imagePullSecrets:
      - name: dockerpass
```

### 3.2 Setup Yurt-App-Manager

please get `config/setup/all_in_one.yaml` from [yurt-app-manager repo](https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup)
```
$ kubectl apply -f config/setup/all_in_one.yaml
```

Wait for the yurt-app-manager operator to be created successfully
```
$ kubectl get pod -n kube-system | grep yurt-app-manager
```

### 3.3 Setup Yurt-tunnel

Then, we can deploy the yurt-tunnel-server:
```bash
$ kubectl apply -f config/setup/yurt-tunnel-server.yaml
```

And, apply the yurt-tunnel-agent yaml:
```bash
kubectl apply -f config/setup/yurt-tunnel-agent.yaml
```

After the agent and the server are running, we should check if yurt-tunnel can work by executing command like `kubectl logs/exec`

### 3.4 Setup Yurthub Settings

Deploy global settings(i.e., RBAC, configmap) for yurthub.
```bash
$ kubectl apply -f config/setup/yurthub-cfg.yaml
```

## 4. Attention

In order to make Node `US-West-1.192.168.0.88` work properly in the OpenYurt cluster, OpenYurt Node Components must be installed on the Node. For details, see [Install OpenYurt Node on Existing K8s Nodes](./yurtadm-join.md#2-install-openyurt-node-components).