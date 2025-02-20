"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[33308],{29067:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-manuals/network/nodeport-isolation","title":"nodeport-isolation","description":"Background introduction","source":"@site/versioned_docs/version-v1.4/user-manuals/network/nodeport-isolation.md","sourceDirName":"user-manuals/network","slug":"/user-manuals/network/nodeport-isolation","permalink":"/docs/user-manuals/network/nodeport-isolation","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/nodeport-isolation.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1740095325000,"frontMatter":{"title":"nodeport-isolation"},"sidebar":"docs","previous":{"title":"Service Topology","permalink":"/docs/user-manuals/network/service-topology"},"next":{"title":"programmable resource access control","permalink":"/docs/user-manuals/resource-access-control/"}}');var t=n(74848),s=n(28453);const r={title:"nodeport-isolation"},l=void 0,d={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}];function a(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,t.jsxs)(o.p,{children:["This feature originated from a community requirement, which can be found in the detailed discussion on issue ",(0,t.jsx)(o.a,{href:"https://github.com/openyurtio/openyurt/issues/1183",children:"#1183"}),"."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"In edge network scenarios, service isolation is required. For example, when using a NodePort type service, it should only serve specific node pools."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"architecture-design",children:"Architecture design"}),"\n",(0,t.jsxs)(o.p,{children:["A new filter named ",(0,t.jsx)(o.code,{children:"nodeportisolation"})," has been introduced to handle this feature, and a new annotation ",(0,t.jsx)(o.code,{children:"nodeport.openyurt.io/listen"})," has been added for NodePort services to trigger the nodeportisolation filter in YurtHub.\nThe nodeportisolation filter reassembles responses for kube-proxy list/watch service requests according to the ",(0,t.jsx)(o.code,{children:"nodeport.openyurt.io/listen"})," annotation settings in the service."]}),"\n",(0,t.jsxs)(o.p,{children:["For more information on the detailed design of the data filtering framework, please refer to ",(0,t.jsx)(o.a,{href:"/docs/user-manuals/resource-access-control/",children:"resource-access-control"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsxs)(o.p,{children:["The introduction of the ",(0,t.jsx)(o.code,{children:"nodeport.openyurt.io/listen"})," annotation for NodePort/LoadBalancer services is as follows:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Key: nodeport.openyurt.io/listen"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Value: A list of node pool names separated by ','"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"foo"}),": Enable the specified NodePort service to listen on nodes in the NodePool named foo."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"-foo"}),": Disable the specified NodePort service from listening on nodes in the NodePool named foo."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"*"}),": Enable the specified NodePort service to listen on nodes in all NodePools."]}),"\n",(0,t.jsx)(o.li,{children:"If a NodePool name is duplicated in the configuration, the first configuration will be used."}),"\n",(0,t.jsx)(o.li,{children:"If a NodePool name is not configured, NodePort listening will be disabled on nodes in these unconfigured NodePools."}),"\n",(0,t.jsx)(o.li,{children:"Orphan nodes (not located in a NodePool) will be treated the same as in native Kubernetes, so NodePort will be listened on orphan nodes."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Annotation setting examples:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"  - `nodeport.openyurt.io/listen=foo, bar`: Enable NodePort service listening on nodes in `foo` and `bar` NodePools.\n  - `nodeport.openyurt.io/listen=foo, *`: Enable NodePort service listening on nodes in all NodePools.\n  - `nodeport.openyurt.io/listen=-foo, -bar`: Disable NodePort service listening on nodes in all NodePools.\n  - `nodeport.openyurt.io/listen=-foo, *`: Disable NodePort service listening only on nodes in `foo` NodePool.\n  - `nodeport.openyurt.io/listen=foo,-foo`: Enable NodePort service listening on nodes in `foo` NodePool.\n  - `nodeport.openyurt.io/listen=-foo`: Disable NodePort service listening on nodes in all NodePools (including `foo` NodePool).\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>l});var i=n(96540);const t={},s=i.createContext(t);function r(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);