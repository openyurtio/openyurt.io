"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6663],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,y=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28842:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=(t(67294),t(3905));const a={title:"OpenYurt \u5b89\u88c5\u76f8\u5173Kubernetes\u914d\u7f6e\u8c03\u6574"},i=void 0,l={unversionedId:"installation/openyurt-prepare",id:"installation/openyurt-prepare",title:"OpenYurt \u5b89\u88c5\u76f8\u5173Kubernetes\u914d\u7f6e\u8c03\u6574",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/openyurt-prepare.md",sourceDirName:"installation",slug:"/installation/openyurt-prepare",permalink:"/zh/docs/next/installation/openyurt-prepare",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-prepare.md",tags:[],version:"current",lastUpdatedBy:"River-sh",lastUpdatedAt:1674092814,formattedLastUpdatedAt:"2023\u5e741\u670819\u65e5",frontMatter:{title:"OpenYurt \u5b89\u88c5\u76f8\u5173Kubernetes\u914d\u7f6e\u8c03\u6574"}},p={},u=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2. Kube-Controller-Manager\u8c03\u6574",id:"2-kube-controller-manager\u8c03\u6574",level:2},{value:"3. KubeProxy\u8c03\u6574",id:"3-kubeproxy\u8c03\u6574",level:2},{value:"3.1 KubeProxy\u652f\u6301\u6d41\u91cf\u62d3\u6251",id:"31-kubeproxy\u652f\u6301\u6d41\u91cf\u62d3\u6251",level:3}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1\u80cc\u666f\u8bf4\u660e"},"1.\u80cc\u666f\u8bf4\u660e"),(0,o.kt)("p",null,"\u4e3a\u9002\u5e94\u4e91\u8fb9\u534f\u540c\u573a\u666f\uff0c\u7528\u6237\u9700\u8981\u5bf9K8S\u505a\u4e00\u4e9b\u8c03\u6574\uff0c\u5982Kube-Controller-Manager, CoreDNS, KubeProxy\u7b49\u3002"),(0,o.kt)("h2",{id:"2-kube-controller-manager\u8c03\u6574"},"2. Kube-Controller-Manager\u8c03\u6574"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-controller-mamanger")," \u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u6211\u4eec\u9700\u8981\u5173\u95edKube-Controller-Manager\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"nodelifecycle")," \u63a7\u5236\u5668\u3002\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers")," \u53c2\u6570\u503c\u5e76\u91cd\u542f ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u6765\u7981\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"nodelifecycle")," \u63a7\u5236\u5668\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe\u6700\u521d\u7684\u53c2\u6570\u503c\u50cf\u8fd9\u6837 ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers=*,bootstrapsigner,tokencleaner"),"\uff0c\u8981\u7981\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"nodelifecycle")," \u63a7\u5236\u5668\uff0c\u6211\u4eec\u9700\u8981\u5c06\u53c2\u6570\u503c\u66f4\u6539\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u662f\u4ee5\u9759\u6001 pod \u7684\u65b9\u5f0f\u90e8\u7f72\u5728 master \u8282\u70b9\u4e0a\uff0c\u5e76\u4e14\u60a8\u6709\u767b\u5f55 master \u8282\u70b9\u7684\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifests/kube-controller-manager.yaml")," \u6587\u4ef6\u6765\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u3002\u4fee\u6539\u540e\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u4f1a\u81ea\u52a8\u91cd\u542f\u3002"),(0,o.kt)("h2",{id:"3-kubeproxy\u8c03\u6574"},"3. KubeProxy\u8c03\u6574"),(0,o.kt)("p",null,"kubeadm\u90e8\u7f72\u7684k8s\u96c6\u7fa4\u4f1a\u4e3aKubeProxy\u751f\u6210kubeconfig\u914d\u7f6e\uff0c\u5728\u4e0d\u914d\u7f6e",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/"},(0,o.kt)("inlineCode",{parentName:"a"},"Service Topology"))," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/"},(0,o.kt)("inlineCode",{parentName:"a"},"Topology Aware Hints"))," \u60c5\u51b5\u4e0b\uff0cKubeProxy\u4f7f\u7528\u8fd9\u4e2akubeconfig\u62ff\u5230\u7684endpoints\u662f\u5168\u91cf\u7684\u3002"),(0,o.kt)("p",null,"\u4e91\u8fb9\u7aef\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u95f4\u5f88\u6709\u53ef\u80fd\u65e0\u6cd5\u4e92\u901a\uff0c\u56e0\u6b64\u9700\u8981endpoints\u57fa\u4e8enodepool\u8fdb\u884c\u62d3\u6251\u3002\u76f4\u63a5\u5c06kube-proxy\u7684kubeconfig\u914d\u7f6e\u5220\u9664\uff0c\u5c06apiserver\u8bf7\u6c42\u7ecf\u8fc7yurthub\u5373\u53ef\u89e3\u51b3\u670d\u52a1\u62d3\u6251\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"31-kubeproxy\u652f\u6301\u6d41\u91cf\u62d3\u6251"},"3.1 KubeProxy\u652f\u6301\u6d41\u91cf\u62d3\u6251"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit cm -n kube-system kube-proxy\n")),(0,o.kt)("p",null,"\u6ce8\u91ca\u6389",(0,o.kt)("inlineCode",{parentName:"p"},"config.conf"),"\u6587\u4ef6\u4e0b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"clientConnection.kubeconfig"),"\uff0c\u4fee\u6539\u5b8c\u540e\u6548\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    bindAddressHardFail: false\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf <-- \u5220\u9664\u8fd9\u4e2a\u914d\u7f6e\n      qps: 0\n    clusterCIDR: 100.64.0.0/10\n    configSyncPeriod: 0s\n// \u7701\u7565\n')))}s.isMDXComponent=!0}}]);