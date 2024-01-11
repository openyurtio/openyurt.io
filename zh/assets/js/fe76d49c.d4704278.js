"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[66279],{98834:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=o(85893),d=o(11151);const s={title:"\u670d\u52a1\u62d3\u6251"},l=void 0,i={id:"user-manuals/network/service-topology",title:"\u670d\u52a1\u62d3\u6251",description:"\u4f7f\u7528\u670d\u52a1\u62d3\u6251\u5b9e\u73b0\u8fb9\u7f18\u6d41\u91cf\u95ed\u73af\u80fd\u529b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/user-manuals/network/service-topology.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/service-topology",permalink:"/zh/docs/v1.1/user-manuals/network/service-topology",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/service-topology.md",tags:[],version:"v1.1",lastUpdatedBy:"rambohe",lastUpdatedAt:1704942947,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{title:"\u670d\u52a1\u62d3\u6251"},sidebar:"docs",previous:{title:"\u8fb9\u7f18Pod\u7f51\u7edc",permalink:"/zh/docs/v1.1/user-manuals/network/edge-pod-network"},next:{title:"\u8fb9\u7f18Ingress",permalink:"/zh/docs/v1.1/user-manuals/network/edge-ingress"}},r={},a=[{value:"\u4f7f\u7528\u670d\u52a1\u62d3\u6251\u5b9e\u73b0\u8fb9\u7f18\u6d41\u91cf\u95ed\u73af\u80fd\u529b",id:"\u4f7f\u7528\u670d\u52a1\u62d3\u6251\u5b9e\u73b0\u8fb9\u7f18\u6d41\u91cf\u95ed\u73af\u80fd\u529b",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5\u6f14\u793a",id:"\u4f7f\u7528\u65b9\u6cd5\u6f14\u793a",level:2},{value:"\u914d\u7f6e kube-proxy",id:"\u914d\u7f6e-kube-proxy",level:3},{value:"\u521b\u5efa\u8282\u70b9\u6c60",id:"\u521b\u5efa\u8282\u70b9\u6c60",level:3},{value:"\u521b\u5efa UnitedDeployment",id:"\u521b\u5efa-uniteddeployment",level:3},{value:"\u521b\u5efa\u542b\u6709 openyurt.io/topologyKeys \u6ce8\u89e3\u7684\u670d\u52a1",id:"\u521b\u5efa\u542b\u6709-openyurtiotopologykeys-\u6ce8\u89e3\u7684\u670d\u52a1",level:3},{value:"\u521b\u5efa\u4e0d\u542b openyurt.io/topologyKeys \u6ce8\u89e3\u7684\u670d\u52a1",id:"\u521b\u5efa\u4e0d\u542b-openyurtiotopologykeys-\u6ce8\u89e3\u7684\u670d\u52a1",level:3},{value:"\u6d4b\u8bd5\u670d\u52a1\u62d3\u6251\u529f\u80fd",id:"\u6d4b\u8bd5\u670d\u52a1\u62d3\u6251\u529f\u80fd",level:3}];function p(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u670d\u52a1\u62d3\u6251\u5b9e\u73b0\u8fb9\u7f18\u6d41\u91cf\u95ed\u73af\u80fd\u529b",children:"\u4f7f\u7528\u670d\u52a1\u62d3\u6251\u5b9e\u73b0\u8fb9\u7f18\u6d41\u91cf\u95ed\u73af\u80fd\u529b"}),"\n",(0,t.jsx)(e.p,{children:"\u670d\u52a1\u62d3\u6251\uff08Service Topology\uff09\u53ef\u4ee5\u8ba9\u4e00\u4e2a\u670d\u52a1\u6839\u636e\u96c6\u7fa4\u7684\u8282\u70b9\u62d3\u6251\u8fdb\u884c\u6d41\u91cf\u8def\u7531\u3002 \u4f8b\u5982\uff0c\u4e00\u4e2a\u670d\u52a1\u53ef\u4ee5\u6307\u5b9a\u6d41\u91cf\u88ab\u4f18\u5148\u8def\u7531\u5230\u548c\u5ba2\u6237\u7aef pod \u76f8\u540c\u7684\u8282\u70b9\u6216\u8005\u8282\u70b9\u6c60\u4e0a\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u5728\u539f\u751f\u7684 Service \u4e0a\u6dfb\u52a0 Annotation \u5b9e\u73b0\u6d41\u91cf\u7684\u62d3\u6251\u914d\u7f6e\uff0c\u76f8\u5173\u53c2\u6570\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"center"},children:(0,t.jsx)(e.strong,{children:"annotation Key"})}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:(0,t.jsx)(e.strong,{children:"annotation Value"})}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"openyurt.io/topologyKeys"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"kubernetes.io/hostname"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u6d41\u91cf\u88ab\u8def\u7531\u5230\u76f8\u540c\u7684\u8282\u70b9"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"openyurt.io/topologyKeys"}),(0,t.jsxs)(e.td,{style:{textAlign:"center"},children:["openyurt.io/nodepool ",(0,t.jsx)("br",{}),"\u6216 ",(0,t.jsx)("br",{}),"kubernetes.io/zone",(0,t.jsx)("br",{})]}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u6d41\u91cf\u88ab\u8def\u7531\u5230\u76f8\u540c\u7684\u8282\u70b9\u6c60"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:["\u4e0b\u56fe\u4e3a\u670d\u52a1\u62d3\u6251\u529f\u80fd\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002",(0,t.jsx)(e.code,{children:"service-ud1"})," \u6dfb\u52a0\u4e86\u6ce8\u89e3 ",(0,t.jsx)(e.code,{children:"openyurt.io/topologyKeys: openyurt.io/nodepool "}),", \u5f53 ",(0,t.jsx)(e.code,{children:"pod6"})," \u8bbf\u95ee ",(0,t.jsx)(e.code,{children:"service-ud1"})," \u7684\u65f6\u5019\uff0c\u7531\u4e8e ",(0,t.jsx)(e.code,{children:"pod6"})," \u4f4d\u4e8e ",(0,t.jsx)(e.code,{children:"edge node2"}),"\uff0c\u4e5f\u5c31\u662f\u4f4d\u4e8e\u676d\u5dde\u8282\u70b9\u6c60\uff0c\u56e0\u6b64\u5176\u6d41\u91cf\u53ea\u4f1a\u53d1\u5f80\u676d\u5dde\u8282\u70b9\u6c60\u7684 ",(0,t.jsx)(e.code,{children:"pod1"})," \u6216 ",(0,t.jsx)(e.code,{children:"pod2"}),"\u4e0a\uff0c\u800c\u4e0d\u4f1a\u8de8\u8282\u70b9\u6c60\uff0c\u6240\u4ee5 ",(0,t.jsx)(e.code,{children:"pod3"})," \u548c ",(0,t.jsx)(e.code,{children:"pod4"})," \u6536\u4e0d\u5230\u3002\u4ece\u800c\u5b9e\u73b0\u4e86\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\u4e2d\u7684\u6d41\u91cf\u95ed\u73af\u3002"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"service-topology",src:o(41207).Z+"",width:"1167",height:"529"})}),"\n",(0,t.jsx)(e.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Kubernetes v1.18\u6216\u4ee5\u4e0a\u7248\u672c\uff0c\u56e0\u4e3a\u9700\u8981\u652f\u6301 EndpointSlice \u8d44\u6e90\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86 Yurt-app-manager\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u6cd5\u6f14\u793a",children:"\u4f7f\u7528\u65b9\u6cd5\u6f14\u793a"}),"\n",(0,t.jsx)(e.p,{children:"\u786e\u4fdd Kubernetes \u7248\u672c\u5927\u4e8e1.18\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ kubectl get node\nNAME                 STATUS   ROLES    AGE     VERSION\nkind-control-plane   Ready    master   6m21s   v1.18.19\nkind-worker          Ready    <none>   5m42s   v1.18.19\nkind-worker2         Ready    <none>   5m42s   v1.18.19\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u786e\u4fdd\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86 Yurt-app-manager\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-BASH",children:"$ kubectl get pod -n kube-system \nNAME                                         READY   STATUS    RESTARTS   AGE\ncoredns-66bff467f8-jxvnw                     1/1     Running   0          7m28s\ncoredns-66bff467f8-lk8v5                     1/1     Running   0          7m28s\netcd-kind-control-plane                      1/1     Running   0          7m39s\nkindnet-5dpxt                                1/1     Running   0          7m28s\nkindnet-ckz88                                1/1     Running   0          7m10s\nkindnet-sqxs7                                1/1     Running   0          7m10s\nkube-apiserver-kind-control-plane            1/1     Running   0          7m39s\nkube-controller-manager-kind-control-plane   1/1     Running   0          5m38s\nkube-proxy-ddgjt                             1/1     Running   0          7m28s\nkube-proxy-j25kr                             1/1     Running   0          7m10s\nkube-proxy-jt9cw                             1/1     Running   0          7m10s\nkube-scheduler-kind-control-plane            1/1     Running   0          7m39s\nyurt-app-manager-699ffdcb78-8m9sf            1/1     Running   0          37s\nyurt-app-manager-699ffdcb78-fdqmq            1/1     Running   0          37s\nyurt-controller-manager-6c95788bf-jrqts      1/1     Running   0          6m17s\nyurt-hub-kind-control-plane                  1/1     Running   0          3m36s\nyurt-hub-kind-worker                         1/1     Running   0          4m50s\nyurt-hub-kind-worker2                        1/1     Running   0          4m50s\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u914d\u7f6e-kube-proxy",children:"\u914d\u7f6e kube-proxy"}),"\n",(0,t.jsxs)(e.p,{children:["\u5f00\u542f ",(0,t.jsx)(e.code,{children:"kube-proxy"})," \u7684 ",(0,t.jsx)(e.code,{children:"EndpointSliceProxying"})," [\u7279\u6027\u95e8\u63a7](",(0,t.jsx)(e.a,{href:"https://kubernetes.io/zh/docs/reference/command-line-tools-reference/feature-gates/",children:"\u7279\u6027\u95e8\u63a7 | Kubernetes"}),")\uff0c\u5e76\u914d\u7f6e\u5176\u8fde\u63a5 ",(0,t.jsx)(e.code,{children:"Yurthub"}),"\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'$ kubectl edit cm -n kube-system kube-proxy\napiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    featureGates: # 1. enable EndpointSliceProxying feature gate.\n      EndpointSliceProxying: true\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf # 2. comment this line.\n      qps: 0\n    clusterCIDR: 10.244.0.0/16\n    configSyncPeriod: 0s\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u91cd\u542f ",(0,t.jsx)(e.code,{children:"kube-proxy"}),"\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'$ kubectl delete pod --selector k8s-app=kube-proxy -n kube-system\npod "kube-proxy-cbsmj" deleted\npod "kube-proxy-cqwcs" deleted\npod "kube-proxy-m9dgk" deleted\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u521b\u5efa\u8282\u70b9\u6c60",children:"\u521b\u5efa\u8282\u70b9\u6c60"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u521b\u5efa\u7528\u4e8e\u6d4b\u8bd5\u7684\u8282\u70b9\u6c60\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\n\n---\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n\n---\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: shanghai\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-shanghai\n  labels:\n    apps.openyurt.io/example: test-shanghai\nEOF\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5c06\u4e3b\u8282\u70b9 ",(0,t.jsx)(e.code,{children:"kind-control-plane"})," \u52a0\u5165\u5230\u5317\u4eac\u8282\u70b9\u6c60\uff0c\u5de5\u4f5c\u8282\u70b9 ",(0,t.jsx)(e.code,{children:"kind-worker"})," \u52a0\u5165\u5230\u676d\u5dde\u8282\u70b9\u6c60\uff0c ",(0,t.jsx)(e.code,{children:"kind-worker2 "})," \u52a0\u5165\u5230\u4e0a\u6d77\u8282\u70b9\u6c60\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ kubectl label node kind-control-plane apps.openyurt.io/desired-nodepool=beijing\nnode/kind-control-plane labeled\n\n$ kubectl label node kind-worker apps.openyurt.io/desired-nodepool=hangzhou\nnode/kind-worker labeled\n\n$ kubectl label node kind-worker2 apps.openyurt.io/desired-nodepool=shanghai\nnode/kind-worker2 labeled\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u67e5\u770b\u8282\u70b9\u6c60\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ kubectl get np\nNAME       TYPE    READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud   1            0               63s\nhangzhou   Edge    1            0               63s\nshanghai   Edge    1            0               63s\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u521b\u5efa-uniteddeployment",children:"\u521b\u5efa UnitedDeployment"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u521b\u5efa ",(0,t.jsx)(e.code,{children:"united-deployment1"})," \u7528\u4e8e\u6d4b\u8bd5\u3002\u4e3a\u4e86\u4fbf\u4e8e\u6d4b\u8bd5\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"serve_hostname"})," \u955c\u50cf\uff0c\u5f53\u8bbf\u95ee 9376 \u7aef\u53e3\u65f6\uff0c\u5bb9\u5668\u4f1a\u8fd4\u56de\u5b83\u81ea\u5df1\u7684\u4e3b\u673a\u540d\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: united-deployment1\nspec:\n  selector:\n    matchLabels:\n      app: united-deployment1\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: united-deployment1\n      spec:\n        template:\n          metadata:\n            labels:\n              app: united-deployment1\n          spec:\n            containers:\n              - name: hostname\n                image: mirrorgooglecontainers/serve_hostname\n                ports:\n                - containerPort: 9376\n                  protocol: TCP\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 2\n    - name: shanghai\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - shanghai\n      replicas: 2\n  revisionHistoryLimit: 5\nEOF\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u521b\u5efa ",(0,t.jsx)(e.code,{children:"united-deployment2"})," \u7528\u4e8e\u6d4b\u8bd5\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528",(0,t.jsx)(e.code,{children:"nginx"})," \u955c\u50cf\uff0c\u7528\u6765\u8bbf\u95ee\u7531 ",(0,t.jsx)(e.code,{children:"united-deployment1"})," \u521b\u5efa\u7684 ",(0,t.jsx)(e.code,{children:"hostname"})," pod\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: united-deployment2\nspec:\n  selector:\n    matchLabels:\n      app: united-deployment2\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: united-deployment2\n      spec:\n        template:\n          metadata:\n            labels:\n              app: united-deployment2\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n                ports:\n                - containerPort: 80\n                  protocol: TCP\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 2\n    - name: shanghai\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - shanghai\n      replicas: 2\n  revisionHistoryLimit: 5\nEOF\n'})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u67e5\u770b\u7531\u4e0a\u8ff0 unitedDeployment \u521b\u5efa\u51fa\u6765\u7684 pod \u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'$ kubectl get pod -l "app in (united-deployment1,united-deployment2)" -o wide\nNAME                                                 READY   STATUS    RESTARTS   AGE   IP           NODE           NOMINATED NODE   READINESS GATES\nunited-deployment1-hangzhou-fv6th-66ff6fd958-f2694   1/1     Running   0          18m   10.244.2.3   kind-worker    <none>           <none>\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95   1/1     Running   0          18m   10.244.2.2   kind-worker    <none>           <none>\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt   1/1     Running   0          18m   10.244.1.3   kind-worker2   <none>           <none>\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2   1/1     Running   0          18m   10.244.1.2   kind-worker2   <none>           <none>\nunited-deployment2-hangzhou-lpkzg-6d958b67b6-gf847   1/1     Running   0          15m   10.244.2.4   kind-worker    <none>           <none>\nunited-deployment2-hangzhou-lpkzg-6d958b67b6-lbnwl   1/1     Running   0          15m   10.244.2.5   kind-worker    <none>           <none>\nunited-deployment2-shanghai-tqgd4-57f7555494-9jvjb   1/1     Running   0          15m   10.244.1.5   kind-worker2   <none>           <none>\nunited-deployment2-shanghai-tqgd4-57f7555494-rn8n8   1/1     Running   0          15m   10.244.1.4   kind-worker2   <none>           <none>\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u521b\u5efa\u542b\u6709-openyurtiotopologykeys-\u6ce8\u89e3\u7684\u670d\u52a1",children:"\u521b\u5efa\u542b\u6709 openyurt.io/topologyKeys \u6ce8\u89e3\u7684\u670d\u52a1"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc-ud1\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\nspec:\n  selector:\n    app: united-deployment1\n  type: ClusterIP\n  ports:\n  - port: 80\n    targetPort: 9376\nEOF\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u521b\u5efa\u4e0d\u542b-openyurtiotopologykeys-\u6ce8\u89e3\u7684\u670d\u52a1",children:"\u521b\u5efa\u4e0d\u542b openyurt.io/topologyKeys \u6ce8\u89e3\u7684\u670d\u52a1"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc-ud1-without-topology\nspec:\n  selector:\n    app: united-deployment1\n  type: ClusterIP\n  ports:\n  - port: 80\n    targetPort: 9376\nEOF\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u6d4b\u8bd5\u670d\u52a1\u62d3\u6251\u529f\u80fd",children:"\u6d4b\u8bd5\u670d\u52a1\u62d3\u6251\u529f\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u901a\u8fc7\u4f7f\u7528\u4e0a\u6d77\u8282\u70b9\u6c60\u4e2d\u7684 pod \u8bbf\u95ee\u4e0a\u8ff0\u521b\u5efa\u7684\u4e24\u4e2a\u670d\u52a1\u6765\u6d4b\u8bd5\u670d\u52a1\u62d3\u6251\u529f\u80fd\u3002\u5f53\u8bbf\u95ee\u542b\u6709 ",(0,t.jsx)(e.code,{children:"openyurt.io/topologyKeys"})," \u6ce8\u89e3\u7684\u670d\u52a1\u65f6\uff0c\u6d41\u91cf\u4f1a\u88ab\u8def\u7531\u5230\u4f4d\u4e8e\u4e0a\u6d77\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0a\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4e3a\u4e86\u8fdb\u884c\u6bd4\u8f83\uff0c\u6211\u4eec\u9996\u5148\u6d4b\u8bd5\u6ca1\u6709",(0,t.jsx)(e.code,{children:"openyurt.io/topologyKeys"}),"\u6ce8\u89e3\u7684\u670d\u52a1\u3002\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u7684\u6d41\u91cf\u65e2\u53ef\u4ee5\u88ab\u676d\u5dde\u8282\u70b9\u6c60\u63a5\u6536\uff0c\u4e5f\u80fd\u88ab\u4e0a\u6d77\u8282\u70b9\u6c60\u63a5\u6536\uff0c\u5e76\u4e0d\u53d7\u8282\u70b9\u6c60\u7684\u9650\u5236\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ kubectl exec -it united-deployment2-shanghai-tqgd4-57f7555494-9jvjb bash\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-f2694\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7136\u540e\u6211\u4eec\u6d4b\u8bd5\u542b\u6709",(0,t.jsx)(e.code,{children:"openyurt.io/topologyKeys"}),"\u6ce8\u89e3\u7684\u670d\u52a1\u3002\u7ed3\u679c\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u5176\u6d41\u91cf\u53ea\u80fd\u8def\u7531\u5230\u4e0a\u6d77\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"$ kubectl exec -it united-deployment2-shanghai-tqgd4-57f7555494-9jvjb bash\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\n"})})]})}function c(n={}){const{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},41207:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/service-topology-example-60b16f131cb1d5e4fbdd797a79200a83.png"},11151:(n,e,o)=>{o.d(e,{Z:()=>i,a:()=>l});var t=o(67294);const d={},s=t.createContext(d);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);