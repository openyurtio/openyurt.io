---
title: programmable resource access control
---

## Background introduction

In the cloud-edge collaboration scenarios, The response for edge components(such as kube-proxy or user pods) from the cloud kube-apiserver can be performed with customized processing to meet the specific needs of edge scenarios. For Instance, when kubelet retrieves the `default/kubernetes` service, it expects the service to include the accessible kube-apiserver address rather than the native service ClusterIP address. This allows pods on edge nodes to seamlessly use InClusterConfig to access cloud kube-apiserver.

## Architecture design

The programmable data filtering framework is built into the YurtHub component. Response data for specified requests from cloud kube-apiserver passes through a chain of filters, enabling non-perception and on-demand transformation of the response data to meet the specific requirements in the cloud-edge collaboration scenarios. As show in the figure below.

![resource-access-control](../../../../static/img/docs/user-manuals/resource-access-control/resource-access-control.png)

Currently, the filters chain supports five filters as follows:
- masterservice filter: Mutates the ClusterIP and HTTPS port of the `default/kubernetes` service to the address that the YurtHub component is listening to, enabling pods using InClusterConfig on edge nodes to access the cloud kube-apiserver through the YurtHub component without perception.
- servicetopology filter: Reassembles endpointslices according to the service topology setting of the service, ensuring that traffic accessing the service can only be forwarded to pods in the same node or NodePool.
- discardcloudservice filter: Filter out the LB service in the service obtained by kube-proxy, as the edge currently does not support LB service.
- inclusterconfig filter: Comments on kubeconfig settings in the kube-system/kube-proxy configmap to enable kube-proxy components to use InClusterConfig to access the cloud kube-apiserver on edge nodes.
- nodeportisolation filter: By filtering NodePort services based on the `nodeport.openyurt.io/listen` annotation configuration of the Service, NodePort services can be listened to exclusively within specified NodePools, instead of on all nodes across the entire cluster.

Each filter processes only the response data of specific requests determined by the request triples: component/resource/verbs
- component: represents the User-Agent in the HTTP request header, such as kube-proxy.
- resource: represents the requested resource, such as endpointslices.
- verbs: represents the verb of the HTTP request, such as get, list, watch.

## How to use

Each filter processes only the response data of specific requests determined by component/resource/verbs, as mentioned above.
The following table shows the default components, resources, and verbs supported by each filter:

| Filter        | Default components                            | resources | verbs |
|---------------|-----------------------------------------------|-----------|-------|
| masterservice | kubelet                                       | services | list, watch |
| servicetopology | kube-proxy, coredns, nginx-ingress-controller | endpoints, endpointslices | list, watch |
| discardcloudservice | kube-proxy                                    | services | list, watch |
| inclusterconfig | kubelet                                       | configmaps | get, list, watch |
| nodeportisolation | kube-proxy                                    | services | list, watch |

Additionally, if the response for other clients also needs to be handled by filters, users can configure the kube-system/yurt-hub-cfg configmap as follows:

Note: Please ensure that configure the configmap before running client pod.

```
// configured response for clients named foo and bar can be handled by servicetopology
apiVersion: v1
kind: ConfigMap
metadata:
  name: yurt-hub-cfg
data:
  servicetopology: "foo, bar"
```
