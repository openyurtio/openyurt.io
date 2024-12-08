"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[24384],{87521:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"installation/openyurt-experience-center/kubeconfig","title":"How to use `kubeconfig` to experience OpenYurt capabilities","description":"This document will describe how to experience the multi-domain workload manage capability of OpenYurt through kubeconfig provided by Experience Center.","source":"@site/versioned_docs/version-v1.3/installation/openyurt-experience-center/kubeconfig.md","sourceDirName":"installation/openyurt-experience-center","slug":"/installation/openyurt-experience-center/kubeconfig","permalink":"/docs/v1.3/installation/openyurt-experience-center/kubeconfig","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/kubeconfig.md","tags":[],"version":"v1.3","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1733695371000,"frontMatter":{"title":"How to use `kubeconfig` to experience OpenYurt capabilities"},"sidebar":"docs","previous":{"title":"How to play with the web console","permalink":"/docs/v1.3/installation/openyurt-experience-center/web_console"},"next":{"title":"Architecture","permalink":"/docs/v1.3/core-concepts/architecture"}}');var i=o(74848),s=o(28453);const c={title:"How to use `kubeconfig` to experience OpenYurt capabilities"},a=void 0,r={},d=[{value:"Configure <code>kubeconfig</code> locally",id:"configure-kubeconfig-locally",level:2},{value:"Experience OpenYurt&#39;s multi-domain workload manage capability",id:"experience-openyurts-multi-domain-workload-manage-capability",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This document will describe how to experience the multi-domain workload manage capability of OpenYurt through kubeconfig provided by Experience Center."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"configure-kubeconfig-locally",children:["Configure ",(0,i.jsx)(n.code,{children:"kubeconfig"})," locally"]}),"\n",(0,i.jsxs)(n.p,{children:["You need to configure ",(0,i.jsx)(n.code,{children:"kubeconfig"})," locally before you can manage the cluster via ",(0,i.jsx)(n.code,{children:"kubectl"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Copy ",(0,i.jsx)(n.code,{children:"kubeconfig"}),' information in "Connection Information" tab under "Cluster Information" page']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(36659).A+"",width:"1410",height:"793"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Save the copied ",(0,i.jsx)(n.code,{children:"kubeconfig"})," information to the local ",(0,i.jsx)(n.code,{children:"~/.kube/config"})," file"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(38726).A+"",width:"1270",height:"793"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["If the configuration has been all set, you can use ",(0,i.jsx)(n.code,{children:"kubectl"})," to manage the cluster"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(34341).A+"",width:"1482",height:"787"})}),"\n",(0,i.jsx)(n.h2,{id:"experience-openyurts-multi-domain-workload-manage-capability",children:"Experience OpenYurt's multi-domain workload manage capability"}),"\n",(0,i.jsx)(n.p,{children:"OpenYurt is designed for edge computing scenarios, allowing users to group workloads into different units distributed in different geographical locations. Here is a simple scenario to experience the multi-domain workload manage capability of OpenYurt."}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have two edge-side nodes, node1 and node2, in different locations (e.g. node1 in Hangzhou and node2 in Shanghai). We want to deploy applications to the Hangzhou node but not to the Shanghai node. OpenYurt does this with two resources, ",(0,i.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md",children:"NodePool"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md",children:"YurtAppSet"})," (previous UnitedDeployment) to achieve this capability."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Suppose we have two nodes, node1 and node2, connected to OpenYurt cluster (Don't know how to join nodes? Please refer to the documentation: ",(0,i.jsx)(n.a,{href:"/docs/v1.3/installation/openyurt-experience-center/web_console",children:"How to use web_console"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(4229).A+"",width:"1410",height:"653"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Create a NodePool resource by ",(0,i.jsx)(n.code,{children:"kubectl"})," on the local node where ",(0,i.jsx)(n.code,{children:"kubeconfig"})," is configured, and add node1 to that NodePool"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# create nodepool hangzhou\ncat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\nEOF\n\n\n# add node1 to nodepool\nkubectl label node node1 apps.openyurt.io/desired-nodepool=hangzhou\n\n# display nodepool\nkubectl get nodepool\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(73505).A+"",width:"1450",height:"788"})}),"\n",(0,i.jsxs)(n.p,{children:["The corresponding NodePool information can be seen in browser page.\n",(0,i.jsx)(n.img,{src:o(46235).A+"",width:"1521",height:"1022"})]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Create workload resources via ",(0,i.jsx)(n.code,{children:"kubectl"})," and only deploy the application to hangzhou's node pool via YurtAppSet"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppSet\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: yas-test\n  namespace: "183xxxxxxxx"  # Notice: change this with your own namespace\nspec:\n  selector:\n    matchLabels:\n      app: yas-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: yas-test\n      namespace: "183xxxxxxxx"  # Notice: change this with your own namespace\n      spec:\n        template:\n          metadata:\n            labels:\n              app: yas-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 1\n  revisionHistoryLimit: 5\nEOF\n\n# display the resources\nkubectl get node\nkubectl get pod -A\nkubectl get nodepool\n\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:o(45569).A+"",width:"1270",height:"793"}),"\n",(0,i.jsx)(n.img,{src:o(37745).A+"",width:"1270",height:"793"})]}),"\n",(0,i.jsx)(n.p,{children:"After successful creation, you can see on the browser page that the corresponding Pod is assigned to node1 in hangzhou node pool."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(30870).A+"",width:"1450",height:"496"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},38726:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/cmd_kubeconfig-7205e32b25fee4f3d652c57d7f2c1172.png"},34341:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/cmd_kubectl-f15c995e6491a32509dc7efc020cd99b.png"},73505:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/cmd_np-a048f63d03de469acd0bc064675d8425.png"},45569:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/cmd_ud_create-5c3f62f405528cce9d2f5989e1c27f00.png"},37745:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/cmd_ud_get-6074a5b02d77faae825438898c283d77.png"},36659:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},4229:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/web_node-0f4d1e382ea20f2775f60844d2c17c91.png"},46235:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/web_np-dce0ab4bedba05c3331286ace37ac673.png"},30870:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/web_ud-975b925ce96f411a937525174d39d35c.png"},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var t=o(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);