"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[91593],{79481:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var t=r(85893),i=r(11151);const u={slug:"Expansion-capability-of-Yurthub",title:"\u4ece\u8fb9\u7f18\u81ea\u6cbb\u770bYurtHub\u7684\u6269\u5c55\u80fd\u529b",authors:["rambohe-ch"],tags:["yurthub"]},l=void 0,s={permalink:"/zh/blog/Expansion-capability-of-Yurthub",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2020-06-29-Expansion-capability-of-Yurthub.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2020-06-29-Expansion-capability-of-Yurthub.md",title:"\u4ece\u8fb9\u7f18\u81ea\u6cbb\u770bYurtHub\u7684\u6269\u5c55\u80fd\u529b",description:"\u5bfc\u8bfb\uff1aOpenYurt \u81ea\u5f00\u6e90\u4ee5\u6765\uff0c\u4ee5\u975e\u4fb5\u5165\u5f0f\u7684\u67b6\u6784\u8bbe\u8ba1\u878d\u5408\u4e91\u539f\u751f\u548c\u8fb9\u7f18\u8ba1\u7b97\u4e24\u5927\u9886\u57df\uff0c\u5f15\u8d77\u4e86\u4e0d\u5c11\u884c\u4e1a\u5185\u540c\u5b66\u7684\u5173\u6ce8\u3002\u963f\u91cc\u4e91\u63a8\u51fa\u5f00\u6e90\u9879\u76ee OpenYurt\uff0c\u4e00\u65b9\u9762\u662f\u628a\u963f\u91cc\u4e91\u5728\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u9886\u57df\u7684\u7ecf\u9a8c\u56de\u9988\u7ed9\u5f00\u6e90\u793e\u533a\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u5e0c\u671b\u52a0\u901f\u4e91\u8ba1\u7b97\u5411\u8fb9\u7f18\u5ef6\u4f38\u7684\u8fdb\u7a0b\uff0c\u5e76\u548c\u793e\u533a\u5171\u540c\u63a2\u8ba8\u672a\u6765\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u67b6\u6784\u7684\u7edf\u4e00\u6807\u51c6\u3002",date:"2020-06-29T00:00:00.000Z",tags:[{inline:!0,label:"yurthub",permalink:"/zh/blog/tags/yurthub"}],readingTime:9.935,hasTruncateMarker:!1,authors:[{name:"rambohe",title:"Maintainer of OpenYurt",url:"https://github.com/rambohe-ch",imageURL:"https://github.com/rambohe-ch.png",key:"rambohe-ch"}],frontMatter:{slug:"Expansion-capability-of-Yurthub",title:"\u4ece\u8fb9\u7f18\u81ea\u6cbb\u770bYurtHub\u7684\u6269\u5c55\u80fd\u529b",authors:["rambohe-ch"],tags:["yurthub"]},unlisted:!1,prevItem:{title:"\u5982\u4f55\u6784\u5efaKubernetes\u539f\u751f\u4e91\u8fb9\u9ad8\u6548\u534f\u540c\u7f51\u7edc",permalink:"/zh/blog/Build-side-efficient-collaborative-network"},nextItem:{title:"\u6df1\u5ea6\u89e3\u8bfbOpenYurt\uff1a\u8fb9\u7f18\u81ea\u6cbb\u80fd\u529b\u8bbe\u8ba1\u89e3\u6790",permalink:"/zh/blog/YurtHub-design-detail"}},h={authorsImageUrls:[void 0]},c=[{value:"OpenYurt\u4ecb\u7ecd",id:"openyurt\u4ecb\u7ecd",level:2},{value:"YurtHub\u67b6\u6784\u8bf4\u660e",id:"yurthub\u67b6\u6784\u8bf4\u660e",level:2},{value:"YurtHub\u7684\u62d3\u5c55\u80fd\u529b",id:"yurthub\u7684\u62d3\u5c55\u80fd\u529b",level:2},{value:"1\uff09\u8fb9\u7f18\u7f51\u7edc\u81ea\u6cbb",id:"1\u8fb9\u7f18\u7f51\u7edc\u81ea\u6cbb",level:3},{value:"2\uff09\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301",id:"2\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301",level:3},{value:"3\uff09\u8282\u70b9\u7ef4\u5ea6\u7684\u4e91\u7aef\u6d41\u63a7",id:"3\u8282\u70b9\u7ef4\u5ea6\u7684\u4e91\u7aef\u6d41\u63a7",level:3},{value:"4\uff09\u8282\u70b9\u8bc1\u4e66\u8f6e\u8f6c\u7ba1\u7406",id:"4\u8282\u70b9\u8bc1\u4e66\u8f6e\u8f6c\u7ba1\u7406",level:3},{value:"5\uff09\u5176\u4ed6",id:"5\u5176\u4ed6",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5bfc\u8bfb\uff1aOpenYurt \u81ea\u5f00\u6e90\u4ee5\u6765\uff0c\u4ee5\u975e\u4fb5\u5165\u5f0f\u7684\u67b6\u6784\u8bbe\u8ba1\u878d\u5408\u4e91\u539f\u751f\u548c\u8fb9\u7f18\u8ba1\u7b97\u4e24\u5927\u9886\u57df\uff0c\u5f15\u8d77\u4e86\u4e0d\u5c11\u884c\u4e1a\u5185\u540c\u5b66\u7684\u5173\u6ce8\u3002\u963f\u91cc\u4e91\u63a8\u51fa\u5f00\u6e90\u9879\u76ee OpenYurt\uff0c\u4e00\u65b9\u9762\u662f\u628a\u963f\u91cc\u4e91\u5728\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u9886\u57df\u7684\u7ecf\u9a8c\u56de\u9988\u7ed9\u5f00\u6e90\u793e\u533a\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u5e0c\u671b\u52a0\u901f\u4e91\u8ba1\u7b97\u5411\u8fb9\u7f18\u5ef6\u4f38\u7684\u8fdb\u7a0b\uff0c\u5e76\u548c\u793e\u533a\u5171\u540c\u63a2\u8ba8\u672a\u6765\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u67b6\u6784\u7684\u7edf\u4e00\u6807\u51c6\u3002\n\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86 OpenYurt \u4e2d\u7ec4\u4ef6 YurtHub \u7684\u6269\u5c55\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"openyurt\u4ecb\u7ecd",children:"OpenYurt\u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"\u963f\u91cc\u4e91\u8fb9\u7f18\u5bb9\u5668\u670d\u52a1\u4e0a\u7ebf 1 \u5e74\u540e\uff0c\u6b63\u5f0f\u5f00\u6e90\u4e86\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u89e3\u51b3\u65b9\u6848 OpenYurt\uff0c\u8ddf\u5176\u4ed6\u5f00\u6e90\u7684\u5bb9\u5668\u5316\u8fb9\u7f18\u8ba1\u7b97\u65b9\u6848\u7684\u533a\u522b\u5728\u4e8e\uff1aOpenYurt \u79c9\u6301 Extending your native Kubernetes to edge \u7684\u7406\u5ff5\uff0c\u5bf9 Kubernetes \u7cfb\u7edf\u96f6\u4fee\u6539\uff0c\u5e76\u63d0\u4f9b\u4e00\u952e\u5f0f\u8f6c\u6362\u539f\u751f Kubernetes \u4e3a openyurt\uff0c\u8ba9\u539f\u751f K8s \u96c6\u7fa4\u5177\u5907\u8fb9\u7f18\u96c6\u7fa4\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u65f6\u968f\u7740 OpenYurt \u7684\u6301\u7eed\u6f14\u8fdb\uff0c\u4e5f\u4e00\u5b9a\u4f1a\u7ee7\u7eed\u4fdd\u6301\u5982\u4e0b\u53d1\u5c55\u7406\u5ff5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u975e\u4fb5\u5165\u5f0f\u589e\u5f3a K8s"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4fdd\u6301\u548c\u4e91\u539f\u751f\u793e\u533a\u4e3b\u6d41\u6280\u672f\u540c\u6b65\u6f14\u8fdb"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"yurthub\u67b6\u6784\u8bf4\u660e",children:"YurtHub\u67b6\u6784\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.a,{href:"/zh/blog/YurtHub-design-detail",children:"\u524d\u9762\u7684\u6587\u7ae0"}),"\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86 OpenYurt \u7684\u8fb9\u7f18\u81ea\u6cbb\u80fd\u529b\uff0c\u91cd\u70b9\u89e3\u8bfb\u4e86\u5176\u4e2d\u7684\u7ec4\u4ef6 YurtHub\u3002\u5176\u67b6\u6784\u56fe\u5982\u4e0b\uff1a\nOpenYurt\u7ec4\u4ef6YurtHub\u6784\u67b6\u56fe\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:r(27521).Z+"",width:"739",height:"570"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0eKubernetes\u8bbe\u8ba1\u7406\u5ff5\u5951\u5408\uff0cYurtHub\u7684\u4f18\u52bf\u4e4b\u4e00\u662f\uff0c\u975e\u5e38\u5bb9\u6613\u6269\u5c55\u51fa\u66f4\u591a\u7684\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"yurthub\u7684\u62d3\u5c55\u80fd\u529b",children:"YurtHub\u7684\u62d3\u5c55\u80fd\u529b"}),"\n",(0,t.jsx)(n.h3,{id:"1\u8fb9\u7f18\u7f51\u7edc\u81ea\u6cbb",children:"1\uff09\u8fb9\u7f18\u7f51\u7edc\u81ea\u6cbb"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\u4ecb\u7ecd\u4e00\u4e0b\u4f55\u8c13\u8fb9\u7f18\u7f51\u7edc\u81ea\u6cbb\uff1a\u5373\u5728\u8fb9\u7f18\u548c\u4e91\u7aef\u7f51\u7edc\u65ad\u8fde\u65f6\uff0c\u4e0d\u7ba1\u662f\u4e1a\u52a1\u5bb9\u5668\u91cd\u542f\uff0c\u6216\u662f\u8fb9\u7f18\u8282\u70b9\u91cd\u542f\u7b49\uff0c\u8fb9\u7f18\u4e1a\u52a1\u7684\u8de8\u8282\u70b9\u901a\u4fe1\u53ef\u4ee5\u6301\u7eed\u5de5\u4f5c\u6216\u662f\u81ea\u52a8\u6062\u590d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728OpenYurt\u4e2d\uff0c\u5b9e\u73b0\u8fb9\u7f18\u81ea\u6cbb\u9700\u8981\u89e3\u51b3\u5982\u4e0b\u7684\u95ee\u9898\uff08\u4ee5flannel vxlan overlay\u7f51\u7edc\u4e3a\u4f8b\uff09\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u95ee\u9898 1: \u8282\u70b9\u4e0a\u7684\u7f51\u7edc\u914d\u7f6e\u53ef\u4ee5\u81ea\u6cbb\uff0ckube-proxy \u7684 iptables / ipvs \u89c4\u5219\uff0cflannel \u7684 fdb / arp / route \u914d\u7f6e\uff0ccoredns \u7684\u57df\u540d\u89e3\u6790\u7b49\u7f51\u7edc\u914d\u7f6e\uff0c\u5728\u8282\u70b9\u91cd\u542f\u540e\u53ef\u4ee5\u81ea\u52a8\u6062\u590d\uff0c\u5426\u5219\u8fb9\u7f18\u8de8\u8282\u70b9\u901a\u4fe1\u5c06\u65e0\u6cd5\u6301\u7eed\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u95ee\u9898 2: \u4e1a\u52a1\u5bb9\u5668 IP \u4fdd\u6301\u4e0d\u53d8\uff0c\u56e0\u4e3a\u548c\u4e91\u7aef\u7f51\u7edc\u65ad\u8fde\u72b6\u6001\u4e0b\u5bb9\u5668 IP \u53d8\u5316\u5c06\u65e0\u6cd5\u901a\u77e5\u5230\u5176\u4ed6\u8282\u70b9\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u95ee\u9898 3: vtep(vxlan tunnel endpoint) \u7684 mac \u5730\u5740\u4fdd\u6301\u4e0d\u53d8\uff0c\u539f\u56e0\u548c\u5bb9\u5668 IP \u4fdd\u6301\u4e0d\u53d8\u7c7b\u4f3c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u95ee\u9898 1 \u53ef\u4ee5\u770b\u51fa\uff0c\u5fc5\u987b\u89e3\u51b3 kube-proxy / flannel / coredns \u7b49\u7ec4\u4ef6\u7684\u81ea\u6cbb\uff0c\u624d\u80fd\u5b9e\u73b0\u7f51\u7edc\u914d\u7f6e\u7684\u81ea\u6cbb\u3002\u5982\u679c\u4e4b\u524d\u8fb9\u7f18\u81ea\u6cbb\u662f\u91c7\u7528\u91cd\u6784 kubelet \u6765\u5b9e\u73b0\u7684\u8bdd\uff0c\u8981\u5b9e\u73b0\u8fb9\u7f18\u7f51\u7edc\u81ea\u6cbb\u5c31\u4f1a\u78b0\u5230\u5f88\u5927\u7684\u9ebb\u70e6\uff0c\u5982\u679c\u5f3a\u884c\u628a\u91cd\u6784\u7684 kubelet \u81ea\u6cbb\u80fd\u529b\u79fb\u690d\u5230\u5404\u4e2a\u7f51\u7edc\u7ec4\u4ef6 (kube-proxy / flannel / coredns)\uff0c\u4e5f\u5bf9\u6574\u4e2a\u67b6\u6784\u5c06\u662f\u5669\u68a6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 OpenYurt \u4e2d\u56e0\u4e3a YurtHub \u7684\u72ec\u7acb\u6027\uff0ckube-proxy / flannel / coredns \u7b49\u7f51\u7edc\u7ec4\u4ef6\u8f7b\u677e\u4f7f\u7528 YurtHub \u6765\u5b9e\u73b0\u7f51\u7edc\u914d\u7f6e\u7684\u81ea\u6cbb\u80fd\u529b\u3002\u56e0\u4e3a YurtHub \u7f13\u5b58\u4e86 service \u7b49\u7f51\u7edc\u914d\u7f6e\u8d44\u6e90\u5728 local storage\uff0c\u5373\u4f7f\u65ad\u7f51\u5e76\u4e14\u8282\u70b9\u91cd\u542f\uff0c\u7f51\u7edc\u7ec4\u4ef6\u4ecd\u7136\u53ef\u4ee5\u83b7\u5f97\u65ad\u7f51\u524d\u7684 object \u72b6\u6001\u4ee5\u53ca\u76f8\u5e94\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:r(73343).Z+"",width:"1080",height:"375"})}),"\n",(0,t.jsx)(n.p,{children:"\u95ee\u9898 2\uff0c3 \u548c Kubernetes core \u65e0\u5173\uff0c\u4e3b\u8981\u6d89\u53ca\u5230 cni \u63d2\u4ef6\u548c flanneld \u7684\u589e\u5f3a\uff0c\u540e\u7eed\u6587\u7ae0\u4e2d\u518d\u8be6\u7ec6\u4ecb\u7ecd\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"2\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301",children:"2\uff09\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301"}),"\n",(0,t.jsx)(n.p,{children:"\u516c\u6709\u4e91\u4e0a\u7684 Kubernetes \u9ad8\u53ef\u7528\u90e8\u7f72\u65f6\uff0c\u591a\u5b9e\u4f8b kube-apiserver \u524d\u9762\u4e00\u822c\u90fd\u6302\u4e86\u4e00\u4e2a SLB\uff0c\u4f46\u662f\u5728\u4e13\u6709\u4e91\u573a\u666f\u4e0b\u6216\u8005\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u8282\u70b9\u9700\u8981\u901a\u8fc7\u591a\u4e2a\u4e91\u7aef\u5730\u5740\u6765\u8bbf\u95ee\u3002\u6bd4\u5982:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e13\u6709\u4e91\u573a\u666f\uff1a\u56e0\u4e3a\u6ca1\u6709 SLB \u670d\u52a1\uff0c\u7528\u6237\u9700\u8981\u5728\u4e91\u7aef\u901a\u8fc7 VIP \u65b9\u5f0f\u6765\u81ea\u884c\u5b9e\u73b0 kube-apiserver \u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u6216\u8005\u50cf kubespray \u90a3\u6837\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90e8\u7f72\u4e00\u4e2a nginx \u6765\u5b9e\u73b0\u591a\u4e91\u7aef\u5730\u5740\u7684\u8bbf\u95ee\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f: \u8003\u8651\u5230\u8fb9\u7f18\u548c\u4e91\u7aef\u4e4b\u95f4\u7f51\u7edc\u7684\u7a33\u5b9a\u6027\u548c\u5b89\u5168\u6027\u8981\u6c42\uff0c\u67d0\u4e9b\u573a\u666f\u4e0b\u7528\u6237\u4e5f\u901a\u8fc7\u4e13\u7ebf\u548c\u516c\u7f51\u4e24\u79cd\u65b9\u5f0f\u548c\u4e91\u7aef\u901a\u4fe1\uff0c\u6bd4\u5982\u4f18\u5148\u91c7\u7528\u4e13\u7ebf\uff0c\u5f53\u4e13\u7ebf\u6545\u969c\u65f6\u80fd\u81ea\u52a8\u5207\u6362\u5230\u516c\u7f51\u901a\u4fe1\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"YurtHub\u6b63\u5f0f\u8003\u8651\u5230\u4e86\u4e0a\u8ff0\u7684\u9700\u6c42\uff0c\u652f\u6301\u591a\u4e91\u7aef\u5730\u5740\u8bbf\u95ee\u3002\u4e91\u7aef\u5730\u5740\u7684\u8d1f\u8f7d\u5747\u8861\u6a21\u5f0f\u53ef\u4ee5\u9009\u62e9\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"rr(round-robin)\uff1a\u8f6e\u8f6c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u9009\u62e9\u8be5\u6a21\u5f0f\uff1b"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"priority: \u4f18\u5148\u7ea7\u6a21\u5f0f\uff0c\u9ad8\u4f18\u5148\u7ea7\u5730\u5740\u6545\u969c\u540e\u624d\u4f7f\u7528\u4f4e\u4f18\u5148\u7ea7\u5730\u5740\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5177\u4f53\u53ef\u4ee5\u53c2\u7167 YurtHub \u7684 LB \u6a21\u5757\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:r(73343).Z+"",width:"1080",height:"375"})}),"\n",(0,t.jsx)(n.h3,{id:"3\u8282\u70b9\u7ef4\u5ea6\u7684\u4e91\u7aef\u6d41\u63a7",children:"3\uff09\u8282\u70b9\u7ef4\u5ea6\u7684\u4e91\u7aef\u6d41\u63a7"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e00\u4e2a\u5206\u5e03\u5f0f\u7cfb\u7edf\u6765\u8bf4\uff0c\u6d41\u63a7\u90fd\u662f\u4e00\u4e2a\u65e0\u6cd5\u56de\u907f\u7684\u95ee\u9898\u3002\u539f\u751f Kubernetes \u4ece\u96c6\u7fa4\u89c6\u89d2\u5728 kube-apiserver \u4e2d\u4ee5\u53ca\u4ece\u8bbf\u95ee\u8005\u89c6\u89d2\u5728 client-go \u5e93\u4e2d\u5c01\u88c5\u4e86\u6d41\u91cf\u7ba1\u63a7\uff0c\u5728\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u4e0b\uff0cclient-go \u7684\u6d41\u91cf\u7ba1\u63a7\u65e2\u5206\u6563\u53c8\u5bf9\u4e1a\u52a1\u6709\u4e00\u5b9a\u4fb5\u5165\uff0c\u663e\u7136\u4e0d\u80fd\u5f88\u597d\u7684\u89e3\u51b3\u6d41\u63a7\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:"YurtHub \u5728\u8fb9\u7f18\u53ef\u4ee5\u63a5\u7ba1\u4e0d\u8bba\u662f\u7cfb\u7edf\u7ec4\u4ef6\u8fd8\u662f\u4e1a\u52a1\u5bb9\u5668\u5bf9\u4e91\u7aef\u8bbf\u95ee\u7684\u6d41\u91cf\uff0c\u53ef\u4ee5\u5f88\u597d\u7684\u89e3\u51b3\u8282\u70b9\u7ef4\u5ea6\u7684\u4e91\u7aef\u6d41\u63a7\u95ee\u9898\u3002\u76ee\u524d YurtHub \u7684\u6d41\u63a7\u914d\u7f6e\u662f\uff1a\u5355\u8282\u70b9\u4e0a\u5bf9\u4e91\u7aef\u7684\u5e76\u53d1\u8bf7\u6c42\u6570\u8d85\u8fc7 250 \u4e2a\u65f6\uff0c\u5c06\u62d2\u7edd\u65b0\u7684\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"4\u8282\u70b9\u8bc1\u4e66\u8f6e\u8f6c\u7ba1\u7406",children:"4\uff09\u8282\u70b9\u8bc1\u4e66\u8f6e\u8f6c\u7ba1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"Kubernetes \u5df2\u7ecf\u652f\u6301\u8282\u70b9\u8bc1\u4e66\u81ea\u52a8\u8f6e\u6362\uff0c\u5373\u5f53\u8282\u70b9\u8bc1\u4e66\u5feb\u8fc7\u671f\u524d\uff0ckubelet \u4f1a\u81ea\u52a8\u5411\u4e91\u7aef\u7533\u8bf7\u65b0\u7684\u8282\u70b9\u8bc1\u4e66\u3002\u4f46\u662f\u5728\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u5f88\u6709\u53ef\u80fd\u56e0\u4e3a\u8fb9\u7f18\u548c\u4e91\u7aef\u7f51\u7edc\u7684\u65ad\u8fde\uff0c\u9020\u6210 kubelet \u5c06\u65e0\u6cd5\u5b8c\u6210\u8bc1\u4e66\u7684\u8f6e\u6362\u3002\u8bc1\u4e66\u8fc7\u671f\u540e\u5373\u4f7f\u548c\u4e91\u7aef\u7f51\u7edc\u8fde\u63a5\u6062\u590d\uff0c\u8282\u70b9\u8bc1\u4e66\u4e5f\u53ef\u80fd\u65e0\u6cd5\u81ea\u52a8\u8f6e\u6362\uff0c\u5e76\u9020\u6210 kubelet \u7684\u9891\u7e41\u91cd\u542f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"YurtHub \u5728\u63a5\u7ba1\u8282\u70b9\u548c\u4e91\u7aef\u901a\u4fe1\u6d41\u91cf\u65f6\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u63a5\u7ba1\u8282\u70b9\u7684\u8bc1\u4e66\u7ba1\u7406\u3002\u8fd9\u6837\u65e2\u89e3\u51b3\u4e86\u5404\u7c7b\u5b89\u88c5\u5de5\u5177\u5bf9\u8282\u70b9\u8bc1\u4e66\u7684\u7ba1\u7406\u7684\u4e0d\u4e00\u81f4\uff0c\u4e5f\u89e3\u51b3\u4e86\u8bc1\u4e66\u8fc7\u671f\u540e\u7f51\u7edc\u518d\u6062\u590d\u65f6\u7684\u8bc1\u4e66\u8f6e\u6362\u95ee\u9898\u3002\u53e6\u5916\u76ee\u524d YurtHub \u8fd8\u662f kubelet \u5171\u4eab\u8282\u70b9\u8bc1\u4e66\uff0cYurtHub \u7684\u72ec\u7acb\u8282\u70b9\u8bc1\u4e66\u7ba1\u7406\u529f\u80fd\u5c06\u5728\u8fd1\u671f\u5f00\u6e90\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"5\u5176\u4ed6",children:"5\uff09\u5176\u4ed6"}),"\n",(0,t.jsx)(n.p,{children:"YurtHub \u9664\u4e86\u524d\u9762\u4ecb\u7ecd\u7684\u6269\u5c55\u80fd\u529b\uff0c\u8fd8\u6709\u5f88\u591a\u6709\u4ef7\u503c\u7684\u80fd\u529b\uff0c\u5728\u6b64\u4e5f\u7b80\u5355\u4ecb\u7ecd\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8282\u70b9\u591a\u79df\u9694\u79bb\u7ba1\u7406\uff1a\u5728\u5177\u5907\u591a\u79df\u9694\u79bb\u80fd\u529b\u7684 Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u5047\u5b9a\u8282\u70b9\u5f52\u5c5e\u4e8e\u67d0\u4e2a\u79df\u6237\uff0c\u90a3\u4e48 YurtHub \u5c06\u53ef\u4ee5\u786e\u4fdd\u8282\u70b9\u4e0a\u6240\u6709\u4e91\u7aef\u8bf7\u6c42\u90fd\u53ea\u8fd4\u56de\u8282\u70b9\u6240\u5c5e\u79df\u6237\u7684\u8d44\u6e90\u3002\u6bd4\u5982\u8bf4 list service \u5c06\u53ea\u8fd4\u56de\u8be5\u79df\u6237\u7684 service\u3002\u800c\u8fd9\u79cd\u591a\u79df\u9694\u79bb\u80fd\u529b\u4e0d\u9700\u8981\u5176\u4ed6\u7ec4\u4ef6\u505a\u4efb\u4f55\u4fee\u6539\u3002\u5f53\u7136\u5982\u679c\u8981\u5b9e\u73b0\u96c6\u7fa4\u5185\u7684\u591a\u79df\u9694\u79bb\uff0c\u9700\u8981\u914d\u5408\u76f8\u5e94\u7684\u591a\u7ec4 CRD \u7b49\uff0c\u8be6\u7ec6\u53ef\u4ee5\u53c2\u7167",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/multi-tenancy",children:"\u9879\u76eekubernetes-sigs/multi-tenancy"})]}),"\n",(0,t.jsx)(n.li,{children:"\u96c6\u7fa4\u95f4\u8282\u70b9\u8fc1\u79fb\uff1a\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u9700\u8981\u4ece\u96c6\u7fa4 A \u8fc1\u79fb\u5230\u96c6\u7fa4 B\uff0c\u5e38\u89c4\u64cd\u4f5c\u662f\u5148\u4ece\u96c6\u7fa4 A \u4e0b\u7ebf\uff0c\u7136\u540e\u518d\u6b21\u63a5\u5165\u96c6\u7fa4 B\uff0c\u6700\u540e\u5728\u96c6\u7fa4 B \u90e8\u7f72\u8282\u70b9\u4e0a\u7684\u5e94\u7528\u3002\u56e0\u4e3a YurtHub \u5bf9\u8282\u70b9\u6d41\u91cf\u4ee5\u53ca\u8282\u70b9\u8bc1\u4e66\u7684\u63a5\u7ba1\uff0c\u53ef\u4ee5\u76f4\u63a5\u5bf9 YurtHub \u6ce8\u5165\u96c6\u7fa4B\u7684\u4fe1\u606f\uff0c\u8ba9\u8282\u70b9\u65e0\u635f\u8fc1\u79fb\u5230\u96c6\u7fa4 B\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7\u57df\u540d\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7b49\u7b49\u4e00\u4e9b\u5176\u4ed6\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u8ff0\u7684\u6269\u5c55\u80fd\u529b\u53ef\u4ee5\u770b\u51fa\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"YurtHub \u4e0d\u4ec5\u4ec5\u662f\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u5e26\u6709\u6570\u636e\u7f13\u5b58\u80fd\u529b\u7684\u53cd\u5411\u4ee3\u7406\uff0c\u800c\u4e14\u5bf9 Kubernetes \u8282\u70b9\u5e94\u7528\u751f\u547d\u5468\u671f\u7ba1\u7406\u52a0\u4e86\u4e00\u5c42\u65b0\u7684\u5c01\u88c5\uff0c\u63d0\u4f9b\u8fb9\u7f18\u8ba1\u7b97\u6240\u9700\u8981\u7684\u6838\u5fc3\u7ba1\u63a7\u80fd\u529b\uff1b"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"YurtHub \u4e0d\u4ec5\u4ec5\u9002\u7528\u4e8e\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\uff0c\u5176\u5b9e\u8fd8\u53ef\u4ee5\u4f5c\u4e3a\u8282\u70b9\u4fa7\u7684\u4e00\u4e2a\u5e38\u5907\u7ec4\u4ef6\uff0c\u9002\u7528\u4e8e\u4f7f\u7528 Kubernetes \u7684\u4efb\u610f\u573a\u666f\u3002\u76f8\u4fe1\u8fd9\u4e5f\u4f1a\u9a71\u52a8 YurtHub \u5411\u66f4\u9ad8\u6027\u80fd\uff0c\u66f4\u9ad8\u7a33\u5b9a\u6027\u53d1\u5c55\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/gYxK3GLhDRNkHibYgTchOg",children:"\u539f\u6587\u94fe\u63a5"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},73343:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/local_storage-1840a2ad53f7d9f8ea961465a9104ee8.png"},27521:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/yurthub-40267e14a620859d35d3085eb5de2d24.png"},11151:(e,n,r)=>{r.d(n,{a:()=>l});var t=r(67294);const i={},u=t.createContext(i);function l(e){const n=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);