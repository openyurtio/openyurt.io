"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[56624],{94069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"installation/openyurt-experience-center/overview","title":"OpenYurt Experience Center Introduction","description":"For better user experience\uff0c Experience Centerhas been relocated to new address\uff0cand the old one will no longer be maintained after 7 days \u3002","source":"@site/versioned_docs/version-v0.6.0/installation/openyurt-experience-center/overview.md","sourceDirName":"installation/openyurt-experience-center","slug":"/installation/openyurt-experience-center/overview","permalink":"/docs/v0.6.0/installation/openyurt-experience-center/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/overview.md","tags":[],"version":"v0.6.0","lastUpdatedBy":"tnsimon","lastUpdatedAt":1740095325000,"frontMatter":{"title":"OpenYurt Experience Center Introduction"},"sidebar":"docs","previous":{"title":"Summary","permalink":"/docs/v0.6.0/installation/summary"},"next":{"title":"How to create an account in the experience center","permalink":"/docs/v0.6.0/installation/openyurt-experience-center/user"}}');var s=t(74848),i=t(28453);const o={title:"OpenYurt Experience Center Introduction"},a=void 0,c={},l=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["For better user experience\uff0c ",(0,s.jsx)(n.a,{href:"http://47.243.253.79/",children:"Experience Center"}),"has been relocated to ",(0,s.jsx)(n.a,{href:"http://47.243.253.79/",children:"new address"}),"\uff0cand ",(0,s.jsx)(n.a,{href:"http://139.224.236.157/",children:"the old one"})," will no longer be maintained after 7 days \u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"As an edge cloud native project, OpenYurt involves both edge computing and cloud native areas, many edge computing developers are not familiar with cloud native related technologies. In order to lower the threshold of using OpenYurt and help more developers get started with OpenYurt quickly, our community has launched a platform called OpenYurt Experience Center. Instead of building an OpenYurt cluster from scratch, new users who want to try out OpenYurt's features can simply apply for a test account on the platform and have an available OpenYurt cluster right away."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(31244).A+"",width:"1408",height:"793"})}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.p,{children:["Platform will assign an OpenYurt cluster to each ",(0,s.jsx)(n.a,{href:"/docs/v0.6.0/installation/openyurt-experience-center/user",children:"registered user"}),". (Note that this cluster is not a full-featured K8s cluster and this means users can only be active under their own namespace; see the Experience Center's architecture for details)"]}),"\n",(0,s.jsx)(n.p,{children:"OpenYurt Experience Center has provided two ways to use OpenYurt cluster:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Users can use the ",(0,s.jsx)(n.a,{href:"/docs/v0.6.0/installation/openyurt-experience-center/web_console",children:"Web Console"})," provided by platform to manage the cluster. The console displays the status of the cluster and provides some common operations, such as: user management, node access, node autonomy settings, lab quick deployment, and so on."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(53484).A+"",width:"1946",height:"1092"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["The Experience Center also provides access via ",(0,s.jsx)(n.a,{href:"/docs/v0.6.0/installation/openyurt-experience-center/kubeconfig",children:(0,s.jsx)(n.code,{children:"kubeconfig"})}),", where users can configure ",(0,s.jsx)(n.code,{children:"kubeconfig"})," locally and operate the cluster via the ",(0,s.jsx)(n.code,{children:"kubectl"})," command."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(36659).A+"",width:"1410",height:"793"})}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(76972).A+"",width:"1184",height:"947"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-dashboard",children:"Yurt-dashboard"})," is open source and welcomes your feedback.\nBesides, if you are interested in the implementation of the experience center, you can refer to the ",(0,s.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1pf4y1K7M4",children:"video discussion"})," of biweekly meetings."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The experience center consists of three main parts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Yurt Dashboard: yurt-dashboard is a web console similar to the kubernetes dashboard that contains front-end and back-end web applications. The front-end provides a graphical interface, while the back-end is responsible for communicating with the cluster's API Server."}),"\n",(0,s.jsx)(n.li,{children:"Account Controller: user information of the platform is stored in the cluster as CRD. Account Controller is responsible for managing the creation and deletion of user accounts and related resources (e.g. namespace, certificates, etc)."}),"\n",(0,s.jsx)(n.li,{children:"Autonomy Sidecar: all users in experience center share the same OpenYurt cluster. The Autonomy component implements multi-tenant isolation of the cluster, so that each user shares the same Master, but has exclusive access to its own edge resources."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},76972:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/arch-3b0a5a9cd2cecdbfdd7ad8b5ce6c1795.png"},31244:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/register_blank-7209f48ba89832433874e9a6ee5defab.png"},36659:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},53484:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);