"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[41745],{44280:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(85893),i=o(11151);const r={title:"YurtAppManager"},s=void 0,a={id:"core-concepts/yurt-app-manager",title:"YurtAppManager",description:"Yurt-App-Manager is a functional component that provides united edge management capabilities for an OpenYurt cluster, in order to comprehensively improve the efficiency of application deployment and reduce the complexity of operation and maintenance in edge scenario.",source:"@site/versioned_docs/version-v1.1/core-concepts/yurt-app-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-app-manager",permalink:"/docs/v1.1/core-concepts/yurt-app-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-app-manager.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe",lastUpdatedAt:1710903068,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"YurtAppManager"},sidebar:"docs",previous:{title:"YurtTunnel",permalink:"/docs/v1.1/core-concepts/yurttunnel"},next:{title:"YurtControllerManager",permalink:"/docs/v1.1/core-concepts/yurt-controller-manager"}},c={},d=[{value:"Components Introduction",id:"components-introduction",level:2},{value:"NodePool overview",id:"nodepool-overview",level:2},{value:"YurtAppSet (previous UnitedDeployment)",id:"yurtappset-previous-uniteddeployment",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Yurt-App-Manager is a functional component that provides united edge management capabilities for an OpenYurt cluster, in order to comprehensively improve the efficiency of application deployment and reduce the complexity of operation and maintenance in edge scenario."}),"\n",(0,t.jsx)(n.h2,{id:"components-introduction",children:"Components Introduction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Considering the edge computing scenario, the edge nodes can usually be grouped by their locations, or other logical characteristics, such as their CPU architecture, telecom carriers or cloud providers. The nodes among different groups could also be isolated from each other by various obvious reasons, such as network unreachablility, resource heterogeneity, resource unsharability, and application independence. This is the origin of the edge Node Pool."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Same applications and images may need to be deployed into different Node Pools."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The endpoints of native Kubernetes service may spread over any node in the cluster. Hence, high probability endure of unreachable access or low efficiency may occur when the service flow accesses across nodes from different groups."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:o(51043).Z+"",width:"972",height:"541"})}),"\n",(0,t.jsx)(n.p,{children:"In order to solve the issues above, OpenYurt proposes the solution from three layers,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Node unified management by Node Pool. Nodes can be managed unitedly according to their regions or other logical characteristics."}),"\n",(0,t.jsx)(n.li,{children:"Application unified management by YurtAppSet(previous UnitedDeployment). The workloads would be deployed into different node pools. The replicas, versions, etc. can be configured at node pool level."}),"\n",(0,t.jsx)(n.li,{children:"Traffic unified management by refined Service Topology. The access to endpoints can be limited by simple configuration, for example, the endpoints can only be accessed from the nodes within the same node pool, or the same node."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Yurt-App-Manager is a standard extension of Kubernetes, and provides NodePool controller and YurtAppSet (previous UnitedDeployment) controller, for providing edge node and edge application OPS capabilities, respectively."}),"\n",(0,t.jsx)(n.h2,{id:"nodepool-overview",children:"NodePool overview"}),"\n",(0,t.jsx)(n.p,{children:"Yurt-App-Manager provides a Node Pool controller, which abstracts out the concept of node pool according to specific node attributes, such as region, CPU architecture, cloud provider, etc., so that nodes can be managed unitedly at a pool level."}),"\n",(0,t.jsx)(n.p,{children:"We are used to grouping and managing the nodes by different Kubernetes Labels, but with the increase of nodes and labels' quantity, the operation and maintenance of nodes (such as batch configuration about scheduling policies, taints, etc.) will become more and more complex, as shown in the following figure:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:o(8395).Z+"",width:"987",height:"449"})}),"\n",(0,t.jsx)(n.p,{children:"Nodepool makes an abstraction of node by group of nodes, so that we can manage the nodes in different edge regions from the perspective of node pool,  as shown in the following figure:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:o(2655).Z+"",width:"1410",height:"447"})}),"\n",(0,t.jsx)(n.h2,{id:"yurtappset-previous-uniteddeployment",children:"YurtAppSet (previous UnitedDeployment)"}),"\n",(0,t.jsx)(n.p,{children:"With the increasing geographical distribution and the differentiated requirements of applications, the operation and maintenance of edge system has become increasingly complex, for example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You need to modify each deployment one by one when upgrading the image."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You need to define the naming rule for deployment to indicate the same application"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Except for the names, nodeselectors and replicas, other configuration differences for multiple deployments of the same application are relatively small."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"YurtAppSet (previous UnitedDeployment) capability is provided by the Yurt-App-Manager by default. Through Kubernetes CRD resource, it uniformly manages deployments with create/update/delete operations."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:o(10985).Z+"",width:"1003",height:"704"})}),"\n",(0,t.jsxs)(n.p,{children:["YurtAppSet (previous UnitedDeployment) controller provides a template to define applications and manages multiple workloads to match multiple regions. The workload in YurtAppSet is deployed for a pool. Currently, two kinds of workload are supported, they are ",(0,t.jsx)(n.code,{children:"StatefulSet"})," and ",(0,t.jsx)(n.code,{children:"Deployment"}),". The controller will create child workloads according to the pool configurations in YurtAppSet. Each resource has a desired number of ",(0,t.jsx)(n.code,{children:"replicas"})," of PODs. By only one YurtAppSet instance, you can automatically maintain multiple Deployment or StatefulSet, and meanwhile keep differentiated configurations for different pools, such as replicas."]}),"\n",(0,t.jsxs)(n.p,{children:["For more intuitive operational experience, please refer to Yurt-App-Manager ",(0,t.jsx)(n.a,{href:"/docs/v1.1/user-manuals/workload/node-pool-management",children:"tutorial"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"More discussions about Yurt-App-Manager please refer to the issues and pull requests in OpenYurt community,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["issue124\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/124",children:"YurtAppSet usages"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["issue171\uff1a[ ",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/171",children:"feature request] the definition of NodePool and YurtAppSet"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["pull request 173\uff1a [",(0,t.jsx)(n.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/pull/173",children:"proposal] add nodepool and YurtAppSet crd proposal"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},51043:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/cloud-edge-overview-de9528a7be9a66d7ac91c351d86c10ce.png"},8395:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/nodepool1-e4c32ca3a66b7979e1583ca65dd7f7f2.png"},2655:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/nodepool2-cd32adbfbaa60331bc53189c30e8facc.png"},10985:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/nodepool3-c36803a1c31bf6bee66e305379fe63b3.png"},11151:(e,n,o)=>{o.d(n,{a:()=>s});var t=o(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);