"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[90386],{8282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(85893),s=t(11151);const o={title:"FAQ"},l=void 0,i={id:"faq",title:"FAQ",description:"yurtadm",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/zh/docs/v1.0/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq.md",tags:[],version:"v1.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1720854915e3,frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e",permalink:"/zh/docs/v1.0/developer-manuals/how-to-contribute"}},a={},u=[{value:"<strong>yurtadm</strong>",id:"yurtadm",level:2},{value:"<strong>yurt-tunnel</strong>",id:"yurt-tunnel",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"yurtadm",children:(0,r.jsx)(n.strong,{children:"yurtadm"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. yurtadm join \u62a5\u9519\uff1acrictl not found in system path"})}),"\n",(0,r.jsx)(n.p,{children:"\u8282\u70b9\u6ca1\u6709\u5b89\u88c5 docker\uff0c\u5b89\u88c5docker\u5c31\u53ef\u4ee5\u89e3\u51b3\u6b64\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. yurtadm join \u62a5\u9519\uff1a[ERROR FileExisting-conntrack]: conntrack not found in system path"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"yum install -y conntrack"})," \u7136\u540e\u91cd\u65b0\u6267\u884c yurtadm join \u547d\u4ee4\u5373\u53ef\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:'3. yurtadm init \u8fc7\u7a0b\u4e2d helm \u5b89\u88c5\u51fa\u9519\uff1a Release "yurt-app-manager" does not exist. Installing it now.'}),"\n",(0,r.jsxs)(n.strong,{children:['Error: failed to download "openyurt/yurt-app-manager" (hint: running ',(0,r.jsx)(n.code,{children:"helm repo update"})," may help)"]})]}),"\n",(0,r.jsx)(n.p,{children:"\u624b\u52a8\u6267\u884c helm \u5b89\u88c5 yurt-app-manager \u7684\u8fc7\u7a0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u8fdb\u5165\u96c6\u7fa4\u955c\u50cf\u7684\u4e0a\u4e0b\u6587\u76ee\u5f55\ncd /var/lib/sealer/data/my-cluster/rootfs\n# \u5b89\u88c5 yurt-app-manager\nhelm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. yurtadm init \u4e2d\u9014\u5b89\u88c5\u5931\u8d25\uff0c\u5982\u4f55\u628a\u73af\u5883\u6e05\u7406\u5e72\u51c0\uff1f"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6309\u7167 ",(0,r.jsx)(n.a,{href:"http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed",children:"http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed"})," \u6765\u6e05\u7406\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"yurt-tunnel",children:(0,r.jsx)(n.strong,{children:"yurt-tunnel"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u4f55\u5b9a\u4f4d",(0,r.jsx)(n.code,{children:"kubectl exec"}),"\u547d\u4ee4\u6267\u884c\u5931\u8d25\u539f\u56e0\uff0c\u53ef\u4ee5\u6839\u636e\u4e0b\u56fe\u4e2d\u6d41\u7a0b\u6765\u786e\u5b9a\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(34503).Z+"",width:"1708",height:"1022"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u5728kube-apiserver\u7684\u65e5\u5fd7\u65e0\u6cd5\u627e\u5230",(0,r.jsx)(n.code,{children:"exec"}),"\u8bf7\u6c42\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u8bf7\u628akube-apiserver\u7ec4\u4ef6\u65e5\u5fd7\u7ea7\u522b\u8c03\u6574\u4e3a3(--v=3)"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8bf7\u786e\u4fddkube-apiserver\u4f7f\u7528",(0,r.jsx)(n.code,{children:"yurt-tunnel-dns"})," pod\u6765\u8fdb\u884c\u57df\u540d\u89e3\u6790\uff0ckube-apiserver\u914d\u7f6e\u8c03\u6574\u6587\u6863\u8bf7\u53c2\u8003: ",(0,r.jsx)(n.a,{href:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment",children:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u53e6\u5916\u8fd8\u6709\u4e00\u4e9byurt-tunnel\u76f8\u5173\u7684issue\uff0c\u4e5f\u53ef\u80fd\u4e3a\u60a8\u63d0\u4f9b\u4e00\u4e9b\u5e2e\u52a9\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. kubectl logs \u8fb9\u7f18\u8282\u70b9\u7684pod\u51fa\u73b0\uff1aerror: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)"})}),"\n",(0,r.jsxs)(n.p,{children:["\u95ee\u9898\u63cf\u8ff0\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/984",children:"https://github.com/openyurtio/openyurt/issues/984"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6ca1\u6709\u4f7f\u7528\u6700\u65b0\u7684 yurt-tunnel-agent",":latest","  \u955c\u50cf\uff0c\u67e5\u770b\u4e00\u4e0b\u955c\u50cf\u521b\u5efa\u65f6\u95f4\uff0c\u5982\u679c\u4e0d\u662f\u6700\u65b0\u7684\u955c\u50cf\uff0c\u9700\u8981\u91cd\u65b0pull\u4e00\u4e0b\u955c\u50cf\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. kubectl logs \u8fb9\u7f18\u8282\u70b9\u7684pod\u51fa\u73b0\uff1aerror: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u95ee\u9898\u63cf\u8ff0\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/984",children:"https://github.com/openyurtio/openyurt/issues/984"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5220\u9664 /var/lib/yurttunnel-server/pki \u76ee\u5f55\uff0c\u7136\u540e\u91cd\u65b0\u90e8\u7f72yurt-tunnel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf /var/lib/yurttunnel-server/pki\nkubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. kubectl exec\u62a5\u9519: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"kubectl port-forward"}),"\u4e5f\u53ef\u80fd\u51fa\u73b0\u4e0a\u8ff0\u7c7b\u4f3c\u62a5\u9519\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@control-plane:~# kubectl port-forward <...>\nerror: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel: write unix @->/tmp/interceptor-proxier.sock: write: broken pipe\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"})," \u8fde\u63a5\u65e0\u6cd5\u5efa\u7acb\uff0c\u5c06\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u95ee\u9898\u3002 \u6bd4\u5982yurt-tunnel-agent\u672a\u90e8\u7f72\u5230\u76f8\u5e94\u7684\u8fb9\u7f18\u8282\u70b9\uff0c\u5bfc\u81f4\u8fde\u63a5\u6ca1\u6709\u5efa\u7acb\u4ece\u800c\u89e6\u53d1\u6b64\u95ee\u9898\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f3a\u70c8\u5efa\u8bae\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup#32-setup-openyurtopenyurt-components",children:"Setup OpenYurt components"})," \u786e\u4fdd ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server /agent"})," pod \u88ab\u90e8\u7f72\u5230\u9002\u5f53\u7684\u4e91\u548c\u8fb9\u7f18\u8282\u70b9\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u8282\u70b9\u786e\u5b9a\u4e0d\u9700\u8981\u90e8\u7f72",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"}),"\u65f6\uff0c\u4f46\u662f",(0,r.jsx)(n.code,{children:"kubectl exec/port-forward"}),"\u8bf7\u6c42\u8fd8\u662f\u78b0\u5230\u6b64\u95ee\u9898\uff0c\u5219\u53ef\u80fd\u4e0e",(0,r.jsx)(n.code,{children:"/etc/hosts"}),"\u4e2d\u7684\u7f51\u7edc\u8bbe\u7f6e\u6709\u5173\u3002\n\u6bd4\u5982",(0,r.jsx)(n.code,{children:"/etc/hosts"}),"\u5305\u542b\u7684\u7f51\u7edc\u914d\u7f6e\uff0c\u5bfc\u81f4\u8bf7\u6c42\u4f1a\u901a\u8fc7",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"}),"\u3002\u540c\u65f6\u8282\u70b9\u4e0a\u4e0d\u4f1a\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"yurt-tunnel-agent"}),"\uff0c\u6240\u4ee5\u6b64\u8bf7\u6c42\u6700\u7ec8\u5c06\u5931\u8d25\u5e76\u663e\u793a\u9519\u8bef\u6d88\u606f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u6ce8\u91ca\u6389/etc/hosts\u4e2d\u4e0d\u76f8\u5173\u7684IP\u5730\u5740\u548c\u4e3b\u673a\u540d\u3002\n\u66f4\u591a\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/1024",children:"issue 1024"}),"\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},34503:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/yurt-tunnel-troubleshooting-292e59da652b3ab599ef8bb2fa5abddf.png"},11151:(e,n,t)=>{t.d(n,{a:()=>l});var r=t(67294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);