"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[58196],{98874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(85893),o=n(11151);const r={title:"Yurtadm init/join"},a=void 0,s={id:"installation/yurtadm-init-join",title:"Yurtadm init/join",description:"1.Background",source:"@site/versioned_docs/version-v0.7.0/installation/yurtadm-init-join.md",sourceDirName:"installation",slug:"/installation/yurtadm-init-join",permalink:"/docs/v0.7.0/installation/yurtadm-init-join",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-init-join.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171831465e4,frontMatter:{title:"Yurtadm init/join"},sidebar:"docs",previous:{title:"Manually Setup",permalink:"/docs/v0.7.0/installation/manually-setup"},next:{title:"OpenYurt Experience Center Introduction",permalink:"/docs/v0.7.0/installation/openyurt-experience-center/overview"}},l={},d=[{value:"1.Background",id:"1background",level:2},{value:"2.Process",id:"2process",level:2},{value:"2.1 Compile Yurtadm",id:"21-compile-yurtadm",level:3},{value:"2.2 Initialize the cluster",id:"22-initialize-the-cluster",level:3},{value:"2.3Joining nodes to cluster",id:"23joining-nodes-to-cluster",level:3},{value:"3.Implement details",id:"3implement-details",level:2},{value:"3.1 Yurtadm init",id:"31-yurtadm-init",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"1background",children:"1.Background"}),"\n",(0,i.jsx)(t.p,{children:"In order to allow users to quickly obtain an OpenYurt test cluster, OpenYurt provides the command Yurtadm init to initialize the cluster. Users only need to select the version of the OpenYurt cluster mirror to create the corresponding version of OpenYurt. Then Yurt-APP-Manager, Yurt-Controller-Manager, Yurttunnel -Server, Yurttunnel-Agent components will be automatically deployed."}),"\n",(0,i.jsx)(t.p,{children:"To expand the cluster later, users can use the Yurtadm join command to add edge nodes or cloud nodes to the cluster."}),"\n",(0,i.jsx)(t.h2,{id:"2process",children:"2.Process"}),"\n",(0,i.jsx)(t.h3,{id:"21-compile-yurtadm",children:"2.1 Compile Yurtadm"}),"\n",(0,i.jsx)(t.p,{children:"When initializing the cluster, you need to obtain the Yurtadm executable first. To quickly build and install yurtadm, you can execute the following command to complete the installation if the build system has golang at least 1.13 up to 1.17 and bash installed:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtadm" ARCH="amd64" REGION=cn\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The executable will be stored in the ",(0,i.jsx)(t.code,{children:"_output/local/bin/"})," directory, depends on the platform."]}),"\n",(0,i.jsx)(t.h3,{id:"22-initialize-the-cluster",children:"2.2 Initialize the cluster"}),"\n",(0,i.jsx)(t.p,{children:"Execute the following command to initialize the cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234\n"})}),"\n",(0,i.jsx)(t.p,{children:"The main parameters are:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:" --apiserver-advertise-address    IP address of the master node\n --passwd                         ssh password of the master node\n --openyurt-version               version of the OpenYurt cluster\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"-h"}),"  to configure more information."]}),"\n",(0,i.jsx)(t.h3,{id:"23joining-nodes-to-cluster",children:"2.3Joining nodes to cluster"}),"\n",(0,i.jsx)(t.p,{children:"Users can join cloud nodes and edge nodes to the OpenYurt cluster using Yurtadm join. Note that when joining a node, the runtime needs to be installed on the node and the swap partition is turned off."}),"\n",(0,i.jsx)(t.p,{children:"Execute the following command to join the edge node to cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,i.jsx)(t.p,{children:"Execute the following command to join the cloud node to cluster:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When the runtime of the edge node is containerd, the ",(0,i.jsx)(t.code,{children:"cri-socket"})," parameter needs to be configured. For example, change the command above of joining the edge node to:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n"})}),"\n",(0,i.jsx)(t.h2,{id:"3implement-details",children:"3.Implement details"}),"\n",(0,i.jsx)(t.h3,{id:"31-yurtadm-init",children:"3.1 Yurtadm init"}),"\n",(0,i.jsxs)(t.p,{children:["In order to reduce the difficulty of using Yurtadm init and improve the success probability of cluster installation, Yurtadm init initializes the OpenYurt cluster through the open source tool ",(0,i.jsx)(t.a,{href:"https://github.com/alibaba/sealer",children:"sealer"}),". In terms of implementation, Yurtadm init will download the sealer binary file, and sealer will download the cluster image officially provided by OpenYurt and install the cluster. In addition, Yurtadm init also supports user-specific configuration of OpenYurt cluster images."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{a:()=>a});var i=n(67294);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);