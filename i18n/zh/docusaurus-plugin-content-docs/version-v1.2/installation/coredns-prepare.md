---
title: OpenYurt 安装相关Kubernetes配置调整
---
## 1. CoreDNS调整

一般场景下，CoreDNS是以Deployment形式部署，在云边协同场景下，通过Raven提供的VPN隧道，域名解析请求跨`NodePool`可能会带来延迟或者超时失败。因此也推荐使用`Daemonset`或者`YurtAppDaemon`形式来部署CoreDNS，同时kube-dns service流量拓扑配置成NodePool/Hostname, 从而解决域名解析延迟问题。

### 1.1 CoreDNS 支持服务流量拓扑

增加annotation，利用OpenYurt中Yurthub的边缘数据过滤机制实现服务流量拓扑能力，确保节点上的域名解析请求只会发给同一节点池内的CoreDNS。

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
  labels:
    k8s-app: kube-dns
    kubernetes.io/cluster-service: "true"
    kubernetes.io/name: KubeDNS
  name: kube-dns
  namespace: kube-system
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

### 1.2 CoreDNS DaemonSet部署

如果CoreDNS原本使用DaemonSet部署，可以手工进行如下调整(CoreDNS的镜像可调整为自己的版本)：

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
      dnsPolicy: Default
      nodeSelector:
        kubernetes.io/os: linux
      priorityClassName: system-cluster-critical
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
```

### 1.3 减少CoreDNS Deployment 副本数

如果k8s不是用Deployment部署，可以不进行操作。

```shell
kubectl scale --replicas=0 deployment/coredns -n kube-system
```

