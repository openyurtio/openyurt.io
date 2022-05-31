"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4901],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9375:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"OpenYurt Experience Center Introduction"},s=void 0,l={unversionedId:"installation/openyurt-experience-center/overview",id:"version-v0.6.0/installation/openyurt-experience-center/overview",isDocsHomePage:!1,title:"OpenYurt Experience Center Introduction",description:"For better user experience\uff0c Experience Centerhas been relocated to new address\uff0cand the old one will no longer be maintained after 7 days \u3002",source:"@site/versioned_docs/version-v0.6.0/installation/openyurt-experience-center/overview.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/overview",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/overview",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/overview.md",tags:[],version:"v0.6.0",lastUpdatedBy:"luc99hen",lastUpdatedAt:1645536485,formattedLastUpdatedAt:"2/22/2022",frontMatter:{title:"OpenYurt Experience Center Introduction"},sidebar:"version-v0.6.0/docs",previous:{title:"Summary",permalink:"/docs/v0.6.0/installation/summary"},next:{title:"How to create an account in the experience center",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/user"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2}],p={toc:u};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For better user experience\uff0c ",(0,a.kt)("a",{parentName:"p",href:"http://47.242.50.237/"},"Experience Center"),"has been relocated to ",(0,a.kt)("a",{parentName:"p",href:"http://47.242.50.237/"},"new address"),"\uff0cand ",(0,a.kt)("a",{parentName:"p",href:"http://139.224.236.157/"},"the old one")," will no longer be maintained after 7 days \u3002")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"As an edge cloud native project, OpenYurt involves both edge computing and cloud native areas, many edge computing developers are not familiar with cloud native related technologies. In order to lower the threshold of using OpenYurt and help more developers get started with OpenYurt quickly, our community has launched a platform called OpenYurt Experience Center. Instead of building an OpenYurt cluster from scratch, new users who want to try out OpenYurt's features can simply apply for a test account on the platform and have an available OpenYurt cluster right away."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7135).Z})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"Platform will assign an OpenYurt cluster to each ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.6.0/installation/openyurt-experience-center/user"},"registered user"),". (Note that this cluster is not a full-featured K8s cluster and this means users can only be active under their own namespace; see the Experience Center's architecture for details)"),(0,a.kt)("p",null,"OpenYurt Experience Center has provided two ways to use OpenYurt cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Users can use the ",(0,a.kt)("a",{parentName:"li",href:"/docs/v0.6.0/installation/openyurt-experience-center/web_console"},"Web Console")," provided by platform to manage the cluster. The console displays the status of the cluster and provides some common operations, such as: user management, node access, node autonomy settings, lab quick deployment, and so on.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9963).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The Experience Center also provides access via ",(0,a.kt)("a",{parentName:"li",href:"/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig"},(0,a.kt)("inlineCode",{parentName:"a"},"kubeconfig")),", where users can configure ",(0,a.kt)("inlineCode",{parentName:"li"},"kubeconfig")," locally and operate the cluster via the ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," command.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(799).Z})),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7612).Z})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurt-dashboard"},"Yurt-dashboard")," is open source and welcomes your feedback.\nBesides, if you are interested in the implementation of the experience center, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1pf4y1K7M4"},"video discussion")," of biweekly meetings.")),(0,a.kt)("p",null,"The experience center consists of three main parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Yurt Dashboard: yurt-dashboard is a web console similar to the kubernetes dashboard that contains front-end and back-end web applications. The front-end provides a graphical interface, while the back-end is responsible for communicating with the cluster's API Server."),(0,a.kt)("li",{parentName:"ol"},"Account Controller: user information of the platform is stored in the cluster as CRD. Account Controller is responsible for managing the creation and deletion of user accounts and related resources (e.g. namespace, certificates, etc)."),(0,a.kt)("li",{parentName:"ol"},"Autonomy Sidecar: all users in experience center share the same OpenYurt cluster. The Autonomy component implements multi-tenant isolation of the cluster, so that each user shares the same Master, but has exclusive access to its own edge resources.")))}d.isMDXComponent=!0},7612:function(e,t,n){t.Z=n.p+"assets/images/arch-3b0a5a9cd2cecdbfdd7ad8b5ce6c1795.png"},7135:function(e,t,n){t.Z=n.p+"assets/images/register_blank-7209f48ba89832433874e9a6ee5defab.png"},799:function(e,t,n){t.Z=n.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},9963:function(e,t,n){t.Z=n.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"}}]);