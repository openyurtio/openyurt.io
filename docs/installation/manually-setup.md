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

OpenYurt need to change kubernetes component configurations to adapt to edge environment. Please complete the following configurations for `Kube-Controller-Manager`, `CoreDNS`, `KubeProxy`。
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
#### Note
Since Docker turn on pull rate limit on anonymous request. You may encounter error message like "You have reached your pull rate limit. xxxx". In that case you will need to create a docker-registry secret to pull the image.
```
$kc create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system
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

## 4. Join Edge Nodes

we can install node components of OpenYurt on edge nodes that already have been joined in the Kubernetes cluster(like `node/us-west-1.192.168.0.88`). on the other hand,
we also can join new edge nodes from scratch into the OpenYurt cluster.

### 4.1 Configure Joined Nodes

only setup node components of OpenYurt on edge nodes that already have been joined in the Kubernetes cluster.

#### 4.1.1 Setup Yurthub

Before proceeding, we need to prepare the following items:
1. Get the apiserver's address (i.e., ip:port) and a [bootstrap token](https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/), which will be used to replace the placeholder in the template file `config/setup/yurthub.yaml`.

In the following command, we assume that the address of the apiserver is 1.2.3.4:5678 and bootstrap token is 07401b.f395accd246ae52d
```bash
$ cat config/setup/yurthub.yaml |
sed 's|__kubernetes_master_address__|1.2.3.4:5678|;
s|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&
scp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests
```
and the Yurthub will be ready in minutes.

#### 4.1.2 Configure Kubelet

we need to reset the kubelet service to let it access the apiserver through the yurthub (The following steps assume that we have logged on to the edge node as the root user).
As kubelet will connect to the Yurthub through HTTP, so we create a new kubeconfig file for the kubelet service.
```bash
mkdir -p /var/lib/openyurt
cat << EOF > /var/lib/openyurt/kubelet.conf
apiVersion: v1
clusters:
- cluster:
    server: http://127.0.0.1:10261
  name: default-cluster
contexts:
- context:
    cluster: default-cluster
    namespace: default
    user: default-auth
  name: default-context
current-context: default-context
kind: Config
preferences: {}
EOF
```

In order for let kubelet to use the new kubeconfig, we edit the drop-in file of the kubelet service (i.e., `/etc/systemd/system/kubelet.service.d/10-kubeadm.conf`)
```bash
sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\/etc\/kubernetes\/bootstrap-kubelet.conf\ --kubeconfig=\/etc\/kubernetes\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\/var\/lib\/openyurt\/kubelet.conf|g" \
    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf
```

then, we restart the kubelet service
```bash
# assume we are logged in to the edge node already
$ systemctl daemon-reload && systemctl restart kubelet
```

Finally, we need to make sure node is ready after kubelet restart.
```bash
$ kubectl get nodes
NAME                     STATUS   ROLES    AGE     VERSION
us-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11
us-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11
```

#### 4.1.3 Restart Pods

After Yurthub installation and kubelet restart, all pods on this edge node should be recreated in order to make sure pods access kube-apiserver through Yurthub.
Before performing this operation, confirm the impact on the production environment.
```
$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88
kube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>
kube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>

// then delete all pods above except yurthub pod.
$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr
```

### 4.2 Join Edge Nodes From Scratch

`yurtadm join` command is used for joining new edge nodes into cluster. detail information is [here](./yurtadm-init-join.md#23joining-nodes-to-cluster)