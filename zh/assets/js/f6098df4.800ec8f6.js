"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6264],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5261:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],u={title:"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4"},s=void 0,i={unversionedId:"installation/yurtcluster",id:"version-v0.7.0/installation/yurtcluster",isDocsHomePage:!1,title:"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4",description:"1. \u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.7.0/installation/yurtcluster.md",sourceDirName:"installation",slug:"/installation/yurtcluster",permalink:"/zh/docs/installation/yurtcluster",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtcluster.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1653913201,formattedLastUpdatedAt:"2022/5/30",frontMatter:{title:"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4"},sidebar:"version-v0.7.0/docs",previous:{title:"OpenYurt Precondition",permalink:"/zh/docs/installation/openyurt-prepare"},next:{title:"\u624b\u52a8\u8f6c\u6362",permalink:"/zh/docs/installation/manually-setup"}},p=[{value:"1. \u80cc\u666f\u8bf4\u660e",id:"1-\u80cc\u666f\u8bf4\u660e",children:[],level:2},{value:"2. \u5b89\u88c5\u6d41\u7a0b",id:"2-\u5b89\u88c5\u6d41\u7a0b",children:[{value:"2.1 \u524d\u7f6e\u51c6\u5907",id:"21-\u524d\u7f6e\u51c6\u5907",children:[],level:3},{value:"2.2 \u90e8\u7f72 YurtCluster Operator",id:"22-\u90e8\u7f72-yurtcluster-operator",children:[],level:3},{value:"2.3 \u6807\u8bb0\u8282\u70b9\u7c7b\u578b",id:"23-\u6807\u8bb0\u8282\u70b9\u7c7b\u578b",children:[],level:3},{value:"2.4 \u90e8\u7f72 YurtCluster CR \u5bf9\u8c61",id:"24-\u90e8\u7f72-yurtcluster-cr-\u5bf9\u8c61",children:[],level:3}],level:2},{value:"3. \u9a8c\u8bc1\u96c6\u7fa4",id:"3-\u9a8c\u8bc1\u96c6\u7fa4",children:[{value:"3.1 \u62c9\u53d6\u8fb9\u7f18\u8282\u70b9 Pod \u65e5\u5fd7 (\u9a8c\u8bc1 Tunnel \u6b63\u786e\u5de5\u4f5c\uff09",id:"31-\u62c9\u53d6\u8fb9\u7f18\u8282\u70b9-pod-\u65e5\u5fd7-\u9a8c\u8bc1-tunnel-\u6b63\u786e\u5de5\u4f5c",children:[],level:3},{value:"3.2 \u62c9\u53d6 YurtHub \u7ec4\u4ef6\u65e5\u5fd7\uff08\u9a8c\u8bc1 YurtHub \u6b63\u786e\u5de5\u4f5c\uff09",id:"32-\u62c9\u53d6-yurthub-\u7ec4\u4ef6\u65e5\u5fd7\u9a8c\u8bc1-yurthub-\u6b63\u786e\u5de5\u4f5c",children:[],level:3}],level:2},{value:"4. \u6e05\u7406",id:"4-\u6e05\u7406",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u80cc\u666f\u8bf4\u660e"},"1. \u80cc\u666f\u8bf4\u660e"),(0,l.kt)("p",null,"\u5f53\u60a8\u51c6\u5907\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528 OpenYurt \u65f6\uff0c\u5b98\u65b9\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurtcluster-operator"},"YurtCluster Operator")," \u3002\nYurtCluster Operator \u63d0\u4f9b\u4e86\u4e91\u539f\u751f\u58f0\u540d\u5f0f Cluster API\uff0c\u80fd\u591f\u6839\u636e\u58f0\u660e\u7684\u914d\u7f6e\u81ea\u52a8\u5728\u6807\u51c6 Kubernetes \u96c6\u7fa4\u4e0a\u90e8\u7f72\u548c\u914d\u7f6e OpenYurt \u76f8\u5173\u7ec4\u4ef6\uff0c\n\u4f7f\u5176\u5177\u5907\u63d0\u4f9b\u8fb9\u7f18\u8ba1\u7b97\u670d\u52a1\u7684\u80fd\u529b\uff08\u5373\u5c06\u666e\u901a\u96c6\u7fa4\u4e00\u952e\u8f6c\u6362\u4e3a OpenYurt \u8fb9\u7f18\u96c6\u7fa4\uff09\uff0c\u540c\u65f6\u8d1f\u8d23\u52a8\u6001\u8ffd\u8e2a\u548c\u7ba1\u7406 OpenYurt \u96c6\u7fa4\u7684\u751f\u547d\u5468\u671f\uff0c\u5305\u62ec\u96c6\u7fa4\u6269\u5bb9\u3001\u5347\u7ea7\u7b49\uff0c\n\u4fdd\u969c\u8fb9\u7f18\u96c6\u7fa4\u59cb\u7ec8\u8fd0\u884c\u5728\u6700\u4f73\u72b6\u6001\u3002"),(0,l.kt)("h2",{id:"2-\u5b89\u88c5\u6d41\u7a0b"},"2. \u5b89\u88c5\u6d41\u7a0b"),(0,l.kt)("h3",{id:"21-\u524d\u7f6e\u51c6\u5907"},"2.1 \u524d\u7f6e\u51c6\u5907"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u524d\uff0c\u60a8\u9700\u8981\u5148\u51c6\u5907\u4e00\u4e2a\u666e\u901a\u7684 Kubernetes \u96c6\u7fa4\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u4e00\u4e2a\u53ef\u7528\u96c6\u7fa4\uff0c\u53ef\u4ee5\u53c2\u8003\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/"},"kubeadm")," \u7b49\u5de5\u5177\u642d\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u3002\n\u5f53\u7136\uff0c\u5982\u679c\u60a8\u53ea\u662f\u60f3\u4f53\u9a8c YurtCluster Operator \u7684\u76f8\u5173\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u57fa\u4e8e\u793e\u533a\u63a8\u8350\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/"},"kind")," \u3001",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"minikube")," \u7b49\u5de5\u5177\u5feb\u901f\u62c9\u8d77\u4e00\u4e2a\u7528\u4e8e\u672c\u5730\u5f00\u53d1\u6d4b\u8bd5\u4f7f\u7528\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u4ec5\u4ecb\u7ecd\u901a\u8fc7 kind \u5de5\u5177\u62c9\u8d77\u96c6\u7fa4\u7684\u4e00\u822c\u65b9\u6cd5\uff0c\u5173\u4e8e\u5176\u5b83\u5de5\u5177\u7684\u4f7f\u7528\u8bf7\u53c2\u7167\u5176\u5bf9\u5e94\u7684\u5b98\u65b9\u8bf4\u660e\u6587\u6863\u3002"),(0,l.kt)("p",null,"kind \u4f9d\u8d56 Docker \u8f6f\u4ef6\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684\u673a\u5668\u4e0a\u5df2\u7ecf\u6b63\u786e\u5b89\u88c5\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," \u7a0b\u5e8f\uff0c\u5173\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"kind \u7684\u5b89\u88c5\u8bf7\u53c2\u7167\u6587\u6863")," \u3002"),(0,l.kt)("p",null,"\u51c6\u5907\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"kind-cluster.yaml")," \u6587\u4ef6\uff0c\u5b9a\u4e49\u4e00\u4e2a \u201c1 control-plane + 3 worker\u201d \u7684 Kubernetes \u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kind.x-k8s.io/v1alpha4\nkind: Cluster\nnodes:\n- role: control-plane\n- role: worker\n- role: worker\n- role: worker\n")),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u521d\u59cb\u5316\u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# kind create cluster --config kind-cluster.yaml\n\nCreating cluster "kind" ...\n \u2713 Ensuring node image (kindest/node:v1.21.1) \ud83d\uddbc \n \u2713 Preparing nodes \ud83d\udce6 \ud83d\udce6 \ud83d\udce6 \ud83d\udce6  \n \u2713 Writing configuration \ud83d\udcdc \n \u2713 Starting control-plane \ud83d\udd79\ufe0f \n \u2713 Installing CNI \ud83d\udd0c \n \u2713 Installing StorageClass \ud83d\udcbe \n \u2713 Joining worker nodes \ud83d\ude9c \nSet kubectl context to "kind-kind"\nYou can now use your cluster with:\n\nkubectl cluster-info --context kind-kind\n\nHave a nice day! \ud83d\udc4b\n')),(0,l.kt)("p",null,"\u68c0\u67e5\u96c6\u7fa4\u662f\u5426\u5df2\u7ecf Ready\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# kubectl get node\n\nNAME                 STATUS   ROLES                  AGE     VERSION\nkind-control-plane   Ready    control-plane,master   6m30s   v1.21.1\nkind-worker          Ready    <none>                 5m56s   v1.21.1\nkind-worker2         Ready    <none>                 5m57s   v1.21.1\nkind-worker3         Ready    <none>                 5m57s   v1.21.1\n")),(0,l.kt)("h3",{id:"22-\u90e8\u7f72-yurtcluster-operator"},"2.2 \u90e8\u7f72 YurtCluster Operator"),(0,l.kt)("p",null,"YurtCluster Operator \u63d0\u4f9b\u4e86 Helm Chart \u90e8\u7f72\u5305\uff0c\u53ef\u4ee5\u901a\u8fc7 Helm \u5b9e\u73b0\u4e00\u952e\u90e8\u7f72\uff0c"),(0,l.kt)("p",null,"YurtCluster Operator \u5c5e\u4e8e\u96c6\u7fa4\u751f\u547d\u5468\u671f\u6838\u5fc3\u7ba1\u63a7\u7ec4\u4ef6\uff0c\u9700\u8981\u90e8\u7f72\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-system"),"\u547d\u540d\u7a7a\u95f4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# git clone https://github.com/openyurtio/yurtcluster-operator\n# cd yurtcluster-operator/charts\n# helm install yurtcluster-operator . -n kube-system\n\nNAME: yurtcluster-operator\nLAST DEPLOYED: Tue Dec 28 10:45:28 2021\nNAMESPACE: kube-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,l.kt)("p",null,"YurtCluster Operator \u91c7\u7528\u4e86\u5206\u5e03\u5f0f\u67b6\u6784\uff0c\u5305\u542b\u4e00\u4e2a manager \u7ec4\u4ef6\uff08\u652f\u6301\u591a\u526f\u672c\u9ad8\u53ef\u7528\u90e8\u7f72\uff09\uff0c\u4ee5\u53ca\u8fd0\u884c\u5728\u5404\u4e2a\u8282\u70b9\u4e0a\u7684 agent \u7ec4\u4ef6\u3002\nmanager \u7ec4\u4ef6\u8d1f\u8d23\u7edf\u4e00\u7ba1\u7406\u96c6\u7fa4\u7ec4\u4ef6\u7684\u5b89\u88c5\u90e8\u7f72\u4ee5\u53ca YurtCluster \u7684\u72b6\u6001\u66f4\u65b0\u7b49\uff0cagent \u4e13\u6ce8\u4e8e\u5904\u7406\u672c\u8282\u70b9\u7684\u8282\u70b9\u914d\u7f6e\uff08\u8f6c\u6362\uff09\u4efb\u52a1\u3002\nYurtCluster Operator \u7684 helm chart \u4e2d\u540c\u65f6\u5305\u542b\u4e86 YurtAppManager \u548c YurtControllerManager \u5b50 chart\uff0c\u5b83\u4eec\u4f5c\u4e3a OpenYurt \u96c6\u7fa4\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u4f1a\u88ab\u540c\u6b65\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u68c0\u67e5 YurtCluster \u7ec4\u4ef6\u662f\u5426\u5df2\u7ecf\u5c31\u7eea\uff08\u5c31\u7eea\u72b6\u6001\u4f1a\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u8f93\u51fa\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get pod -n kube-system | grep yurt\n\nyurt-app-manager-7998648c47-5s9tp            1/1     Running   0          4m45s\nyurt-app-manager-7998648c47-bdkfd            1/1     Running   0          4m45s\nyurt-app-manager-7998648c47-rg8zn            1/1     Running   0          4m45s\nyurt-controller-manager-868b85cc4b-5ktf2     1/1     Running   0          4m45s\nyurt-controller-manager-868b85cc4b-gkwlf     1/1     Running   0          4m45s\nyurt-controller-manager-868b85cc4b-pwwmx     1/1     Running   0          4m45s\nyurt-operator-agent-2sx77                    1/1     Running   0          4m45s\nyurt-operator-agent-lhqgm                    1/1     Running   0          4m45s\nyurt-operator-agent-tfk9q                    1/1     Running   0          4m45s\nyurt-operator-agent-x9rrs                    1/1     Running   0          4m45s\nyurt-operator-manager-7476dc9b4-v28tx        1/1     Running   0          4m45s\n")),(0,l.kt)("h3",{id:"23-\u6807\u8bb0\u8282\u70b9\u7c7b\u578b"},"2.3 \u6807\u8bb0\u8282\u70b9\u7c7b\u578b"),(0,l.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1 YurtCluster Operator \u7684\u8282\u70b9\u8f6c\u6362\u80fd\u529b\uff0c\u9700\u8981\u9884\u5148\u5bf9\u8282\u70b9\u8fdb\u884c\u5206\u7ec4\u3002\u672c\u6587\u57fa\u4e8e\u5982\u4e0b\u8868\u683c\u5bf9\u8282\u70b9\u5206\u7ec4\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NodeName"),(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Label"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kind-control-plane"),(0,l.kt)("td",{parentName:"tr",align:null},"ControlPlane"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kind-worker"),(0,l.kt)("td",{parentName:"tr",align:null},"CloudNode"),(0,l.kt)("td",{parentName:"tr",align:null},"openyurt.io/node-type=cloud")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kind-worker2"),(0,l.kt)("td",{parentName:"tr",align:null},"EdgeNode"),(0,l.kt)("td",{parentName:"tr",align:null},"openyurt.io/node-type=edge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kind-worker3"),(0,l.kt)("td",{parentName:"tr",align:null},"EdgeNode"),(0,l.kt)("td",{parentName:"tr",align:null},"openyurt.io/node-type=edge")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl label node kind-worker openyurt.io/node-type=cloud\n# kubectl label node kind-worker2 openyurt.io/node-type=edge\n# kubectl label node kind-worker3 openyurt.io/node-type=edge\n")),(0,l.kt)("h3",{id:"24-\u90e8\u7f72-yurtcluster-cr-\u5bf9\u8c61"},"2.4 \u90e8\u7f72 YurtCluster CR \u5bf9\u8c61"),(0,l.kt)("p",null,"YurtCluster \u662f\u81ea\u5b9a\u4e49\u7684 Kubernetes CRD\uff0c\u5b9a\u4e49\u4e86 OpenYurt \u96c6\u7fa4\u7684\u671f\u671b\u72b6\u6001\uff0c\u5305\u62ec OpenYurt \u96c6\u7fa4\u7ec4\u4ef6\u4ed3\u5e93\u5730\u5740\u3001\u4f7f\u7528\u7684 OpenYurt \u7248\u672c\u53f7\u3001\n\u4e91\u7aef\u8282\u70b9\u96c6\u5408\u3001\u8fb9\u7f18\u8282\u70b9\u96c6\u5408\u4ee5\u53ca\u5173\u952e\u7cfb\u7edf\u7ec4\u4ef6 YurtHub\u3001YurtTunnel \u7684\u76f8\u5173\u914d\u7f6e\uff0c\u5168\u91cf\u7684 Scheme \u5b9a\u4e49\u8bf7\u53c2\u7167\u6e90\u7801\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/yurtcluster-operator/blob/main/api/v1alpha1/yurtcluster_types.go"},"API \u5b9a\u4e49")," \u3002"),(0,l.kt)("p",null,"\u672c\u6587\u4ee5\u90e8\u7f72 OpenYurt v0.5.0 \u7248\u672c\u4e3a\u4f8b\uff0c\u51c6\u5907 CR \u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"yurtcluster.yaml")," \u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: operator.openyurt.io/v1alpha1\nkind: YurtCluster\nmetadata:\n  name: cluster\nspec:\n  yurtVersion: "v0.5.0"\n  cloudNodes:\n    selector:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: openyurt.io/node-type\n              operator: In\n              values:\n                - "cloud"\n  edgeNodes:\n    selector:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: openyurt.io/node-type\n              operator: In\n              values:\n                - "edge"\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff1aYurtCluster \u5728\u96c6\u7fa4\u4e2d\u662f\u5355\u4f8b\u7684\uff0c\u53ea\u6709\u540d\u5b57\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," \u7684 YurtCluster CR \u4f1a\u88ab\u7cfb\u7edf\u63a5\u6536\u548c\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u5728\u4e0a\u8ff0 YurtCluster CR \u4e2d\uff0c\u5b9a\u4e49\u4e86 CloudNode \u9700\u8981\u5177\u5907\u6807\u7b7e ",(0,l.kt)("inlineCode",{parentName:"p"},"openyurt.io/node-type=cloud"),"\uff0cEdgeNode \u9700\u8981\u5177\u5907\u6807\u7b7e ",(0,l.kt)("inlineCode",{parentName:"p"},"openyurt.io/node-type=edge"),"\u3002"),(0,l.kt)("p",null,"\u90e8\u7f72 YurtCluster CR \u5230\u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl apply -f yurtcluster.yaml\n\nyurtcluster.operator.openyurt.io/cluster created\n")),(0,l.kt)("p",null,"\u67e5\u770b YurtCluster \u72b6\u6001\uff08yurtcluster \u53ef\u7b80\u5199\u4e3a yc\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get yc\n\nNAME      PHASE\ncluster   Converting\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u96c6\u7fa4\u6b63\u5728\u8f6c\u6362\u914d\u7f6e\u4e2d\uff0c\u7b49\u5230 PHASE \u8f6c\u4e3a Succeed\uff0c\u5373\u8868\u660e\u914d\u7f6e\u5df2\u5b8c\u6210\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get yc\n\nNAME      PHASE\ncluster   Succeed\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u67e5\u770b YurtCluster \u7684 Status \u5b57\u6bb5\uff0c\u53ef\u4ee5\u83b7\u53d6\u8f6c\u6362\u8be6\u60c5\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# kubectl get yc cluster -oyaml\n\n...\nstatus:\n  nodeConditions:\n    kind-worker:\n      lastTransitionTime: "2021-12-28T03:34:40Z"\n      message: Node was converted into CloudNode successfully\n      observedGeneration: 2\n      reason: CloudNodeConvert\n      status: "True"\n    kind-worker2:\n      lastTransitionTime: "2021-12-28T03:35:05Z"\n      message: Node was converted into EdgeNode successfully\n      observedGeneration: 2\n      reason: EdgeNodeConvert\n      status: "True"\n    kind-worker3:\n      lastTransitionTime: "2021-12-28T03:35:04Z"\n      message: Node was converted into EdgeNode successfully\n      observedGeneration: 2\n      reason: EdgeNodeConvert\n      status: "True"\n  observedGeneration: 2\n  phase: Succeed\n')),(0,l.kt)("p",null,"\u6309\u7167\u9884\u671f\uff0ckind-worker \u88ab\u914d\u7f6e\u4e3a CloudNode\uff0c kind-worker2 \u548c kind-worker3 \u88ab\u914d\u7f6e\u4e3a EdgeNode\u3002"),(0,l.kt)("p",null,"\u68c0\u67e5 yurthub \u662f\u5426\u5df2\u7ecf\u5168\u90e8\u542f\u52a8\u5b8c\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get pod -n kube-system | grep yurt-hub\n\nyurt-hub-kind-worker                         1/1     Running   0          8m\nyurt-hub-kind-worker2                        1/1     Running   0          8m\nyurt-hub-kind-worker3                        1/1     Running   0          8m\n")),(0,l.kt)("p",null,"\u68c0\u67e5 YurtTunnel \u662f\u5426\u5df2\u7ecf\u5168\u90e8\u542f\u52a8\u5b8c\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl get pod -n kube-system | grep yurt-tunnel\n\nyurt-tunnel-agent-5fxz6                      1/1     Running   0          8m\nyurt-tunnel-agent-vfkmd                      1/1     Running   0          8m\nyurt-tunnel-server-f7md8                     1/1     Running   0          8m\n")),(0,l.kt)("h2",{id:"3-\u9a8c\u8bc1\u96c6\u7fa4"},"3. \u9a8c\u8bc1\u96c6\u7fa4"),(0,l.kt)("h3",{id:"31-\u62c9\u53d6\u8fb9\u7f18\u8282\u70b9-pod-\u65e5\u5fd7-\u9a8c\u8bc1-tunnel-\u6b63\u786e\u5de5\u4f5c"},"3.1 \u62c9\u53d6\u8fb9\u7f18\u8282\u70b9 Pod \u65e5\u5fd7 (\u9a8c\u8bc1 Tunnel \u6b63\u786e\u5de5\u4f5c\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# kubectl logs -f -n kube-system yurt-tunnel-agent-5fxz6\n\nI1228 03:34:26.670053       1 start.go:51] yurttunnel-agent version: projectinfo.Info{GitVersion:"v0.5.0", GitCommit:"71d1da7", BuildDate:"2021-09-29T02:50:58Z", GoVersion:"go1.15.15", Compiler:"gc", Platform:"linux/amd64"}\nI1228 03:34:26.670629       1 options.go:136] ipv4=172.18.0.3&host=kind-worker2 is set for agent identifies\nI1228 03:34:26.670791       1 options.go:141] neither --kube-config nor --apiserver-addr is set, will use /etc/kubernetes/kubelet.conf as the kubeconfig\nI1228 03:34:26.670820       1 options.go:145] create the clientset based on the kubeconfig(/etc/kubernetes/kubelet.conf).\nI1228 03:34:26.723640       1 start.go:87] yurttunnel-server address: 172.18.0.5:32444\nW1228 03:34:26.724153       1 filestore_wrapper.go:49] unexpected error occurred when loading the certificate: no cert/key files read at "/var/lib/yurttunnel-agent/pki/yurttunnel-agent-current.pem", ("", "") or ("/var/lib/yurttunnel-agent/pki", "/var/lib/yurttunnel-agent/pki"), will regenerate it\nI1228 03:34:31.724563       1 start.go:106] certificate yurttunnel-agent ok\nI1228 03:34:31.725038       1 anpagent.go:57] start serving grpc request redirected from yurttunnel-server: 172.18.0.5:32444\nI1228 03:34:31.725567       1 util.go:71] "start handling meta requests(metrics/pprof)" server endpoint="127.0.0.1:10266"\nI1228 03:34:31.734083       1 client.go:224] "Connect to" server="6e11745a-79bb-4486-8222-7f75d7697e10"\nI1228 03:34:31.734122       1 clientset.go:190] "sync added client connecting to proxy server" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"\nI1228 03:34:31.734146       1 client.go:326] "Start serving" serverID="6e11745a-79bb-4486-8222-7f75d7697e10"\nI1228 06:37:06.772662       1 client.go:412] received dial request to tcp:172.18.0.3:10250 with random=7660323324116104765 and connID=1\n')),(0,l.kt)("p",null,"\u80fd\u591f\u83b7\u53d6\u5230\u65e5\u5fd7\uff0c\u5373\u8868\u660e tunnel \u7ec4\u4ef6\u5df2\u7ecf\u6b63\u786e\u5de5\u4f5c\u3002"),(0,l.kt)("h3",{id:"32-\u62c9\u53d6-yurthub-\u7ec4\u4ef6\u65e5\u5fd7\u9a8c\u8bc1-yurthub-\u6b63\u786e\u5de5\u4f5c"},"3.2 \u62c9\u53d6 YurtHub \u7ec4\u4ef6\u65e5\u5fd7\uff08\u9a8c\u8bc1 YurtHub \u6b63\u786e\u5de5\u4f5c\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl logs -f -n kube-system yurt-hub-kind-worker\n\n...\nI1228 03:34:34.186522       1 util.go:232] start proxying: get /api/v1/services?limit=500&resourceVersion=0, in flight requests: 4\nI1228 03:34:34.187236       1 util.go:215] kubelet list nodes: /api/v1/nodes?fieldSelector=metadata.name%3Dkind-worker&limit=500&resourceVersion=0 with status code 200, spent 8.468841ms\nI1228 03:34:34.197137       1 util.go:232] start proxying: get /api/v1/nodes?allowWatchBookmarks=true&fieldSelector=metadata.name%3Dkind-worker&resourceVersion=14139&timeout=8m26s&timeoutSeconds=506&watch=true, in flight requests: 4\nI1228 03:34:34.207398       1 handler.go:83] mutate master service into ClusterIP:Port=169.254.2.1:10268 for request kubelet list services: https://kind-control-plane:6443/api/v1/services?limit=500&resourceVersion=0\nI1228 03:34:34.214583       1 util.go:215] kubelet list services: /api/v1/services?limit=500&resourceVersion=0 with status code 200, spent 27.805893ms\nI1228 03:34:34.216177       1 util.go:232] start proxying: get /api/v1/services?allowWatchBookmarks=true&resourceVersion=13727&timeout=8m14s&timeoutSeconds=494&watch=true, in flight requests: 4\n...\n")),(0,l.kt)("p",null,"\u770b\u5230\u7c7b\u4f3c\u5982\u4e0a\u7684\u65e5\u5fd7\uff0c\u5219\u8868\u660e YurtHub \u5df2\u7ecf\u6210\u529f\u4ee3\u7406\u4e86 kubelet \u7684\u8bf7\u6c42\u3002"),(0,l.kt)("h2",{id:"4-\u6e05\u7406"},"4. \u6e05\u7406"),(0,l.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6e05\u7406 OpenYurt \u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl delete yc cluster\n# helm uninstall yurtcluster-operator   -n kube-system\n")))}d.isMDXComponent=!0}}]);