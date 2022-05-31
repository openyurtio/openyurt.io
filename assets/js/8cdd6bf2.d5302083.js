"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4642],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?o.createElement(f,r(r({ref:n},u),{},{components:t})):o.createElement(f,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1391:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],l={title:"How to use `kubeconfig` to experience OpenYurt capabilities"},c=void 0,p={unversionedId:"installation/openyurt-experience-center/kubeconfig",id:"version-v0.6.0/installation/openyurt-experience-center/kubeconfig",isDocsHomePage:!1,title:"How to use `kubeconfig` to experience OpenYurt capabilities",description:"This document will describe how to experience the multi-domain workload manage capability of OpenYurt through kubeconfig provided by Experience Center.",source:"@site/versioned_docs/version-v0.6.0/installation/openyurt-experience-center/kubeconfig.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/kubeconfig",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/kubeconfig.md",tags:[],version:"v0.6.0",lastUpdatedBy:"houxuecheng",lastUpdatedAt:1644397403,formattedLastUpdatedAt:"2/9/2022",frontMatter:{title:"How to use `kubeconfig` to experience OpenYurt capabilities"},sidebar:"version-v0.6.0/docs",previous:{title:"How to play with the web console",permalink:"/docs/v0.6.0/installation/openyurt-experience-center/web_console"},next:{title:"Yurtctl init/join",permalink:"/docs/v0.6.0/installation/yurtctl-init-join"}},u=[{value:"Configure <code>kubeconfig</code> locally",id:"configure-kubeconfig-locally",children:[],level:2},{value:"Experience OpenYurt&#39;s multi-domain workload manage capability",id:"experience-openyurts-multi-domain-workload-manage-capability",children:[],level:2}],s={toc:u};function d(e){var n=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document will describe how to experience the multi-domain workload manage capability of OpenYurt through kubeconfig provided by Experience Center.")),(0,i.kt)("h2",{id:"configure-kubeconfig-locally"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h2"},"kubeconfig")," locally"),(0,i.kt)("p",null,"You need to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," locally before you can manage the cluster via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy ",(0,i.kt)("inlineCode",{parentName:"li"},"kubeconfig"),' information in "Connection Information" tab under "Cluster Information" page')),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(799).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Save the copied ",(0,i.kt)("inlineCode",{parentName:"li"},"kubeconfig")," information to the local ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," file")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6746).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"If the configuration is correct, you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," to manage the cluster")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8379).Z})),(0,i.kt)("h2",{id:"experience-openyurts-multi-domain-workload-manage-capability"},"Experience OpenYurt's multi-domain workload manage capability"),(0,i.kt)("p",null,"OpenYurt is designed for edge computing scenarios, allowing users to group workloads into different units distributed in different geographical locations. Here is a simple scenario to experience the multi-domain workload manage capability of OpenYurt."),(0,i.kt)("p",null,"Now that we have two edge-side nodes, node1 and node2, in different locations (e.g. node1 in Hangzhou and node2 in Shanghai). We want to deploy applications to the Hangzhou node but not to the Shanghai node. OpenYurt does this with two resources, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md"},"NodePool")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md"},"YurtAppSet")," (previous UnitedDeployment) to achieve this capability."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Suppose we have two nodes, node1 and node2, connected to OpenYurt cluster (Don't know how to join nodes? Please refer to the documentation: ",(0,i.kt)("a",{parentName:"li",href:"/docs/v0.6.0/installation/openyurt-experience-center/web_console"},"How to use web_console"),")")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(7724).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create a NodePool resource by ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," on local node where ",(0,i.kt)("inlineCode",{parentName:"li"},"kubeconfig")," is configured, and add node1 to that NodePool")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efanodepool hangzhou\ncat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\nEOF\n\n\n# \u5c06node1\u8282\u70b9\u52a0\u5165nodepool\nkubectl label node node1 apps.openyurt.io/desired-nodepool=hangzhou\n\n# \u83b7\u53d6nodepool\nkubectl get nodepool\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8130).Z})),(0,i.kt)("p",null,"The corresponding NodePool information can be seen in browser page.\n",(0,i.kt)("img",{src:t(3722).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create workload resources via ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," and only deploy the application to hangzhou's node pool via YurtAppSet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5355\u5143\u5316\u90e8\u7f72pod\ncat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: ud-test\n  namespace: "183xxxxxxxx"  # \u6ce8\u610f: \u66ff\u6362\u6210\u4f60\u7684namespace\nspec:\n  selector:\n    matchLabels:\n      app: ud-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: ud-test\n      namespace: "183xxxxxxxx"  # \u6ce8\u610f: \u66ff\u6362\u6210\u4f60\u7684namespace\n      spec:\n        template:\n          metadata:\n            labels:\n              app: ud-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 1\n  revisionHistoryLimit: 5\nEOF\n\n# \u67e5\u770b\u8d44\u6e90\nkubectl get node\nkubectl get pod -A\nkubectl get nodepool\n\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6068).Z}),"\n",(0,i.kt)("img",{src:t(5559).Z})),(0,i.kt)("p",null,"After successful creation, you can see on the browser page that the corresponding Pod is assigned to node1 in hangzhou node pool."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3687).Z})))}d.isMDXComponent=!0},6746:function(e,n,t){n.Z=t.p+"assets/images/cmd_kubeconfig-7205e32b25fee4f3d652c57d7f2c1172.png"},8379:function(e,n,t){n.Z=t.p+"assets/images/cmd_kubectl-f15c995e6491a32509dc7efc020cd99b.png"},8130:function(e,n,t){n.Z=t.p+"assets/images/cmd_np-a048f63d03de469acd0bc064675d8425.png"},6068:function(e,n,t){n.Z=t.p+"assets/images/cmd_ud_create-5c3f62f405528cce9d2f5989e1c27f00.png"},5559:function(e,n,t){n.Z=t.p+"assets/images/cmd_ud_get-6074a5b02d77faae825438898c283d77.png"},799:function(e,n,t){n.Z=t.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},7724:function(e,n,t){n.Z=t.p+"assets/images/web_node-0f4d1e382ea20f2775f60844d2c17c91.png"},3722:function(e,n,t){n.Z=t.p+"assets/images/web_np-dce0ab4bedba05c3331286ace37ac673.png"},3687:function(e,n,t){n.Z=t.p+"assets/images/web_ud-975b925ce96f411a937525174d39d35c.png"}}]);