"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[16174],{38121:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"installation/manually-setup","title":"Manually Setup","description":"This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to yurtadm docs.","source":"@site/versioned_docs/version-v1.1/installation/manually-setup.md","sourceDirName":"installation","slug":"/installation/manually-setup","permalink":"/docs/v1.1/installation/manually-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md","tags":[],"version":"v1.1","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1743848435000,"frontMatter":{"title":"Manually Setup"},"sidebar":"docs","previous":{"title":"Summary","permalink":"/docs/v1.1/installation/summary"},"next":{"title":"OpenYurt Experience Center Introduction","permalink":"/docs/v1.1/installation/openyurt-experience-center/overview"}}');var o=t(74848),s=t(28453);const l={title:"Manually Setup"},a=void 0,d={},i=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"1.1 Label cloud nodes",id:"11-label-cloud-nodes",level:3},{value:"2.  OpenYurt Setup Preparation",id:"2--openyurt-setup-preparation",level:2},{value:"2.1 Adjust Kube-Controller-Manager",id:"21-adjust-kube-controller-manager",level:3},{value:"2.2 Deploy Yurt-Tunnel dedicated DNS",id:"22-deploy-yurt-tunnel-dedicated-dns",level:3},{value:"2.3 Adjust Kube-apiserver",id:"23-adjust-kube-apiserver",level:3},{value:"2.4 Adjust Addons",id:"24-adjust-addons",level:3},{value:"3. Setup Control-Plane components of OpenYurt",id:"3-setup-control-plane-components-of-openyurt",level:2},{value:"3.1 Setup <code>openyurt/yurt-app-manager</code> components",id:"31-setup-openyurtyurt-app-manager-components",level:3},{value:"3.1.1 Install yurt-app-manager",id:"311-install-yurt-app-manager",level:4},{value:"3.1.2 Create NodePool",id:"312-create-nodepool",level:4},{value:"3.1.3 Add node into NodePool",id:"313-add-node-into-nodepool",level:4},{value:"3.2 Setup <code>openyurt/openyurt</code> components",id:"32-setup-openyurtopenyurt-components",level:3},{value:"4. Attention",id:"4-attention",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to ",(0,o.jsx)(n.a,{href:"/docs/v1.1/installation/yurtadm-init",children:"yurtadm docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"1-precondition",children:"1. Precondition"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you already have a Kubernetes cluster with at least one node. We recommend to create your Kubernetes cluster with ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",children:"kubeadm"})," tool."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\n"})}),"\n",(0,o.jsx)(n.h3,{id:"11-label-cloud-nodes",children:"1.1 Label cloud nodes"}),"\n",(0,o.jsxs)(n.p,{children:["When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,o.jsx)(n.code,{children:"openyurt.io/is-edge-worker"}),".\nwe will use node ",(0,o.jsx)(n.code,{children:"us-west-1.192.168.0.87"})," as the cloud node. We label the cloud node with value ",(0,o.jsx)(n.code,{children:"false"}),","]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n"})}),"\n",(0,o.jsx)(n.h2,{id:"2--openyurt-setup-preparation",children:"2.  OpenYurt Setup Preparation"}),"\n",(0,o.jsx)(n.h3,{id:"21-adjust-kube-controller-manager",children:"2.1 Adjust Kube-Controller-Manager"}),"\n",(0,o.jsx)(n.p,{children:"To make Yurt-Controller-Manager function properly, we need to disable the NodeLifeCycle controller in Kube-Controller-Manager. (Currently being optimized, this operation will not be needed in the future)"}),"\n",(0,o.jsx)(n.p,{children:"The adjustment operation is as following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/v1.1/installation/openyurt-prepare#2-kube-controller-manager-adjustment",children:"Kube-Controller-Manager"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"22-deploy-yurt-tunnel-dedicated-dns",children:"2.2 Deploy Yurt-Tunnel dedicated DNS"}),"\n",(0,o.jsxs)(n.p,{children:["When cloud components(such as Kube-apiserver, prometheus, metrics-server) access edge side through ",(0,o.jsx)(n.code,{children:"hostname:port"}),", their ",(0,o.jsx)(n.code,{children:"hostname"})," domain should resolve to ",(0,o.jsx)(n.code,{children:"yurt-tunnel-server"})," to make the requests pass through ",(0,o.jsx)(n.code,{children:"yurt-tunnel"})," to target edge node imperceptibly. We should make sure that these DNS domain resolution requests are sent to the Yurt-Tunnel dedicated DNS server (named yurt-tunnel-dns)."]}),"\n",(0,o.jsx)(n.p,{children:"Install yurt-tunnel-dns with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f config/setup/yurt-tunnel-dns.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After installation, we can check if yurt-tunnel-dns started successfully with ",(0,o.jsx)(n.code,{children:"kubectl -n kube-system get po"}),". Also we can get the ",(0,o.jsx)(n.code,{children:"clusterIP"})," of ",(0,o.jsx)(n.code,{children:"yurt-tunnel-dns service"})," which will be used later with ",(0,o.jsx)(n.code,{children:"kubectl -n kube-system get svc yurt-tunnel-dns"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"23-adjust-kube-apiserver",children:"2.3 Adjust Kube-apiserver"}),"\n",(0,o.jsxs)(n.p,{children:["To ensure that the kube-apiserver on the Master node uses ",(0,o.jsx)(n.code,{children:"hostname:port"})," to access the kubelet, and also to ensure that the domain name resolution of ",(0,o.jsx)(n.code,{children:"hostname"})," is performed using the ",(0,o.jsx)(n.code,{children:"yurt-tunnel-dns pod"}),". The relevant configuration of the kube-apiserver component needs to be adjusted."]}),"\n",(0,o.jsx)(n.p,{children:"The adjust operations are as following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/v1.1/installation/openyurt-prepare#3-kube-apiserver-adjustment",children:"Kube-apiserver"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"24-adjust-addons",children:"2.4 Adjust Addons"}),"\n",(0,o.jsx)(n.p,{children:"Kube-proxy and CoreDNS which are installed by kubeadm by default should also be adjusted to adapt to cloud-edge scenarios. The adjust operations are as following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/v1.1/installation/openyurt-prepare#4-coredns-adjustment",children:"CoreDNS"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/v1.1/installation/openyurt-prepare#5-kubeproxy-adjustment",children:"KubeProxy"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"3-setup-control-plane-components-of-openyurt",children:"3. Setup Control-Plane components of OpenYurt"}),"\n",(0,o.jsxs)(n.p,{children:["We recommend to install OpenYurt components with ",(0,o.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),", please make sure that ",(0,o.jsxs)(n.a,{href:"https://helm.sh/docs/intro/install/",children:[(0,o.jsx)(n.code,{children:"helm CLI"})," has been installed"]})," properly before moving on. All the helm charts used in this tutorial can be found in ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt-helm",children:"openyurt-helm repo"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"31-setup-openyurtyurt-app-manager-components",children:["3.1 Setup ",(0,o.jsx)(n.code,{children:"openyurt/yurt-app-manager"})," components"]}),"\n",(0,o.jsx)(n.h4,{id:"311-install-yurt-app-manager",children:"3.1.1 Install yurt-app-manager"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/v1.1/core-concepts/yurt-app-manager",children:"Yurt-App-Manager"})," is a functional component that provides united edge management capabilities for an OpenYurt cluster. You can install this component with helm."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm install  yurt-app-manager -n kube-system ./charts/yurt-app-manager --set image.tag=latest\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can check if yurt-app-manager pod and service have been installed successfully with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep yurt-app-manager\nkubectl get svc -n kube-system | grep yurt-app-manager\n"})}),"\n",(0,o.jsx)(n.h4,{id:"312-create-nodepool",children:"3.1.2 Create NodePool"}),"\n",(0,o.jsx)(n.p,{children:"To better manage the nodes and the traffic on the nodes (e.g., Service traffic topology management), we recommend putting the nodes of the Layer 2 network interworking in the same node pool. In this example, a node pool is created for cloud side as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n"})}),"\n",(0,o.jsx)(n.h4,{id:"313-add-node-into-nodepool",children:"3.1.3 Add node into NodePool"}),"\n",(0,o.jsx)(n.p,{children:"Add the cloud node into nodepool created in 3.1.2:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master\nnode/us-west-1.192.168.0.87 labeled\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"32-setup-openyurtopenyurt-components",children:["3.2 Setup ",(0,o.jsx)(n.code,{children:"openyurt/openyurt"})," components"]}),"\n",(0,o.jsxs)(n.p,{children:["Componentes in the ",(0,o.jsx)(n.code,{children:"openyurt/openyurt"})," includes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/v1.1/core-concepts/yurt-controller-manager",children:"yurt-controller-manager"}),": it prevents apiserver from evicting pods running on the autonomous edge nodes during disconnection."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/v1.1/core-concepts/yurttunnel",children:"yurt-tunnel-server"}),": it constructs the cloud-edge tunnel on the server side"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/v1.1/core-concepts/yurttunnel",children:"yurt-tunnel-agent"}),": it constructs the cloud-edge tunnel on the edge side"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If your cloud node and edge node are in different network domains, please overwrite the default parameters for yurt-tunnel components in ",(0,o.jsx)(n.code,{children:"values.yaml"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'yurtTunnelAgent.parameters.tunnelserverAddr="ip:port"'}),": the public ip along with port of tunnel server where tunnel agent can connect to"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'yurtTunnelServer.parameters.certIps="ip1,ip2"'}),": the public ip of tunnel server"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'yurtTunnelServer.parameters.certDnsNames="dns_name1,dns_name2"'}),": the dns name of tunnel server [OPTIONAL]"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"We can install all the components above with helm:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cat <<EOF | helm install openyurt ./charts/openyurt -n kube-system -f -\nyurtTunnelServer:\n  image:\n    tag: latest\nyurtTunnelAgent:\n  image:\n    tag: latest\nyurtControllerManager:\n  image:\n    tag: latest\nEOF\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If everthing went well, you'll see something like this after typing ",(0,o.jsx)(n.code,{children:"helm list -A"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ helm list -A \nNAME            \tNAMESPACE  \tREVISION\tUPDATED                                \tSTATUS  \tCHART                 \tAPP VERSION\nopenyurt        \tkube-system\t1       \t2022-09-07 17:06:17.764754411 +0800 CST\tdeployed\topenyurt-1.0.0        \t1.0.0      \nyurt-app-manager\tkube-system\t1       \t2022-09-07 17:36:30.371904902 +0800 CST\tdeployed\tyurt-app-manager-0.1.2\t0.8.0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"4-attention",children:"4. Attention"}),"\n",(0,o.jsxs)(n.p,{children:["The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to ",(0,o.jsx)(n.a,{href:"/docs/v1.1/installation/yurtadm-join#2-install-openyurt-node-components",children:"Install OpenYurt Node on Existing K8s Nodes"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);