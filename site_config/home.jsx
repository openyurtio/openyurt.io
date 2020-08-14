import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'OpenYurt',
      briefIntroduction: '一个延伸原生kubernetes到边缘计算的智能开放平台',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/developer-guide.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: 'https://github.com/alibaba/openyurt',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '将Kubernetes延伸到边缘',
      desc: 'OpenYurt是一个基于“云边一体化”概念来设计的开源平台。它依托原生Kubernetes强大的容器编排、调度能力，实现完整的边缘计算云原生基础设施架构。它帮助用户轻松完成在海量边、端资源上针对大规模应用进行交付、运维和管控。从架构上，OpenYurt最大限度地保证对原生Kubernetes无侵入，引入一套新组件来解决在边缘场景运行Kubernetes所遇到的挑战。 OpenYurt使用Apache 2.0许可。我们欢迎贡献者！',
      img: '/img/architecture.png',
    },
    functions: {
        title: '核心功能',
        list: [
            {
                img: '/img/dynamic_configuration.png',
                title: '边缘自治',
                content: '当边缘节点处于离线状态或边缘网络间歇性断联时，保证业务容器可以持续运行在边缘节点上。这意味着即使节点重启, 边缘业务容器仍可自动恢复。同时当网络恢复正常后，边缘节点自动同步业务容器最新状态，确保应用持续无缝地运行。',
            },
            {
                img: '/img/service_discovery.png',
                title: '云边协同',
                content: '为位于Intranet内部的边缘节点提供安全的云边双向认证的加密通道，确保在边到云网络单向连通的边缘计算场景下，用户仍可运行原生kubernetes运维命令(如kubectl exec/logs等)。同时中心式的运维监控系统(如prometheus, metrics-server等)也可以通过云边通道获取到边缘的监控数据。',
            },
            {
                img: '/img/dynamic_DNS.png',
                title: '边缘单元化',
                content: '从单元化的视角，轻松管理分散在不同地域的边缘资源，并对各地域单元内的业务提供独立的生命周期管理，升级，扩缩容，流量闭环等能力。且业务无需进行任何适配或改造。',
            },
        ],
    },
    features: {
      title: 'Why OpenYurt',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Kubernetes兼容',
          content: '提供了完全的Kubernetes API兼容性和使用体验。支持所有Kubernetes工作负载，Services，operators，CNI插件和CSI插件等。',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '无缝转换',
          content: '提供yurtctl工具，一键式将原生Kubernetes集群转换为具备边缘能力的OpenYurt集群。OpenYurt组件的额外资源和维护成本非常低。',
        },
        {
          img: '/img/feature_service.png',
          title: 'AI无感运行',
          content: '为AI场景提供最佳用户体验，支持各类开源AI系统(如Tensorflow，pytorch等)利用OpenYurt平台轻松运行在用户的边缘资源上。',
        },
        {
          img: '/img/feature_hogh.png',
          title: '云平台无关',
          content: 'OpenYurt可以轻松部署在任何公共云的Kubernetes服务中。',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
//    users: {
//      title: '用户',
//      desc: <span>简单描述</span>,
//      list: [
//        '/img/users_alibaba.png',
//      ],
//    },
  },
  'en-us': {
    brand: {
      brandName: 'OpenYurt',
      briefIntroduction: '一个原生kubernetes延伸到边缘的智能开放平台',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/developer-guide.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/alibaba/openyurt',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    functions: {
        title: '功能',
        list: [
            {
                img: '/img/dynamic_configuration.png',
                title: '边缘自治',
                content: '当边缘节点处于离线状态或边缘网络间歇性断联时，保证业务容器可以持续运行在边缘节点上。这意味着即使节点重启, 边缘业务容器仍可自动恢复。同时当网络恢复正常后，边缘节点会自动同步业务容器最新状态，确保应用持续无缝的运行。',
            },
            {
                img: '/img/service_discovery.png',
                title: '云边协同',
                content: '为位于Intranet内部的边缘节点提供安全的云边双向认证的加密通道，确保在云边网络单向连通的边缘计算场景下，用户仍可运行原生kubernetes运维命令(如kubectl exec/logs等)。同时中心式的运维监控系统(如prometheus, metrics-server等)也可以通过云边通道获取到边缘的监控数据。',
            },
            {
                img: '/img/dynamic_DNS.png',
                title: '边缘单元化',
                content: '从单元化的视角，轻松管理分散在不同地域的边缘资源，并对各地域单元内的业务提供独立的生命周期管理，升级，扩缩容，流量闭环等能力。且业务无需进行任何适配或改造。',
            },
        ],
    },
    features: {
      title: 'Why OpenYurt',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Kubernetes兼容',
          content: '它提供了完全的Kubernetes API兼容性和使用体验，极大的降低用户的学习成本。 支持所有Kubernetes工作负载，Services，operators，CNI插件和CSI插件等。',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '无缝转换',
          content: '提供yurtctl工具，可以一键式将原生Kubernetes集群转换为具备边缘能力的OpenYurt集群。 同时OpenYurt组件的额外资源和维护成本非常低。',
        },
        {
          img: '/img/feature_service.png',
          title: 'AI无感运行',
          content: '为AI场景提供最佳用户体验，支持各类开源AI系统(如Tensorflow，pytorch等)利用OpenYurt平台轻松运行在用户的边缘资源上。',
        },
        {
          img: '/img/feature_hogh.png',
          title: '云平台无关',
          content: 'OpenYurt可以轻松部署在任何公共云的Kubernetes服务中。',
        },
//        {
//          img: '/img/feature_runtime.png',
//          title: 'feature5',
//          content: 'feature description',
//        },
//        {
//          img: '/img/feature_maintenance.png',
//          title: 'feature6',
//          content: 'feature description',
//        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
//    users: {
//      title: 'users',
//      desc: <span>some description</span>,
//      list: [
//        '/img/users_alibaba.png',
//      ],
//    },
  },
};
