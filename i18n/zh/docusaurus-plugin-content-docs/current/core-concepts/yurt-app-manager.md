---
title: YurtAppManager
---



Yurt-App-Manager是OpenYurt集群提供边缘单元化管理的功能组件，全面提升在边缘场景下的应用部署效率，降低边缘节点和应用运维的复杂度。



## 组件介绍

- 在边缘计算场景下，边缘节点通常具备很强的区域性、地域性、或者其他逻辑上的分组特性，比如具有相同的CPU架构、运营商或云提供商，不同分组的节点间往往存在网络不互通、资源不共享、资源异构、应用独立等明显的隔离属性。这也是边缘节点池的由来。
- 相同的应用和镜像，可能需要部署到不同的节点池中。

- 原生Kubernetes Service的后端端点扁平分布在集群中任意节点。因此，跨跃不同分组节点的Service流量，会大概率出现访问不可达、或者访问效率低下的问题。

![img](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641890786820-8723fed9-f3fd-43a9-b165-99fb367bb6a3.png)





针对以上的场景和问题，OpenYurt 从三个层面来解决：

- 节点单元化： 节点池，以节点池视角对不同边缘区域下的主机进行统一管理和运维
- 应用的单元化： 单元化部署，使用新的单元化部署模型将用户的工作负载部署在不同的节点池中，业务的实例数，版本都可以按照节点池的维度进行统一管理。

- 流量的单元化： Service 拓扑，通过简单配置来限制Service后端Endpoint的访问范围，例如只能由相同节点池的节点访问，或者只能本节点访问。

而Yurt-App-Manager是 Kubernetes 的一个标准扩展，它可以配合 Kubernetes 使用，提供 NodePool 和 YurtAppSet(之前名为UnitedDeployment) 两种控制器，从主机维度和应用维度来提供边缘场景下节点和应用的运维能力。

## 边缘节点池概述

OpenYurt的Yurt-App-Manager 的组件提供了节点池Node Pool控制器，将节点按照特定属性（地域，CPU架构，云提供商）等等，抽象成节点池概念，以节点池的维度对节点进行统一管理。

传统的做法是用Kubernetes 打Label 的方式来对主机进行分类管理，但是随着节点规模和Label数量的增加，对节点主机分类运维（例如：批量设置调度策略、traints等）会变得越来越复杂，如下图所示：

![img](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641821636032-47106886-a026-484b-b867-ef74ce9e93b6.png)

NodePool 以节点组的维度对节点划分做了更高维度的抽象，可以从节点池视角对不同边缘区域下的主机进行统一管理和运维，如下图所示：



![img](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641822057755-c50eecec-4ae9-4f35-a86f-1fbfe48498af.png)





## 单元化部署应用模型

随着地域分布越来越多，以及不同地域对应用的差异化需求，使得运维变得越来越复杂，具体表现在以下几个方面：

- 镜像版本升级，需要将每个Deployment逐一修改。
- 需要自定义Deployment的命名规范，以此来表明相同的应用。

- 相同应用的多个Deployment，除了name，nodeselectors, replicas 这些特性外，其他的差异化配置比较小。

单元化部署（YurtAppSet）是OpenYurt默认提供Yurt-App-Manager组件所提供的能力，是kubernetes CRD 资源，通过更上层次的抽象，对这些子的Deployment 进行统一管理：create/update/delete。



![img](https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641823282158-8e00965d-e17e-4a79-912c-01589f98217e.png)

YurtAppSet 控制器可以提供一个模板来定义应用，并通过管理多个 workload 来匹配下面不同的区域。 每个 YurtAppSet 下每个区域的 workload 被称为 pool， 目前 pool 支持使用两种workload： `StatefulSet` 和 `Deployment`。控制器会根据 YurtAppSet 中pool的配置创建子的workload 资源对象，每个资源对象都有一个期望的 `replicas` Pod 数量。通过一个YurtAppSet 实例就可以自动维护多个 Deployment 或者 Statefulset 资源，同时还能具备replicas 等的差异化配置。







如若获取更直观的操作体验，请查看 Yurt-App-Manager [使用教程](https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/blob/master/docs/tutorial/yurt-app-manager.md)和[开发者教程](https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/blob/master/docs/tutorial/yurt-app-manager-dev.md)。



更多关于 Yurt-App-Manager 的讨论请参考社区 issue 和 pull request：

- issue124：[YurtAppSet usages]( https://github.com/openyurtio/openyurt/issues/124)
- issue171：[ [feature request\] the definition of NodePool and YurtAppSet](https://github.com/openyurtio/openyurt/issues/171)

- pull request 173： [[proposal\] add nodepool and uniteddployment crd proposal](https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/pull/173)


