"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1441],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(y,u(u({ref:t},p),{},{components:n})):r.createElement(y,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u8282\u70b9\u81ea\u6cbb"},u=void 0,l={unversionedId:"user-manuals/autonomy/node-autonomy",id:"version-v1.0/user-manuals/autonomy/node-autonomy",title:"\u8282\u70b9\u81ea\u6cbb",description:"1. \u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/user-manuals/autonomy/node-autonomy.md",sourceDirName:"user-manuals/autonomy",slug:"/user-manuals/autonomy/node-autonomy",permalink:"/zh/docs/user-manuals/autonomy/node-autonomy",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/autonomy/node-autonomy.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"2022\u5e749\u67086\u65e5",frontMatter:{title:"\u8282\u70b9\u81ea\u6cbb"},sidebar:"version-v1.0/docs",previous:{title:"YurtDeviceController",permalink:"/zh/docs/core-concepts/yurt-device-controller"},next:{title:"Raven",permalink:"/zh/docs/user-manuals/network/raven"}},i={},c=[{value:"1. \u80cc\u666f\u8bf4\u660e",id:"1-\u80cc\u666f\u8bf4\u660e",level:2},{value:"2. \u529f\u80fd\u4f7f\u7528",id:"2-\u529f\u80fd\u4f7f\u7528",level:2},{value:"3. \u6ce8\u610f\u4e8b\u9879",id:"3-\u6ce8\u610f\u4e8b\u9879",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u80cc\u666f\u8bf4\u660e"},"1. \u80cc\u666f\u8bf4\u660e"),(0,o.kt)("p",null,"\u8282\u70b9\u81ea\u6cbb\u4f7f\u5f97\u5728\u4e91\u8fb9\u7f51\u7edc\u4e0d\u7a33\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0c\u8fb9\u7f18\u4e1a\u52a1\u53ef\u4ee5\u7a33\u5b9a\u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"\u5728 OpenYurt \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\uff0c\u4fdd\u8bc1\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u65f6\uff0c\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u4e1a\u52a1\u5bb9\u5668\u53ef\u4ee5\u6301\u7eed\u5de5\u4f5c\u800c\u4e0d\u88ab\u91cd\u65b0\u8c03\u5ea6\uff0c\u6216\u8005\u5728\u5bb9\u5668\u91cd\u542f\u3001\u8fb9\u7f18\u8282\u70b9\u91cd\u542f\u65f6\uff0c\u4e1a\u52a1\u5bb9\u5668\u53ef\u4ee5\u81ea\u52a8\u6062\u590d\u3002"),(0,o.kt)("h2",{id:"2-\u529f\u80fd\u4f7f\u7528"},"2. \u529f\u80fd\u4f7f\u7528"),(0,o.kt)("p",null,"\u5728 OpenYurt \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5f00\u542f/\u5173\u95ed\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u624b\u52a8\u4fee\u6539\u8282\u70b9 Annotation"))),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7ed9 Node \u6dfb\u52a0 Annotation\uff0c\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# node1 \u5f00\u542f\u8282\u70b9\u81ea\u6cbb\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy=true\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7684\u547d\u4ee4\uff0c\u5173\u95ed\u8282\u70b9\u81ea\u6cbb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u901a\u8fc7\u5220\u9664 annotation \u5173\u95ed\u8282\u70b9\u81ea\u6cbb\nkubectl annotate nodes node1 node.beta.openyurt.io/autonomy-\n\n# \u901a\u8fc7\u4fee\u6539 node.beta.openyurt.io/autonomy \u503c\u4e3a false \u5173\u95ed\u8282\u70b9\u81ea\u6cbb\nkubectl annotate --overwrite nodes node1 node.beta.openyurt.io/autonomy=false\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f7f\u7528 Yurtctl \u5f00\u542f/\u5173\u95ed\u8282\u70b9\u81ea\u6cbb"))),(0,o.kt)("p",null,"\u7528\u6237\u672c\u5730\u7f16\u8bd1 Yurtctl \u53ef\u6267\u884c\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 Yurtctl \u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# node1, node2 \u5f00\u542f\u8282\u70b9\u81ea\u6cbb\nyurtctl markautonomous -a node1,node2\n\n# \u6240\u6709\u8fb9\u7f18\u8282\u70b9\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\nyurtctl markautonomous\n")),(0,o.kt)("h2",{id:"3-\u6ce8\u610f\u4e8b\u9879"},"3. \u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fb9\u7f18\u8282\u70b9\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u540e\uff0c\u65e0\u8bba\u662f\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u5bfc\u81f4\u7684\u8282\u70b9NotReady\uff0c\u8fd8\u662f\u672c\u8eab\u8282\u70b9\u6545\u969c\u5bfc\u81f4\u7684\u8282\u70b9NotReady\uff0c\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u4e1a\u52a1Pod\u90fd\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e91\u7aef\u8282\u70b9\u4e0d\u5efa\u8bae\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u3002\u5982\u679c\u4e91\u7aef\u8282\u70b9\u5f00\u542f\u4e86\u8282\u70b9\u81ea\u6cbb\uff0c\u8282\u70b9\u4e3a\u975e Ready \u72b6\u6001\u65f6\uff0c\u5176\u4e1a\u52a1\u5bb9\u5668\u4e0d\u4f1a\u88ab\u9a71\u9010\u5e76\u91cd\u65b0\u8c03\u5ea6\u3002")))}s.isMDXComponent=!0}}]);