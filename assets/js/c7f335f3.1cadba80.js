"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6263],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(k,l(l({ref:n},c),{},{components:t})):o.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},240:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=t(3117),r=(t(7294),t(3905));const a={title:"OpenYurt Precondition"},l=void 0,s={unversionedId:"installation/openyurt-prepare",id:"version-v0.7.0/installation/openyurt-prepare",title:"OpenYurt Precondition",description:"0.Background",source:"@site/versioned_docs/version-v0.7.0/installation/openyurt-prepare.md",sourceDirName:"installation",slug:"/installation/openyurt-prepare",permalink:"/docs/installation/openyurt-prepare",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-prepare.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Tomoya Fujita",lastUpdatedAt:1660716631,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{title:"OpenYurt Precondition"}},i={},p=[{value:"0.Background",id:"0background",level:2},{value:"1. Kube-Controller-Manager Adjustment",id:"1-kube-controller-manager-adjustment",level:2},{value:"2. CoreDNS Adjustment",id:"2-coredns-adjustment",level:2},{value:"2.1 Configure CoreDNS ConfigMap",id:"21-configure-coredns-configmap",level:3},{value:"2.2 Configure CoreDNS Service",id:"22-configure-coredns-service",level:3},{value:"2.3 Use CoreDNS DaemonSet",id:"23-use-coredns-daemonset",level:3},{value:"2.4 Scale Down CoreDNS Deployment Replicas",id:"24-scale-down-coredns-deployment-replicas",level:3},{value:"3. KubeProxy Adjustment",id:"3-kubeproxy-adjustment",level:2},{value:"KubeProxy Service Topology",id:"kubeproxy-service-topology",level:3},{value:"Restart KubeProxy Pod",id:"restart-kubeproxy-pod",level:3},{value:"KubeProxy Functional Verification",id:"kubeproxy-functional-verification",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"0background"},"0.Background"),(0,r.kt)("p",null,"OpenYurt need to change kubernetes component configurations to adapt to edge environment. The components include: Kube-Controller-Manager, CoreDNS,KubeProxy etc."),(0,r.kt)("h2",{id:"1-kube-controller-manager-adjustment"},"1. Kube-Controller-Manager Adjustment"),(0,r.kt)("p",null,"In order to make the yurt-controller-mamanger work properly, we need to turn off the default nodelifecycle controller in Kube-Controller-Manager.\nThe nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper ",(0,r.kt)("inlineCode",{parentName:"p"},"--controllers"),"option.\nAssume that the original option looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"--controllers=*,bootstrapsigner,tokencleaner"),", to disable\nthe nodelifecycle controller, we change the option to ",(0,r.kt)("inlineCode",{parentName:"p"},"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"),"."),(0,r.kt)("p",null,"If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in to the master node,\nthen above operations can be done by revising the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifests/kube-controller-manager.yaml"),". After revision, the kube-controller-manager will be\nrestarted automatically."),(0,r.kt)("h2",{id:"2-coredns-adjustment"},"2. CoreDNS Adjustment"),(0,r.kt)("p",null,"In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, domain name resolution could not cross ",(0,r.kt)("inlineCode",{parentName:"p"},"NodePool"),", so CoreDNS need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Daemonset")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"YurtAppDaemon")," to deploy. Its main function is to resolve hostname to tunnelserver address."),(0,r.kt)("h3",{id:"21-configure-coredns-configmap"},"2.1 Configure CoreDNS ConfigMap"),(0,r.kt)("p",null,"Add hosts for ",(0,r.kt)("inlineCode",{parentName:"p"},"coredns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigMap")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"        hosts /etc/edge/tunnel-nodes {\n            reload 300ms\n            fallthrough\n        }\n")),(0,r.kt)("p",null,"The results of modifications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  Corefile: |\n    .:53 {\n        errors\n        log . {\n          class denial success\n\n        }\n        health {\n           lameduck 5s\n        }\n        ready\n        hosts /etc/edge/tunnel-nodes { # add hosts plugin\n            reload 300ms\n            fallthrough\n        }\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf {\n           max_concurrent 1000\n        }\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n")),(0,r.kt)("h3",{id:"22-configure-coredns-service"},"2.2 Configure CoreDNS Service"),(0,r.kt)("p",null,"Add annotation to coredns service, which could use openyurt\u2019s ability to choose local endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n")),(0,r.kt)("p",null,"The results of modifications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  creationTimestamp: "2022-02-14T10:13:37Z"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\n  resourceVersion: "65474309"\n  selfLink: /api/v1/namespaces/kube-system/services/kube-dns\n  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1\nspec:\n  clusterIP: xx.xx.xx.xx\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n')),(0,r.kt)("h3",{id:"23-use-coredns-daemonset"},"2.3 Use CoreDNS DaemonSet"),(0,r.kt)("p",null,"The original CoreDNS is deployed by ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet"),", please follow below steps to modify.\n1) change the coredns to your version;\n2) mount ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-nodes")," to pod\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n        - mountPath: /etc/edge\n          name: hosts\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccount: coredns\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n      - configMap:\n          defaultMode: 420\n          name: yurt-tunnel-nodes\n        name: hosts\n")),(0,r.kt)("h3",{id:"24-scale-down-coredns-deployment-replicas"},"2.4 Scale Down CoreDNS Deployment Replicas"),(0,r.kt)("p",null,"Only support when CoreDNS is deployed by deployment workload."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale --replicas=0 deployment/coredns -n kube-system\n")),(0,r.kt)("h2",{id:"3-kubeproxy-adjustment"},"3. KubeProxy Adjustment"),(0,r.kt)("p",null,"The k8s cluster created by kubeadm will generate a kubeconfig for kubeproxy. If we do not modify default configuration like ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/"},(0,r.kt)("inlineCode",{parentName:"a"},"Service Topology"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/"},(0,r.kt)("inlineCode",{parentName:"a"},"Topology Aware Hints")),", KubeProxy will use the kubeconfig to get all endpoints."),(0,r.kt)("p",null,"In cloud-edge scenario, edge node could not communicate with each other, so endpoints need implement nodepool topology."),(0,r.kt)("h3",{id:"kubeproxy-service-topology"},"KubeProxy Service Topology"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit cm -n kube-system kube-proxy\n")),(0,r.kt)("p",null,"Comment ",(0,r.kt)("inlineCode",{parentName:"p"},"config.conf")," file's property ",(0,r.kt)("inlineCode",{parentName:"p"},"clientConnection.kubeconfig"),"\uff0cso kube-proxy will use ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/access-api-from-pod/#directly-accessing-the-rest-api"},"InClusterConfig")," to access kube-apiserver. the modification result\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    bindAddressHardFail: false\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf\n      qps: 0\n    clusterCIDR: 100.64.0.0/10\n    configSyncPeriod: 0s\n// ...\n')),(0,r.kt)("h3",{id:"restart-kubeproxy-pod"},"Restart KubeProxy Pod"),(0,r.kt)("p",null,"To put the new configuration into effect, we should restart ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeproxy"),", be cautiously used in a production environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pod -n kube-system -l k8s-app=kube-proxy\n")),(0,r.kt)("h3",{id:"kubeproxy-functional-verification"},"KubeProxy Functional Verification"),(0,r.kt)("p",null,"We could verify modify result by view ",(0,r.kt)("inlineCode",{parentName:"p"},"KubeProxy")," log. ",(0,r.kt)("strong",{parentName:"p"},"We don't recommend you to change the flags as the logs maybe outbreak.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit ds -n kube-system kube-proxy\n")),(0,r.kt)("p",null,"Append parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--v=6")," to container's command, and the change result is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  annotations:\n    deprecated.daemonset.template.generation: "3"\n  creationTimestamp: "2022-05-10T06:27:27Z"\n  generation: 3\n  labels:\n    k8s-app: kube-proxy\n  name: kube-proxy\n  namespace: kube-system\n  resourceVersion: "5377081"\n  uid: 0f8eccdd-d26f-48f0-8401-8d762a630dc8\nspec:\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      k8s-app: kube-proxy\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        k8s-app: kube-proxy\n    spec:\n      containers:\n      - command:\n        - /usr/local/bin/kube-proxy\n        - --config=/var/lib/kube-proxy/config.conf\n        - --hostname-override=$(NODE_NAME)\n        - --v=6\n')),(0,r.kt)("p",null,"Check ",(0,r.kt)("inlineCode",{parentName:"p"},"KubeProxy"),"'s stdout, if ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiServer"),"'s address is ",(0,r.kt)("inlineCode",{parentName:"p"},"169.254.2.1:10268")," which means modify success. The sample logs like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"I0521 02:57:01.986790       1 round_trippers.go:454] GET https://169.254.2.1:10268/api/v1/nodes/jd-sh-qianyi-test-02 200 OK in 12 milliseconds\nI0521 02:57:02.021682       1 round_trippers.go:454] POST https://169.254.2.1:10268/api/v1/namespaces/default/events 201 Created in 4 milliseconds                                                       \n")))}u.isMDXComponent=!0}}]);