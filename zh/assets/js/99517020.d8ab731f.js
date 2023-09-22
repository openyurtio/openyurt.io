"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),s=a,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"PlatformAdmin\u7ec4\u4ef6\u5e93"},p=void 0,i={unversionedId:"reference/iot/components",id:"reference/iot/components",title:"PlatformAdmin\u7ec4\u4ef6\u5e93",description:"\u8fd9\u91cc\u662fPlatformAdmin\u7684\u7ec4\u4ef6\u5e93\u5217\u8868\uff0c\u53ea\u8981\u5728PlatformAdmin\u7684spec\u4e2d\u7684components\u5b57\u6bb5\u589e\u52a0\u7ec4\u4ef6\u540d\u5373\u53ef\u90e8\u7f72\u5230\u5bf9\u5e94\u8282\u70b9\u6c60\uff0c\u6bd4\u5982",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/iot/components.md",sourceDirName:"reference/iot",slug:"/reference/iot/components",permalink:"/zh/docs/next/reference/iot/components",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/iot/components.md",tags:[],version:"current",lastUpdatedBy:"chenlong",lastUpdatedAt:1694421390,formattedLastUpdatedAt:"2023\u5e749\u670811\u65e5",frontMatter:{title:"PlatformAdmin\u7ec4\u4ef6\u5e93"},sidebar:"docs",previous:{title:"yurtadm_token",permalink:"/zh/docs/next/reference/yurtadm/yurtadm_token"},next:{title:"yurthub",permalink:"/zh/docs/next/faq/yurthub"}},c={},l=[{value:"\u5fc5\u5907\u7ec4\u4ef6",id:"\u5fc5\u5907\u7ec4\u4ef6",level:2},{value:"\u53ef\u9009\u7ec4\u4ef6",id:"\u53ef\u9009\u7ec4\u4ef6",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u91cc\u662fPlatformAdmin\u7684\u7ec4\u4ef6\u5e93\u5217\u8868\uff0c\u53ea\u8981\u5728PlatformAdmin\u7684spec\u4e2d\u7684components\u5b57\u6bb5\u589e\u52a0\u7ec4\u4ef6\u540d\u5373\u53ef\u90e8\u7f72\u5230\u5bf9\u5e94\u8282\u70b9\u6c60\uff0c\u6bd4\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n")),(0,a.kt)("p",null,"\u540c\u6837\uff0c\u5728components\u4e2d\u79fb\u9664\u6389\u5bf9\u5e94\u7ec4\u4ef6\u540d\u5c31\u53ef\u4ee5\u53d6\u6d88\u5bf9\u5e94\u8282\u70b9\u6c60\u4e2d\u8be5\u7ec4\u4ef6\u7684\u90e8\u7f72\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5177\u4f53\u7684\u6b65\u9aa4\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"strong",href:"/zh/docs/next/user-manuals/iot/edgex-foundry"},"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907"))),(0,a.kt)("h2",{id:"\u5fc5\u5907\u7ec4\u4ef6"},"\u5fc5\u5907\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3aPlatformAdmin\u7684\u5fc5\u5907\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u90e8\u7f72\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u7528\u6237\u65e0\u9700\u586b\u5199")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7ec4\u4ef6\u540d"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-core-command")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-core-consul")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-core-metadata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-redis")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-core-common-config-bootstrapper\uff08\u4ec5minnesota\u7248\u672c\uff09")))),(0,a.kt)("h2",{id:"\u53ef\u9009\u7ec4\u4ef6"},"\u53ef\u9009\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3aPlatformAdmin\u7684\u53ef\u9009\u7ec4\u4ef6\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u9700\u8981\u7528\u6237\u5728components\u5b57\u6bb5\u4e2d\u663e\u5f0f\u6307\u5b9a\u624d\u53ef\u90e8\u7f72")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7ec4\u4ef6\u540d"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"yurt-iot-dock")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-device-rest")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-support-scheduler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-ui-go")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-sys-mgmt-agent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-device-virtual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-core-data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-app-rules-engine")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-kuiper")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"edgex-support-notifications")))),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("p",null,"\u76ee\u524d\u7ec4\u4ef6\u5e93\u4e2d\u7ec4\u4ef6\u5747\u4e3aedgex\u751f\u6001\u76f8\u5173\u7ec4\u4ef6\uff0c\u5404\u7ec4\u4ef6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://docs.edgexfoundry.org/3.0/"},"edgex\u5b98\u65b9\u6587\u6863"),"\u3002"))}m.isMDXComponent=!0}}]);