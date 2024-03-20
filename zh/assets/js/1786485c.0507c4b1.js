"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[27060],{36816:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var r=n(85893),t=n(11151);const d={title:"Yurt-Manager"},a=void 0,i={id:"core-concepts/yurt-manager",title:"Yurt-Manager",description:"1. \u529f\u80fd\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/core-concepts/yurt-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-manager",permalink:"/zh/docs/core-concepts/yurt-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-manager.md",tags:[],version:"v1.4",lastUpdatedBy:"rambohe",lastUpdatedAt:1710903068,formattedLastUpdatedAt:"2024\u5e743\u670820\u65e5",frontMatter:{title:"Yurt-Manager"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/core-concepts/architecture"},next:{title:"YurtHub",permalink:"/zh/docs/core-concepts/yurthub"}},l={},c=[{value:"1. \u529f\u80fd\u7b80\u4ecb",id:"1-\u529f\u80fd\u7b80\u4ecb",level:2},{value:"2. \u63a7\u5236\u5668\u548cWebhook\u4ecb\u7ecd",id:"2-\u63a7\u5236\u5668\u548cwebhook\u4ecb\u7ecd",level:2},{value:"2.1 \u8fb9\u7f18\u81ea\u6cbb\u76f8\u5173\u63a7\u5236\u5668",id:"21-\u8fb9\u7f18\u81ea\u6cbb\u76f8\u5173\u63a7\u5236\u5668",level:3},{value:"2.1.1 nodelifecycle \u63a7\u5236\u5668",id:"211-nodelifecycle-\u63a7\u5236\u5668",level:4},{value:"2.1.2 podbinding \u63a7\u5236\u5668",id:"212-podbinding-\u63a7\u5236\u5668",level:4},{value:"2.1.3 delegatelease \u63a7\u5236\u5668",id:"213-delegatelease-\u63a7\u5236\u5668",level:4},{value:"2.1.4 yurtcoordinatorcert \u63a7\u5236\u5668",id:"214-yurtcoordinatorcert-\u63a7\u5236\u5668",level:4},{value:"2.2 Raven\u76f8\u5173\u63a7\u5236\u5668",id:"22-raven\u76f8\u5173\u63a7\u5236\u5668",level:3},{value:"2.2.1 gatewaypickup \u63a7\u5236\u5668",id:"221-gatewaypickup-\u63a7\u5236\u5668",level:4},{value:"2.2.2 gatewaydns \u63a7\u5236\u5668",id:"222-gatewaydns-\u63a7\u5236\u5668",level:4},{value:"2.2.3 gatewayinternalservice \u63a7\u5236\u5668",id:"223-gatewayinternalservice-\u63a7\u5236\u5668",level:4},{value:"2.2.4 gatewaypublicservice \u63a7\u5236\u5668",id:"224-gatewaypublicservice-\u63a7\u5236\u5668",level:4},{value:"2.3 \u5de5\u4f5c\u8d1f\u8f7d\u76f8\u5173\u63a7\u5236\u5668",id:"23-\u5de5\u4f5c\u8d1f\u8f7d\u76f8\u5173\u63a7\u5236\u5668",level:3},{value:"2.3.1 daemonpodupdater \u63a7\u5236\u5668",id:"231-daemonpodupdater-\u63a7\u5236\u5668",level:4},{value:"2.3.2 yurtappset \u63a7\u5236\u5668/webhook",id:"232-yurtappset-\u63a7\u5236\u5668webhook",level:4},{value:"2.3.3 yurtappdaemon \u63a7\u5236\u5668/webhook",id:"233-yurtappdaemon-\u63a7\u5236\u5668webhook",level:4},{value:"2.3.4 yurtappoverrider \u63a7\u5236\u5668/webhook",id:"234-yurtappoverrider-\u63a7\u5236\u5668webhook",level:4},{value:"2.3.5 yurtstaticset controller/webhook",id:"235-yurtstaticset-controllerwebhook",level:4},{value:"2.4 \u5176\u4ed6",id:"24-\u5176\u4ed6",level:3},{value:"2.4.1 nodepool \u63a7\u5236\u5668/webhook",id:"241-nodepool-\u63a7\u5236\u5668webhook",level:4},{value:"2.4.2 csrapprover \u63a7\u5236\u5668",id:"242-csrapprover-\u63a7\u5236\u5668",level:4},{value:"2.4.3 platformadmin \u63a7\u5236\u5668/webhook",id:"243-platformadmin-\u63a7\u5236\u5668webhook",level:4},{value:"2.4.4 servicetopologyendpoints/servicetopologyendpointslices \u63a7\u5236\u5668",id:"244-servicetopologyendpointsservicetopologyendpointslices-\u63a7\u5236\u5668",level:4}];function s(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"1-\u529f\u80fd\u7b80\u4ecb",children:"1. \u529f\u80fd\u7b80\u4ecb"}),"\n",(0,r.jsx)(o.p,{children:"Yurt-Manager \u7ec4\u4ef6\u7531\u591a\u4e2a\u63a7\u5236\u5668\u548c webhook \u7ec4\u6210\uff0c\u7528\u4e8e\u786e\u4fdd Kubernetes \u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u50cf\u5728\u6b63\u5e38\u6570\u636e\u4e2d\u5fc3\u4e00\u6837\u5de5\u4f5c\uff0c\u4f8b\u5982\u8f7b\u677e\u7ba1\u7406\u591a\u533a\u57df\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4e3a\u8fb9\u7f18\u5de5\u4f5c\u8d1f\u8f7d\uff08DaemonSet \u548c\u9759\u6001 Pod\uff09\u63d0\u4f9b AdvancedRollingUpdate \u548c OTA \u5347\u7ea7\u7b49\u529f\u80fd\u3002\n\u5efa\u8bae\u5c06 Yurt-Manager \u7ec4\u4ef6\u4e0e Kubernetes \u63a7\u5236\u5e73\u9762\u7ec4\u4ef6\uff08\u5982 Kube-Controller-Manager\uff09\u90e8\u7f72\u5728\u540c\u4e00\u53f0\u673a\u5668\u4e0a\u3002Yurt-Manager \u4f5c\u4e3a\u4e00\u4e2a Deployment \u90e8\u7f72\uff0c\u901a\u5e38\u5305\u62ec\u4e24\u4e2a\u5b9e\u4f8b\uff0c\u4e00\u4e2amaster\u548c\u4e00\u4e2aslave\u3002\u7ec4\u4ef6\u7684\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"yurt-manager",src:n(31159).Z+"",width:"3756",height:"1600"})}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\u4f7f\u7528\u53c2\u6570 ",(0,r.jsx)(o.code,{children:"--controllers"})," \u53ef\u4ee5\u7cbe\u786e\u63a7\u5236\u54ea\u4e9b\u63a7\u5236\u5668\u88ab\u6fc0\u6d3b\u6216\u8005\u505c\u7528\u3002\u7b26\u53f7 ",(0,r.jsx)(o.code,{children:"*"})," \u7528\u6765\u542f\u7528\u6240\u6709\u9ed8\u8ba4\u6fc0\u6d3b\u7684\u63a7\u5236\u5668\uff1b",(0,r.jsx)(o.code,{children:"foo"})," \u4e13\u95e8\u7528\u6765\u542f\u52a8\u540d\u4e3a ",(0,r.jsx)(o.code,{children:"foo"})," \u7684\u63a7\u5236\u5668\uff1b\u76f8\u5bf9\u5730\uff0c",(0,r.jsx)(o.code,{children:"-foo"})," \u5219\u7528\u6765\u505c\u7528\u540d\u4e3a ",(0,r.jsx)(o.code,{children:"foo"})," \u7684\u63a7\u5236\u5668\u3002\u8bf7\u6ce8\u610f\uff0c\u5404\u4e2a\u63a7\u5236\u5668\u540d\u79f0\u9700\u8981\u7528\u9017\u53f7\u6765\u5206\u9694\u3002"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Controller Webhooks"})," \u5c06\u968f\u5176\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u4e00\u540c\u88ab\u542f\u7528\u6216\u5173\u95ed\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u72ec\u7acbWebhooks\uff08",(0,r.jsx)(o.code,{children:"Independent Webhooks"}),"\uff09\u9ed8\u8ba4\u5904\u4e8e\u542f\u7528\u72b6\u6001\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u542f\u52a8\u53c2\u6570 ",(0,r.jsx)(o.code,{children:"--disable-independent-webhooks"})," \u6765\u8fdb\u884c\u5173\u95ed\u3002\u72ec\u7acbWebhook Node\u4e3b\u8981\u6839\u636e\u5176\u6240\u5c5e\u8282\u70b9\u6c60\u7684\u5c5e\u6027\u4e3a\u8282\u70b9\u6253\u4e0a\u9002\u5f53\u7684\u6807\u7b7e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"2-\u63a7\u5236\u5668\u548cwebhook\u4ecb\u7ecd",children:"2. \u63a7\u5236\u5668\u548cWebhook\u4ecb\u7ecd"}),"\n",(0,r.jsx)(o.h3,{id:"21-\u8fb9\u7f18\u81ea\u6cbb\u76f8\u5173\u63a7\u5236\u5668",children:"2.1 \u8fb9\u7f18\u81ea\u6cbb\u76f8\u5173\u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.h4,{id:"211-nodelifecycle-\u63a7\u5236\u5668",children:"2.1.1 nodelifecycle \u63a7\u5236\u5668"}),"\n",(0,r.jsxs)(o.p,{children:["\u5728\u542f\u7528 ",(0,r.jsx)(o.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\u4e4b\u524d\uff0c\u5fc5\u987b\u9996\u5148\u7981\u7528\u539f\u6709 ",(0,r.jsx)(o.code,{children:"Kube-Controller-Manager"})," \u7ec4\u4ef6\u4e2d\u7684\u540c\u540d\u63a7\u5236\u5668\u3002\u65b0\u589e\u7684 ",(0,r.jsx)(o.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\u76f8\u8f83\u4e8e\u539f\u751f\u7248\u672c\u63d0\u4f9b\u4e86\u6539\u8fdb\u7684\u529f\u80fd\uff1a\u5bf9\u4e8e\u5e26\u6709 ",(0,r.jsx)(o.code,{children:"apps.openyurt.io/binding=true annotation"})," \u7684\u8282\u70b9\uff0c\u5373\u4f7f\u8282\u70b9\u72b6\u6001\u53d8\u4e3a ",(0,r.jsx)(o.code,{children:"NotReady"}),"\uff0c\u63a7\u5236\u5668\u4e5f\u4e0d\u4f1a\u5c06 ",(0,r.jsx)(o.code,{children:"Pod.Status"})," \u4e2d\u7684 ",(0,r.jsx)(o.code,{children:"Ready"})," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(o.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsx)(o.h4,{id:"212-podbinding-\u63a7\u5236\u5668",children:"2.1.2 podbinding \u63a7\u5236\u5668"}),"\n",(0,r.jsxs)(o.p,{children:["\u5bf9\u4e8e\u4e00\u4e9b\u8fb9\u7f18\u8ba1\u7b97\u670d\u52a1\uff0c\u5b83\u4eec\u8981\u6c42\u5728\u8282\u70b9\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u5176\u8fd0\u884c\u7684 Pod \u4e0d\u5e94\u88ab\u9a71\u9010\uff0c\u4ece\u800c\u5b9e\u73b0 Pod \u4e0e\u8282\u70b9\u7684\u6301\u4e45\u7ed1\u5b9a\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u8fde\u63a5\u5230\u7279\u5b9a\u6444\u50cf\u5934\u7684\u56fe\u50cf\u5904\u7406\u5e94\u7528\uff0c\u6216\u8005\u9700\u8981\u90e8\u7f72\u5728\u7279\u5b9a\u8def\u53e3\u7684\u667a\u80fd\u4ea4\u901a\u7cfb\u7edf\u3002\n\u901a\u8fc7\u4e3a\u8282\u70b9\u6dfb\u52a0 ",(0,r.jsx)(o.code,{children:"apps.openyurt.io/binding=true annotation"}),"\uff0c\u53ef\u4ee5\u542f\u7528 Pod \u4e0e\u8282\u70b9\u7684\u7ed1\u5b9a\u529f\u80fd\uff0c\u4fdd\u8bc1\u8282\u70b9\u4e0a\u7684\u6240\u6709 Pod \u5747\u4e0e\u4e4b\u7ed1\u5b9a\uff0c\u5e76\u4e14\u4e0d\u53d7\u5230\u4e91\u7aef\u548c\u8fb9\u7f18\u7f51\u7edc\u72b6\u6001\u53d8\u5316\u7684\u5f71\u54cd\u3002\npodbinding \u63a7\u5236\u5668\u8d1f\u8d23\u5728 ",(0,r.jsx)(o.code,{children:"apps.openyurt.io/binding annotation"})," \u88ab\u66f4\u6539\u65f6\uff0c\u7ba1\u7406 Pod \u7684\u5bb9\u5fcd\u7b56\u7565\u3002\u5f53\u8282\u70b9\u6807\u8bb0\u4e3a ",(0,r.jsx)(o.code,{children:"apps.openyurt.io/binding=true"})," \u65f6\uff0cPod \u7684 ",(0,r.jsx)(o.code,{children:"node.kubernetes.io/not-ready"})," \u548c ",(0,r.jsx)(o.code,{children:"node.kubernetes.io/unreachable"})," \u5bb9\u5fcd\u65f6\u95f4\uff08TolerationSeconds\uff09\u5c06\u88ab\u8bbe\u7f6e\u4e3a 0\uff0c\u8fd9\u6837\u5373\u4fbf\u5728\u4e91\u7aef\u4e0e\u8fb9\u7f18\u7f51\u7edc\u65ad\u5f00\u7684\u60c5\u51b5\u4e0b\uff0cPod \u4e5f\u4e0d\u4f1a\u4ece\u8282\u70b9\u4e0a\u88ab\u9a71\u9010\u3002\n\u53cd\u4e4b\uff0c\u5982\u679c\u8282\u70b9\u672a\u88ab\u8bbe\u7f6e\u4e3a true\uff0c\u8fd9\u4e9b\u5bb9\u5fcd\u65f6\u95f4\u5c06\u9ed8\u8ba4\u4e3a 300 \u79d2\u3002"]}),"\n",(0,r.jsx)(o.h4,{id:"213-delegatelease-\u63a7\u5236\u5668",children:"2.1.3 delegatelease \u63a7\u5236\u5668"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"delegatelease"})," \u63a7\u5236\u5668\u8bbe\u8ba1\u4e3a\u4e0e ",(0,r.jsx)(o.code,{children:"yurt-coordinator"})," \u7ec4\u4ef6\u914d\u5408\u5de5\u4f5c\u3002\u5728\u8282\u70b9\u4e0e\u4e91\u7aef\u7684\u8fde\u63a5\u4e2d\u65ad\u65f6\uff0c\u901a\u8fc7 ",(0,r.jsx)(o.code,{children:"yurt-coordinator"})," \u7ec4\u4ef6\u4f1a\u4e0a\u62a5\u5e26\u6709 ",(0,r.jsx)(o.code,{children:"openyurt.io/delegate-heartbeat=true annotation"})," \u7684\u8282\u70b9 ",(0,r.jsx)(o.code,{children:"Lease"}),"\u3002",(0,r.jsx)(o.code,{children:"delegatelease"})," \u63a7\u5236\u5668\u5728\u68c0\u6d4b\u5230\u542b\u6709\u6b64\u6ce8\u91ca\u7684 Lease \u65f6\uff0c\u4f1a\u7ed9\u8282\u70b9\u6dfb\u52a0 ",(0,r.jsx)(o.code,{children:"openyurt.io/unschedulable"})," \u7684\u6c61\u70b9\u6807\u8bb0\uff0c\u4ee5\u786e\u4fdd\u65b0\u521b\u5efa\u7684 Pod \u4e0d\u4f1a\u88ab\u8c03\u5ea6\u5230\u8fd9\u4e9b\u8282\u70b9\u4e0a\u3002"]}),"\n",(0,r.jsx)(o.h4,{id:"214-yurtcoordinatorcert-\u63a7\u5236\u5668",children:"2.1.4 yurtcoordinatorcert \u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.p,{children:"yurtcoordinatorcert \u63a7\u5236\u5668\u7684\u804c\u8d23\u662f\u4e3a yurt-coordinator \u7ec4\u4ef6\u751f\u6210\u76f8\u5173\u7684\u8bc1\u4e66\u548c kubeconfig \u6587\u4ef6\u3002\u8be5\u63a7\u5236\u5668\u786e\u4fdd\u6240\u6709\u7684\u8bc1\u4e66\u548c kubeconfig \u6587\u4ef6\u90fd\u4ee5 Secret \u8d44\u6e90\u7684\u5f62\u5f0f\u5b89\u5168\u5730\u5b58\u50a8\u5728\u7cfb\u7edf\u4e2d\u3002"}),"\n",(0,r.jsx)(o.h3,{id:"22-raven\u76f8\u5173\u63a7\u5236\u5668",children:"2.2 Raven\u76f8\u5173\u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.h4,{id:"221-gatewaypickup-\u63a7\u5236\u5668",children:"2.2.1 gatewaypickup \u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.p,{children:"Raven\u7ec4\u4ef6\u5b9a\u4e49\u4e86\u65b0\u7684CRD Gateway\u4f5c\u4e3a\u5b9e\u73b0\u8de8\u7f51\u7edc\u57df\u7f51\u7edc\u901a\u4fe1\u4fe1\u606f\u8f7d\u4f53\uff0c\u901a\u8fc7\u5bf9\u8282\u70b9\u6253Label\u5212\u5206\u7f51\u7edc\u57df\uff0c\u4e3a\u6bcf\u4e2a\u7f51\u7edc\u57df\u521b\u5efa\u4e00\u4e2aGateway\u96c6\u7fa4\u8d44\u6e90\uff0c\u5bf9Gateway\u7684Spec\u8fdb\u884c\u914d\u7f6e\uff0c\u4e3a\u6bcf\u4e2a\u7f51\u7edc\u57df\u9009\u62e9\u4e00\u4e9b\u8282\u70b9\u4f5c\u4e3a\u5907\u7528\u7684\u7f51\u5173\uff0c\u62e9gatewaypickup\u63a7\u5236\u5668\u8d1f\u8d23\u534f\u8c03Gateway\uff0c\u4e3a\u6bcf\u4e2a\u7f51\u7edc\u57df\u4ece\u5907\u9009\u7684\u7f51\u5173\u8282\u70b9\u4e2d\u9009\u4e3e\u7f51\u5173\uff0c\u5e76\u4e14\u8bb0\u5f55\u672c\u7f51\u7edc\u57df\u7684\u8282\u70b9\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(o.h4,{id:"222-gatewaydns-\u63a7\u5236\u5668",children:"2.2.2 gatewaydns \u63a7\u5236\u5668"}),"\n",(0,r.jsxs)(o.p,{children:["Raven L7\u9700\u8981\u5c06\u6240\u6709NodeName+Port\u7684Http\u8bf7\u6c42\u8f6c\u53d1\u5230\u672c\u7f51\u7edc\u57df\u7684\u7f51\u5173\u8282\u70b9\uff0c\u7531\u7f51\u5173\u8282\u70b9\u8d1f\u8d23\u8de8\u57df\u6216\u672c\u57df\u8f6c\u53d1\uff0c\u5bf9NodeName\u7684\u89e3\u6790\u9700\u8981\u90e8\u7f72Raven\u4e13\u7528\u7684DNS\uff0c",(0,r.jsx)(o.a,{href:"/zh/docs/installation/raven-l7-proxy-prepare",children:"\u5b89\u88c5\u65b9\u6cd5\u4e0e\u7b80\u4ecb"}),"\uff0c\u5176\u4e2d\uff0cRaven\u4e13\u7528\u7684DNS\u91c7\u7528host\u63d2\u4ef6\u7684\u65b9\u5f0f\u5c06\u4e00\u4e2aConfigmap\u6302\u8f7d\u8fdbDNS\u5185\uff0c\u8fd9\u4e2aConfigmap\u8bb0\u5f55\u5c06\u6240\u6709NodeName\u90fd\u89e3\u6790\u5230",(0,r.jsx)(o.code,{children:"kube-system/x-raven-proxy-internal-svc"}),"\u7684ClusterIP,\u8fd9\u4e2aService\u540e\u7aef\u6302\u8f7d\u7740\u7f51\u5173\u8282\u70b9\uff0c\u5373\u53ef\u5b9e\u73b0\u6240\u6709\u4e03\u5c42\u8bf7\u6c42\u90fd\u8f6c\u53d1\u5230\u7f51\u5173\u8282\u70b9\u8fdb\u884c\u4ee3\u7406\u3002\u800cGatewayDNS\u63a7\u5236\u5668\u5c31\u662f\u52a8\u6001\u7ef4\u62a4\u8fd9\u4e2aconfigmap\u7684\u6761\u76ee\u3002"]}),"\n",(0,r.jsx)(o.h4,{id:"223-gatewayinternalservice-\u63a7\u5236\u5668",children:"2.2.3 gatewayinternalservice \u63a7\u5236\u5668"}),"\n",(0,r.jsxs)(o.p,{children:["Raven L7\u9700\u8981\u5c06\u5c06\u6240\u6709NodeName+Port\u7684Http\u8bf7\u6c42\u8f6c\u53d1\u5230\u672c\u7f51\u7edc\u57df\u7684\u7f51\u5173\u8282\u70b9\uff0c\u7531\u7f51\u5173\u8282\u70b9\u8d1f\u8d23\u8de8\u57df\u6216\u672c\u57df\u8f6c\u53d1\uff0cGatewayDNS\u63a7\u5236\u7ef4\u62a4Configmap\u89e3\u51b3\u4e86NodeName\u7684\u5730\u5740\u89e3\u6790\uff0c\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230",(0,r.jsx)(o.code,{children:"kube-system/x-raven-proxy-internal-svc"}),"\u7684ClusterIP\uff0cgatewaypublicservice\u63a7\u5236\u5668\u5373\u8d1f\u8d23\u7ef4\u62a4\u8fd9\u4e2aservice\u7684\u751f\u547d\u5468\u671f\uff0c\u4f46Http\u8bf7\u6c42\u7684\u7aef\u53e3\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u8bbe\u8ba1\u800c\u53d8\u5316\uff0c\u56e0\u6b64\u901a\u8fc7\u914d\u7f6eGateway Spec.ProxyConfig\uff0c\u914d\u7f6e\u4ee3\u7406\u7684Http/Https\u7aef\u53e3\uff0cgatewaypublicservice\u63a7\u5236\u5668\u6839\u636e\u914d\u7f6e\u4e3ax-raven-proxy-internal-svc\u914d\u7f6e\u7aef\u53e3\u8f6c\u53d1\uff0c\u6240\u6709\u7684https/http\u8bf7\u6c42\u8f6c\u53d1\u5230raven agent\u768410263/10264\u7aef\u53e3"]}),"\n",(0,r.jsx)(o.h4,{id:"224-gatewaypublicservice-\u63a7\u5236\u5668",children:"2.2.4 gatewaypublicservice \u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.p,{children:"Raven\u7684Gateway\u53ef\u91c7\u7528LoadBalancer\u548cPublicIP\u4e24\u79cd\u66b4\u9732\u65b9\u5f0f\u63d0\u4f9b\u7ed9\u8fb9\u7f18\u4fa7\u7f51\u5173\u8282\u70b9\u6784\u5efa\u8de8\u57df\u96a7\u9053\uff0c\u5982\u679cLoadBalancer\u7684\u65b9\u5f0f\u66b4\u9732\uff0cgatewaypublicservice\u63a7\u5236\u5668\u8d1f\u8d23\u7ef4\u62a4\u4e00\u4e2aLoadbalancer\u7684Service\u548cEndpoints\u7684\u751f\u547d\u5468\u671f"}),"\n",(0,r.jsx)(o.h3,{id:"23-\u5de5\u4f5c\u8d1f\u8f7d\u76f8\u5173\u63a7\u5236\u5668",children:"2.3 \u5de5\u4f5c\u8d1f\u8f7d\u76f8\u5173\u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.h4,{id:"231-daemonpodupdater-\u63a7\u5236\u5668",children:"2.3.1 daemonpodupdater \u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.p,{children:"\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e2d\uff0c\u5f53\u5b58\u5728 NotReady \u8282\u70b9\u65f6\uff0cDaemonSet \u7684\u4f20\u7edf RollingUpdate \u5347\u7ea7\u7b56\u7565\u5f88\u5bb9\u6613\u963b\u585e\u3002\u4e3a\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cdaemonpodupdater \u63a7\u5236\u5668\u63d0\u51fa\u4e86\u4e24\u79cd\u65b0\u7684\u5347\u7ea7\u6a21\u578b\uff1aAdvancedRollingUpdate \u548c OTA\uff08\u7a7a\u4e2d\uff09\u5347\u7ea7\u3002\nAdvancedRollingUpdate \u7b56\u7565\u9996\u5148\u5347\u7ea7 Ready \u8282\u70b9\u4e0a\u7684 Daemon Pod\uff0c\u5e76\u8df3\u8fc7 NotReady \u8282\u70b9\u3002\u5f53\u8282\u70b9\u4ece NotReady \u8f6c\u4e3a Ready \u65f6\uff0c\u8be5\u8282\u70b9\u4e0a\u7684Daemon Pod \u4f1a\u81ea\u52a8\u5347\u7ea7\u3002\nOTA \u7b56\u7565\u7528\u4e8e\u8fb9\u7f18\u8282\u70b9\u6240\u6709\u8005\uff08\u800c\u975e\u96c6\u7fa4\u6240\u6709\u8005\uff09\u51b3\u5b9a\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u7684\u573a\u666f\u3002\u8fd9\u79cd\u65b9\u6cd5\u5c24\u5176\u9002\u7528\u4e8e\u7535\u52a8\u6c7d\u8f66\u7b49\u60c5\u51b5\uff0c\u5176\u4e2d\u8fb9\u7f18\u8282\u70b9\u6240\u6709\u8005\u5bf9\u5347\u7ea7\u8fc7\u7a0b\u5177\u6709\u5b8c\u5168\u63a7\u5236\u6743\u3002"}),"\n",(0,r.jsx)(o.p,{children:"\u5728\u4e91-\u8fb9\u534f\u4f5c\u73af\u5883\u4e2d\uff0cDaemonSet \u7684\u6807\u51c6 RollingUpdate \u66f4\u65b0\u7b56\u7565\u53ef\u80fd\u4f1a\u56e0 NotReady \u8282\u70b9\u7684\u5b58\u5728\u800c\u906d\u9047\u963b\u585e\u3002\u4e3a\u4e86\u514b\u670d\u8fd9\u4e00\u6311\u6218\uff0cdaemonpodupdater \u63a7\u5236\u5668\u5f15\u5165\u4e86\u4e24\u79cd\u65b0\u578b\u66f4\u65b0\u673a\u5236\uff1aAdvancedRollingUpdate \u548c OTA\uff08\u7a7a\u4e2d\u5347\u7ea7\uff09\u3002\nAdvancedRollingUpdate \u673a\u5236\u4f18\u5148\u66f4\u65b0\u72b6\u6001\u4e3a Ready \u7684\u8282\u70b9\u4e0a\u7684 Daemon Pod\uff0c\u5e76\u8df3\u8fc7 NotReady \u72b6\u6001\u7684\u8282\u70b9\u3002\u5f53\u8282\u70b9\u72b6\u6001\u4ece NotReady \u53d8\u4e3a Ready \u540e\uff0c\u8be5\u8282\u70b9\u4e0a\u7684 Daemon Pod \u5c06\u4f1a\u81ea\u52a8\u8fdb\u884c\u66f4\u65b0\u3002\nOTA \u66f4\u65b0\u673a\u5236\u9002\u7528\u4e8e\u8fb9\u7f18\u8282\u70b9\u6240\u6709\u8005\uff08\u975e\u96c6\u7fa4\u7ba1\u7406\u5458\uff09\u81ea\u4e3b\u51b3\u5b9a\u66f4\u65b0\u65f6\u673a\u7684\u573a\u666f\uff0c\u4f8b\u5982\u7535\u52a8\u6c7d\u8f66\u7b49\u573a\u5408\uff0c\u5176\u4e2d\u8fb9\u7f18\u8282\u70b9\u6240\u6709\u8005\u5bf9\u5347\u7ea7\u8fc7\u7a0b\u62e5\u6709\u5b8c\u5168\u81ea\u4e3b\u63a7\u5236\u6743\u3002"}),"\n",(0,r.jsx)(o.h4,{id:"232-yurtappset-\u63a7\u5236\u5668webhook",children:"2.3.2 yurtappset \u63a7\u5236\u5668/webhook"}),"\n",(0,r.jsx)(o.p,{children:"\u5728\u539f\u751f Kubernetes \u73af\u5883\u4e2d\uff0c\u7ba1\u7406\u5206\u5e03\u4e8e\u591a\u4e2a\u8282\u70b9\u6c60\u7684\u540c\u7c7b\u5e94\u7528\u901a\u5e38\u8981\u6c42\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6c60\u521b\u5efa\u5355\u72ec\u7684 Deployment\uff0c\u8fd9\u65e0\u7591\u589e\u52a0\u4e86\u7ba1\u7406\u8d1f\u62c5\u548c\u6f5c\u5728\u7684\u51fa\u9519\u7387\u3002\u4e3a\u4e86\u7b80\u5316\u7ba1\u7406\u6d41\u7a0b\uff0cYurtAppSet CRD \u88ab\u8bbe\u8ba1\u7528\u6765\u5b9a\u4e49\u4e00\u4e2a\u5e94\u7528\u6a21\u677f\uff08\u517c\u5bb9 Deployment \u548c StatefulSet\uff09\uff0c\u5e76\u8d1f\u8d23\u8de8\u591a\u4e2a\u8282\u70b9\u6c60\u7ba1\u7406\u5de5\u4f5c\u8d1f\u8f7d\u3002\nYurtAppSet \u8981\u6c42\u7528\u6237\u5728\u5176 Spec.Topology \u5b57\u6bb5\u4e2d\u660e\u786e\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d\u5e94\u90e8\u7f72\u81f3\u54ea\u4e9b\u6307\u5b9a\u8282\u70b9\u6c60\u3002\u8fd9\u79cd\u65b9\u6cd5\u5927\u5e45\u7b80\u5316\u4e86\u5e94\u7528\u7684\u90e8\u7f72\u548c\u7ba1\u7406\uff0c\u4f7f\u5f97\u5728\u591a\u8282\u70b9\u6c60\u73af\u5883\u4e2d\u8fdb\u884c\u5e94\u7528\u7684\u6269\u5c55\u3001\u5347\u7ea7\u548c\u7ef4\u62a4\u53d8\u5f97\u66f4\u52a0\u4fbf\u6377\u3002\u5229\u7528 YurtAppSet\uff0c\u7528\u6237\u80fd\u591f\u96c6\u4e2d\u7ba1\u7406\u591a\u8282\u70b9\u6c60\u7684\u5e94\u7528\u90e8\u7f72\uff0c\u6709\u6548\u964d\u4f4e\u7ba1\u7406\u590d\u6742\u5ea6\u53ca\u9519\u8bef\u7387\u3002"}),"\n",(0,r.jsx)(o.h4,{id:"233-yurtappdaemon-\u63a7\u5236\u5668webhook",children:"2.3.3 yurtappdaemon \u63a7\u5236\u5668/webhook"}),"\n",(0,r.jsx)(o.p,{children:"\u5728\u4f20\u7edf Kubernetes \u4e2d\uff0cDaemonSet \u8d1f\u8d23\u5728\u96c6\u7fa4\u7684\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u590d\u5236\u7684\u5b88\u62a4 Pod\u3002\u8282\u70b9\u7684\u65b0\u589e\u6216\u5220\u9664\u4f1a\u89e6\u53d1\u76f8\u5e94\u7684\u5b88\u62a4 Pod \u7684\u521b\u5efa\u6216\u79fb\u9664\u3002\u4f46\u5728\u9700\u8981\u6839\u636e\u8282\u70b9\u6c60\u52a8\u6001\u53d8\u5316\u81ea\u52a8\u8c03\u6574\u5de5\u4f5c\u8d1f\u8f7d\u7684\u60c5\u51b5\u4e0b\uff0cDaemonSet \u5e76\u4e0d\u9002\u7528\u3002\nYurtAppDaemon \u7684\u8bbe\u8ba1\u521d\u8877\u662f\u786e\u4fdd\u5728\u6240\u6709\u8282\u70b9\u6c60\u6216\u901a\u8fc7 Spec.NodePoolSelector \u6307\u5b9a\u7684\u8282\u70b9\u6c60\u4e2d\uff0c\u57fa\u4e8e Spec.WorkloadTemplate \u81ea\u52a8\u90e8\u7f72\u6307\u5b9a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u968f\u7740\u8282\u70b9\u6c60\u7684\u589e\u52a0\u6216\u79fb\u9664\uff0cYurtAppDaemon \u63a7\u5236\u5668\u53ca Webhook \u5c06\u4e3a\u76f8\u5e94\u8282\u70b9\u6c60\u521b\u5efa\u6216\u79fb\u9664\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4fdd\u8bc1\u7b26\u5408\u6761\u4ef6\u7684\u8282\u70b9\u6c60\u59cb\u7ec8\u62e5\u6709\u9884\u5b9a\u7684 Pods\u3002"}),"\n",(0,r.jsx)(o.h4,{id:"234-yurtappoverrider-\u63a7\u5236\u5668webhook",children:"2.3.4 yurtappoverrider \u63a7\u5236\u5668/webhook"}),"\n",(0,r.jsx)(o.p,{children:"\u5728 YurtAppDaemon \u548c YurtAppSet \u65b9\u6848\u4e2d\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u662f\u901a\u8fc7\u7edf\u4e00\u7684\u6a21\u677f\u8fdb\u884c\u5206\u53d1\u7684\u3002\u4f46\u662f\uff0c\u5f53\u5de5\u4f5c\u8d1f\u8f7d\u9700\u8981\u9488\u5bf9\u4e0d\u540c\u7684\u8282\u70b9\u6c60\u6216\u5730\u7406\u533a\u57df\u8fdb\u884c\u7279\u5b9a\u7684\u4e2a\u6027\u5316\u914d\u7f6e\u65f6\uff0c\u7b80\u5355\u7684\u6a21\u677f\u53ef\u80fd\u65e0\u6cd5\u5b8c\u5168\u6ee1\u8db3\u9700\u6c42\u3002\u867d\u7136 YurtAppSet \u901a\u8fc7 Topology \u5b57\u6bb5\u63d0\u4f9b\u4e86\u4e00\u5b9a\u7a0b\u5ea6\u7684\u4e2a\u6027\u5316\u8c03\u6574\u80fd\u529b\uff0c\u4e3a\u4e86\u8fdb\u4e00\u6b65\u964d\u4f4e\u7cfb\u7edf\u95f4\u8026\u5408\u5e76\u4fdd\u6301\u5411\u540e\u517c\u5bb9\u6027\uff0c\u6211\u4eec\u5f15\u5165\u4e86 YurtAppOverrider\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u4e13\u95e8\u8d1f\u8d23\u591a\u5730\u57df\u5de5\u4f5c\u8d1f\u8f7d\u4e2a\u6027\u5316\u6e32\u67d3\u7684\u5f15\u64ce\u3002\nYurtAppOverrider \u7684\u4e3b\u8981\u4f5c\u7528\u662f\u786e\u4fdd\u6240\u6709\u7ed1\u5b9a\u7684 YurtAppDaemon \u548c YurtAppSet \u5728\u5206\u53d1\u5de5\u4f5c\u8d1f\u8f7d\u524d\uff0c\u90fd\u4f1a\u7ecf\u8fc7\u7279\u5b9aWebhook\u7684\u6e32\u67d3\u5904\u7406\u3002\u65e0\u8bba\u662f YurtAppDaemon \u548c YurtAppSet \u7684\u6a21\u677f\u53d1\u751f\u53d8\u52a8\uff0c\u8fd8\u662f YurtAppOverrider \u7684\u4e2a\u6027\u5316\u914d\u7f6e\u9700\u8981\u66f4\u65b0\uff0cYurtAppOverrider \u63a7\u5236\u5668\u90fd\u4f1a\u89e6\u53d1\u914d\u7f6e\u7684\u91cd\u8ba1\u7b97\uff0c\u4ee5\u4fdd\u8bc1\u5728\u591a\u5730\u57df\u90e8\u7f72\u573a\u666f\u4e0b\u5b9e\u73b0\u7cbe\u786e\u7684\u4e2a\u6027\u5316\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(o.h4,{id:"235-yurtstaticset-controllerwebhook",children:"2.3.5 yurtstaticset controller/webhook"}),"\n",(0,r.jsx)(o.p,{children:"\u8003\u8651\u5230\u8fb9\u7f18\u8bbe\u5907\u4f17\u591a\u4e14\u5206\u5e03\u5e7f\u6cdb\uff0c\u624b\u52a8\u90e8\u7f72\u548c\u5347\u7ea7\u4e91\u8fb9\u73af\u5883\u4e2d\u7684\u9759\u6001 Pod \u53ef\u80fd\u4f1a\u5e26\u6765\u5de8\u5927\u7684\u64cd\u4f5c\u6311\u6218\u548c\u98ce\u9669\u3002\u4e3a\u4e86\u514b\u670d\u8fd9\u4e9b\u6311\u6218\uff0cOpenYurt \u63a8\u51fa\u4e86\u4e00\u79cd\u540d\u4e3a YurtStaticSet \u7684\u65b0\u578b\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\uff08CRD\uff09\uff0c\u65e8\u5728\u6539\u5584\u9759\u6001 Pod \u7684\u7ba1\u7406\u4f53\u9a8c\u3002\nyurtstaticset \u63a7\u5236\u5668/webhook \u4e3a\u9759\u6001 Pod \u5f15\u5165\u4e86 AdvancedRollingUpdate \u548c Over-The-Air\uff08OTA\uff09\u4e24\u79cd\u5347\u7ea7\u673a\u5236\uff0c\u786e\u4fdd\u5728\u4e91\u8fb9\u534f\u540c\u73af\u5883\u4e2d\u5bf9\u9759\u6001 Pod \u8fdb\u884c\u6709\u6548\u7684\u7248\u672c\u63a7\u5236\u548c\u65e0\u7f1d\u5347\u7ea7\u3002"}),"\n",(0,r.jsx)(o.h3,{id:"24-\u5176\u4ed6",children:"2.4 \u5176\u4ed6"}),"\n",(0,r.jsx)(o.h4,{id:"241-nodepool-\u63a7\u5236\u5668webhook",children:"2.4.1 nodepool \u63a7\u5236\u5668/webhook"}),"\n",(0,r.jsx)(o.p,{children:"\u7528\u6237\u901a\u5e38\u501f\u52a9\u5404\u79cd Kubernetes \u6807\u7b7e\u6765\u5bf9\u8282\u70b9\u8fdb\u884c\u5206\u7ec4\u4e0e\u7ba1\u7406\u3002\u4f46\u662f\uff0c\u968f\u7740\u8282\u70b9\u548c\u6807\u7b7e\u6570\u91cf\u7684\u6301\u7eed\u589e\u957f\uff0c\u5bf9\u8282\u70b9\u8fdb\u884c\u64cd\u4f5c\u548c\u7ef4\u62a4\u7684\u5de5\u4f5c\u2014\u2014\u6bd4\u5982\u5b9e\u65bd\u8c03\u5ea6\u7b56\u7565\u3001\u6279\u91cf\u8bbe\u7f6e\u6c61\u70b9\u7b49\u2014\u2014\u53d8\u5f97\u65e5\u76ca\u7e41\u7410\u548c\u590d\u6742\u3002\n\u4e3a\u4e86\u7b80\u5316\u8fd9\u4e00\u8fc7\u7a0b\uff0cNodePool \u628a\u4e00\u7ec4\u5177\u6709\u5171\u540c\u7279\u6027\u7684\u8282\u70b9\uff08\u5982\u5730\u7406\u4f4d\u7f6e\u3001CPU \u67b6\u6784\u3001\u6240\u5c5e\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u7b49\uff09\u62bd\u8c61\u6210\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u4f7f\u5f97\u8282\u70b9\u53ef\u4ee5\u5728\u8fd9\u4e00\u66f4\u9ad8\u5c42\u7ea7\u4e0a\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u3002\u901a\u8fc7\u8fd9\u79cd\u62bd\u8c61\uff0cNodePool \u4e3a\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u5206\u7ec4\u5e26\u6765\u4e86\u6e05\u6670\u7684\u7ed3\u6784\uff0c\u6781\u5927\u5730\u7b80\u5316\u4e86\u8282\u70b9\u7684\u6574\u4f53\u64cd\u4f5c\u548c\u7ef4\u62a4\u6d41\u7a0b\u3002"}),"\n",(0,r.jsx)(o.h4,{id:"242-csrapprover-\u63a7\u5236\u5668",children:"2.4.2 csrapprover \u63a7\u5236\u5668"}),"\n",(0,r.jsx)(o.p,{children:"\u5728 Kubernetes \u4e2d\uff0cCSR\uff08\u8bc1\u4e66\u7b7e\u540d\u8bf7\u6c42\uff09\u7684\u5ba1\u6279\u7b56\u7565\u975e\u5e38\u4e25\u683c\uff0c\u8fd9\u610f\u5473\u7740 OpenYurt \u7ec4\u4ef6\uff08\u5982 YurtHub\uff09\u751f\u6210\u7684 CSR \u4e0d\u4f1a\u81ea\u52a8\u83b7\u5f97 Kube-Controller-Manager \u7684\u6279\u51c6\u3002\n\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0cYurt-Manager \u4e2d\u7684 csrapprover \u63a7\u5236\u5668\u88ab\u8bbe\u8ba1\u7528\u6765\u8d1f\u8d23\u5ba1\u6279 OpenYurt \u7ec4\u4ef6\u7684 CSR \u8bf7\u6c42\uff0c\u786e\u4fdd\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(o.h4,{id:"243-platformadmin-\u63a7\u5236\u5668webhook",children:"2.4.3 platformadmin \u63a7\u5236\u5668/webhook"}),"\n",(0,r.jsx)(o.p,{children:"PlatformAdmin \u4ece\u4e4b\u524d\u7248\u672c\u7684 EdgeX CRD \u6f14\u8fdb\u800c\u6765\uff0c\u662f\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u7684\u62bd\u8c61\uff0c\u7528\u6237\u53ea\u9700\u8981\u8f93\u5165\u8bbe\u7f6e\u63a5\u5165\u7684\u5e73\u53f0\u3001\u9700\u8981\u90e8\u7f72\u7684 NodePool \u7684\u540d\u5b57\u3001\u9700\u8981\u90e8\u7f72\u7684\u7248\u672c\u7b49\u7b49\uff0c\u5c31\u53ef\u4ee5\u5728\u8282\u70b9\u6c60\u90e8\u7f72\u4e00\u5957\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u3002"}),"\n",(0,r.jsx)(o.p,{children:"platformadmin-controller\u96c6\u6210\u5728yurt-manager\u4e2d\uff0c\u8d1f\u8d23\u5c06PlatformAdmin CR\u89e3\u6790\u4e3a\u5bf9\u5e94\u7684configmap\u3001service\u548cyurtappset\uff0c\u4ece\u800c\u5b9e\u73b0\u8fb9\u7f18\u8bbe\u5907\u7ba1\u7406\u5e73\u53f0\u7684\u90e8\u7f72\u3002"}),"\n",(0,r.jsxs)(o.p,{children:["\u540c\u65f6\uff0c\u5b83\u8fd8\u8d1f\u8d23\u5c06yurt-iot-dock\u5206\u53d1\u5230\u5bf9\u5e94\u7684\u8282\u70b9\u6c60\uff0c\u4ee5\u5b9e\u73b0\u8fb9\u7f18\u7aef\u8bbe\u5907\u540c\u6b65\uff0c\u4e14\u7528\u6237\u53ef\u4ee5\u901a\u8fc7PlatformAdmin CR\u7684components\u5b57\u6bb5\u6765\u9009\u62e9\u9700\u8981\u90e8\u7f72\u7684edgex\u53ef\u9009\u7ec4\u4ef6\uff0c",(0,r.jsxs)(o.strong,{children:["\u8fd9\u4e00\u90e8\u5206\u8bf7\u53c2\u8003",(0,r.jsx)(o.a,{href:"/zh/docs/user-manuals/iot/edgex-foundry",children:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907\u7ae0\u8282"})]}),"\u3002"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"img",src:n(58267).Z+"",width:"1969",height:"1347"})}),"\n",(0,r.jsx)(o.h4,{id:"244-servicetopologyendpointsservicetopologyendpointslices-\u63a7\u5236\u5668",children:"2.4.4 servicetopologyendpoints/servicetopologyendpointslices \u63a7\u5236\u5668"}),"\n",(0,r.jsxs)(o.p,{children:["servicetopology \u63a7\u5236\u5668\u7528\u4e8e\u534f\u52a9 YurtHub \u4e2d\u7684 ",(0,r.jsx)(o.a,{href:"/zh/docs/user-manuals/resource-access-control/",children:"servicetopology filter"})," \u4e3a\u96c6\u7fa4\u63d0\u4f9b\u670d\u52a1\u62d3\u6251\u8def\u7531\u529f\u80fd\u3002\n\u5f53Service\u7684\u62d3\u6251Annotation\u88ab\u4fee\u6539\u65f6\uff0cservicetopology \u63a7\u5236\u5668\u4f1a\u66f4\u65b0\u76f8\u5e94\u7684Endpoints\u548c EndpointSlices\uff0c\u4ece\u800c\u89e6\u53d1\u8282\u70b9\u7aefYurtHub\u4e2d\u7684\u670d\u52a1\u62d3\u6251\u66f4\u65b0\u3002"]})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},58267:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/platform-adminv1.4.0-20da11e750ce6fb04fc575b725682f6e.png"},31159:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/yurt-manager-arch-d5acd62c1b9e38fab3b73004b93be483.png"},11151:(e,o,n)=>{n.d(o,{a:()=>a});var r=n(67294);const t={},d=r.createContext(t);function a(e){const o=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}}}]);