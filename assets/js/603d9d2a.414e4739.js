"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[2384],{53552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(85893),r=t(11151);const a={title:"YurtControllerManager"},c=void 0,i={id:"core-concepts/yurt-controller-manager",title:"YurtControllerManager",description:"1.Introduction",source:"@site/versioned_docs/version-v1.1/core-concepts/yurt-controller-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-controller-manager",permalink:"/docs/v1.1/core-concepts/yurt-controller-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-controller-manager.md",tags:[],version:"v1.1",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1703110234,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"YurtControllerManager"},sidebar:"docs",previous:{title:"YurtAppManager",permalink:"/docs/v1.1/core-concepts/yurt-app-manager"},next:{title:"NodeResourceManager",permalink:"/docs/v1.1/core-concepts/node-resource-manager"}},l={},s=[{value:"1.Introduction",id:"1introduction",level:2},{value:"1.1 Taking Over Node Life Cycle Management",id:"11-taking-over-node-life-cycle-management",level:3},{value:"1.2 Certificates Approval for OpenYurt Components",id:"12-certificates-approval-for-openyurt-components",level:3}];function d(e){const n={h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"1introduction",children:"1.Introduction"}),"\n",(0,o.jsx)(n.p,{children:"As an extension of Kube Controller Manager, Yurt Controller Manager is used to keep other components functioning properly and provide node autonomy feature."}),"\n",(0,o.jsx)(n.h3,{id:"11-taking-over-node-life-cycle-management",children:"1.1 Taking Over Node Life Cycle Management"}),"\n",(0,o.jsx)(n.p,{children:"In vanilla Kubernetes, pods on node in NotReady or Unknown state will be evicted and rescheduled."}),"\n",(0,o.jsx)(n.p,{children:"In edge computing, the network connection between cloud and edge is unstable, the edge nodes could lose connection to the cloud frequently,\nwhich makes pod eviction and rescheduling happen frequently on edge nodes. To deal with that, OpenYurt provides node autonomy feature.\nFor node with node autonomy feature enabled, control plane on the cloud will not evict pods on the node, which ensure the workloads will not be disrupted."}),"\n",(0,o.jsx)(n.p,{children:'Yurt controller manager takes over the work of nodelicycle controller in Kube-controller-manager, constantly monitors the state of nodes in the cluster.\nFor node in NotReady or Unknown state, if the node autonomy feature is enabled, the pods are prevented from being evicted by removing the "node.kubernetes.io/unscheduled" taint on the node.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Notice: When installing Yurt Controller Manager, the nodelicycle controller in kube-controller-manager need to be disabled"})}),"\n",(0,o.jsx)(n.h3,{id:"12-certificates-approval-for-openyurt-components",children:"1.2 Certificates Approval for OpenYurt Components"}),"\n",(0,o.jsx)(n.p,{children:"The OpenYurt components Yurttunnel Server and Yurthub are the server side to Yurttunnel Agent and pods respectively.\nDue to the strict approval policy for CSR(Certificate Signing Request) in Kubernetes,\nthe CSRs created by Yurttunnel Server and Yurthub will not auto-approve by kube-controller-manager.\nTherefore, Yurt Controller Manager undertakes the work of approving the CSRs of Yurttunnel Server and Yurthub."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var o=t(67294);const r={},a=o.createContext(r);function c(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);