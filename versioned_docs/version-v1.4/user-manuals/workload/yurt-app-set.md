---
title: YurtAppSet
---

In [the previous article](./node-pool-management.md) we introduced the use of `NodePool`, mainly the creation and management of `NodePool`. 
Further, we developed the ability to deploy applications unitized based on `NodePool` to improve the efficiency of users' operations.

In this article, we will show how `yurt-app-manager` can help users manage their workload. Assume we already have an OpenYurt cluster built on 
native kubernetes with at least two nodes.


### 1) Create YurtAppSet

- Create `YurtAppSet` by `yurtappset_test.yaml`

```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppSet
metadata:
  labels:
    controller-tools.k8s.io: "1.0"
  name: yas-test
spec:
  selector:
    matchLabels:
      app: yas-test
  workloadTemplate:
    deploymentTemplate:
      metadata:
        labels:
          app: yas-test
      spec:
        template:
          metadata:
            labels:
              app: yas-test
          spec:
            containers:
              - name: nginx
                image: nginx:1.19.3
  topology:
    pools:
    - name: beijing 
      nodeSelectorTerm:
        matchExpressions:
        - key: apps.openyurt.io/nodepool
          operator: In
          values:
          - beijing 
      replicas: 1
    - name: hangzhou 
      nodeSelectorTerm:
        matchExpressions:
        - key: apps.openyurt.io/nodepool
          operator: In
          values:
          - hangzhou 
      replicas: 2
      tolerations:
      - effect: NoSchedule
        key: apps.openyurt.io/example
        operator: Exists
  revisionHistoryLimit: 5 
```

- Check `YurtAppSet`

```shell
$ kubectl get yas
NAME       READY   WORKLOADTEMPLATE   AGE
yas-test   3       Deployment         43s
```


### 2) Check the deployments created by yurt-app-manager

```shell
$ kubectl get deploy
NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
yas-test-beijing-k5st4    1/1     1            1           54s
yas-test-hangzhou-2jkj5   2/2     2            2           54s

$ kubectl get pod -l app=yas-test
NAME                                       READY   STATUS    RESTARTS   AGE
yas-test-beijing-k5st4-56bc98cc7d-h7h86    1/1     Running   0          72s
yas-test-hangzhou-2jkj5-64588c484b-8mvn8   1/1     Running   0          72s
yas-test-hangzhou-2jkj5-64588c484b-vx85t   1/1     Running   0          72s
```


### 3) Add patch to YurtAppSet

- Add the patch field to the file `yurtappset_test.yaml` as follows, lines 36 to 41 of the file

```shell
$ kubectl get yas yas-test -o yaml
   
  topology:
    pools:
    - name: beijing 
      nodeSelectorTerm:
        matchExpressions:
        - key: apps.openyurt.io/nodepool
          operator: In
          values:
          - beijing 
      replicas: 1
      patch:
        spec:
          template:
            spec:
              containers:
                - name: nginx
                  image: nginx:1.19.0
    - name: hangzhou 
      nodeSelectorTerm:
        matchExpressions:
        - key: apps.openyurt.io/nodepool
          operator: In
          values:
          - hangzhou 
      replicas: 2
      tolerations:
  *** 
```

- This updates the nginx image version to 1.19.0 in the deployments and pods in Beijing NodePool, while keeping the nginx image version at 1.19.3 for the other regions

```shell
$ kubectl get deploy yas-test-beijing-k5st4 -o yaml
containers:
  - image: nginx:1.19.0

$ kubectl get deploy yas-test-hangzhou-2jkj5 -o yaml
containers:
  - image: nginx:1.19.3
```

- After removing the patch, all pods created by YurtAppSet revert back to nginx1.19.3

```shell
$ kubectl get pod yas-test-beijing-k5st4-974b6958c-t2kfn -o yaml
containers:
  - image: nginx:1.19.3

$ kubectl get pod yas-test-hangzhou-2jkj5-64588c484b-8mvn8 -o yaml
containers:
  - image: nginx:1.19.3
```

- Conclusion: Patch solves the upgrade of the NodePool's single attribute and application release.
