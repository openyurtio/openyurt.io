---
title: coredns
---

** 1. In the edge node pool, cross-node Pods can be accessed through PodIP, but cannot be accessed through service**

First, it can be accessed through podIP, indicating that the cross-node container network (such as vxlan of flannel) is normal, and then the service cannot be accessed, which can be analyzed as follows:
- In the net namespace of the pod, whether to directly access the service clusterIP is reachable
- If it is unreachable, it means that kube-proxy may have a problem with the configuration of the backend instance of the service. Generally, it is a problem with the service topology. You can refer to the problem for analysis [On the edge node, the service topology capability does not take effect](./yurthub.md)
- If it is reachable through service clusterIP, it means domain name resolution problem. then we can check the dns problem.
  1. Enter the net and mount namespace of the pod, check the contents of the /etc/resolv.conf file, and see the address of the dns nameserver, which is usually the clusterIP of the kube-dns service
  2. Execute the command: `dig @{dns nameserver} {service name}`, and check whether a resolution result can be returned or not.
  3. Execute the command: `dig @{CoreDNS pod ip} {service name}`, and check whether a resolution result can be returned or not.
  4. If `dns nameserver` can not work but `CoreDNS pod ip` can work, this means that traffic of kube-dns service can not be forwarded to the accessible CoreDNS pod instances. maybe service topology routing selection of kubed-dns service does not take effect, you can refer to the Yurthub problem [On the edge node, the Service topology capability does not take effect](./yurthub.md)