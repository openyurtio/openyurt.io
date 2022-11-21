"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1936],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,y=m["".concat(u,".").concat(d)]||m[d]||i[d]||o;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15703:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return i},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=t(87462),r=(t(67294),t(3905));const o={title:"YurtAppDaemon"},l=void 0,p={unversionedId:"user-manuals/workload/yurt-app-daemon",id:"version-v1.1/user-manuals/workload/yurt-app-daemon",title:"YurtAppDaemon",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/user-manuals/workload/yurt-app-daemon.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-daemon",permalink:"/zh/docs/user-manuals/workload/yurt-app-daemon",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-daemon.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{title:"YurtAppDaemon"},sidebar:"version-v1.1/docs",previous:{title:"YurtAppSet",permalink:"/zh/docs/user-manuals/workload/yurt-app-set"},next:{title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e",permalink:"/zh/docs/user-manuals/monitoring/prometheus"}},u={},s=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u7528\u6237\u4f7f\u7528\uff1a",id:"\u7528\u6237\u4f7f\u7528",level:2}],c={toc:s};function i(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u80cc\u666f\u4ecb\u7ecd"},"\u80cc\u666f\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\uff0c\u6765\u81ea\u540c\u4e00\u533a\u57df\u7684\u8fb9\u7f18\u8282\u70b9\u88ab\u5206\u914d\u5230\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u4e2d\uff0c\u6b64\u65f6\uff0c\u4e00\u822c\u9700\u8981\u5728\u8282\u70b9\u6c60\u7ef4\u5ea6\u90e8\u7f72\u4e00\u4e9b\u7cfb\u7edf\u7ec4\u4ef6\uff0c\u4f8b\u5982CoreDNS\u3002 \u521b\u5efa\u8282\u70b9\u6c60\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u81ea\u52a8\u521b\u5efa\u8fd9\u4e9b\u7cfb\u7edf\u7ec4\u4ef6\uff0c\u800c\u65e0\u9700\u4efb\u4f55\u624b\u52a8\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"YurtAppDaemon \u786e\u4fdd\u6240\u6709\u6216\u90e8\u5206\u8282\u70b9\u6c60\u4ee5 Deployment \u6216 StatefulSet \u4f5c\u4e3a\u6a21\u677f\u8fd0\u884c\u526f\u672c\u3002 \u968f\u7740\u8282\u70b9\u6c60\u7684\u521b\u5efa\uff0c\u8fd9\u4e9b\u5b50\u90e8\u7f72\u6216\u72b6\u6001\u96c6\u4e5f\u88ab\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\uff0c\u5b50\u90e8\u7f72\u6216\u72b6\u6001\u96c6\u7684\u521b\u5efa/\u66f4\u65b0\u7531 YurtAppDaemon \u63a7\u5236\u5668\u5b9e\u73b0\u3002 \u8fd9\u4e9b\u5b50 Deployments \u6216 Statefulsets \u5c06\u5728\u8282\u70b9\u6c60 \u4ece\u96c6\u7fa4\u4e2d\u79fb\u9664\u65f6\u88ab\u56de\u6536\uff0c\u5220\u9664 YurtAppDaemon CR \u5c06\u6e05\u7406\u5b83\u521b\u5efa\u7684 Deployments \u6216 StatefulSets\u3002 YurtAppDaemon \u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e K8S Daemonset\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e YurtAppDaemon \u4ece\u8282\u70b9\u6c60\u7ef4\u5ea6\u81ea\u52a8\u521b\u5efa K8S \u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641999454831-b8f2f9f4-c715-4063-8444-b0af22830092.png",alt:"img"})),(0,r.kt)("h2",{id:"\u7528\u6237\u4f7f\u7528"},"\u7528\u6237\u4f7f\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efatest1\u8282\u70b9\u6c60")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test1\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test1\n  type: Edge\n\n\nEOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efatest2\u8282\u70b9\u6c60")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test2\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test2\n  type: Edge\n\nEOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u8282\u70b9\u52a0\u5165\u5230\u8282\u70b9\u6c60")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," kubectl label node cn-beijing.172.23.142.31 apps.openyurt.io/desired-nodepool=test1\n kubectl label node cn-beijing.172.23.142.32 apps.openyurt.io/desired-nodepool=test1\n\n kubectl label node cn-beijing.172.23.142.34 apps.openyurt.io/desired-nodepool=test2\n kubectl label node cn-beijing.172.23.142.35 apps.openyurt.io/desired-nodepool=test2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efaYurtAppDaemon")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: daemon-1\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: daemon-1\n\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: daemon-1\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: daemon-1\n        template:\n          metadata:\n            labels:\n              app: daemon-1\n          spec:\n            containers:\n            - image: nginx:1.18.0\n              imagePullPolicy: Always\n              name: nginx\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "nginx"\n\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3atest1\u8282\u70b9\u6c60\u6253\u6807\u7b7e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label np test1 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3atest2\u8282\u70b9\u6c60\u6253\u6807\u7b7e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label np test2 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6539\u53d8YurtAppDaemon")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Change yurtappdaemon workloadTemplate replicas to 2\n\n# Change yurtappdaemon workloadTemplate image to nginx:1.19.0\n\n# Check the Pod\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664\u8282\u70b9\u6c60\u6807\u7b7e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Remove the nodepool test1 label\nkubectl label np test1 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n\n# Remove the nodepool test2 label\nkubectl label np test2 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n")))}i.isMDXComponent=!0}}]);