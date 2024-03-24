"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[35830],{29508:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(85893),s=r(11151);const i={title:"Raven"},o=void 0,d={id:"core-concepts/raven",title:"Raven",description:"1. Background",source:"@site/versioned_docs/version-v1.2/core-concepts/raven.md",sourceDirName:"core-concepts",slug:"/core-concepts/raven",permalink:"/docs/v1.2/core-concepts/raven",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/raven.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1711267183,formattedLastUpdatedAt:"Mar 24, 2024",frontMatter:{title:"Raven"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/v1.2/core-concepts/architecture"},next:{title:"YurtHub",permalink:"/docs/v1.2/core-concepts/yurthub"}},c={},l=[{value:"1. Background",id:"1-background",level:2},{value:"2. Architecture",id:"2-architecture",level:2},{value:"3. Features and Advantages",id:"3-features-and-advantages",level:2},{value:"4. Version",id:"4-version",level:2},{value:"5. \u672a\u6765\u8ba1\u5212",id:"5-\u672a\u6765\u8ba1\u5212",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,t.jsxs)(n.p,{children:["In edge computing, edge-edge and edge-cloud are common network communication scenarios. In OpenYurt, we have introduced ",(0,t.jsx)(n.code,{children:"YurtTunnel"})," to deal with the network problems of maintenance and monitoring in edge-cloud collaboration, providing the capability of ",(0,t.jsx)(n.code,{children:"kubectl exec/logs"})," on edge nodes and collecting monitoring indicators from edge nodes. But the problems solved by ",(0,t.jsx)(n.code,{children:"YurtTunnel"})," are only a part of edge-cloud communication. We also need to provide solutions for edge-edge and edge-cloud container network communication."]}),"\n",(0,t.jsxs)(n.p,{children:["In OpenYurt cluster, pods in different physical regions may need to use Pod IP, Service IP or Service name to communicate with other Pods. Although these pods are in a single K8s cluster, they are in different physical regions (network domains) and cannot communicate directly. So we create ",(0,t.jsx)(n.code,{children:"Raven"})," project to solve this problem."]}),"\n",(0,t.jsx)(n.h2,{id:"2-architecture",children:"2. Architecture"}),"\n",(0,t.jsxs)(n.p,{children:["As following picture, the architecture of ",(0,t.jsx)(n.code,{children:"Raven"})," have two components:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(40751).Z+"",width:"924",height:"566"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Raven Controller Manager"}),"\uff1aThe native Kubernetes controller is deployed in some nodes on the cloud as a ",(0,t.jsx)(n.code,{children:"Deployment"}),", monitoring the status of edge nodes, selecting an egress for cross-edge traffic as a gateway node for each edge node pool. When the current gateway node is dead and other node will be switched. All cross-edge traffic will be forwarded by the gateway node of each edge node pool;"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Raven Agent"}),"\uff1aIt is deployed as a ",(0,t.jsx)(n.code,{children:"DaemonSet"})," and runs on each node of the K8s cluster. It configures route or VPN tunnel on the node according to the role of each node (gateway or non-gateway);"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The above two components are connected by a ",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway CRD"})," to exchange routes and VPN tunnels, as shown in the following picture:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(48882).Z+"",width:"1444",height:"756"})}),"\n",(0,t.jsx)(n.p,{children:"For more details, please refer to the code repository of the Raven project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager",children:"raven-controller-manager"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven",children:"raven"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-features-and-advantages",children:"3. Features and Advantages"}),"\n",(0,t.jsx)(n.p,{children:"Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No intrusion: No intrusion into the native K8s CNI network, only cross-edge traffic is hijacked for forwarding"}),"\n",(0,t.jsxs)(n.li,{children:["Security: Use stable ",(0,t.jsx)(n.code,{children:"IPsec"})," to encrypt cross-edge traffic"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Advantages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Raven"})," will try to use the network capabilities of the edge itself, create edge-to-edge VPN tunnels as possible, and will not forward all cross-edge traffic through the cloud center"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Raven"})," does not hijack the traffic in the same edge node pool, and keeps the CNI capabilities of the cluster itself"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4-version",children:"4. Version"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Raven Controller Manager"}),":"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"version"}),(0,t.jsx)(n.th,{children:"image"}),(0,t.jsx)(n.th,{children:"release"}),(0,t.jsx)(n.th,{children:"content"}),(0,t.jsx)(n.th,{children:"comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.1.0"}),(0,t.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".1.0"]}),(0,t.jsx)(n.td,{children:"2022.05"}),(0,t.jsx)(n.td,{children:"first"}),(0,t.jsx)(n.td,{children:"support Gateway Node election"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.2.0"}),(0,t.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".2.0"]}),(0,t.jsx)(n.td,{children:"2022.12"}),(0,t.jsx)(n.td,{children:"feature"}),(0,t.jsxs)(n.td,{children:["support multi Pod CIDRs ",(0,t.jsx)("br",{})," support Calico"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.3.0"}),(0,t.jsxs)(n.td,{children:["openyurt/raven-controller-manager",":v0",".3.0"]}),(0,t.jsx)(n.td,{children:"2023.1"}),(0,t.jsx)(n.td,{children:"feature"}),(0,t.jsx)(n.td,{children:"support node IP forwarding"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Raven Agent"}),"\uff1a"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"version"}),(0,t.jsx)(n.th,{children:"image"}),(0,t.jsx)(n.th,{children:"release"}),(0,t.jsx)(n.th,{children:"content"}),(0,t.jsx)(n.th,{children:"comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.1.0"}),(0,t.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".1.0"]}),(0,t.jsx)(n.td,{children:"2022.05"}),(0,t.jsx)(n.td,{children:"first"}),(0,t.jsx)(n.td,{children:"Support IPsec as VPN backend, which implemented by using libreswan"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.2.0"}),(0,t.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".2.0"]}),(0,t.jsx)(n.td,{children:"2022.12"}),(0,t.jsx)(n.td,{children:"feature"}),(0,t.jsxs)(n.td,{children:["Support WireGuard as VPN backend",(0,t.jsx)("br",{}),"Support Calico"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"v0.3.0"}),(0,t.jsxs)(n.td,{children:["openyurt/raven-agent",":v0",".3.0"]}),(0,t.jsx)(n.td,{children:"2023.1"}),(0,t.jsx)(n.td,{children:"feature"}),(0,t.jsx)(n.td,{children:"Support node IP forwarding"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"5-\u672a\u6765\u8ba1\u5212",children:"5. \u672a\u6765\u8ba1\u5212"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e91\u7aef\u652f\u6301LB\u7684\u516c\u7f51\u66b4\u9732\u65b9\u5f0f \u3010",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/22",children:"issue #22"}),"\u3011"]}),"\n",(0,t.jsxs)(n.li,{children:["\u652f\u6301NAT\u7a7f\u8d8a \u3010",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/13",children:"issue #13"}),"\u3011"]}),"\n",(0,t.jsxs)(n.li,{children:["\u652f\u6301\u5206\u5e03\u5f0f\u8def\u7531\u51b3\u7b56 \u3010",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven/issues/14",children:"issue #14"}),"\u3011","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8def\u7531\u8def\u5f84\u7684cost\u8ba1\u7b97"}),"\n",(0,t.jsx)(n.li,{children:"\u6839\u636ecost\u8ba1\u7b97\u6700\u77ed\u8def\u5f84"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u8def\u5f84\u66f4\u6539\u671f\u95f4\u4fdd\u6301\u7f51\u7edc\u8fde\u63a5\u5904\u4e8eactive\u72b6\u6001"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6b22\u8fce\u611f\u5174\u8da3\u7684\u540c\u5b66\u52a0\u5165\u6211\u4eec\uff0c\u8d21\u732e\u4ee3\u7801\uff01\uff01\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},48882:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/raven-sequence-diag-21e979ba2e0c41f82407121704b13eb7.png"},40751:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/raven-017b384aa3ec05a762c21c4370c73174.png"},11151:(e,n,r)=>{r.d(n,{a:()=>o});var t=r(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);