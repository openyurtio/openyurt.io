---
title: EdgeX Foundry
---

This document demonstrates how to install Yurt-Device-Controller,Yurt-EdgeX-Manager, and manage edge leaf devices via cloud native style based on virtual devices.

For more details about these two components, please refer to [Yurt-Device-Controller](https://github.com/openyurtio/yurt-device-controller), [Yurt-EdgeX-Manager](https://github.com/openyurtio/yurt-edgex-manager)

If you don't have an OpenYurt on hand, you can use [yurtctl](https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md) to create one or convert from an exist Kubernetes cluster.

# Environment

- OpenYurt v0.5.0+
- You should first install [Yurt-app-manager](https://github.com/openyurtio/yurt-app-manager).

- Deploy CoreDNS for every edge node
- Set ServiceTopology to `kubernetes.io/hostname` for CoreDNS service. For details, please refer to [ServiceTopology](https://openyurt.io/docs/user-manuals/network/service-topology)

# 1. install yurt-edgex-manager and create an EdgeX insatnce

install yurt-edgex-manager

```bash
$ kubectl apply -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml

# check status of yurt-edgex-manager
$ kubectl get pods -n edgex-system |grep edgex
edgex-controller-manager-6c99fd9f9f-b9nnk   2/2     Running   0          6d22h
```

Create a nodepool named hangzhou, join node into this nodepool.

```bash
$ export WORKER_NODEPOOL="hangzhou"
$ export EDGE_NODE="node1"

# create nodepool hangzhou
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: $WORKER_NODEPOOL
spec:
  type: Edge
EOF

# join edge node into nodepool hangzhou
$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool=hangzhou

# check node status
$ kubectl get nodepool
NAME      TYPE   READYNODES   NOTREADYNODES   AGE
hangzhou   Edge   0            1               6d22h
```

create EdgeX Foundry instance in nodepool hangzhou and deploy [edgex-device-virtual](https://github.com/edgexfoundry/device-virtual-go)

```yaml
apiVersion: device.openyurt.io/v1alpha1
kind: EdgeX
metadata:
  name: edgex-sample-beijing
spec:
  version: jakarta
  poolname: hangzhou
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    org.edgexfoundry.service: edgex-device-virtual
  name: edgex-device-virtual
spec:
  replicas: 1
  selector:
    matchLabels:
      org.edgexfoundry.service: edgex-device-virtual
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        org.edgexfoundry.service: edgex-device-virtual
    spec:
      hostname: edgex-device-virtual
      nodeSelector:
        apps.openyurt.io/nodepool: hangzhou
      containers:
      - name: edgex-device-virtual
        image: openyurt/device-virtual:2.1.0
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 59900
          name: "tcp-59900"
          protocol: TCP
        env:
        - name: MESSAGEQUEUE_HOST
          value: edgex-redis
        - name: SERVICE_HOST
          value: edgex-device-virtual
        envFrom:
        - configMapRef:
            name: common-variables
        startupProbe:
          tcpSocket:
            port: 59900
          periodSeconds: 1
          failureThreshold: 120
        livenessProbe:
          tcpSocket:
            port: 59900
      restartPolicy: Always
---
apiVersion: v1
kind: Service
metadata:
  labels:
    org.edgexfoundry.service: edgex-device-virtual
  name: edgex-device-virtual
spec:
  ports:
  - name: "tcp-59900"
    port: 59900
    protocol: TCP
    targetPort: 59900
  selector:
    org.edgexfoundry.service: edgex-device-virtual
  type: NodePort
```

check EdgeX instance status

```bash
$ kubectl get edgex
NAME                    READY   SERVICE   READYSERVICE   DEPLOYMENT   READYDEPLOYMENT
edgex-sample-hangzhou   true    9         9              9            9
```

# 2. install yurt-device-controller

install CRDs of yurt-device-controller 

```bash
$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml
```

use UnitedDeployment to deploy yurt-device-controller instance in nodepool hangzhou. It should be pointed out that we use cluster-admin ClusterRole just for demo purpose

```yaml
apiVersion: apps.openyurt.io/v1alpha1
kind: UnitedDeployment
metadata:
  labels:
    controller-tools.k8s.io: "1.0"
  name: ud-device
  namespace: default
spec:
  selector:
    matchLabels:
      app: ud-device
  topology:
    pools:
      - name: hangzhou
        nodeSelectorTerm:
          matchExpressions:
            - key: apps.openyurt.io/nodepool
              operator: In
              values:
                - hangzhou
        replicas: 1
        tolerations:
          - operator: Exists
  workloadTemplate:
    deploymentTemplate:
      metadata:
        creationTimestamp: null
        labels:
          app: ud-device
      spec:
        selector:
          matchLabels:
            app: ud-device
        strategy: {}
        template:
          metadata:
            creationTimestamp: null
            labels:
              app: ud-device
              control-plane: controller-manager
          spec:
            containers:
              - args:
                  - --health-probe-bind-address=:8081
                  - --metrics-bind-address=127.0.0.1:8080
                  - --leader-elect=false
                  - --namespace=default
                  - --v=5
                command:
                  - /yurt-device-controller
                image: openyurt/yurt-device-controller:v0.2.0
                imagePullPolicy: IfNotPresent
                livenessProbe:
                  failureThreshold: 3
                  httpGet:
                    path: /healthz
                    port: 8081
                    scheme: HTTP
                  initialDelaySeconds: 15
                  periodSeconds: 20
                  successThreshold: 1
                  timeoutSeconds: 1
                name: manager
                readinessProbe:
                  failureThreshold: 3
                  httpGet:
                    path: /readyz
                    port: 8081
                    scheme: HTTP
                  initialDelaySeconds: 5
                  periodSeconds: 10
                  successThreshold: 1
                  timeoutSeconds: 1
                resources:
                  limits:
                    cpu: 100m
                    memory: 512Mi
                  requests:
                    cpu: 100m
                    memory: 512Mi
                securityContext:
                  allowPrivilegeEscalation: false
            dnsPolicy: ClusterFirst
            restartPolicy: Always
            securityContext:
              runAsUser: 65532
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: ud-rolebinding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: default
    namespace: default
```

check whether yurt-device-controller has been deployed successful

```bash
$ kubectl get pod |grep yurt-device-controller
yurt-device-controller-xxxxxx-sf7xz-79c9cbf4b7-mbfds             1/1     Running   0          6d22h
```

# 3. Check virtual devices synced from EdgeX
The device-virtual-go driver will automatically create and register 5 virtual devices of different kinds upon start, yurt-device-controller will then sync them to OpenYurt. You can use kubectl to check it:

```bash
$ kubectl get device
NAME                                     NODEPOOL   SYNCED   AGE
hangzhou-random-binary-device            hangzhou   true     19h
hangzhou-random-boolean-device           hangzhou   true     19h
hangzhou-random-float-device             hangzhou   true     19h
hangzhou-random-integer-device           hangzhou   true     19h
hangzhou-random-unsignedinteger-device   hangzhou   true     19h
```

# 4. Uninstall and cleanup

```bash
$ export WORKER_NODEPOOL="hangzhou"
$ export EDGE_NODE="node1"

# 1.1 delete all device, deviceservice, deviceprofile资源
$ kubectl delete device --all
$ kubectl delete deviceprofile --all
$ kubectl delete deviceservice --all

# 1.2 uninstall yurt-device-controller
$ kubectl delete uniteddeployment yurt-device-controller
$ kubectl delete clusterrolebinding ud-rolebinding

# 1.3 delete CRDs of yurt-device-controller
$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml

# 2.1 delete EdgeX instance
$ kubectl delete edgex --all

# 2.2 uninstall yurt-edgex-manager
$ kubectl delete -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml

# （optional）
# 3.1 remove node from nodepool
$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool-
# 3.2 delete nodepool
$ kubectl delete nodepool $WORKER_NODEPOOL
```



