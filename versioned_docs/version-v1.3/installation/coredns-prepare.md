---
title:  CoreDNS Adjustment
---

## 1.Background
In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, based on VPN tunnel that provided by Raven, domain name resolution cross `NodePool` will cause some latency, so we also recommend end users to use `Daemonset` or `YurtAppDaemon` to deploy CoreDNS. At the same time, we should also set the topologyKeys of kube-dns service as NodePool or HostName.

## 2 Configure CoreDNS Service

Add annotation to coredns service, which will make sure domain name resolution can be handled by CoreDNS instance in the same NodePool.

```shell
kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'
```

The results of modifications:

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
  clusterIP: xx.xx.xx.xx
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

### 3 Use CoreDNS DaemonSet

The original CoreDNS is deployed by `DaemonSet`, please modify the settings manually (the CoreDNS image version can be adjusted to demand).

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

### 4 Scale Down CoreDNS Deployment Replicas

Only support when CoreDNS is deployed by deployment workload.

```shell
kubectl scale --replicas=0 deployment/coredns -n kube-system
```
