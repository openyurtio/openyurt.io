"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[10],{72343:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"installation/coredns-prepare","title":"CoreDNS Adjustment","description":"1.Background","source":"@site/versioned_docs/version-v1.3/installation/coredns-prepare.md","sourceDirName":"installation","slug":"/installation/coredns-prepare","permalink":"/docs/v1.3/installation/coredns-prepare","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/coredns-prepare.md","tags":[],"version":"v1.3","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1734214326000,"frontMatter":{"title":"CoreDNS Adjustment"}}');var t=o(74848),r=o(28453);const a={title:"CoreDNS Adjustment"},l=void 0,c={},i=[{value:"1.Background",id:"1background",level:2},{value:"2 Configure CoreDNS Service",id:"2-configure-coredns-service",level:2},{value:"3 Use CoreDNS DaemonSet",id:"3-use-coredns-daemonset",level:3},{value:"4 Scale Down CoreDNS Deployment Replicas",id:"4-scale-down-coredns-deployment-replicas",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1background",children:"1.Background"}),"\n",(0,t.jsxs)(n.p,{children:["In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, based on VPN tunnel that provided by Raven, domain name resolution cross ",(0,t.jsx)(n.code,{children:"NodePool"})," will cause some latency, so we also recommend end users to use ",(0,t.jsx)(n.code,{children:"Daemonset"})," or ",(0,t.jsx)(n.code,{children:"YurtAppDaemon"})," to deploy CoreDNS. At the same time, we should also set the topologyKeys of kube-dns service as NodePool or HostName."]}),"\n",(0,t.jsx)(n.h2,{id:"2-configure-coredns-service",children:"2 Configure CoreDNS Service"}),"\n",(0,t.jsx)(n.p,{children:"Add annotation to coredns service, which will make sure domain name resolution can be handled by CoreDNS instance in the same NodePool."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n"})}),"\n",(0,t.jsx)(n.p,{children:"The results of modifications:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\nspec:\n  clusterIP: xx.xx.xx.xx\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-use-coredns-daemonset",children:"3 Use CoreDNS DaemonSet"}),"\n",(0,t.jsxs)(n.p,{children:["The original CoreDNS is deployed by ",(0,t.jsx)(n.code,{children:"DaemonSet"}),", please modify the settings manually (the CoreDNS image version can be adjusted to demand)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-scale-down-coredns-deployment-replicas",children:"4 Scale Down CoreDNS Deployment Replicas"}),"\n",(0,t.jsx)(n.p,{children:"Only support when CoreDNS is deployed by deployment workload."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl scale --replicas=0 deployment/coredns -n kube-system\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>l});var s=o(96540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);