"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[65552],{77316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"reference/iot/components","title":"PlatformAdmin\u7ec4\u4ef6\u5e93","description":"\u8fd9\u91cc\u662fPlatformAdmin\u7684\u7ec4\u4ef6\u5e93\u5217\u8868\uff0c\u53ea\u8981\u5728PlatformAdmin\u7684spec\u4e2d\u7684components\u5b57\u6bb5\u589e\u52a0\u7ec4\u4ef6\u540d\u5373\u53ef\u90e8\u7f72\u5230\u5bf9\u5e94\u8282\u70b9\u6c60\uff0c\u6bd4\u5982","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/iot/components.md","sourceDirName":"reference/iot","slug":"/reference/iot/components","permalink":"/zh/docs/next/reference/iot/components","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/iot/components.md","tags":[],"version":"current","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1740216193000,"frontMatter":{"title":"PlatformAdmin\u7ec4\u4ef6\u5e93"},"sidebar":"docs","previous":{"title":"yurtadm_token","permalink":"/zh/docs/next/reference/yurtadm/yurtadm_token"},"next":{"title":"\u9879\u76ee\u5217\u8868","permalink":"/zh/docs/next/integrations/"}}');var s=n(74848),d=n(28453);const i={title:"PlatformAdmin\u7ec4\u4ef6\u5e93"},c=void 0,l={},o=[{value:"\u5fc5\u5907\u7ec4\u4ef6",id:"\u5fc5\u5907\u7ec4\u4ef6",level:2},{value:"\u53ef\u9009\u7ec4\u4ef6",id:"\u53ef\u9009\u7ec4\u4ef6",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u8fd9\u91cc\u662fPlatformAdmin\u7684\u7ec4\u4ef6\u5e93\u5217\u8868\uff0c\u53ea\u8981\u5728PlatformAdmin\u7684spec\u4e2d\u7684components\u5b57\u6bb5\u589e\u52a0\u7ec4\u4ef6\u540d\u5373\u53ef\u90e8\u7f72\u5230\u5bf9\u5e94\u8282\u70b9\u6c60\uff0c\u6bd4\u5982"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u540c\u6837\uff0c\u5728components\u4e2d\u79fb\u9664\u6389\u5bf9\u5e94\u7ec4\u4ef6\u540d\u5c31\u53ef\u4ee5\u53d6\u6d88\u5bf9\u5e94\u8282\u70b9\u6c60\u4e2d\u8be5\u7ec4\u4ef6\u7684\u90e8\u7f72\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["\u5177\u4f53\u7684\u6b65\u9aa4\u8bf7\u53c2\u8003",(0,s.jsx)(t.a,{href:"/zh/docs/next/user-manuals/iot/edgex-foundry",children:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907"})]})}),"\n",(0,s.jsx)(t.h2,{id:"\u5fc5\u5907\u7ec4\u4ef6",children:"\u5fc5\u5907\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee5\u4e0b\u4e3aPlatformAdmin\u7684\u5fc5\u5907\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u90e8\u7f72\uff0c",(0,s.jsx)(t.strong,{children:"\u7528\u6237\u65e0\u9700\u586b\u5199"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u7ec4\u4ef6\u540d"})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-command"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-consul"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-metadata"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-redis"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-common-config-bootstrapper\uff08\u4ec5minnesota\u7248\u672c\uff09"})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u53ef\u9009\u7ec4\u4ef6",children:"\u53ef\u9009\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee5\u4e0b\u4e3aPlatformAdmin\u7684\u53ef\u9009\u7ec4\u4ef6\uff0c",(0,s.jsx)(t.strong,{children:"\u9700\u8981\u7528\u6237\u5728components\u5b57\u6bb5\u4e2d\u663e\u5f0f\u6307\u5b9a\u624d\u53ef\u90e8\u7f72"})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u7ec4\u4ef6\u540d"})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"yurt-iot-dock"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-device-rest"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-support-scheduler"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-ui-go"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-sys-mgmt-agent"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-device-virtual"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-core-data"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-app-rules-engine"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-kuiper"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"edgex-support-notifications"})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(t.p,{children:["\u76ee\u524d\u7ec4\u4ef6\u5e93\u4e2d\u7ec4\u4ef6\u5747\u4e3aedgex\u751f\u6001\u76f8\u5173\u7ec4\u4ef6\uff0c\u5404\u7ec4\u4ef6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003",(0,s.jsx)(t.a,{href:"https://docs.edgexfoundry.org/3.0/",children:"edgex\u5b98\u65b9\u6587\u6863"}),"\u3002"]})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);