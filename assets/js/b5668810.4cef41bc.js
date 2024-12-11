"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[18495],{55136:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"introduction","title":"Introduction","description":"Welcome to the world of OpenYurt!","source":"@site/versioned_docs/version-v1.3/introduction.md","sourceDirName":".","slug":"/","permalink":"/docs/v1.3/","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/introduction.md","tags":[],"version":"v1.3","lastUpdatedBy":"Cookie","lastUpdatedAt":1733885620000,"frontMatter":{"title":"Introduction","slug":"/"},"sidebar":"docs","next":{"title":"Resource and System Requirements","permalink":"/docs/v1.3/usage-conditions/resource-and-system-requirements"}}');var s=t(74848),r=t(28453);const i={title:"Introduction",slug:"/"},a=void 0,d={},c=[{value:"Key Features",id:"key-features",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function l(e){const o={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Welcome to the world of OpenYurt!"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OpenYurt is the first edge computing platform that is non-intrusive to cloud-native systems in the industry"}),". It unifies the management of scattered massive edge heterogeneous resources (such as CDN sites, IoT all-in-one machines and other edge computing power) from the control side (located in the cloud or central server room, etc.).\nIt helps users to easily complete large-scale application delivery, operation and maintenance, and control on massive edge resources."]}),"\n",(0,s.jsx)(o.p,{children:"OpenYurt will continue to work on exploring cloud-native edge computing platform standards for cloud-edge-device collaboration, and will also combine community mainstream computing, networking, storage, application orchestration, security, AI, IoT and other projects or solutions to build a complete upstream and downstream ecology."}),"\n",(0,s.jsx)(o.h2,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"1. Powerful edge autonomy capability"})}),"\n",(0,s.jsx)(o.p,{children:"In Kubernetes, normally if a node is disconnected from the apiserver, the running Pods cannot be recovered when the node hits failures. Moreover, pods on edge nodes will be evicted by native controllers of the Kube-Controller-Manager component when node heartbeat is not reported for more than 5m.\nThis brings a significant challenge for the cloud-edge orchestration since the cloud-edge networking can be unreliable.  As described in below Figure, OpenYurt introduces a per node proxy (YurtHub) and a local storage to cache cloud apiserver states, hence the cached states can be used by Kubelet, KubeProxy or user Pods if the node is disconnected.\nAnd with the help of the Pool-Coordinator component, Leader Yurthub in NodePool can be delegated to proxy node heartbeat for other edge nodes in this pool which are disconnected with cloud, so pods on edge nodes will not be evicted even if the network is disconnected."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"edge-autonomy",src:t(98218).A+"",width:"1588",height:"884"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"2. Cross NodePool network communication capability"})}),"\n",(0,s.jsx)(o.p,{children:"In the edge computing Kubernetes cluster, the nodes themselves may belong to different regions, so based on native CNI network solution, pods in different nodepools can not communicate with each other through Pod IP, Service IP, or Node IP if each nodepool is within an isolated LAN.\nRaven is an elegant network solution for providing cross-nodepool network communication capability in an OpenYurt cluster. A node daemon is installed for every node, and only one daemon in each nodepool is picked as gateway that sets up the VPN tunnel between nodepools, the other daemons in the nodepool configure the cross-nodepool network routing rules to ensure the traffic will go through the gateway node.  Moreover, raven only hijacks cross nodepool traffic, and the traffic within nodepool still uses the native CNI network solution. Therefore, raven can work together with native CNI network solutions(such as flannel, calico, etc.) seamlessly. As described in below Figure, The cross-nodepool traffic is forwarded to gateway node and goes through VPN tunnel."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"cross nodepool network communication",src:t(20374).A+"",width:"1576",height:"916"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"3. Multi-NodePool management"})}),"\n",(0,s.jsx)(o.p,{children:"For better cloud-edge orchestration, OpenYurt pioneers the idea of managing a Pool, which encapsulates the management of node resources, applications, and workload traffic. The edge computing resources are usually classified and divided into nodepools according to their geographical distributions. In order to manage applications and traffic in multiple nodepools conveniently, There are several features are developed for nodepool as following:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["A set of new workload models, such as YurtAppSet and YurtAppDaemon are introduced for managing workloads in multi-nodepool.","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"YurtAppSet provides an alternative to manage pods in specified nodepools by using multiple workloads, and pod distribution across nodepools is determined by the replica number of each workload."}),"\n",(0,s.jsx)(o.li,{children:"YurtAppDaemon is used for ensuring that all(or some) nodepools run a copy of a workload(Deployment or StatefulSet). As nodepools are added to the cluster, workloads are added to them automatically. As nodepools are removed from the cluster, those workloads are garbage collected."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.li,{children:"Service topology capability for routing traffic in nodepool. This feature can ensure any service that a Pod accesses is backed by endpoints within the same nodepool, which is quite useful when cross-nodepool networking is impractical or expensive."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"4. Advanced workload upgrade model"})}),"\n",(0,s.jsx)(o.p,{children:"In cloud-edge architecture, it is easy to get stuck during DaemonSet upgrade process if the number of NotReady nodes exceeds the maxUnavailable of RollingUpdate because cloud-edge network connection is unreliable. In another scenario, because edge nodes may belong to different users (such as new energy vehicles), end users expect that pods on nodes are not automatically upgraded, but that users themselves decide whether to start the pods upgrade on nodes. To address the above challenges, OpenYurt enhances the DaemonSet upgrade model and adds OTA(On-The-Air) and Auto Upgrade models."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Auto Upgrade Model: It is used for solving the upgrade block by notReady nodes. During the upgrade process, the workload upgrade on ready nodes will be completed firstly, while the notReady nodes are skipped. If the node status recovers to ready, the workload upgrade on the node also will be completed automatically."}),"\n",(0,s.jsx)(o.li,{children:"OTA Upgrade Model: This model is more flexible. As described in below Figure, users can query whether there is a new version of the pod through the REST API on the edge node. Then users can trigger pod upgrade through the REST API on edge nodes if a new version exists, which is quite useful when the decision of workload upgrade belongs to the owner of edge nodes instead of the owner of the cluster. For example: application upgrade on new energy vehicles."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"ota-upgrade-model",src:t(18214).A+"",width:"1600",height:"963"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"5. Programmable resource access control"})}),"\n",(0,s.jsx)(o.p,{children:"As described in below Figure, the programmable data filtering framework is built into the YurtHub component, and the response data from cloud will go through a chain of filters and non-perception and on-demand transformation of the response data will be carried out, so as to meet the specific requirements in the cloud-edge collaboration scenario. Four filters are supported in the filters chain at present as follows, and new filters can be easily added into the framework."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Masterservice filter: it is used to mutate the ClusterIp and https port of master service(default/kubernetes) to address that Yurthub component is listening in order to make pods using InClusterConfig on edge nodes to access cloud kube-apiserver through Yurthub component without perception."}),"\n",(0,s.jsx)(o.li,{children:"Servicetoplogy filter: it is used to reassemble endpointslices according to the service topology setting of service in order to ensure the traffic accessing the service can only be forwarded to pods in the same nodepool."}),"\n",(0,s.jsx)(o.li,{children:"Discardcloudservice filter: it is used to discard LoadBalancer service for kube-proxy components on edge nodes because cloud service cannot be accessed through pod IP."}),"\n",(0,s.jsx)(o.li,{children:"Inclusterconfig filter: it is used to comment kubeconfig setting in kube-system/kube-proxy configmap in order to make kube-proxy components to use InClusterConfig to access cloud kube-apiserver on edge nodes."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"resource-access-control",src:t(59040).A+"",width:"1216",height:"786"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"6. Cloud-edge network bandwidth reduction"})}),"\n",(0,s.jsxs)(o.p,{children:["A ",(0,s.jsx)(o.a,{href:"https://openyurt.io/docs/test-report/yurthub-performance-test#traffic",children:"performance test"})," has shown that in a large-scale OpenYurt cluster, the cloud-edge traffic will increase rapidly if pods are deleted and recreated since the kube-proxy components on the edge nodes watch for all endpoints/endpointslices changes. Note that typically the same endpoints information will be transferred to edge nodes within a nodepool which can be less cost efficient considering that the cloud-edge networking traffic will use the public network.\nLeveraging the Pool-Coordinator mentioned above, OpenYurt proposes to introduce a notion of pool-scoped metadata which are unique within a nodepool such as the endpoints/endpointslices data. As described in below Figure, the leader Yurthub will read the pool-scoped data from the cloud kube-apiserver and update the load to pool-coordinator. As a result, all other YurtHubs will retrieve the pool-scoped data from the pool-coordinator, eliminating the use of public network bandwidth for retrieving such data from the cloud kube-apiserver."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"bandwidth-reduction",src:t(97655).A+"",width:"1654",height:"880"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"7. Cloud-native edge device management"})}),"\n",(0,s.jsx)(o.p,{children:"OpenYurt defines a set of APIs for managing edge devices through cloud Kubernetes controlplane. The APIs abstract the device\u2019s basic properties, main capabilities and the data that should be transmitted between the cloud and the edge. OpenYurt provides integration with mainstream OSS IoT device management solutions, such as EdgeXFoundry using the APIs. As described in below Figure, An instance of yurt-device-controller component and EdgeXFoundry service are deployed in each nodepool. Yurt-device-controller component can get the changes of Device CRD from cloud kube-apiserver and convert the desired spec of Device CRD to requests of EdgeXFoundry, then transmit the requests to EdgeXFoundry service in real-time. On the other hand, yurt-device-controller can subscribe to the device status from EdgeXFoundry service, and update the status of Device CRD when status is changed."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"edge-device",src:t(3380).A+"",width:"1074",height:"852"})}),"\n",(0,s.jsx)(o.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,s.jsx)(o.p,{children:"Here are some recommended next steps:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Start to install ",(0,s.jsx)(o.a,{href:"/docs/v1.3/installation/summary",children:"OpenYurt"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Learn OpenYurt's ",(0,s.jsx)(o.a,{href:"/docs/v1.3/core-concepts/architecture",children:"Architecture"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},97655:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/bandwidth-reduction-6a1b44ff4aa7899853290ff551ff25cc.png"},59040:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/data-filtering-framework-2c82f506c04bb7fcafcb39f8fa9ce72b.png"},3380:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/device-981a6d32c59e25c9a315d89a82d6b26b.png"},98218:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/edge-autonomy-60d7152dc958d4b4e22c16c677d21f38.png"},18214:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/ota-b212f0651d7a4ac825f4ffc1073f295c.png"},20374:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/raven-6d05335276e5c122b7730589739cfb02.png"},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);