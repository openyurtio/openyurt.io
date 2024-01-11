"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[41229],{88578:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=o(85893),t=o(11151);const l={title:"Node Pool Management"},s=void 0,d={id:"user-manuals/workload/node-pool-management",title:"Node Pool Management",description:"1\uff09Install Yurt-Manager Component",source:"@site/versioned_docs/version-v1.4/user-manuals/workload/node-pool-management.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/node-pool-management",permalink:"/docs/user-manuals/workload/node-pool-management",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/node-pool-management.md",tags:[],version:"v1.4",lastUpdatedBy:"rambohe",lastUpdatedAt:1704942947,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{title:"Node Pool Management"},sidebar:"docs",previous:{title:"DaemonSet Upgrade Model",permalink:"/docs/user-manuals/workload/daemon-pod-updater"},next:{title:"YurtAppSet",permalink:"/docs/user-manuals/workload/yurt-app-set"}},r={},i=[{value:"1\uff09Install Yurt-Manager Component",id:"1install-yurt-manager-component",level:3},{value:"2\uff09Example of Node Pool usage",id:"2example-of-node-pool-usage",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"1install-yurt-manager-component",children:"1\uff09Install Yurt-Manager Component"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"nodepool controller"})," is integrated within ",(0,a.jsx)(n.code,{children:"Yurt-Manager"})," component, and it needs to be installed before using NodePool,\nyou can refer to ",(0,a.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"Deploy OpenYurt"})," for detailed operations."]}),"\n",(0,a.jsx)(n.h3,{id:"2example-of-node-pool-usage",children:"2\uff09Example of Node Pool usage"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Beginning with version v1.4.0 of OpenYurt, the apps.openyurt.io/v1beta1 version of the NodePool resource is the recommended choice for use."})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a nodepool with type=Cloud"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a nodepool with type=Edge and hostNetwork=true, also include Annotation, Label, Taint."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  hostNetwork: true\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n  taints:\n  - key: apps.openyurt.io/example\n    value: test-hangzhou\n    effect: NoSchedule\nEOF\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Get the nodepool information"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get np \n\nNAME       TYPE   READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud                               35s\nhangzhou   Edge                                28s\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Add node to nodepool"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'Add a cloud node to nodepool "beijing", you only need to label the node with label: apps.openyurt.io/nodepool=beijing'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node master apps.openyurt.io/nodepool=beijing\n\nmaster labeled\n"})}),"\n",(0,a.jsx)(n.p,{children:'Similarly, you can add the edge nodes to nodepool "hangzhou":'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node k8s-node1 apps.openyurt.io/nodepool=hangzhou\n\nk8s-node1 labeled\n\n$ kubectl label node k8s-node2 apps.openyurt.io/nodepool=hangzhou\n\nk8s-node2 labeled\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Verify whether a node is added to a nodepool:"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["When an edge node is added to a nodepool, all the annotations/labels of the nodepool are added to the node, together with a new label: ",(0,a.jsx)(n.code,{children:"nodepool.openyurt.io/hostnetwork"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'$ kubectl get node {Your_Node_Name} -o yaml \n\nFor Example:\n$ kubectl get node k8s-node1 -o yaml\n\napiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock\n    node.alpha.kubernetes.io/ttl: "0"\n    node.beta.alibabacloud.com/autonomy: "true"\n    volumes.kubernetes.io/controller-managed-attach-detach: "true"\n  creationTimestamp: "2021-04-14T12:17:39Z"\n  labels:\n    nodepool.openyurt.io/hostnetwork: "true"\n    apps.openyurt.io/example: test-hangzhou\n    apps.openyurt.io/nodepool: hangzhou\n    beta.kubernetes.io/arch: amd64\n    beta.kubernetes.io/os: linux\n    kubernetes.io/arch: amd64\n    kubernetes.io/hostname: k8s-node1\n    kubernetes.io/os: linux\n    openyurt.io/is-edge-worker: "true"\n  name: k8s-node1\n  resourceVersion: "1244431"\n  selfLink: /api/v1/nodes/k8s-node1\n  uid: 1323f90b-acf3-4443-a7dc-7a54c212506c\nspec:\n  podCIDR: 192.168.1.0/24\n  podCIDRs:\n  - 192.168.1.0/24\n  taints:\n  - effect: NoSchedule\n    key: apps.openyurt.io/example\n    value: test-hangzhou\nstatus:\n***\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>s});var a=o(67294);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);