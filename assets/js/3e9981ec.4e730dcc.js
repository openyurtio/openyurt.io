"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[8119],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},177:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],a={title:"Resource and System Requirements"},u=void 0,c={unversionedId:"usage-conditions/resource-and-system-requirements",id:"version-v0.7.0/usage-conditions/resource-and-system-requirements",isDocsHomePage:!1,title:"Resource and System Requirements",description:"Resource Requirements",source:"@site/versioned_docs/version-v0.7.0/usage-conditions/resource-and-system-requirements.md",sourceDirName:"usage-conditions",slug:"/usage-conditions/resource-and-system-requirements",permalink:"/docs/usage-conditions/resource-and-system-requirements",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/usage-conditions/resource-and-system-requirements.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1653913201,formattedLastUpdatedAt:"5/30/2022",frontMatter:{title:"Resource and System Requirements"},sidebar:"version-v0.7.0/docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Summary",permalink:"/docs/installation/summary"}},l=[{value:"Resource Requirements",id:"resource-requirements",children:[],level:2},{value:"Tested Platforms",id:"tested-platforms",children:[],level:2}],m={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"resource-requirements"},"Resource Requirements"),(0,i.kt)("p",null,"We strongly recommend at least 2 CPUs and 4 GB RAM per worker node in production environment.\nAny less in development environment is ok but will leave little room for your workloads."),(0,i.kt)("h2",{id:"tested-platforms"},"Tested Platforms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CentOS 7.4+ (amd64 and arm64)"),(0,i.kt)("li",{parentName:"ul"},"Ubuntu 18.04 LTS+ (amd64 and arm64)"),(0,i.kt)("li",{parentName:"ul"},"Fedora 31 (amd64)"),(0,i.kt)("li",{parentName:"ul"},"Debian 9.1 (amd64)")),(0,i.kt)("p",null,"Other platforms may work well but are not tested in our production environment. Supplements to the list are welcome."))}d.isMDXComponent=!0}}]);