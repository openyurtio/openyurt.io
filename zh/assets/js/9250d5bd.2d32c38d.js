"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[2710],{91969:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>i,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=a(85893),l=a(11151);const s={title:"\u8282\u70b9\u6c60\u7ba1\u7406"},t=void 0,r={id:"user-manuals/workload/node-pool-management",title:"\u8282\u70b9\u6c60\u7ba1\u7406",description:"1\uff09\u5b89\u88c5Yurt-App-Manager\u7ec4\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/user-manuals/workload/node-pool-management.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/node-pool-management",permalink:"/zh/docs/v0.5.0/user-manuals/workload/node-pool-management",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/node-pool-management.md",tags:[],version:"v0.5.0",lastUpdatedBy:"wesleysu",lastUpdatedAt:1710812587,formattedLastUpdatedAt:"2024\u5e743\u670819\u65e5",frontMatter:{title:"\u8282\u70b9\u6c60\u7ba1\u7406"},sidebar:"docs",previous:{title:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8",permalink:"/zh/docs/v0.5.0/user-manuals/storage/edge-local-storage"},next:{title:"UnitedDeployment",permalink:"/zh/docs/v0.5.0/user-manuals/workload/uniteddeployment"}},d={},p=[{value:"1\uff09\u5b89\u88c5Yurt-App-Manager\u7ec4\u4ef6",id:"1\u5b89\u88c5yurt-app-manager\u7ec4\u4ef6",level:3},{value:"2\uff09\u8282\u70b9\u6c60\u4f7f\u7528Example",id:"2\u8282\u70b9\u6c60\u4f7f\u7528example",level:3}];function u(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:""}),"\n",(0,o.jsx)(n.h3,{id:"1\u5b89\u88c5yurt-app-manager\u7ec4\u4ef6",children:"1\uff09\u5b89\u88c5Yurt-App-Manager\u7ec4\u4ef6"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ cd  yurt-app-manager\n$ kubectl apply -f config/setup/all_in_one.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u7b49\u5f85Yurt-App-Manager\u7ec4\u4ef6\u5b89\u88c5\u6210\u529f\uff0c\u9a8c\u8bc1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n kube-system |grep yurt-app-manager\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2\u8282\u70b9\u6c60\u4f7f\u7528example",children:"2\uff09\u8282\u70b9\u6c60\u4f7f\u7528Example"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n  taints:\n  - key: apps.openyurt.io/example\n    value: test-hangzhou\n    effect: NoSchedule\nEOF\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u4f7f\u7528kubectl get\u8282\u70b9\u6c60\u4fe1\u606f"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get np \n\nNAME       TYPE   READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud                               35s\nhangzhou   Edge                                28s\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5c06\u8282\u70b9\u52a0\u5165\u5230\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u6dfb\u52a0\u4e91\u7aef\u8282\u70b9Cloud node\u5230\u5317\u4eac\u8282\u70b9\u6c60\uff0c\u4f60\u53ea\u9700\u5c06\u6b64\u8282\u70b9\u6309\u5982\u4e0b\u65b9\u5f0f\u6253\u4e0alabel\u5373\u53ef"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=beijing\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"For example:\n$ kubectl label node master apps.openyurt.io/desired-nodepool=beijing\n\nmaster labeled\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u4f60\u7684\u8fb9\u7f18\u8282\u70b9Edge node\u6dfb\u52a0\u5230\u676d\u5dde\u8282\u70b9\u6c60\uff0c\u65b9\u6cd5\u548c\u4e0a\u9762\u7c7b\u4f3c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=hangzhou\nFor example:\n$ kubectl label node k8s-node1 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node1 labeled\n\n$ kubectl label node k8s-node2 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node2 labeled\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u9a8c\u8bc1\u8282\u70b9\u5df2\u7ecf\u52a0\u5165\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5f53Edge node\u6210\u529f\u52a0\u5165\u5230\u8282\u70b9\u6c60\uff0c\u8282\u70b9\u7684\u914d\u7f6e\u4fe1\u606f\u9664\u4e86\u8282\u70b9\u6c60Spec\u4e2d\u7684\u6240\u6709\u5185\u5bb9\uff0c\u540c\u65f6\uff0c\u8282\u70b9\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u6807\u7b7e\uff1aapps.openyurt.io/nodepool\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'$ kubectl get node {Your_Node_Name} -o yaml \n\nFor Example:\n$ kubectl get node k8s-node1 -o yaml\n\napiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock\n    node.alpha.kubernetes.io/ttl: "0"\n    node.beta.alibabacloud.com/autonomy: "true"\n    volumes.kubernetes.io/controller-managed-attach-detach: "true"\n  creationTimestamp: "2021-04-14T12:17:39Z"\n  labels:\n    apps.openyurt.io/desired-nodepool: hangzhou\n    apps.openyurt.io/example: test-hangzhou\n    apps.openyurt.io/nodepool: hangzhou\n    beta.kubernetes.io/arch: amd64\n    beta.kubernetes.io/os: linux\n    kubernetes.io/arch: amd64\n    kubernetes.io/hostname: k8s-node1\n    kubernetes.io/os: linux\n    openyurt.io/is-edge-worker: "true"\n  name: k8s-node1\n  resourceVersion: "1244431"\n  selfLink: /api/v1/nodes/k8s-node1\n  uid: 1323f90b-acf3-4443-a7dc-7a54c212506c\nspec:\n  podCIDR: 192.168.1.0/24\n  podCIDRs:\n  - 192.168.1.0/24\n  taints:\n  - effect: NoSchedule\n    key: apps.openyurt.io/example\n    value: test-hangzhou\nstatus:\n***\n'})})]})}function i(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,a)=>{a.d(n,{a:()=>t});var o=a(67294);const l={},s=o.createContext(l);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);