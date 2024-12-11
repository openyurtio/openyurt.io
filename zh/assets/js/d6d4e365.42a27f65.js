"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[16966],{4372:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"core-concepts/yurthub","title":"YurtHub","description":"1. \u529f\u80fd\u7b80\u4ecb","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/core-concepts/yurthub.md","sourceDirName":"core-concepts","slug":"/core-concepts/yurthub","permalink":"/zh/docs/v0.5.0/core-concepts/yurthub","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurthub.md","tags":[],"version":"v0.5.0","lastUpdatedBy":"Cookie","lastUpdatedAt":1733885620000,"frontMatter":{"title":"YurtHub"},"sidebar":"docs","previous":{"title":"\u7cfb\u7edf\u67b6\u6784","permalink":"/zh/docs/v0.5.0/core-concepts/architecture"},"next":{"title":"YurtTunnel","permalink":"/zh/docs/v0.5.0/core-concepts/yurttunnel"}}');var s=r(74848),i=r(28453);const c={title:"YurtHub"},d=void 0,t={},a=[{value:"1. \u529f\u80fd\u7b80\u4ecb",id:"1-\u529f\u80fd\u7b80\u4ecb",level:2},{value:"1\uff09\u8fb9\u7f18\u81ea\u6cbb",id:"1\u8fb9\u7f18\u81ea\u6cbb",level:3},{value:"2\uff09\u6d41\u91cf\u95ed\u73af",id:"2\u6d41\u91cf\u95ed\u73af",level:3},{value:"3\uff09Pod \u65e0\u7f1d\u8fc1\u79fb",id:"3pod-\u65e0\u7f1d\u8fc1\u79fb",level:3},{value:"4\uff09\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301",id:"4\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301",level:3},{value:"5\uff09\u8282\u70b9\u8bc1\u4e66\u7ba1\u7406",id:"5\u8282\u70b9\u8bc1\u4e66\u7ba1\u7406",level:3},{value:"2. \u7ec4\u4ef6\u67b6\u6784",id:"2-\u7ec4\u4ef6\u67b6\u6784",level:2},{value:"1\uff09Edge \u6a21\u5f0f",id:"1edge-\u6a21\u5f0f",level:3},{value:"2\uff09Cloud \u6a21\u5f0f",id:"2cloud-\u6a21\u5f0f",level:3},{value:"3. \u542f\u52a8\u53c2\u6570",id:"3-\u542f\u52a8\u53c2\u6570",level:2}];function u(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-\u529f\u80fd\u7b80\u4ecb",children:"1. \u529f\u80fd\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u4f5c\u4e3a OpenYurt \u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u7ec4\u4ef6\uff0c\u5728\u4e91\u8fb9\u573a\u666f\u4e0b\u4e3a\u8fb9\u7f18\u4fa7\u63d0\u4f9b\u4e86\u8bb8\u591a\u6269\u5c55\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"1\u8fb9\u7f18\u81ea\u6cbb",children:"1\uff09\u8fb9\u7f18\u81ea\u6cbb"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d OpenYurt \u63d0\u4f9b\u8fb9\u7f18\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\uff1a\u5373\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u65f6\uff0c\u8fb9\u7f18\u8282\u70b9\u91cd\u542f\u6216\u8005\u4e1a\u52a1\u5bb9\u5668\u91cd\u542f\u7684\u60c5\u51b5\u4e0b\uff0c\u4e1a\u52a1\u5bb9\u5668\u80fd\u591f\u5728\u8fb9\u7f18\u8282\u70b9\u81ea\u52a8\u6062\u590d\uff0c\u800c\u4e0d\u4f1a\u88ab\u4e91\u7aef\u9a71\u9010\u3001\u91cd\u65b0\u8c03\u5ea6\u3002"}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u901a\u8fc7\u672c\u5730\u7f13\u5b58\u8d44\u6e90\uff0c\u4f7f\u5f97\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u7684\u60c5\u51b5\u4e0b\uff0cPod \u4ee5\u53ca Kubelet \u4e5f\u80fd\u591f\u901a\u8fc7 YurtHub \u83b7\u53d6\u6240\u9700\u8d44\u6e90\u800c\u4fdd\u6301\u5176\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(35045).A+"",width:"1428",height:"596"})}),"\n",(0,s.jsx)(n.h3,{id:"2\u6d41\u91cf\u95ed\u73af",children:"2\uff09\u6d41\u91cf\u95ed\u73af"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u539f\u751f\u7684 k8s \u96c6\u7fa4\u4e2d\uff0c\u670d\u52a1 Service \u8d44\u6e90\u7684\u540e\u7aef\u8303\u56f4\u662f\u6574\u4e2a\u96c6\u7fa4\u3002\u5728 OpenYurt \u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 NodePool \u5212\u5206\u8282\u70b9\uff0c\u5bf9\u8282\u70b9\u8fdb\u884c\u5206\u533a\u7ba1\u7406\u3002\u7531\u6b64\uff0c\u8d44\u6e90\u7684\u7ba1\u7406\u53ef\u4ee5\u4ee5\u8282\u70b9\u6c60\u4e3a\u57fa\u672c\u5355\u4f4d\uff0c\u6bd4\u5982\u4f7f\u7528 UnitedDeployment \u7ba1\u7406\u4e0d\u540c\u8282\u70b9\u6c60\u4e2d\u7684 Pod \u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8fd9\u6837\u7684\u80cc\u666f\u4e0b\uff0c\u4e0d\u540c\u8282\u70b9\u6c60\u4e2d\u7684\u8d44\u6e90\u5177\u6709\u4e00\u5b9a\u7684\u72ec\u7acb\u6027\uff0c\u5206\u533a\u4e2d\u7684\u8282\u70b9\u53ef\u80fd\u8981\u6c42\u5bf9 Service \u8bbf\u95ee\u6d41\u91cf\u53ea\u5728\u540c\u4e00\u533a\u57df\u5185\u6d41\u901a\uff0c\u800c\u4e0d\u4f1a\u8de8\u8282\u70b9\u5206\u533a\u8bbf\u95ee\u3002\u56e0\u6b64\uff0cYurtHub \u63d0\u4f9b\u4e86\u6d41\u91cf\u95ed\u73af\u7684\u529f\u80fd\uff1a\u5c06 Service \u5bf9\u5e94\u7684\u540e\u7aef\u9650\u5236\u5728\u540c\u4e00\u8282\u70b9\u6c60\u4e2d\uff0c\u4f7f\u5f97 Service \u7684\u8bbf\u95ee\u6d41\u91cf\u53ea\u5728\u540c\u4e00\u8282\u70b9\u6c60\u4e2d\u6d41\u901a\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(74434).A+"",width:"1422",height:"554"})}),"\n",(0,s.jsx)(n.h3,{id:"3pod-\u65e0\u7f1d\u8fc1\u79fb",children:"3\uff09Pod \u65e0\u7f1d\u8fc1\u79fb"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u539f\u751f k8s \u96c6\u7fa4\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cPod \u901a\u8fc7 InClusterConfig \u5730\u5740\u8bbf\u95ee Kube APIServer\u3002\u5728\u4e91\u8fb9\u573a\u666f\u4e2d\uff0c\u4e91\u7aef\u4e0e\u8fb9\u7f18\u53ef\u80fd\u4f4d\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u5e73\u9762\uff0c\u6b64\u65f6\uff0cPod \u5c31\u65e0\u6cd5\u901a\u8fc7 InClusterConfig \u5730\u5740\u8bbf\u95ee\u5230 Kube APIServer\u3002\u540c\u65f6\uff0c\u5728\u4e91\u8fb9\u65ad\u8fde\u7684\u60c5\u51b5\u4e0b\uff0c\u8fb9\u7f18 Pod \u9700\u8981\u91cd\u542f\u65f6\uff0c\u7531\u4e8e\u65e0\u6cd5\u8fde\u63a5 Kube APIServer \u83b7\u53d6\u8d44\u6e90\u914d\u7f6e\u800c\u91cd\u542f\u5931\u8d25\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u4e24\u4e2a\u95ee\u9898\uff0cYurtHub \u63d0\u4f9b\u4e86 Pod \u96f6\u4fee\u6539\u8fc1\u79fb\u5230\u8fb9\u7f18\u73af\u5883\u4e2d\u7684\u80fd\u529b\u3002\u5bf9\u4e8e\u4f7f\u7528 InClusterConfig \u8bbf\u95ee Kube APIServer \u7684 Pod\uff0cYurtHub \u5728\u4e0d\u4fee\u6539 Pod \u672c\u8eab\u7684\u914d\u7f6e\u7684\u524d\u63d0\u4e0b\uff0c\u81ea\u52a8\u8c03\u6574\u8282\u70b9\u4e0a Pod \u7684\u8bbf\u95ee\u5730\u5740\uff0c\u5c06 Pod \u7684\u8bf7\u6c42\u8f6c\u53d1\u81f3 YurtHub\uff0c\u4f7f\u5f97 Pod \u5728\u4e91\u8fb9\u65ad\u7f51\u65f6\u4e5f\u80fd\u591f\u6b63\u5e38\u8fd0\u884c\uff0c\u5b9e\u73b0\u4e86 Pod \u5728\u4e91\u573a\u666f\u4e0b\u5230\u4e91\u8fb9\u573a\u666f\u7684\u65e0\u7f1d\u8fc1\u79fb\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(19246).A+"",width:"2426",height:"926"})}),"\n",(0,s.jsx)(n.h3,{id:"4\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301",children:"4\uff09\u591a\u4e91\u7aef\u5730\u5740\u652f\u6301"}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u652f\u6301\u591a\u4e91\u7aef\u5730\u5740\u8bbf\u95ee\uff0c\u4ee5\u6ee1\u8db3\u4e13\u6709\u4e91\u573a\u666f\u4e2d\u591a\u4e2a Kube APIServer \u540c\u65f6\u5de5\u4f5c\u3001\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u4e2d\u4e13\u7ebf\u548c\u516c\u7f51\u901a\u4fe1\u540c\u65f6\u5de5\u4f5c\u7684\u60c5\u51b5\u3002YurtHub \u4e2d\u4e91\u7aef\u5730\u5740\u7684\u8d1f\u8f7d\u5747\u8861\u6a21\u5f0f\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"rr(round-robin)\uff1a\u8f6e\u8f6c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u9009\u62e9\u8be5\u6a21\u5f0f\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"priority: \u4f18\u5148\u7ea7\u6a21\u5f0f\uff0c\u9ad8\u4f18\u5148\u7ea7\u5730\u5740\u6545\u969c\u540e\u624d\u4f7f\u7528\u4f4e\u4f18\u5148\u7ea7\u5730\u5740\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5\u8282\u70b9\u8bc1\u4e66\u7ba1\u7406",children:"5\uff09\u8282\u70b9\u8bc1\u4e66\u7ba1\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\uff0cYurtHub \u4f5c\u4e3a\u5ba2\u6237\u7aef\u5c06\u8bf7\u6c42\u8f6c\u53d1\u81f3 Kube APIServer\u3002\u540c\u65f6\uff0cYurtHub \u63d0\u4f9b\u4e86 HTTP\u3001HTTPS \u670d\u52a1\u7aef\u53e3\uff0c\u8282\u70b9 Pod \u4ee5\u53ca Kubelet \u53ef\u4ee5\u901a\u8fc7 HTTP \u6216\u8005 HTTPS \u4e0e YurtHub \u8fdb\u884c\u8fde\u63a5\uff0c\u6b64\u65f6 YurtHub \u53c8\u4f5c\u4e3a\u670d\u52a1\u7aef\u63a5\u6536\u8282\u70b9\u4e0a\u7684 Pod \u4ee5\u53ca Kubelet \u7684\u8bf7\u6c42\u3002\u7531\u4e8e\u96c6\u7fa4\u7ec4\u4ef6\u4e4b\u95f4\u4e3a\u5b89\u5168\u901a\u4fe1\uff0c\u6240\u4ee5 YurtHub \u9700\u8981\u62e5\u6709\u5ba2\u6237\u7aef\u8bc1\u4e66\u4ee5\u53ca\u670d\u52a1\u7aef\u8bc1\u4e66\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u7ba1\u7406\u3002"}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u4ee5\u53ca\u670d\u52a1\u7aef\u8bc1\u4e66\u4f7f\u7528\u4e86 Kubernetes \u4e2d\u7684\u8282\u70b9\u8bc1\u4e66\u81ea\u52a8\u8f6e\u6362\u529f\u80fd\uff0c\u5f53\u8282\u70b9\u8bc1\u4e66\u8fc7\u671f\u524d\uff0c\u81ea\u52a8\u5411\u4e91\u7aef\u7533\u8bf7\u65b0\u7684\u8282\u70b9\u8bc1\u4e66\u3002\u540c\u65f6\uff0c\u4e5f\u89e3\u51b3\u4e86\u56e0\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\uff0c\u9020\u6210\u8bc1\u4e66\u8f6e\u6362\u5931\u8d25\uff0c\u5f53\u7f51\u7edc\u6062\u590d\u65f6\u8bc1\u4e66\u5df2\u7ecf\u8fc7\u671f\u800c\u8f6e\u6362\u518d\u6b21\u5931\u8d25\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"2-\u7ec4\u4ef6\u67b6\u6784",children:"2. \u7ec4\u4ef6\u67b6\u6784"}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u65e2\u53ef\u4ee5\u8fd0\u884c\u5728\u4e91\u7aef\u8282\u70b9\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u8fd0\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u3002\u6240\u4ee5\uff0c\u5176\u652f\u6301\u4e24\u79cd\u5de5\u4f5c\u6a21\u5f0f\uff1a\u201cedge\u201d\uff0c\u201ccloud\u201d\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"1edge-\u6a21\u5f0f",children:"1\uff09Edge \u6a21\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e \u201cedge\u201d \u6a21\u5f0f\u7684 YurtHub\uff0c\u5176\u7ec4\u4ef6\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(51744).A+"",width:"1532",height:"946"})}),"\n",(0,s.jsx)(n.p,{children:"\u67b6\u6784\u56fe\u4e2d\u6e05\u6670\u5f97\u8868\u660e\u4e86\u8bf7\u6c42\u5728 YurtHub \u4e2d\u7684\u6d41\u5411\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u4e91\u8fb9\u7f51\u7edc\u72b6\u51b5\u826f\u597d\u7684\u60c5\u51b5\u4e0b\uff0c\u8282\u70b9\u4e0a\u7684 Pod \u4ee5\u53ca Kubelet \u7684\u8bf7\u6c42\u901a\u8fc7 Load Balancer \u53d1\u9001\u7ed9 Kube APIServer\uff0cLoad Balancer \u63a5\u6536\u5230\u54cd\u5e94\u6d88\u606f\u540e\uff0c\u5bf9\u54cd\u5e94\u6d88\u606f\u8fdb\u884c\u6570\u636e\u8fc7\u6ee4\u5904\u7406\uff0c\u5e76\u6839\u636e\u8bf7\u6c42\u7c7b\u578b\u5bf9\u54cd\u5e94\u4f53\u4e2d\u7684\u8d44\u6e90\u8fdb\u884c\u672c\u5730\u7f13\u5b58\uff0c\u4e4b\u540e\u518d\u5c06\u54cd\u5e94\u8fd4\u56de\u7ed9\u8bf7\u6c42\u65b9\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u4e91\u8fb9\u7f51\u7edc\u72b6\u51b5\u65ad\u5f00\u7684\u60c5\u51b5\u4e0b\uff0c\u8282\u70b9\u4e0a\u7684 Pod \u4ee5\u53ca Kubelet \u7684\u8bf7\u6c42\u7531 Local Proxy \u8fdb\u884c\u5904\u7406\uff0cLocal Proxy \u901a\u8fc7\u5bf9\u672c\u5730\u7f13\u5b58\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u8fd4\u56de\u54cd\u5e94\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6839\u636e\u6570\u636e\u6d41\uff0c\u53ef\u4ee5\u7b80\u5355\u7684\u5c06 YurtHub \u4e2d\u7684\u6a21\u5757\u5206\u4e3a\u4e91\u7aef\u670d\u52a1\u6a21\u5757\u4ee5\u53ca\u672c\u5730\u670d\u52a1\u6a21\u5757\u3002\n\u672c\u5730\u670d\u52a1\u6a21\u5757\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u5b50\u6a21\u5757\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Local Proxy"}),"\n\u8d1f\u8d23\u5728\u4e91\u8fb9\u65ad\u7f51\u7684\u60c5\u51b5\u4e0b\uff0c\u5904\u7406\u8282\u70b9 Pod \u4ee5\u53ca Kubelet \u7684\u8d44\u6e90\u8bf7\u6c42\uff0c\u4f7f\u5f97\u8bf7\u6c42\u65b9\u80fd\u591f\u5bf9\u7f51\u7edc\u65ad\u8fde\u65e0\u611f\u77e5\u3002Local Proxy \u5904\u7406\u8bf7\u6c42\u65f6\uff0c\u5bf9\u4e8e\u672c\u5730\u652f\u6301\u7684\u64cd\u4f5c\uff08Get\u3001List\u3001Watch\uff09\uff0c\u6784\u5efa\u54cd\u5e94\u4fe1\u606f\u5e76\u8fd4\u56de\u5bf9\u5e94\u7684\u8d44\u6e90\uff1b\u5bf9\u4e8e\u672c\u5730\u4e0d\u652f\u6301\u7684\u64cd\u4f5c\uff08Delete\u3001Create\u3001Update\u7b49\uff09\uff0c\u8fd4\u56de\u64cd\u4f5c\u5931\u8d25\u4fe1\u606f\u3002\u8fc7\u7a0b\u4e2d\u8c03\u7528\u4e86 Cache Manager \u6a21\u5757\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cache Manager"}),"\n\u8d1f\u8d23\u8d44\u6e90\u7684\u672c\u5730\u5b58\u50a8\u4ee5\u53ca\u83b7\u53d6\u3002\u4e3b\u8981\u63d0\u4f9b\u4e86\u5bf9\u8bf7\u6c42\u54cd\u5e94\u6d88\u606f\u8fdb\u884c\u672c\u5730\u5b58\u50a8\u7684\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u88ab Load Balancer \u4f7f\u7528\uff1b\u63d0\u4f9b\u4e86\u6839\u636e\u8bf7\u6c42\u4ece\u78c1\u76d8\u83b7\u53d6\u5bf9\u5e94\u8d44\u6e90\u7684\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u88ab Local Proxy \u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Storage Manager"}),"\n\u5b9a\u4e49\u4e86\u5728\u78c1\u76d8\u4e0a\u64cd\u4f5c\u8d44\u6e90\u7684\u57fa\u672c\u65b9\u6cd5\uff0c\u5305\u62ec Create\u3001Update\u3001Delete\u3001Get\u3001List \u7b49\u3002\u6700\u7ec8\u8d44\u6e90\u4ee5\u5e8f\u5217\u5316\u683c\u5f0f\u5b58\u50a8\u5728\u672c\u5730\u78c1\u76d8\u4e0a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Network Manager"}),"\n\u8d1f\u8d23\u8bbe\u7f6e\u4e3b\u673a iptables \u4e2d\u7684\u89c4\u5219\uff0c\u5c06\u672c\u5730 Pod \u4ee5\u53ca Kubelet \u53d1\u5f80 Kube APIServer \u7684\u8bf7\u6c42\u8f6c\u53d1\u81f3 YurtHub \u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e91\u7aef\u670d\u52a1\u6a21\u5757\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u5b50\u6a21\u5757\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Certificate Manager"}),"\n\u8d1f\u8d23\u7ba1\u7406 YurtHub \u4f5c\u4e3a\u5ba2\u6237\u7aef\u4e0e Kube APIServer \u8fde\u63a5\u6240\u9700\u7684\u4fe1\u606f\uff0c\u5305\u62ec YurtHub \u5ba2\u6237\u7aef\u8bc1\u4e66\u3001\u96c6\u7fa4 ca \u8bc1\u4e66\u3002\n\u5f53\u8bc1\u4e66\u7ba1\u7406\u6a21\u5f0f\u4e3a \u201ckubelet\u201d \uff0c\u5373 YurtHub \u4f7f\u7528 Kubelet \u5ba2\u6237\u7aef\u8bc1\u4e66\u65f6\uff0cCertificate Manager \u4fdd\u8bc1 YurtHub \u4f7f\u7528\u6700\u65b0\u7684 Kubelet \u5ba2\u6237\u7aef\u8bc1\u4e66\uff1b\u5f53\u8bc1\u4e66\u7ba1\u7406\u6a21\u5f0f\u4e3a \u201chubself\u201d \u65f6\uff0cCertificate Manager \u8d1f\u8d23\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u7533\u8bf7\u4ee5\u53ca\u66f4\u65b0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Health Check"}),"\n\u8d1f\u8d23\u5b9a\u671f\u68c0\u6d4b Kube APIServer \u662f\u5426\u53ef\u4ee5\u8bbf\u95ee\uff0c\u8bbe\u7f6e Kube APIServer \u7684\u5065\u5eb7\u72b6\u6001\uff0c\u4f5c\u4e3a\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u4e91\u7aef\u6216\u8005\u672c\u5730\u5904\u7406\u7684\u4f9d\u636e\u3002\u6b64\u5916\uff0cHealth Check \u8fd8\u8d1f\u8d23\u5c06 YurtHub \u7684\u5fc3\u8df3\u4fe1\u606f\u66f4\u65b0\u5230\u4e91\u7aef\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Load Balancer"}),"\n\u8d1f\u8d23\u4e0e Kube APIServer \u5efa\u7acb\u8fde\u63a5\uff0c\u5c06\u8282\u70b9\u4e0a\u7684 Pod \u4ee5\u53ca Kubelet \u7684\u8bf7\u6c42\u8f6c\u53d1\u81f3\u4e91\u7aef\uff0cLB \u6a21\u5757\u652f\u6301\u591a\u4e91\u7aef\u5730\u5740\u8bbf\u95ee\uff0c\u4e91\u7aef\u7684\u8d1f\u8f7d\u5747\u8861\u6a21\u5f0f\u53ef\u4ee5\u9009\u62e9\u8f6e\u8f6c\u6a21\u5f0f\uff08round-robin\uff09\u6216\u8005\u4f18\u5148\u7ea7\u6a21\u5f0f\uff08priority\uff09\u3002\n\u540c\u65f6\uff0cLB \u6a21\u5757\u8fd8\u8d1f\u8d23\u5bf9\u8bf7\u6c42\u7684\u54cd\u5e94\u6d88\u606f\u8fdb\u884c\u5904\u7406\u4ee5\u53ca\u672c\u5730\u7f13\u5b58\uff0c\u5176\u4e2d\u5bf9\u54cd\u5e94\u6d88\u606f\u7684\u5904\u7406\u8c03\u7528\u4e86 Data Filtering Framework \u6a21\u5757\uff0c\u672c\u5730\u7f13\u5b58\u8c03\u7528\u4e86 Storage Manager \u6a21\u5757\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Filtering Framework"}),"\n\u5bf9\u8bf7\u6c42\u54cd\u5e94\u6d88\u606f\u8fdb\u884c\u6570\u636e\u8fc7\u6ee4\u5904\u7406\uff0c\u4ee5\u6269\u5c55 YurtHub \u7684\u80fd\u529b\u3002\u76ee\u524d\u5305\u542b\u4e86\u4e09\u4e2a\u8fc7\u6ee4\u5668\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"MasterService Filter\uff1a\u63d0\u4f9b\u4e86\u4f7f\u7528 InClusterConfig \u7684\u4e1a\u52a1 Pod \u96f6\u4fee\u6539\u5c31\u53ef\u4ee5\u8fd0\u884c\u5728\u8fb9\u7f18\u73af\u5883\u7684\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ServiceTopology Filter\uff1a\u63d0\u4f9b\u4e86\u6d41\u91cf\u95ed\u73af\u7684\u80fd\u529b\uff0c\u5c06\u670d\u52a1\u8bbf\u95ee\u7684\u540e\u7aef\u9650\u5236\u5728\u8282\u70b9\u6240\u5728\u7684 NodePool \u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"DiscardCloudService Filter\uff1a\u5f53\u4e91\u7aef\u4e0e\u8fb9\u7f18\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u5e73\u9762\u65f6\uff0c\u8fb9\u7f18\u901a\u8fc7\u516c\u7f51\u8bbf\u95ee\u800c\u4e0d\u662f PodIP \u8bbf\u95ee\u540e\u7aef\u670d\u52a1\uff0c\u4ee5\u786e\u4fdd\u8fb9\u7f18\u80fd\u591f\u6b63\u786e\u8bbf\u95ee\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GC Manager"}),"\n\u5728 YurtHub \u6bcf\u6b21\u91cd\u542f\u65f6\uff0c\u5c06\u8282\u70b9\u4e0a\u5b58\u50a8\u7684\u5e76\u4e14\u4e91\u7aef\u5df2\u7ecf\u4e0d\u5b58\u5728\u7684 Pod \u8d44\u6e90\u8fdb\u884c\u56de\u6536\u3002\u4e4b\u540e\u6bcf\u9694\u4e00\u5b9a\u65f6\u95f4\u5bf9\u8282\u70b9\u4e0a\u7f13\u5b58\u7684 kubelet\u3001kube-proxy event \u8d44\u6e90\u8fdb\u884c\u56de\u6536\u5220\u9664\u64cd\u4f5c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2cloud-\u6a21\u5f0f",children:"2\uff09Cloud \u6a21\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e \u201ccloud\u201d \u6a21\u5f0f\u7684 YurtHub\uff0c\u5176\u7ec4\u4ef6\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(58844).A+"",width:"1398",height:"859"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0e edge \u6a21\u5f0f\u76f8\u6bd4\uff0c\u7531\u4e8e\u4e91\u7aef\u7f51\u7edc\u7a33\u5b9a\uff0c\u4e0d\u7528\u68c0\u6d4b\u8282\u70b9\u4e0e Kube APIServer \u7684\u8fde\u63a5\u72b6\u51b5\uff0cYurtHub \u5c06\u6240\u6709\u7684\u8bf7\u6c42\u8f6c\u53d1\u81f3 Kube APIServer\uff0cYurtHub \u4e5f\u4e0d\u9700\u8981\u672c\u5730\u7f13\u5b58\u6570\u636e\u3002\u6240\u4ee5 cloud \u6a21\u5f0f\u7684 YurtHub \u5173\u95ed\u4e86\u4e0e\u672c\u5730\u5904\u7406\u8bf7\u6c42\u76f8\u5173\u7684\u6a21\u5757\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"3-\u542f\u52a8\u53c2\u6570",children:"3. \u542f\u52a8\u53c2\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--access-server-through-hub  \u9ed8\u8ba4\u503c: true\n"})}),"\n",(0,s.jsx)(n.p,{children:"Pod \u662f\u5426\u901a\u8fc7 YurtHub \u8fde\u63a5 kube-apiserver\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--bind-address  \u9ed8\u8ba4\u503c: "127.0.0.1"\n'})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub server \u7684 IP \u5730\u5740\uff0cYurthub server\u76d1\u542c\u8be5\u5730\u5740\u4e0a\u7684pprof\uff0ctoken\u66f4\u65b0\uff0chealthz\u4ee5\u53cametrics\u8bf7\u6c42\uff0c\u4e0e --serve-port \u642d\u914d\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--cert-mgr-mode  \u9ed8\u8ba4\u503c: "hubself"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u914d\u7f6e YurtHub \u4f7f\u7528\u7684\u8bc1\u4e66\u3002\u5982\u679c\u503c\u4e3a \u201chubself\u201d\uff0c\u5219\u4f7f\u7528 YurtHub \u7533\u8bf7\u7684\u8bc1\u4e66\uff1b\u5982\u679c\u503c\u4e3a \u201ckubelet\u201d\uff0c\u5219\u4f7f\u7528 kubelet \u7684\u8bc1\u4e66\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--disabled-resource-filters\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5173\u95ed\u7684\u8fc7\u6ee4\u5668\u5217\u8868\u3002\u9ed8\u8ba4\u6240\u6709\u7684\u8fc7\u6ee4\u5668\u90fd\u6253\u5f00\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--disk-cache-path   \u9ed8\u8ba4\u503c: "/etc/kubernetes/cache/"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Kubernetes \u5b58\u50a8\u5143\u6570\u636e\u7684\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--dummy-if-ip  \u9ed8\u8ba4\u503c: "169.254.2.1"\n'})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u865a\u62df\u63a5\u53e3\u7684 IP \u5730\u5740\uff0c\u7528\u4e8e\u5bb9\u5668\u5185\u90e8\u8fde\u63a5 YurtHub\u3002\u53d6\u503c\u8303\u56f4\u4e0d\u4e3a 169.254.31.0/24 \u4ee5\u53ca 169.254.1.1/32\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--dummy-if-name  \u9ed8\u8ba4\u503c: "YurtHub-dummy0"\n'})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u865a\u62df\u63a5\u53e3\u7684\u540d\u5b57\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--enable-dummy-if  \u9ed8\u8ba4\u503c: true\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u5426\u542f\u7528 YurtHub \u7684\u865a\u62df\u63a5\u53e3\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--enable-iptables  \u9ed8\u8ba4\u503c: true\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u5426\u5f00\u542f\u672c\u5730 iptables \u7ba1\u7406\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--enable-resource-filter  \u9ed8\u8ba4\u503c: true\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u5426\u5f00\u542f YurtHub \u5bf9\u8bf7\u6c42\u54cd\u5e94\u7684\u8fc7\u6ee4\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--gc-frequency  \u9ed8\u8ba4\u503c: 120min\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u56de\u6536\u7f13\u5b58\u7684\u9891\u7387\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--heartbeat-failed-retry  \u9ed8\u8ba4\u503c: 3\n"})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u5fc3\u8df3\u4fe1\u606f\u66f4\u65b0\u5931\u8d25\u540e\u91cd\u8bd5\u7684\u6b21\u6570\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--heartbeat-healthy-threshold  \u9ed8\u8ba4\u503c: 2\n"})}),"\n",(0,s.jsx)(n.p,{children:"Kube APIServer \u91cd\u65b0\u88ab\u8bbe\u7f6e\u4e3a\u5065\u5eb7\u72b6\u6001\u524d\uff0c\u8fde\u7eed\u88ab\u68c0\u6d4b\u4e3a\u5065\u5eb7\u72b6\u6001\u7684\u6b21\u6570\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--heartbeat-timeout-seconds  \u9ed8\u8ba4\u503c: 2\n"})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u66f4\u65b0\u5fc3\u8df3\u4fe1\u606f\u65f6\uff0c\u8fde\u63a5\u8d85\u65f6\u7684\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--join-token\n"})}),"\n",(0,s.jsx)(n.p,{children:'\u542f\u52a8\u5f15\u5bfc\u4ee4\u724c\uff0c\u5f53 --cert-mgr-mode \u4e3a "hubself" \u65f6\uff0cYurtHub \u901a\u8fc7 join-token \u7533\u8bf7\u8bc1\u4e66\u3002'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--kubelet-ca-file  \u9ed8\u8ba4\u503c: "/etc/kubernetes/pki/ca.crt"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Kubelet \u4f7f\u7528\u7684 CA \u6587\u4ef6\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--kubelet-client-certificate  \u9ed8\u8ba4\u503c: "/var/lib/kubelet/pki/kubelet-client-current.pem"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Kubelet \u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u8def\u5f84\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--kubelet-health-grace-period  \u9ed8\u8ba4\u503c: 40s\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5141\u8bb8 kubelet \u6ca1\u6709\u54cd\u5e94\u7684\u65f6\u95f4\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u540e\uff0cYurtHub \u4e0d\u518d\u53d1\u9001\u5fc3\u8df3\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--lb-mode  \u9ed8\u8ba4\u503c: "rr"\n'})}),"\n",(0,s.jsx)(n.p,{children:'\u4e91\u7aef\u5730\u5740\u7684\u8d1f\u8f7d\u5747\u8861\u6a21\u5f0f\u3002\u5982\u679c\u503c\u4e3a "rr"\uff0c\u8868\u793a\u8f6e\u8f6c\u6a21\u5f0f\uff1b\u5982\u679c\u503c\u4e3a "priority"\uff0c\u8868\u793a\u4f18\u5148\u7ea7\u6a21\u5f0f\uff0c\u9ad8\u4f18\u5148\u7ea7\u5730\u5740\u6545\u969c\u540e\u624d\u4f7f\u7528\u4f4e\u4f18\u5148\u7ea7\u5730\u5740\u3002'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--max-requests-in-flight  \u9ed8\u8ba4\u503c: 250\n"})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u548c\u786e\u5b9a\u670d\u52a1\u5668\u7684\u603b\u5e76\u53d1\u9650\u5236\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--node-name\n"})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u6240\u5728\u8282\u70b9\u7684\u8282\u70b9\u540d\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--nodepool-name\n"})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub \u6240\u5728\u7684\u8282\u70b9\u6c60"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--profiling  \u9ed8\u8ba4\u503c: true\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u5426\u6253\u5f00 profile\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--proxy-port  \u9ed8\u8ba4\u503c: "10261"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8f6c\u53d1 HTTP \u8bf7\u6c42\u7684\u7aef\u53e3\uff0c\u53d1\u5f80\u6b64\u7aef\u53e3\u7684 HTTP \u8bf7\u6c42\u4f1a\u8f6c\u53d1\u81f3 kube-apiserver\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--proxy-secure-port  \u9ed8\u8ba4\u503c: "10268"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8f6c\u53d1 HTTPS \u8bf7\u6c42\u7684\u7aef\u53e3\uff0c\u53d1\u5f80\u6b64\u7aef\u53e3\u7684 HTTPS \u8bf7\u6c42\u4f1a\u8f6c\u53d1\u81f3 kube-apiserver\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--root-dir  \u9ed8\u8ba4\u503c: "/var/lib/YurtHub"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5b58\u653e YurtHub \u6587\u4ef6\u7684\u76ee\u5f55\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--serve-port  \u9ed8\u8ba4\u503c: "10267"\n'})}),"\n",(0,s.jsx)(n.p,{children:"YurtHub server\u5904\u7406 HTTP \u8bf7\u6c42\u7684\u7aef\u53e3\uff0c\u4e0e--bind-address\u642d\u914d\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--server-addr\n"})}),"\n",(0,s.jsx)(n.p,{children:'kube-apiserver \u7684\u5730\u5740\u3002\u503c\u7684\u683c\u5f0f\u4e3a "server1,server2,..."\u3002'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"--version\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u5426\u8f93\u51fa YurtHub \u7684\u7248\u672c\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:'--working-mode  \u9ed8\u8ba4\u503c: "edge"\n'})}),"\n",(0,s.jsx)(n.p,{children:'YurtHub \u7684\u5de5\u4f5c\u6a21\u5f0f\u3002\u5982\u679c\u503c\u4e3a "edge"\uff0c\u8868\u793a\u8fb9\u7f18\u8282\u70b9\uff1b\u5982\u679c\u503c\u4e3a "cloud"\uff0c\u8868\u793a\u4e91\u7aef\u8282\u70b9\u3002'})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},35045:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/yurthub-autonomy-afa7624d38879e8057110b48e7fdc6c4.png"},58844:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/yurthub-cloud-21d4dc8b7e41d307ac49aaad8cb16c14.png"},51744:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/yurthub-edge-bfa8383ca5ee7dae4a364c2e22ed9483.png"},19246:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/yurthub-pod-683562c21a64d2f2c3c43535b3d8d6ef.png"},74434:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/yurthub-service-topology-7547711bf03c626fd1b07e7fd42689cb.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var l=r(96540);const s={},i=l.createContext(s);function c(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);