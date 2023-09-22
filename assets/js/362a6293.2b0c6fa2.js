"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[45],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={title:"Manually Setup"},l=void 0,s={unversionedId:"installation/manually-setup",id:"installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt control plane components manually. We assume you already have a Kubernetes control plane setup properly.",source:"@site/docs/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/next/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"current",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1687699928,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"Manually Setup"},sidebar:"docs",previous:{title:"Summary",permalink:"/docs/next/installation/summary"},next:{title:"Join Nodes",permalink:"/docs/next/installation/yurtadm-join"}},u={},i=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"2. Prerequisites for installing the OpenYurt control plane",id:"2-prerequisites-for-installing-the-openyurt-control-plane",level:2},{value:"3. Install OpenYurt control plane components",id:"3-install-openyurt-control-plane-components",level:2},{value:"3.1 Install yurt-manager",id:"31-install-yurt-manager",level:3},{value:"3.2 Install yurthub artifacts",id:"32-install-yurthub-artifacts",level:3},{value:"3.3 Install raven component",id:"33-install-raven-component",level:3},{value:"4. Attention",id:"4-attention",level:2}],p={toc:i};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial shows how to setup OpenYurt control plane components manually. We assume you already have a Kubernetes control plane setup properly."),(0,r.kt)("h2",{id:"1-precondition"},"1. Precondition"),(0,r.kt)("p",null,"Make sure you already have a Kubernetes control plane with at least one node. We recommend to create your Kubernetes cluster with ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm")," tool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                      STATUS   ROLES                  AGE     VERSION\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11\n")),(0,r.kt)("h2",{id:"2-prerequisites-for-installing-the-openyurt-control-plane"},"2. Prerequisites for installing the OpenYurt control plane"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The IP addresses of all nodes in the cluster must be different if Raven enables node forwarding"),(0,r.kt)("li",{parentName:"ul"},"You must make the following adjustments if using docker as container runtime, which is mainly to avoid docker modifying the iptables forward chain and damaged the node forward.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -w -P FORWARD ACCEPT\nsed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \\\n/lib/systemd/system/docker.service\n"))),(0,r.kt)("li",{parentName:"ul"},"Domain Name resolution from pods on edge nodes will be handled by CoreDNS instance on master node or cloud node through VPN tunnel that provided by Raven, so some resolution latency or timeout will be caused by network. we recommend you to adjust ",(0,r.kt)("inlineCode",{parentName:"li"},"CoreDNS Deployment")," according to ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/installation/coredns-prepare"},"CoreDNS Adjustment")," tutorial if you care about latency or timeout."),(0,r.kt)("li",{parentName:"ul"},"We recommend installing OpenYurt components via ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),", please make sure ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm CLI")," is installed properly before proceeding.")),(0,r.kt)("h2",{id:"3-install-openyurt-control-plane-components"},"3. Install OpenYurt control plane components"),(0,r.kt)("p",null,"All the helm charts used in this tutorial can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt-helm"},"openyurt-helm repo"),". please add the repo as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add openyurt https://openyurtio.github.io/openyurt-helm\n")),(0,r.kt)("p",null,"You can then run ",(0,r.kt)("inlineCode",{parentName:"p"},"helm search repo openyurt")," to see the charts."),(0,r.kt)("h3",{id:"31-install-yurt-manager"},"3.1 Install yurt-manager"),(0,r.kt)("p",null,"yurt-manager should be started before joining the node via the yurtadm command, because the yurthub component on the node depends on yurt-manager to approve csr.\nSo please ensure that the yurt-manager component is running on the master node or any other node that does not have a yurthub component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install yurt-manager -n kube-system openyurt/yurt-manager\n")),(0,r.kt)("p",null,"Ensure that the pod and service configurations of the yurt-manager component have been created successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep yurt-manager\nkubectl get svc -n kube-system | grep yurt-manager\n")),(0,r.kt)("h3",{id:"32-install-yurthub-artifacts"},"3.2 Install yurthub artifacts"),(0,r.kt)("p",null,"The yurthub artifacts include the yurtstaticset template, as well as the yurthub-related configmap. When installing the yurthub artifacts, we need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetesServerAddr")," field to the Kubernetes server address(use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config view")," to find).\nTake the Kubernetes server address of ",(0,r.kt)("inlineCode",{parentName:"p"},"https://1.2.3.4:6443")," as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install yurt-hub -n kube-system --set kubernetesServerAddr=https://1.2.3.4:6443 openyurt/yurthub\n")),(0,r.kt)("p",null,"Ensure yurthub yurtstaticset and yurthub cloud yurtstaticset have been created successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get yss -n kube-system\n")),(0,r.kt)("h3",{id:"33-install-raven-component"},"3.3 Install raven component"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/raven"},"Raven")," provides network communication capabilities when the cloud and the edge are in different network areas\uff0c which include two components raven-controller-manager and raven-agent."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install raven-agent -n kube-system openyurt/raven-agent\n")),(0,r.kt)("p",null,"Ensure that the pod of the raven agent component have been created successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kube-system | grep raven-agent\n")),(0,r.kt)("h2",{id:"4-attention"},"4. Attention"),(0,r.kt)("p",null,"The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/installation/yurtadm-join#2-install-openyurt-node-components"},"Install OpenYurt Node on Existing K8s Nodes"),"."))}c.isMDXComponent=!0}}]);