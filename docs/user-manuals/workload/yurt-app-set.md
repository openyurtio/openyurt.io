---
title: YurtAppSet
---

In [the previous article](../node-pool-management/node-pool-management-overview.md) we introduced the use of `NodePool`, mainly the creation and management of `NodePool`.
Further, we developed the ability to deploy applications unitized based on `NodePool` to improve the efficiency of users' operations.

In this article, we will show how `yurt-app-set` can help users manage their workload. Assume we already have an OpenYurt cluster built on
native kubernetes with at least two nodes.

### 1) Create YurtAppSet

- Create `YurtAppSet` by `yurtappset_test.yaml` to deploy nginx to nodepool np1xxxxxx, np2xxxxxx and any nodepool match label `yurtappset.openyurt.io/type: "nginx"`. Make deployment in nodepool np2xxxxxx has different replicas, image version and labels.

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
            - path: /metadata/labels
              operation: add
              value: {"foo": "bar"}
```

- Check `YurtAppSet`

```shell
$ kubectl get yas
NAME      TOTAL   READY   UPDATED   AGE
example   2       2       2         84s
```

### 2) Check the deployments created by yurt-app-manager

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
