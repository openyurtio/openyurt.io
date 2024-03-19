---
title: Raven
---

本文将介绍如何使用Raven来增强边缘集群中的边-边和边-云网络打通能力。

假设你已经有了一个边缘kubernetes集群，节点分布在不同的物理区域如图所示，并且已经在这个集群中部署了`Yurt Manager` 和`Raven Agent`，如果没有部署可以参照[安装教程](../../installation/manually-setup.md)。
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

我们对位于不同物理（网络）区域节点，分别使用一个[Gateway](https://github.com/openyurtio/openyurt/blob/master/pkg/apis/raven/v1beta1/gateway_types.go) CR来进行管理。通过给节点打标的方式，来标识节点由哪个Gateway管理。

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
apiVersion: raven.openyurt.io/v1beta1
kind: Gateway
metadata:
  name: gw-hangzhou
spec:
  proxyConfig:
    Replicas: 1
  tunnelConfig:
    Replicas: 1
  endpoints:
    - nodeName: izbp15inok0kbfkg3in52rz
      underNAT: true
      port: 10262
      type: proxy
    - nodeName: izbp15inok0kbfkg3in52rz
      underNAT: true
      port: 4500
      underNAT: true
      type: tunnel
---
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-cloud
spec:
  exposeType: PublicIP
  proxyConfig:
    Replicas: 1
    proxyHTTPPort: 10255,9445
    proxyHTTPSPort: 10250,9100
  tunnelConfig:
    Replicas: 1
  endpoints:
    - nodeName: izwz9dohcv74iegqecp4axz
      underNAT: false
      port: 10262
      type: proxy
      publicIP: 120.79.xxx.xxx
    - nodeName: izwz9dohcv74iegqecp4axz
      underNAT: false
      port: 4500
      type: tunnel
      publicIP: 120.79.xxx.xxx

---
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-qingdao
spec:
  proxyConfig:
    Replicas: 1
  tunnelConfig:
    Replicas: 1
  endpoints:
  - nodeName: izm5eb24dmjfimuaybpnqzz
    underNAT: true
    port: 10262
    type: proxy
  - nodeName: izm5eb24dmjfimuaybpnr0z
    underNAT: true
    port: 4500
    type: tunnel
EOF
```

- 参数介绍：
1. ```spec.exposedType```: 在公网暴露的类型，LoadBalancer为采用负载均衡暴露、PublicIP为采用公网IP暴露，空为不暴露，一般云上暴露，边缘不暴露
2. ```spec.endpoints```: 表示一组备选的网关节点，控制面会根据节点状态在其中选取一部分作为网关节点
3. ```spec.endpoints.nodeName```: 网关节点名
4. ```spec.endpoints.type```: 网关节点的类型, 代理模式为proxy，隧道模式为tunnel
5. ```spec.endpoints.port```: 网关节点服务暴露的端口：代理模式一般为TCP 10262，隧道模式为UDP 4500
6. ```spec.endpoints.publicIP```: 网关节点的公网地址
7. ```spec.endpoints.underNAT```: 是否采用NAT的方式访问公网，一般云上采用false，边缘采用true
8. ```spec.proxyConfig.Replicas```: 支持代理模式的网关节点副本数，不得大于endpoints中节点数
9. ```spec.proxyConfig.proxyHTTPPort```: 云边代理模式通信代理的非安全端口, 例如kubelet监听的10255端口
10. ```spec.proxyConfig.proxyHTTPPort```: 云边代理模式通信代理的安全端口, 例如kubelet监听的10250端口
11. ```spec.tunnelConfig.proxyHTTPPort```: 支持隧道模式的网关节点的副本数，目前不支持多副本
12. ```status.activeEndpoints```: 从spec.endpoints 的备选网关节点中选择指定数量的网关节点，激活的网关节点上的RavenAgent作为运行实例负责隧道构建和路由管理
13.  ```status.nodes```: 由本Gateway负责代理的节点

- 查看各个Gateway CR的状态

1. 确保Gateway的Status中是否选举了网关节点，选举动作由Yurt-Manager组件GatewayPickup Controller负责。
2. 确认公网地址、暴露端口是否正确
3. 确认开启的模式是否达到预期

开启隧道模式，设置 ```enable-l3-tunnel: "true"```
开启代理模式，设置 ```enable-l7-proxy: "true"```
```bash
$ kubectl get cm raven-cfg -n kube-system -o yaml
apiVersion: v1
data:
  enable-l3-tunnel: "true"
  enable-l7-proxy: "true"
kind: ConfigMap
metadata:
  annotations:
    meta.helm.sh/release-name: raven-agent
    meta.helm.sh/release-namespace: kube-system
  creationTimestamp: "2023-11-24T06:44:54Z"
  labels:
    app.kubernetes.io/managed-by: Helm
  name: raven-cfg
  namespace: kube-system
```
```bash 
$ kubectl get gateways

NAME          AGE
gw-cloud      22h
gw-hangzhou   22h
gw-qingdao    22h

$ kubectl get gateway gw-cloud -o yaml
apiVersion: raven.openyurt.io/v1alpha1
kind: Gateway
metadata:
  name: gw-cloud
spec:
  exposeType: PublicIP
  proxyConfig:
    Replicas: 1
    proxyHTTPPort: 10255,9445
    proxyHTTPSPort: 10250,9100
  tunnelConfig:
    Replicas: 1
  endpoints:
    - nodeName: izwz9dohcv74iegqecp4axz
      underNAT: false
      port: 10262
      type: proxy
      publicIP: 120.79.xxx.xxx
    - nodeName: izwz9dohcv74iegqecp4axz
      underNAT: false
      port: 4500
      type: tunnel
      publicIP: 120.79.xxx.xxx
status:
  activeEndpoints:
  - config:
      enable-l7-proxy: "true"
    nodeName: izwz9dohcv74iegqecp4axz
    port: 10262
    publicIP: 47.xxx.xxx.xxx
    type: proxy
  - config:
      enable-l3-tunnel: "true"
    nodeName: izwz9dohcv74iegqecp4axz
    port: 4500
    publicIP: 47.xxx.xxx.xxx
    type: tunnel
  nodes:
  - nodeName: izwz9dohcv74iegqecp4axz
    privateIP: 192.168.0.195
    subnets:
    - 10.224.0.128/26
  - nodeName: izwz9ey0js5z7mornclpd6z
    privateIP: 192.168.0.196
    subnets:
    - 10.224.0.0/26

$ kubectl get gateway gw-hangzhou -o yaml
apiVersion: raven.openyurt.io/v1beta1
kind: Gateway
metadata:
  name: gw-hangzhou
spec:
  proxyConfig:
    Replicas: 1
  tunnelConfig:
    Replicas: 1
  endpoints:
    - nodeName: izbp15inok0kbfkg3in52rz
      underNAT: true
      port: 10262
      type: proxy
    - nodeName: izbp15inok0kbfkg3in52rz
      underNAT: true
      port: 4500
      underNAT: true
      type: tunnel
status:
  activeEndpoints:
  - config:
      enable-l7-proxy: "true"
    nodeName: izbp15inok0kbfkg3in52rz
    port: 10262
    publicIP: 120.79.xxx.xxx
    type: proxy
  - config:
      enable-l3-tunnel: "true"
    nodeName: izbp15inok0kbfkg3in52rz
    port: 4500
    publicIP: 120.79.xxx.xxx
    type: tunnel
  nodes:
  - nodeName: izbp15inok0kbfkg3in52rz
    privateIP: 172.16.2.103
    subnets:
    - 10.224.1.128/26
  - nodeName: izbp15inok0kbfkg3in52sz
    privateIP: 172.16.2.104
    subnets:
    - 10.224.1.0/26
```

### 2.2 测试位于不同网络域的Pod网络联通性 (隧道模式)

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

### 2.3 云边主机网络七层请求代理 (代理模式)

在边缘场景中，边缘设备往往处在封闭的内网环境中，因此边缘设备的内网IP地址常常会出现冲突，因此隧道模式不能支持IP冲突场景下的主机通信，因此需要开启代理模式，支持跨域的HTTP/HTTPS的请求。
开启代理模式，设置 ```enable-l7-proxy: "true"```

注意：如果您只需要开启七层请求代理，并且边缘节点都是独立存在具有公网访问能力，只需要创建一个云上Gateway CR 即可，每个边缘节点都会主动与云上Gateway建立反向链接，对于一组边缘节点处于一个网络域，您可以为其创建Gateway CR，并且选出备选节点作为代理网关。
```bash
$ kubectl get cm raven-cfg -n kube-system -o yaml
apiVersion: v1
data:
  enable-l3-tunnel: "true"
  enable-l7-proxy: "true"
kind: ConfigMap
metadata:
  annotations:
    meta.helm.sh/release-name: raven-agent
    meta.helm.sh/release-namespace: kube-system
  creationTimestamp: "2023-11-24T06:44:54Z"
  labels:
    app.kubernetes.io/managed-by: Helm
  name: raven-cfg
  namespace: kube-system
```

```bash
$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh
echo hello word
hello word
```

# 其他特性：
默认情况下，raven 使用 IPSec 作为 VPN 后端，我们还提供WireGuard作为替代方案。您可以通过以下步骤切换到 WireGuard 后端：
* Raven 需要在集群中的网关节点上加载 WireGuard 内核模块。从 Linux 5.6 开始，内核包含 WireGuard in-tree；具有旧内核的 Linux 发行版将需要安装 WireGuard。对于大多数 Linux 发行版，这可以使用系统包管理器来完成。有关详细信息，请参阅安装 WireGuard。
* 网关节点将需要一个开放的 UDP 端口才能进行通信。默认情况下，WireGuard 使用 UDP 端口 51820。 运行以下命令：
  ```bash
  cd raven
  git checkout v0.4.0
  VPN_DRIVER=wireguard make deploy
  ```

# 如何排查VPN问题：
* 如采用IPSec隧道（libreswan方式）作为后端实现，可进入raven agent容器内，通过命令 ```ipsec status/look``` 或 ```/usr/libexec/ipsec status/look``` 查看相关状态，并且合理运用```ipsec```工具排查相关问题。
* 如采用Wiregurad隧道作为VPN后端实现，可进入raven agent容器内，安装wireguard-tools工具，参照工具说明排查相关问题。
* Raven完全采用开源IPSec、Wireguard工具，无任何定制化，您可以参照开源社区以及相关技术博客解决日常问题。



