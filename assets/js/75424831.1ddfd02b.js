"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[64273],{17743:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"user-manuals/autonomy/node-autonomy","title":"Node Autonomy","description":"1. Background","source":"@site/versioned_docs/version-v0.5.0/user-manuals/autonomy/node-autonomy.md","sourceDirName":"user-manuals/autonomy","slug":"/user-manuals/autonomy/node-autonomy","permalink":"/docs/v0.5.0/user-manuals/autonomy/node-autonomy","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-autonomy.md","tags":[],"version":"v0.5.0","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"Node Autonomy"},"sidebar":"docs","previous":{"title":"EdgeX Foundry","permalink":"/docs/v0.5.0/core-concepts/edge-device/edgex-foundry"},"next":{"title":"Edge Pod Network","permalink":"/docs/v0.5.0/user-manuals/network/edge-pod-network"}}');var d=o(74848),s=o(28453);const a={title:"Node Autonomy"},r=void 0,l={},u=[{value:"1. Background",id:"1-background",level:2},{value:"2. How to Use",id:"2-how-to-use",level:2},{value:"3. Note",id:"3-note",level:2}];function i(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,d.jsx)(n.p,{children:"The capability of Node Autonomy ensures that pods can run stably on edge nodes even when the network between cloud and edge jitters."}),"\n",(0,d.jsx)(n.p,{children:"With Node Autonomy of OpenYurt, when cloud-edge network breaks, pods running on edge nodes can still run as they are instead of being rescheduled, and in addition they can successfully recover when the edge node restart."}),"\n",(0,d.jsx)(n.h2,{id:"2-how-to-use",children:"2. How to Use"}),"\n",(0,d.jsx)(n.p,{children:"Users can enable/disable Node Autonomy feature by following steps."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Add Autonomy Annotation Manually"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Users can add autonomy annotation to nodes to enable the Node Autonomy feature."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# enable Node Autonomy on node1\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true\n"})}),"\n",(0,d.jsx)(n.p,{children:"There're following two ways to disable the Node Autonomy of node."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# remove the autonomy annotation\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy-\n\n# set the value of autonomy annotation as false\nkubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Enable/Disable Node Autonomy with Yurtctl"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"After compiling the Yurtctl, users can use it to enable/disable the Node Autonomy feature."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# enable autonomy on node1, node2\nyurtctl markautonomous -a node1,node2\n\n# enable autonomy on all edge nodes\nyurtctl markautonomous\n"})}),"\n",(0,d.jsx)(n.h2,{id:"3-note",children:"3. Note"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"If enable the Node Autonomy feature, pods running on the node will never be evicted, no matter the NotReady is caused by disconnection between cloud and edge or by the breakdown of node itself."}),"\n",(0,d.jsx)(n.li,{children:"It is not recommended to enable the Node Autonomy feature on cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady."}),"\n",(0,d.jsxs)(n.li,{children:["When using ",(0,d.jsx)(n.code,{children:"yurtctl convert"})," to convert the cluster to OpenYurt cluster, all edge nodes will enable Node Autonomy by default."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(96540);const d={},s=t.createContext(d);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);