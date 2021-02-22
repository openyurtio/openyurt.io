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
          link: 'https://github.com/openyurtio/openyurt',
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
                img: '/img/autonomy.png',
                title: '边缘自治',
                content: '当边缘节点处于离线状态或边缘网络间歇性断联时，保证业务容器可以持续运行在边缘节点上。这意味着即使节点重启, 边缘业务容器仍可自动恢复。同时当网络恢复正常后，边缘节点自动同步业务容器最新状态，确保应用持续无缝地运行。',
            },
            {
                img: '/img/tunnel.png',
                title: '云边协同',
                content: '为位于Intranet内部的边缘节点提供安全的云边双向认证的加密通道，确保在边到云网络单向连通的边缘计算场景下，用户仍可运行原生kubernetes运维命令(如kubectl exec/logs等)。同时中心式的运维监控系统(如prometheus, metrics-server等)也可以通过云边通道获取到边缘的监控数据。',
            },
            {
                img: '/img/unit.png',
                title: '边缘单元化',
                content: '从单元化的视角，轻松管理分散在不同地域的边缘资源，并对各地域单元内的业务提供独立的生命周期管理，升级，扩缩容，流量闭环等能力。且业务无需进行任何适配或改造。',
            },
            {
                img: '/img/easy.png',
                title: '无缝转换',
                content: '提供yurtctl工具，方便用户一键式将原生Kubernetes集群转换为具备边缘能力的OpenYurt集群，或者将OpenYurt集群还原为原生Kubernetes集群。 同时OpenYurt组件运行所需的额外资源和维护成本很低。',
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
          title: '边缘异构资源支持',
          content: '对不同边缘节点硬件架构(x86/arm/arm64等)，硬件规格，通信协议提供一致体验。',
        },
        {
          img: '/img/feature_service.png',
          title: '高可靠/稳定性',
          content: '基于边缘自治和边缘单元化能力，为多地域，大规模的边缘应用的持续稳定运行提供保障。支持各类开源AI系统(如Tensorflow，pytorch等)，为AI用户提供最佳体验。',
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
      briefIntroduction: 'An open platform that extends upstream Kubernetes to Edge',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/developer-guide.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/openyurtio/openyurt',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'Extending Kubernetes to Edge',
      desc: 'OpenYurt follows the philosophy of "integrating cloud and edge". It is an open platform that embraces the powerful orchestration capabilities of upstream Kubernetes. OpenYurt empowers users to manage large scale edge computing workloads with ease. Users can deliver, manage and monitor the edge workloads using the same upstream Kubernetes APIs. From the architectural perspective, OpenYurt provides edge computing capabilities via add-on mechanism rather than changing the upstream Kubernetes components. It is an open source project under Apache 2.0 License. Welcome to join us!',
      img: '/img/architecture.png',
    },
    functions: {
        title: 'Core Features',
        list: [
            {
                img: '/img/autonomy.png',
                title: 'Edge Autonomy',
                content: 'When edge nodes are offline or the cloud-to-node networking is not stable, it is important to make sure the workloads are not being disrupted. When the connection resumes, the status of edge workloads will be synced with the cloud control plane and remain consistent.',
            },
            {
                img: '/img/tunnel.png',
                title: 'Edge and Cloud Synchronization',
                content: 'OpenYurt provides mutually encrypted tunnel and reverse proxy between edge nodes and the cloud control plane. When ingress traffic is blocked due to networking policy, the cloud control plane can still retrieve heartbeat and monitor the workloads. And users will still be able to use Kubectl and other monitoring tools such as prometheus, metrics-server to manage and monitor the edge workloads.',
            },
            {
                img: '/img/unit.png',
                title: 'Edge Zoning Unit',
                content: 'OpenYurt allows users to group workloads into different units distributed in different geo-locations. Out of box, OpenYurt is able to provide users individual lifecycle management and operational policies based on the unit zoning.',
            },
            {
              img: '/img/easy.png',
              title: 'Seamless Conversion',
              content: 'With yurtctl, a CLI tool, users can easily convert an upstream Kubernetes cluster into an OpenYurt one, and vice versa. The add-ons by OpenYurt is low maintenance as well.',
          },
        ],
    },
    features: {
      title: 'Why OpenYurt',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Kubernetes native',
          content: 'OpenYurt is fully compatible with upstream Kubernetes. It supports all Kubernetes APIs as well as all the Workload types, Service, CSI plugin etc.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Supports different edge architectures',
          content: 'OpenYurt supports arm, arm64 and x86 edge nodes. ',
        },
        {
          img: '/img/feature_service.png',
          title: 'Highly reliable',
          content: 'Built upon edge autonomy and zoning unit, OpenYurt ensures high reliability in large scaled use cases. It supports most popular AI platforms，such as Tensorflow and Pytorch.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'Platform agnostic',
          content: 'OpenYurt can be deployed on any Kubernetes cluster in public cloud or onprem datacenter.',
        }
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
//      title: '用户',
//      desc: <span>简单描述</span>,
//      list: [
//        '/img/users_alibaba.png',
//      ],
//   },
  },
};
