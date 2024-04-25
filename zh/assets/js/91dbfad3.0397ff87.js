"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[14609],{73003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(85893),r=n(11151);const i={title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e"},a=void 0,o={id:"user-manuals/monitoring/prometheus",title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e",description:"system-architecture",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/monitoring/prometheus.md",sourceDirName:"user-manuals/monitoring",slug:"/user-manuals/monitoring/prometheus",permalink:"/zh/docs/next/user-manuals/monitoring/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/monitoring/prometheus.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171408076e4,frontMatter:{title:"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e"},sidebar:"docs",previous:{title:"YurtStaticSet",permalink:"/zh/docs/next/user-manuals/workload/yurt-static-set"},next:{title:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907",permalink:"/zh/docs/next/user-manuals/iot/edgex-foundry"}},c={},l=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"Prometheus \u914d\u7f6e",id:"prometheus-\u914d\u7f6e",level:2},{value:"\u4ee5\u6536\u96c6kubelet\u7684metrics\u4e3a\u4f8b",id:"\u4ee5\u6536\u96c6kubelet\u7684metrics\u4e3a\u4f8b",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"system-architecture",src:n(43718).Z+"",width:"720",height:"405"})}),"\n",(0,s.jsxs)(t.p,{children:["\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u901a\u8fc7Raven\u5b9e\u73b0Promethues\u5bf9\u8fb9\u7f18\u7aef\u8bbe\u5907\u7684metrics\u8fdb\u884c\u91c7\u96c6,\u5982\u679c\u672a\u5b89\u88c5Raven\u7ec4\u4ef6\u8bf7\u53c2\u8003",(0,s.jsx)(t.a,{href:"/zh/docs/next/installation/manually-setup",children:"\u5b89\u88c5\u6559\u7a0b"}),"\u3002\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\uff0c\u4e91\u3001\u8fb9\u5f80\u5f80\u5904\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u57df\u5185\uff0c\u56e0\u6b64\u9700\u8981Raven\u9879\u76ee\u5b9e\u73b0\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\u3002\u4f4d\u4e8e\u4e91\u7aef\u7684Prometheus\u7ec4\u4ef6\u9700\u8981\u8de8\u7f51\u7edc\u57df\u62c9\u53d6\u96c6\u7fa4\u8d44\u6e90metrics\uff0c\u9488\u5bf9\u8fb9\u7f18\u7684Gateway\u8282\u70b9\u76f8\u5173\u8d44\u6e90\u4fe1\u606f\u5219\u901a\u8fc7VPN\u83b7\u53d6\uff0c\u9488\u5bf9\u8fb9\u7f18\u975eGateway\u8282\u70b9\u5219\u901a\u8fc7\u8be5\u7f51\u8def\u57df\u5185Gateway\u8282\u70b9\u8f6c\u53d1\u62c9\u53d6\u8d44\u6e90\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"/zh/docs/next/installation/summary",children:"\u5b89\u88c5\u624b\u518c"})," \u6765\u521d\u59cb\u5316\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u6216\u5c06\u4e00\u4e2aKubernetes\u96c6\u7fa4\u8f6c\u6362\u4e3aOpenYurt\u96c6\u7fa4\u3002"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"OpenYurt v1.2+"}),"\n",(0,s.jsx)(t.li,{children:"Raven v0.3.0+"}),"\n",(0,s.jsx)(t.li,{children:"Prometheus"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"prometheus-\u914d\u7f6e",children:"Prometheus \u914d\u7f6e"}),"\n",(0,s.jsx)(t.p,{children:"Prometheus\u9ed8\u8ba4\u4f7f\u7528IP\u6765\u8bbf\u95ee\u8282\u70b9\u7684metric\u5730\u5740\uff0cRaven\u9879\u76ee\u5b9e\u73b0\u4e86\u8de8\u7f51\u7edc\u57df\u901a\u4fe1\uff0c\u56e0\u6b64\u5728OpenYurt\u9879\u76ee\u4e0a\u4f7f\u7528Prometheus\u4e0e\u539f\u751fk8s\u4fdd\u6301\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u4ee5\u6536\u96c6kubelet\u7684metrics\u4e3a\u4f8b",children:"\u4ee5\u6536\u96c6kubelet\u7684metrics\u4e3a\u4f8b"}),"\n",(0,s.jsx)(t.p,{children:"\u901a\u8fc7\u4fee\u6539Prometheus\u7684\u914d\u7f6e\u6587\u4ef6\u589e\u52a0\u6536\u96c6kubelet\u7684\u6307\u6807\u6570\u636e\u7684\u529f\u80fd,\u5728\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7relabel\u89c4\u5219\u8bbe\u5b9aprometheus\u901a\u8fc7kubelet\u76d1\u542c\u7684\u53ea\u8bfb\u7aef\u53e310255\u6536\u96c6metrics\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u66f4\u591a\u5173\u4e8erelabel\u7684\u914d\u7f6e\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config",children:"prometheus_relabel_config"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["\u4e0d\u540c\u7684\u7ec4\u4ef6relabel\u6240\u9700\u8981\u7684",(0,s.jsx)(t.code,{children:"sourceLabels"}),"\u53ef\u80fd\u4e0d\u540c\uff0c\u53ef\u4ee5\u53c2\u8003",(0,s.jsx)(t.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config",children:"kubernetes_sd_config"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"- job_name: 'kubelet'\n    kubernetes_sd_configs:\n      - role: node\n    scheme: https\n    tls_config:\n      ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n      insecure_skip_verify: true\n    authorization:\n      credentials_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n    relabel_configs:\n      - action: labelmap\n        regex: __meta_kubernetes_node_label_(.+)\n      - source_labels: [__address__]\n        action: replace\n        target_label: __address__\n        regex: ([^:;]+):(\\d+)\n        replacement: ${1}:10255\n      - source_labels: [__scheme__]\n        action: replace\n        target_label: __scheme__\n        regex: https\n        replacement: http\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u4e5f\u4f7f\u7528\u53ea\u8bfb\u7aef\u53e310255\uff0c\u8bf7\u6ce8\u610f\u914d\u7f6ekubelet\u5f00\u542f\u5bf910255\u7aef\u53e3\u7684\u76d1\u542c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u5982\u5982\u56fe\u6240\u793a\u9519\u8bef\n",(0,s.jsx)(t.img,{alt:"system-architecture",src:n(82543).Z+"",width:"3380",height:"938"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},43718:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/prometheus-based-raven-5296a6623284625dc437f63af0a84957.png"},82543:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/prometheus-test-0f90c17d5fae64a06d50ff4c5628cded.png"},11151:(e,t,n)=>{n.d(t,{a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);