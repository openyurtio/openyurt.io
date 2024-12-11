"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[56310],{21528:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"test-report/pool-coordinator-test","title":"Pool Coordinator Performance Test","description":"Background","source":"@site/versioned_docs/version-v1.2/test-report/pool-coordinator-test.md","sourceDirName":"test-report","slug":"/test-report/pool-coordinator-test","permalink":"/docs/v1.2/test-report/pool-coordinator-test","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/test-report/pool-coordinator-test.md","tags":[],"version":"v1.2","lastUpdatedBy":"Cookie","lastUpdatedAt":1733885620000,"frontMatter":{"title":"Pool Coordinator Performance Test"},"sidebar":"docs","previous":{"title":"YurtHub Performance Test","permalink":"/docs/v1.2/test-report/yurthub-performance-test"},"next":{"title":"Optimize the pods recovery efficiency when edge nodes restart","permalink":"/docs/v1.2/test-report/pod-recover-efficiency-test"}}');var r=s(74848),d=s(28453);const o={title:"Pool Coordinator Performance Test"},i=void 0,l={},c=[{value:"Background",id:"background",level:2},{value:"Test Environment",id:"test-environment",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Node Configuration",id:"node-configuration",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"CPU",id:"cpu",level:4},{value:"Memory",id:"memory",level:4},{value:"Disk",id:"disk",level:4},{value:"Test Method",id:"test-method",level:2},{value:"Test Result",id:"test-result",level:2},{value:"Phase one",id:"phase-one",level:3},{value:"Phase two",id:"phase-two",level:3},{value:"Phase three",id:"phase-three",level:3},{value:"Phase four",id:"phase-four",level:3},{value:"Phase five",id:"phase-five",level:3},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(n.p,{children:"Pool Coordinator is an important component in edge node pool. OpenYurt uses pool coordinator to select a yurthub master and backup the resources in edge node pool."}),"\n",(0,r.jsx)(n.p,{children:"In this article, we test the performance of pool-coordinator pod and give a suggestion resource configuration."}),"\n",(0,r.jsx)(n.h2,{id:"test-environment",children:"Test Environment"}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes-version",children:"Kubernetes Version"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'Major:"1", Minor:"22", GitVersion:"v1.22.0", GitCommit:"c2b5237ccd9c0f1d600d3072634ca66cefdf272f", GitTreeState:"clean", BuildDate:"2021-08-04T17:57:25Z", GoVersion:"go1.16.6", Compiler:"gc", Platform:"linux/amd64"'})}),"\n",(0,r.jsx)(n.h3,{id:"node-configuration",children:"Node Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Master and work node are virtual machines run on VMWare Fusion."}),"\n",(0,r.jsx)(n.h4,{id:"operating-system",children:"Operating System"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Master"}),(0,r.jsx)(n.th,{children:"Node"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LSB Version"}),(0,r.jsxs)(n.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]}),(0,r.jsxs)(n.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Distributor ID"}),(0,r.jsx)(n.td,{children:"CentOS"}),(0,r.jsx)(n.td,{children:"CentOS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"CentOS Linux release 8.4.2105"}),(0,r.jsx)(n.td,{children:"CentOS Linux release 8.4.2105"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Release"}),(0,r.jsx)(n.td,{children:"8.4.2105"}),(0,r.jsx)(n.td,{children:"8.4.2105"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"cpu",children:"CPU"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Master"}),(0,r.jsx)(n.th,{children:"Node"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Architecture"}),(0,r.jsx)(n.td,{children:"x86_64"}),(0,r.jsx)(n.td,{children:"x86_64"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU op-mode (s)"}),(0,r.jsx)(n.td,{children:"32-bit, 64-bit"}),(0,r.jsx)(n.td,{children:"32-bit, 64-bit"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Byte Order"}),(0,r.jsx)(n.td,{children:"Little Endian"}),(0,r.jsx)(n.td,{children:"Little Endian"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU (s)"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On-line CPU(s) list"}),(0,r.jsx)(n.td,{children:"0-3"}),(0,r.jsx)(n.td,{children:"0-3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread(s) per core"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Core(s) per socket"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Socket(s)"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"NUMA node(s)"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vendor ID"}),(0,r.jsx)(n.td,{children:"GenuineIntel"}),(0,r.jsx)(n.td,{children:"GenuineIntel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU family"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Model"}),(0,r.jsx)(n.td,{children:"158"}),(0,r.jsx)(n.td,{children:"158"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Model name"}),(0,r.jsx)(n.td,{children:"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz"}),(0,r.jsx)(n.td,{children:"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stepping"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU MHz"}),(0,r.jsx)(n.td,{children:"2592.000"}),(0,r.jsx)(n.td,{children:"2592.000"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"memory",children:"Memory"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Master"}),(0,r.jsx)(n.th,{children:"Node"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Total memory"}),(0,r.jsx)(n.td,{children:"7829472 K"}),(0,r.jsx)(n.td,{children:"7829472 K"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"disk",children:"Disk"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Master"}),(0,r.jsx)(n.th,{children:"Node"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Total Size"}),(0,r.jsx)(n.td,{children:"20GiB"}),(0,r.jsx)(n.td,{children:"20GiB"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"test-method",children:"Test Method"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start the pool-coordinator pod and record the beginning resource used."}),"\n",(0,r.jsx)(n.li,{children:"Write a mount of resources and record the resource used of pool-coordinator. In this test, we write 1000 pods and 500 nodes into pool-coordinator. The size of each pod and node both are 8KB."}),"\n",(0,r.jsx)(n.li,{children:"Delete all resources in pool-coordinator. To see whether resource used will go down to the beginning level."}),"\n",(0,r.jsx)(n.li,{children:"Rewrite a mount of resources to pool-coordinator and patch them frequently and randomly. Check the resource used of current situation."}),"\n",(0,r.jsx)(n.li,{children:"Check the result of leader election."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"test-result",children:"Test Result"}),"\n",(0,r.jsx)(n.h3,{id:"phase-one",children:"Phase one"}),"\n",(0,r.jsx)(n.p,{children:"Start pool-coordinator pod and record the beginning resource used."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CPU used: 70m ~ 90m"}),"\n",(0,r.jsxs)(n.li,{children:["mem used: 370MB.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"apiserver used 205MB."}),"\n",(0,r.jsx)(n.li,{children:"etcd used 165MB."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:s(75425).A+"",width:"3632",height:"1518"}),"\n",(0,r.jsx)(n.img,{src:s(85919).A+"",width:"3630",height:"1598"}),"\n",(0,r.jsx)(n.img,{src:s(20620).A+"",width:"3634",height:"1486"}),"\n",(0,r.jsx)(n.img,{src:s(79882).A+"",width:"3632",height:"1596"})]}),"\n",(0,r.jsx)(n.h3,{id:"phase-two",children:"Phase two"}),"\n",(0,r.jsx)(n.p,{children:"Write a mount of resources and record the resource used of pool-coordinator. In this test, we write 1000 pods and 500 nodes into pool-coordinator. The size of each pod and node both are 8KB."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"top CPU used: 310m"}),"\n",(0,r.jsxs)(n.li,{children:["top mem used: 450MB.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"apiserver used 240MB."}),"\n",(0,r.jsx)(n.li,{children:"etcd used 210MB."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:s(21526).A+"",width:"3628",height:"1478"}),"\n",(0,r.jsx)(n.img,{src:s(63824).A+"",width:"3638",height:"1596"}),"\n",(0,r.jsx)(n.img,{src:s(5019).A+"",width:"3630",height:"1472"}),"\n",(0,r.jsx)(n.img,{src:s(52229).A+"",width:"3634",height:"1598"})]}),"\n",(0,r.jsx)(n.h3,{id:"phase-three",children:"Phase three"}),"\n",(0,r.jsx)(n.p,{children:"Delete all resources in pool-coordinator. To see whether resource used will go down to the beginning level."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"top CPU used: 260m"}),"\n",(0,r.jsxs)(n.li,{children:["top mem used: 590MB.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"apiserver used 350MB."}),"\n",(0,r.jsx)(n.li,{children:"etcd used 240MB."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:s(91719).A+"",width:"3626",height:"1490"}),"\n",(0,r.jsx)(n.img,{src:s(33225).A+"",width:"3630",height:"1590"}),"\n",(0,r.jsx)(n.img,{src:s(32206).A+"",width:"3632",height:"1492"}),"\n",(0,r.jsx)(n.img,{src:s(75944).A+"",width:"3628",height:"1592"})]}),"\n",(0,r.jsx)(n.h3,{id:"phase-four",children:"Phase four"}),"\n",(0,r.jsx)(n.p,{children:"Rewrite a mount of resources to pool-coordinator and patch them frequently and randomly. Check the resource used of current situation."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"top CPU used: 640m."}),"\n",(0,r.jsx)(n.li,{children:"mem used rise continually and result in etcd container OOM."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:s(11516).A+"",width:"3626",height:"1494"}),"\n",(0,r.jsx)(n.img,{src:s(85562).A+"",width:"3630",height:"1592"}),"\n",(0,r.jsx)(n.img,{src:s(37325).A+"",width:"3626",height:"1496"}),"\n",(0,r.jsx)(n.img,{src:s(54915).A+"",width:"3638",height:"1600"})]}),"\n",(0,r.jsx)(n.h3,{id:"phase-five",children:"Phase five"}),"\n",(0,r.jsx)(n.p,{children:"Run other program to do leader election and check the result."}),"\n",(0,r.jsx)(n.p,{children:"Go code run 500 goroutines and every goroutine do the same things to acquire leader. After acquiring leader successfully, go client sleep 1 second and quit."}),"\n",(0,r.jsx)(n.p,{children:"We can see that program acquired leader successfully. After one client quited, the other go client can aquire leader successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"I1212 14:58:43.652733   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:43.652766   41875 main.go:656] new leader elected: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:43.652779   41875 main.go:562] Controller loop...\nI1212 14:58:44.653060   41875 main.go:564] Controller quit.\nI1212 14:58:44.662196   41875 main.go:648] leader lost: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:44.679782   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:44.679826   41875 main.go:656] new leader elected: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:44.679915   41875 main.go:562] Controller loop...\nI1212 14:58:45.680211   41875 main.go:564] Controller quit.\nI1212 14:58:45.686105   41875 main.go:648] leader lost: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:45.697108   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:45.697131   41875 main.go:656] new leader elected: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:45.697210   41875 main.go:562] Controller loop...\nI1212 14:58:46.698199   41875 main.go:564] Controller quit.\nI1212 14:58:46.702313   41875 main.go:648] leader lost: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:46.733931   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:46.733953   41875 main.go:656] new leader elected: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\nI1212 14:58:46.734007   41875 main.go:562] Controller loop...\nI1212 14:58:47.739147   41875 main.go:564] Controller quit.\nI1212 14:58:47.743684   41875 main.go:648] leader lost: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\n...\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check the lease resource in pool-coordinator. We can see the lease resource and the holder of lease changes periodically."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   ff43ffde-3551-47d6-b2af-1fa3ef115b86   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   76870bb5-eaa0-44b0-a8a8-203c36a2d373   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   b127e7bc-beeb-474a-b0e9-5023b1563d94   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   7a4dd5d7-5e25-4f69-a882-d32e17bb703a   5m\n"})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"After testing, we got the minimum resource limit that pool-coordinator needed: CPU 310m\u3001memory 450MB."}),"\n",(0,r.jsx)(n.p,{children:"And we see that deleting resource in etcd will not let the resource used of pool-coordinator goes down."}),"\n",(0,r.jsx)(n.p,{children:"It is caused by the storage mechanism of etcd, which will add tombstone revision instead of deleting resource immediately."}),"\n",(0,r.jsx)(n.p,{children:"When patching resource frequently, the memory used of etcd go up. If we set the memory limit of etcd, it will cause etcd container OOM."}),"\n",(0,r.jsx)(n.p,{children:"Finally, we got that CPU is not the limit resource of pool-coordinator. And the memory used of etcd container should be limited to an acceptable level to protect other pod in edge node pool"}),"\n",(0,r.jsx)(n.p,{children:"So, in an edge node pool, when node number less than 500 and pod number less then 1000, we recommend the resource configuration below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiserverResources:\n  requests:\n    cpu: 250m\n---\netcdResources:\n  limits:\n    cpu: 200m\n    memory: 512Mi\n  requests:\n    cpu: 100m\n    memory: 256Mi\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},75425:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-cpu-sum-497facefc565373ba9ac9ec29aab8173.jpg"},85919:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-cpu-6f34b2155be7b18568b3344eddf4f05a.jpg"},20620:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-mem-sum-5a1b4943fdda0bab87062ceadec13fd9.jpg"},79882:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-mem-a8392c3b9c63478792d43c481b0907c0.jpg"},21526:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-cpu-sum-fba471d1e780d1cd3e97f36476581fe5.jpg"},63824:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-cpu-e44afe4b35e3ab5226445f0175598386.jpg"},5019:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-mem-sum-336e12a9d81c997ecb53308fa9bb037d.jpg"},52229:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-mem-47fbe35e30c4b84170fe82c88b8161a4.jpg"},91719:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-cpu-sum-3676a2641362ff4ac3d917f1d1c89f83.jpg"},33225:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-cpu-6721b33c3022dc9962d851a1f0a642c1.jpg"},32206:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-mem-sum-d724ad07eed6dd82b4ac442544dea8b2.jpg"},75944:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-mem-d6c795f26455abfc2056d2e18579c4a2.jpg"},11516:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-cpu-sum-30a0191aa907fe4fe2c3b7b7274d1262.jpg"},85562:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-cpu-1920f06aa3db6d096ddb8f5866a29741.jpg"},37325:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-mem-sum-dd1a710ded10a10e1ba4c2dcc04612a9.jpg"},54915:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-mem-8cd7c6b3ece1e42a3803d0b2a0d9326b.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(96540);const r={},d=t.createContext(r);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);