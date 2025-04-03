"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[84474],{58295:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manuals/node-pool-management/node-pool-management-overview","title":"Node pool management overview","description":"Background","source":"@site/docs/user-manuals/node-pool-management/node-pool-management-overview.md","sourceDirName":"user-manuals/node-pool-management","slug":"/user-manuals/node-pool-management/node-pool-management-overview","permalink":"/docs/next/user-manuals/node-pool-management/node-pool-management-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/node-pool-management/node-pool-management-overview.md","tags":[],"version":"current","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"Node pool management overview"},"sidebar":"docs","previous":{"title":"NodeResourceManager","permalink":"/docs/next/core-concepts/node-resource-manager"},"next":{"title":"Create a node pool","permalink":"/docs/next/user-manuals/node-pool-management/create-a-node-pool"}}');var a=o(74848),r=o(28453);const s={title:"Node pool management overview"},i=void 0,d={},l=[{value:"Background",id:"background",level:2}];function u(e){const n={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,a.jsx)(n.p,{children:"A NodePool in OpenYurt is a logical grouping of nodes within a Kubernetes cluster that share similar configuration and characteristics. In OpenYurt, NodePools are used to manage and organize edge nodes that run on devices with similar hardware capabilities or network configurations. This feature provides a mechanism to define the nodes that should participate in a particular workload or function in an edge environment."}),"\n",(0,a.jsxs)(n.p,{children:["Since v1beta2, OpenYurt Nodepools supports electing hub leaders within the Nodepool. When enabled, a leader within the Nodepool will redistribute list/watch events to other hubs in the same nodepool. This reduces the number of requests going towards the Kubernetes API server and allows an increase in number of edge nodes deployed per cluster. Please refer to ",(0,a.jsx)(n.a,{href:"/docs/next/user-manuals/node-pool-management/create-a-node-pool",children:"create a node pool"})," for further details."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var t=o(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);