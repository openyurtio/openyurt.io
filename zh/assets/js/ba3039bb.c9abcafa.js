"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[64765],{80402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=t(85893),s=t(11151);const l={title:"YurtTunnel"},c=void 0,u={id:"core-concepts/yurttunnel",title:"YurtTunnel",description:"1. \u80cc\u666f\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.7.0/core-concepts/yurttunnel.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurttunnel",permalink:"/zh/docs/v0.7.0/core-concepts/yurttunnel",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurttunnel.md",tags:[],version:"v0.7.0",lastUpdatedBy:"rambohe",lastUpdatedAt:1704942947,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{title:"YurtTunnel"},sidebar:"docs",previous:{title:"YurtHub",permalink:"/zh/docs/v0.7.0/core-concepts/yurthub"},next:{title:"YurtAppManager",permalink:"/zh/docs/v0.7.0/core-concepts/yurt-app-manager"}},i={},o=[{value:"1. \u80cc\u666f\u7b80\u4ecb",id:"1-\u80cc\u666f\u7b80\u4ecb",level:2},{value:"2. \u53cd\u5411\u901a\u9053",id:"2-\u53cd\u5411\u901a\u9053",level:2},{value:"3. \u5b9e\u73b0\u65b9\u5f0f",id:"3-\u5b9e\u73b0\u65b9\u5f0f",level:2}];function a(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-\u80cc\u666f\u7b80\u4ecb",children:"1. \u80cc\u666f\u7b80\u4ecb"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5e94\u7528\u7684\u90e8\u7f72\u548c\u8fd0\u7ef4\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u5e38\u5e38\u9700\u8981\u83b7\u53d6\u5e94\u7528\u7684\u65e5\u5fd7\uff0c\u6216\u76f4\u63a5\u767b\u5f55\u5230\u5e94\u7528\u7684\u8fd0\u884c\u73af\u5883\u4e2d\u8fdb\u884c\u8c03\u8bd5\u3002\u5728 Kubernetes \u73af\u5883\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f7f\u7528 kubectl log\uff0ckubectl exec \u7b49\u6307\u4ee4\u6765\u5b9e\u73b0\u8fd9\u4e9b\u9700\u6c42\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5728 kubectl \u8bf7\u6c42\u94fe\u8def\u4e0a\uff0c kubelet \u5c06\u626e\u6f14\u670d\u52a1\u5668\u7aef\uff0c\u8d1f\u8d23\u5904\u7406\u7531 kube-apiserver(KAS) \u8f6c\u53d1\u6765\u7684\u8bf7\u6c42\uff0c\u8fd9\u5c31\u8981\u6c42 KAS \u548c kubelet \u4e4b\u95f4\u9700\u8981\u5b58\u5728\u4e00\u6761\u7f51\u7edc\u901a\u8def\uff0c\u5141\u8bb8 KAS \u4e3b\u52a8\u8bbf\u95ee kubelet\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(73898).Z+"",width:"1570",height:"464"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e91\u4e0e\u8fb9\u4e00\u822c\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u5e73\u9762\uff0c\u540c\u65f6\u8fb9\u7f18\u8282\u70b9\u666e\u904d\u4f4d\u4e8e\u9632\u706b\u5899\u5185\u90e8\uff0c\u91c7\u7528\u4e91(\u4e2d\u5fc3)\u8fb9\u534f\u540c\u67b6\u6784\uff0c\u5c06\u5bfc\u81f4\u539f\u751f K8s \u7cfb\u7edf\u7684\u8fd0\u7ef4\u76d1\u63a7\u80fd\u529b\u9762\u4e34\u5982\u4e0b\u6311\u6218:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"K8s \u539f\u751f\u8fd0\u7ef4\u80fd\u529b\u7f3a\u5931(\u5982 kubectl logs/exec \u7b49\u65e0\u6cd5\u6267\u884c)"}),"\n",(0,r.jsx)(n.li,{children:"\u793e\u533a\u4e3b\u6d41\u76d1\u63a7\u8fd0\u7ef4\u7ec4\u4ef6\u65e0\u6cd5\u5de5\u4f5c(\u5982 Prometheus/metrics-server )"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u652f\u6301\u901a\u8fc7\u4e91\u7aef\u8282\u70b9\u5bf9\u8fb9\u7f18\u7aef\u5e94\u7528\u8fdb\u884c\u8fd0\u7ef4\u64cd\u4f5c\uff0c\u6211\u4eec\u5fc5\u987b\u5728\u4e91\u3001\u8fb9\u4e4b\u95f4\u5efa\u7acb\u53cd\u5411\u8fd0\u7ef4\u901a\u9053\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"2-\u53cd\u5411\u901a\u9053",children:"2. \u53cd\u5411\u901a\u9053"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 OpenYurt \u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u4e13\u95e8\u7684\u7ec4\u4ef6 YurtTunnel \u8d1f\u8d23\u89e3\u51b3\u4e91\u8fb9\u901a\u4fe1\u95ee\u9898\u3002\u53cd\u5411\u901a\u9053\u662f\u89e3\u51b3\u8de8\u7f51\u7edc\u901a\u4fe1\u7684\u4e00\u79cd\u5e38\u89c1\u65b9\u5f0f\uff0c\u800c YurtTunnel \u7684\u672c\u8d28\u4e5f\u662f\u4e00\u4e2a\u53cd\u5411\u901a\u9053\u3002 \u5b83\u662f\u4e00\u4e2a\u5178\u578b\u7684C/S\u7ed3\u6784\u7684\u7ec4\u4ef6\uff0c\u7531\u90e8\u7f72\u4e8e\u4e91\u7aef\u7684 Yurt\u2014Tunnel-Server \u548c\u90e8\u7f72\u4e8e\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684 Yurt-Tunnel\u2014Agent\u7ec4\u6210\u3002YurtTunnel\u7684\u90e8\u7f72\u7ed3\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff0c \u53cd\u5411\u901a\u9053\u6574\u4f53\u7684\u5de5\u4f5c\u6d41\u7a0b\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u7ba1\u63a7\u7ec4\u4ef6\u6240\u5728\u7f51\u7edc\u5e73\u9762\u5185\uff0c\u90e8\u7f72 Yurt-Tunnel-Server\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Yurt-Tunnel-Server \u5bf9\u5916\u5f00\u653e\u4e00\u4e2a\u516c\u7f51\u53ef\u4ee5\u8bbf\u95ee\u7684 IP\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u6bcf\u4e2a\u8fb9\u7f18\u8282\u70b9\u90e8\u7f72\u4e00\u4e2a Yurt-Tunnel-Agent\uff0c\u5e76\u4e14\u901a\u8fc7 Server \u7684\u516c\u7f51 IP \u4e0e Server \u5efa\u7acb\u957f\u8fde\u63a5\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7ba1\u63a7\u7ec4\u4ef6\u5bf9\u8fb9\u7f18\u8282\u70b9\u7684\u8bbf\u95ee\u8bf7\u6c42\u90fd\u5c06\u8f6c\u53d1\u5230 Yurt-Tunnel-Server\u3002"}),"\n",(0,r.jsx)(n.li,{children:"Yurt-Tunnel-Server \u518d\u5c06\u8bf7\u6c42\u901a\u8fc7\u5bf9\u5e94\u7684\u957f\u8fde\u63a5\u53d1\u5f80\u76ee\u6807\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(16879).Z+"",width:"2128",height:"1142"})}),"\n",(0,r.jsx)(n.h2,{id:"3-\u5b9e\u73b0\u65b9\u5f0f",children:"3. \u5b9e\u73b0\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 K8s \u4e91\u8fb9\u4e00\u4f53\u5316\u67b6\u6784\u4e2d\u6784\u5efa\u4e00\u4e2a\u5b89\u5168\u3001\u975e\u4fb5\u5165\u3001\u53ef\u6269\u5c55\u7684\u53cd\u5411\u901a\u9053\u89e3\u51b3\u65b9\u6848\uff0c\u65b9\u6848\u4e2d\u81f3\u5c11\u9700\u8981\u5305\u62ec\u4ee5\u4e0b\u4e09\u90e8\u5206\u80fd\u529b\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u96a7\u9053\u6784\u5efa"}),"\n",(0,r.jsx)(n.li,{children:"\u96a7\u9053\u4e24\u7aef\u8bc1\u4e66\u7684\u81ea\u7ba1\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u4e91\u7aef\u7ec4\u4ef6\u8bf7\u6c42\u88ab\u65e0\u7f1d\u5bfc\u6d41\u5230\u96a7\u9053"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"YurtTunnel \u7684\u67b6\u6784\u6a21\u5757\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(57553).Z+"",width:"2016",height:"1576"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u96a7\u9053\u6784\u5efa"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f53\u8fb9\u7f18\u7684 Yurt-Tunnel-Agent \u542f\u52a8\u65f6\uff0c\u4f1a\u6839\u636e\u8bbf\u95ee\u5730\u5740\u4e0e Yurt-Tunnel-Server \u5efa\u7acb\u8fde\u63a5\u5e76\u6ce8\u518c\uff0c\u5e76\u5468\u671f\u6027\u68c0\u6d4b\u8fde\u63a5\u7684\u5065\u5eb7\u72b6\u6001\u4ee5\u53ca\u91cd\u5efa\u8fde\u63a5\u7b49\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Yurt-Tunnel-Agent\u6ce8\u518c\u7684\u8eab\u4efd\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'"agentID": {NodeName}\n"agentIdentifiers": ipv4={nodeIP}&host={NodeName}"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f53 Yurt-Tunnel-Server \u6536\u5230\u4e91\u7aef\u7ec4\u4ef6\u7684\u8bf7\u6c42\u65f6\uff0c\u9700\u8981\u628a\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u5bf9\u5e94\u7684 Yurt-Tunnel-Agent \u3002\u56e0\u4e3a\u9664\u4e86\u8f6c\u53d1\u521d\u59cb\u8bf7\u6c42\u4e4b\u5916\uff0c\u8be5\u8bf7\u6c42 session \u540e\u7eed\u8fd8\u6709\u6570\u636e\u8fd4\u56de\u6216\u8005\u6570\u636e\u7684\u6301\u7eed\u8f6c\u53d1(\u5982 kubectl exec )\u3002\u56e0\u6b64\u9700\u8981\u53cc\u5411\u8f6c\u53d1\u6570\u636e\u3002\u540c\u65f6\u9700\u8981\u652f\u6301\u5e76\u53d1\u8f6c\u53d1\u4e91\u7aef\u7ec4\u4ef6\u7684\u8bf7\u6c42\uff0c\u610f\u5473\u9700\u8981\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u751f\u547d\u5468\u671f\u5efa\u7acb\u4e00\u4e2a\u72ec\u7acb\u7684\u6807\u8bc6\u3002\u6240\u4ee5\u8bbe\u8ba1\u4e0a\u4e00\u822c\u4f1a\u6709\u4e24\u79cd\u65b9\u6848\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u6848 1: \u521d\u59cb\u4e91\u8fb9\u8fde\u63a5\u4ec5\u901a\u77e5\u8f6c\u53d1\u8bf7\u6c42\uff0cYurt-Tunnel-Agent \u4f1a\u548c\u4e91\u7aef\u5efa\u7acb\u65b0\u8fde\u63a5\u6765\u5904\u7406\u8fd9\u4e2a\u8bf7\u6c42\u3002\u901a\u8fc7\u65b0\u8fde\u63a5\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u8bf7\u6c42\u72ec\u7acb\u6807\u8bc6\u7684\u95ee\u9898\uff0c\u540c\u65f6\u5e76\u53d1\u4e5f\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u3002\u4f46\u662f\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u9700\u8981\u5efa\u7acb\u4e00\u4e2a\u8fde\u63a5\uff0c\u5c06\u6d88\u8017\u5927\u91cf\u7684\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u6848 2: \u4ec5\u5229\u7528\u521d\u59cb\u4e91\u8fb9\u8fde\u63a5\u6765\u8f6c\u53d1\u8bf7\u6c42\uff0c\u5927\u91cf\u8bf7\u6c42\u4e3a\u4e86\u590d\u7528\u540c\u4e00\u6761\u8fde\u63a5\uff0c\u6240\u4ee5\u9700\u8981\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u8fdb\u884c\u5c01\u88c5\uff0c\u5e76\u589e\u52a0\u72ec\u7acb\u6807\u8bc6\uff0c\u4ece\u800c\u89e3\u51b3\u5e76\u53d1\u8f6c\u53d1\u7684\u8bc9\u6c42\u3002\u540c\u65f6\u7531\u4e8e\u9700\u8981\u590d\u7528\u4e00\u6761\u8fde\u63a5\uff0c\u6240\u4ee5\u9700\u8981\u89e3\u8026\u8fde\u63a5\u7ba1\u7406\u548c\u8bf7\u6c42\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5373\u9700\u8981\u5bf9\u8bf7\u6c42\u8f6c\u53d1\u7684\u72b6\u6001\u8fc1\u79fb\u8fdb\u884c\u72ec\u7acb\u7ba1\u7406\u3002\u8be5\u65b9\u6848\u6d89\u53ca\u5230\u5c01\u5305\u89e3\u5305\uff0c\u8bf7\u6c42\u5904\u7406\u72b6\u6001\u673a\u7b49\uff0c\u65b9\u6848\u4f1a\u590d\u6742\u4e00\u4e9b\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OpenYurt \u9009\u62e9\u7684 ANP \u7ec4\u4ef6\uff0c\u91c7\u7528\u7684\u662f\u4e0a\u8ff0\u65b9\u68482\uff0c\u8fd9\u4e2a\u548c\u6211\u4eec\u7684\u8bbe\u8ba1\u521d\u8877\u4e5f\u662f\u4e00\u81f4\u7684\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8bf7\u6c42\u8f6c\u53d1\u94fe\u8def\u6784\u5efa\u5c01\u88c5\u5728 Packet_DialRequest \u548c Packet_DialResponse \u4e2d\uff0c\u5176\u4e2d Packet_DialResponse.ConnectID \u7528\u4e8e\u6807\u8bc6 request \uff0c\u76f8\u5f53\u4e8e tunnel \u4e2d\u7684 requestID\u3002\u8bf7\u6c42\u4ee5\u53ca\u5173\u8054\u6570\u636e\u5c01\u88c5\u5728 Packet_Data \u4e2d\u3002Packet_CloseRequest \u548c Packet_CloseResponse \u7528\u4e8e\u8f6c\u53d1\u94fe\u8def\u8d44\u6e90\u56de\u6536\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u7167\u4e0b\u5217\u65f6\u5e8f\u56fe\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(4089).Z+"",width:"1080",height:"997"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"RequestInterceptor \u6a21\u5757\u7684\u4f5c\u7528\n\u4ece\u4e0a\u8ff0\u5206\u6790\u53ef\u4ee5\u770b\u51fa\uff0cYurt-Tunnel-Server \u8f6c\u53d1\u8bf7\u6c42\u4e4b\u524d\uff0c\u9700\u8981\u8bf7\u6c42\u7aef\u5148\u53d1\u8d77\u4e00\u4e2a Http Connect \u8bf7\u6c42\u6765\u6784\u5efa\u8f6c\u53d1\u94fe\u8def\u3002\u4f46\u662f\u4e3a Prometheus\u3001metrics-server \u7b49\u5f00\u6e90\u7ec4\u4ef6\u589e\u52a0\u76f8\u5e94\u5904\u7406\u4f1a\u6bd4\u8f83\u56f0\u96be\uff0c\u56e0\u6b64\u5728 Yurt-Tunnel-Server \u4e2d\u589e\u52a0\u8bf7\u6c42\u52ab\u6301\u6a21\u5757 Interceptor \uff0c\u7528\u6765\u53d1\u8d77 Http Connect \u8bf7\u6c42\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u8bc1\u4e66\u7ba1\u7406"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u4fdd\u8bc1\u4e91\u8fb9\u901a\u9053\u7684\u957f\u671f\u5b89\u5168\u901a\u4fe1\uff0c\u540c\u65f6\u4e5f\u4e3a\u4e86\u652f\u6301 https \u8bf7\u6c42\u8f6c\u53d1\uff0cYurtTunnel \u9700\u8981\u81ea\u884c\u751f\u6210\u8bc1\u4e66\u5e76\u4e14\u4fdd\u6301\u8bc1\u4e66\u7684\u81ea\u52a8\u8f6e\u66ff\u3002\u5177\u4f53\u7ec6\u8282\u5982\u4e0b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'# 1. Yurt-Tunnel-Server\u8bc1\u4e66:\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L45-90\n- \u8bc1\u4e66\u5b58\u50a8\u4f4d\u7f6e: /var/lib/yurt-tunnel-server/pki\n- CommonName: "kube-apiserver-kubelet-client"  // \u7528\u4e8ekubelet server\u7684webhook\u6821\u9a8c\n- Organization: {"system:masters", "openyurt:yurttunnel"} // \u7528\u4e8ekubelet server\u7684webhook\u6821\u9a8c\u548cYurt-Tunnel-Server\u8bc1\u4e66\u7684auto approve\n- Subject Alternate Name values: {x-tunnel-server-svc, x-tunnel-server-internal-svc\u7684ips\u548cdns names}\n- KeyUsage: "any"\n\n# 2. Yurt-Tunnel-Agent\u8bc1\u4e66\uff1a\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L94-112\n- \u8bc1\u4e66\u5b58\u50a8\u4f4d\u7f6e: /var/lib/yurt-tunnel-agent/pki\n- CommonName: "yurttunnel-agent"\n- Organization: {"openyurt:yurttunnel"} // \u7528\u4e8eYurt-Tunnel-Agent\u8bc1\u4e66\u7684auto approve\n- Subject Alternate Name values: {NodeName, nodeIP}\n- KeyUsage: "any"\n\n# 3. yurt-tunnel\u8bc1\u4e66\u7533\u8bf7(CSR)\u5747\u7531Yurt-Tunnel-Server\u6765approve\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/csrapprover.go#L115\n- \u76d1\u542ccsr\u8d44\u6e90\n- \u8fc7\u6ee4\u975eyurt-tunnel\u7684csr(Organization\u4e2d\u6ca1\u6709"openyurt:yurttunnel")\n- approve\u8fd8\u672aApproved\u7684csr\n\n# 4. \u8bc1\u4e66\u81ea\u52a8\u8f6e\u66ff\u5904\u7406\n# https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/client-go/util/certificate/certificate_manager.go#L224\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u65e0\u7f1d\u5bfc\u6d41\u4e91\u7aef\u7ec4\u4ef6\u8bf7\u6c42\u5230\u96a7\u9053"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u4e3a\u9700\u8981\u65e0\u7f1d\u628a\u4e91\u7aef\u7ec4\u4ef6\u7684\u8bf7\u6c42\u8f6c\u53d1\u5230 Yurt-Tunnel-Server \uff0c\u4e5f\u610f\u5473\u4e0d\u9700\u8981\u5bf9\u4e91\u7aef\u7ec4\u4ef6\u8fdb\u884c\u4efb\u4f55\u4fee\u6539\u3002\u56e0\u6b64\u9700\u8981\u5bf9\u4e91\u7aef\u7ec4\u4ef6\u7684\u8bf7\u6c42\u8fdb\u884c\u5206\u6790\uff0c\u76ee\u524d\u7ec4\u4ef6\u7684\u8fd0\u7ef4\u8bf7\u6c42\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b1: \u76f4\u63a5\u4f7f\u7528 IP \u5730\u5740\u8bbf\u95ee\uff0c\u5982: ",(0,r.jsx)(n.code,{children:"http://{nodeIP}:{port}/{path}"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b2: \u4f7f\u7528\u57df\u540d\u8bbf\u95ee, \u5982: ",(0,r.jsx)(n.code,{children:"http://{NodeName}:{port}/{path}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u8bf7\u6c42\u7684\u5bfc\u6d41\uff0c\u9700\u8981\u91c7\u7528\u4e0d\u540c\u65b9\u6848\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u68481: \u4f7f\u7528 iptables dnat rules \u6765\u4fdd\u8bc1\u7c7b\u578b1\u7684\u8bf7\u6c42\u65e0\u7f1d\u8f6c\u53d1\u5230 Yurt-Tunnel-Server"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"# \u76f8\u5173iptables rules\u7ef4\u62a4\u4ee3\u7801: https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/iptables/iptables.go\n# Yurt-Tunnel-Server\u7ef4\u62a4\u7684iptables dnat rules\u5982\u4e0b:\n[root@xxx /]# iptables -nv -t nat -L OUTPUT\nTUNNEL-PORT  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* edge tunnel server port */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-10255  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10255 /* jump to port 10255 */\nTUNNEL-PORT-10250  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10250 /* jump to port 10250 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-10255\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:10255\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:10255\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:10255 to:172.16.6.156:10264\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u68482: \u4f7f\u7528 dns \u57df\u540d\u89e3\u6790 NodeName \u4e3a Yurt-Tunnel-Server \u7684\u8bbf\u95ee\u5730\u5740\uff0c\u4ece\u800c\u4f7f\u7c7b\u578b 2 \u8bf7\u6c42\u65e0\u7f1d\u8f6c\u53d1\u5230 yurt-tunnel\u3002\u5176\u5de5\u4f5c\u539f\u7406\u5982\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(84897).Z+"",width:"2582",height:"1358"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Yurt-Tunnel-Server\u4f1a\u7ef4\u62a4\u4e24\u4e2aService\u5730\u5740\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"x-tunnel-server-svc: \u4e3b\u8981expose 10262/10263\u7aef\u53e3\uff0c\u7528\u4e8e\u4ece\u516c\u7f51\u8bbf\u95eeYurt-Tunnel-Server\u3002\u5982Yurt-Tunnel-Agent"}),"\n",(0,r.jsx)(n.li,{children:"x-tunnel-server-internal-svc: \u4e3b\u8981\u7528\u4e8e\u4e91\u7aef\u7ec4\u4ef6\u4ece\u5185\u90e8\u7f51\u7edc\u8bbf\u95ee\uff0c\u5982prometheus,metrics-server\u7b49"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Yurt-Tunnel-Server \u5185\u7f6e\u4e00\u4e2a DNS Controller\uff0c\u52a8\u6001\u914d\u7f6e Core DNS Host \u8bb0\u5f55\uff0c\u7ef4\u6301 NodeName \u4e0e IP \u7684\u6620\u5c04\u5173\u7cfb(Cloud Node \u6839\u636e IP \u76f4\u63a5\u53ef\u8fbe\uff0c\u5373\u76f4\u63a5\u6620\u5c04\u4e3a Node IP;Edge Node \u9700\u8981\u901a\u8fc7 Tunnel \u96a7\u9053\u4ee3\u7406\u901a\u4fe1\uff0c\u5373\u6620\u5c04\u5230 Yurt-Tunnel-Server Internal Service \u7684 cluster ip)"}),"\n",(0,r.jsx)(n.li,{children:"\u5f53\u4e91\u7aef\u7ec4\u4ef6\u901a\u8fc7 NodeName \u8bbf\u95ee Edge \u8282\u70b9\u65f6\uff0c\u9ed8\u8ba4\u4f1a\u901a\u8fc7 CoreDNS \u505a\u57df\u540d\u89e3\u6790\uff0c \u5bf9 Edge Node \u7684\u8bf7\u6c42\u4f1a\u88ab\u5b9a\u5411\u5230 Yurt-Tunnel-Server \u7684 internal service \u7684 ClusterIP\uff0c\u8fdb\u800c\u501f\u52a9 kube-proxy \u7684\u8f6c\u53d1\u80fd\u529b\uff0c\u5c06\u8bf7\u6c42\u8d1f\u8f7d\u5747\u8861\u5230\u5065\u5eb7\u7684 Yurt-Tunnel-Server Pod \u5185"}),"\n",(0,r.jsx)(n.li,{children:"Yurt-Tunnel-Server \u4f1a\u68c0\u67e5\u8bf7\u6c42 Host \u683c\u5f0f\uff0c\u5f53 Host \u683c\u5f0f NodeName \u65f6\uff0c\u5219\u901a\u8fc7\u8282\u70b9\u540d\u627e\u5230\u6b63\u786e\u7684 Agent \u540e\u7aef\uff0c\u8f6c\u53d1\u6570\u636e"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"\u7aef\u53e3\u6269\u5c55"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u7528\u6237\u9700\u8981\u8bbf\u95ee\u8fb9\u7f18\u7684\u5176\u4ed6\u7aef\u53e3(10250 \u548c 10255 \u4e4b\u5916)\uff0c\u90a3\u4e48\u9700\u8981\u5728 iptables \u4e2d\u589e\u52a0\u76f8\u5e94\u7684 dnat rules \u6216\u8005 x-tunnel-server-internal-svc \u4e2d\u589e\u52a0\u76f8\u5e94\u7684\u7aef\u53e3\u6620\u5c04\uff0c\u5982\u4e0b\u6240\u793a:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"\n# \u4f8b\u5982\u9700\u8981\u8bbf\u95ee\u8fb9\u7f18\u76849051\u7aef\u53e3\n# \u65b0\u589eiptables dnat rule:\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-9051  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:9051 /* jump to port 9051 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-9051\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:9051\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:9051\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:9051 to:172.16.6.156:10264\n\n# x-tunnel-server-internal-svc\u4e2d\u65b0\u589e\u7aef\u53e3\u6620\u5c04\nspec:\n  ports:\n  - name: https\n    port: 10250\n    protocol: TCP\n    targetPort: 10263\n  - name: http\n    port: 10255\n    protocol: TCP\n    targetPort: 10264\n  - name: dnat-9051 # \u65b0\u589e\u6620\u5c04\n    port: 9051\n    protocol: TCP\n    targetPort: 10264\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u7136\u4e0a\u8ff0\u7684 iptables dnat rules \u548c service \u7aef\u53e3\u6620\u5c04\uff0c\u90fd\u662f\u7531 Yurt-Tunnel-Server \u81ea\u52a8\u66f4\u65b0\u3002\u7528\u6237\u53ea\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"kube-system"})," \u4e0b\u7684 ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server-cfg"})," configmap \u4e2d\u589e\u52a0\u7aef\u53e3\u914d\u7f6e\u5373\u53ef\u3002\u5177\u4f53\u5982\u4e0b:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:"# \u6ce8\u610f\uff1a\u7531\u4e8e\u8bc1\u4e66\u4e0d\u53ef\u63a7\u56e0\u7d20\uff0c\u76ee\u524d\u65b0\u589e\u7aef\u53e3\u53ea\u652f\u6301\u4eceYurt-Tunnel-Server\u768410264\u8f6c\u53d1\napiVersion: v1\ndata:\n  dnat-ports-pair: 9051=10264 # \u65b0\u589e\u7aef\u53e3=10264(\u975e10264\u8f6c\u53d1\u4e0d\u652f\u6301)\nkind: ConfigMap\nmetadata:\n  name: yurt-tunnel-server-cfg\n  namespace: kube-system\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},73898:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/kubectl-4a135b776e4058dae26cb98067a28d99.jpg"},16879:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_arch-f5523df0a26022bbc4a94960802f2c40.jpg"},57553:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_components-98b2297c73ddbafee663f1dacf5ec19d.jpg"},84897:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_dns-3f45c486b188e1dd9e5b254ba516e10f.jpg"},4089:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_sequence_diag-385d8a83150e7246026538e7948dd738.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>c});var r=t(67294);const s={},l=r.createContext(s);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);