"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[70090],{86523:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manuals/autonomy/node-pod-binding","title":"\u4e1a\u52a1\u4e0e\u8282\u70b9\u7ed1\u5b9a","description":"\u4f7f\u7528\u573a\u666f","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/autonomy/node-pod-binding.md","sourceDirName":"user-manuals/autonomy","slug":"/user-manuals/autonomy/node-pod-binding","permalink":"/zh/docs/v1.2/user-manuals/autonomy/node-pod-binding","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-pod-binding.md","tags":[],"version":"v1.2","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1743848435000,"frontMatter":{"title":"\u4e1a\u52a1\u4e0e\u8282\u70b9\u7ed1\u5b9a"},"sidebar":"docs","previous":{"title":"\u65ad\u7f51\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406","permalink":"/zh/docs/v1.2/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes"},"next":{"title":"Raven","permalink":"/zh/docs/v1.2/user-manuals/network/raven"}}');var s=o(74848),a=o(28453);const d={title:"\u4e1a\u52a1\u4e0e\u8282\u70b9\u7ed1\u5b9a"},i=void 0,r={},l=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function c(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e9b\u8fb9\u7f18\u4e1a\u52a1\u8981\u6c42\u5728\u8282\u70b9\u6545\u969c\u65f6\u4e5f\u4e0d\u8981\u5bf9Pod\u8fdb\u884c\u9a71\u9010\uff0c\u5b83\u4eec\u9700\u8981\u5c06\u7279\u5b9a\u7684Pod\u7ed1\u5b9a\u5230\u7279\u5b9a\u7684\u8282\u70b9\u4e0a\u3002\u6bd4\u5982\u56fe\u50cf\u5904\u7406\u7684\u5e94\u7528\u9700\u8981\u7ed1\u5b9a\u5230\u6444\u50cf\u5934\u5bf9\u5e94\u7684\u673a\u5668\u4e0a\uff0c\u667a\u6167\u4ea4\u901a\u7684\u5e94\u7528\u9700\u8981\u56fa\u5b9a\u5728\u67d0\u4e2a\u8def\u53e3\u7684\u673a\u5668\u4e0a\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5982\u4f55\u4f7f\u7528",children:"\u5982\u4f55\u4f7f\u7528"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 OpenYurt \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5f00\u542f/\u5173\u95ed\u7ed1\u5b9a\u529f\u80fd\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u4fee\u6539\u8282\u70b9 Annotation"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7ed9 Node \u6dfb\u52a0 Annotation\uff0c\u5f00\u542f\u7ed1\u5b9a\u529f\u80fd\uff0c\u8282\u70b9\u4e0a\u7684\u6240\u6709Pod\u90fd\u5c06\u7ed1\u5b9a\u5230\u8be5\u8282\u70b9\u4e0a\uff0c\u4e0d\u4f1a\u53d7\u4e91\u8fb9\u7f51\u7edc\u7684\u5f71\u54cd\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# node1 \u5f00\u542f\u8282\u70b9\u7ed1\u5b9a\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7684\u547d\u4ee4\uff0c\u5173\u95ed\u8282\u70b9\u7ed1\u5b9a\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u901a\u8fc7\u5220\u9664 annotation \u5173\u95ed\u7ed1\u5b9a\u529f\u80fd\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy-\n\n# \u901a\u8fc7\u4fee\u6539 node.beta.openyurt.io/autonomy \u503c\u4e3a false \u5173\u95ed\u8282\u70b9\u7ed1\u5b9a\u529f\u80fd\nkubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u4fee\u6539Pod Annotation"})}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ed9 Pod \u6dfb\u52a0 Annotation\uff0c\u5f00\u542f\u7ed1\u5b9a\u529f\u80fd\uff0c\u8be5Pod\u5c06\u7ed1\u5b9a\u5230\u8282\u70b9\u4e0a\uff0c\u4e0d\u4f1a\u53d7\u4e91\u8fb9\u7f51\u7edc\u7684\u5f71\u54cd\uff08\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539Deployment\u91cc\u7684",(0,s.jsx)(e.code,{children:"Deployment.Spec.Template.Annotations"}),"\u5b57\u6bb5\uff0c\u4f7f\u6240\u6709Pod\u90fd\u5f00\u542f\u7ed1\u5b9a\uff09\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# pod1 \u5f00\u542f\u7ed1\u5b9a\nkubectl annotate pods pod1 apps.openyurt.io/binding=true\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7684\u547d\u4ee4\uff0c\u5173\u95ed\u7ed1\u5b9a\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"# \u901a\u8fc7\u5220\u9664 annotation \u5173\u95ed\u7ed1\u5b9a\nkubectl annotate pods pod1 apps.openyurt.io/binding-\n\n# \u901a\u8fc7\u4fee\u6539 node.beta.openyurt.io/autonomy \u503c\u4e3a false \u5173\u95ed\u7ed1\u5b9a\nkubectl annotate --overwrite pods pod1 apps.openyurt.io/binding=false\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8fb9\u7f18\u8282\u70b9\u5f00\u542f\u8282\u70b9\u7ed1\u5b9a\u529f\u80fd\u540e\uff0c\u65e0\u8bba\u662f\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u5bfc\u81f4\u7684\u8282\u70b9NotReady\uff0c\u8fd8\u662f\u672c\u8eab\u8282\u70b9\u6545\u969c\u5bfc\u81f4\u7684\u8282\u70b9NotReady\uff0c\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u4e1a\u52a1Pod\u90fd\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4e91\u7aef\u8282\u70b9\u4e0d\u5efa\u8bae\u5f00\u542f\u8282\u70b9\u7ed1\u5b9a\u3002\u5982\u679c\u4e91\u7aef\u8282\u70b9\u5f00\u542f\u4e86\u7ed1\u5b9a\uff0c\u8282\u70b9\u4e3a\u975e Ready \u72b6\u6001\u65f6\uff0c\u5176\u4e1a\u52a1\u5bb9\u5668\u4e0d\u4f1a\u88ab\u9a71\u9010\u5e76\u91cd\u65b0\u8c03\u5ea6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5728OpenYurt 1.2.0 \u7248\u672c\u4ee5\u540e\uff0c\u5982\u679c\u5f00\u542fPool-Coordinator\uff0c\u8fb9\u7f18\u8282\u70b9\u901a\u8fc7\u5fc3\u8df3\u4ee3\u7406\u673a\u5236\u53ef\u4ee5\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u7684\u60c5\u51b5\u4e0b\u4ecd\u4fdd\u6301Ready\u72b6\u6001\u3002\u6b64\u65f6\u8282\u70b9\u7ed1\u5b9a\u80fd\u529b\u5c06\u4fdd\u969c\u5373\u4f7f\u8282\u70b9\u6545\u969c\u5bfc\u81f4NotReady\u4e1a\u52a1Pod\u4e5f\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>d,x:()=>i});var t=o(96540);const s={},a=t.createContext(s);function d(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);