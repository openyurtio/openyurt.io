---
title: Kube-Controller-Manager Adjustment
---

## 1.Background

In the cloud-edge collaboration scenario, the edge node is connected to the central control plane through the public network, and the network connection may be unstable. The k8s original node life cycle management logic is not suitable for this unstable network condition.
OpenYurt uses a custom `nodelifecycle` controller to manage the node's life cycle, so we need to disable the native `nodelifecycle` controller in Kube-Controller-Manager to avoid conflicts.

### 2. Disable nodelifecycle controller

We can adjust the `--controllers` configurations of `kube-controller-manager` to disable `nodelifecycle` controller。If the original configuration is like `--controllers=*,bootstrapsigner,tokencleaner`，we can adjust it to `--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner` to achieve this。

If `kube-controller-manager` is deployd as static pod at master node，we can modify the file `/etc/kubernetes/manifests/kube-controller-manager.yaml` to achieve this。After modification，`kube-controller-manager` will be restarted automatically。

```bash
$ vi /etc/kubernetes/manifests/kube-controller-manager.yaml
apiVersion: v1
kind: Pod
...
spec:
  containers:
  - command:
    - kube-controller-manager
    - --allocate-node-cidrs=true
    - --authentication-kubeconfig=/etc/kubernetes/controller-manager.conf
    ...
    - --controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner #disable nodelifecycle controller
    ...
```
