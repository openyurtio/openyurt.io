"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3076],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return k}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=s(t),k=o,g=c["".concat(d,".").concat(k)]||c[k]||p[k]||a;return t?r.createElement(g,u(u({ref:n},i),{},{components:t})):r.createElement(g,u({ref:n},i))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var s=2;s<a;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1286:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=t(3117),o=(t(7294),t(3905));const a={slug:"Play-with-OpenYurt-on-Raspberry-Pi",title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",authors:["zyjhtangtang"],tags:["openyurt"]},u=void 0,l={permalink:"/blog/Play-with-OpenYurt-on-Raspberry-Pi",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2021-01-05-Play-with-OpenYurt-on-Raspberry-Pi.md",source:"@site/blog/2021-01-05-Play-with-OpenYurt-on-Raspberry-Pi.md",title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",description:"image",date:"2021-01-05T00:00:00.000Z",formattedDate:"January 5, 2021",tags:[{label:"openyurt",permalink:"/blog/tags/openyurt"}],readingTime:17.82,hasTruncateMarker:!0,authors:[{name:"zyjhtangtang",title:"Member of OpenYurt",url:"https://github.com/zyjhtangtang",imageURL:"https://github.com/zyjhtangtang.png",key:"zyjhtangtang"}],frontMatter:{slug:"Play-with-OpenYurt-on-Raspberry-Pi",title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",authors:["zyjhtangtang"],tags:["openyurt"]},prevItem:{title:"Elegant realization of edge gateway caching capabilities",permalink:"/blog/Edge-gateway-caching-capabilities"},nextItem:{title:"How to build Kubernetes Native Cloud side efficient collaborative network",permalink:"/blog/Build-side-efficient-collaborative-network"}},d={authorsImageUrls:[void 0]},s=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"1\uff09\u57fa\u7840\u73af\u5883\u4ecb\u7ecd",id:"1\u57fa\u7840\u73af\u5883\u4ecb\u7ecd",level:3},{value:"2)\u539f\u751fK8s\u96c6\u7fa4\u642d\u5efa",id:"2\u539f\u751fk8s\u96c6\u7fa4\u642d\u5efa",level:3},{value:"\u539f\u751f K8s \u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u95ee\u9898",id:"\u539f\u751f-k8s-\u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u95ee\u9898",level:2},{value:"1\uff09\u6d4b\u8bd5\u5e38\u7528\u7684\u96c6\u7fa4\u8fd0\u7ef4\u6307\u4ee4\uff0c\u5305\u62ec logs\u3001exec\u3001port-forward",id:"1\u6d4b\u8bd5\u5e38\u7528\u7684\u96c6\u7fa4\u8fd0\u7ef4\u6307\u4ee4\u5305\u62ec-logsexecport-forward",level:3},{value:"2\uff09\u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd",id:"2\u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd",level:3},{value:"1.\u65ad\u7f511\u5206\u949f-&gt;\u6062\u590d\u7f51\u7edc",id:"1\u65ad\u7f511\u5206\u949f-\u6062\u590d\u7f51\u7edc",level:4},{value:"2.\u65ad\u7f511\u5206\u949f-&gt;\u91cd\u542f\u8fb9\u7f18\u8282\u70b9-&gt;\u6062\u590d\u7f51\u7edc",id:"2\u65ad\u7f511\u5206\u949f-\u91cd\u542f\u8fb9\u7f18\u8282\u70b9-\u6062\u590d\u7f51\u7edc",level:4},{value:"\u539f\u751f K8s \u96c6\u7fa4\u4e00\u952e\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4",id:"\u539f\u751f-k8s-\u96c6\u7fa4\u4e00\u952e\u8f6c\u6362\u4e3a-openyurt-\u96c6\u7fa4",level:2},{value:"\u6d4b\u8bd5 OpenYurt \u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u80fd\u529b",id:"\u6d4b\u8bd5-openyurt-\u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u80fd\u529b",level:2},{value:"1. \u6d4b\u8bd5 logs/exec/port-forward \u7b49\u8fd0\u7ef4\u6307\u4ee4\uff0c\u67e5\u770b\u7ed3\u679c",id:"1-\u6d4b\u8bd5-logsexecport-forward-\u7b49\u8fd0\u7ef4\u6307\u4ee4\u67e5\u770b\u7ed3\u679c",level:3},{value:"2. \u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd",id:"2-\u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd",level:3},{value:"1\uff09\u65ad\u7f51 1 \u5206\u949f-&gt;\u7f51\u7edc\u6062\u590d",id:"1\u65ad\u7f51-1-\u5206\u949f-\u7f51\u7edc\u6062\u590d",level:4},{value:"2\uff09\u65ad\u7f51 1 \u5206\u949f-&gt;\u91cd\u542f\u8fb9\u7f18\u8282\u70b9-&gt;\u6062\u590d\u7f51\u7edc",id:"2\u65ad\u7f51-1-\u5206\u949f-\u91cd\u542f\u8fb9\u7f18\u8282\u70b9-\u6062\u590d\u7f51\u7edc",level:4}],i={toc:s};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(6838).Z,width:"960",height:"539"})),(0,o.kt)("p",null,"\u968f\u7740\u8fb9\u7f18\u8ba1\u7b97\u7684\u5feb\u901f\u53d1\u5c55\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u6570\u636e\u9700\u8981\u5230\u7f51\u7edc\u7684\u8fb9\u7f18\u4fa7\u8fdb\u884c\u5b58\u50a8\u3001\u5904\u7406\u548c\u5206\u6790\uff0c\u8fb9\u7f18\u7684\u8bbe\u5907\u548c\u5e94\u7528\u5448\u7206\u53d1\u5f0f\u589e\u957f\u3002\u5982\u4f55\u9ad8\u6548\u7684\u7ba1\u7406\u8fb9\u7f18\u4fa7\u7684\u8d44\u6e90\u548c\u5e94\u7528\u662f\u4e1a\u754c\u9762\u4e34\u7684\u4e00\u4e2a\u4e3b\u8981\u95ee\u9898\u3002\u5f53\u524d\uff0c\u91c7\u7528\u4e91\u539f\u751f\u7684\u65b9\u6cd5\uff0c\u5c06\u4e91\u8ba1\u7b97\u7684\u80fd\u529b\u4e0b\u6c89\u5230\u8fb9\u7f18\u5e76\u5728\u4e91\u7aef\u505a\u7edf\u4e00\u8c03\u5ea6\u3001\u7ba1\u63a7\u7684\u4e91\u8fb9\u7aef\u4e00\u4f53\u5316\u67b6\u6784\u5f97\u5230\u4e86\u4e1a\u754c\u7684\u5e7f\u6cdb\u8ba4\u53ef\u3002"),(0,o.kt)("p",null,"2020 \u5e74 5 \u6708\uff0c\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u9996\u4e2a Kubernetes \u65e0\u4fb5\u5165\u7684\u8fb9\u7f18\u8ba1\u7b97\u4e91\u539f\u751f\u9879\u76ee OpenYurt\uff0c\u5e76\u4e8e\u540c\u5e74 9 \u6708\u4efd\u8fdb\u5165 CNCF SandBox\u3002OpenYurt \u9488\u5bf9\u8fb9\u7f18\u573a\u666f\u4e2d\u7f51\u7edc\u4e0d\u7a33\u5b9a\u3001\u4e91\u8fb9\u8fd0\u7ef4\u56f0\u96be\u7b49\u95ee\u9898\uff0c\u5bf9\u539f\u751f Kubernetes \u65e0\u4fb5\u5165\u5730\u589e\u5f3a\uff0c\u91cd\u70b9\u63d0\u4f9b\u4e86\u8fb9\u7f18\u8282\u70b9\u81ea\u6cbb\u3001\u4e91\u8fb9\u8fd0\u7ef4\u901a\u9053\u3001\u8fb9\u7f18\u5355\u5143\u5316\u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u5982\u56fe\u4e0b\u6240\u793a\uff0c\n",(0,o.kt)("img",{alt:"image",src:t(6639).Z,width:"1080",height:"531"})),(0,o.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u5728\u4e91\u7aef\u90e8\u7f72 Kubernetes \u96c6\u7fa4\u7684\u63a7\u5236\u9762\uff0c\u5e76\u5c06\u6811\u8393\u6d3e\u63a5\u5165\u96c6\u7fa4\u6765\u642d\u5efa\u4e91\u7ba1\u8fb9\u573a\u666f\u3002\u57fa\u4e8e\u8fd9\u4e2a\u73af\u5883\u6f14\u793a OpenYurt \u7684\u6838\u5fc3\u80fd\u529b\uff0c\u5e26\u5927\u5bb6\u5feb\u901f\u4e0a\u624b OpenYurt\u3002"),(0,o.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("h3",{id:"1\u57fa\u7840\u73af\u5883\u4ecb\u7ecd"},"1\uff09\u57fa\u7840\u73af\u5883\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u5728\u4e91\u7aef\uff0c\u8d2d\u4e70 ENS \u8282\u70b9\uff08ENS \u8282\u70b9\u5177\u6709\u516c\u7f51 IP\uff0c\u65b9\u4fbf\u901a\u8fc7\u516c\u7f51\u5bf9\u5916\u66b4\u9732\u670d\u52a1\uff09\u6765\u90e8\u7f72\u539f\u751f K8s \u96c6\u7fa4\u7684\u7ba1\u63a7\u7ec4\u4ef6\u3002\u5176\u4e2d\u7cfb\u7edf\u91c7\u7528 ubuntu18.04\u3001hostname \u4e3a master-node\u3001docker \u7248\u672c\u4e3a 19.03.5\u3002"),(0,o.kt)("p",null,"\u5728\u8fb9\u7f18\uff0c\u5c06\u6811\u8393\u6d3e 4 \u4e0e\u672c\u5730\u7684\u8def\u7531\u5668\u8fde\u63a5\uff0c\u7ec4\u6210\u8fb9\u7f18\u79c1\u7f51\u73af\u5883\uff0c\u8def\u7531\u5668\u901a\u8fc7 4G \u7f51\u5361\u8bbf\u95ee\u4e92\u8054\u7f51\u3002\u5176\u4e2d\u6811\u8393\u6d3e 4 \u9884\u88c5\u7cfb\u7edf\u4e3a ubuntu18.04\u3001hostname\u4e3a edge-node\u3001docker \u7248\u672c\u4e3a 19.03.5\u3002\n",(0,o.kt)("img",{alt:"image",src:t(1252).Z,width:"1080",height:"809"})),(0,o.kt)("h3",{id:"2\u539f\u751fk8s\u96c6\u7fa4\u642d\u5efa"},"2)\u539f\u751fK8s\u96c6\u7fa4\u642d\u5efa"),(0,o.kt)("p",null,"\u672c\u6587\u6f14\u793a\u73af\u5883\u57fa\u4e8e\u793e\u533a1.16.6\u7248\u672c\u7684K8s\u96c6\u7fa4\uff0c\u5e76\u91c7\u7528\u793e\u533a\u63d0\u4f9b\u7684kubeadm\u5de5\u5177\u6765\u642d\u5efa\u96c6\u7fa4\uff0c\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u4e91\u7aef\u8282\u70b9\u548c\u6811\u8393\u6d3e\u4e0a\u5206\u522b\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 Kubernetes \u7ec4\u4ef6\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\necho "deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main" > /etc/apt/sources.list.d/kubernetes.list\nsudo apt-get update\nsudo apt install -y kubelet=1.16.6-00 kubeadm=1.16.6-00 kubectl=1.16.6-00\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528kubeadm \u521d\u59cb\u5316\u4e91\u7aef\u8282\u70b9\uff08\u5728\u4e91\u7aef\u8282\u70b9\u4e0a\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff09\uff0c\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u91c7\u7528\u963f\u91cc\u4e91\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u4e3a\u4e86\u652f\u6301\u6811\u8393\u6d3e\u7684\u63a5\u5165\uff0c\u8be5\u4ed3\u5e93\u7684\u955c\u50cf\u505a\u4e86 manifest \u5217\u8868\uff0c\u80fd\u591f\u652f\u6301 amd64/arm64 \u4e24\u79cd\u4e0d\u540c\u7684 CPU \u67b6\u6784\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# master-node\nkubeadm init --image-repository=registry.cn-hangzhou.aliyuncs.com/edge-kubernetes --kubernetes-version=v1.16.6 --pod-network-cidr=10.244.0.0/16\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f9d\u636e\u521d\u59cb\u5316\u5b8c\u6210\u4e4b\u540e\u7684\u63d0\u793a\uff0c\u62f7\u8d1d config \u6587\u4ef6\u5230 $HOME/.kube \u4e2d\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p $HOME/.kube\n sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6811\u8393\u6d3e\u63a5\u5165\u4e91\u7aef\u96c6\u7fa4\u4f9d\u636e\u7b2c\u4e8c\u6b65\u4e2d\u521d\u59cb\u5316\u5b8c\u6210\u4ee5\u540e\u8f93\u51fa\u7684\u8282\u70b9\u63a5\u5165\u4fe1\u606f\uff0c\u5728\u6811\u8393\u6d3e\u4e0a\u6267\u884c\u63a5\u5165\u547d\u4ee4\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubeadm join 183.195.233.42:6443 --token XXXX \\\n --discovery-token-ca-cert-hash XXXX\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 cni \u914d\u7f6e\uff08\u4e91\u7aef\u7ba1\u63a7\u8282\u70b9\u548c\u6811\u8393\u6d3e\u90fd\u9700\u8981\u914d\u7f6e\uff09\uff0c\u672c\u6587\u642d\u5efa\u7684\u96c6\u7fa4\u4f7f\u7528\u4e3b\u673a\u7f51\u7edc\u3002\u521b\u5efa cni \u914d\u7f6e\u6587\u4ef6 /etc/cni/net.d/0-loopback.conf\uff0c\u5e76\u5c06\u5982\u4e0b\u5185\u5bb9\u62f7\u8d1d\u5230\u8be5\u6587\u4ef6\u4e2d\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n "cniVersion": "0.3.0",\n "name": "lo",\n "type": "loopback"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 master \u8282\u70b9\u4e0a\u67e5\u770b\u90e8\u7f72\u6548\u679c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME STATUS ROLES AGE VERSION INTERNAL-IP EXTERNAL-IP OS-IMAGE KERNEL-VERSION CONTAINER-RUNTIME\nedge-node Ready <none>   74s    v1.16.6   192.168.0.100    <none>        Ubuntu 18.04.4 LTS   4.19.105-v8-28      docker://19.3.5\nmaster-node   Ready    master   2m5s   v1.16.6   183.195.233.42   <none>        Ubuntu 18.04.2 LTS   4.15.0-52-generic   docker://19.3.5\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5220\u9664 CoreDNS\uff08\u672c\u6587 Demo \u4e2d CoreDNS \u4e0d\u9700\u8981\u4f7f\u7528\uff09\uff0c\u5e76\u5c06 master \u8282\u70b9\u7684 taints \u53bb\u6389\uff08\u65b9\u4fbf\u540e\u7eed\u90e8\u7f72 OpenYurt \u7ec4\u4ef6\uff09\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl delete deployment coredns -n kube-system\nkubectl taint node master-node node-role.kubernetes.io/master-\n")),(0,o.kt)("h2",{id:"\u539f\u751f-k8s-\u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u95ee\u9898"},"\u539f\u751f K8s \u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u73af\u5883\uff0c\u6211\u4eec\u6765\u6d4b\u8bd5\u4e00\u4e0b\u539f\u751f K8s \u5728\u4e91\u7ba1\u8fb9\u67b6\u6784\u4e2d\u5bf9\u4e91\u8fb9\u8fd0\u7ef4\u7684\u652f\u6301\u548c\u5bf9\u4e91\u8fb9\u7f51\u7edc\u65ad\u5f00\u65f6\u7684\u53cd\u5e94\u3002\u9996\u5148\uff0c\u6211\u4eec\u4ece\u4e91\u7aef\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5\u5e94\u7528 nginx\uff0c\u5728 master \u8282\u70b9\u4e0a\u6267\u884c kubectl apply -f nginx.yaml\uff0c\u5177\u4f53\u7684\u90e8\u7f72 yaml \u5982\u4e0b\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1anodeSelector \u9009\u62e9 edge-node \u8282\u70b9\uff0c\u4e3b\u673a\u7f51\u7edc\u914d\u7f6e\u4e3a true\uff0c\u5e76\u914d\u7f6e pod \u7684\u5bb9\u5fcd\u65f6\u95f4\u4e3a 5s\uff08\u9ed8\u8ba4 5min, \u6b64\u5904\u914d\u7f6e\u4fbf\u4e8e\u6f14\u793a pod \u9a71\u9010\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n name: nginx\nspec:\n tolerations:\n - key: "node.kubernetes.io/unreachable"\n operator: "Exists"\n effect: "NoExecute"\n tolerationSeconds: 5\n - key: "node.kubernetes.io/not-ready"\n operator: "Exists"\n effect: "NoExecute"\n tolerationSeconds: 5\n nodeSelector:\n kubernetes.io/hostname: edge-node\n containers:\n - name: nginx\n image: nginx\n hostNetwork: true\n')),(0,o.kt)("p",null,"\u67e5\u770b\u90e8\u7f72\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nroot@master-node:~# kubectl get pods -owide\nNAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES\nnginx 1/1 Running 0 11s 192.168.0.100 edge-node <none> \n")),(0,o.kt)("h3",{id:"1\u6d4b\u8bd5\u5e38\u7528\u7684\u96c6\u7fa4\u8fd0\u7ef4\u6307\u4ee4\u5305\u62ec-logsexecport-forward"},"1\uff09\u6d4b\u8bd5\u5e38\u7528\u7684\u96c6\u7fa4\u8fd0\u7ef4\u6307\u4ee4\uff0c\u5305\u62ec logs\u3001exec\u3001port-forward"),(0,o.kt)("p",null,"\u5728 master \u8282\u70b9\u4e0a\u8fd0\u7ef4\u8fb9\u7f18\u8282\u70b9\u5e94\u7528\uff0c\u6267\u884c logs/exec/port-forward \u7b49\u6307\u4ee4\uff0c\u67e5\u770b\u7ed3\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl logs nginx\nError from server: Get https://192.168.0.100:10250/containerLogs/default/nginx/nginx: dial tcp 192.168.0.100:10250: connect: connection refused\n\nroot@master-node:~# kubectl exec -it nginx sh\nkubectl exec [POD] [COMMAND] is DEPRECATED and will be removed in a future version. Use kubectl exec [POD] -- [COMMAND] instead.\nError from server: error dialing backend: dial tcp 192.168.0.100:10250: connect: connection refused\n\nroot@master-node:~# kubectl port-forward pod/nginx 8888:80\nerror: error upgrading connection: error dialing backend: dial tcp 192.168.0.100:10250: connect: connection refused\n")),(0,o.kt)("p",null,"\u4ece\u6267\u884c\u7ed3\u679c\u770b\uff0c\u539f\u751f\u7684k8s\u5728\u4e91\u7ba1\u8fb9\u7684\u573a\u666f\u4e2d\uff0c\u65e0\u6cd5\u63d0\u4f9b\u4ece\u4e91\u7aef\u8fd0\u7ef4\u8fb9\u7f18\u5e94\u7528\u7684\u80fd\u529b\u3002\u8fd9\u662f\u56e0\u4e3a\u8fb9\u7f18\u8282\u70b9\u90e8\u7f72\u5728\u7528\u6237\u7684\u79c1\u7f51\u73af\u5883\uff0c\u4ece\u4e91\u7aef\u65e0\u6cd5\u901a\u8fc7\u8fb9\u7f18\u8282\u70b9\u7684 IP \u5730\u5740\u76f4\u63a5\u8bbf\u95ee\u8fb9\u7f18\u8282\u70b9\u3002"),(0,o.kt)("h3",{id:"2\u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd"},"2\uff09\u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd"),(0,o.kt)("p",null,"\u8fb9\u7f18\u8282\u70b9\u4e0e\u4e91\u7aef\u7ba1\u63a7\u901a\u8fc7\u516c\u7f51\u8fde\u63a5\uff0c\u7ecf\u5e38\u4f1a\u51fa\u73b0\u7f51\u7edc\u4e0d\u7a33\u5b9a\uff0c\u4e91\u7aef\u65ad\u8fde\u7684\u60c5\u51b5\u3002\u8fd9\u91cc\u6211\u4eec\u5c06\u505a\u4e24\u4e2a\u65ad\u7f51\u76f8\u5173\u7684\u6d4b\u8bd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u65ad\u7f51 1 \u5206\u949f->\u6062\u590d\u7f51\u7edc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u65ad\u7f51 1 \u5206\u949f->\u91cd\u542f\u8fb9\u7f18\u8282\u70b9->\u6062\u590d\u7f51\u7edc"))),(0,o.kt)("p",null,"\u89c2\u5bdf\u4e24\u4e2a\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u8282\u70b9\u548c Pod \u7684\u72b6\u6001\u53d8\u5316\u3002\u672c\u6587 Demo \u4e2d\u7684\u65ad\u7f51\u65b9\u5f0f\u662f\u5c06\u8def\u7531\u5668\u7684\u516c\u7f51\u8fde\u63a5\u65ad\u5f00\u3002"),(0,o.kt)("h4",{id:"1\u65ad\u7f511\u5206\u949f-\u6062\u590d\u7f51\u7edc"},"1.\u65ad\u7f511\u5206\u949f->\u6062\u590d\u7f51\u7edc"),(0,o.kt)("p",null,"\u65ad\u5f00\u7f51\u7edc\uff0c\u5927\u7ea6 40s \u540e\uff0c\u8282\u70b9\u53d8\u6210 NotReady\uff08\u6b63\u5e38\u8282\u70b9 10s \u949f\u4e0a\u62a5\u4e00\u6b21\u5fc3\u8df3\uff0c\u5f53 4 \u6b21\u6ca1\u6709\u4e0a\u62a5\u5fc3\u8df3\u65f6\uff0c\u7ba1\u63a7\u7ec4\u4ef6\u8ba4\u4e3a\u8282\u70b9\u5f02\u5e38\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nroot@master-node:~# kubectl get nodes\nNAME STATUS ROLES AGE VERSION\nedge-node NotReady <none>   5m13s   v1.16.6\nmaster-node   Ready      master   6m4s    v1.16.6\n")),(0,o.kt)("p",null,"\u7ee7\u7eed\u7b49\u5f85 5s \u4e4b\u540e\uff08\u6b63\u5e38\u8282\u70b9\u53d8\u4e3a NotReady \u4e4b\u540e\uff0c5m \u624d\u5f00\u59cb\u9a71\u9010 pod\uff0c\u6b64\u5904\u4e3a\u4e86\u6d4b\u8bd5\u6548\u679c\uff0c\u5c06 pod \u7684\u5bb9\u5fcd\u65f6\u95f4\u914d\u6210\u4e86 5s\uff09\uff0c\u5e94\u7528 pod \u88ab\u9a71\u9010\uff0c\u72b6\u6001\u53d8\u4e3a Terminating\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get pods\nNAME READY STATUS RESTARTS AGE\nnginx 1/1 Terminating 0 3m45s\n")),(0,o.kt)("p",null,"\u5c06\u7f51\u7edc\u6062\u590d\uff0c\u89c2\u5bdf\u8282\u70b9\u53ca pod \u53d8\u5316\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get pods\nNo resources found in default namespace.\n")),(0,o.kt)("p",null,"\u7f51\u7edc\u6062\u590d\u540e\uff0c\u8282\u70b9\u72b6\u6001\u53d8\u6210 ready\uff0c\u4e1a\u52a1 pod \u88ab\u6e05\u9664\uff0c\u8fd9\u662f\u56e0\u4e3a\u8fb9\u7f18\u8282\u70b9\u7684 Kubelet \u83b7\u53d6\u5230\u4e1a\u52a1 Pod \u7684 Terminating \u72b6\u6001\uff0c\u5bf9\u4e1a\u52a1 Pod \u505a\u5220\u9664\u64cd\u4f5c\uff0c\u5e76\u8fd4\u56de\u5220\u9664\u6210\u529f\uff0c\u4e91\u7aef\u4e5f\u505a\u4e86\u76f8\u5e94\u7684\u6e05\u7406\u3002\u81f3\u6b64\uff0c\u4e1a\u52a1 Pod \u7531\u4e8e\u4e91\u8fb9\u7f51\u7edc\u7684\u4e0d\u7a33\u5b9a\u800c\u88ab\u9a71\u9010\uff0c\u7136\u800c\u5728\u65ad\u7f51\u671f\u95f4\uff0c\u8fb9\u7f18\u8282\u70b9\u5176\u5b9e\u662f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u7684\u3002"),(0,o.kt)("p",null,"\u91cd\u65b0\u521b\u5efa\u5e94\u7528 nginx\uff0c\u7528\u4e8e\u4e0b\u9762\u6d4b\u8bd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get pods -owide\nNAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES\nnginx 1/1 Running 0 4s 192.168.0.100 edge-node <none>           <none>\n")),(0,o.kt)("h4",{id:"2\u65ad\u7f511\u5206\u949f-\u91cd\u542f\u8fb9\u7f18\u8282\u70b9-\u6062\u590d\u7f51\u7edc"},"2.\u65ad\u7f511\u5206\u949f->\u91cd\u542f\u8fb9\u7f18\u8282\u70b9->\u6062\u590d\u7f51\u7edc"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6d4b\u8bd5\u5728\u65ad\u7f51\u7684\u60c5\u51b5\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u7684\u91cd\u542f\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd\u3002\u65ad\u7f51 1 \u5206\u949f\u4e4b\u540e\uff0cNode \u548c Pod \u72b6\u6001\u540c\u4e0a\u9762\u6d4b\u8bd5\u7ed3\u679c\uff0cNode \u53d8\u4e3a NotReady\uff0cPod \u7684\u72b6\u6001\u53d8\u4e3a Terminating\u3002\u6b64\u65f6\uff0c\u5207\u6362\u5230\u79c1\u6709\u7f51\u7edc\u73af\u5883\uff0c\u767b\u5f55\u5230\u6811\u8393\u6d3e\u4e0a\uff0c\u5c06\u6811\u8393\u6d3e\u91cd\u542f\uff0c\u91cd\u542f\u5b8c\u6210\u540e\u7b49\u5f85\u5927\u7ea6 1 \u5206\u949f\uff0c\u89c2\u5bdf\u91cd\u542f\u524d\u540e\u8282\u70b9\u4e0a\u7684\u5bb9\u5668\u5217\u8868\u3002"),(0,o.kt)("p",null,"\u91cd\u542f\u524d\u8fb9\u7f18\u8282\u70b9\u5bb9\u5668\u5217\u8868\uff08\u6b64\u65f6\u4e91\u8fb9\u7aef\u5f00\uff0c\u867d\u7136\u5728\u4e91\u7aef\u83b7\u53d6\u7684 pod \u662f Terminating \u72b6\u6001\uff0c\u4f46\u662f\u8fb9\u7f18\u5e76\u672a Watch \u5230 Terminating \u7684\u64cd\u4f5c\uff0c\u6240\u4ee5\u8fb9\u7f18\u7684\u5e94\u7528\u8fd8\u6b63\u5e38\u8fd0\u884c\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'root@edge-node:~# docker ps\nCONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES\n9671cbf28ca6 e86f991e5d10 "/docker-entrypoint.\u2026" About a minute ago Up About a minute k8s_nginx_nginx_default_efdf11c6-a41c-4b95-8ac8-45e02c9e1f4d_0\n6272a46f93ef registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 2 minutes ago Up About a minute k8s_POD_nginx_default_efdf11c6-a41c-4b95-8ac8-45e02c9e1f4d_0\n698bb024c3db f9ea384ddb34 "/usr/local/bin/kube\u2026" 8 minutes ago Up 8 minutes k8s_kube-proxy_kube-proxy-rjws7_kube-system_51576be4-2b6d-434d-b50b-b88e2d436fef_0\n31952700c95b registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 8 minutes ago Up 8 minutes k8s_POD_kube-proxy-rjws7_kube-system_51576be4-2b6d-434d-b50b-b88e2d436fef_0\n')),(0,o.kt)("p",null,"\u91cd\u542f\u540e\u8282\u70b9\u5bb9\u5668\u5217\u8868\uff0c\u65ad\u7f51\u91cd\u542f\u540e\uff0ckubelet \u65e0\u6cd5\u4ece\u4e91\u7aef\u83b7\u53d6 Pod \u4fe1\u606f\uff0c\u4e0d\u4f1a\u91cd\u5efa Pod\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@edge-node:~# docker ps\nCONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES\nroot@edge-node:~#\n")),(0,o.kt)("p",null,"\u4ece\u91cd\u542f\u524d\u540e\u7684\u5bf9\u6bd4\u770b\uff0c\u8fb9\u7f18\u8282\u70b9\u5728\u65ad\u7f51\u91cd\u542f\u4e4b\u540e\uff0c\u8282\u70b9\u4e0a\u7684 Pod \u5168\u90e8\u65e0\u6cd5\u6062\u590d\u3002\u8fd9\u5c31\u4f1a\u5bfc\u81f4\u5728\u4e91\u8fb9\u65ad\u7f51\u65f6\uff0c\u4e00\u65e6\u8282\u70b9\u91cd\u542f\uff0c\u5e94\u7528\u5c06\u65e0\u6cd5\u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"\u5c06\u7f51\u7edc\u6062\u590d\uff0c\u89c2\u5bdf\u8282\u70b9\u53ca pod \u53d8\u5316\uff0c\u540c\u4e0a\u9762\u6d4b\u8bd5\u7ed3\u679c\uff0c\u7f51\u7edc\u6062\u590d\u540e\uff0c\u8282\u70b9\u53d8\u4e3a Ready\uff0c\u4e1a\u52a1 Pod \u88ab\u6e05\u9664\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get nodes\nNAME STATUS ROLES AGE VERSION\nedge-node Ready <none>   11m   v1.16.6\nmaster-node   Ready    master   12m   v1.16.6\nroot@master-node:~# kubectl get pods\nNo resources found in default namespace.\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u518d\u6b21\u90e8\u7f72\u4e1a\u52a1 nginx\uff0c\u6d4b\u8bd5 OpenYurt \u96c6\u7fa4\u5bf9\u4e91\u8fb9\u8fd0\u7ef4\u7684\u652f\u6301\u548c\u5bf9\u4e91\u8fb9\u65ad\u7f51\u65f6\u7684\u53cd\u5e94\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nroot@master-node:~# kubectl get pods -owide\nNAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES\nnginx 1/1 Running 0 12s 192.168.0.100 edge-node <none>           <none>\n")),(0,o.kt)("h2",{id:"\u539f\u751f-k8s-\u96c6\u7fa4\u4e00\u952e\u8f6c\u6362\u4e3a-openyurt-\u96c6\u7fa4"},"\u539f\u751f K8s \u96c6\u7fa4\u4e00\u952e\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4"),(0,o.kt)("p",null,"\u63a2\u7a76\u4e86\u539f\u751f Kubernetes \u5728\u4e91\u8fb9\u4e00\u4f53\u5316\u67b6\u6784\u4e2d\u7684\u4e0d\u8db3\u4e4b\u540e\uff0c\u6211\u4eec\u6765\u770b\u4e0b OpenYurt \u96c6\u7fa4\u662f\u5426\u80fd\u6ee1\u8db3\u8fd9\u79cd\u573a\u666f\u3002\u73b0\u5728\uff0c\u6211\u4eec\u5229\u7528 OpenYurt \u793e\u533a\u63d0\u4f9b\u7684\u96c6\u7fa4\u8f6c\u6362\u5de5\u5177 yurtctl\uff0c\u6765\u5c06\u539f\u751f K8s \u96c6\u7fa4\u8f6c\u6362\u6210 OpenYurt \u96c6\u7fa4\u3002\u5728 master \u8282\u70b9\u4e0a\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c \u8be5\u547d\u4ee4\u6307\u5b9a\u4e86\u7ec4\u4ef6\u7684\u955c\u50cf\u4ee5\u53ca\u4e91\u7aef\u8282\u70b9\uff0c\u5e76\u6307\u5b9a\u5b89\u88c5\u4e91\u8fb9\u8fd0\u7ef4\u901a\u9053 yurt-tunnel\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yurtctl convert --yurt-controller-manager-image=registry.cn-hangzhou.aliyuncs.com/openyurt/yurt-controller-manager:v0.2.1 --yurt-tunnel-agent-image=registry.cn-hangzhou.aliyuncs.com/openyurt/yurt-tunnel-agent:v0.2.1 --yurt-tunnel-server-image=registry.cn-hangzhou.aliyuncs.com/openyurt/yurt-tunnel-server:v0.2.1 --yurtctl-servant-image=registry.cn-hangzhou.aliyuncs.com/openyurt/yurtctl-servant:v0.2.1 --yurthub-image=registry.cn-hangzhou.aliyuncs.com/openyurt/yurthub:v0.2.1 --cloud-nodes=master-node --deploy-yurttunnel\n")),(0,o.kt)("p",null,"\u8f6c\u6362\u5927\u6982\u9700\u8981 2min\uff0c\u8f6c\u6362\u5b8c\u6210\u4e4b\u540e\uff0c\u89c2\u5bdf\u4e1a\u52a1 pod \u7684\u72b6\u6001\uff0c\u53ef\u4ee5\u770b\u5230\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u5bf9\u4e1a\u52a1 pod \u65e0\u5f71\u54cd\uff08\u4e5f\u53ef\u4ee5\u5728\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u5728\u65b0\u7684\u7ec8\u7aef\u4f7f\u7528 kubectl get pod -w \u89c2\u5bdf\u4e1a\u52a1 pod \u7684\u72b6\u6001\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get pods -owide\nNAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES\nnginx 1/1 Running 0 2m4s 192.168.0.100 edge-node <none>           <none>\n")),(0,o.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u4e4b\u540e\u7684\u7ec4\u4ef6\u5206\u5e03\u5982\u4e0b\u56fe \u6240\u793a\uff0c\u5176\u4e2d\u6a59\u8272\u90e8\u5206\u662f OpenYurt \u76f8\u5173\u7684\u7ec4\u4ef6\uff0c\u84dd\u8272\u90e8\u5206\u662f\u539f\u751f K8s \u7ec4\u4ef6\u3002\u76f8\u5e94\u5730\uff0c\u6211\u4eec\u89c2\u5bdf\u4e91\u7aef\u8282\u70b9\u548c\u8fb9\u7f18\u8282\u70b9\u7684 pod\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(9730).Z,width:"1080",height:"545"})),(0,o.kt)("p",null,"\u4e91\u7aef\u8282\u70b9 yurt \u76f8\u5173\u7684 pod\uff1ayurt-controller-manager \u548c yurt-tunnel-server\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get pods --all-namespaces -owide | grep master | grep yurt\nkube-system yurt-controller-manager-7d9db5bf85-6542h 1/1 Running 0 103s 183.195.233.42 master-node <none>           <none>\nkube-system   yurt-tunnel-server-65784dfdf-pl5bn         1/1     Running   0          103s    183.195.233.42   master-node   <none>           <none>\n")),(0,o.kt)("p",null,"\u8fb9\u7f18\u8282\u70b9\u65b0\u589e yurt \u76f8\u5173\u7684 pod: yurt-hub\uff08static pod\uff09\u548c yurt-tunnel-agent\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get pods --all-namespaces -owide | grep edge | grep yurt\nkube-system yurt-hub-edge-node 1/1 Running 0 117s 192.168.0.100 edge-node <none>           <none>\nkube-system   yurt-tunnel-agent-7l8nv                    1/1     Running   0          2m      192.168.0.100    edge-node     <none>           <none>\n")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5-openyurt-\u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u80fd\u529b"},"\u6d4b\u8bd5 OpenYurt \u96c6\u7fa4\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\u7684\u80fd\u529b"),(0,o.kt)("h3",{id:"1-\u6d4b\u8bd5-logsexecport-forward-\u7b49\u8fd0\u7ef4\u6307\u4ee4\u67e5\u770b\u7ed3\u679c"},"1. \u6d4b\u8bd5 logs/exec/port-forward \u7b49\u8fd0\u7ef4\u6307\u4ee4\uff0c\u67e5\u770b\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl logs nginx\n/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration\n/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh\n10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf\n10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh\n/docker-entrypoint.sh: Configuration complete; ready for start up\n\n\nroot@master-node:~# kubectl exec -it nginx sh\nkubectl exec [POD] [COMMAND] is DEPRECATED and will be removed in a future version. Use kubectl exec [POD] -- [COMMAND] instead.\n# ls\nbin dev docker-entrypoint.sh home media opt root sbin sys usr\nboot docker-entrypoint.d etc lib mnt proc run srv tmp var\n# exit\n\n\nroot@master-node:~# kubectl port-forward pod/nginx 8888:80\nForwarding from 127.0.0.1:8888 -> 80\nHandling connection for 8888\n")),(0,o.kt)("p",null,"\u6d4b\u8bd5 port-forward \u65f6\uff0c\u5728 master \u8282\u70b9\u4e0a\u6267\u884c curl 127.0.0.1:8888\uff0c\u53ef\u4ee5\u8bbf\u95ee nginx \u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u4ece\u6f14\u793a\u7ed3\u679c\u770b\uff0cOpenYurt \u80fd\u591f\u5f88\u597d\u5730\u652f\u6301\u5e38\u7528\u7684\u4e91\u8fb9\u8fd0\u7ef4\u6307\u4ee4\u3002"),(0,o.kt)("h3",{id:"2-\u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd"},"2. \u6d4b\u8bd5\u8fb9\u7f18\u65ad\u7f51\u65f6\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd"),(0,o.kt)("p",null,"\u540c\u6837\u6211\u4eec\u91cd\u590d\u539f\u751f K8s \u4e2d\u65ad\u7f51\u7684\u4e24\u4e2a\u6d4b\u8bd5\uff0c\u5728\u6d4b\u8bd5\u4e4b\u524d\u6211\u4eec\u5148\u4e3a\u8fb9\u7f18\u8282\u70b9 edge-node \u5f00\u542f\u81ea\u6cbb\u3002\u5728 OpenYurt \u96c6\u7fa4\u4e2d\uff0c\u8fb9\u7f18\u8282\u70b9\u7684\u81ea\u6cbb\u662f\u901a\u8fc7\u4e00\u4e2a annotation \u6765\u6807\u8bc6\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl annotate node edge-node node.beta.alibabacloud.com/autonomy=true\nnode/edge-node annotated\n")),(0,o.kt)("h4",{id:"1\u65ad\u7f51-1-\u5206\u949f-\u7f51\u7edc\u6062\u590d"},"1\uff09\u65ad\u7f51 1 \u5206\u949f->\u7f51\u7edc\u6062\u590d"),(0,o.kt)("p",null,"\u540c\u6837\uff0c\u5c06\u8def\u7531\u5668\u516c\u7f51\u65ad\u5f00\uff0c\u89c2\u5bdf Node \u548c Pod \u7684\u72b6\u6001\u3002\u5927\u7ea6\u8fc7\u4e86 40s\uff0c\u8282\u70b9\u7684\u72b6\u6001\u53d8\u6210 NotReady\uff0c\u800c\u5927\u7ea6\u8fc7 1min \u4ee5\u540e\uff0cPod \u7684\u72b6\u6001\u4e00\u76f4\u662f Running\uff0c\u5e76\u4e0d\u4f1a\u88ab\u9a71\u9010\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get nodes\nNAME STATUS ROLES AGE VERSION\nedge-node NotReady <none>   24m   v1.16.6\nmaster-node   Ready      master   25m   v1.16.6\nroot@master-node:~# kubectl get pods\nNAME    READY   STATUS    RESTARTS   AGE\nnginx   1/1     Running   0          5m7s\n")),(0,o.kt)("p",null,"\u6062\u590d\u7f51\u7edc\uff0c\u89c2\u5bdf Node \u548c Pod \u7684\u72b6\u6001\uff0cNode \u72b6\u6001\u53d8\u4e3a Ready\uff0cPod \u4fdd\u6301 Running\u3002\u53ef\u89c1\u4e91\u8fb9\u7f51\u7edc\u4e0d\u7a33\u5b9a\u65f6\uff0c\u5bf9\u8fb9\u7f18\u8282\u70b9\u7684\u4e1a\u52a1 Pod \u65e0\u5f71\u54cd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get nodes\nNAME STATUS ROLES AGE VERSION\nedge-node Ready <none>   25m   v1.16.6\nmaster-node   Ready    master   26m   v1.16.6\nroot@master-node:~# kubectl get pods\nNAME    READY   STATUS    RESTARTS   AGE\nnginx   1/1     Running   0          6m30s\n")),(0,o.kt)("h4",{id:"2\u65ad\u7f51-1-\u5206\u949f-\u91cd\u542f\u8fb9\u7f18\u8282\u70b9-\u6062\u590d\u7f51\u7edc"},"2\uff09\u65ad\u7f51 1 \u5206\u949f->\u91cd\u542f\u8fb9\u7f18\u8282\u70b9->\u6062\u590d\u7f51\u7edc"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6d4b\u8bd5\u5728\u65ad\u7f51\u7684\u60c5\u51b5\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u7684\u91cd\u542f\u5bf9\u4e1a\u52a1\u7684\u5f71\u54cd\u3002\u65ad\u7f51 1 \u5206\u949f\u4e4b\u540e\uff0cNode \u548c Pod \u72b6\u6001\u540c\u4e0a\u9762\u6d4b\u8bd5\u7ed3\u679c\uff0cNode \u53d8\u4e3a NotReady\uff0cPod \u4fdd\u6301 Running\u3002\u540c\u6837\uff0c\u6211\u4eec\u767b\u5f55\u5230\u6811\u8393\u6d3e\u4e0a\uff0c\u5c06\u6811\u8393\u6d3e\u91cd\u542f\uff0c\u89c2\u5bdf\u91cd\u542f\u524d\u540e\u8282\u70b9\u4e0a\u7684\u5bb9\u5668\u5217\u8868\u3002"),(0,o.kt)("p",null,"\u91cd\u542f\u524d\u8fb9\u7f18\u8282\u70b9\u5bb9\u5668\u5217\u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'root@edge-node:~# docker ps\nCONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES\n38727ec9270c 70bf6668c7eb "yurthub --v=2 --ser\u2026" 7 minutes ago Up 7 minutes k8s_yurt-hub_yurt-hub-edge-node_kube-system_d75d122e752b90d436a71af44c0a53be_0\nc403ace1d4ff registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 7 minutes ago Up 7 minutes k8s_POD_yurt-hub-edge-node_kube-system_d75d122e752b90d436a71af44c0a53be_0\nde0d693e9e74 473ae979be68 "yurt-tunnel-agent -\u2026" 7 minutes ago Up 7 minutes k8s_yurt-tunnel-agent_yurt-tunnel-agent-7l8nv_kube-system_75d28494-f577-43fa-9cac-6681a1215498_0\na0763f143f74 registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 7 minutes ago Up 7 minutes k8s_POD_yurt-tunnel-agent-7l8nv_kube-system_75d28494-f577-43fa-9cac-6681a1215498_0\n80c247714402 e86f991e5d10 "/docker-entrypoint.\u2026" 7 minutes ago Up 7 minutes k8s_nginx_nginx_default_b45baaac-eebc-466b-9199-2ca5c1ede9fd_0\n01f7770cb0f7 registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 7 minutes ago Up 7 minutes k8s_POD_nginx_default_b45baaac-eebc-466b-9199-2ca5c1ede9fd_0\n7e65f83090f6 f9ea384ddb34 "/usr/local/bin/kube\u2026" 17 minutes ago Up 17 minutes k8s_kube-proxy_kube-proxy-rjws7_kube-system_51576be4-2b6d-434d-b50b-b88e2d436fef_1\nc1ed142fc75b registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 17 minutes ago Up 17 minutes k8s_POD_kube-proxy-rjws7_kube-system_51576be4-2b6d-434d-b50b-b88e2d436fef_1\n')),(0,o.kt)("p",null,"\u91cd\u542f\u540e\u8fb9\u7f18\u8282\u70b9\u5bb9\u5668\u5217\u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'root@edge-node:~# docker ps\nCONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES\n0c66b87066a0 473ae979be68 "yurt-tunnel-agent -\u2026" 12 seconds ago Up 11 seconds k8s_yurt-tunnel-agent_yurt-tunnel-agent-7l8nv_kube-system_75d28494-f577-43fa-9cac-6681a1215498_2\na4fb3e4e8c8f e86f991e5d10 "/docker-entrypoint.\u2026" 58 seconds ago Up 56 seconds k8s_nginx_nginx_default_b45baaac-eebc-466b-9199-2ca5c1ede9fd_1\nfce730d64b32 f9ea384ddb34 "/usr/local/bin/kube\u2026" 58 seconds ago Up 57 seconds k8s_kube-proxy_kube-proxy-rjws7_kube-system_51576be4-2b6d-434d-b50b-b88e2d436fef_2\nc78166ea563f registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 59 seconds ago Up 57 seconds k8s_POD_yurt-tunnel-agent-7l8nv_kube-system_75d28494-f577-43fa-9cac-6681a1215498_1\n799ad14bcd3b registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 59 seconds ago Up 57 seconds k8s_POD_nginx_default_b45baaac-eebc-466b-9199-2ca5c1ede9fd_1\n627673da6a85 registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" 59 seconds ago Up 58 seconds k8s_POD_kube-proxy-rjws7_kube-system_51576be4-2b6d-434d-b50b-b88e2d436fef_2\n04da705e4120 70bf6668c7eb "yurthub --v=2 --ser\u2026" About a minute ago Up About a minute k8s_yurt-hub_yurt-hub-edge-node_kube-system_d75d122e752b90d436a71af44c0a53be_1\n260057d935ee registry.cn-hangzhou.aliyuncs.com/edge-kubernetes/pause:3.1 "/pause" About a minute ago Up About a minute k8s_POD_yurt-hub-edge-node_kube-system_d75d122e752b90d436a71af44c0a53be_1\n')),(0,o.kt)("p",null,"\u4ece\u91cd\u542f\u524d\u540e\u7684\u5bf9\u6bd4\u770b\uff0c\u8fb9\u7f18\u8282\u70b9\u5728\u65ad\u7f51\u91cd\u542f\u4e4b\u540e\uff0c\u8282\u70b9\u4e0a\u7684 pod \u80fd\u6b63\u5e38\u62c9\u8d77\uff0cOpenYurt \u7684\u8282\u70b9\u81ea\u6cbb\u80fd\u529b\u53ef\u4ee5\u5728\u65ad\u7f51\u4e0b\u4fdd\u8bc1\u4e1a\u52a1\u7684\u7a33\u5b9a\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u6062\u590d\u7f51\u7edc\uff0c\u8282\u70b9 Ready\uff0c\u89c2\u5bdf\u4e1a\u52a1 pod \u7684\u72b6\u6001\uff0c\u7f51\u7edc\u6062\u590d\u540e\uff0c\u4e1a\u52a1 pod \u72b6\u6001\u4fdd\u6301 running\uff0c\u6709\u4e00\u6b21\u91cd\u542f\u8bb0\u5f55\uff0c\u7b26\u5408\u9884\u671f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@master-node:~# kubectl get pods -owide\nNAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES\nnginx 1/1 Running 1 11m 192.168.0.100 edge-node <none>           <none>\n")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u4eceyurtctl\u7684\u80fd\u529b\u5c06OpenYurt\u96c6\u7fa4\uff0c\u8f6c\u6362\u4e3a\u539f\u751fK8s\u96c6\u7fa4\u3002\u540c\u6837\uff0c\u53ef\u4ee5\u89c2\u5bdf\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u5bf9\u73b0\u6709\u4e1a\u52a1\u4e0d\u4f1a\u6709\u5f71\u54cd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yurtctl revert --yurtctl-servant-image=registry.cn-hangzhou.aliyuncs.com/openyurt/yurtctl-servant:v0.2.1\n")),(0,o.kt)("p",null,"OpenYurt \u4f5c\u4e3a\u963f\u91cc\u9996\u4e2a\u8fb9\u7f18\u4e91\u539f\u751f\u5f00\u6e90\u9879\u76ee\uff0c\u57fa\u4e8e\u5546\u4e1a\u5316\u4ea7\u54c1 ACK@Edge\uff0c\u5728\u96c6\u56e2\u5185\u90e8\u7ecf\u5386\u4e86\u957f\u65f6\u95f4\u7684\u6253\u78e8\u3002\u5df2\u7ecf\u5e94\u7528\u5728 CDN\u3001IoT\u3001\u76d2\u9a6c\u3001ENS\u3001\u83dc\u9e1f\u7269\u6d41\u7b49\u4f17\u591a\u573a\u666f\u3002\u9488\u5bf9\u8fb9\u7f18\u573a\u666f\uff0c\u8be5\u9879\u76ee\u575a\u6301\u4fdd\u6301\u539f\u751f K8s \u7684\u7279\u6027\uff0c\u4ee5 Addon \u7684\u5f62\u5f0f\u63d0\u4f9b\u4e86\u8fb9\u7f18\u8282\u70b9\u81ea\u6cbb\u3001\u4e91\u8fb9\u7aef\u4e00\u4f53\u5316\u8fd0\u7ef4\u901a\u9053\u7b49\u80fd\u529b\u3002\u6700\u8fd1\u5728\u793e\u533a\u540c\u5b66\u7684\u4e00\u8d77\u52aa\u529b\u4e0b\u53c8\u5f00\u6e90\u4e86\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406\u80fd\u529b\uff0c\u540c\u65f6\u540e\u7eed\u8fd8\u4f1a\u7ee7\u7eed\u5f00\u6e90\u66f4\u591a\u7684\u8fb9\u7f18\u7ba1\u7406\u80fd\u529b\uff0c\u6b22\u8fce\u5927\u5bb6\u79ef\u6781\u53c2\u4e0e\u8d21\u732e\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Anr8UhTaNe3FCnKKfKoXNQ"},"\u539f\u6587\u94fe\u63a5")))}p.isMDXComponent=!0},9730:function(e,n,t){n.Z=t.p+"assets/images/OpenYurt_Cluster-cf4d0928fd91e30dec6fc5ea7f13179b.png"},6838:function(e,n,t){n.Z=t.p+"assets/images/Raspberry_Pi-0d62d9c9627727b87279383f61ae8222.png"},1252:function(e,n,t){n.Z=t.p+"assets/images/edge_raspberry_pi-8b6984239d5bceffe23207955be08dfa.png"},6639:function(e,n,t){n.Z=t.p+"assets/images/kubernetes-324e5f10b1e66083e02453040890714b.png"}}]);