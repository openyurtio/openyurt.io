"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[24265],{32021:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>i,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-manuals/node-pool-management/node-pool-management","title":"\u8282\u70b9\u6c60\u7ba1\u7406","description":"1\uff09\u5b89\u88c5 Yurt-Manager \u7ec4\u4ef6","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/node-pool-management/node-pool-management.md","sourceDirName":"user-manuals/node-pool-management","slug":"/user-manuals/node-pool-management/","permalink":"/zh/docs/next/user-manuals/node-pool-management/","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/node-pool-management/node-pool-management.md","tags":[],"version":"current","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"\u8282\u70b9\u6c60\u7ba1\u7406"}}');var a=o(74848),s=o(28453);const l={title:"\u8282\u70b9\u6c60\u7ba1\u7406"},r=void 0,u={},d=[{value:"1\uff09\u5b89\u88c5 Yurt-Manager \u7ec4\u4ef6",id:"1\u5b89\u88c5-yurt-manager-\u7ec4\u4ef6",level:3},{value:"2\uff09\u8282\u70b9\u6c60\u4f7f\u7528Example",id:"2\u8282\u70b9\u6c60\u4f7f\u7528example",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"1\u5b89\u88c5-yurt-manager-\u7ec4\u4ef6",children:"1\uff09\u5b89\u88c5 Yurt-Manager \u7ec4\u4ef6"}),"\n",(0,a.jsxs)(n.p,{children:["nodepool controller \u96c6\u6210\u5728 Yurt-Manager \u7ec4\u4ef6\u4e2d\uff0c\u4f7f\u7528 NodePool \u4e4b\u524d\u9700\u8981\u5148\u5b89\u88c5\u5b83\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003 \u3010\u90e8\u7f72 OpenYurt](",(0,a.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components"}),") \u4e86\u89e3\u8be6\u7ec6\u64cd\u4f5c\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"2\u8282\u70b9\u6c60\u4f7f\u7528example",children:"2\uff09\u8282\u70b9\u6c60\u4f7f\u7528Example"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["\u81eaOpenYurt v1.4.0\u7248\u672c\u8d77\uff0c\u5efa\u8bae\u4f7f\u7528",(0,a.jsx)(n.code,{children:"apps.openyurt.io/v1beta1"})," \u7248\u672c\u7684NodePool\u8d44\u6e90\u3002"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u4e91\u7aef\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u521b\u5efa\u4e00\u4e2a\u4e3b\u673a\u7f51\u7edc\u6a21\u5f0f\u7684\u8fb9\u7f18\u8282\u70b9\u6c60\uff0c\u540c\u65f6\u5305\u542bAnnotation, Label, Taint\u7b49\u914d\u7f6e"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  hostNetwork: true\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n  taints:\n  - key: apps.openyurt.io/example\n    value: test-hangzhou\n    effect: NoSchedule\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u4f7f\u7528kubectl get\u8282\u70b9\u6c60\u4fe1\u606f"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get np \n\nNAME       TYPE   READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud                               35s\nhangzhou   Edge                                28s\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5c06\u8282\u70b9\u52a0\u5165\u5230\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6dfb\u52a0\u4e91\u7aef\u8282\u70b9Cloud node\u5230\u5317\u4eac\u8282\u70b9\u6c60\uff0c\u4f60\u53ea\u9700\u5c06\u6b64\u8282\u70b9\u6309\u5982\u4e0b\u65b9\u5f0f\u6253\u4e0alabel: apps.openyurt.io/nodepool=beijing \u5373\u53ef"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node master apps.openyurt.io/nodepool=beijing\n\nmaster labeled\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u4f60\u7684\u8fb9\u7f18\u8282\u70b9Edge node\u6dfb\u52a0\u5230\u676d\u5dde\u8282\u70b9\u6c60\uff0c\u65b9\u6cd5\u548c\u4e0a\u9762\u7c7b\u4f3c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node k8s-node1 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node1 labeled\n\n$ kubectl label node k8s-node2 apps.openyurt.io/nodepool=hangzhou\n\nk8s-node2 labeled\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u9a8c\u8bc1\u8282\u70b9\u5df2\u7ecf\u52a0\u5165\u8282\u70b9\u6c60"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53Edge node\u6210\u529f\u52a0\u5165\u5230\u8282\u70b9\u6c60\uff0c\u8282\u70b9\u7684\u914d\u7f6e\u4fe1\u606f\u9664\u4e86\u8282\u70b9\u6c60Spec\u4e2d\u7684\u6240\u6709\u5185\u5bb9\uff0c\u540c\u65f6\uff0c\u8282\u70b9\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u6807\u7b7e\uff1a",(0,a.jsx)(n.code,{children:"nodepool.openyurt.io/hostnetwork"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ kubectl get node {Your_Node_Name} -o yaml \n\nFor Example:\n$ kubectl get node k8s-node1 -o yaml\n\napiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock\n    node.alpha.kubernetes.io/ttl: "0"\n    node.beta.alibabacloud.com/autonomy: "true"\n    volumes.kubernetes.io/controller-managed-attach-detach: "true"\n  creationTimestamp: "2021-04-14T12:17:39Z"\n  labels:\n    nodepool.openyurt.io/hostnetwork: "true"\n    apps.openyurt.io/example: test-hangzhou\n    apps.openyurt.io/nodepool: hangzhou\n    beta.kubernetes.io/arch: amd64\n    beta.kubernetes.io/os: linux\n    kubernetes.io/arch: amd64\n    kubernetes.io/hostname: k8s-node1\n    kubernetes.io/os: linux\n    openyurt.io/is-edge-worker: "true"\n  name: k8s-node1\n  resourceVersion: "1244431"\n  selfLink: /api/v1/nodes/k8s-node1\n  uid: 1323f90b-acf3-4443-a7dc-7a54c212506c\nspec:\n  podCIDR: 192.168.1.0/24\n  podCIDRs:\n  - 192.168.1.0/24\n  taints:\n  - effect: NoSchedule\n    key: apps.openyurt.io/example\n    value: test-hangzhou\nstatus:\n***\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var t=o(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);