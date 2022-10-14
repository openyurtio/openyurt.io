---
title: DaemonSet Upgrade Model
---

## Background

In edge scenarios, the native DaemonSet upgrade model does not perfectly satisfy existing requirements. In the case of cloud-edge network disconnection, DaemonSet upgrade process may be blocked. In addition, the native upgrade model does not provide any upgrade operation API, and users cannot control the application upgrade on their own.

In order to address the above problems, we extend the native DaemonSet upgrade model by adding a custom controller `daemonPodUpdater-controller`, providing Auto and OTA two upgrade model.
- Auto: Solve the DaemonSet upgrade process blocking problem which caused by node `Not-Ready` when the cloud-edge is disconnected. During auto upgrade, `not-ready` nodes will be ignored. And when `Not-Ready` nodes turn to `Ready`, upgrade process will be completed automatically.
- OTA: Add pod annotation `PodNeedUpgrade` which indicates the upgrade availability information. YurtHub OTA component can use this annotation to determine if a new version of DaemonSet application exists.

## Usage：

### 1）Install Yurt-Controller-Manager Components
`daemonPodUpdater-controller` is integrated in `Yurt-Controller-Manager`, and it needs to be installed before using Auto or OTA Upgrade Model, you can refer to [Deploying OpenYurt Components](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components)

### 2）Auto Upgrade Model
- Create daemonset instance
```shell
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  annotations:
    apps.openyurt.io/update-strategy: auto
spec:
  selector:
    matchLabels:
      app: nginx
  updateStrategy:
    type: OnDelete
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.19.4

EOF
```

- Get nginx-daemonset pods
```shell
$ kubectl get pods | grep nginx-daemonset

nginx-daemonset-bv5jg   1/1     Running   0          21m   10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-fhsr6   1/1     Running   0          21m   10.244.1.2   openyurt-e2e-test-worker    <none>           <none>
nginx-daemonset-lmmtd   1/1     Running   0          21m   10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>
```

- Simulate cloud-edge network disconnection: assume that nodes `openyurt-e2e-test-worker2` and `openyurt-e2e-test-worker3` are disconnected from the cloud node. This example uses `Kind` to create the cluster, so the network disconnection can be simulated by removing the containers from the virtual bridge.
```shell
$ docker network disconnect kind openyurt-e2e-test-worker2
$ docker network disconnect kind openyurt-e2e-test-worker3

$ kubectl get nodes -o wide
AME                              STATUS     ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME
openyurt-e2e-test-control-plane   Ready      control-plane,master   36m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker          Ready      <none>                 35m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker2         NotReady   <none>                 35m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker3         NotReady   <none>                 35m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
```

- Update daemonset: change the container image from nginx:1.19.4 to nginx:1.19.5
```shell
***
containers:
      - name: nginx
        image: nginx:1.19.5
***
```

- Get pods: the old pod `default/nginx-daemonset-fhsr6` on `openyurt-e2e-test-worker` node has been deleted and the new pod `default/nginx-daemonset-slp5t` has been created; the pods on the two disconnected nodes will not be upgraded temporarily

```shell
nginx-daemonset-bv5jg   1/1     Running   0          33m     10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-lmmtd   1/1     Running   0          33m     10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>
nginx-daemonset-slp5t   1/1     Running   0          5m54s   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>
```

- Restore network connectivity of nodes
```shell
$ docker network connect kind openyurt-e2e-test-worker2
$ docker network connect kind openyurt-e2e-test-worker3

$ kubectl get nodes -o wide
NAME                              STATUS   ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME
openyurt-e2e-test-control-plane   Ready    control-plane,master   49m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker          Ready    <none>                 48m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker2         Ready    <none>                 48m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
openyurt-e2e-test-worker3         Ready    <none>                 48m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10
```

- Get pods: daemonset pods on all nodes have been upgraded
```shell
nginx-daemonset-kbkf6   1/1     Running   0          88s   10.244.3.3   openyurt-e2e-test-worker2   <none>           <none>
nginx-daemonset-scgtv   1/1     Running   0          51s   10.244.2.3   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-slp5t   1/1     Running   0          11m   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>
```

- Check pods image version: all pods have been upgraded to nginx:1.19.5
```shell
***
Containers:
  nginx:
    Container ID:   containerd://f7d4b3f1257a0d1d8da862671c11cb094f9fba1ba0041b7a5f783d9c9e4d8449
    Image:          nginx:1.19.5
    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Fri, 14 Oct 2022 14:21:25 +0800
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-wrhj8 (ro)
***
```

### 3）OTA Upgrade Model
- Create daemonset instance
```shell
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  annotations:
    apps.openyurt.io/update-strategy: ota
spec:
  selector:
    matchLabels:
      app: nginx
  updateStrategy:
    type: OnDelete
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.19.4

EOF

# get nginx-daemonset pods
$ kubectl get pods -o wide | grep nginx-daemonset
nginx-daemonset-bwzss   1/1     Running   0          92s   10.244.3.4   openyurt-e2e-test-worker2   <none>           <none>
nginx-daemonset-ppf9p   1/1     Running   0          92s   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>
nginx-daemonset-rgp9h   1/1     Running   0          92s   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>
```

- Check pod annotation `PodNeedUpgrade`: take pod `nginx-daemonset-bwzss` on node `openyurt-e2e-test-worker2` as an example
```shell
$ kubectl describe pods nginx-daemonset-bwzss

***
Conditions:
  Type              Status
  PodNeedUpgrade    False
***
```

- Update daemonset: change the container image from nginx:1.19.4 to nginx:1.19.5
```shell
***
containers:
      - name: nginx
        image: nginx:1.19.5
***
```

- Check pod annotation `PodNeedUpgrade` again
```shell
$ kubectl describe pods nginx-daemonset-bwzss

***
Conditions:
  Type              Status
  PodNeedUpgrade    True
***
```

- Execute OTA upgrade
```shell
# call Upgrade API
$ curl -X POST 127.0.0.1:10267/openyurt.io/v1/namespaces/default/pods/nginx-daemonset-bwzss/upgrade
Start updating pod default/nginx-daemonset-bwzss
```

- Check upgrade result: pod `nginx-daemonset-bwzss` on node `openyurt-e2e-test-worker2` has been deleted and new pod `nginx-daemonset-vrvhn` has been created
```shell
# check result
$ kubectl get pods -o wide | grep nginx-daemonset
nginx-daemonset-ppf9p   1/1     Running   0          15m   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>
nginx-daemonset-rgp9h   1/1     Running   0          15m   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>
nginx-daemonset-vrvhn   1/1     Running   0          63s   10.244.3.5   openyurt-e2e-test-worker2   <none>           <none>

# check pod container image
$ kubectl describe pods nginx-daemonset-vrvhn
***
Containers:
  nginx:
    Container ID:   containerd://18df6aa88076639353ea0b3d87f340cd4c86ab27a7f154bce06345e9764c997a
    Image:          nginx:1.19.5
    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Fri, 14 Oct 2022 16:25:20 +0800
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-p6kjh (ro)
***
```