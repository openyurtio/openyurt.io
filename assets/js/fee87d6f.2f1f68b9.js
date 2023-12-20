"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1593],{36646:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var t=r(85893),o=r(11151);const s={title:"Prometheus"},d=void 0,c={id:"user-manuals/monitoring/prometheus",title:"Prometheus",description:"system-architecture",source:"@site/versioned_docs/version-v1.0/user-manuals/monitoring/prometheus.md",sourceDirName:"user-manuals/monitoring",slug:"/user-manuals/monitoring/prometheus",permalink:"/docs/v1.0/user-manuals/monitoring/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/monitoring/prometheus.md",tags:[],version:"v1.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1703110234,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Prometheus"},sidebar:"docs",previous:{title:"YurtAppDaemon",permalink:"/docs/v1.0/user-manuals/workload/yurt-app-daemon"},next:{title:"EdgeX Foundry",permalink:"/docs/v1.0/user-manuals/iot/edgex-foundry"}},a={},i=[{value:"Environment",id:"environment",level:2},{value:"1.Modify CoreDNS config",id:"1modify-coredns-config",level:2},{value:"1.mount <code>yurt-tunnel-nodes</code> to CoreDNS",id:"1mount-yurt-tunnel-nodes-to-coredns",level:3},{value:"2.Modify CoreDNS config",id:"2modify-coredns-config",level:3},{value:"3.Restart CoreDNS",id:"3restart-coredns",level:3},{value:"2.Config Prometheus",id:"2config-prometheus",level:2},{value:"\u6536\u96c6kubelet\u7684metrics",id:"\u6536\u96c6kubelet\u7684metrics",level:3},{value:"scape other metrics\uff08take node-exporter as an example\uff09",id:"scape-other-metricstake-node-exporter-as-an-example",level:3},{value:"modify <code>yurt-tunnel-server-cfg</code>ConfigMap",id:"modify-yurt-tunnel-server-cfgconfigmap",level:4},{value:"Reference",id:"reference",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"system-architecture",src:r(6690).Z+"",width:"1836",height:"1456"})}),"\n",(0,t.jsx)(n.p,{children:"This document demonstrates how to scrape metrics from edge node through Yurt-Tunnel's DNS mode within an OpenYurt cluster."}),"\n",(0,t.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"OpenYurt v0.5.0+"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"CoreDNS v1.6.8+"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"prometheus-operator"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't have an OpenYurt on hand, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md",children:"yurtctl"})," to create one or convert from an exist Kubernetes cluster. Installation of prometheus-operator\nyou can refer to ",(0,t.jsx)(n.a,{href:"https://github.com/prometheus-operator/kube-prometheus#quickstart",children:"kube-prometheus"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"1modify-coredns-config",children:"1.Modify CoreDNS config"}),"\n",(0,t.jsxs)(n.p,{children:["OpenYurt will create ",(0,t.jsx)(n.code,{children:"yurt-tunnel-nodes"})," ConfigMap\uff0cwhich keeps track of nodename dns records of nodes."]}),"\n",(0,t.jsxs)(n.h3,{id:"1mount-yurt-tunnel-nodes-to-coredns",children:["1.mount ",(0,t.jsx)(n.code,{children:"yurt-tunnel-nodes"})," to CoreDNS"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl patch deployment coredns -n kube-system  -p \'{"spec": {"template": {"spec": {"volumes": [{"configMap":{"name":"yurt-tunnel-nodes"},"name": "edge"}]}}}}\'\nkubectl patch deployment coredns -n kube-system   -p \'{"spec": { "template": { "spec": { "containers": [{"name":"coredns","volumeMounts": [{"mountPath": "/etc/edge", "name": "edge", "readOnly": true }]}]}}}}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2modify-coredns-config",children:"2.Modify CoreDNS config"}),"\n",(0,t.jsxs)(n.p,{children:["use ",(0,t.jsx)(n.a,{href:"https://coredns.io/plugins/hosts/",children:"hosts"})," plugin to load dns records in ",(0,t.jsx)(n.code,{children:"yurt-tunnel-nodes"})," configmap."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl edit configmap coredns -n kube-system\n...........\n Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        hosts /etc/edge/tunnel-nodes {    # add hosts plugin\n            reload 300ms\n            fallthrough\n        }\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf {\n           max_concurrent 1000\n        }\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3restart-coredns",children:"3.Restart CoreDNS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' kubectl patch deployment coredns -n kube-system -p \'{"spec":{"template":{"spec":{"containers":[{"name":"coredns","env":[{"name":"RESTART","value":"\'$(date +%s)\'"}]}]}}}}\'\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2config-prometheus",children:"2.Config Prometheus"}),"\n",(0,t.jsx)(n.p,{children:"By default, prometheus scrape node metrics with node ip. With relabel functionality provided by prometheus, we can change node ip to node hostname. You can config scrape behavior by modify ServiceMonitor CR."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["More about relabel config, please refer to ",(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config",children:"prometheus_relabel_config"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sourceLabels"})," needed differs among components\uff0cplease refer to",(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config",children:"kubernetes_sd_config"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6536\u96c6kubelet\u7684metrics",children:"\u6536\u96c6kubelet\u7684metrics"}),"\n",(0,t.jsxs)(n.p,{children:["Add relabel rule in kubelet ServiceMonitor\uff0cUse ",(0,t.jsx)(n.code,{children:"__meta_kubernetes_endpoint_address_target_name"})," to replace node ip\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl edit serviceMonitor kubelet -n monitoring\nspec:\n  endpoint:\n    ..........\n    relabelings:\n    - action: replace  # add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_endpoint_address_target_name\n      - __address__\n      targetLabel: __address__\n    ..........\n"})}),"\n",(0,t.jsx)(n.h3,{id:"scape-other-metricstake-node-exporter-as-an-example",children:"scape other metrics\uff08take node-exporter as an example\uff09"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Yurt-tunnel"})," will only do forward for port 10250 and 10255, if you want to add forward for other ports, you can modify ",(0,t.jsx)(n.code,{children:"yurt-tunnel-server-cfg"})," ConfigMap.\nFor ",(0,t.jsx)(n.code,{children:"node-exporter"}),"\uff0c you may need to add ",(0,t.jsx)(n.code,{children:"9100"})," to ",(0,t.jsx)(n.code,{children:"https-proxy-ports"}),". If you want to add http forward, just modify ",(0,t.jsx)(n.code,{children:"http-proxy-ports"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"modify-yurt-tunnel-server-cfgconfigmap",children:["modify ",(0,t.jsx)(n.code,{children:"yurt-tunnel-server-cfg"}),"ConfigMap"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'kubectl patch configmap yurt-tunnel-server-cfg  -n kube-system  -p \'{"data": {"https-proxy-ports":"9100"}}\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Add relabel rule in node-exporter ServiceMonitor\uff0cuse ",(0,t.jsx)(n.code,{children:"__meta_kubernetes_pod_node_name"}),"to replace node ip\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl edit servicemonitor  prom-kube-prometheus-stack-node-exporter\nspec:\n endpoint:\n   ......\n   relabelings:\n    - action: replace #add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_pod_node_name\n      - __address__\n      targetLabel: __address__\n    ........\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/7006898548415414279",children:"Openyurt Yurt-Tunnel DNS Mode"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},6690:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/prometheus-f6befccbf53db1ce02a17d95f3af8fe4.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var t=r(67294);const o={},s=t.createContext(o);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);