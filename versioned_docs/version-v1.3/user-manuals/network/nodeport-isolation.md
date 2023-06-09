---
title: nodeport-isolation
---

## Background introduction

This feature originated from a community requirement, which can be found in the detailed discussion on issue [#1183](https://github.com/openyurtio/openyurt/issues/1183).

> In edge network scenarios, service isolation is required. For example, when using a NodePort type service, it should only serve specific node pools.

## Architecture design

A new filter named `nodeportisolation` has been introduced to handle this feature, and a new annotation `nodeport.openyurt.io/listen` has been added for NodePort services to trigger the nodeportisolation filter in YurtHub.
The nodeportisolation filter reassembles responses for kube-proxy list/watch service requests according to the `nodeport.openyurt.io/listen` annotation settings in the service.

For more information on the detailed design of the data filtering framework, please refer to [resource-access-control](../resource-access-control/resource-access-control.md).

## How to use

The introduction of the `nodeport.openyurt.io/listen` annotation for NodePort/LoadBalancer services is as follows:

- Key: nodeport.openyurt.io/listen

- Value: A list of node pool names separated by ','

  - `foo`: Enable the specified NodePort service to listen on nodes in the NodePool named foo.
  - `-foo`: Disable the specified NodePort service from listening on nodes in the NodePool named foo.
  - `*`: Enable the specified NodePort service to listen on nodes in all NodePools.
  - If a NodePool name is duplicated in the configuration, the first configuration will be used.
  - If a NodePool name is not configured, NodePort listening will be disabled on nodes in these unconfigured NodePools.
  - Orphan nodes (not located in a NodePool) will be treated the same as in native Kubernetes, so NodePort will be listened on orphan nodes.

- Annotation setting examples:

```
  - `nodeport.openyurt.io/listen=foo, bar`: Enable NodePort service listening on nodes in `foo` and `bar` NodePools.
  - `nodeport.openyurt.io/listen=foo, *`: Enable NodePort service listening on nodes in all NodePools.
  - `nodeport.openyurt.io/listen=-foo, -bar`: Disable NodePort service listening on nodes in all NodePools.
  - `nodeport.openyurt.io/listen=-foo, *`: Disable NodePort service listening only on nodes in `foo` NodePool.
  - `nodeport.openyurt.io/listen=foo,-foo`: Enable NodePort service listening on nodes in `foo` NodePool.
  - `nodeport.openyurt.io/listen=-foo`: Disable NodePort service listening on nodes in all NodePools (including `foo` NodePool).
```
