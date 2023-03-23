"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={title:"yurt-tunnel"},l=void 0,u={unversionedId:"faq/yurt-tunnel",id:"version-v1.2/faq/yurt-tunnel",title:"yurt-tunnel",description:"1. How to locate the cause of kubectl execcommand execution failure",source:"@site/versioned_docs/version-v1.2/faq/yurt-tunnel.md",sourceDirName:"faq",slug:"/faq/yurt-tunnel",permalink:"/docs/faq/yurt-tunnel",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurt-tunnel.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1679553864,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"yurt-tunnel"},sidebar:"version-v1.2/docs",previous:{title:"yurtadm",permalink:"/docs/faq/yurtadm"},next:{title:"coredns",permalink:"/docs/faq/coredns"}},s={},i=[],p={toc:i};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," 1. How to locate the cause of ",(0,o.kt)("inlineCode",{parentName:"strong"},"kubectl exec"),"command execution failure ")),(0,o.kt)("p",null,"please check according to the process in the figure below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(34503).Z,width:"1708",height:"1022"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if ",(0,o.kt)("inlineCode",{parentName:"li"},"exec")," request info can't be found in logs of kube-apiserver, please set log level of kube-apiserver to 3(--v=3)"),(0,o.kt)("li",{parentName:"ul"},"make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-apiserver")," use ",(0,o.kt)("inlineCode",{parentName:"li"},"yurt-tunnel-dns")," pod to resolve hostname. please reference the tutorial of kube-apiserver adjustment here: ",(0,o.kt)("a",{parentName:"li",href:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"},"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," 2. kubectl logs edge node error\uff1aerror: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)")),(0,o.kt)("p",null,"For more details about this problem, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"issue 984"),".\nPlease make sure that you are using the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," image (the latest tag of image is confusing, please check the created time)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," 3. kubectl logs edge node error\uff1aerror: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))")),(0,o.kt)("p",null,"For more details about this problem, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"issue 984"),".\nThis is most likely to be an issue caused by outdated tunnel server certificate. You can clean up the tunnel server certificate and redeploy yurt-tunnel-server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /var/lib/yurttunnel-server/pki\nkubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," 4. kubectl exec error: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," may also fail the following similar error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"root@control-plane:~# kubectl port-forward <...>\nerror: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel: write unix @->/tmp/interceptor-proxier.sock: write: broken pipe\n")),(0,o.kt)("p",null,"Fundamentally this problem should be observed because ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," connection cannot be established."),(0,o.kt)("p",null,"It is likely that this problem may happen since ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent")," is not deployed to the corresponding edge nodes."),(0,o.kt)("p",null,"In that case, it is highly recommended to go through ",(0,o.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/installation/manually-setup#32-setup-openyurtopenyurt-components"},"Setup openyurt components")," to make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," pods are deployed to appropriate cloud and edge nodes."),(0,o.kt)("p",null,"If this problem can be observed by requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl exec/port-forward")," to cloud node which does not require ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," to access the kubelet running on the node, issue may be related to network setting ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," includes any IP addresses with the same hostname registered to Kubernetes / OpenYurt cluster, it might lead the request to be over ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent"),"."),(0,o.kt)("p",null,"This request will eventually fail with the error message, since there will be no ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent")," running on cloud nodes."),(0,o.kt)("p",null,"In this case, those unrelated IP addresses and hostname would need to be commented out."),(0,o.kt)("p",null,"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/1024"},"issue 1024"),"."))}c.isMDXComponent=!0},34503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/yurt-tunnel-troubleshooting-292e59da652b3ab599ef8bb2fa5abddf.png"}}]);