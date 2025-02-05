"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[93953],{84701:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-manuals/network/service-topology","title":"Service Topology","description":"Service Topology enables a service to route traffic based on the Node topology of the cluster. For example, a service can specify that traffic be preferentially routed to endpoints that are on the same Node as the client, or in the same available NodePool.","source":"@site/versioned_docs/version-v0.5.0/user-manuals/network/service-topology.md","sourceDirName":"user-manuals/network","slug":"/user-manuals/network/service-topology","permalink":"/docs/v0.5.0/user-manuals/network/service-topology","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/service-topology.md","tags":[],"version":"v0.5.0","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1738794531000,"frontMatter":{"title":"Service Topology"},"sidebar":"docs","previous":{"title":"Edge Pod Network","permalink":"/docs/v0.5.0/user-manuals/network/edge-pod-network"},"next":{"title":"Edge Local Storage","permalink":"/docs/v0.5.0/user-manuals/storage/edge-local-storage"}}');var s=o(74848),i=o(28453);const r={title:"Service Topology"},a=void 0,l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Configure kube-proxy",id:"configure-kube-proxy",level:3},{value:"Create NodePools",id:"create-nodepools",level:3},{value:"Create UnitedDeployment",id:"create-uniteddeployment",level:3},{value:"Create Service with TopologyKeys",id:"create-service-with-topologykeys",level:3},{value:"Create Service without TopologyKeys",id:"create-service-without-topologykeys",level:3},{value:"Test Service Topology",id:"test-service-topology",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Service Topology"})," enables a service to route traffic based on the Node topology of the cluster. For example, a service can specify that traffic be preferentially routed to endpoints that are on the same Node as the client, or in the same available NodePool."]}),"\n",(0,s.jsxs)(n.p,{children:["The following picture shows the general function of the ",(0,s.jsx)(n.em,{children:"service topology"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"service-topology",src:o(34586).A+"",width:"1167",height:"529"})}),"\n",(0,s.jsxs)(n.p,{children:["To use ",(0,s.jsx)(n.em,{children:"service topology"}),", the ",(0,s.jsx)(n.code,{children:"EndpointSliceProxying"})," ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/",children:"feature gate"})," must be enabled, and kube-proxy needs to be configured to connect to Yurthub instead of the API server."]}),"\n",(0,s.jsxs)(n.p,{children:["You can set the ",(0,s.jsx)(n.code,{children:"topologyKeys"})," values of a service to direct traffic as follows. If ",(0,s.jsx)(n.code,{children:"topologyKeys"})," is not specified or empty, no topology constraints will be applied."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"annotation Key"})}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"annotation Value"})}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:(0,s.jsx)(n.strong,{children:"explain"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"openyurt.io/topologyKeys"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"kubernetes.io/hostname"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Only to endpoints on the same node."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"openyurt.io/topologyKeys"}),(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:["kubernetes.io/zone",(0,s.jsx)("br",{})," or ",(0,s.jsx)("br",{}),"openyurt.io/nodepool"]}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Only to endpoints on the same nodepool."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Kubernetes v1.18 or above, since EndpointSlice resource needs to be supported."}),"\n",(0,s.jsx)(n.li,{children:"Yurt-app-manager is deployed in the cluster."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(n.p,{children:"Ensure that kubernetes version is v1.18+."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get node\nNAME                 STATUS   ROLES    AGE     VERSION\nkind-control-plane   Ready    master   6m21s   v1.18.19\nkind-worker          Ready    <none>   5m42s   v1.18.19\nkind-worker2         Ready    <none>   5m42s   v1.18.19\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ensure that yurt-app-manager is deployed in the cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-BASH",children:"$ kubectl get pod -n kube-system \nNAME                                         READY   STATUS    RESTARTS   AGE\ncoredns-66bff467f8-jxvnw                     1/1     Running   0          7m28s\ncoredns-66bff467f8-lk8v5                     1/1     Running   0          7m28s\netcd-kind-control-plane                      1/1     Running   0          7m39s\nkindnet-5dpxt                                1/1     Running   0          7m28s\nkindnet-ckz88                                1/1     Running   0          7m10s\nkindnet-sqxs7                                1/1     Running   0          7m10s\nkube-apiserver-kind-control-plane            1/1     Running   0          7m39s\nkube-controller-manager-kind-control-plane   1/1     Running   0          5m38s\nkube-proxy-ddgjt                             1/1     Running   0          7m28s\nkube-proxy-j25kr                             1/1     Running   0          7m10s\nkube-proxy-jt9cw                             1/1     Running   0          7m10s\nkube-scheduler-kind-control-plane            1/1     Running   0          7m39s\nyurt-app-manager-699ffdcb78-8m9sf            1/1     Running   0          37s\nyurt-app-manager-699ffdcb78-fdqmq            1/1     Running   0          37s\nyurt-controller-manager-6c95788bf-jrqts      1/1     Running   0          6m17s\nyurt-hub-kind-control-plane                  1/1     Running   0          3m36s\nyurt-hub-kind-worker                         1/1     Running   0          4m50s\nyurt-hub-kind-worker2                        1/1     Running   0          4m50s\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configure-kube-proxy",children:"Configure kube-proxy"}),"\n",(0,s.jsxs)(n.p,{children:["To use ",(0,s.jsx)(n.em,{children:"service topology"}),", the ",(0,s.jsx)(n.code,{children:"EndpointSliceProxying"})," ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/feature-gates/",children:"feature gate"})," must be enabled, and kube-proxy needs to be configured to connect to Yurthub instead of the API server."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ kubectl edit cm -n kube-system kube-proxy\napiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    featureGates: # 1. enable EndpointSliceProxying feature gate.\n      EndpointSliceProxying: true\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf # 2. comment this line.\n      qps: 0\n    clusterCIDR: 10.244.0.0/16\n    configSyncPeriod: 0s\n'})}),"\n",(0,s.jsx)(n.p,{children:"Restart kube-proxy."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ kubectl delete pod --selector k8s-app=kube-proxy -n kube-system\npod "kube-proxy-cbsmj" deleted\npod "kube-proxy-cqwcs" deleted\npod "kube-proxy-m9dgk" deleted\n'})}),"\n",(0,s.jsx)(n.h3,{id:"create-nodepools",children:"Create NodePools"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create test nodepools."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\n\n---\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-hangzhou\n  labels:\n    apps.openyurt.io/example: test-hangzhou\n\n---\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: shanghai\nspec:\n  type: Edge\n  annotations:\n    apps.openyurt.io/example: test-shanghai\n  labels:\n    apps.openyurt.io/example: test-shanghai\nEOF\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add nodes to the nodepool."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl label node kind-control-plane apps.openyurt.io/desired-nodepool=beijing\nnode/kind-control-plane labeled\n\n$ kubectl label node kind-worker apps.openyurt.io/desired-nodepool=hangzhou\nnode/kind-worker labeled\n\n$ kubectl label node kind-worker2 apps.openyurt.io/desired-nodepool=shanghai\nnode/kind-worker2 labeled\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Get NodePool."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get np\nNAME       TYPE    READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud   1            0               63s\nhangzhou   Edge    1            0               63s\nshanghai   Edge    1            0               63s\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-uniteddeployment",children:"Create UnitedDeployment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create test united-deployment1. To facilitate testing, we use a ",(0,s.jsx)(n.code,{children:"serve_hostname"})," image. Each time port 9376 is accessed, the hostname container returns its own hostname."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: united-deployment1\nspec:\n  selector:\n    matchLabels:\n      app: united-deployment1\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: united-deployment1\n      spec:\n        template:\n          metadata:\n            labels:\n              app: united-deployment1\n          spec:\n            containers:\n              - name: hostname\n                image: mirrorgooglecontainers/serve_hostname\n                ports:\n                - containerPort: 9376\n                  protocol: TCP\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 2\n    - name: shanghai\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - shanghai\n      replicas: 2\n  revisionHistoryLimit: 5\nEOF\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create test united-deployment2. Here we use ",(0,s.jsx)(n.code,{children:"nginx"})," image, in order to access the ",(0,s.jsx)(n.code,{children:"hostname"})," pod that created by united-deployment1 above."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ cat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: united-deployment2\nspec:\n  selector:\n    matchLabels:\n      app: united-deployment2\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: united-deployment2\n      spec:\n        template:\n          metadata:\n            labels:\n              app: united-deployment2\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.19.3\n                ports:\n                - containerPort: 80\n                  protocol: TCP\n  topology:\n    pools:\n    - name: hangzhou\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - hangzhou\n      replicas: 2\n    - name: shanghai\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - shanghai\n      replicas: 2\n  revisionHistoryLimit: 5\nEOF\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Get pods that created by the unitedDeployment."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ kubectl get pod -l "app in (united-deployment1,united-deployment2)" -owide\nNAME                                                 READY   STATUS    RESTARTS   AGE   IP           NODE           NOMINATED NODE   READINESS GATES\nunited-deployment1-hangzhou-fv6th-66ff6fd958-f2694   1/1     Running   0          18m   10.244.2.3   kind-worker    <none>           <none>\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95   1/1     Running   0          18m   10.244.2.2   kind-worker    <none>           <none>\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt   1/1     Running   0          18m   10.244.1.3   kind-worker2   <none>           <none>\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2   1/1     Running   0          18m   10.244.1.2   kind-worker2   <none>           <none>\nunited-deployment2-hangzhou-lpkzg-6d958b67b6-gf847   1/1     Running   0          15m   10.244.2.4   kind-worker    <none>           <none>\nunited-deployment2-hangzhou-lpkzg-6d958b67b6-lbnwl   1/1     Running   0          15m   10.244.2.5   kind-worker    <none>           <none>\nunited-deployment2-shanghai-tqgd4-57f7555494-9jvjb   1/1     Running   0          15m   10.244.1.5   kind-worker2   <none>           <none>\nunited-deployment2-shanghai-tqgd4-57f7555494-rn8n8   1/1     Running   0          15m   10.244.1.4   kind-worker2   <none>           <none>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"create-service-with-topologykeys",children:"Create Service with TopologyKeys"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc-ud1\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\nspec:\n  selector:\n    app: united-deployment1\n  type: ClusterIP\n  ports:\n  - port: 80\n    targetPort: 9376\nEOF\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-service-without-topologykeys",children:"Create Service without TopologyKeys"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cat << EOF | kubectl apply -f -\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc-ud1-without-topology\nspec:\n  selector:\n    app: united-deployment1\n  type: ClusterIP\n  ports:\n  - port: 80\n    targetPort: 9376\nEOF\n"})}),"\n",(0,s.jsx)(n.h3,{id:"test-service-topology",children:"Test Service Topology"}),"\n",(0,s.jsxs)(n.p,{children:["We use the ",(0,s.jsx)(n.code,{children:"nginx"})," pod in the shanghai nodepool to test ",(0,s.jsx)(n.em,{children:"service topology"}),". Therefore, its traffic can only be routed to the nodes that in shanghai nodepool when it accesses a service with the ",(0,s.jsx)(n.code,{children:"openyurt.io/topologyKeys: openyurt.io/nodepool"})," annotation."]}),"\n",(0,s.jsx)(n.p,{children:"For comparison, we first test the service without serviceTopology annotation. As we can see, its traffic can be routed to any nodes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec -it united-deployment2-shanghai-tqgd4-57f7555494-9jvjb bash\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-twf95\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1-without-topology:80\nunited-deployment1-hangzhou-fv6th-66ff6fd958-f2694\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then we test the service with serviceTopology annotation. As expected, its traffic can only be routed to the nodes in shanghai nodepool."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec -it united-deployment2-shanghai-tqgd4-57f7555494-9jvjb bash\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-wjck2\nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# \nroot@united-deployment2-shanghai-tqgd4-57f7555494-9jvjb:/# curl svc-ud1:80\nunited-deployment1-shanghai-5p8zk-84bdd476b6-hr6xt\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},34586:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/service-topology-example-60b16f131cb1d5e4fbdd797a79200a83.png"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);