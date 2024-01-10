"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[13498],{10542:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=o(85893),a=o(11151);const r={title:"NodeResourceManager"},s=void 0,c={id:"core-concepts/node-resource-manager",title:"NodeResourceManager",description:"abstract",source:"@site/versioned_docs/version-v1.1/core-concepts/node-resource-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/node-resource-manager",permalink:"/docs/v1.1/core-concepts/node-resource-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/node-resource-manager.md",tags:[],version:"v1.1",lastUpdatedBy:"huiwq1990",lastUpdatedAt:1704852908,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"NodeResourceManager"},sidebar:"docs",previous:{title:"YurtControllerManager",permalink:"/docs/v1.1/core-concepts/yurt-controller-manager"},next:{title:"YurtDeviceController",permalink:"/docs/v1.1/core-concepts/yurt-device-controller"}},i={},l=[{value:"abstract",id:"abstract",level:3},{value:"architecture",id:"architecture",level:3},{value:"samples",id:"samples",level:3},{value:"Create Configmap",id:"create-configmap",level:4},{value:"Installation of node-resource-manager",id:"installation-of-node-resource-manager",level:4},{value:"Best practices of Edge local storage",id:"best-practices-of-edge-local-storage",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"abstract",children:"abstract"}),"\n",(0,t.jsx)(n.p,{children:"Node-resource-manager is a component used to manage local resources in an OpenYurt cluster, user can dynamically configure local resources on hosts in a cluster by modifying a ConfigMap resource."}),"\n",(0,t.jsx)(n.p,{children:"Node-resource-manager can initialize an existing block device or persistent memory device on the host into the following two local storage devices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An LVM created based on a block device or persistent memory device"}),"\n",(0,t.jsx)(n.li,{children:"QuotaPath created on a block device or persistent memory device"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Any changes to ConfigMap will be treated as changes to local resources on woker nodes in the cluster. For data security reasons, the plug-in will not delete any local resources"}),"\n",(0,t.jsxs)(n.p,{children:["At the same time, with ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver",children:"csi"})," component, local storage devices can be used quickly and easily in Openyurt cluster."]}),"\n",(0,t.jsx)(n.h3,{id:"architecture",children:"architecture"}),"\n",(0,t.jsx)(n.p,{children:"This component consists of two main parts, one is the Node-resource-Topo ConfigMap defined in the kube-system namespace in the cluster, One is the Node-Resource-manager Daemonset, which is deployed under the Kube-system namespace in the cluster. The Node-resource-manager on each Node produces and manages user-defined local resources by mounting node-resource-Topo ConfigMap."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:o(67410).Z+"",width:"1784",height:"898"})}),"\n",(0,t.jsx)(n.h3,{id:""}),"\n",(0,t.jsx)(n.h3,{id:"samples",children:"samples"}),"\n",(0,t.jsx)(n.h4,{id:"create-configmap",children:"Create Configmap"}),"\n",(0,t.jsxs)(n.p,{children:["Create a ConfigMap in a cluster. This section shows a generic ConfigMap configuration. For details, see\n",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md",children:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: node-resource-topo\n  namespace: kube-system\ndata:\n  volumegroup: |-\n    volumegroup:\n    - name: volumegroup1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-zhangjiakou.192.168.3.114\n      topology:\n        type: device\n        devices:\n        - /dev/vdb\n        - /dev/vdc\n  quotapath: |-\n    quotapath:\n    - name: /mnt/path1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-beijing.192.168.3.35\n      topology:\n        type: device\n        options: prjquota\n        fstype: ext4\n        devices:\n        - /dev/vdb\n"})}),"\n",(0,t.jsx)(n.p,{children:"The previous configuration provides the following functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'In the test cluster,  we used two pieces of equipment : /dev/VDB & / dev/VDC  to create an LVM volumegroup on the worker node: "cn - zhangjiakou. 192.168.3.114 ".  Devices here can add paths that do not exist,  because the plug-in will automatically ignore this path during the node initialisation .'}),"\n",(0,t.jsx)(n.li,{children:'Meanwhile, we format the block device "/dev/vdb" to prjquota format on worker node "cn-beijing.192.168.3.35", and  mount it to path "/mnt/path1",  and then subdirectories created under this path can set the maximum quota for each directory. Devices here can also add paths that do not exist, the component will automatically select the first existing block device for formatting and binding.'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"installation-of-node-resource-manager",children:"Installation of node-resource-manager"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practices-of-edge-local-storage",children:"Best practices of Edge local storage"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4",children:"https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},67410:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/node-resource-manager-19892b3a311102bad89b5a37336c826a.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(67294);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);