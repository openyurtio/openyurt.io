"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(y,s(s({ref:n},p),{},{components:t})):o.createElement(y,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24213:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={title:"CoreDNS Adjustment"},s=void 0,l={unversionedId:"installation/coredns-prepare",id:"installation/coredns-prepare",title:"CoreDNS Adjustment",description:"1.Background",source:"@site/docs/installation/coredns-prepare.md",sourceDirName:"installation",slug:"/installation/coredns-prepare",permalink:"/docs/next/installation/coredns-prepare",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/coredns-prepare.md",tags:[],version:"current",lastUpdatedBy:"rambohe",lastUpdatedAt:1684291708,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{title:"CoreDNS Adjustment"}},i={},c=[{value:"1.Background",id:"1background",level:2},{value:"2 Configure CoreDNS Service",id:"2-configure-coredns-service",level:2},{value:"3 Use CoreDNS DaemonSet",id:"3-use-coredns-daemonset",level:3},{value:"4 Scale Down CoreDNS Deployment Replicas",id:"4-scale-down-coredns-deployment-replicas",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1background"},"1.Background"),(0,r.kt)("p",null,"In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, based on VPN tunnel that provided by Raven, domain name resolution cross ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePool")," will cause some latency, so we also recommend end users to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Daemonset")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtAppDaemon")," to deploy CoreDNS. At the same time, we should also set the topologyKeys of kube-dns service as NodePool or HostName."),(0,r.kt)("h2",{id:"2-configure-coredns-service"},"2 Configure CoreDNS Service"),(0,r.kt)("p",null,"Add annotation to coredns service, which will make sure domain name resolution can be handled by CoreDNS instance in the same NodePool."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n")),(0,r.kt)("p",null,"The results of modifications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\nspec:\n  clusterIP: xx.xx.xx.xx\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n')),(0,r.kt)("h3",{id:"3-use-coredns-daemonset"},"3 Use CoreDNS DaemonSet"),(0,r.kt)("p",null,"The original CoreDNS is deployed by ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet"),", please modify the settings manually (the CoreDNS image version can be adjusted to demand)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n")),(0,r.kt)("h3",{id:"4-scale-down-coredns-deployment-replicas"},"4 Scale Down CoreDNS Deployment Replicas"),(0,r.kt)("p",null,"Only support when CoreDNS is deployed by deployment workload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale --replicas=0 deployment/coredns -n kube-system\n")))}d.isMDXComponent=!0}}]);