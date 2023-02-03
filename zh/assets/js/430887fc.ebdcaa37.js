"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e"},l=void 0,p={unversionedId:"user-manuals/monitoring/prometheus",id:"version-v1.1/user-manuals/monitoring/prometheus",title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e",description:"system-architecture",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/user-manuals/monitoring/prometheus.md",sourceDirName:"user-manuals/monitoring",slug:"/user-manuals/monitoring/prometheus",permalink:"/zh/docs/v1.1/user-manuals/monitoring/prometheus",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/monitoring/prometheus.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1669032432,formattedLastUpdatedAt:"2022\u5e7411\u670821\u65e5",frontMatter:{title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e"},sidebar:"version-v1.1/docs",previous:{title:"YurtAppDaemon",permalink:"/zh/docs/v1.1/user-manuals/workload/yurt-app-daemon"},next:{title:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907",permalink:"/zh/docs/v1.1/user-manuals/iot/edgex-foundry"}},s={},u=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"1.\u4fee\u6539coreDNS\u914d\u7f6e",id:"1\u4fee\u6539coredns\u914d\u7f6e",level:2},{value:"1.\u5c06 <code>yurt-tunnel-nodes</code>\u6302\u8f7d\u81f3coreDNS\u4e2d",id:"1\u5c06-yurt-tunnel-nodes\u6302\u8f7d\u81f3coredns\u4e2d",level:3},{value:"2.\u4fee\u6539coreDNS\u7684\u914d\u7f6e\u6587\u4ef6",id:"2\u4fee\u6539coredns\u7684\u914d\u7f6e\u6587\u4ef6",level:3},{value:"3.\u91cd\u542fcoreDNS",id:"3\u91cd\u542fcoredns",level:3},{value:"2.Prometheus \u914d\u7f6e",id:"2prometheus-\u914d\u7f6e",level:2},{value:"\u6536\u96c6kubelet\u7684metrics",id:"\u6536\u96c6kubelet\u7684metrics",level:3},{value:"\u6536\u96c6\u5176\u4ed6metrics\uff08\u4ee5node-exporter\u4e3a\u4f8b\uff09",id:"\u6536\u96c6\u5176\u4ed6metrics\u4ee5node-exporter\u4e3a\u4f8b",level:3},{value:"\u4fee\u6539<code>yurt-tunnel-server-cfg</code>ConfigMap",id:"\u4fee\u6539yurt-tunnel-server-cfgconfigmap",level:4},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],i={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"system-architecture",src:n(6690).Z,width:"720",height:"405"})),(0,a.kt)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u901a\u8fc7Yurt-Tunnel\u7ec4\u4ef6\u7684DNS\u6a21\u5f0f\u6765\u5b9e\u73b0Promethues\u5bf9\u8fb9\u7f18\u7aef\u8bbe\u5907\u7684metrics\u8fdb\u884c\u91c7\u96c6\u3002"),(0,a.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OpenYurt v0.5.0+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CoreDNS v1.6.8+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"prometheus-operator"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md"},"yurtctl\u5de5\u5177")," \u6765\u521d\u59cb\u5316\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u6216\u5c06\u4e00\u4e2aKubernetes\u96c6\u7fa4\u8f6c\u6362\u4e3aOpenYurt\u96c6\u7fa4\uff0cprometheus-operator\u7684\u5b89\u88c5\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus#quickstart"},"kube-prometheus"),"\u3002"))),(0,a.kt)("h2",{id:"1\u4fee\u6539coredns\u914d\u7f6e"},"1.\u4fee\u6539coreDNS\u914d\u7f6e"),(0,a.kt)("p",null,"OpenYurt\u4f1a\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-nodes"),"ConfigMap\uff0c\u5176\u4e2d\u4fdd\u5b58\u7740\u5404\u8282\u70b9\u7684\u5bf9\u5e94\u7684DNS\u8bb0\u5f55\u3002"),(0,a.kt)("h3",{id:"1\u5c06-yurt-tunnel-nodes\u6302\u8f7d\u81f3coredns\u4e2d"},"1.\u5c06 ",(0,a.kt)("inlineCode",{parentName:"h3"},"yurt-tunnel-nodes"),"\u6302\u8f7d\u81f3coreDNS\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch deployment coredns -n kube-system  -p \'{"spec": {"template": {"spec": {"volumes": [{"configMap":{"name":"yurt-tunnel-nodes"},"name": "edge"}]}}}}\'\nkubectl patch deployment coredns -n kube-system   -p \'{"spec": { "template": { "spec": { "containers": [{"name":"coredns","volumeMounts": [{"mountPath": "/etc/edge", "name": "edge", "readOnly": true }]}]}}}}\'\n')),(0,a.kt)("h3",{id:"2\u4fee\u6539coredns\u7684\u914d\u7f6e\u6587\u4ef6"},"2.\u4fee\u6539coreDNS\u7684\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://coredns.io/plugins/hosts/"},"hosts")," \u63d2\u4ef6\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-nodes"),"\u4e2d\u7684 dns \u8bb0\u5f55\u52a0\u8f7d\u5230coreDNS\u4e2d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit configmap coredns -n kube-system\n...........\n Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        hosts /etc/edge/tunnel-nodes {    # add hosts plugin\n            reload 300ms\n            fallthrough\n        }\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf {\n           max_concurrent 1000\n        }\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\n")),(0,a.kt)("h3",{id:"3\u91cd\u542fcoredns"},"3.\u91cd\u542fcoreDNS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' kubectl patch deployment coredns -n kube-system -p \'{"spec":{"template":{"spec":{"containers":[{"name":"coredns","env":[{"name":"RESTART","value":"\'$(date +%s)\'"}]}]}}}}\'\n')),(0,a.kt)("h2",{id:"2prometheus-\u914d\u7f6e"},"2.Prometheus \u914d\u7f6e"),(0,a.kt)("p",null,"prometheus\u9ed8\u8ba4\u4f7f\u7528IP\u6765\u8bbf\u95ee\u8282\u70b9\u7684metric\u5730\u5740\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7prometheus\u63d0\u4f9b\u7684relabel\u529f\u80fd\u5c06IP\u6539\u5199\u4e3a\u8282\u70b9hostname\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"promethues-operator"),"\u4f7f\u7528ServiceMonitor CRD\u6765\u5b9a\u4e49\u6293\u53d6\u914d\u7f6e\uff0c\u56e0\u6b64\u9700\u8981\u4fee\u6539ServiceMonitor\u6765\u589e\u52a0relabel\u529f\u80fd\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u66f4\u591a\u5173\u4e8erelabel\u7684\u914d\u7f6e\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config"},"prometheus_relabel_config"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u540c\u7684\u7ec4\u4ef6relabel\u6240\u9700\u8981\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"sourceLabels"),"\u53ef\u80fd\u4e0d\u540c\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"},"kubernetes_sd_config"),"."))),(0,a.kt)("h3",{id:"\u6536\u96c6kubelet\u7684metrics"},"\u6536\u96c6kubelet\u7684metrics"),(0,a.kt)("p",null,"\u5728kubelet\u7684ServiceMonitor\u4e2d\u589e\u52a0relabel\u89c4\u5219\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"__meta_kubernetes_endpoint_address_target_name"),"\u66ff\u6362\u6389\u8282\u70b9IP\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl edit serviceMonitor kubelet -n monitoring\nspec:\n  endpoint:\n    ..........\n    relabelings:\n    - action: replace  # add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_endpoint_address_target_name\n      - __address__\n      targetLabel: __address__\n    ..........\n")),(0,a.kt)("h3",{id:"\u6536\u96c6\u5176\u4ed6metrics\u4ee5node-exporter\u4e3a\u4f8b"},"\u6536\u96c6\u5176\u4ed6metrics\uff08\u4ee5node-exporter\u4e3a\u4f8b\uff09"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Yurt-tunnel")," \u9ed8\u8ba4\u53ea\u8f6c\u53d110250\u548c10255\u4e24\u4e2a\u7aef\u53e3,\u5982\u679c\u9700\u8981\u5176\u4ed6\u7aef\u53e3\u7684\u6620\u5c04\uff0c\u53ef\u4ee5\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server-cfg"),"ConfigMap\u6765\u6dfb\u52a0\u3002\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"node-exporter")," \u4e3a\u4f8b\uff0c \u9700\u8981\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"9100"),"\u6dfb\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"https-proxy-ports"),"\u4e2d\u3002\u7c7b\u4f3c\u7684\uff0c\u5982\u679c\u662f\u6dfb\u52a0http\u7aef\u53e3\uff0c\u5219\u53ef\u4ee5\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy-ports"),"\u914d\u7f6e\u3002"),(0,a.kt)("h4",{id:"\u4fee\u6539yurt-tunnel-server-cfgconfigmap"},"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"h4"},"yurt-tunnel-server-cfg"),"ConfigMap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch configmap yurt-tunnel-server-cfg  -n kube-system  -p \'{"data": {"https-proxy-ports":"9100"}}\'\n')),(0,a.kt)("p",null,"\u5728node-exporter\u7684ServiceMonitor\u4e2d\u6dfb\u52a0relabel\u89c4\u5219\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"__meta_kubernetes_pod_node_name"),"\u66ff\u6362\u6389\u8282\u70b9IP\u3002\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"$ kubectl edit servicemonitor  prom-kube-prometheus-stack-node-exporter\nspec:\n endpoint:\n   ......\n   relabelings:\n    - action: replace #add relabel rule\n      regex: (.*);.*:(.*)\n      replacement: $1:$2\n      sourceLabels:\n      - __meta_kubernetes_pod_node_name\n      - __address__\n      targetLabel: __address__\n    ........\n")),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7006898548415414279"},"Openyurt Yurt-Tunnel DNS\u6a21\u5f0f\u5b9e\u8df5")))}c.isMDXComponent=!0},6690:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/prometheus-5296a6623284625dc437f63af0a84957.png"}}]);