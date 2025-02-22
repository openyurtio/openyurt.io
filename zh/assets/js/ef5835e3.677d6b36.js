"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[99537],{54849:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"installation/manually-setup","title":"\u5728Kubernetes\u4e0a\u5b89\u88c5","description":"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003yurtadm \u6587\u6863\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/installation/manually-setup.md","sourceDirName":"installation","slug":"/installation/manually-setup","permalink":"/zh/docs/v1.2/installation/manually-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md","tags":[],"version":"v1.2","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1740216193000,"frontMatter":{"title":"\u5728Kubernetes\u4e0a\u5b89\u88c5"},"sidebar":"docs","previous":{"title":"\u4ecb\u7ecd","permalink":"/zh/docs/v1.2/installation/summary"},"next":{"title":"\u8282\u70b9\u63a5\u5165","permalink":"/zh/docs/v1.2/installation/yurtadm-join"}}');var a=r(74848),l=r(28453);const s={title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},o=void 0,c={},i=[{value:"1 Kubernetes\u96c6\u7fa4\u73af\u5883",id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",level:2},{value:"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",level:3},{value:"2 OpenYurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",id:"2-openyurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",level:2},{value:"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6",id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6",level:2},{value:"3.1 \u90e8\u7f72<code>openyurt/yurt-app-manager</code>\u7ec4\u4ef6",id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6",level:3},{value:"3.1.1 \u5b89\u88c5 yurt-app-manager",id:"311-\u5b89\u88c5-yurt-app-manager",level:4},{value:"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60",id:"312-\u521b\u5efa\u8282\u70b9\u6c60",level:4},{value:"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",level:4},{value:"3.2 \u90e8\u7f72<code>openyurt/yurt-controller-manager</code>\u7ec4\u4ef6",id:"32-\u90e8\u7f72openyurtyurt-controller-manager\u7ec4\u4ef6",level:3},{value:"4 \u90e8\u7f72OpenYurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6",id:"4-\u90e8\u7f72openyurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6",level:2},{value:"4.1 \u90e8\u7f72<code>raven-controller-manager</code>\u7ec4\u4ef6",id:"41-\u90e8\u7f72raven-controller-manager\u7ec4\u4ef6",level:3},{value:"4.2 \u90e8\u7f72<code>raven-agent</code>\u7ec4\u4ef6",id:"42-\u90e8\u7f72raven-agent\u7ec4\u4ef6",level:3},{value:"5. \u6ce8\u610f",id:"5-\u6ce8\u610f",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003",(0,a.jsx)(n.a,{href:"/zh/docs/v1.2/installation/yurtadm-init",children:"yurtadm \u6587\u6863"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",children:"1 Kubernetes\u96c6\u7fa4\u73af\u5883"}),"\n",(0,a.jsxs)(n.p,{children:["\u7528\u6237\u9700\u8981\u5148\u81ea\u884c\u51c6\u5907\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4(\u53ef\u4ee5\u901a\u8fc7",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",children:"kubeadm"}),"\u5de5\u5177\u642d\u5efa)\uff0c\u672c\u6587\u6863\u4e2d\u4ee51\u8282\u70b9\u7684Kubernetes\u4e3a\u4f8b\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                      STATUS   ROLES                  AGE     VERSION\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11\n"})}),"\n",(0,a.jsx)(n.h3,{id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",children:"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u4e0e ",(0,a.jsx)(n.code,{children:"apiserver"})," \u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u53ea\u6709\u8fd0\u884c\u5728\u8fb9\u7f18\u81ea\u6cbb\u7684\u8282\u70b9\u4e0a\u7684Pod\u624d\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u901a\u8fc7\u6253 ",(0,a.jsx)(n.code,{children:"openyurt.io/is-edge-worker"})," \u7684\u6807\u7b7e\u7684\u65b9\u5f0f\uff0c\u5c06\u8282\u70b9\u5206\u4e3a\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u3002\n\u6211\u4eec\u5c06 ",(0,a.jsx)(n.code,{children:"izwz9dohcv74iegqecp4axz"})," \u4f5c\u4e3a\u4e91\u7aef\u8282\u70b9\uff0c\u5c06\u6807\u7b7e\u7684 ",(0,a.jsx)(n.code,{children:"value"})," \u503c\u8bbe\u7f6e\u4e3a ",(0,a.jsx)(n.code,{children:"false"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node izwz9dohcv74iegqecp4axz openyurt.io/is-edge-worker=false\nizwz9dohcv74iegqecp4axz labeled\n"})}),"\n",(0,a.jsx)(n.h2,{id:"2-openyurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",children:"2 OpenYurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u4fdd\u8bc1\u96c6\u7fa4\u4e2d\u6240\u6709\u8282\u70b9IP\u4e0d\u51b2\u7a81\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5982\u679c\u91c7\u7528docker\u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u5219\u9700\u8981\u505a\u4ee5\u4e0b\u8c03\u6574\uff0c\u907f\u514dDocker\u4fee\u6539iptables FORWARD\u94fe\u9ed8\u8ba4\u89c4\u5219\u4e3aDROP\uff0c\u4ece\u800c\u5bfc\u81f4Raven Gateway\u8282\u70b9\u6d41\u91cf\u8f6c\u53d1\u5931\u8d25\uff1a"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"iptables -w -P FORWARD ACCEPT\n sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \\\n /lib/systemd/system/docker.service\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["\u901a\u8fc7Raven\u63d0\u4f9b\u7684VPN\u96a7\u9053,\u8fb9\u7f18\u8282\u70b9pods\u7684\u57df\u540d\u89e3\u6790\u5c06\u7531\u4e3b\u8282\u70b9\u6216\u4e91\u8282\u70b9\u4e0a\u7684CoreDNS\u5b9e\u4f8b\u8fdb\u884c\u5904\u7406\uff0c\u56e0\u6b64\u53ef\u80fd\u5f15\u53d1\u89e3\u6790\u5ef6\u8fdf\u6216\u8005\u8d85\u65f6\u5931\u8d25\u3002\u5982\u679c\u60a8\u5728\u610f\u89e3\u6790\u5ef6\u8fdf\u6216\u8005\u8d85\u65f6\u5931\u8d25\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u6839\u636e",(0,a.jsx)(n.a,{href:"/zh/docs/v1.2/installation/coredns-prepare",children:"CoreDNS\u8c03\u6574"}),"\u6559\u7a0b\u8c03\u6574\u201cCoreDNS\u90e8\u7f72\u201d\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6",children:"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6"}),"\n",(0,a.jsxs)(n.p,{children:["\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,a.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),"\u5b89\u88c5OpenYurt\u7ec4\u4ef6\u3002\u8bf7\u5148\u4fdd\u8bc1\u5728\u4f60\u7684\u73af\u5883\u4e2d\u5df2\u7ecf",(0,a.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"\u5b89\u88c5helm"}),"\u3002\u53e6\u5916\uff0c\u63a5\u4e0b\u6765\u8981\u7528\u5230\u7684\u6240\u6709helm charts\u90fd\u53ef\u4ee5\u5728",(0,a.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt-helm",children:"openyurt-helm \u4ed3\u5e93"}),"\u4e2d\u627e\u5230\u3002"]}),"\n",(0,a.jsxs)(n.h3,{id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6",children:["3.1 \u90e8\u7f72",(0,a.jsx)(n.code,{children:"openyurt/yurt-app-manager"}),"\u7ec4\u4ef6"]}),"\n",(0,a.jsx)(n.h4,{id:"311-\u5b89\u88c5-yurt-app-manager",children:"3.1.1 \u5b89\u88c5 yurt-app-manager"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/zh/docs/v1.2/core-concepts/yurt-app-manager",children:"Yurt-App-Manager"}),"\u662fOpenYurt\u96c6\u7fa4\u63d0\u4f9b\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406\u7684\u529f\u80fd\u7ec4\u4ef6\uff0c\u5168\u9762\u63d0\u5347\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u7684\u5e94\u7528\u90e8\u7f72\u6548\u7387\uff0c\u964d\u4f4e\u8fb9\u7f18\u8282\u70b9\u548c\u5e94\u7528\u8fd0\u7ef4\u7684\u590d\u6742\u5ea6\u3002\u901a\u8fc7helm\u5b89\u88c5\u8be5\u7ec4\u4ef6\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm install yurt-app-manager -n kube-system .\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u786e\u8ba4yurt-app-manager\u7ec4\u4ef6\u7684pod\u548cservice\u914d\u7f6e\u5df2\u7ecf\u6210\u529f\u521b\u5efa:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep yurt-app-manager\nkubectl get svc -n kube-system | grep yurt-app-manager\n"})}),"\n",(0,a.jsx)(n.h4,{id:"312-\u521b\u5efa\u8282\u70b9\u6c60",children:"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60"}),"\n",(0,a.jsx)(n.p,{children:"\u4e3a\u4e86\u66f4\u597d\u7684\u7ba1\u7406\u8282\u70b9\u548c\u8282\u70b9\u4e0a\u7684\u6d41\u91cf(\u5982Service\u6d41\u91cf\u62d3\u6251\u7ba1\u7406)\uff0c\u6211\u4eec\u63a8\u8350\u628a\u4e8c\u5c42\u7f51\u7edc\u4e92\u901a\u7684\u8282\u70b9\u653e\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u3002\u672c\u4f8b\u4e2d\u4e3a\u4e91\u7aef\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n"})}),"\n",(0,a.jsx)(n.h4,{id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",children:"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"}),"\n",(0,a.jsx)(n.p,{children:"\u5c06\u4e91\u7aef\u8282\u70b9\u52a0\u51653.1.2\u4e2d\u521b\u5efa\u7684\u4e91\u7aef\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node izwz9dohcv74iegqecp4axz apps.openyurt.io/desired-nodepool=master\nizwz9dohcv74iegqecp4axz labeled\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"32-\u90e8\u7f72openyurtyurt-controller-manager\u7ec4\u4ef6",children:["3.2 \u90e8\u7f72",(0,a.jsx)(n.code,{children:"openyurt/yurt-controller-manager"}),"\u7ec4\u4ef6"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/zh/docs/v1.2/core-concepts/yurt-controller-manager",children:"yurt-controller-manager"}),"\u9632\u6b62apiserver\u5728\u65ad\u5f00\u8fde\u63a5\u65f6\u9a71\u9010\u8fd0\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684pod\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7helm\u5b89\u88c5\u4ee5\u4e0a\u7ec4\u4ef6:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm install openyurt ./openyurt -n kube-system\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7",(0,a.jsx)(n.code,{children:"helm list -A"}),"\u786e\u8ba4\u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ helm list -A \nNAME            \tNAMESPACE  \tREVISION\tUPDATED                                \tSTATUS  \tCHART                 \tAPP VERSION\nopenyurt        \tkube-system\t1       \t2022-09-07 17:06:17.764754411 +0800 CST\tdeployed\topenyurt-1.0.0        \t1.0.0      \nyurt-app-manager\tkube-system\t1       \t2022-09-07 17:36:30.371904902 +0800 CST\tdeployed\tyurt-app-manager-0.1.2\t0.8.0\n"})}),"\n",(0,a.jsx)(n.h2,{id:"4-\u90e8\u7f72openyurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6",children:"4 \u90e8\u7f72OpenYurt\u7684\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/zh/docs/v1.2/core-concepts/raven",children:"Raven"}),"\u63d0\u4f9b\u4e86\u4e91\u3001\u8fb9\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u533a\u57df\u7684\u7f51\u7edc\u901a\u4fe1\u80fd\u529b\uff0craven\u9879\u76ee\u5305\u542b\u4e24\u4e2a\u7ec4\u4ef6raven-controller-manager\u548craven-agent\u6784\u6210\uff1a"]}),"\n",(0,a.jsxs)(n.h3,{id:"41-\u90e8\u7f72raven-controller-manager\u7ec4\u4ef6",children:["4.1 \u90e8\u7f72",(0,a.jsx)(n.code,{children:"raven-controller-manager"}),"\u7ec4\u4ef6"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager",children:"raven-controller-manager"}),"\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49CR Gateway\u7684\u6807\u51c6kubernetes\u63a7\u5236\u5668\uff0c\u88ab\u90e8\u7f72\u5728\u4e91\u7aef\u8282\u70b9\uff08\u53ef\u4e3amaster\u6216cloud\u8282\u70b9\uff09\uff0cGateway CR\u7ba1\u7406\u4e0d\u540c\u7269\u7406\u533a\u57df\u7684\u8282\u70b9\uff0c\u52a8\u6001\u9009\u4e3e\u7269\u7406\u533a\u57df\u5185\u4e00\u4e2a\u5408\u683c\u8282\u70b9\u4f5c\u4e3aGateway\u8282\u70b9\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openyurtio/raven-controller-manager.git\ncd raven-controller-manager\ngit checkout v0.3.0\nmake generate-deploy-yaml\nkubectl apply -f _output/yamls/raven-controller-manager.yaml\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"42-\u90e8\u7f72raven-agent\u7ec4\u4ef6",children:["4.2 \u90e8\u7f72",(0,a.jsx)(n.code,{children:"raven-agent"}),"\u7ec4\u4ef6"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openyurtio/raven.git\ncd raven\ngit checkout v0.3.0\nFORWARD_NODE_IP=true make deploy\n"})}),"\n",(0,a.jsx)(n.h2,{id:"5-\u6ce8\u610f",children:"5. \u6ce8\u610f"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0a\u64cd\u4f5c\u4ec5\u9488\u5bf9Master\u8282\u70b9\uff0c\u5982\u679c\u96c6\u7fa4\u4e2d\u8fd8\u6709\u5176\u4ed6\u8282\u70b9\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8c03\u6574\uff0c\u64cd\u4f5c\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003: ",(0,a.jsx)(n.a,{href:"/zh/docs/v1.2/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6",children:"\u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6"})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(96540);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);