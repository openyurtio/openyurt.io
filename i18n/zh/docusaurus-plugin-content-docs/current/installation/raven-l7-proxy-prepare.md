# 1. 部署Raven Proxy专用DNS

云端组件(如Kube-apiserver, prometheus, metrics-server等)通过`hostname:port`访问边缘时，为了让`hostname`域名解析到云上Gateway节点,通过Gateway节点转发到其他网络域网关节点进行代理。需要确保组件的DNS域名解析请求发送到网关节点的专用的DNS(取名为raven-proxy-dns)。

通过如下命令安装raven-proxy-dns:
```bash
$ kubectl apply -f config/setup/raven-proxy-dns.yaml
```

当安装完成后，可以通过命令`kubectl -n kube-system get po`raven-proxy-dns组件是否正常启动。并且通过`kubectl -n kube-system get svc raven-proxy-dns`获取到`raven-proxy-dns service`的`clusterIP`.


# 2. Kube-apiserver调整

为了保证Master节点上kube-apiserver使用`hostname:port`访问kubelet，同时确保使用`raven-proxy-dns pod`对`hostname`进行域名解析。kube-apiserver的相关配置调整如下:

假定kube-apiserver是使用static pod安装(/etc/kubernetes/manifests/kube-apiserver.yaml)
1. 修改dnsPolicy="None"
2. 增加dnsConfig配置，其中的`nameservers`配置为`raven-proxy-dns service`的`clusterIP`(这里假定为`1.2.3.4`)
3. 修改启动参数--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP，确保Kube-apiserver优先使用Hostname访问kubelet
4. 删除启动参数--kubelet-certificate-authority，确保kube-apiserver不校验raven-proxy-server的TLS证书(kubeadm搭建的集群中，默认没有配置该参数，可直接忽略)

```bash
$ vi /etc/kubernetes/manifests/kube-apiserver.yaml
apiVersion: v1
kind: Pod
...
spec:
  dnsPolicy: "None" # 1. dnsPolicy修改为None
  dnsConfig:        # 2. 增加dnsConfig配置
    nameservers:
      - 1.2.3.4 # 使用yurt-tunnel-dns service的clusterIP替换
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