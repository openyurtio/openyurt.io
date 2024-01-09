"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[52786],{15454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(85893),r=t(11151);const i={title:"Architecture"},s=void 0,c={id:"core-concepts/architecture",title:"Architecture",description:"Below is the architecture of OpenYurt.",source:"@site/docs/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/next/core-concepts/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"current",lastUpdatedBy:"Lu Chen",lastUpdatedAt:1704786670,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Join Nodes",permalink:"/docs/next/installation/yurtadm-join"},next:{title:"Yurt-Manager",permalink:"/docs/next/core-concepts/yurt-manager"}},a={},d=[{value:"Node category",id:"node-category",level:3},{value:"Traffic from edge to cloud kube-apiserver",id:"traffic-from-edge-to-cloud-kube-apiserver",level:3},{value:"Traffic in data plane",id:"traffic-in-data-plane",level:3},{value:"OpenYurt Components",id:"openyurt-components",level:3}];function l(e){const n={code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Below is the architecture of OpenYurt."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"openyurt arch",src:t(62857).Z+"",width:"1750",height:"1110"})}),"\n",(0,o.jsx)(n.p,{children:"The blue box represents the original Kubernetes components, and the orange box represents the OpenYurt components."}),"\n",(0,o.jsx)(n.h3,{id:"node-category",children:"Node category"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Cloud Node\uff1aThe nodes running in cloud side, connecting to master with cloud intranet. Centralized control plane components are deployed in cloud side. The nodes are labeled with ",(0,o.jsx)(n.code,{children:"openyurt.io/is-edge-worker: false"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Edge Node\uff1aThe nodes running in edge side, connecting to master with public internet. They are usually close to edge production environment, and thus contains the mainly edge workloads. The nodes are labeled with ",(0,o.jsx)(n.code,{children:"openyurt.io/is-edge-worker: true"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"traffic-from-edge-to-cloud-kube-apiserver",children:"Traffic from edge to cloud kube-apiserver"}),"\n",(0,o.jsx)(n.p,{children:"YurtHub manages the network traffic from edge to cloud kube-apiserver and caches cloud data.\nComponents in edge nodes such as kubelet, kube-proxy and flannel access the cloud kube-apiserver via YurtHub.\nWhen the edge nodes are disconnected from cloud, the caches are used to resume status to avoid workload disruption."}),"\n",(0,o.jsx)(n.h3,{id:"traffic-in-data-plane",children:"Traffic in data plane"}),"\n",(0,o.jsx)(n.p,{children:"Raven builds VPN channels to ensure connectivity from cloud to edge or edge to edge include the host network and the container network in order to achieve cloud to edge and edge to edge network communication, which is mainly due to the network domain of the edge node is not in the same network plane as the network domain on the cloud, and the edge nodes are not exposed on the public network."}),"\n",(0,o.jsx)(n.h3,{id:"openyurt-components",children:"OpenYurt Components"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Raven-Agent:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Raven is component of the OpenYurt to enhance cluster networking capabilities. This enhancement is focused on edge-edge and edge-cloud communication in OpenYurt.\nIn short, it will provide layer 3 network connectivity among pods in different physical regions, as there are in one vanilla Kubernetes cluster."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: DaemonSet for Raven in all nodes."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"YurtHub:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"YurtHub is a sidecar in node level, it performs the role of requests proxy between worker nodes and kube-apiserver.\nIt has two running modes: edge and cloud. In edge mode, it caches data from the cloud and store it on the local disk. and the cached data is then utilized if connection between the cloud and edge network is lost, especially in scenarios where the node restarts after the interruption."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: Static pod in each node."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Yurt-Manager\uff1a"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The Yurt-Manager component consists of several controllers and webhooks, which are used to provide abilities to ensure that Kubernetes can work as it would in a normal data center\nin a cloud-edge collaboration scenario."}),"\n",(0,o.jsxs)(n.li,{children:["Deployment pattern: The Yurt-Manager component is recommended to co-located with Kubernetes control plane components such as Kube-Controller-Manager. and Yurt-Manager is deployed as a ",(0,o.jsx)(n.code,{children:"Deployment"}),", usually consists of\ntwo instances, one leader and one backup."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"YurtIoTDock:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The former YurtDeviceController component has been integrated into the main repository of OpenYurt and no longer requires separate installation."}),"\n",(0,o.jsx)(n.li,{children:"OpenYurt enables seamless integration of EdgeX Foundry into cloud-native architecture for non-intrusive fusion in edge IoT solutions. This is achieved through cloud-native management of edge devices."}),"\n",(0,o.jsx)(n.li,{children:"Deployment Mode: Users can deploy YurtIoTDock on the edge side through the PlatformAdmin CR. Once YurtIoTDock is launched, it begins synchronizing edge device information to the corresponding Device, DeviceService, and DeviceProfile entities."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Yurt-Coordinator:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Provide KV data storage (stored only in memory) and distributed lock capabilities in the node pool, so that YurtHub can elect a Leader, so as to realize heartbeat proxy, cloud edge traffic reuse, operation and maintenance monitoring in the node pool, etc."}),"\n",(0,o.jsx)(n.li,{children:"Deployment pattern: YurtAppDaemon and ensures one instance per edge node pool."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},62857:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/arch-2c77ff23e9b7f4fe4956fe22700f5c0c.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(67294);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);