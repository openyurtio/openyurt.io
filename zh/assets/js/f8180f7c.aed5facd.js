"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5870],{65317:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developer-manuals/how-to-build-and-test","title":"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5","description":"OpenYurt\u4e3b\u4ed3\u5e93\uff08openyurtio/openyurt\uff09\u4e2d\u76ee\u524d(v0.7.0, commit: 68a18ee)\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/developer-manuals/how-to-build-and-test.md","sourceDirName":"developer-manuals","slug":"/developer-manuals/how-to-build-and-test","permalink":"/zh/docs/v1.3/developer-manuals/how-to-build-and-test","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-build-and-test.md","tags":[],"version":"v1.3","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},"sidebar":"docs","previous":{"title":"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c","permalink":"/zh/docs/v1.3/best-practices/practices-1"},"next":{"title":"\u672c\u5730\u542f\u52a8\u96c6\u7fa4","permalink":"/zh/docs/v1.3/developer-manuals/local-up-openyurt"}}');var i=r(74848),l=r(28453);const t={title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},d=void 0,o={},c=[{value:"\u5982\u4f55\u6784\u5efa",id:"\u5982\u4f55\u6784\u5efa",level:2},{value:"\u6784\u5efa\u4e8c\u8fdb\u5236",id:"\u6784\u5efa\u4e8c\u8fdb\u5236",level:3},{value:"\u6784\u5efa\u955c\u50cf",id:"\u6784\u5efa\u955c\u50cf",level:3},{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",level:3},{value:"Mac",id:"mac",level:4},{value:"Windows",id:"windows",level:4},{value:"\u5982\u4f55\u6d4b\u8bd5",id:"\u5982\u4f55\u6d4b\u8bd5",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"e2e\u6d4b\u8bd5",id:"e2e\u6d4b\u8bd5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["OpenYurt\u4e3b\u4ed3\u5e93\uff08",(0,i.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt",children:"openyurtio/openyurt"}),"\uff09\u4e2d\u76ee\u524d",(0,i.jsx)(n.code,{children:"(v0.7.0, commit: 68a18ee)"}),"\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"yurthub"}),"\n",(0,i.jsx)(n.li,{children:"yurt-controller-manager"}),"\n",(0,i.jsx)(n.li,{children:"yurt-tunnel-server"}),"\n",(0,i.jsx)(n.li,{children:"yurt-tunnel-agent"}),"\n",(0,i.jsx)(n.li,{children:"yurtctl"}),"\n",(0,i.jsx)(n.li,{children:"yurtadm"}),"\n",(0,i.jsx)(n.li,{children:"yurt-node-servant"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5728\u5b8c\u6210\u5bf9\u4e0a\u8ff0\u7ec4\u4ef6\u7684\u5f00\u53d1\u540e\uff0c\u5982\u4f55\u8fdb\u884c\u7f16\u8bd1\u6e90\u7801\u3001\u6253\u5305\u955c\u50cf\u3001\u8fd0\u884c\u7ec4\u4ef6\u548c\u6d4b\u8bd5\u9a8c\u8bc1\u7b49\u5de5\u4f5c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u6784\u5efa",children:"\u5982\u4f55\u6784\u5efa"}),"\n",(0,i.jsx)(n.h3,{id:"\u6784\u5efa\u4e8c\u8fdb\u5236",children:"\u6784\u5efa\u4e8c\u8fdb\u5236"}),"\n",(0,i.jsxs)(n.p,{children:["OpenYurt\u7684",(0,i.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/Makefile",children:"Makefile"}),"\u4e2d\u63d0\u4f9b\u4e86",(0,i.jsx)(n.code,{children:"make build"}),"\u547d\u4ee4\uff0c\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b8c\u6210\u5bf9\u5404\u4e2a\u7ec4\u4ef6\u7684\u7f16\u8bd1\u3002\u4e0b\u9762\u4ee5\u7f16\u8bd1yurtadm\u4e3a\u4f8b\uff0c\u89e3\u91ca",(0,i.jsx)(n.code,{children:"make build"}),"\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u5176\u4ed6\u7ec4\u4ef6\u7c7b\u4f3c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make build WHAT=cmd/yurtadm\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u4f1a\u6839\u636e\u672c\u673a\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7f16\u8bd1yurtadm\uff0c\u5e76\u628a\u7f16\u8bd1\u51fa\u6765\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728_output\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6784\u5efa\u955c\u50cf",children:"\u6784\u5efa\u955c\u50cf"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"make docker-build"}),"\u662f\u6700\u4fbf\u6377\u7684\u955c\u50cf\u6784\u5efa\u547d\u4ee4\uff0c\u5305\u62ec\u7f16\u8bd1\u548c\u6253\u5305\u955c\u50cf\u7b49\u6b65\u9aa4\uff0c\u53ef\u4ee5\u8986\u76d6\u7edd\u5927\u591a\u6570\u573a\u666f\u3002\u5176\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'make docker-build TARGET_PLATFORMS="${TARGET_PLATFORMS}" REGION="${your_region}"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TARGET_PLATFORMS"}),": \u8868\u793a\u7ec4\u4ef6\u8fd0\u884c\u7684\u76ee\u6807\u67b6\u6784\uff0c\u76ee\u524d\u652f\u6301linux/amd64, linux/arm\u548clinux/arm64\u4e09\u79cd\u67b6\u6784\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"REGION"}),": \u53c2\u6570\u5f71\u54cd\u7f16\u8bd1\u65f6\u9009\u7528\u7684GOPROXY\uff0c\u4e2d\u56fd\u56fd\u5185\u7684\u7528\u6237\u5efa\u8bae\u8bbe\u7f6e",(0,i.jsx)(n.code,{children:"REGION=cn"}),"\u6765\u4fdd\u8bc1\u6784\u5efa\u8fc7\u7a0b\u6b63\u786e\u8fdb\u884c(cn\u8868\u793a\u4f7f\u7528",(0,i.jsx)(n.code,{children:"GOPROXY=https://goproxy.cn"}),")\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make docker-build TARGET_PLATFORMS=linux/amd64 REGION=cn\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\u5728\u672c\u5730\u751f\u6210OpenYurt\u5404\u4e2a\u7ec4\u4ef6\u7684\u955c\u50cf\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"docker images"}),"\u67e5\u770b\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4ea4\u53c9\u7f16\u8bd1",children:"\u4ea4\u53c9\u7f16\u8bd1"}),"\n",(0,i.jsx)(n.h4,{id:"mac",children:"Mac"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=cmd/yurtadm\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u5728mac\u73af\u5883\u4e2d\u7f16\u8bd1\u80fd\u5728\u7279\u5b9a\u5e73\u53f0\u4e0a\u8fd0\u884c\u7684yurtadm\uff0c\u8fd9\u91cc\u6700\u597d\u52a0\u4e0a",(0,i.jsx)(n.code,{children:"CGO_ENABLED=0"}),"\u6765\u907f\u514d\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u95ee\u9898\u3002\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5728Mac\u4e0a\u7f16\u8bd1\u4e0d\u540c\u5e73\u53f0\u7684yurtadm."]}),"\n",(0,i.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e\u5728Windows\u4e0a\u901a\u5e38\u6ca1\u6709make\u547d\u4ee4\uff08\u5982\u679c\u4f60\u6ca1\u6709\u7528Cygwin\u7684\u8bdd\uff09\uff0c\u9700\u8981\u81ea\u5df1\u6267\u884c",(0,i.jsx)(n.code,{children:"go build"}),"\uff0cpowershell\u4e2d\u6267\u884c\u65b9\u6cd5\u5982\u4e0b\uff08\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c\uff09\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,i.jsx)(n.br,{}),"\n","\u5728\u8fd0\u884c\u524d\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,i.jsx)(n.code,{children:"target_os"}),"\u548c",(0,i.jsx)(n.code,{children:"target_arch"}),"\uff0c\u8bbe\u4e3a\u9700\u8981\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"$Env:GOOS = $Env:target_os\n$Env:GOARCH = $Env:target_arch\n$Env:CGO_ENABLED = 0\n$Env:GOLDFLAGS = \"-s -w \n-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt\n-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\"\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528go build\u8fdb\u884c\u7f16\u8bd1",(0,i.jsx)(n.br,{}),"\n","\u8fd0\u884cgo build\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff0c\u8fd9\u91cc\u9700\u8981\u52a0\u4e0a",(0,i.jsx)(n.code,{children:"-ldflags=$Env:GOLDFLAGS"}),"\u9009\u9879\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7-o\u6765\u8c03\u6574\u7f16\u8bd1\u597d\u7684yurtadm\u7684\u4fdd\u5b58\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"go build -ldflags=$Env:GOLDFLAGS cmd/yurtadm/yurtadm.go\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u6d4b\u8bd5",children:"\u5982\u4f55\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.p,{children:"OpenYurt\u4e2d\u63d0\u4f9b\u7684\u6d4b\u8bd5\u5305\u62ec\u5355\u5143\u6d4b\u8bd5\u548ce2e\u6d4b\u8bd5\u4e24\u79cd\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5355\u5143\u6d4b\u8bd5",children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5355\u5143\u6d4b\u8bd5\u4f1a\u6267\u884ccmd\u548cpkg\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:"*_test.go"}),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u5b8c\u6210"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,i.jsx)(n.h3,{id:"e2e\u6d4b\u8bd5",children:"e2e\u6d4b\u8bd5"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u8fd0\u884cOpenYurt\u7684e2e test\u3002\u5728\u793e\u533a\u63d0\u4f9b\u7684\u6d4b\u8bd5\u7528\u4f8b\u4e2d\uff0c\u8282\u70b9\u7684\u81ea\u6cbb\uff08autonomy\uff09\u6d4b\u8bd5\u4ecd\u7136\u5904\u4e8e\u5f00\u53d1\u9636\u6bb5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5df2\u7ecf\u542f\u52a8\u4e86\u4e00\u4e2aOpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u6309\u7167\u8fd9\u8282\u7684\u6b65\u9aa4\u6765\u8fd0\u884ce2e\u6d4b\u8bd5\u3002\u5982\u679c\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u53ef\u4ee5\u901a\u8fc7\u201c\u672c\u5730\u542f\u52a8\u96c6\u7fa4\u201d\u4e2d\u6240\u8ff0\u6b65\u9aa4\uff0c\u5728\u672c\u5730\u5feb\u901f\u542f\u52a8\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u642d\u5efa\u597dOpenYurt\u96c6\u7fa4\u540e\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884ce2e\u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u7528\u4f8b\u5bf9\u96c6\u7fa4\u8fdb\u884ce2e\u6d4b\u8bd5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make e2e-tests\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u4f1a\u5728_output\u76ee\u5f55\u7684\u76f8\u5e94\u5e73\u53f0\u76ee\u5f55\u4e0b\u751f\u6210e2e\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\uff0c\u5e76\u5229\u7528KUBECONFIG\u73af\u5883\u53d8\u91cf\uff08\u9ed8\u8ba4\u503c\u4e3a",(0,i.jsx)(n.code,{children:"$HOME/.kube/config"}),"\uff09\u6307\u660e\u7684kubeconfig\u6587\u4ef6\u8bbf\u95ee\u96c6\u7fa4\uff0c\u8fd0\u884c\u6d4b\u8bd5\u3002\u53ef\u4ee5\u5728stdout\u4e2d\u770b\u5230\u5982\u4e0b\u6d4b\u8bd5\u7ed3\u679c\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Ran 5 of 5 Specs in 82.279 seconds\nSUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped\nPASS\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u9700\u8981\u6307\u5b9a\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\u7684\u884c\u4e3a\uff08\u5982\u8fd0\u884c\u989d\u5916\u7684\u81ea\u6cbb\u6d4b\u8bd5\uff09\uff0c\u53ef\u4ee5\u6309\u7167\u4e0b\u4e00\u8282\u7684\u6b65\u9aa4\u8fdb\u884c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['\u7f16\u8bd1\u65f6\u51fa\u73b0"go: github.com...unknown revision xxx"',(0,i.jsx)(n.br,{}),"\n","\u901a\u5e38\u662fgit\u7684\u7248\u672c\u8fc7\u4f4e\u9020\u6210\u7684\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5347\u7ea7git\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['\u7f16\u8bd1\u65f6\u51fa\u73b0"unsupported GOOS/GOARCH pair xxx/xxx"',(0,i.jsx)(n.br,{}),"\n","go\u4e0d\u80fd\u652f\u6301\u6240\u6709\u7684GOOS/GOARCH\u7ec4\u5408\uff0c\u5982go1.17.3\u4e0d\u652f\u6301windows/arm64\u3002\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"go tool dist list"}),"\u6765\u67e5\u770b\u652f\u6301\u7684GOOS/GOARCH\u7ec4\u5408\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['\u8fd0\u884c\u4ea4\u53c9\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u65f6\u51fa\u73b0"cannot execute binary file: Exec format error"',(0,i.jsx)(n.br,{}),"\n","\u901a\u5e38\u662f\u6ca1\u6709\u6210\u529f\u5b8c\u6210\u4ea4\u53c9\u7f16\u8bd1\uff0c\u5bfc\u81f4\u8fd0\u884c\u5e73\u53f0\u4e0e\u5f53\u524d\u5e73\u53f0\u4e0d\u540c\uff0c\u65e0\u6cd5\u8bc6\u522b\u6587\u4ef6\u683c\u5f0f\u3002\u5728Windows\u4e0a\u8fdb\u884c\u4ea4\u53c9\u7f16\u8bd1\u5c24\u5176\u9700\u8981\u6ce8\u610f\u5f00\u542f\u7ba1\u7406\u5458\u6743\u9650\u3002"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var s=r(96540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);