---
title: YurtTunnel
---

## 1. Background

During application deployment and maintenance, users often need to obtain application logs, or directly log in to the running environment of the application for debugging. In Kubernetes cluster, we usually use `kubectl log`, `kubectl exec` and other command to debug. As following picture, on `kubelet` will act as a server, responsible for processing requests forwarded by `kube-apiserver` (KAS), which requires a network path between `KAS` and `kubelet` to allow `KAS` to actively access `kubelet`.

![img](../../../static/img/docs/core-concepts/kubectl.jpg)

Cloud and edge are in different network domains, and edge nodes are inside the firewall. The cloud (center) edge collaborative architecture will lead to the following challenges in the maintenance monitoring capabilities of the native K8s system:

* K8s native maintenance capabilities are lacking (such as `kubectl logs/exec` cannot be executed)
* Community monitoring maintenance components cannot work (such as Prometheus/metrics-server)

In order to support the maintenance of edge applications through cloud nodes, we must establish a reverse maintenance tunnel between the cloud and the edge.

## 2. Reverse Tunnel

In `OpenYurt`, we introduced a special component `YurtTunnel` to deal with the cloud-side communication. `Reverse tunnel` is a common way to solve cross-network communication, and `YurtTunnel` is also a `reverse tunnel`. It is a typical C/S structure component, consisting of `Yurt-Tunnel-Server` deployed in the cloud and `Yurt-Tunnel-Agent` deployed on edge nodes. The deployment structure of YurtTunnel is following picture. The whole workflow of the `reverse tunnel` has the following steps:

* Deploy `Yurt-Tunnel-Server` on the management and control network plane.
* `Yurt-Tunnel-Server` opens an IP accessible from the public network.
* Deploy a `Yurt-Tunnel-Agent` on each edge node, and establish a long connection with the Server through the Server's public IP.
* Access requests from the management and control components to edge nodes will be forwarded to `Yurt-Tunnel-Server`.
* `Yurt-Tunnel-Server` sends the request to the target node through the long connection.

![img](../../../static/img/docs/core-concepts/tunnel_arch.jpg)

## 3. Implementation

To create a secure, non-intrusive, and scalable reverse tunnel in the K8s cloud-edge architecture, it needs to include at least the following three capabilities.

* Tunnel
* Self-management of certificates at both ends of the tunnel
* Cloud component requests are forwarded to the tunnel

Architecture of `YurtTunnel` is as follows:

![img](../../../static/img/docs/core-concepts/tunnel_components.jpg)

1) Tunnel

When the `Yurt-Tunnel-Agent` on the edge starts up, it will establish a connection and register with the `Yurt-Tunnel-Server` according to the access address, and periodically check the health status of the connection and rebuild the connection.

`Yurt-Tunnel-Agent` registered is as follows：
```Plain
"agentID": {NodeName}
"agentIdentifiers": ipv4={nodeIP}&host={NodeName}"
```

* When `Yurt-Tunnel-Server` receives a request from a cloud component, it needs to forward the request to the `Yurt-Tunnel-Agent`. Because in addition to forwarding the request, the `session` is followed by data return or continuous data forwarding (such as `kubectl exec` ). So it is necessary to forward data in both directions. At the same time, it is necessary to support concurrent forwarding of requests from cloud components, which means that an unique ID needs to be established for each request life cycle. So there are two designs.

Option 1: The initial cloud-side connection only informs the forwarding request, and `Yurt-Tunnel-Agent` will establish a new connection with the cloud to process the request. Through the new connection, the problem of requesting unique ID can be resolved, and concurrency can also be resolved. But a connection needs to be established for each request, which will consume a lot of resources.

Option 2: Only the initial cloud-edge connection is used to forward requests. In order to reuse the same connection for a large number of requests, it is necessary to encapsulate each request and add an unique ID to solve the concurrent forwarding. At the same time, since a connection needs to be reused, it is necessary to decouple connection management and request lifecycle management. That is to manage the transition of request forwarding. This option involves packet and unpacket, request processing state machine, etc. The option will be a little more complicated.

* The `ANP` component selected by OpenYurt adapts the above option 2, which also satisfies our original design intention.
* Request forwarding is encapsulated in `Packet_DialRequest` and `Packet_DialResponse`, where `Packet_DialResponse.ConnectID` is used to identify `request`, which is like `requestID` in `tunnel`. The request and data are encapsulated in `Packet_Data`. `Packet_CloseRequest` and `Packet_CloseResponse` are used to forward and recycle resource. For details, please refer to the following sequence diagram:

![img](../../../static/img/docs/core-concepts/tunnel_sequence_diag.jpg)

* `RequestInterceptor` module

   It can be seen from the above analysis that before `Yurt-Tunnel-Server` forwards the request, the client needs to make an `Http Connect` request to create a forwarding path. However, it is difficult to do some work for open source components such as `Prometheus` and `metrics-server`. Therefore, a request hijacking module `Interceptor` is added to `Yurt-Tunnel-Server` to make `Http Connect` requests.

2) Certificate management

In order to keep long and secure communication of cloud-edge, and also to support https request forwarding, `YurtTunnel` needs to generate its own certificate and maintain the automatic rotation of the certificate. The details are as follows:

```Plain
# 1. Yurt-Tunnel-Server server certificate:
# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-server/app/start.go#L120-L139
- certificate path: /var/lib/yurt-tunnel-server/pki/yurt-tunnel-server-xxx.pem
- SignerName: "kubernetes.io/kubelet-serving"
- CommonName: "system:node:tunnel-server"
- Organization: {"system:nodes"}
- Subject Alternate Name values: {x-tunnel-server-svc, x-tunnel-server-internal-svc的ips和dns names}
- KeyUsage: ["key encipherment", "digital signature", "server auth"]

# 2. tunnel proxy client certificate: is used by yurt-tunnel-server in order to make connection with components on edge nodes(like kubelet) for forwarding requests.
# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-server/app/start.go#L146-L152
- certificate path: /var/lib/yurt-tunnel-server/pki/yurt-tunnel-server-proxy-client-xxx.pem
- SignerName: "kubernetes.io/kube-apiserver-client"
- CommonName: "tunnel-proxy-client"
- Organization: {"openyurt:yurttunnel"}
- KeyUsage: ["key encipherment", "digital signature", "client auth"]

# 3. Yurt-Tunnel-Agent client certificate：
# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-agent/app/start.go#L99-L107
- certificate path: /var/lib/yurt-tunnel-agent/pki/yurt-tunnel-agent-xxx.pem
- SignerName: "kubernetes.io/kube-apiserver-client"
- CommonName: "tunnel-agent-client"
- Organization: {"openyurt:yurttunnel"}
- KeyUsage: ["key encipherment", "digital signature", "client auth"]

# 4. Yurt-tunnel Certificate Signing Request (CSR) is approved by Yurt-Controller-Manager
# https://github.com/openyurtio/openyurt/blob/master/pkg/controller/certificates/csrapprover.go

# 5. certificate automatic rotation
# https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/client-go/util/certificate/certificate_manager.go#L224
```

3) transfer cloud component requests to the tunnel

Because the request of the cloud component needs to be forwarded to the `Yurt-Tunnel-Server`, it also means that no modification to the cloud component is required. So it is necessary to analyze the requests of cloud components. Currently the maintenance requests of components have the following two types:

* type 1: access using IP address, such as: `http://{nodeIP}:{port}/{path}`
* type 2: access using domain name, such as: `http://{NodeName}:{port}/{path}`

Different solutions need to be adopted for different types of requests.

Solution 1: Use iptables dnat rules to ensure that type 1 requests are forwarded to `Yurt-Tunnel-Server`

```Shell
# iptables rules code: https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/iptables/iptables.go
# The iptables dnat rules maintained by Yurt-Tunnel-Server are as follows:
[root@xxx /]# iptables -nv -t nat -L OUTPUT
TUNNEL-PORT  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* edge tunnel server port */

[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT
TUNNEL-PORT-10255  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10255 /* jump to port 10255 */
TUNNEL-PORT-10250  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10250 /* jump to port 10250 */

[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-10255
RETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:10255
RETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:10255
DNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:10255 to:172.16.6.156:10264
```

Solution 2: Use dns domain name to resolve NodeName as the access address of Yurt-Tunnel-Server, so that type 2 requests can be forwarded to yurt-tunnel. Its working principle is as follows:

![img](../../../static/img/docs/core-concepts/tunnel_dns.jpg)
* `Yurt-Tunnel-Server` maintains two Service addresses： 
  * x-tunnel-server-svc: expose port 10262/10263 used to access from the public networkYurt-Tunnel-Server. Such as Yurt-Tunnel-Agent 
  * x-tunnel-server-internal-svc: cloud components is accessed from the internal network, such as prometheus, metrics-server
* `Yurt-Tunnel-Server` has a DNS Controller, dynamically configures Core DNS Host records, and maintains the mapping relationship between NodeName and IP (Cloud Node is directly reachable according to IP, directly mapped to Node IP; Edge Node needs to communicate through the Tunnel tunnel agent, mapping to the cluster ip of `Yurt-Tunnel-Server` Internal Service)
* When the cloud component accesses the Edge node through NodeName, it will do domain name resolution through CoreDNS by default, and the request for the Edge Node will be directed to the ClusterIP of the internal service of `Yurt-Tunnel-Server`, and then use the forwarding ability of kube-proxy to forward the request Load balancing to healthy Yurt-Tunnel-Server Pods
* `Yurt-Tunnel-Server` will check the requested Host. When the Host is NodeName, it will find the correct Agent backend through the node name and forward the data


4) port extension

If users need to access other ports(like 9051 for http requests) on the edge (other than 10250 and 10255), they need to add dnat rules in iptables or add port mapping in x-tunnel-server-internal-svc, as shown following:

```Shell

# For example, access port 9051 of the edge
# add iptables dnat rule:
[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT
TUNNEL-PORT-9051  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:9051 /* jump to port 9051 */

[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-9051
RETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:9051
RETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:9051
DNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:9051 to:172.16.6.156:10264

# add port mapping in x-tunnel-server-internal-svc
spec:
  ports:
  - name: https
    port: 10250
    protocol: TCP
    targetPort: 10263
  - name: http
    port: 10255
    protocol: TCP
    targetPort: 10264
  - name: dnat-9051 # add port mapping
    port: 9051
    protocol: TCP
    targetPort: 10264
```

The above iptables dnat rules and service port mapping are automatically updated by `Yurt-Tunnel-Server`. Users only need to add port configuration in `yurt-tunnel-server-cfg` configmap in `kube-system`. details as follows:

```Yaml
apiVersion: v1
data:
  http-proxy-ports: "9051" # ports for HTTP requests 
  https-proxy-ports: "" # ports for HTTPs requests
kind: ConfigMap
metadata:
  name: yurt-tunnel-server-cfg
  namespace: kube-system
```
