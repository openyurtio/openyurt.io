"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[51518],{59409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"user-manuals/network/edge-pod-network","title":"Edge Pod Network","description":"Background","source":"@site/versioned_docs/version-v1.4/user-manuals/network/edge-pod-network.md","sourceDirName":"user-manuals/network","slug":"/user-manuals/network/edge-pod-network","permalink":"/docs/user-manuals/network/edge-pod-network","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/edge-pod-network.md","tags":[],"version":"v1.4","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1740216193000,"frontMatter":{"title":"Edge Pod Network"},"sidebar":"docs","previous":{"title":"bandwidth-reduction","permalink":"/docs/user-manuals/network/bandwidth-reduction"},"next":{"title":"Service Topology","permalink":"/docs/user-manuals/network/service-topology"}}');var s=t(74848),a=t(28453);const d={title:"Edge Pod Network"},r=void 0,i={},l=[{value:"Background",id:"background",level:2},{value:"Flannel: VTEP MAC address kept",id:"flannel-vtep-mac-address-kept",level:2},{value:"use case",id:"use-case",level:3},{value:"Solution: Add Mac address kept capability in Flannel",id:"solution-add-mac-address-kept-capability-in-flannel",level:3},{value:"IPAM: Pod IP address kept",id:"ipam-pod-ip-address-kept",level:2},{value:"user case",id:"user-case",level:3},{value:"Solution: Pod IP address kept",id:"solution-pod-ip-address-kept",level:3},{value:"Add &quot;get node&quot; permission for Flannel",id:"add-get-node-permission-for-flannel",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"In Cloud Edge usage scenarios\uff0cin order to ensure the workloads on the edge nodes can still work stably even in condition of the cloud edge network is disconnected, openyurt provides the edge node autonomy capability. It can realize the automatic restart for the abnormal pod and the auto start of the pods when the edge node is restarted. However, in order to ensure that the node and pod restart will not affect the edge container network when the cloud edge network is disconnected, some network configurations need to be adapted."}),"\n",(0,s.jsx)(n.h2,{id:"flannel-vtep-mac-address-kept",children:"Flannel: VTEP MAC address kept"}),"\n",(0,s.jsx)(n.h3,{id:"use-case",children:"use case"}),"\n",(0,s.jsx)(n.p,{children:"If we adopt flannel as CNI plugin and VXLAN as the backend, when a VTEP device is created on a node\uff08generally named: flannel.1\uff09, the VNI and VTEP info will be record in the node annotations\uff0cso that other nodes can create the related route and forward rules.\nFlannel arch is shown below:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"flannel-architecture",src:t(48086).A+"",width:"1404",height:"1096"})}),"\n",(0,s.jsx)(n.p,{children:"Let's take an example with 2 edge nodes\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'node2 creates flannel.1 device\uff0cMAC address is "9e:c9:07:f9:b3:8b"\uff0cIP address is "172.30.133.0", the related info will be record in node2 annotations:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# node2 annotations with vtep info.\nflannel.alpha.coreos.com/backend-data: \'{"VtepMAC":"9e:c9:07:f9:b3:8b"}\'\nflannel.alpha.coreos.com/public-ip: 10.0.0.20\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"node1 will leverage the related info in node2 to configure the fdb/arp/routing info in host network:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# node1 host network namespace.\nfdb:   9e:c9:07:f9:b3:8b dev flannel.1 dst 10.0.0.20 self permanent\narp:   ? (172.30.133.0) at 9e:c9:07:f9:b3:8b [ether] PERM on flannel.1\nroute: 172.30.133.0/26 via 172.30.133.0 dev flannel.1 onlink\n"})}),"\n",(0,s.jsx)(n.p,{children:"Every time node2 restarts, flannel will re-create the vtep device, and the MAC address of vtep will also be changed and updated to node2 annotations. However, if node2 or node1 is disconnected from the cloud network at this time, node1 will not be notified about the change of node2's MAC address, which will cause the pod on node1 and node2 to fail to communicate normally."}),"\n",(0,s.jsx)(n.h3,{id:"solution-add-mac-address-kept-capability-in-flannel",children:"Solution: Add Mac address kept capability in Flannel"}),"\n",(0,s.jsx)(n.p,{children:"Every time the edge node restarts, flannel firstly reads the MAC address information in the node's annotations (from the local cache of apiserver or yurthub). If it exists, it uses this MAC address as the VTEP MAC address."}),"\n",(0,s.jsx)(n.p,{children:"In order to implement this capability, the flannel source code modifications reference:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"git clone https://github.com/flannel-io/flannel.git;\ncd flannel;\ngit reset --hard e634dabe0af446b765db3b729085b32f97ff6fe6;\nwget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0001-flannel-keep-vtep-mac.patch;\ngit am 0001-flannel-keep-vtep-mac.patch;\n"})}),"\n",(0,s.jsx)(n.p,{children:"flannel-edge image location:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Docker image location: docker.io/openyurt/flannel-edge:v0.14.0-1\nAliyun image location: registry.cn-hangzhou.aliyuncs.com/openyurt/flannel-edge:v0.14.0-1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ipam-pod-ip-address-kept",children:"IPAM: Pod IP address kept"}),"\n",(0,s.jsx)(n.h3,{id:"user-case",children:"user case"}),"\n",(0,s.jsx)(n.p,{children:"In most scenarios, the pod is assigned an IP address through host-local. Host-local selects the idle IP address from nodecidr and assigns it to the new pod, and records the allocated IP address information in the local file."}),"\n",(0,s.jsx)(n.p,{children:"For example, if the IPAM data directory is /var/lib/cni/networks/cbr0, its record information is as below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"$ ls /var/lib/cni/networks/cbr0\n172.30.132.194  172.30.132.198  172.30.132.201\n"})}),"\n",(0,s.jsx)(n.p,{children:"When the cloud edge network is disconnected, pod restart will cause the host-local to reassign an IP address, and the change of pod IP address cannot be synchronized to the cloud. Components such as Kube proxy on other edge nodes cannot be notified about the change of pod IP, so the cluster IP address cannot be used to access the pod."}),"\n",(0,s.jsx)(n.h3,{id:"solution-pod-ip-address-kept",children:"Solution: Pod IP address kept"}),"\n",(0,s.jsxs)(n.p,{children:["To solve this problem, you need to adjust the host-local code: the format of recording IP address is ",(0,s.jsx)(n.code,{children:"{ip}-{pod namespace}-{pod name}"}),". When the pod restarts, host-local will firstly assign the IP address of the pod with the same name in the record."]}),"\n",(0,s.jsx)(n.p,{children:"The assigned pod IP records are changed as below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"$ ls /var/lib/cni/networks/cbr0\n172.30.132.194_kube-system_coredns-vstxh  172.30.132.198_kube-system_nginx-76df748b9-4cz95  172.30.132.201_kube-system_nginx-76df748b9-nf5l9\n"})}),"\n",(0,s.jsx)(n.p,{children:"host-local source code modifications reference:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"git clone https://github.com/containernetworking/plugins.git ;\ncd plugins;\ngit reset --hard 9ebe139e77e82afb122e335328007bca86905ae4;\nwget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0002-ipam-keep-pod-ip.patch;\ngit am 0002-ipam-keep-pod-ip.patch;\n"})}),"\n",(0,s.jsx)(n.p,{children:"host-local cni rpm update:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rpm -ivh https://github.com/openyurtio/openyurt/releases/download/v0.7.0/openyurt-cni-0.8.7-0.x86_64.rpm\n"})}),"\n",(0,s.jsx)(n.h2,{id:"add-get-node-permission-for-flannel",children:'Add "get node" permission for Flannel'}),"\n",(0,s.jsx)(n.p,{children:'After the flannel is adjusted, the permission of "get node" needs to be added along with the original RBAC, below is the modification reference:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: flannel\nrules:\n  - apiGroups:\n      - ""\n    resources:\n      - pods\n    verbs:\n      - get\n  - apiGroups:\n      - ""\n    resources:\n      - nodes\n    verbs:\n+     - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - nodes/status\n    verbs:\n      - patch\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},48086:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/flannel-architecture-7a63d6356df43834c25d46ad20805f84.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);