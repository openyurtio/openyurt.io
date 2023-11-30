---
title: Raven
---

This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster.

Suppose you have an edge kubernetes cluster with nodes in different physical regions, and already deploy the `Raven Controller Manager` and `Raven Agent` in this cluster,You can refer to the  [installation tutorial](../../installation/manually-setup.md) if you do not have Raven installed, the details of `Raven Controller Manager` are in [here](https://github.com/openyurtio/raven-controller-manager/blob/main/README.md).
![raven_deploy](../../../../static/img/docs/user-manuals/network/raven_deploy.png)
## Label nodes in different physical regions

As follows, suppose the cluster has five nodes, located in three different regions, where the node `master` is cloud node.

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

We use a [Gateway](https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go) CR to manage nodes in different physical regions, and label nodes to indicate which `Gateway` these nodes are managed by.

For example, We label nodes in region `hangzhou` with value `gw-hangzhou`, indicating that these nodes are managed by the `gw-hangzhou` gateway.

```bash
$ kubectl label nodes izbp15inok0kbfkg3in52rz izbp15inok0kbfkg3in52sz raven.openyurt.io/gateway=gw-hangzhou
node/izbp15inok0kbfkg3in52rz not labeled
node/izbp15inok0kbfkg3in52sz not labeled
```

Similarly, we label node in `cloud` with value `gw-cloud`, and nodes in region `qingdao` with value `gw-qingdao`.

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

Apply the following command to check that raven is running properly

``` bash
$ kubectl get pod -n kube-system | grep raven-agent-ds
raven-agent-ds-4b587                              1/1     Running             0              25h
raven-agent-ds-dmh66                              1/1     Running             0              25h
raven-agent-ds-gb5qj                              1/1     Running             0              25h
raven-agent-ds-gzpfh                              1/1     Running             0              170m
raven-agent-ds-ksxq6                              1/1     Running             0              25h
raven-agent-ds-qhjtb                              1/1     Running             0              25h
```

## How to Use

### Gateways

- create gateways

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

- Get gateways

```bash
$ kubectl get gateways

NAME          ACTIVEENDPOINT
gw-cloud      izwz9dohcv74iegqecp4axz
gw-hangzhou   izbp15inok0kbfkg3in52rz
gw-qingdao    izm5eb24dmjfimuaybpnqzz
```

### Test pod-to-pod networking

- Create test pod

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

- Get test pod

```bash
$ kubectl get pod -o wide
busy-box-6f46f8585b-48zb9   1/1     Running   0          76s   10.244.19.3     izbp15inok0kbfkg3in52sz   <none>           <none>
busy-box-6f46f8585b-9nm64   1/1     Running   0          76s   10.244.16.161   izm5eb24dmjfimuaybpnqzz   <none>           <none>
busy-box-6f46f8585b-kv4dw   1/1     Running   0          76s   10.244.17.19    izm5eb24dmjfimuaybpnr0z   <none>           <none>
busy-box-6f46f8585b-t5v9d   1/1     Running   0          76s   10.244.18.4     izbp15inok0kbfkg3in52rz   <none>           <none>
```

- Test networking across edge

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

- Log in to the non-gateway node Edge-HZ-2 and ping the non-gateway node Edge-QD-2 to test the connectivity of nodes across network domains,
```bash
# Edge-HZ-2(Non-Gateway)：
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
# Capture package
# Edge-HZ-1 (Gateway)：
tcpdump -i raven0
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes
16:13:12.132496 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 1, length 64
16:13:13.133606 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 2, length 64
16:13:14.134172 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 3, length 64
16:13:15.135570 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 4, length 64
```

```bash
# Capture package
# Edge-QD-1 (Gateway)：
tcpdump -i raven0
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes
16:13:12.174023 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64
16:13:13.175096 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64
16:13:14.176813 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64
16:13:15.177024 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64
```

```bash
# Capture package
# Edge-QD-2(Non-Gateway)：
tcpdump -i raven0
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes
16:13:12.173087 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64
16:13:13.174148 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64
16:13:14.175884 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64
16:13:15.176090 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64
```

# Other Features：
By default, raven uses IPSec as the VPN back end, and we also provide WireGuard as an alternative. You can do the following to switch to the WireGuard back end.
* Raven requires the WireGuard kernel module to be loaded on the gateway node in the cluster. As of Linux 5.6, the kernel includes WireGuard in-tree; Linux distributions with older kernels will need WireGuard installed. For most Linux distributions, this can be done using the system package manager. For more information, see Installing WireGuard.
* The gateway node will require an open UDP port to communicate. By default, the WireGuard uses UDP port 51820. Run the following command.
  ```bash
  cd raven
  git checkout v0.3.0
  VPN_DRIVER=wireguard make deploy
  ```
