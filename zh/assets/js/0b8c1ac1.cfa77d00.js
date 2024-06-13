"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[88515],{74416:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(85893),o=t(11151);const i={title:"YurtCoordinator"},d=void 0,s={id:"core-concepts/yurt-coordinator",title:"YurtCoordinator",description:"1. \u529f\u80fd\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/core-concepts/yurt-coordinator.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-coordinator",permalink:"/zh/docs/v1.3/core-concepts/yurt-coordinator",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-coordinator.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171831465e4,frontMatter:{title:"YurtCoordinator"},sidebar:"docs",previous:{title:"YurtDeviceController",permalink:"/zh/docs/v1.3/core-concepts/yurt-device-controller"},next:{title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d",permalink:"/zh/docs/v1.3/user-manuals/autonomy/selfhealing-during-network-disconnection"}},c={},u=[{value:"1. \u529f\u80fd\u7b80\u4ecb",id:"1-\u529f\u80fd\u7b80\u4ecb",level:2},{value:"2. \u6982\u5ff5\u4ecb\u7ecd",id:"2-\u6982\u5ff5\u4ecb\u7ecd",level:2},{value:"2.1 YurtHub Leader\u9009\u4e3e",id:"21-yurthub-leader\u9009\u4e3e",level:3},{value:"3. \u5b9e\u73b0\u7ec6\u8282",id:"3-\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"3.1 \u8fb9\u7f18\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406",id:"31-\u8fb9\u7f18\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406",level:3},{value:"3.2 \u8282\u70b9\u6c60\u8d44\u6e90\u7f13\u5b58\u548c\u590d\u7528",id:"32-\u8282\u70b9\u6c60\u8d44\u6e90\u7f13\u5b58\u548c\u590d\u7528",level:3}];function l(r){const e={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...r.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"1-\u529f\u80fd\u7b80\u4ecb",children:"1. \u529f\u80fd\u7b80\u4ecb"}),"\n",(0,n.jsx)(e.p,{children:"Yurt-Coordinator\u53ef\u4ee5\u4e3a\u8fb9\u7f18\u8282\u70b9\u6c60\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u8fb9\u7f18\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u5728\u4e91\u8fb9\u534f\u540c\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u4e0e\u4e91\u7aef\u65ad\u8fde\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u60c5\u51b5\u3002\u5f53\u4e91\u7aef\u957f\u65f6\u95f4\u6ca1\u6709\u6536\u5230\u8fb9\u7f18\u8282\u70b9\u7684\u5fc3\u8df3\u4fe1\u606f\uff0c\u5176\u539f\u56e0\u53ef\u80fd\u6709\u4e24\u79cd:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\u4e00\u79cd\u662f\u4e91\u8fb9\u7f51\u7edc\u65ad\u5f00\u4f46\u8fb9\u7f18\u8282\u70b9\u4ecd\u7136\u6b63\u5e38\u8fd0\u884c"}),"\n",(0,n.jsx)(e.li,{children:"\u53e6\u4e00\u79cd\u662f\u8fb9\u7f18\u8282\u70b9\u6545\u969c\u65e0\u6cd5\u6062\u590d"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u5bf9\u4e8e\u524d\u4e00\u79cd\u60c5\u51b5\uff0c\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u4e1a\u52a1\u4ecd\u7136\u6b63\u5e38\u8fd0\u884c\uff0c\u4e3a\u4e86\u8fb9\u7f18\u4e1a\u52a1\u7684\u7a33\u5b9a\uff0c\u6b64\u65f6\u4e0d\u5e94\u8be5\u8fdb\u884cPod\u9a71\u9010\uff1b\u5bf9\u4e8e\u540e\u4e00\u79cd\u60c5\u51b5\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u4e1a\u52a1\u7684\u53ef\u7528\u6027\uff0c\u5e94\u8be5\u5c06Pod\u9a71\u9010\u5230\u5176\u4ed6\u5065\u5eb7\u7684\u8fb9\u7f18\u8282\u70b9\u4e0a\u7ee7\u7eed\u63d0\u4f9b\u670d\u52a1\u3002\u5728\u539f\u5148\u7684\u65b9\u6848\u4e2d\uff0c\u4e91\u7aef\u5f88\u96be\u533a\u5206\u8fd9\u4e24\u79cd\u60c5\u51b5\u3002Yurt-Coordinator\u63d0\u4f9b\u4e86\u4e00\u79cd\u5fc3\u8df3\u4ee3\u7406\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u8282\u70b9\u6c60\u4e2d\u4e91\u8fb9\u7f51\u7edc\u6b63\u5e38\u7684\u8282\u70b9\u4f1a\u8d1f\u8d23\u5c06\u65ad\u8fde\u8282\u70b9\u7684\u5fc3\u8df3\u4ee3\u7406\u8f6c\u53d1\u5230\u4e91\u7aef\u5e76\u9644\u5e26\u989d\u5916\u7684\u4fe1\u606f\uff0c\u4e91\u7aef\u53ef\u4ee5\u6839\u636e\u8be5\u4fe1\u606f\u533a\u5206\u8fd9\u4e24\u79cd\u60c5\u51b5\u800c\u91c7\u53d6\u5bf9\u5e94\u7684\u7b56\u7565\u3002"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u8282\u70b9\u6c60\u7ef4\u5ea6\u8d44\u6e90\u7684\u7f13\u5b58\u548c\u590d\u7528"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u5728\u4e91\u8fb9\u534f\u540c\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u4e91\u8fb9\u5e26\u5bbd\u8d44\u6e90\u6709\u9650\u4e14\u8d39\u7528\u8f83\u9ad8\uff0c\u800c\u4e00\u4e2a\u8282\u70b9\u6c60\u4e2d\u7684\u8fb9\u7f18\u8282\u70b9\u4ece\u4e91\u7aef\u83b7\u53d6\u7684\u8d44\u6e90\u5b58\u5728\u5927\u91cf\u91cd\u590d\uff08\u5982Endpoints\u548cEndpointSlices\uff09\u3002Yurt-Coordinator\u4e3a\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u63d0\u4f9b\u4e86\u8d44\u6e90\u7f13\u5b58\u548c\u590d\u7528\u80fd\u529b\uff0c\u5bf9\u4e8e\u8fd9\u4e9b\u91cd\u590d\u7684\u8d44\u6e90\uff0c\u4e00\u4e2a\u8282\u70b9\u6c60\u4ec5\u9700\u8981\u4ece\u4e91\u7aef\u62c9\u53d6\u4e00\u6b21\uff0c\u5176\u4ed6\u8fb9\u7f18\u8282\u70b9\u90fd\u53ef\u4ee5\u76f4\u63a5\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u4e91\u8fb9\u5e26\u5bbd\u7684\u6d88\u8017\u3002"}),"\n",(0,n.jsx)(e.p,{children:"Yurt-Coordinator\u7ec4\u4ef6\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u7531Kube-APIServer\u548cetcd\u7ec4\u6210\u7684Pod\uff0c\u91c7\u7528YurtAppDaemon\u7684\u5f62\u5f0f\u90e8\u7f72\uff0c\u6bcf\u4e2a\u8282\u70b9\u6c60\u6709\u4e00\u4e2a\u5b9e\u4f8b\u3002"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"yurt-coordinator-framework",src:t(24435).Z+"",width:"1270",height:"617"})}),"\n",(0,n.jsx)(e.h2,{id:"2-\u6982\u5ff5\u4ecb\u7ecd",children:"2. \u6982\u5ff5\u4ecb\u7ecd"}),"\n",(0,n.jsx)(e.h3,{id:"21-yurthub-leader\u9009\u4e3e",children:"2.1 YurtHub Leader\u9009\u4e3e"}),"\n",(0,n.jsx)(e.p,{children:"\u5f53\u542f\u7528Yurt-Coordinator\u7684\u80fd\u529b\u540e\uff0c\u8282\u70b9\u6c60\u4e2d\u7684\u6240\u6709YurtHub\u4f1a\u901a\u8fc7Yurt-Coordinator\u8fdb\u884cLeader\u9009\u4e3e\uff0c\u9009\u4e3e\u51fa\u7684Leader YurtHub\u4f1a\u8d1f\u8d23\u5bf9\u65ad\u8fde\u8282\u70b9\u7684\u5fc3\u8df3\u8fdb\u884c\u4ee3\u7406\u8f6c\u53d1\u3002\u96c6\u7fa4\u4e2d\u7684YurtHub\u5171\u6709\u4e09\u79cd\u89d2\u8272\uff1a"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Leader YurtHub\uff1a\u6210\u529f\u7ade\u9009\u4e3aLeader\u7684YurtHub\uff0c\u5176\u9700\u8981\u540c\u65f6\u4fdd\u6301\u4e0e\u4e91\u7aefAPIServer\u548cYurt-Coordinator\u7684\u8fde\u63a5\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Follower YurtHub\uff1a\u7ade\u9009Leader\u5931\u8d25\u7684YurtHub\u3002\u8fd9\u4e9bYurtHub\u4f1a\u6301\u7eed\u5c1d\u8bd5\u7ade\u9009Leader\u3002"}),"\n",(0,n.jsx)(e.li,{children:"Pending YurtHub\uff1a\u672a\u53c2\u4e0e\u7ade\u9009\u7684YurtHub\u3002YurtHub\u5728\u521d\u59cb\u9636\u6bb5\u4f1a\u5904\u4e8e\u8be5\u72b6\u6001\uff0c\u6216\u5f53\u8282\u70b9\u6c60\u4e2d\u7684Yurt-Coordinator\u4e0d\u5065\u5eb7\u65f6\uff0c\u8282\u70b9\u6c60\u4e2d\u7684YurtHub\u90fd\u4f1a\u8fdb\u5165\u8be5\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"yurthub-state",src:t(89088).Z+"",width:"2032",height:"1144"})}),"\n",(0,n.jsx)(e.h2,{id:"3-\u5b9e\u73b0\u7ec6\u8282",children:"3. \u5b9e\u73b0\u7ec6\u8282"}),"\n",(0,n.jsx)(e.h3,{id:"31-\u8fb9\u7f18\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406",children:"3.1 \u8fb9\u7f18\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406"}),"\n",(0,n.jsxs)(e.p,{children:["\u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\uff0cYurtHub\u4f1a\u540c\u65f6\u5c06\u5fc3\u8df3\u4fe1\u606f\uff08NodeLease\uff09\u53d1\u9001\u7ed9\u4e91\u7aef\u548cYurt-Coordinator\uff0c\u540c\u65f6\u76d1\u89c6\u4e91\u8fb9\u7f51\u7edc\u72b6\u51b5\u3002\u5f53YurtHub\u53d1\u73b0\u4e91\u8fb9\u65ad\u8fde\u65f6\uff0c\u4f1a\u5728\u53d1\u9001\u5230Yurt-Coordinator\u7684\u5fc3\u8df3\u4fe1\u606f\u4e2d\u52a0\u5165\u4e00\u6761\u6ce8\u91ca",(0,n.jsx)(e.code,{children:"openyurt.io/delegate-heartbeat: true"}),"\uff0c\u8868\u660e\u8be5\u8282\u70b9\u65e0\u6cd5\u72ec\u7acb\u5730\u5c06\u5fc3\u8df3\u53d1\u9001\u5230\u4e91\u7aef\u3002\u540c\u65f6Leader Yurthub\u4f1alist/watch Yurt-Coordinator\u4e2d\u7684NodeLease\u8d44\u6e90\uff0c\u5f53\u53d1\u73b0\u5e26\u6709\u8be5\u6ce8\u91ca\u7684\u5fc3\u8df3\u540e\u4f1a\u5c06\u5176\u8fde\u5e26\u6ce8\u91ca\u4ee3\u7406\u8f6c\u53d1\u5230\u4e91\u7aefAPIServer\u3002\u6b64\u65f6\u4e91\u7aef\u53ef\u4ee5\u6839\u636e\u5fc3\u8df3\u548c\u6ce8\u91ca\u533a\u5206\u8fb9\u7f18\u8282\u70b9\u7684\u8fd0\u884c\u60c5\u51b5\uff1a"]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u8282\u70b9\u5fc3\u8df3\u6b63\u5e38\u4e14\u65e0\u6ce8\u91ca\uff1a\u8be5\u8282\u70b9\u8fd0\u884c\u6b63\u5e38\uff0c\u4e91\u8fb9\u8fde\u63a5\u6b63\u5e38"}),"\n",(0,n.jsx)(e.li,{children:"\u8282\u70b9\u5fc3\u8df3\u6b63\u5e38\u4f46\u5e26\u6ce8\u91ca\uff1a\u8be5\u8282\u70b9\u8fd0\u884c\u6b63\u5e38\uff0c\u4e91\u8fb9\u65ad\u8fde"}),"\n",(0,n.jsx)(e.li,{children:"\u8282\u70b9\u5fc3\u8df3\u7f3a\u5931\uff1a\u8be5\u8282\u70b9\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"32-\u8282\u70b9\u6c60\u8d44\u6e90\u7f13\u5b58\u548c\u590d\u7528",children:"3.2 \u8282\u70b9\u6c60\u8d44\u6e90\u7f13\u5b58\u548c\u590d\u7528"}),"\n",(0,n.jsx)(e.p,{children:"\u8282\u70b9\u6c60\u4e2d\u7ade\u9009\u51fa\u7684Leader YurtHub\u4f1a\u8d1f\u8d23\u5411\u4e91\u7aeflist/watch\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684\u8d44\u6e90\uff0c\u4e3b\u8981\u662fEndpoints\u548cEndpointSlices\u3002Leader YurtHub\u4f1a\u5c06\u8d44\u6e90\u672c\u8eab\u53ca\u5176\u540e\u7eed\u53d8\u5316\u6301\u7eed\u66f4\u65b0\u5230Yurt-Coordinator\u7684etcd\u4e2d\u3002\u8282\u70b9\u6c60\u4e2d\u7684\u6240\u6709YurtHub\u90fd\u53ef\u4ee5\u901a\u8fc7Kubernetes\u539f\u751f\u7684RESTful API\uff0c\u4eceYurt-Coordinator\u7684APIServer\u4e2d\u83b7\u53d6\u8fd9\u4e9b\u8d44\u6e90\uff0c\u907f\u514d\u4ece\u4e91\u7aef\u76f4\u63a5\u62c9\u53d6\uff0c\u4ece\u800c\u8fbe\u5230\u590d\u7528\u7684\u76ee\u6807\u3002"}),"\n",(0,n.jsx)(e.p,{children:"Yurt-Coordinator\u6709\u4e24\u79cd\u72b6\u6001\u6307\u6807\uff1a"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Healthy\uff1a"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Yurt-Coordinator\u6210\u529f\u90e8\u7f72\u5e76\u6b63\u5e38\u8fd0\u884c\uff0c\u8282\u70b9\u53ef\u4ee5\u5411\u5176\u66f4\u65b0\u5fc3\u8df3\u4fe1\u606f\u3002\u4f46\u6b64\u65f6Yurt-Coordinator\u4e2d\u8fd8\u672a\u5b8c\u5168\u7f13\u5b58\u8282\u70b9\u6c60\u8d44\u6e90\uff0c\u56e0\u6b64\u65e0\u6cd5\u5904\u7406\u9488\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u7684\u8bf7\u6c42\u3002"}),"\n",(0,n.jsxs)(e.ol,{start:"2",children:["\n",(0,n.jsx)(e.li,{children:"Ready\uff1a"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Yurt-Coordinator\u5df2\u7ecf\u6210\u529f\u7f13\u5b58\u4e86\u8282\u70b9\u6c60\u8d44\u6e90\uff0c\u6b64\u65f6\u53ef\u4ee5\u5904\u7406\u8282\u70b9\u6c60\u5185\u90e8\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u7684\u8bf7\u6c42\u3002"}),"\n",(0,n.jsxs)(e.p,{children:["\u8282\u70b9\u6c60\u8d44\u6e90\u7f13\u5b58\u548c\u4e91\u7aef\u540c\u6b65\u540e\uff0cLeader YurtHub\u4f1a\u521b\u5efa\u5e76\u6301\u7eed\u66f4\u65b0Yurt-Coordinator\u4e2d\u7684\u4e00\u4e2a\u540d\u4e3a",(0,n.jsx)(e.code,{children:"leader-informer-sync"}),"\u7684lease\u3002\u5176\u4ed6YurtHub\u4f1a\u76d1\u89c6\u8be5lease\uff0c\u5f53\u53d1\u73b0\u8be5lease\u5b58\u5728\u4e14\u672a\u8fc7\u671f\u65f6\uff0c\u5c31\u4f1a\u5c06\u5bf9\u8282\u70b9\u6c60\u8d44\u6e90\u7684\u8bf7\u6c42\u53d1\u9001\u5230Yurt-Coordinator\u8fdb\u884c\u5904\u7406\u3002"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"cache-and-reuse",src:t(82317).Z+"",width:"1857",height:"507"})})]})}function a(r={}){const{wrapper:e}={...(0,o.a)(),...r.components};return e?(0,n.jsx)(e,{...r,children:(0,n.jsx)(l,{...r})}):l(r)}},82317:(r,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/yurt-coordinator-cache-and-reuse-74c3711ff6706be32fd167372d64f711.jpg"},24435:(r,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/yurt-coordinator-framework-b5e5ab2603a5ba015c854d65bbef8cce.jpg"},89088:(r,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/yurthub-state-b9d0b9252f003d0edbad5c3c753ac16c.png"},11151:(r,e,t)=>{t.d(e,{a:()=>d});var n=t(67294);const o={},i=n.createContext(o);function d(r){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}}}]);