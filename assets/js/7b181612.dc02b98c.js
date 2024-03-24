"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[89573],{38975:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var t=o(85893),r=o(11151);const l={title:"Kube-Controller-Manager Adjustment"},c=void 0,a={id:"installation/kcm-prepare",title:"Kube-Controller-Manager Adjustment",description:"1.Background",source:"@site/versioned_docs/version-v1.4/installation/kcm-prepare.md",sourceDirName:"installation",slug:"/installation/kcm-prepare",permalink:"/docs/installation/kcm-prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/kcm-prepare.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1711267183,formattedLastUpdatedAt:"Mar 24, 2024",frontMatter:{title:"Kube-Controller-Manager Adjustment"}},i={},s=[{value:"1.Background",id:"1background",level:2},{value:"2. Disable nodelifecycle controller",id:"2-disable-nodelifecycle-controller",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1background",children:"1.Background"}),"\n",(0,t.jsxs)(n.p,{children:["In the cloud-edge collaboration scenario, the edge node is connected to the central control plane through the public network, and the network connection may be unstable. The k8s original node life cycle management logic is not suitable for this unstable network condition.\nOpenYurt uses a custom ",(0,t.jsx)(n.code,{children:"nodelifecycle"})," controller to manage the node's life cycle, so we need to disable the native ",(0,t.jsx)(n.code,{children:"nodelifecycle"})," controller in Kube-Controller-Manager to avoid conflicts."]}),"\n",(0,t.jsx)(n.h3,{id:"2-disable-nodelifecycle-controller",children:"2. Disable nodelifecycle controller"}),"\n",(0,t.jsxs)(n.p,{children:["We can adjust the ",(0,t.jsx)(n.code,{children:"--controllers"})," configurations of ",(0,t.jsx)(n.code,{children:"kube-controller-manager"})," to disable ",(0,t.jsx)(n.code,{children:"nodelifecycle"})," controller\u3002If the original configuration is like ",(0,t.jsx)(n.code,{children:"--controllers=*,bootstrapsigner,tokencleaner"}),"\uff0cwe can adjust it to ",(0,t.jsx)(n.code,{children:"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"})," to achieve this\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"kube-controller-manager"})," is deployd as static pod at master node\uff0cwe can modify the file ",(0,t.jsx)(n.code,{children:"/etc/kubernetes/manifests/kube-controller-manager.yaml"})," to achieve this\u3002After modification\uff0c",(0,t.jsx)(n.code,{children:"kube-controller-manager"})," will be restarted automatically\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ vi /etc/kubernetes/manifests/kube-controller-manager.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  containers:\n  - command:\n    - kube-controller-manager\n    - --allocate-node-cidrs=true\n    - --authentication-kubeconfig=/etc/kubernetes/controller-manager.conf\n    ...\n    - --controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner #disable nodelifecycle controller\n    ...\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{a:()=>c});var t=o(67294);const r={},l=t.createContext(r);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);