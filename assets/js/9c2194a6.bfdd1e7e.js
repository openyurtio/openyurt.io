"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8849],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"programmable resource access control"},s=void 0,l={unversionedId:"user-manuals/resource-access-control/resource-access-control",id:"version-v1.3/user-manuals/resource-access-control/resource-access-control",title:"programmable resource access control",description:"Background introduction",source:"@site/versioned_docs/version-v1.3/user-manuals/resource-access-control/resource-access-control.md",sourceDirName:"user-manuals/resource-access-control",slug:"/user-manuals/resource-access-control/",permalink:"/docs/user-manuals/resource-access-control/",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/resource-access-control/resource-access-control.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1686312326,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"programmable resource access control"},sidebar:"docs",previous:{title:"nodeport-isolation",permalink:"/docs/user-manuals/network/nodeport-isolation"},next:{title:"Edge Local Storage",permalink:"/docs/user-manuals/storage/edge-local-storage"}},i={},c=[{value:"Background introduction",id:"background-introduction",level:2},{value:"Architecture design",id:"architecture-design",level:2},{value:"How to use",id:"how-to-use",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background-introduction"},"Background introduction"),(0,o.kt)("p",null,"In the cloud-edge collaboration scenarios, The response for edge components(such as kube-proxy or user pods) from the cloud kube-apiserver can be performed with customized processing to meet the specific needs of edge scenarios. For Instance, when kubelet retrieves the ",(0,o.kt)("inlineCode",{parentName:"p"},"default/kubernetes")," service, it expects the service to include the accessible kube-apiserver address rather than the native service ClusterIP address. This allows pods on edge nodes to seamlessly use InClusterConfig to access cloud kube-apiserver."),(0,o.kt)("h2",{id:"architecture-design"},"Architecture design"),(0,o.kt)("p",null,"The programmable data filtering framework is built into the YurtHub component. Response data for specified requests from cloud kube-apiserver passes through a chain of filters, enabling non-perception and on-demand transformation of the response data to meet the specific requirements in the cloud-edge collaboration scenarios. As show in the figure below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"resource-access-control",src:r(30659).Z,width:"1216",height:"786"})),(0,o.kt)("p",null,"Currently, the filters chain supports five filters as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"masterservice filter: Mutates the ClusterIP and HTTPS port of the ",(0,o.kt)("inlineCode",{parentName:"li"},"default/kubernetes")," service to the address that the YurtHub component is listening to, enabling pods using InClusterConfig on edge nodes to access the cloud kube-apiserver through the YurtHub component without perception."),(0,o.kt)("li",{parentName:"ul"},"servicetopology filter: Reassembles endpointslices according to the service topology setting of the service, ensuring that traffic accessing the service can only be forwarded to pods in the same node or NodePool."),(0,o.kt)("li",{parentName:"ul"},"discardcloudservice filter: Filter out the LB service in the service obtained by kube-proxy, as the edge currently does not support LB service."),(0,o.kt)("li",{parentName:"ul"},"inclusterconfig filter: Comments on kubeconfig settings in the kube-system/kube-proxy configmap to enable kube-proxy components to use InClusterConfig to access the cloud kube-apiserver on edge nodes."),(0,o.kt)("li",{parentName:"ul"},"nodeportisolation filter: By filtering NodePort services based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"nodeport.openyurt.io/listen")," annotation configuration of the Service, NodePort services can be listened to exclusively within specified NodePools, instead of on all nodes across the entire cluster.")),(0,o.kt)("p",null,"Each filter processes only the response data of specific requests determined by the request triples: component/resource/verbs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"component: represents the User-Agent in the HTTP request header, such as kube-proxy."),(0,o.kt)("li",{parentName:"ul"},"resource: represents the requested resource, such as endpointslices."),(0,o.kt)("li",{parentName:"ul"},"verbs: represents the verb of the HTTP request, such as get, list, watch.")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Each filter processes only the response data of specific requests determined by component/resource/verbs, as mentioned above.\nThe following table shows the default components, resources, and verbs supported by each filter:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Filter"),(0,o.kt)("th",{parentName:"tr",align:null},"Default components"),(0,o.kt)("th",{parentName:"tr",align:null},"resources"),(0,o.kt)("th",{parentName:"tr",align:null},"verbs"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"masterservice"),(0,o.kt)("td",{parentName:"tr",align:null},"kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"services"),(0,o.kt)("td",{parentName:"tr",align:null},"list, watch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"servicetopology"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-proxy, coredns, nginx-ingress-controller"),(0,o.kt)("td",{parentName:"tr",align:null},"endpoints, endpointslices"),(0,o.kt)("td",{parentName:"tr",align:null},"list, watch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"discardcloudservice"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"services"),(0,o.kt)("td",{parentName:"tr",align:null},"list, watch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"inclusterconfig"),(0,o.kt)("td",{parentName:"tr",align:null},"kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"configmaps"),(0,o.kt)("td",{parentName:"tr",align:null},"get, list, watch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nodeportisolation"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"services"),(0,o.kt)("td",{parentName:"tr",align:null},"list, watch")))),(0,o.kt)("p",null,"Additionally, if the response for other clients also needs to be handled by filters, users can configure the kube-system/yurt-hub-cfg configmap as follows:"),(0,o.kt)("p",null,"Note: Please ensure that configure the configmap before running client pod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// configured response for clients named foo and bar can be handled by servicetopology\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yurt-hub-cfg\ndata:\n  servicetopology: "foo, bar"\n')))}p.isMDXComponent=!0},30659:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resource-access-control-2c82f506c04bb7fcafcb39f8fa9ce72b.png"}}]);