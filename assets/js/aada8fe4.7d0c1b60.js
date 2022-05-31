"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[7930],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8152:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"How to play with the web console"},s=void 0,c={unversionedId:"installation/openyurt-experience-center/web_console",id:"version-v0.6.0/installation/openyurt-experience-center/web_console",isDocsHomePage:!1,title:"How to play with the web console",description:"This document will describe how to use the basic functions provided by the Experience Center Web Console.",source:"@site/versioned_docs/version-v0.6.0/installation/openyurt-experience-center/web_console.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/web_console",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/web_console",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/web_console.md",tags:[],version:"v0.6.0",lastUpdatedBy:"houxuecheng",lastUpdatedAt:1644397403,formattedLastUpdatedAt:"2/9/2022",frontMatter:{title:"How to play with the web console"},sidebar:"version-v0.6.0/docs",previous:{title:"How to create an account in the experience center",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/user"},next:{title:"How to use `kubeconfig` to experience OpenYurt capabilities",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig"}},p=[{value:"Web Console Overview",id:"web-console-overview",children:[],level:2},{value:"Join local nodes by Web Console",id:"join-local-nodes-by-web-console",children:[],level:2},{value:"Quickly deploy applications by OpenYurt Labs",id:"quickly-deploy-applications-by-openyurt-labs",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This document will describe how to use the basic functions provided by the Experience Center Web Console.")),(0,a.kt)("h2",{id:"web-console-overview"},"Web Console Overview"),(0,a.kt)("p",null,'"Cluster Information" page includes application status, node status, dashboard connection status, and the namespaces assigned to users. (each user can only be active in their own namespace, please refer to the design documentation for details)'),(0,a.kt)("p",null,"On the right side of the page is the navigation bar of the web console. In addition to displaying cluster information, the web console also provides functions such as node management, workload management, and labs."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9963).Z})),(0,a.kt)("h2",{id:"join-local-nodes-by-web-console"},"Join local nodes by Web Console"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Users can get the access script through the web console and join their nodes to the OpenYurt cluster to experience the features of OpenYurt.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Open the "Node Management/Node" page and click the Add Existing Node button.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(626).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Browser will pop up a dialog box showing the node access script, click Copy.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2995).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Execute the replicated script on your node. (Note: ",(0,a.kt)("inlineCode",{parentName:"li"},"yurtctl")," is required on your node)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2689).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After successful execution, you can see the message ",(0,a.kt)("inlineCode",{parentName:"li"},"This node has joined the cluster")," in the command line. In addition, if you refresh the node page in the web console, you can see the joined nodes.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8903).Z}),"\n",(0,a.kt)("img",{src:n(8135).Z})),(0,a.kt)("h2",{id:"quickly-deploy-applications-by-openyurt-labs"},"Quickly deploy applications by OpenYurt Labs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'To further lower the barrier to new users, the web console also provides a "Lab" module that allows users to quickly deploy applications to their OpenYurt clusters.')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Currently OpenYurt provides two sample applications, and will gradually expand the lab features.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4860).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click the settings button on an application card to customize the application settings (e.g. Deployment name, number of replicas, whether to create a corresponding Service, etc.) Once the settings are complete, click the Install button to automatically deploy the application.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(290).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"After the successful creation, the page will pop up the message ",(0,a.kt)("inlineCode",{parentName:"li"},"install app xxx successfully"),'. And you can see the details of Deployment and Pod in the "Container Group" and "Stateless" pages.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6850).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},'Additionally, you can uninstall applications directly from the web console\'s "Labs" page.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2638).Z})))}d.isMDXComponent=!0},2689:function(e,t,n){t.Z=n.p+"assets/images/cmd_add_node-83b9d6a592930527ddab7c64f845603b.png"},8903:function(e,t,n){t.Z=n.p+"assets/images/cmd_add_node_success-597e741236b16ef14b3072ba767a2740.png"},4860:function(e,t,n){t.Z=n.p+"assets/images/web_lab-bc6baacf2b9722262071c97abb22082f.png"},290:function(e,t,n){t.Z=n.p+"assets/images/web_lab_config-46ac717d25f4dd8aaedc3788feed92f7.png"},6850:function(e,t,n){t.Z=n.p+"assets/images/web_lab_res-d01aee5904015c7e6935a513a8b607d1.png"},2638:function(e,t,n){t.Z=n.p+"assets/images/web_lab_uninstall-af70eb262dbbc176e0afa33a0cde450b.png"},626:function(e,t,n){t.Z=n.p+"assets/images/web_node_add-ebf0a474ed382382b5184491bdfe0048.png"},8135:function(e,t,n){t.Z=n.p+"assets/images/web_node_add_success-9ac987441fd934c53a2d63738a2b1b4e.png"},2995:function(e,t,n){t.Z=n.p+"assets/images/web_node_script-2f2e791da1351ed6dd17d43f191cc6b1.png"},9963:function(e,t,n){t.Z=n.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"}}]);