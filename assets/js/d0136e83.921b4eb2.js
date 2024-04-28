"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[89841],{95178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=t(85893),s=t(11151);const o={title:"YurtAppSet"},l=void 0,r={id:"user-manuals/workload/yurt-app-set",title:"YurtAppSet",description:"In the previous article we introduced the use of NodePool, mainly the creation and management of NodePool.",source:"@site/versioned_docs/version-v1.1/user-manuals/workload/yurt-app-set.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-set",permalink:"/docs/v1.1/user-manuals/workload/yurt-app-set",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-set.md",tags:[],version:"v1.1",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1714339484e3,frontMatter:{title:"YurtAppSet"},sidebar:"docs",previous:{title:"Node Pool Management",permalink:"/docs/v1.1/user-manuals/workload/node-pool-management"},next:{title:"YurtAppDaemon",permalink:"/docs/v1.1/user-manuals/workload/yurt-app-daemon"}},i={},p=[{value:"1) Create YurtAppSet",id:"1-create-yurtappset",level:3},{value:"2) Check the deployments created by yurt-app-manager",id:"2-check-the-deployments-created-by-yurt-app-manager",level:3},{value:"3) Add patch to YurtAppSet",id:"3-add-patch-to-yurtappset",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.a,{href:"/docs/v1.1/user-manuals/workload/node-pool-management",children:"the previous article"})," we introduced the use of ",(0,a.jsx)(n.code,{children:"NodePool"}),", mainly the creation and management of ",(0,a.jsx)(n.code,{children:"NodePool"}),".\nFurther, we developed the ability to deploy applications unitized based on ",(0,a.jsx)(n.code,{children:"NodePool"})," to improve the efficiency of users' operations."]}),"\n",(0,a.jsxs)(n.p,{children:["In this article, we will show how ",(0,a.jsx)(n.code,{children:"yurt-app-manager"})," can help users manage their workload. Assume we already have an OpenYurt cluster built on\nnative kubernetes with at least two nodes."]}),"\n",(0,a.jsx)(n.h3,{id:"1-create-yurtappset",children:"1) Create YurtAppSet"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create ",(0,a.jsx)(n.code,{children:"YurtAppSet"})," by ",(0,a.jsx)(n.code,{children:"yurtappset_test.yaml"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppSet\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: yas-test\nspec:\n  selector:\n    matchLabels:\n      app: yas-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: yas-test\n      spec:\n        template:\n          metadata:\n            labels:\n              app: yas-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n      - effect: NoSchedule\n        key: apps.openyurt.io/example\n        operator: Exists\n  revisionHistoryLimit: 5 \n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Check ",(0,a.jsx)(n.code,{children:"YurtAppSet"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get yas\nNAME       READY   WORKLOADTEMPLATE   AGE\nyas-test   3       Deployment         43s\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-check-the-deployments-created-by-yurt-app-manager",children:"2) Check the deployments created by yurt-app-manager"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deploy\nNAME                      READY   UP-TO-DATE   AVAILABLE   AGE\nyas-test-beijing-k5st4    1/1     1            1           54s\nyas-test-hangzhou-2jkj5   2/2     2            2           54s\n\n$ kubectl get pod -l app=yas-test\nNAME                                       READY   STATUS    RESTARTS   AGE\nyas-test-beijing-k5st4-56bc98cc7d-h7h86    1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-8mvn8   1/1     Running   0          72s\nyas-test-hangzhou-2jkj5-64588c484b-vx85t   1/1     Running   0          72s\n"})}),"\n",(0,a.jsx)(n.h3,{id:"3-add-patch-to-yurtappset",children:"3) Add patch to YurtAppSet"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Add the patch field to the file ",(0,a.jsx)(n.code,{children:"yurtappset_test.yaml"})," as follows, lines 36 to 41 of the file"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get yas yas-test -o yaml\n   \n  topology:\n    pools:\n    - name: beijing \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - beijing \n      replicas: 1\n      patch:\n        spec:\n          template:\n            spec:\n              containers:\n                - name: nginx\n                  image: nginx:1.19.0\n    - name: hangzhou \n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou \n      replicas: 2\n      tolerations:\n  *** \n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This updates the nginx image version to 1.19.0 in the deployments and pods in Beijing NodePool, while keeping the nginx image version at 1.19.3 for the other regions"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deploy yas-test-beijing-k5st4 -o yaml\ncontainers:\n  - image: nginx:1.19.0\n\n$ kubectl get deploy yas-test-hangzhou-2jkj5 -o yaml\ncontainers:\n  - image: nginx:1.19.3\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"After removing the patch, all pods created by YurtAppSet revert back to nginx1.19.3"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod yas-test-beijing-k5st4-974b6958c-t2kfn -o yaml\ncontainers:\n  - image: nginx:1.19.3\n\n$ kubectl get pod yas-test-hangzhou-2jkj5-64588c484b-8mvn8 -o yaml\ncontainers:\n  - image: nginx:1.19.3\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Conclusion: Patch solves the upgrade of the NodePool's single attribute and application release."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>l});var a=t(67294);const s={},o=a.createContext(s);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);