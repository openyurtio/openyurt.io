"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[68576],{81305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"installation/yurtadm-init","title":"Yurtadm init","description":"1. Background","source":"@site/versioned_docs/version-v1.3/installation/yurtadm-init.md","sourceDirName":"installation","slug":"/installation/yurtadm-init","permalink":"/docs/v1.3/installation/yurtadm-init","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-init.md","tags":[],"version":"v1.3","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"Yurtadm init"}}');var r=t(74848),l=t(28453);const s={title:"Yurtadm init"},d=void 0,o={},a=[{value:"1. Background",id:"1-background",level:2},{value:"2. Process",id:"2-process",level:2},{value:"2.1 Compile yurtadm",id:"21-compile-yurtadm",level:3},{value:"2.2 Yurtadm init",id:"22-yurtadm-init",level:3},{value:"3. Implementation details",id:"3-implementation-details",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,r.jsx)(n.p,{children:"In order to allow users to quickly obtain an OpenYurt test cluster, OpenYurt provides the command Yurtadm init to initialize the cluster. Users only need to select the version of the OpenYurt cluster mirror to create the corresponding version of OpenYurt. Then Yurt-APP-Manager, Yurt-Controller-Manager, Yurttunnel -Server, Yurttunnel-Agent components will be automatically deployed."}),"\n",(0,r.jsx)(n.p,{children:"To expand the cluster later, users can use the Yurtadm join command to add edge nodes or cloud nodes to the cluster."}),"\n",(0,r.jsx)(n.h2,{id:"2-process",children:"2. Process"}),"\n",(0,r.jsx)(n.h3,{id:"21-compile-yurtadm",children:"2.1 Compile yurtadm"}),"\n",(0,r.jsx)(n.p,{children:"When initializing the cluster, you need to obtain the Yurtadm executable first. To quickly build and install yurtadm, you can execute the following command to complete the installation if the build system has golang at least 1.13 up to 1.17 and bash installed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'git clone https://github.com/openyurtio/openyurt.git\ncd openyurt\nmake build WHAT="yurtadm" ARCH="amd64" REGION=cn\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The executable will be stored in the ",(0,r.jsx)(n.code,{children:"_output/local/bin/linux/amd64/"})," directory, depends on the platform."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cp _output/local/bin/linux/amd64/yurtadm /usr/local/bin/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"22-yurtadm-init",children:"2.2 Yurtadm init"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"yurtadm init"})," can initialize an openyurt cluster with the latest version (the current kubernetes version is 1.22.8)."]}),"\n",(0,r.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yurtadm init --apiserver-advertise-address=47.115.228.119 --yurt-tunnel-server-address=47.115.228.119 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12\n"})}),"\n",(0,r.jsx)(n.p,{children:"Explanation of parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--apiserver-advertise-address"}),"\uff1aThe ip address of the master node of the cluster to be installed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--yurt-tunnel-server-address"}),"\uff1aThe address of yurt-tunnel-server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--pod-network-cidr"}),"\uff1aPodSubnet"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--service-cidr"}),"\uff1aServiceSubnet"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"yurtadm init"})," installs the cluster using sealer. This process automatically installs the following components:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"kubeadm"}),"\n",(0,r.jsx)(n.li,{children:"kubectl"}),"\n",(0,r.jsx)(n.li,{children:"kubelet"}),"\n",(0,r.jsx)(n.li,{children:"kube-proxy"}),"\n",(0,r.jsx)(n.li,{children:"docker"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Additional Operations"})}),"\n",(0,r.jsxs)(n.p,{children:["The k8s base image in sealer (current v0.8.6 version) will be stored in the sea.hub:5000 registry, so the ",(0,r.jsx)(n.code,{children:"sea.hub:5000/kube-proxy:v1.22.8"})," image pull of the edge node will be ImagePullBackOff. So here you need to manually ",(0,r.jsx)(n.code,{children:"kubectl edit ds kube-proxy -n kube-system"}),", and replace the image with ",(0,r.jsx)(n.code,{children:"registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.22.8"})]}),"\n",(0,r.jsx)(n.h2,{id:"3-implementation-details",children:"3. Implementation details"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"yurtadm init"})," is implemented using ",(0,r.jsx)(n.code,{children:"sealer run"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The related files of the openyurt cluster image produced by sealer will be placed in the ",(0,r.jsx)(n.code,{children:"/var/lib/sealer/data/my-cluster/rootfs"})," directory. See all file related information: \uff1a",(0,r.jsx)(n.a,{href:"https://github.com/windydayc/openyurt-cluster-image",children:"https://github.com/windydayc/openyurt-cluster-image"})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(96540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);