---
title: Raven
---

本文将介绍如何安装Raven和使用Raven来增强边缘集群中的边-边和边-云网络打通能力。

假设你已经有了一个边缘kubernetes集群，节点分布在不同的物理区域如图所示，并且已经在这个集群中部署了`Raven Controller Manager` 和`Raven Agent`，如果没有部署可以参照[安装教程](../../installation/manually-setup.md)，有关`Raven Controller Manager`的详细信息在[这里](https://github.com/openyurtio/raven-controller-manager/blob/main/README.md)可以找到。
![raven_deploy](../../../../../../static/img/docs/user-manuals/network/raven_deploy.png)
## 1. 节点打标区分不同网络域

如下所示，假设你的边缘集群中有五个节点，分布在三个不同的物理（网络）区域，其中节点`master`节点同样也是云端节点。

``` bash
$ kubectl get nodes -o wide
NAME                      STATUS   ROLES                  AGE     VERSION    INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION                CONTAINER-RUNTIME
izbp15inok0kbfkg3in52rz   Ready    Edge-HZ-1              27h     v1.22.11   172.16.2.103    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15
izbp15inok0kbfkg3in52sz   Ready    Edge-HZ-2              26h     v1.22.11   172.16.2.104    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15
izm5eb24dmjfimuaybpnqzz   Ready    Edge-QD-1              29h     v1.22.11   172.16.1.89     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15
izm5eb24dmjfimuaybpnr0z   Ready    Edge-QD-2              29h     v1.22.11   172.16.1.90     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15
izwz9dohcv74iegqecp4axz   Ready    control-plane,master   5d21h   v1.22.11   192.168.0.195   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2
izwz9ey0js5z7mornclpd6z   Ready    cloud                  3h3m    v1.22.11   192.168.0.196   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2
```

我们对位于不同物理（网络）区域节点，分别使用一个[Gateway](https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go) CR来进行管理。通过给节点打标的方式，来标识节点由哪个Gateway管理。

通过如下命令，我们给位于`hangzhou`的节点打`gw-hangzhou`的标签，来表明这些节点是由`gw-hangzhou`这个Gateway CR来管理的。

```bash
$ kubectl label nodes izbp15inok0kbfkg3in52rz izbp15inok0kbfkg3in52sz raven.openyurt.io/gateway=gw-hangzhou
node/izbp15inok0kbfkg3in52rz not labeled
node/izbp15inok0kbfkg3in52sz not labeled
```

同样地，我们分别为位于云端节点和master节点打上`gw-cloud`，和给位于`qingdao`的节点打`gw-qingdao`的标签。

```bash
$ kubectl label nodes izwz9dohcv74iegqecp4axz izwz9ey0js5z7mornclpd6z raven.openyurt.io/gateway=gw-cloud
node/izwz9dohcv74iegqecp4axz labeled
node/izwz9ey0js5z7mornclpd6z labeled
```

```bash
$ kubectl label nodes izm5eb24dmjfimuaybpnqzz izm5eb24dmjfimuaybpnr0z raven.openyurt.io/gateway=gw-qingdao
node/izm5eb24dmjfimuaybpnqzz  labeled
node/izm5eb24dmjfimuaybpnr0z  labeled
```

运行如下命令，检查相应的Raven Agent的Pod是否成功运行。

``` bash
$ kubectl get pod -n kube-system | grep raven-agent-ds
raven-agent-ds-4b587                              1/1     Running             0              25h
raven-agent-ds-dmh66                              1/1     Running             0              25h
raven-agent-ds-gb5qj                              1/1     Running             0              25h
raven-agent-ds-gzpfh                              1/1     Running             0              170m
raven-agent-ds-ksxq6                              1/1     Running             0              25h
raven-agent-ds-qhjtb                              1/1     Running             0              25h
```

## 2. 如何使用

### 2.1 Gateways

- 创建的Gateway CR

```bash
$ cat <<EOF | kubectl apply -f -
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-hangzhou
spec:
  endpoints:
    - nodeName: izbp15inok0kbfkg3in52rz
      underNAT: true
    - nodeName: izbp14hrmgyfx2n3xdsl0hz
      underNAT: true

---
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-cloud
spec:
  endpoints:
    - nodeName: izwz9dohcv74iegqecp4axz
      underNAT: false
    - nodeName: izwz9ey0js5z7mornclpd6z
      underNAT: false

---
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-qingdao
spec:
  endpoints:
    - nodeName: izm5eb24dmjfimuaybpnqzz
      underNAT: true
    - nodeName: izm5eb24dmjfimuaybpnr0z
      underNAT: true
EOF
```

- 查看各个Gateway CR的状态

```bash
$ kubectl get gateways

NAME          ACTIVEENDPOINT
gw-cloud      izwz9dohcv74iegqecp4axz
gw-hangzhou   izbp15inok0kbfkg3in52rz
gw-qingdao    izm5eb24dmjfimuaybpnqzz
```

### 2.2 测试位于不同网络域的Pod网络联通性

-  创建测试Pod

```bash
$ cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: busy-box
spec:
  replicas: 4
  selector:
    matchLabels:
      app: busy-box
  template:
    metadata:
      labels:
        app: busy-box
    spec:
      containers:
      - name: busy-box
        image: busybox
        command:
        - /bin/sh
        - -c
        - sleep 3000
      nodeSelector:
        openyurt.io/is-edge-worker: "true"
EOF
```

- 确定测试Pod正常运行

```bash
$ kubectl get pod -o wide
busy-box-6f46f8585b-48zb9   1/1     Running   0          76s   10.244.19.3     izbp15inok0kbfkg3in52sz   <none>           <none>
busy-box-6f46f8585b-9nm64   1/1     Running   0          76s   10.244.16.161   izm5eb24dmjfimuaybpnqzz   <none>           <none>
busy-box-6f46f8585b-kv4dw   1/1     Running   0          76s   10.244.17.19    izm5eb24dmjfimuaybpnr0z   <none>           <none>
busy-box-6f46f8585b-t5v9d   1/1     Running   0          76s   10.244.18.4     izbp15inok0kbfkg3in52rz   <none>           <none>
```

- 测试跨网络域的Pod网络联通

```bash
$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh
/ # ping 10.244.17.19 -c 4
PING 10.244.17.19 (10.244.17.19): 56 data bytes
64 bytes from 10.244.17.19: seq=0 ttl=59 time=78.048 ms
64 bytes from 10.244.17.19: seq=1 ttl=59 time=77.424 ms
64 bytes from 10.244.17.19: seq=2 ttl=59 time=77.490 ms
64 bytes from 10.244.17.19: seq=3 ttl=59 time=77.472 ms

--- 10.244.17.19 ping statistics ---
4 packets transmitted, 4 packets received, 0% packet loss
round-trip min/avg/max = 77.424/77.608/78.048 ms

```

- 测试跨网络域的节点网络联通: 登陆到非Gateway节点Edge-HZ-2 ping 非Gateway节点Edge-QD-2

```bash
# 节点Edge-HZ-2(非Gateway节点)：
ping 172.16.1.90 -c 4
PING 172.16.1.90 (172.16.1.90) 56(84) bytes of data.
64 bytes from 172.16.1.90: icmp_seq=1 ttl=61 time=77.5 ms
64 bytes from 172.16.1.90: icmp_seq=2 ttl=61 time=77.3 ms
64 bytes from 172.16.1.90: icmp_seq=3 ttl=61 time=78.5 ms
64 bytes from 172.16.1.90: icmp_seq=4 ttl=61 time=77.3 ms

--- 172.16.1.90 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 77.314/77.682/78.531/0.533 ms
```

```bash
# 抓包
# 节点Edge-HZ-1(Gateway节点)：
tcpdump -i raven0
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes
16:13:12.132496 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 1, length 64
16:13:13.133606 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 2, length 64
16:13:14.134172 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 3, length 64
16:13:15.135570 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 4, length 64
```

```bash
# 抓包
# 节点Edge-QD-1(Gateway节点)：
tcpdump -i raven0
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes
16:13:12.174023 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64
16:13:13.175096 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64
16:13:14.176813 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64
16:13:15.177024 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64
```

```bash
# 抓包
# 节点Edge-QD-2(非Gateway节点)：
tcpdump -i raven0
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes
16:13:12.173087 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64
16:13:13.174148 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64
16:13:14.175884 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64
16:13:15.176090 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64
```

# 其他特性：
默认情况下，raven 使用 IPSec 作为 VPN 后端，我们还提供WireGuard作为替代方案。您可以通过以下步骤切换到 WireGuard 后端：
* Raven 需要在集群中的网关节点上加载 WireGuard 内核模块。从 Linux 5.6 开始，内核包含 WireGuard in-tree；具有旧内核的 Linux 发行版将需要安装 WireGuard。对于大多数 Linux 发行版，这可以使用系统包管理器来完成。有关详细信息，请参阅安装 WireGuard。
* 网关节点将需要一个开放的 UDP 端口才能进行通信。默认情况下，WireGuard 使用 UDP 端口 51820。 运行以下命令：
  ```bash
  cd raven
  git checkout v0.3.0
  VPN_DRIVER=wireguard make deploy
  ```



