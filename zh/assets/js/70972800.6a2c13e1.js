"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[20360],{94446:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"installation/coredns-prepare","title":"CoreDNS \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574","description":"1.\u80cc\u666f\u8bf4\u660e","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.4/installation/coredns-prepare.md","sourceDirName":"installation","slug":"/installation/coredns-prepare","permalink":"/zh/docs/installation/coredns-prepare","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/coredns-prepare.md","tags":[],"version":"v1.4","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"CoreDNS \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574"}}');var s=o(74848),r=o(28453);const a={title:"CoreDNS \u5b89\u88c5\u76f8\u5173\u914d\u7f6e\u8c03\u6574"},l=void 0,c={},i=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2 CoreDNS \u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",id:"2-coredns-\u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",level:3},{value:"3 CoreDNS DaemonSet\u90e8\u7f72",id:"3-coredns-daemonset\u90e8\u7f72",level:3},{value:"4 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570",id:"4-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u822c\u573a\u666f\u4e0b\uff0cCoreDNS\u662f\u4ee5Deployment\u5f62\u5f0f\u90e8\u7f72\uff0c\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u901a\u8fc7Raven\u63d0\u4f9b\u7684VPN\u96a7\u9053\uff0c\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u8de8",(0,s.jsx)(n.code,{children:"NodePool"}),"\u53ef\u80fd\u4f1a\u5e26\u6765\u5ef6\u8fdf\u6216\u8005\u8d85\u65f6\u5931\u8d25\u3002\u56e0\u6b64\u4e5f\u63a8\u8350\u4f7f\u7528",(0,s.jsx)(n.code,{children:"Daemonset"}),"\u6216\u8005",(0,s.jsx)(n.code,{children:"YurtAppDaemon"}),"\u5f62\u5f0f\u6765\u90e8\u7f72CoreDNS\uff0c\u540c\u65f6kube-dns service\u6d41\u91cf\u62d3\u6251\u914d\u7f6e\u6210NodePool/Hostname, \u4ece\u800c\u89e3\u51b3\u57df\u540d\u89e3\u6790\u5ef6\u8fdf\u95ee\u9898\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"2-coredns-\u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251",children:"2 CoreDNS \u652f\u6301\u670d\u52a1\u6d41\u91cf\u62d3\u6251"}),"\n",(0,s.jsx)(n.p,{children:"\u589e\u52a0annotation\uff0c\u5229\u7528OpenYurt\u4e2dYurthub\u7684\u8fb9\u7f18\u6570\u636e\u8fc7\u6ee4\u673a\u5236\u5b9e\u73b0\u670d\u52a1\u6d41\u91cf\u62d3\u6251\u80fd\u529b\uff0c\u786e\u4fdd\u8282\u70b9\u4e0a\u7684\u57df\u540d\u89e3\u6790\u8bf7\u6c42\u53ea\u4f1a\u53d1\u7ed9\u540c\u4e00\u8282\u70b9\u6c60\u5185\u7684CoreDNS\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u5229\u7528openyurt\u5b9e\u73b0endpoint\u8fc7\u6ee4\nkubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\u540e\u6548\u679c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\nspec:\n  clusterIP: 10.254.0.10\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-coredns-daemonset\u90e8\u7f72",children:"3 CoreDNS DaemonSet\u90e8\u7f72"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679cCoreDNS\u539f\u672c\u4f7f\u7528DaemonSet\u90e8\u7f72\uff0c\u53ef\u4ee5\u624b\u5de5\u8fdb\u884c\u5982\u4e0b\u8c03\u6574(CoreDNS\u7684\u955c\u50cf\u53ef\u8c03\u6574\u4e3a\u81ea\u5df1\u7684\u7248\u672c)\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-\u51cf\u5c11coredns-deployment-\u526f\u672c\u6570",children:"4 \u51cf\u5c11CoreDNS Deployment \u526f\u672c\u6570"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679ck8s\u4e0d\u662f\u7528Deployment\u90e8\u7f72\uff0c\u53ef\u4ee5\u4e0d\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl scale --replicas=0 deployment/coredns -n kube-system\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var t=o(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);