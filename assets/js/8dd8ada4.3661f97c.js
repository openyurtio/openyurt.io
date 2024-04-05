"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[23766],{61424:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(85893),r=o(11151);const s={slug:"How-to-use-service-topology",title:"Use service topology to realize topology-aware traffic routing",authors:["windydayc"],tags:["openyurt"]},i=void 0,l={permalink:"/blog/How-to-use-service-topology",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2021-11-24-How-to-use-service-topology.md",source:"@site/blog/2021-11-24-How-to-use-service-topology.md",title:"Use service topology to realize topology-aware traffic routing",description:"Service Topology enables a service to route traffic based on the Node topology of the cluster. For example, a service can specify that traffic be preferentially routed to endpoints that are on the same Node as the client, or in the same available NodePool.",date:"2021-11-24T00:00:00.000Z",tags:[{label:"openyurt",permalink:"/blog/tags/openyurt"}],readingTime:5.41,hasTruncateMarker:!0,authors:[{name:"Feng Zeng",title:"Zhejiang University student, Member of OpenYurt",url:"https://github.com/windydayc",imageURL:"https://github.com/windydayc.png",key:"windydayc"}],frontMatter:{slug:"How-to-use-service-topology",title:"Use service topology to realize topology-aware traffic routing",authors:["windydayc"],tags:["openyurt"]},unlisted:!1,prevItem:{title:"Seamless conversion between Kubernetes and OpenYurt",permalink:"/blog/How-to-use-yurtctl-convert-revert"},nextItem:{title:"How Openyurt runs the business pod in edge scenarios",permalink:"/blog/How-run-business-pod-in-edge-scenarios"}},a={authorsImageUrls:[void 0]},c=[];function d(e){const t={a:"a",code:"code",em:"em",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Service Topology"})," enables a service to route traffic based on the Node topology of the cluster. For example, a service can specify that traffic be preferentially routed to endpoints that are on the same Node as the client, or in the same available NodePool."]}),"\n",(0,n.jsxs)(t.p,{children:["The following picture shows the general function of the ",(0,n.jsx)(t.em,{children:"service topology"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"service-topology",src:o(30030).Z+"",width:"1167",height:"529"})}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.em,{children:"service topology"}),", the ",(0,n.jsx)(t.code,{children:"EndpointSliceProxying"})," ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/",children:"feature gate"})," must be enabled, and kube-proxy needs to be configured to connect to Yurthub instead of the API server."]}),"\n",(0,n.jsxs)(t.p,{children:["You can set the ",(0,n.jsx)(t.code,{children:"topologyKeys"})," values of a service to direct traffic as follows. If ",(0,n.jsx)(t.code,{children:"topologyKeys"})," is not specified or empty, no topology constraints will be applied."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"annotation Key"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"annotation Value"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.strong,{children:"explain"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"openyurt.io/topologyKeys"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"kubernetes.io/hostname"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Only to endpoints on the same node."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"openyurt.io/topologyKeys"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["kubernetes.io/zone",(0,n.jsx)("br",{})," or ",(0,n.jsx)("br",{}),"openyurt.io/nodepool"]}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Only to endpoints on the same nodepool."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},30030:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/service-topology-example-60b16f131cb1d5e4fbdd797a79200a83.png"},11151:(e,t,o)=>{o.d(t,{a:()=>i});var n=o(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);