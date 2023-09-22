"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),h=s(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"heartbeat delegation for disconnected nodes"},i=void 0,d={unversionedId:"user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes",id:"version-v1.2/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes",title:"heartbeat delegation for disconnected nodes",description:"Background introduction",source:"@site/versioned_docs/version-v1.2/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes",permalink:"/docs/v1.2/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes.md",tags:[],version:"v1.2",lastUpdatedBy:"lu chen",lastUpdatedAt:1678177474,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{title:"heartbeat delegation for disconnected nodes"},sidebar:"version-v1.2/docs",previous:{title:"selfhealing from restarting during network disconnection",permalink:"/docs/v1.2/user-manuals/autonomy/selfhealing-during-network-disconnection"},next:{title:"pod node binding",permalink:"/docs/v1.2/user-manuals/autonomy/node-pod-binding"}},l={},s=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background-introduction"},"Background introduction"),(0,r.kt)("p",null,"In native Kubernetes, when the heartbeat of the edge node is not reported for a certain period of time, the cloud controller will expel the Pod on the node (delete it and rebuild it on the normal node). In the cloud edge collaboration scenario, edge side have different requirements. Some services expect that when the heartbeat cannot be reported due to the disconnection of the cloud edge network (the node itself is normal in this case), service Pods can be maintained (no ejections occur), and only when the node is faulty can the Pod be migrated and rebuilt."),(0,r.kt)("h2",{id:"architecture-design"},"Architecture design"),(0,r.kt)("p",null,"OpenYurt version 1.2 creates a centralized heartbeat proxy mechanism based on the Pool-Coordinator + YurtHub, as shown in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bandwidth-reduction",src:n(84375).Z,width:"1080",height:"570"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the cloud side network of a node is normal, Kubelet sends a heartbeat message to both the cloud center and Pool-Coordinator through the YurtHub component."),(0,r.kt)("li",{parentName:"ul"},"When the cloud side network of a node is disconnected, Kubelet fails to report the heartbeat to the cloud through the YurtHub component. In this case, the heartbeat reported to the Pool-Coordinator has a specific label."),(0,r.kt)("li",{parentName:"ul"},"Leader YurtHub realtime heartbeat data in list/watch pool-coordinator. If the obtained heartbeat data contains a specific label, yurthub forwards the heartbeat data to the cloud center.")),(0,r.kt)("p",null,"The heartbeat proxy mechanism implemented by Pool-Coordinator and YurtHub ensures that nodes' heartbeat can still be reported to the cloud center even when the cloud edge network is disconnected. In this way, service pods on nodes are not expelled. At the same time, the node whose heartbeat is reported by the agent will also be added with a special taints in real time to restrict the management and control from dispatching new Pods to this node."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"The heartbeat proxy function is supported by Pool-Coordinator. If you want to use this capability, note the following configurations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure that the OpenYurt version is greater than 1.2.0"),(0,r.kt)("li",{parentName:"ul"},"Ensure that each node Pool has a pool-Coordinator instance running"),(0,r.kt)("li",{parentName:"ul"},"YurtHub component startup parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"--enable-coordinator = true"))))}u.isMDXComponent=!0},84375:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/heartbeat-delegation-b86a4ea03a8f438fcd5dcb69798b5154.png"}}]);