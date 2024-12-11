"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[75146],{81489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"core-concepts/architecture","title":"Architecture","description":"Below is the architecture of OpenYurt.","source":"@site/versioned_docs/version-v1.3/core-concepts/architecture.md","sourceDirName":"core-concepts","slug":"/core-concepts/architecture","permalink":"/docs/v1.3/core-concepts/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md","tags":[],"version":"v1.3","lastUpdatedBy":"Cookie","lastUpdatedAt":1733885620000,"frontMatter":{"title":"Architecture"},"sidebar":"docs","previous":{"title":"How to use `kubeconfig` to experience OpenYurt capabilities","permalink":"/docs/v1.3/installation/openyurt-experience-center/kubeconfig"},"next":{"title":"Raven","permalink":"/docs/v1.3/core-concepts/raven"}}');var r=t(74848),i=t(28453);const s={title:"Architecture"},c=void 0,a={},d=[{value:"Node category",id:"node-category",level:3},{value:"Traffic from edge to cloud kube-apiserver",id:"traffic-from-edge-to-cloud-kube-apiserver",level:3},{value:"Traffic in data plane",id:"traffic-in-data-plane",level:3},{value:"OpenYurt Components",id:"openyurt-components",level:3}];function l(e){const n={code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Below is the architecture of OpenYurt."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(71645).A+"",width:"1750",height:"1110"})}),"\n",(0,r.jsx)(n.p,{children:"The blue box represents the original Kubernetes components, and the orange box represents the OpenYurt components."}),"\n",(0,r.jsx)(n.h3,{id:"node-category",children:"Node category"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cloud Node\uff1aThe nodes running in cloud side, connecting to master with cloud intranet. Centralized control plane components are deployed in cloud side. The nodes are labeled with ",(0,r.jsx)(n.code,{children:"openyurt.io/is-edge-worker: false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Edge Node\uff1aThe nodes running in edge side, connecting to master with public internet. They are usually close to edge production environment, and thus contains the mainly edge workloads. The nodes are labeled with ",(0,r.jsx)(n.code,{children:"openyurt.io/is-edge-worker: true"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"traffic-from-edge-to-cloud-kube-apiserver",children:"Traffic from edge to cloud kube-apiserver"}),"\n",(0,r.jsx)(n.p,{children:"YurtHub manages the network traffic from edge to cloud kube-apiserver and caches cloud data.\nComponents in edge nodes such as kubelet, kube-proxy and flannel access the cloud kube-apiserver via YurtHub.\nWhen the edge nodes are disconnected from cloud, the caches are used to resume status to avoid workload disruption."}),"\n",(0,r.jsx)(n.h3,{id:"traffic-in-data-plane",children:"Traffic in data plane"}),"\n",(0,r.jsx)(n.p,{children:"Raven builds VPN channels to ensure connectivity from cloud to edge or edge to edge include the host network and the container network in order to achieve cloud to edge and edge to edge network communication, which is mainly due to the network domain of the edge node is not in the same network plane as the network domain on the cloud, and the edge nodes are not exposed on the public network."}),"\n",(0,r.jsx)(n.h3,{id:"openyurt-components",children:"OpenYurt Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Raven:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Raven is component of the OpenYurt to enhance cluster networking capabilities. This enhancement is focused on edge-edge and edge-cloud communication in OpenYurt.\nIn short, it will provide layer 3 network connectivity among pods in different physical regions, as there are in one vanilla Kubernetes cluster."}),"\n",(0,r.jsx)(n.li,{children:"Deployment pattern: DaemonSet for Raven in all nodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YurtHub:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YurtHub is a sidecar in node level, it performs the role of requests proxy between worker nodes and kube-apiserver.\nIt has two running modes: edge and cloud. In edge mode, it will cache the data returned from cloud, and store in local disk."}),"\n",(0,r.jsx)(n.li,{children:"Deployment pattern: Static pod in each node."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Yurt-Manager\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Yurt-Manager component consists of several controllers and webhooks, which are used to provide abilities to ensure that Kubernetes can work as it would in a normal data center\nin a cloud-edge collaboration scenario."}),"\n",(0,r.jsxs)(n.li,{children:["Deployment pattern: The Yurt-Manager component is recommended to co-located with Kubernetes control plane components such as Kube-Controller-Manager. and Yurt-Manager is deployed as a ",(0,r.jsx)(n.code,{children:"Deployment"}),", usually consists of\ntwo instances, one leader and one backup."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"YurtDeviceController/YurtEdgeXManager:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"YurtDeviceController and YurtEdgeXManager manage edge devices in cloud native way, they combine EdgeX Foundry and OpenYurt seamlessly, providing IOT solutions in an easy, efficient way."}),"\n",(0,r.jsx)(n.li,{children:"Deployment pattern: Deployment for YurtEdgeXManager in cloud nodes, YurtAppSet for YurtDeviceController in each edge nodepool."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Pool-Coordinator:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Provide KV data storage (stored only in memory) and distributed lock capabilities in the node pool, so that YurtHub can elect a Leader, so as to realize heartbeat proxy, cloud edge traffic reuse, operation and maintenance monitoring in the node pool, etc."}),"\n",(0,r.jsx)(n.li,{children:"Deployment pattern: YurtAppDaemon and ensures one instance per edge node pool."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},71645:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/arch-2c77ff23e9b7f4fe4956fe22700f5c0c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);