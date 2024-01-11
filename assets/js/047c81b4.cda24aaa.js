"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6436],{90592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(85893),s=n(11151);const r={title:"coredns"},c=void 0,a={id:"faq/coredns",title:"coredns",description:"1. In the edge node pool, cross-node Pods can be accessed through PodIP, but cannot be accessed through service",source:"@site/versioned_docs/version-v1.3/faq/coredns.md",sourceDirName:"faq",slug:"/faq/coredns",permalink:"/docs/v1.3/faq/coredns",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/coredns.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe",lastUpdatedAt:1704942947,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{title:"coredns"},sidebar:"docs",previous:{title:"yurt-tunnel",permalink:"/docs/v1.3/faq/yurt-tunnel"},next:{title:"prometheus",permalink:"/docs/v1.3/faq/prometheus"}},i={},d=[];function h(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"** 1. In the edge node pool, cross-node Pods can be accessed through PodIP, but cannot be accessed through service**"}),"\n",(0,o.jsx)(t.p,{children:"First, it can be accessed through podIP, indicating that the cross-node container network (such as vxlan of flannel) is normal, and then the service cannot be accessed, which can be analyzed as follows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"In the net namespace of the pod, whether to directly access the service clusterIP is reachable"}),"\n",(0,o.jsxs)(t.li,{children:["If it is unreachable, it means that kube-proxy may have a problem with the configuration of the backend instance of the service. Generally, it is a problem with the service topology. You can refer to the problem for analysis ",(0,o.jsx)(t.a,{href:"/docs/v1.3/faq/yurthub",children:"On the edge node, the service topology capability does not take effect"})]}),"\n",(0,o.jsxs)(t.li,{children:["If it is reachable through service clusterIP, it means domain name resolution problem. then we can check the dns problem.","\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Enter the net and mount namespace of the pod, check the contents of the /etc/resolv.conf file, and see the address of the dns nameserver, which is usually the clusterIP of the kube-dns service"}),"\n",(0,o.jsxs)(t.li,{children:["Execute the command: ",(0,o.jsx)(t.code,{children:"dig @{dns nameserver} {service name}"}),", and check whether a resolution result can be returned or not."]}),"\n",(0,o.jsxs)(t.li,{children:["Execute the command: ",(0,o.jsx)(t.code,{children:"dig @{CoreDNS pod ip} {service name}"}),", and check whether a resolution result can be returned or not."]}),"\n",(0,o.jsxs)(t.li,{children:["If ",(0,o.jsx)(t.code,{children:"dns nameserver"})," can not work but ",(0,o.jsx)(t.code,{children:"CoreDNS pod ip"})," can work, this means that traffic of kube-dns service can not be forwarded to the accessible CoreDNS pod instances. maybe service topology routing selection of kubed-dns service does not take effect, you can refer to the Yurthub problem ",(0,o.jsx)(t.a,{href:"/docs/v1.3/faq/yurthub",children:"On the edge node, the Service topology capability does not take effect"})]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var o=n(67294);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);