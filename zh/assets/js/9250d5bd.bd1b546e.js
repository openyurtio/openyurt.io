"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[2710],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(k,l(l({ref:n},i),{},{components:t})):a.createElement(k,l({ref:n},i))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3057:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return s}});var a=t(87462),o=(t(67294),t(3905));const r={title:"\u8282\u70b9\u6c60\u7ba1\u7406"},l=void 0,p={unversionedId:"user-manuals/workload/node-pool-management",id:"version-v0.5.0/user-manuals/workload/node-pool-management",title:"\u8282\u70b9\u6c60\u7ba1\u7406",description:"1\uff09\u5b89\u88c5Yurt-App-Manager\u7ec4\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/user-manuals/workload/node-pool-management.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/node-pool-management",permalink:"/zh/docs/v0.5.0/user-manuals/workload/node-pool-management",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/node-pool-management.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1642145865,formattedLastUpdatedAt:"2022\u5e741\u670814\u65e5",frontMatter:{title:"\u8282\u70b9\u6c60\u7ba1\u7406"},sidebar:"version-v0.5.0/docs",previous:{title:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8",permalink:"/zh/docs/v0.5.0/user-manuals/storage/edge-local-storage"},next:{title:"UnitedDeployment",permalink:"/zh/docs/v0.5.0/user-manuals/workload/uniteddeployment"}},u={},s=[{value:"1\uff09\u5b89\u88c5Yurt-App-Manager\u7ec4\u4ef6",id:"1\u5b89\u88c5yurt-app-manager\u7ec4\u4ef6",level:3},{value:"2\uff09\u8282\u70b9\u6c60\u4f7f\u7528Example",id:"2\u8282\u70b9\u6c60\u4f7f\u7528example",level:3}],i={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:""}),(0,o.kt)("h3",{id:"1\u5b89\u88c5yurt-app-manager\u7ec4\u4ef6"},"1\uff09\u5b89\u88c5Yurt-App-Manager\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd  yurt-app-manager\n$ kubectl apply -f config/setup/all_in_one.yaml\n")),(0,o.kt)("p",null,"\u7b49\u5f85Yurt-App-Manager\u7ec4\u4ef6\u5b89\u88c5\u6210\u529f\uff0c\u9a8c\u8bc1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod -n kube-system |grep yurt-app-manager\n")),(0,o.kt)("h3",{id:"2\u8282\u70b9\u6c60\u4f7f\u7528example"},"2\uff09\u8282\u70b9\u6c60\u4f7f\u7528Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n  taints:\n  - key: apps.openyurt.io/example\n    value: test-hangzhou\n    effect: NoSchedule\nEOF\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528kubectl get\u8282\u70b9\u6c60\u4fe1\u606f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get np \n\nNAME       TYPE   READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud                               35s\nhangzhou   Edge                                28s\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06\u8282\u70b9\u52a0\u5165\u5230\u8282\u70b9\u6c60")),(0,o.kt)("p",null,"\u6dfb\u52a0\u4e91\u7aef\u8282\u70b9Cloud node\u5230\u5317\u4eac\u8282\u70b9\u6c60\uff0c\u4f60\u53ea\u9700\u5c06\u6b64\u8282\u70b9\u6309\u5982\u4e0b\u65b9\u5f0f\u6253\u4e0alabel\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=beijing\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"For example:\n$ kubectl label node master apps.openyurt.io/desired-nodepool=beijing\n\nmaster labeled\n")),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u4f60\u7684\u8fb9\u7f18\u8282\u70b9Edge node\u6dfb\u52a0\u5230\u676d\u5dde\u8282\u70b9\u6c60\uff0c\u65b9\u6cd5\u548c\u4e0a\u9762\u7c7b\u4f3c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=hangzhou\nFor example:\n$ kubectl label node k8s-node1 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node1 labeled\n\n$ kubectl label node k8s-node2 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node2 labeled\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u8282\u70b9\u5df2\u7ecf\u52a0\u5165\u8282\u70b9\u6c60")),(0,o.kt)("p",null,"\u5f53Edge node\u6210\u529f\u52a0\u5165\u5230\u8282\u70b9\u6c60\uff0c\u8282\u70b9\u7684\u914d\u7f6e\u4fe1\u606f\u9664\u4e86\u8282\u70b9\u6c60Spec\u4e2d\u7684\u6240\u6709\u5185\u5bb9\uff0c\u540c\u65f6\uff0c\u8282\u70b9\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u6807\u7b7e\uff1aapps.openyurt.io/nodepool\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get node {Your_Node_Name} -o yaml \n\nFor Example:\n$ kubectl get node k8s-node1 -o yaml\n\napiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock\n    node.alpha.kubernetes.io/ttl: "0"\n    node.beta.alibabacloud.com/autonomy: "true"\n    volumes.kubernetes.io/controller-managed-attach-detach: "true"\n  creationTimestamp: "2021-04-14T12:17:39Z"\n  labels:\n    apps.openyurt.io/desired-nodepool: hangzhou\n    apps.openyurt.io/example: test-hangzhou\n    apps.openyurt.io/nodepool: hangzhou\n    beta.kubernetes.io/arch: amd64\n    beta.kubernetes.io/os: linux\n    kubernetes.io/arch: amd64\n    kubernetes.io/hostname: k8s-node1\n    kubernetes.io/os: linux\n    openyurt.io/is-edge-worker: "true"\n  name: k8s-node1\n  resourceVersion: "1244431"\n  selfLink: /api/v1/nodes/k8s-node1\n  uid: 1323f90b-acf3-4443-a7dc-7a54c212506c\nspec:\n  podCIDR: 192.168.1.0/24\n  podCIDRs:\n  - 192.168.1.0/24\n  taints:\n  - effect: NoSchedule\n    key: apps.openyurt.io/example\n    value: test-hangzhou\nstatus:\n***\n')))}d.isMDXComponent=!0}}]);