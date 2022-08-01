"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6711],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=u,g=s["".concat(o,".").concat(m)]||s[m]||b[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:u,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(3117),u=(n(7294),n(3905));const a={slug:"YurtHub-design-detail",title:"YurtHub Design Detail:edge autonomy of OpenYurt",authors:["rambohe-ch"],tags:["yurthub"]},l=void 0,i={permalink:"/blog/YurtHub-design-detail",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2020-06-18-YurtHub-design-detail.md",source:"@site/blog/2020-06-18-YurtHub-design-detail.md",title:"YurtHub Design Detail:edge autonomy of OpenYurt",description:"image",date:"2020-06-18T00:00:00.000Z",formattedDate:"June 18, 2020",tags:[{label:"yurthub",permalink:"/blog/tags/yurthub"}],readingTime:6.02,hasTruncateMarker:!0,authors:[{name:"rambohe",title:"Maintainer of OpenYurt",url:"https://github.com/rambohe-ch",imageURL:"https://github.com/rambohe-ch.png",key:"rambohe-ch"}],frontMatter:{slug:"YurtHub-design-detail",title:"YurtHub Design Detail:edge autonomy of OpenYurt",authors:["rambohe-ch"],tags:["yurthub"]},prevItem:{title:"Viewing Expansion Ability of YurtHub from Edge Autonomy",permalink:"/blog/Expansion-capability-of-Yurthub"},nextItem:{title:"Yurtctl:make the native k8s cluster achieve edge computing capabilities",permalink:"/blog/Use-of-yurtctl"}},o={authorsImageUrls:[void 0]},p=[{value:"\u8fb9\u7f18\u81ea\u6cbb\u7279\u6027",id:"\u8fb9\u7f18\u81ea\u6cbb\u7279\u6027",level:2},{value:"1\uff09\u7279\u6027\u4ecb\u7ecd",id:"1\u7279\u6027\u4ecb\u7ecd",level:3},{value:"2\uff09\u8fb9\u7f18\u81ea\u6cbb\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898",id:"2\u8fb9\u7f18\u81ea\u6cbb\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68481",id:"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68481",level:4},{value:"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68482\uff08OpenYurt\u4f7f\u7528\u65b9\u6848\uff09",id:"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68482openyurt\u4f7f\u7528\u65b9\u6848",level:4},{value:"\u95ee\u98982\u7684\u89e3\u51b3\u65b9\u6848",id:"\u95ee\u98982\u7684\u89e3\u51b3\u65b9\u6848",level:4},{value:"\u95ee\u98983\u7684\u89e3\u51b3\u65b9\u6848",id:"\u95ee\u98983\u7684\u89e3\u51b3\u65b9\u6848",level:4}],c={toc:p};function b(e){let{components:t,...a}=e;return(0,u.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"image",src:n(3467).Z,width:"865",height:"203"})),(0,u.kt)("p",null,"\u5bfc\u8bfb\uff1aOpenYurt \u5f00\u6e90\u4e24\u5468\u4ee5\u6765\uff0c\u4ee5\u975e\u4fb5\u5165\u5f0f\u7684\u67b6\u6784\u8bbe\u8ba1\u878d\u5408\u4e91\u539f\u751f\u548c\u8fb9\u7f18\u8ba1\u7b97\u4e24\u5927\u9886\u57df\uff0c\u5f15\u8d77\u4e86\u4e0d\u5c11\u884c\u4e1a\u5185\u540c\u5b66\u7684\u5173\u6ce8\u3002\u963f\u91cc\u4e91\u63a8\u51fa\u5f00\u6e90\u9879\u76ee OpenYurt\uff0c\u4e00\u65b9\u9762\u662f\u628a\u963f\u91cc\u4e91\u5728\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u9886\u57df\u7684\u7ecf\u9a8c\u56de\u9988\u7ed9\u5f00\u6e90\u793e\u533a\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u5e0c\u671b\u52a0\u901f\u4e91\u8ba1\u7b97\u5411\u8fb9\u7f18\u5ef6\u4f38\u7684\u8fdb\u7a0b\uff0c\u5e76\u548c\u793e\u533a\u5171\u540c\u63a2\u8ba8\u672a\u6765\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u67b6\u6784\u7684\u7edf\u4e00\u6807\u51c6\u3002\n\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecdOpenYurt\u7684\u8fb9\u7f18\u81ea\u6cbb\u80fd\u529b\u7684\u8bbe\u8ba1\u7ec6\u8282\u3002"),(0,u.kt)("h2",{id:"\u8fb9\u7f18\u81ea\u6cbb\u7279\u6027"},"\u8fb9\u7f18\u81ea\u6cbb\u7279\u6027"),(0,u.kt)("h3",{id:"1\u7279\u6027\u4ecb\u7ecd"},"1\uff09\u7279\u6027\u4ecb\u7ecd"),(0,u.kt)("p",null,"\u5c06 Kubernetes \u7cfb\u7edf\u5ef6\u5c55\u5230\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\uff0c\u8fb9\u7f18\u8282\u70b9\u5c06\u901a\u8fc7\u516c\u7f51\u548c\u4e91\u7aef\u8fde\u63a5\uff0c\u4ece\u516c\u7f51\u7684\u4e0d\u7a33\u5b9a\u6027\u4ee5\u53ca\u6210\u672c\u7b49\u56e0\u7d20\u8003\u8651\uff0c\u8fb9\u7f18\u8981\u6c42\u65ad\u7f51\u72b6\u6001\u6216\u8005\u5f31\u7f51\u72b6\u6001\u4e0b\u8fb9\u7f18\u4e1a\u52a1\u53ef\u4ee5\u6301\u7eed\u8fd0\u884c\u3002\u6211\u4eec\u4ece Gartner \u7684\u8fb9\u7f18\u8ba1\u7b97\u62a5\u544a\u4e2d\u63d0\u5230\u7684\u8fb9\u7f18\u8ba1\u7b97\u8bc9\u6c42\u4e2d\uff0c\u8fb9\u7f18\u81ea\u6cbb\u4e5f\u662f\u4e3b\u8981\u8bc9\u6c42\u4e4b\u4e00\uff1a\n",(0,u.kt)("img",{alt:"image",src:n(1270).Z,width:"1080",height:"463"})),(0,u.kt)("p",null,"\u4ece Kubernetes \u7cfb\u7edf\u67b6\u6784\u6765\u770b\uff0c\u4e3b\u8981\u56e0\u4e3a Slave Agent(Kubelet) \u4e2d\u7684\u5bb9\u5668\u4fe1\u606f\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u65ad\u7f51\u72b6\u6001\u4e0b\u56e0\u4e3a\u65e0\u6cd5\u4ece\u4e91\u7aef\u83b7\u53d6\u4e1a\u52a1\u6570\u636e\uff0c\u5982\u679c\u8282\u70b9\u6216\u8005 Kubelet \u91cd\u542f\uff0c\u5c06\u65e0\u6cd5\u8fdb\u884c\u4e1a\u52a1\u5bb9\u5668\u6062\u590d\u3002\n",(0,u.kt)("img",{alt:"image",src:n(808).Z,width:"1080",height:"349"})),(0,u.kt)("h3",{id:"2\u8fb9\u7f18\u81ea\u6cbb\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898"},"2\uff09\u8fb9\u7f18\u81ea\u6cbb\u9700\u8981\u89e3\u51b3\u7684\u95ee\u9898"),(0,u.kt)("p",null,"\u56e0\u6b64\u8fb9\u7f18\u81ea\u6cbb\u5728Kubernetes\u7cfb\u7edf\u91cc\uff0c\u9700\u8981\u89e3\u51b3\u4e0b\u9762\u7684\u95ee\u9898\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u95ee\u9898 1\uff1a\u8282\u70b9\u5f02\u5e38\u6216\u91cd\u542f\u65f6\uff0c\u5185\u5b58\u6570\u636e\u4e22\u5931\uff0c\u7f51\u7edc\u65ad\u8fde\u65f6\u4e1a\u52a1\u5bb9\u5668\u65e0\u6cd5\u6062\u590d\uff1b")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u95ee\u9898 2\uff1a\u7f51\u7edc\u957f\u65f6\u95f4\u65ad\u8fde\uff0c\u4e91\u7aef\u63a7\u5236\u5668\u5bf9\u4e1a\u52a1\u5bb9\u5668\u8fdb\u884c\u9a71\u9010\uff1b")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u95ee\u9898 3\uff1a\u957f\u65f6\u95f4\u65ad\u8fde\u540e\u7f51\u7edc\u6062\u590d\u65f6\uff0c\u8fb9\u7f18\u548c\u4e91\u7aef\u6570\u636e\u7684\u4e00\u81f4\u6027\u4fdd\u969c\u3002"))),(0,u.kt)("h4",{id:"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68481"},"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68481"),(0,u.kt)("p",null,"\u91cd\u6784 kubelet \u7ec4\u4ef6\uff0c\u590d\u7528\u6216\u8005\u53c2\u8003 kubelet \u7684 checkpoint \u529f\u80fd\uff0c\u6301\u4e45\u5316\u5bb9\u5668\u4e1a\u52a1\u6570\u636e\u5230\u672c\u5730\u78c1\u76d8\uff0c\u7f51\u7edc\u65ad\u8fde\u72b6\u6001\u4e0b\u5229\u7528\u672c\u5730\u7f13\u5b58\u6570\u636e\u5b9e\u73b0\u4e1a\u52a1\u6062\u590d\u3002\n",(0,u.kt)("img",{alt:"image",src:n(4160).Z,width:"1080",height:"354"}),"\n\u8be5\u65b9\u6848\u7ecf\u8fc7\u91cd\u6784 kubelet\uff0c\u6210\u529f\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u7684\u9700\u6c42\uff0c\u5177\u5907\u5982\u4e0b\u4f18\u70b9\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u901a\u8fc7\u91cd\u6784 kubelet\uff0c\u65b9\u4fbf\u5728 kubelet \u4e2d\u96c6\u6210\u5bf9\u7aef\u8bbe\u5907\u7684\u7ba1\u7406\u80fd\u529b\uff1b")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u901a\u8fc7\u91cd\u6784 kubelet\uff0c\u53ef\u4ee5\u5bf9 kubelet \u8fdb\u884c\u8f7b\u91cf\u5316\u6539\u9020\u3002\u6b64\u4f18\u70b9\u4f46\u662f\u4e5f\u610f\u5473\u7740\u539f\u751f kubelet \u529f\u80fd\u7f3a\u5931\u7684\u95ee\u9898\u3002"))),(0,u.kt)("p",null,"\u4f46\u662f\u4e5f\u6709\u5982\u4e0b\u4e0d\u8db3\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u53ef\u7ef4\u62a4\u6027\u5dee: \u4fb5\u5165\u5f0f\u4fee\u6539 kubelet core\uff0c\u8ddf\u968f\u793e\u533a\u7248\u672c\u5347\u7ea7\u975e\u5e38\u56f0\u96be\uff0c\u719f\u6089kubelet\u7684\u540c\u5b66\u90fd\u4f1a\u6709\u540c\u611f\uff0ckubelet \u7ec4\u4ef6\u7531\u4e8e\u76f4\u63a5\u8d1f\u8d23\u8ba1\u7b97\uff0c\u5b58\u50a8\uff0c\u7f51\u7edc\u4ea4\u4e92\uff0c\u6240\u4ee5\u5176\u4ee3\u7801\u7ed3\u6784\u548c\u903b\u8f91\u5f02\u5e38\u590d\u6742\u3002\u56e0\u6b64\u6301\u7eed\u7ef4\u62a4\u4e00\u4e2a\u6df1\u5ea6\u4fee\u6539\u8fc7\u7684 kubelet \u7684\u5de5\u4f5c\u91cf\u53ef\u60f3\u800c\u77e5\uff1b")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u53ef\u6269\u5c55\u6027\u5dee: \u56e0\u4e3a\u81ea\u6cbb\u80fd\u529b\u76f4\u63a5\u505a\u5230\u91cd\u6784\u7684 kubelet \u7ec4\u4ef6\u4e2d\uff0c\u8fd9\u6837\u8fb9\u7f18\u8282\u70b9\u5982\u679c\u5176\u4ed6\u7ec4\u4ef6(\u5982\u7f51\u7edc\u7ec4\u4ef6)\u60f3\u590d\u7528\u8fb9\u7f18\u81ea\u6cbb\u80fd\u529b\u5c06\u9762\u4e34\u91cd\u590d\u9020\u8f6e\u5b50\u7684\u5883\u5730\uff1b")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u573a\u666f\u8026\u5408\u66f4\u6df1: \u4f8b\u5982\u5728 kubelet \u91cd\u6784\u4e2d\u589e\u52a0\u4e86 IOT \u8bbe\u5907\u7ba1\u7406\uff0c\u5c06\u53ef\u80fd\u4f7f kubelet \u548c IOT \u573a\u666f\u6df1\u5ea6\u8026\u5408\u3002"))),(0,u.kt)("h4",{id:"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68482openyurt\u4f7f\u7528\u65b9\u6848"},"\u95ee\u98981\u7684\u89e3\u51b3\u65b9\u68482\uff08OpenYurt\u4f7f\u7528\u65b9\u6848\uff09"),(0,u.kt)("p",null,"\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u589e\u52a0 web \u7f13\u5b58\u53ca\u8bf7\u6c42\u4ee3\u7406 hub(\u53d6\u540d\u4e3a YurtHub\uff0c\u5546\u4e1a\u4ea7\u54c1\u4e2d\u540d\u4e3a edge-hub)\uff0c\u8fb9\u7f18\u4fa7\u7ec4\u4ef6(kubelet)\u548c\u4e91\u7aef\u901a\u4fe1\u5c06\u7ecf\u7531\u8be5\u7ec4\u4ef6\u3002YurtHub \u76f8\u5f53\u4e8e\u5e26\u6709\u6570\u636e\u7f13\u5b58\u529f\u80fd\u7684\u201d\u900f\u660e\u7f51\u5173\u201c\uff0c\u548c\u4e91\u7aef\u7f51\u7edc\u65ad\u8fde\u72b6\u6001\u4e0b\uff0c\u5982\u679c\u8282\u70b9\u6216\u8005 kubelet \u91cd\u542f\uff0c\u5c06\u4ece YurtHub \u4e2d\u83b7\u53d6\u5230\u4e1a\u52a1\u5bb9\u5668\u76f8\u5173\u6570\u636e\uff0c\u6709\u6548\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u7684\u95ee\u9898"),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"image",src:n(9859).Z,width:"1080",height:"376"})),(0,u.kt)("p",null,"\u76f8\u6bd4\u89e3\u51b3\u65b9\u68481\uff0c\u6709\u5982\u4e0b\u4f18\u52bf\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"kubelet \u96f6\u4fee\u6539\uff0c\u610f\u5473\u539f\u751f kubelet \u80fd\u529b\u5929\u7136\u5177\u5907\uff0c\u540c\u65f6\u8ddf\u968f Kubernetes \u7248\u672c\u5347\u7ea7\u96f6\u8d1f\u62c5\uff1b")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u53ef\u6269\u5c55\u6027\u5f3a\uff0c\u8282\u70b9\u5176\u4ed6\u7ec4\u4ef6\u8f7b\u677e\u590d\u7528 YurtHub\uff1b")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u4e0e Kubernetes \u8bbe\u8ba1\u7406\u5ff5\u5951\u5408\uff0cYurtHub \u975e\u5e38\u5bb9\u6613\u6269\u5c55\u51fa\u66f4\u591a\u7684\u80fd\u529b\u3002"))),(0,u.kt)("p",null,"\u5f53\u7136 OpenYurt \u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4e5f\u4f1a\u9762\u4e34\u5982\u4e0b\u7684\u95ee\u9898\uff1a\u539f\u751f kubelet \u6bd4\u8f83 high-weight\uff0c\u5728\u8d44\u6e90\u7d27\u5f20\u573a\u666f\u4e0b\u5e94\u7528\u4f1a\u6bd4\u8f83\u6311\u6218\u3002\u76ee\u524d\u5546\u4e1a\u4ea7\u54c1\u4e2d\u8282\u70b9\u89c4\u683c\u63a8\u8350 2U4G \u8d77\u6b65\u3002"),(0,u.kt)("h4",{id:"\u95ee\u98982\u7684\u89e3\u51b3\u65b9\u6848"},"\u95ee\u98982\u7684\u89e3\u51b3\u65b9\u6848"),(0,u.kt)("p",null,"\u8be5\u95ee\u9898\u6b63\u662f\u901a\u8fc7\u5f00\u6e90\u7ec4\u4ef6 yurt-controller-manager \u4e2d\u7684 Node Controller \u6765\u89e3\u51b3\u7684\u3002\u5982 github \u4e3b\u9875\u4ecb\u7ecd\u6240\u793a\uff1a\n",(0,u.kt)("img",{alt:"image",src:n(4060).Z,width:"1652",height:"929"})),(0,u.kt)("h4",{id:"\u95ee\u98983\u7684\u89e3\u51b3\u65b9\u6848"},"\u95ee\u98983\u7684\u89e3\u51b3\u65b9\u6848"),(0,u.kt)("p",null,"Kubernetes \u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u662f\u901a\u8fc7\u4e91\u7aef\u5bf9\u8fb9\u7f18\u8fdb\u884c\u7ba1\u63a7\u7684(\u5982\u5e94\u7528\u90e8\u7f72\uff0c\u5347\u7ea7\uff0c\u6269\u7f29\u5bb9\u7b49)\uff0c\u56e0\u6b64\u5f53\u8fb9\u7f18\u548c\u4e91\u7aef\u7f51\u7edc\u65ad\u8054\u65f6\uff0c\u8fb9\u7f18\u8282\u70b9\u5c06\u4e0d\u4f1a\u4ece\u4e91\u7aef\u540c\u6b65\u7528\u6237\u5bf9\u8282\u70b9\u7684\u7ba1\u63a7\u64cd\u4f5c\uff0c\u56e0\u6b64\u65ad\u7f51\u671f\u95f4\uff0c\u53ea\u8981 YurtHub \u4fdd\u6301\u672c\u5730\u7f13\u5b58\u6570\u636e\u548c\u65ad\u7f51\u65f6\u523b\u4e00\u81f4(\u5373\u65ad\u7f51\u671f\u95f4\u8fb9\u7f18\u7f13\u5b58\u6570\u636e\u4e0d\u66f4\u65b0)\uff0c\u800c\u7f51\u7edc\u6062\u590d\u65f6\uff0c\u518d\u4ece\u4e91\u7aef\u540c\u6b65\u6700\u65b0\u6570\u636e\u5373\u53ef\u3002"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/4BLfvMJJA623ZwRSgUE69A"},"\u539f\u6587\u94fe\u63a5")))}b.isMDXComponent=!0},1270:function(e,t,n){t.Z=n.p+"assets/images/Gartner-191be30024185ef4f96cfa64c5018d75.png"},3467:function(e,t,n){t.Z=n.p+"assets/images/OpenYurt-de0f93f0c16ddb05b6782cbe66107b22.png"},4060:function(e,t,n){t.Z=n.p+"assets/images/OpenYurt_arch-a3dcd2a758bb9c978f52c8a61c6a98f6.png"},4160:function(e,t,n){t.Z=n.p+"assets/images/checkpoint-7a1381e53605c36f128716d35475b6a5.png"},9859:function(e,t,n){t.Z=n.p+"assets/images/edge_hub-08066dde85946999b57d59dac0a6cbe8.png"},808:function(e,t,n){t.Z=n.p+"assets/images/slave_agent-78fcbd7915b7c27d65a0147c3283c27a.png"}}]);