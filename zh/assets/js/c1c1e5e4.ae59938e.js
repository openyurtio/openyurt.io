"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[32098],{18915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"user-manuals/workload/yurt-static-set","title":"YurtStaticSet","description":"\u80cc\u666f\u4ecb\u7ecd","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/workload/yurt-static-set.md","sourceDirName":"user-manuals/workload","slug":"/user-manuals/workload/yurt-static-set","permalink":"/zh/docs/next/user-manuals/workload/yurt-static-set","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-static-set.md","tags":[],"version":"current","lastUpdatedBy":"tnsimon","lastUpdatedAt":1740095325000,"frontMatter":{"title":"YurtStaticSet"},"sidebar":"docs","previous":{"title":"\u5e94\u7528\u96c6","permalink":"/zh/docs/next/user-manuals/workload/yurt-app-set"},"next":{"title":"DaemonSet \u5347\u7ea7\u6a21\u578b","permalink":"/zh/docs/next/user-manuals/workload/daemon-pod-updater"}}');var s=t(74848),a=t(28453);const r={title:"YurtStaticSet"},i=void 0,l={},c=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7528\u6237\u4f7f\u7528",id:"\u7528\u6237\u4f7f\u7528",level:2},{value:"1\uff09\u90e8\u7f72 OpenYurt",id:"1\u90e8\u7f72-openyurt",level:3},{value:"2\uff09 \u521b\u5efa static pod",id:"2-\u521b\u5efa-static-pod",level:3},{value:"3\uff09\u90e8\u7f72 <code>YurtStaticSet</code> CR",id:"3\u90e8\u7f72-yurtstaticset-cr",level:3},{value:"4) \u9759\u6001 pod \u5347\u7ea7",id:"4-\u9759\u6001-pod-\u5347\u7ea7",level:3},{value:"AdvancedRollingUpdate \u5347\u7ea7",id:"advancedrollingupdate-\u5347\u7ea7",level:4},{value:"OTA \u5347\u7ea7",id:"ota-\u5347\u7ea7",level:4}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(n.p,{children:["\u9759\u6001 pod \u662f K8s \u4e2d\u4e00\u79cd\u7279\u6b8a\u7684 pod\uff0c\u5b83\u7531 Kubelet \u76f4\u63a5\u8fdb\u884c\u7ba1\u7406\u3002\u9759\u6001 pod \u4e5f\u5e38\u7528\u4e8e\u4e91\u8fb9\u534f\u540c\u7684\u573a\u666f\u4e2d\uff0c\u6bd4\u5982\u4e00\u4e9b AI \u76f8\u5173\u7684\u4e1a\u52a1\u3002 \u5728 OpenYurt \u4e2d\uff0c\u6838\u5fc3\u7ec4\u4ef6\n",(0,s.jsx)(n.code,{children:"YurtHub"})," \u5c31\u662f\u901a\u8fc7\u9759\u6001 pod \u8fdb\u884c\u90e8\u7f72\u7684\u3002\u9759\u6001 pod \u4e00\u822c\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"/etc/kubernetes/manifests"})," \u76ee\u5f55\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u521b\u5efa\uff0c\u901a\u8fc7\u4eba\u5de5\u624b\u52a8\u66ff\u6362/\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u5b8c\u6210\u5347\u7ea7\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d Kubelet\n\u76f4\u63a5\u8d1f\u8d23\u4e86\u9759\u6001 pod \u7684\u521b\u5efa\u3001\u5220\u9664\u4efb\u52a1\u3002\u7531\u4e8e\u8fb9\u7f18\u4fa7\u8bbe\u5907\u6570\u91cf\u591a\u3001\u4f4d\u7f6e\u5206\u5e03\u5206\u6563\u7b49\u7279\u70b9\uff0c\u82e5\u901a\u8fc7\u4eba\u5de5\u5b8c\u6210\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\u9759\u6001 pod \u7684\u90e8\u7f72\u3001\u5347\u7ea7\u7b49\u5de5\u4f5c\uff0c\u52bf\u5fc5\u4f1a\u5e26\u6765\u6c89\u91cd\u7684\u64cd\u4f5c\u8d1f\u62c5\u4e0e\u5931\u8bef\u98ce\u9669\u3002\n\u56e0\u6b64\uff0cOpenYurt \u65b0\u589e CRD ",(0,s.jsx)(n.code,{children:"YurtStaticSet"})," \u6765\u589e\u5f3a\u5bf9\u4e8e\u9759\u6001 pod \u7684\u7ba1\u7406\uff0c\u901a\u8fc7\u7684\u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u6eda\u52a8\u66f4\u65b0\u3001OTA \u5347\u7ea7\u7b49\u80fd\u529b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtStaticSet\nmetadata:\n  # \xb7\xb7\xb7\nspec:\n  # static pod \u914d\u7f6e\u6587\u4ef6\u540d\u79f0\n  staticPodManifest: xxx\n  # \u5347\u7ea7\u7b56\u7565\uff0c\u652f\u6301 AdvancedRollingUpdate \u4e0e OTA \u5347\u7ea7\u65b9\u5f0f\n  upgradeStrategy:\n    type: AdvancedRollingUpdate\n    # AdvancedRollingUpdate \u5347\u7ea7\u65b9\u5f0f\u53ef\u4ee5\u8bbe\u7f6e\u6eda\u52a8\u66f4\u65b0\u6700\u5927\u4e0d\u53ef\u7528\u6570\u91cf\uff0c\u9ed8\u8ba4\u503c\u4e3a 10%\n    # maxUnavailable: 3\n  # static pod \u6a21\u677f\u914d\u7f6e\n  template:\n  #  \xb7\xb7\xb7\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7528\u6237\u4f7f\u7528",children:"\u7528\u6237\u4f7f\u7528"}),"\n",(0,s.jsx)(n.h3,{id:"1\u90e8\u7f72-openyurt",children:"1\uff09\u90e8\u7f72 OpenYurt"}),"\n",(0,s.jsxs)(n.p,{children:["static-pod \u63a7\u5236\u5668\u96c6\u6210\u4e8e Yurt-Manager \u7ec4\u4ef6\uff0c\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u90e8\u7f72Yurt-Manager\uff0c\u76f8\u5173\u64cd\u4f5c\u53ef\u4ee5\u53c2\u7167",(0,s.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"\u90e8\u7f72OpenYurt\u7ec4\u4ef6"})]}),"\n",(0,s.jsx)(n.h3,{id:"2-\u521b\u5efa-static-pod",children:"2\uff09 \u521b\u5efa static pod"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YurtStaticSet"})," Operator \u4e0d\u8d1f\u8d23\u9759\u6001 pod \u521d\u59cb\u7684\u90e8\u7f72\uff0c\u90e8\u7f72\u9759\u6001\u8282\u70b9\u9700\u624b\u52a8\u5b8c\u6210\u6216\u8005\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"yurtadm"})," \u5de5\u5177\u5b9e\u73b0\u3002\u4f5c\u4e3a\u793a\u4f8b\uff0c\u672c\u6587\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Kind"})," \u521b\u5efa\u4e00\u4e2a\u5177\u6709\u4e09\u4e2a\u5de5\u4f5c\u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8282\u70b9\u4e0a\u624b\u52a8\u90e8\u7f72\u9759\u6001 pod\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"cat >  nginx.yaml << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: web\n    image: nginx:1.19.1\nEOF\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"3\u90e8\u7f72-yurtstaticset-cr",children:["3\uff09\u90e8\u7f72 ",(0,s.jsx)(n.code,{children:"YurtStaticSet"})," CR"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YurtStaticSet"})," \u8d44\u6e90\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"namespace/name"})," \u4e0e\u9759\u6001 pod \u5bf9\u5e94\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"namespace:default, name:nginx"})," \u7684CR\u5b9e\u4f8b\u63a5\u7ba1\u8be5\u9759\u6001 pod\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtStaticSet\nmetadata:\n  name: nginx\nspec:\n  staticPodManifest: nginx\n  upgradeStrategy:\n    type: AdvancedRollingUpdate\n    maxUnavailable: 3\n  template:\n    metadata:\n      name: nginx\n    spec:\n      containers:\n      - name: web\n        image: nginx:1.19.1\nEOF\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-\u9759\u6001-pod-\u5347\u7ea7",children:"4) \u9759\u6001 pod \u5347\u7ea7"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"YurtStaticSet"})," \u8d44\u6e90\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u5bf9\u9759\u6001 pod \u7684\u7ba1\u7406\uff0c\u5176\u4e2d\u5c31\u5305\u62ec\u5347\u7ea7\u9759\u6001 pod\u3002 ",(0,s.jsx)(n.code,{children:"YurtStaticSet"})," \u652f\u6301\u4e24\u79cd\u5347\u7ea7\u65b9\u5f0f\uff0c\u5206\u522b\u4e3a ",(0,s.jsx)(n.code,{children:"AdvancedRollingUpdate"})," \u6a21\u5f0f\u4e0e ",(0,s.jsx)(n.code,{children:"OTA"})," \u6a21\u5f0f\u3002\n\u7b80\u5355\u6765\u8bf4\uff0c",(0,s.jsx)(n.code,{children:"AdvancedRollingUpdate"})," \u6a21\u5f0f\u5b9e\u73b0\u4e86\u8dc3\u8fc7 ",(0,s.jsx)(n.code,{children:"not-ready"})," \u8282\u70b9\u7684\u6eda\u52a8\u66f4\u65b0\u5347\u7ea7\u80fd\u529b\uff1b ",(0,s.jsx)(n.code,{children:"OTA"})," \u6a21\u5f0f\u5219\u652f\u6301\u7528\u6237\u81ea\u4e3b\u63a7\u5236\u5347\u7ea7\u6d41\u7a0b\u3002 \u4e24\u79cd\u6a21\u5f0f\u7684\u8be6\u7ec6\u4ecb\u7ecd\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"https://openyurt.io/docs/user-manuals/workload/daemon-pod-updater/#background",children:"DaemonSet \u5347\u7ea7\u6a21\u578b"})]}),"\n",(0,s.jsx)(n.h4,{id:"advancedrollingupdate-\u5347\u7ea7",children:"AdvancedRollingUpdate \u5347\u7ea7"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5347\u7ea7\u4e4b\u524d\u67e5\u770b\u96c6\u7fa4\u4e2d\u7684\u9759\u6001 pod"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods | grep nginx\n\ndefault  nginx-openyurt-e2e-test-worker    1/1     Running   0   3h4m   10.244.2.3   openyurt-e2e-test-worker   \ndefault  nginx-openyurt-e2e-test-worker2   1/1     Running   0   3h4m   10.244.1.2   openyurt-e2e-test-worker2  \ndefault  nginx-openyurt-e2e-test-worker3   1/1     Running   0   3h5m   10.244.3.3   openyurt-e2e-test-worker3  \n\n$ kubectl describe pods nginx-openyurt-e2e-test-worker\n\n\xb7\xb7\xb7\nContainers:\n  web:\n    \xb7\xb7\xb7\n    # \u6b64\u65f6 nginx pod \u7684\u7248\u672c\u662f1.19.1\n    Image:          nginx:1.19.1\n    \xb7\xb7\xb7\n\xb7\xb7\xb7\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"YurtStaticSet"})," spec\uff0c\u5c06\u5bb9\u5668\u955c\u50cf\u4ece nginx:1.19.1 \u5347\u7ea7\u7248\u672c\u81f3 nginx:1.19.2"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtStaticSet\nmetadata:\n  name: nginx\nspec:\n    \xb7\xb7\xb7\n    spec:\n      containers:\n      - name: web\n        image: nginx:1.19.2\n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u67e5\u770b\u8d44\u6e90\u72b6\u6001, \u53ef\u4ee5\u770b\u5230\u4e09\u4e2a\u9759\u6001 pods \u5747\u5347\u7ea7\u5b8c\u6210\u3002 ",(0,s.jsx)(n.code,{children:"TOTAL"})," \u4ee3\u8868 ",(0,s.jsx)(n.code,{children:"YurtStaticSet nginx"})," \u5728\u8be5\u96c6\u7fa4\u4e2d\u5339\u914d\u591a\u5c11\u5bf9\u5e94\u7684\u9759\u6001 pods\uff0c ",(0,s.jsx)(n.code,{children:"READY"})," \u4ee3\u8868\u5c31\u7eea pods \u7684\u6570\u91cf\uff0c",(0,s.jsx)(n.code,{children:"UPGRADED"})," \u8868\u793a\u591a\u5c11 pods \u5df2\u7ecf\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get yurtstaticsets nginx\n\nNAME    AGE     TOTAL   READY   UPGRADED\nnginx   4m20s   3       3       3\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u67e5\u770b\u96c6\u7fa4\u4e2d\u76f8\u5e94\u7684\u9759\u6001 pods"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"$ kubectl describe pods nginx-openyurt-e2e-test-worker\n\n\xb7\xb7\xb7\nContainers:\n  web:\n    \xb7\xb7\xb7\n    # \u6b64\u65f6 nginx pod \u7684\u7248\u672c\u5df2\u7ecf\u5347\u7ea7\u81f31.19.2\n    Image:          nginx:1.19.2\n    \xb7\xb7\xb7\n\xb7\xb7\xb7\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ota-\u5347\u7ea7",children:"OTA \u5347\u7ea7"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"OTA \u5347\u7ea7\u63a5\u53e3"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YurtHub"})," \u63d0\u4f9b\u4e86\u4e24\u4e2a OTA \u5347\u7ea7\u76f8\u5173\u7684 REST APIs\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /pods"}),"\n\u901a\u8fc7\u8be5\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6\u8282\u70b9\u4e0a pods \u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade"}),"\n\u901a\u8fc7\u8be5\u63a5\u53e3\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u66f4\u65b0\u67d0\u4e2a\u9759\u6001 Pod\u3002\u8def\u5f84\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"ns"})," \u4e0e ",(0,s.jsx)(n.code,{children:"podname"})," \u5206\u522b\u4ee3\u8868 Pod \u7684\u547d\u540d\u7a7a\u95f4\u4ee5\u53ca\u540d\u79f0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"OTA \u5347\u7ea7\u6d41\u7a0b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["OTA \u5347\u7ea7\u4e2d\u901a\u8fc7 pod status \u4e2d ",(0,s.jsx)(n.code,{children:"PodNeedUpgrade"})," condition \u5b57\u6bb5\u8868\u793a\u5347\u7ea7\u72b6\u6001\uff0c\u5f53\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"true"})," \u65f6\u8868\u793a\u5b58\u5728\u53ef\u5347\u7ea7\u7248\u672c\uff0c\u53cd\u6b63\u4e0d\u53ef\u5347\u7ea7\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u901a\u8fc7\u4e3b\u52a8\u8c03\u7528\u4e0a\u8ff0 upgrade API \u63a5\u53e3\u5373\u53ef\u5b9e\u73b0\u9759\u6001 pod \u5347\u7ea7\u4efb\u52a1"}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var d=t(96540);const s={},a=d.createContext(s);function r(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);