"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[41852],{57376:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var d=s(85893),r=s(11151);const t={title:"YurtHub Performance Test"},i=void 0,l={id:"test-report/yurthub-performance-test",title:"YurtHub Performance Test",description:"\u80cc\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/test-report/yurthub-performance-test.md",sourceDirName:"test-report",slug:"/test-report/yurthub-performance-test",permalink:"/zh/docs/test-report/yurthub-performance-test",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/test-report/yurthub-performance-test.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1711267183,formattedLastUpdatedAt:"2024\u5e743\u670824\u65e5",frontMatter:{title:"YurtHub Performance Test"},sidebar:"docs",previous:{title:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907",permalink:"/zh/docs/user-manuals/iot/edgex-foundry"},next:{title:"Yurt-Coordinator \u6027\u80fd\u6d4b\u8bd5",permalink:"/zh/docs/test-report/yurt-coordinator-test"}},c={},h=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"Kubernetes\u7248\u672c",id:"kubernetes\u7248\u672c",level:3},{value:"OpenYurt \u7248\u672c",id:"openyurt-\u7248\u672c",level:3},{value:"\u8282\u70b9\u914d\u7f6e",id:"\u8282\u70b9\u914d\u7f6e",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf",id:"\u64cd\u4f5c\u7cfb\u7edf",level:4},{value:"CPU",id:"cpu",level:4},{value:"Memory",id:"memory",level:4},{value:"Disk",id:"disk",level:4},{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5",level:2},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"Traffic",id:"traffic",level:3},{value:"Latency",id:"latency",level:3},{value:"Memory",id:"memory-1",level:3},{value:"CPU",id:"cpu-1",level:3},{value:"\u7ed3\u8bba\u53ca\u5206\u6790",id:"\u7ed3\u8bba\u53ca\u5206\u6790",level:2}];function x(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,d.jsx)(n.p,{children:"YurtHub\u662fOpenYurt\u7684\u91cd\u8981\u7ec4\u4ef6\uff0c\u5b83\u4e3aAPIServer\u63d0\u4f9b\u4e86\u4e00\u5c42\u989d\u5916\u7684\u62bd\u8c61\uff0c\u63a5\u7ba1\u4e86\u8fb9\u7f18\u5230\u4e91\u7684\u8bf7\u6c42\u6d41\u91cf\uff0c\u652f\u6491\u4e86OpenYurt\u7684\u8fb9\u7f18\u81ea\u6cbb\uff0c\u6d41\u91cf\u95ed\u73af\u7b49\u91cd\u8981\u80fd\u529b\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u5927\u91cf\u8fb9\u7f18\u4e91\u539f\u751f\u573a\u666f\u9762\u4e34\u7740\u8fb9\u7f18\u8282\u70b9\u8d44\u6e90\u53d7\u9650\u7684\u95ee\u9898\uff0cYurtHub\u4f5c\u4e3a\u8fb9\u7f18\u4fa7\u7684\u91cd\u8981\u7ec4\u4ef6\uff0c\u5b83\u5728\u5404\u79cd\u73af\u5883\u4e0b\u7684\u6027\u80fd\u8868\u73b0\u5bf9OpenYurt\u96c6\u7fa4\u90fd\u6709\u7740\u5f88\u5927\u5f71\u54cd\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5bf9YurtHub\u7ec4\u4ef6\u7684\u6027\u80fd\u6709\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u73af\u5883",children:"\u6d4b\u8bd5\u73af\u5883"}),"\n",(0,d.jsx)(n.h3,{id:"kubernetes\u7248\u672c",children:"Kubernetes\u7248\u672c"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'Major:"1", Minor:"22", GitVersion:"v1.22.12", GitCommit:"b058e1760c79f46a834ba59bd7a3486ecf28237d", GitTreeState:"clean", BuildDate:"2022-07-13T14:53:39Z", GoVersion:"go1.16.15", Compiler:"gc", Platform:"linux/amd64"'})}),"\n",(0,d.jsx)(n.h3,{id:"openyurt-\u7248\u672c",children:"OpenYurt \u7248\u672c"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'GitVersion:"v0.7.0", GitCommit:"d331a42", BuildDate:"2022-08-29T13:33:43Z", GoVersion:"go1.17.12", Compiler:"gc", Platform:"linux/amd64"'})}),"\n",(0,d.jsx)(n.h3,{id:"\u8282\u70b9\u914d\u7f6e",children:"\u8282\u70b9\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:["Master \u8282\u70b9\u4e0eNode\u8282\u70b9\u4f7f\u7528\u4e0d\u540c\u914d\u7f6e\u7684ECS\uff0c\u96c6\u7fa4\u4e2d\u5305\u542b1\u4e2amaster\u8282\u70b9\u548c\u5176\u4ed6100\u4e2anode\u8282\u70b9\u3002100\u4e2anode\u8282\u70b9\u5747\u901a\u8fc7",(0,d.jsx)(n.code,{children:"yurtadm"}),"\u4ee5edge\u6a21\u5f0f\u63a5\u5165\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u64cd\u4f5c\u7cfb\u7edf",children:"\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Master"}),(0,d.jsx)(n.th,{children:"Node"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LSB Version"}),(0,d.jsxs)(n.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]}),(0,d.jsxs)(n.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Distributor ID"}),(0,d.jsx)(n.td,{children:"CentOS"}),(0,d.jsx)(n.td,{children:"CentOS"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{children:"CentOS Linux release 7.9.2009 (Core)"}),(0,d.jsx)(n.td,{children:"CentOS Linux release 7.9.2009 (Core)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Release"}),(0,d.jsx)(n.td,{children:"7.9.2009"}),(0,d.jsx)(n.td,{children:"7.9.2009"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Codename"}),(0,d.jsx)(n.td,{children:"Core"}),(0,d.jsx)(n.td,{children:"Core"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"cpu",children:"CPU"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Master"}),(0,d.jsx)(n.th,{children:"Node"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Architecture"}),(0,d.jsx)(n.td,{children:"x86_64"}),(0,d.jsx)(n.td,{children:"x86_64"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CPU op-mode (s)"}),(0,d.jsx)(n.td,{children:"32-bit, 64-bit"}),(0,d.jsx)(n.td,{children:"32-bit, 64-bit"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Byte Order"}),(0,d.jsx)(n.td,{children:"Little Endian"}),(0,d.jsx)(n.td,{children:"Little Endian"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CPU (s)"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On-line CPU(s) list"}),(0,d.jsx)(n.td,{children:"0-7"}),(0,d.jsx)(n.td,{children:"0,1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread(s) per core"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Core(s) per socket"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Socket(s)"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"NUMA node(s)"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Vendor ID"}),(0,d.jsx)(n.td,{children:"GenuineIntel"}),(0,d.jsx)(n.td,{children:"GenuineIntel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CPU family"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Model"}),(0,d.jsx)(n.td,{children:"106"}),(0,d.jsx)(n.td,{children:"106"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Model name"}),(0,d.jsx)(n.td,{children:"Intel(R) Xeon(R) Platinum 8369B CPU @ 2.70GHz"}),(0,d.jsx)(n.td,{children:"Intel(R) Xeon(R) Platinum 8369B CPU @ 2.70GHz"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Stepping"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CPU MHz"}),(0,d.jsx)(n.td,{children:"2699.998"}),(0,d.jsx)(n.td,{children:"2699.998"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"memory",children:"Memory"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Master"}),(0,d.jsx)(n.th,{children:"Node"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Total memory"}),(0,d.jsx)(n.td,{children:"32245896 K"}),(0,d.jsx)(n.td,{children:"7862304 K"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"disk",children:"Disk"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Master"}),(0,d.jsx)(n.th,{children:"Node"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Total Size"}),(0,d.jsx)(n.td,{children:"40GiB (3800 IOPS)"}),(0,d.jsx)(n.td,{children:"40GiB (3800 IOPS)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Type"}),(0,d.jsx)(n.td,{children:"ESSD\u4e91\u76d8 PL0"}),(0,d.jsx)(n.td,{children:"ESSD\u4e91\u76d8 PL1"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u65b9\u6cd5",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7Promethus\u6536\u96c6OpenYurt\u96c6\u7fa4\u4e2d\u8fb9\u7f18\u4fa7yurthub\u7684\u4e09\u7c7b\u6307\u6807"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8d44\u6e90\u5360\u7528\uff1ayurthub\u5bb9\u5668 CPU/Mem \u4f7f\u7528\u60c5\u51b5"}),"\n",(0,d.jsx)(n.li,{children:"\u6570\u636e\u6d41\u91cf\uff1ayurthub \u8f6c\u53d1\u8bf7\u6c42\u6d41\u91cf"}),"\n",(0,d.jsx)(n.li,{children:"\u8bf7\u6c42\u5ef6\u8fdf\uff1ayurthub \u8f6c\u53d1\u8bf7\u6c42\u7684\u5ef6\u8fdf"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6574\u4f53\u7684\u6d4b\u8bd5\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\n",(0,d.jsx)(n.img,{src:s(1618).Z+"",width:"3723",height:"2014"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u7ed3\u679c",children:"\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"15:00-19:00 \u9646\u7eed\u63a5\u5165100\u8282\u70b9\n19:30 \u521b\u5efa2000 Pod\uff0c 1000 Service\uff08\u4ee5Daemonset\u5f62\u5f0f\u90e8\u7f72\uff0c\u6bcf\u4e2a\u8282\u70b9\u90e8\u7f7220\u4e2aPod\uff0c\u5355\u4e2aService\u5305\u542b50\u4e2aendpoints\uff09\n19:35 \u6240\u6709\u8d44\u6e90\u521b\u5efa\u5b8c\u6210\n21:06 \u5220\u9664\u6240\u6709\u8d44\u6e90"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"traffic",children:"Traffic"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.img,{src:s(88420).Z+"",width:"2760",height:"1104"}),"\n\u4e0a\u56fe\u662f100\u4e2a\u8fb9\u7f18\u8282\u70b9\u7684Yurthub\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u7684\u8bf7\u6c42\u6d41\u91cf\u8868\u73b0\uff0c\u53ef\u4ee5\u89c2\u5bdf\u5230\u4e00\u4e0b\u7279\u5f81\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6d41\u91cf\u6570\u636e\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u6709\u4e00\u4e2a5min\u5468\u671f\u6027\u7684\u6ce2\u52a8\uff0c\u5cf0\u503c\u5927\u6982\u572815-20 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"workload\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u6d41\u91cf\u6709\u4e00\u4e2a\u6fc0\u589e\uff0c\u5cf0\u503c\u5728350 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"workload\u5378\u8f7d\u65f6\u6d41\u91cf\u4e5f\u6709\u4e00\u4e2a\u6fc0\u589e\uff0c\u800c\u4e14\u6301\u7eed\u65f6\u95f4\u66f4\u77ed\uff0c\u5cf0\u503c\u66f4\u9ad8\u5927\u6982\u5728780 KB/s"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9488\u5bf9\u6d41\u91cf\u6765\u6e90\u8fdb\u4e00\u6b65\u63a2\u7a76\uff0c\u6211\u4eec\u9009\u53d6\u4e00\u53f0\u673a\u5668\u7684\u6d41\u91cf\u60c5\u51b5\u5206\u6790\n",(0,d.jsx)(n.img,{src:s(97824).Z+"",width:"2760",height:"1114"}),"\n\u4e0a\u56fe\u65f6workload\u90e8\u7f72\u65f6\uff0c\u8be5\u673a\u5668\u7684\u6d41\u91cf\u60c5\u51b5\uff0c\u53ef\u4ee5\u770b\u5230\u6d41\u91cf\u7a81\u53d8\u65f6\u4ece\u4e0a\u5230\u4e0b\u7684\u4f7f\u7528\u6392\u540d\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"endpointslices, watch, 240 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"endpoints, watch, 50 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"services, watch, 25 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"nodes, watch, 24 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"pod, watch, 3 KB/s"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u8be5\u673a\u5668\u7684\u5cf0\u503c\u6d41\u91cf\u5927\u7ea6\u5728320 KB/s\uff0c\u7edd\u5927\u591a\u6570\u6765\u6e90\u4e8eservice\u76f8\u5173\u7684watch\u8bf7\u6c42\uff08endpointslice, endpoint, service\uff09\uff0c\u8fd9\u53ef\u80fd\u4e5f\u4e0eservice\u4e2dendpoint\u8f83\u591a\uff08\u5355\u4e2aservice50\u4e2aendpoints\uff09\u6709\u5173\u7cfb\u3002\u53e6\u5916\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u5468\u671f5min\u7684\u6d41\u91cf\u53d8\u5316\u4e5f\u662f\u7531nodes\u8d44\u6e90\u7684watch\u8bf7\u6c42\u5f15\u8d77\u7684\u3002"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.img,{src:s(34271).Z+"",width:"2760",height:"1114"}),"\n\u4e0a\u56fe\u662f\u8be5\u673a\u5668\u5728\u5378\u8f7d\u65f6\u7684\u6d41\u91cf\u8868\u73b0\uff0c\u603b\u7684\u5cf0\u503c\u6d41\u91cf\u5927\u6982\u5728780k\u5de6\u53f3\uff0c\u6309\u8d44\u6e90\u4e0e\u52a8\u4f5c\u5212\u5206\uff0c\u4ece\u5927\u5230\u5c0f\u6d41\u91cf\u4f7f\u7528\u60c5\u51b5\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"endpointslices, watch, 540 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"service, watch, 140 KB/s"}),"\n",(0,d.jsx)(n.li,{children:"endpoints, watch, 100 KB/s"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"latency",children:"Latency"}),"\n",(0,d.jsx)(n.p,{children:"\u5728latency\u91c7\u96c6\u65f6\uff0c\u6211\u4eec\u533a\u5206\u4e86\u4e24\u7c7blatency\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"full_latency\uff1a \u8bb0\u5f55\u4ece\u8bf7\u6c42\u5230\u8fbeyurthub\u5230\u8bf7\u6c42\u4eceyurthub\u79bb\u5f00\u65f6\u603b\u65f6\u957f"}),"\n",(0,d.jsx)(n.li,{children:"apiserver_latency\uff1a\u8bb0\u5f55\u8bf7\u6c42\u4eceyurthub\u8f6c\u53d1\u5230apiserver\u7684\u65f6\u957f"}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u5b9e\u9645\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u8fd9\u4e24\u7c7blatency\u51e0\u4e4e\u6ca1\u6709\u533a\u522b\uff0c\u6240\u4ee5\u4ee5full_latency\u4e3a\u51c6"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u56fe\u4e2d\u6211\u4eec\u6839\u636everb\u67e5\u770b\u6bcf\u7c7b\u8bf7\u6c42\u4e2d\u8017\u65f6\u6700\u591a\u7684latency\u60c5\u51b5\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Delete"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(80068).Z+"",width:"2760",height:"1374"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Create"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(81893).Z+"",width:"2270",height:"1120"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"List"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(60489).Z+"",width:"2280",height:"1120"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Update"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(42679).Z+"",width:"2284",height:"1122"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Patch"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(71034).Z+"",width:"2284",height:"1122"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Get"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.img,{src:s(51691).Z+"",width:"2284",height:"1128"}),"\n\u53ef\u4ee5\u770b\u5230\u6700\u8017\u65f6\u7684\u8bf7\u6c42\u4e3b\u8981\u662fnode\u7684create\uff0cget\uff0c list\u8bf7\u6c42\uff0c\u4ee5\u53caservice\u7684list\u8bf7\u6c42\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"memory-1",children:"Memory"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.img,{src:s(50192).Z+"",width:"2738",height:"1128"}),"\n\u5728\u521d\u59cb\u72b6\u6001\u4e0b\uff0cworkload\u90e8\u7f72\u524d\uff0cyurthub\u7684\u5185\u5b58\u5360\u7528\u96c6\u4e2d\u572835-40MB\uff0c\u6709\u4e24\u53f0\u673a\u5668\u56e0\u4e3aPrometheus\u7684\u76d1\u63a7\u5957\u4ef6\u90e8\u7f72\u5728\u4e0a\u9762\uff0c\u6240\u4ee5\u4f7f\u7528\u5185\u5b58\u8f83\u591a\u3002\u53e6\u5916\u6700\u4e0b\u65b9\u90a3\u6761\u66f2\u7ebf\u662fmaster\u8282\u70b9\u4e0a\u4ee5cloud\u6a21\u5f0f\u90e8\u7f72\u7684yurthub\u3002\u572819:30\u6bcf\u4e2a\u8282\u70b9\u90e8\u7f72\u4e8620Pod\u540e\uff0c\u8282\u70b9\u5185\u5b58\u6709\u7ea6 2-5MB \u7684\u5c0f\u5e45\u63d0\u5347\uff0c\u5e76\u4e14\u4e00\u76f4\u7ef4\u6301\u5728\u8fd9\u4e2a\u6c34\u5e73\uff0c\u5f53workload\u5220\u9664\u540e\uff0c\u5185\u5b58\u5360\u7528\u5148\u662f10MB\u7684\u660e\u663e\u4e0b\u964d\uff0c\u63a5\u7740\u53c8\u56de\u5347\u5230workload\u5220\u9664\u524d\u7684\u6c34\u5e73\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"cpu-1",children:"CPU"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.img,{src:s(46485).Z+"",width:"2738",height:"1128"}),"\nCPU\u7684\u5355\u6838\u5360\u7528\u7387\u60c5\u51b5\u4e0e\u6d41\u91cf\u4f7f\u7528\u60c5\u51b5\u7c7b\u4f3c\uff0c\u6b63\u5e38\u72b6\u6001\u4e0b\u5448\u5468\u671f\u6027\u7684\u6ce2\u52a8\u4f46\u90fd\u7ef4\u6301\u5728\u4e00\u4e2a\u8f83\u4f4e\u7684\u6c34\u5e73\uff08\u7ea60.02%\uff09\uff0c\u4e24\u4e2a\u6ce2\u5cf0\u5206\u522b\u51fa\u73b0\u5728workload\u90e8\u7f72\uff0822%\uff09\u4ee5\u53caworkload\u5220\u9664\u65f6\uff0825%\uff09\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u7ed3\u8bba\u53ca\u5206\u6790",children:"\u7ed3\u8bba\u53ca\u5206\u6790"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u65e0workload\u7684\u538b\u529b\u4e0b yurthub \u7ea6\u5360\u752830-40MB\u7684\u5185\u5b58\u4ee5\u53ca\u6781\u5c11\u7684\uff08< 0.02\uff09\u7684CPU\u8d44\u6e90\u3002","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"CPU\u8d44\u6e90\u7684\u4f7f\u7528\u4e3b\u8981\u662f\u7528\u4e8e\u5904\u7406yurthub\u6536\u5230\u7684\u8bf7\u6c42\uff0c\u5728\u8d44\u6e90\u521b\u5efa\u65f6\u5355\u6838\u5360\u7528\u7387\u7684\u5cf0\u503c\u53ef\u4ee5\u8fbe\u523025%\u5de6\u53f3\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5185\u5b58\u8d44\u6e90\u6c34\u5e73\u4e0e\u8282\u70b9\u4e0a\u7684workload\u5206\u5e03\u60c5\u51b5\u6709\u5173\uff0c\u5bf9\u7740\u8d44\u6e90\u7684\u521b\u5efa\u548c\u5220\u9664\u67095MB\u5de6\u53f3\u7684\u53d8\u5316\u3002\u4f46\u662f\u5728\u6240\u6709\u6d4b\u8bd5workload\u90fd\u5220\u9664\u540e, yurthub\u7684\u5185\u5b58\u5360\u7528\u5148\u662f\u5927\u5e45\u4e0b\u964d\u63a5\u7740\u53c8\u56de\u5230\u4e86\u5220\u9664\u524d\u7684\u6c34\u5e73\uff0c\u5177\u4f53\u539f\u56e0\u6709\u5f85\u8fdb\u4e00\u6b65\u7684\u5206\u6790\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.li,{children:"Yurthub\u7684\u6d41\u91cf\u4f7f\u7528\u60c5\u51b5\u53ef\u4ee5\u770b\u51fa\uff0c\u5728\u8d44\u6e90\u521b\u5efa\u548c\u9500\u6bc1\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5728\u77ed\u65f6\u95f4\u4f1a\u51fa\u73b0\u5927\u91cf\u7684\u8bf7\u6c42\uff08\u5206\u522b\u8fbe\u5230350 KB/s \u548c 780 KB/s\uff09\uff0c\u5176\u4e2d\u5927\u90e8\u5206\u6d41\u91cf\u90fd\u6765\u6e90\u4e8eService\u76f8\u5173\u8d44\u6e90(endpointslice, endpoint, service) \u7684watch\u8bf7\u6c42\u3002"}),"\n",(0,d.jsx)(n.li,{children:"Yurthub\u7684\u8bf7\u6c42\u5904\u7406\u8f6c\u53d1\u8fc7\u7a0b\u76f8\u6bd4\u4e8e\u8bf7\u6c42\u672c\u8eab\u7684\u5ef6\u8fdf\u53ef\u4ee5\u5ffd\u7565\u4e0d\u8ba1\uff0c\u8bf7\u6c42\u5ef6\u8fdf\u4e3b\u8981\u548c\u8bf7\u6c42\u8d44\u6e90\u7684\u5927\u5c0f\u6709\u5173\u3002"}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},1618:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/arch-f8eb4bdbe31ba09a2c15061ef8ad75ed.png"},46485:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/cpu-b8f746ad52c5739cdd0d5931bc9a2513.png"},81893:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/latency_create-b08fb4890229c923ba659c23c123a4ab.png"},80068:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/latency_delete-9d3195b430ca6abc055f05e1a69d9549.png"},51691:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/latency_get-9df1497258c150bb9dd0e4c96d00d6b5.png"},60489:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/latency_list-0ea664db1c346e06c4f7c7469d5d7d5b.png"},71034:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/latency_patch-f39378ed83d74237fd3c8b4aea653d36.png"},42679:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/latency_update-a4388a59020d9fcebde029f5b1c852d3.png"},50192:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/mem-d7d6115a99f6595391ae6eb19a65241d.png"},88420:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/traffic-bf646205ee7c9c356cc09240b0e01cbd.png"},97824:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/traffic_create-1375c3f28b5c883f57e991ff72552886.png"},34271:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/traffic_delete-b717eec23e4e18268799c87fe12e89b1.png"},11151:(e,n,s)=>{s.d(n,{a:()=>i});var d=s(67294);const r={},t=d.createContext(r);function i(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);