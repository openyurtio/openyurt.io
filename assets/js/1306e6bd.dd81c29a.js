"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[63475],{38002:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(85893),d=o(11151);const i={title:"pod node binding"},a=void 0,s={id:"user-manuals/autonomy/node-pod-binding",title:"pod node binding",description:"Background introduction",source:"@site/versioned_docs/version-v1.2/user-manuals/autonomy/node-pod-binding.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/node-pod-binding",permalink:"/docs/v1.2/user-manuals/autonomy/node-pod-binding",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-pod-binding.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe",lastUpdatedAt:1710903068,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"pod node binding"},sidebar:"docs",previous:{title:"heartbeat delegation for disconnected nodes",permalink:"/docs/v1.2/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes"},next:{title:"Raven",permalink:"/docs/v1.2/user-manuals/network/raven"}},r={},l=[{value:"Background introduction",id:"background-introduction",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Note",id:"note",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,t.jsx)(n.p,{children:"Some edge services require that Pods not be evicted in the event of a node failure, but that a specific Pod be bound to a specific node. For example, the application of image processing needs to be bound to the machine corresponding to the camera, and the application of intelligent transportation needs to be fixed to the machine at a certain intersection."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(n.p,{children:"Users can enable/disable binding feature by following steps."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Add Binding Annotation to Node"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Users can add binding annotation to nodes to enable the Edge Binding feature, and all Pods on the node will be bound to that node and will not be affected by the cloud-edge network."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# enable Edge Binding on node1\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"There're following two ways to disable the Edge Binding of node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# remove the binding annotation\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy-\n# set the value of binding annotation as false\nkubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Add Binding Annotation to Pod"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Users can also by adding the Annotation to the Pod to enable binding (or modify the ",(0,t.jsx)(n.code,{children:"Deployment.Spec.Template.Annotations"})," field, all Pods will be affected), the Pod will be bound to the node, not affected by cloud edge network."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# pod1 enable Binding\nkubectl annotate pods pod1 apps.openyurt.io/binding=true\n"})}),"\n",(0,t.jsx)(n.p,{children:"There're following two ways to disable Binding."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# remove the binding annotation\nkubectl annotate pods pod1 apps.openyurt.io/binding-\n# set the value of binding annotation as false\nkubectl annotate --overwrite pods pod1 apps.openyurt.io/binding=false\n"})}),"\n",(0,t.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Edge Node After the node binding function is enabled,  pods on edge nodes will not be expelled, no matter the node NotReady caused by cloud edge network disconnection or node fault."}),"\n",(0,t.jsx)(n.li,{children:"Node binding is not recommended for cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady."}),"\n",(0,t.jsx)(n.li,{children:"After OpenYurt version 1.2.0, if a Pool-Coordinator is enabled, edge nodes can maintain the Ready state even when the cloud edge network is disconnected using the heartbeat proxy mechanism. In this case, the node binding capability ensures that NotReady service Pods will not be expelled even if the node fails."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{a:()=>a});var t=o(67294);const d={},i=t.createContext(d);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);