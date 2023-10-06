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

Next, we introduce the end-device management function of yurt-iot-dock, using virtual devices as a case study.

### 1. Add device-virtual components manually

To make things easy, we just deploy a virtual device driver device-virtual-go.

It simulates different kinds of devices to generate device data, and users can send commands to get responses from or conduct control instructions to the devices.

First, we need to ensure that edgex-device-virtual is existing in the configmap of the PlatformAdmin framework:

```yaml
# Get the contents of the configmap using kubectl edit
kubectl get cm platformadmin-framework -o yaml

apiVersion: v1
data:
  framework: |
    components:
    - deployment:
        selector:
          matchLabels:
            app: edgex-device-virtual
        strategy: {}
        template:
          metadata:
            creationTimestamp: null
            labels:
              app: edgex-device-virtual
          spec:
            containers:
            - env:
              - name: SERVICE_HOST
                value: edgex-device-virtual
              envFrom:
              - configMapRef:
                  name: common-variables
              image: openyurt/device-virtual:3.0.0
              imagePullPolicy: IfNotPresent
              name: edgex-device-virtual
              ports:
              - containerPort: 59900
                name: tcp-59900
                protocol: TCP
              resources: {}
            hostname: edgex-device-virtual
      name: edgex-device-virtual
      service:
        ports:
        - name: tcp-59900
          port: 59900
          protocol: TCP
          targetPort: 59900
        selector:
          app: edgex-device-virtual
...
```

The device-virtual-go component automatically creates and registers the deviceservice, the 5 different types of devices and their deviceprofiles at startup, and the yurt-iot-dock component synchronizes them all to OpenYurt. So you can check it with kubectl:

```yaml
$ kubectl get deviceservice
NAME                      NODEPOOL   SYNCED   AGE
hangzhou-device-virtual   hangzhou   true     2d1h

$ kubectl get device
NAME                                     NODEPOOL   SYNCED   AGE
hangzhou-random-binary-device            hangzhou   true     2d1h
hangzhou-random-boolean-device           hangzhou   true     2d1h
hangzhou-random-float-device             hangzhou   true     2d1h
hangzhou-random-integer-device           hangzhou   true     2d1h
hangzhou-random-unsignedinteger-device   hangzhou   true     2d1h

$ kubectl get deviceprofile
NAME                                     NODEPOOL   SYNCED   AGE
hangzhou-random-binary-device            hangzhou   true     2d1h
hangzhou-random-boolean-device           hangzhou   true     2d1h
hangzhou-random-float-device             hangzhou   true     2d1h
hangzhou-random-integer-device           hangzhou   true     2d1h
hangzhou-random-unsignedinteger-device   hangzhou   true     2d1h
```

### 2. Create Device, DeviceProfile

In addition to synchronizing devices, device profiles, and device services in edgex by means of preconfigured configurations, the Openyurt side also provides a more general way to create devices and deviceprofiles.

1. Create a DeviceProfile

```yaml
apiVersion: iot.openyurt.io/v1alpha1
kind: DeviceProfile
metadata:
  name: openyurt-created-random-boolean-deviceprofile
spec:
  description: Example of Device-Virtual Created By OpenYurt
  deviceCommands:
  - isHidden: false
    name: WriteBoolValue
    readWrite: W
    resourceOperations:
    - defaultValue: ""
      deviceResource: Bool
    - defaultValue: "false"
      deviceResource: EnableRandomization_Bool
  - isHidden: false
    name: WriteBoolArrayValue
    readWrite: W
    resourceOperations:
    - defaultValue: ""
      deviceResource: BoolArray
    - defaultValue: "false"
      deviceResource: EnableRandomization_BoolArray
  deviceResources:
  - description: used to decide whether to re-generate a random value
    isHidden: true
    name: EnableRandomization_Bool
    properties:
      defaultValue: "true"
      readWrite: W
      valueType: Bool
  - description: Generate random boolean value
    isHidden: false
    name: Bool
    properties:
      defaultValue: "true"
      readWrite: RW
      valueType: Bool
  - description: used to decide whether to re-generate a random value
    isHidden: true
    name: EnableRandomization_BoolArray
    properties:
      defaultValue: "true"
      readWrite: W
      valueType: Bool
  - description: Generate random boolean array value
    isHidden: false
    name: BoolArray
    properties:
      defaultValue: '[true]'
      readWrite: RW
      valueType: BoolArray
  labels:
  - openyurt-created-device-virtual-example
  manufacturer: OpenYurt Community
  model: OpenYurt-Device-Virtual-01
  nodePool: hangzhou
```

This DeviceProfile is just a copy of random-boolean DeviceProfile created by device-virtual-go for demo purpose.

2. Create a Device

Create a virtual device using the pre-synchronized DeviceService and the DeviceProfile created above:

```yaml
apiVersion: iot.openyurt.io/v1alpha1
kind: Device
metadata:
  name: openyurt-created-random-boolean-device
spec:
  adminState: UNLOCKED
  description: Example of Device Virtual
  labels:
  - openyurt-created-device-virtual-example
  managed: true
  nodePool: hangzhou
  notify: true
  operatingState: UP
  profileName: openyurt-created-random-boolean-deviceprofile
  protocols:
    other:
      Address: openyurt-created-device-virtual-bool-01
      Port: "300"
  serviceName: device-virtual
```

Then, we can see the resource objects in OpenYurt through kubectl as below:

```shell
$ kubectl get deviceprofile openyurt-created-random-boolean-deviceprofile
NAME                                            NODEPOOL   SYNCED   AGE
openyurt-created-random-boolean-deviceprofile   hangzhou   true     15h

$ kubectl get device openyurt-created-random-boolean-device
NAME                                     NODEPOOL   SYNCED   AGE
openyurt-created-random-boolean-device   hangzhou   true     14h
```

### 4. Retrieve device generated data

We have already set up the environment and simulated a virtual bool device.

In OpenYurt, we can easily get the latest data generated by devices just by checking the status sub-resource of Device resource object like this:

```shell
$ kubectl get device openyurt-created-random-boolean-device -o yaml
apiVersion: iot.openyurt.io/v1alpha1
kind: Device
metadata:
  annotations:
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"iot.openyurt.io/v1alpha1","kind":"Device","metadata":{"annotations":{},"name":"openyurt-boolean-device","namespace":"default"},"spec":{"adminState":"UNLOCKED","description":"Example of Device Virtual","labels":["openyurt-device-boolean-virtual"],"managed":true,"nodePool":"hangzhou","notify":true,"operatingState":"UP","profileName":"Random-Boolean-Device","protocols":{"other":{"Address":"openyurt-device-boolean-virtual-01","Port":"301"}},"serviceName":"openyurt-boolean-device"}}
  creationTimestamp: "2023-09-14T06:25:10Z"
  finalizers:
  - iot.openyurt.io/device
  generation: 2
  name: openyurt-boolean-device
  namespace: default
  resourceVersion: "1717015"
  uid: 6677eb4a-b644-4d5d-970a-1446f141a353
spec:
  adminState: UNLOCKED
  description: Example of Device Virtual
  deviceProperties:
    Bool:
      desiredValue: "true"
      name: Bool
  labels:
  - openyurt-created-device-virtual-example
  managed: false
  nodePool: hangzhou
  notify: true
  operatingState: UP
  profileName: openyurt-created-random-boolean-deviceprofile
  protocols:
    other:
      Address: openyurt-created-device-virtual-bool-01
      Port: "300"
  serviceName: device-virtual
status:
  adminState: UNLOCKED
  deviceProperties:
    Bool:
      actualValue: "true"
      getURL: http://edgex-core-command:59882/api/v3/device/name/openyurt-boolean-device/Bool
      name: Bool
    BoolArray:
      actualValue: '[true, true, true, false, false]'
      getURL: http://edgex-core-command:59882/api/v3/device/name/openyurt-boolean-device/BoolArray
      name: BoolArray
  edgeId: 5e63effd-deeb-4505-890e-17ec32f02511
  operatingState: UP
  synced: true

```

The deviceProperties shows all the properties of this device.

For example, the Bool property has the latest value false and the value is retrieved from the EdgeX rest api <http://edgex-core-command:59882/api/v2/device/name/openyurt-created-random-boolean-device/Bool>.

### 5. Update the properties of device

If you want to control the device by updating its writable attributes, you should first set the Device.Spec.Managed field to true to indicate that yurt-iot-dock takes over the device, otherwise all update operations will be ignored.

1. Set the managed field of device to true

```shell
kubectl patch device openyurt-created-random-boolean-device -p '{"spec":{"managed":true}}'  --type=merge
```

2. Change the adminState of device

The administrative state (aka admin state) provides control of the device service by man or other systems. It can be set to LOCKED or UNLOCKED. When a device service is set to locked, it is not supposed to respond to any command requests nor send data from the devices.

```shell
kubectl patch device openyurt-created-random-boolean-device -p '{"spec":{"adminState":"UNLOCKED"}}'  --type=merge
```

Set the DeviceProperties to control/update device

```shell
kubectl patch device openyurt-created-random-boolean-device --type=merge -p '{"spec":{"managed":true,"deviceProperties":{"Bool": {"name":"Bool", "desiredValue":"false"}}}}'
```

In the command, we set the Bool DeviceProperty value to false, yurt-iot-dock will trigger a EdgeX command and change the property of the device. We can check this by watch the status of device for multiple times, you will find the value is always false unless you change this property to true again.

```shell
watch "kubectl get device openyurt-created-random-boolean-device -o json | jq '.status.deviceProperties.Bool.actualValue'"

# output
Every 2.0s: kubectl get device openyurt-boolean-device -o json | jq '.status.deviceProperties.Bool.actualValue'                                VM-16-6-ubuntu: Sat Sep 16 16:39:58 2023

"false"

```
