---
title: YurtAppSet
---




在[上一篇文章](./node-pool-management.md) 中我们介绍了节点池的使用，主要是节点池的创建和管理，进一步，我们开发了基于节点池的应用单元化部署能力，提高用户的运维效率。

在这篇文章中，我们将展示yurt-app-manager如何帮助用户管理工作负载。假设我们已经拥有一个基于原生kubernetes搭建起来的OpenYurt集群，且至少有两个节点。

## YurtAppSet用户手册

### 创建YurtAppSet

- 通过`yurtappset_test.yaml`创建一个YurtAppSet

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

- 查看YurtAppSet

```shell
$ kubectl get yas

NAME       READY   WORKLOADTEMPLATE   AGE
yas-test   3       Deployment         43s
```

### 检查由yurt-app-manager组件创建的deployment

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



### 为YurtAppSet添加patch功能

- 在文件yurtappset_test.yaml中添加patch字段，如下所示，文件36到41行

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

- patch能够使得由YurtAppSet创建的位于北京节点池的deployment和pod中nginx镜像版本为1.19.0，而其他地区的nginx镜像版本为1.19.3。

```shell
$ kubectl get deploy yas-test-beijing-k5st4 -o yaml

containers:
  - image: nginx:1.19.0
$ kubectl get deploy yas-test-hangzhou-2jkj5 -o yaml

containers:
  - image: nginx:1.19.3
```

- 删除后，所有由YurtAppSet创建的pod又恢复使用相同的镜像nginx1.19.3

```shell
$ kubectl get pod yas-test-beijing-k5st4-974b6958c-t2kfn -o yaml

containers:
  - image: nginx:1.19.3
$ kubectl get pod yas-test-hangzhou-2jkj5-64588c484b-8mvn8 -o yaml
containers:
  - image: nginx:1.19.3
```

- 结论：Patch功能解决了nodepool单属性的升级和应用完整发布。

