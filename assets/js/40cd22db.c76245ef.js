"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[17680],{73631:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"core-concepts/yurt-manager","title":"Yurt-Manager","description":"1.Introduction","source":"@site/versioned_docs/version-v1.3/core-concepts/yurt-manager.md","sourceDirName":"core-concepts","slug":"/core-concepts/yurt-manager","permalink":"/docs/v1.3/core-concepts/yurt-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-manager.md","tags":[],"version":"v1.3","lastUpdatedBy":"PersistentJZH","lastUpdatedAt":1743719234000,"frontMatter":{"title":"Yurt-Manager"},"sidebar":"docs","previous":{"title":"YurtHub","permalink":"/docs/v1.3/core-concepts/yurthub"},"next":{"title":"NodeResourceManager","permalink":"/docs/v1.3/core-concepts/node-resource-manager"}}');var r=n(74848),a=n(28453);const s={title:"Yurt-Manager"},i=void 0,d={},l=[{value:"1.Introduction",id:"1introduction",level:2},{value:"1.1 <code>csrapprover</code> controller",id:"11-csrapprover-controller",level:3},{value:"1.2 <code>daemonpodupdater</code> controller",id:"12-daemonpodupdater-controller",level:3},{value:"1.3 <code>delegatelease</code> controller",id:"13-delegatelease-controller",level:3},{value:"1.4  <code>podbinding</code> controller",id:"14--podbinding-controller",level:3},{value:"1.5 <code>ravenl3</code> controller",id:"15-ravenl3-controller",level:3},{value:"1.6 <code>nodepool</code> controller/webhook",id:"16-nodepool-controllerwebhook",level:3},{value:"1.7 <code>poolcoordinatorcert</code> controller",id:"17-poolcoordinatorcert-controller",level:3},{value:"1.8 <code>servicetopology</code> controller",id:"18-servicetopology-controller",level:3},{value:"1.9 <code>yurtstaticset</code> controller/webhook",id:"19-yurtstaticset-controllerwebhook",level:3},{value:"1.10 <code>yurtappset</code> controller/webhook",id:"110-yurtappset-controllerwebhook",level:3},{value:"1.11 <code>yurtappdaemon</code> controller/webhook",id:"111-yurtappdaemon-controllerwebhook",level:3}];function c(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"1introduction",children:"1.Introduction"}),"\n",(0,r.jsx)(o.p,{children:"The Yurt-Manager component consists of several controllers and webhooks, which are used to provide abilities to ensure that Kubernetes can work as it would in a normal data center\nin a cloud-edge collaboration scenario. such as easily managing multi-regions workloads and providing AdvancedRollingUpdate and OTA upgrade capabilities for edge workloads(DaemonSet and static pods)."}),"\n",(0,r.jsxs)(o.p,{children:["The Yurt-Manager component is recommended to co-located with Kubernetes control plane components such as Kube-Controller-Manager. and Yurt-Manager is deployed as a ",(0,r.jsx)(o.code,{children:"Deployment"}),", usually consists of\ntwo instances, one leader and one backup."]}),"\n",(0,r.jsx)(o.p,{children:"Each controller and webhook is described as follows."}),"\n",(0,r.jsxs)(o.h3,{id:"11-csrapprover-controller",children:["1.1 ",(0,r.jsx)(o.code,{children:"csrapprover"})," controller"]}),"\n",(0,r.jsxs)(o.p,{children:["Due to the stringent approval policy for CSR(Certificate Signing Request) in Kubernetes,\nthe CSRs generated by OpenYurt components, such as YurtHub, are not automatically approved by theKube-Controller-Manager.\nAs a result, A controller named ",(0,r.jsx)(o.code,{children:"csrapprover"})," within Yurt-Manager is responsible for approving the CSRs of OpenYurt components."]}),"\n",(0,r.jsxs)(o.h3,{id:"12-daemonpodupdater-controller",children:["1.2 ",(0,r.jsx)(o.code,{children:"daemonpodupdater"})," controller"]}),"\n",(0,r.jsxs)(o.p,{children:["The traditional RollingUpdate strategy for DaemonSet can become easily obstructed when NotReady nodes are present in a Cloud-Edge collaboration scenario. To address this issue, the ",(0,r.jsx)(o.code,{children:"daemonpodupdater"})," controller employs two upgrade models: AdvancedRollingUpdate and OTA (Over-the-Air) upgrade.\nThe AdvancedRollingUpdate strategy initially upgrades pods on Ready nodes while skipping NotReady nodes. When a node transitions from NotReady to Ready, the daemon pod on that node is automatically upgraded.\nThe OTA strategy is utilized in scenarios where the decision to upgrade a workload falls under the purview of the edge node owner, rather than the cluster owner. This approach is particularly relevant in cases such as electric vehicles, where the edge node owner has greater control over the upgrade process."]}),"\n",(0,r.jsxs)(o.h3,{id:"13-delegatelease-controller",children:["1.3 ",(0,r.jsx)(o.code,{children:"delegatelease"})," controller"]}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"delegatelease"})," controller is designed to work in conjunction with pool-coordinator component. When a node becomes disconnected from the cloud, the lease reported through\npool-coordinator component will have the ",(0,r.jsx)(o.code,{children:"openyurt.io/delegate-heartbeat=true"})," annotation. Upon detecting a lease with this annotation, the ",(0,r.jsx)(o.code,{children:"delegatelease"})," controller will apply the\n",(0,r.jsx)(o.code,{children:"openyurt.io/unschedulable"})," taint to the node, ensuing that newly created pods cannot be scheduled on such nodes."]}),"\n",(0,r.jsxs)(o.h3,{id:"14--podbinding-controller",children:["1.4  ",(0,r.jsx)(o.code,{children:"podbinding"})," controller"]}),"\n",(0,r.jsxs)(o.p,{children:["Certain edge services require that Pods not be evicted in the event of node failure; instead, they demand a specific Pod to be bound to a particular node.\nFor instance, image processing applications need to be bound to the machine connected to a camera, while intelligent transportation applications must be fixed to a machine located at a specific intersection.\nUsers can add the ",(0,r.jsx)(o.code,{children:"apps.openyurt.io/binding=true"})," annotation to nodes to enable the Pods Binding feature, ensuring that all Pods on that node are bound to it and remain unaffected by the cloud-edge network."]}),"\n",(0,r.jsxs)(o.p,{children:["The podbinding controller oversees the management of pod tolerations when the ",(0,r.jsx)(o.code,{children:"apps.openyurt.io/binding"})," annotation of a node is modified. If the ",(0,r.jsx)(o.code,{children:"apps.openyurt.io/binding"})," node annotation is set to true,\nthe TolerationSeconds for ",(0,r.jsx)(o.code,{children:"node.kubernetes.io/not-ready"})," and ",(0,r.jsx)(o.code,{children:"node.kubernetes.io/unreachable"})," tolerations in pods will be set to 0, preventing the eviction of pods even when the cloud-edge network is offline.\nConversely, if the annotation is not set to true, the TolerationSeconds for ",(0,r.jsx)(o.code,{children:"node.kubernetes.io/not-ready"})," and ",(0,r.jsx)(o.code,{children:"node.kubernetes.io/unreachable"})," tolerations in pods will be set to 300 seconds."]}),"\n",(0,r.jsxs)(o.h3,{id:"15-ravenl3-controller",children:["1.5 ",(0,r.jsx)(o.code,{children:"ravenl3"})," controller"]}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"ravenl3"})," controller serves as the controller for the Gateway Custom Resource Definition (CRD). This controller is intended to be used in conjunction with the Raven Agent component,\nwhich facilitates Level3 network connectivity among pods located in different physical or network regions."]}),"\n",(0,r.jsxs)(o.h3,{id:"16-nodepool-controllerwebhook",children:["1.6 ",(0,r.jsx)(o.code,{children:"nodepool"})," controller/webhook"]}),"\n",(0,r.jsx)(o.p,{children:"NodePool abstracts the concept of a node pool based on specific node attributes, such as region, CPU architecture, cloud provider, and more, allowing for unified management of nodes at the pool level."}),"\n",(0,r.jsx)(o.p,{children:"We are accustomed to grouping and managing nodes using various Kubernetes Labels. However, as the number of nodes and labels increases, the operation and maintenance of nodes (e.g., batch configuration of scheduling policies, taints, etc.) become increasingly complex, as illustrated in the following figure:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"img",src:n(26382).A+"",width:"987",height:"449"})}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"nodepool controller/webhook can"})," manage nodes across different edge regions from the perspective of a node pool, as depicted in the subsequent figure:"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"img",src:n(28805).A+"",width:"1410",height:"447"})}),"\n",(0,r.jsxs)(o.h3,{id:"17-poolcoordinatorcert-controller",children:["1.7 ",(0,r.jsx)(o.code,{children:"poolcoordinatorcert"})," controller"]}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"poolcoordinatorcert"})," controller is responsible for preparing certificates and kubeconfig file for the pool-coordinator component. All certificates and kubeconfig files are stored as Secret resources within the system."]}),"\n",(0,r.jsxs)(o.h3,{id:"18-servicetopology-controller",children:["1.8 ",(0,r.jsx)(o.code,{children:"servicetopology"})," controller"]}),"\n",(0,r.jsxs)(o.p,{children:["The servicetopology controller is used to assist ",(0,r.jsx)(o.a,{href:"/docs/v1.3/user-manuals/resource-access-control/",children:"servicetopology filter"})," in YurtHub to provide service topology routing capabilities for the cluster.\nWhen topology annotation of service is modified, the servicetopology controller updates the corresponding endpoints and EndpointSlices, triggering a service topology update on the node side."]}),"\n",(0,r.jsxs)(o.h3,{id:"19-yurtstaticset-controllerwebhook",children:["1.9 ",(0,r.jsx)(o.code,{children:"yurtstaticset"})," controller/webhook"]}),"\n",(0,r.jsx)(o.p,{children:"Owing to the vast number and distributed nature of edge devices, manually deploying and upgrading Static pods in cloud-edge collaboration scenarios can result in substantial operational challenges and increased risk of errors.\nTo address this issue, OpenYurt has introduced a new Custom Resource Definition (CRD) called YurtStaticSet to improve the management of Static pods. The yurtstaticset controller/webhook offers features such as AdvancedRollingUpdate and Over-The-Air (OTA) upgrade capabilities for static pods."}),"\n",(0,r.jsxs)(o.h3,{id:"110-yurtappset-controllerwebhook",children:["1.10 ",(0,r.jsx)(o.code,{children:"yurtappset"})," controller/webhook"]}),"\n",(0,r.jsx)(o.p,{children:"In native Kubernetes, managing the same type of applications across multiple nodepools requires creating a Deployment for each node pool, leading to higher management costs and potential risks of errors. To address this issue, the YurtAppSet CRD provides a way to define an application template (supporting both Deployment and StatefulSet) and is responsible for managing workloads across multiple nodepools."}),"\n",(0,r.jsxs)(o.p,{children:["YurtAppSet requires users to explicitly specify the node pools to which the workloads should be deployed by configuring its ",(0,r.jsx)(o.code,{children:"Spec.Topology"})," field. This approach simplifies the application deployment and management process, making it easier to scale, upgrade, and maintain applications in a multiple nodepools environment. By using YurtAppSet, users can centrally manage application deployments across multiple nodepools, thereby reducing management complexity and potential risks of errors."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"img",src:n(79758).A+"",width:"1820",height:"1092"})}),"\n",(0,r.jsxs)(o.h3,{id:"111-yurtappdaemon-controllerwebhook",children:["1.11 ",(0,r.jsx)(o.code,{children:"yurtappdaemon"})," controller/webhook"]}),"\n",(0,r.jsx)(o.p,{children:"In native Kubernetes, DaemonSet is used to run a daemon Pod on each node. When a node is added or removed, the corresponding daemon Pod on that node is automatically created or removed. However, when workloads need to be adjusted automatically based on the creation and removal of nodepools, DaemonSet cannot meet our needs."}),"\n",(0,r.jsxs)(o.p,{children:["YurtAppDaemon aims to ensure that workloads specified in the template (Spec.WorkloadTemplate) are automatically deployed in all nodepools or those selected by ",(0,r.jsx)(o.code,{children:"Spec.NodePoolSelector"}),". When a nodepool is added or removed from the cluster, the YurtAppDaemon controller and Webhook create or remove workloads for the corresponding nodepool, ensuring that the required nodepools always contain the expected Pods."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"img",src:n(44056).A+"",width:"1982",height:"1070"})})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},44056:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/yurtappdaemon-7819ad1f8a8dcdfc87b56a716ea67084.png"},79758:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/yurtappset-dc5ea218aec38a2e74048fa61dcd4c59.png"},26382:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/nodepool1-e4c32ca3a66b7979e1583ca65dd7f7f2.png"},28805:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/nodepool2-cd32adbfbaa60331bc53189c30e8facc.png"},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>i});var t=n(96540);const r={},a=t.createContext(r);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);