---
title: coredns
---

** 1. 边缘节点池中，跨节点的Pod间通过PodIP可以访问，但是通过service无法访问**

首先通过podIP可以访问，说明跨节点的容器网络(如flannel的vxlan)是正常的，然后是service不能访问的问题，可以如下来分析：
- 在pod的net namespace内，直接访问service clusterIP是否可达
- 如果不可达，说明kube-proxy对service的后端实例配置可能出问题，一般是service topology的问题，分析可以参照问题【边缘节点上，Service topology能力未生效】
- 如果通过service clusterIP可达，说明是域名解析的问题。可以按下面方法分析：
- 进入pod的net和mount namespace，查看/etc/resolv.conf 文件内容，看dns nameserver地址，一般是kube-dns service的clusterIP
- 执行命令：`dig @{dns nameserver} {service name}` 发现不通
- 执行命令： `dig @{coreDNS pod ip} {service name}` 可以通
- 说明是kubed-dns service的服务拓扑路由选择没有生效，可以参照Yurthub问题【边缘节点上，Service topology能力未生效】