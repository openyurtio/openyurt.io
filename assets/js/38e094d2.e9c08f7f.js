"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,g=m["".concat(i,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(g,d(d({ref:n},s),{},{components:t})):a.createElement(g,d({ref:n},s))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,d[1]=l;for(var p=2;p<r;p++)d[p]=t[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={title:"DaemonSet Upgrade Model"},d=void 0,l={unversionedId:"user-manuals/workload/daemon-pod-updater",id:"version-v1.3/user-manuals/workload/daemon-pod-updater",title:"DaemonSet Upgrade Model",description:"Background",source:"@site/versioned_docs/version-v1.3/user-manuals/workload/daemon-pod-updater.md",sourceDirName:"user-manuals/workload",slug:"/user-manuals/workload/daemon-pod-updater",permalink:"/docs/user-manuals/workload/daemon-pod-updater",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/workload/daemon-pod-updater.md",tags:[],version:"v1.3",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1687699928,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"DaemonSet Upgrade Model"},sidebar:"docs",previous:{title:"Edge Local Storage",permalink:"/docs/user-manuals/storage/edge-local-storage"},next:{title:"Node Pool Management",permalink:"/docs/user-manuals/workload/node-pool-management"}},i={},p=[{value:"Background",id:"background",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage\uff1a",id:"usage",level:2},{value:"1\uff09Install Yurt-Manager Component",id:"1install-yurt-manager-component",level:3},{value:"2\uff09AdvancedRollingUpdate Upgrade Model",id:"2advancedrollingupdate-upgrade-model",level:3},{value:"3\uff09OTA Upgrade Model",id:"3ota-upgrade-model",level:3},{value:"OTA Upgrade API",id:"ota-upgrade-api",level:4},{value:"OTA Upgrade Example",id:"ota-upgrade-example",level:4}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"In edge scenarios, the native DaemonSet upgrade model does not perfectly satisfy existing requirements. In the case of cloud-edge network disconnection, DaemonSet upgrade process may be blocked. In addition, the native upgrade model does not provide any upgrade operation API, and users cannot control the application upgrade on their own."),(0,o.kt)("p",null,"In order to address the above problems, we extend the native DaemonSet upgrade model by adding a custom controller ",(0,o.kt)("inlineCode",{parentName:"p"},"daemonPodUpdater-controller"),", providing AdvancedRollingUpdate and OTA two upgrade model."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AdvancedRollingUpdate: Solve the DaemonSet upgrade process blocking problem which caused by node ",(0,o.kt)("inlineCode",{parentName:"li"},"Not-Ready")," when the cloud-edge is disconnected. During AdvancedRollingUpdate upgrade, ",(0,o.kt)("inlineCode",{parentName:"li"},"not-ready")," nodes will be ignored. And when ",(0,o.kt)("inlineCode",{parentName:"li"},"Not-Ready")," nodes turn to ",(0,o.kt)("inlineCode",{parentName:"li"},"Ready"),", upgrade process will be completed automatically."),(0,o.kt)("li",{parentName:"ul"},"OTA: Add pod status condition ",(0,o.kt)("inlineCode",{parentName:"li"},"PodNeedUpgrade")," which indicates the upgrade availability information. YurtHub OTA component can use this condition to determine if a new version of DaemonSet application exists.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# example configuration for AdvancedRollingUpdate or OTA upgrade\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  # \xb7\xb7\xb7\n  annotations:\n    # This annotation is the first prerequisite for using AdvancedRollingUpdate or OTA upgrade\n    # and the only valid values are "AdvancedRollingUpdate" or "OTA".\n    apps.openyurt.io/update-strategy: OTA\n    # This annotation is used for rolling update and only works in AdvancedRollingUpdate mode.\n    # The supported value is the same with native DaemonSet maxUnavailable, default to 10%.\n    apps.openyurt.io/max-unavailable: 30%\n  # \xb7\xb7\xb7\nspec:\n  # \xb7\xb7\xb7\n  # Set updateStrategy to "OnDelete" is another prerequisite for using AdvancedRollingUpdate or OTA upgrade.\n  updateStrategy:\n    type: OnDelete\n  # \xb7\xb7\xb7\n')),(0,o.kt)("p",null,"In short, if you wish to use AdvancedRollingUpdate or OTA upgrade, you need to set annotation ",(0,o.kt)("inlineCode",{parentName:"p"},"apps.openyurt.io/update-strategy"),' to "AdvancedRollingUpdate" or "OTA" and set ',(0,o.kt)("inlineCode",{parentName:"p"},".spec.updateStrategy.type"),' to "OnDelete".'),(0,o.kt)("h2",{id:"usage"},"Usage\uff1a"),(0,o.kt)("h3",{id:"1install-yurt-manager-component"},"1\uff09Install Yurt-Manager Component"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"daemonpodupdater controller")," is integrated within ",(0,o.kt)("inlineCode",{parentName:"p"},"Yurt-Manager")," component, and it needs to be installed before using AdvancedRollingUpdate or OTA Upgrade Model, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/installation/manually-setup/#32-setup-openyurtopenyurt-components"},"Deploy OpenYurt")," for detailed operations."),(0,o.kt)("h3",{id:"2advancedrollingupdate-upgrade-model"},"2\uff09AdvancedRollingUpdate Upgrade Model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create daemonset instance")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: nginx-daemonset\n  annotations:\n    apps.openyurt.io/update-strategy: AdvancedRollingUpdate\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: OnDelete\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.19.4\n\nEOF\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get nginx-daemonset pods")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods | grep nginx-daemonset\n\nnginx-daemonset-bv5jg   1/1     Running   0          21m   10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-fhsr6   1/1     Running   0          21m   10.244.1.2   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-lmmtd   1/1     Running   0          21m   10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simulate cloud-edge network disconnection: assume that nodes ",(0,o.kt)("inlineCode",{parentName:"li"},"openyurt-e2e-test-worker2")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"openyurt-e2e-test-worker3")," are disconnected from the cloud node. This example uses ",(0,o.kt)("inlineCode",{parentName:"li"},"Kind")," to create the cluster, so the network disconnection can be simulated by removing the containers from the virtual bridge.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker network disconnect kind openyurt-e2e-test-worker2\n$ docker network disconnect kind openyurt-e2e-test-worker3\n\n$ kubectl get nodes -o wide\nAME                              STATUS     ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME\nopenyurt-e2e-test-control-plane   Ready      control-plane,master   36m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker          Ready      <none>                 35m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker2         NotReady   <none>                 35m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker3         NotReady   <none>                 35m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update daemonset: change the container image from nginx:1.19.4 to nginx:1.19.5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"***\ncontainers:\n      - name: nginx\n        image: nginx:1.19.5\n***\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get pods: the old pod ",(0,o.kt)("inlineCode",{parentName:"li"},"default/nginx-daemonset-fhsr6")," on ",(0,o.kt)("inlineCode",{parentName:"li"},"openyurt-e2e-test-worker")," node has been deleted and the new pod ",(0,o.kt)("inlineCode",{parentName:"li"},"default/nginx-daemonset-slp5t")," has been created; the pods on the two disconnected nodes will not be upgraded temporarily")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nginx-daemonset-bv5jg   1/1     Running   0          33m     10.244.2.2   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-lmmtd   1/1     Running   0          33m     10.244.3.2   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-slp5t   1/1     Running   0          5m54s   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Restore network connectivity of nodes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker network connect kind openyurt-e2e-test-worker2\n$ docker network connect kind openyurt-e2e-test-worker3\n\n$ kubectl get nodes -o wide\nNAME                              STATUS   ROLES                  AGE   VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION     CONTAINER-RUNTIME\nopenyurt-e2e-test-control-plane   Ready    control-plane,master   49m   v1.22.7   172.18.0.4    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker          Ready    <none>                 48m   v1.22.7   172.18.0.2    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker2         Ready    <none>                 48m   v1.22.7   172.18.0.3    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\nopenyurt-e2e-test-worker3         Ready    <none>                 48m   v1.22.7   172.18.0.5    <none>        Ubuntu 21.10   5.10.76-linuxkit   containerd://1.5.10\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get pods: daemonset pods on all nodes have been upgraded")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nginx-daemonset-kbkf6   1/1     Running   0          88s   10.244.3.3   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-scgtv   1/1     Running   0          51s   10.244.2.3   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-slp5t   1/1     Running   0          11m   10.244.1.3   openyurt-e2e-test-worker    <none>           <none>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check pods image version: all pods have been upgraded to nginx:1.19.5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"***\nContainers:\n  nginx:\n    Container ID:   containerd://f7d4b3f1257a0d1d8da862671c11cb094f9fba1ba0041b7a5f783d9c9e4d8449\n    Image:          nginx:1.19.5\n    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639\n    Port:           <none>\n    Host Port:      <none>\n    State:          Running\n      Started:      Fri, 14 Oct 2022 14:21:25 +0800\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-wrhj8 (ro)\n***\n")),(0,o.kt)("h3",{id:"3ota-upgrade-model"},"3\uff09OTA Upgrade Model"),(0,o.kt)("h4",{id:"ota-upgrade-api"},"OTA Upgrade API"),(0,o.kt)("p",null,"YurtHub provides two REST APIs for OTA upgrades."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"GET /pods")),(0,o.kt)("p",{parentName:"li"},"This API allows you to get information about the pods on the node.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"POST /openyurt.io/v1/namespaces/{ns}/pods/{podname}/upgrade")),(0,o.kt)("p",{parentName:"li"},"This API allows you to specify and upgrade a DaemonSet Pod. The path parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"ns")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"podname")," represent the namespace and name of the pod, respectively."))),(0,o.kt)("h4",{id:"ota-upgrade-example"},"OTA Upgrade Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create daemonset instance")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: nginx-daemonset\n  annotations:\n    apps.openyurt.io/update-strategy: OTA\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  updateStrategy:\n    type: OnDelete\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.19.4\n\nEOF\n\n# get nginx-daemonset pods\n$ kubectl get pods -o wide | grep nginx-daemonset\nnginx-daemonset-bwzss   1/1     Running   0          92s   10.244.3.4   openyurt-e2e-test-worker2   <none>           <none>\nnginx-daemonset-ppf9p   1/1     Running   0          92s   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-rgp9h   1/1     Running   0          92s   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check pod status condition ",(0,o.kt)("inlineCode",{parentName:"li"},"PodNeedUpgrade"),": take pod ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx-daemonset-bwzss")," on node ",(0,o.kt)("inlineCode",{parentName:"li"},"openyurt-e2e-test-worker2")," as an example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl describe pods nginx-daemonset-bwzss\n\n***\nConditions:\n  Type              Status\n  PodNeedUpgrade    False\n***\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update daemonset: change the container image from nginx:1.19.4 to nginx:1.19.5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"***\ncontainers:\n      - name: nginx\n        image: nginx:1.19.5\n***\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check pod status condition ",(0,o.kt)("inlineCode",{parentName:"li"},"PodNeedUpgrade")," again")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl describe pods nginx-daemonset-bwzss\n\n***\nConditions:\n  Type              Status\n  PodNeedUpgrade    True\n***\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute OTA upgrade")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# enter edge node container of Kind cluster \n$ docker exec -it openyurt-e2e-test-worker2 /bin/bash\n\n# call Upgrade API, this upgrade API is only available on the edge nodes\n$ curl -X POST 127.0.0.1:10267/openyurt.io/v1/namespaces/default/pods/nginx-daemonset-bwzss/upgrade\nStart updating pod default/nginx-daemonset-bwzss\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check upgrade result: pod ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx-daemonset-bwzss")," on node ",(0,o.kt)("inlineCode",{parentName:"li"},"openyurt-e2e-test-worker2")," has been deleted and new pod ",(0,o.kt)("inlineCode",{parentName:"li"},"nginx-daemonset-vrvhn")," has been created")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# check result\n$ kubectl get pods -o wide | grep nginx-daemonset\nnginx-daemonset-ppf9p   1/1     Running   0          15m   10.244.1.4   openyurt-e2e-test-worker    <none>           <none>\nnginx-daemonset-rgp9h   1/1     Running   0          15m   10.244.2.4   openyurt-e2e-test-worker3   <none>           <none>\nnginx-daemonset-vrvhn   1/1     Running   0          63s   10.244.3.5   openyurt-e2e-test-worker2   <none>           <none>\n\n# check pod container image\n$ kubectl describe pods nginx-daemonset-vrvhn\n***\nContainers:\n  nginx:\n    Container ID:   containerd://18df6aa88076639353ea0b3d87f340cd4c86ab27a7f154bce06345e9764c997a\n    Image:          nginx:1.19.5\n    Image ID:       docker.io/library/nginx@sha256:31de7d2fd0e751685e57339d2b4a4aa175aea922e592d36a7078d72db0a45639\n    Port:           <none>\n    Host Port:      <none>\n    State:          Running\n      Started:      Fri, 14 Oct 2022 16:25:20 +0800\n    Ready:          True\n    Restart Count:  0\n    Environment:    <none>\n    Mounts:\n      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-p6kjh (ro)\n***\n")))}u.isMDXComponent=!0}}]);