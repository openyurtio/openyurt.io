"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[99398],{23973:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var t=r(85893),i=r(11151);const d={title:"\u4ece\u96f6\u5f00\u59cb\u5b89\u88c5"},s=void 0,l={id:"installation/yurtadm-init",title:"\u4ece\u96f6\u5f00\u59cb\u5b89\u88c5",description:"1. \u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/installation/yurtadm-init.md",sourceDirName:"installation",slug:"/installation/yurtadm-init",permalink:"/zh/docs/v1.3/installation/yurtadm-init",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-init.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1720854915e3,frontMatter:{title:"\u4ece\u96f6\u5f00\u59cb\u5b89\u88c5"}},c={},a=[{value:"1. \u80cc\u666f\u8bf4\u660e",id:"1-\u80cc\u666f\u8bf4\u660e",level:2},{value:"2. \u4f7f\u7528\u6d41\u7a0b",id:"2-\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"2.1 \u7f16\u8bd1 yurtadm",id:"21-\u7f16\u8bd1-yurtadm",level:3},{value:"2.2 yurtadm init",id:"22-yurtadm-init",level:3},{value:"3. \u5b9e\u73b0\u7ec6\u8282",id:"3-\u5b9e\u73b0\u7ec6\u8282",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-\u80cc\u666f\u8bf4\u660e",children:"1. \u80cc\u666f\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u8ba9\u7528\u6237\u5feb\u901f\u62e5\u6709\u4e00\u4e2a OpenYurt \u6d4b\u8bd5\u96c6\u7fa4\uff0cOpenYurt \u63d0\u4f9b\u4e86\u547d\u4ee4 yurtadm\u3002",(0,t.jsx)(n.code,{children:"yurtadm init"})," \u53ef\u4ee5\u521d\u59cb\u5316\u4e00\u4e2a latest \u7248\u672c\u7684 openyurt \u96c6\u7fa4\uff0cyurt-controller-manager\u3001yurt-tunnel-server\u3001yurt-app-manager \u7b49\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u90e8\u7f72\uff0c\u7701\u53bb\u4e86\u624b\u52a8\u90e8\u7f72\u7684\u5404\u79cd\u64cd\u4f5c\u3002\u540e\u7eed\u6269\u5c55\u96c6\u7fa4\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 ",(0,t.jsx)(n.code,{children:"yurtadm join"}),"\uff0c\u5c06\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u4e91\u7aef\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"2-\u4f7f\u7528\u6d41\u7a0b",children:"2. \u4f7f\u7528\u6d41\u7a0b"}),"\n",(0,t.jsx)(n.h3,{id:"21-\u7f16\u8bd1-yurtadm",children:"2.1 \u7f16\u8bd1 yurtadm"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fdb\u884c\u521d\u59cb\u5316\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u5148\u83b7\u53d6 yurtadm \u53ef\u6267\u884c\u6587\u4ef6\u3002 \u8981\u5feb\u901f\u6784\u5efa\u548c\u5b89\u88c5\u8bbe\u7f6e yurtadm \uff0c\u5728\u7f16\u8bd1\u7cfb\u7edf\u5df2\u5b89\u88c5\u4e86 git, golang 1.13+ \u548c bash \u7684\u524d\u63d0\u4e0b\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u5b89\u88c5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'git clone https://github.com/openyurtio/openyurt.git\ncd openyurt\nmake build WHAT="yurtadm" ARCH="amd64" REGION=cn\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u6267\u884c\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"yurtadm"})," \u5c06\u5b58\u653e\u5728 ",(0,t.jsx)(n.code,{children:"_output/local/bin/linux/amd64/"})," \u76ee\u5f55\u4e0b\u3002\u53ef\u4ee5\u5c06 yurtadm \u547d\u4ee4\u653e\u5230\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u4fbf\u4e8e\u540e\u7eed\u4f7f\u7528\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cp _output/local/bin/linux/amd64/yurtadm /usr/local/bin/\n"})}),"\n",(0,t.jsx)(n.h3,{id:"22-yurtadm-init",children:"2.2 yurtadm init"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yurtadm init"})," \u53ef\u4ee5\u521d\u59cb\u5316\u4e00\u4e2a latest \u7248\u672c \u7684 openyurt \u96c6\u7fa4 (\u76ee\u524d\u4f7f\u7528\u7684 kubernetes \u7248\u672c\u662f1.22.8)\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"yurtadm init --apiserver-advertise-address=47.115.228.119 --yurt-tunnel-server-address=47.115.228.119 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u53c2\u6570\u7684\u89e3\u91ca\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--apiserver-advertise-address"}),"\uff1a\u8981\u5b89\u88c5\u7684\u96c6\u7fa4\u7684master\u8282\u70b9\u7684ip\u5730\u5740"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--yurt-tunnel-server-address"}),"\uff1ayurt-tunnel-server \u7684\u5730\u5740"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--pod-network-cidr"}),"\uff1apodSubnet\uff0c\u4e3a Pod \u6240\u4f7f\u7528\u7684\u5b50\u7f51"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--service-cidr"}),"\uff1aserviceSubnet\uff0cKubernetes \u670d\u52a1\u6240\u4f7f\u7528\u7684\u5b50\u7f51"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yurtadm init"})," \u4f7f\u7528 sealer \u5b89\u88c5\u96c6\u7fa4\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u81ea\u52a8\u5b89\u88c5\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"kubeadm"}),"\n",(0,t.jsx)(n.li,{children:"kubectl"}),"\n",(0,t.jsx)(n.li,{children:"kubelet"}),"\n",(0,t.jsx)(n.li,{children:"kube-proxy"}),"\n",(0,t.jsx)(n.li,{children:"docker"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u989d\u5916\u64cd\u4f5c"})}),"\n",(0,t.jsxs)(n.p,{children:["sealer (\u5f53\u524d v0.8.6 \u7248\u672c)  \u7684 k8s1.22.8 \u57fa\u7840\u955c\u50cf\u7684\u6253\u5305\u8fc7\u7a0b\u4e2d\u5c06\u955c\u50cf\u670d\u52a1\u5668\u5730\u5740\u4fee\u6539\u4e3a\u4e86 sea.hub:5000\uff0c\u6240\u4ee5\u5982\u679c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"yurtadm join"})," \u7684\u662f",(0,t.jsx)(n.code,{children:"yurtadm init"}),"\u7684\u8282\u70b9\u7684\u8bdd\u4f1a\u51fa\u73b0\u8fb9\u7f18\u8282\u70b9\u7684 ",(0,t.jsx)(n.code,{children:"sea.hub:5000/kube-proxy:v1.22.8"})," \u955c\u50cf\u62c9\u4e0d\u4e0b\u6765, ImagePullBackOff\u3002\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u624b\u52a8 ",(0,t.jsx)(n.code,{children:"kubectl edit ds kube-proxy -n kube-system"}),"\uff0c\u5c06\u955c\u50cf\u66ff\u6362\u4e3a ",(0,t.jsx)(n.code,{children:"registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.22.8"})]}),"\n",(0,t.jsx)(n.h2,{id:"3-\u5b9e\u73b0\u7ec6\u8282",children:"3. \u5b9e\u73b0\u7ec6\u8282"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"yurtadm init"})," \u5e95\u5c42\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"sealer run"})," \u5b9e\u73b0\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["sealer \u5236\u4f5c\u7684 openyurt \u96c6\u7fa4\u955c\u50cf\u7684\u76f8\u5173\u6587\u4ef6\u4f1a\u653e\u5728 ",(0,t.jsx)(n.code,{children:"/var/lib/sealer/data/my-cluster/rootfs"})," \u76ee\u5f55\u4e0b\u3002\u6240\u6709\u6587\u4ef6\u76f8\u5173\u4fe1\u606f\u89c1\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/windydayc/openyurt-cluster-image",children:"https://github.com/windydayc/openyurt-cluster-image"})]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{a:()=>s});var t=r(67294);const i={},d=t.createContext(i);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);