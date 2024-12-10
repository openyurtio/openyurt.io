"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[26557],{95666:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manuals/autonomy/node-autonomy","title":"Node Autonomy","description":"1. Background","source":"@site/versioned_docs/version-v1.0/user-manuals/autonomy/node-autonomy.md","sourceDirName":"user-manuals/autonomy","slug":"/user-manuals/autonomy/node-autonomy","permalink":"/docs/v1.0/user-manuals/autonomy/node-autonomy","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-autonomy.md","tags":[],"version":"v1.0","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"Node Autonomy"},"sidebar":"docs","previous":{"title":"YurtDeviceController","permalink":"/docs/v1.0/core-concepts/yurt-device-controller"},"next":{"title":"Raven","permalink":"/docs/v1.0/user-manuals/network/raven"}}');var a=o(74848),s=o(28453);const d={title:"Node Autonomy"},r=void 0,u={},l=[{value:"1. Background",id:"1-background",level:2},{value:"2. How to Use",id:"2-how-to-use",level:2},{value:"3. Note",id:"3-note",level:2}];function i(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,a.jsx)(n.p,{children:"The capability of Node Autonomy ensures that pods can run stably on edge nodes even when the network between cloud and edge jitters."}),"\n",(0,a.jsx)(n.p,{children:"With Node Autonomy of OpenYurt, when cloud-edge network breaks, pods running on edge nodes can still run as they are instead of being rescheduled, and in addition they can successfully recover when the edge node restart."}),"\n",(0,a.jsx)(n.h2,{id:"2-how-to-use",children:"2. How to Use"}),"\n",(0,a.jsx)(n.p,{children:"Users can enable/disable Node Autonomy feature by following steps."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Add Autonomy Annotation Manually"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Users can add autonomy annotation to nodes to enable the Node Autonomy feature."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# enable Node Autonomy on node1\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true\n"})}),"\n",(0,a.jsx)(n.p,{children:"There're following two ways to disable the Node Autonomy of node."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# remove the autonomy annotation\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy-\n\n# set the value of autonomy annotation as false\nkubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"Enable/Disable Node Autonomy with Yurtctl"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After compiling the Yurtctl, users can use it to enable/disable the Node Autonomy feature."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# enable autonomy on node1, node2\nyurtctl markautonomous -a node1,node2\n\n# enable autonomy on all edge nodes\nyurtctl markautonomous\n"})}),"\n",(0,a.jsx)(n.h2,{id:"3-note",children:"3. Note"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If enable the Node Autonomy feature, pods running on the node will never be evicted, no matter the NotReady is caused by disconnection between cloud and edge or by the breakdown of node itself."}),"\n",(0,a.jsx)(n.li,{children:"It is not recommended to enable the Node Autonomy feature on cloud nodes. If enabled, pods cannot be evicted and rescheduled when the cloud node is NotReady."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>r});var t=o(96540);const a={},s=t.createContext(a);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);