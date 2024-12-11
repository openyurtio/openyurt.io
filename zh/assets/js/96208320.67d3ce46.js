"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[28701],{66671:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"core-concepts/yurt-controller-manager","title":"YurtControllerManager","description":"1.\u529f\u80fd\u7b80\u4ecb","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/core-concepts/yurt-controller-manager.md","sourceDirName":"core-concepts","slug":"/core-concepts/yurt-controller-manager","permalink":"/zh/docs/v0.6.0/core-concepts/yurt-controller-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-controller-manager.md","tags":[],"version":"v0.6.0","lastUpdatedBy":"Cookie","lastUpdatedAt":1733885620000,"frontMatter":{"title":"YurtControllerManager"},"sidebar":"docs","previous":{"title":"YurtAppManager","permalink":"/zh/docs/v0.6.0/core-concepts/yurt-app-manager"},"next":{"title":"NodeResourceManager","permalink":"/zh/docs/v0.6.0/core-concepts/node-resource-manager"}}');var o=r(74848),c=r(28453);const l={title:"YurtControllerManager"},s=void 0,a={},u=[{value:"1.\u529f\u80fd\u7b80\u4ecb",id:"1\u529f\u80fd\u7b80\u4ecb",level:2},{value:"1.1 \u63a5\u7ba1\u8282\u70b9\u7684\u751f\u547d\u5468\u671f",id:"11-\u63a5\u7ba1\u8282\u70b9\u7684\u751f\u547d\u5468\u671f",level:3},{value:"1.2 \u7ec4\u4ef6\u8bc1\u4e66\u6279\u51c6",id:"12-\u7ec4\u4ef6\u8bc1\u4e66\u6279\u51c6",level:3}];function i(e){const n={h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"1\u529f\u80fd\u7b80\u4ecb",children:"1.\u529f\u80fd\u7b80\u4ecb"}),"\n",(0,o.jsx)(n.p,{children:"Yurt Controller Manager \u4f5c\u4e3a kube-controller-manager \u7684\u6269\u5c55\uff0c\u652f\u6301\u4e86\u5176\u4ed6\u7ec4\u4ef6\u7684\u6b63\u5e38\u8fd0\u884c\u4ee5\u53ca\u8fb9\u7f18\u81ea\u6cbb\u529f\u80fd\u7684\u5b9e\u73b0\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"11-\u63a5\u7ba1\u8282\u70b9\u7684\u751f\u547d\u5468\u671f",children:"1.1 \u63a5\u7ba1\u8282\u70b9\u7684\u751f\u547d\u5468\u671f"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u539f\u751f\u7684 Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u4f1a\u9a71\u9010\u72b6\u6001\u4e3a NotReady \u4ee5\u53ca Unknown \u8282\u70b9\u4e0a\u7684 Pod\uff0c\u5bf9 Pod \u8fdb\u884c\u91cd\u65b0\u8c03\u5ea6\u4ee5\u53ca\u91cd\u5efa\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\uff0c\u4e91\u8fb9\u7f51\u7edc\u5f02\u5e38\u7ecf\u5e38\u53d1\u751f\uff0c\u8fb9\u7f18\u8282\u70b9\u53ef\u80fd\u7ecf\u5e38\u79bb\u7ebf\uff0c\u8fd9\u5bfc\u81f4\u8fb9\u7f18\u4e1a\u52a1\u9891\u7e41\u9a71\u9010\u548c\u91cd\u5efa\u3002\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0cOpenYurt \u63d0\u4f9b\u4e86\u8282\u70b9\u81ea\u6cbb\u7684\u80fd\u529b\uff0c\n\u5bf9\u4e8e\u5f00\u542f\u4e86\u8282\u70b9\u81ea\u6cbb\u7684\u8fb9\u7f18\u8282\u70b9\uff0c\u4e91\u7aef\u7ba1\u63a7\u9762\u4e0d\u5bf9\u8be5\u8282\u70b9\u4e0a\u7684 Pod \u8fdb\u884c\u9a71\u9010\uff0c\u786e\u4fdd\u4e86\u5de5\u4f5c\u8d1f\u8f7d\u4e0d\u88ab\u4e2d\u65ad\u3002"}),"\n",(0,o.jsx)(n.p,{children:'\u5728\u5b9e\u73b0\u4e0a\uff0cYurt Controller Manager \u63a5\u7ba1\u4e86 kube-controller-manager \u4e2d nodelifecycle \u63a7\u5236\u5668\u7684\u5de5\u4f5c\uff0c\u4e0d\u65ad\u76d1\u542c\u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u72b6\u6001\uff0c\n\u5bf9\u4e8e\u72b6\u6001\u4e3a NotReady \u4ee5\u53ca Unknown \u7684\u8282\u70b9\uff0c\u5982\u679c\u8282\u70b9\u5f00\u542f\u4e86\u81ea\u6cbb\u529f\u80fd\uff0c\u901a\u8fc7\u79fb\u9664\u8282\u70b9  "node.kubernetes.io/unschedulable" \u6c61\u70b9\u7684\u65b9\u5f0f\u786e\u4fdd\u8282\u70b9\u4e0a\u7684 Pod \u4e0d\u88ab\u9a71\u9010\u3002'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u5b89\u88c5 Yurt Controller Manager \u65f6\uff0c\u9700\u8981\u5173\u95ed kube-controller-manager \u4e2d\u7684 nodelifecycle \u63a7\u5236\u5668\u3002"})}),"\n",(0,o.jsx)(n.h3,{id:"12-\u7ec4\u4ef6\u8bc1\u4e66\u6279\u51c6",children:"1.2 \u7ec4\u4ef6\u8bc1\u4e66\u6279\u51c6"}),"\n",(0,o.jsx)(n.p,{children:"OpenYurt \u4e2d\u7ec4\u4ef6 Yurttunnel Server \u4ee5\u53ca Yurthub \u9700\u8981\u4f5c\u4e3a\u670d\u52a1\u7aef\u5206\u522b\u5411 Yurttunnel Agent\u3001\u8282\u70b9\u4e0a\u7684 Pod \u63d0\u4f9b\u670d\u52a1\u3002\n\u7531\u4e8e\u539f\u751f\u7684 Kubernetes \u5bf9\u670d\u52a1\u8bc1\u4e66\u7684\u7533\u8bf7\u6709\u4e25\u683c\u8981\u6c42\uff0c\u65e0\u6cd5\u81ea\u52a8\u6279\u51c6 Yurttunnel Server \u4ee5\u53ca Yurthub \u670d\u52a1\u7aef\u7684\u8bc1\u4e66\uff0c\n\u6240\u4ee5 Yurt Controller Manager \u627f\u62c5\u4e86\u8fd9\u4efd\u5de5\u4f5c\u2014\u2014\u6279\u51c6 Yurttunnel Server \u4ee5\u53ca Yurthub \u670d\u52a1\u7aef\u8bc1\u4e66\u7684\u7533\u8bf7\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var t=r(96540);const o={},c=t.createContext(o);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);