"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1030],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},40987:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"YurtAppManager"},i=void 0,p={unversionedId:"core-concepts/yurt-app-manager",id:"version-v1.2/core-concepts/yurt-app-manager",title:"YurtAppManager",description:"Yurt-App-Manager is a functional component that provides united edge management capabilities for an OpenYurt cluster, in order to comprehensively improve the efficiency of application deployment and reduce the complexity of operation and maintenance in edge scenario.",source:"@site/versioned_docs/version-v1.2/core-concepts/yurt-app-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-app-manager",permalink:"/docs/core-concepts/yurt-app-manager",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-app-manager.md",tags:[],version:"v1.2",lastUpdatedBy:"jie zhang",lastUpdatedAt:1678182477,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{title:"YurtAppManager"},sidebar:"version-v1.2/docs",previous:{title:"YurtTunnel",permalink:"/docs/core-concepts/yurttunnel"},next:{title:"YurtControllerManager",permalink:"/docs/core-concepts/yurt-controller-manager"}},l={},s=[{value:"Components Introduction",id:"components-introduction",level:2},{value:"NodePool overview",id:"nodepool-overview",level:2},{value:"YurtAppSet (previous UnitedDeployment)",id:"yurtappset-previous-uniteddeployment",level:2},{value:"YurtAppDaemon",id:"yurtappdaemon",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Yurt-App-Manager is a functional component that provides united edge management capabilities for an OpenYurt cluster, in order to comprehensively improve the efficiency of application deployment and reduce the complexity of operation and maintenance in edge scenario."),(0,r.kt)("h2",{id:"components-introduction"},"Components Introduction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Considering the edge computing scenario, the edge nodes can usually be grouped by their locations, or other logical characteristics, such as their CPU architecture, telecom carriers or cloud providers. The nodes among different groups could also be isolated from each other by various obvious reasons, such as network unreachablility, resource heterogeneity, resource unsharability, and application independence. This is the origin of the edge Node Pool.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Same applications and images may need to be deployed into different Node Pools.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The endpoints of native Kubernetes service may spread over any node in the cluster. Hence, high probability endure of unreachable access or low efficiency may occur when the service flow accesses across nodes from different groups."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(51043).Z,width:"972",height:"541"})),(0,r.kt)("p",null,"In order to solve the issues above, OpenYurt proposes the solution from three layers,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node unified management by Node Pool. Nodes can be managed unitedly according to their regions or other logical characteristics."),(0,r.kt)("li",{parentName:"ul"},"Application unified management by YurtAppSet(previous UnitedDeployment). The workloads would be deployed into different node pools. The replicas, versions, etc. can be configured at node pool level."),(0,r.kt)("li",{parentName:"ul"},"Traffic unified management by refined Service Topology. The access to endpoints can be limited by simple configuration, for example, the endpoints can only be accessed from the nodes within the same node pool, or the same node.")),(0,r.kt)("p",null,"Yurt-App-Manager is a standard extension of Kubernetes, and provides NodePool controller and YurtAppSet (previous UnitedDeployment) controller, for providing edge node and edge application OPS capabilities, respectively."),(0,r.kt)("h2",{id:"nodepool-overview"},"NodePool overview"),(0,r.kt)("p",null,"Yurt-App-Manager provides a Node Pool controller, which abstracts out the concept of node pool according to specific node attributes, such as region, CPU architecture, cloud provider, etc., so that nodes can be managed unitedly at a pool level."),(0,r.kt)("p",null,"We are used to grouping and managing the nodes by different Kubernetes Labels, but with the increase of nodes and labels' quantity, the operation and maintenance of nodes (such as batch configuration about scheduling policies, taints, etc.) will become more and more complex, as shown in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(8395).Z,width:"987",height:"449"})),(0,r.kt)("p",null,"Nodepool makes an abstraction of node by group of nodes, so that we can manage the nodes in different edge regions from the perspective of node pool,  as shown in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(2655).Z,width:"1410",height:"447"})),(0,r.kt)("h2",{id:"yurtappset-previous-uniteddeployment"},"YurtAppSet (previous UnitedDeployment)"),(0,r.kt)("p",null,"With the increasing geographical distribution and the differentiated requirements of applications, the operation and maintenance of edge system has become increasingly complex, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You need to modify each deployment one by one when upgrading the image.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You need to define the naming rule for deployment to indicate the same application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Except for the names, nodeselectors and replicas, other configuration differences for multiple deployments of the same application are relatively small."))),(0,r.kt)("p",null,"YurtAppSet (previous UnitedDeployment) capibility is provided by the Yurt-App-Manager by default. Through Kubernetes CRD resource, it uniformly manages deployments with create/update/delete operations."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(10985).Z,width:"1003",height:"704"})),(0,r.kt)("p",null,"YurtAppSet (previous UnitedDeployment) controller provides a template to define applications and manages multiple workloads to match multiple regions. The workload in YurtAppSet is deployed for a pool. Currently, two kinds of workload are supported, they are ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),". The controller will create child workloads according to the pool configurations in YurtAppSet. Each resource has a desired number of ",(0,r.kt)("inlineCode",{parentName:"p"},"replicas")," of PODs. By only one YurtAppSet instance, you can automatically maintain multiple Deployment or StatefulSet, and meanwhile keep differentiated configurations for different pools, such as replicas."),(0,r.kt)("p",null,"For more intuitive operational experience, please refer to Yurt-App-Manager ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/workload/node-pool-management"},"tutorial"),"."),(0,r.kt)("p",null,"More discussions about Yurt-App-Manager please refer to the issues and pull requests in OpenYurt community,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"issue124\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/124"},"YurtAppSet usages"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"issue171\uff1a[ ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/171"},"feature request","]"," the definition of NodePool and YurtAppSet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"pull request 173\uff1a [",(0,r.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/pull/173"},"proposal","]"," add nodepool and YurtAppSet crd proposal")))),(0,r.kt)("h2",{id:"yurtappdaemon"},"YurtAppDaemon"),(0,r.kt)("p",null,"In edge scenarios, edge nodes from the same region will be assigned to the same NodePool, at which point some system components, such as CoreDNS, will typically need to be deployed in NodePool dimension. When creating the NodePool, we want to create these system components automatically, without any manual operations."),(0,r.kt)("p",null,"YurtAppDaemon ensures that all or some of the NodePools run replicas with a Deployment or StatefulSet template. As NodePools are created, these sub-Deployments or sub-StatefulSets are added to the cluster and the creation/updating of them are controlled by the YurtAppDaemon controller."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:o(36396).Z,width:"753",height:"437"})),(0,r.kt)("p",null,"For more intuitive operational experience, please refer to YurtAppDaemon ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-manuals/workload/yurt-app-daemon"},"tutorial"),"."))}u.isMDXComponent=!0},51043:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cloud-edge-overview-de9528a7be9a66d7ac91c351d86c10ce.png"},8395:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/nodepool1-e4c32ca3a66b7979e1583ca65dd7f7f2.png"},2655:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/nodepool2-cd32adbfbaa60331bc53189c30e8facc.png"},10985:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/nodepool3-c36803a1c31bf6bee66e305379fe63b3.png"},36396:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/yurt-app-daemon-ec05ea5b0e3c171efe473d18162bf1a1.png"}}]);