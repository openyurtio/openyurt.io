"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[52268],{17003:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"core-concepts/node-resource-manager","title":"NodeResourceManager","description":"\u7b80\u4ecb","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.7.0/core-concepts/node-resource-manager.md","sourceDirName":"core-concepts","slug":"/core-concepts/node-resource-manager","permalink":"/zh/docs/v0.7.0/core-concepts/node-resource-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/node-resource-manager.md","tags":[],"version":"v0.7.0","lastUpdatedBy":"tnsimon","lastUpdatedAt":1738554072000,"frontMatter":{"title":"NodeResourceManager"},"sidebar":"docs","previous":{"title":"YurtControllerManager","permalink":"/zh/docs/v0.7.0/core-concepts/yurt-controller-manager"},"next":{"title":"YurtDeviceController","permalink":"/zh/docs/v0.7.0/core-concepts/yurt-device-controller"}}');var t=o(74848),a=o(28453);const s={title:"NodeResourceManager"},c=void 0,i={},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:3},{value:"\u4f7f\u7528\u4f8b\u5b50",id:"\u4f7f\u7528\u4f8b\u5b50",level:3},{value:"\u521b\u5efaConfigmap",id:"\u521b\u5efaconfigmap",level:4},{value:"\u5b89\u88c5 node-resource-manager",id:"\u5b89\u88c5-node-resource-manager",level:4},{value:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8\u6700\u4f73\u5b9e\u8df5",id:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8\u6700\u4f73\u5b9e\u8df5",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"node-resource-manager \u662f\u7528\u4e8e\u7ba1\u7406 OpenYurt \u96c6\u7fa4\u672c\u5730\u8d44\u6e90\u7684\u7ec4\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u96c6\u7fa4\u5185 ConfigMap \u6765\u52a8\u6001\u914d\u7f6e\u96c6\u7fa4\u5185\u5bbf\u4e3b\u673a\u4e0a\u7684\u672c\u5730\u8d44\u6e90\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u7ec4\u4ef6\u4e3b\u8981\u529f\u80fd\u662f\u5c06\u5bbf\u4e3b\u673a\u4e0a\u5df2\u6709\u7684\u5757\u8bbe\u5907\u6216\u8005\u6301\u4e45\u5316\u5185\u5b58\u8bbe\u5907\u521d\u59cb\u5316\u6210\u4ee5\u4e0b\u4e24\u79cd\u672c\u5730\u5b58\u50a8\u8bbe\u5907"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e\u5757\u8bbe\u5907\u6216\u8005\u662f\u6301\u4e45\u5316\u5185\u5b58\u8bbe\u5907\u521b\u5efa\u7684 LVM"}),"\n",(0,t.jsx)(n.li,{children:"\u57fa\u4e8e\u5757\u8bbe\u5907\u6216\u8005\u662f\u6301\u4e45\u5316\u5185\u5b58\u8bbe\u5907\u521b\u5efa\u7684 QuotaPath"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u540e\u7eed\u4efb\u4f55\u5bf9 ConfigMap \u7684\u4fee\u6539\u90fd\u5c06\u89c6\u4e3a\u5bf9\u96c6\u7fa4\u5185\u7684\u67d0\u4e9b\u5bbf\u4e3b\u673a\u4e0a\u7684\u672c\u5730\u8d44\u6e90\u7684\u4fee\u6539\uff0c\u51fa\u4e8e\u6570\u636e\u5b89\u5168\u8003\u8651\uff0c\u63d2\u4ef6\u4e2d\u4e0d\u4f1a\u6709\u5bf9\u4efb\u4f55\u672c\u5730\u8d44\u6e90\u505a\u5220\u9664\u7684\u64cd\u4f5c\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u540c\u65f6\u914d\u5408 ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/alibaba-cloud-csi-driver",children:"csi \u7ec4\u4ef6"})," \u53ef\u4ee5\u5728 Openyurt \u96c6\u7fa4\u4e2d\u5feb\u901f\u4fbf\u6377\u7684\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u8bbe\u5907\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u67b6\u6784",children:"\u67b6\u6784"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u7ec4\u4ef6\u4e3b\u8981\u5305\u542b\u4e24\u4e2a\u90e8\u5206\uff0c \u4e00\u4e2a\u662f\u5b9a\u4e49\u5728\u96c6\u7fa4\u4e2d kube-system namespace \u7684 node-resource-topo ConfigMap,"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u662f\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d kube-system namespace \u4e0b\u9762\u7684 node-resource-manager Daemonset,"}),"\n",(0,t.jsx)(n.p,{children:"\u6bcf\u4e2a Node \u8282\u70b9\u4e0a\u7684 node-resource-manager \u901a\u8fc7\u6302\u8f7d node-resource-topo ConfigMap \u7684\u65b9\u5f0f\u751f\u4ea7\u5e76\u7ba1\u7406\u7528\u6237\u5b9a\u4e49\u7684\u672c\u5730\u8d44\u6e90\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:o(92554).A+"",width:"1784",height:"898"})}),"\n",(0,t.jsx)(n.h3,{id:""}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u4f8b\u5b50",children:"\u4f7f\u7528\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.h4,{id:"\u521b\u5efaconfigmap",children:"\u521b\u5efaConfigmap"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u96c6\u7fa4\u4e2d\u521b\u5efaConfigMap, \u8fd9\u91cc\u5c55\u793a\u4e00\u4e2a\u76f8\u5bf9\u901a\u7528\u7684 Configmap \u914d\u7f6e\uff0c\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u89c1\n",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md",children:"https://github.com/openyurtio/node-resource-manager/blob/main/docs/configmap.zh.md"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: node-resource-topo\n  namespace: kube-system\ndata:\n  volumegroup: |-\n    volumegroup:\n    - name: volumegroup1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-zhangjiakou.192.168.3.114\n      topology:\n        type: device\n        devices:\n        - /dev/vdb\n        - /dev/vdc\n  quotapath: |-\n    quotapath:\n    - name: /mnt/path1\n      key: kubernetes.io/hostname\n      operator: In\n      value: cn-beijing.192.168.3.35\n      topology:\n        type: device\n        options: prjquota\n        fstype: ext4\n        devices:\n        - /dev/vdb\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u914d\u7f6e\u53ef\u4ee5\u5b8c\u6210\u5982\u4e0b\u529f\u80fd"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5728\u96c6\u7fa4\u4e2d\u7684 cn-zhangjiakou.192.168.3.114 \u8282\u70b9\u4e0a\u4f7f\u7528 /dev/vdb & /dev/vdc \u8fd9\u4e24\u4e2a\u5757\u8bbe\u5907\u521b\u5efa\u4e00\u4e2a lvm volumegroup\u3002\u8fd9\u91cc\u7684 devices \u53ef\u4ee5\u6dfb\u52a0\u4e0d\u5b58\u5728\u7684\u8def\u5f84\uff0c \u63d2\u4ef6\u5728\u8282\u70b9\u4e0a\u521d\u59cb\u5316\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5ffd\u7565\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u96c6\u7fa4\u4e2d\u7684 cn-beijing.192.168.3.35 \u8282\u70b9\u4e0a\u4f7f\u7528 /dev/vdb \u8fd9\u4e2a\u5757\u8bbe\u5907\u683c\u5f0f\u5316\u6210 prjquota \u683c\u5f0f\uff0c\u5e76\u6302\u8f7d\u5230/mnt/path1 \u8fd9\u4e2a\u8def\u5f84\u4e0a\uff0c\u540e\u7eed\u518d\u8fd9\u4e2a\u8def\u5f84\u4e0b\u9762\u521b\u5efa\u7684\u5b50\u76ee\u5f55\u90fd\u53ef\u4ee5\u8bbe\u5b9a\u6bcf\u4e2a\u76ee\u5f55\u7684\u6700\u5927quota\uff0c\u540c\u6837\uff0c \u8fd9\u91cc\u7684 devices \u91cc\u9762\u53ef\u4ee5\u586b\u5199\u4e0d\u5b58\u5728\u8def\u5f84\uff0c\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u9009\u62e9\u7b2c\u4e00\u4e2a\u5b58\u5728\u7684\u5757\u8bbe\u5907\u5b8c\u6210\u683c\u5f0f\u5316\u548c\u7ed1\u5b9a\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u5b89\u88c5-node-resource-manager",children:"\u5b89\u88c5 node-resource-manager"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kubectl apply -f https://raw.githubusercontent.com/openyurtio/node-resource-manager/main/deploy/nrm.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8\u6700\u4f73\u5b9e\u8df5",children:"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4",children:"https://help.aliyun.com/document_detail/294460.html?spm=5176.2020520152.help.dexternal.52a116ddm4F9Z4"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},92554:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/node-resource-manager-19892b3a311102bad89b5a37336c826a.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var r=o(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);