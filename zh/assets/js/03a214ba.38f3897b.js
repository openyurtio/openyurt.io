"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d"},u=void 0,i={unversionedId:"user-manuals/autonomy/selfhealing-during-network-disconnection",id:"user-manuals/autonomy/selfhealing-during-network-disconnection",title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d",description:"\u4f7f\u7528\u573a\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/autonomy/selfhealing-during-network-disconnection.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/selfhealing-during-network-disconnection",permalink:"/zh/docs/next/user-manuals/autonomy/selfhealing-during-network-disconnection",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/selfhealing-during-network-disconnection.md",tags:[],version:"current",lastUpdatedBy:"lu chen",lastUpdatedAt:1678177474,formattedLastUpdatedAt:"2023\u5e743\u67087\u65e5",frontMatter:{title:"\u65ad\u7f51\u4e1a\u52a1\u91cd\u542f\u6062\u590d"},sidebar:"docs",previous:{title:"YurtCoordinator",permalink:"/zh/docs/next/core-concepts/yurt-coordinator"},next:{title:"\u65ad\u7f51\u8282\u70b9\u5fc3\u8df3\u4ee3\u7406",permalink:"/zh/docs/next/user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes"}},l={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u67b6\u6784\u4e0e\u539f\u7406",id:"\u67b6\u6784\u4e0e\u539f\u7406",level:2},{value:"\u5f00\u542f\u65b9\u6cd5",id:"\u5f00\u542f\u65b9\u6cd5",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,o.kt)("p",null,"\u5728\u539f\u751fKubernetes\u67b6\u6784\u4e0b\uff0cSlave Agent(Kubelet) \u7684\u5bb9\u5668\u4fe1\u606f\u90fd\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u800c\u65ad\u7f51\u72b6\u6001\u4e0b\u53c8\u65e0\u6cd5\u4ece\u4e91\u7aef\u83b7\u53d6\u4e1a\u52a1\u6570\u636e\uff0c\u5982\u679c\u6b64\u65f6\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u8fb9\u7f18\u8282\u70b9\u7684Kubelet\u53d1\u751f\u5f02\u5e38\u91cd\u542f\uff0c\u5b83\u4eec\u5c06\u65e0\u6cd5\u8fdb\u884c\u4e1a\u52a1\u5bb9\u5668\u6062\u590d\u3002"),(0,o.kt)("h2",{id:"\u67b6\u6784\u4e0e\u539f\u7406"},"\u67b6\u6784\u4e0e\u539f\u7406"),(0,o.kt)("p",null,"OpenYurt\u5728\u8fb9\u7f18\u6d4b\u5f15\u5165\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\u2014\u2014",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/core-concepts/yurthub"},"YurtHub"),"\u3002YurtHub\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u63d0\u4f9b web \u7f13\u5b58\u53ca\u8bf7\u6c42\u4ee3\u7406\u7684\u7684\u80fd\u529b\uff0c\u8282\u70b9\u4e0a\u7cfb\u7edf\u7ec4\u4ef6(\u5982kubelet)\u4ee5\u53ca\u4e1a\u52a1\u5bb9\u5668\u548c\u4e91\u7aef\u901a\u4fe1\u90fd\u5c06\u7ecf\u7531\u8be5\u7ec4\u4ef6\u4ee3\u7406\u3002\u65ad\u7f51\u60c5\u51b5\u4e0b\uff0c\u8fb9\u7f18\u6709\u4efb\u52a1\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u7f13\u5b58\u4e0d\u4f9d\u8d56\u4e91\u7aef\u6570\u636e\u6062\u590d\u3002"),(0,o.kt)("h2",{id:"\u5f00\u542f\u65b9\u6cd5"},"\u5f00\u542f\u65b9\u6cd5"),(0,o.kt)("p",null,"\u65ad\u7f51\u81ea\u6108\u529f\u80fd\u7531YurtHub\u7ec4\u4ef6\u63d0\u4f9b\uff0c\u6240\u6709\u5b89\u88c5\u4e86YurtHub\uff08Edge mode\uff09\u7684\u8282\u70b9\u90fd\u81ea\u52a8\u652f\u6301\u8be5\u80fd\u529b\u3002\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/installation/yurtadm-join"},(0,o.kt)("inlineCode",{parentName:"a"},"yurtadm"),"\u63a5\u5165\u7684\u8282\u70b9"),"\u5c06\u81ea\u52a8\u51c6\u5907\u597dYurtHub\uff0c\u5426\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5YurtHub\u7ec4\u4ef6\u3002"))}p.isMDXComponent=!0}}]);