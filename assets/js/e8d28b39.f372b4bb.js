"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[14344],{61785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(85893),s=n(11151);const i={title:"OpenYurt Experience Center Introduction"},o=void 0,a={id:"installation/openyurt-experience-center/overview",title:"OpenYurt Experience Center Introduction",description:"Overview",source:"@site/versioned_docs/version-v0.7.0/installation/openyurt-experience-center/overview.md",sourceDirName:"installation/openyurt-experience-center",slug:"/installation/openyurt-experience-center/overview",permalink:"/docs/v0.7.0/installation/openyurt-experience-center/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-experience-center/overview.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Lu Chen",lastUpdatedAt:1722947604e3,frontMatter:{title:"OpenYurt Experience Center Introduction"},sidebar:"docs",previous:{title:"Yurtadm init/join",permalink:"/docs/v0.7.0/installation/yurtadm-init-join"},next:{title:"How to create an account in the experience center",permalink:"/docs/v0.7.0/installation/openyurt-experience-center/user"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["As an edge cloud native project, OpenYurt crosses edge computing and cloud native two fields. Many developers from edge computing background are not familiar with cloud native related technologies. In order to lower the threshold of using OpenYurt and help developers get started with OpenYurt quickly, our community has launched a platform called ",(0,r.jsx)(t.a,{href:"http://47.243.253.79/",children:"OpenYurt Experience Center"}),". Instead of building an OpenYurt cluster from scratch, new users who want to try out OpenYurt's features can simply apply for a test account on the platform and then they will have an available OpenYurt cluster right away."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(53790).Z+"",width:"1408",height:"793"})}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.p,{children:["Platform will assign an OpenYurt cluster to each ",(0,r.jsx)(t.a,{href:"/docs/v0.7.0/installation/openyurt-experience-center/user",children:"registered user"}),". (Note that this cluster is not a full-featured K8s cluster and this means users can only operate under their own namespaces; refer to the Architecture section for details)"]}),"\n",(0,r.jsx)(t.p,{children:"OpenYurt Experience Center has provided two ways to use OpenYurt cluster:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Users can use the ",(0,r.jsx)(t.a,{href:"/docs/v0.7.0/installation/openyurt-experience-center/web_console",children:"Web Console"})," provided by platform to manage the cluster. The console displays the status of the cluster and provides some simple operations, such as: user management, node access, node autonomy settings, several OpenYurt applications, and so on."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(79068).Z+"",width:"1946",height:"1092"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["The Experience Center also provides another way via ",(0,r.jsx)(t.a,{href:"/docs/v0.7.0/installation/openyurt-experience-center/kubeconfig",children:(0,r.jsx)(t.code,{children:"kubeconfig"})}),", where users can configure ",(0,r.jsx)(t.code,{children:"kubeconfig"})," locally and operate the cluster via the ",(0,r.jsx)(t.code,{children:"kubectl"})," command."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(47745).Z+"",width:"1410",height:"793"})}),"\n",(0,r.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(91050).Z+"",width:"1184",height:"947"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/openyurtio/yurt-dashboard",children:"Yurt-dashboard"})," is an open source project, and any suggestions and feedback are welcome.\nBesides, if you are interested in the implementation of the experience center, you can refer to the ",(0,r.jsx)(t.a,{href:"https://www.bilibili.com/video/BV1pf4y1K7M4",children:"video record"})," of biweekly meetings."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The experience center consists of three main parts:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Yurt Dashboard: yurt-dashboard is a web console similar to the kubernetes dashboard that contains front-end and back-end web applications. The front-end provides a graphical interface, while the back-end is responsible for communicating with the cluster's API Server."}),"\n",(0,r.jsx)(t.li,{children:"Account Controller: user information of the platform is stored in the cluster through CRD. Account Controller is responsible for managing the creation and deletion of user accounts and related resources (e.g. namespace, certificates, etc)."}),"\n",(0,r.jsx)(t.li,{children:"Autonomy Sidecar: all users in experience center share the same OpenYurt cluster. The Autonomy component implements multi-tenant isolation of the cluster, so that each user can share the same Master, and also has exclusive access to their own edge resources."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},91050:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/arch-3b0a5a9cd2cecdbfdd7ad8b5ce6c1795.png"},53790:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/register_blank-7209f48ba89832433874e9a6ee5defab.png"},47745:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_kubeconfig-a18a5efd468931241ad8d623298dbff9.png"},79068:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web_overview-124bbea660e023dd2e4dec42c61032d2.png"},11151:(e,t,n)=>{n.d(t,{a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);