"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6810],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1355:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return i}});var r=n(3117),o=(n(7294),n(3905));const l={title:"\u624b\u52a8\u8f6c\u6362"},a=void 0,u={unversionedId:"installation/manually-setup",id:"version-v0.5.0/installation/manually-setup",title:"\u624b\u52a8\u8f6c\u6362",description:"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/installation/manually-setup.md",sourceDirName:"installation",slug:"/installation/manually-setup",permalink:"/zh/docs/v0.5.0/installation/manually-setup",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/manually-setup.md",tags:[],version:"v0.5.0",lastUpdatedBy:"lorrielau",lastUpdatedAt:1657507162,formattedLastUpdatedAt:"2022\u5e747\u670811\u65e5",frontMatter:{title:"\u624b\u52a8\u8f6c\u6362"},sidebar:"version-v0.5.0/docs",previous:{title:"Yurtctl convert/revert",permalink:"/zh/docs/v0.5.0/installation/yurtctl-convert-revert"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/v0.5.0/core-concepts/architecture"}},s={},i=[{value:"Label cloud nodes and edge nodes",id:"label-cloud-nodes-and-edge-nodes",level:2},{value:"Setup Yurt-controller-manager",id:"setup-yurt-controller-manager",level:2},{value:"Note",id:"note",level:3},{value:"Disable the default nodelifecycle controller",id:"disable-the-default-nodelifecycle-controller",level:2},{value:"Setup Yurthub",id:"setup-yurthub",level:2},{value:"Setup Yurt-tunnel (Optional)",id:"setup-yurt-tunnel-optional",level:2},{value:"Reset the Kubelet",id:"reset-the-kubelet",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a\ntwo-nodes ACK(version 1.14.8) cluster, and all the yaml files used in this tutorial can be found\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"config/setup/"),"."),(0,o.kt)("h2",{id:"label-cloud-nodes-and-edge-nodes"},"Label cloud nodes and edge nodes"),(0,o.kt)("p",null,"When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,o.kt)("inlineCode",{parentName:"p"},"openyurt.io/is-edge-worker"),". Assume that the given Kubernetes cluster\nhas two nodes,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.14.8-aliyun.1\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.14.8-aliyun.1\n")),(0,o.kt)("p",null,"and we will use node ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west-1.192.168.0.87")," as the cloud node."),(0,o.kt)("p",null,"We label the cloud node with value ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 openyurt.io/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n")),(0,o.kt)("p",null,"and the edge node with value ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.88 openyurt.io/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n")),(0,o.kt)("p",null,"To active the autonomous mode, we annotate the edge node by typing following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.openyurt.io/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n")),(0,o.kt)("h2",{id:"setup-yurt-controller-manager"},"Setup Yurt-controller-manager"),(0,o.kt)("p",null,"Next, we need to deploy the Yurt controller manager, which prevents apiserver from evicting pods running on the\nautonomous edge nodes during disconnection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurt-controller-manager.yaml\ndeployment.apps/yurt-controller-manager created\n")),(0,o.kt)("h3",{id:"note"},"Note"),(0,o.kt)("p",null,'Since Docker turn on pull rate limit on anonymous request. You may encouter error message like "You have reached your pull rate limit. xxxx". In that case you will need to create a docker-registry secret to pull the image.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$kc create secret docker-registry dockerpass --docker-username=your-docker-username --docker-password='your-docker-password' --docker-email='your-email-address' -n kube-system\n")),(0,o.kt)("p",null,"Then edit the config/setup/yurt-controller-manager.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n      containers:\n      - name: yurt-controller-manager\n        image: openyurt/yurt-controller-manager:latest\n        command:\n        - yurt-controller-manager\n      imagePullSecrets:\n      - name: dockerpass\n")),(0,o.kt)("h2",{id:"disable-the-default-nodelifecycle-controller"},"Disable the default nodelifecycle controller"),(0,o.kt)("p",null,"To allow the yurt-controller-mamanger to work properly, we need to turn off the default nodelifecycle controller.\nThe nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers"),"\noption. Assume that the original option looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers=*,bootstrapsigner,tokencleaner"),", to disable\nthe nodelifecycle controller, we change the option to ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers=*,bootstrapsigner,tokencleaner,-nodelifecycle"),"."),(0,o.kt)("p",null,"If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in\nto the master node, then above operations can be done by revising the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifests/kube-controller-manager.yaml"),". After revision, the kube-controller-manager will be\nrestarted automatically."),(0,o.kt)("h2",{id:"setup-yurthub"},"Setup Yurthub"),(0,o.kt)("p",null,"After the Yurt controller manager is up and running, we will setup Yurthub as the static pod."),(0,o.kt)("p",null,"Before proceeding, we need to prepare the following items:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy global settings(i.e., RBAC, configmap) for yurthub.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f config/setup/yurthub-cfg.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Get the apiserver's address (i.e., ip:port) and a ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/"},"bootstrap token"),", which will be used to replace the place holder in the template\nfile ",(0,o.kt)("inlineCode",{parentName:"li"},"config/setup/yurthub.yaml"),".")),(0,o.kt)("p",null,"In the following command, we assume that the address of the apiserver is 1.2.3.4:5678 and bootstrap token is 07401b.f395accd246ae52d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat config/setup/yurthub.yaml |\nsed 's|__kubernetes_master_address__|1.2.3.4:5678|;\ns|__bootstrap_token__|07401b.f395accd246ae52d|' > /tmp/yurthub-ack.yaml &&\nscp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests\n")),(0,o.kt)("p",null,"and the Yurthub will be ready in minutes."),(0,o.kt)("h2",{id:"setup-yurt-tunnel-optional"},"Setup Yurt-tunnel (Optional)"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt.io/blob/master/docs/installation/yurt-tunnel-tutorial.md#5-setup-the-yurt-tunnel-manually"},"document")," to setup Yurttunnel manually."),(0,o.kt)("h2",{id:"reset-the-kubelet"},"Reset the Kubelet"),(0,o.kt)("p",null,"By now, we have setup all required components for the OpenYurt cluster, next, we only need to reset the\nkubelet service to let it access the apiserver through the yurthub (The following steps assume that we are logged\nin to the edge node as the root user).\nAs kubelet will connect to the Yurthub through http, so we create a new kubeconfig file for the kubelet service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n")),(0,o.kt)("p",null,"In order to let kubelet to use the new kubeconfig, we edit the drop-in file of the kubelet\nservice (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n')),(0,o.kt)("p",null,"Finally, we restart the kubelet service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n")))}p.isMDXComponent=!0}}]);