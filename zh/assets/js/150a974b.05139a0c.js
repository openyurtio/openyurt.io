"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[20402],{76533:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"faq/yurtadm","title":"yurtadm","description":"1. yurtadm join \u62a5\u9519\uff1acrictl not found in system path","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/yurtadm.md","sourceDirName":"faq","slug":"/faq/yurtadm","permalink":"/zh/docs/next/faq/yurtadm","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurtadm.md","tags":[],"version":"current","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"yurtadm"},"sidebar":"docs","previous":{"title":"yurthub","permalink":"/zh/docs/next/faq/yurthub"},"next":{"title":"yurt-tunnel","permalink":"/zh/docs/next/faq/yurt-tunnel"}}');var o=t(74848),s=t(28453);const c={title:"yurtadm"},i=void 0,d={},u=[];function a(n){const e={a:"a",code:"code",p:"p",strong:"strong",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"1. yurtadm join \u62a5\u9519\uff1acrictl not found in system path"})}),"\n",(0,o.jsx)(e.p,{children:"\u8282\u70b9\u6ca1\u6709\u5b89\u88c5\u597dcontainer runtime(\u5982docker)\uff0c\u8282\u70b9\u63a5\u5165\u524d\u8bf7\u5148\u81ea\u884c\u5b89\u88c5\u597dcontainer runtime\u3002"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"2. yurtadm join \u62a5\u9519\uff1a[ERROR FileExisting-conntrack]: conntrack not found in system path"})}),"\n",(0,o.jsxs)(e.p,{children:["\u6267\u884c ",(0,o.jsx)(e.code,{children:"yum install -y conntrack"})," \u7136\u540e\u91cd\u65b0\u6267\u884c yurtadm join \u547d\u4ee4\u5373\u53ef\u3002"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"3. yurtadm join\u5982\u4f55\u652f\u6301\u7528\u6237\u63d0\u4f9b\u7684cni\u63d2\u4ef6"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"yurtadm join"}),"\u9ed8\u8ba4\u4f1a\u62c9\u53d6\u7ecf\u8fc7\u7279\u6b8a\u4fee\u6539\u7684cni\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4fee\u6539\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003[\u94fe\u63a5]\u3002\u5982\u679c\u4f60\u60f3\u8981\u4f7f\u7528\u9884\u5148\u51c6\u5907\u597d\u7684cni\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e94\u8be5\u5c06\u5b83\u4eec\u653e\u7f6e\u5728\u76ee\u5f55",(0,o.jsx)(e.code,{children:"/opt/cni/bin"}),"\u4e0b\uff0c\u63a5\u7740\u5728\u4f7f\u7528",(0,o.jsx)(e.code,{children:"yurtadm join"}),"\u65f6\u6dfb\u52a0",(0,o.jsx)(e.code,{children:"--reuse-cni-bin=true"}),"\u53c2\u6570\u3002"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"4. yurtadm join\u5982\u4f55\u652f\u6301\u7528\u6237\u63d0\u4f9b\u7684kubelet/kubeadm\u7b49\u7ec4\u4ef6"})}),"\n",(0,o.jsxs)(e.p,{children:["\u7528\u6237\u53ef\u4ee5\u5c06",(0,o.jsx)(e.code,{children:"kubelet"}),"\u548c",(0,o.jsx)(e.code,{children:"kubeadm"}),"\u7ec4\u4ef6\u63d0\u524d\u9884\u7f6e\u5728PATH\u73af\u5883\u53d8\u91cf\u4e2d\u3002\u4e0d\u8fc7\u5bf9\u4e8e",(0,o.jsx)(e.code,{children:"kubelet"}),"\u548c",(0,o.jsx)(e.code,{children:"kubeadm"}),"\u7684\u7248\u672c\u6709\u4e00\u4e9b\u9650\u5236\uff0c",(0,o.jsx)(e.code,{children:"yurtadm"}),"\u4f1a\u68c0\u67e5\u7ec4\u4ef6\u7684",(0,o.jsx)(e.code,{children:"major version"}),"\u548c",(0,o.jsx)(e.code,{children:"minor version"}),"\u662f\u5426\u4e0e\u96c6\u7fa4Kubernetes Server\u7248\u672c\u76f8\u540c(\u8fd9\u9075\u5faasemver\u89c4\u8303)\uff0c\u5982\u4f55\u7248\u672c\u4e0d\u4e00\u81f4\uff0cyurtadm\u4f1a\u6839\u636eKubernetes Server\u7248\u672c\u4ece\u5b98\u65b9\u94fe\u63a5\u4e2d\u62c9\u53d6kubelet/kubeadm\u3002"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"5. yurtadm join\u63a5\u5165\u8282\u70b9\u5931\u8d25\uff0c\u5982\u4f55\u89e3\u51b3"})}),"\n",(0,o.jsxs)(e.p,{children:["\u9996\u5148\u53ef\u4ee5\u5206\u6790yurtadm join\u7684\u9519\u8bef\u65e5\u5fd7\uff0c\u5b9a\u4f4d\u662f\u5728\u54ea\u4e2a\u9636\u6bb5\u51fa\u9519\u3002\u5982\u679c\u548cyurthub\u7ec4\u4ef6\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u53ef\u4ee5\u53c2\u8003",(0,o.jsx)(e.a,{href:"/zh/docs/next/faq/yurthub",children:"yurthub faq"})]})]})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);