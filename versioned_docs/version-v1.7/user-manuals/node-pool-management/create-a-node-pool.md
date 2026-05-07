---
title: Create a node pool
---

**The latest version of OpenYurt NodePool resource is apps.openyurt.io/v1beta2.**

**Please refer to the latest [API Reference](../../reference/api_reference.md) for details**

## Types

### Cloud
The cloud nodepool type is used for service topology feature. When running on the cloud side, the connectivity with the API server is considered stable so this will not cause YurtHub to cache responses or use the health checker against the API server.

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

### Edge
The edge nodepool type is used to workloads running as the name suggests on the edge. In this scenario, responses are cached, and health checks with the API server are used.

- Create a nodepool with `type=Edge` and `hostNetwork=true`, also include Annotation, Label, Taint.

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

## Leaders
The Nodepool hub leader feature enables leaders to be elected. Leaders are responsible for handling API server requests, caching and redistributing responses to followers within the same nodepool upon request.

### Enabling leaders
The `enableLeaderElection` causes leaders to be elected within the nodepool based on the strategy configured. By default, the election strategy is set to  `random` with `leaderReplicas=1`. Pool scope metadata will also be set to `services/v1` and `discovery.k8s.io/v1/endpointslices`

### Election Strategy
Election strategy determines how leaders are selected from within the nodepool. The current supported strategies are `random` and `mark`.

The random strategy picks nodes within the pool randomly to become a leader. Whereas the mark strategy uses the `leaderNodeLabelSelector` field to select leaders.

In both strategies, only leaders that are reporting a ready status with an `InternalIP` will be eligible to be elected. 

### Replicas
Leader replicas determine how many leaders will be selected from the nodepool.

In the following scenario, a nodepool is created for the edge with leader elections. Leaders will be selected randomly per the leaderElectionStrategy.

### Pool Scope Metadata
Pool scope metadata determines the types of resources that will be cached and redistributed upon request to followers by the leader within the nodepool.

**Examples**
- Create a nodepool `Type=Edge`, `enableLeaderElection=true` using `leaderElectionStrategy=random` with `leaderReplicas=2`. 

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

- Create a nodepool `Type=Edge`, `enableLeaderElection=true` using `leaderElectionStrategy=mark` for nodes with labelled `nodepool.openyurt.io/leader: "true"`. 
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
  leaderNodeLabelSelector:                                                                                                                                                                 │
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

- We can check the leader status in the nodepool after it has been created

Listing all the nodepools provides a summary where the count of leader nodes and time since the leaders were elected occurred. 

```shell
$ kubectl get nodepools
NAME         TYPE    READYNODES   NOTREADYNODES   LEADERNODES   LEADERELECTIONAGE   AGE
hangzhou     Edge                                                                   81m
yurt-pool1   Cloud   1            0                                                 3d3h
yurt-pool2   Edge    2            0               1             4h48m               3d3h
yurt-pool3   Edge    2            0                                                 3d3h
```

Inspecting the YAML, further details of the leaders are shown under `leaderEndpoints`

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
