---
title: Raven
---

本文将介绍如何安装Raven和使用Raven来增强边缘集群中的边-边和边-云网络打通能力。

假设你已经有了一个边缘kubernetes集群，节点分布在不同的物理区域，并且已经在这个集群中部署了`Raven Controller Manager`，有关`Raven Controller Manager`的详细信息在[这里](https://github.com/openyurtio/raven-controller-manager/blob/main/README.md)可以找到。

## 1. 节点打标区分不同网络域

如下所示，假设你的边缘集群中有五个节点，分布在三个不同的物理（网络）区域，其中节点`master`节点为云端节点。

``` bash
$ kubectl get nodes -o wide

NAME         STATUS   ROLES    AGE   VERSION   INTERNAL-IP    
hhht-node1   Ready    <none>   20d   v1.16.2   10.48.115.9    
hhht-node2   Ready    <none>   20d   v1.16.2   10.48.115.10
master       Ready    master   20d   v1.16.2   10.48.115.8
wlcb-node1   Ready    <none>   20d   v1.16.2   10.48.115.11
wlcb-node2   Ready    <none>   20d   v1.16.2   10.48.115.12    
```

我们对位于不同物理（网络）区域节点，分别使用一个[Gateway](https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go) CR来进行管理。通过给节点打标的方式，来标识节点由哪个Gateway管理。

通过如下命令，我们给位于`cn-huhehaote`的节点打`gw-hhht`的标签，来表明这些节点是由`gw-hhht`这个Gateway CR来管理的。

```bash
$ kubectl label nodes hhht-node1 hhht-node2 raven.openyurt.io/gateway=gw-hhht
hhht-node1 labeled
hhht-node2 labeled
```

同样地，我们分别为位于云端节点和`cn-huhehaote`的节点打上`gw-cloud`和`gw-wlcb`的标签。

```bash
$ kubectl label nodes master raven.openyurt.io/gateway=gw-cloud
master labeled
```

```bash
$ kubectl label nodes wlcb-node1 wlcb-node2 raven.openyurt.io/gateway=gw-wlcb
wlcb-node1 labeled
wlcb-node2 labeled
```

### 安装Raven Agent

运行如下命令安装最新版本：

```bash
git clone https://github.com/openyurtio/raven.git
cd raven
make deploy
```

运行如下命令，检查相应的Raven Agent的Pod是否成功运行。

``` bash
$ kubectl get pod -n kube-system | grep raven-agent-ds
raven-agent-ds-2jw47                           1/1     Running   0          91s
raven-agent-ds-bq8zc                           1/1     Running   0          91s
raven-agent-ds-cj7k4                           1/1     Running   0          91s
raven-agent-ds-p9fk9                           1/1     Running   0          91s
raven-agent-ds-rlb9q                           1/1     Running   0          91s
```

## 2. 如何使用

### 2.1 Gateways

- 创建的Gateway CR

```bash
$ cat <<EOF | kubectl apply -f -
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-hhht
spec:
  endpoints:
    - nodeName: hhht-node1
      underNAT: true
    - nodeName: hhht-node2
      underNAT: true
      
---
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-cloud
spec:
  endpoints:
    - nodeName: master
      underNAT: false
      
---
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-wlcb
spec:
  endpoints:
    - nodeName: wlcb-node1
      underNAT: true
    - nodeName: wlcb-node2
      underNAT: true

EOF
```

- 查看各个Gateway CR的状态

```bash
$ kubectl get gateways

NAME      ACTIVEENDPOINT
gw-hhht   hhht-node1
gw-master master
gw-wlcb   wlcb-node1
```

### 2.2 测试位于不同网络域的Pod网络联通性

-  创建测试Pod

```bash
$ cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: fedora-1
spec:
  nodeName: hhht-node2
  containers:
    - name: fedora
      image: njucjc/fedora:latest
      imagePullPolicy: Always

---

apiVersion: v1
kind: Pod
metadata:
  name: fedora-2
spec:
  nodeName: wlcb-node2
  containers:
    - name: fedora
      image: njucjc/fedora:latest
      imagePullPolicy: Always


EOF
```

- 确定测试Pod正常运行

```bash
$ kubectl get pod -o wide
NAME       READY   STATUS    RESTARTS   AGE     IP            NODE                  NOMINATED NODE   READINESS GATES
fedora-1   1/1     Running   0          46s     10.14.10.67   hhht-node2            <none>           <none>
fedora-2   1/1     Running   0          46s     10.14.2.70    wlcb-node2            <none>           <none>

```

- 测试跨网络域的Pod网络联通

```bash
$ kubectl exec -it fedora-1 -- bash
[root@fedora-1]# ping 10.14.2.70 -c 4
PING 10.14.2.70 (10.14.2.70) 56(84) bytes of data.
64 bytes from 10.14.2.70: icmp_seq=1 ttl=60 time=32.2 ms
64 bytes from 10.14.2.70: icmp_seq=2 ttl=60 time=32.2 ms
64 bytes from 10.14.2.70: icmp_seq=3 ttl=60 time=32.0 ms
64 bytes from 10.14.2.70: icmp_seq=4 ttl=60 time=32.1 ms

--- 10.14.2.70 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 32.047/32.136/32.246/0.081 ms

```
