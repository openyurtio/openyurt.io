"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5029],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},61674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return i}});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},o=void 0,u={unversionedId:"developer-manuals/how-to-build-and-test",id:"version-v0.6.0/developer-manuals/how-to-build-and-test",title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5",description:"OpenYurt\u4e3b\u4ed3\u5e93\uff08openyurtio/openyurt\uff09\u4e2d\u76ee\u524d(v0.5.0, commit: ef26d5c6)\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/developer-manuals/how-to-build-and-test.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-build-and-test",permalink:"/zh/docs/v0.6.0/developer-manuals/how-to-build-and-test",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-build-and-test.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Congrool",lastUpdatedAt:1643526184,formattedLastUpdatedAt:"2022\u5e741\u670830\u65e5",frontMatter:{title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5"},sidebar:"version-v0.6.0/docs",previous:{title:"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c",permalink:"/zh/docs/v0.6.0/best-practices/practices-1"},next:{title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4",permalink:"/zh/docs/v0.6.0/developer-manuals/local-up-openyurt"}},p={},i=[{value:"\u5982\u4f55\u6784\u5efa",id:"\u5982\u4f55\u6784\u5efa",level:2},{value:"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1",id:"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1",level:3},{value:"\u4ea4\u53c9\u7f16\u8bd1",id:"\u4ea4\u53c9\u7f16\u8bd1",level:3},{value:"Mac",id:"mac",level:4},{value:"Windows",id:"windows",level:4},{value:"\u624b\u52a8\u6253\u5305\u955c\u50cf",id:"\u624b\u52a8\u6253\u5305\u955c\u50cf",level:3},{value:"yurtctl\uff08yurt-servant\uff09 dockerfile",id:"yurtctlyurt-servant-dockerfile",level:4},{value:"yurt-node-servant dockerfile",id:"yurt-node-servant-dockerfile",level:4},{value:"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile",id:"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile",level:4},{value:"\u5982\u4f55\u6d4b\u8bd5",id:"\u5982\u4f55\u6d4b\u8bd5",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"e2e\u6d4b\u8bd5",id:"e2e\u6d4b\u8bd5",level:3},{value:"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5",id:"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenYurt\u4e3b\u4ed3\u5e93\uff08",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt"},"openyurtio/openyurt"),"\uff09\u4e2d\u76ee\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"(v0.5.0, commit: ef26d5c6)"),"\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"yurthub"),(0,a.kt)("li",{parentName:"ol"},"yurt-controller-manager"),(0,a.kt)("li",{parentName:"ol"},"yurt-tunnel-server"),(0,a.kt)("li",{parentName:"ol"},"yurt-tunnel-agent"),(0,a.kt)("li",{parentName:"ol"},"yurtctl"),(0,a.kt)("li",{parentName:"ol"},"yurt-node-servant  ")),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5728\u5b8c\u6210\u5bf9\u4e0a\u8ff0\u7ec4\u4ef6\u7684\u5f00\u53d1\u540e\uff0c\u5982\u4f55\u8fdb\u884c\u7f16\u8bd1\u6e90\u7801\u3001\u6253\u5305\u955c\u50cf\u3001\u8fd0\u884c\u7ec4\u4ef6\u548c\u6d4b\u8bd5\u9a8c\u8bc1\u7b49\u5de5\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u6784\u5efa"},"\u5982\u4f55\u6784\u5efa"),(0,a.kt)("p",null,"OpenYurt\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/Makefile"},"Makefile"),"\u4e2d\u63d0\u4f9b\u4e86\u591a\u79cd\u6784\u5efa\u65b9\u5f0f\u3002\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"make release"),"\u662f\u6700\u4fbf\u6377\u7684\u6784\u5efa\u547d\u4ee4\uff0c\u5305\u62ec\u7f16\u8bd1\u548c\u6253\u5305\u955c\u50cf\u7b49\u6b65\u9aa4\uff0c\u53ef\u4ee5\u8986\u76d6\u7edd\u5927\u591a\u6570\u573a\u666f\u3002\u5176\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'make release WHAT="${components[@]}" ARCH="${archs[@]}" REGION="${your_region}"\n')),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"WHAT"),"\u8868\u793a\u9700\u8981\u6784\u5efa\u7684\u7ec4\u4ef6\uff08\u540d\u79f0\u89c1\u6587\u7ae0\u5f00\u5934\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ARCH"),"\u8868\u793a\u7ec4\u4ef6\u8fd0\u884c\u7684\u76ee\u6807\u67b6\u6784\uff0c\u76ee\u524d\u652f\u6301amd64, arm\u548carm64\u4e09\u79cd\u67b6\u6784\u3002\u8fd9\u4e24\u4e2a\u53c2\u6570\u80fd\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u5165\uff0c\u6765\u8fdb\u884c\u4e0d\u540c\u7ec4\u5408\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"REGION"),'\u53c2\u6570\u5f71\u54cd\u7f16\u8bd1\u65f6\u9009\u7528\u7684GOPROXY\uff0c\u76ee\u524d\u652f\u6301"cn","us"\u4e24\u79cd\u3002cn\u8868\u793a\u4f7f\u7528',(0,a.kt)("inlineCode",{parentName:"p"},"GOPROXY=https://goproxy.cn"),"\uff0cus\u8868\u793a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"GOPROXY=https://proxy.golang.org"),"\u3002\u9ed8\u8ba4\u503c\u662fus\uff0c\u56e0\u6b64\u5728\u56fd\u5185\u7684\u7528\u6237\u5efa\u8bae\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"REGION=cn"),"\u6765\u4fdd\u8bc1\u6784\u5efa\u8fc7\u7a0b\u6b63\u786e\u8fdb\u884c\u3002"),(0,a.kt)("p",null,"\u7528\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'make release WHAT="yurtctl yurthub" ARCH="arm64 amd64" REGION=cn\n')),(0,a.kt)("p",null,"\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"_output"),"\u76ee\u5f55\u4e0b\u627e\u5230\u955c\u50cf\u548c\u5bf9\u5e94\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"dockerbuild"),"\u76ee\u5f55\u4e0b\u53ef\u4ee5\u627e\u5230\u6784\u5efa\u955c\u50cf\u7684dockerfile\uff0c\u540c\u65f6\u53ef\u4ee5\u770b\u5230\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"make release"),"\u6784\u5efa\u51fa\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u955c\u50cf\u90fd\u662f\u57fa\u4e8elinux\u5e73\u53f0\u7684\u3002\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"make relase"),"\u547d\u4ee4\u4e2d\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5e73\u53f0\u662f\u76ee\u524d\u662f\u4e0d\u80fd\u6539\u53d8\u7684\uff0c\u5982\u679c\u6709\u76f8\u5173\u9700\u6c42\u53ef\u4ee5\u7528\u4e0b\u8ff0\u7684\u5176\u4ed6\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"OpenYurt\u7684Makefile\u4e2d\u8fd8\u63d0\u4f9b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"make build"),"\u547d\u4ee4\uff0c\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b8c\u6210\u5bf9\u5404\u4e2a\u7ec4\u4ef6\u7684\u7f16\u8bd1\uff0c\u540c\u65f6\u8be5\u547d\u4ee4\u53ef\u4ee5\u6307\u5b9a\u7f16\u8bd1\u7684\u76ee\u6807\u5e73\u53f0\uff08\u5305\u62ec\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\uff09\u3002\u4e0b\u9762\u4ee5\u7f16\u8bd1yurtctl\u4e3a\u4f8b\uff0c\u89e3\u91ca",(0,a.kt)("inlineCode",{parentName:"p"},"make build"),"\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u5176\u4ed6\u7ec4\u4ef6\u7c7b\u4f3c\u3002"),(0,a.kt)("h3",{id:"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1"},"\u672c\u5730\u5e73\u53f0\u7f16\u8bd1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make build WHAT=yurtctl\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u6839\u636e\u672c\u5730\u5e73\u53f0\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7f16\u8bd1yurtctl\uff0c\u5e76\u628a\u7f16\u8bd1\u51fa\u6765\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728_output\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u4ea4\u53c9\u7f16\u8bd1"},"\u4ea4\u53c9\u7f16\u8bd1"),(0,a.kt)("h4",{id:"mac"},"Mac"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtctl\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u8be5\u547d\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u7f16\u8bd1\u80fd\u5728\u7279\u5b9a\u5e73\u53f0\u8fd0\u884c\u7684yurtctl\uff0c\u8fd9\u91cc\u6700\u597d\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"p"},"CGO_ENABLED=0"),"\u6765\u907f\u514d\u4e00\u4e9b\u517c\u5bb9\u4e0a\u7684\u95ee\u9898\u3002\u901a\u8fc7\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5728Mac\u4e0a\u7f16\u8bd1\u4e0d\u540c\u5e73\u53f0\u7684yurtctl."),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("p",null,"\u7531\u4e8e\u5728Windows\u4e0a\u901a\u5e38\u6ca1\u6709make\u547d\u4ee4\uff08\u5982\u679c\u4f60\u6ca1\u6709\u7528Cygwin\u7684\u8bdd\uff09\uff0c\u9700\u8981\u81ea\u5df1\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"go build"),"\uff0cpowershell\u4e2d\u6267\u884c\u65b9\u6cd5\u5982\u4e0b\uff08\u4ee5\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c\uff09\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,a.kt)("br",{parentName:"li"}),"\u5728\u8fd0\u884c\u524d\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"li"},"target_os"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"target_arch"),"\uff0c\u8bbe\u4e3a\u9700\u8981\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$Env:GOOS = $Env:target_os\n$Env:GOARCH = $Env:target_arch\n$Env:CGO_ENABLED = 0\n$Env:GOLDFLAGS = \"-s -w \n-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt\n-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)\n-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')\"\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528go build\u8fdb\u884c\u7f16\u8bd1",(0,a.kt)("br",{parentName:"li"}),"\u8fd0\u884cgo build\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff0c\u8fd9\u91cc\u9700\u8981\u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"-ldflags=$Env:GOLDFLAGS"),"\u9009\u9879\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7-o\u6765\u8c03\u6574\u7f16\u8bd1\u597d\u7684yurtctl\u7684\u4fdd\u5b58\u4f4d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"go build -ldflags=$Env:GOLDFLAGS cmd/yurtctl/yurtctl.go\n")),(0,a.kt)("h3",{id:"\u624b\u52a8\u6253\u5305\u955c\u50cf"},"\u624b\u52a8\u6253\u5305\u955c\u50cf"),(0,a.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u5404\u4e2a\u7ec4\u4ef6\u7684dockerfile\uff0c\u4fbf\u4e8e\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker build"),"\u547d\u4ee4\u6765\u624b\u52a8\u6253\u5305\u7ec4\u4ef6\u955c\u50cf\uff0c\u4e0b\u9762\u662fyurtctl\u548cyurt-node-servant\u7684\u67b6\u6784\u4e0e\u57fa\u7840\u955c\u50cf\u4e4b\u95f4\u7684\u5173\u7cfb\u8868\u3002  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u67b6\u6784"),(0,a.kt)("th",{parentName:"tr",align:null},"\u57fa\u7840\u955c\u50cf"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"amd64"),(0,a.kt)("td",{parentName:"tr",align:null},"amd64/alpine:3.9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"arm64"),(0,a.kt)("td",{parentName:"tr",align:null},"arm64v8/alpine:3.9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"arm"),(0,a.kt)("td",{parentName:"tr",align:null},"arm32v7/alpine:3.9")))),(0,a.kt)("p",null,"\u4ee5\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"baseimage"),"\u4ee3\u6307\u57fa\u7840\u955c\u50cf"),(0,a.kt)("h4",{id:"yurtctlyurt-servant-dockerfile"},"yurtctl\uff08yurt-servant\uff09 dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ${baseimage}\nADD yurtctl /usr/local/bin/yurtctl\n")),(0,a.kt)("h4",{id:"yurt-node-servant-dockerfile"},"yurt-node-servant dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ${baseimage}\nADD entry.sh /usr/local/bin/entry.sh\nRUN chmod +x /usr/local/bin/entry.sh\nADD yurt-node-servant /usr/local/bin/node-servant\n")),(0,a.kt)("h4",{id:"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile"},"\u5176\u4ed6\u7ec4\u4ef6\u7684dockerfile"),(0,a.kt)("p",null,"\u5176\u4ed6\u7ec4\u4ef6\u7684\u57fa\u7840\u955c\u50cf\u548c\u4e0a\u8ff0\u4e24\u4e2a\u4e0d\u540c\u3002\u5176\u4e2darch\u4e3a\u67b6\u6784\u540d\u79f0\uff0c\u5305\u62ecamd64\uff0carm\u548carm64\uff1bcomponent\u8868\u793a\u7ec4\u4ef6\u540d\u79f0\uff0c\u5305\u62ecyurthub\uff0cyurt-controller-manager\uff0cyurt-tunnel-server\u548cyurt-tunnel-agent\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM k8s.gcr.io/debian-iptables-${arch}:v11.0.2\nCOPY ${component} /usr/local/bin/${component}\nENTRYPOINT ["/usr/local/bin/${component}"]\n')),(0,a.kt)("h2",{id:"\u5982\u4f55\u6d4b\u8bd5"},"\u5982\u4f55\u6d4b\u8bd5"),(0,a.kt)("p",null,"OpenYurt\u4e2d\u63d0\u4f9b\u7684\u6d4b\u8bd5\u5305\u62ec\u5355\u5143\u6d4b\u8bd5\u548ce2e\u6d4b\u8bd5\u4e24\u79cd\u3002"),(0,a.kt)("h3",{id:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5355\u5143\u6d4b\u8bd5\u4f1a\u6267\u884ccmd\u548cpkg\u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"*_test.go"),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u5b8c\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,a.kt)("h3",{id:"e2e\u6d4b\u8bd5"},"e2e\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u8fd0\u884cOpenYurt\u7684e2e test\u3002\u5728\u793e\u533a\u63d0\u4f9b\u7684\u6d4b\u8bd5\u7528\u4f8b\u4e2d\uff0c\u8282\u70b9\u7684\u81ea\u6cbb\uff08autonomy\uff09\u6d4b\u8bd5\u4ecd\u7136\u5904\u4e8e\u5f00\u53d1\u9636\u6bb5\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u542f\u52a8\u4e86\u4e00\u4e2aOpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u6309\u7167\u8fd9\u8282\u7684\u6b65\u9aa4\u6765\u8fd0\u884ce2e\u6d4b\u8bd5\u3002\u5982\u679c\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u53ef\u4ee5\u901a\u8fc7\u201c\u672c\u5730\u542f\u52a8\u96c6\u7fa4\u201d\u4e2d\u6240\u8ff0\u6b65\u9aa4\uff0c\u5728\u672c\u5730\u5feb\u901f\u542f\u52a8\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u5728\u642d\u5efa\u597dOpenYurt\u96c6\u7fa4\u540e\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884ce2e\u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u7528\u4f8b\u5bf9\u96c6\u7fa4\u8fdb\u884ce2e\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make e2e-tests\n")),(0,a.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u5728_output\u76ee\u5f55\u7684\u76f8\u5e94\u5e73\u53f0\u76ee\u5f55\u4e0b\u751f\u6210e2e\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\uff0c\u5e76\u5229\u7528KUBECONFIG\u73af\u5883\u53d8\u91cf\uff08\u9ed8\u8ba4\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"\uff09\u6307\u660e\u7684kubeconfig\u6587\u4ef6\u8bbf\u95ee\u96c6\u7fa4\uff0c\u8fd0\u884c\u6d4b\u8bd5\u3002\u53ef\u4ee5\u5728stdout\u4e2d\u770b\u5230\u5982\u4e0b\u6d4b\u8bd5\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Ran 5 of 5 Specs in 82.279 seconds\nSUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped\nPASS\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u6307\u5b9a\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\u7684\u884c\u4e3a\uff08\u5982\u8fd0\u884c\u989d\u5916\u7684\u81ea\u6cbb\u6d4b\u8bd5\uff09\uff0c\u53ef\u4ee5\u6309\u7167\u4e0b\u4e00\u8282\u7684\u6b65\u9aa4\u8fdb\u884c\u3002"),(0,a.kt)("h3",{id:"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5"},"\u624b\u52a8\u8fdb\u884ce2e\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u9996\u5148\u6309\u7167\u4e0b\u8ff0\u6b65\u9aa4\u624b\u52a8\u6784\u5efae2e\u6d4b\u8bd5\u5de5\u5177yurt-e2e-test\uff1a"),(0,a.kt)("p",null,"1) \u8fdb\u5165openyurt\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd openyurt\n")),(0,a.kt)("p",null,"2) \u6784\u5efayurt-e2e-test\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ make e2e\n")),(0,a.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u6784\u5efa\u597d\u7684yurt-e2e-test\u8fdb\u884c\u6d4b\u8bd5\u4e86\u3002\n1) \u4e0b\u9762\u7684\u547d\u4ee4\u4f1a\u5728OpenYurt\u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e00\u4e9b\u57fa\u7840\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8df3\u8fc7\u81ea\u6cbb\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./\n")),(0,a.kt)("p",null,"2) \u5982\u679c\u4f60\u60f3\u8fd0\u884c\u5305\u62ec\u81ea\u6cbb\u6d4b\u8bd5\u5728\u5185\u7684\u6240\u6709\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b8c\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./  --enable-yurt-autonomy=true\n")),(0,a.kt)("p",null,"\u76ee\u524d\u7684\u81ea\u6cbb\u6d4b\u8bd5\u9700\u8981\u81ea\u5df1\u91cd\u65b0\u542f\u52a8\u8282\u70b9\uff0cyurt-e2e-test\u4f1a\u7b49\u5f85\u8282\u70b9\u91cd\u542f\u5e76\u68c0\u67e5pod\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"3) \u76ee\u524d\u793e\u533a\u8fd8\u672a\u63d0\u4f9b\u5728\u963f\u91cc\u4e91ECS\u6216ENS\u4e0a\u8fd0\u884c\u81ea\u6cbb\u6d4b\u8bd5\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\u53ef\u4ee5\u5728stdout\u6216yurt-e2e-test-report_01.xml\u6587\u4ef6\uff08\u6240\u5728\u76ee\u5f55\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"--report-dir"),"\u53c2\u6570\u6307\u5b9a\uff09\u4e2d\u67e5\u770b\u3002\u5176\u4e2dyurt-e2e-test\u53ef\u6267\u884c\u6587\u4ef6\u7684\u4f4d\u7f6e\u4f1a\u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7684\u4e0d\u540c\u800c\u4e0d\u540c\uff0c\u53ef\u80fd\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6539\u53d8\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u7f16\u8bd1\u65f6\u51fa\u73b0"go: github.com...unknown revision xxx"',(0,a.kt)("br",{parentName:"p"}),"\n","\u901a\u5e38\u662fgit\u7684\u7248\u672c\u8fc7\u4f4e\u9020\u6210\u7684\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5347\u7ea7git\u7248\u672c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u7f16\u8bd1\u65f6\u51fa\u73b0"unsupported GOOS/GOARCH pair xxx/xxx"',(0,a.kt)("br",{parentName:"p"}),"\n","go\u4e0d\u80fd\u652f\u6301\u6240\u6709\u7684GOOS/GOARCH\u7ec4\u5408\uff0c\u5982go1.17.3\u4e0d\u652f\u6301windows/arm64\u3002\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"go tool dist list"),"\u6765\u67e5\u770b\u652f\u6301\u7684GOOS/GOARCH\u7ec4\u5408\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u8fd0\u884c\u4ea4\u53c9\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u65f6\u51fa\u73b0"cannot execute binary file: Exec format error"',(0,a.kt)("br",{parentName:"p"}),"\n","\u901a\u5e38\u662f\u6ca1\u6709\u6210\u529f\u5b8c\u6210\u4ea4\u53c9\u7f16\u8bd1\uff0c\u5bfc\u81f4\u8fd0\u884c\u5e73\u53f0\u4e0e\u5f53\u524d\u5e73\u53f0\u4e0d\u540c\uff0c\u65e0\u6cd5\u8bc6\u522b\u6587\u4ef6\u683c\u5f0f\u3002\u5728Windows\u4e0a\u8fdb\u884c\u4ea4\u53c9\u7f16\u8bd1\u5c24\u5176\u9700\u8981\u6ce8\u610f\u5f00\u542f\u7ba1\u7406\u5458\u6743\u9650\u3002"))))}d.isMDXComponent=!0}}]);