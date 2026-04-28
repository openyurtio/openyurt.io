---
title: 创建节点池
---

**OpenYurt NodePool 资源的最新版本为 apps.openyurt.io/v1beta2。**

**详情请参阅最新 [API 参考](../../reference/api_reference.md)**

## 类型

### Cloud（云）

Cloud 类型节点池用于服务拓扑特性。在云侧运行时，与 API Server 的连接被视为稳定，因此不会导致 YurtHub 缓存响应或针对 API Server 使用健康检查。

```shell
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta2
kind: NodePool
metadata:
  name: beijing
spec:
  type: Cloud
EOF
```

### Edge（边缘）

Edge 类型节点池用于在边缘侧运行工作负载。在此场景下，响应会被缓存，并且会针对 API Server 执行健康检查。

- 创建 `type=Edge` 且 `hostNetwork=true` 的节点池，同时包含 Annotation、Label 和 Taint。

```shell
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta2
kind: NodePool
metadata:
  name: hangzhou
spec:
  type: Edge
  hostNetwork: true
  annotations:
    apps.openyurt.io/example: test-hangzhou
  labels:
    apps.openyurt.io/example: test-hangzhou
  taints:
  - key: apps.openyurt.io/example
    value: test-hangzhou
    effect: NoSchedule
EOF
```

## Leader（领导者）

NodePool Hub Leader 功能支持在节点池内选举 Leader。Leader 负责处理 API Server 请求，并在收到请求时将响应缓存并分发给同一节点池内的 Follower。

### 启用 Leader

`enableLeaderElection` 用于在节点池内根据配置的策略选举 Leader。默认情况下，选举策略设置为 `random`，且 `leaderReplicas=1`。同时，Pool Scope 的元数据也会被设置到 `services/v1` 和 `discovery.k8s.io/v1/endpointslices`。

### 选举策略

选举策略决定如何从节点池中选择 Leader。当前支持的策略有 `random` 和 `mark`。

- `random` 策略：在节点池内随机选择节点成为 Leader。
- `mark` 策略：使用 `leaderNodeLabelSelector` 字段来选择 Leader。

在两种策略下，只有报告了 Ready 状态且具有 `InternalIP` 的节点才有资格被选举为 Leader。

### 副本数

Leader 副本数决定从节点池中选择多少个 Leader。

在以下场景中，为边缘节点创建了启用 Leader 选举的节点池。Leader 将根据 `leaderElectionStrategy` 随机选择。

### Pool Scope 元数据

Pool Scope 元数据决定哪些类型的资源将被 Leader 缓存，并在收到来自节点池内 Follower 的请求时重新分发。

**示例**
- 创建 `Type=Edge`、`enableLeaderElection=true` 的节点池，使用 `leaderElectionStrategy=random`，`leaderReplicas=2`。

```shell
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta2
kind: NodePool
metadata:
  name: hangzhou
spec:
  type: Edge
  enableLeaderElection: true
  interConnectivity: true
  leaderElectionStrategy: random
  leaderReplicas: 2
  poolScopeMetadata:
    - group: ""
      resource: services
      version: v1
    - group: discovery.k8s.io
      resource: endpointslices
      version: v1
EOF
```

- 创建 `Type=Edge`、`enableLeaderElection=true` 的节点池，使用 `leaderElectionStrategy=mark`，针对标记了 `nodepool.openyurt.io/leader: "true"` 的节点。

```shell
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta2
kind: NodePool
metadata:
  name: hangzhou
spec:
  type: Edge
  enableLeaderElection: true
  interConnectivity: true
  leaderElectionStrategy: mark
  leaderNodeLabelSelector:
    nodepool.openyurt.io/leader: "true"
  leaderReplicas: 2
  poolScopeMetadata:
    - group: ""
      resource: services
      version: v1
    - group: discovery.k8s.io
      resource: endpointslices
      version: v1
EOF
```

- 创建节点池后，可以检查节点池中的 Leader 状态

列出所有节点池可提供 Leader 节点数量及 Leader 选举时间的摘要信息。

```shell
$ kubectl get nodepools
NAME         TYPE    READYNODES   NOTREADYNODES   LEADERNODES   LEADERELECTIONAGE   AGE
hangzhou     Edge                                                                   81m
yurt-pool1   Cloud   1            0                                                 3d3h
yurt-pool2   Edge    2            0               1             4h48m               3d3h
yurt-pool3   Edge    2            0                                                 3d3h
```

查看 YAML 可获取 Leader 的更多详细信息，位于 `leaderEndpoints` 下。

```shell
$ kubectl get nodepools yurt-pool2 -o yaml
apiVersion: apps.openyurt.io/v1beta2
kind: NodePool
metadata:
  creationTimestamp: "2025-02-20T23:31:17Z"
  generation: 1
  labels:
    nodepool.openyurt.io/type: edge
  name: yurt-pool2
  resourceVersion: "20605"
  uid: 01f35f91-6a0f-4145-bb45-a73feb85eda1
spec:
  enableLeaderElection: true
  interConnectivity: true
  leaderElectionStrategy: random
  leaderReplicas: 1
  poolScopeMetadata:
  - group: ""
    resource: services
    version: v1
  - group: discovery.k8s.io
    resource: endpointslices
    version: v1
  type: Edge
status:
  leaderEndpoints:
  - address: 172.18.0.3
    nodeName: openyurt-e2e-test-worker2
  leaderLastElectedTime: "2025-02-23T22:31:06Z"
  leaderNum: 1
  nodes:
  - openyurt-e2e-test-worker
  - openyurt-e2e-test-worker2
  readyNodeNum: 2
  unreadyNodeNum: 0
```
