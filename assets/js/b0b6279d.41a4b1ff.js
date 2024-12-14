"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[92339],{68841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"user-manuals/workload/uniteddeployment","title":"UnitedDeployment","description":"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0 \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002","source":"@site/versioned_docs/version-v0.6.0/user-manuals/workload/uniteddeployment.md","sourceDirName":"user-manuals/workload","slug":"/user-manuals/workload/uniteddeployment","permalink":"/docs/v0.6.0/user-manuals/workload/uniteddeployment","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/uniteddeployment.md","tags":[],"version":"v0.6.0","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1734214326000,"frontMatter":{"title":"UnitedDeployment"},"sidebar":"docs","previous":{"title":"Node Pool Management","permalink":"/docs/v0.6.0/user-manuals/workload/node-pool-management"},"next":{"title":"YurtAppDaemon","permalink":"/docs/v0.6.0/user-manuals/workload/yurt-app-daemon"}}');var l=t(74848),a=t(28453);const s={title:"UnitedDeployment"},d=void 0,i={},p=[{value:"UnitedDeployment\u7528\u6237\u624b\u518c",id:"uniteddeployment\u7528\u6237\u624b\u518c",level:2},{value:"\u521b\u5efaUnitedDeployment",id:"\u521b\u5efauniteddeployment",level:3},{value:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",level:3},{value:"\u4e3aUnitedDeployment\u6dfb\u52a0patch\u529f\u80fd",id:"\u4e3auniteddeployment\u6dfb\u52a0patch\u529f\u80fd",level:3}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u5728",(0,l.jsx)(n.a,{href:"/docs/v0.6.0/user-manuals/workload/node-pool-management",children:"\u4e0a\u4e00\u7bc7\u6587\u7ae0"})," \u4e2d\u6211\u4eec\u4ecb\u7ecd\u4e86\u8282\u70b9\u6c60\u7684\u4f7f\u7528\uff0c\u4e3b\u8981\u662f\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u7ba1\u7406\uff0c\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u5f00\u53d1\u4e86\u57fa\u4e8e\u8282\u70b9\u6c60\u7684\u5e94\u7528\u5355\u5143\u5316\u90e8\u7f72\u80fd\u529b\uff0c\u63d0\u9ad8\u7528\u6237\u7684\u8fd0\u7ef4\u6548\u7387\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u5c55\u793ayurt-app-manager\u5982\u4f55\u5e2e\u52a9\u7528\u6237\u7ba1\u7406\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u57fa\u4e8e\u539f\u751fkubernetes\u642d\u5efa\u8d77\u6765\u7684OpenYurt\u96c6\u7fa4\uff0c\u4e14\u81f3\u5c11\u6709\u4e24\u4e2a\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"uniteddeployment\u7528\u6237\u624b\u518c",children:"UnitedDeployment\u7528\u6237\u624b\u518c"}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efauniteddeployment",children:"\u521b\u5efaUnitedDeployment"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5229\u7528deployment template\u521b\u5efa\u4e00\u4e2aUnitedDeployment"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: ud-test\nspec:\n  selector:\n    matchLabels:\n      app: ud-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: ud-test\n      spec:\n        template:\n          metadata:\n            labels:\n              app: ud-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n      - effect: NoSchedule\n        key: apps.openyurt.io/example\n        operator: Exists\n  revisionHistoryLimit: 5 \nEOF\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u67e5\u770bUnitedDeployment"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get ud\n\nNAME      READY   WORKLOADTEMPLATE   AGE\nud-test   3       Deployment         120m\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment",children:"\u68c0\u67e5\u7531yurt-app-manager\u7ec4\u4ef6\u521b\u5efa\u7684deployment"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deploy\n\nNAME                     READY   UP-TO-DATE   AVAILABLE   AGE\nud-test-beijing-fp58z    1/1     1            1           122m\nud-test-hangzhou-xv454   2/2     2            2           122m\n$ kubectl get pod -l app=ud-test\n\n  NAME                                      READY   STATUS    RESTARTS   AGE\nud-test-beijing-fp58z-787d5b6b54-g4jk6    1/1     Running   0          100m\nud-test-hangzhou-xv454-5cd9c4f6b5-b5tsr   1/1     Running   0          124m\nud-test-hangzhou-xv454-5cd9c4f6b5-gmbgp   1/1     Running   0          124m\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u4e3auniteddeployment\u6dfb\u52a0patch\u529f\u80fd",children:"\u4e3aUnitedDeployment\u6dfb\u52a0patch\u529f\u80fd"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u6587\u4ef6uniteddeployment_deployment_test.yaml\u4e2d\u6dfb\u52a0patch\u5b57\u6bb5\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u6587\u4ef636\u523041\u884c"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get ud ud-test -o yaml\n   \n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n      patch:\n        spec:\n          template:\n            spec:\n              containers:\n                - name: nginx\n                  image: nginx:1.19.0\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n  *** \n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"patch\u80fd\u591f\u4f7f\u5f97\u7531UnitedDeployment\u521b\u5efa\u7684\u4f4d\u4e8e\u5317\u4eac\u8282\u70b9\u6c60\u7684deployment\u548cpod\u4e2dnginx\u955c\u50cf\u7248\u672c\u4e3a1.19.0\uff0c\u800c\u5176\u4ed6\u5730\u533a\u7684nginx\u955c\u50cf\u7248\u672c\u4e3a1.19.3\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deploy ud-test-beijing-fp58z -o yaml\n\ncontainers:\n  - image: nginx:1.19.0\n$ kubectl get deploy ud-test-hangzhou-xv454 -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664\u540e\uff0c\u6240\u6709\u7531UnitedDeployment\u521b\u5efa\u7684pod\u53c8\u6062\u590d\u4f7f\u7528\u76f8\u540c\u7684\u955c\u50cfnginx1.19.3"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod ud-test-beijing-fp58z-787d5b6b54-g4jk6 -o yaml\n\ncontainers:\n  - image: nginx:1.19.3\n$ kubectl get pod ud-test-hangzhou-xv454-5cd9c4f6b5-b5tsr -o yaml\ncontainers:\n  - image: nginx:1.19.3\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7ed3\u8bba\uff1aPatch\u529f\u80fd\u89e3\u51b3\u4e86nodepool\u5355\u5c5e\u6027\u7684\u5347\u7ea7\u548c\u5e94\u7528\u5b8c\u6574\u53d1\u5e03\u3002"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(96540);const l={},a=o.createContext(l);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);