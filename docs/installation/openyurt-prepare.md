---
title: OpenYurt 安装前置条件
---
## 1.背景说明

OpenYurt为适应边端环境，需要用户对K8S做一些调整，如：CoreDNS，KubeProxy等。

## 2. CoreDNS调整

一般场景下，CoreDNS是以Deployment形式部署，在边端场景下，域名解析请求无法跨`NodePool`，所以CoreDNS需要以`Daemonset`或者`YurtAppDaemon`形式部署，以实现将hostname解析为tunnelserver地址。

### 2.1 CoreDNS 配置修改

修改`kube-system` `namespace`下的`ConfigMap` `coredns`，增加如下内容：

```yaml
        hosts /etc/edge/tunnel-nodes { # 增加hosts插件
            reload 300ms
            fallthrough
        }
```

修改后效果如下：

```yaml
apiVersion: v1
data:
  Corefile: |
    .:53 {
        errors
        log . {
          class denial success

        }
        health {
           lameduck 5s
        }
        ready
        hosts /etc/edge/tunnel-nodes { # 增加hosts插件
            reload 300ms
            fallthrough
        }
        kubernetes cluster.local in-addr.arpa ip6.arpa {
           pods insecure
           fallthrough in-addr.arpa ip6.arpa
           ttl 30
        }
        prometheus :9153
        forward . /etc/resolv.conf {
           max_concurrent 1000
        }
        cache 30
        loop
        reload
        loadbalance
    }
kind: ConfigMap
metadata:
  name: coredns
  namespace: kube-system
```



### 2.2 CoreDNS 支持服务拓扑

增加annotation，利用openyurt的机制实现边缘服务选择。

```shell
# 利用openyurt实现endpoint过滤
kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'
```

修改后效果：

```yaml
apiVersion: v1
kind: Service
metadata:
  annotations:
    openyurt.io/topologyKeys: openyurt.io/nodepool
    prometheus.io/port: "9153"
    prometheus.io/scrape: "true"
  creationTimestamp: "2022-02-14T10:13:37Z"
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: "true"
    kubernetes.io/name: KubeDNS
  name: kube-dns
  namespace: kube-system
  resourceVersion: "65474309"
  selfLink: /api/v1/namespaces/kube-system/services/kube-dns
  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1
spec:
  clusterIP: 10.254.0.10
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
```

### 2.2 CoreDNS DaemonSet部署

如果CoreDNS原本使用DaemonSet部署，可以手工进行如下调整：

1）可以调整CoreDNS的镜像为自己的版本；

2）需要挂载Volume ConfigMap `yurt-tunnel-nodes`；

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  labels:
    k8s-app: kube-dns
  name: coredns
  namespace: kube-system
spec:
  selector:
    matchLabels:
      k8s-app: kube-dns
  template:
    metadata:
      labels:
        k8s-app: kube-dns
    spec:
      containers:
      - args:
        - -conf
        - /etc/coredns/Corefile
        image: registry.aliyuncs.com/google_containers/coredns:1.7.0
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
        name: coredns
        ports:
        - containerPort: 53
          name: dns
          protocol: UDP
        - containerPort: 53
          name: dns-tcp
          protocol: TCP
        - containerPort: 9153
          name: metrics
          protocol: TCP
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /ready
            port: 8181
            scheme: HTTP
          periodSeconds: 10
          successThreshold: 1
          timeoutSeconds: 1
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
        volumeMounts:
        - mountPath: /etc/coredns
          name: config-volume
          readOnly: true
        - mountPath: /etc/edge
          name: hosts
          readOnly: true
      dnsPolicy: Default
      nodeSelector:
        kubernetes.io/os: linux
      priorityClassName: system-cluster-critical
      serviceAccount: coredns
      serviceAccountName: coredns
      tolerations:
      - operator: Exists
      - key: CriticalAddonsOnly
        operator: Exists
      - effect: NoSchedule
        key: node-role.kubernetes.io/master
      volumes:
      - configMap:
          defaultMode: 420
          items:
          - key: Corefile
            path: Corefile
          name: coredns
        name: config-volume
      - configMap:
          defaultMode: 420
          name: yurt-tunnel-nodes
        name: hosts
```

### 2.4 减少CoreDNS Deployment 副本数

如果k8s不是用Deployment部署，可以不进行操作。

```shell
kubectl scale --replicas=0 deployment/coredns -n kube-system
```

## 3. KubeProxy调整

TODO

