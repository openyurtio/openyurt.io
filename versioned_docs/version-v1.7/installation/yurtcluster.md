---
title: YurtCluster
---

## 1. Background

When you are ready to use OpenYurt in production environment, it is officially recommended to use [YurtCluster Operator](https://github.com/openyurtio/yurtcluster-operator) . The YurtCluster Operator provides a cloud-native, declarative Cluster API that automatically deploys and configures OpenYurt-related components on standard Kubernetes clusters based on declared configurations.YurtCluster Operator provides a cloud-native cluster API, which can automatically deploy and configure OpenYurt-related components on a standard Kubernetes cluster according to the declared configuration, so that it has the ability to provide edge computing services (that is, one-click conversion of ordinary clusters to OpenYurt edge clusters) , and is also responsible for dynamically tracking and managing the lifecycle of OpenYurt clusters, including cluster expansion, upgrade, etc., to ensure that edge clusters are always running in the best status.

## 2. Installation Process

### 2.1 Preparation

Before starting, you need to prepare a normal Kubernetes cluster. If you don't have an available cluster yet, you can use tools such as [kubeadm](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/) to build a new cluster.
Of course, if you just want to experience the related functions of the YurtCluster Operator, you can also use the community-recommended [kind](https://kind.sigs.k8s.io/docs/), [minikube](https://minikube.sigs.k8s.io/) and other tools to quickly pull up a Kubernetes cluster for local development and testing.

This article only introduces the general method of pulling up a cluster through the kind tool. For the use of other tools, please refer to their corresponding official documentation.

kind depends on Docker software, please make sure that the [Docker](https://docs.docker.com/get-docker/) program has been correctly installed on your machine. For the installation of [kind, please refer to the documentation](https://docs.docker.com/get-docker/) kind.sigs.k8s.io/docs/user/quick-start/#installation).

Prepare a `kind-cluster.yaml` file that defines a "1 control-plane + 3 worker" Kubernetes cluster:



```yaml
apiVersion: kind.x-k8s.io/v1alpha4
kind: Cluster
nodes:
- role: control-plane
- role: worker
- role: worker
- role: worker
```

Execute the following command to initialize the cluster: 

```bash
# kind create cluster --config kind-cluster.yaml

Creating cluster "kind" ...
 ✓ Ensuring node image (kindest/node:v1.21.1) 🖼 
 ✓ Preparing nodes 📦 📦 📦 📦  
 ✓ Writing configuration 📜 
 ✓ Starting control-plane 🕹️ 
 ✓ Installing CNI 🔌 
 ✓ Installing StorageClass 💾 
 ✓ Joining worker nodes 🚜 
Set kubectl context to "kind-kind"
You can now use your cluster with:

kubectl cluster-info --context kind-kind

Have a nice day! 👋
```

Check if the cluster is Ready:



```sh
# kubectl get node

NAME                 STATUS   ROLES                  AGE     VERSION
kind-control-plane   Ready    control-plane,master   6m30s   v1.21.1
kind-worker          Ready    <none>                 5m56s   v1.21.1
kind-worker2         Ready    <none>                 5m57s   v1.21.1
kind-worker3         Ready    <none>                 5m57s   v1.21.1
```

### 2.2 Deploy the YurtCluster Operator

YurtCluster Operator provides the Helm Chart deployment package, which can be deployed with one click through Helm.

YurtCluster Operator is the core management and control component of the cluster life cycle and needs to be deployed in the `kube-system` namespace:

```bash
# git clone https://github.com/openyurtio/yurtcluster-operator
# cd yurtcluster-operator/charts
# helm install yurtcluster-operator . -n kube-system

NAME: yurtcluster-operator
LAST DEPLOYED: Tue Dec 28 10:45:28 2021
NAMESPACE: kube-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

YurtCluster Operator adopts a distributed architecture, including a manager component (supporting multi-copy high availability deployment) and an agent component running on each node.
The manager component is responsible for the unified management of the installation and deployment of cluster components and the status update of YurtCluster. The agent focuses on the node configuration (transition) tasks of this node.
The helm chart of YurtCluster Operator contains sub-charts of both YurtAppManager and YurtControllerManager, which are the core components of the OpenYurt cluster and will be installed synchronously.

Check if the YurtCluster component is ready (you will see output similar to the following in the ready state):

```bash
# kubectl get pod -n kube-system | grep yurt

yurt-app-manager-7998648c47-5s9tp            1/1     Running   0          4m45s
yurt-app-manager-7998648c47-bdkfd            1/1     Running   0          4m45s
yurt-app-manager-7998648c47-rg8zn            1/1     Running   0          4m45s
yurt-controller-manager-868b85cc4b-5ktf2     1/1     Running   0          4m45s
yurt-controller-manager-868b85cc4b-gkwlf     1/1     Running   0          4m45s
yurt-controller-manager-868b85cc4b-pwwmx     1/1     Running   0          4m45s
yurt-operator-agent-2sx77                    1/1     Running   0          4m45s
yurt-operator-agent-lhqgm                    1/1     Running   0          4m45s
yurt-operator-agent-tfk9q                    1/1     Running   0          4m45s
yurt-operator-agent-x9rrs                    1/1     Running   0          4m45s
yurt-operator-manager-7476dc9b4-v28tx        1/1     Running   0          4m45s
```

### 2.3 Tag node type
In order to verify the node conversion capability of YurtCluster Operator, it is necessary to group nodes in advance. This article groups nodes based on the following table:

| NodeName           | Role         | Label                       |
| ------------------ | ------------ | --------------------------- |
| kind-control-plane | ControlPlane | -                           |
| kind-worker        | CloudNode    | openyurt.io/node-type=cloud |
| kind-worker2       | EdgeNode     | openyurt.io/node-type=edge  |
| kind-worker3       | EdgeNode     | openyurt.io/node-type=edge  |

```bash
# kubectl label node kind-worker openyurt.io/node-type=cloud
# kubectl label node kind-worker2 openyurt.io/node-type=edge
# kubectl label node kind-worker3 openyurt.io/node-type=edge
```

### 2.4 Deploy the YurtCluster CR object

YurtCluster is a custom Kubernetes CRD that defines the desired state of the OpenYurt cluster, including the OpenYurt cluster component warehouse address, the OpenYurt version number used, the cloud node set, the edge node set, and the related configurations of key system components YurtHub and YurtTunnel, full Scheme definition Please refer to the source code [API definition](https://github.com/openyurtio/yurtcluster-operator/blob/main/api/v1alpha1/yurtcluster_types.go) .



This article takes the deployment of OpenYurt v0.5.0 as an example, and prepares the CR definition `yurtcluster.yaml` as follows:

```yaml
apiVersion: operator.openyurt.io/v1alpha1
kind: YurtCluster
metadata:
  name: cluster
spec:
  yurtVersion: "v0.5.0"
  cloudNodes:
    selector:
      nodeSelectorTerms:
        - matchExpressions:
            - key: openyurt.io/node-type
              operator: In
              values:
                - "cloud"
  edgeNodes:
    selector:
      nodeSelectorTerms:
        - matchExpressions:
            - key: openyurt.io/node-type
              operator: In
              values:
                - "edge"
```

Note: YurtCluster is a singleton in the cluster, only the YurtCluster CR named `cluster` will be received and processed by the system.

In the YurtCluster CR above, it is defined that CloudNode needs to have the label `openyurt.io/node-type=cloud`, and EdgeNode needs to have the label `openyurt.io/node-type=edge`.

Deploy YurtCluster CR to the cluster:

```bash
# kubectl apply -f yurtcluster.yaml

yurtcluster.operator.openyurt.io/cluster created
```

Check YurtCluster status (yurtcluster can be abbreviated as yc):

```bash
# kubectl get yc

NAME      PHASE
cluster   Converting
```

As can be seen, the cluster is in the process of converting the configuration, and when the PHASE turns to Succeed, the configuration is complete.

```bash
# kubectl get yc

NAME      PHASE
cluster   Succeed
```

Conversion details can be obtained by checking the Status field of YurtCluster:

```bash
# kubectl get yc cluster -oyaml

...
status:
  nodeConditions:
    kind-worker:
      lastTransitionTime: "2021-12-28T03:34:40Z"
      message: Node was converted into CloudNode successfully
      observedGeneration: 2
      reason: CloudNodeConvert
      status: "True"
    kind-worker2:
      lastTransitionTime: "2021-12-28T03:35:05Z"
      message: Node was converted into EdgeNode successfully
      observedGeneration: 2
      reason: EdgeNodeConvert
      status: "True"
    kind-worker3:
      lastTransitionTime: "2021-12-28T03:35:04Z"
      message: Node was converted into EdgeNode successfully
      observedGeneration: 2
      reason: EdgeNodeConvert
      status: "True"
  observedGeneration: 2
  phase: Succeed
```

As expected, kind-worker is configured as CloudNode, kind-worker2 and kind-worker3 are configured as EdgeNode.



Check if yurthub has been fully started:

```bash
# kubectl get pod -n kube-system | grep yurt-hub

yurt-hub-kind-worker                         1/1     Running   0          8m
yurt-hub-kind-worker2                        1/1     Running   0          8m
yurt-hub-kind-worker3                        1/1     Running   0          8m
```



Check if YurtTunnel has been fully started:

```bash
# kubectl get pod -n kube-system | grep yurt-tunnel

yurt-tunnel-agent-5fxz6                      1/1     Running   0          8m
yurt-tunnel-agent-vfkmd                      1/1     Running   0          8m
yurt-tunnel-server-f7md8                     1/1     Running   0          8m
```

## 3. Verify the cluster

### 3.1 Pull edge node pod logs (verify that Tunnel is working correctly)

```bash
# kubectl logs -f -n kube-system yurt-tunnel-agent-5fxz6

I1228 03:34:26.670053       1 start.go:51] yurttunnel-agent version: projectinfo.Info{GitVersion:"v0.5.0", GitCommit:"71d1da7", BuildDate:"2021-09-29T02:50:58Z", GoVersion:"go1.15.15", Compiler:"gc", Platform:"linux/amd64"}
I1228 03:34:26.670629       1 options.go:136] ipv4=172.18.0.3&host=kind-worker2 is set for agent identifies
I1228 03:34:26.670791       1 options.go:141] neither --kube-config nor --apiserver-addr is set, will use /etc/kubernetes/kubelet.conf as the kubeconfig
I1228 03:34:26.670820       1 options.go:145] create the clientset based on the kubeconfig(/etc/kubernetes/kubelet.conf).
I1228 03:34:26.723640       1 start.go:87] yurttunnel-server address: 172.18.0.5:32444
W1228 03:34:26.724153       1 filestore_wrapper.go:49] unexpected error occurred when loading the certificate: no cert/key files read at "/var/lib/yurttunnel-agent/pki/yurttunnel-agent-current.pem", ("", "") or ("/var/lib/yurttunnel-agent/pki", "/var/lib/yurttunnel-agent/pki"), will regenerate it
I1228 03:34:31.724563       1 start.go:106] certificate yurttunnel-agent ok
I1228 03:34:31.725038       1 anpagent.go:57] start serving grpc request redirected from yurttunnel-server: 172.18.0.5:32444
I1228 03:34:31.725567       1 util.go:71] "start handling meta requests(metrics/pprof)" server endpoint="127.0.0.1:10266"
I1228 03:34:31.734083       1 client.go:224] "Connect to" server="6e11745a-79bb-4486-8222-7f75d7697e10"
I1228 03:34:31.734122       1 clientset.go:190] "sync added client connecting to proxy server" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"
I1228 03:34:31.734146       1 client.go:326] "Start serving" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"
I1228 06:37:06.772662       1 client.go:412] received dial request to tcp:172.18.0.3:10250 with random=7660323324116104765 and connID=1
```

The logs can be obtained, which means that the tunnel component is working correctly.

### 3.2 Pull YurtHub component logs (verify that YurtHub is working correctly)

```bash
# kubectl logs -f -n kube-system yurt-hub-kind-worker

...
I1228 03:34:34.186522       1 util.go:232] start proxying: get /api/v1/services?limit=500&resourceVersion=0, in flight requests: 4
I1228 03:34:34.187236       1 util.go:215] kubelet list nodes: /api/v1/nodes?fieldSelector=metadata.name%3Dkind-worker&limit=500&resourceVersion=0 with status code 200, spent 8.468841ms
I1228 03:34:34.197137       1 util.go:232] start proxying: get /api/v1/nodes?allowWatchBookmarks=true&fieldSelector=metadata.name%3Dkind-worker&resourceVersion=14139&timeout=8m26s&timeoutSeconds=506&watch=true, in flight requests: 4
I1228 03:34:34.207398       1 handler.go:83] mutate master service into ClusterIP:Port=169.254.2.1:10268 for request kubelet list services: https://kind-control-plane:6443/api/v1/services?limit=500&resourceVersion=0
I1228 03:34:34.214583       1 util.go:215] kubelet list services: /api/v1/services?limit=500&resourceVersion=0 with status code 200, spent 27.805893ms
I1228 03:34:34.216177       1 util.go:232] start proxying: get /api/v1/services?allowWatchBookmarks=true&resourceVersion=13727&timeout=8m14s&timeoutSeconds=494&watch=true, in flight requests: 4
...
```

If you see a log similar to the above, it means that YurtHub has successfully proxied the kubelet request.

## 4. Clean up

Execute the following command to clean up the OpenYurt cluster:

```bash
# kubectl delete yc cluster
# helm uninstall yurtcluster-operator	-n kube-system
```




