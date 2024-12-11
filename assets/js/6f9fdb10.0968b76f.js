"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[59975],{56969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"installation/yurt-tunnel-tutorial","title":"Yurt-tunnel tutorial","description":"Use Yurt-tunnel to connect apiserver and edge node","source":"@site/docs/installation/yurt-tunnel-tutorial.md","sourceDirName":"installation","slug":"/installation/yurt-tunnel-tutorial","permalink":"/docs/next/installation/yurt-tunnel-tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurt-tunnel-tutorial.md","tags":[],"version":"current","lastUpdatedBy":"Cookie","lastUpdatedAt":1733885620000,"frontMatter":{}}');var o=t(74848),s=t(28453);const a={},i="Yurt-tunnel tutorial",l={},d=[{value:"Use Yurt-tunnel to connect apiserver and edge node",id:"use-yurt-tunnel-to-connect-apiserver-and-edge-node",level:2},{value:"1. Provision a minikube cluster",id:"1-provision-a-minikube-cluster",level:3},{value:"2. Create a test pod",id:"2-create-a-test-pod",level:3},{value:"4. Block the network traffic from the apiserver to the node",id:"4-block-the-network-traffic-from-the-apiserver-to-the-node",level:3},{value:"5. Setup the yurt-tunnel manually",id:"5-setup-the-yurt-tunnel-manually",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"yurt-tunnel-tutorial",children:"Yurt-tunnel tutorial"})}),"\n",(0,o.jsx)(n.h2,{id:"use-yurt-tunnel-to-connect-apiserver-and-edge-node",children:"Use Yurt-tunnel to connect apiserver and edge node"}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will show how the yurt-tunnel helps the apiserver send\nrequest to nodes when the network traffic from apiserver to the node is\nblocked. To mimic the real scenario where the cloud node and edge nodes may\nlocate in separate network regions, we use a two-nodes minikube as the\nexperimental cluster."}),"\n",(0,o.jsx)(n.h3,{id:"1-provision-a-minikube-cluster",children:"1. Provision a minikube cluster"}),"\n",(0,o.jsx)(n.p,{children:"Start from version 1.10, minikube allows users to provision multinode clusters.\nDepending on the version you are using, minikube may use docker as the default\ndriver, which is not supported by yurt-tunnel. Therefore, make sure to choose\nhyperkit or virtualbox as your driver. For example, the OSX user can create a\ntwo-nodes minikube cluster by typing the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"minikube start --nodes 2 --driver hyperkit\n"})}),"\n",(0,o.jsx)(n.p,{children:"If everything goes right, we will have a two-nodes cluster up and running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes -o wide\nNAME           STATUS   ROLES    AGE     VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE               KERNEL-VERSION   CONTAINER-RUNTIME\nminikube       Ready    master   3h50m   v1.18.3   192.168.64.3   <none>        Buildroot 2019.02.11   4.19.114         docker://19.3.12\nminikube-m02   Ready    <none>   3h48m   v1.18.3   192.168.64.9   <none>        Buildroot 2019.02.11   4.19.114         docker://19.3.12\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the rest of this tutorial, we will assume that the node named ",(0,o.jsx)(n.code,{children:"minikube"})," is the\ncloud node, and the node named ",(0,o.jsx)(n.code,{children:"minikube-m02"})," is the edge node."]}),"\n",(0,o.jsx)(n.h3,{id:"2-create-a-test-pod",children:"2. Create a test pod"}),"\n",(0,o.jsx)(n.p,{children:"As we plan to test the functionality of routing requests from the apiserver to\nnodes, which usually happens when the apiserver receives requests of accessing\nthe pods, let's create a test pod that will run on the edge node."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f-<<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: test-po\n  namespace: default\nspec:\n  nodeName: minikube-m02\n  containers:\n  - name: test-po\n    image: busybox\n    command:\n    - top\nEOF\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After the ",(0,o.jsx)(n.code,{children:"test-po"})," is running, we can check the connection between the apiserver\nand the node by typing the following commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec test-po -- date\nFri Aug  7 23:17:27 UTC 2020\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-block-the-network-traffic-from-the-apiserver-to-the-node",children:"4. Block the network traffic from the apiserver to the node"}),"\n",(0,o.jsx)(n.p,{children:"Next, let's block the network traffic from the apiserver to the node by dropping\nnetwork packages that are sent from the apiserver to the node. Specifically,\nwe add a nat rule to the cloud node that drops all packets to the node with\ndestination port set as 10250 (kubelet listens on port 10250 which receives\nhttps request from the apiserver)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ minikube ssh\n                         _             _\n            _         _ ( )           ( )\n  ___ ___  (_)  ___  (_)| |/')  _   _ | |_      __\n/' _ ` _ `\\| |/' _ `\\| || , <  ( ) ( )| '_`\\  /'__`\\\n| ( ) ( ) || || ( ) || || |\\`\\ | (_) || |_) )(  ___/\n(_) (_) (_)(_)(_) (_)(_)(_) (_)`\\___/'(_,__/'`\\____)\n$ sudo iptables -A OUTPUT -p tcp -d 192.168.64.9 --dport 10250 -j DROP\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, if we try to execute the ",(0,o.jsx)(n.code,{children:"date"})," command in ",(0,o.jsx)(n.code,{children:"test-po"})," again, the command\nwill hang."]}),"\n",(0,o.jsx)(n.h3,{id:"5-setup-the-yurt-tunnel-manually",children:"5. Setup the yurt-tunnel manually"}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended to use ",(0,o.jsx)(n.code,{children:"yurtctl"})," tool to deploy yurt-tunnel components by\nadding the ",(0,o.jsx)(n.code,{children:"--deploy-yurttunnel"})," option when converting a Kubernetes cluster. For example,"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yurtctl convert --cloud-nodes minikube --provider minikube --deploy-yurttunnel\n"})}),"\n",(0,o.jsx)(n.p,{children:"You may also setup the yurt-tunnel manually by deploying yurt-tunnel-server\nand yurt-tunnel-agent separately.\nTo set up the yurt-tunnel-server, let's first add a label to the cloud node"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl label nodes minikube openyurt.io/is-edge-worker=false\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, we can deploy the yurt-tunnel-server:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/yurt-tunnel-server.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Next, we can set up the yurt-tunnel-agent. Like before, we add a label to the\nedge node, which allows the yurt-tunnel-agent to be run on the edge node:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl label nodes minikube-m02 openyurt.io/is-edge-worker=true\n"})}),"\n",(0,o.jsx)(n.p,{children:"And, apply the yurt-tunnel-agent yaml:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f config/setup/yurt-tunnel-agent.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"After the agent and the server are running, we should execute the command in\nthe test-po again."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);