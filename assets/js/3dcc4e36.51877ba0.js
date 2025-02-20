"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[54318],{32828:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"user-manuals/workload/node-pool-management","title":"Node Pool Management","description":"1\uff09Install Yurt-App-Manager Components","source":"@site/versioned_docs/version-v1.2/user-manuals/workload/node-pool-management.md","sourceDirName":"user-manuals/workload","slug":"/user-manuals/workload/node-pool-management","permalink":"/docs/v1.2/user-manuals/workload/node-pool-management","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/node-pool-management.md","tags":[],"version":"v1.2","lastUpdatedBy":"tnsimon","lastUpdatedAt":1740095325000,"frontMatter":{"title":"Node Pool Management"},"sidebar":"docs","previous":{"title":"DaemonSet Upgrade Model","permalink":"/docs/v1.2/user-manuals/workload/daemon-pod-updater"},"next":{"title":"YurtAppSet","permalink":"/docs/v1.2/user-manuals/workload/yurt-app-set"}}');var l=o(74848),t=o(28453);const s={title:"Node Pool Management"},d=void 0,r={},p=[{value:"1\uff09Install Yurt-App-Manager Components",id:"1install-yurt-app-manager-components",level:3},{value:"2\uff09Example of Nodepool usage",id:"2example-of-nodepool-usage",level:3}];function i(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:""}),"\n",(0,l.jsx)(n.h3,{id:"1install-yurt-app-manager-components",children:"1\uff09Install Yurt-App-Manager Components"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cd  yurt-app-manager\n$ kubectl apply -f config/setup/all_in_one.yaml\n"})}),"\n",(0,l.jsx)(n.p,{children:"Check whether all the Yurt-App-Manager components are installed successfully:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n kube-system |grep yurt-app-manager\n"})}),"\n",(0,l.jsx)(n.h3,{id:"2example-of-nodepool-usage",children:"2\uff09Example of Nodepool usage"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create a nodepool"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n  taints:\n  - key: apps.openyurt.io/example\n    value: test-hangzhou\n    effect: NoSchedule\nEOF\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Get the nodepool information"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get np \n\nNAME       TYPE   READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud                               35s\nhangzhou   Edge                                28s\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Add node to nodepool"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:'Add a cloud node to nodepool "beijing", you only need to label the node as below:'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=beijing\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"For example:\n$ kubectl label node master apps.openyurt.io/desired-nodepool=beijing\n\nmaster labeled\n"})}),"\n",(0,l.jsx)(n.p,{children:'Similarly, you can add the edge nodes to nodepool "hangzhou":'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=hangzhou\nFor example:\n$ kubectl label node k8s-node1 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node1 labeled\n\n$ kubectl label node k8s-node2 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node2 labeled\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Verify whether a node is added to a nodepool:"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"When an edge node is added to a nodepool, all the annotations/labels of the nodepool are added to the node, together with a new label: apps.openyurt.io/nodepool"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ kubectl get node {Your_Node_Name} -o yaml \n\nFor Example:\n$ kubectl get node k8s-node1 -o yaml\n\napiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock\n    node.alpha.kubernetes.io/ttl: "0"\n    node.beta.alibabacloud.com/autonomy: "true"\n    volumes.kubernetes.io/controller-managed-attach-detach: "true"\n  creationTimestamp: "2021-04-14T12:17:39Z"\n  labels:\n    apps.openyurt.io/desired-nodepool: hangzhou\n    apps.openyurt.io/example: test-hangzhou\n    apps.openyurt.io/nodepool: hangzhou\n    beta.kubernetes.io/arch: amd64\n    beta.kubernetes.io/os: linux\n    kubernetes.io/arch: amd64\n    kubernetes.io/hostname: k8s-node1\n    kubernetes.io/os: linux\n    openyurt.io/is-edge-worker: "true"\n  name: k8s-node1\n  resourceVersion: "1244431"\n  selfLink: /api/v1/nodes/k8s-node1\n  uid: 1323f90b-acf3-4443-a7dc-7a54c212506c\nspec:\n  podCIDR: 192.168.1.0/24\n  podCIDRs:\n  - 192.168.1.0/24\n  taints:\n  - effect: NoSchedule\n    key: apps.openyurt.io/example\n    value: test-hangzhou\nstatus:\n***\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>d});var a=o(96540);const l={},t=a.createContext(l);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);