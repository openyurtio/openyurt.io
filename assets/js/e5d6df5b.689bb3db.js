"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[53721],{15749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(85893),s=t(11151);const o={title:"FAQ"},l=void 0,i={id:"faq",title:"FAQ",description:"yurtadm",source:"@site/versioned_docs/version-v1.1/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/v1.1/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq.md",tags:[],version:"v1.1",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1712305043e3,frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"How to Contribute",permalink:"/docs/v1.1/developer-manuals/how-to-contribute"}},a={},d=[{value:"<strong>yurtadm</strong>",id:"yurtadm",level:2},{value:"<strong>yurt-tunnel</strong>",id:"yurt-tunnel",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"yurtadm",children:(0,r.jsx)(n.strong,{children:"yurtadm"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1. yurtadm join error\uff1acrictl not found in system path"})}),"\n",(0,r.jsx)(n.p,{children:"The node does not have docker installed, and installing docker can solve this problem."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. yurtadm join error\uff1a[ERROR FileExisting-conntrack]: conntrack not found in system path"})}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"yum install -y conntrack"})," and then retry the yurtadm join command again."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:'3. helm installation error during yurtadm init\uff1a Release "yurt-app-manager" does not exist. Installing it now.'}),"\n",(0,r.jsxs)(n.strong,{children:['Error: failed to download "openyurt/yurt-app-manager" (hint: running ',(0,r.jsx)(n.code,{children:"helm repo update"})," may help)"]})]}),"\n",(0,r.jsx)(n.p,{children:"Perform the helm installation process manually\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /var/lib/sealer/data/my-cluster/rootfs\nhelm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"4. yurtadm init failed, how to clean up the environment?"})}),"\n",(0,r.jsxs)(n.p,{children:["Since ",(0,r.jsx)(n.code,{children:"yurtadm init"})," uses ",(0,r.jsx)(n.a,{href:"http://sealer.cool/",children:"sealer"})," to create an OpenYurt cluster from scratch, you can refer to ",(0,r.jsx)(n.a,{href:"http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed",children:"this"})," to clean up the environment."]}),"\n",(0,r.jsx)(n.h2,{id:"yurt-tunnel",children:(0,r.jsx)(n.strong,{children:"yurt-tunnel"})}),"\n",(0,r.jsxs)(n.p,{children:["how to troubleshoot the reason when ",(0,r.jsx)(n.code,{children:"kubectl exec"})," command failed to work. please follow the below flow."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(34503).Z+"",width:"1708",height:"1022"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["if ",(0,r.jsx)(n.code,{children:"exec"})," request info can't be found in logs of kube-apiserver, please set log level of kube-apiserver to 3(--v=3)"]}),"\n",(0,r.jsxs)(n.li,{children:["make sure ",(0,r.jsx)(n.code,{children:"kube-apiserver"})," use ",(0,r.jsx)(n.code,{children:"yurt-tunnel-dns"})," pod to resolve hostname. please reference the tutorial of kube-apiserver adjustment here: ",(0,r.jsx)(n.a,{href:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment",children:"https://openyurt.io/docs/installation/openyurt-prepare#3-kube-apiserver-adjustment"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["There are some issues about yurt-tunnel failure, it might have some help.\n",(0,r.jsx)(n.strong,{children:"1. kubectl logs edge node error\uff1aerror: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)"})]}),"\n",(0,r.jsxs)(n.p,{children:["For more details about this problem, you can refer to ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/984",children:"issue 984"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Please make sure that you are using the latest ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"})," image (the latest tag of image is confusing, please check the created time)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2. kubectl logs edge node error\uff1aerror: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))"})}),"\n",(0,r.jsxs)(n.p,{children:["For more details about this problem, you can refer to ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/984",children:"issue 984"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This is most likely to be an issue caused by outdated tunnel server certificate. You can clean up the tunnel server certificate and redeploy yurt-tunnel-server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf /var/lib/yurttunnel-server/pki\nkubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"3. kubectl exec error: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"kubectl port-forward"})," may also fail the following similar error."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"root@control-plane:~# kubectl port-forward <...>\nerror: unable to upgrade connection: fail to setup the tunnel: fail to setup TLS handshake through the Tunnel: write unix @->/tmp/interceptor-proxier.sock: write: broken pipe\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Fundamentally this problem should be observed because ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"})," connection cannot be established."]}),"\n",(0,r.jsxs)(n.p,{children:["It is likely that this problem may happen since ",(0,r.jsx)(n.code,{children:"yurt-tunnel-agent"})," is not deployed to the corresponding edge nodes."]}),"\n",(0,r.jsxs)(n.p,{children:["In that case, it is highly recommended to go through ",(0,r.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup#32-setup-openyurtopenyurt-components",children:"Setup openyurt components"})," to make sure ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"})," pods are deployed to appropriate cloud and edge nodes."]}),"\n",(0,r.jsxs)(n.p,{children:["If this problem can be observed by requesting ",(0,r.jsx)(n.code,{children:"kubectl exec/port-forward"})," to cloud node which does not require ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"})," to access the kubelet running on the node, issue may be related to network setting ",(0,r.jsx)(n.code,{children:"/etc/hosts"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"/etc/hosts"})," includes any IP addresses with the same hostname registered to Kubernetes / OpenYurt cluster, it might lead the request to be over ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server/agent"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This request will eventually fail with the error message, since there will be no ",(0,r.jsx)(n.code,{children:"yurt-tunnel-agent"})," running on cloud nodes."]}),"\n",(0,r.jsx)(n.p,{children:"In this case, those unrelated IP addresses and hostname would need to be commented out."}),"\n",(0,r.jsxs)(n.p,{children:["For more details, please refer to ",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issues/1024",children:"issue 1024"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},34503:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/yurt-tunnel-troubleshooting-292e59da652b3ab599ef8bb2fa5abddf.png"},11151:(e,n,t)=>{t.d(n,{a:()=>l});var r=t(67294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);