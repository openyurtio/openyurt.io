"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[93637],{8308:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-manuals/network/edge-pod-network","title":"\u8fb9\u7f18Pod\u7f51\u7edc","description":"\u80cc\u666f\u8bf4\u660e","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/user-manuals/network/edge-pod-network.md","sourceDirName":"user-manuals/network","slug":"/user-manuals/network/edge-pod-network","permalink":"/zh/docs/v1.0/user-manuals/network/edge-pod-network","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/edge-pod-network.md","tags":[],"version":"v1.0","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1736118355000,"frontMatter":{"title":"\u8fb9\u7f18Pod\u7f51\u7edc"},"sidebar":"docs","previous":{"title":"Raven","permalink":"/zh/docs/v1.0/user-manuals/network/raven"},"next":{"title":"\u670d\u52a1\u62d3\u6251","permalink":"/zh/docs/v1.0/user-manuals/network/service-topology"}}');var s=l(74848),o=l(28453);const a={title:"\u8fb9\u7f18Pod\u7f51\u7edc"},r=void 0,i={},d=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",level:2},{value:"Flannel\uff1a VTEP MAC\u5730\u5740\u4fdd\u6301",id:"flannel-vtep-mac\u5730\u5740\u4fdd\u6301",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u89e3\u51b3\u65b9\u6cd5\uff1a \u5728Flannel\u4e2d\u589e\u52a0MAC\u5730\u5740\u4fdd\u6301\u529f\u80fd",id:"\u89e3\u51b3\u65b9\u6cd5-\u5728flannel\u4e2d\u589e\u52a0mac\u5730\u5740\u4fdd\u6301\u529f\u80fd",level:3},{value:"IPAM: Pod IP\u5730\u5740\u4fdd\u6301",id:"ipam-pod-ip\u5730\u5740\u4fdd\u6301",level:2},{value:"\u573a\u666f",id:"\u573a\u666f-1",level:3},{value:"\u89e3\u51b3\u529e\u6cd5\uff1a Pod IP\u5730\u5740\u4fdd\u6301",id:"\u89e3\u51b3\u529e\u6cd5-pod-ip\u5730\u5740\u4fdd\u6301",level:3},{value:"\u4e3aflannel\u589e\u52a0&quot;get node&quot;\u6743\u9650",id:"\u4e3aflannel\u589e\u52a0get-node\u6743\u9650",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u80cc\u666f\u8bf4\u660e",children:"\u80cc\u666f\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8fb9\u7f18\u573a\u666f\u4e2d\uff0c\u4e3a\u4e86\u786e\u4fdd\u4e91\u8fb9\u7f51\u7edc\u65ad\u5f00\u65f6\u8282\u70b9\u4e0a\u7684\u4e1a\u52a1\u4ecd\u80fd\u7a33\u5b9a\u8fd0\u884c\uff0cOpenYurt\u63d0\u4f9b\u4e86\u8fb9\u7f18\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u3002\u8be5\u529f\u80fd\u80fd\u591f\u5b9e\u73b0\u4e91\u8fb9\u65ad\u7f51\u60c5\u51b5\u4e0b\uff0c\u4e1a\u52a1Pod\u7684\u5f02\u5e38\u81ea\u52a8\u91cd\u542f\u3001\u8282\u70b9\u91cd\u542f\u81ea\u52a8\u62c9\u8d77\u4e1a\u52a1Pod\u7b49\u529f\u80fd\u3002\u7136\u800c\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u4e91\u8fb9\u65ad\u7f51\u540e\u4e1a\u52a1Pod\u548c\u8282\u70b9\u7684\u91cd\u542f\u4e0d\u5f71\u54cd\u8fb9\u8fb9\u7684\u5bb9\u5668\u7f51\u7edc\uff0c\u8fd9\u91cc\u6709\u4e00\u4e9b\u7f51\u7edc\u60c5\u51b5\u9700\u8981\u9002\u914d\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"flannel-vtep-mac\u5730\u5740\u4fdd\u6301",children:"Flannel\uff1a VTEP MAC\u5730\u5740\u4fdd\u6301"}),"\n",(0,s.jsx)(n.h3,{id:"\u573a\u666f",children:"\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:'\u5982\u679c\u6211\u4eec\u4f7f\u7528flannel\u4f5c\u4e3aCNI\u63d2\u4ef6\uff0c\u4e14\u540e\u7aef\u4e3aVXLAN\u6a21\u5f0f\u3002\u5728\u8282\u70b9\u4e0a\u4f1a\u521b\u5efa\u4e00\u4e2aVTEP\u8bbe\u5907\uff08\u901a\u5e38\u547d\u540d\u4e3a": flannel.1\uff09\uff0c\u540c\u65f6VNI\u548cVTEP\u7684\u4fe1\u606f\u4f1a\u88ab\u8bb0\u5f55\u5230\u8282\u70b9\u7684annotations\u4e2d\uff0c\u4f9b\u5176\u5b83\u8282\u70b9\u521b\u5efa\u76f8\u5e94\u7684\u8def\u7531\u548c\u8f6c\u53d1\u89c4\u5219\u3002'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"flannel-architecture",src:l(48086).A+"",width:"1404",height:"1096"})}),"\n",(0,s.jsx)(n.p,{children:"Flannel\u7684\u67b6\u6784\u5982\u56fe\u6240\u793a\uff0c\u6211\u4eec\u7528\u4e24\u4e2a\u8fb9\u7f18\u8282\u70b9\u6765\u4e3e\u4f8b\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'node2\u521b\u5efaflannel.1\u8bbe\u5907\uff0cMAC\u5730\u5740\u4e3a"9e:c9:07:f9:b3:8b"\uff0cIP\u5730\u5740\u4e3a"172.30.133.0"\uff0c\u90a3\u4e48node2\u7684annotations\u4e2d\u6709\u5982\u4e0b\u8bb0\u5f55\u3002'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# node2 annotations with vtep info.\nflannel.alpha.coreos.com/backend-data: \'{"VtepMAC":"9e:c9:07:f9:b3:8b"}\'\nflannel.alpha.coreos.com/public-ip: 10.0.0.20\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"node1 \u5c06\u4f7f\u7528node2\u7684\u8fd9\u4e9b\u4fe1\u606f\uff0c\u5728\u4e3b\u673a\u4e0a\u914d\u7f6efdb\u3001arp\u4ee5\u53ca\u8def\u7531\u4fe1\u606f"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"# node1 host network namespace.\nfdb:   9e:c9:07:f9:b3:8b dev flannel.1 dst 10.0.0.20 self permanent\narp:   ? (172.30.133.0) at 9e:c9:07:f9:b3:8b [ether] PERM on flannel.1\nroute: 172.30.133.0/26 via 172.30.133.0 dev flannel.1 onlink\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6bcf\u5f53node2\u91cd\u542f\u4e4b\u540e\uff0cflannel\u4f1a\u91cd\u65b0\u521b\u5efaVTEP\u8bbe\u5907\uff0cVTEP\u7684MAC\u5730\u5740\u4e5f\u53d1\u751f\u53d8\u5316\uff0c\u5e76\u66f4\u65b0\u5230node2\u7684annotations\u4e2d\u3002\u7136\u800c\uff0c\u5982\u679c\u6b64\u65f6node2\u6216\u8005node1\u4e0e\u4e91\u7aef\u7684\u7f51\u7edc\u65ad\u5f00\uff0cnode1\u5c06\u4e0d\u80fd\u611f\u77e5\u5230node2\u7684MAC\u5730\u5740\u7684\u53d8\u5316\uff0c\u8fd9\u5c06\u5bfc\u81f4node1\u4e0enode2\u4e0a\u7684Pod\u65e0\u6cd5\u6b63\u5e38\u901a\u4fe1\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6cd5-\u5728flannel\u4e2d\u589e\u52a0mac\u5730\u5740\u4fdd\u6301\u529f\u80fd",children:"\u89e3\u51b3\u65b9\u6cd5\uff1a \u5728Flannel\u4e2d\u589e\u52a0MAC\u5730\u5740\u4fdd\u6301\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u6bcf\u6b21\u8282\u70b9\u91cd\u542f\u65f6\uff0cflannel\u4f18\u5148\u8bfb\u53d6\u672c\u8282\u70b9annotations\u4e2dMAC\u5730\u5740\u4fe1\u606f\uff08\u4eceapiserver\u6216\u8005yurt-hub\u7684\u672c\u5730\u7f13\u5b58\u4e2d\u8bfb\u53d6\uff09\uff0c\u5982\u679c\u5b58\u5728\u5219\u4f7f\u7528\u8fd9\u4e2aMAC\u5730\u5740\u4f5c\u4e3aVTEP\u7684MAC\u5730\u5740\u3002\n\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e2a\u80fd\u529b\uff0c\u9700\u8981\u5bf9flannel\u7684\u4ee3\u7801\u505a\u6539\u52a8\uff0c\u53c2\u8003\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"git clone https://github.com/flannel-io/flannel.git ;\ncd flannel;\ngit reset --hard e634dabe0af446b765db3b729085b32f97ff6fe6;\nwget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0001-flannel-keep-vtep-mac.patch;\ngit am 0001-flannel-keep-vtep-mac.patch;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6539\u52a8\u4e4b\u540e flannel \u7684\u955c\u50cf\u4f4d\u7f6e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Dockerhub \u955c\u50cf\u5730\u5740: ",(0,s.jsx)(n.code,{children:"docker.io/openyurt/flannel-edge:v0.14.0-1"})]}),"\n",(0,s.jsxs)(n.li,{children:["Aliyun \u955c\u50cf\u5730\u5740: ",(0,s.jsx)(n.code,{children:"registry.cn-hangzhou.aliyuncs.com/openyurt/flannel-edge:v0.14.0-1"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ipam-pod-ip\u5730\u5740\u4fdd\u6301",children:"IPAM: Pod IP\u5730\u5740\u4fdd\u6301"}),"\n",(0,s.jsx)(n.h3,{id:"\u573a\u666f-1",children:"\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5927\u591a\u6570\u573a\u666f\u4e2d\uff0c\u4f7f\u7528host-local\u4e3aPod\u5206\u914dIP\u5730\u5740\u3002host-local\u4ecenodecidr\u4e2d\u9009\u62e9\u7a7a\u95f2\u7684IP\u5730\u5740\u5206\u914d\u7ed9\u65b0\u7684Pod\uff0c\u5e76\u5c06\u5df2\u5206\u914d\u7684IP\u5730\u5740\u4fe1\u606f\u8bb0\u5f55\u5728\u672c\u5730\u6587\u4ef6\u4e2d\u3002\n\u4f8b\u5982\uff0c\u5982\u679cIPAM\u7684\u6570\u636e\u76ee\u5f55\u4e3a/var/lib/cni/networks/cbr0, \u5b83\u7684\u8bb0\u5f55\u4fe1\u606f\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"$ ls /var/lib/cni/networks/cbr0\n172.30.132.194  172.30.132.198  172.30.132.201\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u4e91\u8fb9\u65ad\u7f51\u65f6\uff0cPod\u91cd\u542f\u4f1a\u5bfc\u81f4host-local\u91cd\u65b0\u5206\u914dIP\u5730\u5740\uff0c\u4e14Pod IP\u5730\u5740\u7684\u53d8\u5316\u65e0\u6cd5\u540c\u6b65\u5230\u4e91\u7aef\uff0c\u5176\u5b83\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684kube-proxy\u7b49\u7ec4\u4ef6\u65e0\u6cd5\u611f\u77e5\u5230Pod IP\u7684\u53d8\u5316\uff0c\u5219\u65e0\u6cd5\u4f7f\u7528Cluster IP\u5730\u5740\u8bbf\u95ee\u4e1a\u52a1Pod\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u89e3\u51b3\u529e\u6cd5-pod-ip\u5730\u5740\u4fdd\u6301",children:"\u89e3\u51b3\u529e\u6cd5\uff1a Pod IP\u5730\u5740\u4fdd\u6301"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u9700\u8981\u8c03\u6574host-local\u7684\u4ee3\u7801\uff1a\u8bb0\u5f55IP\u5730\u5740\u7684\u683c\u5f0f\u4e3a",(0,s.jsx)(n.code,{children:"{ip}-{pod namespace}-{pod name}"}),"\u3002\u5f53pod\u91cd\u542f\u65f6\uff0chost-local\u5c06\u4f18\u5148\u4f7f\u7528\u8bb0\u5f55\u4e2d\u540c\u540dPod\u7684IP\u5730\u5740\u3002\n\u8c03\u6574\u540e\u7684\u5df2\u5206\u914d\u7684Pod IP\u8bb0\u5f55\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"$ ls /var/lib/cni/networks/cbr0\n172.30.132.194_kube-system_coredns-vstxh  172.30.132.198_kube-system_nginx-76df748b9-4cz95  172.30.132.201_kube-system_nginx-76df748b9-nf5l9\n"})}),"\n",(0,s.jsx)(n.p,{children:"host-local\u7684\u4ee3\u7801\u4fee\u6539\u53c2\u8003:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"git clone https://github.com/containernetworking/plugins.git ;\ncd plugins;\ngit reset --hard 9ebe139e77e82afb122e335328007bca86905ae4;\nwget https://raw.githubusercontent.com/openyurtio/openyurt/master/docs/tutorial/0002-ipam-keep-pod-ip.patch;\ngit am 0002-ipam-keep-pod-ip.patch;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528 rpm \u66f4\u65b0\u4fee\u6539\u540e\u7684 host-local cni:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"script",children:"rpm -ivh https://github.com/openyurtio/openyurt/releases/download/v0.7.0/openyurt-cni-0.8.7-0.x86_64.rpm\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3aflannel\u589e\u52a0get-node\u6743\u9650",children:'\u4e3aflannel\u589e\u52a0"get node"\u6743\u9650'}),"\n",(0,s.jsx)(n.p,{children:'flannel\u8c03\u6574\u4e4b\u540e\uff0c\u9700\u8981\u5728\u539f\u6709\u7684RBAC\u4e4b\u540e\uff0c\u63d0\u4f9b "get node"\u7684\u6743\u9650\u3002\u53c2\u8003\uff1a'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: flannel\nrules:\n  - apiGroups:\n      - ""\n    resources:\n      - pods\n    verbs:\n      - get\n  - apiGroups:\n      - ""\n    resources:\n      - nodes\n    verbs:\n+     - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - nodes/status\n    verbs:\n      - patch\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},48086:(e,n,l)=>{l.d(n,{A:()=>t});const t=l.p+"assets/images/flannel-architecture-7a63d6356df43834c25d46ad20805f84.png"},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>r});var t=l(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);