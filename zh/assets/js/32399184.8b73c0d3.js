"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[54886],{11249:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"installation/yurtctl-init-join","title":"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)","description":"1.\u80cc\u666f\u8bf4\u660e","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/installation/yurtctl-init-join.md","sourceDirName":"installation","slug":"/installation/yurtctl-init-join","permalink":"/zh/docs/v0.6.0/installation/yurtctl-init-join","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtctl-init-join.md","tags":[],"version":"v0.6.0","lastUpdatedBy":"PersistentJZH","lastUpdatedAt":1743719234000,"frontMatter":{"title":"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)"},"sidebar":"docs","previous":{"title":"\u5982\u4f55\u4f7f\u7528`kubeconfig`\u4f53\u9a8cOpenYurt\u7684\u80fd\u529b","permalink":"/zh/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig"},"next":{"title":"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4","permalink":"/zh/docs/v0.6.0/installation/yurtcluster"}}');var r=n(74848),s=n(28453);const l={title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)"},c=void 0,o={},a=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2.\u4f7f\u7528\u6d41\u7a0b",id:"2\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"2.1\u7f16\u8bd1 Yurtctl",id:"21\u7f16\u8bd1-yurtctl",level:3},{value:"2.2\u521d\u59cb\u5316\u96c6\u7fa4",id:"22\u521d\u59cb\u5316\u96c6\u7fa4",level:3},{value:"2.4\u8282\u70b9\u52a0\u5165",id:"24\u8282\u70b9\u52a0\u5165",level:3},{value:"3.\u5b9e\u73b0\u7ec6\u8282",id:"3\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"3.1 Yurtctl init",id:"31-yurtctl-init",level:3}];function u(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4e86\u8ba9\u7528\u6237\u5feb\u901f\u62e5\u6709\u4e00\u4e2a OpenYurt \u6d4b\u8bd5\u96c6\u7fa4\uff0cOpenYurt \u63d0\u4f9b\u4e86\u547d\u4ee4 Yurtctl init \u521d\u59cb\u5316\u96c6\u7fa4\uff0c\u7528\u6237\u53ea\u9700\u8981\u9009\u62e9 OpenYurt \u96c6\u7fa4\u7684\u955c\u50cf\u7248\u672c\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u5bf9\u5e94\u7248\u672c\u7684 OpenYurt\uff0cYurt -APP-Manager\u3001Yurt-Controller-Manager\u3001Yurttunnel-Server\u3001Yurttunnel-Agent \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u90e8\u7f72\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u540e\u7eed\u6269\u5c55\u96c6\u7fa4\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 Yurtctl join\uff0c\u5c06\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u4e91\u7aef\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"2\u4f7f\u7528\u6d41\u7a0b",children:"2.\u4f7f\u7528\u6d41\u7a0b"}),"\n",(0,r.jsx)(e.h3,{id:"21\u7f16\u8bd1-yurtctl",children:"2.1\u7f16\u8bd1 Yurtctl"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u8fdb\u884c\u521d\u59cb\u5316\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u5148\u83b7\u53d6 Yurtctl \u53ef\u6267\u884c\u6587\u4ef6\u3002\n\u8981\u5feb\u901f\u6784\u5efa\u548c\u5b89\u88c5\u8bbe\u7f6e yurtctl \uff0c\u5728\u7f16\u8bd1\u7cfb\u7edf\u5df2\u5b89\u88c5\u4e86 golang 1.13+ \u548c bash \u7684\u524d\u63d0\u4e0b\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u5b89\u88c5\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:'$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u6267\u884c\u6587\u4ef6\u5c06\u5b58\u653e\u5728 ",(0,r.jsx)(e.code,{children:"_output/bin/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"22\u521d\u59cb\u5316\u96c6\u7fa4",children:"2.2\u521d\u59cb\u5316\u96c6\u7fa4"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316\u96c6\u7fa4\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"$ _output/bin/yurtctl init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u4e2d\u4e3b\u8981\u53c2\u6570\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:" --apiserver-advertise-address    master\u8282\u70b9\u7684IP\u5730\u5740\n --passwd                         master\u8282\u70b9\u7684ssh\u767b\u5165\u5bc6\u7801\n --openyurt-version               OpenYurt\u96c6\u7fa4\u7684\u7248\u672c\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u60f3\u8981\u914d\u7f6e\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"-h"}),"  \u6765\u83b7\u53d6\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"24\u8282\u70b9\u52a0\u5165",children:"2.4\u8282\u70b9\u52a0\u5165"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Yurtctl join \u5c06\u4e91\u7aef\u8282\u70b9\u3001\u8fb9\u7f18\u8282\u70b9\u52a0\u5165 OpenYurt \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u5728\u52a0\u5165\u8282\u70b9\u65f6\uff0c\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u4e91\u7aef\u8282\u70b9\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u8fb9\u7f18\u8282\u70b9runtime\u4e3acontainerd\u65f6\uff0c\u9700\u8981\u914d\u7f6e",(0,r.jsx)(e.code,{children:"cri-socket"}),"\u53c2\u6570\uff0c\u5982\u4e0a\u9762\u6267\u884c\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u6539\u4e3a\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n"})}),"\n",(0,r.jsx)(e.h2,{id:"3\u5b9e\u73b0\u7ec6\u8282",children:"3.\u5b9e\u73b0\u7ec6\u8282"}),"\n",(0,r.jsx)(e.h3,{id:"31-yurtctl-init",children:"3.1 Yurtctl init"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e3a\u4e86\u964d\u4f4e Yurtctl init \u7684\u4f7f\u7528\u96be\u5ea6\uff0c\u63d0\u9ad8\u7684\u96c6\u7fa4\u5b89\u88c5\u6210\u529f\u6982\u7387\uff0cYurtctl init \u901a\u8fc7\u5f00\u6e90\u5de5\u5177 ",(0,r.jsx)(e.a,{href:"https://github.com/alibaba/sealer",children:"sealer"}),"\n\u521d\u59cb\u5316 OpenYurt \u96c6\u7fa4\u3002\u5728\u5b9e\u73b0\u4e0a\uff0cYurtctl init \u4f1a\u4e0b\u8f7d sealer \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0csealer \u4f1a\u4e0b\u8f7d OpenYurt \u5b98\u65b9\u63d0\u4f9b\u7684\u96c6\u7fa4\u955c\u50cf\u5e76\u5b89\u88c5\u96c6\u7fa4\u3002\n\u6b64\u5916\uff0cYurtctl init \u4e5f\u652f\u6301\u7528\u6237\u4e2a\u6027\u5316\u914d\u7f6e OpenYurt \u96c6\u7fa4\u955c\u50cf\u3002"]})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function l(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:l(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);