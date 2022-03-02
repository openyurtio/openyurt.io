---
title: YurtHub
---

## 1. Function Introduction

As an important component of OpenYurt, Yurthub provides many expansion capabilities for the edge side in the cloud edge scene.

### 1）Edge autonomy

At present, openyurt provides the edge autonomy function: that is, when the cloud edge network is disconnected and the edge node or business container is restarted, the business container can be restored automatically at the edge node without being evicted and rescheduled by the cloud.

Yurthub caches resources locally, so that pod and kubelet can also obtain the required resources through YurtHub to keep them running normally in the case of cloud-edge network disconnection.

![img](../../../static/img/docs/core-concepts/yurthub-autonomy.png)

### 2）Service topology

In a native K8S cluster, the back-end scope of the Service resource is the entire cluster. In OpenYurt, you can use NodePool to divide nodes and manage node partitions. Thus, resource management can be based on nodepools, such as managing Pod resources in different nodepools using UnitedDeployment.  

In this context, resources in different node pools are independent to some extent. Nodes in a partition may require Service access traffic to flow only in the same partition rather than across node partitions. Therefore, YurtHub provides a traffic closed-loop function: the back-end of a Service is restricted to the same nodepool, so that the access traffic of a Service only flows in the same nodepool.  


![img](../../../static/img/docs/core-concepts/yurthub-service-topology.png)

### 3）Pod seamless migration

In a native K8S cluster, by default, Pod accesses Kube APIServer via the InClusterConfig address.  However, in the cloud edge scene, the cloud and the edge may be on the different network planes, in which case Pod cannot access Kube APIServer through the InClusterConfig address.  At the same time, in the case of cloud edge disconnection, when edge Pod needs to restart, it fails to connect to Kube APIServer for resource configuration.  

In order to solve the above two problems, YurtHub provides Pod zero-modification migration capabilities to edge environments. For the Pod that accesses Kube APIServer using InClusterConfig, YurtHub automatically adjusts the Pod access address on the node without modifying the configuration of the Pod itself, and forwards the Pod request to YurtHub. So that Pod can run normally even when the cloud-edge network is disconnected, and realize the seamless migration of Pod from cloud scene to cloud edge scene.  

![img](../../../static/img/docs/core-concepts/yurthub-pod.png)

### 4）Support multi-cloud addresses access 

YurtHub supports multi-cloud addresses access to meet the situation that multiple Kube APIServer work simultaneously in the private cloud scenario, and private line and public network communication work simultaneously in the edge computing scenario.

There are two load balancing modes for cloud addresses in YurtHub:

- **rr(round-robin):** indicates the round robin mode. This mode is selected by default.  
- **priority:** indicates the priority mode. The low priority address is used only after the high priority address fails.

### 5）Node Certificate Management

Currently, YurtHub acts as a client to forward requests to Kube APIServer. Meanwhile, YurtHub provides HTTP and HTTPS service ports. Pod and Kubelet can connect to YurtHub through HTTP or HTTPS. At this point, YurtHub serves as the server to receive Pod and Kubelet requests on the node. To ensure secure communication between cluster components, YurtHub must have client and server certificates and manage them.  

The client certificate and server certificate of YurtHub use the automatic rotation function of node certificate in kubernetes. When the node certificate expires, it will automatically apply for a new node certificate from the cloud. In addition,  it also solves the problems of certificate rotation failure caused by the disconnection of cloud-edge network and the rotation failure again when the certificate has expired when the network is restored.



## 2. Component architecture

Yurthub can run on both cloud nodes and edge nodes. Therefore, it supports two working modes: "edge" and "cloud".

### 1）Edge mode


For YurtHub in "edge" mode, its component architecture is shown in the picture below.  

![img](../../../static/img/docs/core-concepts/yurthub-edge.png)

The flow of requests through YurtHub is clearly shown in the above architecture picture.

- When the cloud-edge network is in good condition, the requests of the Pod and Kubelet are sent to Kube APIServer through Load Balancer. After receiving the response message, the Load Balancer performs data filtering on the response message. Resources in the response body are cached locally based on the request type before the response is returned to the requester.  
- When the cloud-edge network is disconnected, the requests of the Pod and Kubelet are processed by the Local Proxy. The Local Proxy operates the local cache data and returns the response information.  

According to data flow, modules in YurtHub can be simply divided into cloud service modules and local service modules.  

The local service module mainly consists of the following sub-modules:

- **Local Proxy **

  Responsible for handling resource requests of Pod and Kubelet in the case of cloud-edge network disconnection, so that the requester can be unaware of network disconnection. When the Local Proxy processes requests, it constructs response information and returns corresponding resources for locally supported operations (Get, List, and Watch). For operations (Delete, Create, Update, etc.) that are not supported locally, failure information is displayed. The Cache Manager module is called in the above processes.  

- **Cache Manager** 

  Responsible for local storage and retrieval of resources. This method is used by Load Balancer to store response messages locally and Local Proxy to obtain resources from the disk.  

- **Storage Manager** 

  Defines basic methods for manipulating resources on disks, including Create, Update, Delete, Get, and List. The final resources are stored on local disk in serialized format.  

- **Network Manager**

  It mainly creates a dummy network interface (name: yurthub-dummy0, IP: 169.254.2.1) on nodes. Non-host network pods access Yurthub through this dummy network interface.  

The cloud service module mainly includes the following sub-modules:

-  **Certificate Manager**
   
   Responsible for managing the needed information when YurtHub connect to the Kube APIServer, including YurtHub client certificate and cluster CA certificate. 
   
-  **Health Check**
   
   Responsible for periodically checking whether Kube APIServer is accessible and setting the health status of Kube APIServer as the basis for forwarding requests to cloud or local processing. In addition, the heartbeat sent by Kubelet is intercepted by YurtHub, and Health Check is responsible for updating YurtHub's heartbeat information to the cloud.  
   
-  **Load Balancer**
   
   Responsible for establishing a connection with Kube APIServer and forwarding the requests of Pod and Kubelet to the cloud. LB module supports multi-cloud addresses access, and the load balancing mode of the cloud can be round-robin or priority mode.  
   
   In addition, the LB module is responsible for processing response messages and local caching, which calls the Data Filtering Framework module for response processing and the Storage Manager module for local caching.  
   
-  **Data Filtering Framework**
   
   Data filtering is performed on response messages to extend YurtHub's capabilities. Three filters are currently included:  
   
   - **MasterService Filter:** Provides the ability to the business pod which use InClusterConfig to run in the edge environment with zero modification.
   - **ServiceTopology Filter:** Provides the ability of closed-loop traffic, limiting the back-end of service access to the nodepool where the node is located.
   
   - **DiscardCloudService Filter:** When the cloud and the edge are on the different network planes, the edge accesses the back-end service through the public network rather than PodIP to ensure that the edge can access the back-end service correctly.  
   
-  **GC Manager**
   
   Every time YurtHub restarts, the pod resources that stored on the node but no longer exist in the cloud are recycled. After that, recycle and delete the kubelet and kube-proxy event resources that cached on the node at regular intervals.



### 2）Cloud mode
For YurtHub in "cloud" mode, its component architecture is shown in the picture below.  

![img](../../../static/img/docs/core-concepts/yurthub-cloud.png)

Compared with edge mode, because the cloud network is stable, there is no need to detect the connection status between nodes and Kube APIServer, YurtHub forwards all requests to Kube APIServer, and YurtHub does not need cache data locally. Therefore, YurtHub in cloud mode turns off the modules that related to processing requests locally.  



## 3. Startup parameters

```plain
--bind-address		default: "127.0.0.1"
```
YurtHub server IP address, used together with --serve-port.  

```plain
--serve-port		default: "10267"
```
YurtHub Port for processing HTTP requests.

```plain
--proxy-port		default: "10261"
```
Port that forwards HTTP requests. HTTP requests destined for this port are forwarded to kube-apiserver.  

```plain
--proxy-secure-port		default: "10268"
```
Port that forwards HTTPS requests. HTTP requests destined for this port are forwarded to kube-apiserver.  

```plain
--server-addr
```
Kube-apiserver address. The value is in the format of "server1,server2..." .  

```plain
--cert-mgr-mode		default: "hubself"
```
Configure the certificate used by YurtHub. If the value is hubself, the certificate applied by YurtHub is used. The other modes are not currently supported.  

```plain
--kubelet-ca-file		default: "/etc/kubernetes/pki/ca.crt"
```
Path of the CA file used by Kubelet.

```plain
--kubelet-client-certificate		default: "/var/lib/kubelet/pki/kubelet-client-current.pem"
```

Path of the Kubelet client certificate.

```plain
--gc-frequency		default: 120
```

GC frequency. (unit: minutes).

```plain
--node-name
```

Specifies the name of the node where YurtHub resides.

```plain
--lb-mode		default: "rr"
```

Load balancing mode for cloud addresses.

```plain
--heartbeat-failed-retry		default: 3
```

The number of retries after YurtHub heartbeat information update failed.

```plain
--heartbeat-healthy-threshold		default: 2
```

The number of consecutive times Kube APIServer has been detected as healthy before being set to health again.  

```plain
--heartbeat-timeout-seconds		default: 2
```

When YurtHub updates heartbeat information, the time of connection timeout (unit: seconds).

```plain
--max-requests-in-flight		default: 250
```

Limit on the total number of concurrent YurtHub requests.

```plain
--join-token
```

Bootstrap token. When -- cert-Mgr-mode is "hubself", YurtHub applies for a certificate through join-token.

```plain
--root-dir		default: "/var/lib/yurthub"
```

Directory where YurtHub files are stored.

```plain
--version
```

YurtHub version information.

```plain
--profiling		default: true
```

Whether to enable profile.

```plain
--enable-dummy-if		default: true
```

Specifies whether to create a dummy network interface(name: yurthub-dummy0).  

```plain
--enable-iptables		default: true
```

Whether to enable iptables management.

```plain
--dummy-if-ip		default: "169.254.2.1"
```

YurtHub IP address of the dummy network interface, used to connect to YurtHub inside containers.  The value cannot be 169.254.31.0/24 or 169.254.1.1/32.  

```plain
--dummy-if-name		default: "yurthub-dummy0"
```

The name of the YurtHub dummy network interface.

```plain
--disk-cache-path		 default: "/etc/kubernetes/cache/"
```

YurtHub Directory that caches cloud data.

```plain
--access-server-through-hub		default: true
```

Whether Pod connects to Kube-Apiserver through YurtHub.

```plain
--enable-resource-filter		default: true
```

Whether to enable the YurtHub's response filtering function.

```plain
--disabled-resource-filters
```
List of closed filters. All filters are turned on by default.

```plain
--nodepool-name
```

Nodepool where YurtHub resides.

```plain
--working-mode		default: "edge"
```

YurtHub working mode. If the value is "edge", it indicates the edge node. If the value is "cloud", it indicates the cloud node.  

```plain
--kubelet-health-grace-period		default: 40s
```

The time that allowed kubelet remain unresponsive, after which YurtHub will no longer send heartbeat messages.  