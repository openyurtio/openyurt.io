"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8812],{58296:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=r(85893),t=r(11151);const i={title:"Raven"},d=void 0,c={id:"core-concepts/raven",title:"Raven",description:"1. \u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/core-concepts/raven.md",sourceDirName:"core-concepts",slug:"/core-concepts/raven",permalink:"/zh/docs/v1.2/core-concepts/raven",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/raven.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1723324113e3,frontMatter:{title:"Raven"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/v1.2/core-concepts/architecture"},next:{title:"YurtHub",permalink:"/zh/docs/v1.2/core-concepts/yurthub"}},l={},h=[{value:"1. \u80cc\u666f\u4ecb\u7ecd",id:"1-\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"2. \u6574\u4f53\u67b6\u6784",id:"2-\u6574\u4f53\u67b6\u6784",level:2},{value:"3. \u7279\u6027\u53ca\u4f18\u52bf",id:"3-\u7279\u6027\u53ca\u4f18\u52bf",level:2},{value:"4. \u7248\u672c\u8bb0\u5f55",id:"4-\u7248\u672c\u8bb0\u5f55",level:2},{value:"5. \u672a\u6765\u8ba1\u5212",id:"5-\u672a\u6765\u8ba1\u5212",level:2}];function a(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-\u80cc\u666f\u4ecb\u7ecd",children:"1. \u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8fb9\u7f18\u8ba1\u7b97\u4e2d\uff0c\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u901a\u4fe1\u662f\u5e38\u89c1\u7684\u7f51\u7edc\u901a\u4fe1\u573a\u666f\uff0c\u5728OpenYurt\u4e2d\uff0c\u6211\u4eec\u5f00\u53d1\u4e86Raven\u9879\u76ee\u63d0\u4f9b\u8fb9-\u8fb9\u3001\u8fb9-\u4e91\u5bb9\u5668\u7f51\u7edc\u4e0e\u4e3b\u673a\u7f51\u7edc\u901a\u4fe1\u7684\u89e3\u51b3\u65b9\u6848\u3002\n\u5728OpenYurt\u96c6\u7fa4\u4e2d\uff0c\u4f4d\u4e8e\u4e0d\u540c\u7269\u7406\u533a\u57df\u7684Pod\u53ef\u80fd\u9700\u8981\u4f7f\u7528Pod IP\u3001Service IP \u6216Service name\u4e0e\u5176\u4ed6Pod\u901a\u4fe1\uff0c\u867d\u7136\u8fd9\u4e9bPod\u4f4d\u4e8e\u5355\u4e2aK8s\u96c6\u7fa4\u4e2d\uff0c\u4f46\u5b83\u4eec\u5904\u4e8e\u4e0d\u540c\u7269\u7406\u533a\u57df\uff08\u7f51\u7edc\u57df\uff09\u4e2d\uff0c\u65e0\u6cd5\u76f4\u63a5\u901a\u4fe1\u3002\u56e0\u6b64\uff0cRaven\u9879\u76ee\u88ab\u5f00\u53d1\u6765\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"2-\u6574\u4f53\u67b6\u6784",children:"2. \u6574\u4f53\u67b6\u6784"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u76ee\u524dRaven\u7684\u67b6\u6784\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u4e24\u4e2a\u7ec4\u4ef6\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(40751).Z+"",width:"924",height:"566"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Raven Controller Manager"}),"\uff1a\u6807\u51c6\u7684Kubernetes\u63a7\u5236\u5668\uff0c\u4ee5Deployment\u7684\u65b9\u5f0f\u90e8\u7f72\u5728\u90e8\u5206\u4e91\u4e0a\u8282\u70b9\u4e2d\uff0c\u8d1f\u8d23\u76d1\u63a7\u8fb9\u7f18\u8282\u70b9\u72b6\u6001\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u8fb9\u7f18\u8282\u70b9\u6c60\u9009\u53d6\u4e00\u4e2a\u8de8\u8fb9\u6d41\u91cf\u7684\u51fa\u53e3\u4f5c\u4e3agateway node\uff0c\u5e76\u80fd\u591f\u5728\u5f53\u524dgateway node\u5931\u6d3b\u7684\u60c5\u51b5\u4e0b\u5b8c\u6210gateway node\u7684\u5207\u6362\uff0c\u6240\u6709\u7684\u8de8\u8fb9\u6d41\u91cf\u90fd\u5c06\u7531\u5404\u4e2a\u8fb9\u7f18\u8282\u70b9\u6c60\u7684gateway node\u5b8c\u6210\u8f6c\u53d1\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Raven Agent"}),"\uff1a\u4ee5DaemonSet\u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u8fd0\u884c\u5728\u96c6\u7fa4\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\uff0c\u5b83\u6839\u636e\u6bcf\u4e2a\u8282\u70b9\u7684\u89d2\u8272\uff08gateway or non-gateway\uff09\u5728\u8282\u70b9\u4e0a\u914d\u7f6e\u8def\u7531\u4fe1\u606f\u6216VPN\u96a7\u9053\u4fe1\u606f\uff1b"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4e24\u4e2a\u7ec4\u4ef6\u901a\u8fc7\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway CRD"})," \u6765\u4ea4\u6362\u914d\u7f6e\u8def\u7531\u548c\u5efa\u7acbVPN\u96a7\u9053\u7684\u5fc5\u8981\u4fe1\u606f\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(48882).Z+"",width:"1444",height:"756"})}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u591a\u5b9e\u73b0\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003Raven\u9879\u76ee\u7684\u4ee3\u7801\u4ed3\u5e93\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager",children:"raven-controller-manager"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven",children:"raven"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-\u7279\u6027\u53ca\u4f18\u52bf",children:"3. \u7279\u6027\u53ca\u4f18\u52bf"}),"\n",(0,s.jsx)(n.p,{children:"\u7279\u6027\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u65e0\u4fb5\u5165\uff1a\u5bf9\u539f\u751f\u7684K8s CNI\u7f51\u7edc\u65e0\u4fb5\u5165\uff0c\u4ec5\u52ab\u6301\u8de8\u8fb9\u6d41\u91cf\u8fdb\u884c\u8f6c\u53d1"}),"\n",(0,s.jsx)(n.li,{children:"\u5b89\u5168\uff1a\u4f7f\u7528\u6210\u719f\u7a33\u5b9a\u7684IPsec\u6280\u672f\u5bf9\u8de8\u8fb9\u6d41\u91cf\u8fdb\u884c\u52a0\u5bc6"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f18\u52bf\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Raven\u5728\u8de8\u8fb9\u6d41\u91cf\u7684\u5904\u7406\u4e0a\u4f1a\u5c3d\u91cf\u5229\u7528\u8fb9\u7f18\u672c\u8eab\u7684\u7f51\u7edc\u80fd\u529b\uff0c\u5c3d\u53ef\u80fd\u5730\u521b\u5efa\u8fb9-\u8fb9\u7684VPN\u96a7\u9053\uff0c\u4e0d\u4f1a\u628a\u6240\u6709\u7684\u8de8\u8fb9\u6d41\u91cf\u90fd\u901a\u8fc7\u4e91\u4e0a\u4e2d\u5fc3\u7aef\u8f6c\u53d1"}),"\n",(0,s.jsx)(n.li,{children:"Raven\u5bf9\u5728\u540c\u4e00\u8fb9\u7f18\u8282\u70b9\u6c60\u7684\u6d41\u91cf\u4e0d\u8fdb\u884c\u52ab\u6301\uff0c\u590d\u7528\u96c6\u7fa4\u672c\u8eab\u7684CNI\u80fd\u529b"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-\u7248\u672c\u8bb0\u5f55",children:"4. \u7248\u672c\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.p,{children:"Raven Controller Manager\u7248\u672c\uff1a"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7248\u672c\u53f7"}),(0,s.jsx)(n.th,{children:"\u955c\u50cf\u5730\u5740"}),(0,s.jsx)(n.th,{children:"\u53d1\u5e03\u65f6\u95f4"}),(0,s.jsx)(n.th,{children:"\u53d1\u5e03\u5185\u5bb9"}),(0,s.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.1.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".1.0"]}),(0,s.jsx)(n.td,{children:"2022.05"}),(0,s.jsx)(n.td,{children:"\u9996\u6b21\u53d1\u5e03"}),(0,s.jsx)(n.td,{children:"\u652f\u6301  Gateway Node \u9009\u4e3e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.2.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".2.0"]}),(0,s.jsx)(n.td,{children:"2022.12"}),(0,s.jsx)(n.td,{children:"\u589e\u52a0\u7279\u6027"}),(0,s.jsxs)(n.td,{children:["\u652f\u6301\u591a  Pod CIDRs",(0,s.jsx)("br",{})," \u652f\u6301Calico"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.3.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".3.0"]}),(0,s.jsx)(n.td,{children:"2023.01"}),(0,s.jsx)(n.td,{children:"\u589e\u52a0\u7279\u6027"}),(0,s.jsx)(n.td,{children:"\u652f\u6301\u8282\u70b9 IP \u8f6c\u53d1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Raven Agent\u7248\u672c\uff1a"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7248\u672c\u53f7"}),(0,s.jsx)(n.th,{children:"\u955c\u50cf\u5730\u5740"}),(0,s.jsx)(n.th,{children:"\u53d1\u5e03\u65f6\u95f4"}),(0,s.jsx)(n.th,{children:"\u53d1\u5e03\u5185\u5bb9"}),(0,s.jsx)(n.th,{children:"\u5907\u6ce8"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.1.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".1.0"]}),(0,s.jsx)(n.td,{children:"2022.05"}),(0,s.jsx)(n.td,{children:"\u9996\u6b21\u53d1\u5e03"}),(0,s.jsx)(n.td,{children:"\u652f\u6301 IPSec \u4f5c\u4e3aVPN \u540e\u7aef"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.2.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".2.0"]}),(0,s.jsx)(n.td,{children:"2022.12"}),(0,s.jsx)(n.td,{children:"\u589e\u52a0\u7279\u6027"}),(0,s.jsxs)(n.td,{children:["\u652f\u6301WireGuard\u4f5c\u4e3aVPN\u540e\u7aef",(0,s.jsx)("br",{})," \u652f\u6301Calico"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.3.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".3.0"]}),(0,s.jsx)(n.td,{children:"2023.01"}),(0,s.jsx)(n.td,{children:"\u589e\u52a0\u7279\u6027"}),(0,s.jsx)(n.td,{children:"\u652f\u6301\u8282\u70b9 IP \u8f6c\u53d1"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"5-\u672a\u6765\u8ba1\u5212",children:"5. \u672a\u6765\u8ba1\u5212"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301IPVS\u540e\u7aef\u7684\u6d41\u91cf\u8f6c\u53d1 \u3010",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/16",children:"issue #16"}),"\u3011"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4e91\u7aef\u652f\u6301LB\u7684\u516c\u7f51\u66b4\u9732\u65b9\u5f0f \u3010",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/22",children:"issue #22"}),"\u3011"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301NAT\u7a7f\u8d8a \u3010",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/13",children:"issue #13"}),"\u3011"]}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301\u5206\u5e03\u5f0f\u8def\u7531\u51b3\u7b56 \u3010",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/14",children:"issue #14"}),"\u3011","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8def\u7531\u8def\u5f84\u7684cost\u8ba1\u7b97"}),"\n",(0,s.jsx)(n.li,{children:"\u6839\u636ecost\u8ba1\u7b97\u6700\u77ed\u8def\u5f84"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u8def\u5f84\u66f4\u6539\u671f\u95f4\u4fdd\u6301\u7f51\u7edc\u8fde\u63a5\u5904\u4e8eactive\u72b6\u6001"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6b22\u8fce\u611f\u5174\u8da3\u7684\u540c\u5b66\u52a0\u5165\u6211\u4eec\uff0c\u8d21\u732e\u4ee3\u7801\uff01\uff01\uff01"})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},48882:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/raven-sequence-diag-21e979ba2e0c41f82407121704b13eb7.png"},40751:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/raven-017b384aa3ec05a762c21c4370c73174.png"},11151:(e,n,r)=>{r.d(n,{a:()=>d});var s=r(67294);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);