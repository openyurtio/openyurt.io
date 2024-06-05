"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[421],{30440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(85893),r=t(11151);const i={title:"YurtStaticSet"},s=void 0,d={id:"user-manuals/workload/yurt-static-set",title:"YurtStaticSet",description:"Background",source:"@site/docs/user-manuals/workload/yurt-static-set.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/yurt-static-set",permalink:"/docs/next/user-manuals/workload/yurt-static-set",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/yurt-static-set.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1717546927e3,frontMatter:{title:"YurtStaticSet"},sidebar:"docs",previous:{title:"YurtAppOverrider",permalink:"/docs/next/user-manuals/workload/yurt-app-overrider"},next:{title:"prometheus",permalink:"/docs/next/user-manuals/monitoring/prometheus"}},o={},c=[{value:"Background",id:"background",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"1\uff09Deploy OpenYurt",id:"1deploy-openyurt",level:3},{value:"2\uff09Create static pod",id:"2create-static-pod",level:3},{value:"3) Deploy <code>YurtStaticSet</code> CR",id:"3-deploy-yurtstaticset-cr",level:3},{value:"4) Upgrade",id:"4-upgrade",level:3},{value:"AdvancedRollingUpdate Upgrade",id:"advancedrollingupdate-upgrade",level:4},{value:"OTA Upgrade",id:"ota-upgrade",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,a.jsxs)(n.p,{children:["Static pod is a special type of pod in Kubernetes, which is managed directly by Kubelet.\nStatic pods are often used in cloud-edge collaboration scenarios, such as in some AI-related applications.\nIn OpenYurt, the core component, ",(0,a.jsx)(n.code,{children:"YurtHub"}),", is deployed using static pod.\nStatic pods are typically created through configuration files located in ",(0,a.jsx)(n.code,{children:"/etc/kubernetes/manifests"})," directory,\nand upgrades are performed by manually replacing or modifying these configuration files.\nDuring this process, Kubelet directly handles the creation and deletion of Static pods.\nHowever, due to the large quantity and dispersed nature of edge devices, deploying and upgrading Static pods manually\nin cloud-edge collaboration scenarios can lead to significant operational burdens and risks of mistakes.\nTherefore, OpenYurt has introduced a new Custom Resource Definition (CRD), ",(0,a.jsx)(n.code,{children:"YurtStaticSet"}),", to enhance the management of Static pods.\nIt provides capabilities such as rolling update and Over-The-Air (OTA) upgrade through a custom controller."]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtStaticSet\nmetadata:\n  # \xb7\xb7\xb7\nspec:\n  # static pod configuration file name\n  staticPodManifest: xxx\n  # Upgrade strategy, supporting AdvancedRollingUpdate and OTA upgrade modes\n  upgradeStrategy:\n    type: AdvancedRollingUpdate\n    # For AdvancedRollingUpdate upgrade mode, set the maximum unavailable count during rolling update, default is 10%\n    # maxUnavailable: 3\n  # static pod template\n  template:\n  #  \xb7\xb7\xb7\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"1deploy-openyurt",children:"1\uff09Deploy OpenYurt"}),"\n",(0,a.jsxs)(n.p,{children:["The yurt-static-set controller is integrated within ",(0,a.jsx)(n.code,{children:"Yurt-Manager"})," component.\nBefore using, ",(0,a.jsx)(n.code,{children:"OpenYurt"})," needs to be installed and deployed.\nYou can refer to ",(0,a.jsx)(n.a,{href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components",children:"Deploy OpenYurt"})," for detailed operations."]}),"\n",(0,a.jsx)(n.h3,{id:"2create-static-pod",children:"2\uff09Create static pod"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"YurtStaticSet"})," Operator does not manage the initialization of the static pod, which must be done manually or via ",(0,a.jsx)(n.code,{children:"yurtadm"})," tool.\nAs an example, this guide creates a cluster with three worker nodes using ",(0,a.jsx)(n.code,{children:"Kind"}),", and manually deploys a static pod on each node."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"cat >  nginx.yaml << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: web\n    image: nginx:1.19.1\nEOF\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"3-deploy-yurtstaticset-cr",children:["3) Deploy ",(0,a.jsx)(n.code,{children:"YurtStaticSet"})," CR"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"YurtStaticSet"})," resource corresponds to static pods via its ",(0,a.jsx)(n.code,{children:"namespace/name"}),".\nTherefore, we create a CR instance with ",(0,a.jsx)(n.code,{children:"namespace:default, name:nginx"})," to take over these static pods."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"cat <<EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1alpha1\nkind: YurtStaticSet\nmetadata:\n  name: nginx\nspec:\n  staticPodManifest: nginx\n  upgradeStrategy:\n    type: AdvancedRollingUpdate\n    maxUnavailable: 3\n  template:\n    metadata:\n      name: nginx\n    spec:\n      containers:\n      - name: web\n        image: nginx:1.19.1\nEOF\n"})}),"\n",(0,a.jsx)(n.h3,{id:"4-upgrade",children:"4) Upgrade"}),"\n",(0,a.jsxs)(n.p,{children:["We can easily manage static pods with ",(0,a.jsx)(n.code,{children:"YurtStaticSet"})," resource, including upgrading static pods.\n",(0,a.jsx)(n.code,{children:"YurtStaticSet"})," supports two upgrade modes, ",(0,a.jsx)(n.code,{children:"AdvancedRollingUpdate"})," and ",(0,a.jsx)(n.code,{children:"OTA"}),".\nSimply, ",(0,a.jsx)(n.code,{children:"AdvancedRollingUpdate"})," mode offers rolling update that skips ",(0,a.jsx)(n.code,{children:"not-ready"})," nodes;\n",(0,a.jsx)(n.code,{children:"OTA"})," mode allows users to control the upgrade process. Detailed introductions of the two modes can be found in ",(0,a.jsx)(n.a,{href:"https://openyurt.io/docs/user-manuals/workload/daemon-pod-updater/#background",children:"DaemonSet Upgrade Model"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"advancedrollingupdate-upgrade",children:"AdvancedRollingUpdate Upgrade"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Check the static pods in the cluster before upgrade"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods | grep nginx\n\ndefault  nginx-openyurt-e2e-test-worker    1/1     Running   0   3h4m   10.244.2.3   openyurt-e2e-test-worker   \ndefault  nginx-openyurt-e2e-test-worker2   1/1     Running   0   3h4m   10.244.1.2   openyurt-e2e-test-worker2  \ndefault  nginx-openyurt-e2e-test-worker3   1/1     Running   0   3h5m   10.244.3.3   openyurt-e2e-test-worker3  \n\n$ kubectl describe pods nginx-openyurt-e2e-test-worker\n\n\xb7\xb7\xb7\nContainers:\n  web:\n    \xb7\xb7\xb7\n    # At this time, the version of nginx pod is 1.19.1\n    Image:          nginx:1.19.1\n    \xb7\xb7\xb7\n\xb7\xb7\xb7\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Modify ",(0,a.jsx)(n.code,{children:"YurtStaticSet"})," spec, upgrading the container image from nginx:1.19.1 to nginx:1.19.2"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtStaticSet\nmetadata:\n  name: nginx\nspec:\n    \xb7\xb7\xb7\n    spec:\n      containers:\n      - name: web\n        image: nginx:1.19.2\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Check the resource status, we can see that all three static pods have been upgraded.\n",(0,a.jsx)(n.code,{children:"TOTAL"})," represents how many static pods ",(0,a.jsx)(n.code,{children:"YurtStaticSet nginx"})," matches in this cluster.\n",(0,a.jsx)(n.code,{children:"READY"})," represents the number of ready pods, and ",(0,a.jsx)(n.code,{children:"UPGRADED"})," indicates how many pods have been upgraded to the latest version."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ kubectl get yurtstaticsets nginx\n\nNAME    AGE     TOTAL   READY   UPGRADED\nnginx   4m20s   3       3       3\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Check the corresponding static pods in the cluster"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"$ kubectl describe pods nginx-openyurt-e2e-test-worker\n\n\xb7\xb7\xb7\nContainers:\n  web:\n    \xb7\xb7\xb7\n    # At this point, the version of the nginx pod has been upgraded to 1.19.2\n    Image:          nginx:1.19.2\n    \xb7\xb7\xb7\n\xb7\xb7\xb7\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ota-upgrade",children:"OTA Upgrade"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"OTA Upgrade API"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"YurtHub"})," provides two OTA upgrade-related REST APIs."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"GET /pods"}),"\nThis interface can be used to obtain information about the pods on the node."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade"}),"\nThis interface allows users to specify the upgrade of a particular static Pod. The path parameters ",(0,a.jsx)(n.code,{children:"ns"})," and ",(0,a.jsx)(n.code,{children:"podname"})," represent the namespace and name of the Pod respectively."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"OTA Upgrade Process"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["In OTA upgrades, the upgrade status is represented by the ",(0,a.jsx)(n.code,{children:"PodNeedUpgrade"})," condition field in pod status. When the value is ",(0,a.jsx)(n.code,{children:"true"}),", it means there is upgradable version available. Otherwise, it cannot be upgraded."]}),"\n",(0,a.jsx)(n.li,{children:"Static pod upgrades can be achieved by actively calling the upgrade API interface above."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>s});var a=t(67294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);