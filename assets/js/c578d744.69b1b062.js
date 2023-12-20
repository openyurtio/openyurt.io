"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7539],{93099:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(85893),l=r(11151);const i={title:"Architecture"},s=void 0,o={id:"core-concepts/architecture",title:"Architecture",description:"OpenYurt\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:",source:"@site/versioned_docs/version-v0.5.0/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/v0.5.0/core-concepts/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1703110234,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Architecture"},sidebar:"docs",previous:{title:"Manually Setup",permalink:"/docs/v0.5.0/installation/manually-setup"},next:{title:"YurtHub",permalink:"/docs/v0.5.0/core-concepts/yurthub"}},c={},d=[{value:"\u8282\u70b9\u5206\u7c7b",id:"\u8282\u70b9\u5206\u7c7b",level:3},{value:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefKube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",id:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",level:3},{value:"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf",id:"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf",level:3},{value:"OpenYurt\u7ec4\u4ef6\u4ecb\u7ecd",id:"openyurt\u7ec4\u4ef6\u4ecb\u7ecd",level:3}];function u(e){const n={h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"OpenYurt\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:r(62857).Z+"",width:"2160",height:"1215"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\u84dd\u8272\u6846\u4e3a\u539f\u751fKubernetes\u7ec4\u4ef6\uff0c\u6a59\u8272\u6846\u4e2d\u7ec4\u4ef6\u4e3aOpenYurt\u7ec4\u4ef6\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u8282\u70b9\u5206\u7c7b",children:"\u8282\u70b9\u5206\u7c7b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cloud Node\uff1a\u901a\u8fc7\u5185\u7f51\u4e0eKubernetes Master\u8fde\u63a5\uff0c\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u8fd0\u884c\u4e2d\u5fc3\u63a7\u5236\u7ec4\u4ef6\u3002\u8282\u70b9Label: openyurt.io/is-edge-worker: false"}),"\n",(0,t.jsx)(n.li,{children:"Edge Node\uff1a\u901a\u8fc7\u516c\u7f51\u4e0eKubernetes Master\u8fde\u63a5\uff0c\u4e00\u822c\u548c\u8fb9\u7f18\u751f\u4ea7\u73af\u5883\u8ddd\u79bb\u8f83\u8fd1\uff0c\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u8fd0\u884c\u8fb9\u7f18\u4e1a\u52a1\u5bb9\u5668\u3002\u8282\u70b9Label: openyurt.io/is-edge-worker: true"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",children:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefKube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"Edge Node\u4e0a\u7684Kubelet, kube-proxy, Flannel\u4ee5\u53ca\u5176\u4ed6\u4e91\u539f\u751f\u7ec4\u4ef6\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u6d41\u91cf\u90fd\u4f1a\u7ecf\u8fc7YurtHub\u7ec4\u4ef6\uff0c\u540c\u65f6YurtHub\u7ec4\u4ef6\u4f1a\u5728\u672c\u673a\u78c1\u76d8\u4e0a\u7f13\u5b58\u4e91\u7aef\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5f53\u4e91\u8fb9\u7f51\u7edc\u5f02\u5e38\u65f6YurtHub\u5c06\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u6570\u636e\u6765\u6062\u590d\u8fb9\u7f18\u4e1a\u52a1\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf",children:"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u8fb9\u7f18\u8282\u70b9\u4e00\u822c\u4e0d\u66b4\u9732\u5728\u516c\u7f51\u4e0a\uff0c\u4e3a\u4e86\u4ece\u4e91\u7aef\u5411\u8fb9\u7f18\u4e0b\u53d1\u8fd0\u7ef4\u6307\u4ee4\u65f6(\u5982kubectl exec\u5f80\u8fb9\u7f18\u5bb9\u5668\u4e0b\u53d1\u547d\u4ee4)\uff0c\u6216\u8005\u6536\u96c6\u8fb9\u7f18\u8fd0\u884c\u6570\u636e(\u5982prometheus\u62c9\u53d6\u8fb9\u7f18kubelet\u7684metrics)\u65f6\uff0c\u8fd9\u4e9b\u8fd0\u7ef4\u6d41\u91cf\u5c06\u4f1a\u7ecf\u8fc7YurtTunnel Agent\u548cYurtTunnel Server\u6784\u5efa\u7684\u53cc\u5411\u8ba4\u8bc1\u7684\u5b89\u5168\u53cd\u5411\u96a7\u9053\uff0c\u6700\u540e\u7531YurtTunnel Agent\u8f6c\u53d1\u5230\u76ee\u6807\u8fb9\u7f18\u8282\u70b9\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"openyurt\u7ec4\u4ef6\u4ecb\u7ecd",children:"OpenYurt\u7ec4\u4ef6\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtHub:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8282\u70b9\u7ef4\u5ea6\u7684SideCar\uff0c\u8282\u70b9\u4e0a\u7ec4\u4ef6\u548ckube-apiserver\u4e4b\u95f4\u7684\u6d41\u91cf\u4ee3\u7406\uff0c\u6709\u8fb9\u7f18(edge)\u548c\u4e91\u7aef(cloud)\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f\u3002\u5176\u4e2d\u8fb9\u7f18YurtHub\u4f1a\u7f13\u5b58\u4e91\u7aef\u8fd4\u56de\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1a\u4ee5Static Pod\u5f62\u6001\u8fd0\u884c\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtControllerManager\uff1a"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e2d\u5fc3\u7684\u63a7\u5236\u5668\uff0c\u76ee\u524d\u5305\u62ecNodeLifeCycle Controller(\u4e0d\u9a71\u9010\u81ea\u6cbb\u8282\u70b9\u4e0a\u7684Pod)\uff0cYurtCSRController(\u7528\u4e8eApprove\u8fb9\u7f18\u7684\u8bc1\u4e66\u7533\u8bf7)"}),"\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1aDeployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtAppManager:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8de8\u5730\u57df\u7684\u8d44\u6e90\u53ca\u4e1a\u52a1\u8d1f\u8f7d\u7ba1\u7406\u5668\uff0c\u76ee\u524d\u5305\u62ecNodePool(\u8282\u70b9\u6c60\u7ba1\u7406)\uff0cYurtAppSet(\u4e4b\u524d\u53ebUnitedDeployment)(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684\u4e1a\u52a1\u8d1f\u8f7d\u7ba1\u7406)\uff0cYurtAppDaemon(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684Daemonset)"}),"\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1a Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtTunnel(Server/Agent):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6784\u5efa\u53cc\u5411\u8ba4\u8bc1\u52a0\u5bc6\u7684\u4e91\u8fb9\u53cd\u5411\u96a7\u9053\uff0c\u7528\u4e8e\u8f6c\u53d1\u4e91\u7aef\u5230\u8fb9\u7f18\u7684\u8fd0\u7ef4\u76d1\u63a7\u6d41\u91cf\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72\u5f62\u6001\uff1aYurtTunnel Server\u4ee5Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a\uff0cYurtTunnel Agent\u4ee5DaemonSet\u90e8\u7f72\u5728Edge Node\u4e0a"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"YurtDeviceController/YurtEdgeXManager:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7528\u4e8e\u8fb9\u7f18IOT\u89e3\u51b3\u65b9\u6848\u7684\u975e\u4fb5\u5165\u878d\u5408\uff0c\u901a\u8fc7\u4e91\u539f\u751f\u6a21\u5f0f\u7ba1\u63a7\u8fb9\u7f18\u8bbe\u5907\u3002\u76ee\u524dEdgeX Foundry\u5df2\u7ecf\u65e0\u7f1d\u96c6\u6210\u5230OpenYurt\u67b6\u6784\u4e2d\u3002"}),"\n",(0,t.jsx)(n.li,{children:"YurtEdgeXManager\u4ee5Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a\uff0cYurtDeviceController\u4ee5YurtAppSet(\u4e4b\u524d\u53ebUnitedDeployment)\u5f62\u6001\u90e8\u7f72\u5728Edge Node\u4e0a\uff0c\u6bcf\u4e2aNodePool\u4e0a\u90e8\u7f72\u4e00\u5957YurtDeviceController\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NodeResourceManager:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u7ba1\u7406 OpenYurt \u96c6\u7fa4\u672c\u5730\u8d44\u6e90\u7684\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u96c6\u7fa4\u5185 ConfigMap \u7684\u5b9a\u4e49\u6765\u52a8\u6001\u914d\u7f6e\u96c6\u7fa4\u5185\u5bbf\u4e3b\u673a\u4e0a\u7684\u672c\u5730\u8d44\u6e90\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4ee5DaemonSet\u5f62\u6001\u90e8\u7f72\u5728Edge Node\u4e0a"}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},62857:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/arch-c77d77c2f6bb73dc301f2d11f26ef79e.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(67294);const l={},i=t.createContext(l);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);