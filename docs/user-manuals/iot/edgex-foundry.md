---
title: EdgeX Foundry
---


This document mainly describes how to deploy the EdgeX system and YurtIoTDock component on an existing OpenYurt cluster using PlatformAdmin. In OpenYurt v1.4, we have upgraded the original yurt-edgex-manager and yurt-device-controller components. The former is now integrated into yurt-manager, allowing users to create PlatformAdmin resources with just a few lines of configuration to build a complete EdgeX system within the node pool. The latter has been renamed to yurt-iot-dock and will be automatically deployed to the edge side during PlatformAdmin creation, providing users with the capability to easily manage end devices with a single click.

If you don't have an OpenYurt on hand, you can use [yurtctl](https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md) to create one or convert from an exist Kubernetes cluster.

# Environment

- OpenYurt v1.4.0+
- You should first install `Yurt-app-manager`
- Deploy CoreDNS for every edge node
- Set ServiceTopology to `kubernetes.io/hostname` for CoreDNS service. For details, please refer to [ServiceTopology](https://openyurt.io/docs/user-manuals/network/service-topology)

## 1. Create Node Pool
First, differentiate the cloud and edge nodes by labeling them. Label the openyurt-worker node as a cloud node, and label the openyurt-worker2 node as an edge node.
```powershell
# Label the openyurt-worker node as a cloud node
$ kubectl label node openyurt-worker openyurt.io/is-edge-worker="false"
# Label the openyurt-worker2 node as an edge node
$ kubectl label node openyurt-worker2 openyurt.io/is-edge-worker="true"
```

Create a cloud node pool named 'beijing' and add the cloud node (openyurt-worker) to the 'beijing' node pool.

```powershell
# Create beijing node pool
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: beijing
spec:
  type: Cloud
EOF

# Add the cloud node (openyurt-worker) to the 'beijing' node pool
$ kubectl label node openyurt-worker apps.openyurt.io/desired-nodepool=beijing

# Check the status of the node pool
$ kubectl get nodepool
NAME       TYPE    READYNODES   NOTREADYNODES   AGE
beijing    Cloud   1            0               4m22s
```

Create an edge node pool named 'shanghai' and add the edge node to the 'shanghai' node pool


```powershell
# Create shanghai node pool
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: shanghai
spec:
  type: Edge
EOF

# Add the edge node (openyurt-worker2) to the 'shanghai' node pool
$ kubectl label node openyurt-worker2 apps.openyurt.io/desired-nodepool=shanghai

# Check the status of the node pool
$ kubectl get nodepool
NAME       TYPE    READYNODES   NOTREADYNODES   AGE
beijing    Cloud   1            0               4m22s
shanghai   Edge    1            0               3m39s
```

## 2. Create an IoT system PlatformAdmin within the node pool

Configure the EdgeX version and choose to create it within the 'shanghai' node pool

```powershell
# Create the EdgeX version 'minnesota' within the 'shanghai' node pool
$ cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: shanghai
EOF

# Check the deployment status
$ kubectl get po
NAME                                                              READY   STATUS    RESTARTS        AGE
edgex-app-rules-engine-shanghai-8tnnj-65db7c5c46-bst8b            1/1     Running   0               3m54s
edgex-core-command-shanghai-6q8zr-6d88f9f66b-5qtsp                1/1     Running   1 (2m44s ago)   3m55s
edgex-core-common-config-bootstrapper-shanghai-whtmd-74ddctldvb   1/1     Running   0               3m54s
edgex-core-consul-shanghai-972wx-796f644c7f-tnspb                 1/1     Running   0               3m55s
edgex-core-data-shanghai-r6c2g-7879ffb76-zzhfb                    1/1     Running   1 (2m23s ago)   3m55s
edgex-core-metadata-shanghai-5qdcn-549bf54564-cpzdf               1/1     Running   0               3m55s
edgex-device-rest-shanghai-ncdzs-6ccf98ddfb-zbzrj                 1/1     Running   1 (2m32s ago)   3m55s
edgex-device-virtual-shanghai-9tz4g-d6cc8d9c-8j9v5                1/1     Running   0               3m54s
edgex-kuiper-shanghai-c26wk-65cf99c6fc-wgs6r                      1/1     Running   0               3m54s
edgex-redis-shanghai-ztpbz-5655bb88dd-6hzfs                       1/1     Running   0               3m54s
edgex-support-notifications-shanghai-59qt8-6695cb4bc8-8sln5       1/1     Running   0               3m53s
edgex-support-scheduler-shanghai-kd665-5599dcc995-gpz7j           1/1     Running   0               3m53s
edgex-ui-go-shanghai-b67c6-5f85b98658-568lk                       1/1     Running   0               3m55s
```