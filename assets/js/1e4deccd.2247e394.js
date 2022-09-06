"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[532],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(7462),i=(n(7294),n(3905));const a={title:"Yurtadm init"},o=void 0,l={unversionedId:"installation/yurtadm-init",id:"version-v1.0/installation/yurtadm-init",title:"Yurtadm init",description:"1.Background",source:"@site/versioned_docs/version-v1.0/installation/yurtadm-init.md",sourceDirName:"installation",slug:"/installation/yurtadm-init",permalink:"/docs/installation/yurtadm-init",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-init.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"Yurtadm init"},sidebar:"version-v1.0/docs",previous:{title:"Manually Setup",permalink:"/docs/installation/manually-setup"},next:{title:"OpenYurt Experience Center Introduction",permalink:"/docs/installation/openyurt-experience-center/overview"}},u={},s=[{value:"1.Background",id:"1background",level:2},{value:"2.Process",id:"2process",level:2},{value:"2.1 Compile Yurtadm",id:"21-compile-yurtadm",level:3},{value:"2.2 Initialize the cluster",id:"22-initialize-the-cluster",level:3},{value:"3.Implement details",id:"3implement-details",level:2},{value:"3.1 Yurtadm init",id:"31-yurtadm-init",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1background"},"1.Background"),(0,i.kt)("p",null,"In order to allow users to quickly obtain an OpenYurt test cluster, OpenYurt provides the command Yurtadm init to initialize the cluster. Users only need to select the version of the OpenYurt cluster mirror to create the corresponding version of OpenYurt. Then Yurt-APP-Manager, Yurt-Controller-Manager, Yurttunnel -Server, Yurttunnel-Agent components will be automatically deployed."),(0,i.kt)("p",null,"To expand the cluster later, users can use the Yurtadm join command to add edge nodes or cloud nodes to the cluster."),(0,i.kt)("h2",{id:"2process"},"2.Process"),(0,i.kt)("h3",{id:"21-compile-yurtadm"},"2.1 Compile Yurtadm"),(0,i.kt)("p",null,"When initializing the cluster, you need to obtain the Yurtadm executable first. To quickly build and install yurtadm, you can execute the following command to complete the installation if the build system has golang at least 1.13 up to 1.17 and bash installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtadm" ARCH="amd64" REGION=cn\n')),(0,i.kt)("p",null,"The executable will be stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_output/local/bin/")," directory, depends on the platform."),(0,i.kt)("h3",{id:"22-initialize-the-cluster"},"2.2 Initialize the cluster"),(0,i.kt)("p",null,"Execute the following command to initialize the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/local/bin/linux/amd64/yurtadm init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234\n")),(0,i.kt)("p",null,"The main parameters are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," --apiserver-advertise-address    IP address of the master node\n --passwd                         ssh password of the master node\n --openyurt-version               version of the OpenYurt cluster\n")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),"  to configure more information."),(0,i.kt)("h2",{id:"3implement-details"},"3.Implement details"),(0,i.kt)("h3",{id:"31-yurtadm-init"},"3.1 Yurtadm init"),(0,i.kt)("p",null,"In order to reduce the difficulty of using Yurtadm init and improve the success probability of cluster installation, Yurtadm init initializes the OpenYurt cluster through the open source tool ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/sealer"},"sealer"),". In terms of implementation, Yurtadm init will download the sealer binary file, and sealer will download the cluster image officially provided by OpenYurt and install the cluster. In addition, Yurtadm init also supports user-specific configuration of OpenYurt cluster images."))}d.isMDXComponent=!0}}]);