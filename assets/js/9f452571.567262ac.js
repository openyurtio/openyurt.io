"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[41813],{12233:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=o(85893),t=o(11151);const r={title:"OpenYurt Precondition"},i=void 0,a={id:"installation/openyurt-prepare",title:"OpenYurt Precondition",description:"1.Background",source:"@site/versioned_docs/version-v1.1/installation/openyurt-prepare.md",sourceDirName:"installation",slug:"/installation/openyurt-prepare",permalink:"/docs/v1.1/installation/openyurt-prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/openyurt-prepare.md",tags:[],version:"v1.1",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171831465e4,frontMatter:{title:"OpenYurt Precondition"}},l={},c=[{value:"1.Background",id:"1background",level:2},{value:"2. Kube-Controller-Manager Adjustment",id:"2-kube-controller-manager-adjustment",level:2},{value:"3. Kube-apiserver Adjustment",id:"3-kube-apiserver-adjustment",level:2},{value:"4. CoreDNS Adjustment",id:"4-coredns-adjustment",level:2},{value:"4.1 Configure CoreDNS Service",id:"41-configure-coredns-service",level:3},{value:"4.2 Use CoreDNS DaemonSet",id:"42-use-coredns-daemonset",level:3},{value:"4.3 Scale Down CoreDNS Deployment Replicas",id:"43-scale-down-coredns-deployment-replicas",level:3},{value:"5. KubeProxy Adjustment",id:"5-kubeproxy-adjustment",level:2},{value:"5.1 KubeProxy Service Topology",id:"51-kubeproxy-service-topology",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1background",children:"1.Background"}),"\n",(0,s.jsxs)(n.p,{children:["OpenYurt need to change kubernetes component configurations to adapt to edge environment. The components include",":Kube-apiserver",", Kube-Controller-Manager, CoreDNS,KubeProxy etc\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"2-kube-controller-manager-adjustment",children:"2. Kube-Controller-Manager Adjustment"}),"\n",(0,s.jsxs)(n.p,{children:["In order to make the yurt-controller-mamanger work properly, we need to turn off the default nodelifecycle controller in Kube-Controller-Manager.\nThe nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper ",(0,s.jsx)(n.code,{children:"--controllers"}),"option.\nAssume that the original option looks like ",(0,s.jsx)(n.code,{children:"--controllers=*,bootstrapsigner,tokencleaner"}),", to disable\nthe nodelifecycle controller, we change the option to ",(0,s.jsx)(n.code,{children:"--controllers=-nodelifecycle,*,bootstrapsigner,tokencleaner"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in to the master node,\nthen above operations can be done by revising the file ",(0,s.jsx)(n.code,{children:"/etc/kubernetes/manifests/kube-controller-manager.yaml"}),". After revision, the kube-controller-manager will be\nrestarted automatically."]}),"\n",(0,s.jsx)(n.h2,{id:"3-kube-apiserver-adjustment",children:"3. Kube-apiserver Adjustment"}),"\n",(0,s.jsxs)(n.p,{children:["To make sure kube-apiserver on the master node use ",(0,s.jsx)(n.code,{children:"hostname:port"})," to access kubelet, and at the same time this hostname resolution request should be handled by ",(0,s.jsx)(n.code,{children:"yurt-tunnel-dns"})," pod. We should apply some adjustments to kube-apiserver configurations."]}),"\n",(0,s.jsx)(n.p,{children:"We assume your kube-apiserver is installed through static pod(/etc/kubernetes/manifests/kube-apiserver.yaml)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'modifiy dnsPolicy="None"'}),"\n",(0,s.jsxs)(n.li,{children:["add dnsConfig configurations which set the ",(0,s.jsx)(n.code,{children:"nameservers"})," as the ",(0,s.jsx)(n.code,{children:"clusterIP"})," of ",(0,s.jsx)(n.code,{children:"yurt-tunnel-dns service"})," (assumed to be ",(0,s.jsx)(n.code,{children:"1.2.3.4"})," here)"]}),"\n",(0,s.jsxs)(n.li,{children:["modify startup parameters ",(0,s.jsx)(n.code,{children:"--kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP"}),", to make sure that Kube-apiserver prefers to use Hostname to access kubelet"]}),"\n",(0,s.jsxs)(n.li,{children:["delete startup parameters ",(0,s.jsx)(n.code,{children:"--kubelet-certificate-authority"}),", to make sure that kube-apisever don't calibrate TLS certificate of yurt-tunnel-server (If you create your cluster from kubeadm, this step can be omitted since it don't have this settings by default)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ vi /etc/kubernetes/manifests/kube-apiserver.yaml\napiVersion: v1\nkind: Pod\n...\nspec:\n  dnsPolicy: "None" # 1. dnsPolicy\u4fee\u6539\u4e3aNone\n  dnsConfig:        # 2. \u589e\u52a0dnsConfig\u914d\u7f6e\n    nameservers:\n      - 1.2.3.4 # \u4f7f\u7528yurt-tunnel-dns service\u7684clusterIP\u66ff\u6362\n    searches:\n      - kube-system.svc.cluster.local\n      - svc.cluster.local\n      - cluster.local\n    options:\n      - name: ndots\n        value: "5"\n  containers:\n  - command:\n    - kube-apiserver\n  ...\n    - --kubelet-preferred-address-types=Hostname,InternalIP,ExternalIP # 3. \u628aHostname\u653e\u5728\u7b2c\u4e00\u4f4d\n  ...\n'})}),"\n",(0,s.jsx)(n.h2,{id:"4-coredns-adjustment",children:"4. CoreDNS Adjustment"}),"\n",(0,s.jsxs)(n.p,{children:["In general, CoreDNS uses deployment as workload. But in cloud-edge scenario, domain name resolution could not cross ",(0,s.jsx)(n.code,{children:"NodePool"}),", so CoreDNS need to use ",(0,s.jsx)(n.code,{children:"Daemonset"})," or ",(0,s.jsx)(n.code,{children:"YurtAppDaemon"})," to deploy. At the same time, we should also set the topologyKeys of kube-dns service as NodePool."]}),"\n",(0,s.jsx)(n.h3,{id:"41-configure-coredns-service",children:"4.1 Configure CoreDNS Service"}),"\n",(0,s.jsx)(n.p,{children:"Add annotation to coredns service, which could use openyurt\u2019s ability to choose local endpoint."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl annotate svc kube-dns -n kube-system openyurt.io/topologyKeys='openyurt.io/nodepool'\n"})}),"\n",(0,s.jsx)(n.p,{children:"The results of modifications:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    openyurt.io/topologyKeys: openyurt.io/nodepool\n    prometheus.io/port: "9153"\n    prometheus.io/scrape: "true"\n  creationTimestamp: "2022-02-14T10:13:37Z"\n  labels:\n    k8s-app: kube-dns\n    kubernetes.io/cluster-service: "true"\n    kubernetes.io/name: KubeDNS\n  name: kube-dns\n  namespace: kube-system\n  resourceVersion: "65474309"\n  selfLink: /api/v1/namespaces/kube-system/services/kube-dns\n  uid: ee23195f-44c3-4c70-99e2-aff4d5cf0ae1\nspec:\n  clusterIP: xx.xx.xx.xx\n  ports:\n  - name: dns\n    port: 53\n    protocol: UDP\n    targetPort: 53\n  - name: dns-tcp\n    port: 53\n    protocol: TCP\n    targetPort: 53\n  - name: metrics\n    port: 9153\n    protocol: TCP\n    targetPort: 9153\n  selector:\n    k8s-app: kube-dns\n  sessionAffinity: None\n  type: ClusterIP\n'})}),"\n",(0,s.jsx)(n.h3,{id:"42-use-coredns-daemonset",children:"4.2 Use CoreDNS DaemonSet"}),"\n",(0,s.jsxs)(n.p,{children:["The original CoreDNS is deployed by ",(0,s.jsx)(n.code,{children:"DaemonSet"}),", please modify the settings manually (the CoreDNS image version can be adjusted to demand)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  labels:\n    k8s-app: kube-dns\n  name: coredns\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      k8s-app: kube-dns\n  template:\n    metadata:\n      labels:\n        k8s-app: kube-dns\n    spec:\n      containers:\n      - args:\n        - -conf\n        - /etc/coredns/Corefile\n        image: registry.aliyuncs.com/google_containers/coredns:1.7.0\n        livenessProbe:\n          failureThreshold: 5\n          httpGet:\n            path: /health\n            port: 8080\n            scheme: HTTP\n          initialDelaySeconds: 60\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 5\n        name: coredns\n        ports:\n        - containerPort: 53\n          name: dns\n          protocol: UDP\n        - containerPort: 53\n          name: dns-tcp\n          protocol: TCP\n        - containerPort: 9153\n          name: metrics\n          protocol: TCP\n        readinessProbe:\n          failureThreshold: 3\n          httpGet:\n            path: /ready\n            port: 8181\n            scheme: HTTP\n          periodSeconds: 10\n          successThreshold: 1\n          timeoutSeconds: 1\n        resources:\n          limits:\n            memory: 170Mi\n          requests:\n            cpu: 100m\n            memory: 70Mi\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            add:\n            - NET_BIND_SERVICE\n            drop:\n            - all\n          readOnlyRootFilesystem: true\n        volumeMounts:\n        - mountPath: /etc/coredns\n          name: config-volume\n          readOnly: true\n      dnsPolicy: Default\n      nodeSelector:\n        kubernetes.io/os: linux\n      priorityClassName: system-cluster-critical\n      serviceAccount: coredns\n      serviceAccountName: coredns\n      tolerations:\n      - operator: Exists\n      - key: CriticalAddonsOnly\n        operator: Exists\n      - effect: NoSchedule\n        key: node-role.kubernetes.io/master\n      volumes:\n      - configMap:\n          defaultMode: 420\n          items:\n          - key: Corefile\n            path: Corefile\n          name: coredns\n        name: config-volume\n"})}),"\n",(0,s.jsx)(n.h3,{id:"43-scale-down-coredns-deployment-replicas",children:"4.3 Scale Down CoreDNS Deployment Replicas"}),"\n",(0,s.jsx)(n.p,{children:"Only support when CoreDNS is deployed by deployment workload."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl scale --replicas=0 deployment/coredns -n kube-system\n"})}),"\n",(0,s.jsx)(n.h2,{id:"5-kubeproxy-adjustment",children:"5. KubeProxy Adjustment"}),"\n",(0,s.jsxs)(n.p,{children:["The k8s cluster created by kubeadm will generate a kubeconfig for kubeproxy. If we do not modify default configuration like ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service-topology/",children:(0,s.jsx)(n.code,{children:"Service Topology"})})," and ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/topology-aware-hints/",children:(0,s.jsx)(n.code,{children:"Topology Aware Hints"})}),", KubeProxy will use the kubeconfig to get all endpoints."]}),"\n",(0,s.jsx)(n.p,{children:"In cloud-edge scenario, edge node could not communicate with each other, so endpoints need implement nodepool topology."}),"\n",(0,s.jsx)(n.h3,{id:"51-kubeproxy-service-topology",children:"5.1 KubeProxy Service Topology"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl edit cm -n kube-system kube-proxy\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Comment ",(0,s.jsx)(n.code,{children:"config.conf"})," file's property ",(0,s.jsx)(n.code,{children:"clientConnection.kubeconfig"}),"\uff0cso kube-proxy will use ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/run-application/access-api-from-pod/#directly-accessing-the-rest-api",children:"InClusterConfig"})," to access kube-apiserver. the modification result\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\ndata:\n  config.conf: |-\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    bindAddress: 0.0.0.0\n    bindAddressHardFail: false\n    clientConnection:\n      acceptContentTypes: ""\n      burst: 0\n      contentType: ""\n      #kubeconfig: /var/lib/kube-proxy/kubeconfig.conf\n      qps: 0\n    clusterCIDR: 100.64.0.0/10\n    configSyncPeriod: 0s\n// ...\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{a:()=>i});var s=o(67294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);