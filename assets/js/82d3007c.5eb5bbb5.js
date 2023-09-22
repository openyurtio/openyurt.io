"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(g,r(r({ref:n},s),{},{components:t})):o.createElement(g,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const i={title:"How to use `kubeconfig` to experience OpenYurt capabilities"},r=void 0,l={unversionedId:"installation/openyurt-experience-center/kubeconfig",id:"version-v1.3/installation/openyurt-experience-center/kubeconfig",title:"How to use `kubeconfig` to experience OpenYurt capabilities",description:"This document will describe how to experience the multi-domain workload manage capability of OpenYurt through kubeconfig provided by Experience Center.",source:"@site/versioned_docs/version-v1.3/installation/openyurt-experience-center/kubeconfig.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/kubeconfig",permalink:"/docs/installation/openyurt-experience-center/kubeconfig",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/kubeconfig.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1686312326,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"How to use `kubeconfig` to experience OpenYurt capabilities"},sidebar:"docs",previous:{title:"How to play with the web console",permalink:"/docs/installation/openyurt-experience-center/web_console"},next:{title:"Architecture",permalink:"/docs/core-concepts/architecture"}},c={},p=[{value:"Configure <code>kubeconfig</code> locally",id:"configure-kubeconfig-locally",level:2},{value:"Experience OpenYurt&#39;s multi-domain workload manage capability",id:"experience-openyurts-multi-domain-workload-manage-capability",level:2}],s={toc:p};function d(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This document will describe how to experience the multi-domain workload manage capability of OpenYurt through kubeconfig provided by Experience Center.")),(0,a.kt)("h2",{id:"configure-kubeconfig-locally"},"Configure ",(0,a.kt)("inlineCode",{parentName:"h2"},"kubeconfig")," locally"),(0,a.kt)("p",null,"You need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeconfig")," locally before you can manage the cluster via ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"kubeconfig"),' information in "Connection Information" tab under "Cluster Information" page')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(47745).Z,width:"1410",height:"793"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Save the copied ",(0,a.kt)("inlineCode",{parentName:"li"},"kubeconfig")," information to the local ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," file")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(70886).Z,width:"1270",height:"793"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"If the configuration has been all set, you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," to manage the cluster")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(27734).Z,width:"1482",height:"787"})),(0,a.kt)("h2",{id:"experience-openyurts-multi-domain-workload-manage-capability"},"Experience OpenYurt's multi-domain workload manage capability"),(0,a.kt)("p",null,"OpenYurt is designed for edge computing scenarios, allowing users to group workloads into different units distributed in different geographical locations. Here is a simple scenario to experience the multi-domain workload manage capability of OpenYurt."),(0,a.kt)("p",null,"Now that we have two edge-side nodes, node1 and node2, in different locations (e.g. node1 in Hangzhou and node2 in Shanghai). We want to deploy applications to the Hangzhou node but not to the Shanghai node. OpenYurt does this with two resources, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md"},"NodePool")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/enhancements/20201211-nodepool_uniteddeployment.md"},"YurtAppSet")," (previous UnitedDeployment) to achieve this capability."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Suppose we have two nodes, node1 and node2, connected to OpenYurt cluster (Don't know how to join nodes? Please refer to the documentation: ",(0,a.kt)("a",{parentName:"li",href:"/docs/installation/openyurt-experience-center/web_console"},"How to use web_console"),")")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(93581).Z,width:"1410",height:"653"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a NodePool resource by ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," on the local node where ",(0,a.kt)("inlineCode",{parentName:"li"},"kubeconfig")," is configured, and add node1 to that NodePool")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# create nodepool hangzhou\ncat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\nEOF\n\n\n# add node1 to nodepool\nkubectl label node node1 apps.openyurt.io/desired-nodepool=hangzhou\n\n# display nodepool\nkubectl get nodepool\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(17758).Z,width:"1450",height:"788"})),(0,a.kt)("p",null,"The corresponding NodePool information can be seen in browser page.\n",(0,a.kt)("img",{src:t(18725).Z,width:"1521",height:"1022"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create workload resources via ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," and only deploy the application to hangzhou's node pool via YurtAppSet")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppSet\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: yas-test\n  namespace: "183xxxxxxxx"  # Notice: change this with your own namespace\nspec:\n  selector:\n    matchLabels:\n      app: yas-test\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: yas-test\n      namespace: "183xxxxxxxx"  # Notice: change this with your own namespace\n      spec:\n        template:\n          metadata:\n            labels:\n              app: yas-test\n          spec:\n            containers:\n              - name: nginx\n                image: nginx\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 1\n  revisionHistoryLimit: 5\nEOF\n\n# display the resources\nkubectl get node\nkubectl get pod -A\nkubectl get nodepool\n\n\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(82246).Z,width:"1270",height:"793"}),"\n",(0,a.kt)("img",{src:t(91067).Z,width:"1270",height:"793"})),(0,a.kt)("p",null,"After successful creation, you can see on the browser page that the corresponding Pod is assigned to node1 in hangzhou node pool."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9202).Z,width:"1450",height:"496"})))}d.isMDXComponent=!0},70886:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_kubeconfig-7205e32b25fee4f3d652c57d7f2c1172.png"},27734:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_kubectl-f15c995e6491a32509dc7efc020cd99b.png"},17758:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_np-a048f63d03de469acd0bc064675d8425.png"},82246:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_ud_create-5c3f62f405528cce9d2f5989e1c27f00.png"},91067:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cmd_ud_get-6074a5b02d77faae825438898c283d77.png"},47745:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},93581:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_node-0f4d1e382ea20f2775f60844d2c17c91.png"},18725:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_np-dce0ab4bedba05c3331286ace37ac673.png"},9202:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/web_ud-975b925ce96f411a937525174d39d35c.png"}}]);