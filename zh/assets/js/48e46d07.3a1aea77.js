"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[88142],{36660:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=r(85893),s=r(11151);const a={title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},l=void 0,i={id:"installation/manually-setup",title:"\u5728Kubernetes\u4e0a\u5b89\u88c5",description:"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/zh/docs/v1.3/installation/manually-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1711267183,formattedLastUpdatedAt:"2024\u5e743\u670824\u65e5",frontMatter:{title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh/docs/v1.3/installation/summary"},next:{title:"\u8282\u70b9\u63a5\u5165",permalink:"/zh/docs/v1.3/installation/yurtadm-join"}},u={},d=[{value:"1 Kubernetes\u96c6\u7fa4\u73af\u5883",id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",level:2},{value:"2 OpenYurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",id:"2-openyurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",level:2},{value:"3 \u90e8\u7f72OpenYurt\u7684\u63a7\u5236\u9762\u7ec4\u4ef6",id:"3-\u90e8\u7f72openyurt\u7684\u63a7\u5236\u9762\u7ec4\u4ef6",level:2},{value:"3.1 \u5b89\u88c5yurt-manager",id:"31-\u5b89\u88c5yurt-manager",level:3},{value:"3.2 \u5b89\u88c5yurthub\u76f8\u5173\u914d\u7f6e",id:"32-\u5b89\u88c5yurthub\u76f8\u5173\u914d\u7f6e",level:3},{value:"3.3 \u5b89\u88c5\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6Raven",id:"33-\u5b89\u88c5\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6raven",level:3},{value:"4. \u6ce8\u610f",id:"4-\u6ce8\u610f",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",children:"1 Kubernetes\u96c6\u7fa4\u73af\u5883"}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u6237\u9700\u8981\u5148\u81ea\u884c\u51c6\u5907\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4(\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",children:"kubeadm"}),"\u5de5\u5177\u642d\u5efa)\uff0c\u672c\u6587\u6863\u4e2d\u4ee51\u8282\u70b9\u7684Kubernetes\u4e3a\u4f8b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                      STATUS   ROLES                  AGE     VERSION\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   6d1h    v1.22.11\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-openyurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6",children:"2 OpenYurt\u5b89\u88c5\u524d\u7f6e\u6761\u4ef6"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679cRaven\u5f00\u542f\u8282\u70b9\u8f6c\u53d1\u6a21\u5f0f\uff0c\u9700\u8981\u4fdd\u8bc1\u96c6\u7fa4\u4e2d\u6240\u6709\u8282\u70b9IP\u4e0d\u51b2\u7a81\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u91c7\u7528Docker\u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u5219\u9700\u8981\u505a\u4ee5\u4e0b\u8c03\u6574\uff0c\u907f\u514dDocker\u4fee\u6539iptables FORWARD\u94fe\u9ed8\u8ba4\u89c4\u5219\u4e3aDROP\uff0c\u4ece\u800c\u5bfc\u81f4Raven Gateway\u8282\u70b9\u6d41\u91cf\u8f6c\u53d1\u5931\u8d25\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"iptables -w -P FORWARD ACCEPT\n sed -i 's#^After=network-online.target firewalld.service$#After=network-online.target firewalld.service containerd.service#g' \\\n /lib/systemd/system/docker.service\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\u901a\u8fc7Raven\u63d0\u4f9b\u7684VPN\u96a7\u9053,\u8fb9\u7f18\u8282\u70b9pods\u7684\u57df\u540d\u89e3\u6790\u5c06\u7531\u4e3b\u8282\u70b9\u6216\u4e91\u8282\u70b9\u4e0a\u7684CoreDNS\u5b9e\u4f8b\u8fdb\u884c\u5904\u7406\uff0c\u56e0\u6b64\u53ef\u80fd\u5f15\u53d1\u89e3\u6790\u5ef6\u8fdf\u6216\u8005\u8d85\u65f6\u5931\u8d25\u3002\u5982\u679c\u60a8\u5728\u610f\u89e3\u6790\u5ef6\u8fdf\u6216\u8005\u8d85\u65f6\u5931\u8d25\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u6839\u636e",(0,t.jsx)(n.a,{href:"/zh/docs/v1.3/installation/coredns-prepare",children:"CoreDNS\u8c03\u6574"}),"\u6559\u7a0b\u8c03\u6574\u201cCoreDNS\u90e8\u7f72\u201d\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6211\u4eec\u5efa\u8bae\u901a\u8fc7",(0,t.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),"\u6765\u5b89\u88c5OpenYurt\u7ec4\u4ef6\uff0c\u5728\u8fdb\u884c\u5b89\u88c5\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd",(0,t.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"helm CLI"}),"\u5df2\u7ecf\u6b63\u786e\u5b89\u88c5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"3-\u90e8\u7f72openyurt\u7684\u63a7\u5236\u9762\u7ec4\u4ef6",children:"3 \u90e8\u7f72OpenYurt\u7684\u63a7\u5236\u9762\u7ec4\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u8981\u7528\u5230\u7684\u6240\u6709helm charts\u90fd\u53ef\u4ee5\u5728",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt-helm",children:"openyurt-helm \u4ed3\u5e93"}),"\u4e2d\u627e\u5230\u3002\u8bf7\u6309\u7167\u4ee5\u4e0b\u65b9\u5f0f\u6dfb\u52a0\u4ed3\u5e93\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add openyurt https://openyurtio.github.io/openyurt-helm\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"helm search repo openyurt"})," \u6765\u67e5\u770b\u8fd9\u4e9bhelm charts\uff0c\u5e76\u4e14\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c."]}),"\n",(0,t.jsx)(n.h3,{id:"31-\u5b89\u88c5yurt-manager",children:"3.1 \u5b89\u88c5yurt-manager"}),"\n",(0,t.jsx)(n.p,{children:"yurt-manager\u5e94\u8be5\u5728\u901a\u8fc7yurtadm\u547d\u4ee4\u52a0\u5165\u8282\u70b9\u4e4b\u524d\u542f\u52a8\uff0c\u56e0\u4e3a\u8282\u70b9\u4e0a\u7684yurthub\u7ec4\u4ef6\u4f9d\u8d56\u4e8eyurt-manager\u6765\u6279\u51c6csr\u3002\u6240\u4ee5\u8bf7\u786e\u4fddyurt-manager\u7ec4\u4ef6\u5728\u4e3b\u8282\u70b9\u6216\u4efb\u4f55\u5176\u4ed6\u6ca1\u6709yurthub\u7ec4\u4ef6\u7684\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install yurt-manager -n kube-system openyurt/yurt-manager\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u786e\u4fddyurt-manager\u7ec4\u4ef6\u7684pod\u548c\u670d\u52a1\u914d\u7f6e\u5df2\u88ab\u6210\u529f\u521b\u5efa\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep yurt-manager\nkubectl get svc -n kube-system | grep yurt-manager\n"})}),"\n",(0,t.jsx)(n.h3,{id:"32-\u5b89\u88c5yurthub\u76f8\u5173\u914d\u7f6e",children:"3.2 \u5b89\u88c5yurthub\u76f8\u5173\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["yurthub\u76f8\u5173\u914d\u7f6e\u5305\u62ecyurtstaticset\u6a21\u677f\uff0c\u4ee5\u53cayurthub\u76f8\u5173\u7684ConfigMap\u548cClusterRole\u3002\u540c\u65f6\u5728\u5b89\u88c5yurthub\u914d\u7f6e\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5c06",(0,t.jsx)(n.code,{children:"kubernetesServerAddr"}),"\u5b57\u6bb5\u8bbe\u7f6e\u4e3aKubernetes\u670d\u52a1\u5668\u5730\u5740\uff08\u4f7f\u7528",(0,t.jsx)(n.code,{children:"kubectl config view"}),"\u6765\u67e5\u627e\uff09\u3002\n\u4ee5Kubernetes\u670d\u52a1\u5668\u5730\u5740",(0,t.jsx)(n.code,{children:"https://1.2.3.4:6443"}),"\u4e3a\u4f8b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install yurt-hub -n kube-system --set kubernetesServerAddr=https://1.2.3.4:6443 openyurt/yurthub\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u786e\u4fddyurthub yurtstaticset\u548cyurthub cloud yurtstaticset\u5df2\u7ecf\u6210\u529f\u521b\u5efa\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get yss -n kube-system\n"})}),"\n",(0,t.jsx)(n.h3,{id:"33-\u5b89\u88c5\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6raven",children:"3.3 \u5b89\u88c5\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u7ec4\u4ef6Raven"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/zh/docs/v1.3/core-concepts/raven",children:"Raven"}),"\u63d0\u4f9b\u4e86\u4e91\u3001\u8fb9\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u533a\u57df\u7684\u7f51\u7edc\u901a\u4fe1\u80fd\u529b, \u53ef\u901a\u8fc7Helm\u5b89\u88c5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm upgrade --install raven-agent -n kube-system openyurt/raven-agent\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u786e\u8ba4Raven-Agent\u7ec4\u4ef6\u7684pod\u548cservice\u914d\u7f6e\u5df2\u7ecf\u6210\u529f\u521b\u5efa:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep raven-agent\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-\u6ce8\u610f",children:"4. \u6ce8\u610f"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0a\u64cd\u4f5c\u4ec5\u9488\u5bf9Master\u8282\u70b9\uff0c\u5982\u679c\u96c6\u7fa4\u4e2d\u8fd8\u6709\u5176\u4ed6\u8282\u70b9\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8c03\u6574\uff0c\u64cd\u4f5c\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003: ",(0,t.jsx)(n.a,{href:"/zh/docs/v1.3/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6",children:"\u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6"})]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{a:()=>l});var t=r(67294);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);