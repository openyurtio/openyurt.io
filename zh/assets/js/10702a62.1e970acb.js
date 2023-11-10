"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5029],{42578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var l=r(85893),s=r(11151);const t={title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},d=void 0,i={id:"developer-manuals/how-to-build-and-test",title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5",description:"OpenYurt\u4e3b\u4ed3\u5e93\uff08openyurtio/openyurt\uff09\u4e2d\u76ee\u524d(v0.5.0, commit: ef26d5c6)\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/developer-manuals/how-to-build-and-test.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-build-and-test",permalink:"/zh/docs/v0.6.0/developer-manuals/how-to-build-and-test",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-build-and-test.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1699659286,formattedLastUpdatedAt:"2023\u5e7411\u670810\u65e5",frontMatter:{title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},sidebar:"docs",previous:{title:"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c",permalink:"/zh/docs/v0.6.0/best-practices/practices-1"},next:{title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4",permalink:"/zh/docs/v0.6.0/developer-manuals/local-up-openyurt"}},c={},o=[{value:"\u5982\u4f55\u6784\u5efa",id:"\u5982\u4f55\u6784\u5efa",level:2},{value:"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1",id:"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1",level:3},{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",level:3},{value:"Mac",id:"mac",level:4},{value:"Windows",id:"windows",level:4},{value:"\u624b\u52a8\u6253\u5305\u955c\u50cf",id:"\u624b\u52a8\u6253\u5305\u955c\u50cf",level:3},{value:"yurtctl\uff08yurt-servant\uff09 dockerfile",id:"yurtctlyurt-servant-dockerfile",level:4},{value:"yurt-node-servant dockerfile",id:"yurt-node-servant-dockerfile",level:4},{value:"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile",id:"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile",level:4},{value:"\u5982\u4f55\u6d4b\u8bd5",id:"\u5982\u4f55\u6d4b\u8bd5",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"e2e\u6d4b\u8bd5",id:"e2e\u6d4b\u8bd5",level:3},{value:"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5",id:"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["OpenYurt\u4e3b\u4ed3\u5e93\uff08",(0,l.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt",children:"openyurtio/openyurt"}),"\uff09\u4e2d\u76ee\u524d",(0,l.jsx)(n.code,{children:"(v0.5.0, commit: ef26d5c6)"}),"\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"yurthub"}),"\n",(0,l.jsx)(n.li,{children:"yurt-controller-manager"}),"\n",(0,l.jsx)(n.li,{children:"yurt-tunnel-server"}),"\n",(0,l.jsx)(n.li,{children:"yurt-tunnel-agent"}),"\n",(0,l.jsx)(n.li,{children:"yurtctl"}),"\n",(0,l.jsx)(n.li,{children:"yurt-node-servant"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5728\u5b8c\u6210\u5bf9\u4e0a\u8ff0\u7ec4\u4ef6\u7684\u5f00\u53d1\u540e\uff0c\u5982\u4f55\u8fdb\u884c\u7f16\u8bd1\u6e90\u7801\u3001\u6253\u5305\u955c\u50cf\u3001\u8fd0\u884c\u7ec4\u4ef6\u548c\u6d4b\u8bd5\u9a8c\u8bc1\u7b49\u5de5\u4f5c\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5982\u4f55\u6784\u5efa",children:"\u5982\u4f55\u6784\u5efa"}),"\n",(0,l.jsxs)(n.p,{children:["OpenYurt\u5728",(0,l.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/Makefile",children:"Makefile"}),"\u4e2d\u63d0\u4f9b\u4e86\u591a\u79cd\u6784\u5efa\u65b9\u5f0f\u3002\u5176\u4e2d",(0,l.jsx)(n.code,{children:"make release"}),"\u662f\u6700\u4fbf\u6377\u7684\u6784\u5efa\u547d\u4ee4\uff0c\u5305\u62ec\u7f16\u8bd1\u548c\u6253\u5305\u955c\u50cf\u7b49\u6b65\u9aa4\uff0c\u53ef\u4ee5\u8986\u76d6\u7edd\u5927\u591a\u6570\u573a\u666f\u3002\u5176\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'make release WHAT="${components[@]}" ARCH="${archs[@]}" REGION="${your_region}"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4e2d",(0,l.jsx)(n.code,{children:"WHAT"}),"\u8868\u793a\u9700\u8981\u6784\u5efa\u7684\u7ec4\u4ef6\uff08\u540d\u79f0\u89c1\u6587\u7ae0\u5f00\u5934\uff09\uff0c",(0,l.jsx)(n.code,{children:"ARCH"}),"\u8868\u793a\u7ec4\u4ef6\u8fd0\u884c\u7684\u76ee\u6807\u67b6\u6784\uff0c\u76ee\u524d\u652f\u6301amd64, arm\u548carm64\u4e09\u79cd\u67b6\u6784\u3002\u8fd9\u4e24\u4e2a\u53c2\u6570\u80fd\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u5165\uff0c\u6765\u8fdb\u884c\u4e0d\u540c\u7ec4\u5408\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"REGION"}),'\u53c2\u6570\u5f71\u54cd\u7f16\u8bd1\u65f6\u9009\u7528\u7684GOPROXY\uff0c\u76ee\u524d\u652f\u6301"cn","us"\u4e24\u79cd\u3002cn\u8868\u793a\u4f7f\u7528',(0,l.jsx)(n.code,{children:"GOPROXY=https://goproxy.cn"}),"\uff0cus\u8868\u793a\u4f7f\u7528",(0,l.jsx)(n.code,{children:"GOPROXY=https://proxy.golang.org"}),"\u3002\u9ed8\u8ba4\u503c\u662fus\uff0c\u56e0\u6b64\u5728\u56fd\u5185\u7684\u7528\u6237\u5efa\u8bae\u8bbe\u7f6e",(0,l.jsx)(n.code,{children:"REGION=cn"}),"\u6765\u4fdd\u8bc1\u6784\u5efa\u8fc7\u7a0b\u6b63\u786e\u8fdb\u884c\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'make release WHAT="yurtctl yurthub" ARCH="arm64 amd64" REGION=cn\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\u53ef\u4ee5\u5728",(0,l.jsx)(n.code,{children:"_output"}),"\u76ee\u5f55\u4e0b\u627e\u5230\u955c\u50cf\u548c\u5bf9\u5e94\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5728",(0,l.jsx)(n.code,{children:"dockerbuild"}),"\u76ee\u5f55\u4e0b\u53ef\u4ee5\u627e\u5230\u6784\u5efa\u955c\u50cf\u7684dockerfile\uff0c\u540c\u65f6\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7",(0,l.jsx)(n.code,{children:"make release"}),"\u6784\u5efa\u51fa\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u955c\u50cf\u90fd\u662f\u57fa\u4e8elinux\u5e73\u53f0\u7684\u3002\u5728",(0,l.jsx)(n.code,{children:"make relase"}),"\u547d\u4ee4\u4e2d\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0\u662f\u76ee\u524d\u662f\u4e0d\u80fd\u6539\u53d8\u7684\uff0c\u5982\u679c\u6709\u76f8\u5173\u9700\u6c42\u53ef\u4ee5\u7528\u4e0b\u8ff0\u7684\u5176\u4ed6\u65b9\u6cd5\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["OpenYurt\u7684Makefile\u4e2d\u8fd8\u63d0\u4f9b\u4e86",(0,l.jsx)(n.code,{children:"make build"}),"\u547d\u4ee4\uff0c\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b8c\u6210\u5bf9\u5404\u4e2a\u7ec4\u4ef6\u7684\u7f16\u8bd1\uff0c\u540c\u65f6\u8be5\u547d\u4ee4\u53ef\u4ee5\u6307\u5b9a\u7f16\u8bd1\u7684\u76ee\u6807\u5e73\u53f0\uff08\u5305\u62ec\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\uff09\u3002\u4e0b\u9762\u4ee5\u7f16\u8bd1yurtctl\u4e3a\u4f8b\uff0c\u89e3\u91ca",(0,l.jsx)(n.code,{children:"make build"}),"\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u5176\u4ed6\u7ec4\u4ef6\u7c7b\u4f3c\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1",children:"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"make build WHAT=yurtctl\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u4f1a\u6839\u636e\u672c\u5730\u5e73\u53f0\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7f16\u8bd1yurtctl\uff0c\u5e76\u628a\u7f16\u8bd1\u51fa\u6765\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728_output\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u4ea4\u53c9\u7f16\u8bd1",children:"\u4ea4\u53c9\u7f16\u8bd1"}),"\n",(0,l.jsx)(n.h4,{id:"mac",children:"Mac"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtctl\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u7f16\u8bd1\u80fd\u5728\u7279\u5b9a\u5e73\u53f0\u8fd0\u884c\u7684yurtctl\uff0c\u8fd9\u91cc\u6700\u597d\u52a0\u4e0a",(0,l.jsx)(n.code,{children:"CGO_ENABLED=0"}),"\u6765\u907f\u514d\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u95ee\u9898\u3002\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5728Mac\u4e0a\u7f16\u8bd1\u4e0d\u540c\u5e73\u53f0\u7684yurtctl."]}),"\n",(0,l.jsx)(n.h4,{id:"windows",children:"Windows"}),"\n",(0,l.jsxs)(n.p,{children:["\u7531\u4e8e\u5728Windows\u4e0a\u901a\u5e38\u6ca1\u6709make\u547d\u4ee4\uff08\u5982\u679c\u4f60\u6ca1\u6709\u7528Cygwin\u7684\u8bdd\uff09\uff0c\u9700\u8981\u81ea\u5df1\u6267\u884c",(0,l.jsx)(n.code,{children:"go build"}),"\uff0cpowershell\u4e2d\u6267\u884c\u65b9\u6cd5\u5982\u4e0b\uff08\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c\uff09\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,l.jsx)(n.br,{}),"\n","\u5728\u8fd0\u884c\u524d\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,l.jsx)(n.code,{children:"target_os"}),"\u548c",(0,l.jsx)(n.code,{children:"target_arch"}),"\uff0c\u8bbe\u4e3a\u9700\u8981\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"$Env:GOOS = $Env:target_os\n$Env:GOARCH = $Env:target_arch\n$Env:CGO_ENABLED = 0\n$Env:GOLDFLAGS = \"-s -w \n-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt\n-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\"\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528go build\u8fdb\u884c\u7f16\u8bd1",(0,l.jsx)(n.br,{}),"\n","\u8fd0\u884cgo build\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff0c\u8fd9\u91cc\u9700\u8981\u52a0\u4e0a",(0,l.jsx)(n.code,{children:"-ldflags=$Env:GOLDFLAGS"}),"\u9009\u9879\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7-o\u6765\u8c03\u6574\u7f16\u8bd1\u597d\u7684yurtctl\u7684\u4fdd\u5b58\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"go build -ldflags=$Env:GOLDFLAGS cmd/yurtctl/yurtctl.go\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u624b\u52a8\u6253\u5305\u955c\u50cf",children:"\u624b\u52a8\u6253\u5305\u955c\u50cf"}),"\n",(0,l.jsxs)(n.p,{children:["\u672c\u8282\u63cf\u8ff0\u5404\u4e2a\u7ec4\u4ef6\u7684dockerfile\uff0c\u4fbf\u4e8e\u901a\u8fc7",(0,l.jsx)(n.code,{children:"docker build"}),"\u547d\u4ee4\u6765\u624b\u52a8\u6253\u5305\u7ec4\u4ef6\u955c\u50cf\uff0c\u4e0b\u9762\u662fyurtctl\u548cyurt-node-servant\u7684\u67b6\u6784\u4e0e\u57fa\u7840\u955c\u50cf\u4e4b\u95f4\u7684\u5173\u7cfb\u8868\u3002"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u67b6\u6784"}),(0,l.jsx)(n.th,{children:"\u57fa\u7840\u955c\u50cf"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"amd64"}),(0,l.jsx)(n.td,{children:"amd64/alpine:3.9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"arm64"}),(0,l.jsx)(n.td,{children:"arm64v8/alpine:3.9"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"arm"}),(0,l.jsx)(n.td,{children:"arm32v7/alpine:3.9"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u53d8\u91cf",(0,l.jsx)(n.code,{children:"baseimage"}),"\u4ee3\u6307\u57fa\u7840\u955c\u50cf"]}),"\n",(0,l.jsx)(n.h4,{id:"yurtctlyurt-servant-dockerfile",children:"yurtctl\uff08yurt-servant\uff09 dockerfile"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-dockerfile",children:"FROM ${baseimage}\nADD yurtctl /usr/local/bin/yurtctl\n"})}),"\n",(0,l.jsx)(n.h4,{id:"yurt-node-servant-dockerfile",children:"yurt-node-servant dockerfile"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-dockerfile",children:"FROM ${baseimage}\nADD entry.sh /usr/local/bin/entry.sh\nRUN chmod +x /usr/local/bin/entry.sh\nADD yurt-node-servant /usr/local/bin/node-servant\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile",children:"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile"}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4ed6\u7ec4\u4ef6\u7684\u57fa\u7840\u955c\u50cf\u548c\u4e0a\u8ff0\u4e24\u4e2a\u4e0d\u540c\u3002\u5176\u4e2darch\u4e3a\u67b6\u6784\u540d\u79f0\uff0c\u5305\u62ecamd64\uff0carm\u548carm64\uff1bcomponent\u8868\u793a\u7ec4\u4ef6\u540d\u79f0\uff0c\u5305\u62ecyurthub\uff0cyurt-controller-manager\uff0cyurt-tunnel-server\u548cyurt-tunnel-agent\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-dockerfile",children:'FROM k8s.gcr.io/debian-iptables-${arch}:v11.0.2\nCOPY ${component} /usr/local/bin/${component}\nENTRYPOINT ["/usr/local/bin/${component}"]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5982\u4f55\u6d4b\u8bd5",children:"\u5982\u4f55\u6d4b\u8bd5"}),"\n",(0,l.jsx)(n.p,{children:"OpenYurt\u4e2d\u63d0\u4f9b\u7684\u6d4b\u8bd5\u5305\u62ec\u5355\u5143\u6d4b\u8bd5\u548ce2e\u6d4b\u8bd5\u4e24\u79cd\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u5355\u5143\u6d4b\u8bd5",children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,l.jsxs)(n.p,{children:["\u5355\u5143\u6d4b\u8bd5\u4f1a\u6267\u884ccmd\u548cpkg\u76ee\u5f55\u4e0b\u7684",(0,l.jsx)(n.code,{children:"*_test.go"}),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u5b8c\u6210"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,l.jsx)(n.h3,{id:"e2e\u6d4b\u8bd5",children:"e2e\u6d4b\u8bd5"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u8fd0\u884cOpenYurt\u7684e2e test\u3002\u5728\u793e\u533a\u63d0\u4f9b\u7684\u6d4b\u8bd5\u7528\u4f8b\u4e2d\uff0c\u8282\u70b9\u7684\u81ea\u6cbb\uff08autonomy\uff09\u6d4b\u8bd5\u4ecd\u7136\u5904\u4e8e\u5f00\u53d1\u9636\u6bb5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u5df2\u7ecf\u542f\u52a8\u4e86\u4e00\u4e2aOpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u6309\u7167\u8fd9\u8282\u7684\u6b65\u9aa4\u6765\u8fd0\u884ce2e\u6d4b\u8bd5\u3002\u5982\u679c\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u53ef\u4ee5\u901a\u8fc7\u201c\u672c\u5730\u542f\u52a8\u96c6\u7fa4\u201d\u4e2d\u6240\u8ff0\u6b65\u9aa4\uff0c\u5728\u672c\u5730\u5feb\u901f\u542f\u52a8\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u642d\u5efa\u597dOpenYurt\u96c6\u7fa4\u540e\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884ce2e\u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u7528\u4f8b\u5bf9\u96c6\u7fa4\u8fdb\u884ce2e\u6d4b\u8bd5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"make e2e-tests\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u4f1a\u5728_output\u76ee\u5f55\u7684\u76f8\u5e94\u5e73\u53f0\u76ee\u5f55\u4e0b\u751f\u6210e2e\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\uff0c\u5e76\u5229\u7528KUBECONFIG\u73af\u5883\u53d8\u91cf\uff08\u9ed8\u8ba4\u503c\u4e3a",(0,l.jsx)(n.code,{children:"$HOME/.kube/config"}),"\uff09\u6307\u660e\u7684kubeconfig\u6587\u4ef6\u8bbf\u95ee\u96c6\u7fa4\uff0c\u8fd0\u884c\u6d4b\u8bd5\u3002\u53ef\u4ee5\u5728stdout\u4e2d\u770b\u5230\u5982\u4e0b\u6d4b\u8bd5\u7ed3\u679c\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Ran 5 of 5 Specs in 82.279 seconds\nSUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped\nPASS\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u9700\u8981\u6307\u5b9a\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\u7684\u884c\u4e3a\uff08\u5982\u8fd0\u884c\u989d\u5916\u7684\u81ea\u6cbb\u6d4b\u8bd5\uff09\uff0c\u53ef\u4ee5\u6309\u7167\u4e0b\u4e00\u8282\u7684\u6b65\u9aa4\u8fdb\u884c\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5",children:"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5"}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u6309\u7167\u4e0b\u8ff0\u6b65\u9aa4\u624b\u52a8\u6784\u5efae2e\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u8fdb\u5165openyurt\u76ee\u5f55\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ cd openyurt\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u6784\u5efayurt-e2e-test\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ make e2e\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7136\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u6784\u5efa\u597d\u7684yurt-e2e-test\u8fdb\u884c\u6d4b\u8bd5\u4e86\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0b\u9762\u7684\u547d\u4ee4\u4f1a\u5728OpenYurt\u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e00\u4e9b\u57fa\u7840\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8df3\u8fc7\u81ea\u6cbb\u6d4b\u8bd5\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4f60\u60f3\u8fd0\u884c\u5305\u62ec\u81ea\u6cbb\u6d4b\u8bd5\u5728\u5185\u7684\u6240\u6709\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b8c\u6210\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./  --enable-yurt-autonomy=true\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u76ee\u524d\u7684\u81ea\u6cbb\u6d4b\u8bd5\u9700\u8981\u81ea\u5df1\u91cd\u65b0\u542f\u52a8\u8282\u70b9\uff0cyurt-e2e-test\u4f1a\u7b49\u5f85\u8282\u70b9\u91cd\u542f\u5e76\u68c0\u67e5pod\u7684\u72b6\u6001\u3002"}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d\u793e\u533a\u8fd8\u672a\u63d0\u4f9b\u5728\u963f\u91cc\u4e91ECS\u6216ENS\u4e0a\u8fd0\u884c\u81ea\u6cbb\u6d4b\u8bd5\u7684\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6d4b\u8bd5\u7ed3\u679c\u53ef\u4ee5\u5728stdout\u6216yurt-e2e-test-report_01.xml\u6587\u4ef6\uff08\u6240\u5728\u76ee\u5f55\u7531",(0,l.jsx)(n.code,{children:"--report-dir"}),"\u53c2\u6570\u6307\u5b9a\uff09\u4e2d\u67e5\u770b\u3002\u5176\u4e2dyurt-e2e-test\u53ef\u6267\u884c\u6587\u4ef6\u7684\u4f4d\u7f6e\u4f1a\u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7684\u4e0d\u540c\u800c\u4e0d\u540c\uff0c\u53ef\u80fd\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6539\u53d8\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:['\u7f16\u8bd1\u65f6\u51fa\u73b0"go: github.com...unknown revision xxx"',(0,l.jsx)(n.br,{}),"\n","\u901a\u5e38\u662fgit\u7684\u7248\u672c\u8fc7\u4f4e\u9020\u6210\u7684\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5347\u7ea7git\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:['\u7f16\u8bd1\u65f6\u51fa\u73b0"unsupported GOOS/GOARCH pair xxx/xxx"',(0,l.jsx)(n.br,{}),"\n","go\u4e0d\u80fd\u652f\u6301\u6240\u6709\u7684GOOS/GOARCH\u7ec4\u5408\uff0c\u5982go1.17.3\u4e0d\u652f\u6301windows/arm64\u3002\u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(n.code,{children:"go tool dist list"}),"\u6765\u67e5\u770b\u652f\u6301\u7684GOOS/GOARCH\u7ec4\u5408\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:['\u8fd0\u884c\u4ea4\u53c9\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u65f6\u51fa\u73b0"cannot execute binary file: Exec format error"',(0,l.jsx)(n.br,{}),"\n","\u901a\u5e38\u662f\u6ca1\u6709\u6210\u529f\u5b8c\u6210\u4ea4\u53c9\u7f16\u8bd1\uff0c\u5bfc\u81f4\u8fd0\u884c\u5e73\u53f0\u4e0e\u5f53\u524d\u5e73\u53f0\u4e0d\u540c\uff0c\u65e0\u6cd5\u8bc6\u522b\u6587\u4ef6\u683c\u5f0f\u3002\u5728Windows\u4e0a\u8fdb\u884c\u4ea4\u53c9\u7f16\u8bd1\u5c24\u5176\u9700\u8981\u6ce8\u610f\u5f00\u542f\u7ba1\u7406\u5458\u6743\u9650\u3002"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>d});var l=r(67294);const s={},t=l.createContext(s);function d(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);