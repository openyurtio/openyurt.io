"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[20300],{68536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes","title":"heartbeat delegation for disconnected nodes","description":"Background introduction","source":"@site/versioned_docs/version-v1.4/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes.md","sourceDirName":"user-manuals/autonomy","slug":"/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes","permalink":"/docs/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes.md","tags":[],"version":"v1.4","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1738794531000,"frontMatter":{"title":"heartbeat delegation for disconnected nodes"},"sidebar":"docs","previous":{"title":"selfhealing from restarting during network disconnection","permalink":"/docs/user-manuals/autonomy/selfhealing-during-network-disconnection"},"next":{"title":"pod node binding","permalink":"/docs/user-manuals/autonomy/node-pod-binding"}}');var r=n(74848),a=n(28453);const i={title:"heartbeat delegation for disconnected nodes"},d=void 0,s={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}];function l(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,r.jsx)(t.p,{children:"In native Kubernetes, when the heartbeat of the edge node is not reported for a certain period of time, the cloud controller will expel the Pod on the node (delete it and rebuild it on the normal node). In the cloud edge collaboration scenario, edge side have different requirements. Some services expect that when the heartbeat cannot be reported due to the disconnection of the cloud edge network (the node itself is normal in this case), service Pods can be maintained (no ejections occur), and only when the node is faulty can the Pod be migrated and rebuilt."}),"\n",(0,r.jsx)(t.h2,{id:"architecture-design",children:"Architecture design"}),"\n",(0,r.jsx)(t.p,{children:"OpenYurt version 1.2 creates a centralized heartbeat proxy mechanism based on the Yurt-Coordinator + YurtHub, as shown in the following figure:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"heartbeat-delegation",src:n(16281).A+"",width:"1634",height:"896"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"When the cloud side network of a node is normal, Kubelet sends a heartbeat message to both the cloud center and Yurt-Coordinator through the YurtHub component."}),"\n",(0,r.jsx)(t.li,{children:"When the cloud side network of a node is disconnected, Kubelet fails to report the heartbeat to the cloud through the YurtHub component. In this case, the heartbeat reported to the Yurt-Coordinator has a specific label."}),"\n",(0,r.jsx)(t.li,{children:"Leader YurtHub realtime heartbeat data in list/watch Yurt-Coordinator. If the obtained heartbeat data contains a specific label, yurthub forwards the heartbeat data to the cloud center."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The heartbeat proxy mechanism implemented by Yurt-Coordinator and YurtHub ensures that nodes' heartbeat can still be reported to the cloud center even when the cloud edge network is disconnected. In this way, service pods on nodes are not expelled. At the same time, the node whose heartbeat is reported by the agent will also be added with a special taints in real time to restrict the management and control from dispatching new Pods to this node."}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsx)(t.p,{children:"The heartbeat proxy function is supported by Yurt-Coordinator. If you want to use this capability, note the following configurations:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ensure that the OpenYurt version is greater than 1.2.0"}),"\n",(0,r.jsx)(t.li,{children:"Ensure that each node Pool has a Yurt-Coordinator instance running"}),"\n",(0,r.jsxs)(t.li,{children:["YurtHub component startup parameter ",(0,r.jsx)(t.code,{children:"--enable-coordinator = true"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},16281:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/heartbeat-delegation-8be9a56d712301cfbe3f2d271661d54a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var o=n(96540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);