"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[69212],{76367:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(85893),n=s(11151);const l={title:"CI Workflow"},o=void 0,c={id:"developer-manuals/ci-workflow",title:"CI Workflow",description:"This article will introduce the CI Workflow which all pull requests should pass before being merged. The CI Workflow of OpenYurt is built based on Github Actions. Details of Github Actions can be found at its official documentation. The config of the CI Workflow is located at ci.yaml.",source:"@site/versioned_docs/version-v1.1/developer-manuals/ci-workflow.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/ci-workflow",permalink:"/docs/v1.1/developer-manuals/ci-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/ci-workflow.md",tags:[],version:"v1.1",lastUpdatedBy:"Lu Chen",lastUpdatedAt:1722947604e3,frontMatter:{title:"CI Workflow"},sidebar:"docs",previous:{title:"Local Up OpenYurt",permalink:"/docs/v1.1/developer-manuals/local-up-openyurt"},next:{title:"How to Contribute",permalink:"/docs/v1.1/developer-manuals/how-to-contribute"}},r={},d=[{value:"check-license",id:"check-license",level:2},{value:"golangci-lint",id:"golangci-lint",level:2},{value:"markdownlint-misspell-shellcheck",id:"markdownlint-misspell-shellcheck",level:2},{value:"unit-tests",id:"unit-tests",level:2},{value:"build-binaries",id:"build-binaries",level:2},{value:"e2e-tests",id:"e2e-tests",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This article will introduce the CI Workflow which all pull requests should pass before being merged. The CI Workflow of OpenYurt is built based on Github Actions. Details of Github Actions can be found at its ",(0,i.jsx)(t.a,{href:"https://docs.github.com/cn/actionsh",children:"official documentation"}),". The config of the CI Workflow is located at ",(0,i.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/blob/master/.github/workflows/ci.yam",children:"ci.yaml"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The current CI Worflow of OpenYurt contains the following checks:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"check-license"}),"\n",(0,i.jsx)(t.li,{children:"golangci-lint"}),"\n",(0,i.jsx)(t.li,{children:"markdownlint-misspell-shellcheck"}),"\n",(0,i.jsx)(t.li,{children:"unit-tests"}),"\n",(0,i.jsx)(t.li,{children:"build-binaries"}),"\n",(0,i.jsx)(t.li,{children:"e2e-tests"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"At the moment you submit a pull request to OpenYurt, Github Actions will be triggered to check your PR. A pull request can not be merged until it passed all the checks in Github Actions as the following picture shows:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"pr-passed-ci",src:s(24918).Z+"",width:"1257",height:"672"})}),"\n",(0,i.jsxs)(t.p,{children:["You can click ",(0,i.jsx)(t.code,{children:"Details"})," to check logs to solve the problem if you find some checks failed. The article will then give the discription of all six checks to help you understand why some of these checks fail. By the way, all of these checks can run at your local host."]}),"\n",(0,i.jsx)(t.h2,{id:"check-license",children:"check-license"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"check-license"})," will check all the ",(0,i.jsx)(t.code,{children:".go"})," and ",(0,i.jsx)(t.code,{children:".sh"})," files to ensure all of them have a license. It will use the bash shell ",(0,i.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/check_license.sh",children:"check_license.sh"}),". If it finds some files don't contain license, it will output their paths."]}),"\n",(0,i.jsx)(t.p,{children:"license is a statement in the comments at the beginning of the file. The following license is what OpenYurt uses:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'Copyright 2021 The OpenYurt Authors.\r\n\r\nLicensed under the Apache License, Version 2.0 (the "License");\r\nyou may not use this file except in compliance with the License.\r\nYou may obtain a copy of the License at\r\n\r\n    https://www.apache.org/licenses/LICENSE-2.0\r\n\r\nUnless required by applicable law or agreed to in writing, software\r\ndistributed under the License is distributed on an "AS IS" BASIS,\r\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\nSee the License for the specific language governing permissions and\r\nlimitations under the License.\n'})}),"\n",(0,i.jsx)(t.h2,{id:"golangci-lint",children:"golangci-lint"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"golangci-lint"})," will check the format of all go source code files. It uses the tool ",(0,i.jsx)(t.code,{children:"golangci-lint"})," with serval linters to do the check. More details of ",(0,i.jsx)(t.code,{children:"golangci-lint"})," can be found at the ",(0,i.jsx)(t.a,{href:"https://golangci-lint.run/",children:"doc"}),". This sections will give the brief introduction of linters used by OpenYurt."]}),"\n",(0,i.jsxs)(t.p,{children:["The config file of ",(0,i.jsx)(t.code,{children:"golangci-lint"})," is at ",(0,i.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/blob/master/.golangci.yaml",children:".golangci.yaml"}),". The enabled linters and their descriptions are as follows:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"linter"}),(0,i.jsx)(t.th,{children:"description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/remyoudompheng/go-misc/tree/master/deadcode",children:"deadcode"})}),(0,i.jsx)(t.td,{children:"Finds unused code"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://pkg.go.dev/cmd/gofmt",children:"gofmt"})}),(0,i.jsx)(t.td,{children:"checks whether code was gofmt-ed. By default this tool runs with -s option to check for code simplification"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://pkg.go.dev/golang.org/x/tools/cmd/goimports?utm_source=godoc",children:"goimports"})}),(0,i.jsx)(t.td,{children:"In addition to fixing imports, goimports also formats your code in the same style as gofmt."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/daixiang0/gci",children:"gci"})}),(0,i.jsx)(t.td,{children:"Gci control golang package import order and make it always deterministic"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/gordonklaus/ineffassign",children:"ineffassign"})}),(0,i.jsx)(t.td,{children:"Detects when assignments to existing variables are not used"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/client9/misspell",children:"misspell"})}),(0,i.jsx)(t.td,{children:"Finds commonly misspelled English words in comments"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://pkg.go.dev/cmd/vet",children:"vet"})}),(0,i.jsx)(t.td,{children:"Vet examines Go source code and reports suspicious constructs, such as Printf calls whose arguments do not align with the format string"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["You can use ",(0,i.jsx)(t.code,{children:"make lint"})," at your local host to run these checks. This command will automatically install the ",(0,i.jsx)(t.code,{children:"golangci-lint"})," tool if not found. Running this command at local host will show more details than what Github Actions will output, such as the error lines. We always recommend running ",(0,i.jsx)(t.code,{children:"make lint"})," at your local host before submitting a pull reuqest."]}),"\n",(0,i.jsx)(t.h2,{id:"markdownlint-misspell-shellcheck",children:"markdownlint-misspell-shellcheck"}),"\n",(0,i.jsxs)(t.p,{children:["OpenYurt uses the ",(0,i.jsx)(t.a,{href:"https://github.com/pouchcontainer/pouchlinter",children:"pouchlinter"})," to do this check, which contains some installed lint tools we need: ",(0,i.jsx)(t.a,{href:"https://github.com/client9/misspell",children:"misspell"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/markdownlint/markdownlint",children:"markdownlint"}),". misspell will check if there're some misspelled English words. It will output the file path and line number, if any. markdownlint will check if markdown files repect specified rules. The descriptions of all rules can be found at the ",(0,i.jsx)(t.a,{href:"https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md",children:"doc"}),". In this check, ",(0,i.jsx)(t.code,{children:"MD010"}),", ",(0,i.jsx)(t.code,{children:"MD013"}),", ",(0,i.jsx)(t.code,{children:"MD022"}),", ",(0,i.jsx)(t.code,{children:"MD024"}),", ",(0,i.jsx)(t.code,{children:"MD029"}),", ",(0,i.jsx)(t.code,{children:"MD031"}),", ",(0,i.jsx)(t.code,{children:"MD032"}),", ",(0,i.jsx)(t.code,{children:"MD033"}),", ",(0,i.jsx)(t.code,{children:"MD034"}),", ",(0,i.jsx)(t.code,{children:"MD036"})," will not be respected."]}),"\n",(0,i.jsx)(t.h2,{id:"unit-tests",children:"unit-tests"}),"\n",(0,i.jsxs)(t.p,{children:["In this check, all go files with suffix ",(0,i.jsx)(t.code,{children:"_test.go"})," will be executed. These files usually contain test cases of some functions and modules. The following command will be used to run these tests:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,i.jsx)(t.h2,{id:"build-binaries",children:"build-binaries"}),"\n",(0,i.jsxs)(t.p,{children:["This check will try to build binaries of all OpenYurt components on the ",(0,i.jsx)(t.code,{children:"linux/amd64"})," platform, including ",(0,i.jsx)(t.code,{children:"yurtadm"}),", ",(0,i.jsx)(t.code,{children:"yurtctl"}),", ",(0,i.jsx)(t.code,{children:"yurt-node-servant"}),", ",(0,i.jsx)(t.code,{children:"yurt-hub"}),", ",(0,i.jsx)(t.code,{children:"yurt-controller-manager"}),", ",(0,i.jsx)(t.code,{children:"yurt-tunnel-server"})," and ",(0,i.jsx)(t.code,{children:"yurt-tunnel-agent"}),". It will use the following command to build these binaries:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"make build\n"})}),"\n",(0,i.jsx)(t.h2,{id:"e2e-tests",children:"e2e-tests"}),"\n",(0,i.jsxs)(t.p,{children:["In this check, a OpenYurt cluster with two nodes will be set up to run e2e test cases under ",(0,i.jsx)(t.code,{children:"test"})," folder. OpenYurt also provide a way to run this test at your local host which you can find at ",(0,i.jsx)(t.a,{href:"/docs/v1.1/developer-manuals/local-up-openyurt",children:"Local Up OpenYurt"}),". Currently, the following e2e test cases will run during this check:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Case"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cluster_info"}),(0,i.jsx)(t.td,{children:"Fetch cluster info from the cluster, including the number of pods and all namespaces"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pod_operate_test"}),(0,i.jsx)(t.td,{children:"Create/Delete pod on the edge node"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pod_operate_test_on_edge"}),(0,i.jsx)(t.td,{children:"Execute command in the pod on the edge node"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},24918:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/pr-passed-ci-78d99539a449c6dd4527a7263bd4cdf7.png"},11151:(e,t,s)=>{s.d(t,{a:()=>o});var i=s(67294);const n={},l=i.createContext(n);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);