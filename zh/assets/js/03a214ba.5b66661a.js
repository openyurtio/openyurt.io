"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[15833],{75046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(85893),r=t(11151);const s={title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d"},u=void 0,a={id:"user-manuals/autonomy/selfhealing-during-network-disconnection",title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d",description:"\u4f7f\u7528\u573a\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/autonomy/selfhealing-during-network-disconnection.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/selfhealing-during-network-disconnection",permalink:"/zh/docs/next/user-manuals/autonomy/selfhealing-during-network-disconnection",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/selfhealing-during-network-disconnection.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1711267183,formattedLastUpdatedAt:"2024\u5e743\u670824\u65e5",frontMatter:{title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d"},sidebar:"docs",previous:{title:"NodeResourceManager",permalink:"/zh/docs/next/core-concepts/node-resource-manager"},next:{title:"\u65ad\u7f51\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406",permalink:"/zh/docs/next/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes"}},i={},d=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u67b6\u6784\u4e0e\u539f\u7406",id:"\u67b6\u6784\u4e0e\u539f\u7406",level:2},{value:"\u5f00\u542f\u65b9\u6cd5",id:"\u5f00\u542f\u65b9\u6cd5",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u539f\u751fKubernetes\u67b6\u6784\u4e0b\uff0cSlave Agent(Kubelet) \u7684\u5bb9\u5668\u4fe1\u606f\u90fd\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u800c\u65ad\u7f51\u72b6\u6001\u4e0b\u53c8\u65e0\u6cd5\u4ece\u4e91\u7aef\u83b7\u53d6\u4e1a\u52a1\u6570\u636e\uff0c\u5982\u679c\u6b64\u65f6\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u8fb9\u7f18\u8282\u70b9\u7684Kubelet\u53d1\u751f\u5f02\u5e38\u91cd\u542f\uff0c\u5b83\u4eec\u5c06\u65e0\u6cd5\u8fdb\u884c\u4e1a\u52a1\u5bb9\u5668\u6062\u590d\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u67b6\u6784\u4e0e\u539f\u7406",children:"\u67b6\u6784\u4e0e\u539f\u7406"}),"\n",(0,o.jsxs)(n.p,{children:["OpenYurt\u5728\u8fb9\u7f18\u6d4b\u5f15\u5165\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\u2014\u2014",(0,o.jsx)(n.a,{href:"/zh/docs/next/core-concepts/yurthub",children:"YurtHub"}),"\u3002YurtHub\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u63d0\u4f9b web \u7f13\u5b58\u53ca\u8bf7\u6c42\u4ee3\u7406\u7684\u7684\u80fd\u529b\uff0c\u8282\u70b9\u4e0a\u7cfb\u7edf\u7ec4\u4ef6(\u5982kubelet)\u4ee5\u53ca\u4e1a\u52a1\u5bb9\u5668\u548c\u4e91\u7aef\u901a\u4fe1\u90fd\u5c06\u7ecf\u7531\u8be5\u7ec4\u4ef6\u4ee3\u7406\u3002\u65ad\u7f51\u60c5\u51b5\u4e0b\uff0c\u8fb9\u7f18\u6709\u4efb\u52a1\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u7f13\u5b58\u4e0d\u4f9d\u8d56\u4e91\u7aef\u6570\u636e\u6062\u590d\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5f00\u542f\u65b9\u6cd5",children:"\u5f00\u542f\u65b9\u6cd5"}),"\n",(0,o.jsxs)(n.p,{children:["\u65ad\u7f51\u81ea\u6108\u529f\u80fd\u7531YurtHub\u7ec4\u4ef6\u63d0\u4f9b\uff0c\u6240\u6709\u5b89\u88c5\u4e86YurtHub\uff08Edge mode\uff09\u7684\u8282\u70b9\u90fd\u81ea\u52a8\u652f\u6301\u8be5\u80fd\u529b\u3002\u4f7f\u7528",(0,o.jsxs)(n.a,{href:"/zh/docs/next/installation/yurtadm-join",children:[(0,o.jsx)(n.code,{children:"yurtadm"}),"\u63a5\u5165\u7684\u8282\u70b9"]}),"\u5c06\u81ea\u52a8\u51c6\u5907\u597dYurtHub\uff0c\u5426\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5YurtHub\u7ec4\u4ef6\u3002"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>u});var o=t(67294);const r={},s=o.createContext(r);function u(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);