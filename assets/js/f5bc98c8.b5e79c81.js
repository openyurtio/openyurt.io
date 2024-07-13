"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[89188],{57958:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(85893),s=t(11151);const o={title:"Manually Setup"},l=void 0,a={id:"installation/manually-setup",title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a",source:"@site/versioned_docs/version-v0.7.0/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/docs/v0.7.0/installation/manually-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1720854915e3,frontMatter:{title:"Manually Setup"},sidebar:"docs",previous:{title:"Summary",permalink:"/docs/v0.7.0/installation/summary"},next:{title:"Yurtadm init/join",permalink:"/docs/v0.7.0/installation/yurtadm-init-join"}},d={},u=[{value:"1. Precondition",id:"1-precondition",level:2},{value:"2. Label cloud nodes and edge nodes",id:"2-label-cloud-nodes-and-edge-nodes",level:2},{value:"3. Setup Control-Plane components of OpenYurt",id:"3-setup-control-plane-components-of-openyurt",level:2},{value:"3.1 Setup Yurt-controller-manager",id:"31-setup-yurt-controller-manager",level:3},{value:"Note:",id:"note",level:4},{value:"3.2 Setup Yurt-App-Manager",id:"32-setup-yurt-app-manager",level:3},{value:"3.3 Setup Yurt-tunnel",id:"33-setup-yurt-tunnel",level:3},{value:"3.4 Setup Yurthub Settings",id:"34-setup-yurthub-settings",level:3},{value:"4. Join Edge Nodes",id:"4-join-edge-nodes",level:2},{value:"4.1 Configure Joined Nodes",id:"41-configure-joined-nodes",level:3},{value:"4.1.1 Setup Yurthub",id:"411-setup-yurthub",level:4},{value:"4.1.2 Configure Kubelet",id:"412-configure-kubelet",level:4},{value:"4.1.3 Restart Pods",id:"413-restart-pods",level:4},{value:"4.2 Join Edge Nodes From Scratch",id:"42-join-edge-nodes-from-scratch",level:3}];function i(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a\ntwo-nodes Kubernetes cluster, and all the yaml files used in this tutorial can be found\nat ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/tree/master/config/setup",children:"openyurt repo"})," or ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup",children:"yurt-app-manager repo"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"1-precondition",children:"1. Precondition"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you already have installed a two-nodes Kubernetes cluster. like ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",children:"kubeadm"})," tool."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n"})}),"\n",(0,r.jsxs)(n.p,{children:["OpenYurt need to change kubernetes component configurations to adapt to edge environment. Please complete the following configurations for ",(0,r.jsx)(n.code,{children:"Kube-Controller-Manager"}),", ",(0,r.jsx)(n.code,{children:"CoreDNS"}),", ",(0,r.jsx)(n.code,{children:"KubeProxy"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/v0.7.0/installation/openyurt-prepare#1-kube-controller-manager-adjustment",children:"Kube-Controller-Manager"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/v0.7.0/installation/openyurt-prepare#2-coredns-adjustment",children:"CoreDNS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/v0.7.0/installation/openyurt-prepare#3-kubeproxy-adjustment",children:"KubeProxy"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2-label-cloud-nodes-and-edge-nodes",children:"2. Label cloud nodes and edge nodes"}),"\n",(0,r.jsxs)(n.p,{children:["When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,r.jsx)(n.code,{children:"openyurt.io/is-edge-worker"}),".\nwe will use node ",(0,r.jsx)(n.code,{children:"us-west-1.192.168.0.87"})," as the cloud node."]}),"\n",(0,r.jsxs)(n.p,{children:["We label the cloud node with value ",(0,r.jsx)(n.code,{children:"false"}),","]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n"})}),"\n",(0,r.jsxs)(n.p,{children:["and the edge node with value ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n"})}),"\n",(0,r.jsx)(n.p,{children:"To activate the autonomous mode, we annotate the edge node by typing following command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-setup-control-plane-components-of-openyurt",children:"3. Setup Control-Plane components of OpenYurt"}),"\n",(0,r.jsx)(n.h3,{id:"31-setup-yurt-controller-manager",children:"3.1 Setup Yurt-controller-manager"}),"\n",(0,r.jsx)(n.p,{children:"Next, we need to deploy the Yurt controller manager, which prevents apiserver from evicting pods running on the\nautonomous edge nodes during disconnection."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/yurt-controller-manager.yaml\ndeployment.apps/yurt-controller-manager created\n"})}),"\n",(0,r.jsx)(n.h4,{id:"note",children:"Note:"}),"\n",(0,r.jsx)(n.p,{children:'Since Docker turn on pull rate limit on anonymous request. You may encounter error message like "You have reached your pull rate limit. xxxx". In that case you will need to create a docker-registry secret to pull the image.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ kubectl create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then edit the config/setup/yurt-controller-manager.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"...\n      containers:\n      - name: yurt-controller-manager\n        image: openyurt/yurt-controller-manager:latest\n        command:\n        - yurt-controller-manager\n      imagePullSecrets:\n      - name: dockerpass\n"})}),"\n",(0,r.jsx)(n.h3,{id:"32-setup-yurt-app-manager",children:"3.2 Setup Yurt-App-Manager"}),"\n",(0,r.jsxs)(n.p,{children:["please get ",(0,r.jsx)(n.code,{children:"config/setup/all_in_one.yaml"})," from ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup",children:"yurt-app-manager repo"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ kubectl apply -f config/setup/all_in_one.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Wait for the yurt-app-manager operator to be created successfully"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ kubectl get pod -n kube-system | grep yurt-app-manager\n$ kubectl get svc -n kube-system | grep yurt-app-manager\n"})}),"\n",(0,r.jsx)(n.h3,{id:"33-setup-yurt-tunnel",children:"3.3 Setup Yurt-tunnel"}),"\n",(0,r.jsx)(n.p,{children:"Then, we can deploy the yurt-tunnel-server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/yurt-tunnel-server.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"And, apply the yurt-tunnel-agent yaml:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f config/setup/yurt-tunnel-agent.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After the agent and the server are running, we should check if yurt-tunnel can work by executing command like ",(0,r.jsx)(n.code,{children:"kubectl logs/exec"})]}),"\n",(0,r.jsx)(n.h3,{id:"34-setup-yurthub-settings",children:"3.4 Setup Yurthub Settings"}),"\n",(0,r.jsx)(n.p,{children:"Deploy global settings(i.e., RBAC, configmap) for yurthub."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/yurthub-cfg.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4-join-edge-nodes",children:"4. Join Edge Nodes"}),"\n",(0,r.jsxs)(n.p,{children:["we can install node components of OpenYurt on edge nodes that already have been joined in the Kubernetes cluster(like ",(0,r.jsx)(n.code,{children:"node/us-west-1.192.168.0.88"}),"). on the other hand,\nwe also can join new edge nodes from scratch into the OpenYurt cluster."]}),"\n",(0,r.jsx)(n.h3,{id:"41-configure-joined-nodes",children:"4.1 Configure Joined Nodes"}),"\n",(0,r.jsx)(n.p,{children:"only setup node components of OpenYurt on edge nodes that already have been joined in the Kubernetes cluster."}),"\n",(0,r.jsx)(n.h4,{id:"411-setup-yurthub",children:"4.1.1 Setup Yurthub"}),"\n",(0,r.jsx)(n.p,{children:"Before proceeding, we need to prepare the following items:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Get the apiserver's address (i.e., ip",":port",") and a ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/",children:"bootstrap token"}),", which will be used to replace the placeholder in the template file ",(0,r.jsx)(n.code,{children:"config/setup/yurthub.yaml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In the following command, we assume that the address of the apiserver is 1.2.3.4:5678 and bootstrap token is 07401b.f395accd246ae52d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ cat config/setup/yurthub.yaml |\nsed 's|__kubernetes_master_address__|1.2.3.4:5678|;\ns|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&\nscp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests\n"})}),"\n",(0,r.jsx)(n.p,{children:"and the Yurthub will be ready in minutes."}),"\n",(0,r.jsx)(n.h4,{id:"412-configure-kubelet",children:"4.1.2 Configure Kubelet"}),"\n",(0,r.jsx)(n.p,{children:"we need to reset the kubelet service to let it access the apiserver through the yurthub (The following steps assume that we have logged on to the edge node as the root user).\nAs kubelet will connect to the Yurthub through HTTP, so we create a new kubeconfig file for the kubelet service."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In order for let kubelet to use the new kubeconfig, we edit the drop-in file of the kubelet service (i.e., ",(0,r.jsx)(n.code,{children:"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"})," or ",(0,r.jsx)(n.code,{children:"/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf"})," for CentOS)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n'})}),"\n",(0,r.jsx)(n.p,{children:"then, we restart the kubelet service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finally, we need to make sure node is ready after kubelet restart."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n"})}),"\n",(0,r.jsx)(n.h4,{id:"413-restart-pods",children:"4.1.3 Restart Pods"}),"\n",(0,r.jsx)(n.p,{children:"After Yurthub installation and kubelet restart, all pods on this edge node should be recreated in order to make sure pods access kube-apiserver through Yurthub.\nBefore performing this operation, confirm the impact on the production environment."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n\n// then delete all pods above except yurthub pod.\n$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr\n"})}),"\n",(0,r.jsx)(n.h3,{id:"42-join-edge-nodes-from-scratch",children:"4.2 Join Edge Nodes From Scratch"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"yurtadm join"})," command is used for joining new edge nodes into cluster. detail information is ",(0,r.jsx)(n.a,{href:"/docs/v0.7.0/installation/yurtadm-init-join#23joining-nodes-to-cluster",children:"here"})]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>l});var r=t(67294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);