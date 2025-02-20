"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[68576],{52816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"installation/yurtadm-init","title":"Yurtadm init","description":"1. Background","source":"@site/versioned_docs/version-v1.3/installation/yurtadm-init.md","sourceDirName":"installation","slug":"/installation/yurtadm-init","permalink":"/docs/v1.3/installation/yurtadm-init","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-init.md","tags":[],"version":"v1.3","lastUpdatedBy":"tnsimon","lastUpdatedAt":1740095325000,"frontMatter":{"title":"Yurtadm init"}}');var r=n(74848),s=n(28453);const l={title:"Yurtadm init"},d=void 0,o={},a=[{value:"1. Background",id:"1-background",level:2},{value:"2. Process",id:"2-process",level:2},{value:"2.1 Compile yurtadm",id:"21-compile-yurtadm",level:3},{value:"2.2 Yurtadm init",id:"22-yurtadm-init",level:3},{value:"3. Implementation details",id:"3-implementation-details",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"1-background",children:"1. Background"}),"\n",(0,r.jsx)(t.p,{children:"In order to allow users to quickly obtain an OpenYurt test cluster, OpenYurt provides the command Yurtadm init to initialize the cluster. Users only need to select the version of the OpenYurt cluster mirror to create the corresponding version of OpenYurt. Then Yurt-APP-Manager, Yurt-Controller-Manager, Yurttunnel -Server, Yurttunnel-Agent components will be automatically deployed."}),"\n",(0,r.jsx)(t.p,{children:"To expand the cluster later, users can use the Yurtadm join command to add edge nodes or cloud nodes to the cluster."}),"\n",(0,r.jsx)(t.h2,{id:"2-process",children:"2. Process"}),"\n",(0,r.jsx)(t.h3,{id:"21-compile-yurtadm",children:"2.1 Compile yurtadm"}),"\n",(0,r.jsx)(t.p,{children:"When initializing the cluster, you need to obtain the Yurtadm executable first. To quickly build and install yurtadm, you can execute the following command to complete the installation if the build system has golang at least 1.13 up to 1.17 and bash installed:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'git clone https://github.com/openyurtio/openyurt.git\ncd openyurt\nmake build WHAT="yurtadm" ARCH="amd64" REGION=cn\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The executable will be stored in the ",(0,r.jsx)(t.code,{children:"_output/local/bin/linux/amd64/"})," directory, depends on the platform."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"cp _output/local/bin/linux/amd64/yurtadm /usr/local/bin/\n"})}),"\n",(0,r.jsx)(t.h3,{id:"22-yurtadm-init",children:"2.2 Yurtadm init"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"yurtadm init"})," can initialize an openyurt cluster with the latest version (the current kubernetes version is 1.22.8)."]}),"\n",(0,r.jsx)(t.p,{children:"Example\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"yurtadm init --apiserver-advertise-address=47.115.228.119 --yurt-tunnel-server-address=47.115.228.119 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12\n"})}),"\n",(0,r.jsx)(t.p,{children:"Explanation of parameters:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--apiserver-advertise-address"}),"\uff1aThe ip address of the master node of the cluster to be installed"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--yurt-tunnel-server-address"}),"\uff1aThe address of yurt-tunnel-server"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--pod-network-cidr"}),"\uff1aPodSubnet"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--service-cidr"}),"\uff1aServiceSubnet"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"yurtadm init"})," installs the cluster using sealer. This process automatically installs the following components:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"kubeadm"}),"\n",(0,r.jsx)(t.li,{children:"kubectl"}),"\n",(0,r.jsx)(t.li,{children:"kubelet"}),"\n",(0,r.jsx)(t.li,{children:"kube-proxy"}),"\n",(0,r.jsx)(t.li,{children:"docker"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Additional Operations"})}),"\n",(0,r.jsxs)(t.p,{children:["The k8s base image in sealer (current v0.8.6 version) will be stored in the sea.hub:5000 registry, so the ",(0,r.jsx)(t.code,{children:"sea.hub:5000/kube-proxy:v1.22.8"})," image pull of the edge node will be ImagePullBackOff. So here you need to manually ",(0,r.jsx)(t.code,{children:"kubectl edit ds kube-proxy -n kube-system"}),", and replace the image with ",(0,r.jsx)(t.code,{children:"registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.22.8"})]}),"\n",(0,r.jsx)(t.h2,{id:"3-implementation-details",children:"3. Implementation details"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"yurtadm init"})," is implemented using ",(0,r.jsx)(t.code,{children:"sealer run"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The related files of the openyurt cluster image produced by sealer will be placed in the ",(0,r.jsx)(t.code,{children:"/var/lib/sealer/data/my-cluster/rootfs"})," directory. See all file related information: \uff1a",(0,r.jsx)(t.a,{href:"https://github.com/windydayc/openyurt-cluster-image",children:"https://github.com/windydayc/openyurt-cluster-image"})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);