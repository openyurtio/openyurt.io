"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[74777],{39142:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"installation/manually-setup","title":"\u5728Kubernetes\u4e0a\u5b89\u88c5","description":"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003yurtadm \u6587\u6863\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/installation/manually-setup.md","sourceDirName":"installation","slug":"/installation/manually-setup","permalink":"/zh/docs/v1.0/installation/manually-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md","tags":[],"version":"v1.0","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"\u5728Kubernetes\u4e0a\u5b89\u88c5"},"sidebar":"docs","previous":{"title":"\u4ecb\u7ecd","permalink":"/zh/docs/v1.0/installation/summary"},"next":{"title":"\u4ece\u96f6\u5f00\u59cb\u5b89\u88c5","permalink":"/zh/docs/v1.0/installation/yurtadm-init"}}');var l=r(74848),t=r(28453);const a={title:"\u5728Kubernetes\u4e0a\u5b89\u88c5"},d=void 0,u={},o=[{value:"1 Kubernetes\u96c6\u7fa4\u73af\u5883",id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",level:2},{value:"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",level:3},{value:"2 OpenYurt\u5b89\u88c5\u51c6\u5907",id:"2-openyurt\u5b89\u88c5\u51c6\u5907",level:2},{value:"2.1 Kube-Controller-Manager\u8c03\u6574",id:"21-kube-controller-manager\u8c03\u6574",level:3},{value:"2.2 \u90e8\u7f72Yurt-Tunnel\u4e13\u7528DNS",id:"22-\u90e8\u7f72yurt-tunnel\u4e13\u7528dns",level:3},{value:"2.3 Kube-apiserver\u8c03\u6574",id:"23-kube-apiserver\u8c03\u6574",level:3},{value:"2.4 Addons\u8c03\u6574",id:"24-addons\u8c03\u6574",level:3},{value:"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6",id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6",level:2},{value:"3.1 \u90e8\u7f72<code>openyurt/yurt-app-manager</code>\u7ec4\u4ef6",id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6",level:3},{value:"3.1.1 \u5b89\u88c5 yurt-app-manager",id:"311-\u5b89\u88c5-yurt-app-manager",level:4},{value:"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60",id:"312-\u521b\u5efa\u8282\u70b9\u6c60",level:4},{value:"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",level:4},{value:"3.2 \u90e8\u7f72<code>openyurt/openyurt</code>\u7ec4\u4ef6",id:"32-\u90e8\u7f72openyurtopenyurt\u7ec4\u4ef6",level:3},{value:"4. \u6ce8\u610f",id:"4-\u6ce8\u610f",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u6211\u4eec\u5047\u8bbe\u7528\u6237\u5df2\u7ecf\u5b89\u88c5\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u521b\u5efaOpenYurt\u96c6\u7fa4\uff0c\u8bf7\u53c2\u8003",(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/installation/yurtadm-init",children:"yurtadm \u6587\u6863"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",children:"1 Kubernetes\u96c6\u7fa4\u73af\u5883"}),"\n",(0,l.jsxs)(n.p,{children:["\u7528\u6237\u9700\u8981\u5148\u81ea\u884c\u51c6\u5907\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4(\u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(n.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",children:"kubeadm"}),"\u5de5\u5177\u642d\u5efa)\uff0c\u672c\u6587\u6863\u4e2d\u4ee51\u8282\u70b9\u7684Kubernetes\u4e3a\u4f8b\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\n"})}),"\n",(0,l.jsx)(n.h3,{id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e",children:"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u6253\u6807\u7b7e"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u4e0e ",(0,l.jsx)(n.code,{children:"apiserver"})," \u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u53ea\u6709\u8fd0\u884c\u5728\u8fb9\u7f18\u81ea\u6cbb\u7684\u8282\u70b9\u4e0a\u7684Pod\u624d\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u901a\u8fc7\u6253 ",(0,l.jsx)(n.code,{children:"openyurt.io/is-edge-worker"})," \u7684\u6807\u7b7e\u7684\u65b9\u5f0f\uff0c\u5c06\u8282\u70b9\u5206\u4e3a\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u3002\n\u6211\u4eec\u5c06 ",(0,l.jsx)(n.code,{children:"us-west-1.192.168.0.87"})," \u4f5c\u4e3a\u4e91\u7aef\u8282\u70b9\uff0c\u5c06\u6807\u7b7e\u7684 ",(0,l.jsx)(n.code,{children:"value"})," \u503c\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(n.code,{children:"false"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n"})}),"\n",(0,l.jsx)(n.h2,{id:"2-openyurt\u5b89\u88c5\u51c6\u5907",children:"2 OpenYurt\u5b89\u88c5\u51c6\u5907"}),"\n",(0,l.jsx)(n.h3,{id:"21-kube-controller-manager\u8c03\u6574",children:"2.1 Kube-Controller-Manager\u8c03\u6574"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u4e86\u4fdd\u8bc1Yurt-Controller-Manager\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff0c\u9700\u8981\u5173\u95edKube-Controller-Manager\u4e2d\u7684NodeLifeCycle controller(\u76ee\u524d\u6b63\u5728\u4f18\u5316\uff0c\u540e\u7eedKube-Controller-Manager\u5c06\u65e0\u9700\u8c03\u6574)\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Kube-Controller-Manager\u914d\u7f6e\u8c03\u6574\u65b9\u6cd5\u5982\u4e0b:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/installation/openyurt-prepare#2-kube-controller-manager%E8%B0%83%E6%95%B4",children:"Kube-Controller-Manager"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"22-\u90e8\u7f72yurt-tunnel\u4e13\u7528dns",children:"2.2 \u90e8\u7f72Yurt-Tunnel\u4e13\u7528DNS"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e91\u7aef\u7ec4\u4ef6(\u5982Kube-apiserver, prometheus, metrics-server\u7b49)\u901a\u8fc7",(0,l.jsx)(n.code,{children:"hostname:port"}),"\u8bbf\u95ee\u8fb9\u7f18\u65f6\uff0c\u4e3a\u4e86\u8ba9",(0,l.jsx)(n.code,{children:"hostname"}),"\u57df\u540d\u89e3\u6790\u5230",(0,l.jsx)(n.code,{children:"yurt-tunnel-server"}),",\u4ece\u800c\u8ba9\u8bf7\u6c42\u65e0\u611f\u77e5\n\u7ecf\u8fc7",(0,l.jsx)(n.code,{children:"yurt-tunnel-server/yurt-tunnel-agent"}),"\u5230\u8fbe\u8fb9\u7f18\u8282\u70b9\u3002\u9700\u8981\u786e\u4fdd\u7ec4\u4ef6\u7684DNS\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53d1\u9001\u5230Yurt-Tunnel\u4e13\u7528\u7684DNS(\u53d6\u540d\u4e3ayurt-tunnel-dns)\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5yurt-tunnel-dns:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f config/setup/yurt-tunnel-dns.yaml\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,l.jsx)(n.code,{children:"kubectl -n kube-system get po"}),"\u7b49\u786e\u8ba4\u4e00\u4e0byurt-tunnel-dns\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38\u542f\u52a8\u3002\u5e76\u4e14\u901a\u8fc7",(0,l.jsx)(n.code,{children:"kubectl -n kube-system get svc yurt-tunnel-dns"}),"\u83b7\u53d6\u5230",(0,l.jsx)(n.code,{children:"yurt-tunnel-dns service"}),"\u7684",(0,l.jsx)(n.code,{children:"clusterIP"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"23-kube-apiserver\u8c03\u6574",children:"2.3 Kube-apiserver\u8c03\u6574"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1Master\u8282\u70b9\u4e0akube-apiserver\u4f7f\u7528",(0,l.jsx)(n.code,{children:"hostname:port"}),"\u8bbf\u95eekubelet\uff0c\u540c\u65f6\u4fdd\u8bc1\u4f7f\u7528",(0,l.jsx)(n.code,{children:"yurt-tunnel-dns pod"}),"\u5bf9",(0,l.jsx)(n.code,{children:"hostname"}),"\u8fdb\u884c\u57df\u540d\u89e3\u6790\u3002\u9700\u8981\u8c03\u6574kube-apiserver\u7ec4\u4ef6\u7684\u76f8\u5173\u914d\u7f6e\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"Kube-apiserver\u914d\u7f6e\u8c03\u6574\u65b9\u6cd5\u5982\u4e0b:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/installation/openyurt-prepare#3-kube-apiserver%E8%B0%83%E6%95%B4",children:"Kube-apiserver"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"24-addons\u8c03\u6574",children:"2.4 Addons\u8c03\u6574"}),"\n",(0,l.jsx)(n.p,{children:"kubeadm\u9ed8\u8ba4\u5b89\u88c5kube-proxy\u548cCoreDNS\u7684\u914d\u7f6e\u4e5f\u9700\u8981\u914d\u7f6e\uff0c\u4ece\u800c\u9002\u914d\u4e91\u8fb9\u534f\u540c\u573a\u666f\u3002\u8c03\u6574\u914d\u7f6e\u65b9\u6cd5\u5982\u4e0b:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/installation/openyurt-prepare#4-coredns%E8%B0%83%E6%95%B4",children:"CoreDNS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/installation/openyurt-prepare#5-kubeproxy%E8%B0%83%E6%95%B4",children:"KubeProxy"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6",children:"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,l.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),"\u5b89\u88c5OpenYurt\u7ec4\u4ef6\u3002\u8bf7\u5148\u4fdd\u8bc1\u5728\u4f60\u7684\u73af\u5883\u4e2d\u5df2\u7ecf",(0,l.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"\u5b89\u88c5helm"}),"\u3002\u53e6\u5916\uff0c\u63a5\u4e0b\u6765\u8981\u7528\u5230\u7684\u6240\u6709helm charts\u90fd\u53ef\u4ee5\u5728",(0,l.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt-helm",children:"openyurt-helm \u4ed3\u5e93"}),"\u4e2d\u627e\u5230\u3002"]}),"\n",(0,l.jsxs)(n.h3,{id:"31-\u90e8\u7f72openyurtyurt-app-manager\u7ec4\u4ef6",children:["3.1 \u90e8\u7f72",(0,l.jsx)(n.code,{children:"openyurt/yurt-app-manager"}),"\u7ec4\u4ef6"]}),"\n",(0,l.jsx)(n.h4,{id:"311-\u5b89\u88c5-yurt-app-manager",children:"3.1.1 \u5b89\u88c5 yurt-app-manager"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/core-concepts/yurt-app-manager",children:"Yurt-App-Manager"}),"\u662fOpenYurt\u96c6\u7fa4\u63d0\u4f9b\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406\u7684\u529f\u80fd\u7ec4\u4ef6\uff0c\u5168\u9762\u63d0\u5347\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u7684\u5e94\u7528\u90e8\u7f72\u6548\u7387\uff0c\u964d\u4f4e\u8fb9\u7f18\u8282\u70b9\u548c\u5e94\u7528\u8fd0\u7ef4\u7684\u590d\u6742\u5ea6\u3002\u901a\u8fc7helm\u5b89\u88c5\u8be5\u7ec4\u4ef6\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"helm install yurt-app-manager -n kube-system ./charts/yurt-app-manager/\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u786e\u8ba4yurt-app-manager\u7ec4\u4ef6\u7684pod\u548cservice\u914d\u7f6e\u5df2\u7ecf\u6210\u529f\u521b\u5efa:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kubectl get pod -n kube-system | grep yurt-app-manager\nkubectl get svc -n kube-system | grep yurt-app-manager\n"})}),"\n",(0,l.jsx)(n.h4,{id:"312-\u521b\u5efa\u8282\u70b9\u6c60",children:"3.1.2 \u521b\u5efa\u8282\u70b9\u6c60"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u4e86\u66f4\u597d\u7684\u7ba1\u7406\u8282\u70b9\u548c\u8282\u70b9\u4e0a\u7684\u6d41\u91cf(\u5982Service\u6d41\u91cf\u62d3\u6251\u7ba1\u7406)\uff0c\u6211\u4eec\u63a8\u8350\u628a\u4e8c\u5c42\u7f51\u7edc\u4e92\u901a\u7684\u8282\u70b9\u653e\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u3002\u672c\u4f8b\u4e2d\u4e3a\u4e91\u7aef\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\nEOF\n"})}),"\n",(0,l.jsx)(n.h4,{id:"313-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",children:"3.1.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"}),"\n",(0,l.jsx)(n.p,{children:"\u5c06\u4e91\u7aef\u8282\u70b9\u52a0\u51653.1.2\u4e2d\u521b\u5efa\u7684\u4e91\u7aef\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master\nnode/us-west-1.192.168.0.87 labeled\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"32-\u90e8\u7f72openyurtopenyurt\u7ec4\u4ef6",children:["3.2 \u90e8\u7f72",(0,l.jsx)(n.code,{children:"openyurt/openyurt"}),"\u7ec4\u4ef6"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728",(0,l.jsx)(n.code,{children:"openyurt/openyurt"}),"\u4e2d\u7684\u7ec4\u4ef6\u5305\u62ec\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/core-concepts/yurt-controller-manager",children:"yurt-controller-manager"}),": \u9632\u6b62apiserver\u5728\u65ad\u5f00\u8fde\u63a5\u65f6\u9a71\u9010\u8fd0\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684pod"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/core-concepts/yurttunnel",children:"yurt-tunnel-server"}),": \u5728\u4e91\u7aef\u6784\u5efa\u4e91\u8fb9\u96a7\u9053"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/core-concepts/yurttunnel",children:"yurt-tunnel-agent"}),": \u5728\u8fb9\u7f18\u4fa7\u6784\u5efa\u4e91\u8fb9\u96a7\u9053"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u4e91\u8fb9\u8282\u70b9\u4e0d\u5728\u540c\u4e00\u7f51\u7edc\u5e73\u9762\u5185, \u8bf7\u624b\u52a8\u4fee\u6539",(0,l.jsx)(n.code,{children:"values.yaml"}),"\u4e2dtunnel\u76f8\u5173\u53c2\u6570:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'yurtTunnelAgent.parameters.tunnelserverAddr="ip:port"'}),": \u7528\u4e8etunnel agent\u8fde\u63a5tunnel server\u7684\u516c\u7f51IP\u4e0e\u7aef\u53e3"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'yurtTunnelServer.parameters.certIps="ip1,ip2"'}),": tunnel server\u7684\u516c\u7f51IP"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:'yurtTunnelServer.parameters.certDnsNames="dns_name1,dns_name2"'}),": tunnel server\u7684DNS\u540d\u79f0 [OPTIONAL]"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7helm\u5b89\u88c5\u4ee5\u4e0a\u7ec4\u4ef6:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"helm install openyurt -n kube-system ./charts/openyurt/\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(n.code,{children:"helm list -A"}),"\u786e\u8ba4\u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ helm list -A \nNAME            \tNAMESPACE  \tREVISION\tUPDATED                                \tSTATUS  \tCHART                 \tAPP VERSION\nopenyurt        \tkube-system\t1       \t2022-09-07 17:06:17.764754411 +0800 CST\tdeployed\topenyurt-1.0.0        \t1.0.0      \nyurt-app-manager\tkube-system\t1       \t2022-09-07 17:36:30.371904902 +0800 CST\tdeployed\tyurt-app-manager-0.1.2\t0.8.0\n"})}),"\n",(0,l.jsx)(n.h2,{id:"4-\u6ce8\u610f",children:"4. \u6ce8\u610f"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u4e0a\u64cd\u4f5c\u4ec5\u9488\u5bf9Master\u8282\u70b9\uff0c\u5982\u679c\u96c6\u7fa4\u4e2d\u8fd8\u6709\u5176\u4ed6\u8282\u70b9\uff0c\u8fd8\u9700\u8981\u989d\u5916\u8c03\u6574\uff0c\u64cd\u4f5c\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003: ",(0,l.jsx)(n.a,{href:"/zh/docs/v1.0/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6",children:"\u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6"})]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var s=r(96540);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);