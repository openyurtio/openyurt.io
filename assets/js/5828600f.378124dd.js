"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[60810],{3688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"faq/yurt-tunnel","title":"yurt-tunnel","description":"1. How to locate the cause of kubectl execcommand execution failure","source":"@site/versioned_docs/version-v1.4/faq/yurt-tunnel.md","sourceDirName":"faq","slug":"/faq/yurt-tunnel","permalink":"/docs/faq/yurt-tunnel","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurt-tunnel.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"yurt-tunnel"},"sidebar":"docs","previous":{"title":"yurtadm","permalink":"/docs/faq/yurtadm"},"next":{"title":"coredns","permalink":"/docs/faq/coredns"}}');var s=n(74848),o=n(28453);const i={title:"yurt-tunnel"},l=void 0,a={},u=[];function c(e){const t={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["** 1. How to locate the cause of ",(0,s.jsx)(t.code,{children:"kubectl exec"}),"command execution failure **"]}),"\n",(0,s.jsx)(t.p,{children:"please check according to the process in the figure below."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:n(44267).A+"",width:"1708",height:"1022"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["if ",(0,s.jsx)(t.code,{children:"exec"})," request info can't be found in logs of kube-apiserver, please set log level of kube-apiserver to 3(--v=3)"]}),"\n",(0,s.jsxs)(t.li,{children:["make sure ",(0,s.jsx)(t.code,{children:"kube-apiserver"})," use ",(0,s.jsx)(t.code,{children:"yurt-tunnel-dns"})," pod to resolve hostname. please reference the tutorial of kube-apiserver adjustment here: ",(0,s.jsx)(t.a,{href:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment",children:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"** 2. kubectl logs edge node error\uff1aerror: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)**"}),"\n",(0,s.jsxs)(t.p,{children:["For more details about this problem, you can refer to ",(0,s.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/issues/984",children:"issue 984"}),".\nPlease make sure that you are using the latest ",(0,s.jsx)(t.code,{children:"yurt-tunnel-server/agent"})," image (the latest tag of image is confusing, please check the created time)."]}),"\n",(0,s.jsx)(t.p,{children:"** 3. kubectl logs edge node error\uff1aerror: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))**"}),"\n",(0,s.jsxs)(t.p,{children:["For more details about this problem, you can refer to ",(0,s.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/issues/984",children:"issue 984"}),".\nThis is most likely to be an issue caused by outdated tunnel server certificate. You can clean up the tunnel server certificate and redeploy yurt-tunnel-server."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"rm -rf /var/lib/yurttunnel-server/pki\nkubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system\n"})}),"\n",(0,s.jsx)(t.p,{children:"** 4. kubectl exec error: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel**"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"kubectl port-forward"})," may also fail the following similar error."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"root@control-plane:~# kubectl port-forward <...>\nerror: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel: write unix @->/tmp/interceptor-proxier.sock: write: broken pipe\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Fundamentally this problem should be observed because ",(0,s.jsx)(t.code,{children:"yurt-tunnel-server/agent"})," connection cannot be established."]}),"\n",(0,s.jsxs)(t.p,{children:["It is likely that this problem may happen since ",(0,s.jsx)(t.code,{children:"yurt-tunnel-agent"})," is not deployed to the corresponding edge nodes."]}),"\n",(0,s.jsxs)(t.p,{children:["In that case, it is highly recommended to go through ",(0,s.jsx)(t.a,{href:"https://openyurt.io/docs/installation/manually-setup#32-setup-openyurtopenyurt-components",children:"Setup openyurt components"})," to make sure ",(0,s.jsx)(t.code,{children:"yurt-tunnel-server/agent"})," pods are deployed to appropriate cloud and edge nodes."]}),"\n",(0,s.jsxs)(t.p,{children:["If this problem can be observed by requesting ",(0,s.jsx)(t.code,{children:"kubectl exec/port-forward"})," to cloud node which does not require ",(0,s.jsx)(t.code,{children:"yurt-tunnel-server/agent"})," to access the kubelet running on the node, issue may be related to network setting ",(0,s.jsx)(t.code,{children:"/etc/hosts"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"/etc/hosts"})," includes any IP addresses with the same hostname registered to Kubernetes / OpenYurt cluster, it might lead the request to be over ",(0,s.jsx)(t.code,{children:"yurt-tunnel-server/agent"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This request will eventually fail with the error message, since there will be no ",(0,s.jsx)(t.code,{children:"yurt-tunnel-agent"})," running on cloud nodes."]}),"\n",(0,s.jsx)(t.p,{children:"In this case, those unrelated IP addresses and hostname would need to be commented out."}),"\n",(0,s.jsxs)(t.p,{children:["For more details, please refer to ",(0,s.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/issues/1024",children:"issue 1024"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},44267:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/yurt-tunnel-troubleshooting-292e59da652b3ab599ef8bb2fa5abddf.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);