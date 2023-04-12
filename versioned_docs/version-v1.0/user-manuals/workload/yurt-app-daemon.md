---
title: YurtAppDaemon
---

## Background

In edge scenarios, edge nodes from the same region will be assigned to the same NodePool, at which point some system components, such as CoreDNS, will typically need to be deployed in NodePool dimension. When creating the NodePool, we want to create these system components automatically, without any manual operations.

YurtAppDaemon ensures that all or some of the NodePools run replicas with a Deployment or StatefulSet template. As NodePools are created, these sub-Deployments or sub-StatefulSets are added to the cluster and the creation/updating of them are controlled by the YurtAppDaemon controller.



![img](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641999454831-b8f2f9f4-c715-4063-8444-b0af22830092.png)

## Usage：

- Create test1 NodePool

```shell
cat <<EOF | kubectl apply -f -


apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: test1
spec:
  selector:
    matchLabels:
      apps.openyurt.io/nodepool: test1
  type: Edge


EOF
```

- Create test2 NodePool

```shell
cat <<EOF | kubectl apply -f -

apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: test2
spec:
  selector:
    matchLabels:
      apps.openyurt.io/nodepool: test2
  type: Edge

EOF
```

- Add nodes to the corresponding NodePool

```shell
 kubectl label node cn-beijing.172.23.142.31 apps.openyurt.io/desired-nodepool=test1
 kubectl label node cn-beijing.172.23.142.32 apps.openyurt.io/desired-nodepool=test1

 kubectl label node cn-beijing.172.23.142.34 apps.openyurt.io/desired-nodepool=test2
 kubectl label node cn-beijing.172.23.142.35 apps.openyurt.io/desired-nodepool=test2
```

- Create YurtAppDaemon

```shell
cat <<EOF | kubectl apply -f -

apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppDaemon
metadata:
  name: daemon-1
  namespace: default
spec:
  selector:
    matchLabels:
      app: daemon-1

  workloadTemplate:
    deploymentTemplate:
      metadata:
        labels:
          app: daemon-1
      spec:
        replicas: 1
        selector:
          matchLabels:
            app: daemon-1
        template:
          metadata:
            labels:
              app: daemon-1
          spec:
            containers:
            - image: nginx:1.18.0
              imagePullPolicy: Always
              name: nginx
  nodepoolSelector:
    matchLabels:
      yurtappdaemon.openyurt.io/type: "nginx"

EOF
```

- Label test1 NodePool

```shell
kubectl label np test1 yurtappdaemon.openyurt.io/type=nginx

# Check the Deployment
kubectl get deployments.apps

# Check the Deployment nodeselector

# Check the Pod
```

- Label test2 NodePool

```shell
kubectl label np test2 yurtappdaemon.openyurt.io/type=nginx

# Check the Deployment
kubectl get deployments.apps

# Check the Deployment nodeselector

# Check the Pod
```

- Update YurtAppDaemon

```shell
# Change yurtappdaemon workloadTemplate replicas to 2

# Change yurtappdaemon workloadTemplate image to nginx:1.19.0

# Check the Pod
```

- Remove NodePool labels

```shell
# Remove the nodepool test1 label
kubectl label np test1 yurtappdaemon.openyurt.io/type-

# Check the Deployment

# Check the Pod

# Remove the nodepool test2 label
kubectl label np test2 yurtappdaemon.openyurt.io/type-

# Check the Deployment

# Check the Pod
```


## Example for deploying coredns

> Using `YurtAppDaemon`+`service topology` to solve dns resolution problems

- Create NodePool
```shell
cat <<EOF | kubectl apply -f -


apiVersion: apps.openyurt.io/v1alpha1
kind: NodePool
metadata:
  name: hangzhou
spec:
  selector:
    matchLabels:
      apps.openyurt.io/nodepool: hangzhou
  taints:
    - effect: NoSchedule
      key: node-role.openyurt.io/edge
  type: Edge


EOF
```

- Add label to NodePool

```shell
kubectl label np hangzhou yurtappdaemon.openyurt.io/type=coredns
```

- Deploy coredns

```shell
cat <<EOF | kubectl apply -f -


apiVersion: apps.openyurt.io/v1alpha1
kind: YurtAppDaemon
metadata:
  name: coredns
  namespace: kube-system
spec:
  selector:
    matchLabels:
       k8s-app: kube-dns
  workloadTemplate:
    deploymentTemplate:
      metadata:
        labels:
          k8s-app: kube-dns
      spec:
        replicas: 2
        selector:
          matchLabels:
            k8s-app: kube-dns
        template:
          metadata:
            labels:
              k8s-app: kube-dns
          spec:
            volumes:
            - name: config-volume
              configMap:
               name: coredns
               items:
               - key: Corefile
                 path: Corefile
                 name: coredns
            dnsPolicy: Default
            serviceAccount: coredns
            serviceAccountName: coredns
            containers:
            - args:
              - -conf
              - /etc/coredns/Corefile
              image: registry.k8s.io/coredns:1.6.7
              imagePullPolicy: IfNotPresent
              name: coredns
              resources:
                limits:
                  memory: 170Mi
                requests:
                  cpu: 100m
                  memory: 70Mi
              securityContext:
                allowPrivilegeEscalation: false
                capabilities:
                  add:
                  - NET_BIND_SERVICE
                  drop:
                  - all
                readOnlyRootFilesystem: true
              livenessProbe:
                failureThreshold: 5
                httpGet:
                  path: /health
                  port: 8080
                  scheme: HTTP
                initialDelaySeconds: 60
                periodSeconds: 10
                successThreshold: 1
                timeoutSeconds: 5
              volumeMounts:
              - mountPath: /etc/coredns
                name: config-volume
                readOnly: true
  nodepoolSelector:
    matchLabels:
      yurtappdaemon.openyurt.io/type: "coredns"

---
apiVersion: v1
kind: Service
metadata:
  namespace: kube-system
  annotations:
    prometheus.io/port: "9153"
    prometheus.io/scrape: "true"
    openyurt.io/topologyKeys: openyurt.io/nodepool
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: "true"
    kubernetes.io/name: KubeDNS
  name: kube-dns
spec:
  clusterIP: __kubernetes-coredns-ip__  ##修改为kubernetes dns service ip
  ports:
  - name: dns
    port: 53
    protocol: UDP
    targetPort: 53
  - name: dns-tcp
    port: 53
    protocol: TCP
    targetPort: 53
  - name: metrics
    port: 9153
    protocol: TCP
    targetPort: 9153
  selector:
    k8s-app: kube-dns
  sessionAffinity: None
  type: ClusterIP
---
apiVersion: v1
data:
  Corefile: |
    .:53 {
        errors
        health {
           lameduck 5s
        }
        ready
        kubernetes cluster.local in-addr.arpa ip6.arpa {
           pods insecure
           fallthrough in-addr.arpa ip6.arpa
           ttl 30
        }
        prometheus :9153
        forward . /etc/resolv.conf
        cache 30
        loop
        reload
        loadbalance
    }
kind: ConfigMap
metadata:
  name: coredns
  namespace: kube-system
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: coredns
  namespace: kube-system
  labels:
      kubernetes.io/cluster-service: "true"
      addonmanager.kubernetes.io/mode: Reconcile
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
    addonmanager.kubernetes.io/mode: Reconcile
  name: system:coredns
rules:
- apiGroups:
  - ""
  resources:
  - endpoints
  - services
  - pods
  - namespaces
  verbs:
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - get
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  annotations:
    rbac.authorization.kubernetes.io/autoupdate: "true"
  labels:
    kubernetes.io/bootstrapping: rbac-defaults
    addonmanager.kubernetes.io/mode: EnsureExists
  name: system:coredns
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:coredns
subjects:
- kind: ServiceAccount
  name: coredns
  namespace: kube-system


EOF
```
