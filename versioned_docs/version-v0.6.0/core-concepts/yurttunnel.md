---
title: YurtTunnel
---

## 1. Background

During the deployment and operation of the application, users often get the logs of the application or log in to the application's running environment for debugging. In Kubernetes, we usually use kubectl log, kubectl exec, etc. to implement these requirements. As shown below, on the kubectl request link, kubelet will act as a server to handle requests forwarded by kube-apiserver (KAS), which requires a network path between KAS and kubelet to allow KAS to access kubelet.  

![img](../../../static/img/docs/core-concepts/kubectl.jpg)

Cloud and edge are generally located on different network planes, and edge nodes are generally located inside the firewall. Using the cloud-edge (center-edge) collaboration structure will lead to the following challenges in operation and monitoring capabilities of the native K8s system:

* Lack of native operation capabilities of K8s( such as kubectl logs/exec etc. can't work )
* The main monitoring and operation components of the community can't work( such as Prometheus/metrics-server )

In order to support operating edge applications through cloud nodes, we must establish a reverse operation channel between cloud and edge.

## 2. Reverse Channel

In OpenYurt，we introduce a special component——YurtTunnel to solve the problem of cloud-edge communication. Reverse channel is a common way to solve cross network communication, and the essence of YurtTunnel is also a reverse channel. It's a typical C/S structure component, consisting of Yurt-Tunnel-Server deployed on cloud and Yurt-Tunnel-Agent deployed on edge. The structure of YurtTunnel is shown in the figure below, the workflow of the reverse channel includes the following steps:

* Deploy Yurt-Tunnel-Server on the network plane where the control components are located.
* Yurt-Tunnel-Server opens an IP that can be accessed by the public network.
* Deploy Yurt-Tunnel-Agent on each edge node，and establish a long connection with the server through the public IP of the server.
* The request from control components to edge nodes will be forwarded to Yurt-Tunnel-Server.
* Then Yurt-Tunnel-Server sends the request to the target edge node through the long connection.

![img](../../../static/img/docs/core-concepts/tunnel_arch.jpg)

## 3. Implementation Mode

To build a secure, non-invasive and scalable reverse channel solution in the k8s cloud-edge integration structure, the solution includes at least the following three capabilities.

* Tunnel construction
* Self-management of certificates at both ends of the tunnel
* Requests of cloud components are seamlessly routed to the tunnel

The structure modules of YurtTunnel are as follows：

![img](../../../static/img/docs/core-concepts/tunnel_components.jpg)

1) Tunnel construction

* When Yurt-Tunnel-Agent on the edge is started，it will establish a connection with Yurt-Tunnel-Server according to the access address and register. Then the agent will periodically detect the health status of the connection, rebuild the connection, and so on.

The identity information registered by Yurt-Tunnel-Agent is as follows：
```Plain
"agentID": {NodeName}
"agentIdentifiers": ipv4={nodeIP}&host={NodeName}"
```

* When Yurt-Tunnel-Server receives a request from the cloud component, it should forward the request to corresponding Yurt-Tunnel-Agent. In addition to forwarding the initial request, the session of the request will also have data returns or continuous data forwarding( such as kubectl exec ) later. Therefore, it should forward data in both directions. At the same time, it is necessary to support and forward requests from cloud components, which means that it should establish an independent identifier for each request life cycle. So there are generally two plans in the design.

Plan 1: The initial cloud-edge connection only informs the forwarding request, Yurt-Tunnel-Agent will establish a new connection with cloud to process the request. The problem of requesting independent identification can be well solved through the new connection, and concurrency can also be well resolved. But establishing a connection for each request will consume lots of resources.

Plan 2: Only the initial cloud-edge connection is used to forward requests. In order to reuse the same connection for many requests, it is necessary to encapsulate each request and add an independent identifier to solve the demand for concurrent forwarding. At the same time, we should decouple connection management and request lifecycle management since a connection needs to be reused. That is, the state transition of request forwarding should be managed independently. This plan involves packet and unpack, request processing state machine, etc., which will be more complicated.

* OpenYurt chooses the ANP component, which adopts the above plan 2. This is also consistent with our original design intention. 
* The construction of the request forwarding link is encapsulated in Packet_DialRequest and Packet_DialResponse. Packet_DialResponse.ConnectID is used to identify request, which is equal to the requestID in tunnel. Requests and associated data are encapsulated in Packet_Data. Packet_CloseRequest and Packet_CloseResponse are used to forward link resource reclamation. Please refer to the following timing diagram for details:

![img](../../../static/img/docs/core-concepts/tunnel_sequence_diag.jpg)

* Function of RequestInterceptor：
  From the above analysis, It can be seen that the requester should initiate an Http Connect request to build a forwarding link before Yurt-Tunnel-Server forwards the request. However, it's difficult to add corresponding processing to open source components such as Prometheus and metrics-server. Therefore, the request hijacking module——Interceptor is added to Yurt-Tunnel-Server to initiate Http Connect requests.

2) Certificate management

In order to ensure the long-term secure communication of the cloud-edge channel and support https request forwarding, YurtTunnel needs to generate its own certificate and maintain the automatic rotation of the certificate. The specific details are as follows:

```Plain
# 1. Yurt-Tunnel-Server certificate:
# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L45-90
- Certificate store location: /var/lib/yurt-tunnel-server/pki
- CommonName: "kube-apiserver-kubelet-client"  // webhook validation for kubelet server
- Organization: {"system:masters", "openyurt:yurttunnel"} // webhook checksum for kubelet server and auto approve for Yurt-Tunnel-Server certificate
- Subject Alternate Name values: {x-tunnel-server-svc, x-tunnel-server-internal-svc's ips and dns names}
- KeyUsage: "any"

# 2. Yurt-Tunnel-Agent certificate：
# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L94-112
- Certificate store location: /var/lib/yurt-tunnel-agent/pki
- CommonName: "yurttunnel-agent"
- Organization: {"openyurt:yurttunnel"} // auto approve for Yurt-Tunnel-Agent certificate
- Subject Alternate Name values: {NodeName, nodeIP}
- KeyUsage: "any"

# 3. yurt-tunnel certificate application (CSR) is approved by Yurt-Tunnel-Server
# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/csrapprover.go#L115
- monitor csr resources
- filter non yurt-tunnel's csr (no "openyurt:yurttunnel" in Organization)
- approve csrs that have not been approved

# 4. Certificate auto-rotation
# https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/client-go/util/certificate/certificate_manager.go#L224
```

3) Seamlessly route requests of cloud components to the tunnel

Because the requests of cloud components need to be seamlessly forwarded to Yurt-Tunnel-Server, it also means that there is no need to modify the cloud components. Therefore, it is necessary to analyze the requests of cloud components. At present, the operation requests of components mainly include the following two types:

* Type 1: Use Ip address directly, for example: http://{nodeIP}:{port}/{path}
* Type 2: Use domain name, for example: http://{NodeName}:{port}/{path}

For different types of requests, it needs different plans.

Plan 1: Use iptables dnat rules to ensure that type 1 requests are seamlessly forwarded to Yurt-Tunnel-Server

```Shell
# related iptables rules maintenance code: https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/iptables/iptables.go
# iptables dnat rules maintained by Yurt-Tunnel-Server are as follows:
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

Plan 2: Use dns domain name resolution to solve NodeName to access address of Yurt-Tunnel-Server, so that type 2 requests can be seamlessly forwarded to yurt-tunnel. Its working principle is shown in the figure:

![img](../../../static/img/docs/core-concepts/tunnel_dns.jpg)
* Yurt-Tunnel-Server will maintain two Service addresses： 
  * x-tunnel-server-svc: Mainly expose port 10262/10263, used to access Yurt-Tunnel-Server from the public network. Such as Yurt-Tunnel-Agent.
  * x-tunnel-server-internal-svc: Mainly used for cloud components access from the internal network, such as prometheus, metrics-server, etc.
* Yurt-Tunnel-Server has a built-in DNS Controller, dynamically configures Core DNS Host records, and maintains the mapping relationship between NodeName and IP(Cloud Node can reach directly according to IP, that is directly mapped to Node IP;Edge Node needs to communicate through the Tunnel agent, that is mapping to cluster ip of Yurt-Tunnel-Server Internal Service)
* When the cloud component access the Edge Node by NodeName, it will solve domain names through CoreDNS by default. The request for the Edge Node will be directed to the ClusterIP of the internal service of Yurt-Tunnel-Server, and use the forwarding ability of kube-proxy to load the request Balanced into healthy Yurt-Tunnel-Server Pods.
* Yurt-Tunnel-Server will check the requested Host format. When the Host format is NodeName, it will find the correct Agent backend through the node name and forward the data.


4) Port extension

If users want to access other ports on the edge (other than 10250 and 10255), they need to add corresponding dnat rules in iptables or add corresponding port mapping in x-tunnel-server-internal-svc, as shown below:

```Shell

# access port 9051 of the edge for example.
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
  - name: dnat-9051 # add mapping
    port: 9051
    protocol: TCP
    targetPort: 10264
```
The above iptables dnat rules and service port mapping are automatically updated by Yurt-Tunnel-Server. Users just add port configuration in `yurt-tunnel-server-cfg` configmap that is under `kube-system` . The details are as follows:

```Yaml
# Note：Since uncontrollable factors of the certificate, the new port currently only supports forwarding from 10264 of Yurt-Tunnel-Server
apiVersion: v1
data:
  dnat-ports-pair: 9051=10264 # add port=10264(Only support port 10264 to forward)
kind: ConfigMap
metadata:
  name: yurt-tunnel-server-cfg
  namespace: kube-system
```
