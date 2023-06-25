---
title: Node Pool Management
---

### 1）Install Yurt-Manager Component

`nodepool controller` is integrated within `Yurt-Manager` component, and it needs to be installed before using NodePool,
you can refer to [Deploy OpenYurt](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components) for detailed operations.

### 2）Example of Node Pool usage

- Create a nodepool

```shell
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: beijing
spec:
  type: Cloud
EOF

$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: hangzhou
spec:
  type: Edge
  annotations:
    apps.openyurt.io/example: test-hangzhou
  labels:
    apps.openyurt.io/example: test-hangzhou
  taints:
  - key: apps.openyurt.io/example
    value: test-hangzhou
    effect: NoSchedule
EOF
```

- Get the nodepool information

```shell
$ kubectl get np 

NAME       TYPE   READYNODES   NOTREADYNODES   AGE
beijing    Cloud                               35s
hangzhou   Edge                                28s
```

- Add node to nodepool

Add a cloud node to nodepool "beijing", you only need to label the node as below:

```shell
$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=beijing
```

```shell
For example:
$ kubectl label node master apps.openyurt.io/desired-nodepool=beijing

master labeled
```

Similarly, you can add the edge nodes to nodepool "hangzhou":

```shell
$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=hangzhou
For example:
$ kubectl label node k8s-node1 apps.openyurt.io/desired-nodepool=hangzhou

k8s-node1 labeled

$ kubectl label node k8s-node2 apps.openyurt.io/desired-nodepool=hangzhou

k8s-node2 labeled
```

- Verify whether a node is added to a nodepool:

When an edge node is added to a nodepool, all the annotations/labels of the nodepool are added to the node, together with a new label: apps.openyurt.io/nodepool

```shell
$ kubectl get node {Your_Node_Name} -o yaml 

For Example:
$ kubectl get node k8s-node1 -o yaml

apiVersion: v1
kind: Node
metadata:
  annotations:
    apps.openyurt.io/example: test-hangzhou
    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock
    node.alpha.kubernetes.io/ttl: "0"
    node.beta.alibabacloud.com/autonomy: "true"
    volumes.kubernetes.io/controller-managed-attach-detach: "true"
  creationTimestamp: "2021-04-14T12:17:39Z"
  labels:
    apps.openyurt.io/desired-nodepool: hangzhou
    apps.openyurt.io/example: test-hangzhou
    apps.openyurt.io/nodepool: hangzhou
    beta.kubernetes.io/arch: amd64
    beta.kubernetes.io/os: linux
    kubernetes.io/arch: amd64
    kubernetes.io/hostname: k8s-node1
    kubernetes.io/os: linux
    openyurt.io/is-edge-worker: "true"
  name: k8s-node1
  resourceVersion: "1244431"
  selfLink: /api/v1/nodes/k8s-node1
  uid: 1323f90b-acf3-4443-a7dc-7a54c212506c
spec:
  podCIDR: 192.168.1.0/24
  podCIDRs:
  - 192.168.1.0/24
  taints:
  - effect: NoSchedule
    key: apps.openyurt.io/example
    value: test-hangzhou
status:
***
```

