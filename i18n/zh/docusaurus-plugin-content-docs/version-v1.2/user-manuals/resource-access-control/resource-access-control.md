---
title: 可编程的资源访问控制
---

## Background introduction

In the cloud-edge architecture, The response for edge components(like kube-proxy or user pods) requests from the cloud kube-apiserver can be performed with some customized processing, in order to better meet the specific needs of edge scenarios. For example, when kubelet gets the default/kubernetes service, kubelet expects the service includes the accessible kube-apiserver address instead of the native service ClusterIP address, so pods on edge nodes can use InClusterConfig to access cloud kube-apiserver seamlessly.

## Architecture design

The programmable data filtering framework is built into the YurtHub component, and the response data for specified requests from cloud kube-apiserver will go through a chain of filters and non-perception and on-demand transformation of the response data will be carried out, so as to meet the specific requirements in the cloud-edge collaboration scenario. As described in the below Figure.

![resource-access-control](../../../../../../static/img/docs/user-manuals/resource-access-control/resource-access-control.png)

Four filters are supported in the filters chain at present as follows:
- masterservice filter: is used to mutate the ClusterIP and https port of master service(default/kubernetes service) to address that YurtHub component is listening in order to make pods using InClusterConfig on edge nodes to access cloud kube-apiserver through YurtHub component without perception.
- servicetopology filter: is used to reassemble endpointslices according to the service topology setting of service in order to ensure the traffic accessing the service can only be forwarded to pods in the same NodePool.
- discardcloudservice filter: is used to discard LoadBalancer service for kube-proxy components on edge nodes because cloud service cannot be accessed through pod IP.
- inclusterconfig filter: is used to comment kubeconfig setting in kube-system/kube-proxy configmap in order to make kube-proxy components to use InClusterConfig to access cloud kube-apiserver on edge nodes

And each filter can process only the response data of specific requests as following:
the Whether the response data is processed by above filters is determined by the request triples: component/resource/verbs
- component: represents the User-Agent in the http request header, like kube-proxy
- resource: represents the requested resource, like endpointslices
- verbs: represents the verb of http request, like get, list, watch

and resource and verbs 


## How to use

Each filter can process only the response data of specific requests that determined by component/resource/verbs.
- component: represents the User-Agent in the http request header, like kube-proxy
- resource: represents the requested resource, like endpointslices
- verbs: represents the verb of http request, like get, list, watch

Each filter supports the following requests(components can be configured by user, but resource and verbs are fixed):

| Filter        | Default components  | resources | verbs |
|---------------|---------------------|-----------|-------|
| masterservice | kubelet | services | list, watch |
| servicetopology | kube-proxy, coredns, nginx-ingress-controller | endpoints, endpointslices | list, watch |
| discardcloudservice | kube-proxy | services | list, watch |
| inclusterconfig | kubelet | configmaps | get, list, watch |

Moreover, if the response for other clients also want to be handled by filters, user can configure the kube-system/yurt-hub-cfg configmap as following:

```
// configured response for clients named foo and bar can be handled by servicetopology
apiVersion: v1
kind: ConfigMap
metadata:
  name: yurt-hub-cfg
data:
  servicetopology: "foo, bar"
```
