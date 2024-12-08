"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[75675],{9247:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-manuals/workload/yurt-app-set","title":"\u5e94\u7528\u96c6","description":"\u5728[\u4e0a\u4e00\u7bc7\u6587\u7ae0] \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/workload/yurt-app-set.md","sourceDirName":"user-manuals/workload","slug":"/user-manuals/workload/yurt-app-set","permalink":"/zh/docs/next/user-manuals/workload/yurt-app-set","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-set.md","tags":[],"version":"current","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1733695371000,"frontMatter":{"title":"\u5e94\u7528\u96c6"},"sidebar":"docs","previous":{"title":"\u5e94\u7528\u7ba1\u7406\u6982\u8ff0","permalink":"/zh/docs/next/user-manuals/workload/workload-management-overview"},"next":{"title":"YurtStaticSet","permalink":"/zh/docs/next/user-manuals/workload/yurt-static-set"}}');var p=a(74848),s=a(28453);const r={title:"\u5e94\u7528\u96c6"},l=void 0,o={},d=[{value:"YurtAppSet \u7528\u6237\u624b\u518c",id:"yurtappset-\u7528\u6237\u624b\u518c",level:2},{value:"\u521b\u5efa YurtAppSet",id:"\u521b\u5efa-yurtappset",level:3},{value:"\u68c0\u67e5\u7531 yurt-app-manager \u7ec4\u4ef6\u521b\u5efa\u7684 deployment",id:"\u68c0\u67e5\u7531-yurt-app-manager-\u7ec4\u4ef6\u521b\u5efa\u7684-deployment",level:3}];function i(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.p,{children:"\u5728[\u4e0a\u4e00\u7bc7\u6587\u7ae0] \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002"}),"\n",(0,p.jsx)(n.p,{children:"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5c55\u793a yurt-app-manager \u5982\u4f55\u5e2e\u52a9\u7528\u6237\u7ba1\u7406\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u57fa\u4e8e\u539f\u751f kubernetes \u642d\u5efa\u8d77\u6765\u7684 OpenYurt \u96c6\u7fa4\uff0c\u4e14\u81f3\u5c11\u6709\u4e24\u4e2a\u8282\u70b9\u3002"}),"\n",(0,p.jsx)(n.h2,{id:"yurtappset-\u7528\u6237\u624b\u518c",children:"YurtAppSet \u7528\u6237\u624b\u518c"}),"\n",(0,p.jsx)(n.h3,{id:"\u521b\u5efa-yurtappset",children:"\u521b\u5efa YurtAppSet"}),"\n",(0,p.jsxs)(n.ul,{children:["\n",(0,p.jsxs)(n.li,{children:["\u901a\u8fc7",(0,p.jsx)(n.code,{children:"yurtappset_test.yaml"}),"\u521b\u5efa\u4e00\u4e2a YurtAppSet\uff0c\u90e8\u7f72 nginx \u5e94\u7528\u5230 np1xxxxxx, np2xxxxxx \u548c\u5176\u4ed6\u4efb\u4f55\u5339\u914d",(0,p.jsx)(n.code,{children:'yurtappset.openyurt.io/type: "nginx"'}),"\u6807\u7b7e\u7684\u8282\u70b9\u6c60\u4e2d\u3002\u53e6\u5916\uff0cnp2xxxxxx \u4e2d\u7684 deployment \u6709\u4e0d\u540c\u7684 replicas, image \u548c label."]}),"\n"]}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps.openyurt.io/v1beta1\nkind: YurtAppSet\nmetadata:\n  name: example\n  namespace: default\nspec:\n  revisionHistoryLimit: 5\n  pools:\n    - np1xxxxxx\n    - np2xxxxxx\n  nodepoolSelector:\n    matchLabels:\n      yurtappset.openyurt.io/type: "nginx"\n  workload:\n    workloadTemplate:\n      deploymentTemplate:\n        metadata:\n          labels:\n            app: example\n        spec:\n          replicas: 2\n          selector:\n            matchLabels:\n              app: example\n          template:\n            metadata:\n              labels:\n                app: example\n            spec:\n              containers:\n                - image: nginx:1.19.1\n                  imagePullPolicy: Always\n                  name: nginx\n    workloadTweaks:\n      - pools:\n          - np2xxxxxx\n        tweaks:\n          replicas: 3\n          containerImages:\n            - name: nginx\n              targetImage: nginx:1.20.1\n          patches:\n            - path: /metadata/labels/test\n              operation: add\n              value: test\n'})}),"\n",(0,p.jsxs)(n.ul,{children:["\n",(0,p.jsx)(n.li,{children:"\u67e5\u770b YurtAppSet"}),"\n"]}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-shell",children:"$ kubectl get yas\nNAME      TOTAL   READY   UPDATED   AGE\nexample   2       2       2         84s\n"})}),"\n",(0,p.jsx)(n.h3,{id:"\u68c0\u67e5\u7531-yurt-app-manager-\u7ec4\u4ef6\u521b\u5efa\u7684-deployment",children:"\u68c0\u67e5\u7531 yurt-app-manager \u7ec4\u4ef6\u521b\u5efa\u7684 deployment"}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deploy\nNAME                                               READY   UP-TO-DATE   AVAILABLE   AGE\nexample-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6   2/2     2            2           3m46s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p   3/3     3            3           3m46s\n\n$ kubectl get pod -l app=example\nNAME                                                              READY   STATUS    RESTARTS   AGE\nexample-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6-6f8fd8669ns9rq   1/1     Running   0          4m24s\nexample-np45a10e0d15114bbfa747ad0f02ede77f-pvpv6-6f8fd8669sn92q   1/1     Running   0          4m24s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4f7c967   1/1     Running   0          4m24s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4fgw977   1/1     Running   0          4m24s\nexample-np93d46c5a4aa24702bb1d12b1641d0e43-fr25p-6fcf7db4fnlvnl   1/1     Running   0          4m24s\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(i,{...e})}):i(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var t=a(96540);const p={},s=t.createContext(p);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);