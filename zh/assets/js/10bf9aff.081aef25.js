"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[23701],{6752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=r(85893),s=r(11151);const t={title:"OpenYurt \u5b89\u88c5\u76f8\u5173Kubernetes\u914d\u7f6e\u8c03\u6574"},l=void 0,c={id:"installation/openyurt-prepare",title:"OpenYurt \u5b89\u88c5\u76f8\u5173Kubernetes\u914d\u7f6e\u8c03\u6574",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/installation/openyurt-prepare.md",sourceDirName:"installation",slug:"/installation/openyurt-prepare",permalink:"/zh/docs/v1.0/installation/openyurt-prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-prepare.md",tags:[],version:"v1.0",lastUpdatedBy:"wesleysu",lastUpdatedAt:1710812587,formattedLastUpdatedAt:"2024\u5e743\u670819\u65e5",frontMatter:{title:"OpenYurt \u5b89\u88c5\u76f8\u5173Kubernetes\u914d\u7f6e\u8c03\u6574"}},i={},a=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2. Kube-Controller-Manager\u8c03\u6574",id:"2-kube-controller-manager\u8c03\u6574",level:2},{value:"3. Kube-apiserver\u8c03\u6574",id:"3-kube-apiserver\u8c03\u6574",level:2},{value:"4. CoreDNS\u8c03\u6574",id:"4-coredns\u8c03\u6574",level:2},{value:"4.1 CoreDNS \u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",id:"41-coredns-\u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",level:3},{value:"4.2 CoreDNS DaemonSet\u90e8\u7f72",id:"42-coredns-daemonset\u90e8\u7f72",level:3},{value:"4.3 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570",id:"43-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570",level:3},{value:"5. KubeProxy\u8c03\u6574",id:"5-kubeproxy\u8c03\u6574",level:2},{value:"5.1 KubeProxy\u652f\u6301\u6d41\u91cf\u62d3\u6251",id:"51-kubeproxy\u652f\u6301\u6d41\u91cf\u62d3\u6251",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,o.jsx)(n.p,{children:"\u4e3a\u9002\u5e94\u4e91\u8fb9\u534f\u540c\u573a\u666f\uff0c\u7528\u6237\u9700\u8981\u5bf9K8S\u505a\u4e00\u4e9b\u8c03\u6574\uff0c\u5982Kube-Controller-Manager, CoreDNS, KubeProxy\u7b49\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"2-kube-controller-manager\u8c03\u6574",children:"2. Kube-Controller-Manager\u8c03\u6574"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e3a\u4e86\u8ba9 ",(0,o.jsx)(n.code,{children:"yurt-controller-mamanger"})," \u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u6211\u4eec\u9700\u8981\u5173\u95edKube-Controller-Manager\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\u3002\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,o.jsx)(n.code,{children:"--controllers"})," \u53c2\u6570\u503c\u5e76\u91cd\u542f ",(0,o.jsx)(n.code,{children:"kube-controller-manager"})," \u6765\u7981\u7528 ",(0,o.jsx)(n.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5047\u8bbe\u6700\u521d\u7684\u53c2\u6570\u503c\u50cf\u8fd9\u6837 ",(0,o.jsx)(n.code,{children:"--controllers=*,bootstrapsigner,tokencleaner"}),"\uff0c\u8981\u7981\u7528 ",(0,o.jsx)(n.code,{children:"nodelifecycle"})," \u63a7\u5236\u5668\uff0c\u6211\u4eec\u9700\u8981\u5c06\u53c2\u6570\u503c\u66f4\u6539\u4e3a ",(0,o.jsx)(n.code,{children:"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c ",(0,o.jsx)(n.code,{children:"kube-controller-manager"})," \u662f\u4ee5\u9759\u6001 pod \u7684\u65b9\u5f0f\u90e8\u7f72\u5728 master \u8282\u70b9\u4e0a\uff0c\u5e76\u4e14\u60a8\u6709\u767b\u5f55 master \u8282\u70b9\u7684\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ",(0,o.jsx)(n.code,{children:"/etc/kubernetes/manifests/kube-controller-manager.yaml"})," \u6587\u4ef6\u6765\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u3002\u4fee\u6539\u540e\uff0c",(0,o.jsx)(n.code,{children:"kube-controller-manager"})," \u4f1a\u81ea\u52a8\u91cd\u542f\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"3-kube-apiserver\u8c03\u6574",children:"3. Kube-apiserver\u8c03\u6574"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e3a\u4e86\u4fdd\u8bc1Master\u8282\u70b9\u4e0akube-apiserver\u4f7f\u7528",(0,o.jsx)(n.code,{children:"hostname:port"}),"\u8bbf\u95eekubelet\uff0c\u540c\u65f6\u786e\u4fdd\u4f7f\u7528",(0,o.jsx)(n.code,{children:"yurt-tunnel-dns pod"}),"\u5bf9",(0,o.jsx)(n.code,{children:"hostname"}),"\u8fdb\u884c\u57df\u540d\u89e3\u6790\u3002kube-apiserver\u7684\u76f8\u5173\u914d\u7f6e\u8c03\u6574\u5982\u4e0b:"]}),"\n",(0,o.jsx)(n.p,{children:"\u5047\u5b9akube-apiserver\u662f\u4f7f\u7528static pod\u5b89\u88c5(/etc/kubernetes/manifests/kube-apiserver.yaml)"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'\u4fee\u6539dnsPolicy="None"'}),"\n",(0,o.jsxs)(n.li,{children:["\u589e\u52a0dnsConfig\u914d\u7f6e\uff0c\u5176\u4e2d\u7684",(0,o.jsx)(n.code,{children:"nameservers"}),"\u914d\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"yurt-tunnel-dns service"}),"\u7684",(0,o.jsx)(n.code,{children:"clusterIP"}),"(\u8fd9\u91cc\u5047\u5b9a\u4e3a",(0,o.jsx)(n.code,{children:"1.2.3.4"}),")"]}),"\n",(0,o.jsx)(n.li,{children:"\u4fee\u6539\u542f\u52a8\u53c2\u6570--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP\uff0c\u786e\u4fddKube-apiserver\u4f18\u5148\u4f7f\u7528Hostname\u8bbf\u95eekubelet"}),"\n",(0,o.jsx)(n.li,{children:"\u5220\u9664\u542f\u52a8\u53c2\u6570--kubelet-certificate-authority\uff0c\u786e\u4fddkube-apiserver\u4e0d\u6821\u9a8cyurt-tunnel-server\u7684TLS\u8bc1\u4e66(kubeadm\u642d\u5efa\u7684\u96c6\u7fa4\u4e2d\uff0c\u9ed8\u8ba4\u6ca1\u6709\u914d\u7f6e\u8be5\u53c2\u6570\uff0c\u53ef\u76f4\u63a5\u5ffd\u7565)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ vi /etc/kubernetes/manifests/kube-apiserver.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  dnsPolicy: "None" # 1. dnsPolicy\u4fee\u6539\u4e3aNone\n  dnsConfig:        # 2. \u589e\u52a0dnsConfig\u914d\u7f6e\n    nameservers:\n      - 1.2.3.4 # \u4f7f\u7528yurt-tunnel-dns service\u7684clusterIP\u66ff\u6362\n    searches:\n      - kube-system.svc.cluster.local\n      - svc.cluster.local\n      - cluster.local\n    options:\n      - name: ndots\n        value: "5"\n  containers:\n  - command:\n    - kube-apiserver\n  ...\n    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. \u628aHostname\u653e\u5728\u7b2c\u4e00\u4f4d\n  ...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"4-coredns\u8c03\u6574",children:"4. CoreDNS\u8c03\u6574"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e00\u822c\u573a\u666f\u4e0b\uff0cCoreDNS\u662f\u4ee5Deployment\u5f62\u5f0f\u90e8\u7f72\uff0c\u5728\u8fb9\u7aef\u573a\u666f\u4e0b\uff0c\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u65e0\u6cd5\u8de8",(0,o.jsx)(n.code,{children:"NodePool"}),"\uff0c\u6240\u4ee5CoreDNS\u9700\u8981\u4ee5",(0,o.jsx)(n.code,{children:"Daemonset"}),"\u6216\u8005",(0,o.jsx)(n.code,{children:"YurtAppDaemon"}),"\u5f62\u5f0f\u90e8\u7f72\uff0c\u540c\u65f6kube-dns service\u6d41\u91cf\u62d3\u6251\u914d\u7f6e\u6210NodePool\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"41-coredns-\u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",children:"4.1 CoreDNS \u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251"}),"\n",(0,o.jsx)(n.p,{children:"\u589e\u52a0annotation\uff0c\u5229\u7528OpenYurt\u4e2dYurthub\u7684\u8fb9\u7f18\u6570\u636e\u8fc7\u6ee4\u673a\u5236\u5b9e\u73b0\u670d\u52a1\u6d41\u91cf\u62d3\u6251\u80fd\u529b\uff0c\u786e\u4fdd\u8282\u70b9\u4e0a\u7684\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53ea\u4f1a\u53d1\u7ed9\u540c\u4e00\u8282\u70b9\u6c60\u5185\u7684CoreDNS\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# \u5229\u7528openyurt\u5b9e\u73b0endpoint\u8fc7\u6ee4\nkubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u4fee\u6539\u540e\u6548\u679c\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  creationTimestamp: "2022-02-14T10:13:37Z"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\n  resourceVersion: "65474309"\n  selfLink: /api/v1/namespaces/kube-system/services/kube-dns\n  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1\nspec:\n  clusterIP: 10.254.0.10\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n'})}),"\n",(0,o.jsx)(n.h3,{id:"42-coredns-daemonset\u90e8\u7f72",children:"4.2 CoreDNS DaemonSet\u90e8\u7f72"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679cCoreDNS\u539f\u672c\u4f7f\u7528DaemonSet\u90e8\u7f72\uff0c\u53ef\u4ee5\u624b\u5de5\u8fdb\u884c\u5982\u4e0b\u8c03\u6574(CoreDNS\u7684\u955c\u50cf\u53ef\u8c03\u6574\u4e3a\u81ea\u5df1\u7684\u7248\u672c)\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccount: coredns\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n"})}),"\n",(0,o.jsx)(n.h3,{id:"43-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570",children:"4.3 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679ck8s\u4e0d\u662f\u7528Deployment\u90e8\u7f72\uff0c\u53ef\u4ee5\u4e0d\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl scale --replicas=0 deployment/coredns -n kube-system\n"})}),"\n",(0,o.jsx)(n.h2,{id:"5-kubeproxy\u8c03\u6574",children:"5. KubeProxy\u8c03\u6574"}),"\n",(0,o.jsxs)(n.p,{children:["kubeadm\u90e8\u7f72\u7684k8s\u96c6\u7fa4\u4f1a\u4e3aKubeProxy\u751f\u6210kubeconfig\u914d\u7f6e\uff0c\u5728\u4e0d\u914d\u7f6e",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/",children:(0,o.jsx)(n.code,{children:"Service Topology"})})," \u548c ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/",children:(0,o.jsx)(n.code,{children:"Topology Aware Hints"})})," \u60c5\u51b5\u4e0b\uff0cKubeProxy\u4f7f\u7528\u8fd9\u4e2akubeconfig\u62ff\u5230\u7684endpoints\u662f\u5168\u91cf\u7684\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4e91\u8fb9\u7aef\u573a\u666f\u4e0b\uff0c\u8fb9\u7f18\u8282\u70b9\u95f4\u5f88\u6709\u53ef\u80fd\u65e0\u6cd5\u4e92\u901a\uff0c\u56e0\u6b64\u9700\u8981endpoints\u57fa\u4e8enodepool\u8fdb\u884c\u62d3\u6251\u3002\u76f4\u63a5\u5c06kube-proxy\u7684kubeconfig\u914d\u7f6e\u5220\u9664\uff0c\u5c06apiserver\u8bf7\u6c42\u7ecf\u8fc7yurthub\u5373\u53ef\u89e3\u51b3\u670d\u52a1\u62d3\u6251\u95ee\u9898\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"51-kubeproxy\u652f\u6301\u6d41\u91cf\u62d3\u6251",children:"5.1 KubeProxy\u652f\u6301\u6d41\u91cf\u62d3\u6251"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl edit cm -n kube-system kube-proxy\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6ce8\u91ca\u6389",(0,o.jsx)(n.code,{children:"config.conf"}),"\u6587\u4ef6\u4e0b\u7684",(0,o.jsx)(n.code,{children:"clientConnection.kubeconfig"}),"\uff0c\u4fee\u6539\u5b8c\u540e\u6548\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    bindAddressHardFail: false\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf <-- \u5220\u9664\u8fd9\u4e2a\u914d\u7f6e\n      qps: 0\n    clusterCIDR: 100.64.0.0/10\n    configSyncPeriod: 0s\n// \u7701\u7565\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{a:()=>l});var o=r(67294);const s={},t=o.createContext(s);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);