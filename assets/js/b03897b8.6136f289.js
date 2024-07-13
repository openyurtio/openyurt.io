"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1755],{75012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(85893),r=t(11151);const a={title:"Manually Setup"},l=void 0,s={id:"installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to yurtadm docs.",source:"@site/versioned_docs/version-v1.2/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/v1.2/installation/manually-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v1.2",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1720854915e3,frontMatter:{title:"Manually Setup"},sidebar:"docs",previous:{title:"Summary",permalink:"/docs/v1.2/installation/summary"},next:{title:"Join Nodes",permalink:"/docs/v1.2/installation/yurtadm-join"}},i={},d=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"1.1 Label cloud nodes",id:"11-label-cloud-nodes",level:3},{value:"2.  OpenYurt Setup Pre-requirement",id:"2--openyurt-setup-pre-requirement",level:2},{value:"3. Setup Control-Plane components of OpenYurt",id:"3-setup-control-plane-components-of-openyurt",level:2},{value:"3.1 Setup <code>openyurt/yurt-app-manager</code> components",id:"31-setup-openyurtyurt-app-manager-components",level:3},{value:"3.1.1 Install yurt-app-manager",id:"311-install-yurt-app-manager",level:4},{value:"3.1.2 Create NodePool",id:"312-create-nodepool",level:4},{value:"3.1.3 Add node into NodePool",id:"313-add-node-into-nodepool",level:4},{value:"3.2 Setup <code>openyurt/yurt-controller-manager</code> components",id:"32-setup-openyurtyurt-controller-manager-components",level:3},{value:"4. Setup Cross-Network-Domain Communication components of OpenYurt",id:"4-setup-cross-network-domain-communication-components-of-openyurt",level:2},{value:"4.1 Setup <code>raven-controller-manager</code> component",id:"41-setup-raven-controller-manager-component",level:3},{value:"4.2 Setup<code>raven-agent</code> component",id:"42-setupraven-agent-component",level:3},{value:"5. Attention",id:"5-attention",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This tutorial shows how to setup OpenYurt cluster manually. We assume you already have a Kubernetes cluster setup properly. If you want to create an OpenYurt cluster from scratch, please refer to ",(0,o.jsx)(n.a,{href:"/docs/v1.2/installation/yurtadm-init",children:"yurtadm docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"1-precondition",children:"1. Precondition"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you already have a Kubernetes cluster with at least one node. We recommend to create your Kubernetes cluster with ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",children:"kubeadm"})," tool."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                      STATUS   ROLES                  AGE     VERSION\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11\n"})}),"\n",(0,o.jsx)(n.h3,{id:"11-label-cloud-nodes",children:"1.1 Label cloud nodes"}),"\n",(0,o.jsxs)(n.p,{children:["When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,o.jsx)(n.code,{children:"openyurt.io/is-edge-worker"}),".\nwe will use node ",(0,o.jsx)(n.code,{children:"izwz9dohcv74iegqecp4axz"})," as the cloud node. We label the cloud node with value ",(0,o.jsx)(n.code,{children:"false"}),","]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node izwz9dohcv74iegqecp4axz openyurt.io/is-edge-worker=false\nizwz9dohcv74iegqecp4axz labeled\n"})}),"\n",(0,o.jsx)(n.h2,{id:"2--openyurt-setup-pre-requirement",children:"2.  OpenYurt Setup Pre-requirement"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The IP addresses of all nodes in the cluster must be different"}),"\n",(0,o.jsxs)(n.li,{children:["You must make the following adjustments if using docker as container runtime, which is mainly to avoid docker modifying the iptables forward chain and damaged the node forward.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"iptables -w -P FORWARD ACCEPT\nsed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \\\n/lib/systemd/system/docker.service\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Domain Name resolution from pods on edge nodes will be handled by CoreDNS instance on master node or cloud node through VPN tunnel that provided by Raven, so some resolution latency or timeout will be caused by network. we recommend you to adjust ",(0,o.jsx)(n.code,{children:"CoreDNS Deployment"})," according to ",(0,o.jsx)(n.a,{href:"/docs/v1.2/installation/coredns-prepare",children:"CoreDNS Adjustment"})," tutorial if you care about latency or timeout."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"3-setup-control-plane-components-of-openyurt",children:"3. Setup Control-Plane components of OpenYurt"}),"\n",(0,o.jsxs)(n.p,{children:["We recommend to install OpenYurt components with ",(0,o.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),", please make sure that ",(0,o.jsxs)(n.a,{href:"https://helm.sh/docs/intro/install/",children:[(0,o.jsx)(n.code,{children:"helm CLI"})," has been installed"]})," properly before moving on. All the helm charts used in this tutorial can be found in ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt-helm",children:"openyurt-helm repo"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"31-setup-openyurtyurt-app-manager-components",children:["3.1 Setup ",(0,o.jsx)(n.code,{children:"openyurt/yurt-app-manager"})," components"]}),"\n",(0,o.jsx)(n.h4,{id:"311-install-yurt-app-manager",children:"3.1.1 Install yurt-app-manager"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/v1.2/core-concepts/yurt-app-manager",children:"Yurt-App-Manager"})," is a functional component that provides united edge management capabilities for an OpenYurt cluster. You can install this component with helm."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm install  yurt-app-manager -n kube-system ./charts/yurt-app-manager\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can check if yurt-app-manager pod and service have been installed successfully with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep yurt-app-manager\nkubectl get svc -n kube-system | grep yurt-app-manager\n"})}),"\n",(0,o.jsx)(n.h4,{id:"312-create-nodepool",children:"3.1.2 Create NodePool"}),"\n",(0,o.jsx)(n.p,{children:"To better manage the nodes and the traffic on the nodes (e.g., Service traffic topology management), we recommend putting the nodes of the Layer 2 network interworking in the same node pool. In this example, a node pool is created for cloud side as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n"})}),"\n",(0,o.jsx)(n.h4,{id:"313-add-node-into-nodepool",children:"3.1.3 Add node into NodePool"}),"\n",(0,o.jsx)(n.p,{children:"Add the cloud node into nodepool created in 3.1.2:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node izwz9dohcv74iegqecp4axz apps.openyurt.io/desired-nodepool=master\nizwz9dohcv74iegqecp4axz labeled\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"32-setup-openyurtyurt-controller-manager-components",children:["3.2 Setup ",(0,o.jsx)(n.code,{children:"openyurt/yurt-controller-manager"})," components"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/v1.2/core-concepts/yurt-controller-manager",children:"yurt-controller-manager"}),": it prevents apiserver from evicting pods running on the autonomous edge nodes during disconnection."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"We can install all the components above with helm:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm install openyurt ./charts/openyurt -n kube-system\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If everthing went well, you'll see something like this after typing ",(0,o.jsx)(n.code,{children:"helm list -A"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ helm list -A \nNAME            \tNAMESPACE  \tREVISION\tUPDATED                                \tSTATUS  \tCHART                 \tAPP VERSION\nopenyurt        \tkube-system\t1       \t2022-09-07 17:06:17.764754411 +0800 CST\tdeployed\topenyurt-1.0.0        \t1.0.0      \nyurt-app-manager\tkube-system\t1       \t2022-09-07 17:36:30.371904902 +0800 CST\tdeployed\tyurt-app-manager-0.1.2\t0.8.0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"4-setup-cross-network-domain-communication-components-of-openyurt",children:"4. Setup Cross-Network-Domain Communication components of OpenYurt"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/v1.2/core-concepts/raven",children:"Raven"})," provides network communication capabilities when the cloud and the edge are in different network areas\uff0c which include two components raven-controller-manager and raven-agent."]}),"\n",(0,o.jsxs)(n.h3,{id:"41-setup-raven-controller-manager-component",children:["4.1 Setup ",(0,o.jsx)(n.code,{children:"raven-controller-manager"})," component"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager",children:"raven-controller-manager"})," is a standard kubernetes controller for the Gateway, a custom cluster resource, deployed on cloud nodes (which can be master or Cloud nodes). Gateway CR manages nodes in different physical zones and dynamically elects a qualified node in the physical zone as a Gateway node."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openyurtio/raven-controller-manager.git\ncd raven-controller-manager\ngit checkout v0.3.0\nmake generate-deploy-yaml\nkubectl apply -f _output/yamls/raven-controller-manager.yaml\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"42-setupraven-agent-component",children:["4.2 Setup",(0,o.jsx)(n.code,{children:"raven-agent"})," component"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openyurtio/raven.git\ncd raven\ngit checkout v0.3.0\nFORWARD_NODE_IP=true make deploy\n"})}),"\n",(0,o.jsx)(n.h2,{id:"5-attention",children:"5. Attention"}),"\n",(0,o.jsxs)(n.p,{children:["The above operation is only for the Master node, if there are other nodes in the cluster, additional adjustment is needed, the operation method can be referred to ",(0,o.jsx)(n.a,{href:"/docs/v1.2/installation/yurtadm-join#2-install-openyurt-node-components",children:"Install OpenYurt Node on Existing K8s Nodes"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>l});var o=t(67294);const r={},a=o.createContext(r);function l(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);