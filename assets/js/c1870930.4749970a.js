"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4715],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(7462),i=(n(7294),n(3905));const o={title:"Cloud-Edge-Device DevOps Collaboration"},a=void 0,s={unversionedId:"best-practices/practices-1",id:"version-v0.7.0/best-practices/practices-1",title:"Cloud-Edge-Device DevOps Collaboration",description:"Background",source:"@site/versioned_docs/version-v0.7.0/best-practices/practices-1.md",sourceDirName:"best-practices",slug:"/best-practices/practices-1",permalink:"/docs/v0.7.0/best-practices/practices-1",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/best-practices/practices-1.md",tags:[],version:"v0.7.0",lastUpdatedBy:"frank-huangyuqi",lastUpdatedAt:1657019976,formattedLastUpdatedAt:"Jul 5, 2022",frontMatter:{title:"Cloud-Edge-Device DevOps Collaboration"},sidebar:"version-v0.7.0/docs",previous:{title:"EdgeX Foundry",permalink:"/docs/v0.7.0/user-manuals/iot/edgex-foundry"},next:{title:"How to Build and Test",permalink:"/docs/v0.7.0/developer-manuals/how-to-build-and-test"}},c={},l=[{value:"Background",id:"background",level:2},{value:"cloud edge coordination",id:"cloud-edge-coordination",level:2},{value:"Business value",id:"business-value",level:2}],d={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"Express delivery industry is a typical entity industry, providing point-to-point parcel transport services, derived  the acquisition, transfer and delivery links. With the positive economic development of the society, the volume of the express industry is growing. Shentong Express daily transfers 30 to 50 million packages, with an average daily track of about 500 million, nearly 1 billion during the promotion period. Automated sorting daily delivers more than 1 billion pieces of data, cross with hundreds of sets, the growth rate is estimated to be more than 20% per year, the future express must be digital system express, involving a large number of automation, IoT and human-machine assistance system interaction."),(0,i.kt)("p",null,"In the traditional cloud-end architecture, the transfer link has a strong edge characteristics. The current situation of traditional cloud - to - end architecture cannot meet the requirements of actual side - end scenarios. And these problems are the common problems of each domain. A hybrid cloud architecture with high availability, high stability and scalability for mass device access is urgently needed."),(0,i.kt)("p",null,"In the context of the rapid development and application of IoT and edge technology, the Paas platform on pure cloud is difficult to meet the strong demands of high response, low delay and large connection of the edge. Then, we adopt OpenYurt platform as the core of the edge architecture of STO Express IoT cloud, carrying edge resource hosting and application management. "),(0,i.kt)("h2",{id:"cloud-edge-coordination"},"cloud edge coordination"),(0,i.kt)("p",null,"Where is the cloud side synergy capability of STO Express IoT cloud side architecture, and what are the advantages? The cloud-side collaboration architecture mainly uses OpenYurt to provide containerized isolation environment. Master clusters are uniformly deployed in the public cloud and Nodes are distributed to the edge (distributed in transport centers across the country). The edge development of STO Express is completely consistent with the cloud R&D system. Edge containers are generated with one click when releasing edge applications, and the PaaS platform provides unified deployment, log monitoring and other cloud management and control capabilities."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"flannel-architecture",src:n(6066).Z,width:"1126",height:"1078"})),(0,i.kt)("p",null,"On top of this, STO Express developed edge Paas platform for DevOps. In terms of edge resource control, STO Express divides four available areas for deployment according to the distribution of centers and real-time RT statistics, namely east China, southwest China, North China and South China. Developers can configure alarms and implement second-level service monitoring to quickly discover and handle faults."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"architecture",src:n(8516).Z,width:"1103",height:"868"})),(0,i.kt)("h2",{id:"business-value"},"Business value"),(0,i.kt)("p",null,"STO Express IoT cloud side architecture is the first implementation scheme in the express industry about cloud native architecture. It provides a research and development model that is completely consistent with the on-cloud  development system. With OpenYurt as the technical base, it realizes the unified management of on-cloud and off-cloud resources and lays a solid hybrid cloud foundation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"High availability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multiple environment isolation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The value of cloud edge coordination architecture:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Stability increased from 99.9% to 99.95%."),(0,i.kt)("li",{parentName:"ul"},"Reduce waste of resources."),(0,i.kt)("li",{parentName:"ul"},"Consistent with cloud application development efficiency and experience.")))))}u.isMDXComponent=!0},8516:function(e,t,n){t.Z=n.p+"assets/images/architecture-7286811f9736df3e95245cae161fbd50.png"},6066:function(e,t,n){t.Z=n.p+"assets/images/flannel-architecture-8ff678588806991eb06a5367037069e8.png"}}]);