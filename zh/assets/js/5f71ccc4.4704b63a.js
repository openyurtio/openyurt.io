"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1900],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1877:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return i}});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u7cfb\u7edf\u67b6\u6784"},l=void 0,u={unversionedId:"core-concepts/architecture",id:"version-v1.0/core-concepts/architecture",title:"\u7cfb\u7edf\u67b6\u6784",description:"OpenYurt\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/zh/docs/core-concepts/architecture",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/architecture.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"2022\u5e749\u67086\u65e5",frontMatter:{title:"\u7cfb\u7edf\u67b6\u6784"},sidebar:"version-v1.0/docs",previous:{title:"\u8282\u70b9\u63a5\u5165",permalink:"/zh/docs/installation/yurtadm-join"},next:{title:"Raven",permalink:"/zh/docs/core-concepts/raven"}},p={},i=[{value:"\u8282\u70b9\u5206\u7c7b",id:"\u8282\u70b9\u5206\u7c7b",level:3},{value:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefKube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",id:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf",level:3},{value:"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf",id:"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf",level:3},{value:"OpenYurt\u7ec4\u4ef6\u4ecb\u7ecd",id:"openyurt\u7ec4\u4ef6\u4ecb\u7ecd",level:3}],c={toc:i};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenYurt\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(2857).Z,width:"1766",height:"1044"})),(0,o.kt)("p",null,"\u5176\u4e2d\u84dd\u8272\u6846\u4e3a\u539f\u751fKubernetes\u7ec4\u4ef6\uff0c\u6a59\u8272\u6846\u4e2d\u7ec4\u4ef6\u4e3aOpenYurt\u7ec4\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u8282\u70b9\u5206\u7c7b"},"\u8282\u70b9\u5206\u7c7b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cloud Node\uff1a\u901a\u8fc7\u5185\u7f51\u4e0eKubernetes Master\u8fde\u63a5\uff0c\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u8fd0\u884c\u4e2d\u5fc3\u63a7\u5236\u7ec4\u4ef6\u3002\u8282\u70b9Label: openyurt.io/is-edge-worker: false"),(0,o.kt)("li",{parentName:"ul"},"Edge Node\uff1a\u901a\u8fc7\u516c\u7f51\u4e0eKubernetes Master\u8fde\u63a5\uff0c\u4e00\u822c\u548c\u8fb9\u7f18\u751f\u4ea7\u73af\u5883\u8ddd\u79bb\u8f83\u8fd1\uff0c\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u8fd0\u884c\u8fb9\u7f18\u4e1a\u52a1\u5bb9\u5668\u3002\u8282\u70b9Label: openyurt.io/is-edge-worker: true")),(0,o.kt)("h3",{id:"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf"},"\u8fb9\u7f18\u8bbf\u95ee\u4e91\u7aefKube-apiserver\u7684\u7ba1\u63a7\u6d41\u91cf"),(0,o.kt)("p",null,"Edge Node\u4e0a\u7684Kubelet, kube-proxy, Flannel\u4ee5\u53ca\u5176\u4ed6\u4e91\u539f\u751f\u7ec4\u4ef6\u8bbf\u95ee\u4e91\u7aefkube-apiserver\u7684\u6d41\u91cf\u90fd\u4f1a\u7ecf\u8fc7YurtHub\u7ec4\u4ef6\uff0c\u540c\u65f6YurtHub\u7ec4\u4ef6\u4f1a\u5728\u672c\u673a\u78c1\u76d8\u4e0a\u7f13\u5b58\u4e91\u7aef\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5f53\u4e91\u8fb9\u7f51\u7edc\u5f02\u5e38\u65f6YurtHub\u5c06\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u6570\u636e\u6765\u6062\u590d\u8fb9\u7f18\u4e1a\u52a1\u3002"),(0,o.kt)("h3",{id:"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf"},"\u4e91\u7aef\u8bbf\u95ee\u8fb9\u7f18\u7684\u8fd0\u7ef4\u6d41\u91cf"),(0,o.kt)("p",null,"\u7531\u4e8e\u8fb9\u7f18\u8282\u70b9\u4e00\u822c\u4e0d\u66b4\u9732\u5728\u516c\u7f51\u4e0a\uff0c\u4e3a\u4e86\u4ece\u4e91\u7aef\u5411\u8fb9\u7f18\u4e0b\u53d1\u8fd0\u7ef4\u6307\u4ee4\u65f6(\u5982kubectl exec\u5f80\u8fb9\u7f18\u5bb9\u5668\u4e0b\u53d1\u547d\u4ee4)\uff0c\u6216\u8005\u6536\u96c6\u8fb9\u7f18\u8fd0\u884c\u6570\u636e(\u5982prometheus\u62c9\u53d6\u8fb9\u7f18kubelet\u7684metrics)\u65f6\uff0c\u8fd9\u4e9b\u8fd0\u7ef4\u6d41\u91cf\u5c06\u4f1a\u7ecf\u8fc7YurtTunnel Agent\u548cYurtTunnel Server\u6784\u5efa\u7684\u53cc\u5411\u8ba4\u8bc1\u7684\u5b89\u5168\u53cd\u5411\u96a7\u9053\uff0c\u6700\u540e\u7531YurtTunnel Agent\u8f6c\u53d1\u5230\u76ee\u6807\u8fb9\u7f18\u8282\u70b9\u3002"),(0,o.kt)("h3",{id:"openyurt\u7ec4\u4ef6\u4ecb\u7ecd"},"OpenYurt\u7ec4\u4ef6\u4ecb\u7ecd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtHub:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8282\u70b9\u7ef4\u5ea6\u7684SideCar\uff0c\u8282\u70b9\u4e0a\u7ec4\u4ef6\u548ckube-apiserver\u4e4b\u95f4\u7684\u6d41\u91cf\u4ee3\u7406\uff0c\u6709\u8fb9\u7f18(edge)\u548c\u4e91\u7aef(cloud)\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f\u3002\u5176\u4e2d\u8fb9\u7f18YurtHub\u4f1a\u7f13\u5b58\u4e91\u7aef\u8fd4\u56de\u7684\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5f62\u6001\uff1a\u4ee5Static Pod\u5f62\u6001\u8fd0\u884c\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtControllerManager\uff1a")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u7684\u63a7\u5236\u5668\uff0c\u76ee\u524d\u5305\u62ecNodeLifeCycle Controller(\u4e0d\u9a71\u9010\u81ea\u6cbb\u8282\u70b9\u4e0a\u7684Pod)\uff0cYurtCSRController(\u7528\u4e8eApprove\u8fb9\u7f18\u7684\u8bc1\u4e66\u7533\u8bf7)"),(0,o.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5f62\u6001\uff1aDeployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtAppManager:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u8de8\u5730\u57df\u7684\u8d44\u6e90\u53ca\u4e1a\u52a1\u8d1f\u8f7d\u7ba1\u7406\u5668\uff0c\u76ee\u524d\u5305\u62ecNodePool(\u8282\u70b9\u6c60\u7ba1\u7406)\uff0cYurtAppSet(\u4e4b\u524d\u53ebUnitedDeployment)(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684\u4e1a\u52a1\u8d1f\u8f7d\u7ba1\u7406)\uff0cYurtAppDaemon(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684Daemonset), YurtIngress(\u8282\u70b9\u6c60\u7ef4\u5ea6\u7684Ingress Controller\u7ba1\u7406\u5668)"),(0,o.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5f62\u6001\uff1a Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtTunnel(Server/Agent):")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6784\u5efa\u53cc\u5411\u8ba4\u8bc1\u52a0\u5bc6\u7684\u4e91\u8fb9\u53cd\u5411\u96a7\u9053\uff0c\u7528\u4e8e\u8f6c\u53d1\u4e91\u7aef\u5230\u8fb9\u7f18\u7684\u8fd0\u7ef4\u76d1\u63a7\u6d41\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5f62\u6001\uff1aYurtTunnel Server\u4ee5Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a\uff0cYurtTunnel Agent\u4ee5DaemonSet\u90e8\u7f72\u5728Edge Node\u4e0a"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"YurtDeviceController/YurtEdgeXManager:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8fb9\u7f18IOT\u89e3\u51b3\u65b9\u6848\u7684\u975e\u4fb5\u5165\u878d\u5408\uff0c\u901a\u8fc7\u4e91\u539f\u751f\u6a21\u5f0f\u7ba1\u63a7\u8fb9\u7f18\u8bbe\u5907\u3002\u76ee\u524dEdgeX Foundry\u5df2\u7ecf\u65e0\u7f1d\u96c6\u6210\u5230OpenYurt\u67b6\u6784\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"YurtEdgeXManager\u4ee5Deployment\u5f62\u6001\u90e8\u7f72\u5728Cloud Node\u4e0a\uff0cYurtDeviceController\u4ee5YurtAppSet(\u4e4b\u524d\u53ebUnitedDeployment)\u5f62\u6001\u90e8\u7f72\u5728Edge Node\u4e0a\uff0c\u6bcf\u4e2aNodePool\u4e0a\u90e8\u7f72\u4e00\u5957YurtDeviceController\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"NodeResourceManager:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7ba1\u7406 OpenYurt \u96c6\u7fa4\u672c\u5730\u8d44\u6e90\u7684\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u96c6\u7fa4\u5185 ConfigMap \u7684\u5b9a\u4e49\u6765\u52a8\u6001\u914d\u7f6e\u96c6\u7fa4\u5185\u5bbf\u4e3b\u673a\u4e0a\u7684\u672c\u5730\u8d44\u6e90\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4ee5DaemonSet\u5f62\u6001\u90e8\u7f72\u5728Edge Node\u4e0a")))))}s.isMDXComponent=!0},2857:function(e,t,r){t.Z=r.p+"assets/images/arch-85c58b26f5cd3dfbd6219bdcc59040b8.png"}}]);