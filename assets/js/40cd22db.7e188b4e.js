"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5352],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>h});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var o=n.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=s(e.components);return n.createElement(d.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||a;return t?n.createElement(m,i(i({ref:o},c),{},{components:t})):n.createElement(m,i({ref:o},c))}));function h(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var d in o)hasOwnProperty.call(o,d)&&(l[d]=o[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4915:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const a={title:"Yurt-Manager"},i=void 0,l={unversionedId:"core-concepts/yurt-manager",id:"version-v1.3/core-concepts/yurt-manager",title:"Yurt-Manager",description:"1.Introduction",source:"@site/versioned_docs/version-v1.3/core-concepts/yurt-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-manager",permalink:"/docs/core-concepts/yurt-manager",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-manager.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1687699928,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"Yurt-Manager"},sidebar:"docs",previous:{title:"YurtHub",permalink:"/docs/core-concepts/yurthub"},next:{title:"NodeResourceManager",permalink:"/docs/core-concepts/node-resource-manager"}},d={},s=[{value:"1.Introduction",id:"1introduction",level:2},{value:"1.1 <code>csrapprover</code> controller",id:"11-csrapprover-controller",level:3},{value:"1.2 <code>daemonpodupdater</code> controller",id:"12-daemonpodupdater-controller",level:3},{value:"1.3 <code>delegatelease</code> controller",id:"13-delegatelease-controller",level:3},{value:"1.4  <code>podbinding</code> controller",id:"14--podbinding-controller",level:3},{value:"1.5 <code>ravenl3</code> controller",id:"15-ravenl3-controller",level:3},{value:"1.6 <code>nodepool</code> controller/webhook",id:"16-nodepool-controllerwebhook",level:3},{value:"1.7 <code>poolcoordinatorcert</code> controller",id:"17-poolcoordinatorcert-controller",level:3},{value:"1.8 <code>servicetopology</code> controller",id:"18-servicetopology-controller",level:3},{value:"1.9 <code>yurtstaticset</code> controller/webhook",id:"19-yurtstaticset-controllerwebhook",level:3},{value:"1.10 <code>yurtappset</code> controller/webhook",id:"110-yurtappset-controllerwebhook",level:3},{value:"1.11 <code>yurtappdaemon</code> controller/webhook",id:"111-yurtappdaemon-controllerwebhook",level:3}],c={toc:s};function p(e){let{components:o,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1introduction"},"1.Introduction"),(0,r.kt)("p",null,"The Yurt-Manager component consists of several controllers and webhooks, which are used to provide abilities to ensure that Kubernetes can work as it would in a normal data center\nin a cloud-edge collaboration scenario. such as easily managing multi-regions workloads and providing AdvancedRollingUpdate and OTA upgrade capabilities for edge workloads(DaemonSet and static pods)."),(0,r.kt)("p",null,"The Yurt-Manager component is recommended to co-located with Kubernetes control plane components such as Kube-Controller-Manager. and Yurt-Manager is deployed as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),", usually consists of\ntwo instances, one leader and one backup."),(0,r.kt)("p",null,"Each controller and webhook is described as follows."),(0,r.kt)("h3",{id:"11-csrapprover-controller"},"1.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"csrapprover")," controller"),(0,r.kt)("p",null,"Due to the stringent approval policy for CSR(Certificate Signing Request) in Kubernetes,\nthe CSRs generated by OpenYurt components, such as YurtHub, are not automatically approved by theKube-Controller-Manager.\nAs a result, A controller named ",(0,r.kt)("inlineCode",{parentName:"p"},"csrapprover")," within Yurt-Manager is responsible for approving the CSRs of OpenYurt components."),(0,r.kt)("h3",{id:"12-daemonpodupdater-controller"},"1.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"daemonpodupdater")," controller"),(0,r.kt)("p",null,"The traditional RollingUpdate strategy for DaemonSet can become easily obstructed when NotReady nodes are present in a Cloud-Edge collaboration scenario. To address this issue, the ",(0,r.kt)("inlineCode",{parentName:"p"},"daemonpodupdater")," controller employs two upgrade models: AdvancedRollingUpdate and OTA (Over-the-Air) upgrade.\nThe AdvancedRollingUpdate strategy initially upgrades pods on Ready nodes while skipping NotReady nodes. When a node transitions from NotReady to Ready, the daemon pod on that node is automatically upgraded.\nThe OTA strategy is utilized in scenarios where the decision to upgrade a workload falls under the purview of the edge node owner, rather than the cluster owner. This approach is particularly relevant in cases such as electric vehicles, where the edge node owner has greater control over the upgrade process."),(0,r.kt)("h3",{id:"13-delegatelease-controller"},"1.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"delegatelease")," controller"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatelease")," controller is designed to work in conjunction with pool-coordinator component. When a node becomes disconnected from the cloud, the lease reported through\npool-coordinator component will have the ",(0,r.kt)("inlineCode",{parentName:"p"},"openyurt.io/delegate-heartbeat=true")," annotation. Upon detecting a lease with this annotation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatelease")," controller will apply the\n",(0,r.kt)("inlineCode",{parentName:"p"},"openyurt.io/unschedulable")," taint to the node, ensuing that newly created pods cannot be scheduled on such nodes."),(0,r.kt)("h3",{id:"14--podbinding-controller"},"1.4  ",(0,r.kt)("inlineCode",{parentName:"h3"},"podbinding")," controller"),(0,r.kt)("p",null,"Certain edge services require that Pods not be evicted in the event of node failure; instead, they demand a specific Pod to be bound to a particular node.\nFor instance, image processing applications need to be bound to the machine connected to a camera, while intelligent transportation applications must be fixed to a machine located at a specific intersection.\nUsers can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.openyurt.io/binding=true")," annotation to nodes to enable the Pods Binding feature, ensuring that all Pods on that node are bound to it and remain unaffected by the cloud-edge network."),(0,r.kt)("p",null,"The podbinding controller oversees the management of pod tolerations when the ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.openyurt.io/binding")," annotation of a node is modified. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.openyurt.io/binding")," node annotation is set to true,\nthe TolerationSeconds for ",(0,r.kt)("inlineCode",{parentName:"p"},"node.kubernetes.io/not-ready")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node.kubernetes.io/unreachable")," tolerations in pods will be set to 0, preventing the eviction of pods even when the cloud-edge network is offline.\nConversely, if the annotation is not set to true, the TolerationSeconds for ",(0,r.kt)("inlineCode",{parentName:"p"},"node.kubernetes.io/not-ready")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"node.kubernetes.io/unreachable")," tolerations in pods will be set to 300 seconds."),(0,r.kt)("h3",{id:"15-ravenl3-controller"},"1.5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"ravenl3")," controller"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ravenl3")," controller serves as the controller for the Gateway Custom Resource Definition (CRD). This controller is intended to be used in conjunction with the Raven Agent component,\nwhich facilitates Level3 network connectivity among pods located in different physical or network regions."),(0,r.kt)("h3",{id:"16-nodepool-controllerwebhook"},"1.6 ",(0,r.kt)("inlineCode",{parentName:"h3"},"nodepool")," controller/webhook"),(0,r.kt)("p",null,"NodePool abstracts the concept of a node pool based on specific node attributes, such as region, CPU architecture, cloud provider, and more, allowing for unified management of nodes at the pool level."),(0,r.kt)("p",null,"We are accustomed to grouping and managing nodes using various Kubernetes Labels. However, as the number of nodes and labels increases, the operation and maintenance of nodes (e.g., batch configuration of scheduling policies, taints, etc.) become increasingly complex, as illustrated in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(8395).Z,width:"987",height:"449"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nodepool controller/webhook can")," manage nodes across different edge regions from the perspective of a node pool, as depicted in the subsequent figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(2655).Z,width:"1410",height:"447"})),(0,r.kt)("h3",{id:"17-poolcoordinatorcert-controller"},"1.7 ",(0,r.kt)("inlineCode",{parentName:"h3"},"poolcoordinatorcert")," controller"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"poolcoordinatorcert")," controller is responsible for preparing certificates and kubeconfig file for the pool-coordinator component. All certificates and kubeconfig files are stored as Secret resources within the system."),(0,r.kt)("h3",{id:"18-servicetopology-controller"},"1.8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"servicetopology")," controller"),(0,r.kt)("p",null,"The servicetopology controller is used to assist ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/resource-access-control/"},"servicetopology filter")," in YurtHub to provide service topology routing capabilities for the cluster.\nWhen topology annotation of service is modified, the servicetopology controller updates the corresponding endpoints and EndpointSlices, triggering a service topology update on the node side."),(0,r.kt)("h3",{id:"19-yurtstaticset-controllerwebhook"},"1.9 ",(0,r.kt)("inlineCode",{parentName:"h3"},"yurtstaticset")," controller/webhook"),(0,r.kt)("p",null,"Owing to the vast number and distributed nature of edge devices, manually deploying and upgrading Static pods in cloud-edge collaboration scenarios can result in substantial operational challenges and increased risk of errors.\nTo address this issue, OpenYurt has introduced a new Custom Resource Definition (CRD) called YurtStaticSet to improve the management of Static pods. The yurtstaticset controller/webhook offers features such as AdvancedRollingUpdate and Over-The-Air (OTA) upgrade capabilities for static pods."),(0,r.kt)("h3",{id:"110-yurtappset-controllerwebhook"},"1.10 ",(0,r.kt)("inlineCode",{parentName:"h3"},"yurtappset")," controller/webhook"),(0,r.kt)("p",null,"In native Kubernetes, managing the same type of applications across multiple nodepools requires creating a Deployment for each node pool, leading to higher management costs and potential risks of errors. To address this issue, the YurtAppSet CRD provides a way to define an application template (supporting both Deployment and StatefulSet) and is responsible for managing workloads across multiple nodepools."),(0,r.kt)("p",null,"YurtAppSet requires users to explicitly specify the node pools to which the workloads should be deployed by configuring its ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec.Topology")," field. This approach simplifies the application deployment and management process, making it easier to scale, upgrade, and maintain applications in a multiple nodepools environment. By using YurtAppSet, users can centrally manage application deployments across multiple nodepools, thereby reducing management complexity and potential risks of errors."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(39250).Z,width:"1820",height:"1092"})),(0,r.kt)("h3",{id:"111-yurtappdaemon-controllerwebhook"},"1.11 ",(0,r.kt)("inlineCode",{parentName:"h3"},"yurtappdaemon")," controller/webhook"),(0,r.kt)("p",null,"In native Kubernetes, DaemonSet is used to run a daemon Pod on each node. When a node is added or removed, the corresponding daemon Pod on that node is automatically created or removed. However, when workloads need to be adjusted automatically based on the creation and removal of nodepools, DaemonSet cannot meet our needs."),(0,r.kt)("p",null,"YurtAppDaemon aims to ensure that workloads specified in the template (Spec.WorkloadTemplate) are automatically deployed in all nodepools or those selected by ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec.NodePoolSelector"),". When a nodepool is added or removed from the cluster, the YurtAppDaemon controller and Webhook create or remove workloads for the corresponding nodepool, ensuring that the required nodepools always contain the expected Pods."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(7052).Z,width:"1982",height:"1070"})))}p.isMDXComponent=!0},7052:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/yurtappdaemon-7819ad1f8a8dcdfc87b56a716ea67084.png"},39250:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/yurtappset-dc5ea218aec38a2e74048fa61dcd4c59.png"},8395:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/nodepool1-e4c32ca3a66b7979e1583ca65dd7f7f2.png"},2655:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/nodepool2-cd32adbfbaa60331bc53189c30e8facc.png"}}]);