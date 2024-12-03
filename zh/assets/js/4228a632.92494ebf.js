"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[35049],{74236:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-manuals/network/service/nodeport-isolation","title":"NodePort\u7aef\u53e3\u76d1\u542c\u9694\u79bb","description":"\u80cc\u666f\u4ecb\u7ecd","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/network/service/nodeport-isolation.md","sourceDirName":"user-manuals/network/service","slug":"/user-manuals/network/service/nodeport-isolation","permalink":"/zh/docs/next/user-manuals/network/service/nodeport-isolation","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/service/nodeport-isolation.md","tags":[],"version":"current","lastUpdatedBy":"Cookie Wang","lastUpdatedAt":1733209554000,"frontMatter":{"title":"NodePort\u7aef\u53e3\u76d1\u542c\u9694\u79bb"},"sidebar":"docs","previous":{"title":"\u670d\u52a1\u62d3\u6251","permalink":"/zh/docs/next/user-manuals/network/service/service-topology"},"next":{"title":"Raven","permalink":"/zh/docs/next/user-manuals/network/raven"}}');var t=n(74848),s=n(28453);const i={title:"NodePort\u7aef\u53e3\u76d1\u542c\u9694\u79bb"},c=void 0,l={},d=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u67b6\u6784\u4e0e\u539f\u7406",id:"\u67b6\u6784\u4e0e\u539f\u7406",level:2},{value:"\u5f00\u542f\u65b9\u6cd5",id:"\u5f00\u542f\u65b9\u6cd5",level:2}];function u(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(o.p,{children:["\u8fd9\u4e2a\u529f\u80fd\u6e90\u4e8e\u793e\u533a\u7684\u9700\u6c42\uff0c\u8be6\u7ec6\u8ba8\u8bba\u53ef\u4ee5\u5728 issue ",(0,t.jsx)(o.a,{href:"https://github.com/openyurtio/openyurt/issues/1183",children:"#1183"}),"\u4e2d\u627e\u5230\u3002"]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"In edge network scenarios, service isolation is required. For example, when using a NodePort type service, it should only serve specific node pools."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"\u67b6\u6784\u4e0e\u539f\u7406",children:"\u67b6\u6784\u4e0e\u539f\u7406"}),"\n",(0,t.jsxs)(o.p,{children:["\u5f15\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a nodeportisolation \u7684\u65b0\u8fc7\u6ee4\u5668\u6765\u5904\u7406\u6b64\u529f\u80fd\uff0c\u5e76\u4e3a NodePort Service\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u6ce8\u89e3 ",(0,t.jsx)(o.code,{children:"nodeport.openyurt.io/listen"}),"\uff0c\u4ee5\u5728 YurtHub \u4e2d\u89e6\u53d1 nodeportisolation \u8fc7\u6ee4\u5668\u3002\nnodeportisolation \u8fc7\u6ee4\u5668\u6839\u636e\u670d\u52a1\u4e2d\u7684 ",(0,t.jsx)(o.code,{children:"nodeport.openyurt.io/listen"})," \u6ce8\u89e3\u8bbe\u7f6e\u91cd\u65b0\u7ec4\u88c5 kube-proxy list/watch \u670d\u52a1\u8bf7\u6c42\u7684response\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u6709\u5173\u6570\u636e\u8fc7\u6ee4\u6846\u67b6\u8be6\u7ec6\u8bbe\u8ba1\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003[resource-access-control]\uff08.../resource-access-control/resource-access-control.md\uff09\u3002"}),"\n",(0,t.jsx)(o.h2,{id:"\u5f00\u542f\u65b9\u6cd5",children:"\u5f00\u542f\u65b9\u6cd5"}),"\n",(0,t.jsx)(o.p,{children:"\u4ee5\u4e0b\u662f\u4e3a NodePort/LoadBalancer \u670d\u52a1\u5f15\u5165 nodeport.openyurt.io/listen \u6ce8\u89e3\u7684\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"key\uff1anodeport.openyurt.io/listen"}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"value\uff1a\u7528 ',' \u5206\u9694\u7684\u8282\u70b9\u6c60\u540d\u79f0\u5217\u8868"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"foo"}),"\uff1a\u4f7f\u6307\u5b9a\u7684 NodePort Service\u5728\u540d\u4e3a foo \u7684\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u76d1\u542c\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"-foo"}),"\uff1a\u7981\u6b62\u6307\u5b9a\u7684 NodePort Service\u5728\u540d\u4e3a foo \u7684\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u76d1\u542c\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"*"}),"\uff1a\u4f7f\u6307\u5b9a\u7684 NodePort Service\u5728\u6240\u6709\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u76d1\u542c\u3002"]}),"\n",(0,t.jsx)(o.li,{children:"\u5982\u679c\u914d\u7f6e\u4e2d\u6709\u91cd\u590d\u7684\u8282\u70b9\u6c60\u540d\u79f0\uff0c\u5c06\u4f7f\u7528\u7b2c\u4e00\u4e2a\u914d\u7f6e\u3002"}),"\n",(0,t.jsx)(o.li,{children:"\u5982\u679c\u672a\u914d\u7f6e\u8282\u70b9\u6c60\u540d\u79f0\uff0c\u5c06\u5728\u8fd9\u4e9b\u672a\u914d\u7f6e\u7684\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u7981\u7528\u8fd9\u4e2a NodePort Service \u76d1\u542c\u3002"}),"\n",(0,t.jsx)(o.li,{children:"\u5b64\u513f\u8282\u70b9\uff08\u4e0d\u4f4d\u4e8e\u8282\u70b9\u6c60\u4e2d\uff09\u5c06\u4e0e\u539f\u751f Kubernetes \u76f8\u540c\u5bf9\u5f85\uff0c\u56e0\u6b64 NodePort Service \u5c06\u5728\u5b64\u513f\u8282\u70b9\u4e0a\u76d1\u542c\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"\u6ce8\u89e3\u8bbe\u7f6e\u793a\u4f8b\uff1a"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"  - `nodeport.openyurt.io/listen=foo, bar`\uff1a\u5728 `foo` \u548c `bar` \u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u542f\u7528\u8fd9\u4e2a NodePort Service\u76d1\u542c\u3002\n  - `nodeport.openyurt.io/listen=foo, *`\uff1a\u5728\u6240\u6709\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u542f\u7528\u8fd9\u4e2a NodePort Service\u76d1\u542c\u3002\n  - `nodeport.openyurt.io/listen=-foo, -bar`\uff1a\u5728\u6240\u6709\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u7981\u7528\u8fd9\u4e2a NodePort Service\u76d1\u542c\u3002\n  - `nodeport.openyurt.io/listen=-foo, *`\uff1a\u4ec5\u5728 `foo` \u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u7981\u7528\u8fd9\u4e2a NodePort Service\u76d1\u542c\u3002\n  - `nodeport.openyurt.io/listen=foo,-foo`\uff1a\u5728 `foo` \u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u542f\u7528\u8fd9\u4e2a NodePort Service\u76d1\u542c\u3002\n  - `nodeport.openyurt.io/listen=-foo`\uff1a\u5728\u6240\u6709\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u7981\u7528\u8fd9\u4e2a NodePort Service\u76d1\u542c\uff08\u5305\u62ec `foo` \u8282\u70b9\u6c60\uff09\u3002\n"})})]})}function a(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var r=n(96540);const t={},s=r.createContext(t);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);