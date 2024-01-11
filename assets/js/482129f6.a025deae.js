"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[69693],{77366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(85893),o=n(11151);const s={},i=void 0,a={id:"user-manuals/monitoring/prometheus",title:"prometheus",description:"title: Prometheus",source:"@site/docs/user-manuals/monitoring/prometheus.md",sourceDirName:"user-manuals/monitoring",slug:"/user-manuals/monitoring/prometheus",permalink:"/docs/next/user-manuals/monitoring/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/monitoring/prometheus.md",tags:[],version:"current",lastUpdatedBy:"rambohe",lastUpdatedAt:1704942947,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"docs",previous:{title:"YurtStaticSet",permalink:"/docs/next/user-manuals/workload/yurt-static-set"},next:{title:"EdgeX Foundry",permalink:"/docs/next/user-manuals/iot/edgex-foundry"}},c={},l=[{value:"title: Prometheus",id:"title-prometheus",level:2},{value:"Environment",id:"environment",level:2},{value:"Prometheus config",id:"prometheus-config",level:2},{value:"collect kubelet metrics",id:"collect-kubelet-metrics",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"title-prometheus",children:"title: Prometheus"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"system-architecture",src:n(43718).Z+"",width:"720",height:"405"})}),"\n",(0,r.jsxs)(t.p,{children:["This document demonstrates how to scrape metrics from edge node through Raven within an OpenYurt cluster, you can refer to the ",(0,r.jsx)(t.a,{href:"/docs/next/installation/manually-setup",children:"installation tutorial"})," if Raven components are not deployed. Cloud and edge are usually in different network area, so the Raven project is needed to communicate across network area. Prometheus pull metrics of the resources and objects of the edge gateway node through the VPN built by raven agent, and the pull request of collecting non-gateway node metrics is forwarded by gateway node in the network area."]}),"\n",(0,r.jsx)(t.h2,{id:"environment",children:"Environment"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"OpenYurt v1.2+"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Raven v0.3.0+"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Prometheus"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you don't have an OpenYurt on hand, you can refer ",(0,r.jsx)(t.a,{href:"/docs/next/installation/summary",children:"installation tutorial"})," to create one or convert from an exist Kubernetes cluster."]}),"\n",(0,r.jsx)(t.h2,{id:"prometheus-config",children:"Prometheus config"}),"\n",(0,r.jsx)(t.p,{children:"Prometheus uses IP by default to access the metric addresses of the nodes, and the Raven project has implemented communication across network area, so using Prometheus on the OpenYurt project is consistent with native k8s."}),"\n",(0,r.jsx)(t.h3,{id:"collect-kubelet-metrics",children:"collect kubelet metrics"}),"\n",(0,r.jsx)(t.p,{children:"The function to collect node metrics from kubelet can be added by modifying the configmap of prometheus. For instance, prometheus collects metrics for the node through the read-only port 10255 that kubelet listens on by the relabel configuration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"- job_name: 'kubelet'\n    kubernetes_sd_configs:\n      - role: node\n    scheme: https\n    tls_config:\n      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n      insecure_skip_verify: true\n    authorization:\n      credentials_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n    relabel_configs:\n      - action: labelmap\n        regex: __meta_kubernetes_node_label_(.+)\n      - source_labels: [__address__]\n        action: replace\n        target_label: __address__\n        regex: ([^:;]+):(\\d+)\n        replacement: ${1}:10255\n      - source_labels: [__scheme__]\n        action: replace\n        target_label: __scheme__\n        regex: https\n        replacement: http\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["For more information about relabel configuration, refer to the following ",(0,r.jsx)(t.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config",children:"prometheus_relabel_config"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Different components required different ",(0,r.jsx)(t.code,{children:"sourceLabels"}),"\uff0crefer to the following",(0,r.jsx)(t.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config",children:"kubernetes_sd_config"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Note: If you also use read-only port 10255, please note that you configure kubelet to enable listening on port 10255, otherwise an error like the one shown in the figure will occur\n",(0,r.jsx)(t.img,{alt:"system-architecture",src:n(82543).Z+"",width:"3380",height:"938"})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},43718:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-based-raven-5296a6623284625dc437f63af0a84957.png"},82543:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-test-0f90c17d5fae64a06d50ff4c5628cded.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);