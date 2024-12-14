"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[48463],{36252:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"user-manuals/resource-access-control/resource-access-control","title":"programmable resource access control","description":"Background introduction","source":"@site/docs/user-manuals/resource-access-control/resource-access-control.md","sourceDirName":"user-manuals/resource-access-control","slug":"/user-manuals/resource-access-control/","permalink":"/docs/next/user-manuals/resource-access-control/","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/resource-access-control/resource-access-control.md","tags":[],"version":"current","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1734214326000,"frontMatter":{"title":"programmable resource access control"}}');var n=t(74848),o=t(28453);const c={title:"programmable resource access control"},i=void 0,d={},l=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}];function a(e){const s={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,n.jsxs)(s.p,{children:["In the cloud-edge collaboration scenarios, The response for edge components(such as kube-proxy or user pods) from the cloud kube-apiserver can be performed with customized processing to meet the specific needs of edge scenarios. For Instance, when kubelet retrieves the ",(0,n.jsx)(s.code,{children:"default/kubernetes"})," service, it expects the service to include the accessible kube-apiserver address rather than the native service ClusterIP address. This allows pods on edge nodes to seamlessly use InClusterConfig to access cloud kube-apiserver."]}),"\n",(0,n.jsx)(s.h2,{id:"architecture-design",children:"Architecture design"}),"\n",(0,n.jsx)(s.p,{children:"The programmable data filtering framework is built into the YurtHub component. Response data for specified requests from cloud kube-apiserver passes through a chain of filters, enabling non-perception and on-demand transformation of the response data to meet the specific requirements in the cloud-edge collaboration scenarios. As show in the figure below."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"resource-access-control",src:t(31002).A+"",width:"1216",height:"786"})}),"\n",(0,n.jsx)(s.p,{children:"Currently, the filters chain supports five filters as follows:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["masterservice filter: Mutates the ClusterIP and HTTPS port of the ",(0,n.jsx)(s.code,{children:"default/kubernetes"})," service to the address that the YurtHub component is listening to, enabling pods using InClusterConfig on edge nodes to access the cloud kube-apiserver through the YurtHub component without perception."]}),"\n",(0,n.jsx)(s.li,{children:"servicetopology filter: Reassembles endpointslices according to the service topology setting of the service, ensuring that traffic accessing the service can only be forwarded to pods in the same node or NodePool."}),"\n",(0,n.jsx)(s.li,{children:"discardcloudservice filter: Filter out the LB service in the service obtained by kube-proxy, as the edge currently does not support LB service."}),"\n",(0,n.jsx)(s.li,{children:"inclusterconfig filter: Comments on kubeconfig settings in the kube-system/kube-proxy configmap to enable kube-proxy components to use InClusterConfig to access the cloud kube-apiserver on edge nodes."}),"\n",(0,n.jsxs)(s.li,{children:["nodeportisolation filter: By filtering NodePort services based on the ",(0,n.jsx)(s.code,{children:"nodeport.openyurt.io/listen"})," annotation configuration of the Service, NodePort services can be listened to exclusively within specified NodePools, instead of on all nodes across the entire cluster."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Each filter processes only the response data of specific requests determined by the request triples: component/resource/verbs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"component: represents the User-Agent in the HTTP request header, such as kube-proxy."}),"\n",(0,n.jsx)(s.li,{children:"resource: represents the requested resource, such as endpointslices."}),"\n",(0,n.jsx)(s.li,{children:"verbs: represents the verb of the HTTP request, such as get, list, watch."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsx)(s.p,{children:"Each filter processes only the response data of specific requests determined by component/resource/verbs, as mentioned above.\nThe following table shows the default components, resources, and verbs supported by each filter:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Filter"}),(0,n.jsx)(s.th,{children:"Default components"}),(0,n.jsx)(s.th,{children:"resources"}),(0,n.jsx)(s.th,{children:"verbs"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"masterservice"}),(0,n.jsx)(s.td,{children:"kubelet"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"servicetopology"}),(0,n.jsx)(s.td,{children:"kube-proxy, coredns, nginx-ingress-controller"}),(0,n.jsx)(s.td,{children:"endpoints, endpointslices"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"discardcloudservice"}),(0,n.jsx)(s.td,{children:"kube-proxy"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"inclusterconfig"}),(0,n.jsx)(s.td,{children:"kubelet"}),(0,n.jsx)(s.td,{children:"configmaps"}),(0,n.jsx)(s.td,{children:"get, list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nodeportisolation"}),(0,n.jsx)(s.td,{children:"kube-proxy"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Additionally, if the response for other clients also needs to be handled by filters, users can configure the kube-system/yurt-hub-cfg configmap as follows:"}),"\n",(0,n.jsx)(s.p,{children:"Note: Please ensure that configure the configmap before running client pod."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'// configured response for clients named foo and bar can be handled by servicetopology\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yurt-hub-cfg\ndata:\n  servicetopology: "foo, bar"\n'})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},31002:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/resource-access-control-2c82f506c04bb7fcafcb39f8fa9ce72b.png"},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var r=t(96540);const n={},o=r.createContext(n);function c(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);