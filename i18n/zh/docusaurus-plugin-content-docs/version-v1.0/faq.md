---
title: FAQ
---

## **yurtadm**

**1. yurtadm join 报错：crictl not found in system path**

节点没有安装 docker，安装docker就可以解决此问题。



**2. yurtadm join 报错：[ERROR FileExisting-conntrack]: conntrack not found in system path**

执行 `yum install -y conntrack` 然后重新执行 yurtadm join 命令即可。


**3. yurtadm init 过程中 helm 安装出错： Release "yurt-app-manager" does not exist. Installing it now.**
**Error: failed to download "openyurt/yurt-app-manager" (hint: running `helm repo update` may help)**

手动执行 helm 安装 yurt-app-manager 的过程：

```bash
# 进入集群镜像的上下文目录
cd /var/lib/sealer/data/my-cluster/rootfs
# 安装 yurt-app-manager
helm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml
```

**4. yurtadm init 中途安装失败，如何把环境清理干净？**

按照 http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed 来清理。

## **yurt-tunnel**

如何定位`kubectl exec`命令执行失败原因，可以根据下图中流程来确定。

![img](../../../../static/img/yurt-tunnel-troubleshooting.png)

- 如果在kube-apiserver的日志无法找到`exec`请求相关的信息，请把kube-apiserver组件日志级别调整为3(--v=3)
- 请确保kube-apiserver使用`yurt-tunnel-dns` pod来进行域名解析，kube-apiserver配置调整文档请参考: https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment

另外还有一些yurt-tunnel相关的issue，也可能为您提供一些帮助。

**1. kubectl logs 边缘节点的pod出现：error: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)** 

问题描述：https://github.com/openyurtio/openyurt/issues/984

没有使用最新的 yurt-tunnel-agent:latest  镜像，查看一下镜像创建时间，如果不是最新的镜像，需要重新pull一下镜像。

**2. kubectl logs 边缘节点的pod出现：error: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))** 

具体问题描述：https://github.com/openyurtio/openyurt/issues/984

删除 /var/lib/yurttunnel-server/pki 目录，然后重新部署yurt-tunnel:

```bash
rm -rf /var/lib/yurttunnel-server/pki
kubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system
```

**3. kubectl exec报错: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel**

`kubectl port-forward`也可能出现上述类似报错信息。
```bash
root@control-plane:~# kubectl port-forward <...>
error: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel: write unix @->/tmp/interceptor-proxier.sock: write: broken pipe
```
 
当`yurt-tunnel-server/agent` 连接无法建立，将会触发这个问题。 比如yurt-tunnel-agent未部署到相应的边缘节点，导致连接没有建立从而触发此问题。
在这种情况下，强烈建议通过 [Setup OpenYurt components](https://openyurt.io/docs/installation/manually-setup#32-setup-openyurtopenyurt-components) 确保 `yurt-tunnel-server /agent` pod 被部署到适当的云和边缘节点。

当节点确定不需要部署`yurt-tunnel-server/agent`时，但是`kubectl exec/port-forward`请求还是碰到此问题，则可能与`/etc/hosts`中的网络设置有关。
比如`/etc/hosts`包含的网络配置，导致请求会通过`yurt-tunnel-server/agent`。同时节点上不会运行 `yurt-tunnel-agent`，所以此请求最终将失败并显示错误消息。

在这种情况下，需要注释掉/etc/hosts中不相关的IP地址和主机名。
更多详情请参考[issue 1024](https://github.com/openyurtio/openyurt/issues/1024)。