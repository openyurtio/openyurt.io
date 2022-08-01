"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4797],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={},l="Yurt-tunnel tutorial",u={unversionedId:"installation/yurt-tunnel-tutorial",id:"installation/yurt-tunnel-tutorial",title:"Yurt-tunnel tutorial",description:"Use Yurt-tunnel to connect apiserver and edge node",source:"@site/docs/installation/yurt-tunnel-tutorial.md",sourceDirName:"installation",slug:"/installation/yurt-tunnel-tutorial",permalink:"/zh/docs/next/installation/yurt-tunnel-tutorial",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurt-tunnel-tutorial.md",tags:[],version:"current",lastUpdatedBy:"lorrielau",lastUpdatedAt:1657507162,formattedLastUpdatedAt:"2022\u5e747\u670811\u65e5",frontMatter:{}},i={},s=[{value:"Use Yurt-tunnel to connect apiserver and edge node",id:"use-yurt-tunnel-to-connect-apiserver-and-edge-node",level:2},{value:"1. Provision a minikube cluster",id:"1-provision-a-minikube-cluster",level:3},{value:"2. Create a test pod",id:"2-create-a-test-pod",level:3},{value:"4. Block the network traffic from the apiserver to the node",id:"4-block-the-network-traffic-from-the-apiserver-to-the-node",level:3},{value:"5. Setup the yurt-tunnel manually",id:"5-setup-the-yurt-tunnel-manually",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yurt-tunnel-tutorial"},"Yurt-tunnel tutorial"),(0,a.kt)("h2",{id:"use-yurt-tunnel-to-connect-apiserver-and-edge-node"},"Use Yurt-tunnel to connect apiserver and edge node"),(0,a.kt)("p",null,"In this tutorial, we will show how the yurt-tunnel helps the apiserver send\nrequest to nodes when the network traffic from apiserver to the node is\nblocked. To mimic the real scenario where the cloud node and edge nodes may\nlocate in separate network regions, we use a two-nodes minikube as the\nexperimental cluster."),(0,a.kt)("h3",{id:"1-provision-a-minikube-cluster"},"1. Provision a minikube cluster"),(0,a.kt)("p",null,"Start from version 1.10, minikube allows users to provision multinode clusters.\nDepending on the version you are using, minikube may use docker as the default\ndriver, which is not supported by yurt-tunnel. Therefore, make sure to choose\nhyperkit or virtualbox as your driver. For example, the OSX user can create a\ntwo-nodes minikube cluster by typing the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --nodes 2 --driver hyperkit\n")),(0,a.kt)("p",null,"If everything goes right, we will have a two-nodes cluster up and running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes -o wide\nNAME           STATUS   ROLES    AGE     VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE               KERNEL-VERSION   CONTAINER-RUNTIME\nminikube       Ready    master   3h50m   v1.18.3   192.168.64.3   <none>        Buildroot 2019.02.11   4.19.114         docker://19.3.12\nminikube-m02   Ready    <none>   3h48m   v1.18.3   192.168.64.9   <none>        Buildroot 2019.02.11   4.19.114         docker://19.3.12\n")),(0,a.kt)("p",null,"In the rest of this tutorial, we will assume that the node named ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube")," is the\ncloud node, and the node named ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube-m02")," is the edge node."),(0,a.kt)("h3",{id:"2-create-a-test-pod"},"2. Create a test pod"),(0,a.kt)("p",null,"As we plan to test the functionality of routing requests from the apiserver to\nnodes, which usually happens when the apiserver receives requests of accessing\nthe pods, let's create a test pod that will run on the edge node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f-<<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: test-po\n  namespace: default\nspec:\n  nodeName: minikube-m02\n  containers:\n  - name: test-po\n    image: busybox\n    command:\n    - top\nEOF\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"test-po")," is running, we can check the connection between the apiserver\nand the node by typing the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec test-po -- date\nFri Aug  7 23:17:27 UTC 2020\n")),(0,a.kt)("h3",{id:"4-block-the-network-traffic-from-the-apiserver-to-the-node"},"4. Block the network traffic from the apiserver to the node"),(0,a.kt)("p",null,"Next, let's block the network traffic from the apiserver to the node by dropping\nnetwork packages that are sent from the apiserver to the node. Specifically,\nwe add a nat rule to the cloud node that drops all packets to the node with\ndestination port set as 10250 (kubelet listens on port 10250 which receives\nhttps request from the apiserver)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube ssh\n                         _             _\n            _         _ ( )           ( )\n  ___ ___  (_)  ___  (_)| |/')  _   _ | |_      __\n/' _ ` _ `\\| |/' _ `\\| || , <  ( ) ( )| '_`\\  /'__`\\\n| ( ) ( ) || || ( ) || || |\\`\\ | (_) || |_) )(  ___/\n(_) (_) (_)(_)(_) (_)(_)(_) (_)`\\___/'(_,__/'`\\____)\n$ sudo iptables -A OUTPUT -p tcp -d 192.168.64.9 --dport 10250 -j DROP\n")),(0,a.kt)("p",null,"Now, if we try to execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," command in ",(0,a.kt)("inlineCode",{parentName:"p"},"test-po")," again, the command\nwill hang."),(0,a.kt)("h3",{id:"5-setup-the-yurt-tunnel-manually"},"5. Setup the yurt-tunnel manually"),(0,a.kt)("p",null,"It is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtctl")," tool to deploy yurt-tunnel components by\nadding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--deploy-yurttunnel")," option when converting a Kubernetes cluster. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yurtctl convert --cloud-nodes minikube --provider minikube --deploy-yurttunnel\n")),(0,a.kt)("p",null,"You may also setup the yurt-tunnel manually by deploying yurt-tunnel-server\nand yurt-tunnel-agent separately.\nTo set up the yurt-tunnel-server, let's first add a label to the cloud node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label nodes minikube openyurt.io/is-edge-worker=false\n")),(0,a.kt)("p",null,"Then, we can deploy the yurt-tunnel-server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-tunnel-server.yaml\n")),(0,a.kt)("p",null,"Next, we can set up the yurt-tunnel-agent. Like before, we add a label to the\nedge node, which allows the yurt-tunnel-agent to be run on the edge node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label nodes minikube-m02 openyurt.io/is-edge-worker=true\n")),(0,a.kt)("p",null,"And, apply the yurt-tunnel-agent yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/setup/yurt-tunnel-agent.yaml\n")),(0,a.kt)("p",null,"After the agent and the server are running, we should execute the command in\nthe test-po again."))}c.isMDXComponent=!0}}]);