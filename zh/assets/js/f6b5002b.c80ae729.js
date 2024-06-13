"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[82198],{86814:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var t=n(85893),r=n(11151);const d={title:"Yurt-Manager"},a=void 0,i={id:"core-concepts/yurt-manager",title:"Yurt-Manager",description:"1.\u529f\u80fd\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/core-concepts/yurt-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-manager",permalink:"/zh/docs/v1.3/core-concepts/yurt-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-manager.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171831465e4,frontMatter:{title:"Yurt-Manager"},sidebar:"docs",previous:{title:"YurtHub",permalink:"/zh/docs/v1.3/core-concepts/yurthub"},next:{title:"NodeResourceManager",permalink:"/zh/docs/v1.3/core-concepts/node-resource-manager"}},c={},s=[{value:"1.\u529f\u80fd\u7b80\u4ecb",id:"1\u529f\u80fd\u7b80\u4ecb",level:2},{value:"1.1 csrapprover \u63a7\u5236\u5668",id:"11-csrapprover-\u63a7\u5236\u5668",level:3},{value:"1.2 daemonpodupdater \u63a7\u5236\u5668",id:"12-daemonpodupdater-\u63a7\u5236\u5668",level:3},{value:"1.3 delegatelease \u63a7\u5236\u5668",id:"13-delegatelease-\u63a7\u5236\u5668",level:3},{value:"1.4 podbinding \u63a7\u5236\u5668",id:"14-podbinding-\u63a7\u5236\u5668",level:3},{value:"1.5 ravenl3 \u63a7\u5236\u5668",id:"15-ravenl3-\u63a7\u5236\u5668",level:3},{value:"1.6 nodepool \u63a7\u5236\u5668/webhook",id:"16-nodepool-\u63a7\u5236\u5668webhook",level:3},{value:"1.7 poolcoordinatorcert \u63a7\u5236\u5668",id:"17-poolcoordinatorcert-\u63a7\u5236\u5668",level:3},{value:"1.8 servicetopology \u63a7\u5236\u5668",id:"18-servicetopology-\u63a7\u5236\u5668",level:3},{value:"1.9 yurtstaticset controller/webhook",id:"19-yurtstaticset-controllerwebhook",level:3},{value:"1.10 yurtappset \u63a7\u5236\u5668/webhook",id:"110-yurtappset-\u63a7\u5236\u5668webhook",level:3},{value:"1.11 yurtappdaemon \u63a7\u5236\u5668/webhook",id:"111-yurtappdaemon-\u63a7\u5236\u5668webhook",level:3}];function l(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"1\u529f\u80fd\u7b80\u4ecb",children:"1.\u529f\u80fd\u7b80\u4ecb"}),"\n",(0,t.jsx)(o.p,{children:"Yurt-Manager \u7ec4\u4ef6\u7531\u591a\u4e2a\u63a7\u5236\u5668\u548c webhook \u7ec4\u6210\uff0c\u7528\u4e8e\u786e\u4fdd Kubernetes \u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u50cf\u5728\u6b63\u5e38\u6570\u636e\u4e2d\u5fc3\u4e00\u6837\u5de5\u4f5c\uff0c\u4f8b\u5982\u8f7b\u677e\u7ba1\u7406\u591a\u533a\u57df\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4e3a\u8fb9\u7f18\u5de5\u4f5c\u8d1f\u8f7d\uff08DaemonSet \u548c\u9759\u6001 Pod\uff09\u63d0\u4f9b AdvancedRollingUpdate \u548c OTA \u5347\u7ea7\u7b49\u529f\u80fd\u3002\n\u5efa\u8bae\u5c06 Yurt-Manager \u7ec4\u4ef6\u4e0e Kubernetes \u63a7\u5236\u5e73\u9762\u7ec4\u4ef6\uff08\u5982 Kube-Controller-Manager\uff09\u5171\u540c\u5b9a\u4f4d\u3002Yurt-Manager \u4f5c\u4e3a\u4e00\u4e2a Deployment \u90e8\u7f72\uff0c\u901a\u5e38\u5305\u62ec\u4e24\u4e2a\u5b9e\u4f8b\uff0c\u4e00\u4e2amaster\u548c\u4e00\u4e2aslave\u3002"}),"\n",(0,t.jsx)(o.p,{children:"\u6bcf\u4e2a\u63a7\u5236\u5668\u548c webhook \u7684\u63cf\u8ff0\u5982\u4e0b\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"11-csrapprover-\u63a7\u5236\u5668",children:"1.1 csrapprover \u63a7\u5236\u5668"}),"\n",(0,t.jsx)(o.p,{children:"\u7531\u4e8e Kubernetes \u4e2d\u5bf9 CSR\uff08\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42\uff09\u7684\u4e25\u683c\u6279\u51c6\u7b56\u7565\uff0cOpenYurt \u7ec4\u4ef6\uff08\u4f8b\u5982 YurtHub\uff09\u751f\u6210\u7684 CSR \u4e0d\u4f1a\u81ea\u52a8\u88ab Kube-Controller-Manager \u6279\u51c6\u3002\n\u56e0\u6b64\uff0cYurt-Manager \u5185\u7684\u540d\u4e3a csrapprover \u7684\u63a7\u5236\u5668\u8d1f\u8d23\u6279\u51c6 OpenYurt \u7ec4\u4ef6\u7684 CSR\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"12-daemonpodupdater-\u63a7\u5236\u5668",children:"1.2 daemonpodupdater \u63a7\u5236\u5668"}),"\n",(0,t.jsx)(o.p,{children:"\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e2d\uff0c\u5f53\u5b58\u5728 NotReady \u8282\u70b9\u65f6\uff0cDaemonSet \u7684\u4f20\u7edf RollingUpdate \u7b56\u7565\u5f88\u5bb9\u6613\u53d7\u963b\u3002\u4e3a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cdaemonpodupdater \u63a7\u5236\u5668\u63d0\u51fa\u4e86\u4e24\u79cd\u65b0\u7684\u5347\u7ea7\u6a21\u578b\uff1aAdvancedRollingUpdate \u548c OTA\uff08\u7a7a\u4e2d\uff09\u5347\u7ea7\u3002\nAdvancedRollingUpdate \u7b56\u7565\u9996\u5148\u5347\u7ea7 Ready \u8282\u70b9\u4e0a\u7684 Daemon Pod\uff0c\u5e76\u8df3\u8fc7 NotReady \u8282\u70b9\u3002\u5f53\u8282\u70b9\u4ece NotReady \u8f6c\u4e3a Ready \u65f6\uff0c\u8be5\u8282\u70b9\u4e0a\u7684Daemon Pod \u4f1a\u81ea\u52a8\u5347\u7ea7\u3002\nOTA \u7b56\u7565\u7528\u4e8e\u8fb9\u7f18\u8282\u70b9\u6240\u6709\u8005\uff08\u800c\u975e\u96c6\u7fa4\u6240\u6709\u8005\uff09\u51b3\u5b9a\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u7684\u573a\u666f\u3002\u8fd9\u79cd\u65b9\u6cd5\u5c24\u5176\u9002\u7528\u4e8e\u7535\u52a8\u6c7d\u8f66\u7b49\u60c5\u51b5\uff0c\u5176\u4e2d\u8fb9\u7f18\u8282\u70b9\u6240\u6709\u8005\u5bf9\u5347\u7ea7\u8fc7\u7a0b\u5177\u6709\u66f4\u5927\u7684\u63a7\u5236\u6743\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"13-delegatelease-\u63a7\u5236\u5668",children:"1.3 delegatelease \u63a7\u5236\u5668"}),"\n",(0,t.jsxs)(o.p,{children:["delegatelease \u63a7\u5236\u5668\u9700\u8981\u4e0e pool-coordinator \u7ec4\u4ef6\u534f\u540c\u5de5\u4f5c\u3002\u5f53\u8282\u70b9\u4e0e\u4e91\u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u901a\u8fc7 pool-coordinator \u7ec4\u4ef6\u62a5\u544a\u7684\u8282\u70b9Leader\u5c06\u5e26\u6709 ",(0,t.jsx)(o.code,{children:"openyurt.io/delegate-heartbeat=true"})," annotation\u3002\n\u5728\u68c0\u6d4b\u5230\u5177\u6709\u6b64annotation\u7684Lease\u540e\uff0cdelegatelease \u63a7\u5236\u5668\u5c06\u7ed9\u8282\u70b9\u6253\u4e0a ",(0,t.jsx)(o.code,{children:"openyurt.io/unschedulable"})," \u6c61\u70b9\uff0c\u786e\u4fdd\u65b0\u521b\u5efa\u7684 Pod \u65e0\u6cd5\u8c03\u5ea6\u5230\u6b64\u7c7b\u8282\u70b9\u4e0a\u3002"]}),"\n",(0,t.jsx)(o.h3,{id:"14-podbinding-\u63a7\u5236\u5668",children:"1.4 podbinding \u63a7\u5236\u5668"}),"\n",(0,t.jsxs)(o.p,{children:["\u67d0\u4e9b\u8fb9\u7f18\u670d\u52a1\u8981\u6c42\u5728\u8282\u70b9\u6545\u969c\u65f6 Pod \u4e0d\u88ab\u9a71\u9010\uff0c\u800c\u8981\u6c42\u7279\u5b9a Pod \u7ed1\u5b9a\u5230\u7279\u5b9a\u8282\u70b9\u3002\u4f8b\u5982\uff0c\u56fe\u50cf\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7ed1\u5b9a\u5230\u8fde\u63a5\u5230\u6444\u50cf\u5934\u7684\u8ba1\u7b97\u673a\uff0c\u800c\u667a\u80fd\u4ea4\u901a\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u56fa\u5b9a\u5230\u4f4d\u4e8e\u7279\u5b9a\u8def\u53e3\u7684\u8ba1\u7b97\u673a\u3002\n\u7528\u6237\u53ef\u4ee5\u5411\u8282\u70b9\u6dfb\u52a0 ",(0,t.jsx)(o.code,{children:"apps.openyurt.io/binding=true"})," annotation \u6765\u542f\u7528 Pod\u4e0e\u8282\u70b9\u7ed1\u5b9a\u7684\u529f\u80fd\uff0c\u786e\u4fdd\u8be5\u8282\u70b9\u4e0a\u7684\u6240\u6709 Pod \u90fd\u4e0e\u5176\u7ed1\u5b9a\u5e76\u4e14\u4e0d\u53d7\u4e91\u8fb9\u7f51\u7edc\u7684\u5f71\u54cd\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["podbinding \u63a7\u5236\u5668\u5728\u8282\u70b9\u7684 ",(0,t.jsx)(o.code,{children:"apps.openyurt.io/binding"})," annotation \u88ab\u4fee\u6539\u65f6\u8d1f\u8d23\u7ba1\u7406 Pod \u5bb9\u5fcd\u5ea6\u3002\u5982\u679c\u8282\u70b9\u7684 ",(0,t.jsx)(o.code,{children:"apps.openyurt.io/binding"})," annotation \u4e3a true\uff0c\nPod \u4e2d ",(0,t.jsx)(o.code,{children:"node.kubernetes.io/not-ready"})," \u548c ",(0,t.jsx)(o.code,{children:"node.kubernetes.io/unreachable"})," \u5bb9\u5fcd\u5ea6\u7684 TolerationSeconds \u5c06\u8bbe\u7f6e\u4e3a 0\uff0c\u8fd9\u6837\u5373\u4f7f\u4e91\u8fb9\u7f51\u7edc\u79bb\u7ebf\uff0c\u4e5f\u4e0d\u4f1a\u9a71\u9010\u8282\u70b9\u4e0a\u7684 Pod\u3002\n\u76f8\u53cd\uff0c\u5982\u679c\u8282\u70b9annotation\u6ca1\u6709\u8bbe\u7f6e\u4e3a true\uff0c\u5219 Pod \u4e2d ",(0,t.jsx)(o.code,{children:"node.kubernetes.io/not-ready"})," \u548c ",(0,t.jsx)(o.code,{children:"node.kubernetes.io/unreachable"})," \u5bb9\u5fcd\u5ea6\u7684 TolerationSeconds \u5c06\u8bbe\u7f6e\u4e3a 300 \u79d2\u3002"]}),"\n",(0,t.jsx)(o.h3,{id:"15-ravenl3-\u63a7\u5236\u5668",children:"1.5 ravenl3 \u63a7\u5236\u5668"}),"\n",(0,t.jsx)(o.p,{children:"ravenl3 \u63a7\u5236\u5668\u7528\u4e8e Kubernetes \u539f\u751f L3 \u8def\u7531\u89e3\u51b3\u65b9\u6848\uff0c\u63d0\u4f9b\u8de8\u533a\u57df\u7684\u8d1f\u8f7d\u5747\u8861\u548c\u6d41\u91cf\u7ba1\u7406\u3002\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e2d\uff0c\u8fb9\u7f18\u670d\u52a1\u548c\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u8de8\u591a\u4e2a\u533a\u57df\u548c\u6570\u636e\u4e2d\u5fc3\u8fdb\u884c\u901a\u4fe1\u3002\nravenl3 \u63a7\u5236\u5668\u8d1f\u8d23\u76d1\u63a7\u8282\u70b9\u548c\u670d\u52a1\uff0c\u81ea\u52a8\u521b\u5efa\u548c\u66f4\u65b0 L3 \u8def\u7531\u8868\uff0c\u786e\u4fdd\u8fb9\u7f18\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u901a\u4fe1\u9ad8\u6548\u53ef\u9760\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"16-nodepool-\u63a7\u5236\u5668webhook",children:"1.6 nodepool \u63a7\u5236\u5668/webhook"}),"\n",(0,t.jsx)(o.p,{children:"NodePool \u6839\u636e\u7279\u5b9a\u8282\u70b9\u5c5e\u6027\uff08\u4f8b\u5982\u5730\u533a\u3001CPU \u67b6\u6784\u3001\u4e91\u63d0\u4f9b\u5546\u7b49\uff09\u5c06\u8282\u70b9\u6c60\u7684\u6982\u5ff5\u8fdb\u884c\u62bd\u8c61\uff0c\u4ece\u800c\u5b9e\u73b0\u5728\u6c60\u7ea7\u522b\u7edf\u4e00\u7ba1\u7406\u8282\u70b9\u3002"}),"\n",(0,t.jsx)(o.p,{children:"\u6211\u4eec\u4e60\u60ef\u4e8e\u4f7f\u7528\u5404\u79cd Kubernetes \u6807\u7b7e\u5bf9\u8282\u70b9\u8fdb\u884c\u5206\u7ec4\u548c\u7ba1\u7406\u3002\u7136\u800c\uff0c\u968f\u7740\u8282\u70b9\u548c\u6807\u7b7e\u6570\u91cf\u7684\u589e\u52a0\uff0c\u8282\u70b9\u7684\u64cd\u4f5c\u548c\u7ef4\u62a4\uff08\u4f8b\u5982\u8c03\u5ea6\u7b56\u7565\u3001\u6c61\u70b9\u7b49\u7684\u6279\u91cf\u914d\u7f6e\uff09\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"img",src:n(8395).Z+"",width:"987",height:"449"})}),"\n",(0,t.jsx)(o.p,{children:"nodepool \u63a7\u5236\u5668/webhook \u53ef\u4ee5\u4ece\u8282\u70b9\u6c60\u7684\u89d2\u5ea6\u7ba1\u7406\u4e0d\u540c\u8fb9\u7f18\u5730\u533a\u7684\u8282\u70b9\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"img",src:n(2655).Z+"",width:"1410",height:"447"})}),"\n",(0,t.jsx)(o.h3,{id:"17-poolcoordinatorcert-\u63a7\u5236\u5668",children:"1.7 poolcoordinatorcert \u63a7\u5236\u5668"}),"\n",(0,t.jsx)(o.p,{children:"poolcoordinatorcert \u63a7\u5236\u5668\u8d1f\u8d23\u4e3a pool-coordinator \u7ec4\u4ef6\u51c6\u5907\u8bc1\u4e66\u548c kubeconfig \u6587\u4ef6\u3002\u6240\u6709\u8bc1\u4e66\u548c kubeconfig \u6587\u4ef6\u90fd\u4ee5 Secret \u8d44\u6e90\u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u7cfb\u7edf\u4e2d\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"18-servicetopology-\u63a7\u5236\u5668",children:"1.8 servicetopology \u63a7\u5236\u5668"}),"\n",(0,t.jsxs)(o.p,{children:["servicetopology \u63a7\u5236\u5668\u7528\u4e8e\u534f\u52a9 YurtHub \u4e2d\u7684 ",(0,t.jsx)(o.a,{href:"/zh/docs/v1.3/user-manuals/resource-access-control/",children:"servicetopology filter"})," \u4e3a\u96c6\u7fa4\u63d0\u4f9b\u670d\u52a1\u62d3\u6251\u8def\u7531\u529f\u80fd\u3002\n\u5f53Service\u7684\u62d3\u6251Annotation\u88ab\u4fee\u6539\u65f6\uff0cservicetopology \u63a7\u5236\u5668\u4f1a\u66f4\u65b0\u76f8\u5e94\u7684Endpoints\u548c EndpointSlices\uff0c\u4ece\u800c\u89e6\u53d1\u8282\u70b9\u7aefYurtHub\u4e2d\u7684\u670d\u52a1\u62d3\u6251\u66f4\u65b0\u3002"]}),"\n",(0,t.jsx)(o.h3,{id:"19-yurtstaticset-controllerwebhook",children:"1.9 yurtstaticset controller/webhook"}),"\n",(0,t.jsx)(o.p,{children:"\u7531\u4e8e\u8fb9\u7f18\u8bbe\u5907\u6570\u91cf\u5e9e\u5927\u4e14\u5206\u5e03\u5f0f\uff0c\u624b\u52a8\u90e8\u7f72\u548c\u5347\u7ea7\u4e91\u8fb9\u534f\u4f5c\u573a\u666f\u4e2d\u7684\u9759\u6001 Pod \u53ef\u80fd\u5bfc\u81f4\u64cd\u4f5c\u6311\u6218\u548c\u9519\u8bef\u98ce\u9669\u589e\u52a0\u3002\u4e3a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cOpenYurt \u5f15\u5165\u4e86\u540d\u4e3a YurtStaticSet \u7684\u65b0\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08CRD\uff09\uff0c\u4ee5\u6539\u8fdb\u9759\u6001 Pod \u7684\u7ba1\u7406\u3002\nyurtstaticset \u63a7\u5236\u5668/webhook\u4e3a\u9759\u6001 Pod \u63d0\u4f9b\u4e86 AdvancedRollingUpdate \u548c Over-The-Air\uff08OTA\uff09\u5347\u7ea7\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(o.h3,{id:"110-yurtappset-\u63a7\u5236\u5668webhook",children:"1.10 yurtappset \u63a7\u5236\u5668/webhook"}),"\n",(0,t.jsx)(o.p,{children:"\u5728\u539f\u751f Kubernetes \u4e2d\uff0c\u7ba1\u7406\u591a\u4e2a\u8282\u70b9\u6c60\u4e2d\u76f8\u540c\u7c7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6c60\u521b\u5efa\u4e00\u4e2a Deployment\uff0c\u8fd9\u5c06\u5bfc\u81f4\u8f83\u9ad8\u7684\u7ba1\u7406\u6210\u672c\u548c\u6f5c\u5728\u7684\u9519\u8bef\u98ce\u9669\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cYurtAppSet CRD \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u6a21\u677f\uff08\u652f\u6301 Deployment \u548c StatefulSet\uff09\uff0c\u5e76\u8d1f\u8d23\u7ba1\u7406\u591a\u4e2a\u8282\u70b9\u6c60\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"}),"\n",(0,t.jsx)(o.p,{children:"YurtAppSet \u9700\u8981\u7528\u6237\u901a\u8fc7\u914d\u7f6e\u5176 Spec.Topology \u5b57\u6bb5\u6765\u660e\u786e\u6307\u5b9a\u9700\u8981\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u90e8\u7f72\u5230\u54ea\u4e9b\u8282\u70b9\u6c60\u3002\u8fd9\u79cd\u65b9\u6cd5\u7b80\u5316\u4e86\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u548c\u7ba1\u7406\u8fc7\u7a0b\uff0c\u4f7f\u5f97\u5728\u591a\u8282\u70b9\u6c60\u73af\u5883\u4e2d\u8fdb\u884c\u5e94\u7528\u6269\u5c55\u3001\u5347\u7ea7\u548c\u7ef4\u62a4\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002\u901a\u8fc7\u4f7f\u7528 YurtAppSet\uff0c\u7528\u6237\u53ef\u4ee5\u96c6\u4e2d\u7ba1\u7406\u591a\u4e2a\u8282\u70b9\u6c60\u7684\u5e94\u7528\u90e8\u7f72\uff0c\u4ece\u800c\u964d\u4f4e\u7ba1\u7406\u590d\u6742\u6027\u548c\u6f5c\u5728\u7684\u9519\u8bef\u98ce\u9669\u3002"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"img",src:n(39250).Z+"",width:"1820",height:"1092"})}),"\n",(0,t.jsx)(o.h3,{id:"111-yurtappdaemon-\u63a7\u5236\u5668webhook",children:"1.11 yurtappdaemon \u63a7\u5236\u5668/webhook"}),"\n",(0,t.jsx)(o.p,{children:"\u5728\u539f\u751f Kubernetes \u4e2d\uff0cDaemonSet \u7528\u4e8e\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u4e00\u4e2a\u5b88\u62a4 Pod\u3002\u5f53\u8282\u70b9\u88ab\u6dfb\u52a0\u6216\u5220\u9664\u65f6\uff0c\u76f8\u5e94\u8282\u70b9\u4e0a\u7684\u5b88\u62a4 Pod \u4f1a\u88ab\u81ea\u52a8\u521b\u5efa\u6216\u79fb\u9664\u3002\u7136\u800c\uff0c\u5f53\u5de5\u4f5c\u8d1f\u8f7d\u9700\u8981\u6839\u636e\u8282\u70b9\u6c60\u7684\u521b\u5efa\u548c\u79fb\u9664\u81ea\u52a8\u8c03\u6574\u65f6\uff0cDaemonSet \u65e0\u6cd5\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\u3002"}),"\n",(0,t.jsx)(o.p,{children:"YurtAppDaemon \u65e8\u5728\u786e\u4fdd\u5728\u6240\u6709\u8282\u70b9\u6c60\u6216\u901a\u8fc7 Spec.NodePoolSelector \u9009\u5b9a\u7684\u8282\u70b9\u6c60\u4e2d\u81ea\u52a8\u90e8\u7f72\u6a21\u677f(Spec.WorkloadTemplate)\u4e2d\u6307\u5b9a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5f53\u96c6\u7fa4\u4e2d\u65b0\u589e\u6216\u79fb\u9664\u8282\u70b9\u6c60\u65f6\uff0cYurtAppDaemon \u63a7\u5236\u5668\u548c Webhook \u4f1a\u4e3a\u76f8\u5e94\u7684\u8282\u70b9\u6c60\u521b\u5efa\u6216\u79fb\u9664\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4ece\u800c\u786e\u4fdd\u7b26\u5408\u8981\u6c42\u7684\u8282\u70b9\u6c60\u4e2d\u59cb\u7ec8\u5b58\u5728\u9884\u671f\u7684 Pods\u3002"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"img",src:n(7052).Z+"",width:"1982",height:"1070"})})]})}function p(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7052:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/yurtappdaemon-7819ad1f8a8dcdfc87b56a716ea67084.png"},39250:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/yurtappset-dc5ea218aec38a2e74048fa61dcd4c59.png"},8395:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/nodepool1-e4c32ca3a66b7979e1583ca65dd7f7f2.png"},2655:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/nodepool2-cd32adbfbaa60331bc53189c30e8facc.png"},11151:(e,o,n)=>{n.d(o,{a:()=>a});var t=n(67294);const r={},d=t.createContext(r);function a(e){const o=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}}}]);