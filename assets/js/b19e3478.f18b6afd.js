"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8685],{3905:function(e,n,o){o.d(n,{Zo:function(){return d},kt:function(){return m}});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},d=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,g=c["".concat(u,".").concat(m)]||c[m]||i[m]||r;return o?t.createElement(g,l(l({ref:n},d),{},{components:o})):t.createElement(g,l({ref:n},d))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=c;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<r;s++)l[s]=o[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},18432:function(e,n,o){o.r(n),o.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return i},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return s}});var t=o(87462),a=(o(67294),o(3905));const r={title:"Node Pool Management"},l=void 0,p={unversionedId:"user-manuals/workload/node-pool-management",id:"version-v1.1/user-manuals/workload/node-pool-management",title:"Node Pool Management",description:"1\uff09Install Yurt-App-Manager Components",source:"@site/versioned_docs/version-v1.1/user-manuals/workload/node-pool-management.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/node-pool-management",permalink:"/docs/user-manuals/workload/node-pool-management",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/node-pool-management.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{title:"Node Pool Management"},sidebar:"version-v1.1/docs",previous:{title:"DaemonSet Upgrade Model",permalink:"/docs/user-manuals/workload/daemon-pod-updater"},next:{title:"YurtAppSet",permalink:"/docs/user-manuals/workload/yurt-app-set"}},u={},s=[{value:"1\uff09Install Yurt-App-Manager Components",id:"1install-yurt-app-manager-components",level:3},{value:"2\uff09Example of Nodepool usage",id:"2example-of-nodepool-usage",level:3}],d={toc:s};function i(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:""}),(0,a.kt)("h3",{id:"1install-yurt-app-manager-components"},"1\uff09Install Yurt-App-Manager Components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd  yurt-app-manager\n$ kubectl apply -f config/setup/all_in_one.yaml\n")),(0,a.kt)("p",null,"Check whether all the Yurt-App-Manager components are installed successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod -n kube-system |grep yurt-app-manager\n")),(0,a.kt)("h3",{id:"2example-of-nodepool-usage"},"2\uff09Example of Nodepool usage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a nodepool")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n  taints:\n  - key: apps.openyurt.io/example\n    value: test-hangzhou\n    effect: NoSchedule\nEOF\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get the nodepool information")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get np \n\nNAME       TYPE   READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud                               35s\nhangzhou   Edge                                28s\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add node to nodepool")),(0,a.kt)("p",null,'Add a cloud node to nodepool "beijing", you only need to label the node as below:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=beijing\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"For example:\n$ kubectl label node master apps.openyurt.io/desired-nodepool=beijing\n\nmaster labeled\n")),(0,a.kt)("p",null,'Similarly, you can add the edge nodes to nodepool "hangzhou":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl label node {Your_Node_Name} apps.openyurt.io/desired-nodepool=hangzhou\nFor example:\n$ kubectl label node k8s-node1 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node1 labeled\n\n$ kubectl label node k8s-node2 apps.openyurt.io/desired-nodepool=hangzhou\n\nk8s-node2 labeled\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify whether a node is added to a nodepool:")),(0,a.kt)("p",null,"When an edge node is added to a nodepool, all the annotations/labels of the nodepool are added to the node, together with a new label: apps.openyurt.io/nodepool"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get node {Your_Node_Name} -o yaml \n\nFor Example:\n$ kubectl get node k8s-node1 -o yaml\n\napiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock\n    node.alpha.kubernetes.io/ttl: "0"\n    node.beta.alibabacloud.com/autonomy: "true"\n    volumes.kubernetes.io/controller-managed-attach-detach: "true"\n  creationTimestamp: "2021-04-14T12:17:39Z"\n  labels:\n    apps.openyurt.io/desired-nodepool: hangzhou\n    apps.openyurt.io/example: test-hangzhou\n    apps.openyurt.io/nodepool: hangzhou\n    beta.kubernetes.io/arch: amd64\n    beta.kubernetes.io/os: linux\n    kubernetes.io/arch: amd64\n    kubernetes.io/hostname: k8s-node1\n    kubernetes.io/os: linux\n    openyurt.io/is-edge-worker: "true"\n  name: k8s-node1\n  resourceVersion: "1244431"\n  selfLink: /api/v1/nodes/k8s-node1\n  uid: 1323f90b-acf3-4443-a7dc-7a54c212506c\nspec:\n  podCIDR: 192.168.1.0/24\n  podCIDRs:\n  - 192.168.1.0/24\n  taints:\n  - effect: NoSchedule\n    key: apps.openyurt.io/example\n    value: test-hangzhou\nstatus:\n***\n')))}i.isMDXComponent=!0}}]);