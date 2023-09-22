"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8269],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(o),p=r,b=h["".concat(d,".").concat(p)]||h[p]||u[p]||a;return o?n.createElement(b,i(i({ref:t},c),{},{components:o})):n.createElement(b,i({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},95904:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"YurtCoordinator"},i=void 0,l={unversionedId:"core-concepts/yurt-coordinator",id:"core-concepts/yurt-coordinator",title:"YurtCoordinator",description:"1. Introduction",source:"@site/docs/core-concepts/yurt-coordinator.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-coordinator",permalink:"/docs/next/core-concepts/yurt-coordinator",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-coordinator.md",tags:[],version:"current",lastUpdatedBy:"Yifei Zhang",lastUpdatedAt:1686138390,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{title:"YurtCoordinator"},sidebar:"docs",previous:{title:"YurtIoTDock",permalink:"/docs/next/core-concepts/yurt-iot-dock"},next:{title:"selfhealing from restarting during network disconnection",permalink:"/docs/next/user-manuals/autonomy/selfhealing-during-network-disconnection"}},d={},s=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Concepts",id:"2-concepts",level:2},{value:"2.1 YurtHub Leader Election",id:"21-yurthub-leader-election",level:3},{value:"3. Designs",id:"3-designs",level:2},{value:"3.1 Edge Node Heartbeat Proxy",id:"31-edge-node-heartbeat-proxy",level:3},{value:"3.2 Node Pool Resource Caching and Reuse",id:"32-node-pool-resource-caching-and-reuse",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,r.kt)("p",null,"Yurt-Coordinator provides the following features for edge node pools:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edge node heartbeat proxy")),(0,r.kt)("p",null,"In cloud-edge computing scenarios, disconnection between edge nodes and the cloud is the common case. When the cloud does not receive heartbeat from the edge node for a long time, there could be two reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the cloud-edge network is disconnected but the edge node is still running normally"),(0,r.kt)("li",{parentName:"ul"},"or the edge node has failed and cannot recover")),(0,r.kt)("p",null,"In the former case, pods on the edge node are still running normally, and pod eviction should not be performed for the stability. In the latter case, to ensure service availability, pods should be evicted to other healthy edge nodes to continue to provide services. In the original heartbeat framework, it's difficult for the cloud distinguish between them since they look the same. Yurt-Coordinator provides a heartbeat proxy solution, where nodes with healthy cloud-edge network in the node pool are responsible for forwarding disconnected nodes' heartbeat to the cloud with additional information, allowing the cloud to distinguish between these two situations and adopt corresponding strategies."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Pool-scope resource caching and reuse")),(0,r.kt)("p",null,'In cloud-edge computing scenarios, the network between the cloud and edge is limited and costly. There is a large amount of duplicated resources that edge nodes in the same node pool obtain from the cloud (such as Endpoints and EndpointSlices),and they are what we called "pool-scope resources". Yurt-Coordinator provides pool-scope resource caching and reuse capabilities in node pool. For these duplicated resources, one node pool only needs to pull them once from the cloud, and other edge nodes in this node pool can directly obtain them from the cache, reducing the consumption of cloud-edge bandwidth.'),(0,r.kt)("p",null,"Yurt-Coordinator is essentially a Pod composed of Kube-APIServer and etcd, fully utilizing cloud-native components to enhance the functionality of node pools."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"yurt-coordinator-framework",src:o(24435).Z,width:"1270",height:"617"})),(0,r.kt)("h2",{id:"2-concepts"},"2. Concepts"),(0,r.kt)("h3",{id:"21-yurthub-leader-election"},"2.1 YurtHub Leader Election"),(0,r.kt)("p",null,"When Yurt-Coordinator is enabled, all YurtHubs in the node pool will perform Leader election through Yurt-Coordinator. The elected Leader YurtHub is responsible for proxying the heartbeat of disconnected nodes. There are three roles for YurtHubs in the cluster:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Leader YurtHub: YurtHubs that successfully win the Leader election need to maintain connections with both the cloud APIServer and Yurt-Coordinator."),(0,r.kt)("li",{parentName:"ol"},"Follower YurtHub: YurtHubs that fail to win the Leader election. These YurtHubs will continuously attempt to acquire the leadership."),(0,r.kt)("li",{parentName:"ol"},"Pending YurtHub: YurtHubs that have not or can not participate in the election. YurtHubs will be in this state initially, or when the Yurt-Coordinator in the node pool is unhealthy, all YurtHubs in the node pool will enter this state.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"yurthub-state",src:o(89088).Z,width:"2032",height:"1144"})),(0,r.kt)("h2",{id:"3-designs"},"3. Designs"),(0,r.kt)("h3",{id:"31-edge-node-heartbeat-proxy"},"3.1 Edge Node Heartbeat Proxy"),(0,r.kt)("p",null,"In the edge node pool, YurtHubs will send heartbeat(NodeLease) to both the cloud APIServer and Yurt-Coordinator while monitoring the cloud-edge network status. When YurtHub detects the disconnection between cloud and edge, it will add an annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"openyurt.io/delegate-heartbeat: true")," to the heartbeat sent to Yurt-Coordinator, indicating that the node cannot independently send heartbeats to the cloud. At the same time, the Leader Yurthub will list/watch NodeLease resources in Yurt-Coordinator, and when it finds a heartbeat with this annotation, it will forward it along with the annotation to the cloud APIServer. The cloud can then distinguish the status of the edge node based on the heartbeat and its annotation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Node heartbeat is normal and without annotation: The node is running, and the cloud-edge connection is healthy."),(0,r.kt)("li",{parentName:"ol"},"Node heartbeat is normal but with annotation: The node is running, but the cloud-edge connection is unhealthy."),(0,r.kt)("li",{parentName:"ol"},"Node heartbeat is missing: The node is faulty.")),(0,r.kt)("h3",{id:"32-node-pool-resource-caching-and-reuse"},"3.2 Node Pool Resource Caching and Reuse"),(0,r.kt)("p",null,"The elected Leader YurtHub in the node pool is responsible for listing/watching pool-scope resources, mainly Endpoints and EndpointSlices, from the cloud. The Leader YurtHub will continuously update these resources and their subsequent changes to the etcd of Yurt-Coordinator. All YurtHubs in the node pool can obtain these resources through Kubernetes native RESTful API from the APIServer of Yurt-Coordinator, avoiding direct pulling from the cloud, thus achieving the goal of resource reuse."),(0,r.kt)("p",null,"Yurt-Coordinator has two kinds of status:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Healthy:")),(0,r.kt)("p",null,"Yurt-Coordinator is successfully deployed and running, and nodes can update their heartbeat to it. However, at this point, Yurt-Coordinator has not fully cached the pool-scope resources, so it cannot handle requests for these resources."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Ready:")),(0,r.kt)("p",null,"Yurt-Coordinator has successfully cached the pool-scope resources, and it can now handle requests for these resources within the node pool."),(0,r.kt)("p",null,"After synchronizing pool-scope resources with the cloud, the Leader YurtHub will create and continuously update a lease called ",(0,r.kt)("inlineCode",{parentName:"p"},"leader-informer-sync")," in Yurt-Coordinator. Other YurtHubs will monitor this lease, and when they find that the lease exists and has not expired, the requests of pool-scope resources will be sent to Yurt-Coordinator instead of the cloud APIServer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cache-and-reuse",src:o(82317).Z,width:"1857",height:"507"})))}u.isMDXComponent=!0},82317:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/yurt-coordinator-cache-and-reuse-74c3711ff6706be32fd167372d64f711.jpg"},24435:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/yurt-coordinator-framework-b5e5ab2603a5ba015c854d65bbef8cce.jpg"},89088:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/yurthub-state-b9d0b9252f003d0edbad5c3c753ac16c.png"}}]);