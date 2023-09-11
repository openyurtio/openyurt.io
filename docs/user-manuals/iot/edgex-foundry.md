---
title: EdgeX Foundry
---

This document mainly describes how to deploy the EdgeX system and YurtIoTDock component on an existing OpenYurt cluster using PlatformAdmin.

In OpenYurt v1.4, we have upgraded the original yurt-edgex-manager and yurt-device-controller components. The former is now built-in within yurt-manager, allowing users to create PlatformAdmin resources by writing YAML files. With just a few lines of configuration, a complete EdgeX system can be built within the node pool. The latter has been renamed as yurt-iot-dock and will be automatically deployed to the edge side when PlatformAdmin is created. This facilitates the one-click management of edge devices for users.

If you don't have an OpenYurt cluster yet, you can use the yurtadm tool to initialize an OpenYurt cluster or convert an existing Kubernetes cluster into an OpenYurt cluster.

## Environment

- OpenYurt v1.4.0+
- You should first install `yurt-manager`
- Nodes outside the same local network as the master node need to deploy a coreDNS pod.
- Set ServiceTopology to `kubernetes.io/hostname` for CoreDNS service. For details, please refer to [ServiceTopology](https://openyurt.io/docs/user-manuals/network/service-topology)

## Device platform management

### 1. Create Node Pool

First, create two nodepools: one is a cloud nodepool named "beijing", and the other is an edge nodepool named "hangzhou".

```shell
# Create beijing nodepool
cat << EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: beijing
spec:
  type: Cloud
EOF

# Create hangzhou nodepool
cat << EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1beta1
kind: NodePool
metadata:
  name: hangzhou
spec:
  type: Edge
EOF
```

Next, add the specified nodes to their respective node pools. Label the node "openyurt-worker" as a cloud node, and label the node "openyurt-worker2" as an edge node.

```shell
# Mark "openyurt-worker" as a cloud node
kubectl label node openyurt-worker apps.openyurt.io/nodepool=beijing
# Mark "openyurt-worker2" as an edge node
kubectl label node openyurt-worker2 apps.openyurt.io/nodepool=hangzhou
```

Finally, check the status of the nodepools to ensure they are in a healthy state.

```shell
# Check the status of the nodepools
kubectl get np
NAME       TYPE    READYNODES   NOTREADYNODES   AGE
beijing    Cloud   1            0               4d18h
hangzhou   Edge    1            0               4d18h
```

### 2. Create the IoT system PlatformAdmin within the node pool

Configure the use of the EdgeX version and select to create it within the "hangzhou" nodepool.

```shell
# Create an EdgeX deployment of the "Minnesota" version within the "hangzhou" node pool
cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
EOF

# Verify the deployment status to ensure everything is set up correctly
kubectl get po
NAME                                                              READY   STATUS    RESTARTS   AGE
edgex-core-command-hangzhou-4j6pz-8668ff94d7-hqw2r                1/1     Running   0          61s
edgex-core-common-config-bootstrapper-hangzhou-jnw2q-57bd99xr9p   1/1     Running   0          61s
edgex-core-consul-hangzhou-6p9tj-798489c647-6xz4m                 1/1     Running   0          61s
edgex-core-metadata-hangzhou-6l7v5-6f964fc4f-67f9p                1/1     Running   0          61s
edgex-redis-hangzhou-cwgsw-5c7d7fc478-fsgp9                       1/1     Running   0          61s
```

### 3. Deploy optional components

In the current version (v1.4.0) of PlatformAdmin, you can use the "components" field to deploy optional components with a single command. Below is an example of deploying "yurt-iot-dock," "edgex-device-virtual," and "edgex-device-rest" using the "components" field:

```shell
# Add the "components" field on top of the previously deployed PlatformAdmin
cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
  components:
  - name: yurt-iot-dock
  - name: edgex-device-virtual
  - name: edgex-device-rest
EOF

# You can see that the optional components have been deployed
kubectl get po
NAME                                                              READY   STATUS    RESTARTS   AGE
edgex-core-command-hangzhou-cwgs2-77bb5d9cdd-zp89r                1/1     Running   0          20m
edgex-core-common-config-bootstrapper-hangzhou-bqhnb-57bd9c4q5q   1/1     Running   0          20m
edgex-core-consul-hangzhou-5rl7c-66dbc9c7d7-dqvm8                 1/1     Running   0          20m
edgex-core-metadata-hangzhou-srpff-dd6c6f9cb-2cj9k                1/1     Running   0          20m
edgex-device-rest-hangzhou-v7p99-7b8bb4f5d4-kz8sq                 1/1     Running   0          7m49s
edgex-device-virtual-hangzhou-ssz59-796f948c69-5k4tc              1/1     Running   0          7m49s
edgex-redis-hangzhou-bk5g5-5fbdf6fffb-cmf6d                       1/1     Running   0          20m
yurt-iot-dock-hangzhou-56f98-8549f848f5-v2pjn                     1/1     Running   0          7m49s
```

### 4. Modify component configuration

PlatformAdmin provides advanced users with an entry point for custom configurations. All configurations of PlatformAdmin are controlled by a configmap named "platformadmin-framework". By modifying the values of this configmap, users can modify the configuration of each component. Here is an example of the "platformadmin-framework" configmap:

```yaml
apiVersion: v1
data:
  framework: |
    components:
    - deployment:
        selector:
          matchLabels:
            app: edgex-core-command
        strategy: {}
        template:
          metadata:
            creationTimestamp: null
            labels:
              app: edgex-core-command
          spec:
            containers:
            - env:
              - name: SERVICE_HOST
                value: edgex-core-command
              - name: EXTERNALMQTT_URL
                value: tcp://edgex-mqtt-broker:1883
              envFrom:
              - configMapRef:
                  name: common-variables
              image: openyurt/core-command:3.0.0
              imagePullPolicy: IfNotPresent
              name: edgex-core-command
              ports:
              - containerPort: 59882
                name: tcp-59882
                protocol: TCP
              resources: {}
            hostname: edgex-core-command
      name: edgex-core-command
      service:
        ports:
        - name: tcp-59882
          port: 59882
          protocol: TCP
          targetPort: 59882
        selector:
          app: edgex-core-command
...
```

### 5. Add components manually

Considering that some users may need to add their own custom components or modify existing components, the component mechanism of PlatformAdmin also supports adding new components. To add a new component, please follow these steps:

#### Configure PlatformAdmin

Add the name of the component you want to add to the "components" field in PlatformAdmin. For example, if we want to add a component named "nginx-demo."

```shell
# Add nginx-demo in components
cat <<EOF | kubectl apply -f -
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
  components:
  - name: yurt-iot-dock
  - name: edgex-device-virtual
  - name: edgex-device-rest
  - name: nginx-demo
EOF
```

#### Edit PlatformAdminFramework

Since the AutoCollector does not collect a standard configuration file for the "nginx-demo" component, there is no corresponding configuration in the platformadmin-framework. In this case, users can manually add this component.

```yaml
# Modify the contents of the configmap using kubectl edit
kubectl edit cm platformadmin-framework

# Added deployment and service for nginx-demo
apiVersion: v1
data:
  framework: |
    components:
    - deployment:
        selector:
          matchLabels:
            app: nginx-demo
        strategy: {}
        template:
          metadata:
            creationTimestamp: null
            labels:
              app: nginx-demo
          spec:
            containers:
            - image: nginx
              imagePullPolicy: IfNotPresent
              name: nginx-demo
              ports:
              - containerPort: 80
                name: nginx
                protocol: TCP
              resources: {}
            hostname: nginx-demo
      name: nginx-demo
      service:
        ports:
        - name: nginx
          port: 80
          protocol: TCP
          targetPort: 80
        selector:
          app: nginx-demo
...
```

## End device management

 TODO: Introduce the end device management function of yurt-iot-dock
