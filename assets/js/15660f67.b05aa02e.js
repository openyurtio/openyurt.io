"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[80700],{68662:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(85893),d=s(11151);const r={title:"Pool Coordinator Performance Test"},o=void 0,i={id:"test-report/pool-coordinator-test",title:"Pool Coordinator Performance Test",description:"Background",source:"@site/versioned_docs/version-v1.3/test-report/pool-coordinator-test.md",sourceDirName:"test-report",slug:"/test-report/pool-coordinator-test",permalink:"/docs/v1.3/test-report/pool-coordinator-test",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/test-report/pool-coordinator-test.md",tags:[],version:"v1.3",lastUpdatedBy:"wesleysu",lastUpdatedAt:1710812587,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Pool Coordinator Performance Test"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Test Environment",id:"test-environment",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Node Configuration",id:"node-configuration",level:3},{value:"Operating System",id:"operating-system",level:4},{value:"CPU",id:"cpu",level:4},{value:"Memory",id:"memory",level:4},{value:"Disk",id:"disk",level:4},{value:"Test Method",id:"test-method",level:2},{value:"Test Result",id:"test-result",level:2},{value:"Phase one",id:"phase-one",level:3},{value:"Phase two",id:"phase-two",level:3},{value:"Phase three",id:"phase-three",level:3},{value:"Phase four",id:"phase-four",level:3},{value:"Phase five",id:"phase-five",level:3},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"Pool Coordinator is an important component in edge node pool. OpenYurt uses pool coordinator to select a yurthub master and backup the resources in edge node pool."}),"\n",(0,t.jsx)(n.p,{children:"In this article, we test the performance of pool-coordinator pod and give a suggestion resource configuration."}),"\n",(0,t.jsx)(n.h2,{id:"test-environment",children:"Test Environment"}),"\n",(0,t.jsx)(n.h3,{id:"kubernetes-version",children:"Kubernetes Version"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'Major:"1", Minor:"22", GitVersion:"v1.22.0", GitCommit:"c2b5237ccd9c0f1d600d3072634ca66cefdf272f", GitTreeState:"clean", BuildDate:"2021-08-04T17:57:25Z", GoVersion:"go1.16.6", Compiler:"gc", Platform:"linux/amd64"'})}),"\n",(0,t.jsx)(n.h3,{id:"node-configuration",children:"Node Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Master and work node are virtual machines run on VMWare Fusion."}),"\n",(0,t.jsx)(n.h4,{id:"operating-system",children:"Operating System"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Master"}),(0,t.jsx)(n.th,{children:"Node"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LSB Version"}),(0,t.jsxs)(n.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]}),(0,t.jsxs)(n.td,{children:[":core-4",".1-amd64",":core-4",".1-noarch"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Distributor ID"}),(0,t.jsx)(n.td,{children:"CentOS"}),(0,t.jsx)(n.td,{children:"CentOS"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"CentOS Linux release 8.4.2105"}),(0,t.jsx)(n.td,{children:"CentOS Linux release 8.4.2105"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Release"}),(0,t.jsx)(n.td,{children:"8.4.2105"}),(0,t.jsx)(n.td,{children:"8.4.2105"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"cpu",children:"CPU"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Master"}),(0,t.jsx)(n.th,{children:"Node"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Architecture"}),(0,t.jsx)(n.td,{children:"x86_64"}),(0,t.jsx)(n.td,{children:"x86_64"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU op-mode (s)"}),(0,t.jsx)(n.td,{children:"32-bit, 64-bit"}),(0,t.jsx)(n.td,{children:"32-bit, 64-bit"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Byte Order"}),(0,t.jsx)(n.td,{children:"Little Endian"}),(0,t.jsx)(n.td,{children:"Little Endian"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU (s)"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On-line CPU(s) list"}),(0,t.jsx)(n.td,{children:"0-3"}),(0,t.jsx)(n.td,{children:"0-3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread(s) per core"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Core(s) per socket"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Socket(s)"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"4"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NUMA node(s)"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Vendor ID"}),(0,t.jsx)(n.td,{children:"GenuineIntel"}),(0,t.jsx)(n.td,{children:"GenuineIntel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU family"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Model"}),(0,t.jsx)(n.td,{children:"158"}),(0,t.jsx)(n.td,{children:"158"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Model name"}),(0,t.jsx)(n.td,{children:"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz"}),(0,t.jsx)(n.td,{children:"Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Stepping"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU MHz"}),(0,t.jsx)(n.td,{children:"2592.000"}),(0,t.jsx)(n.td,{children:"2592.000"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"memory",children:"Memory"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Master"}),(0,t.jsx)(n.th,{children:"Node"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Total memory"}),(0,t.jsx)(n.td,{children:"7829472 K"}),(0,t.jsx)(n.td,{children:"7829472 K"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"disk",children:"Disk"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Master"}),(0,t.jsx)(n.th,{children:"Node"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Total Size"}),(0,t.jsx)(n.td,{children:"20GiB"}),(0,t.jsx)(n.td,{children:"20GiB"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"test-method",children:"Test Method"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start the pool-coordinator pod and record the beginning resource used."}),"\n",(0,t.jsx)(n.li,{children:"Write a mount of resources and record the resource used of pool-coordinator. In this test, we write 1000 pods and 500 nodes into pool-coordinator. The size of each pod and node both are 8KB."}),"\n",(0,t.jsx)(n.li,{children:"Delete all resources in pool-coordinator. To see whether resource used will go down to the beginning level."}),"\n",(0,t.jsx)(n.li,{children:"Rewrite a mount of resources to pool-coordinator and patch them frequently and randomly. Check the resource used of current situation."}),"\n",(0,t.jsx)(n.li,{children:"Check the result of leader election."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"test-result",children:"Test Result"}),"\n",(0,t.jsx)(n.h3,{id:"phase-one",children:"Phase one"}),"\n",(0,t.jsx)(n.p,{children:"Start pool-coordinator pod and record the beginning resource used."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CPU used: 70m ~ 90m"}),"\n",(0,t.jsxs)(n.li,{children:["mem used: 370MB.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"apiserver used 205MB."}),"\n",(0,t.jsx)(n.li,{children:"etcd used 165MB."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(91289).Z+"",width:"3632",height:"1518"}),"\n",(0,t.jsx)(n.img,{src:s(20268).Z+"",width:"3630",height:"1598"}),"\n",(0,t.jsx)(n.img,{src:s(72997).Z+"",width:"3634",height:"1486"}),"\n",(0,t.jsx)(n.img,{src:s(19697).Z+"",width:"3632",height:"1596"})]}),"\n",(0,t.jsx)(n.h3,{id:"phase-two",children:"Phase two"}),"\n",(0,t.jsx)(n.p,{children:"Write a mount of resources and record the resource used of pool-coordinator. In this test, we write 1000 pods and 500 nodes into pool-coordinator. The size of each pod and node both are 8KB."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"top CPU used: 310m"}),"\n",(0,t.jsxs)(n.li,{children:["top mem used: 450MB.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"apiserver used 240MB."}),"\n",(0,t.jsx)(n.li,{children:"etcd used 210MB."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(50033).Z+"",width:"3628",height:"1478"}),"\n",(0,t.jsx)(n.img,{src:s(11726).Z+"",width:"3638",height:"1596"}),"\n",(0,t.jsx)(n.img,{src:s(78708).Z+"",width:"3630",height:"1472"}),"\n",(0,t.jsx)(n.img,{src:s(81688).Z+"",width:"3634",height:"1598"})]}),"\n",(0,t.jsx)(n.h3,{id:"phase-three",children:"Phase three"}),"\n",(0,t.jsx)(n.p,{children:"Delete all resources in pool-coordinator. To see whether resource used will go down to the beginning level."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"top CPU used: 260m"}),"\n",(0,t.jsxs)(n.li,{children:["top mem used: 590MB.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"apiserver used 350MB."}),"\n",(0,t.jsx)(n.li,{children:"etcd used 240MB."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(72547).Z+"",width:"3626",height:"1490"}),"\n",(0,t.jsx)(n.img,{src:s(47060).Z+"",width:"3630",height:"1590"}),"\n",(0,t.jsx)(n.img,{src:s(68317).Z+"",width:"3632",height:"1492"}),"\n",(0,t.jsx)(n.img,{src:s(53061).Z+"",width:"3628",height:"1592"})]}),"\n",(0,t.jsx)(n.h3,{id:"phase-four",children:"Phase four"}),"\n",(0,t.jsx)(n.p,{children:"Rewrite a mount of resources to pool-coordinator and patch them frequently and randomly. Check the resource used of current situation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"top CPU used: 640m."}),"\n",(0,t.jsx)(n.li,{children:"mem used rise continually and result in etcd container OOM."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(99152).Z+"",width:"3626",height:"1494"}),"\n",(0,t.jsx)(n.img,{src:s(31930).Z+"",width:"3630",height:"1592"}),"\n",(0,t.jsx)(n.img,{src:s(41090).Z+"",width:"3626",height:"1496"}),"\n",(0,t.jsx)(n.img,{src:s(90935).Z+"",width:"3638",height:"1600"})]}),"\n",(0,t.jsx)(n.h3,{id:"phase-five",children:"Phase five"}),"\n",(0,t.jsx)(n.p,{children:"Run other program to do leader election and check the result."}),"\n",(0,t.jsx)(n.p,{children:"Go code run 500 goroutines and every goroutine do the same things to acquire leader. After acquiring leader successfully, go client sleep 1 second and quit."}),"\n",(0,t.jsx)(n.p,{children:"We can see that program acquired leader successfully. After one client quited, the other go client can aquire leader successfully."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"I1212 14:58:43.652733   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:43.652766   41875 main.go:656] new leader elected: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:43.652779   41875 main.go:562] Controller loop...\nI1212 14:58:44.653060   41875 main.go:564] Controller quit.\nI1212 14:58:44.662196   41875 main.go:648] leader lost: ff43ffde-3551-47d6-b2af-1fa3ef115b86\nI1212 14:58:44.679782   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:44.679826   41875 main.go:656] new leader elected: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:44.679915   41875 main.go:562] Controller loop...\nI1212 14:58:45.680211   41875 main.go:564] Controller quit.\nI1212 14:58:45.686105   41875 main.go:648] leader lost: 76870bb5-eaa0-44b0-a8a8-203c36a2d373\nI1212 14:58:45.697108   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:45.697131   41875 main.go:656] new leader elected: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:45.697210   41875 main.go:562] Controller loop...\nI1212 14:58:46.698199   41875 main.go:564] Controller quit.\nI1212 14:58:46.702313   41875 main.go:648] leader lost: b127e7bc-beeb-474a-b0e9-5023b1563d94\nI1212 14:58:46.733931   41875 leaderelection.go:258] successfully acquired lease default/test-lock\nI1212 14:58:46.733953   41875 main.go:656] new leader elected: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\nI1212 14:58:46.734007   41875 main.go:562] Controller loop...\nI1212 14:58:47.739147   41875 main.go:564] Controller quit.\nI1212 14:58:47.743684   41875 main.go:648] leader lost: 7a4dd5d7-5e25-4f69-a882-d32e17bb703a\n...\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the lease resource in pool-coordinator. We can see the lease resource and the holder of lease changes periodically."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   ff43ffde-3551-47d6-b2af-1fa3ef115b86   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   76870bb5-eaa0-44b0-a8a8-203c36a2d373   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   b127e7bc-beeb-474a-b0e9-5023b1563d94   5m\n\n$ kubectl get lease\nNAME        HOLDER                                 AGE\ntest-lock   7a4dd5d7-5e25-4f69-a882-d32e17bb703a   5m\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"After testing, we got the minimum resource limit that pool-coordinator needed: CPU 310m\u3001memory 450MB."}),"\n",(0,t.jsx)(n.p,{children:"And we see that deleting resource in etcd will not let the resource used of pool-coordinator goes down."}),"\n",(0,t.jsx)(n.p,{children:"It is caused by the storage mechanism of etcd, which will add tombstone revision instead of deleting resource immediately."}),"\n",(0,t.jsx)(n.p,{children:"When patching resource frequently, the memory used of etcd go up. If we set the memory limit of etcd, it will cause etcd container OOM."}),"\n",(0,t.jsx)(n.p,{children:"Finally, we got that CPU is not the limit resource of pool-coordinator. And the memory used of etcd container should be limited to an acceptable level to protect other pod in edge node pool"}),"\n",(0,t.jsx)(n.p,{children:"So, in an edge node pool, when node number less than 500 and pod number less then 1000, we recommend the resource configuration below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiserverResources:\n  requests:\n    cpu: 250m\n---\netcdResources:\n  limits:\n    cpu: 200m\n    memory: 512Mi\n  requests:\n    cpu: 100m\n    memory: 256Mi\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},91289:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-cpu-sum-497facefc565373ba9ac9ec29aab8173.jpg"},20268:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-cpu-6f34b2155be7b18568b3344eddf4f05a.jpg"},72997:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-mem-sum-5a1b4943fdda0bab87062ceadec13fd9.jpg"},19697:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step1-mem-a8392c3b9c63478792d43c481b0907c0.jpg"},50033:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-cpu-sum-fba471d1e780d1cd3e97f36476581fe5.jpg"},11726:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-cpu-e44afe4b35e3ab5226445f0175598386.jpg"},78708:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-mem-sum-336e12a9d81c997ecb53308fa9bb037d.jpg"},81688:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step2-mem-47fbe35e30c4b84170fe82c88b8161a4.jpg"},72547:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-cpu-sum-3676a2641362ff4ac3d917f1d1c89f83.jpg"},47060:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-cpu-6721b33c3022dc9962d851a1f0a642c1.jpg"},68317:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-mem-sum-d724ad07eed6dd82b4ac442544dea8b2.jpg"},53061:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step3-mem-d6c795f26455abfc2056d2e18579c4a2.jpg"},99152:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-cpu-sum-30a0191aa907fe4fe2c3b7b7274d1262.jpg"},31930:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-cpu-1920f06aa3db6d096ddb8f5866a29741.jpg"},41090:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-mem-sum-dd1a710ded10a10e1ba4c2dcc04612a9.jpg"},90935:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/pool-coordinator-step4-mem-8cd7c6b3ece1e42a3803d0b2a0d9326b.jpg"},11151:(e,n,s)=>{s.d(n,{a:()=>o});var t=s(67294);const d={},r=t.createContext(d);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);