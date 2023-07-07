"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9757],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),h=r,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},56049:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Introduction",slug:"/"},i=void 0,s={unversionedId:"introduction",id:"version-v1.3/introduction",title:"Introduction",description:"Welcome to the world of OpenYurt!",source:"@site/versioned_docs/version-v1.3/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/introduction.md",tags:[],version:"v1.3",lastUpdatedBy:"Haiyu Zuo",lastUpdatedAt:1688712468,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Resource and System Requirements",permalink:"/docs/usage-conditions/resource-and-system-requirements"}},d={},l=[{value:"Key Features",id:"key-features",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the world of OpenYurt!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OpenYurt is the first edge computing platform that is non-intrusive to cloud-native systems in the industry"),". It unifies the management of scattered massive edge heterogeneous resources (such as CDN sites, IoT all-in-one machines and other edge computing power) from the control side (located in the cloud or central server room, etc.).\nIt helps users to easily complete large-scale application delivery, operation and maintenance, and control on massive edge resources."),(0,r.kt)("p",null,"OpenYurt will continue to work on exploring cloud-native edge computing platform standards for cloud-edge-device collaboration, and will also combine community mainstream computing, networking, storage, application orchestration, security, AI, IoT and other projects or solutions to build a complete upstream and downstream ecology."),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Powerful edge autonomy capability")),(0,r.kt)("p",null,"In Kubernetes, normally if a node is disconnected from the apiserver, the running Pods cannot be recovered when the node hits failures. Moreover, pods on edge nodes will be evicted by native controllers of the Kube-Controller-Manager component when node heartbeat is not reported for more than 5m.\nThis brings a significant challenge for the cloud-edge orchestration since the cloud-edge networking can be unreliable.  As described in below Figure, OpenYurt introduces a per node proxy (YurtHub) and a local storage to cache cloud apiserver states, hence the cached states can be used by Kubelet, KubeProxy or user Pods if the node is disconnected.\nAnd with the help of the Pool-Coordinator component, Leader Yurthub in NodePool can be delegated to proxy node heartbeat for other edge nodes in this pool which are disconnected with cloud, so pods on edge nodes will not be evicted even if the network is disconnected."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edge-autonomy",src:o(49283).Z,width:"1080",height:"570"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Cross NodePool network communication capability")),(0,r.kt)("p",null,"In the edge computing Kubernetes cluster, the nodes themselves may belong to different regions, so based on native CNI network solution, pods in different nodepools can not communicate with each other through Pod IP, Service IP, or Node IP if each nodepool is within an isolated LAN.\nRaven is an elegant network solution for providing cross-nodepool network communication capability in an OpenYurt cluster. A node daemon is installed for every node, and only one daemon in each nodepool is picked as gateway that sets up the VPN tunnel between nodepools, the other daemons in the nodepool configure the cross-nodepool network routing rules to ensure the traffic will go through the gateway node.  Moreover, raven only hijacks cross nodepool traffic, and the traffic within nodepool still uses the native CNI network solution. Therefore, raven can work together with native CNI network solutions(such as flannel, calico, etc.) seamlessly. As described in below Figure, The cross-nodepool traffic is forwarded to gateway node and goes through VPN tunnel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cross nodepool network communication",src:o(276).Z,width:"1600",height:"995"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Multi-NodePool management")),(0,r.kt)("p",null,"For better cloud-edge orchestration, OpenYurt pioneers the idea of managing a Pool, which encapsulates the management of node resources, applications, and workload traffic. The edge computing resources are usually classified and divided into nodepools according to their geographical distributions. In order to manage applications and traffic in multiple nodepools conveniently, There are several features are developed for nodepool as following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A set of new workload models, such as YurtAppSet and YurtAppDaemon are introduced for managing workloads in multi-nodepool.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"YurtAppSet provides an alternative to manage pods in specified nodepools by using multiple workloads, and pod distribution across nodepools is determined by the replica number of each workload."),(0,r.kt)("li",{parentName:"ul"},"YurtAppDaemon is used for ensuring that all(or some) nodepools run a copy of a workload(Deployment or StatefulSet). As nodepools are added to the cluster, workloads are added to them automatically. As nodepools are removed from the cluster, those workloads are garbage collected."))),(0,r.kt)("li",{parentName:"ul"},"Service topology capability for routing traffic in nodepool. This feature can ensure any service that a Pod accesses is backed by endpoints within the same nodepool, which is quite useful when cross-nodepool networking is impractical or expensive.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Advanced workload upgrade model")),(0,r.kt)("p",null,"In cloud-edge architecture, it is easy to get stuck during DaemonSet upgrade process if the number of NotReady nodes exceeds the maxUnavailable of RollingUpdate because cloud-edge network connection is unreliable. In another scenario, because edge nodes may belong to different users (such as new energy vehicles), end users expect that pods on nodes are not automatically upgraded, but that users themselves decide whether to start the pods upgrade on nodes. To address the above challenges, OpenYurt enhances the DaemonSet upgrade model and adds OTA(On-The-Air) and Auto Upgrade models."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Auto Upgrade Model: It is used for solving the upgrade block by notReady nodes. During the upgrade process, the workload upgrade on ready nodes will be completed firstly, while the notReady nodes are skipped. If the node status recovers to ready, the workload upgrade on the node also will be completed automatically."),(0,r.kt)("li",{parentName:"ul"},"OTA Upgrade Model: This model is more flexible. As described in below Figure, users can query whether there is a new version of the pod through the REST API on the edge node. Then users can trigger pod upgrade through the REST API on edge nodes if a new version exists, which is quite useful when the decision of workload upgrade belongs to the owner of edge nodes instead of the owner of the cluster. For example: application upgrade on new energy vehicles.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ota-upgrade-model",src:o(32782).Z,width:"1600",height:"963"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Programmable resource access control")),(0,r.kt)("p",null,"As described in below Figure, the programmable data filtering framework is built into the YurtHub component, and the response data from cloud will go through a chain of filters and non-perception and on-demand transformation of the response data will be carried out, so as to meet the specific requirements in the cloud-edge collaboration scenario. Four filters are supported in the filters chain at present as follows, and new filters can be easily added into the framework."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Masterservice filter: it is used to mutate the ClusterIp and https port of master service(default/kubernetes) to address that Yurthub component is listening in order to make pods using InClusterConfig on edge nodes to access cloud kube-apiserver through Yurthub component without perception. "),(0,r.kt)("li",{parentName:"ul"},"Servicetoplogy filter: it is used to reassemble endpointslices according to the service topology setting of service in order to ensure the traffic accessing the service can only be forwarded to pods in the same nodepool. "),(0,r.kt)("li",{parentName:"ul"},"Discardcloudservice filter: it is used to discard LoadBalancer service for kube-proxy components on edge nodes because cloud service cannot be accessed through pod IP. "),(0,r.kt)("li",{parentName:"ul"},"Inclusterconfig filter: it is used to comment kubeconfig setting in kube-system/kube-proxy configmap in order to make kube-proxy components to use InClusterConfig to access cloud kube-apiserver on edge nodes.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"resource-access-control",src:o(44252).Z,width:"1216",height:"786"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Cloud-edge network bandwidth reduction")),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/test-report/yurthub-performance-test#traffic"},"performance test")," has shown that in a large-scale OpenYurt cluster, the cloud-edge traffic will increase rapidly if pods are deleted and recreated since the kube-proxy components on the edge nodes watch for all endpoints/endpointslices changes. Note that typically the same endpoints information will be transferred to edge nodes within a nodepool which can be less cost efficient considering that the cloud-edge networking traffic will use the public network.\nLeveraging the Pool-Coordinator mentioned above, OpenYurt proposes to introduce a notion of pool-scoped metadata which are unique within a nodepool such as the endpoints/endpointslices data. As described in below Figure, the leader Yurthub will read the pool-scoped data from the cloud kube-apiserver and update the load to pool-coordinator. As a result, all other YurtHubs will retrieve the pool-scoped data from the pool-coordinator, eliminating the use of public network bandwidth for retrieving such data from the cloud kube-apiserver."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bandwidth-reduction",src:o(2363).Z,width:"1300",height:"693"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7. Cloud-native edge device management")),(0,r.kt)("p",null,"OpenYurt defines a set of APIs for managing edge devices through cloud Kubernetes controlplane. The APIs abstract the device\u2019s basic properties, main capabilities and the data that should be transmitted between the cloud and the edge. OpenYurt provides integration with mainstream OSS IoT device management solutions, such as EdgeXFoundry using the APIs. As described in below Figure, An instance of yurt-device-controller component and EdgeXFoundry service are deployed in each nodepool. Yurt-device-controller component can get the changes of Device CRD from cloud kube-apiserver and convert the desired spec of Device CRD to requests of EdgeXFoundry, then transmit the requests to EdgeXFoundry service in real-time. On the other hand, yurt-device-controller can subscribe to the device status from EdgeXFoundry service, and update the status of Device CRD when status is changed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"edge-device",src:o(78452).Z,width:"992",height:"764"})),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"Here are some recommended next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start to install ",(0,r.kt)("a",{parentName:"li",href:"/docs/installation/summary"},"OpenYurt"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn OpenYurt's ",(0,r.kt)("a",{parentName:"li",href:"/docs/core-concepts/architecture"},"Architecture"),".")))}u.isMDXComponent=!0},2363:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/bandwidth-reduction-59e0edfa1e3c9b6163ef9ce78132716c.png"},44252:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/data-filtering-framework-2c82f506c04bb7fcafcb39f8fa9ce72b.png"},78452:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/device-07a24cd757e8977a0e516c31c3b0b119.png"},49283:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/edge-autonomy-d2b372693ececed22764743e1d216744.png"},32782:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ota-b212f0651d7a4ac825f4ffc1073f295c.png"},276:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/raven-95268f2d9a1a520ecf1135bc121a1f7f.png"}}]);