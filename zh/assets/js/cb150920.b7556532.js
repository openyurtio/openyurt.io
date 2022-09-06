"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[565],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var a=n(7462),r=(n(7294),n(3905));const l={title:"CI Workflow"},i=void 0,o={unversionedId:"developer-manuals/ci-workflow",id:"version-v1.0/developer-manuals/ci-workflow",title:"CI Workflow",description:"\u672c\u6587\u4f1a\u4ecb\u7ecdOpenYurt\u793e\u533a\u5728\u5408\u5165\u4ee3\u7801\u524d\u7684CI Workflow\uff0c\u4e86\u89e3\u8fd9\u4e9b\u77e5\u8bc6\u4f1a\u6709\u52a9\u4e8ePull Request\u7684\u987a\u5229\u5408\u5165\u3002OpenYurt\u901a\u8fc7Github Actions\u6765\u6784\u5efaCI Workflow\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u89c1\u5b98\u65b9\u6587\u6863\u3002OpenYurt\u7684Github Actions\u914d\u7f6e\u5728ci.yaml\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/developer-manuals/ci-workflow.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/ci-workflow",permalink:"/zh/docs/developer-manuals/ci-workflow",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/ci-workflow.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"2022\u5e749\u67086\u65e5",frontMatter:{title:"CI Workflow"},sidebar:"version-v1.0/docs",previous:{title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4",permalink:"/zh/docs/developer-manuals/local-up-openyurt"},next:{title:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e",permalink:"/zh/docs/developer-manuals/how-to-contribute"}},p={},u=[{value:"check-license",id:"check-license",level:2},{value:"golangci-lint",id:"golangci-lint",level:2},{value:"markdownlint-misspell-shellcheck",id:"markdownlint-misspell-shellcheck",level:2},{value:"unit-tests",id:"unit-tests",level:2},{value:"build-binaries",id:"build-binaries",level:2},{value:"e2e-tests",id:"e2e-tests",level:2}],s={toc:u};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4f1a\u4ecb\u7ecdOpenYurt\u793e\u533a\u5728\u5408\u5165\u4ee3\u7801\u524d\u7684CI Workflow\uff0c\u4e86\u89e3\u8fd9\u4e9b\u77e5\u8bc6\u4f1a\u6709\u52a9\u4e8ePull Request\u7684\u987a\u5229\u5408\u5165\u3002OpenYurt\u901a\u8fc7Github Actions\u6765\u6784\u5efaCI Workflow\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/actionsh"},"\u5b98\u65b9\u6587\u6863"),"\u3002OpenYurt\u7684Github Actions\u914d\u7f6e\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/.github/workflows/ci.yaml"},"ci.yaml"),"\u4e2d\u3002"),(0,r.kt)("p",null,"OpenYurt\u76ee\u524d\u7684CI WorkFlow\u4e3b\u8981\u7531\u4ee5\u4e0b\u90e8\u5206\u6784\u6210\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"check-license"),(0,r.kt)("li",{parentName:"ol"},"golangci-lint"),(0,r.kt)("li",{parentName:"ol"},"markdownlint-misspell-shellcheck"),(0,r.kt)("li",{parentName:"ol"},"unit-tests"),(0,r.kt)("li",{parentName:"ol"},"build-binaries"),(0,r.kt)("li",{parentName:"ol"},"e2e-tests")),(0,r.kt)("p",null,"\u5411OpenYurt\u4ed3\u5e93\u63d0\u4ea4Pull Requst\u540e\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1OpenYurt\u7684Github Actions\u8fd0\u884c\u4e0a\u8ff0\u68c0\u67e5\u3002\u4e00\u4e2a\u51c6\u5907\u597d\u5408\u5165\u7684Pull Request\u9700\u8981\u901a\u8fc7\u6240\u6709\u516d\u4e2a\u68c0\u67e5\uff0c\u901a\u8fc7\u68c0\u67e5\u7684PR\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pr-passed-ci",src:n(4918).Z,width:"1257",height:"672"})),(0,r.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u4e86\u672a\u901a\u8fc7\u7684\u68c0\u67e5\uff0c\u53ef\u4ee5\u901a\u8fc7\u53f3\u65b9\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Details"),"\u627e\u5230\u68c0\u67e5\u7684\u62a5\u9519\u65e5\u5fd7\u6765\u5b9a\u4f4d\u95ee\u9898\u3002\u672c\u6587\u4f1a\u7ed9\u51fa\u5404\u4e2a\u68c0\u67e5\u7684\u5185\u5bb9\u8bf4\u660e\uff0c\u4f7f\u4f60\u80fd\u591f\u5bf9\u5176\u6709\u5927\u81f4\u7684\u6982\u5ff5\uff0c\u4ee5\u4fbf\u4e8e\u7406\u89e3\u95ee\u9898\u4ea7\u751f\u7684\u539f\u56e0\u3002\u4e0a\u8ff0\u68c0\u67e5\u90fd\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c\u3002"),(0,r.kt)("h2",{id:"check-license"},"check-license"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"check-license"),"\u4f1a\u68c0\u67e5OpenYurt\u76ee\u5f55\u4e0b\u6240\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".go"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},".sh"),"\u6587\u4ef6\u662f\u5426\u5e26\u6709license\u58f0\u660e\u3002 \u5b83\u4f1a\u6267\u884c\u811a\u672c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/check_license.sh"},"check_license.sh"),"\u6765\u5b8c\u6210\u4e0a\u8ff0\u68c0\u67e5\uff0c\u5982\u679c\u53d1\u73b0\u6709\u6587\u4ef6\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u4f1a\u8f93\u51fa\u76f8\u5173\u7684\u6587\u4ef6\u8def\u5f84\u3002  "),(0,r.kt)("p",null,"license\u662f\u6307\u6e90\u7801\u5f00\u5934\u6ce8\u91ca\u4e2d\u7684\u4e00\u6bb5\u8bb8\u53ef\u8bc1\u58f0\u660e\uff0c\u4e0b\u9762\u662fOpenYurt\u4f7f\u7528\u7684license\uff0c\u5176\u4e2d\u7684\u5e74\u4efd\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u7075\u6d3b\u53d8\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Copyright 2021 The OpenYurt Authors.\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n')),(0,r.kt)("h2",{id:"golangci-lint"},"golangci-lint"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"golangci-lint"),"\u4f1a\u68c0\u67e5go\u6e90\u7801\u662f\u5426\u7b26\u5408\u89c4\u8303\uff0c\u5b83\u4f7f\u7528Go\u7684\u9759\u6001\u4ee3\u7801\u68c0\u67e5\u5de5\u5177",(0,r.kt)("inlineCode",{parentName:"p"},"golangci-lint"),"\u5e76\u914d\u7f6e\u5176\u4e2d\u7684\u63d2\u4ef6\u6765\u5bf9\u4ee3\u7801\u8fdb\u884c\u68c0\u67e5\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u53c2\u770b",(0,r.kt)("a",{parentName:"p",href:"https://golangci-lint.run/"},"\u5b98\u65b9\u6587\u6863"),"\uff0c\u672c\u8282\u4f1a\u4ecb\u7ecdOpenYurt\u4e2d\u4f7f\u7528\u5230\u7684\u4e00\u4e9b\u68c0\u67e5\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"OpenYurt\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"golangci-lint"),"\u914d\u7f6e\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/.golangci.yaml"},".golangci.yaml"),"\u6587\u4ef6\u4e2d\uff0c\u542f\u7528\u4e86\u5982\u4e0b\u63d2\u4ef6\uff0c\n\u8be6\u7ec6\u7684\u68c0\u67e5\u5185\u5bb9\u89c1\u5404\u63d2\u4ef6\u6587\u6863\u6216\u4ed3\u5e93\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/remyoudompheng/go-misc/tree/master/deadcode"},"deadcode")),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u662f\u5426\u5b58\u5728\u6ca1\u6709\u4f7f\u7528\u7684\u4ee3\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/cmd/gofmt"},"gofmt")),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u4ee3\u7801\u662f\u5426\u7b26\u5408gofmt\u7684\u6807\u51c6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/golang.org/x/tools/cmd/goimports?utm_source=godoc"},"goimports")),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u4ee3\u7801\u7684imports\u662f\u5426\u5b8c\u5907")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/daixiang0/gci"},"gci")),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u4ee3\u7801\u7684imports\u5148\u540e\u987a\u5e8f\u662f\u5426\u4e3a\u6807\u51c6\u5e93\u3001\u7b2c\u4e09\u65b9\u5e93\u3001OpenYurt\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/gordonklaus/ineffassign"},"ineffassign")),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u4ee3\u7801\u4e2d\u662f\u5426\u6709\u65e0\u6548\u7684\u8d4b\u503c\uff0c\u5373\u8d4b\u503c\u540e\u53d8\u91cf\u672a\u88ab\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/client9/misspell"},"misspell")),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u6ce8\u91ca\u4e2d\u7684\u5355\u8bcd\u62fc\u5199\u662f\u5426\u9519\u8bef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/cmd/vet"},"vet")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u68c0\u67e5\u4e00\u4e9b\u7f16\u8bd1\u5668\u53d1\u73b0\u4e0d\u4e86\u7684\u9519\u8bef\uff0c\u5982Printf\u4e2d\u7684\u683c\u5f0f\u5b57\u7b26\u4e32\u548c\u53c2\u6570\u7684\u4e2a\u6570\u662f\u5426\u5339\u914d")))),(0,r.kt)("p",null,"\u672c\u5730\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"make lint"),"\u6765\u8fd0\u884c\u68c0\u67e5\uff0c\u8be5\u547d\u4ee4\u4f1a\u81ea\u52a8\u5b89\u88c5\u5e76\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"golangci-lint"),"\u3002\u76f8\u6bd4\u4e8eGithub Actions\u4e2d\u7684\u65e5\u5fd7\uff0c\u672c\u5730\u8fd0\u884c\u80fd\u83b7\u53d6\u66f4\u591a\u7684\u4fe1\u606f\uff0c\u80fd\u7cbe\u786e\u5230\u95ee\u9898\u7684\u884c\u6570\u5e76\u7ed9\u51fa\u4ea7\u751f\u95ee\u9898\u7684\u63d2\u4ef6\u540d\u79f0\uff0c\u6709\u5229\u4e8e\u95ee\u9898\u7684\u89e3\u51b3\u3002\u56e0\u6b64\uff0c\u8fd9\u91cc\u63a8\u8350\u5728\u63d0\u4ea4Pull Request\u524d\u5148\u5728\u672c\u5730\u8fd0\u884c\u4e00\u904d",(0,r.kt)("inlineCode",{parentName:"p"},"make lint"),"\u3002"),(0,r.kt)("h2",{id:"markdownlint-misspell-shellcheck"},"markdownlint-misspell-shellcheck"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pouchcontainer/pouchlinter"},"pouchlinter"),"\u7684\u955c\u50cf\uff0c\u8fd9\u4e2a\u955c\u50cf\u91cc\u6253\u5305\u4e86\u4e00\u4e9b\u5e38\u7528\u7684lint\u5de5\u5177\uff0c\u5305\u62ec\u8fd9\u91cc\u4f1a\u4f7f\u7528\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/client9/misspell"},"misspell"),"\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/markdownlint/markdownlint"},"markdownlint"),"\u3002misspell\u4f1a\u68c0\u67e5\u6587\u4ef6\u4e2d\u5355\u8bcd\u7684\u62fc\u5199\u662f\u5426\u6b63\u786e\uff0c\u5982\u679c\u627e\u5230\u4e0d\u6b63\u786e\u7684\u4f1a\u7ed9\u51fa\u5177\u4f53\u7684\u4f4d\u7f6e\uff1bmarkdownlint\u4f1a\u68c0\u67e5markdown\u6587\u4ef6\u7684\u683c\u5f0f\u662f\u5426\u7b26\u5408\u6307\u5b9a\u7684markdown\u89c4\u8303\uff0c\u5177\u4f53\u7684\u89c4\u8303\u5b9a\u4e49\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md"},"\u6587\u6863"),"\uff0c\u5728\u8fd9\u91cc\u9664\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"MD010"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD013"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD022"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD024"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD029"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD031"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD032"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD033"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD034"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MD036"),"\u4ee5\u5916\u7684\u89c4\u8303\u90fd\u4f1a\u68c0\u67e5\u3002 "),(0,r.kt)("h2",{id:"unit-tests"},"unit-tests"),(0,r.kt)("p",null,"\u5355\u5143\u6d4b\u8bd5\u4f1a\u6267\u884c\u540d\u5b57\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"_test.go"),"\u540e\u7f00\u7684\u6587\u4ef6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u901a\u5e38\u5305\u542b\u4e86\u5bf9\u67d0\u4e2a\u51fd\u6570\u903b\u8f91\u3001\u6a21\u5757\u529f\u80fd\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002\u8fd9\u91cc\u4f1a\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u6267\u884c\u5355\u5143\u6d4b\u8bd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,r.kt)("h2",{id:"build-binaries"},"build-binaries"),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u4f1a\u5c1d\u8bd5\u6784\u5efaOpenYurt\u4ed3\u5e93\u7684\u5404\u4e2a\u7ec4\u4ef6\u5728linux/amd64\u5e73\u53f0\u4e0a\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\uff08\u56e0\u4e3aGithub Actions\u8fd0\u884c\u7684\u5e73\u53f0\u662flinux/amd64\uff09\u3002\u6784\u5efa\u7684\u7ec4\u4ef6\u6709\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"yurtctl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-node-servant"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-hub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-controller-manager"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent"),"\u3002 \u8fd9\u91cc\u4f1a\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u7f16\u8bd1\u5404\u4e2a\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make build\n")),(0,r.kt)("h2",{id:"e2e-tests"},"e2e-tests"),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u4f1a\u7528kind\u6784\u5efa\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u8282\u70b9\u7684OpenYurt\u96c6\u7fa4\uff0c\u7136\u540e\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u76ee\u5f55\u4e0b\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002OpenYurt\u4e2d\u4e5f\u7ed9\u51fa\u4e86\u5728\u672c\u5730\u8fd0\u884c\u8fd9\u4e9be2e\u6d4b\u8bd5\u7528\u4f8b\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u53c2\u770b\u201c\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5\u201d\u4e2d\u7684",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/developer-manuals/how-to-build-and-test#e2e%E6%B5%8B%E8%AF%95"},"e2e\u6d4b\u8bd5"),"\u3002\u76ee\u524dGithub Actions\u4e2d\u8fd0\u884c\u7684e2e\u6d4b\u8bd5\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cluster_info"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c1d\u8bd5\u83b7\u53d6\u4e00\u4e9b\u96c6\u7fa4\u4fe1\u606f\uff0c\u5305\u62ecpod\u6570\u91cf\uff0cnamespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pod_operate_test"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c1d\u8bd5\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u521b\u5efa\u3001\u5220\u9664pod")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pod_operate_test_on_edge"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c1d\u8bd5\u5728\u8fb9\u7f18\u8282\u70b9\u7684pod\u4e2d\u6267\u884c\u547d\u4ee4")))))}c.isMDXComponent=!0},4918:function(e,t,n){t.Z=n.p+"assets/images/pr-passed-ci-78d99539a449c6dd4527a7263bd4cdf7.png"}}]);