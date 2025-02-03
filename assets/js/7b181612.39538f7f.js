"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[74399],{63884:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"installation/kcm-prepare","title":"Kube-Controller-Manager Adjustment","description":"1.Background","source":"@site/versioned_docs/version-v1.4/installation/kcm-prepare.md","sourceDirName":"installation","slug":"/installation/kcm-prepare","permalink":"/docs/installation/kcm-prepare","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/kcm-prepare.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1738554072000,"frontMatter":{"title":"Kube-Controller-Manager Adjustment"}}');var r=o(74848),l=o(28453);const c={title:"Kube-Controller-Manager Adjustment"},a=void 0,i={},s=[{value:"1.Background",id:"1background",level:2},{value:"2. Disable nodelifecycle controller",id:"2-disable-nodelifecycle-controller",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1background",children:"1.Background"}),"\n",(0,r.jsxs)(n.p,{children:["In the cloud-edge collaboration scenario, the edge node is connected to the central control plane through the public network, and the network connection may be unstable. The k8s original node life cycle management logic is not suitable for this unstable network condition.\nOpenYurt uses a custom ",(0,r.jsx)(n.code,{children:"nodelifecycle"})," controller to manage the node's life cycle, so we need to disable the native ",(0,r.jsx)(n.code,{children:"nodelifecycle"})," controller in Kube-Controller-Manager to avoid conflicts."]}),"\n",(0,r.jsx)(n.h3,{id:"2-disable-nodelifecycle-controller",children:"2. Disable nodelifecycle controller"}),"\n",(0,r.jsxs)(n.p,{children:["We can adjust the ",(0,r.jsx)(n.code,{children:"--controllers"})," configurations of ",(0,r.jsx)(n.code,{children:"kube-controller-manager"})," to disable ",(0,r.jsx)(n.code,{children:"nodelifecycle"})," controller\u3002If the original configuration is like ",(0,r.jsx)(n.code,{children:"--controllers=*,bootstrapsigner,tokencleaner"}),"\uff0cwe can adjust it to ",(0,r.jsx)(n.code,{children:"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"})," to achieve this\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"kube-controller-manager"})," is deployd as static pod at master node\uff0cwe can modify the file ",(0,r.jsx)(n.code,{children:"/etc/kubernetes/manifests/kube-controller-manager.yaml"})," to achieve this\u3002After modification\uff0c",(0,r.jsx)(n.code,{children:"kube-controller-manager"})," will be restarted automatically\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ vi /etc/kubernetes/manifests/kube-controller-manager.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  containers:\n  - command:\n    - kube-controller-manager\n    - --allocate-node-cidrs=true\n    - --authentication-kubeconfig=/etc/kubernetes/controller-manager.conf\n    ...\n    - --controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner #disable nodelifecycle controller\n    ...\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>a});var t=o(96540);const r={},l=t.createContext(r);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);