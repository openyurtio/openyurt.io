"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3950],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=l(n),y=a,f=g["".concat(p,".").concat(y)]||g[y]||s[y]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var r=n(87462),a=(n(67294),n(3905));const o={slug:"Play-with-OpenYurt-on-Raspberry-Pi",title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",authors:["zyjhtangtang"],tags:["openyurt"]},i=void 0,u={permalink:"/blog/Play-with-OpenYurt-on-Raspberry-Pi",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2021-01-05-Play-with-OpenYurt-on-Raspberry-Pi.md",source:"@site/blog/2021-01-05-Play-with-OpenYurt-on-Raspberry-Pi.md",title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",description:"image",date:"2021-01-05T00:00:00.000Z",formattedDate:"January 5, 2021",tags:[{label:"openyurt",permalink:"/blog/tags/openyurt"}],readingTime:17.82,hasTruncateMarker:!0,authors:[{name:"zyjhtangtang",title:"Member of OpenYurt",url:"https://github.com/zyjhtangtang",imageURL:"https://github.com/zyjhtangtang.png",key:"zyjhtangtang"}],frontMatter:{slug:"Play-with-OpenYurt-on-Raspberry-Pi",title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",authors:["zyjhtangtang"],tags:["openyurt"]},prevItem:{title:"Elegant realization of edge gateway caching capabilities",permalink:"/blog/Edge-gateway-caching-capabilities"},nextItem:{title:"How to build Kubernetes Native Cloud side efficient collaborative network",permalink:"/blog/Build-side-efficient-collaborative-network"}},p={authorsImageUrls:[void 0]},l=[],c={toc:l};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(16838).Z,width:"960",height:"539"})),(0,a.kt)("p",null,"\u968f\u7740\u8fb9\u7f18\u8ba1\u7b97\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u6570\u636e\u9700\u8981\u5230\u7f51\u7edc\u7684\u8fb9\u7f18\u4fa7\u8fdb\u884c\u5b58\u50a8\u3001\u5904\u7406\u548c\u5206\u6790\uff0c\u8fb9\u7f18\u7684\u8bbe\u5907\u548c\u5e94\u7528\u5448\u7206\u53d1\u5f0f\u589e\u957f\u3002\u5982\u4f55\u9ad8\u6548\u7684\u7ba1\u7406\u8fb9\u7f18\u4fa7\u7684\u8d44\u6e90\u548c\u5e94\u7528\u662f\u4e1a\u754c\u9762\u4e34\u7684\u4e00\u4e2a\u4e3b\u8981\u95ee\u9898\u3002\u5f53\u524d\uff0c\u91c7\u7528\u4e91\u539f\u751f\u7684\u65b9\u6cd5\uff0c\u5c06\u4e91\u8ba1\u7b97\u7684\u80fd\u529b\u4e0b\u6c89\u5230\u8fb9\u7f18\u5e76\u5728\u4e91\u7aef\u505a\u7edf\u4e00\u8c03\u5ea6\u3001\u7ba1\u63a7\u7684\u4e91\u8fb9\u7aef\u4e00\u4f53\u5316\u67b6\u6784\u5f97\u5230\u4e86\u4e1a\u754c\u7684\u5e7f\u6cdb\u8ba4\u53ef\u3002"),(0,a.kt)("p",null,"2020 \u5e74 5 \u6708\uff0c\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u9996\u4e2a Kubernetes \u65e0\u4fb5\u5165\u7684\u8fb9\u7f18\u8ba1\u7b97\u4e91\u539f\u751f\u9879\u76ee OpenYurt\uff0c\u5e76\u4e8e\u540c\u5e74 9 \u6708\u4efd\u8fdb\u5165 CNCF SandBox\u3002OpenYurt \u9488\u5bf9\u8fb9\u7f18\u573a\u666f\u4e2d\u7f51\u7edc\u4e0d\u7a33\u5b9a\u3001\u4e91\u8fb9\u8fd0\u7ef4\u56f0\u96be\u7b49\u95ee\u9898\uff0c\u5bf9\u539f\u751f Kubernetes \u65e0\u4fb5\u5165\u5730\u589e\u5f3a\uff0c\u91cd\u70b9\u63d0\u4f9b\u4e86\u8fb9\u7f18\u8282\u70b9\u81ea\u6cbb\u3001\u4e91\u8fb9\u8fd0\u7ef4\u901a\u9053\u3001\u8fb9\u7f18\u5355\u5143\u5316\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u5982\u56fe\u4e0b\u6240\u793a\uff0c\n",(0,a.kt)("img",{alt:"image",src:n(56639).Z,width:"1080",height:"531"})),(0,a.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u5728\u4e91\u7aef\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u7684\u63a7\u5236\u9762\uff0c\u5e76\u5c06\u6811\u8393\u6d3e\u63a5\u5165\u96c6\u7fa4\u6765\u642d\u5efa\u4e91\u7ba1\u8fb9\u573a\u666f\u3002\u57fa\u4e8e\u8fd9\u4e2a\u73af\u5883\u6f14\u793a OpenYurt \u7684\u6838\u5fc3\u80fd\u529b\uff0c\u5e26\u5927\u5bb6\u5feb\u901f\u4e0a\u624b OpenYurt\u3002"))}s.isMDXComponent=!0},16838:function(e,t,n){t.Z=n.p+"assets/images/Raspberry_Pi-0d62d9c9627727b87279383f61ae8222.png"},56639:function(e,t,n){t.Z=n.p+"assets/images/kubernetes-324e5f10b1e66083e02453040890714b.png"}}]);