"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6809],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(k,l(l({ref:n},i),{},{components:t})):a.createElement(k,l({ref:n},i))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4094:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=t(7462),o=(t(7294),t(3905));const r={title:"YurtAppDaemon"},l=void 0,p={unversionedId:"user-manuals/workload/yurt-app-daemon",id:"version-v1.0/user-manuals/workload/yurt-app-daemon",title:"YurtAppDaemon",description:"Background",source:"@site/versioned_docs/version-v1.0/user-manuals/workload/yurt-app-daemon.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-app-daemon",permalink:"/docs/user-manuals/workload/yurt-app-daemon",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-app-daemon.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"YurtAppDaemon"},sidebar:"version-v1.0/docs",previous:{title:"YurtAppSet",permalink:"/docs/user-manuals/workload/yurt-app-set"},next:{title:"Prometheus",permalink:"/docs/user-manuals/monitoring/prometheus"}},s={},u=[{value:"Background",id:"background",level:2},{value:"Usage\uff1a",id:"usage",level:2},{value:"Example for deploying coredns",id:"example-for-deploying-coredns",level:2}],i={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"In edge scenarios, edge nodes from the same region will be assigned to the same NodePool, at which point some system components, such as CoreDNS, will typically need to be deployed in NodePool dimension. When creating the NodePool, we want to create these system components automatically, without any manual operations."),(0,o.kt)("p",null,"YurtAppDaemon ensures that all or some of the NodePools run replicas with a Deployment or StatefulSet template. As NodePools are created, these sub-Deployments or sub-StatefulSets are added to the cluster and the creation/updating of them are controlled by the YurtAppDaemon controller."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/31456432/1641999454831-b8f2f9f4-c715-4063-8444-b0af22830092.png",alt:"img"})),(0,o.kt)("h2",{id:"usage"},"Usage\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create test1 NodePool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test1\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test1\n  type: Edge\n\n\nEOF\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create test2 NodePool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: test2\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: test2\n  type: Edge\n\nEOF\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add nodes to the corresponding NodePool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," kubectl label node cn-beijing.172.23.142.31 apps.openyurt.io/desired-nodepool=test1\n kubectl label node cn-beijing.172.23.142.32 apps.openyurt.io/desired-nodepool=test1\n\n kubectl label node cn-beijing.172.23.142.34 apps.openyurt.io/desired-nodepool=test2\n kubectl label node cn-beijing.172.23.142.35 apps.openyurt.io/desired-nodepool=test2\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create YurtAppDaemon")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: daemon-1\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: daemon-1\n\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: daemon-1\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: daemon-1\n        template:\n          metadata:\n            labels:\n              app: daemon-1\n          spec:\n            containers:\n            - image: nginx:1.18.0\n              imagePullPolicy: Always\n              name: nginx\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "nginx"\n\nEOF\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Label test1 NodePool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label np test1 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Label test2 NodePool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label np test2 yurtappdaemon.openyurt.io/type=nginx\n\n# Check the Deployment\nkubectl get deployments.apps\n\n# Check the Deployment nodeselector\n\n# Check the Pod\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update YurtAppDaemon")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Change yurtappdaemon workloadTemplate replicas to 2\n\n# Change yurtappdaemon workloadTemplate image to nginx:1.19.0\n\n# Check the Pod\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove NodePool labels")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Remove the nodepool test1 label\nkubectl label np test1 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n\n# Remove the nodepool test2 label\nkubectl label np test2 yurtappdaemon.openyurt.io/type-\n\n# Check the Deployment\n\n# Check the Pod\n")),(0,o.kt)("h2",{id:"example-for-deploying-coredns"},"Example for deploying coredns"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"YurtAppDaemon"),"+",(0,o.kt)("inlineCode",{parentName:"p"},"service topology")," to solve dns resolution problems")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create NodePool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  selector:\n    matchLabels:\n      apps.openyurt.io/nodepool: hangzhou\n  taints:\n    - effect: NoSchedule\n      key: node-role.openyurt.io/edge\n  type: Edge\n\n\nEOF\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add label to NodePool")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label np hangzhou yurtappdaemon.openyurt.io/type=coredns\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy coredns")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n\n\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtAppDaemon\nmetadata:\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n       k8s-app: kube-dns\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          k8s-app: kube-dns\n      spec:\n        replicas: 2\n        selector:\n          matchLabels:\n            k8s-app: kube-dns\n        template:\n          metadata:\n            labels:\n              k8s-app: kube-dns\n          spec:\n            volumes:\n            - name: config-volume\n              configMap:\n               name: coredns\n               items:\n               - key: Corefile\n                 path: Corefile\n                 name: coredns\n            dnsPolicy: Default\n            serviceAccount: coredns\n            serviceAccountName: coredns\n            containers:\n            - args:\n              - -conf\n              - /etc/coredns/Corefile\n              image: k8s.gcr.io/coredns:1.6.7\n              imagePullPolicy: IfNotPresent\n              name: coredns\n              resources:\n                limits:\n                  memory: 170Mi\n                requests:\n                  cpu: 100m\n                  memory: 70Mi\n              securityContext:\n                allowPrivilegeEscalation: false\n                capabilities:\n                  add:\n                  - NET_BIND_SERVICE\n                  drop:\n                  - all\n                readOnlyRootFilesystem: true        \n              livenessProbe:\n                failureThreshold: 5\n                httpGet:\n                  path: /health\n                  port: 8080\n                  scheme: HTTP\n                initialDelaySeconds: 60\n                periodSeconds: 10\n                successThreshold: 1\n                timeoutSeconds: 5  \n              volumeMounts:\n              - mountPath: /etc/coredns\n                name: config-volume\n                readOnly: true\n  nodepoolSelector:\n    matchLabels:\n      yurtappdaemon.openyurt.io/type: "coredns"\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: kube-system\n  annotations:\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\nspec:\n  clusterIP: __kubernetes-coredns-ip__  ##\u4fee\u6539\u4e3akubernetes dns service ip\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP   \n---\napiVersion: v1\ndata:\n  Corefile: |\n    .:53 {\n        errors\n        health {\n           lameduck 5s\n        }\n        ready\n        kubernetes cluster.local in-addr.arpa ip6.arpa {\n           pods insecure\n           fallthrough in-addr.arpa ip6.arpa\n           ttl 30\n        }\n        prometheus :9153\n        forward . /etc/resolv.conf\n        cache 30\n        loop\n        reload\n        loadbalance\n    }\nkind: ConfigMap\nmetadata:\n  name: coredns\n  namespace: kube-system\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: coredns\n  namespace: kube-system\n  labels:\n      kubernetes.io/cluster-service: "true"\n      addonmanager.kubernetes.io/mode: Reconcile\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n    addonmanager.kubernetes.io/mode: Reconcile\n  name: system:coredns\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - endpoints\n  - services\n  - pods\n  - namespaces\n  verbs:\n  - list\n  - watch\n- apiGroups:\n  - ""\n  resources:\n  - nodes\n  verbs:\n  - get\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: "true"\n  labels:\n    kubernetes.io/bootstrapping: rbac-defaults\n    addonmanager.kubernetes.io/mode: EnsureExists\n  name: system:coredns\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:coredns\nsubjects:\n- kind: ServiceAccount\n  name: coredns\n  namespace: kube-system\n\n\nEOF\n')))}c.isMDXComponent=!0}}]);