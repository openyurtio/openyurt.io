"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[93859],{57813:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=o(85893),r=o(11151);const i={title:"Architecture"},s=void 0,d={id:"core-concepts/architecture",title:"Architecture",description:"Below is the architecture of OpenYurt.",source:"@site/versioned_docs/version-v1.2/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/v1.2/core-concepts/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171831465e4,frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"How to use `kubeconfig` to experience OpenYurt capabilities",permalink:"/docs/v1.2/installation/openyurt-experience-center/kubeconfig"},next:{title:"Raven",permalink:"/docs/v1.2/core-concepts/raven"}},l={},c=[{value:"Node category",id:"node-category",level:3},{value:"Traffic from edge to cloud kube-apiserver",id:"traffic-from-edge-to-cloud-kube-apiserver",level:3},{value:"Traffic in data plane",id:"traffic-in-data-plane",level:3},{value:"OpenYurt Components",id:"openyurt-components",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Below is the architecture of OpenYurt."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:o(62857).Z+"",width:"1750",height:"1110"})}),"\n",(0,t.jsx)(n.p,{children:"The blue box represents the original Kubernetes components, and the orange box represents the OpenYurt components."}),"\n",(0,t.jsx)(n.h3,{id:"node-category",children:"Node category"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Cloud Node\uff1aThe nodes running in cloud side, connecting to master with cloud intranet. Centralized control plane components are deployed in cloud side. The nodes are labeled with ",(0,t.jsx)(n.code,{children:"openyurt.io/is-edge-worker: false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Edge Node\uff1aThe nodes running in edge side, connecting to master with public internet. They are usually close to edge production environment, and thus contains the mainly edge workloads. The nodes are labeled with ",(0,t.jsx)(n.code,{children:"openyurt.io/is-edge-worker: true"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"traffic-from-edge-to-cloud-kube-apiserver",children:"Traffic from edge to cloud kube-apiserver"}),"\n",(0,t.jsx)(n.p,{children:"YurtHub manages the network traffic from edge to cloud kube-apiserver and caches cloud data.\nComponents in edge nodes such as kubelet, kube-proxy and flannel access the cloud kube-apiserver via YurtHub.\nWhen the edge nodes are disconnected from cloud, the caches are used to resume status to avoid workload disruption."}),"\n",(0,t.jsx)(n.h3,{id:"traffic-in-data-plane",children:"Traffic in data plane"}),"\n",(0,t.jsx)(n.p,{children:"Raven builds VPN channels to ensure connectivity from cloud to edge or edge to edge include the host network and the container network in order to achieve cloud to edge and edge to edge network communication, which is mainly due to the network domain of the edge node is not in the same network plane as the network domain on the cloud, and the edge nodes are not exposed on the public network."}),"\n",(0,t.jsx)(n.h3,{id:"openyurt-components",children:"OpenYurt Components"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Raven-Controller-Manager/Raven:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Raven is component of the OpenYurt to enhance cluster networking capabilities. This enhancement is focused on edge-edge and edge-cloud communication in OpenYurt.\nIn short, it will provide layer 3 network connectivity among pods in different physical regions, as there are in one vanilla Kubernetes cluster."}),"\n",(0,t.jsx)(n.li,{children:"Deployment pattern: Deployment for Raven-Controller-Manager in cloud nodes, DaemonSet for Raven in all nodes."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtHub:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"YurtHub is a sidecar in node level, it performs the role of traffic proxy between kube nodes and kube-apiserver.\nIt has two running modes: edge and cloud. In edge mode, it will cache the data returned from cloud, and store in local disk."}),"\n",(0,t.jsx)(n.li,{children:"Deployment pattern: Static pod in each node."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtControllerManager\uff1a"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"YurtControllerManager is centralized controller, which consists of NodeLifeCycle Controller(for not evicting pods in autonomy nodes) and YurtCSRController(for approval of edge certificates)."}),"\n",(0,t.jsx)(n.li,{children:"Deployment pattern: Deployment in cloud nodes."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtAppManager:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"YurtAppManager is application controller for managing cross region workloads. It consists of the management of Nodepools(node groups), YurtAppSet(previous named UnitedDeployment)(nodepool level workloads), YurtAppDaemon(nodepool level daemonset), and YurtIngress(nodepool level ingress)."}),"\n",(0,t.jsx)(n.li,{children:"Deployment pattern: Deployment in cloud nodes."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtDeviceController/YurtEdgeXManager:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"YurtDeviceController and YurtEdgeXManager manage edge devices in cloud native way, they combine EdgeX Foundry and OpenYurt seamlessly, providing IOT solutions in an easy, efficient way."}),"\n",(0,t.jsx)(n.li,{children:"Deployment pattern: Deployment for YurtEdgeXManager in cloud nodes, YurtAppSet for YurtDeviceController in each edge nodepool."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Pool-Coordinator:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provide KV data storage (stored only in memory) and distributed lock capabilities in the node pool, so that YurtHub can elect a Leader, so as to realize heartbeat proxy, cloud edge traffic reuse, operation and maintenance monitoring in the node pool, etc."}),"\n",(0,t.jsx)(n.li,{children:"Deployment pattern: YurtAppDaemon and ensures one instance per edge node pool."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},62857:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/arch-2c77ff23e9b7f4fe4956fe22700f5c0c.png"},11151:(e,n,o)=>{o.d(n,{a:()=>s});var t=o(67294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);