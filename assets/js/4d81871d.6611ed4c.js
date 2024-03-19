"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[43498],{57427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(85893),s=t(11151);const i={title:"How to Build and Test"},r=void 0,l={id:"developer-manuals/how-to-build-and-test",title:"How to Build and Test",description:"In OpenYurt repository, currently(v0.7.0, commit",source:"@site/docs/developer-manuals/how-to-build-and-test.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-build-and-test",permalink:"/docs/next/developer-manuals/how-to-build-and-test",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-build-and-test.md",tags:[],version:"current",lastUpdatedBy:"wesleysu",lastUpdatedAt:1710812587,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"How to Build and Test"},sidebar:"docs",previous:{title:"Cloud-Edge-Device DevOps Collaboration",permalink:"/docs/next/best-practices/practices-1"},next:{title:"Local Up OpenYurt",permalink:"/docs/next/developer-manuals/local-up-openyurt"}},a={},d=[{value:"How to build",id:"how-to-build",level:2},{value:"Build Binary",id:"build-binary",level:3},{value:"Build Image",id:"build-image",level:3},{value:"Cross Compilation",id:"cross-compilation",level:3},{value:"Mac",id:"mac",level:4},{value:"Windows",id:"windows",level:4},{value:"How to test",id:"how-to-test",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"e2e test",id:"e2e-test",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt",children:"OpenYurt repository"}),", currently",(0,o.jsx)(n.code,{children:"(v0.7.0, commit: 68a18ee)"})," 7 components are contained, including:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"yurthub"}),"\n",(0,o.jsx)(n.li,{children:"yurt-controller-manager"}),"\n",(0,o.jsx)(n.li,{children:"yurt-tunnel-server"}),"\n",(0,o.jsx)(n.li,{children:"yurt-tunnel-agent"}),"\n",(0,o.jsx)(n.li,{children:"yurtctl"}),"\n",(0,o.jsx)(n.li,{children:"yurtadm"}),"\n",(0,o.jsx)(n.li,{children:"yurt-node-servant"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This article will give you an introduction of how to build and test the code after development of above components."}),"\n",(0,o.jsx)(n.h2,{id:"how-to-build",children:"How to build"}),"\n",(0,o.jsx)(n.h3,{id:"build-binary",children:"Build Binary"}),"\n",(0,o.jsxs)(n.p,{children:["OpenYurt ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/Makefile",children:"Makefile"})," provides a ",(0,o.jsx)(n.code,{children:"make build"})," command, can be completed by the command to the compilation of various components. The following uses yurtadm as an example to explain how to use 'make build', similar to other components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make build WHAT=cmd/yurtadm\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command compiles yurtadm based on the OS and architecture of the local host and places the compiled executable binary in the _output directory."}),"\n",(0,o.jsx)(n.h3,{id:"build-image",children:"Build Image"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"make docker-build"})," is the most convenient image building command, including the steps of compiling and packaging images, can cover most scenarios. Its use is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'make docker-build TARGET_PLATFORMS="${TARGET_PLATFORMS}" REGION="${your_region}"\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TARGET_PLATFORMS"}),": indicates the OS and architecture to which the component will run. Currently, Linux/amd64, Linux/arm, and Linux/arm64 are supported."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"REGION"}),": This parameter affects the GOPROXY used during compilation. Users in China are advised to set ",(0,o.jsx)(n.code,{children:"REGION=cn"})," to ensure proper construction (cn indicates ",(0,o.jsx)(n.code,{children:"GOPROXY=https://goproxy.cn"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"Use cases:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make docker-build TARGET_PLATFORMS=linux/amd64 REGION=cn\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After the command is executed, local images of each component of OpenYurt are generated, which can be viewed using ",(0,o.jsx)(n.code,{children:"docker images"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"cross-compilation",children:"Cross Compilation"}),"\n",(0,o.jsx)(n.h4,{id:"mac",children:"Mac"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtadm\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command will enable the built yurtadm binary to run on any platform as you want, through setting the ",(0,o.jsx)(n.code,{children:"target_os"})," and ",(0,o.jsx)(n.code,{children:"target_arch"}),". To avoid some problems of compatibility, we'd better set ",(0,o.jsx)(n.code,{children:"CGO_ENABLED=0"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,o.jsxs)(n.p,{children:["Because there's no make command on Windows(if you don't have Cygwin), we have to run ",(0,o.jsx)(n.code,{children:"go build"})," manually to compile the code. Steps in powershell(run as administrator) are as follows:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["prepare environment variables\nReplace ",(0,o.jsx)(n.code,{children:"target_os"})," and ",(0,o.jsx)(n.code,{children:"target_arch"})," as what you want."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$Env:GOOS = $Env:target_os\n$Env:GOARCH = $Env:target_arch\n$Env:CGO_ENABLED = 0\n$Env:GOLDFLAGS = \"-s -w \n-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt\n-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\"\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["run go build\nRun ",(0,o.jsx)(n.code,{children:"go build"})," to compile the code, with the ",(0,o.jsx)(n.code,{children:"-ldflags=$Env:GOLDFLAGS"})," option."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"go build -ldflags=$Env:GOLDFLAGS cmd/yurtadm/yurtadm.go\n"})}),"\n",(0,o.jsx)(n.h2,{id:"how-to-test",children:"How to test"}),"\n",(0,o.jsx)(n.p,{children:"There are tests of two types: unit test and e2e test."}),"\n",(0,o.jsx)(n.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,o.jsxs)(n.p,{children:["In unit test, it will run the test code under cmd and pkg folder, whose names have the suffix of ",(0,o.jsx)(n.code,{children:"_test.go"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,o.jsx)(n.h3,{id:"e2e-test",children:"e2e test"}),"\n",(0,o.jsx)(n.p,{children:"This section shows how to build and run the e2e test for OpenYurt. The test for node autonomy is still under development."}),"\n",(0,o.jsxs)(n.p,{children:["If you have already set up the OpenYurt cluster, you can immediately follow the steps to test your cluster. Otherwise, you can quickly set up the OpenYurt at your local host with instructions at ",(0,o.jsx)(n.a,{href:"/docs/next/developer-manuals/local-up-openyurt",children:"Local Up OpenYurt"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can use the following command to run e2e tests. Assuming that you've entered the openyurt work path, run"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make e2e-tests\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command will help you run e2e tests on OpenYurt cluster. It will use kubeconfig at ",(0,o.jsx)(n.code,{children:"${KUBECONFIG}"}),", default path is ",(0,o.jsx)(n.code,{children:"$HOME/.kube/config"}),". If there's no config found, it will end with error. The test result will show on the stdout:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Ran 5 of 5 Specs in 82.279 seconds\nSUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped\nPASS\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you need further configuration for yurt-e2e-test to specify its behavior(such as running autonomy e2e test case), you can manually run the e2e test as we will introduce in the next section."}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['"go: github.com...unknown revision xxx" occurs during build',(0,o.jsx)(n.br,{}),"\n","It's often caused for too low git version on your host. You can try to update git."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['"unsupported GOOS/GOARCH pair xxx/xxx" occurs during compilation',(0,o.jsx)(n.br,{}),"\n","Not all GOOS/GOARCH pairs are supported by go, such as go1.17.3 cannot support windows/arm64. You can check all supported pairs through ",(0,o.jsx)(n.code,{children:"go tool dist list"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:['"cannot execute binary file: Exec format error" occurs when running binaries built on other platform.',(0,o.jsx)(n.br,{}),"\n","It's often caused by an unsuccessful cross compilation, and the OS cannot recoginze the file format. When you run cross compilation on Windows, please ensure that you run it as an administractor."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>r});var o=t(67294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);