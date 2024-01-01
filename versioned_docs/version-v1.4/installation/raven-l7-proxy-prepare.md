# 1. 部署Raven Proxy专用DNS

The hostname need to be resolved to the IP address of the gateway endpoints of the local area network when the cloud components (e.g APIServer,MetricsServer) accesses the edge service by the way of hostname+port.So An dedicated DNS server must be deployed before raven's layer 7 proxy is enabled.

Install raven-proxy-dns with the following:
```bash
$ kubectl apply -f config/setup/raven-proxy-dns.yaml
```

Ensure that the raven-proxy-dns install successfully with the following command:
```bash
$ kubectl -n kube-system get po
```

Query the `clusterIP` of the `raven-proxy-dns service`
```bash
$ kubectl -n kube-system get svc raven-proxy-dns
```

# 2. Kube-apiserver调整

To make sure kube-apiserver on the master node use `hostname:port` to access kubelet, and at the same time this hostname resolution request should be handled by `yurt-tunnel-dns` pod. We should apply some adjustments to kube-apiserver configurations.

We assume your kube-apiserver is installed through static pod(/etc/kubernetes/manifests/kube-apiserver.yaml)

1. modifiy dnsPolicy="None"
2. add dnsConfig configurations which set the `nameservers` as the `clusterIP` of `raven-proxy-dns service` (assumed to be `1.2.3.4` here)
3. modify startup parameters `--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP`, to make sure that Kube-apiserver prefers to use Hostname to access kubelet
4. delete startup parameters `--kubelet-certificate-authority`, to make sure that kube-apisever don't calibrate TLS certificate of yurt-tunnel-server (If you create your cluster from kubeadm, this step can be omitted since it don't have this settings by default)

```bash
$ vi /etc/kubernetes/manifests/kube-apiserver.yaml
apiVersion: v1
kind: Pod
...
spec:
  dnsPolicy: "None" 
  dnsConfig:       
    nameservers:
      - 1.2.3.4
    searches:
      - kube-system.svc.cluster.local
      - svc.cluster.local
      - cluster.local
    options:
      - name: ndots
        value: "5"
  containers:
  - command:
    - kube-apiserver
  ...
    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. 把Hostname放在第一位
  ...
```