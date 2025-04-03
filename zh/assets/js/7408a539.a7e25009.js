"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[40184],{62362:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manuals/resource-access-control/resource-access-control","title":"\u53ef\u7f16\u7a0b\u7684\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236","description":"Background introduction","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/resource-access-control/resource-access-control.md","sourceDirName":"user-manuals/resource-access-control","slug":"/user-manuals/resource-access-control/","permalink":"/zh/docs/v1.2/user-manuals/resource-access-control/","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/resource-access-control/resource-access-control.md","tags":[],"version":"v1.2","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"\u53ef\u7f16\u7a0b\u7684\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"},"sidebar":"docs","previous":{"title":"\u8fb9\u7f18Ingress","permalink":"/zh/docs/v1.2/user-manuals/network/edge-ingress"},"next":{"title":"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8","permalink":"/zh/docs/v1.2/user-manuals/storage/edge-local-storage"}}');var n=r(74848),o=r(28453);const c={title:"\u53ef\u7f16\u7a0b\u7684\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"},i=void 0,d={},l=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}];function a(e){const s={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,n.jsx)(s.p,{children:"In the cloud-edge architecture, The response for edge components(like kube-proxy or user pods) requests from the cloud kube-apiserver can be performed with some customized processing, in order to better meet the specific needs of edge scenarios. For example, when kubelet gets the default/kubernetes service, kubelet expects the service includes the accessible kube-apiserver address instead of the native service ClusterIP address, so pods on edge nodes can use InClusterConfig to access cloud kube-apiserver seamlessly."}),"\n",(0,n.jsx)(s.h2,{id:"architecture-design",children:"Architecture design"}),"\n",(0,n.jsx)(s.p,{children:"The programmable data filtering framework is built into the YurtHub component, and the response data for specified requests from cloud kube-apiserver will go through a chain of filters and non-perception and on-demand transformation of the response data will be carried out, so as to meet the specific requirements in the cloud-edge collaboration scenario. As described in the below Figure."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"resource-access-control",src:r(31002).A+"",width:"1216",height:"786"})}),"\n",(0,n.jsx)(s.p,{children:"Four filters are supported in the filters chain at present as follows:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"masterservice filter: is used to mutate the ClusterIP and https port of master service(default/kubernetes service) to address that YurtHub component is listening in order to make pods using InClusterConfig on edge nodes to access cloud kube-apiserver through YurtHub component without perception."}),"\n",(0,n.jsx)(s.li,{children:"servicetopology filter: is used to reassemble endpointslices according to the service topology setting of service in order to ensure the traffic accessing the service can only be forwarded to pods in the same NodePool."}),"\n",(0,n.jsx)(s.li,{children:"discardcloudservice filter: is used to discard LoadBalancer service for kube-proxy components on edge nodes because cloud service cannot be accessed through pod IP."}),"\n",(0,n.jsx)(s.li,{children:"inclusterconfig filter: is used to comment kubeconfig setting in kube-system/kube-proxy configmap in order to make kube-proxy components to use InClusterConfig to access cloud kube-apiserver on edge nodes"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"And each filter can process only the response data of specific requests as following:\nthe Whether the response data is processed by above filters is determined by the request triples: component/resource/verbs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"component: represents the User-Agent in the http request header, like kube-proxy"}),"\n",(0,n.jsx)(s.li,{children:"resource: represents the requested resource, like endpointslices"}),"\n",(0,n.jsx)(s.li,{children:"verbs: represents the verb of http request, like get, list, watch"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"and resource and verbs"}),"\n",(0,n.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsx)(s.p,{children:"Each filter can process only the response data of specific requests that determined by component/resource/verbs."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"component: represents the User-Agent in the http request header, like kube-proxy"}),"\n",(0,n.jsx)(s.li,{children:"resource: represents the requested resource, like endpointslices"}),"\n",(0,n.jsx)(s.li,{children:"verbs: represents the verb of http request, like get, list, watch"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Each filter supports the following requests(components can be configured by user, but resource and verbs are fixed):"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Filter"}),(0,n.jsx)(s.th,{children:"Default components"}),(0,n.jsx)(s.th,{children:"resources"}),(0,n.jsx)(s.th,{children:"verbs"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"masterservice"}),(0,n.jsx)(s.td,{children:"kubelet"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"servicetopology"}),(0,n.jsx)(s.td,{children:"kube-proxy, coredns, nginx-ingress-controller"}),(0,n.jsx)(s.td,{children:"endpoints, endpointslices"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"discardcloudservice"}),(0,n.jsx)(s.td,{children:"kube-proxy"}),(0,n.jsx)(s.td,{children:"services"}),(0,n.jsx)(s.td,{children:"list, watch"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"inclusterconfig"}),(0,n.jsx)(s.td,{children:"kubelet"}),(0,n.jsx)(s.td,{children:"configmaps"}),(0,n.jsx)(s.td,{children:"get, list, watch"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Moreover, if the response for other clients also want to be handled by filters, user can configure the kube-system/yurt-hub-cfg configmap as following:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'// configured response for clients named foo and bar can be handled by servicetopology\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yurt-hub-cfg\ndata:\n  servicetopology: "foo, bar"\n'})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},31002:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/resource-access-control-2c82f506c04bb7fcafcb39f8fa9ce72b.png"},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>i});var t=r(96540);const n={},o=t.createContext(n);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);