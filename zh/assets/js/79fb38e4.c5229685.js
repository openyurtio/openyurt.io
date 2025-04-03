"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[72761],{8816:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"user-manuals/workload/yurt-app-set","title":"YurtAppSet","description":"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0 \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/workload/yurt-app-set.md","sourceDirName":"user-manuals/workload","slug":"/user-manuals/workload/yurt-app-set","permalink":"/zh/docs/v1.2/user-manuals/workload/yurt-app-set","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-set.md","tags":[],"version":"v1.2","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"YurtAppSet"},"sidebar":"docs","previous":{"title":"\u8282\u70b9\u6c60\u7ba1\u7406","permalink":"/zh/docs/v1.2/user-manuals/workload/node-pool-management"},"next":{"title":"YurtAppDaemon","permalink":"/zh/docs/v1.2/user-manuals/workload/yurt-app-daemon"}}');var a=t(74848),o=t(28453);const l={title:"YurtAppSet"},r=void 0,p={},i=[{value:"YurtAppSet\u7528\u6237\u624b\u518c",id:"yurtappset\u7528\u6237\u624b\u518c",level:2},{value:"\u521b\u5efaYurtAppSet",id:"\u521b\u5efayurtappset",level:3},{value:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",level:3},{value:"\u4e3aYurtAppSet\u6dfb\u52a0patch\u529f\u80fd",id:"\u4e3ayurtappset\u6dfb\u52a0patch\u529f\u80fd",level:3}];function c(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["\u5728",(0,a.jsx)(e.a,{href:"/zh/docs/v1.2/user-manuals/workload/node-pool-management",children:"\u4e0a\u4e00\u7bc7\u6587\u7ae0"})," \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5c55\u793ayurt-app-manager\u5982\u4f55\u5e2e\u52a9\u7528\u6237\u7ba1\u7406\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u57fa\u4e8e\u539f\u751fkubernetes\u642d\u5efa\u8d77\u6765\u7684OpenYurt\u96c6\u7fa4\uff0c\u4e14\u81f3\u5c11\u6709\u4e24\u4e2a\u8282\u70b9\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"yurtappset\u7528\u6237\u624b\u518c",children:"YurtAppSet\u7528\u6237\u624b\u518c"}),"\n",(0,a.jsx)(e.h3,{id:"\u521b\u5efayurtappset",children:"\u521b\u5efaYurtAppSet"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u901a\u8fc7",(0,a.jsx)(e.code,{children:"yurtappset_test.yaml"}),"\u521b\u5efa\u4e00\u4e2aYurtAppSet"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:'apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppSet\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: yas-test\nspec:\n  selector:\n    matchLabels:\n      app: yas-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: yas-test\n      spec:\n        template:\n          metadata:\n            labels:\n              app: yas-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n      - effect: NoSchedule\n        key: apps.openyurt.io/example\n        operator: Exists\n  revisionHistoryLimit: 5 \n'})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u67e5\u770bYurtAppSet"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"$ kubectl get yas\n\nNAME       READY   WORKLOADTEMPLATE   AGE\nyas-test   3       Deployment         43s\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",children:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"$ kubectl get deploy\n\nNAME                      READY   UP-TO-DATE   AVAILABLE   AGE\nyas-test-beijing-k5st4    1/1     1            1           54s\nyas-test-hangzhou-2jkj5   2/2     2            2           54s\n$ kubectl get pod -l app=yas-test\n\nNAME                                       READY   STATUS    RESTARTS   AGE\nyas-test-beijing-k5st4-56bc98cc7d-h7h86    1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-8mvn8   1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-vx85t   1/1     Running   0          72s\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u4e3ayurtappset\u6dfb\u52a0patch\u529f\u80fd",children:"\u4e3aYurtAppSet\u6dfb\u52a0patch\u529f\u80fd"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u5728\u6587\u4ef6yurtappset_test.yaml\u4e2d\u6dfb\u52a0patch\u5b57\u6bb5\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u6587\u4ef636\u523041\u884c"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"$ kubectl get yas yas-test -o yaml\n   \n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n      patch:\n        spec:\n          template:\n            spec:\n              containers:\n                - name: nginx\n                  image: nginx:1.19.0\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n  *** \n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"patch\u80fd\u591f\u4f7f\u5f97\u7531YurtAppSet\u521b\u5efa\u7684\u4f4d\u4e8e\u5317\u4eac\u8282\u70b9\u6c60\u7684deployment\u548cpod\u4e2dnginx\u955c\u50cf\u7248\u672c\u4e3a1.19.0\uff0c\u800c\u5176\u4ed6\u5730\u533a\u7684nginx\u955c\u50cf\u7248\u672c\u4e3a1.19.3\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"$ kubectl get deploy yas-test-beijing-k5st4 -o yaml\n\ncontainers:\n  - image: nginx:1.19.0\n$ kubectl get deploy yas-test-hangzhou-2jkj5 -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u5220\u9664\u540e\uff0c\u6240\u6709\u7531YurtAppSet\u521b\u5efa\u7684pod\u53c8\u6062\u590d\u4f7f\u7528\u76f8\u540c\u7684\u955c\u50cfnginx1.19.3"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"$ kubectl get pod yas-test-beijing-k5st4-974b6958c-t2kfn -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n$ kubectl get pod yas-test-hangzhou-2jkj5-64588c484b-8mvn8 -o yaml\ncontainers:\n  - image: nginx:1.19.3\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u7ed3\u8bba\uff1aPatch\u529f\u80fd\u89e3\u51b3\u4e86nodepool\u5355\u5c5e\u6027\u7684\u5347\u7ea7\u548c\u5e94\u7528\u5b8c\u6574\u53d1\u5e03\u3002"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function l(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);