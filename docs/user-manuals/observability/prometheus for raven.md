title: Prometheus for Raven
---

This document describes various issues that may be encountered when using Prometheus with Raven, and provides detailed configuration solutions.

## Background

In an OpenYurt cluster, cloud nodes and edge nodes are located on different network segments:
- Cloud node: 10.x.x.x
- Edge node: 172.x.x.x
The cloud-based Prometheus cannot directly access the node-exporter (port 9100) of the cross-network segment edge node; it needs to be accessed through a Raven component proxy.

## Troubleshooting
### Question 1: Prometheus uses IP address to access node-exporter by default
**Phenomenon**
```
scrapeUrl: http://IP:9100/metrics
health: down
lastError: context deadline exceeded
```
**Reason**
The original Monitor discovered targets through Endpoints and accessed them directly using the node IP, which was unreachable across network segments.

**Solution**
Create a new ScrapeConfig, discover nodes using `kubernetes_sd_configs: role: Node`, and replace `__address__` with the node name using relabel.

---

### Question 2: Prometheus DNS cannot resolve node name
**Phenomenon**
```
scrapeUrl: http://node_name:9100/metrics
health: down
lastError: lookup 4090gpu-edge-test: no such host
```
**Reason**
Prometheus uses the cluster's default DNS (CoreDNS), which cannot resolve node names to Raven Proxy addresses.

**Verification**
```
#default DNS cannot resolve the node name.
nslookup node_name x.x.x.x  # failed

#raven-proxy-dns can resolve
nslookup node_name x.x.x.x
#return：x.x.x.x（x-raven-proxy-internal-svc ClusterIP）
```


## Solution
### Step 1: Modify CoreDNS ConfigMap (add hosts plugin)
```
# Get the current Corefile and add the hosts plugin.
kubectl get configmap coredns -n kube-system -o jsonpath='{.data.Corefile}'

# Modify the Corefile to add the hosts plugin before the Kubernetes plugin.
kubectl edit configmap coredns -n kube-system
```
**Modified Corefile example:**
```
.:53 {
    errors
    health {
       lameduck 5s
    }
    ready
    # Added: The hosts plugin now reads the edge-tunnel-nodes file.
    hosts /etc/edge/tunnel-nodes {
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
```
Key configuration notes:
- `hosts /etc/edge/tunnel-nodes`: Reads the mounted ConfigMaps as the hosts file.
- `reload 300ms`: Check for file changes and reload every 300ms.
- `fallthrough`: If no match is found in the hosts file, proceed to the next plugin.

---

### Step 2: Modify CoreDNS Deployment
```
kubectl patch deployment coredns -n kube-system --type='json' -p='[
  {"op": "add", "path": "/spec/template/spec/volumes/-", "value": {"name": "edge-hosts", "configMap": {"name": "edge-tunnel-nodes"}}},
  {"op": "add", "path": "/spec/template/spec/containers/0/volumeMounts/-", "value": {"name": "edge-hosts", "mountPath": "/etc/edge", "readOnly": true}}
]'
```
Note:
- `edge-tunnel-nodes` is a ConfigMap automatically maintained by the yurt-manager DNS Controller.
- This ConfigMap contains a mapping from node names to Raven Proxy ClusterIPs.
- Format: `<node-name><raven-proxy-clusterip>`

---
### Step 3: Restart CoreDNS Deployment
```
kubectl rollout restart deployment/coredns -n kube-system
kubectl rollout status deployment/coredns -n kube-system
```

---
### Step 4: Create ScrapeConfig
```
cat > /tmp/node-exporter-raven.yaml << 'EOF'
apiVersion: monitoring.coreos.com/v1alpha1
kind: ScrapeConfig
metadata:
  name: node-exporter-raven
  namespace: monitor
  labels:
    release: foundation-core
spec:
  kubernetesSDConfigs:
    - role: Node
  relabelings:
    - action: labelmap
      regex: __meta_kubernetes_node_label_(.+)
    - sourceLabels: [__meta_kubernetes_node_name]
      action: replace
      targetLabel: __address__
      replacement: ${1}:9100
EOF
kubectl apply -f /tmp/node-exporter-raven.yaml
```
---

### Step 5: Kubelet Monitoring Configuration
Kubelet exposes three metrics endpoints, all of which require HTTPS access and authentication:
- `/metrics`: Kubelet core metrics
- `/metrics/cadvisor`: Container resource metrics (CPU, memory, network, etc.)
- `/metrics/probes`: Probe metrics

Kubelet HTTPS ports require authentication. Create a Secret to obtain the Prometheus ServiceAccount Token:
```
cat > /tmp/prometheus-token-secret.yaml << 'EOF'
apiVersion: v1
kind: Secret
metadata:
  name: prometheus-sa-token
  namespace: namespace
  annotations:
    kubernetes.io/service-account.name: prometheus
type: kubernetes.io/service-account-token
EOF
kubectl apply -f /tmp/prometheus-token-secret.yaml
```
Create Kubelet ScrapeConfig
```
cat > /tmp/kubelet-raven.yaml << 'EOF'
---
apiVersion: monitoring.coreos.com/v1alpha1
kind: ScrapeConfig
metadata:
  name: kubelet-raven-metrics
  namespace: monitor
  labels:
    release: xxx
spec:
  kubernetesSDConfigs:
    - role: Node
  scheme: HTTPS
  metricsPath: /metrics
  tlsConfig:
    insecureSkipVerify: true
  authorization:
    credentials:
      name: prometheus-sa-token
      key: token
  relabelings:
    - action: labelmap
      regex: __meta_kubernetes_node_label_(.+)
    - sourceLabels: [__meta_kubernetes_node_name]
      action: replace
      targetLabel: __address__
      replacement: ${1}:10250
    - sourceLabels: [__meta_kubernetes_node_address_InternalIP]
      action: replace
      targetLabel: instance
      replacement: ${1}:10250
    - action: replace
      targetLabel: job
      replacement: kubelet
    - action: replace
      targetLabel: metrics_path
      replacement: /metrics
---
apiVersion: monitoring.coreos.com/v1alpha1
kind: ScrapeConfig
metadata:
  name: kubelet-raven-cadvisor
  namespace: monitor
  labels:
    release: xxx
spec:
  kubernetesSDConfigs:
    - role: Node
  scheme: HTTPS
  metricsPath: /metrics/cadvisor
  tlsConfig:
    insecureSkipVerify: true
  authorization:
    credentials:
      name: prometheus-sa-token
      key: token
  relabelings:
    - action: labelmap
      regex: __meta_kubernetes_node_label_(.+)
    - sourceLabels: [__meta_kubernetes_node_name]
      action: replace
      targetLabel: __address__
      replacement: ${1}:10250
    - sourceLabels: [__meta_kubernetes_node_address_InternalIP]
      action: replace
      targetLabel: instance
      replacement: ${1}:10250
    - action: replace
      targetLabel: job
      replacement: kubelet
    - action: replace
      targetLabel: metrics_path
      replacement: /metrics/cadvisor
---
apiVersion: monitoring.coreos.com/v1alpha1
kind: ScrapeConfig
metadata:
  name: kubelet-raven-probes
  namespace: monitor
  labels:
    release: xxx
spec:
  kubernetesSDConfigs:
    - role: Node
  scheme: HTTPS
  metricsPath: /metrics/probes
  tlsConfig:
    insecureSkipVerify: true
  authorization:
    credentials:
      name: prometheus-sa-token
      key: token
  relabelings:
    - action: labelmap
      regex: __meta_kubernetes_node_label_(.+)
    - sourceLabels: [__meta_kubernetes_node_name]
      action: replace
      targetLabel: __address__
      replacement: ${1}:10250
    - sourceLabels: [__meta_kubernetes_node_address_InternalIP]
      action: replace
      targetLabel: instance
      replacement: ${1}:10250
    - action: replace
      targetLabel: job
      replacement: kubelet
    - action: replace
      targetLabel: metrics_path
      replacement: /metrics/probes
EOF
kubectl apply -f /tmp/kubelet-raven.yaml
```
---

### Step 6: Verification
Node Exporter
```
kubectl exec -n monitor pod_name -c prometheus -- \
  sh -c "wget -q -O - 'http://localhost:9090/api/v1/targets'" | \
  tr '}' '\n' | grep 'scrapeConfig/monitor/node-exporter-raven' | \
  grep -oE '"scrapeUrl":"[^"]*"|"health":"[^"]*"' | paste - -
```

```
"scrapeUrl":"http://node_name:9100/metrics"         "health":"up"
```

Kubelet
```
kubectl exec -n monitor pod_name -c prometheus -- \
  sh -c "wget -q -O - 'http://localhost:9090/api/v1/targets'" | \
  tr '}' '\n' | grep 'scrapeConfig/monitor/kubelet-raven' | \
  grep -oE '"scrapeUrl":"[^"]*"|"health":"[^"]*"' | paste - -
```
```
"scrapeUrl":"https://node_name:10250/metrics"           "health":"up"
"scrapeUrl":"https://node_name:10250/metrics/cadvisor"  "health":"up"
"scrapeUrl":"https://node_name:10250/metrics/probes"    "health":"up"
```