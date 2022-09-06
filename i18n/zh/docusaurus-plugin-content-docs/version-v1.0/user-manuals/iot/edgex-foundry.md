---
title: 云原生管理端设备
---


本文档主要讲述如何在已有的OpenYurt集群上安装Yurt-Device-Controller 和 Yurt-EdgeX-Manager组件，并通过部署虚拟端设备来展示如何通过云原生的方式管理边缘端设备。

对于有兴趣的读者，可以去相关的github仓库参考本文使用组件的具体实现：[Yurt-Device-Controller](https://github.com/openyurtio/yurt-device-controller) 
和 [Yurt-EdgeX-Manager](https://github.com/openyurtio/yurt-edgex-manager)

如果你还没有OpenYurt集群，你可以使用 [yurtctl工具](https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md) 
来初始化一个OpenYurt集群或将一个Kubernetes集群转换为OpenYurt集群。

# 环境要求

- OpenYurt v0.5.0+
- 安装了 [Yurt-app-manager](https://github.com/openyurtio/yurt-app-manager) 组件

- 与master不在同一局域网下的节点都需要部署coreDNS pod
- 将访问coreDNS service的流量改为节点池内闭环，参考[教程](https://openyurt.io/docs/user-manuals/network/service-topology)



# 1. 安装yurt-edgex-manager并创建一个EdgeX实例

安装部署yurt-edgex-manager


```bash
$ kubectl apply -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml

# 检查状态
$ kubectl get pods -n edgex-system |grep edgex
edgex-controller-manager-6c99fd9f9f-b9nnk   2/2     Running   0          6d22h
```

创建一个hangzhou边缘节点池，并将边缘节点加入到hangzhou节点池



```powershell
$ export WORKER_NODEPOOL="hangzhou"
$ export EDGE_NODE="node1"

# 创建hangzhou节点池
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: $WORKER_NODEPOOL
spec:
  type: Edge
EOF

# 将边缘节点加入hangzhou节点池
$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool=hangzhou

# 检查节点池状态
$ kubectl get nodepool
NAME      TYPE   READYNODES   NOTREADYNODES   AGE
hangzhou   Edge   0            1               6d22h
```

在hangzhou节点池中创建edgex foundry实例，并在edgex中部署虚拟设备[edgex-device-virtual](https://github.com/edgexfoundry/device-virtual-go)

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

检查edgex-foundry的部署状态

```powershell
$ kubectl get edgex
NAME                    READY   SERVICE   READYSERVICE   DEPLOYMENT   READYDEPLOYMENT
edgex-sample-hangzhou   true    9         9              9            9
```

# 2. 安装并部署yurt-device-controller

安装yurt-device-controller 相关的CRD



```bash
$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml
```

使用UnitedDeployment在hanghzou节点池中部署一个yurt-device-controller实例

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

检查yurt-device-controller是否部署成功

```powershell
$ kubectl get pod |grep yurt-device-controller
yurt-device-controller-beijing-sf7xz-79c9cbf4b7-mbfds             1/1     Running   0          6d22h
```

# 3. 查看同步上来设备相关信息

上文中提到的device-virtual-go驱动会自动往EdgeX实例中注册5个虚拟设备，yurt-device-controller会将它自动同步上来

```bash
$ kubectl get device
NAME                                     NODEPOOL   SYNCED   AGE
hangzhou-random-binary-device            hangzhou   true     19h
hangzhou-random-boolean-device           hangzhou   true     19h
hangzhou-random-float-device             hangzhou   true     19h
hangzhou-random-integer-device           hangzhou   true     19h
hangzhou-random-unsignedinteger-device   hangzhou   true     19h
```

# 4. 卸载相关组件并清理环境

```powershell
$ export WORKER_NODEPOOL="hangzhou"
$ export EDGE_NODE="node1"

# 1.1 删除所有device, deviceservice, deviceprofile资源
$ kubectl delete device --all
$ kubectl delete deviceprofile --all
$ kubectl delete deviceservice --all

# 1.2 删除部署的yurt-device-controller
$ kubectl delete uniteddeployment yurt-device-controller
$ kubectl delete clusterrolebinding ud-rolebinding

# 1.3 删除device, deviceservice, deviceprofile资源相关的crd
$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml

# 2.1 删除所有edgex实例
$ kubectl delete edgex --all

# 2.2 卸载yurt-edgex-manager
$ kubectl delete -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml

# （以下步骤可选）
# 3.1 将边缘节点移除hangzhou节点池
$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool-
# 3.2 删除hangzhou节点池
$ kubectl delete nodepool $WORKER_NODEPOOL
```



