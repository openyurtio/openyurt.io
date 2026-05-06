---
title: '项目列表'
---

OpenYurt 无缝地融合了云原生和边缘计算，目前已经在万台边缘节点规模场景下落地实践。

| 技术               | 集成                                                                                                                                                             | 描述                                                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EdgeX Foundry                | [IoT Provider](https://openyurt.io/docs/user-manuals/iot/edgex-foundry/#1-add-device-virtual-components-manually)                                                                            | 在已有的 OpenYurt 集群上使用 PlatformAdmin 部署 EdgeX 系统和 YurtIoTDock 组件                                                               |
| Calico                  | [Network Provider](https://github.com/openyurtio/openyurt/issues/857)                                                                   | Calico 是一个纯三层的数据中心网络方案（不需要Overlay）                                |
| eKuiper                | [Observability](https://ekuiper.org/docs/en/v1.13/)                                                                   | eKuiper 在边缘端提供流式数据处理分析能力，并通过内置的规则引擎帮助用户快速创建物联网边缘分析应用（类似于 Apache Flink）                                                                                                                             |
| FabEdge                  | [Network Provider](https://juejin.cn/post/7028551925561819149)                                                                   | 使用 FabEdge 为 OpenYurt 集群中的边-边-云容器网络与主机网络通信提供解决方案|
| Flannel                  | [Network Provider](https://openyurt.io/docs/user-manuals/network/edge-pod-network)                                                                   | Flannel是针对Kubernetes设计基于 Overlay 网络的跨主机容器网络解决方案                                |
| Grafana                  | [Observability](https://openyurt.io/docs/user-manuals/monitoring/prometheus)                                                                   | 使用 Grafana 仪表板可视化边缘节点的指标                                                                                                 |
| Helm                     | [Deploying OpenYurt on Kubernetes](https://openyurt.io/docs/installation/manually-setup)                                                                                                              | 使用 Helm Charts 部署 OpenYurt 控制组件                              |
| Kubernetes               | [Deploying OpenYurt on Kubernetes](https://openyurt.io/docs/installation/manually-setup)                                                                                                              | 在 Kubernetes 上运行 OpenYurt 组件，并将 Kubernetes 的能力延伸到边缘侧                                                                         |
| KubeVela                     | [Observability](https://kubevela.io/blog/2023/01/09/kubevela-openyurt-integration/)                                                                   | 使用 KubeVela 统一云边协同下的应用管理                                                                     |
| Prometheus               | [Observability](https://openyurt.io/docs/user-manuals/monitoring/prometheus)                                                                   | 从 OpenYurt 集群中的边缘节点抓取指标                                         |
| Raven                    | [Network Provider](https://openyurt.io/docs/user-manuals/network/raven)                                                                   | 使用 Raven 增强边缘集群中的边到边、边到云网络通信                                                                       |
| Shifu                   | [IoT Provider](https://shifu.dev/technical-blogs/2022/06/17/openyurt/)                                                                   | Shifu 兼容各种物联网设备的协议并将其抽象成一个为微服务软件对象。                                                                       |
| WasmEdge                   | [WebAssembly Runtimes](https://www.cncf.io/blog/2022/02/07/wasmedge-and-openyurt-bring-cloud-computing-to-the-edge/)                                                                   | 使用 OpenYurt 管理 WasmEdge 运行时

## 参与

您的项目尚未列入此处的 OpenYurt 集成列表? 您可以通过 [向此页面做出贡献](https://openyurt.io/docs/developer-manuals/how-to-contribute) 将其添加到列表中。您也可以通过 [OpenYurt Slack](https://join.slack.com/t/openyurt/shared_invite/zt-2ajsy47br-jl~zjumRsCAE~BlPRRsIvg) 或者 [OpenYurt 社区会议](https://groups.google.com/g/openyurt/) 分享您的项目。
