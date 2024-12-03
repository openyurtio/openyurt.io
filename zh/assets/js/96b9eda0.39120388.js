"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[20069],{66806:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"core-concepts/architecture","title":"\u7cfb\u7edf\u67b6\u6784","description":"OpenYurt\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/core-concepts/architecture.md","sourceDirName":"core-concepts","slug":"/core-concepts/architecture","permalink":"/zh/docs/v1.2/core-concepts/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md","tags":[],"version":"v1.2","lastUpdatedBy":"Cookie Wang","lastUpdatedAt":1733209554000,"frontMatter":{"title":"\u7cfb\u7edf\u67b6\u6784"},"sidebar":"docs","previous":{"title":"\u5982\u4f55\u4f7f\u7528`kubeconfig`\u4f53\u9a8cOpenYurt\u7684\u80fd\u529b","permalink":"/zh/docs/v1.2/installation/openyurt-experience-center/kubeconfig"},"next":{"title":"Raven","permalink":"/zh/docs/v1.2/core-concepts/raven"}}');var l=r(74848),s=r(28453);const i={title:"\u7cfb\u7edf\u67b6\u6784"},o=void 0,c={},d=[{value:"\u8282\u70b9\u5206\u7c7b",id:"\u8282\u70b9\u5206\u7c7b",level:3},{value:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefKube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",id:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",level:3},{value:"\u4e91\u8fb9\u6570\u636e\u9762\u6d41\u91cf",id:"\u4e91\u8fb9\u6570\u636e\u9762\u6d41\u91cf",level:3},{value:"OpenYurt\u7ec4\u4ef6\u4ecb\u7ecd",id:"openyurt\u7ec4\u4ef6\u4ecb\u7ecd",level:3}];function u(e){const n={h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"OpenYurt\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"img",src:r(71645).A+"",width:"1750",height:"1110"})}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4e2d\u84dd\u8272\u6846\u4e3a\u539f\u751fKubernetes\u7ec4\u4ef6\uff0c\u6a59\u8272\u6846\u4e2d\u7ec4\u4ef6\u4e3aOpenYurt\u7ec4\u4ef6\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u8282\u70b9\u5206\u7c7b",children:"\u8282\u70b9\u5206\u7c7b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Cloud Node\uff1a\u901a\u8fc7\u5185\u7f51\u4e0eKubernetes Master\u8fde\u63a5\uff0c\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u8fd0\u884c\u4e2d\u5fc3\u63a7\u5236\u7ec4\u4ef6\u3002\u8282\u70b9Label: openyurt.io/is-edge-worker: false"}),"\n",(0,l.jsx)(n.li,{children:"Edge Node\uff1a\u901a\u8fc7\u516c\u7f51\u4e0eKubernetes Master\u8fde\u63a5\uff0c\u4e00\u822c\u548c\u8fb9\u7f18\u751f\u4ea7\u73af\u5883\u8ddd\u79bb\u8f83\u8fd1\uff0c\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u8fd0\u884c\u8fb9\u7f18\u4e1a\u52a1\u5bb9\u5668\u3002\u8282\u70b9Label: openyurt.io/is-edge-worker: true"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",children:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefKube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf"}),"\n",(0,l.jsx)(n.p,{children:"Edge Node\u4e0a\u7684Kubelet, kube-proxy, Flannel\u4ee5\u53ca\u5176\u4ed6\u4e91\u539f\u751f\u7ec4\u4ef6\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u6d41\u91cf\u90fd\u4f1a\u7ecf\u8fc7YurtHub\u7ec4\u4ef6\uff0c\u540c\u65f6YurtHub\u7ec4\u4ef6\u4f1a\u5728\u672c\u673a\u78c1\u76d8\u4e0a\u7f13\u5b58\u4e91\u7aef\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5f53\u4e91\u8fb9\u7f51\u7edc\u5f02\u5e38\u65f6YurtHub\u5c06\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u6570\u636e\u6765\u6062\u590d\u8fb9\u7f18\u4e1a\u52a1\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u4e91\u8fb9\u6570\u636e\u9762\u6d41\u91cf",children:"\u4e91\u8fb9\u6570\u636e\u9762\u6d41\u91cf"}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u4e8e\u8fb9\u7f18\u4fa7\u8282\u70b9\u7684\u7f51\u7edc\u533a\u57df\u4e0e\u4e91\u4e0a\u7f51\u7edc\u57df\u4e0d\u5728\u4e00\u4e2a\u7f51\u7edc\u5e73\u9762\u5185\uff0c\u5e76\u4e14\u8fb9\u7f18\u8282\u70b9\u4e00\u822c\u4e0d\u66b4\u6f0f\u5728\u516c\u7f51\u4e0a\uff0c\u4e3a\u4e86\u5b9e\u73b0\u4e91\u4e0e\u8fb9\u3001\u8fb9\u4e0e\u8fb9\u7684\u7f51\u7edc\u901a\u4fe1\uff0cRaven\u7ec4\u4ef6\u901a\u8fc7\u6784\u5efaVPN\u7684\u65b9\u5f0f\u6253\u901a\u4e91\u8fb9\u4e3b\u673a\u7f51\u7edc\u4e0e\u5bb9\u5668\u7f51\u7edc\uff0c\u8fd9\u4e9b\u4e91\u8fb9\u7684\u6570\u636e\u9762\u6d41\u91cf\u5c06\u4ece\u901a\u8fc7Raven Agent\u5b9e\u73b0\u4e92\u8bbf\u4e92\u901a\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"openyurt\u7ec4\u4ef6\u4ecb\u7ecd",children:"OpenYurt\u7ec4\u4ef6\u4ecb\u7ecd"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"YurtHub:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8282\u70b9\u7ef4\u5ea6\u7684SideCar\uff0c\u8282\u70b9\u4e0a\u7ec4\u4ef6\u548ckube-apiserver\u4e4b\u95f4\u7684\u6d41\u91cf\u4ee3\u7406\uff0c\u6709\u8fb9\u7f18(edge)\u548c\u4e91\u7aef(cloud)\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f\u3002\u5176\u4e2d\u8fb9\u7f18YurtHub\u4f1a\u7f13\u5b58\u4e91\u7aef\u8fd4\u56de\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1a\u4ee5Static Pod\u5f62\u6001\u8fd0\u884c\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Raven:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6784\u5efa\u4e91\u8fb9VPN\u8bbf\u95ee\u901a\u9053\uff0c\u5b9e\u73b0\u4e91\u8fb9\u3001\u8fb9\u8fb9\u7f51\u7edc\u4e92\u901a\uff0c\u5176\u4e2dRavenControllerManager\u7ec4\u4ef6\u534f\u8c03Gateway\u8282\u70b9,\u4ee5\u53caRavenAgent\u7ec4\u4ef6\u8d1f\u8d23\u6784\u5efaVPN\u4ee5\u53ca\u8def\u7531\u7ba1\u7406\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1aRavenControllerManager\u4ee5Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u6216Master Node\u4e0a\uff0cRaven Agent\u4ee5DaemonSet\u90e8\u7f72\u5728\u6240\u6709\u8282\u70b9\u4e0a\u3002"}),"\n",(0,l.jsx)(n.li,{}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"YurtControllerManager\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e2d\u5fc3\u7684\u63a7\u5236\u5668\uff0c\u76ee\u524d\u5305\u62ecNodeLifeCycle Controller(\u4e0d\u9a71\u9010\u81ea\u6cbb\u8282\u70b9\u4e0a\u7684Pod)\uff0cYurtCSRController(\u7528\u4e8eApprove\u8fb9\u7f18\u7684\u8bc1\u4e66\u7533\u8bf7)"}),"\n",(0,l.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1aDeployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"YurtAppManager:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8de8\u5730\u57df\u7684\u8d44\u6e90\u53ca\u4e1a\u52a1\u8d1f\u8f7d\u7ba1\u7406\u5668\uff0c\u76ee\u524d\u5305\u62ecNodePool(\u8282\u70b9\u6c60\u7ba1\u7406)\uff0cYurtAppSet(\u4e4b\u524d\u540d\u4e3aUnitedDeployment)(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684\u4e1a\u52a1\u8d1f\u8f7d\u7ba1\u7406)\uff0cYurtAppDaemon(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684Daemonset), YurtIngress(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684Ingress Controller\u7ba1\u7406\u5668)"}),"\n",(0,l.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1a Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"YurtDeviceController/YurtEdgeXManager:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7528\u4e8e\u8fb9\u7f18IOT\u89e3\u51b3\u65b9\u6848\u7684\u975e\u4fb5\u5165\u878d\u5408\uff0c\u901a\u8fc7\u4e91\u539f\u751f\u6a21\u5f0f\u7ba1\u63a7\u8fb9\u7f18\u8bbe\u5907\u3002\u76ee\u524dEdgeX Foundry\u5df2\u7ecf\u65e0\u7f1d\u96c6\u6210\u5230OpenYurt\u67b6\u6784\u4e2d\u3002"}),"\n",(0,l.jsx)(n.li,{children:"YurtEdgeXManager\u4ee5Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a\uff0cYurtDeviceController\u4ee5YurtAppSet(\u4e4b\u524d\u540d\u4e3aUnitedDeployment)\u5f62\u6001\u90e8\u7f72\u5728Edge Node\u4e0a\uff0c\u6bcf\u4e2aNodePool\u4e0a\u90e8\u7f72\u4e00\u5957YurtDeviceController\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Pool-Coordinator:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u8282\u70b9\u6c60\u5185\u63d0\u4f9bKV\u6570\u636e\u5b58\u50a8(\u4ec5\u5b58\u50a8\u5728\u5185\u5b58\u4e2d)\u548c\u5206\u5e03\u5f0f\u9501\u7b49\u80fd\u529b\uff0c\u4f9bYurtHub\u9009\u4e3e\u4ea7\u751fLeader\uff0c\u4ece\u800c\u5b9e\u73b0\u5fc3\u8df3\u4ee3\u7406\uff0c\u4e91\u8fb9\u6d41\u91cf\u590d\u7528\uff0c\u8282\u70b9\u6c60\u5185\u8fd0\u7ef4\u76d1\u63a7\u7b49\u80fd\u529b\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4ee5YurtAppDaemon\u5f62\u6001\u90e8\u7f72\uff0c\u4f1a\u786e\u4fdd\u6bcf\u4e2a\u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\u6709\u4e00\u4e2a\u5b9e\u4f8b\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},71645:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/arch-2c77ff23e9b7f4fe4956fe22700f5c0c.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);