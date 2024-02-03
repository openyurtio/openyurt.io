"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[70909],{4591:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=t(85893),r=t(11151);const a={title:"Yurt-Manager"},l=void 0,i={id:"core-concepts/yurt-manager",title:"Yurt-Manager",description:"1.Introduction",source:"@site/docs/core-concepts/yurt-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-manager",permalink:"/docs/next/core-concepts/yurt-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-manager.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1706998557,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{title:"Yurt-Manager"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/next/core-concepts/architecture"},next:{title:"YurtHub",permalink:"/docs/next/core-concepts/yurthub"}},s={},d=[{value:"1.Introduction",id:"1introduction",level:2},{value:"Introduction to Controllers and Webhooks",id:"introduction-to-controllers-and-webhooks",level:2},{value:"2.1 Edge Autonomy Related Controllers",id:"21-edge-autonomy-related-controllers",level:3},{value:"2.1.1 nodelifecycle Controller",id:"211-nodelifecycle-controller",level:4},{value:"2.1.2 podbinding Controller",id:"212-podbinding-controller",level:4},{value:"2.1.3 delegatelease Controller",id:"213-delegatelease-controller",level:4},{value:"2.1.4 yurtcoordinatorcert Controller",id:"214-yurtcoordinatorcert-controller",level:4},{value:"2.2 Raven Related Controllers",id:"22-raven-related-controllers",level:3},{value:"2.2.1 gatewaypickup Controller",id:"221-gatewaypickup-controller",level:4},{value:"2.2.2 gatewaydns Controller",id:"222-gatewaydns-controller",level:4},{value:"2.2.3 gatewayinternalservice Controller",id:"223-gatewayinternalservice-controller",level:4},{value:"2.2.4 gatewaypublicservice Controller",id:"224-gatewaypublicservice-controller",level:4},{value:"2.3 Workload Related Controllers",id:"23-workload-related-controllers",level:3},{value:"2.3.1 daemonpodupdater Controller",id:"231-daemonpodupdater-controller",level:4},{value:"2.3.2 yurtappset Controller/Webhook",id:"232-yurtappset-controllerwebhook",level:4},{value:"2.3.3 yurtappdaemon Controller/Webhook",id:"233-yurtappdaemon-controllerwebhook",level:4},{value:"2.3.4 yurtappoverrider Controller/Webhook",id:"234-yurtappoverrider-controllerwebhook",level:4},{value:"2.3.5 yurtstaticset Controller/Webhook",id:"235-yurtstaticset-controllerwebhook",level:4},{value:"2.4 Others",id:"24-others",level:3},{value:"2.4.1 nodepool Controller/Webhook",id:"241-nodepool-controllerwebhook",level:4},{value:"2.4.2 csrapprover Controller",id:"242-csrapprover-controller",level:4},{value:"2.4.3 platformadmin Controller/Webhook",id:"243-platformadmin-controllerwebhook",level:4},{value:"2.4.4 servicetopologyendpoints/servicetopologyendpointslices Controller",id:"244-servicetopologyendpointsservicetopologyendpointslices-controller",level:4}];function c(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"1introduction",children:"1.Introduction"}),"\n",(0,n.jsx)(o.p,{children:"The Yurt-Manager component is composed of multiple controllers and webhooks designed to ensure Kubernetes operates seamlessly in cloud-edge collaboration scenarios, similar to how it functions in regular data centers. For instance, it facilitates the easy management of multi-regional workloads and provides AdvancedRollingUpdate and OTA (Over-The-Air) upgrade features for edge workloads (DaemonSet and static Pods)."}),"\n",(0,n.jsx)(o.p,{children:"It is recommended that the Yurt-Manager component be deployed on the same machine as the Kubernetes control plane components (such as Kube-Controller-Manager). Yurt-Manager is typically deployed as a Deployment, usually consisting of two instances, a leader and a backup. Below is the architectural diagram of the component:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"yurt-manager",src:t(31159).Z+"",width:"3756",height:"1600"})}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["The --controllers parameter allows precise control over which controllers are activated or deactivated. The symbol ",(0,n.jsx)(o.code,{children:"*"})," is used to enable all default active controllers; ",(0,n.jsx)(o.code,{children:"foo"})," specifically starts the controller named ",(0,n.jsx)(o.code,{children:"foo"}),"; conversely, ",(0,n.jsx)(o.code,{children:"-foo"})," is used to deactivate the controller named ",(0,n.jsx)(o.code,{children:"foo"}),". Please note that controller names need to be separated by commas."]}),"\n",(0,n.jsxs)(o.li,{children:["Controller Webhooks will be enabled or disabled along with their corresponding controllers. On the other hand, Independent Webhooks are enabled by default but can be disabled using the startup parameter ",(0,n.jsx)(o.code,{children:"--disable-independent-webhooks"}),". The Independent Webhook ",(0,n.jsx)(o.code,{children:"Node"})," mainly labels nodes with suitable labels based on the attributes of the NodePool to which they belong."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"introduction-to-controllers-and-webhooks",children:"Introduction to Controllers and Webhooks"}),"\n",(0,n.jsx)(o.h3,{id:"21-edge-autonomy-related-controllers",children:"2.1 Edge Autonomy Related Controllers"}),"\n",(0,n.jsx)(o.h4,{id:"211-nodelifecycle-controller",children:"2.1.1 nodelifecycle Controller"}),"\n",(0,n.jsxs)(o.p,{children:["Before enabling the nodelifecycle controller, it is necessary to first disable the controller of the same name in the original Kube-Controller-Manager component.\nThe new nodelifecycle controller provides improved functionality compared to the native version: for nodes with the ",(0,n.jsx)(o.code,{children:"apps.openyurt.io/binding=true"})," annotation, even if the node status becomes NotReady, the controller will not set the ",(0,n.jsx)(o.code,{children:"Ready"})," condition in ",(0,n.jsx)(o.code,{children:"Pod.Status"})," to false."]}),"\n",(0,n.jsx)(o.h4,{id:"212-podbinding-controller",children:"2.1.2 podbinding Controller"}),"\n",(0,n.jsxs)(o.p,{children:["Some edge computing services require that Pods not be evicted in case of node failure, allowing for persistent binding between Pods and nodes. For example, an image processing application connected to a specific camera, or a smart traffic system that needs to be deployed at a specific intersection.\nBy adding the ",(0,n.jsx)(o.code,{children:"apps.openyurt.io/binding=true"})," annotation to nodes, the Pod binding feature can be enabled, ensuring that all Pods on the node are bound and unaffected by cloud and edge network status changes.\nThe podbinding controller is responsible for managing Pod toleration policies when the ",(0,n.jsx)(o.code,{children:"apps.openyurt.io/binding"})," annotation is changed. When the node is marked as ",(0,n.jsx)(o.code,{children:"apps.openyurt.io/binding=true"}),", the toleration seconds for ",(0,n.jsx)(o.code,{children:"node.kubernetes.io/not-ready"})," and ",(0,n.jsx)(o.code,{children:"node.kubernetes.io/unreachable"})," in Pods will be set to 0,\nensuring that Pods are not evicted from the node even when cloud-edge network connectivity is lost. Conversely, if the nodes are not set to true, these toleration seconds default to 300 seconds."]}),"\n",(0,n.jsx)(o.h4,{id:"213-delegatelease-controller",children:"2.1.3 delegatelease Controller"}),"\n",(0,n.jsxs)(o.p,{children:["The delegatelease controller is designed to work in conjunction with the yurt-coordinator component.\nWhen a node loses its connection to the cloud, the yurt-coordinator component reports a node Lease with the openyurt.io/delegate-heartbeat=true annotation.\nUpon detecting a Lease with this annotation, the delegatelease controller will mark the node with the ",(0,n.jsx)(o.code,{children:"openyurt.io/unschedulable"})," taint to ensure that newly created Pods are not scheduled to these nodes."]}),"\n",(0,n.jsx)(o.h4,{id:"214-yurtcoordinatorcert-controller",children:"2.1.4 yurtcoordinatorcert Controller"}),"\n",(0,n.jsx)(o.p,{children:"The yurtcoordinatorcert controller is responsible for generating certificates and kubeconfig files for the yurt-coordinator component.\nIt ensures that all certificates and kubeconfig files are securely stored in the system as Secret resources."}),"\n",(0,n.jsx)(o.h3,{id:"22-raven-related-controllers",children:"2.2 Raven Related Controllers"}),"\n",(0,n.jsx)(o.h4,{id:"221-gatewaypickup-controller",children:"2.2.1 gatewaypickup Controller"}),"\n",(0,n.jsx)(o.p,{children:"A new CRD Gateway is defined in project raven as the carrier of network information across network domains.\nIn the OpenYurt cluster, a Gateway CR needs to be created for each network domain to record the available gateway endpoints and network configurations.\nThe gatewaypickup controller reconcile the Gateway to elects the gateway endpoints from among alternative endpoints and node information for each network domain."}),"\n",(0,n.jsx)(o.h4,{id:"222-gatewaydns-controller",children:"2.2.2 gatewaydns Controller"}),"\n",(0,n.jsxs)(o.p,{children:["Raven L7 Proxy need to forward all http requests of NodeName+Port to the gateway endpoints of the LAN.\nThe domain name resolution of the NodeName need deploy dedicated dns component ",(0,n.jsx)(o.a,{href:"/docs/next/installation/raven-l7-proxy-prepare",children:"raven-proxy-dns"})," which uses the hosts plugin to mount a configmap named ",(0,n.jsx)(o.code,{children:"kube-system/edge-tunnel-nodes"}),", this configmap record resolves all NodeName to the clusterIP of service ",(0,n.jsx)(o.code,{children:"kube-system/x-raven-proxy-internal-svc"}),".\nGatewaydns controller dynamically manage the configmap entry."]}),"\n",(0,n.jsx)(o.h4,{id:"223-gatewayinternalservice-controller",children:"2.2.3 gatewayinternalservice Controller"}),"\n",(0,n.jsxs)(o.p,{children:["Raven L7 Proxy need to forward all http requests of NodeName+Port to the gateway endpoints of the LAN.\nGatewayinternnalservice controller is responsible for maintaining the life cycle of the service ",(0,n.jsx)(o.code,{children:"kube-system/x-raven-proxy-internal-svc"}),".\nNote that the Http request port varies according to the actual service design. Therefore, you can configure Gateway Spec.ProxyConfig to configure the Http/Https port of the proxy. The gatewaypublicservice controller update the ports in ",(0,n.jsx)(o.code,{children:"x-raven-proxy-internal-svc"})," for forwarding. All https/http requests are forwarded to port 10263/10264 of the raven agent"]}),"\n",(0,n.jsx)(o.h4,{id:"224-gatewaypublicservice-controller",children:"2.2.4 gatewaypublicservice Controller"}),"\n",(0,n.jsx)(o.p,{children:"Gatewaypublicservice controller maintains the life cycle of a LoadBalancer service and endpoints if you choose th expose gateway with LoadBalancer type."}),"\n",(0,n.jsx)(o.h3,{id:"23-workload-related-controllers",children:"2.3 Workload Related Controllers"}),"\n",(0,n.jsx)(o.h4,{id:"231-daemonpodupdater-controller",children:"2.3.1 daemonpodupdater Controller"}),"\n",(0,n.jsx)(o.p,{children:"In cloud-edge collaboration scenarios, the traditional RollingUpdate upgrade strategy of a DaemonSet can easily become blocked when there are NotReady nodes. To address this, the daemonpodupdater controller introduces two new upgrade models: AdvancedRollingUpdate and OTA (Over-The-Air) upgrade.\nThe AdvancedRollingUpdate strategy starts by upgrading the Daemon Pods on Ready nodes and skips the NotReady nodes. When a node transitions from NotReady to Ready, the Daemon Pod on that node will upgrade automatically.\nThe OTA strategy is for scenarios where the edge node owner (rather than the cluster owner) decides when to upgrade the workloads. This approach is particularly suitable for cases like electric vehicles where the edge node owner has full control over the upgrade process."}),"\n",(0,n.jsx)(o.h4,{id:"232-yurtappset-controllerwebhook",children:"2.3.2 yurtappset Controller/Webhook"}),"\n",(0,n.jsx)(o.p,{children:"In native Kubernetes environments, managing similar applications distributed across multiple node pools typically requires creating a separate Deployment for each node pool, which undoubtedly adds to the management burden and potential error rate.\nTo simplify the management process, the YurtAppSet CRD is designed to define an application template (compatible with Deployment and StatefulSet) and is responsible for managing workloads across multiple node pools.\nYurtAppSet requires users to clearly define in its Spec.Topology field which specific node pools the workloads should be deployed to. This greatly simplifies the deployment and management of applications, making it more convenient to expand, upgrade, and maintain applications in a multi-node pool environment.\nWith YurtAppSet, users can centrally manage the application deployments of multiple node pools, effectively reducing management complexity and error rates."}),"\n",(0,n.jsx)(o.h4,{id:"233-yurtappdaemon-controllerwebhook",children:"2.3.3 yurtappdaemon Controller/Webhook"}),"\n",(0,n.jsx)(o.p,{children:"In traditional Kubernetes, a DaemonSet is responsible for running replicated daemon Pods on every node in the cluster. The addition or removal of nodes triggers the creation or removal of the corresponding daemon Pods. However, DaemonSet does not apply in situations where the workload needs to be automatically adjusted based on the dynamic changes of node pools.\nYurtAppDaemon is designed to ensure that specified workloads based on the Spec.WorkloadTemplate are automatically deployed across all node pools or those specified by the Spec.NodePoolSelector. As node pools are added or removed, the YurtAppDaemon controller and Webhook will create or remove workloads for the respective node pools, ensuring that the qualified node pools always have the intended Pods."}),"\n",(0,n.jsx)(o.h4,{id:"234-yurtappoverrider-controllerwebhook",children:"2.3.4 yurtappoverrider Controller/Webhook"}),"\n",(0,n.jsx)(o.p,{children:"In the YurtAppDaemon and YurtAppSet schemes, workloads are distributed through a unified template. However, when workloads require specific personalized configuration for different node pools or geographic regions, a simple template may not fully meet the needs. Although YurtAppSet provides a degree of personalization through the Topology field, in order to further reduce inter-system coupling and maintain backward compatibility, we have introduced YurtAppOverrider as a specialized engine for personalized rendering of multi-regional workloads.\nThe primary role of YurtAppOverrider is to ensure that all bound YurtAppDaemon and YurtAppSet undergo specific Webhook rendering before distributing workloads. Whether the templates of YurtAppDaemon and YurtAppSet change, or the personalized configuration of YurtAppOverrider needs updating, the YurtAppOverrider controller will trigger re-calculation of the configuration to ensure precise personalization in a multi-regional deployment scenario."}),"\n",(0,n.jsx)(o.h4,{id:"235-yurtstaticset-controllerwebhook",children:"2.3.5 yurtstaticset Controller/Webhook"}),"\n",(0,n.jsx)(o.p,{children:"Given the vast number and wide distribution of edge devices, manually deploying and upgrading static Pods in a cloud-edge environment can pose significant operational challenges and risks. To overcome these challenges, OpenYurt has introduced a new type of Custom Resource Definition (CRD) called YurtStaticSet, aimed at improving the management of static Pods.\nThe yurtstaticset controller/webhook introduces two upgrade mechanisms for static Pods: AdvancedRollingUpdate and Over-The-Air (OTA), ensuring effective version control and seamless upgrades of static Pods in a cloud-edge collaborative environment."}),"\n",(0,n.jsx)(o.h3,{id:"24-others",children:"2.4 Others"}),"\n",(0,n.jsx)(o.h4,{id:"241-nodepool-controllerwebhook",children:"2.4.1 nodepool Controller/Webhook"}),"\n",(0,n.jsx)(o.p,{children:"Users typically leverage various Kubernetes labels to group and manage nodes. However, as the number of nodes and labels grows, the operations and maintenance tasks for nodes\u2014such as implementing scheduling policies and batch setting taints\u2014become increasingly burdensome and complex.\nTo simplify this process, the NodePool abstracts a group of nodes with common characteristics (such as geographic location, CPU architecture, cloud service provider, etc.) into a node pool, allowing for unified management at a higher level.\nThis abstraction brings clear structure to the grouping of nodes within the cluster, greatly simplifying the overall node operations and maintenance workflow."}),"\n",(0,n.jsx)(o.h4,{id:"242-csrapprover-controller",children:"2.4.2 csrapprover Controller"}),"\n",(0,n.jsx)(o.p,{children:"In Kubernetes, the approval policy for CSR (Certificate Signing Request) is very strict, meaning that CSRs generated by OpenYurt components (such as YurtHub) will not be automatically approved by the Kube-Controller-Manager.\nTo address this issue, the csrapprover controller within Yurt-Manager is designed to be responsible for approving CSR requests for OpenYurt components, ensuring normal operation."}),"\n",(0,n.jsx)(o.h4,{id:"243-platformadmin-controllerwebhook",children:"2.4.3 platformadmin Controller/Webhook"}),"\n",(0,n.jsxs)(o.p,{children:["PlatformAdmin has evolved from the previous version of the EdgeX CRD and serves as an abstraction for the edge device management platform. Users simply input the platform settings, the name of the NodePool to be deployed, the version to be deployed, and so on, to deploy a complete edge device management platform within the node pool.\nThe platformadmin-controller, integrated within yurt-manager, is responsible for parsing the PlatformAdmin CR into the corresponding configmap, service, and yurtappset, thereby realizing the deployment of the edge device management platform.\nIt is also in charge of distributing yurt-iot-dock to the respective node pools to achieve synchronization of edge devices. Additionally, users can select the required EdgeX optional components to be deployed via the components field of the PlatformAdmin CR, for more information on this part, please refer to the ",(0,n.jsx)(o.a,{href:"(../user-manuals/iot/edgex-foundry.md)",children:"Cloud-Native Device Management Section"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"platform-adminv1.4.0",src:t(58267).Z+"",width:"1969",height:"1347"})}),"\n",(0,n.jsx)(o.h4,{id:"244-servicetopologyendpointsservicetopologyendpointslices-controller",children:"2.4.4 servicetopologyendpoints/servicetopologyendpointslices Controller"}),"\n",(0,n.jsxs)(o.p,{children:["The servicetopology controller assists the ",(0,n.jsx)(o.a,{href:"/docs/next/user-manuals/resource-access-control/",children:"servicetopology filter"})," in YurtHub to provide service topology routing functionality for the cluster.\nWhen the topology Annotation of a Service is modified, the servicetopology controller updates the corresponding Endpoints and EndpointSlices, thereby triggering an update of the service topology in the node-side YurtHub."]})]})}function p(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},58267:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/platform-adminv1.4.0-20da11e750ce6fb04fc575b725682f6e.png"},31159:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/yurt-manager-arch-d5acd62c1b9e38fab3b73004b93be483.png"},11151:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>l});var n=t(67294);const r={},a=n.createContext(r);function l(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);