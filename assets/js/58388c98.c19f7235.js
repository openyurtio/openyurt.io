"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[65484],{22865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var o=t(85893),r=t(11151);const a={title:"EdgeX Foundry"},l="Environment",d={id:"user-manuals/iot/edgex-foundry",title:"EdgeX Foundry",description:"This document demonstrates how to install Yurt-Device-Controller,Yurt-EdgeX-Manager, and manage edge leaf devices via cloud native style based on virtual devices.",source:"@site/versioned_docs/version-v0.7.0/user-manuals/iot/edgex-foundry.md",sourceDirName:"user-manuals/iot",slug:"/user-manuals/iot/edgex-foundry",permalink:"/docs/v0.7.0/user-manuals/iot/edgex-foundry",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/iot/edgex-foundry.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1711267183,formattedLastUpdatedAt:"Mar 24, 2024",frontMatter:{title:"EdgeX Foundry"},sidebar:"docs",previous:{title:"Prometheus",permalink:"/docs/v0.7.0/user-manuals/monitoring/prometheus"},next:{title:"Cloud-Edge-Device DevOps Collaboration",permalink:"/docs/v0.7.0/best-practices/practices-1"}},s={},i=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This document demonstrates how to install Yurt-Device-Controller,Yurt-EdgeX-Manager, and manage edge leaf devices via cloud native style based on virtual devices."}),"\n",(0,o.jsxs)(n.p,{children:["For more details about these two components, please refer to ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-device-controller",children:"Yurt-Device-Controller"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-edgex-manager",children:"Yurt-EdgeX-Manager"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you don't have an OpenYurt on hand, you can use ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/yurtctl.md",children:"yurtctl"})," to create one or convert from an exist Kubernetes cluster."]}),"\n",(0,o.jsx)(n.h1,{id:"environment",children:"Environment"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"OpenYurt v0.5.0+"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You should first install ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-app-manager",children:"Yurt-app-manager"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Deploy CoreDNS for every edge node"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set ServiceTopology to ",(0,o.jsx)(n.code,{children:"kubernetes.io/hostname"})," for CoreDNS service. For details, please refer to ",(0,o.jsx)(n.a,{href:"https://openyurt.io/docs/user-manuals/network/service-topology",children:"ServiceTopology"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"1-install-yurt-edgex-manager-and-create-an-edgex-insatnce",children:"1. install yurt-edgex-manager and create an EdgeX insatnce"}),"\n",(0,o.jsx)(n.p,{children:"install yurt-edgex-manager"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml\n\n# check status of yurt-edgex-manager\n$ kubectl get pods -n edgex-system |grep edgex\nedgex-controller-manager-6c99fd9f9f-b9nnk   2/2     Running   0          6d22h\n"})}),"\n",(0,o.jsx)(n.p,{children:"Create a nodepool named hangzhou, join node into this nodepool."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# create nodepool hangzhou\n$ cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: NodePool\nmetadata:\n  name: $WORKER_NODEPOOL\nspec:\n  type: Edge\nEOF\n\n# join edge node into nodepool hangzhou\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool=hangzhou\n\n# check node status\n$ kubectl get nodepool\nNAME      TYPE   READYNODES   NOTREADYNODES   AGE\nhangzhou   Edge   0            1               6d22h\n'})}),"\n",(0,o.jsxs)(n.p,{children:["create EdgeX Foundry instance in nodepool hangzhou and deploy ",(0,o.jsx)(n.a,{href:"https://github.com/edgexfoundry/device-virtual-go",children:"edgex-device-virtual"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: device.openyurt.io/v1alpha1\nkind: EdgeX\nmetadata:\n  name: edgex-sample-beijing\nspec:\n  version: jakarta\n  poolname: hangzhou\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    org.edgexfoundry.service: edgex-device-virtual\n  name: edgex-device-virtual\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      org.edgexfoundry.service: edgex-device-virtual\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        org.edgexfoundry.service: edgex-device-virtual\n    spec:\n      hostname: edgex-device-virtual\n      nodeSelector:\n        apps.openyurt.io/nodepool: hangzhou\n      containers:\n      - name: edgex-device-virtual\n        image: openyurt/device-virtual:2.1.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 59900\n          name: "tcp-59900"\n          protocol: TCP\n        env:\n        - name: MESSAGEQUEUE_HOST\n          value: edgex-redis\n        - name: SERVICE_HOST\n          value: edgex-device-virtual\n        envFrom:\n        - configMapRef:\n            name: common-variables\n        startupProbe:\n          tcpSocket:\n            port: 59900\n          periodSeconds: 1\n          failureThreshold: 120\n        livenessProbe:\n          tcpSocket:\n            port: 59900\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    org.edgexfoundry.service: edgex-device-virtual\n  name: edgex-device-virtual\nspec:\n  ports:\n  - name: "tcp-59900"\n    port: 59900\n    protocol: TCP\n    targetPort: 59900\n  selector:\n    org.edgexfoundry.service: edgex-device-virtual\n  type: NodePort\n'})}),"\n",(0,o.jsx)(n.p,{children:"check EdgeX instance status"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get edgex\nNAME                    READY   SERVICE   READYSERVICE   DEPLOYMENT   READYDEPLOYMENT\nedgex-sample-hangzhou   true    9         9              9            9\n"})}),"\n",(0,o.jsx)(n.h1,{id:"2-install-yurt-device-controller",children:"2. install yurt-device-controller"}),"\n",(0,o.jsx)(n.p,{children:"install CRDs of yurt-device-controller"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"use UnitedDeployment to deploy yurt-device-controller instance in nodepool hangzhou. It should be pointed out that we use cluster-admin ClusterRole just for demo purpose"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps.openyurt.io/v1alpha1\nkind: UnitedDeployment\nmetadata:\n  labels:\n    controller-tools.k8s.io: "1.0"\n  name: ud-device\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: ud-device\n  topology:\n    pools:\n      - name: hangzhou\n        nodeSelectorTerm:\n          matchExpressions:\n            - key: apps.openyurt.io/nodepool\n              operator: In\n              values:\n                - hangzhou\n        replicas: 1\n        tolerations:\n          - operator: Exists\n  workloadTemplate:\n    deploymentTemplate:\n      metadata:\n        creationTimestamp: null\n        labels:\n          app: ud-device\n      spec:\n        selector:\n          matchLabels:\n            app: ud-device\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: ud-device\n              control-plane: controller-manager\n          spec:\n            containers:\n              - args:\n                  - --health-probe-bind-address=:8081\n                  - --metrics-bind-address=127.0.0.1:8080\n                  - --leader-elect=false\n                  - --namespace=default\n                  - --v=5\n                command:\n                  - /yurt-device-controller\n                image: openyurt/yurt-device-controller:v0.2.0\n                imagePullPolicy: IfNotPresent\n                livenessProbe:\n                  failureThreshold: 3\n                  httpGet:\n                    path: /healthz\n                    port: 8081\n                    scheme: HTTP\n                  initialDelaySeconds: 15\n                  periodSeconds: 20\n                  successThreshold: 1\n                  timeoutSeconds: 1\n                name: manager\n                readinessProbe:\n                  failureThreshold: 3\n                  httpGet:\n                    path: /readyz\n                    port: 8081\n                    scheme: HTTP\n                  initialDelaySeconds: 5\n                  periodSeconds: 10\n                  successThreshold: 1\n                  timeoutSeconds: 1\n                resources:\n                  limits:\n                    cpu: 100m\n                    memory: 512Mi\n                  requests:\n                    cpu: 100m\n                    memory: 512Mi\n                securityContext:\n                  allowPrivilegeEscalation: false\n            dnsPolicy: ClusterFirst\n            restartPolicy: Always\n            securityContext:\n              runAsUser: 65532\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: ud-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n  - kind: ServiceAccount\n    name: default\n    namespace: default\n'})}),"\n",(0,o.jsx)(n.p,{children:"check whether yurt-device-controller has been deployed successful"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod |grep yurt-device-controller\nyurt-device-controller-xxxxxx-sf7xz-79c9cbf4b7-mbfds             1/1     Running   0          6d22h\n"})}),"\n",(0,o.jsx)(n.h1,{id:"3-check-virtual-devices-synced-from-edgex",children:"3. Check virtual devices synced from EdgeX"}),"\n",(0,o.jsx)(n.p,{children:"The device-virtual-go driver will automatically create and register 5 virtual devices of different kinds upon start, yurt-device-controller will then sync them to OpenYurt. You can use kubectl to check it:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ kubectl get device\nNAME                                     NODEPOOL   SYNCED   AGE\nhangzhou-random-binary-device            hangzhou   true     19h\nhangzhou-random-boolean-device           hangzhou   true     19h\nhangzhou-random-float-device             hangzhou   true     19h\nhangzhou-random-integer-device           hangzhou   true     19h\nhangzhou-random-unsignedinteger-device   hangzhou   true     19h\n"})}),"\n",(0,o.jsx)(n.h1,{id:"4-uninstall-and-cleanup",children:"4. Uninstall and cleanup"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ export WORKER_NODEPOOL="hangzhou"\n$ export EDGE_NODE="node1"\n\n# 1.1 delete all device, deviceservice, deviceprofile\u8d44\u6e90\n$ kubectl delete device --all\n$ kubectl delete deviceprofile --all\n$ kubectl delete deviceservice --all\n\n# 1.2 uninstall yurt-device-controller\n$ kubectl delete uniteddeployment yurt-device-controller\n$ kubectl delete clusterrolebinding ud-rolebinding\n\n# 1.3 delete CRDs of yurt-device-controller\n$ kubectl delete -f https://raw.githubusercontent.com/openyurtio/yurt-device-controller/main/config/setup/crd.yaml\n\n# 2.1 delete EdgeX instance\n$ kubectl delete edgex --all\n\n# 2.2 uninstall yurt-edgex-manager\n$ kubectl delete -f https://github.com/openyurtio/yurt-edgex-manager/releases/download/v0.2.0/yurt-edgex-manager.yaml\n\n# \uff08optional\uff09\n# 3.1 remove node from nodepool\n$ kubectl label node $EDGE_NODE apps.openyurt.io/desired-nodepool-\n# 3.2 delete nodepool\n$ kubectl delete nodepool $WORKER_NODEPOOL\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>l});var o=t(67294);const r={},a=o.createContext(r);function l(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);