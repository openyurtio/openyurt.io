"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1842],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85577:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(87462),o=(r(67294),r(3905));const i={title:"Resource and System Requirements"},a=void 0,s={unversionedId:"usage-conditions/resource-and-system-requirements",id:"usage-conditions/resource-and-system-requirements",title:"Resource and System Requirements",description:"Resource Requirements",source:"@site/docs/usage-conditions/resource-and-system-requirements.md",sourceDirName:"usage-conditions",slug:"/usage-conditions/resource-and-system-requirements",permalink:"/docs/next/usage-conditions/resource-and-system-requirements",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/usage-conditions/resource-and-system-requirements.md",tags:[],version:"current",lastUpdatedBy:"lonelyCZ",lastUpdatedAt:1653028042,formattedLastUpdatedAt:"May 20, 2022",frontMatter:{title:"Resource and System Requirements"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Summary",permalink:"/docs/next/installation/summary"}},u={},c=[{value:"Resource Requirements",id:"resource-requirements",level:2},{value:"Tested Platforms",id:"tested-platforms",level:2}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resource-requirements"},"Resource Requirements"),(0,o.kt)("p",null,"We strongly recommend at least 2 CPUs and 4 GB RAM per worker node in production environment.\nAny less in development environment is ok but will leave little room for your workloads."),(0,o.kt)("h2",{id:"tested-platforms"},"Tested Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CentOS 7.4+ (amd64 and arm64)"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 18.04 LTS+ (amd64 and arm64)"),(0,o.kt)("li",{parentName:"ul"},"Fedora 31 (amd64)"),(0,o.kt)("li",{parentName:"ul"},"Debian 9.1 (amd64)")),(0,o.kt)("p",null,"Other platforms may work well but are not tested in our production environment. Supplements to the list are welcome."))}m.isMDXComponent=!0}}]);