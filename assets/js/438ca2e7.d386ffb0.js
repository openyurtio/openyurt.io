"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[91486],{77114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"core-concepts/raven","title":"Raven","description":"1. Background","source":"@site/docs/core-concepts/raven.md","sourceDirName":"core-concepts","slug":"/core-concepts/raven","permalink":"/docs/next/core-concepts/raven","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/raven.md","tags":[],"version":"current","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"Raven"},"sidebar":"docs","previous":{"title":"YurtHub","permalink":"/docs/next/core-concepts/yurthub"},"next":{"title":"YurtIoTDock","permalink":"/docs/next/core-concepts/yurt-iot-dock"}}');var s=t(74848),o=t(28453);const i={title:"Raven"},d=void 0,c={},a=[{value:"1. Background",id:"1-background",level:2},{value:"2. Architecture",id:"2-architecture",level:2},{value:"Tunnel Mode",id:"tunnel-mode",level:3},{value:"Proxy Mode",id:"proxy-mode",level:3},{value:"3. Features and Advantages",id:"3-features-and-advantages",level:2},{value:"4. Version",id:"4-version",level:2},{value:"5. future plan",id:"5-future-plan",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,s.jsx)(n.p,{children:"In edge computing, edge-edge and edge-cloud communication are common network communication scenarios, and in OpenYurt, we developed the Raven project to provide a solution for edge-edge-cloud container network to communicate with host network In an OpenYurt cluster, Pods located in different physical areas may require the use of Pod IP The Service IP or Service name communicates with other Pods, and while these Pods are in a single K8s cluster, they are in different physical areas (network domains) and cannot communicate directly, so the Raven project was developed to address this"}),"\n",(0,s.jsx)(n.h2,{id:"2-architecture",children:"2. Architecture"}),"\n",(0,s.jsxs)(n.p,{children:["As following picture, the architecture of ",(0,s.jsx)(n.code,{children:"Raven"})," have two components:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Yurt Manager"}),"\uff1aThe native Kubernetes controller is deployed in some nodes on the cloud as a ",(0,s.jsx)(n.code,{children:"Deployment"}),", monitoring the status of edge nodes, selecting an egress for cross-edge traffic as a gateway node for each edge node pool. When the current gateway node is dead and other node will be switched. All cross-edge traffic will be forwarded by the gateway node of each edge node pool;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Raven Agent"}),"\uff1aIt is deployed as a ",(0,s.jsx)(n.code,{children:"DaemonSet"})," and runs on each node of the K8s cluster. It configures route or VPN tunnel on the node according to the role of each node (gateway or non-gateway);"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tunnel-mode",children:"Tunnel Mode"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:t(80096).A+"",width:"1440",height:"810"})}),"\n",(0,s.jsx)(n.h3,{id:"proxy-mode",children:"Proxy Mode"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:t(58536).A+"",width:"1440",height:"810"})}),"\n",(0,s.jsxs)(n.p,{children:["The above two components are connected by a ",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway CRD"})," to exchange routes and VPN tunnels, as shown in the following picture:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:t(45261).A+"",width:"1444",height:"756"})}),"\n",(0,s.jsx)(n.p,{children:"For more details, please refer to the code repository of the Raven project:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt",children:"yurt-manager"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven",children:"raven"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-features-and-advantages",children:"3. Features and Advantages"}),"\n",(0,s.jsx)(n.p,{children:"Features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No intrusion: No intrusion into the native K8s CNI network, only cross-edge traffic is hijacked for forwarding"}),"\n",(0,s.jsxs)(n.li,{children:["Security: Use stable ",(0,s.jsx)(n.code,{children:"IPsec"})," to encrypt cross-edge traffic"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Advantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Raven"})," will try to use the network capabilities of the edge itself, create edge-to-edge VPN tunnels as possible, and will not forward all cross-edge traffic through the cloud center"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Raven"})," does not hijack the traffic in the same edge node pool, and keeps the CNI capabilities of the cluster itself"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-version",children:"4. Version"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Raven Controller Manager"}),":"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"version"}),(0,s.jsx)(n.th,{children:"image"}),(0,s.jsx)(n.th,{children:"release"}),(0,s.jsx)(n.th,{children:"content"}),(0,s.jsx)(n.th,{children:"comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.1.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".1.0"]}),(0,s.jsx)(n.td,{children:"2022.05"}),(0,s.jsx)(n.td,{children:"first"}),(0,s.jsx)(n.td,{children:"support Gateway Node election"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.2.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".2.0"]}),(0,s.jsx)(n.td,{children:"2022.12"}),(0,s.jsx)(n.td,{children:"feature"}),(0,s.jsxs)(n.td,{children:["support multi Pod CIDRs ",(0,s.jsx)("br",{})," support Calico"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.3.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".3.0"]}),(0,s.jsx)(n.td,{children:"2023.1"}),(0,s.jsx)(n.td,{children:"feature"}),(0,s.jsx)(n.td,{children:"support node IP forwarding"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Note: The Raven Controller Manger required by the Raven component is refactured in YurtManager and includes the following Controller: GatewayDNSController GatewayPickupController GatewayInternalServiceController GatewayPublicServiceController. For details, see ",(0,s.jsx)(n.a,{href:"/docs/next/core-concepts/yurt-manager",children:"yurt-manager"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Raven Agent"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"version"}),(0,s.jsx)(n.th,{children:"image"}),(0,s.jsx)(n.th,{children:"release"}),(0,s.jsx)(n.th,{children:"content"}),(0,s.jsx)(n.th,{children:"comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.1.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".1.0"]}),(0,s.jsx)(n.td,{children:"2022.05"}),(0,s.jsx)(n.td,{children:"first"}),(0,s.jsx)(n.td,{children:"Support IPsec as VPN backend, which implemented by using libreswan"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.2.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".2.0"]}),(0,s.jsx)(n.td,{children:"2022.12"}),(0,s.jsx)(n.td,{children:"feature"}),(0,s.jsxs)(n.td,{children:["Support WireGuard as VPN backend",(0,s.jsx)("br",{}),"Support Calico"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.3.0"}),(0,s.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".3.0"]}),(0,s.jsx)(n.td,{children:"2023.1"}),(0,s.jsx)(n.td,{children:"feature"}),(0,s.jsx)(n.td,{children:"Support node IP forwarding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.4.0"}),(0,s.jsx)(n.td,{children:"openyurt/raven-agent:0.4.0"}),(0,s.jsx)(n.td,{children:"2023.11"}),(0,s.jsx)(n.td,{children:"feature"}),(0,s.jsx)(n.td,{children:"Support raven l7 proxy"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"v0.4.1"}),(0,s.jsx)(n.td,{children:"openyurt/raven-agent:0.4.1"}),(0,s.jsx)(n.td,{children:"2024.3"}),(0,s.jsx)(n.td,{children:"feature"}),(0,s.jsx)(n.td,{children:"Support raven l3 NAT traverse"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"5-future-plan",children:"5. future plan"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Support SLB as public network exporter for gateway  \u3010",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/22",children:"issue #22"}),"\u3011"]}),"\n",(0,s.jsxs)(n.li,{children:["Support NAT traversal \u3010",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/13",children:"issue #13"}),"\u3011"]}),"\n",(0,s.jsxs)(n.li,{children:["Support distribute route path decision \u3010",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/14",children:"issue #14"}),"\u3011","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"route path cost evaluation"}),"\n",(0,s.jsx)(n.li,{children:"shortest path decision"}),"\n",(0,s.jsx)(n.li,{children:"keep networking connection alive during paths change"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Welcome interested students to join us and contribute code!!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},58536:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/raven-proxy-2870152cd47a6e015694a74c0995a205.png"},45261:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/raven-sequence-diag-21e979ba2e0c41f82407121704b13eb7.png"},80096:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/raven-tunnel-86994909895ca5e78de0d337c3fe991f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);