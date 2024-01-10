"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[26045],{78285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var r=t(85893),s=t(11151);const l={title:"YurtAppManager"},i=void 0,o={id:"core-concepts/yurt-app-manager",title:"YurtAppManager",description:"Yurt-App-Manager\u662fOpenYurt\u96c6\u7fa4\u63d0\u4f9b\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406\u7684\u529f\u80fd\u7ec4\u4ef6\uff0c\u5168\u9762\u63d0\u5347\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u7684\u5e94\u7528\u90e8\u7f72\u6548\u7387\uff0c\u964d\u4f4e\u8fb9\u7f18\u8282\u70b9\u548c\u5e94\u7528\u8fd0\u7ef4\u7684\u590d\u6742\u5ea6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/core-concepts/yurt-app-manager.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurt-app-manager",permalink:"/zh/docs/v0.6.0/core-concepts/yurt-app-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-app-manager.md",tags:[],version:"v0.6.0",lastUpdatedBy:"huiwq1990",lastUpdatedAt:1704852908,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"YurtAppManager"},sidebar:"docs",previous:{title:"YurtTunnel",permalink:"/zh/docs/v0.6.0/core-concepts/yurttunnel"},next:{title:"YurtControllerManager",permalink:"/zh/docs/v0.6.0/core-concepts/yurt-controller-manager"}},p={},a=[{value:"\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u7ec4\u4ef6\u4ecb\u7ecd",level:2},{value:"\u8fb9\u7f18\u8282\u70b9\u6c60\u6982\u8ff0",id:"\u8fb9\u7f18\u8282\u70b9\u6c60\u6982\u8ff0",level:2},{value:"\u5355\u5143\u5316\u90e8\u7f72\u5e94\u7528\u6a21\u578b",id:"\u5355\u5143\u5316\u90e8\u7f72\u5e94\u7528\u6a21\u578b",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Yurt-App-Manager\u662fOpenYurt\u96c6\u7fa4\u63d0\u4f9b\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406\u7684\u529f\u80fd\u7ec4\u4ef6\uff0c\u5168\u9762\u63d0\u5347\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u7684\u5e94\u7528\u90e8\u7f72\u6548\u7387\uff0c\u964d\u4f4e\u8fb9\u7f18\u8282\u70b9\u548c\u5e94\u7528\u8fd0\u7ef4\u7684\u590d\u6742\u5ea6\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7ec4\u4ef6\u4ecb\u7ecd",children:"\u7ec4\u4ef6\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u901a\u5e38\u5177\u5907\u5f88\u5f3a\u7684\u533a\u57df\u6027\u3001\u5730\u57df\u6027\u3001\u6216\u8005\u5176\u4ed6\u903b\u8f91\u4e0a\u7684\u5206\u7ec4\u7279\u6027\uff0c\u6bd4\u5982\u5177\u6709\u76f8\u540c\u7684CPU\u67b6\u6784\u3001\u8fd0\u8425\u5546\u6216\u4e91\u63d0\u4f9b\u5546\uff0c\u4e0d\u540c\u5206\u7ec4\u7684\u8282\u70b9\u95f4\u5f80\u5f80\u5b58\u5728\u7f51\u7edc\u4e0d\u4e92\u901a\u3001\u8d44\u6e90\u4e0d\u5171\u4eab\u3001\u8d44\u6e90\u5f02\u6784\u3001\u5e94\u7528\u72ec\u7acb\u7b49\u660e\u663e\u7684\u9694\u79bb\u5c5e\u6027\u3002\u8fd9\u4e5f\u662f\u8fb9\u7f18\u8282\u70b9\u6c60\u7684\u7531\u6765\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u76f8\u540c\u7684\u5e94\u7528\u548c\u955c\u50cf\uff0c\u53ef\u80fd\u9700\u8981\u90e8\u7f72\u5230\u4e0d\u540c\u7684\u8282\u70b9\u6c60\u4e2d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u539f\u751fKubernetes Service\u7684\u540e\u7aef\u7aef\u70b9\u6241\u5e73\u5206\u5e03\u5728\u96c6\u7fa4\u4e2d\u4efb\u610f\u8282\u70b9\u3002\u56e0\u6b64\uff0c\u8de8\u8dc3\u4e0d\u540c\u5206\u7ec4\u8282\u70b9\u7684Service\u6d41\u91cf\uff0c\u4f1a\u5927\u6982\u7387\u51fa\u73b0\u8bbf\u95ee\u4e0d\u53ef\u8fbe\u3001\u6216\u8005\u8bbf\u95ee\u6548\u7387\u4f4e\u4e0b\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641890786820-8723fed9-f3fd-43a9-b165-99fb367bb6a3.png",alt:"img"})}),"\n",(0,r.jsx)(n.p,{children:"\u9488\u5bf9\u4ee5\u4e0a\u7684\u573a\u666f\u548c\u95ee\u9898\uff0cOpenYurt \u4ece\u4e09\u4e2a\u5c42\u9762\u6765\u89e3\u51b3\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8282\u70b9\u5355\u5143\u5316\uff1a \u8282\u70b9\u6c60\uff0c\u4ee5\u8282\u70b9\u6c60\u89c6\u89d2\u5bf9\u4e0d\u540c\u8fb9\u7f18\u533a\u57df\u4e0b\u7684\u4e3b\u673a\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u548c\u8fd0\u7ef4"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5e94\u7528\u7684\u5355\u5143\u5316\uff1a \u5355\u5143\u5316\u90e8\u7f72\uff0c\u4f7f\u7528\u65b0\u7684\u5355\u5143\u5316\u90e8\u7f72\u6a21\u578b\u5c06\u7528\u6237\u7684\u5de5\u4f5c\u8d1f\u8f7d\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u8282\u70b9\u6c60\u4e2d\uff0c\u4e1a\u52a1\u7684\u5b9e\u4f8b\u6570\uff0c\u7248\u672c\u90fd\u53ef\u4ee5\u6309\u7167\u8282\u70b9\u6c60\u7684\u7ef4\u5ea6\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6d41\u91cf\u7684\u5355\u5143\u5316\uff1a Service \u62d3\u6251\uff0c\u901a\u8fc7\u7b80\u5355\u914d\u7f6e\u6765\u9650\u5236Service\u540e\u7aefEndpoint\u7684\u8bbf\u95ee\u8303\u56f4\uff0c\u4f8b\u5982\u53ea\u80fd\u7531\u76f8\u540c\u8282\u70b9\u6c60\u7684\u8282\u70b9\u8bbf\u95ee\uff0c\u6216\u8005\u53ea\u80fd\u672c\u8282\u70b9\u8bbf\u95ee\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u800cYurt-App-Manager\u662f Kubernetes \u7684\u4e00\u4e2a\u6807\u51c6\u6269\u5c55\uff0c\u5b83\u53ef\u4ee5\u914d\u5408 Kubernetes \u4f7f\u7528\uff0c\u63d0\u4f9b NodePool \u548c UnitedDeployment \u4e24\u79cd\u63a7\u5236\u5668\uff0c\u4ece\u4e3b\u673a\u7ef4\u5ea6\u548c\u5e94\u7528\u7ef4\u5ea6\u6765\u63d0\u4f9b\u8fb9\u7f18\u573a\u666f\u4e0b\u8282\u70b9\u548c\u5e94\u7528\u7684\u8fd0\u7ef4\u80fd\u529b\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8fb9\u7f18\u8282\u70b9\u6c60\u6982\u8ff0",children:"\u8fb9\u7f18\u8282\u70b9\u6c60\u6982\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"OpenYurt\u7684Yurt-App-Manager \u7684\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u8282\u70b9\u6c60Node Pool\u63a7\u5236\u5668\uff0c\u5c06\u8282\u70b9\u6309\u7167\u7279\u5b9a\u5c5e\u6027\uff08\u5730\u57df\uff0cCPU\u67b6\u6784\uff0c\u4e91\u63d0\u4f9b\u5546\uff09\u7b49\u7b49\uff0c\u62bd\u8c61\u6210\u8282\u70b9\u6c60\u6982\u5ff5\uff0c\u4ee5\u8282\u70b9\u6c60\u7684\u7ef4\u5ea6\u5bf9\u8282\u70b9\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f20\u7edf\u7684\u505a\u6cd5\u662f\u7528Kubernetes \u6253Label \u7684\u65b9\u5f0f\u6765\u5bf9\u4e3b\u673a\u8fdb\u884c\u5206\u7c7b\u7ba1\u7406\uff0c\u4f46\u662f\u968f\u7740\u8282\u70b9\u89c4\u6a21\u548cLabel\u6570\u91cf\u7684\u589e\u52a0\uff0c\u5bf9\u8282\u70b9\u4e3b\u673a\u5206\u7c7b\u8fd0\u7ef4\uff08\u4f8b\u5982\uff1a\u6279\u91cf\u8bbe\u7f6e\u8c03\u5ea6\u7b56\u7565\u3001traints\u7b49\uff09\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641821636032-47106886-a026-484b-b867-ef74ce9e93b6.png",alt:"img"})}),"\n",(0,r.jsx)(n.p,{children:"NodePool \u4ee5\u8282\u70b9\u7ec4\u7684\u7ef4\u5ea6\u5bf9\u8282\u70b9\u5212\u5206\u505a\u4e86\u66f4\u9ad8\u7ef4\u5ea6\u7684\u62bd\u8c61\uff0c\u53ef\u4ee5\u4ece\u8282\u70b9\u6c60\u89c6\u89d2\u5bf9\u4e0d\u540c\u8fb9\u7f18\u533a\u57df\u4e0b\u7684\u4e3b\u673a\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\u548c\u8fd0\u7ef4\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641822057755-c50eecec-4ae9-4f35-a86f-1fbfe48498af.png",alt:"img"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5355\u5143\u5316\u90e8\u7f72\u5e94\u7528\u6a21\u578b",children:"\u5355\u5143\u5316\u90e8\u7f72\u5e94\u7528\u6a21\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u968f\u7740\u5730\u57df\u5206\u5e03\u8d8a\u6765\u8d8a\u591a\uff0c\u4ee5\u53ca\u4e0d\u540c\u5730\u57df\u5bf9\u5e94\u7528\u7684\u5dee\u5f02\u5316\u9700\u6c42\uff0c\u4f7f\u5f97\u8fd0\u7ef4\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5177\u4f53\u8868\u73b0\u5728\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u955c\u50cf\u7248\u672c\u5347\u7ea7\uff0c\u9700\u8981\u5c06\u6bcf\u4e2aDeployment\u9010\u4e00\u4fee\u6539\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u81ea\u5b9a\u4e49Deployment\u7684\u547d\u540d\u89c4\u8303\uff0c\u4ee5\u6b64\u6765\u8868\u660e\u76f8\u540c\u7684\u5e94\u7528\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u76f8\u540c\u5e94\u7528\u7684\u591a\u4e2aDeployment\uff0c\u9664\u4e86name\uff0cnodeselectors, replicas \u8fd9\u4e9b\u7279\u6027\u5916\uff0c\u5176\u4ed6\u7684\u5dee\u5f02\u5316\u914d\u7f6e\u6bd4\u8f83\u5c0f\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5355\u5143\u5316\u90e8\u7f72\uff08UnitedDeployment\uff09\u662fOpenYurt\u9ed8\u8ba4\u63d0\u4f9bYurt-App-Manager\u7ec4\u4ef6\u6240\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\u662fkubernetes CRD \u8d44\u6e90\uff0c\u901a\u8fc7\u66f4\u4e0a\u5c42\u6b21\u7684\u62bd\u8c61\uff0c\u5bf9\u8fd9\u4e9b\u5b50\u7684Deployment \u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff1acreate/update/delete\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641823282158-8e00965d-e17e-4a79-912c-01589f98217e.png",alt:"img"})}),"\n",(0,r.jsxs)(n.p,{children:["UnitedDeployment \u63a7\u5236\u5668\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u6a21\u677f\u6765\u5b9a\u4e49\u5e94\u7528\uff0c\u5e76\u901a\u8fc7\u7ba1\u7406\u591a\u4e2a workload \u6765\u5339\u914d\u4e0b\u9762\u4e0d\u540c\u7684\u533a\u57df\u3002 \u6bcf\u4e2a UnitedDeployment \u4e0b\u6bcf\u4e2a\u533a\u57df\u7684 workload \u88ab\u79f0\u4e3a pool\uff0c \u76ee\u524d pool \u652f\u6301\u4f7f\u7528\u4e24\u79cdworkload\uff1a ",(0,r.jsx)(n.code,{children:"StatefulSet"})," \u548c ",(0,r.jsx)(n.code,{children:"Deployment"}),"\u3002\u63a7\u5236\u5668\u4f1a\u6839\u636e UnitedDeployment \u4e2dpool\u7684\u914d\u7f6e\u521b\u5efa\u5b50\u7684workload \u8d44\u6e90\u5bf9\u8c61\uff0c\u6bcf\u4e2a\u8d44\u6e90\u5bf9\u8c61\u90fd\u6709\u4e00\u4e2a\u671f\u671b\u7684 ",(0,r.jsx)(n.code,{children:"replicas"})," Pod \u6570\u91cf\u3002\u901a\u8fc7\u4e00\u4e2aUnitedDeployment \u5b9e\u4f8b\u5c31\u53ef\u4ee5\u81ea\u52a8\u7ef4\u62a4\u591a\u4e2a Deployment \u6216\u8005 Statefulset \u8d44\u6e90\uff0c\u540c\u65f6\u8fd8\u80fd\u5177\u5907replicas \u7b49\u7684\u5dee\u5f02\u5316\u914d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u82e5\u83b7\u53d6\u66f4\u76f4\u89c2\u7684\u64cd\u4f5c\u4f53\u9a8c\uff0c\u8bf7\u67e5\u770b Yurt-App-Manager ",(0,r.jsx)(n.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/blob/master/docs/tutorial/yurt-app-manager.md",children:"\u4f7f\u7528\u6559\u7a0b"}),"\u548c",(0,r.jsx)(n.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/blob/master/docs/tutorial/yurt-app-manager-dev.md",children:"\u5f00\u53d1\u8005\u6559\u7a0b"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u66f4\u591a\u5173\u4e8e Yurt-App-Manager \u7684\u8ba8\u8bba\u8bf7\u53c2\u8003\u793e\u533a issue \u548c pull request\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["issue124\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/124",children:"UnitedDeployment usages"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["issue171\uff1a[ ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/171",children:"feature request] the definition of NodePool and UnitedDeployment"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["pull request 173\uff1a [",(0,r.jsx)(n.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/alibaba/openyurt/pull/173",children:"proposal] add nodepool and uniteddployment crd proposal"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);