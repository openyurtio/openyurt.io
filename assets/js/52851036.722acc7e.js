"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3123],{44507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-manuals/iot/edgex-foundry","title":"EdgeX Foundry","description":"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u5b89\u88c5Yurt-Device-Controller \u548c Yurt-EdgeX-Manager\u7ec4\u4ef6\uff0c\u5e76\u901a\u8fc7\u90e8\u7f72\u865a\u62df\u7aef\u8bbe\u5907\u6765\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u7684\u65b9\u5f0f\u7ba1\u7406\u8fb9\u7f18\u7aef\u8bbe\u5907\u3002","source":"@site/versioned_docs/version-v0.5.0/user-manuals/iot/edgex-foundry.md","sourceDirName":"user-manuals/iot","slug":"/user-manuals/iot/edgex-foundry","permalink":"/docs/v0.5.0/user-manuals/iot/edgex-foundry","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/iot/edgex-foundry.md","tags":[],"version":"v0.5.0","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1734214326000,"frontMatter":{"title":"EdgeX Foundry"},"sidebar":"docs","previous":{"title":"Prometheus","permalink":"/docs/v0.5.0/user-manuals/monitoring/prometheus"},"next":{"title":"Cloud-Edge-Device DevOps Collaboration","permalink":"/docs/v0.5.0/best-practices/practices-1"}}');var o=t(74848),a=t(28453);const l={title:"EdgeX Foundry"},i="\u73af\u5883\u8981\u6c42",c={},d=[];function s(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u5b89\u88c5Yurt-Device-Controller \u548c Yurt-EdgeX-Manager\u7ec4\u4ef6\uff0c\u5e76\u901a\u8fc7\u90e8\u7f72\u865a\u62df\u7aef\u8bbe\u5907\u6765\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u4e91\u539f\u751f\u7684\u65b9\u5f0f\u7ba1\u7406\u8fb9\u7f18\u7aef\u8bbe\u5907\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e\u6709\u5174\u8da3\u7684\u8bfb\u8005\uff0c\u53ef\u4ee5\u53bb\u76f8\u5173\u7684github\u4ed3\u5e93\u53c2\u8003\u672c\u6587\u4f7f\u7528\u7ec4\u4ef6\u7684\u5177\u4f53\u5b9e\u73b0\uff1a",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-device-controller",children:"Yurt-Device-Controller"}),"\n\u548c ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-edgex-manager",children:"Yurt-EdgeX-Manager"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md",children:"yurtctl\u5de5\u5177"}),"\n\u6765\u521d\u59cb\u5316\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u6216\u5c06\u4e00\u4e2aKubernetes\u96c6\u7fa4\u8f6c\u6362\u4e3aOpenYurt\u96c6\u7fa4\u3002"]}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"OpenYurt v0.5.0+"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5b89\u88c5\u4e86 ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-app-manager",children:"Yurt-app-manager"})," \u7ec4\u4ef6"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u4e0emaster\u4e0d\u5728\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u7684\u8282\u70b9\u90fd\u9700\u8981\u90e8\u7f72coreDNS pod"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5c06\u8bbf\u95eecoreDNS service\u7684\u6d41\u91cf\u6539\u4e3a\u8282\u70b9\u6c60\u5185\u95ed\u73af\uff0c\u53c2\u8003",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/service-topology.md",children:"\u6559\u7a0b"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"1-\u5b89\u88c5yurt-edgex-manager\u5e76\u521b\u5efa\u4e00\u4e2aedgex\u5b9e\u4f8b",children:"1. \u5b89\u88c5yurt-edgex-manager\u5e76\u521b\u5efa\u4e00\u4e2aEdgeX\u5b9e\u4f8b"}),"\n",(0,o.jsx)(n.p,{children:"\u5b89\u88c5\u90e8\u7f72yurt-edgex-manager"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"# \u5982\u679c\u671f\u671b\u90e8\u7f72edgex\u7684\u8282\u70b9\u662farm64\u67b6\u6784\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u7684yaml\u6587\u4ef6\n# kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager-arm64.yaml\n$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager.yaml\n\n# \u68c0\u67e5\u72b6\u6001\n$ kubectl get pods -n edgex-system |grep edgex\nedgex-controller-manager-6c99fd9f9f-b9nnk   2/2     Running   0          6d22h\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2ahangzhou\u8fb9\u7f18\u8282\u70b9\u6c60\uff0c\u5e76\u5c06\u8fb9\u7f18\u8282\u70b9\u52a0\u5165\u5230hangzhou\u8282\u70b9\u6c60"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# \u521b\u5efahangzhou\u8282\u70b9\u6c60\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: $WORKER_NODEPOOL\nspec:\n  type: Edge\nEOF\n\n# \u5c06\u8fb9\u7f18\u8282\u70b9\u52a0\u5165hangzhou\u8282\u70b9\u6c60\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool=hangzhou\n\n# \u68c0\u67e5\u8282\u70b9\u6c60\u72b6\u6001\n$ kubectl get nodepool\nNAME      TYPE   READYNODES   NOTREADYNODES   AGE\nhangzhou   Edge   0            1               6d22h\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u5728hangzhou\u8282\u70b9\u6c60\u4e2d\u521b\u5efaedgex foundry\u5b9e\u4f8b\uff0c\u5e76\u5728edgex\u4e2d\u90e8\u7f72\u865a\u62df\u8bbe\u5907edgex-device-virtual"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'$ export WORKER_NODEPOOL="hangzhou"\n# \u5982\u679c\u90e8\u7f72\u8282\u70b9\u662farm64\uff0c\u5219\u6539\u4e3a"edgexfoundry/docker-device-virtual-go-arm64:1.3.0"\n$ export VIRTUAL_DEVICE_IMAGE="edgexfoundry/docker-device-virtual-go:1.3.0"\n\n$ cat <<EOF | kubectl apply -f -\napiVersion: device.openyurt.io/v1alpha1\nkind: EdgeX\nmetadata:\n  name: edgex-sample-$WORKER_NODEPOOL\nspec:\n  version: hanoi\n  poolname: $WORKER_NODEPOOL\n  additinalservices:\n  - metadata:\n      name: edgex-device-virtual\n    spec:\n      type: NodePort\n      selector:\n        app: edgex-device-virtual\n      ports:\n      - name: http\n        port: 49990\n        protocol: TCP\n        targetPort: 49990\n        nodePort: 30090\n  additinaldeployments:\n  - metadata:\n      name: edgex-device-virtual\n    spec:\n      selector:\n        matchLabels:\n          app: edgex-device-virtual\n      template:\n        metadata:\n          labels:\n            app: edgex-device-virtual\n        spec:\n          hostname: edgex-device-virtual\n          containers:\n          - name: edgex-device-virtual\n            image: $VIRTUAL_DEVICE_IMAGE\n            imagePullPolicy: IfNotPresent\n            ports:\n            - name: http\n              protocol: TCP\n              containerPort: 49990\n            envFrom:\n            - configMapRef:\n                name: common-variables\n            env:\n              - name: Service_Host\n                value: "edgex-device-virtual"\nEOF\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u68c0\u67e5edgex-foundry\u7684\u90e8\u7f72\u72b6\u6001"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$ kubectl get edgex\nNAME                    READY   SERVICE   READYSERVICE   DEPLOYMENT   READYDEPLOYMENT\nedgex-sample-hangzhou   true    9         9              9            9\n"})}),"\n",(0,o.jsx)(n.h1,{id:"2-\u5b89\u88c5\u5e76\u90e8\u7f72yurt-device-controller",children:"2. \u5b89\u88c5\u5e76\u90e8\u7f72yurt-device-controller"}),"\n",(0,o.jsx)(n.p,{children:"\u5b89\u88c5yurt-device-controller \u76f8\u5173\u7684CRD"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528UnitedDeployment\u5728hanghzou\u8282\u70b9\u6c60\u4e2d\u90e8\u7f72\u4e00\u4e2ayurt-device-controller\u5b9e\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'$ export WORKER_NODEPOOL="hangzhou"\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: yurt-device-controller\nspec:\n  selector:\n    matchLabels:\n      app: yurt-device-controller\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        labels:\n          app: yurt-device-controller\n      spec:\n        template:\n          metadata:\n            labels:\n              app: yurt-device-controller\n              control-plane: controller-manager\n          spec:\n            containers:\n            - args:\n              - --health-probe-bind-address=:8081\n              - --metrics-bind-address=127.0.0.1:8080\n              - --leader-elect=false\n              command:\n              - /yurt-device-controller\n              image: openyurt/yurt-device-controller:latest\n              imagePullPolicy: IfNotPresent\n              livenessProbe:\n                httpGet:\n                  path: /healthz\n                  port: 8081\n                initialDelaySeconds: 15\n                periodSeconds: 20\n              name: manager\n              readinessProbe:\n                httpGet:\n                  path: /readyz\n                  port: 8081\n                initialDelaySeconds: 5\n                periodSeconds: 10\n              resources:\n                limits:\n                  cpu: 100m\n                  memory: 30Mi\n                requests:\n                  cpu: 100m\n                  memory: 20Mi\n              securityContext:\n                allowPrivilegeEscalation: false\n            securityContext:\n              runAsUser: 65532\n            terminationGracePeriodSeconds: 10\n  topology:\n    pools:\n    - name: $WORKER_NODEPOOL\n      nodeSelectorTerm:\n        matchExpressions:\n        - key: apps.openyurt.io/nodepool\n          operator: In\n          values:\n          - $WORKER_NODEPOOL\n      replicas: 1\n      tolerations:\n      - effect: NoSchedule\n        key: apps.openyurt.io/example\n        operator: Exists\n  revisionHistoryLimit: 5\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1beta1\nmetadata:\n  name: default-cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: default\n  namespace: default\nroleRef:\n  kind: ClusterRole\n  name: cluster-admin\n  apiGroup: ""\n---\nEOF\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u68c0\u67e5yurt-device-controller\u662f\u5426\u90e8\u7f72\u6210\u529f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$ kubectl get pod |grep yurt-device-controller\nyurt-device-controller-beijing-sf7xz-79c9cbf4b7-mbfds             1/1     Running   0          6d22h\n"})}),"\n",(0,o.jsx)(n.h1,{id:"3-\u67e5\u770b\u540c\u6b65\u4e0a\u6765\u8bbe\u5907\u76f8\u5173\u4fe1\u606f",children:"3. \u67e5\u770b\u540c\u6b65\u4e0a\u6765\u8bbe\u5907\u76f8\u5173\u4fe1\u606f"}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u540c\u6b65\u4e0a\u6765\u8bbe\u5907\u76f8\u5173\u4fe1\u606f"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"$ kubectl get device\n$ kubectl get deviceservice\n$ kubectl get deviceprofile\n"})}),"\n",(0,o.jsx)(n.h1,{id:"4-\u5378\u8f7d\u76f8\u5173\u7ec4\u4ef6\u5e76\u6e05\u7406\u73af\u5883",children:"4. \u5378\u8f7d\u76f8\u5173\u7ec4\u4ef6\u5e76\u6e05\u7406\u73af\u5883"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# 1.1 \u5220\u9664\u6240\u6709device, deviceservice, deviceprofile\u8d44\u6e90\n$ kubectl delete device --all\n$ kubectl delete deviceprofile --all\n$ kubectl delete deviceservice --all\n\n# 1.2 \u5220\u9664\u90e8\u7f72\u7684yurt-device-controller\n$ kubectl delete uniteddeployment yurt-device-controller\n$ kubectl delete clusterrolebinding default-cluster-admin\n\n# 1.3 \u5220\u9664device, deviceservice, deviceprofile\u8d44\u6e90\u76f8\u5173\u7684crd\n$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n\n# 2.1 \u5220\u9664\u6240\u6709edgex\u5b9e\u4f8b\n$ kubectl delete edgex --all\n\n# 2.2 \u5378\u8f7dyurt-edgex-manager\n# \u5982\u679c\u4f7f\u7528\u7684arm64\u7248\u672c\u7684\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\n# kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager-arm64.yaml\n$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-edgex-manager/main/Documentation/yurt-edgex-manager.yaml\n\n# \uff08\u4ee5\u4e0b\u6b65\u9aa4\u53ef\u9009\uff09\n# 3.1 \u5c06\u8fb9\u7f18\u8282\u70b9\u79fb\u9664hangzhou\u8282\u70b9\u6c60\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool-\n# 3.2 \u5220\u9664hangzhou\u8282\u70b9\u6c60\n$ kubectl delete nodepool $WORKER_NODEPOOL\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);