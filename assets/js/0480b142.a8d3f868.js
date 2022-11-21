"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=(n(67294),n(3905));const o={title:"FAQ"},l=void 0,u={unversionedId:"faq",id:"faq",title:"FAQ",description:"yurtadm",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/next/faq",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq.md",tags:[],version:"current",lastUpdatedBy:"Tomoya Fujita",lastUpdatedAt:1668131486,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"How to Contribute",permalink:"/docs/next/developer-manuals/how-to-contribute"}},i={},s=[{value:"<strong>yurtadm</strong>",id:"yurtadm",level:2},{value:"<strong>yurt-tunnel</strong>",id:"yurt-tunnel",level:2}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yurtadm"},(0,a.kt)("strong",{parentName:"h2"},"yurtadm")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. yurtadm join error\uff1acrictl not found in system path")),(0,a.kt)("p",null,"The node does not have docker installed, and installing docker can solve this problem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. yurtadm join error\uff1a","[ERROR FileExisting-conntrack]",": conntrack not found in system path")),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"yum install -y conntrack")," and then retry the yurtadm join command again."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'3. helm installation error during yurtadm init\uff1a Release "yurt-app-manager" does not exist. Installing it now.'),"\n",(0,a.kt)("strong",{parentName:"p"},'Error: failed to download "openyurt/yurt-app-manager" (hint: running ',(0,a.kt)("inlineCode",{parentName:"strong"},"helm repo update")," may help)")),(0,a.kt)("p",null,"Perform the helm installation process manually\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/lib/sealer/data/my-cluster/rootfs\nhelm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. yurtadm init failed, how to clean up the environment?")),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm init")," uses ",(0,a.kt)("a",{parentName:"p",href:"http://sealer.cool/"},"sealer")," to create an OpenYurt cluster from scratch, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed"},"this")," to clean up the environment."),(0,a.kt)("h2",{id:"yurt-tunnel"},(0,a.kt)("strong",{parentName:"h2"},"yurt-tunnel")),(0,a.kt)("p",null,"how to troubleshoot the reason when ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl exec")," command failed to work. please follow the below flow."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(34503).Z,width:"1708",height:"1022"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"exec")," request info can't be found in logs of kube-apiserver, please set log level of kube-apiserver to 3(--v=3)"),(0,a.kt)("li",{parentName:"ul"},"make sure ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver")," use ",(0,a.kt)("inlineCode",{parentName:"li"},"yurt-tunnel-dns")," pod to resolve hostname. please reference the tutorial of kube-apiserver adjustment here: ",(0,a.kt)("a",{parentName:"li",href:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"},"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"))),(0,a.kt)("p",null,"There are some issues about yurt-tunnel failure, it might have some help.\n",(0,a.kt)("strong",{parentName:"p"},"1. kubectl logs edge node error\uff1aerror: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)")," "),(0,a.kt)("p",null,"For more details about this problem, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"issue 984"),"."),(0,a.kt)("p",null,"Please make sure that you are using the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," image (the latest tag of image is confusing, please check the created time)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. kubectl logs edge node error\uff1aerror: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))")," "),(0,a.kt)("p",null,"For more details about this problem, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/984"},"issue 984"),"."),(0,a.kt)("p",null,"This is most likely to be an issue caused by outdated tunnel server certificate. You can clean up the tunnel server certificate and redeploy yurt-tunnel-server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /var/lib/yurttunnel-server/pki\nkubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. kubectl exec error: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," may also fail the following similar error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"root@control-plane:~# kubectl port-forward <...>\nerror: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel: write unix @->/tmp/interceptor-proxier.sock: write: broken pipe\n")),(0,a.kt)("p",null,"Fundamentally this problem should be observed because ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," connection cannot be established."),(0,a.kt)("p",null,"It is likely that this problem may happen since ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent")," is not deployed to the corresponding edge nodes."),(0,a.kt)("p",null,"In that case, it is highly recommended to go through ",(0,a.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/installation/manually-setup#32-setup-openyurtopenyurt-components"},"Setup openyurt components")," to make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," pods are deployed to appropriate cloud and edge nodes."),(0,a.kt)("p",null,"If this problem can be observed by requesting ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl exec/port-forward")," to cloud node which does not require ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent")," to access the kubelet running on the node, issue may be related to network setting ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," includes any IP addresses with the same hostname registered to Kubernetes / OpenYurt cluster, it might lead the request to be over ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server/agent"),"."),(0,a.kt)("p",null,"This request will eventually fail with the error message, since there will be no ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent")," running on cloud nodes."),(0,a.kt)("p",null,"In this case, those unrelated IP addresses and hostname would need to be commented out."),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/issues/1024"},"issue 1024"),"."))}c.isMDXComponent=!0},34503:function(e,t,n){t.Z=n.p+"assets/images/yurt-tunnel-troubleshooting-292e59da652b3ab599ef8bb2fa5abddf.png"}}]);