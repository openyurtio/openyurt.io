---
title: YurtAppOverrider
---

## Background

We already had YurtAppDaemon and YurtAppSet in the context of multi-region, but they fell short in their ability to customize configurations. To reduce coupling and for backward compatibility, we introduced YurtAppOverrider for personalized rendering, and to simplify configuration, we categorize its capabilities into basic rendering (image and replicas) and advanced rendering (arbitrary fields).

## Usage

### 1. Deploy OpenYurt

The yurt-app-overrider controller and webhook is integrated within Yurt-Manager component. Before using, OpenYurt needs to be installed and deployed. You can refer to [Deploy OpenYurt](https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components) for detailed operations.

### 2. User Stories

- Creating a YurtAppOverrider bound to an existing resource

```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
```
We ignore entries field for now and focuses on subject field in the configuration above. Subject field indicates that the created YurtAppOverrider will be bound to the resource with the specified kind and name in its namespace.

- Customized replicas and image (basic rendering)
```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
- pools:
    beijing
    hangzhou
  items:
  - image:
      containerName: nginx
      imageClaim: nginx:1.14.2
  - replicas: 3
- pools:
    shanghai
  items:
  - image:
      containerName: nginx
      imageClaim: nginx:1.13.2
  - replicas: 5
```
With the above configuration, we can configure the replicas in the Beijing Hangzhou node pool to 3 and the image version to 1.14.2, and we can configure the replicas in the Shanghai node pool to 5 and the image version to 1.13.2.

- Implementing hostPath changes (advanced rendering)
```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
- pools:
    hangzhou
  patches:
  - operation: add
    path: /spec/template/spec/volumes/-
    value:
      name: test-volume
      hostPath:
        path: /var/lib/docker
        type: Directory
  - operation: replace
    path: /spec/template/spec/containers/0/volumeMounts/-
    value:
      name: shared-dir
      mountPath: /var/lib/docker
- pools:
    beijing
  patches:
  - operation: add
    path: /spec/template/spec/volumes/-
    value:
      name: test-volume
      hostPath:
        path: /data/logs
        type: Directory
  - operation: replace
    path: /spec/template/spec/containers/0/volumeMounts/-
    value:
      name: shared-dir
      mountPath: /data/logs
```
The above patches field allows us to personalize the hostpath for different node pools. Each patch consists of operation, path, and value, and can add, remove, and replace any of the fields, with syntax rules conforming to the syntax of json-patch.

- Other features
```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppOverrider
metadata:
  namespace: default
  name: demo1
subject:
  kind: YurtAppSet
  name: yurtappset-demo
entries:
- pools:
    '*'
    '-beijing'
  patches:
  - operation: add
    path: /spec/template/spec/volumes/-
    value:
      name: foo
      configMap:
        name: configmap-{{nodepool}}
```
With the above configuration, we can add configmap corresponding to every node pool (except Beijing node pool). To simplify the configuration, we can use `'*'` to indicate all node pools, and we can add `-` in front of a node pool's name to indicate the removal of that node pool. In addition, we can match node pools with `{{nodepool}}` to do bulk configuration. (Note: If we use bulk configuration, the corresponding configmap needs to follow certain naming conventions, i.e., replace `{{nodepool}}` with the actual node pool name).