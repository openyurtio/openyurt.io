"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Resource and System Requirements"},s=void 0,i={unversionedId:"usage-conditions/resource-and-system-requirements",id:"usage-conditions/resource-and-system-requirements",title:"Resource and System Requirements",description:"Resource Requirements",source:"@site/docs/usage-conditions/resource-and-system-requirements.md",sourceDirName:"usage-conditions",slug:"/usage-conditions/resource-and-system-requirements",permalink:"/docs/next/usage-conditions/resource-and-system-requirements",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/usage-conditions/resource-and-system-requirements.md",tags:[],version:"current",lastUpdatedBy:"wesleysu",lastUpdatedAt:1683344321,formattedLastUpdatedAt:"May 6, 2023",frontMatter:{title:"Resource and System Requirements"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Summary",permalink:"/docs/next/installation/summary"}},u={},l=[{value:"Resource Requirements",id:"resource-requirements",level:2},{value:"Tested Platforms",id:"tested-platforms",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resource-requirements"},"Resource Requirements"),(0,o.kt)("p",null,"We strongly recommend at least 2 CPUs and 4 GB RAM per worker node in production environment.\nAny less in development environment is ok but will leave little room for your workloads."),(0,o.kt)("h2",{id:"tested-platforms"},"Tested Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CentOS 7.4+ (amd64 and arm64)"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 18.04 LTS+ (amd64 and arm64)"),(0,o.kt)("li",{parentName:"ul"},"Fedora 31 (amd64)"),(0,o.kt)("li",{parentName:"ul"},"Debian 9.1 (amd64)"),(0,o.kt)("li",{parentName:"ul"},"Raspbian\u3001Raspberry Pi OS, kernel version 4.19+ (arm64)")),(0,o.kt)("p",null,"Other platforms may work well but are not tested in our production environment. Supplements to the list are welcome."))}m.isMDXComponent=!0}}]);