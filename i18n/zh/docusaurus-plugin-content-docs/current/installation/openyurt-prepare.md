---
title: OpenYurt 安装相关Kubernetes配置调整
---
## 1.背景说明

为适应云边协同场景，用户需要对K8S做一些调整，如Kube-Controller-Manager, CoreDNS, KubeProxy等。

## 2. Kube-Controller-Manager调整

为了让 `yurt-controller-mamanger` 能够正常工作，我们需要关闭Kube-Controller-Manager中的 `nodelifecycle` 控制器。可以通过配置 `--controllers` 参数值并重启 `kube-controller-manager` 来禁用 `nodelifecycle` 控制器。

假设最初的参数值像这样 `--controllers=*,bootstrapsigner,tokencleaner`，要禁用 `nodelifecycle` 控制器，我们需要将参数值更改为 `--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner`。

如果 `kube-controller-manager` 是以静态 pod 的方式部署在 master 节点上，并且您有登录 master 节点的权限，则可以通过修改 `/etc/kubernetes/manifests/kube-controller-manager.yaml` 文件来完成上述操作。修改后，`kube-controller-manager` 会自动重启。

## 3. KubeProxy调整

kubeadm部署的k8s集群会为KubeProxy生成kubeconfig配置，在不配置[`Service Topology`](https://kubernetes.io/docs/concepts/services-networking/service-topology/) 和 [`Topology Aware Hints`](https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/) 情况下，KubeProxy使用这个kubeconfig拿到的endpoints是全量的。

云边端场景下，边缘节点间很有可能无法互通，因此需要endpoints基于nodepool进行拓扑。直接将kube-proxy的kubeconfig配置删除，将apiserver请求经过yurthub即可解决服务拓扑问题。

### 3.1 KubeProxy支持流量拓扑

```shell
kubectl edit cm -n kube-system kube-proxy
```

注释掉`config.conf`文件下的`clientConnection.kubeconfig`，修改完后效果如下：

```yaml
apiVersion: v1
data:
  config.conf: |-
    apiVersion: kubeproxy.config.k8s.io/v1alpha1
    bindAddress: 0.0.0.0
    bindAddressHardFail: false
    clientConnection:
      acceptContentTypes: ""
      burst: 0
      contentType: ""
      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf <-- 删除这个配置
      qps: 0
    clusterCIDR: 100.64.0.0/10
    configSyncPeriod: 0s
// 省略
```
