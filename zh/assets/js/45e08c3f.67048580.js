"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[53929],{15899:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var t=s(85893),r=s(11151);const d={title:"\u8282\u70b9\u63a5\u5165"},o=void 0,c={id:"installation/yurtadm-join",title:"\u8282\u70b9\u63a5\u5165",description:"\u7528\u6237\u6839\u636e\u8282\u70b9\u81ea\u8eab\u7684\u72b6\u51b5\uff0c\u9009\u62e9\u4e0b\u8ff0\u5176\u4e2d\u4e00\u79cd\u65b9\u6cd5\u6765\u63a5\u5165\u8282\u70b9",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/yurtadm-join.md",sourceDirName:"installation",slug:"/installation/yurtadm-join",permalink:"/zh/docs/next/installation/yurtadm-join",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-join.md",tags:[],version:"current",lastUpdatedBy:"zyjhtangtang",lastUpdatedAt:1722997831e3,frontMatter:{title:"\u8282\u70b9\u63a5\u5165"},sidebar:"docs",previous:{title:"\u5728Kubernetes\u4e0a\u5b89\u88c5",permalink:"/zh/docs/next/installation/manually-setup"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/next/core-concepts/architecture"}},l={},i=[{value:"1. \u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4",id:"1-\u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4",level:2},{value:"1.1 yurtadm join",id:"11-yurtadm-join",level:3},{value:"1.2 yurtadm reset",id:"12-yurtadm-reset",level:3},{value:"2. \u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6",id:"2-\u5728\u5b58\u91cf\u7684k8s\u8282\u70b9\u4e0a\u5b89\u88c5openyurt-node\u7ec4\u4ef6",level:2},{value:"2.1 \u7ed9\u8282\u70b9\u6253\u6807\u7b7e",id:"21-\u7ed9\u8282\u70b9\u6253\u6807\u7b7e",level:3},{value:"2.2 \u90e8\u7f72Edge\u5de5\u4f5c\u6a21\u5f0f\u7684Yurthub",id:"22-\u90e8\u7f72edge\u5de5\u4f5c\u6a21\u5f0f\u7684yurthub",level:3},{value:"2.3 \u914d\u7f6eKubelet",id:"23-\u914d\u7f6ekubelet",level:3},{value:"2.4 \u91cd\u5efa\u8282\u70b9\u4e0a\u7684Pods",id:"24-\u91cd\u5efa\u8282\u70b9\u4e0a\u7684pods",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u7528\u6237\u6839\u636e\u8282\u70b9\u81ea\u8eab\u7684\u72b6\u51b5\uff0c\u9009\u62e9\u4e0b\u8ff0\u5176\u4e2d\u4e00\u79cd\u65b9\u6cd5\u6765\u63a5\u5165\u8282\u70b9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/zh/docs/next/installation/yurtadm-join#1-%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%8A%8A%E8%8A%82%E7%82%B9%E5%8A%A0%E5%85%A5%E9%9B%86%E7%BE%A4",children:"\u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/zh/docs/next/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6",children:"\u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-\u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4",children:"1. \u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4"}),"\n",(0,t.jsx)(n.h3,{id:"11-yurtadm-join",children:"1.1 yurtadm join"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Yurtadm join \u5c06\u4e91\u7aef\u8282\u70b9\u3001\u8fb9\u7f18\u8282\u70b9\u52a0\u5165 OpenYurt \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u5728\u52a0\u5165\u8282\u70b9\u65f6\uff0c\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u4e91\u7aef\u8282\u70b9\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u8fb9\u7f18\u8282\u70b9runtime\u4e3acontainerd\u65f6\uff0c\u9700\u8981\u914d\u7f6e",(0,t.jsx)(n.code,{children:"cri-socket"}),"\u53c2\u6570\uff0c\u5982\u4e0a\u9762\u6267\u884c\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u6539\u4e3a\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u53c2\u6570\u7684\u89e3\u91ca\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1.2.3.4:6443"}),": apiserver \u7684\u5730\u5740"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--token"}),"\uff1abootstrap token\uff08\u5982\u4f55\u83b7\u53d6\u53ef\u4ee5\u53c2\u8003",(0,t.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/bootstrap-tokens/",children:"\u94fe\u63a5"}),"\uff09"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--node-type"}),"\uff1aopenyurt \u8282\u70b9\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a\uff1acloud \u6216\u8005 edge"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u4f55\u7f16\u8bd1",(0,t.jsx)(n.code,{children:"yurtadm"}),"\u4e8c\u8fdb\u5236\uff0c\u53ef\u4ee5\u53c2\u8003",(0,t.jsx)(n.a,{href:"/zh/docs/next/installation/yurtadm-init#21%E7%BC%96%E8%AF%91-yurtadm",children:"\u94fe\u63a5"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yurtadm join"})," \u7684\u8fc7\u7a0b\u4f1a\u81ea\u52a8\u5b89\u88c5\u4ee5\u4e0bk8s\u7ec4\u4ef6\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"kubeadm"}),"\n",(0,t.jsx)(n.li,{children:"kubectl"}),"\n",(0,t.jsx)(n.li,{children:"kubelet"}),"\n",(0,t.jsx)(n.li,{children:"kube-proxy"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yurtadm join"}),"\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5c06\u4f1a\u62c9\u53d6\u7ecf\u8fc7\u7279\u6b8a\u4fee\u6539\u7684cni\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4fee\u6539\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003[\u94fe\u63a5]\u3002\u5982\u679c\u4f60\u60f3\u8981\u4f7f\u7528\u9884\u5148\u51c6\u5907\u597d\u7684cni\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4f60\u5e94\u8be5\u5c06\u5b83\u4eec\u653e\u7f6e\u5728\u76ee\u5f55",(0,t.jsx)(n.code,{children:"/opt/cni/bin"}),"\u4e0b\uff0c\u63a5\u7740\u5728\u4f7f\u7528",(0,t.jsx)(n.code,{children:"yurtadm join"}),"\u65f6\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"--reuse-cni-bin=true"}),"\u53c2\u6570\u5373\u53ef\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u5c06",(0,t.jsx)(n.code,{children:"kubelet"}),"\u548c",(0,t.jsx)(n.code,{children:"kubeadm"}),"\u7ec4\u4ef6\u63d0\u524d\u9884\u7f6e\u5728PATH\u73af\u5883\u53d8\u91cf\u4e2d\u3002\u4e0d\u8fc7\u5bf9\u4e8e",(0,t.jsx)(n.code,{children:"kubelet"}),"\u548c",(0,t.jsx)(n.code,{children:"kubeadm"}),"\u7684\u7248\u672c\u6709\u4e00\u4e9b\u9650\u5236\uff0c",(0,t.jsx)(n.code,{children:"yurtadm"}),"\u4f1a\u68c0\u67e5\u7ec4\u4ef6\u7684",(0,t.jsx)(n.code,{children:"major version"}),"\u548c",(0,t.jsx)(n.code,{children:"minor version"}),"\u662f\u5426\u4e0e\u96c6\u7fa4Kubernetes\u7248\u672c\u76f8\u540c\uff08\u8fd9\u9075\u5faasemver\u89c4\u8303\uff09\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"12-yurtadm-reset",children:"1.2 yurtadm reset"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u9700\u8981\u5220\u9664\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yurtadm join"})," \u52a0\u5165\u7684\u8282\u70b9\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yurtadm reset"}),"\u3002\u4e0b\u9762\u662f\u8be6\u7ec6\u6b65\u9aa4\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728 master \u8282\u70b9\u4e0a\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl drain {NodeName} --delete-local-data --force --ignore-daemonsets\nkubectl delete node {NodeName}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 join \u7684\u8282\u70b9\u4e0a\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["1. \u6267\u884c ",(0,t.jsx)(n.code,{children:"yurtadm reset"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"yurtadm reset\n"})}),"\n",(0,t.jsxs)(n.p,{children:["2. \u5220\u9664 ",(0,t.jsx)(n.code,{children:"/etc/cni/net.d"}),"\u76ee\u5f55\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rm -rf /etc/cni/net.d\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-\u5728\u5b58\u91cf\u7684k8s\u8282\u70b9\u4e0a\u5b89\u88c5openyurt-node\u7ec4\u4ef6",children:"2. \u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8ff0\u64cd\u4f5c\uff0c\u4ec5\u4ec5\u9488\u5bf9\u5df2\u7ecf\u662fKubernetes\u96c6\u7fa4\u7684\u5de5\u4f5c\u8282\u70b9\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"21-\u7ed9\u8282\u70b9\u6253\u6807\u7b7e",children:"2.1 \u7ed9\u8282\u70b9\u6253\u6807\u7b7e"}),"\n",(0,t.jsxs)(n.p,{children:["OpenYurt\u9700\u8981\u6839\u636e\u8282\u70b9\u7684",(0,t.jsx)(n.code,{children:"openyurt.io/is-edge-worker"}),"\u6807\u7b7e\u533a\u5206\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\uff0c\u4ece\u800c\u5728\u4e91\u8fb9\u65ad\u8054\u60c5\u51b5\u4e0b\u5224\u65ad\u662f\u5426\u9a71\u9010\u8282\u70b9\u4e0aPod. \u5047\u8bbe\u6211\u4eec\u7684\u8282\u70b9",(0,t.jsx)(n.code,{children:"us-west-1.192.168.0.88"}),"\u662f\u4e00\u4e2a\u8fb9\u7f18\u8282\u70b9\uff0c\u5219"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c",(0,t.jsx)(n.code,{children:"us-west-1.192.168.0.88"}),"\u4e0d\u662f\u4e00\u4e2a\u8fb9\u7f18\u8282\u70b9\uff0c\u5219\u5c06",(0,t.jsx)(n.code,{children:"true"}),"\u6539\u4e3a",(0,t.jsx)(n.code,{children:"false"}),"\u5373\u53ef"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u6fc0\u6d3b\u81ea\u6cbb\u6a21\u5f0f\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u7ed9\u8fb9\u7f18\u8282\u70b9\u6dfb\u52a0\u6ce8\u89e3\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5e0c\u671b\u4f7f\u7528OpenYurt\u7684\u5355\u5143\u5316\u7ba1\u7406\u80fd\u529b\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8be5\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60\u4e2d\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: worker\nspec:\n  type: Edge\nEOF\n$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=worker\n"})}),"\n",(0,t.jsx)(n.h3,{id:"22-\u90e8\u7f72edge\u5de5\u4f5c\u6a21\u5f0f\u7684yurthub",children:"2.2 \u90e8\u7f72Edge\u5de5\u4f5c\u6a21\u5f0f\u7684Yurthub"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4ece",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/config/setup/yurthub.yaml",children:"openyurt repo"}),"\u83b7\u53d6yurthub.yaml\uff0c\u6267\u884c\u5982\u4e0b\u4fee\u6539\u540e\u4e0a\u4f20\u5230\u8fb9\u7f18\u8282\u70b9\u7684/etc/kubernets/manifests\u76ee\u5f55\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u83b7\u53d6 apiserver \u7684\u5730\u5740 (\u5373ip",":port",") \u548c ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/",children:"bootstrap token"})," \uff0c\u7528\u4e8e\u66ff\u6362\u6a21\u677f\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"yurthub.yaml"})," \u4e2d\u7684\u5bf9\u5e94\u503c"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u4e0b\u9762\u7684\u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe apiserver \u7684\u5730\u5740\u662f ",(0,t.jsx)(n.code,{children:"1.2.3.4:5678"}),"\uff0cbootstrap token \u662f ",(0,t.jsx)(n.code,{children:"07401b.f395accd246ae52d"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ vi /etc/kubernetes/manifests/yurt-hub.yaml\n...\n    command:\n    - yurthub\n    - --v=2\n    - --server-addr=https://1.2.3.4:5678\n    - --node-name=$(NODE_NAME)\n    - --join-token=07401b.f395accd246ae52d\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"Yurthub \u5c06\u5728\u51e0\u5206\u949f\u5185\u51c6\u5907\u5c31\u7eea\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"23-\u914d\u7f6ekubelet",children:"2.3 \u914d\u7f6eKubelet"}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u9700\u8981\u91cd\u7f6ekubelet\u670d\u52a1\uff0c\u8ba9kubelet\u901a\u8fc7Yurthub\u8bbf\u95eeapiserver (\u4ee5\u4e0b\u6b65\u9aa4\u5047\u8bbe\u6211\u4eec\u4ee5root\u8eab\u4efd\u767b\u5f55\u5230\u8fb9\u7f18\u8282\u70b9)\u3002\u7531\u4e8e kubelet \u4f1a\u901a\u8fc7 http \u8fde\u63a5 Yurthub\uff0c\u6240\u4ee5\u6211\u4eec\u4e3a kubelet \u670d\u52a1\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 kubeconfig \u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u8ba9 kubelet \u4f7f\u7528\u65b0\u7684 kubeconfig\uff0c\u6211\u4eec\u7f16\u8f91 kubelet \u670d\u52a1\u7684 drop-in \u6587\u4ef6(\u5373 ",(0,t.jsx)(n.code,{children:"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"})," \u6216\u8005  ",(0,t.jsx)(n.code,{children:"/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf"})," \u5728 CentOS \u7cfb\u7edf\u4e0a))\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\uff0c\u6211\u4eec\u91cd\u542f kubelet \u670d\u52a1\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\uff0c\u5f53\u91cd\u542fKubelet\u4e4b\u540e\u9700\u8981\u786e\u8ba4\u8282\u70b9\u72b6\u6001\u662f\u5426Ready\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n"})}),"\n",(0,t.jsx)(n.h3,{id:"24-\u91cd\u5efa\u8282\u70b9\u4e0a\u7684pods",children:"2.4 \u91cd\u5efa\u8282\u70b9\u4e0a\u7684Pods"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u5b89\u88c5\u5b8cYurthub\u5e76\u4e14\u8c03\u6574\u597dKubelet\u914d\u7f6e\u540e\uff0c\u4e3a\u4e86\u8ba9\u8282\u70b9\u4e0a\u6240\u6709Pods(Yurthub\u9664\u5916)\u90fd\u53ef\u4ee5\u901a\u8fc7Yurthub\u8bbf\u95eeKube-apiserver\uff0c\u6240\u6709\u9700\u8981\u91cd\u5efa\u8282\u70b9\u4e0a\u6240\u6709Pods(Yurthub pod\u9664\u5916)\u3002\u8bf7\u52a1\u5fc5\u786e\u8ba4\u8be5\u64cd\u4f5c\u5bf9\u751f\u4ea7\u73af\u5883\u7684\u5f71\u54cd\u540e\u518d\u6267\u884c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n\n// \u5220\u9664\u8282\u70b9\u4e0a\u6240\u6709pods(Yurthub pod\u9664\u5916)\n$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr\n\n// \u786e\u8ba4\u8282\u70b9\u4e0a\u6240\u6709pods\u6b63\u5e38\u8fd0\u884c\n$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6ad                             1/1     Running   0          19d     10.148.2.198   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j123d                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-a2qdc                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,s)=>{s.d(n,{a:()=>o});var t=s(67294);const r={},d=t.createContext(r);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);