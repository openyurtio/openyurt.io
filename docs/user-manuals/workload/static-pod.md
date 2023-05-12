---
title: StaticPod
---

## Background

Static pod is a special type of pod in Kubernetes, which is managed directly by Kubelet. 
Static pods are often used in edge-cloud collaboration scenarios, such as in some AI-related applications. 
In OpenYurt, the core component, `YurtHub`, is deployed using static pod. 
Static pods are typically created through configuration files located in `/etc/kubernetes/manifests` directory, 
and upgrades are performed by manually replacing or modifying these configuration files. 
During this process, Kubelet directly handles the creation and deletion of Static pods. 
However, due to the large quantity and dispersed nature of edge devices, deploying and upgrading Static pods manually 
in edge-cloud collaboration scenarios can lead to significant operational burdens and risks of mistakes. 
Therefore, OpenYurt has introduced a new Custom Resource Definition (CRD), `StaticPod`, to enhance the management of Static pods. 
It provides capabilities such as rolling update and Over-The-Air (OTA) upgrade through a custom controller.

## Configuration

```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: StaticPod
metadata:
  # ···
spec:
  # static pod configuration file name
  staticPodManifest: xxx
  # Upgrade strategy, supporting AdvancedRollingUpdate and OTA upgrade modes
  upgradeStrategy:
    type: AdvancedRollingUpdate
    # For AdvancedRollingUpdate upgrade mode, set the maximum unavailable count during rolling update, default is 10%
    # maxUnavailable: 3
  # static pod template
  template:
  #  ···
```

## Usage

### 1）Deploy OpenYurt

The static-pod controller is integrated within `Yurt-Manager` component. 
Before using, `OpenYurt` needs to be installed and deployed. 
You can refer to [Deploy OpenYurt](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components) for detailed operations.

### 2）Create static pod

`StaticPod` Operator does not manage the initialization of the static pod, which must be done manually or via `yurtadm` tool. 
As an example, this guide creates a cluster with three worker nodes using `Kind`, and manually deploys a static pod on each node.

``` yaml
cat >  nginx.yaml << EOF
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: web
    image: nginx:1.19.1
EOF
```

### 3) Deploy `StaticPod` CR
`StaticPod` resource corresponds to static pods via its `namespace/name`. 
Therefore, we create a CR instance with `namespace:default, name:nginx` to take over these static pods.

``` yaml
cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: StaticPod
metadata:
  name: nginx
spec:
  staticPodManifest: nginx
  upgradeStrategy:
    type: AdvancedRollingUpdate
    maxUnavailable: 3
  template:
    metadata:
      name: nginx
    spec:
      containers:
      - name: web
        image: nginx:1.19.1
EOF
```

### 4) Upgrade

We can easily manage static pods with `StaticPod` resource, including upgrading static pods. 
`StaticPod` supports two upgrade modes, `AdvancedRollingUpdate` and `OTA`. 
Simply, `AdvancedRollingUpdate` mode offers rolling update that skips `not-ready` nodes; 
`OTA` mode allows users to control the upgrade process. Detailed introductions of the two modes can be found in [DaemonSet Upgrade Model](https://openyurt.io/docs/user-manuals/workload/daemon-pod-updater/#background).

#### AdvancedRollingUpdate Upgrade
- Check the static pods in the cluster before upgrade
``` shell
$ kubectl get pods | grep nginx

default  nginx-openyurt-e2e-test-worker    1/1     Running   0   3h4m   10.244.2.3   openyurt-e2e-test-worker   
default  nginx-openyurt-e2e-test-worker2   1/1     Running   0   3h4m   10.244.1.2   openyurt-e2e-test-worker2  
default  nginx-openyurt-e2e-test-worker3   1/1     Running   0   3h5m   10.244.3.3   openyurt-e2e-test-worker3  

$ kubectl describe pods nginx-openyurt-e2e-test-worker

···
Containers:
  web:
    ···
    # At this time, the version of nginx pod is 1.19.1
    Image:          nginx:1.19.1
    ···
···
```

- Modify `StaticPod` spec, upgrading the container image from nginx:1.19.1 to nginx:1.19.2
``` yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: StaticPod
metadata:
  name: nginx
spec:
    ···
    spec:
      containers:
      - name: web
        image: nginx:1.19.2

```

- Check the resource status, we can see that all three static pods have been upgraded. 
`TOTALNUMBER` represents how many static pods `StaticPod nginx` matches in this cluster.
`READYNUMBER` represents the number of ready pods, and `UPGRADEDNUMBER` indicates how many pods have been upgraded to the latest version.
``` shell
$ kubectl get staticpods nginx

NAME    AGE     TOTALNUMBER   READYNUMBER   UPGRADEDNUMBER
nginx   4m20s   3             3             3
```

- Check the corresponding static pods in the cluster
``` yaml
$ kubectl describe pods nginx-openyurt-e2e-test-worker

···
Containers:
  web:
    ···
    # At this point, the version of the nginx pod has been upgraded to 1.19.2
    Image:          nginx:1.19.2
    ···
···
```

#### OTA Upgrade

1. OTA Upgrade API

   `YurtHub` provides two OTA upgrade-related REST APIs.

   - `GET /pods`
   This interface can be used to obtain information about the pods on the node.
   - `POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade`
   This interface allows users to specify the upgrade of a particular static Pod. The path parameters `ns` and `podname` represent the namespace and name of the Pod respectively.

2. OTA Upgrade Process

   - In OTA upgrades, the upgrade status is represented by the `PodNeedUpgrade` condition field in pod status. When the value is `true`, it means there is upgradable version available. Otherwise, it cannot be upgraded. 
   - Static pod upgrades can be achieved by actively calling the upgrade API interface above.





















