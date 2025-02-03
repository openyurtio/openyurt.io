"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[69101],{45977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"reference/iot/components","title":"PlatformAdmin Component Library","description":"Here is the component library for PlatformAdmin. You can deploy a component to the corresponding node pool by adding its name to the \\"components\\" field in the spec of PlatformAdmin. For example:","source":"@site/versioned_docs/version-v1.4/reference/iot/components.md","sourceDirName":"reference/iot","slug":"/reference/iot/components","permalink":"/docs/reference/iot/components","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/iot/components.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1738554072000,"frontMatter":{"title":"PlatformAdmin Component Library"},"sidebar":"docs","previous":{"title":"yurtadm_token","permalink":"/docs/reference/yurtadm/yurtadm_token"},"next":{"title":"Integrations","permalink":"/docs/integrations/"}}');var r=n(74848),i=n(28453);const s={title:"PlatformAdmin Component Library"},d=void 0,c={},l=[{value:"Required Components",id:"required-components",level:2},{value:"Optional Components",id:"optional-components",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:'Here is the component library for PlatformAdmin. You can deploy a component to the corresponding node pool by adding its name to the "components" field in the spec of PlatformAdmin. For example:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"apiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n"})}),"\n",(0,r.jsx)(t.p,{children:'Similarly, by removing the corresponding component name from the "components" field, you can cancel the deployment of that component in the respective nodepool.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["For details, see ",(0,r.jsx)(t.a,{href:"/docs/user-manuals/iot/edgex-foundry",children:"Cloud Native Device Management"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"required-components",children:"Required Components"}),"\n",(0,r.jsxs)(t.p,{children:["The following are the essential components of PlatformAdmin that are deployed by default. ",(0,r.jsx)(t.strong,{children:"Users do not need to specify them"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Component Name"})})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-command"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-consul"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-metadata"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-redis"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-common-config-bootstrapper\uff08\u4ec5minnesota\u7248\u672c\uff09"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"optional-components",children:"Optional Components"}),"\n",(0,r.jsxs)(t.p,{children:["The following are optional components for PlatformAdmin, ",(0,r.jsx)(t.strong,{children:"which require explicit specification in the components field by the user in order to be deployed"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Component Name"})})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yurt-iot-dock"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-device-rest"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-support-scheduler"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-ui-go"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-sys-mgmt-agent"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-device-virtual"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-data"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-app-rules-engine"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-kuiper"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-support-notifications"})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(t.p,{children:["Currently, all the components in the component library are related to the EdgeX ecosystem. For detailed descriptions of each component, please refer to the ",(0,r.jsx)(t.a,{href:"https://docs.edgexfoundry.org/3.0/",children:"official documentation of EdgeX"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);