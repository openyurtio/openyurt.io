---
title: Prometheus收集边缘设备数据
---

![system-architecture](../../../../../../static/img/docs/core-concepts/prometheus-based-raven.png)

本文档主要讲述如何在已有的OpenYurt集群上通过Raven实现Promethues对边缘端设备的metrics进行采集,如果未安装Raven组件请参考[安装教程](../../installation/manually-setup.md)。在边缘场景中，云、边往往处于不同的网络域内，因此需要Raven项目实现跨网络域通信。位于云端的Prometheus组件需要跨网络域拉取集群资源metrics，针对边缘的Gateway节点相关资源信息则通过VPN获取，针对边缘非Gateway节点则通过该网路域内Gateway节点转发拉取资源信息。

## 环境要求
如果你还没有OpenYurt集群，你可以参考 [安装手册](../../installation/summary.md) 来初始化一个OpenYurt集群或将一个Kubernetes集群转换为OpenYurt集群。
- OpenYurt v1.2+
- Raven v0.3.0+
- Prometheus




## Prometheus 配置

Prometheus默认使用IP来访问节点的metric地址，Raven项目实现了跨网络域通信，因此在OpenYurt项目上使用Prometheus与原生k8s保持一致。
### 以收集kubelet的metrics为例
通过修改Prometheus的配置文件增加收集kubelet的指标数据的功能,在这里我们通过relabel规则设定prometheus通过kubelet监听的只读端口10255收集metrics信息：


- 更多关于relabel的配置信息可以参考 [prometheus_relabel_config](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config).

- 不同的组件relabel所需要的`sourceLabels`可能不同，可以参考[kubernetes_sd_config](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config).
```yaml
- job_name: 'kubelet'
    kubernetes_sd_configs:
      - role: node
    scheme: https
    tls_config:
      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      insecure_skip_verify: true
    authorization:
      credentials_file: /var/run/secrets/kubernetes.io/serviceaccount/token
    relabel_configs:
      - action: labelmap
        regex: __meta_kubernetes_node_label_(.+)
      - source_labels: [__address__]
        action: replace
        target_label: __address__
        regex: ([^:;]+):(\d+)
        replacement: ${1}:10255
      - source_labels: [__scheme__]
        action: replace
        target_label: __scheme__
        regex: https
        replacement: http
```
注意：如果您也使用只读端口10255，请注意配置kubelet开启对10255端口的监听，否则会出现如如图所示错误
![system-architecture](../../../../../../static/img/docs/core-concepts/prometheus-test.png)


