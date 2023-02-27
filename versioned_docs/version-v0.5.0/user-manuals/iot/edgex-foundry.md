---
title: EdgeX Foundry
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
- 将访问coreDNS service的流量改为节点池内闭环，参考[教程](https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/service-topology.md)



# 1. 安装yurt-edgex-manager并创建一个EdgeX实例

安装部署yurt-edgex-manager


```powershell
# 如果期望部署edgex的节点是arm64架构，则使用以下的yaml文件
# kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager-arm64.yaml
$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager.yaml

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

在hangzhou节点池中创建edgex foundry实例，并在edgex中部署虚拟设备edgex-device-virtual

```powershell
$ export WORKER_NODEPOOL="hangzhou"
# 如果部署节点是arm64，则改为"edgexfoundry/docker-device-virtual-go-arm64:1.3.0"
$ export VIRTUAL_DEVICE_IMAGE="edgexfoundry/docker-device-virtual-go:1.3.0"

$ cat <<EOF | kubectl apply -f -
apiVersion: device.openyurt.io/v1alpha1
kind: EdgeX
metadata:
  name: edgex-sample-$WORKER_NODEPOOL
spec:
  version: hanoi
  poolname: $WORKER_NODEPOOL
  additionalServices:
  - metadata:
      name: edgex-device-virtual
    spec:
      type: NodePort
      selector:
        app: edgex-device-virtual
      ports:
      - name: http
        port: 49990
        protocol: TCP
        targetPort: 49990
        nodePort: 30090
  additionalDeployments:
  - metadata:
      name: edgex-device-virtual
    spec:
      selector:
        matchLabels:
          app: edgex-device-virtual
      template:
        metadata:
          labels:
            app: edgex-device-virtual
        spec:
          hostname: edgex-device-virtual
          containers:
          - name: edgex-device-virtual
            image: $VIRTUAL_DEVICE_IMAGE
            imagePullPolicy: IfNotPresent
            ports:
            - name: http
              protocol: TCP
              containerPort: 49990
            envFrom:
            - configMapRef:
                name: common-variables
            env:
              - name: Service_Host
                value: "edgex-device-virtual"
EOF
```

检查edgex-foundry的部署状态

```powershell
$ kubectl get edgex
NAME                    READY   SERVICE   READYSERVICE   DEPLOYMENT   READYDEPLOYMENT
edgex-sample-hangzhou   true    9         9              9            9
```

# 2. 安装并部署yurt-device-controller

安装yurt-device-controller 相关的CRD



```powershell
$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml
```

使用UnitedDeployment在hanghzou节点池中部署一个yurt-device-controller实例

```powershell
$ export WORKER_NODEPOOL="hangzhou"
$ cat <<EOF | kubectl apply -f -
apiVersion: apps.openyurt.io/v1alpha1
kind: UnitedDeployment
metadata:
  labels:
    controller-tools.k8s.io: "1.0"
  name: yurt-device-controller
spec:
  selector:
    matchLabels:
      app: yurt-device-controller
  workloadTemplate:
    deploymentTemplate:
      metadata:
        labels:
          app: yurt-device-controller
      spec:
        template:
          metadata:
            labels:
              app: yurt-device-controller
              control-plane: controller-manager
          spec:
            containers:
            - args:
              - --health-probe-bind-address=:8081
              - --metrics-bind-address=127.0.0.1:8080
              - --leader-elect=false
              command:
              - /yurt-device-controller
              image: openyurt/yurt-device-controller:latest
              imagePullPolicy: IfNotPresent
              livenessProbe:
                httpGet:
                  path: /healthz
                  port: 8081
                initialDelaySeconds: 15
                periodSeconds: 20
              name: manager
              readinessProbe:
                httpGet:
                  path: /readyz
                  port: 8081
                initialDelaySeconds: 5
                periodSeconds: 10
              resources:
                limits:
                  cpu: 100m
                  memory: 30Mi
                requests:
                  cpu: 100m
                  memory: 20Mi
              securityContext:
                allowPrivilegeEscalation: false
            securityContext:
              runAsUser: 65532
            terminationGracePeriodSeconds: 10
  topology:
    pools:
    - name: $WORKER_NODEPOOL
      nodeSelectorTerm:
        matchExpressions:
        - key: apps.openyurt.io/nodepool
          operator: In
          values:
          - $WORKER_NODEPOOL
      replicas: 1
      tolerations:
      - effect: NoSchedule
        key: apps.openyurt.io/example
        operator: Exists
  revisionHistoryLimit: 5
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: default-cluster-admin
subjects:
- kind: ServiceAccount
  name: default
  namespace: default
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: ""
---
EOF
```

检查yurt-device-controller是否部署成功

```powershell
$ kubectl get pod |grep yurt-device-controller
yurt-device-controller-beijing-sf7xz-79c9cbf4b7-mbfds             1/1     Running   0          6d22h
```

# 3. 查看同步上来设备相关信息

可以通过以下命令查看同步上来设备相关信息



```powershell
$ kubectl get device
$ kubectl get deviceservice
$ kubectl get deviceprofile
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
$ kubectl delete clusterrolebinding default-cluster-admin

# 1.3 删除device, deviceservice, deviceprofile资源相关的crd
$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml

# 2.1 删除所有edgex实例
$ kubectl delete edgex --all

# 2.2 卸载yurt-edgex-manager
# 如果使用的arm64版本的，使用以下命令
# kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager-arm64.yaml
$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager.yaml

# （以下步骤可选）
# 3.1 将边缘节点移除hangzhou节点池
$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool-
# 3.2 删除hangzhou节点池
$ kubectl delete nodepool $WORKER_NODEPOOL
```



