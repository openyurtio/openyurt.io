"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5375],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),g=o,k=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5464:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return i}});var r=n(7462),o=(n(7294),n(3905));const a={title:"YurtCluster"},l=void 0,u={unversionedId:"installation/yurtcluster",id:"version-v1.0/installation/yurtcluster",title:"YurtCluster",description:"1. Background",source:"@site/versioned_docs/version-v1.0/installation/yurtcluster.md",sourceDirName:"installation",slug:"/installation/yurtcluster",permalink:"/docs/installation/yurtcluster",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtcluster.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{title:"YurtCluster"}},s={},i=[{value:"1. Background",id:"1-background",level:2},{value:"2. Installation Process",id:"2-installation-process",level:2},{value:"2.1 Preparation",id:"21-preparation",level:3},{value:"2.2 Deploy the YurtCluster Operator",id:"22-deploy-the-yurtcluster-operator",level:3},{value:"2.3 Tag node type",id:"23-tag-node-type",level:3},{value:"2.4 Deploy the YurtCluster CR object",id:"24-deploy-the-yurtcluster-cr-object",level:3},{value:"3. Verify the cluster",id:"3-verify-the-cluster",level:2},{value:"3.1 Pull edge node pod logs (verify that Tunnel is working correctly)",id:"31-pull-edge-node-pod-logs-verify-that-tunnel-is-working-correctly",level:3},{value:"3.2 Pull YurtHub component logs (verify that YurtHub is working correctly)",id:"32-pull-yurthub-component-logs-verify-that-yurthub-is-working-correctly",level:3},{value:"4. Clean up",id:"4-clean-up",level:2}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-background"},"1. Background"),(0,o.kt)("p",null,"When you are ready to use OpenYurt in production environment, it is officially recommended to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurtcluster-operator"},"YurtCluster Operator")," . The YurtCluster Operator provides a cloud-native, declarative Cluster API that automatically deploys and configures OpenYurt-related components on standard Kubernetes clusters based on declared configurations.YurtCluster Operator provides a cloud-native cluster API, which can automatically deploy and configure OpenYurt-related components on a standard Kubernetes cluster according to the declared configuration, so that it has the ability to provide edge computing services (that is, one-click conversion of ordinary clusters to OpenYurt edge clusters) , and is also responsible for dynamically tracking and managing the lifecycle of OpenYurt clusters, including cluster expansion, upgrade, etc., to ensure that edge clusters are always running in the best status."),(0,o.kt)("h2",{id:"2-installation-process"},"2. Installation Process"),(0,o.kt)("h3",{id:"21-preparation"},"2.1 Preparation"),(0,o.kt)("p",null,"Before starting, you need to prepare a normal Kubernetes cluster. If you don't have an available cluster yet, you can use tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm")," to build a new cluster.\nOf course, if you just want to experience the related functions of the YurtCluster Operator, you can also use the community-recommended ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/"},"kind"),", ",(0,o.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"minikube")," and other tools to quickly pull up a Kubernetes cluster for local development and testing."),(0,o.kt)("p",null,"This article only introduces the general method of pulling up a cluster through the kind tool. For the use of other tools, please refer to their corresponding official documentation."),(0,o.kt)("p",null,"kind depends on Docker software, please make sure that the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," program has been correctly installed on your machine. For the installation of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"kind, please refer to the documentation")," kind.sigs.k8s.io/docs/user/quick-start/#installation)."),(0,o.kt)("p",null,"Prepare a ",(0,o.kt)("inlineCode",{parentName:"p"},"kind-cluster.yaml"),' file that defines a "1 control-plane + 3 worker" Kubernetes cluster:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kind.x-k8s.io/v1alpha4\nkind: Cluster\nnodes:\n- role: control-plane\n- role: worker\n- role: worker\n- role: worker\n")),(0,o.kt)("p",null,"Execute the following command to initialize the cluster: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# kind create cluster --config kind-cluster.yaml\n\nCreating cluster "kind" ...\n \u2713 Ensuring node image (kindest/node:v1.21.1) \ud83d\uddbc \n \u2713 Preparing nodes \ud83d\udce6 \ud83d\udce6 \ud83d\udce6 \ud83d\udce6  \n \u2713 Writing configuration \ud83d\udcdc \n \u2713 Starting control-plane \ud83d\udd79\ufe0f \n \u2713 Installing CNI \ud83d\udd0c \n \u2713 Installing StorageClass \ud83d\udcbe \n \u2713 Joining worker nodes \ud83d\ude9c \nSet kubectl context to "kind-kind"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kind\n\nHave a nice day! \ud83d\udc4b\n')),(0,o.kt)("p",null,"Check if the cluster is Ready:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# kubectl get node\n\nNAME                 STATUS   ROLES                  AGE     VERSION\nkind-control-plane   Ready    control-plane,master   6m30s   v1.21.1\nkind-worker          Ready    <none>                 5m56s   v1.21.1\nkind-worker2         Ready    <none>                 5m57s   v1.21.1\nkind-worker3         Ready    <none>                 5m57s   v1.21.1\n")),(0,o.kt)("h3",{id:"22-deploy-the-yurtcluster-operator"},"2.2 Deploy the YurtCluster Operator"),(0,o.kt)("p",null,"YurtCluster Operator provides the Helm Chart deployment package, which can be deployed with one click through Helm."),(0,o.kt)("p",null,"YurtCluster Operator is the core management and control component of the cluster life cycle and needs to be deployed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# git clone https://github.com/openyurtio/yurtcluster-operator\n# cd yurtcluster-operator/charts\n# helm install yurtcluster-operator . -n kube-system\n\nNAME: yurtcluster-operator\nLAST DEPLOYED: Tue Dec 28 10:45:28 2021\nNAMESPACE: kube-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,o.kt)("p",null,"YurtCluster Operator adopts a distributed architecture, including a manager component (supporting multi-copy high availability deployment) and an agent component running on each node.\nThe manager component is responsible for the unified management of the installation and deployment of cluster components and the status update of YurtCluster. The agent focuses on the node configuration (transition) tasks of this node.\nThe helm chart of YurtCluster Operator contains sub-charts of both YurtAppManager and YurtControllerManager, which are the core components of the OpenYurt cluster and will be installed synchronously."),(0,o.kt)("p",null,"Check if the YurtCluster component is ready (you will see output similar to the following in the ready state):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get pod -n kube-system | grep yurt\n\nyurt-app-manager-7998648c47-5s9tp            1/1     Running   0          4m45s\nyurt-app-manager-7998648c47-bdkfd            1/1     Running   0          4m45s\nyurt-app-manager-7998648c47-rg8zn            1/1     Running   0          4m45s\nyurt-controller-manager-868b85cc4b-5ktf2     1/1     Running   0          4m45s\nyurt-controller-manager-868b85cc4b-gkwlf     1/1     Running   0          4m45s\nyurt-controller-manager-868b85cc4b-pwwmx     1/1     Running   0          4m45s\nyurt-operator-agent-2sx77                    1/1     Running   0          4m45s\nyurt-operator-agent-lhqgm                    1/1     Running   0          4m45s\nyurt-operator-agent-tfk9q                    1/1     Running   0          4m45s\nyurt-operator-agent-x9rrs                    1/1     Running   0          4m45s\nyurt-operator-manager-7476dc9b4-v28tx        1/1     Running   0          4m45s\n")),(0,o.kt)("h3",{id:"23-tag-node-type"},"2.3 Tag node type"),(0,o.kt)("p",null,"In order to verify the node conversion capability of YurtCluster Operator, it is necessary to group nodes in advance. This article groups nodes based on the following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"NodeName"),(0,o.kt)("th",{parentName:"tr",align:null},"Role"),(0,o.kt)("th",{parentName:"tr",align:null},"Label"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kind-control-plane"),(0,o.kt)("td",{parentName:"tr",align:null},"ControlPlane"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kind-worker"),(0,o.kt)("td",{parentName:"tr",align:null},"CloudNode"),(0,o.kt)("td",{parentName:"tr",align:null},"openyurt.io/node-type=cloud")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kind-worker2"),(0,o.kt)("td",{parentName:"tr",align:null},"EdgeNode"),(0,o.kt)("td",{parentName:"tr",align:null},"openyurt.io/node-type=edge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kind-worker3"),(0,o.kt)("td",{parentName:"tr",align:null},"EdgeNode"),(0,o.kt)("td",{parentName:"tr",align:null},"openyurt.io/node-type=edge")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl label node kind-worker openyurt.io/node-type=cloud\n# kubectl label node kind-worker2 openyurt.io/node-type=edge\n# kubectl label node kind-worker3 openyurt.io/node-type=edge\n")),(0,o.kt)("h3",{id:"24-deploy-the-yurtcluster-cr-object"},"2.4 Deploy the YurtCluster CR object"),(0,o.kt)("p",null,"YurtCluster is a custom Kubernetes CRD that defines the desired state of the OpenYurt cluster, including the OpenYurt cluster component warehouse address, the OpenYurt version number used, the cloud node set, the edge node set, and the related configurations of key system components YurtHub and YurtTunnel, full Scheme definition Please refer to the source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurtcluster-operator/blob/main/api/v1alpha1/yurtcluster_types.go"},"API definition")," ."),(0,o.kt)("p",null,"This article takes the deployment of OpenYurt v0.5.0 as an example, and prepares the CR definition ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtcluster.yaml")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: operator.openyurt.io/v1alpha1\nkind: YurtCluster\nmetadata:\n  name: cluster\nspec:\n  yurtVersion: "v0.5.0"\n  cloudNodes:\n    selector:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: openyurt.io/node-type\n              operator: In\n              values:\n                - "cloud"\n  edgeNodes:\n    selector:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: openyurt.io/node-type\n              operator: In\n              values:\n                - "edge"\n')),(0,o.kt)("p",null,"Note: YurtCluster is a singleton in the cluster, only the YurtCluster CR named ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster")," will be received and processed by the system."),(0,o.kt)("p",null,"In the YurtCluster CR above, it is defined that CloudNode needs to have the label ",(0,o.kt)("inlineCode",{parentName:"p"},"openyurt.io/node-type=cloud"),", and EdgeNode needs to have the label ",(0,o.kt)("inlineCode",{parentName:"p"},"openyurt.io/node-type=edge"),"."),(0,o.kt)("p",null,"Deploy YurtCluster CR to the cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl apply -f yurtcluster.yaml\n\nyurtcluster.operator.openyurt.io/cluster created\n")),(0,o.kt)("p",null,"Check YurtCluster status (yurtcluster can be abbreviated as yc):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get yc\n\nNAME      PHASE\ncluster   Converting\n")),(0,o.kt)("p",null,"As can be seen, the cluster is in the process of converting the configuration, and when the PHASE turns to Succeed, the configuration is complete."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get yc\n\nNAME      PHASE\ncluster   Succeed\n")),(0,o.kt)("p",null,"Conversion details can be obtained by checking the Status field of YurtCluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# kubectl get yc cluster -oyaml\n\n...\nstatus:\n  nodeConditions:\n    kind-worker:\n      lastTransitionTime: "2021-12-28T03:34:40Z"\n      message: Node was converted into CloudNode successfully\n      observedGeneration: 2\n      reason: CloudNodeConvert\n      status: "True"\n    kind-worker2:\n      lastTransitionTime: "2021-12-28T03:35:05Z"\n      message: Node was converted into EdgeNode successfully\n      observedGeneration: 2\n      reason: EdgeNodeConvert\n      status: "True"\n    kind-worker3:\n      lastTransitionTime: "2021-12-28T03:35:04Z"\n      message: Node was converted into EdgeNode successfully\n      observedGeneration: 2\n      reason: EdgeNodeConvert\n      status: "True"\n  observedGeneration: 2\n  phase: Succeed\n')),(0,o.kt)("p",null,"As expected, kind-worker is configured as CloudNode, kind-worker2 and kind-worker3 are configured as EdgeNode."),(0,o.kt)("p",null,"Check if yurthub has been fully started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get pod -n kube-system | grep yurt-hub\n\nyurt-hub-kind-worker                         1/1     Running   0          8m\nyurt-hub-kind-worker2                        1/1     Running   0          8m\nyurt-hub-kind-worker3                        1/1     Running   0          8m\n")),(0,o.kt)("p",null,"Check if YurtTunnel has been fully started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get pod -n kube-system | grep yurt-tunnel\n\nyurt-tunnel-agent-5fxz6                      1/1     Running   0          8m\nyurt-tunnel-agent-vfkmd                      1/1     Running   0          8m\nyurt-tunnel-server-f7md8                     1/1     Running   0          8m\n")),(0,o.kt)("h2",{id:"3-verify-the-cluster"},"3. Verify the cluster"),(0,o.kt)("h3",{id:"31-pull-edge-node-pod-logs-verify-that-tunnel-is-working-correctly"},"3.1 Pull edge node pod logs (verify that Tunnel is working correctly)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# kubectl logs -f -n kube-system yurt-tunnel-agent-5fxz6\n\nI1228 03:34:26.670053       1 start.go:51] yurttunnel-agent version: projectinfo.Info{GitVersion:"v0.5.0", GitCommit:"71d1da7", BuildDate:"2021-09-29T02:50:58Z", GoVersion:"go1.15.15", Compiler:"gc", Platform:"linux/amd64"}\nI1228 03:34:26.670629       1 options.go:136] ipv4=172.18.0.3&host=kind-worker2 is set for agent identifies\nI1228 03:34:26.670791       1 options.go:141] neither --kube-config nor --apiserver-addr is set, will use /etc/kubernetes/kubelet.conf as the kubeconfig\nI1228 03:34:26.670820       1 options.go:145] create the clientset based on the kubeconfig(/etc/kubernetes/kubelet.conf).\nI1228 03:34:26.723640       1 start.go:87] yurttunnel-server address: 172.18.0.5:32444\nW1228 03:34:26.724153       1 filestore_wrapper.go:49] unexpected error occurred when loading the certificate: no cert/key files read at "/var/lib/yurttunnel-agent/pki/yurttunnel-agent-current.pem", ("", "") or ("/var/lib/yurttunnel-agent/pki", "/var/lib/yurttunnel-agent/pki"), will regenerate it\nI1228 03:34:31.724563       1 start.go:106] certificate yurttunnel-agent ok\nI1228 03:34:31.725038       1 anpagent.go:57] start serving grpc request redirected from yurttunnel-server: 172.18.0.5:32444\nI1228 03:34:31.725567       1 util.go:71] "start handling meta requests(metrics/pprof)" server endpoint="127.0.0.1:10266"\nI1228 03:34:31.734083       1 client.go:224] "Connect to" server="6e11745a-79bb-4486-8222-7f75d7697e10"\nI1228 03:34:31.734122       1 clientset.go:190] "sync added client connecting to proxy server" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"\nI1228 03:34:31.734146       1 client.go:326] "Start serving" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"\nI1228 06:37:06.772662       1 client.go:412] received dial request to tcp:172.18.0.3:10250 with random=7660323324116104765 and connID=1\n')),(0,o.kt)("p",null,"The logs can be obtained, which means that the tunnel component is working correctly."),(0,o.kt)("h3",{id:"32-pull-yurthub-component-logs-verify-that-yurthub-is-working-correctly"},"3.2 Pull YurtHub component logs (verify that YurtHub is working correctly)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl logs -f -n kube-system yurt-hub-kind-worker\n\n...\nI1228 03:34:34.186522       1 util.go:232] start proxying: get /api/v1/services?limit=500&resourceVersion=0, in flight requests: 4\nI1228 03:34:34.187236       1 util.go:215] kubelet list nodes: /api/v1/nodes?fieldSelector=metadata.name%3Dkind-worker&limit=500&resourceVersion=0 with status code 200, spent 8.468841ms\nI1228 03:34:34.197137       1 util.go:232] start proxying: get /api/v1/nodes?allowWatchBookmarks=true&fieldSelector=metadata.name%3Dkind-worker&resourceVersion=14139&timeout=8m26s&timeoutSeconds=506&watch=true, in flight requests: 4\nI1228 03:34:34.207398       1 handler.go:83] mutate master service into ClusterIP:Port=169.254.2.1:10268 for request kubelet list services: https://kind-control-plane:6443/api/v1/services?limit=500&resourceVersion=0\nI1228 03:34:34.214583       1 util.go:215] kubelet list services: /api/v1/services?limit=500&resourceVersion=0 with status code 200, spent 27.805893ms\nI1228 03:34:34.216177       1 util.go:232] start proxying: get /api/v1/services?allowWatchBookmarks=true&resourceVersion=13727&timeout=8m14s&timeoutSeconds=494&watch=true, in flight requests: 4\n...\n")),(0,o.kt)("p",null,"If you see a log similar to the above, it means that YurtHub has successfully proxied the kubelet request."),(0,o.kt)("h2",{id:"4-clean-up"},"4. Clean up"),(0,o.kt)("p",null,"Execute the following command to clean up the OpenYurt cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl delete yc cluster\n# helm uninstall yurtcluster-operator   -n kube-system\n")))}d.isMDXComponent=!0}}]);