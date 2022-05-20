---
title: YurtAppDaemon
---

## 背景介绍

在边缘场景中，来自同一区域的边缘节点被分配到同一个节点池中，此时，一般需要在节点池维度部署一些系统组件，例如CoreDNS。 创建节点池时，我们希望自动创建这些系统组件，而无需任何手动操作。



YurtAppDaemon 确保所有或部分节点池以 Deployment 或 StatefulSet 作为模板运行副本。 随着节点池的创建，这些子部署或状态集也被添加到集群中，子部署或状态集的创建/更新由 YurtAppDaemon 控制器实现。 这些子 Deployments 或 Statefulsets 将在节点池 从集群中移除时被回收，删除 YurtAppDaemon CR 将清理它创建的 Deployments 或 StatefulSets。 YurtAppDaemon 的行为类似于 K8S Daemonset，不同之处在于 YurtAppDaemon 从节点池维度自动创建 K8S 工作负载。




![img](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641999454831-b8f2f9f4-c715-4063-8444-b0af22830092.png)

## 用户使用：

- 创建test1节点池

```shell
cat <<EOF | kubectl apply -f -


apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: test1
spec:
  selector:
    matchLabels:
      apps.openyurt.io/nodepool: test1
  type: Edge


EOF
```

- 创建test2节点池

```shell
cat <<EOF | kubectl apply -f -

apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: test2
spec:
  selector:
    matchLabels:
      apps.openyurt.io/nodepool: test2
  type: Edge

EOF
```

- 将节点加入到节点池

```shell
 kubectl label node cn-beijing.172.23.142.31 apps.openyurt.io/desired-nodepool=test1
 kubectl label node cn-beijing.172.23.142.32 apps.openyurt.io/desired-nodepool=test1

 kubectl label node cn-beijing.172.23.142.34 apps.openyurt.io/desired-nodepool=test2
 kubectl label node cn-beijing.172.23.142.35 apps.openyurt.io/desired-nodepool=test2
```

- 创建YurtAppDaemon

```shell
cat <<EOF | kubectl apply -f -

apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppDaemon
metadata:
  name: daemon-1
  namespace: default
spec:
  selector:
    matchLabels:
      app: daemon-1

  workloadTemplate:
    deploymentTemplate:
      metadata:
        labels:
          app: daemon-1
      spec:
        replicas: 1
        selector:
          matchLabels:
            app: daemon-1
        template:
          metadata:
            labels:
              app: daemon-1
          spec:
            containers:
            - image: nginx:1.18.0
              imagePullPolicy: Always
              name: nginx
  nodepoolSelector:
    matchLabels:
      yurtappdaemon.openyurt.io/type: "nginx"

EOF
```

- 为test1节点池打标签

```shell
kubectl label np test1 yurtappdaemon.openyurt.io/type=nginx

# Check the Deployment
kubectl get deployments.apps

# Check the Deployment nodeselector

# Check the Pod
```

- 为test2节点池打标签

```shell
kubectl label np test2 yurtappdaemon.openyurt.io/type=nginx

# Check the Deployment
kubectl get deployments.apps

# Check the Deployment nodeselector

# Check the Pod
```

- 改变YurtAppDaemon

```shell
# Change yurtappdaemon workloadTemplate replicas to 2

# Change yurtappdaemon workloadTemplate image to nginx:1.19.0

# Check the Pod
```

- 移除节点池标签

```shell
# Remove the nodepool test1 label
kubectl label np test1 yurtappdaemon.openyurt.io/type-

# Check the Deployment

# Check the Pod

# Remove the nodepool test2 label
kubectl label np test2 yurtappdaemon.openyurt.io/type-

# Check the Deployment

# Check the Pod
```

