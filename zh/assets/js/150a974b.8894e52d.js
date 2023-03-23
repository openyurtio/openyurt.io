"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),s=a,y=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"yurtadm"},i=void 0,u={unversionedId:"faq/yurtadm",id:"faq/yurtadm",title:"yurtadm",description:"1. yurtadm join \u62a5\u9519\uff1acrictl not found in system path",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/yurtadm.md",sourceDirName:"faq",slug:"/faq/yurtadm",permalink:"/zh/docs/next/faq/yurtadm",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurtadm.md",tags:[],version:"current",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1679553864,formattedLastUpdatedAt:"2023\u5e743\u670823\u65e5",frontMatter:{title:"yurtadm"},sidebar:"docs",previous:{title:"yurthub",permalink:"/zh/docs/next/faq/yurthub"},next:{title:"yurt-tunnel",permalink:"/zh/docs/next/faq/yurt-tunnel"}},p={},l=[],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. yurtadm join \u62a5\u9519\uff1acrictl not found in system path")),(0,a.kt)("p",null,"\u8282\u70b9\u6ca1\u6709\u5b89\u88c5\u597dcontainer runtime(\u5982docker)\uff0c\u8282\u70b9\u63a5\u5165\u524d\u8bf7\u5148\u81ea\u884c\u5b89\u88c5\u597dcontainer runtime\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. yurtadm join \u62a5\u9519\uff1a","[ERROR FileExisting-conntrack]",": conntrack not found in system path")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"yum install -y conntrack")," \u7136\u540e\u91cd\u65b0\u6267\u884c yurtadm join \u547d\u4ee4\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. yurtadm join\u5982\u4f55\u652f\u6301\u7528\u6237\u63d0\u4f9b\u7684cni\u63d2\u4ef6")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm join"),"\u9ed8\u8ba4\u4f1a\u62c9\u53d6\u7ecf\u8fc7\u7279\u6b8a\u4fee\u6539\u7684cni\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4fee\u6539\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/user-manuals/network/edge-pod-network"},"\u94fe\u63a5"),"\u3002\u5982\u679c\u4f60\u60f3\u8981\u4f7f\u7528\u9884\u5148\u51c6\u5907\u597d\u7684cni\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e94\u8be5\u5c06\u5b83\u4eec\u653e\u7f6e\u5728\u76ee\u5f55",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/cni/bin"),"\u4e0b\uff0c\u63a5\u7740\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm join"),"\u65f6\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"--reuse-cni-bin=true"),"\u53c2\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. yurtadm join\u5982\u4f55\u652f\u6301\u7528\u6237\u63d0\u4f9b\u7684kubelet/kubeadm\u7b49\u7ec4\u4ef6")),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"kubeadm"),"\u7ec4\u4ef6\u63d0\u524d\u9884\u7f6e\u5728PATH\u73af\u5883\u53d8\u91cf\u4e2d\u3002\u4e0d\u8fc7\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"kubeadm"),"\u7684\u7248\u672c\u6709\u4e00\u4e9b\u9650\u5236\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm"),"\u4f1a\u68c0\u67e5\u7ec4\u4ef6\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"major version"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"minor version"),"\u662f\u5426\u4e0e\u96c6\u7fa4Kubernetes Server\u7248\u672c\u76f8\u540c(\u8fd9\u9075\u5faasemver\u89c4\u8303)\uff0c\u5982\u4f55\u7248\u672c\u4e0d\u4e00\u81f4\uff0cyurtadm\u4f1a\u6839\u636eKubernetes Server\u7248\u672c\u4ece\u5b98\u65b9\u94fe\u63a5\u4e2d\u62c9\u53d6kubelet/kubeadm\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. yurtadm join\u63a5\u5165\u8282\u70b9\u5931\u8d25\uff0c\u5982\u4f55\u89e3\u51b3")),(0,a.kt)("p",null,"\u9996\u5148\u53ef\u4ee5\u5206\u6790yurtadm join\u7684\u9519\u8bef\u65e5\u5fd7\uff0c\u5b9a\u4f4d\u662f\u5728\u54ea\u4e2a\u9636\u6bb5\u51fa\u9519\u3002\u5982\u679c\u548cyurthub\u7ec4\u4ef6\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/faq/yurthub"},"yurthub faq")))}m.isMDXComponent=!0}}]);