"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[20329],{28729:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"installation/yurtctl-init-join","title":"Yurtctl init/join","description":"1.\u80cc\u666f\u8bf4\u660e","source":"@site/versioned_docs/version-v0.5.0/installation/yurtctl-init-join.md","sourceDirName":"installation","slug":"/installation/yurtctl-init-join","permalink":"/docs/v0.5.0/installation/yurtctl-init-join","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtctl-init-join.md","tags":[],"version":"v0.5.0","lastUpdatedBy":"Cookie Wang","lastUpdatedAt":1733209554000,"frontMatter":{"title":"Yurtctl init/join"},"sidebar":"docs","previous":{"title":"Summary","permalink":"/docs/v0.5.0/installation/summary"},"next":{"title":"YurtCluster","permalink":"/docs/v0.5.0/installation/yurtcluster"}}');var r=e(74848),l=e(28453);const o={title:"Yurtctl init/join"},c=void 0,s={},u=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2.\u4f7f\u7528\u6d41\u7a0b",id:"2\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"2.1\u524d\u7f6e\u51c6\u5907",id:"21\u524d\u7f6e\u51c6\u5907",level:3},{value:"2.2\u7f16\u8bd1 Yurtctl",id:"22\u7f16\u8bd1-yurtctl",level:3},{value:"2.3\u521d\u59cb\u5316\u96c6\u7fa4",id:"23\u521d\u59cb\u5316\u96c6\u7fa4",level:3},{value:"2.4\u8282\u70b9\u52a0\u5165",id:"24\u8282\u70b9\u52a0\u5165",level:3}];function a(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u8ba9\u7528\u6237\u5feb\u901f\u62e5\u6709\u4e00\u4e2a OpenYurt \u6d4b\u8bd5\u96c6\u7fa4\uff0cOpenYurt \u63d0\u4f9b\u4e86\u547d\u4ee4 Yurtctl init \u521d\u59cb\u5316\u96c6\u7fa4\uff0cYurt -APP-Manager\u3001Yurt-Controller-Manager\u3001\nYurttunnel-Server\u3001Yurttunnel-Agent \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u90e8\u7f72\u3002\u540e\u7eed\u6269\u5c55\u96c6\u7fa4\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 Yurtctl join\uff0c\u5c06\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u4e91\u7aef\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"2\u4f7f\u7528\u6d41\u7a0b",children:"2.\u4f7f\u7528\u6d41\u7a0b"}),"\n",(0,r.jsx)(n.h3,{id:"21\u524d\u7f6e\u51c6\u5907",children:"2.1\u524d\u7f6e\u51c6\u5907"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e Yurtctl init \u4ee5\u53ca Yurtctl join\uff0c\u7528\u6237\u5728\u4f7f\u7528\u524d\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u4e14\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"22\u7f16\u8bd1-yurtctl",children:"2.2\u7f16\u8bd1 Yurtctl"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fdb\u884c\u521d\u59cb\u5316\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u5148\u83b7\u53d6 Yurtctl \u53ef\u6267\u884c\u6587\u4ef6\u3002\n\u8981\u5feb\u901f\u6784\u5efa\u548c\u5b89\u88c5\u8bbe\u7f6e yurtctl\uff0c\u5728\u7f16\u8bd1\u7cfb\u7edf\u5df2\u5b89\u88c5\u4e86 golang 1.13+ \u548c bash \u7684\u524d\u63d0\u4e0b\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u5b89\u88c5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u6267\u884c\u6587\u4ef6\u5c06\u5b58\u653e\u5728 ",(0,r.jsx)(n.code,{children:"_output/bin/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"23\u521d\u59cb\u5316\u96c6\u7fa4",children:"2.3\u521d\u59cb\u5316\u96c6\u7fa4"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316\u96c6\u7fa4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ _output/bin/yurtctl init --kubernetes-version=v1.18.8 --pod-network-cidr=10.244.0.0/16\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"--yurt-version"})," \u914d\u7f6e OpenYurt \u7ec4\u4ef6\u7684\u7248\u672c\u3002\u5982\u679c\u60f3\u8981\u914d\u7f6e\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"-h"}),"  \u6765\u83b7\u53d6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"24\u8282\u70b9\u52a0\u5165",children:"2.4\u8282\u70b9\u52a0\u5165"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Yurtctl join \u5c06\u4e91\u7aef\u8282\u70b9\u3001\u8fb9\u7f18\u8282\u70b9\u52a0\u5165 OpenYurt \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u5728\u52a0\u5165\u8282\u70b9\u65f6\uff0c\u540c\u6837\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge-node --discovery-token-unsafe-skip-ca-verification --v=5\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u4e91\u7aef\u8282\u70b9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud-node --discovery-token-unsafe-skip-ca-verification --v=5\n\n"})})]})}function d(t={}){const{wrapper:n}={...(0,l.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(a,{...t})}):a(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>o,x:()=>c});var i=e(96540);const r={},l=i.createContext(r);function o(t){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(l.Provider,{value:n},t.children)}}}]);