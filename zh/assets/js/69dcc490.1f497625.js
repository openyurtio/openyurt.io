"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[15617],{96527:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manuals/workload/daemon-pod-updater","title":"DaemonSet \u5347\u7ea7\u6a21\u578b","description":"\u80cc\u666f\u4ecb\u7ecd","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/workload/daemon-pod-updater.md","sourceDirName":"user-manuals/workload","slug":"/user-manuals/workload/daemon-pod-updater","permalink":"/zh/docs/v1.2/user-manuals/workload/daemon-pod-updater","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/daemon-pod-updater.md","tags":[],"version":"v1.2","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1740216193000,"frontMatter":{"title":"DaemonSet \u5347\u7ea7\u6a21\u578b"},"sidebar":"docs","previous":{"title":"\u8fb9\u7f18\u672c\u5730\u5b58\u50a8","permalink":"/zh/docs/v1.2/user-manuals/storage/edge-local-storage"},"next":{"title":"\u8282\u70b9\u6c60\u7ba1\u7406","permalink":"/zh/docs/v1.2/user-manuals/workload/node-pool-management"}}');var s=o(74848),r=o(28453);const a={title:"DaemonSet \u5347\u7ea7\u6a21\u578b"},d=void 0,i={},l=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7528\u6237\u4f7f\u7528\uff1a",id:"\u7528\u6237\u4f7f\u7528",level:2},{value:"1\uff09\u5b89\u88c5Yurt-Controller-Manager\u7ec4\u4ef6",id:"1\u5b89\u88c5yurt-controller-manager\u7ec4\u4ef6",level:3},{value:"2\uff09\u4f7f\u7528Auto\u5347\u7ea7\u6a21\u578b",id:"2\u4f7f\u7528auto\u5347\u7ea7\u6a21\u578b",level:3},{value:"3\uff09OTA\u5347\u7ea7\u6a21\u578b",id:"3ota\u5347\u7ea7\u6a21\u578b",level:3},{value:"OTA \u5347\u7ea7\u63a5\u53e3",id:"ota-\u5347\u7ea7\u63a5\u53e3",level:4},{value:"OTA \u5347\u7ea7\u793a\u4f8b",id:"ota-\u5347\u7ea7\u793a\u4f8b",level:4}];function c(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u8fb9\u7f18\u5316\u573a\u666f\u4e0b\uff0c\u539f\u751f DaemonSet \u5347\u7ea7\u6a21\u578b\u65e0\u6cd5\u6ee1\u8db3\u7528\u6237\u73b0\u6709\u9700\u6c42\u3002\u5728\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde\u7684\u60c5\u51b5\u4e0b\uff0cDaemonSet \u5347\u7ea7\u6d41\u7a0b\u53ef\u80fd\u88ab\u963b\u585e\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u539f\u751f\u5347\u7ea7\u6a21\u578b\u5e76\u672a\u63d0\u4f9b\u76f8\u5e94\u7684\u5347\u7ea7\u64cd\u4f5c\u63a5\u53e3\uff0c\u8282\u70b9\u4e0a\u7528\u6237\u65e0\u6cd5\u81ea\u4e3b\u63a7\u5236\u5e94\u7528\u5347\u7ea7\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u4eec\u5bf9\u539f\u751f DaemonSet \u5347\u7ea7\u6a21\u578b\u8fdb\u884c\u6269\u5c55\uff0c\u65b0\u589e\u81ea\u5b9a\u4e49\u63a7\u5236\u5668",(0,s.jsx)(e.code,{children:"daemonPodUpdater-controller"}),"\uff0c\u63d0\u4f9b Auto \u4e0e OTA \u4e24\u79cd\u5347\u7ea7\u6a21\u578b\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Auto \u6a21\u578b\uff1a\u89e3\u51b3\u4e91\u8fb9\u65ad\u8fde\u65f6\uff0c\u8282\u70b9",(0,s.jsx)(e.code,{children:"Not-Ready"}),"\u5bfc\u81f4\u7684 DaemonSet \u5347\u7ea7\u963b\u585e\u95ee\u9898\uff0c\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4f1a\u5ffd\u7565",(0,s.jsx)(e.code,{children:"Not-Ready"}),"\u8282\u70b9\uff0c\u4ece\u800c\u4fdd\u8bc1\u5347\u7ea7\u6d41\u7a0b\u7684\u987a\u5229\u5b8c\u6210\uff0c\u5e76\u4e14\u5728\u8282\u70b9\u72b6\u6001\u4ece",(0,s.jsx)(e.code,{children:"Not-Ready"}),"\u8f6c\u53d8\u4e3a",(0,s.jsx)(e.code,{children:"Ready"}),"\u540e\uff0c\u81ea\u52a8\u5b8c\u6210 DaemonSet \u5e94\u7528\u7684\u5347\u7ea7\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["OTA \u6a21\u578b\uff1a\u65b0\u589e Pod status condition ",(0,s.jsx)(e.code,{children:"PodNeedUpgrade"}),"\u6765\u8868\u660e\u66f4\u65b0\u53ef\u7528\u4fe1\u606f\u3002YurtHub OTA \u5347\u7ea7\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u8be5 condition \u5224\u65ad DaemonSet \u5e94\u7528\u662f\u5426\u5b58\u5728\u65b0\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'# auto \u6216 ota \u5347\u7ea7\u6a21\u578b\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  # \xb7\xb7\xb7\n  annotations:\n    # \u8be5\u6ce8\u89e3\u662f\u4f7f\u7528 auto \u6216\u8005 ota \u5347\u7ea7\u6a21\u578b\u7684\u524d\u63d0\u6761\u4ef6\u4e4b\u4e00\uff0c\u76ee\u524d\u652f\u6301\u7684\u914d\u7f6e\u503c\u4e3a"auto" \u6216\u8005 "ota"\u3002\n    apps.openyurt.io/update-strategy: ota\n    # \u8be5\u6ce8\u89e3\u7528\u4e8e\u6eda\u52a8\u66f4\u65b0\u65f6\u8bbe\u7f6e\u6700\u5927\u4e0d\u53ef\u7528 pod \u6570\u91cf\uff0c\u4ec5\u5728 auto \u6a21\u5f0f\u4e0b\u8d77\u4f5c\u7528\u3002\n    # \u8be5\u6ce8\u89e3\u652f\u6301\u7684\u914d\u7f6e\u503c\u4e0e\u539f\u751f DaemonSet \u914d\u7f6e\u4e2d maxUnavailable \u76f8\u540c\uff0c\u9ed8\u8ba4\u503c\u4e3a10%\u3002\n    apps.openyurt.io/max-unavailable: 30%\n  # \xb7\xb7\xb7\nspec:\n  # \xb7\xb7\xb7\n  # \u4f7f\u7528 auto \u6216\u8005 ota \u5347\u7ea7\u6a21\u578b\u7684\u53e6\u4e00\u4e2a\u524d\u63d0\u6761\u4ef6\u662f\u5c06 updateStrategy \u8bbe\u7f6e\u4e3a OnDelete\u3002\n  updateStrategy:\n    type: OnDelete\n  # \xb7\xb7\xb7\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528 auto \u6216\u8005 ota \u5347\u7ea7\u6a21\u578b\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u5c06\u6ce8\u89e3 ",(0,s.jsx)(e.code,{children:"apps.openyurt.io/update-strategy"}),' \u8bbe\u7f6e\u4e3a "auto" \u6216\u8005 "ota", \u5e76\u4e14\u5c06 ',(0,s.jsx)(e.code,{children:".spec.updateStrategy.type"}),' \u8bbe\u7f6e\u4e3a "OnDelete"\u3002']}),"\n",(0,s.jsx)(e.h2,{id:"\u7528\u6237\u4f7f\u7528",children:"\u7528\u6237\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(e.h3,{id:"1\u5b89\u88c5yurt-controller-manager\u7ec4\u4ef6",children:"1\uff09\u5b89\u88c5Yurt-Controller-Manager\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"daemonPodUpdater"}),"\u63a7\u5236\u5668\u96c6\u6210\u4e8e",(0,s.jsx)(e.code,{children:"Yurt-Controller-Manager"}),"\u7ec4\u4ef6\uff0c\u4f7f\u7528 Auto \u6216 OTA \u5347\u7ea7\u6a21\u578b\u524d\u9700\u8981\u5b89\u88c5\u90e8\u7f72",(0,s.jsx)(e.code,{children:"Yurt-Controller-Manager"}),"\uff0c\u76f8\u5173\u64cd\u4f5c\u53ef\u4ee5\u53c2\u7167",(0,s.jsx)(e.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"\u90e8\u7f72OpenYurt\u7ec4\u4ef6"})]}),"\n",(0,s.jsx)(e.h3,{id:"2\u4f7f\u7528auto\u5347\u7ea7\u6a21\u578b",children:"2\uff09\u4f7f\u7528Auto\u5347\u7ea7\u6a21\u578b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u521b\u5efa daemonset \u5b9e\u4f8b"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: nginx-daemonset\n  annotations:\n    apps.openyurt.io/update-strategy: auto\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: OnDelete\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.19.4\n\nEOF\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u67e5\u770b nginx-daemonset pods"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ kubectl get pods | grep nginx-daemonset\n\nnginx-daemonset-bv5jg   1/1     Running   0          21m   10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-fhsr6   1/1     Running   0          21m   10.244.1.2   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-lmmtd   1/1     Running   0          21m   10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u6a21\u62df\u4e91\u8fb9\u7f51\u7edc\u65ad\u8fde, \u5047\u5b9a\u65ad\u5f00\u8fb9\u7f18\u8282\u70b9",(0,s.jsx)(e.code,{children:"openyurt-e2e-test-worker2"}),"\u3001",(0,s.jsx)(e.code,{children:"openyurt-e2e-test-worker3"}),"\u4e0e\u4e91\u7aef\u8282\u70b9\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u8be5\u793a\u4f8b\u91c7\u7528Kind\u521b\u5efa\u96c6\u7fa4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5c06\u5bb9\u5668\u4ece\u865a\u62df\u7f51\u6865\u4e2d\u79fb\u9664\u7684\u65b9\u5f0f\u6a21\u5f0f\u7f51\u7edc\u65ad\u8fde"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ docker network disconnect kind openyurt-e2e-test-worker2\n$ docker network disconnect kind openyurt-e2e-test-worker3\n\n$ kubectl get nodes -o wide\nAME                              STATUS     ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME\nopenyurt-e2e-test-control-plane   Ready      control-plane,master   36m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker          Ready      <none>                 35m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker2         NotReady   <none>                 35m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker3         NotReady   <none>                 35m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u66f4\u65b0 daemonset\uff0c\u5c06\u5bb9\u5668\u955c\u50cf\u4ece nginx:1.19.4 \u4fee\u6539\u4e3a nginx:1.19.5"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"***\ncontainers:\n      - name: nginx\n        image: nginx:1.19.5\n***\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u67e5\u770b pods\uff1a",(0,s.jsx)(e.code,{children:"openyurt-e2e-test-worker"}),"\u8282\u70b9\u4e0a\u65e7 pod ",(0,s.jsx)(e.code,{children:"default/nginx-daemonset-fhsr6"}),"\u5df2\u88ab\u5220\u9664\uff0c\u65b0 pod ",(0,s.jsx)(e.code,{children:"default/nginx-daemonset-slp5t"}),"\u88ab\u521b\u5efa; \u4e24\u4e2a\u7f51\u7edc\u65ad\u8fde\u8282\u70b9\u4e0a\u7684 pods \u6682\u4e0d\u8fdb\u884c\u66f4\u65b0\u5347\u7ea7"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx-daemonset-bv5jg   1/1     Running   0          33m     10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-lmmtd   1/1     Running   0          33m     10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-slp5t   1/1     Running   0          5m54s   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6062\u590d\u8282\u70b9\u7f51\u7edc\u8fde\u63a5"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ docker network connect kind openyurt-e2e-test-worker2\n$ docker network connect kind openyurt-e2e-test-worker3\n\n$ kubectl get nodes -o wide\nNAME                              STATUS   ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME\nopenyurt-e2e-test-control-plane   Ready    control-plane,master   49m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker          Ready    <none>                 48m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker2         Ready    <none>                 48m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker3         Ready    <none>                 48m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u67e5\u770b pods, \u6240\u6709\u8282\u70b9\u4e0a daemonset pods \u5747\u5df2\u5b8c\u6210\u66f4\u65b0\u5347\u7ea7"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"nginx-daemonset-kbkf6   1/1     Running   0          88s   10.244.3.3   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-scgtv   1/1     Running   0          51s   10.244.2.3   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-slp5t   1/1     Running   0          11m   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u67e5\u770b pods \u955c\u50cf\u7248\u672c\uff0c\u5747\u5df2\u5347\u7ea7\u81f3nginx:1.19.5"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"***\nContainers:\n  nginx:\n    Container ID:   containerd://f7d4b3f1257a0d1d8da862671c11cb094f9fba1ba0041b7a5f783d9c9e4d8449\n    Image:          nginx:1.19.5\n    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639\n    Port:           <none>\n    Host Port:      <none>\n    State:          Running\n      Started:      Fri, 14 Oct 2022 14:21:25 +0800\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-wrhj8 (ro)\n***\n"})}),"\n",(0,s.jsx)(e.h3,{id:"3ota\u5347\u7ea7\u6a21\u578b",children:"3\uff09OTA\u5347\u7ea7\u6a21\u578b"}),"\n",(0,s.jsx)(e.h4,{id:"ota-\u5347\u7ea7\u63a5\u53e3",children:"OTA \u5347\u7ea7\u63a5\u53e3"}),"\n",(0,s.jsx)(e.p,{children:"YurtHub \u63d0\u4f9b\u4e86\u4e24\u4e2a OTA \u5347\u7ea7\u76f8\u5173\u7684 REST APIs\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GET /pods"})}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u8be5\u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6\u8282\u70b9\u4e0a pods \u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade"})}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u8fc7\u8be5\u63a5\u53e3\u7528\u6237\u53ef\u4ee5\u6307\u5b9a\u66f4\u65b0\u67d0\u4e2a DaemonSet Pod\u3002\u8def\u5f84\u53c2\u6570 ",(0,s.jsx)(e.code,{children:"ns"})," \u4e0e ",(0,s.jsx)(e.code,{children:"podname"})," \u5206\u522b\u4ee3\u8868 Pod \u7684 \u547d\u540d\u7a7a\u95f4\u4ee5\u53ca\u540d\u79f0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"ota-\u5347\u7ea7\u793a\u4f8b",children:"OTA \u5347\u7ea7\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u521b\u5efa daemonset \u5b9e\u4f8b"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: nginx-daemonset\n  annotations:\n    apps.openyurt.io/update-strategy: ota\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: OnDelete\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.19.4\n\nEOF\n\n# get nginx-daemonset pods\n$ kubectl get pods -o wide | grep nginx-daemonset\nnginx-daemonset-bwzss   1/1     Running   0          92s   10.244.3.4   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-ppf9p   1/1     Running   0          92s   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-rgp9h   1/1     Running   0          92s   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u67e5\u770b pod status condition ",(0,s.jsx)(e.code,{children:"PodNeedUpgrade"}),"\uff0c \u4ee5",(0,s.jsx)(e.code,{children:"openyurt-e2e-test-worker2"}),"\u8282\u70b9\u4e0a pod ",(0,s.jsx)(e.code,{children:"nginx-daemonset-bwzss"})," \u4e3a\u4f8b"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ kubectl describe pods nginx-daemonset-bwzss\n\n***\nConditions:\n  Type              Status\n  PodNeedUpgrade    False\n***\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u66f4\u65b0 daemonset\uff0c\u5c06\u5bb9\u5668\u955c\u50cf\u4ece nginx:1.19.4\u4fee\u6539\u4e3a nginx:1.19.5"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"***\ncontainers:\n      - name: nginx\n        image: nginx:1.19.5\n***\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u518d\u6b21\u67e5\u770b pod status condition ",(0,s.jsx)(e.code,{children:"PodNeedUpgrade"})]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ kubectl describe pods nginx-daemonset-bwzss\n\n***\nConditions:\n  Type              Status\n  PodNeedUpgrade    True\n***\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8fdb\u5165\u8282\u70b9",(0,s.jsx)(e.code,{children:"openyurt-e2e-test-worker2"}),"\uff0c\u6267\u884cOTA\u5347\u7ea7"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# Kind \u96c6\u7fa4\u4e2d\u9700\u8981\u5148\u8fdb\u5165\u8fb9\u7f18\u8282\u70b9\n$ docker exec -it openyurt-e2e-test-worker2 /bin/bash\n\n# \u8c03\u7528 Upgrade API, \u8be5\u5347\u7ea7\u63a5\u53e3\u4ec5\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u63d0\u4f9b\n$ curl -X POST 127.0.0.1:10267/openyurt.io/v1/namespaces/default/pods/nginx-daemonset-bwzss/upgrade\nStart updating pod default/nginx-daemonset-bwzss\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u68c0\u67e5OTA\u5347\u7ea7\u7ed3\u679c, \u8282\u70b9",(0,s.jsx)(e.code,{children:"openyurt-e2e-test-worker2"}),"\u4e0apod ",(0,s.jsx)(e.code,{children:"nginx-daemonset-bwzss"}),"\u5df2\u7ecf\u88ab\u5220\u9664\uff0c\u65b0\u521b\u5efa pod \u4e3a ",(0,s.jsx)(e.code,{children:"nginx-daemonset-vrvhn"})]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"# \u68c0\u67e5OTA\u5347\u7ea7\u7ed3\u679c\n$ kubectl get pods -o wide | grep nginx-daemonset\nnginx-daemonset-ppf9p   1/1     Running   0          15m   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-rgp9h   1/1     Running   0          15m   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-vrvhn   1/1     Running   0          63s   10.244.3.5   openyurt-e2e-test-worker2   <none>           <none>\n\n# \u67e5\u770b\u5bb9\u5668\u955c\u50cf\u7248\u672c\n$ kubectl describe pods nginx-daemonset-vrvhn\n***\nContainers:\n  nginx:\n    Container ID:   containerd://18df6aa88076639353ea0b3d87f340cd4c86ab27a7f154bce06345e9764c997a\n    Image:          nginx:1.19.5\n    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639\n    Port:           <none>\n    Host Port:      <none>\n    State:          Running\n      Started:      Fri, 14 Oct 2022 16:25:20 +0800\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-p6kjh (ro)\n***\n"})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>d});var t=o(96540);const s={},r=t.createContext(s);function a(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);