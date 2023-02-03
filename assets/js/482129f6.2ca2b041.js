"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"user-manuals/monitoring/prometheus",id:"user-manuals/monitoring/prometheus",title:"prometheus",description:"title: Prometheus",source:"@site/docs/user-manuals/monitoring/prometheus.md",sourceDirName:"user-manuals/monitoring",slug:"/user-manuals/monitoring/prometheus",permalink:"/docs/next/user-manuals/monitoring/prometheus",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/monitoring/prometheus.md",tags:[],version:"current",lastUpdatedBy:"River-sh",lastUpdatedAt:1675394551,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{},sidebar:"docs",previous:{title:"YurtAppDaemon",permalink:"/docs/next/user-manuals/workload/yurt-app-daemon"},next:{title:"EdgeX Foundry",permalink:"/docs/next/user-manuals/iot/edgex-foundry"}},l={},u=[{value:"title: Prometheus",id:"title-prometheus",level:2},{value:"Environment",id:"environment",level:2},{value:"Prometheus config",id:"prometheus-config",level:2},{value:"collect kubelet metrics",id:"collect-kubelet-metrics",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"title-prometheus"},"title: Prometheus"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"system-architecture",src:n(6690).Z,width:"720",height:"405"})),(0,o.kt)("p",null,"This document demonstrates how to scrape metrics from edge node through Raven within an OpenYurt cluster, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/installation/manually-setup"},"installation tutorial")," if Raven components are not deployed. Cloud and edge are usually in different network area, so the Raven project is needed to communicate across network area. Prometheus pull metrics of the resources and objects of the edge gateway node through the VPN built by raven agent, and the pull request of collecting non-gateway node metrics is forwarded by gateway node in the network area."),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"OpenYurt v1.2+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Raven v0.3.0+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Prometheus"))),(0,o.kt)("p",null,"If you don't have an OpenYurt on hand, you can refer ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/installation/summary"},"installation tutorial")," to create one or convert from an exist Kubernetes cluster."),(0,o.kt)("h2",{id:"prometheus-config"},"Prometheus config"),(0,o.kt)("p",null,"Prometheus uses IP by default to access the metric addresses of the nodes, and the Raven project has implemented communication across network area, so using Prometheus on the OpenYurt project is consistent with native k8s."),(0,o.kt)("h3",{id:"collect-kubelet-metrics"},"collect kubelet metrics"),(0,o.kt)("p",null,"The function to collect node metrics from kubelet can be added by modifying the configmap of prometheus. For instance, prometheus collects metrics for the node through the read-only port 10255 that kubelet listens on by the relabel configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- job_name: 'kubelet'\n    kubernetes_sd_configs:\n      - role: node\n    scheme: https\n    tls_config:\n      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n      insecure_skip_verify: true\n    authorization:\n      credentials_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n    relabel_configs:\n      - action: labelmap\n        regex: __meta_kubernetes_node_label_(.+)\n      - source_labels: [__address__]\n        action: replace\n        target_label: __address__\n        regex: ([^:;]+):(\\d+)\n        replacement: ${1}:10255\n      - source_labels: [__scheme__]\n        action: replace\n        target_label: __scheme__\n        regex: https\n        replacement: http\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For more information about relabel configuration, refer to the following ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config"},"prometheus_relabel_config"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Different components required different ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceLabels"),"\uff0crefer to the following",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"},"kubernetes_sd_config"),"."))),(0,o.kt)("p",null,"Note: If you also use read-only port 10255, please note that you configure kubelet to enable listening on port 10255, otherwise an error like the one shown in the figure will occur\n",(0,o.kt)("img",{alt:"system-architecture",src:n(82543).Z,width:"3380",height:"938"})))}p.isMDXComponent=!0},82543:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-test-0f90c17d5fae64a06d50ff4c5628cded.png"},6690:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-5296a6623284625dc437f63af0a84957.png"}}]);