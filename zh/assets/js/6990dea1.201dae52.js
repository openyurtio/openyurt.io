"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[40316],{78213:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"user-manuals/resource-access-control/resource-access-control","title":"\u53ef\u7f16\u7a0b\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236","description":"\u80cc\u666f\u4ecb\u7ecd","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/resource-access-control/resource-access-control.md","sourceDirName":"user-manuals/resource-access-control","slug":"/user-manuals/resource-access-control/","permalink":"/zh/docs/next/user-manuals/resource-access-control/","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/resource-access-control/resource-access-control.md","tags":[],"version":"current","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"\u53ef\u7f16\u7a0b\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"}}');var c=n(74848),t=n(28453);const o={title:"\u53ef\u7f16\u7a0b\u8d44\u6e90\u8bbf\u95ee\u63a7\u5236"},i=void 0,d={},l=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u5982\u4f55\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668",id:"\u5982\u4f55\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668",level:2}];function u(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u4e91\u8fb9\u534f\u540c\u73af\u5883\u4e2d\uff0c\u8fb9\u7f18\u7ec4\u4ef6\uff08\u4f8b\u5982 kube-proxy \u6216\u7528\u6237 pod\uff09\u901a\u5e38\u9700\u8981\u5bf9\u4ece\u4e91\u7aef kube-apiserver \u83b7\u53d6\u7684\u6570\u636e\u8fdb\u884c\u5b9a\u5236\u5904\u7406\uff0c\u4ee5\u7b26\u5408\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u7684\u72ec\u7279\u8981\u6c42\u3002\u6bd4\u5982\uff0c\u5728 kube-proxy \u62c9\u53d6 endpointslices \u6570\u636e\u65f6\uff0c\u5b83\u5e0c\u671b\u83b7\u53d6\u5230\u7684 endpoints \u6570\u636e\u80fd\u591f\u6ee1\u8db3\u76f8\u5bf9\u5e94 ",(0,c.jsx)(s.code,{children:"Service"})," \u6240\u89c4\u5b9a\u7684\u670d\u52a1\u62d3\u6251\u9700\u6c42\uff08\u4f8b\u5982\uff0c\u53ea\u63d0\u4f9b\u540c\u4e00\u8282\u70b9\u4e0a\u7684 endpoints\uff09\uff0c\u800c\u975e\u83b7\u53d6\u5168\u90e8\u539f\u59cb\u7684 endpoints \u6570\u636e\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u67b6\u6784\u8bbe\u8ba1",children:"\u67b6\u6784\u8bbe\u8ba1"}),"\n",(0,c.jsx)(s.p,{children:"\u5728 OpenYurt \u67b6\u6784\u4e2d\uff0cYurtHub \u642d\u8f7d\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684\u53ef\u7f16\u7a0b\u6570\u636e\u8fc7\u6ee4\u6846\u67b6\u3002\u901a\u8fc7\u8be5\u6846\u67b6\uff0c\u6307\u5b9a\u8bf7\u6c42\u7684\u4e91\u7aef\u54cd\u5e94\u6570\u636e\u4f1a\u7ecf\u8fc7\u4e00\u8fde\u4e32\u7684\u8fc7\u6ee4\u5668\u8fdb\u884c\u5904\u7406\uff0c\u4f7f\u5f97\u54cd\u5e94\u6570\u636e\u80fd\u591f\u65e0\u7f1d\u4e14\u6309\u9700\u5730\u8f6c\u6362\uff0c\u4ee5\u4fbf\u7cbe\u51c6\u5730\u6ee1\u8db3\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u7684\u7279\u6b8a\u9700\u6c42\u3002\u8be5\u8fc7\u7a0b\u7684\u7ec6\u8282\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"resource-access-control",src:n(31002).A+"",width:"1216",height:"786"})}),"\n",(0,c.jsx)(s.p,{children:"\u76ee\u524d\uff0c\u8fc7\u6ee4\u5668\u94fe\u652f\u6301\u4ee5\u4e0b\u4e94\u4e2a\u8fc7\u6ee4\u5668\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"masterservice \u8fc7\u6ee4\u5668\uff1a\u5c06 default/kubernetes service\u7684 ClusterIP \u548c HTTPS \u7aef\u53e3\u6539\u4e3a YurtHub \u7ec4\u4ef6\u6b63\u5728\u76d1\u542c\u7684\u5730\u5740\uff0c\u4f7f\u8fb9\u7f18\u8282\u70b9\u4e0a\u4f7f\u7528 InClusterConfig \u7684 pod \u80fd\u591f\u65e0\u611f\u77e5\u5730\u901a\u8fc7 YurtHub \u7ec4\u4ef6\u8bbf\u95ee\u4e91\u7aef kube-apiserver\u3002"}),"\n",(0,c.jsx)(s.li,{children:"servicetopology \u8fc7\u6ee4\u5668\uff1a\u6839\u636eservice\u7684\u670d\u52a1\u62d3\u6251\u8bbe\u7f6e\u91cd\u65b0\u7ec4\u88c5 endpointslices\uff0c\u786e\u4fdd\u8bbf\u95ee\u670d\u52a1\u7684\u6d41\u91cf\u53ea\u80fd\u8f6c\u53d1\u7ed9\u540c\u4e00\u8282\u70b9\u6216 \u540c\u4e00NodePool \u4e2d\u7684 pod\u3002"}),"\n",(0,c.jsx)(s.li,{children:"discardcloudservice \u8fc7\u6ee4\u5668\uff1a\u8be5\u8fc7\u6ee4\u5668\u5c06\u6392\u9664\u5e26\u6709 svc.openyurt.io/discard=trueannotation \u7684 LB service\u3002"}),"\n",(0,c.jsx)(s.li,{children:"inclusterconfig \u8fc7\u6ee4\u5668\uff1a\u5728 kube-system/kube-proxy configmap \u4e2d\u6ce8\u91ca kubeconfig \u8bbe\u7f6e\uff0c\u4f7f\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684 kube-proxy \u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528 InClusterConfig \u8bbf\u95ee\u4e91\u7aef kube-apiserver\u3002"}),"\n",(0,c.jsx)(s.li,{children:"nodeportisolation \u8fc7\u6ee4\u5668\uff1a\u6839\u636e Service \u7684 nodeport.openyurt.io/listen \u6ce8\u89e3\u6765\u8fc7\u6ee4 NodePort Service\uff0c\u4f7f NodePort Service \u53ea\u5728\u6307\u5b9a\u7684 NodePool \u4e2d\u76d1\u542c\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\u4e0a\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u6bcf\u4e2a\u8fc7\u6ee4\u5668\u80fd\u5904\u7406\u54ea\u4e9b\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\uff0c\u7531\u4e09\u5143\u7ec4: component/resource/verbs \u6765\u5339\u914d\u8bf7\u6c42\u3002"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"component\uff1a\u8868\u793a HTTP \u8bf7\u6c42\u5934\u4e2d\u7684 User-Agent\uff0c\u4f8b\u5982 kube-proxy\u3002"}),"\n",(0,c.jsx)(s.li,{children:"resource\uff1a\u8868\u793a\u8bf7\u6c42\u7684\u8d44\u6e90\uff0c\u4f8b\u5982 endpointslices\u3002"}),"\n",(0,c.jsx)(s.li,{children:"verbs\uff1a\u8868\u793a HTTP \u8bf7\u6c42\u7684Verb\uff0c\u4f8b\u5982 get\u3001list\u3001watch\u3002"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u5982\u4f55\u4f7f\u7528",children:"\u5982\u4f55\u4f7f\u7528"}),"\n",(0,c.jsxs)(s.p,{children:["\u5982\u4e0a\u6240\u8ff0\uff0c\u6bcf\u4e2a\u8fc7\u6ee4\u5668\u4ec5\u5904\u7406\u7531",(0,c.jsx)(s.code,{children:"component/resource/verbs"}),"\u786e\u5b9a\u7684\u7279\u5b9a\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0b\u8868\u663e\u793a\u4e86\u6bcf\u4e2a\u8fc7\u6ee4\u5668\u652f\u6301\u7684\u9ed8\u8ba4",(0,c.jsx)(s.code,{children:"component/resource/verbs"}),"\uff1a"]}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Filter"}),(0,c.jsx)(s.th,{children:"Default components"}),(0,c.jsx)(s.th,{children:"resources"}),(0,c.jsx)(s.th,{children:"verbs"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"masterservice"}),(0,c.jsx)(s.td,{children:"kubelet"}),(0,c.jsx)(s.td,{children:"services"}),(0,c.jsx)(s.td,{children:"list, watch"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"servicetopology"}),(0,c.jsx)(s.td,{children:"kube-proxy, coredns, nginx-ingress-controller"}),(0,c.jsx)(s.td,{children:"endpoints, endpointslices"}),(0,c.jsx)(s.td,{children:"list, watch"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"discardcloudservice"}),(0,c.jsx)(s.td,{children:"kube-proxy"}),(0,c.jsx)(s.td,{children:"services"}),(0,c.jsx)(s.td,{children:"list, watch"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"inclusterconfig"}),(0,c.jsx)(s.td,{children:"kubelet"}),(0,c.jsx)(s.td,{children:"configmaps"}),(0,c.jsx)(s.td,{children:"get, list, watch"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"nodeportisolation"}),(0,c.jsx)(s.td,{children:"kube-proxy"}),(0,c.jsx)(s.td,{children:"services"}),(0,c.jsx)(s.td,{children:"list, watch"})]})]})]}),"\n",(0,c.jsxs)(s.p,{children:["\u53e6\u5916\uff0c\u5982\u679c\u8fd8\u9700\u8981\u5904\u7406\u5176\u4ed6\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\uff0c\u7528\u6237\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u914d\u7f6e ",(0,c.jsx)(s.code,{children:"kube-system/yurt-hub-cfg"})," configmap\uff1a"]}),"\n",(0,c.jsx)(s.p,{children:"\u6ce8\u610f\uff1a\u8bf7\u786e\u4fdd\u5728\u8fd0\u884c\u5ba2\u6237\u7aef pod \u4e4b\u524d\u914d\u7f6e\u597d configmap\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:'// configured response for clients named foo and bar can be handled by servicetopology\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yurt-hub-cfg\ndata:\n  servicetopology: "foo, bar"\n'})}),"\n",(0,c.jsx)(s.h2,{id:"\u5982\u4f55\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668",children:"\u5982\u4f55\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668"}),"\n",(0,c.jsxs)(s.p,{children:["\u53ef\u4ee5\u53c2\u8003 ",(0,c.jsx)(s.a,{href:"/zh/docs/next/developer-manuals/how-to-write-a-filter",children:"\u5982\u4f55\u5728YurtHub\u4e2d\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668"})]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},31002:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/resource-access-control-2c82f506c04bb7fcafcb39f8fa9ce72b.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>i});var r=n(96540);const c={},t=r.createContext(c);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);