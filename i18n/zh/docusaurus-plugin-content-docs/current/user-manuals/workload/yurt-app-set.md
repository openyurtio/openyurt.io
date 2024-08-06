---
title: YurtAppSet
---

在[上一篇文章] 中我们介绍了节点池的使用，主要是节点池的创建和管理，进一步，我们开发了基于节点池的应用单元化部署能力，提高用户的运维效率。

在这篇文章中，我们将展示 yurt-app-manager 如何帮助用户管理工作负载。假设我们已经拥有一个基于原生 kubernetes 搭建起来的 OpenYurt 集群，且至少有两个节点。

## YurtAppSet 用户手册

### 创建 YurtAppSet

- 通过`yurtappset_test.yaml`创建一个 YurtAppSet，部署 nginx 应用到 np1xxxxxx, np2xxxxxx 和其他任何匹配`yurtappset.openyurt.io/type: "nginx"`标签的节点池中。另外，np2xxxxxx 中的 deployment 有不同的 replicas, image 和 label.

```yaml
apiVersion: apps.openyurt.io/v1beta1
kind: YurtAppSet
metadata:
  name: example
  namespace: default
spec:
  revisionHistoryLimit: 5
  pools:
    - np1xxxxxx
    - np2xxxxxx
  nodepoolSelector:
    matchLabels:
      yurtappset.openyurt.io/type: "nginx"
  workload:
    workloadTemplate:
      deploymentTemplate:
        metadata:
          labels:
            app: example
        spec:
          replicas: 2
          selector:
            matchLabels:
              app: example
          template:
            metadata:
              labels:
                app: example
            spec:
              containers:
                - image: nginx:1.19.1
                  imagePullPolicy: Always
                  name: nginx
    workloadTweaks:
      - pools:
          - np2xxxxxx
        tweaks:
          replicas: 3
          containerImages:
            - name: nginx
              targetImage: nginx:1.20.1
          patches:
            - path: /metadata/labels/test
              operation: add
              value: test
```

- 查看 YurtAppSet

```shell
$ kubectl get yas
NAME      TOTAL   READY   UPDATED   AGE
example   2       2       2         84s
```

### 检查由 yurt-app-manager 组件创建的 deployment

```shell
$ kubectl get deploy
NAME                                               READY   UP-TO-DATE   AVAILABLE   AGE
example-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6   2/2     2            2           3m46s
example-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p   3/3     3            3           3m46s

$ kubectl get pod -l app=example
NAME                                                              READY   STATUS    RESTARTS   AGE
example-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6-6f8fd8669ns9rq   1/1     Running   0          4m24s
example-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6-6f8fd8669sn92q   1/1     Running   0          4m24s
example-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4f7c967   1/1     Running   0          4m24s
example-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4fgw977   1/1     Running   0          4m24s
example-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4fnlvnl   1/1     Running   0          4m24s
```
