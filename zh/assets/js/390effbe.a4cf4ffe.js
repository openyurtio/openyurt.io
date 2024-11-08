"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[98137],{96875:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"installation/kcm-prepare","title":"Kube-Controller-Manager \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574","description":"1.\u80cc\u666f\u8bf4\u660e","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/kcm-prepare.md","sourceDirName":"installation","slug":"/installation/kcm-prepare","permalink":"/zh/docs/next/installation/kcm-prepare","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/kcm-prepare.md","tags":[],"version":"current","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1731105403000,"frontMatter":{"title":"Kube-Controller-Manager \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574"}}');var o=r(74848),c=r(28453);const l={title:"Kube-Controller-Manager \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574"},s=void 0,a={},i=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2. \u7981\u7528 nodelifecycle \u63a7\u5236\u5668",id:"2-\u7981\u7528-nodelifecycle-\u63a7\u5236\u5668",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u901a\u8fc7\u516c\u7f51\u4e0e\u4e2d\u5fc3\u63a7\u5236\u9762\u8fde\u63a5\uff0c\u7f51\u7edc\u8fde\u63a5\u53ef\u80fd\u662f\u4e0d\u7a33\u5b9a\u7684\uff0ck8s \u539f\u751f\u7684\u8282\u70b9\u751f\u547d\u5468\u671f\u7ba1\u7406\u903b\u8f91\u4e0d\u9002\u7528\u4e8e\u8fd9\u79cd\u4e0d\u7a33\u5b9a\u7684\u7f51\u7edc\u6761\u4ef6\u3002OpenYurt \u4f7f\u7528\u5b9a\u5236\u7684",(0,o.jsx)(n.code,{children:"nodelifecycle"}),"\u63a7\u5236\u5668\u6765\u7ba1\u7406\u8282\u70b9\u7684\u751f\u547d\u5468\u671f\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5173\u95ed Kube-Controller-Manager \u4e2d\u539f\u751f\u7684 ",(0,o.jsx)(n.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\u907f\u514d\u51b2\u7a81\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"2-\u7981\u7528-nodelifecycle-\u63a7\u5236\u5668",children:"2. \u7981\u7528 nodelifecycle \u63a7\u5236\u5668"}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,o.jsx)(n.code,{children:"--controllers"})," \u53c2\u6570\u503c\u5e76\u91cd\u542f ",(0,o.jsx)(n.code,{children:"kube-controller-manager"})," \u6765\u7981\u7528 ",(0,o.jsx)(n.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\u3002\u5047\u8bbe\u6700\u521d\u7684\u53c2\u6570\u503c\u50cf\u8fd9\u6837 ",(0,o.jsx)(n.code,{children:"--controllers=*,bootstrapsigner,tokencleaner"}),"\uff0c\u8981\u7981\u7528 ",(0,o.jsx)(n.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\uff0c\u6211\u4eec\u9700\u8981\u5c06\u53c2\u6570\u503c\u66f4\u6539\u4e3a ",(0,o.jsx)(n.code,{children:"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c ",(0,o.jsx)(n.code,{children:"kube-controller-manager"})," \u662f\u4ee5\u9759\u6001 pod \u7684\u65b9\u5f0f\u90e8\u7f72\u5728 master \u8282\u70b9\u4e0a\uff0c\u5e76\u4e14\u60a8\u6709\u767b\u5f55 master \u8282\u70b9\u7684\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ",(0,o.jsx)(n.code,{children:"/etc/kubernetes/manifests/kube-controller-manager.yaml"})," \u6587\u4ef6\u6765\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u3002\u4fee\u6539\u540e\uff0c",(0,o.jsx)(n.code,{children:"kube-controller-manager"})," \u4f1a\u81ea\u52a8\u91cd\u542f\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ vi /etc/kubernetes/manifests/kube-controller-manager.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  containers:\n  - command:\n    - kube-controller-manager\n    - --allocate-node-cidrs=true\n    - --authentication-kubeconfig=/etc/kubernetes/controller-manager.conf\n    ...\n    - --controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner #\u7981\u7528nodelifecycle\u63a7\u5236\u5668\n    ...\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var t=r(96540);const o={},c=t.createContext(o);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);