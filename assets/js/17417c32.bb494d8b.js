"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[78503],{42528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(85893),i=n(11151);const a={title:"bandwidth-reduction"},r=void 0,d={id:"user-manuals/network/bandwidth-reduction",title:"bandwidth-reduction",description:"Background introduction",source:"@site/versioned_docs/version-v1.2/user-manuals/network/bandwidth-reduction.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/bandwidth-reduction",permalink:"/docs/v1.2/user-manuals/network/bandwidth-reduction",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/bandwidth-reduction.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1714339484e3,frontMatter:{title:"bandwidth-reduction"},sidebar:"docs",previous:{title:"Raven",permalink:"/docs/v1.2/user-manuals/network/raven"},next:{title:"Edge Pod Network",permalink:"/docs/v1.2/user-manuals/network/edge-pod-network"}},s={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture and principle of bandwidth-reduction",id:"architecture-and-principle-of-bandwidth-reduction",level:2},{value:"How to use",id:"how-to-use",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"background-introduction",children:"Background introduction"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://openyurt.io/docs/test-report/yurthub-performance-test/#traffic",children:"Performance test"})," shows that in a large-scale OpenYurt cluster, if the pod is deleted and recreated, the Communication traffic will increase rapidly,\nBecause the kube-proxy component on the edge node will monitor all endpoints/endpointslices data changes in real time. Note that usually the same endpoints/endpointslices metadata will be transmitted to each edge node in the node pool, considering that the cloud edge network traffic will use the public network,\nThis will bring pressure on public network traffic costs to users. Therefore, the OpenYurt community has always had a strong demand for reducing cloud-side communication traffic."]}),"\n",(0,o.jsx)(t.h2,{id:"architecture-and-principle-of-bandwidth-reduction",children:"Architecture and principle of bandwidth-reduction"}),"\n",(0,o.jsx)(t.p,{children:"How to meet the demand without intruding the native Kubernetes, the first solution that is easier to consider is to add a sync component to the node pool to synchronize the metadata in the cloud in real time, and then distribute metadata to each component in the node pool. However, the implementation of this plan will face many challenges.\nFirst of all, metadata access requests are initiated by the edge to the cloud, and sync needs to intercept these requests and return data to the clients. At the same time, if the sync component fails, edge requests will be interrupted, and it will be very difficult to ensure the high availability of the sync component."}),"\n",(0,o.jsx)(t.p,{children:"The OpenYurt community pioneered the cloud-side traffic multiplexing mechanism based on pool-coordinator plus YurtHub component, which can not only seamlessly integrate with the native Kubernetes cloud-side communication link, but also elegantly guarantee the high availability of the communication link (YurtHub Leader election), realizing Cost reduction of cloud-side communication."}),"\n",(0,o.jsx)(t.p,{children:"In the node pool, the metadata obtained by the nodes from the cloud can be divided into two types:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"pool-scoped metadata: The data obtained by the component from the cloud is exactly the same, such as the endpointslices obtained by the kube-proxy of each edge node"}),"\n",(0,o.jsx)(t.li,{children:"node-scoped metadata: The data obtained by the component from the cloud is related to its own node, such as the pods obtained by the kubelet of each edge node"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The performance test results also show that the metadata that mainly occupies the bandwidth of the cloud is pool-scoped metadata. Therefore, by reusing pool-scoped metadata in the node pool, the data communication traffic at the edge of the cloud can be greatly reduced. As shown in the below Figure:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"bandwidth-reduction",src:n(88109).Z+"",width:"1654",height:"880"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"All YurtHub components in the node pool elect a Leader through the Pool-Coordinator in the node pool, and only the YurtHub that is properly connected to the cloud network will become the Leader. When the cloud edge network connection of the Leader node is abnormal, the Leader will be automatically replaced by other Followers."}),"\n",(0,o.jsx)(t.li,{children:"YurtHub Leader actively obtains pool-scoped metadata (such as Endpointslices) from the cloud in real time, and then stores them in the Pool-Coordinator component of the node pool"}),"\n",(0,o.jsx)(t.li,{children:"When components on the node (such as Kube-Proxy) obtain pool-scoped metadata through YurtHub, YurtHub will return real-time data from Pool-Coordinator."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsx)(t.p,{children:"The cloud-side traffic multiplexing capability is enabled by default in the OpenYurt cluster, and you need to pay attention to the following configurations."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Make sure OpenYurt version is greater than 1.2.0"}),"\n",(0,o.jsx)(t.li,{children:"Make sure there is a Pool-Coordinator instance running in each node pool"}),"\n",(0,o.jsx)(t.li,{children:"YurtHub component startup parameters --enable-coordinator = true"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},88109:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bandwidth-reduction-6a1b44ff4aa7899853290ff551ff25cc.png"},11151:(e,t,n)=>{n.d(t,{a:()=>r});var o=n(67294);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);