"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[19927],{77313:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=s(85893),t=s(11151);const a={},o="1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS",l={id:"installation/raven-l7-proxy-prepare",title:"1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS",description:"The hostname need to be resolved to the IP address of the gateway endpoints of the local area network when the cloud components (e.g APIServer,MetricsServer) accesses the edge service by the way of hostname+port.So An dedicated DNS server must be deployed before raven's layer 7 proxy is enabled.",source:"@site/versioned_docs/version-v1.4/installation/raven-l7-proxy-prepare.md",sourceDirName:"installation",slug:"/installation/raven-l7-proxy-prepare",permalink:"/docs/installation/raven-l7-proxy-prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/raven-l7-proxy-prepare.md",tags:[],version:"v1.4",lastUpdatedBy:"zyjhtangtang",lastUpdatedAt:1722997831e3,frontMatter:{}},i={},d=[];function c(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"1-\u90e8\u7f72raven-proxy\u4e13\u7528dns",children:"1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS"}),"\n",(0,r.jsx)(n.p,{children:"The hostname need to be resolved to the IP address of the gateway endpoints of the local area network when the cloud components (e.g APIServer,MetricsServer) accesses the edge service by the way of hostname+port.So An dedicated DNS server must be deployed before raven's layer 7 proxy is enabled."}),"\n",(0,r.jsx)(n.p,{children:"Install raven-proxy-dns with the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/raven-proxy-dns.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the raven-proxy-dns install successfully with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl -n kube-system get po\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Query the ",(0,r.jsx)(n.code,{children:"clusterIP"})," of the ",(0,r.jsx)(n.code,{children:"raven-proxy-dns service"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl -n kube-system get svc raven-proxy-dns\n"})}),"\n",(0,r.jsx)(n.h1,{id:"2-kube-apiserver\u8c03\u6574",children:"2. Kube-apiserver\u8c03\u6574"}),"\n",(0,r.jsxs)(n.p,{children:["To make sure kube-apiserver on the master node use ",(0,r.jsx)(n.code,{children:"hostname:port"})," to access kubelet, and at the same time this hostname resolution request should be handled by ",(0,r.jsx)(n.code,{children:"yurt-tunnel-dns"})," pod. We should apply some adjustments to kube-apiserver configurations."]}),"\n",(0,r.jsx)(n.p,{children:"We assume your kube-apiserver is installed through static pod(/etc/kubernetes/manifests/kube-apiserver.yaml)"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'modifiy dnsPolicy="None"'}),"\n",(0,r.jsxs)(n.li,{children:["add dnsConfig configurations which set the ",(0,r.jsx)(n.code,{children:"nameservers"})," as the ",(0,r.jsx)(n.code,{children:"clusterIP"})," of ",(0,r.jsx)(n.code,{children:"raven-proxy-dns service"})," (assumed to be ",(0,r.jsx)(n.code,{children:"1.2.3.4"})," here)"]}),"\n",(0,r.jsxs)(n.li,{children:["modify startup parameters ",(0,r.jsx)(n.code,{children:"--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP"}),", to make sure that Kube-apiserver prefers to use Hostname to access kubelet"]}),"\n",(0,r.jsxs)(n.li,{children:["delete startup parameters ",(0,r.jsx)(n.code,{children:"--kubelet-certificate-authority"}),", to make sure that kube-apisever don't calibrate TLS certificate of yurt-tunnel-server (If you create your cluster from kubeadm, this step can be omitted since it don't have this settings by default)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ vi /etc/kubernetes/manifests/kube-apiserver.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  dnsPolicy: "None" \n  dnsConfig:       \n    nameservers:\n      - 1.2.3.4\n    searches:\n      - kube-system.svc.cluster.local\n      - svc.cluster.local\n      - cluster.local\n    options:\n      - name: ndots\n        value: "5"\n  containers:\n  - command:\n    - kube-apiserver\n  ...\n    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. \u628aHostname\u653e\u5728\u7b2c\u4e00\u4f4d\n  ...\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{a:()=>o});var r=s(67294);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);