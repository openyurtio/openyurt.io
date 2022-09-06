"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[39],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,l(l({ref:t},i),{},{components:n})):r.createElement(y,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=(n(7294),n(3905));const o={title:"Manually Setup"},l=void 0,u={unversionedId:"installation/manually-setup",id:"version-v1.0/installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a",source:"@site/versioned_docs/version-v1.0/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"Manually Setup"},sidebar:"version-v1.0/docs",previous:{title:"Summary",permalink:"/docs/installation/summary"},next:{title:"Yurtadm init",permalink:"/docs/installation/yurtadm-init"}},p={},s=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"2. Label cloud nodes and edge nodes",id:"2-label-cloud-nodes-and-edge-nodes",level:2},{value:"3. Setup Control-Plane components of OpenYurt",id:"3-setup-control-plane-components-of-openyurt",level:2},{value:"3.1 Setup Yurt-controller-manager",id:"31-setup-yurt-controller-manager",level:3},{value:"Note:",id:"note",level:4},{value:"3.2 Setup Yurt-App-Manager",id:"32-setup-yurt-app-manager",level:3},{value:"3.3 Setup Yurt-tunnel",id:"33-setup-yurt-tunnel",level:3},{value:"3.4 Setup Yurthub Settings",id:"34-setup-yurthub-settings",level:3},{value:"4. Attention",id:"4-attention",level:2}],i={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a\ntwo-nodes Kubernetes cluster, and all the yaml files used in this tutorial can be found\nat ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/tree/master/config/setup"},"openyurt repo")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup"},"yurt-app-manager repo"),"."),(0,a.kt)("h2",{id:"1-precondition"},"1. Precondition"),(0,a.kt)("p",null,"Make sure you already have installed a two-nodes Kubernetes cluster. like ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n")),(0,a.kt)("p",null,"OpenYurt need to change kubernetes component configurations to adapt to edge environment. Please complete the following configurations for ",(0,a.kt)("inlineCode",{parentName:"p"},"Kube-Controller-Manager"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CoreDNS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"KubeProxy"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/openyurt-prepare#1-kube-controller-manager-adjustment"},"Kube-Controller-Manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/openyurt-prepare#2-coredns-adjustment"},"CoreDNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation/openyurt-prepare#3-kubeproxy-adjustment"},"KubeProxy"))),(0,a.kt)("h2",{id:"2-label-cloud-nodes-and-edge-nodes"},"2. Label cloud nodes and edge nodes"),(0,a.kt)("p",null,"When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,a.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker"),".\nwe will use node ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west-1.192.168.0.87")," as the cloud node."),(0,a.kt)("p",null,"We label the cloud node with value ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),","),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n")),(0,a.kt)("p",null,"and the edge node with value ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n")),(0,a.kt)("p",null,"To activate the autonomous mode, we annotate the edge node by typing following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n")),(0,a.kt)("h2",{id:"3-setup-control-plane-components-of-openyurt"},"3. Setup Control-Plane components of OpenYurt"),(0,a.kt)("h3",{id:"31-setup-yurt-controller-manager"},"3.1 Setup Yurt-controller-manager"),(0,a.kt)("p",null,"Next, we need to deploy the Yurt controller manager, which prevents apiserver from evicting pods running on the\nautonomous edge nodes during disconnection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-controller-manager.yaml\ndeployment.apps/yurt-controller-manager created\n")),(0,a.kt)("h4",{id:"note"},"Note:"),(0,a.kt)("p",null,'Since Docker turn on pull rate limit on anonymous request. You may encounter error message like "You have reached your pull rate limit. xxxx". In that case you will need to create a docker-registry secret to pull the image.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system\n")),(0,a.kt)("p",null,"Then edit the config/setup/yurt-controller-manager.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n      containers:\n      - name: yurt-controller-manager\n        image: openyurt/yurt-controller-manager:latest\n        command:\n        - yurt-controller-manager\n      imagePullSecrets:\n      - name: dockerpass\n")),(0,a.kt)("h3",{id:"32-setup-yurt-app-manager"},"3.2 Setup Yurt-App-Manager"),(0,a.kt)("p",null,"please get ",(0,a.kt)("inlineCode",{parentName:"p"},"config/setup/all_in_one.yaml")," from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup"},"yurt-app-manager repo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f config/setup/all_in_one.yaml\n")),(0,a.kt)("p",null,"Wait for the yurt-app-manager operator to be created successfully"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pod -n kube-system | grep yurt-app-manager\n")),(0,a.kt)("h3",{id:"33-setup-yurt-tunnel"},"3.3 Setup Yurt-tunnel"),(0,a.kt)("p",null,"Then, we can deploy the yurt-tunnel-server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-tunnel-server.yaml\n")),(0,a.kt)("p",null,"And, apply the yurt-tunnel-agent yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/setup/yurt-tunnel-agent.yaml\n")),(0,a.kt)("p",null,"After the agent and the server are running, we should check if yurt-tunnel can work by executing command like ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs/exec")),(0,a.kt)("h3",{id:"34-setup-yurthub-settings"},"3.4 Setup Yurthub Settings"),(0,a.kt)("p",null,"Deploy global settings(i.e., RBAC, configmap) for yurthub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurthub-cfg.yaml\n")),(0,a.kt)("h2",{id:"4-attention"},"4. Attention"),(0,a.kt)("p",null,"In order to make Node ",(0,a.kt)("inlineCode",{parentName:"p"},"US-West-1.192.168.0.88")," work properly in the OpenYurt cluster, OpenYurt Node Components must be installed on the Node. For details, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/yurtadm-join#2-install-openyurt-node-components"},"Install OpenYurt Node on Existing K8s Nodes"),"."))}c.isMDXComponent=!0}}]);