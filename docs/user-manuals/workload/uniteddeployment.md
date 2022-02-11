---
title: UnitedDeployment
---




在[上一篇文章](./node-pool-management.md) 中我们介绍了节点池的使用，主要是节点池的创建和管理，进一步，我们开发了基于节点池的应用单元化部署能力，提高用户的运维效率。

在这篇文章中，我们将展示yurt-app-manager如何帮助用户管理工作负载。假设我们已经拥有一个基于原生kubernetes搭建起来的OpenYurt集群，且至少有两个节点。

## UnitedDeployment用户手册

### 创建UnitedDeployment

- 利用deployment template创建一个UnitedDeployment

```shell
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: UnitedDeployment
metadata:
  labels:
    controller-tools.k8s.io: "1.0"
  name: ud-test
spec:
  selector:
    matchLabels:
      app: ud-test
  workloadTemplate:
    deploymentTemplate:
      metadata:
        labels:
          app: ud-test
      spec:
        template:
          metadata:
            labels:
              app: ud-test
          spec:
            containers:
              - name: nginx
                image: nginx:1.19.3
            tolerations:
              - operator: Equal
                key: node-role.openyurt.io/edge
                effect: NoSchedule
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
EOF
```

- 查看UnitedDeployment

```shell
$ kubectl get ud

NAME      READY   WORKLOADTEMPLATE   AGE
ud-test   3       Deployment         120m
```

### 检查由yurt-app-manager组件创建的deployment

```shell
$ kubectl get deploy

NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
ud-test-beijing-fp58z    1/1     1            1           122m
ud-test-hangzhou-xv454   2/2     2            2           122m
$ kubectl get pod -l app=ud-test

  NAME                                      READY   STATUS    RESTARTS   AGE
ud-test-beijing-fp58z-787d5b6b54-g4jk6    1/1     Running   0          100m
ud-test-hangzhou-xv454-5cd9c4f6b5-b5tsr   1/1     Running   0          124m
ud-test-hangzhou-xv454-5cd9c4f6b5-gmbgp   1/1     Running   0          124m
```



### 为UnitedDeployment添加patch功能

- 在文件uniteddeployment_deployment_test.yaml中添加patch字段，如下所示，文件36到41行

```shell
$ kubectl get ud ud-test -o yaml
   
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

- patch能够使得由UnitedDeployment创建的位于北京节点池的deployment和pod中nginx镜像版本为1.19.0，而其他地区的nginx镜像版本为1.19.3。

```shell
$ kubectl get deploy ud-test-beijing-fp58z -o yaml

containers:
  - image: nginx:1.19.0
$ kubectl get deploy ud-test-hangzhou-xv454 -o yaml

containers:
  - image: nginx:1.19.3
```

- 删除后，所有由UnitedDeployment创建的pod又恢复使用相同的镜像nginx1.19.3

```shell
$ kubectl get pod ud-test-beijing-fp58z-787d5b6b54-g4jk6 -o yaml

containers:
  - image: nginx:1.19.3
$ kubectl get pod ud-test-hangzhou-xv454-5cd9c4f6b5-b5tsr -o yaml
containers:
  - image: nginx:1.19.3
```

- 结论：Patch功能解决了nodepool单属性的升级和应用完整发布。

