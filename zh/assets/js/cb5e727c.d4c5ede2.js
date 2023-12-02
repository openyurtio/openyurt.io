"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8987],{51821:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(85893),t=n(11151);const r={title:"Pool Coordinator \u6027\u80fd\u6d4b\u8bd5"},i=void 0,o={id:"test-report/pool-coordinator-test",title:"Pool Coordinator \u6027\u80fd\u6d4b\u8bd5",description:"\u80cc\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/test-report/pool-coordinator-test.md",sourceDirName:"test-report",slug:"/test-report/pool-coordinator-test",permalink:"/zh/docs/test-report/pool-coordinator-test",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/test-report/pool-coordinator-test.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1701555518,formattedLastUpdatedAt:"2023\u5e7412\u67082\u65e5",frontMatter:{title:"Pool Coordinator \u6027\u80fd\u6d4b\u8bd5"}},l={},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"Kubernetes \u7248\u672c",id:"kubernetes-\u7248\u672c",level:3},{value:"Node \u914d\u7f6e",id:"node-\u914d\u7f6e",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf",id:"\u64cd\u4f5c\u7cfb\u7edf",level:4},{value:"CPU",id:"cpu",level:4},{value:"\u5185\u5b58",id:"\u5185\u5b58",level:4},{value:"\u78c1\u76d8",id:"\u78c1\u76d8",level:4},{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5",level:2},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",level:2},{value:"\u7b2c\u4e00\u9636\u6bb5",id:"\u7b2c\u4e00\u9636\u6bb5",level:3},{value:"\u7b2c\u4e8c\u9636\u6bb5",id:"\u7b2c\u4e8c\u9636\u6bb5",level:3},{value:"\u7b2c\u4e09\u9636\u6bb5",id:"\u7b2c\u4e09\u9636\u6bb5",level:3},{value:"\u7b2c\u56db\u9636\u6bb5",id:"\u7b2c\u56db\u9636\u6bb5",level:3},{value:"\u7b2c\u4e94\u9636\u6bb5",id:"\u7b2c\u4e94\u9636\u6bb5",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function a(e){const d={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,s.jsx)(d.p,{children:"Pool Coordinator \u662f\u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\u4e00\u4e2a\u91cd\u8981\u7684\u7ec4\u4ef6\uff0c\u5b83\u662f\u4e00\u4e2a\u7531 apiserver \u548c\u4f7f\u7528\u5185\u5b58\u5b58\u50a8\u6570\u636e\u7684 etcd \u7ec4\u6210\u7684 Pod\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u8fb9\u7f18\u8282\u70b9\u6c60\u4e2d\u7684 node \u4f1a\u901a\u8fc7 Pool Coordinator \u9009\u51fa\u4e00\u4e2a\u4e3b\u8282\u70b9\uff0c\u8282\u70b9\u6c60\u4f9d\u8d56\u6b64\u4e3b\u8282\u70b9\u505a\u4e91\u7aef\u63a2\u6d3b\uff1bPool Coordinator \u4e5f\u7528\u4e8e\u5907\u4efd\u8fb9\u7f18\u8282\u70b9\u7684\u672c\u5730\u8d44\u6e90\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u5bf9 Pool Coordinator \u7684\u6027\u80fd\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5e76\u7ed9\u51fa\u4e00\u4e2a\u63a8\u8350\u7684 Pool Coordinator \u8d44\u6e90\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(d.h2,{id:"\u6d4b\u8bd5\u73af\u5883",children:"\u6d4b\u8bd5\u73af\u5883"}),"\n",(0,s.jsx)(d.h3,{id:"kubernetes-\u7248\u672c",children:"Kubernetes \u7248\u672c"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.code,{children:'Major:"1", Minor:"22", GitVersion:"v1.22.0", GitCommit:"c2b5237ccd9c0f1d600d3072634ca66cefdf272f", GitTreeState:"clean", BuildDate:"2021-08-04T17:57:25Z", GoVersion:"go1.16.6", Compiler:"gc", Platform:"linux/amd64"'})}),"\n",(0,s.jsx)(d.h3,{id:"node-\u914d\u7f6e",children:"Node \u914d\u7f6e"}),"\n",(0,s.jsx)(d.p,{children:"Master \u8282\u70b9\u4e0e worker \u8282\u70b9\u5747\u4f7f\u7528\u8fd0\u884c\u5728 VMWare Fusion \u4e2d\u7684\u865a\u62df\u673a\u3002"}),"\n",(0,s.jsx)(d.h4,{id:"\u64cd\u4f5c\u7cfb\u7edf",children:"\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{children:"Master"}),(0,s.jsx)(d.th,{children:"Node"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"LSB Version"}),(0,s.jsxs)(d.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]}),(0,s.jsxs)(d.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Distributor ID"}),(0,s.jsx)(d.td,{children:"CentOS"}),(0,s.jsx)(d.td,{children:"CentOS"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Description"}),(0,s.jsx)(d.td,{children:"CentOS Linux release 8.4.2105"}),(0,s.jsx)(d.td,{children:"CentOS Linux release 8.4.2105"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Release"}),(0,s.jsx)(d.td,{children:"8.4.2105"}),(0,s.jsx)(d.td,{children:"8.4.2105"})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"cpu",children:"CPU"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{children:"Master"}),(0,s.jsx)(d.th,{children:"Node"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Architecture"}),(0,s.jsx)(d.td,{children:"x86_64"}),(0,s.jsx)(d.td,{children:"x86_64"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"CPU op-mode (s)"}),(0,s.jsx)(d.td,{children:"32-bit, 64-bit"}),(0,s.jsx)(d.td,{children:"32-bit, 64-bit"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Byte Order"}),(0,s.jsx)(d.td,{children:"Little Endian"}),(0,s.jsx)(d.td,{children:"Little Endian"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"CPU (s)"}),(0,s.jsx)(d.td,{children:"4"}),(0,s.jsx)(d.td,{children:"4"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"On-line CPU(s) list"}),(0,s.jsx)(d.td,{children:"0-3"}),(0,s.jsx)(d.td,{children:"0-3"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Thread(s) per core"}),(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Core(s) per socket"}),(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Socket(s)"}),(0,s.jsx)(d.td,{children:"4"}),(0,s.jsx)(d.td,{children:"4"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"NUMA node(s)"}),(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Vendor ID"}),(0,s.jsx)(d.td,{children:"GenuineIntel"}),(0,s.jsx)(d.td,{children:"GenuineIntel"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"CPU family"}),(0,s.jsx)(d.td,{children:"6"}),(0,s.jsx)(d.td,{children:"6"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Model"}),(0,s.jsx)(d.td,{children:"158"}),(0,s.jsx)(d.td,{children:"158"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Model name"}),(0,s.jsx)(d.td,{children:"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz"}),(0,s.jsx)(d.td,{children:"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Stepping"}),(0,s.jsx)(d.td,{children:"10"}),(0,s.jsx)(d.td,{children:"10"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"CPU MHz"}),(0,s.jsx)(d.td,{children:"2592.000"}),(0,s.jsx)(d.td,{children:"2592.000"})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"\u5185\u5b58",children:"\u5185\u5b58"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{children:"Master"}),(0,s.jsx)(d.th,{children:"Node"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Total memory"}),(0,s.jsx)(d.td,{children:"7829472 K"}),(0,s.jsx)(d.td,{children:"7829472 K"})]})})]}),"\n",(0,s.jsx)(d.h4,{id:"\u78c1\u76d8",children:"\u78c1\u76d8"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{children:"Master"}),(0,s.jsx)(d.th,{children:"Node"})]})}),(0,s.jsx)(d.tbody,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"Total Size"}),(0,s.jsx)(d.td,{children:"20GiB"}),(0,s.jsx)(d.td,{children:"20GiB"})]})})]}),"\n",(0,s.jsx)(d.h2,{id:"\u6d4b\u8bd5\u65b9\u6cd5",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsx)(d.li,{children:"\u542f\u52a8 pool-coordinator\uff0c\u89c2\u5bdf\u521d\u59cb\u65f6\u7684\u8d44\u6e90\u5360\u7528\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5411 pool-coordinator \u4e2d\u5199\u5165 1000 \u4e2a Pod \u548c 500 \u4e2a Node\u3002\u5176\u4e2d\uff0c\u5355\u4e2a Pod\u3001Node \u8d44\u6e90\u5927\u5c0f\u5747\u7ea6\u4e3a 8kb\uff0c\u89c2\u5bdf\u5199\u5165\u540e\u7684\u8d44\u6e90\u5360\u7528\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5220\u9664 pool-coordinator \u4e2d\u7684\u6240\u6709 Pod \u548c Node \u8d44\u6e90\uff0c\u89c2\u5bdf\u8d44\u6e90\u5360\u7528\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5411 pool-coordinator \u4e2d\u518d\u6b21\u5199\u5165 1000 \u4e2a Pod \u548c 500 \u4e2a Node\uff0c\u5e76\u6301\u7eed\u968f\u673a\u66f4\u65b0 Pod\u3001Node \u4fe1\u606f\uff0c\u89c2\u5bdf\u8d44\u6e90\u5360\u7528\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u8bf7\u6c42 pool-coordinator \u9009\u4e3b\uff0c\u89c2\u5bdf\u662f\u5426\u6210\u529f\u3002"}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u6d4b\u8bd5\u7ed3\u679c",children:"\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,s.jsx)(d.h3,{id:"\u7b2c\u4e00\u9636\u6bb5",children:"\u7b2c\u4e00\u9636\u6bb5"}),"\n",(0,s.jsx)(d.p,{children:"\u542f\u52a8 pool-coordinator\uff0c\u89c2\u5bdf CPU \u548c\u5185\u5b58\u7684\u5360\u7528\u60c5\u51b5\uff08pause \u5bb9\u5668\u548c kubectl \u5bb9\u5668\u5360\u7528\u8f83\u5c11\uff0c\u6682\u4e0d\u7edf\u8ba1\uff0c\u4e0b\u540c\uff09\uff1a"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"CPU \u5360\u7528\u91cf\u7ea6\u4e3a 70m ~ 90m\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5185\u5b58\u5360\u7528\u91cf\u7ea6\u4e3a 370MB\u3002\u5176\u4e2d\uff0capiserver \u7ea6\u5360\u7528 205MB\uff1betcd \u7ea6\u5360\u7528 165MB\u3002"}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.img,{src:n(91289).Z+"",width:"3632",height:"1518"}),"\n",(0,s.jsx)(d.img,{src:n(20268).Z+"",width:"3630",height:"1598"}),"\n",(0,s.jsx)(d.img,{src:n(72997).Z+"",width:"3634",height:"1486"}),"\n",(0,s.jsx)(d.img,{src:n(19697).Z+"",width:"3632",height:"1596"})]}),"\n",(0,s.jsx)(d.h3,{id:"\u7b2c\u4e8c\u9636\u6bb5",children:"\u7b2c\u4e8c\u9636\u6bb5"}),"\n",(0,s.jsx)(d.p,{children:"\u5411 pool-coordinator \u4e2d\u5199\u5165 1000 \u4e2a Pod \u548c 500 \u4e2a Node \u8d44\u6e90\uff0c\u89c2\u5bdf CPU \u548c\u5185\u5b58\u7684\u5360\u7528\u60c5\u51b5\uff1a"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"CPU \u5cf0\u503c\u4f7f\u7528\u91cf\u7ea6\u4e3a 310m\uff0c\u6574\u4f53\u6da8\u5e45\u4e0d\u660e\u663e\u3002\u5176\u4e2d\uff0capiserver CPU \u4f7f\u7528\u91cf\u7565\u6709\u4e0a\u6da8\uff1betcd \u53d8\u5316\u4e0d\u660e\u663e\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5185\u5b58\u5360\u7528\u91cf\u7ea6\u4e3a 450MB\u3002\u5176\u4e2d\uff0capiserver \u7ea6\u5360\u7528 240MB\uff1betcd \u7ea6\u5360\u7528 210MB\u3002"}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.img,{src:n(50033).Z+"",width:"3628",height:"1478"}),"\n",(0,s.jsx)(d.img,{src:n(11726).Z+"",width:"3638",height:"1596"}),"\n",(0,s.jsx)(d.img,{src:n(78708).Z+"",width:"3630",height:"1472"}),"\n",(0,s.jsx)(d.img,{src:n(81688).Z+"",width:"3634",height:"1598"})]}),"\n",(0,s.jsx)(d.h3,{id:"\u7b2c\u4e09\u9636\u6bb5",children:"\u7b2c\u4e09\u9636\u6bb5"}),"\n",(0,s.jsx)(d.p,{children:"\u5220\u9664 pool-coordinator \u4e2d\u7684\u6240\u6709 Pod \u548c Node \u8d44\u6e90\uff0c\u89c2\u5bdf\u8d44\u6e90\u5360\u7528\u60c5\u51b5\u3002"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"CPU \u5cf0\u503c\u4f7f\u7528\u91cf\u7ea6\u4e3a 260m\uff0c\u53d8\u5316\u4e0d\u660e\u663e\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5185\u5b58\u5360\u7528\u91cf\u6700\u9ad8\u7ea6\u5230 590MB\u3002\u5176\u4e2d\uff0capiserver \u7ea6\u5360\u7528 350MB\uff1betcd \u7ea6\u5360\u7528 240MB\u3002"}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.img,{src:n(72547).Z+"",width:"3626",height:"1490"}),"\n",(0,s.jsx)(d.img,{src:n(47060).Z+"",width:"3630",height:"1590"}),"\n",(0,s.jsx)(d.img,{src:n(68317).Z+"",width:"3632",height:"1492"}),"\n",(0,s.jsx)(d.img,{src:n(53061).Z+"",width:"3628",height:"1592"})]}),"\n",(0,s.jsx)(d.h3,{id:"\u7b2c\u56db\u9636\u6bb5",children:"\u7b2c\u56db\u9636\u6bb5"}),"\n",(0,s.jsx)(d.p,{children:"\u5411 pool-coordinator \u4e2d\u518d\u6b21\u5199\u5165 1000 \u4e2a Pod \u548c 500 \u4e2a Node\uff0c\u5e76\u6301\u7eed\u968f\u673a\u66f4\u65b0 Pod\u3001Node \u4fe1\u606f\uff0c\u89c2\u5bdf\u8d44\u6e90\u5360\u7528\u60c5\u51b5\u3002"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"CPU \u4f7f\u7528\u91cf\u6700\u9ad8\u4f4d\u7ea6\u4e3a 640m\u3002"}),"\n",(0,s.jsx)(d.li,{children:"\u5185\u5b58\u4f7f\u7528\u91cf\u6301\u7eed\u4e0a\u6da8\uff0c\u76f4\u5230 etcd container \u53d1\u751f OOM\u3002"}),"\n"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.img,{src:n(99152).Z+"",width:"3626",height:"1494"}),"\n",(0,s.jsx)(d.img,{src:n(31930).Z+"",width:"3630",height:"1592"}),"\n",(0,s.jsx)(d.img,{src:n(41090).Z+"",width:"3626",height:"1496"}),"\n",(0,s.jsx)(d.img,{src:n(90935).Z+"",width:"3638",height:"1600"})]}),"\n",(0,s.jsx)(d.h3,{id:"\u7b2c\u4e94\u9636\u6bb5",children:"\u7b2c\u4e94\u9636\u6bb5"}),"\n",(0,s.jsx)(d.p,{children:"\u542f\u52a8\u5916\u90e8\u7a0b\u5e8f\uff0c\u4ee5 500 \u4e2a client \u8bf7\u6c42 pool-coordinator \u9009\u4e3b\u3002\u5982\u5355\u4e2a client \u9009\u4e3b\u6210\u529f\uff0c\u5219\u5728 sleep 1s \u540e\u9000\u51fa\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u7531\u4ee3\u7801\u8f93\u51fa\u53ef\u77e5\uff0c\u4e0d\u540c\u7684 client \u8f6e\u6d41\u9009\u4e3b\u6210\u529f\uff0c\u7ed3\u679c\u6b63\u5e38\u3002"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"I1212 14:58:43.652733   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:43.652766   41875 main.go:656] new leader elected: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:43.652779   41875 main.go:562] Controller loop...\nI1212 14:58:44.653060   41875 main.go:564] Controller quit.\nI1212 14:58:44.662196   41875 main.go:648] leader lost: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:44.679782   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:44.679826   41875 main.go:656] new leader elected: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:44.679915   41875 main.go:562] Controller loop...\nI1212 14:58:45.680211   41875 main.go:564] Controller quit.\nI1212 14:58:45.686105   41875 main.go:648] leader lost: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:45.697108   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:45.697131   41875 main.go:656] new leader elected: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:45.697210   41875 main.go:562] Controller loop...\nI1212 14:58:46.698199   41875 main.go:564] Controller quit.\nI1212 14:58:46.702313   41875 main.go:648] leader lost: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:46.733931   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:46.733953   41875 main.go:656] new leader elected: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\nI1212 14:58:46.734007   41875 main.go:562] Controller loop...\nI1212 14:58:47.739147   41875 main.go:564] Controller quit.\nI1212 14:58:47.743684   41875 main.go:648] leader lost: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\n...\n\n"})}),"\n",(0,s.jsx)(d.p,{children:"\u8bf7\u6c42 pool-coordinator \u67e5\u770b lease \u4fe1\u606f\uff0c\u53ef\u77e5\uff1alease \u521b\u5efa\u6210\u529f\uff0c\u5e76\u4e14 lease \u7684 holder \u968f\u7740 client \u7684\u9000\u51fa\u6301\u7eed\u4e0d\u65ad\u53d8\u5316\u3002"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-shell",children:"$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   ff43ffde-3551-47d6-b2af-1fa3ef115b86   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   76870bb5-eaa0-44b0-a8a8-203c36a2d373   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   b127e7bc-beeb-474a-b0e9-5023b1563d94   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   7a4dd5d7-5e25-4f69-a882-d32e17bb703a   5m\n"})}),"\n",(0,s.jsx)(d.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,s.jsx)(d.p,{children:"\u5f53 NodePool \u5185\u7684\u8d44\u6e90\u5728\u4e00\u5b9a\u6570\u91cf\u5185\uff08Pod\uff1a1000\uff0c\u5355\u4e2a 8KB\uff1bNode 500\uff0c\u5355\u4e2a 8KB\uff09\u65f6\uff0cpool-coordinator \u7684\u6700\u5c0f\u8d44\u6e90\u5360\u7528\u91cf\u7ea6\u4e3a CPU 310m\u3001\u5185\u5b58 450MB\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u7531\u4e8e etcd \u81ea\u8eab\u7684\u5b58\u50a8\u673a\u5236\uff0c\u5220\u9664\u8d44\u6e90\u5e76\u4e0d\u4f1a\u8ba9 pool-coordinator \u7684\u5185\u5b58\u7528\u91cf\u4e0b\u964d\uff0c\u53cd\u800c\u77ed\u671f\u4f1a\u5bfc\u81f4\u5185\u5b58\u7528\u91cf\u4e0a\u6da8\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u77ed\u65f6\u95f4\u5185\u9891\u7e41\u66f4\u65b0\u8d44\u6e90\uff0c\u5c06\u5bfc\u81f4 etcd \u4e2d\u7684 revision \u53d8\u591a\uff0c\u5f15\u53d1 etcd \u6570\u636e\u91cf\u5feb\u901f\u4e0a\u6da8\u3002\u5982 etcd container \u914d\u7f6e\u4e86 resource limit\uff0c\u5219\u4f1a\u4f7f\u5f97 container \u89e6\u53d1 OOM\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u6839\u636e\u6d4b\u8bd5\u7ed3\u679c\u53ef\u77e5\uff0cCPU \u5e76\u975e\u8d44\u6e90\u74f6\u9888\uff1b\u800c\u5185\u5b58\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\u4f1a\u66b4\u6da8\uff0c\u5f71\u54cd\u8fb9\u7f18\u8d44\u6e90\u4f7f\u7528\u6548\u7387\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u6545\u5f53\u5355\u4e2a\u8fb9\u7f18\u8282\u70b9\u6c60\u7684 Node \u6570\u91cf\u5c0f\u4e8e 500\u3001Pod \u6570\u91cf\u5c0f\u4e8e 1000 \u65f6\uff0c\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u8d44\u6e90\u9650\u5236\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-yaml",children:"apiserverResources:\n  requests:\n    cpu: 250m\n---\netcdResources:\n  limits:\n    cpu: 200m\n    memory: 512Mi\n  requests:\n    cpu: 100m\n    memory: 256Mi\n"})})]})}function h(e={}){const{wrapper:d}={...(0,t.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},91289:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step1-cpu-sum-497facefc565373ba9ac9ec29aab8173.jpg"},20268:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step1-cpu-6f34b2155be7b18568b3344eddf4f05a.jpg"},72997:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step1-mem-sum-5a1b4943fdda0bab87062ceadec13fd9.jpg"},19697:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step1-mem-a8392c3b9c63478792d43c481b0907c0.jpg"},50033:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step2-cpu-sum-fba471d1e780d1cd3e97f36476581fe5.jpg"},11726:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step2-cpu-e44afe4b35e3ab5226445f0175598386.jpg"},78708:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step2-mem-sum-336e12a9d81c997ecb53308fa9bb037d.jpg"},81688:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step2-mem-47fbe35e30c4b84170fe82c88b8161a4.jpg"},72547:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step3-cpu-sum-3676a2641362ff4ac3d917f1d1c89f83.jpg"},47060:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step3-cpu-6721b33c3022dc9962d851a1f0a642c1.jpg"},68317:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step3-mem-sum-d724ad07eed6dd82b4ac442544dea8b2.jpg"},53061:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step3-mem-d6c795f26455abfc2056d2e18579c4a2.jpg"},99152:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step4-cpu-sum-30a0191aa907fe4fe2c3b7b7274d1262.jpg"},31930:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step4-cpu-1920f06aa3db6d096ddb8f5866a29741.jpg"},41090:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step4-mem-sum-dd1a710ded10a10e1ba4c2dcc04612a9.jpg"},90935:(e,d,n)=>{n.d(d,{Z:()=>s});const s=n.p+"assets/images/pool-coordinator-step4-mem-8cd7c6b3ece1e42a3803d0b2a0d9326b.jpg"},11151:(e,d,n)=>{n.d(d,{Z:()=>o,a:()=>i});var s=n(67294);const t={},r=s.createContext(t);function i(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);