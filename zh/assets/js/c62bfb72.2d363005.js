"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3398],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),k=s(n),c=a,m=k["".concat(p,".").concat(c)]||k[c]||d[c]||l;return n?r.createElement(m,u(u({ref:t},i),{},{components:n})):r.createElement(m,u({ref:t},i))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},15147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u624b\u52a8\u5b89\u88c5OpenYurt"},u=void 0,o={unversionedId:"installation/manually-setup",id:"version-v0.7.0/installation/manually-setup",title:"\u624b\u52a8\u5b89\u88c5OpenYurt",description:"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u672c\u6559\u7a0b\u4f7f\u7528\u662f\u4e00\u4e2a\u53cc\u8282\u70b9Kubernetes\u96c6\u7fa4\uff0c\u4f7f\u7528\u7684\u6240\u6709 yaml \u6587\u4ef6\u90fd\u53ef\u4ee5\u5728 openyurt repo\u548cyurt-app-manager repo\u4e0b\u627e\u5230\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.7.0/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/zh/docs/v0.7.0/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v0.7.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1665299759,formattedLastUpdatedAt:"2022\u5e7410\u67089\u65e5",frontMatter:{title:"\u624b\u52a8\u5b89\u88c5OpenYurt"},sidebar:"version-v0.7.0/docs",previous:{title:"\u4ecb\u7ecd",permalink:"/zh/docs/v0.7.0/installation/summary"},next:{title:"Yurtadm init/join",permalink:"/zh/docs/v0.7.0/installation/yurtadm-init-join"}},p={},s=[{value:"1 Kubernetes\u96c6\u7fa4\u73af\u5883",id:"1-kubernetes\u96c6\u7fa4\u73af\u5883",level:2},{value:"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6253\u6807\u7b7e",id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6253\u6807\u7b7e",level:3},{value:"2 OpenYurt\u5b89\u88c5\u51c6\u5907",id:"2-openyurt\u5b89\u88c5\u51c6\u5907",level:2},{value:"2.1 Kube-Controller-Manager\u8c03\u6574",id:"21-kube-controller-manager\u8c03\u6574",level:3},{value:"2.2 \u90e8\u7f72Yurt-Tunnel\u4e13\u7528DNS",id:"22-\u90e8\u7f72yurt-tunnel\u4e13\u7528dns",level:3},{value:"2.3 Kube-apiserver\u8c03\u6574",id:"23-kube-apiserver\u8c03\u6574",level:3},{value:"2.4 Addons\u8c03\u6574",id:"24-addons\u8c03\u6574",level:3},{value:"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6",id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6",level:2},{value:"3.1 \u5b89\u88c5Yurt-controller-manager",id:"31-\u5b89\u88c5yurt-controller-manager",level:3},{value:"\u5907\u6ce8:",id:"\u5907\u6ce8",level:4},{value:"3.2 \u5b89\u88c5Yurt-App-Manager",id:"32-\u5b89\u88c5yurt-app-manager",level:3},{value:"3.2.1 \u90e8\u7f72Yurt-App-Manager",id:"321-\u90e8\u7f72yurt-app-manager",level:4},{value:"3.2.2 \u521b\u5efa\u8282\u70b9\u6c60",id:"322-\u521b\u5efa\u8282\u70b9\u6c60",level:4},{value:"3.2.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",id:"323-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60",level:4},{value:"3.3 \u5b89\u88c5Yurt-tunnel",id:"33-\u5b89\u88c5yurt-tunnel",level:3},{value:"3.4 \u5b89\u88c5Yurthub\u914d\u7f6e",id:"34-\u5b89\u88c5yurthub\u914d\u7f6e",level:3},{value:"4. \u63a5\u5165\u8fb9\u7f18\u8282\u70b9",id:"4-\u63a5\u5165\u8fb9\u7f18\u8282\u70b9",level:2},{value:"4.1 \u5df2\u63a5\u5165\u8282\u70b9\u7684\u914d\u7f6e\u8c03\u6574",id:"41-\u5df2\u63a5\u5165\u8282\u70b9\u7684\u914d\u7f6e\u8c03\u6574",level:3},{value:"4.1.1 \u90e8\u7f72Edge\u5de5\u4f5c\u6a21\u5f0f\u7684Yurthub",id:"411-\u90e8\u7f72edge\u5de5\u4f5c\u6a21\u5f0f\u7684yurthub",level:4},{value:"4.1.2 \u914d\u7f6eKubelet",id:"412-\u914d\u7f6ekubelet",level:4},{value:"4.1.3 \u91cd\u5efa\u8282\u70b9\u4e0a\u7684Pods",id:"413-\u91cd\u5efa\u8282\u70b9\u4e0a\u7684pods",level:4},{value:"4.2 \u4ece\u96f6\u63a5\u5165\u65b0\u8282\u70b9",id:"42-\u4ece\u96f6\u63a5\u5165\u65b0\u8282\u70b9",level:3}],i={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u5c55\u793a\u4e86\u5982\u4f55\u624b\u52a8\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002\u672c\u6559\u7a0b\u4f7f\u7528\u662f\u4e00\u4e2a\u53cc\u8282\u70b9Kubernetes\u96c6\u7fa4\uff0c\u4f7f\u7528\u7684\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," \u6587\u4ef6\u90fd\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/tree/master/config/setup"},"openyurt repo"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup"},"yurt-app-manager repo"),"\u4e0b\u627e\u5230\u3002"),(0,a.kt)("h2",{id:"1-kubernetes\u96c6\u7fa4\u73af\u5883"},"1 Kubernetes\u96c6\u7fa4\u73af\u5883"),(0,a.kt)("p",null,"\u7528\u6237\u9700\u8981\u5148\u81ea\u884c\u51c6\u5907\u597d\u4e00\u4e2aKubernetes\u96c6\u7fa4(\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm"),"\u5de5\u5177\u642d\u5efa)\uff0c\u672c\u6587\u6863\u4e2d\u4ee52\u8282\u70b9\u7684Kubernetes\u4e3a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n")),(0,a.kt)("h3",{id:"11-\u7ed9\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6253\u6807\u7b7e"},"1.1 \u7ed9\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u6253\u6807\u7b7e"),(0,a.kt)("p",null,"\u5f53\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"apiserver")," \u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u53ea\u6709\u8fd0\u884c\u5728\u8fb9\u7f18\u81ea\u6cbb\u7684\u8282\u70b9\u4e0a\u7684Pod\u624d\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u901a\u8fc7\u6253 ",(0,a.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker")," \u7684\u6807\u7b7e\u7684\u65b9\u5f0f\uff0c\u5c06\u8282\u70b9\u5206\u4e3a\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u3002\n\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west-1.192.168.0.87")," \u4f5c\u4e3a\u4e91\u7aef\u8282\u70b9\uff0c\u5c06\u6807\u7b7e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u503c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n")),(0,a.kt)("p",null,"\u7136\u540e\u8fb9\u7f18\u8282\u70b9\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u6fc0\u6d3b\u81ea\u6cbb\u6a21\u5f0f\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u7ed9\u8fb9\u7f18\u8282\u70b9\u6dfb\u52a0\u6ce8\u89e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n")),(0,a.kt)("h2",{id:"2-openyurt\u5b89\u88c5\u51c6\u5907"},"2 OpenYurt\u5b89\u88c5\u51c6\u5907"),(0,a.kt)("h3",{id:"21-kube-controller-manager\u8c03\u6574"},"2.1 Kube-Controller-Manager\u8c03\u6574"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1Yurt-Controller-Manager\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff0c\u9700\u8981\u5173\u95edKube-Controller-Manager\u4e2d\u7684NodeLifeCycle controller(\u76ee\u524d\u6b63\u5728\u4f18\u5316\uff0c\u540e\u7eedKube-Controller-Manager\u5c06\u65e0\u9700\u8c03\u6574)\u3002"),(0,a.kt)("p",null,"Kube-Controller-Manager\u914d\u7f6e\u8c03\u6574\u65b9\u6cd5\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/v0.7.0/installation/openyurt-prepare#2-kube-controller-manager%E8%B0%83%E6%95%B4"},"Kube-Controller-Manager"))),(0,a.kt)("h3",{id:"22-\u90e8\u7f72yurt-tunnel\u4e13\u7528dns"},"2.2 \u90e8\u7f72Yurt-Tunnel\u4e13\u7528DNS"),(0,a.kt)("p",null,"\u4e91\u7aef\u7ec4\u4ef6(\u5982Kube-apiserver, prometheus, metrics-server\u7b49)\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"hostname:port"),"\u8bbf\u95ee\u8fb9\u7f18\u65f6\uff0c\u4e3a\u4e86\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),"\u57df\u540d\u89e3\u6790\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server"),",\u4ece\u800c\u8ba9\u8bf7\u6c42\u65e0\u611f\u77e5\n\u7ecf\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/yurt-tunnel-agent"),"\u5230\u8fbe\u8fb9\u7f18\u8282\u70b9\u3002\u9700\u8981\u786e\u4fdd\u7ec4\u4ef6\u7684DNS\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53d1\u9001\u5230Yurt-Tunnel\u4e13\u7528\u7684DNS(\u53d6\u540d\u4e3ayurt-tunnel-dns)\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5yurt-tunnel-dns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-tunnel-dns.yaml\n")),(0,a.kt)("p",null,"\u5f53\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system get po"),"\u7b49\u786e\u8ba4\u4e00\u4e0byurt-tunnel-dns\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38\u542f\u52a8\u3002\u5e76\u4e14\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system get svc yurt-tunnel-dns"),"\u83b7\u53d6\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-dns service"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"clusterIP"),"."),(0,a.kt)("h3",{id:"23-kube-apiserver\u8c03\u6574"},"2.3 Kube-apiserver\u8c03\u6574"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1Master\u8282\u70b9\u4e0akube-apiserver\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"hostname:port"),"\u8bbf\u95eekubelet\uff0c\u540c\u65f6\u4fdd\u8bc1\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-dns pod"),"\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"hostname"),"\u8fdb\u884c\u57df\u540d\u89e3\u6790\u3002\u9700\u8981\u8c03\u6574kube-apiserver\u7ec4\u4ef6\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"Kube-apiserver\u914d\u7f6e\u8c03\u6574\u65b9\u6cd5\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/v0.7.0/installation/openyurt-prepare#3-kube-apiserver%E8%B0%83%E6%95%B4"},"Kube-apiserver"))),(0,a.kt)("h3",{id:"24-addons\u8c03\u6574"},"2.4 Addons\u8c03\u6574"),(0,a.kt)("p",null,"kubeadm\u9ed8\u8ba4\u5b89\u88c5kube-proxy\u548cCoreDNS\u7684\u914d\u7f6e\u4e5f\u9700\u8981\u914d\u7f6e\uff0c\u4ece\u800c\u9002\u914d\u4e91\u8fb9\u534f\u540c\u573a\u666f\u3002\u8c03\u6574\u914d\u7f6e\u65b9\u6cd5\u5982\u4e0b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/v0.7.0/installation/openyurt-prepare#4-coredns%E8%B0%83%E6%95%B4"},"CoreDNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/v0.7.0/installation/openyurt-prepare#5-kubeproxy%E8%B0%83%E6%95%B4"},"KubeProxy"))),(0,a.kt)("h2",{id:"3-\u90e8\u7f72openyurt\u7684control-plane\u7ec4\u4ef6"},"3 \u90e8\u7f72OpenYurt\u7684Control-Plane\u7ec4\u4ef6"),(0,a.kt)("h3",{id:"31-\u5b89\u88c5yurt-controller-manager"},"3.1 \u5b89\u88c5Yurt-controller-manager"),(0,a.kt)("p",null,"\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-controller-manager"),"\uff0c\u9632\u6b62\u5728\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"apiserver")," \u65ad\u5f00\u671f\u95f4\uff0c\u81ea\u6cbb\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684Pod\u88ab\u9a71\u9010\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-controller-manager.yaml\ndeployment.apps/yurt-controller-manager created\n")),(0,a.kt)("h4",{id:"\u5907\u6ce8"},"\u5907\u6ce8:"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker"),' \u5bf9\u533f\u540d\u8bf7\u6c42\u5f00\u542f\u4e86\u62c9\u53d6\u901f\u7387\u9650\u5236\uff0c\u60a8\u53ef\u80fd\u4f1a\u9047\u5230\u9519\u8bef\u4fe1\u606f\u63d0\u793a\uff0c\u6bd4\u5982\uff1a"You have reached your pull rate limit. xxxx"\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a ',(0,a.kt)("inlineCode",{parentName:"p"},"docker-registry")," \u5bc6\u7801\u6765\u62c9\u53d6\u955c\u50cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system\n")),(0,a.kt)("p",null,"\u7136\u540e\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"config/setup/yurt-controller-manager.yaml"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n      containers:\n      - name: yurt-controller-manager\n        image: openyurt/yurt-controller-manager:latest\n        command:\n        - yurt-controller-manager\n      imagePullSecrets:\n      - name: dockerpass\n")),(0,a.kt)("h3",{id:"32-\u5b89\u88c5yurt-app-manager"},"3.2 \u5b89\u88c5Yurt-App-Manager"),(0,a.kt)("h4",{id:"321-\u90e8\u7f72yurt-app-manager"},"3.2.1 \u90e8\u7f72Yurt-App-Manager"),(0,a.kt)("p",null,"\u9996\u5148\u4ece",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-app-manager/tree/master/config/setup"},"yurt-app-manager repo"),"\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"config/setup/all_in_one.yaml"),"\u3002\u6267\u884c\u5982\u4e0b\u547d\u4ee4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f config/setup/all_in_one.yaml\n")),(0,a.kt)("p",null,"\u786e\u8ba4yurt-app-manager\u7ec4\u4ef6\u7684pod\u548cservice\u914d\u7f6e\u5df2\u7ecf\u6210\u529f\u521b\u5efa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pod -n kube-system | grep yurt-app-manager\n$ kubectl get svc -n kube-system | grep yurt-app-manager\n")),(0,a.kt)("h4",{id:"322-\u521b\u5efa\u8282\u70b9\u6c60"},"3.2.2 \u521b\u5efa\u8282\u70b9\u6c60"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7ba1\u7406\u8282\u70b9\u548c\u8282\u70b9\u4e0a\u7684\u6d41\u91cf(\u5982Service\u6d41\u91cf\u62d3\u6251\u7ba1\u7406)\uff0c\u6211\u4eec\u63a8\u8350\u628a\u4e8c\u5c42\u7f51\u7edc\u4e92\u901a\u7684\u8282\u70b9\u653e\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u3002\u672c\u4f8b\u4e2d\u4e3a\u4e91\u8fb9\u5404\u81ea\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: master\nspec:\n  type: Cloud\n---\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: worker\nspec:\n  type: Edge\nEOF\n")),(0,a.kt)("h4",{id:"323-\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"},"3.2.3 \u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60"),(0,a.kt)("p",null,"\u5206\u522b\u8bb2\u4e91\u7aef\u548c\u8fb9\u7f18\u8282\u70b9\u52a0\u51653.2.2\u4e2d\u521b\u5efa\u7684\u8282\u70b9\u6c60\uff0c\u5177\u4f53\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl label node us-west-1.192.168.0.87 apps.openyurt.io/desired-nodepool=master\nnode/us-west-1.192.168.0.87 labeled\n$ kubectl label node us-west-1.192.168.0.88  apps.openyurt.io/desired-nodepool=worker\nnode/us-west-1.192.168.0.88 labeled\n")),(0,a.kt)("h3",{id:"33-\u5b89\u88c5yurt-tunnel"},"3.3 \u5b89\u88c5Yurt-tunnel"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5yurt-tunnel-server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-tunnel-server.yaml\n")),(0,a.kt)("p",null,"\u7136\u540e\u518d\u5b89\u88c5yurt-tunnel-agent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f config/setup/yurt-tunnel-agent.yaml\n")),(0,a.kt)("p",null,"\u5f53yurt-tunnel-server\u548cyurt-tunnel-agent\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system get po"),"\u7b49\u786e\u8ba4\u4e00\u4e0byurt-tunnel\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38\u542f\u52a8\u3002"),(0,a.kt)("h3",{id:"34-\u5b89\u88c5yurthub\u914d\u7f6e"},"3.4 \u5b89\u88c5Yurthub\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5Yurthub\u914d\u7f6e(\u5982: RBAC, configmap):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurthub-cfg.yaml\n")),(0,a.kt)("h2",{id:"4-\u63a5\u5165\u8fb9\u7f18\u8282\u70b9"},"4. \u63a5\u5165\u8fb9\u7f18\u8282\u70b9"),(0,a.kt)("p",null,"\u5df2\u7ecf\u662fKubernetes\u96c6\u7fa4\u7684\u5de5\u4f5c\u8282\u70b9(\u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},"node/us-west-1.192.168.0.88"),")\uff0c\u6211\u4eec\u9700\u8981\u5728\u8282\u70b9\u5b89\u88c5OpenYurt\u7684\u8282\u70b9\u7aef\u7ec4\u4ef6(\u5982Yurthub)\u3002 \u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u4ece0\u5f00\u59cb\u5f80\u96c6\u7fa4\u4e2d\u63a5\u5165\u65b0\u8282\u70b9\u3002"),(0,a.kt)("h3",{id:"41-\u5df2\u63a5\u5165\u8282\u70b9\u7684\u914d\u7f6e\u8c03\u6574"},"4.1 \u5df2\u63a5\u5165\u8282\u70b9\u7684\u914d\u7f6e\u8c03\u6574"),(0,a.kt)("p",null,"\u4e0b\u8ff0\u64cd\u4f5c\uff0c\u4ec5\u4ec5\u9488\u5bf9\u5df2\u7ecf\u662fKubernetes\u96c6\u7fa4\u7684\u5de5\u4f5c\u8282\u70b9\u3002"),(0,a.kt)("h4",{id:"411-\u90e8\u7f72edge\u5de5\u4f5c\u6a21\u5f0f\u7684yurthub"},"4.1.1 \u90e8\u7f72Edge\u5de5\u4f5c\u6a21\u5f0f\u7684Yurthub"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece",(0,a.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/openyurt/blob/master/config/setup/yurthub.yaml"},"openyurt repo"),"\u83b7\u53d6yurthub.yaml\uff0c\u6267\u884c\u5982\u4e0b\u4fee\u6539\u540e\u4e0a\u4f20\u5230\u8fb9\u7f18\u8282\u70b9\u7684/etc/kubernets/manifests\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6 apiserver \u7684\u5730\u5740 (\u5373ip:port) \u548c ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/"},"bootstrap token")," \uff0c\u7528\u4e8e\u66ff\u6362\u6a21\u677f\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"yurthub.yaml")," \u4e2d\u7684\u5bf9\u5e94\u503c")),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe apiserver \u7684\u5730\u5740\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2.3.4:5678"),"\uff0cbootstrap token \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"07401b.f395accd246ae52d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# vi /etc/kubernetes/manifests/yurt-hub.yaml\n...\n    command:\n    - yurthub\n    - --v=2\n    - --server-addr=https://1.2.3.4:5678\n    - --node-name=$(NODE_NAME)\n    - --join-token=07401b.f395accd246ae52d\n...\n")),(0,a.kt)("p",null,"Yurthub \u5c06\u5728\u51e0\u5206\u949f\u5185\u51c6\u5907\u5c31\u7eea\u3002"),(0,a.kt)("h4",{id:"412-\u914d\u7f6ekubelet"},"4.1.2 \u914d\u7f6eKubelet"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u91cd\u7f6ekubelet\u670d\u52a1\uff0c\u8ba9kubelet\u901a\u8fc7Yurthub\u8bbf\u95eeapiserver (\u4ee5\u4e0b\u6b65\u9aa4\u5047\u8bbe\u6211\u4eec\u4ee5root\u8eab\u4efd\u767b\u5f55\u5230\u8fb9\u7f18\u8282\u70b9)\u3002\u7531\u4e8e kubelet \u4f1a\u901a\u8fc7 http \u8fde\u63a5 Yurthub\uff0c\u6240\u4ee5\u6211\u4eec\u4e3a kubelet \u670d\u52a1\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 kubeconfig \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba9 kubelet \u4f7f\u7528\u65b0\u7684 kubeconfig\uff0c\u6211\u4eec\u7f16\u8f91 kubelet \u670d\u52a1\u7684 drop-in \u6587\u4ef6(\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf")," \u6216\u8005  ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf")," \u5728 CentOS \u7cfb\u7edf\u4e0a))\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n')),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u91cd\u542f kubelet \u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u5f53\u91cd\u542fKubelet\u4e4b\u540e\u9700\u8981\u786e\u8ba4\u8282\u70b9\u72b6\u6001\u662f\u5426Ready\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n")),(0,a.kt)("h4",{id:"413-\u91cd\u5efa\u8282\u70b9\u4e0a\u7684pods"},"4.1.3 \u91cd\u5efa\u8282\u70b9\u4e0a\u7684Pods"),(0,a.kt)("p",null,"\u5f53\u5b89\u88c5\u5b8cYurthub\u5e76\u4e14\u8c03\u6574\u597dKubelet\u914d\u7f6e\u540e\uff0c\u4e3a\u4e86\u8ba9\u8282\u70b9\u4e0a\u6240\u6709Pods(Yurthub\u9664\u5916)\u90fd\u53ef\u4ee5\u901a\u8fc7Yurthub\u8bbf\u95eeKube-apiserver\uff0c\u6240\u6709\u9700\u8981\u91cd\u5efa\u8282\u70b9\u4e0a\u6240\u6709Pods(Yurthub pod\u9664\u5916)\u3002\u8bf7\u52a1\u5fc5\u786e\u8ba4\u8be5\u64cd\u4f5c\u5bf9\u751f\u4ea7\u73af\u5883\u7684\u5f71\u54cd\u540e\u518d\u6267\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n\n// \u5220\u9664\u8282\u70b9\u4e0a\u6240\u6709pods(Yurthub pod\u9664\u5916)\n$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr\n\n// \u786e\u8ba4\u8282\u70b9\u4e0a\u6240\u6709pods\u6b63\u5e38\u8fd0\u884c\n$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6ad                             1/1     Running   0          19d     10.148.2.198   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j123d                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-a2qdc                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n")),(0,a.kt)("h3",{id:"42-\u4ece\u96f6\u63a5\u5165\u65b0\u8282\u70b9"},"4.2 \u4ece\u96f6\u63a5\u5165\u65b0\u8282\u70b9"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm join"),"\u547d\u4ee4\u5f80\u96c6\u7fa4\u4e2d\u63a5\u5165\u8fb9\u7f18\u8282\u70b9\u3002\u547d\u4ee4\u7684\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u94fe\u63a5\uff1a ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v0.7.0/installation/yurtadm-init-join#23joining-nodes-to-cluster"},"yurtadm join")))}d.isMDXComponent=!0}}]);