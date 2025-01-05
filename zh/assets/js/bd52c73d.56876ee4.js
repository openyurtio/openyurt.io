"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[33191],{1346:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"installation/raven-l7-proxy-prepare","title":"1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS","description":"\u4e91\u7aef\u7ec4\u4ef6(\u5982Kube-apiserver, prometheus, metrics-server\u7b49)\u901a\u8fc7hostname:port\u8bbf\u95ee\u8fb9\u7f18\u65f6\uff0c\u4e3a\u4e86\u8ba9hostname\u57df\u540d\u89e3\u6790\u5230\u4e91\u4e0aGateway\u8282\u70b9,\u901a\u8fc7Gateway\u8282\u70b9\u8f6c\u53d1\u5230\u5176\u4ed6\u7f51\u7edc\u57df\u7f51\u5173\u8282\u70b9\u8fdb\u884c\u4ee3\u7406\u3002\u9700\u8981\u786e\u4fdd\u7ec4\u4ef6\u7684DNS\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53d1\u9001\u5230\u7f51\u5173\u8282\u70b9\u7684\u4e13\u7528\u7684DNS(\u53d6\u540d\u4e3araven-proxy-dns)\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/raven-l7-proxy-prepare.md","sourceDirName":"installation","slug":"/installation/raven-l7-proxy-prepare","permalink":"/zh/docs/next/installation/raven-l7-proxy-prepare","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/raven-l7-proxy-prepare.md","tags":[],"version":"current","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1736118355000,"frontMatter":{}}');var t=r(74848),o=r(28453);const a={},c="1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS",i={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"1-\u90e8\u7f72raven-proxy\u4e13\u7528dns",children:"1. \u90e8\u7f72Raven Proxy\u4e13\u7528DNS"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e91\u7aef\u7ec4\u4ef6(\u5982Kube-apiserver, prometheus, metrics-server\u7b49)\u901a\u8fc7",(0,t.jsx)(n.code,{children:"hostname:port"}),"\u8bbf\u95ee\u8fb9\u7f18\u65f6\uff0c\u4e3a\u4e86\u8ba9",(0,t.jsx)(n.code,{children:"hostname"}),"\u57df\u540d\u89e3\u6790\u5230\u4e91\u4e0aGateway\u8282\u70b9,\u901a\u8fc7Gateway\u8282\u70b9\u8f6c\u53d1\u5230\u5176\u4ed6\u7f51\u7edc\u57df\u7f51\u5173\u8282\u70b9\u8fdb\u884c\u4ee3\u7406\u3002\u9700\u8981\u786e\u4fdd\u7ec4\u4ef6\u7684DNS\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53d1\u9001\u5230\u7f51\u5173\u8282\u70b9\u7684\u4e13\u7528\u7684DNS(\u53d6\u540d\u4e3araven-proxy-dns)\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5raven-proxy-dns:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f config/setup/raven-proxy-dns.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,t.jsx)(n.code,{children:"kubectl -n kube-system get po"}),"raven-proxy-dns\u7ec4\u4ef6\u662f\u5426\u6b63\u5e38\u542f\u52a8\u3002\u5e76\u4e14\u901a\u8fc7",(0,t.jsx)(n.code,{children:"kubectl -n kube-system get svc raven-proxy-dns"}),"\u83b7\u53d6\u5230",(0,t.jsx)(n.code,{children:"raven-proxy-dns service"}),"\u7684",(0,t.jsx)(n.code,{children:"clusterIP"}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"2-kube-apiserver\u8c03\u6574",children:"2. Kube-apiserver\u8c03\u6574"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1Master\u8282\u70b9\u4e0akube-apiserver\u4f7f\u7528",(0,t.jsx)(n.code,{children:"hostname:port"}),"\u8bbf\u95eekubelet\uff0c\u540c\u65f6\u786e\u4fdd\u4f7f\u7528",(0,t.jsx)(n.code,{children:"raven-proxy-dns pod"}),"\u5bf9",(0,t.jsx)(n.code,{children:"hostname"}),"\u8fdb\u884c\u57df\u540d\u89e3\u6790\u3002kube-apiserver\u7684\u76f8\u5173\u914d\u7f6e\u8c03\u6574\u5982\u4e0b:"]}),"\n",(0,t.jsx)(n.p,{children:"\u5047\u5b9akube-apiserver\u662f\u4f7f\u7528static pod\u5b89\u88c5(/etc/kubernetes/manifests/kube-apiserver.yaml)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'\u4fee\u6539dnsPolicy="None"'}),"\n",(0,t.jsxs)(n.li,{children:["\u589e\u52a0dnsConfig\u914d\u7f6e\uff0c\u5176\u4e2d\u7684",(0,t.jsx)(n.code,{children:"nameservers"}),"\u914d\u7f6e\u4e3a",(0,t.jsx)(n.code,{children:"raven-proxy-dns service"}),"\u7684",(0,t.jsx)(n.code,{children:"clusterIP"}),"(\u8fd9\u91cc\u5047\u5b9a\u4e3a",(0,t.jsx)(n.code,{children:"1.2.3.4"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"\u4fee\u6539\u542f\u52a8\u53c2\u6570--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP\uff0c\u786e\u4fddKube-apiserver\u4f18\u5148\u4f7f\u7528Hostname\u8bbf\u95eekubelet"}),"\n",(0,t.jsx)(n.li,{children:"\u5220\u9664\u542f\u52a8\u53c2\u6570--kubelet-certificate-authority\uff0c\u786e\u4fddkube-apiserver\u4e0d\u6821\u9a8craven-proxy-server\u7684TLS\u8bc1\u4e66(kubeadm\u642d\u5efa\u7684\u96c6\u7fa4\u4e2d\uff0c\u9ed8\u8ba4\u6ca1\u6709\u914d\u7f6e\u8be5\u53c2\u6570\uff0c\u53ef\u76f4\u63a5\u5ffd\u7565)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ vi /etc/kubernetes/manifests/kube-apiserver.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  dnsPolicy: "None" # 1. dnsPolicy\u4fee\u6539\u4e3aNone\n  dnsConfig:        # 2. \u589e\u52a0dnsConfig\u914d\u7f6e\n    nameservers:\n      - 1.2.3.4 # \u4f7f\u7528yurt-tunnel-dns service\u7684clusterIP\u66ff\u6362\n    searches:\n      - kube-system.svc.cluster.local\n      - svc.cluster.local\n      - cluster.local\n    options:\n      - name: ndots\n        value: "5"\n  containers:\n  - command:\n    - kube-apiserver\n  ...\n    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. \u628aHostname\u653e\u5728\u7b2c\u4e00\u4f4d\n  ...\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var s=r(96540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);