"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[26033],{6399:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"user-manuals/iot/edgex-foundry","title":"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907","description":"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u5b89\u88c5Yurt-Device-Controller \u548c Yurt-EdgeX-Manager\u7ec4\u4ef6\uff0c\u5e76\u901a\u8fc7\u90e8\u7f72\u865a\u62df\u7aef\u8bbe\u5907\u6765\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u7684\u65b9\u5f0f\u7ba1\u7406\u8fb9\u7f18\u7aef\u8bbe\u5907\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/user-manuals/iot/edgex-foundry.md","sourceDirName":"user-manuals/iot","slug":"/user-manuals/iot/edgex-foundry","permalink":"/zh/docs/v1.0/user-manuals/iot/edgex-foundry","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/iot/edgex-foundry.md","tags":[],"version":"v1.0","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907"},"sidebar":"docs","previous":{"title":"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e","permalink":"/zh/docs/v1.0/user-manuals/monitoring/prometheus"},"next":{"title":"YurtHub Performance Test","permalink":"/zh/docs/v1.0/test-report/yurthub-performance-test"}}');var o=r(74848),a=r(28453);const l={title:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907"},i="\u73af\u5883\u8981\u6c42",d={},s=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u5b89\u88c5Yurt-Device-Controller \u548c Yurt-EdgeX-Manager\u7ec4\u4ef6\uff0c\u5e76\u901a\u8fc7\u90e8\u7f72\u865a\u62df\u7aef\u8bbe\u5907\u6765\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u7684\u65b9\u5f0f\u7ba1\u7406\u8fb9\u7f18\u7aef\u8bbe\u5907\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e\u6709\u5174\u8da3\u7684\u8bfb\u8005\uff0c\u53ef\u4ee5\u53bb\u76f8\u5173\u7684github\u4ed3\u5e93\u53c2\u8003\u672c\u6587\u4f7f\u7528\u7ec4\u4ef6\u7684\u5177\u4f53\u5b9e\u73b0\uff1a",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-device-controller",children:"Yurt-Device-Controller"}),"\n\u548c ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-edgex-manager",children:"Yurt-EdgeX-Manager"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md",children:"yurtctl\u5de5\u5177"}),"\n\u6765\u521d\u59cb\u5316\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u6216\u5c06\u4e00\u4e2aKubernetes\u96c6\u7fa4\u8f6c\u6362\u4e3aOpenYurt\u96c6\u7fa4\u3002"]}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"OpenYurt v0.5.0+"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5b89\u88c5\u4e86 ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-app-manager",children:"Yurt-app-manager"})," \u7ec4\u4ef6"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u4e0emaster\u4e0d\u5728\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u7684\u8282\u70b9\u90fd\u9700\u8981\u90e8\u7f72coreDNS pod"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5c06\u8bbf\u95eecoreDNS service\u7684\u6d41\u91cf\u6539\u4e3a\u8282\u70b9\u6c60\u5185\u95ed\u73af\uff0c\u53c2\u8003",(0,o.jsx)(n.a,{href:"https://openyurt.io/docs/user-manuals/network/service-topology",children:"\u6559\u7a0b"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"1-\u5b89\u88c5yurt-edgex-manager\u5e76\u521b\u5efa\u4e00\u4e2aedgex\u5b9e\u4f8b",children:"1. \u5b89\u88c5yurt-edgex-manager\u5e76\u521b\u5efa\u4e00\u4e2aEdgeX\u5b9e\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u5b89\u88c5\u90e8\u7f72yurt-edgex-manager"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml\n\n# \u68c0\u67e5\u72b6\u6001\n$ kubectl get pods -n edgex-system |grep edgex\nedgex-controller-manager-6c99fd9f9f-b9nnk   2/2     Running   0          6d22h\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2ahangzhou\u8fb9\u7f18\u8282\u70b9\u6c60\uff0c\u5e76\u5c06\u8fb9\u7f18\u8282\u70b9\u52a0\u5165\u5230hangzhou\u8282\u70b9\u6c60"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# \u521b\u5efahangzhou\u8282\u70b9\u6c60\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: $WORKER_NODEPOOL\nspec:\n  type: Edge\nEOF\n\n# \u5c06\u8fb9\u7f18\u8282\u70b9\u52a0\u5165hangzhou\u8282\u70b9\u6c60\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool=hangzhou\n\n# \u68c0\u67e5\u8282\u70b9\u6c60\u72b6\u6001\n$ kubectl get nodepool\nNAME      TYPE   READYNODES   NOTREADYNODES   AGE\nhangzhou   Edge   0            1               6d22h\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728hangzhou\u8282\u70b9\u6c60\u4e2d\u521b\u5efaedgex foundry\u5b9e\u4f8b\uff0c\u5e76\u5728edgex\u4e2d\u90e8\u7f72\u865a\u62df\u8bbe\u5907",(0,o.jsx)(n.a,{href:"https://github.com/edgexfoundry/device-virtual-go",children:"edgex-device-virtual"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: device.openyurt.io/v1alpha1\nkind: EdgeX\nmetadata:\n  name: edgex-sample-beijing\nspec:\n  version: jakarta\n  poolname: hangzhou\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    org.edgexfoundry.service: edgex-device-virtual\n  name: edgex-device-virtual\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      org.edgexfoundry.service: edgex-device-virtual\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        org.edgexfoundry.service: edgex-device-virtual\n    spec:\n      hostname: edgex-device-virtual\n      nodeSelector:\n        apps.openyurt.io/nodepool: hangzhou\n      containers:\n      - name: edgex-device-virtual\n        image: openyurt/device-virtual:2.1.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 59900\n          name: "tcp-59900"\n          protocol: TCP\n        env:\n        - name: MESSAGEQUEUE_HOST\n          value: edgex-redis\n        - name: SERVICE_HOST\n          value: edgex-device-virtual\n        envFrom:\n        - configMapRef:\n            name: common-variables\n        startupProbe:\n          tcpSocket:\n            port: 59900\n          periodSeconds: 1\n          failureThreshold: 120\n        livenessProbe:\n          tcpSocket:\n            port: 59900\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    org.edgexfoundry.service: edgex-device-virtual\n  name: edgex-device-virtual\nspec:\n  ports:\n  - name: "tcp-59900"\n    port: 59900\n    protocol: TCP\n    targetPort: 59900\n  selector:\n    org.edgexfoundry.service: edgex-device-virtual\n  type: NodePort\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u68c0\u67e5edgex-foundry\u7684\u90e8\u7f72\u72b6\u6001"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$ kubectl get edgex\nNAME                    READY   SERVICE   READYSERVICE   DEPLOYMENT   READYDEPLOYMENT\nedgex-sample-hangzhou   true    9         9              9            9\n"})}),"\n",(0,o.jsx)(n.h1,{id:"2-\u5b89\u88c5\u5e76\u90e8\u7f72yurt-device-controller",children:"2. \u5b89\u88c5\u5e76\u90e8\u7f72yurt-device-controller"}),"\n",(0,o.jsx)(n.p,{children:"\u5b89\u88c5yurt-device-controller \u76f8\u5173\u7684CRD"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528UnitedDeployment\u5728hanghzou\u8282\u70b9\u6c60\u4e2d\u90e8\u7f72\u4e00\u4e2ayurt-device-controller\u5b9e\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: ud-device\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: ud-device\n  topology:\n    pools:\n      - name: hangzhou\n        nodeSelectorTerm:\n          matchExpressions:\n            - key: apps.openyurt.io/nodepool\n              operator: In\n              values:\n                - hangzhou\n        replicas: 1\n        tolerations:\n          - operator: Exists\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        creationTimestamp: null\n        labels:\n          app: ud-device\n      spec:\n        selector:\n          matchLabels:\n            app: ud-device\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: ud-device\n              control-plane: controller-manager\n          spec:\n            containers:\n              - args:\n                  - --health-probe-bind-address=:8081\n                  - --metrics-bind-address=127.0.0.1:8080\n                  - --leader-elect=false\n                  - --namespace=default\n                  - --v=5\n                command:\n                  - /yurt-device-controller\n                image: openyurt/yurt-device-controller:v0.2.0\n                imagePullPolicy: IfNotPresent\n                livenessProbe:\n                  failureThreshold: 3\n                  httpGet:\n                    path: /healthz\n                    port: 8081\n                    scheme: HTTP\n                  initialDelaySeconds: 15\n                  periodSeconds: 20\n                  successThreshold: 1\n                  timeoutSeconds: 1\n                name: manager\n                readinessProbe:\n                  failureThreshold: 3\n                  httpGet:\n                    path: /readyz\n                    port: 8081\n                    scheme: HTTP\n                  initialDelaySeconds: 5\n                  periodSeconds: 10\n                  successThreshold: 1\n                  timeoutSeconds: 1\n                resources:\n                  limits:\n                    cpu: 100m\n                    memory: 512Mi\n                  requests:\n                    cpu: 100m\n                    memory: 512Mi\n                securityContext:\n                  allowPrivilegeEscalation: false\n            dnsPolicy: ClusterFirst\n            restartPolicy: Always\n            securityContext:\n              runAsUser: 65532\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: ud-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: default\n    namespace: default\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u68c0\u67e5yurt-device-controller\u662f\u5426\u90e8\u7f72\u6210\u529f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$ kubectl get pod |grep yurt-device-controller\nyurt-device-controller-beijing-sf7xz-79c9cbf4b7-mbfds             1/1     Running   0          6d22h\n"})}),"\n",(0,o.jsx)(n.h1,{id:"3-\u67e5\u770b\u540c\u6b65\u4e0a\u6765\u8bbe\u5907\u76f8\u5173\u4fe1\u606f",children:"3. \u67e5\u770b\u540c\u6b65\u4e0a\u6765\u8bbe\u5907\u76f8\u5173\u4fe1\u606f"}),"\n",(0,o.jsx)(n.p,{children:"\u4e0a\u6587\u4e2d\u63d0\u5230\u7684device-virtual-go\u9a71\u52a8\u4f1a\u81ea\u52a8\u5f80EdgeX\u5b9e\u4f8b\u4e2d\u6ce8\u518c5\u4e2a\u865a\u62df\u8bbe\u5907\uff0cyurt-device-controller\u4f1a\u5c06\u5b83\u81ea\u52a8\u540c\u6b65\u4e0a\u6765"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get device\nNAME                                     NODEPOOL   SYNCED   AGE\nhangzhou-random-binary-device            hangzhou   true     19h\nhangzhou-random-boolean-device           hangzhou   true     19h\nhangzhou-random-float-device             hangzhou   true     19h\nhangzhou-random-integer-device           hangzhou   true     19h\nhangzhou-random-unsignedinteger-device   hangzhou   true     19h\n"})}),"\n",(0,o.jsx)(n.h1,{id:"4-\u5378\u8f7d\u76f8\u5173\u7ec4\u4ef6\u5e76\u6e05\u7406\u73af\u5883",children:"4. \u5378\u8f7d\u76f8\u5173\u7ec4\u4ef6\u5e76\u6e05\u7406\u73af\u5883"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# 1.1 \u5220\u9664\u6240\u6709device, deviceservice, deviceprofile\u8d44\u6e90\n$ kubectl delete device --all\n$ kubectl delete deviceprofile --all\n$ kubectl delete deviceservice --all\n\n# 1.2 \u5220\u9664\u90e8\u7f72\u7684yurt-device-controller\n$ kubectl delete uniteddeployment yurt-device-controller\n$ kubectl delete clusterrolebinding ud-rolebinding\n\n# 1.3 \u5220\u9664device, deviceservice, deviceprofile\u8d44\u6e90\u76f8\u5173\u7684crd\n$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n\n# 2.1 \u5220\u9664\u6240\u6709edgex\u5b9e\u4f8b\n$ kubectl delete edgex --all\n\n# 2.2 \u5378\u8f7dyurt-edgex-manager\n$ kubectl delete -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml\n\n# \uff08\u4ee5\u4e0b\u6b65\u9aa4\u53ef\u9009\uff09\n# 3.1 \u5c06\u8fb9\u7f18\u8282\u70b9\u79fb\u9664hangzhou\u8282\u70b9\u6c60\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool-\n# 3.2 \u5220\u9664hangzhou\u8282\u70b9\u6c60\n$ kubectl delete nodepool $WORKER_NODEPOOL\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const o={},a=t.createContext(o);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);