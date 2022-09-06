"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1343],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),k=u,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function k(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:u,a[1]=l;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i}});var r=n(7462),u=(n(7294),n(3905));const o={title:"\u8282\u70b9\u63a5\u5165"},a=void 0,l={unversionedId:"installation/yurtadm-join",id:"version-v1.0/installation/yurtadm-join",title:"\u8282\u70b9\u63a5\u5165",description:"\u7528\u6237\u6839\u636e\u8282\u70b9\u81ea\u8eab\u7684\u72b6\u51b5\uff0c\u9009\u62e9\u4e0b\u8ff0\u5176\u4e2d\u4e00\u79cd\u65b9\u6cd5\u6765\u63a5\u5165\u8282\u70b9",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/installation/yurtadm-join.md",sourceDirName:"installation",slug:"/installation/yurtadm-join",permalink:"/zh/docs/installation/yurtadm-join",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtadm-join.md",tags:[],version:"v1.0",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1662464199,formattedLastUpdatedAt:"2022\u5e749\u67086\u65e5",frontMatter:{title:"\u8282\u70b9\u63a5\u5165"},sidebar:"version-v1.0/docs",previous:{title:"\u5982\u4f55\u4f7f\u7528`kubeconfig`\u4f53\u9a8cOpenYurt\u7684\u80fd\u529b",permalink:"/zh/docs/installation/openyurt-experience-center/kubeconfig"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/core-concepts/architecture"}},s={},i=[{value:"1. \u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4",id:"1-\u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4",level:2},{value:"2. \u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6",id:"2-\u5728\u5b58\u91cf\u7684k8s\u8282\u70b9\u4e0a\u5b89\u88c5openyurt-node\u7ec4\u4ef6",level:2},{value:"2.1 \u90e8\u7f72Edge\u5de5\u4f5c\u6a21\u5f0f\u7684Yurthub",id:"21-\u90e8\u7f72edge\u5de5\u4f5c\u6a21\u5f0f\u7684yurthub",level:3},{value:"2.2 \u914d\u7f6eKubelet",id:"22-\u914d\u7f6ekubelet",level:3},{value:"2.3 \u91cd\u5efa\u8282\u70b9\u4e0a\u7684Pods",id:"23-\u91cd\u5efa\u8282\u70b9\u4e0a\u7684pods",level:3}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,u.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u7528\u6237\u6839\u636e\u8282\u70b9\u81ea\u8eab\u7684\u72b6\u51b5\uff0c\u9009\u62e9\u4e0b\u8ff0\u5176\u4e2d\u4e00\u79cd\u65b9\u6cd5\u6765\u63a5\u5165\u8282\u70b9"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/docs/installation/yurtadm-join#1-%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%8A%8A%E8%8A%82%E7%82%B9%E5%8A%A0%E5%85%A5%E9%9B%86%E7%BE%A4"},"\u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/zh/docs/installation/yurtadm-join#2-%E5%9C%A8%E5%AD%98%E9%87%8F%E7%9A%84k8s%E8%8A%82%E7%82%B9%E4%B8%8A%E5%AE%89%E8%A3%85openyurt-node%E7%BB%84%E4%BB%B6"},"\u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6"))),(0,u.kt)("h2",{id:"1-\u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4"},"1. \u4ece\u96f6\u5f00\u59cb\u628a\u8282\u70b9\u52a0\u5165\u96c6\u7fa4"),(0,u.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Yurtadm join \u5c06\u4e91\u7aef\u8282\u70b9\u3001\u8fb9\u7f18\u8282\u70b9\u52a0\u5165 OpenYurt \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u5728\u52a0\u5165\u8282\u70b9\u65f6\uff0c\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"),(0,u.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5\n")),(0,u.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u4e91\u7aef\u8282\u70b9\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5\n")),(0,u.kt)("p",null,"\u5f53\u8fb9\u7f18\u8282\u70b9runtime\u4e3acontainerd\u65f6\uff0c\u9700\u8981\u914d\u7f6e",(0,u.kt)("inlineCode",{parentName:"p"},"cri-socket"),"\u53c2\u6570\uff0c\u5982\u4e0a\u9762\u6267\u884c\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u6539\u4e3a\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5\n")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5982\u4f55\u7f16\u8bd1",(0,u.kt)("inlineCode",{parentName:"li"},"yurtadm"),"\u4e8c\u8fdb\u5236\uff0c\u53ef\u4ee5\u53c2\u8003",(0,u.kt)("a",{parentName:"li",href:"/zh/docs/installation/yurtadm-init#21%E7%BC%96%E8%AF%91-yurtadm"},"\u94fe\u63a5"))),(0,u.kt)("h2",{id:"2-\u5728\u5b58\u91cf\u7684k8s\u8282\u70b9\u4e0a\u5b89\u88c5openyurt-node\u7ec4\u4ef6"},"2. \u5728\u5b58\u91cf\u7684K8s\u8282\u70b9\u4e0a\u5b89\u88c5OpenYurt Node\u7ec4\u4ef6"),(0,u.kt)("p",null,"\u4e0b\u8ff0\u64cd\u4f5c\uff0c\u4ec5\u4ec5\u9488\u5bf9\u5df2\u7ecf\u662fKubernetes\u96c6\u7fa4\u7684\u5de5\u4f5c\u8282\u70b9\u3002"),(0,u.kt)("h3",{id:"21-\u90e8\u7f72edge\u5de5\u4f5c\u6a21\u5f0f\u7684yurthub"},"2.1 \u90e8\u7f72Edge\u5de5\u4f5c\u6a21\u5f0f\u7684Yurthub"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u4ece",(0,u.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/openyurt/blob/master/config/setup/yurthub.yaml"},"openyurt repo"),"\u83b7\u53d6yurthub.yaml\uff0c\u6267\u884c\u5982\u4e0b\u4fee\u6539\u540e\u4e0a\u4f20\u5230\u8fb9\u7f18\u8282\u70b9\u7684/etc/kubernets/manifests\u76ee\u5f55\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u83b7\u53d6 apiserver \u7684\u5730\u5740 (\u5373ip:port) \u548c ",(0,u.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/bootstrap-tokens/"},"bootstrap token")," \uff0c\u7528\u4e8e\u66ff\u6362\u6a21\u677f\u6587\u4ef6 ",(0,u.kt)("inlineCode",{parentName:"li"},"yurthub.yaml")," \u4e2d\u7684\u5bf9\u5e94\u503c")),(0,u.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe apiserver \u7684\u5730\u5740\u662f ",(0,u.kt)("inlineCode",{parentName:"p"},"1.2.3.4:5678"),"\uff0cbootstrap token \u662f ",(0,u.kt)("inlineCode",{parentName:"p"},"07401b.f395accd246ae52d")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"# vi /etc/kubernetes/manifests/yurt-hub.yaml\n...\n    command:\n    - yurthub\n    - --v=2\n    - --server-addr=https://1.2.3.4:5678\n    - --node-name=$(NODE_NAME)\n    - --join-token=07401b.f395accd246ae52d\n...\n")),(0,u.kt)("p",null,"Yurthub \u5c06\u5728\u51e0\u5206\u949f\u5185\u51c6\u5907\u5c31\u7eea\u3002"),(0,u.kt)("h3",{id:"22-\u914d\u7f6ekubelet"},"2.2 \u914d\u7f6eKubelet"),(0,u.kt)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u91cd\u7f6ekubelet\u670d\u52a1\uff0c\u8ba9kubelet\u901a\u8fc7Yurthub\u8bbf\u95eeapiserver (\u4ee5\u4e0b\u6b65\u9aa4\u5047\u8bbe\u6211\u4eec\u4ee5root\u8eab\u4efd\u767b\u5f55\u5230\u8fb9\u7f18\u8282\u70b9)\u3002\u7531\u4e8e kubelet \u4f1a\u901a\u8fc7 http \u8fde\u63a5 Yurthub\uff0c\u6240\u4ee5\u6211\u4eec\u4e3a kubelet \u670d\u52a1\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 kubeconfig \u6587\u4ef6\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/openyurt\ncat << EOF > /var/lib/openyurt/kubelet.conf\napiVersion: v1\nclusters:\n- cluster:\n    server: http://127.0.0.1:10261\n  name: default-cluster\ncontexts:\n- context:\n    cluster: default-cluster\n    namespace: default\n    user: default-auth\n  name: default-context\ncurrent-context: default-context\nkind: Config\npreferences: {}\nEOF\n")),(0,u.kt)("p",null,"\u4e3a\u4e86\u8ba9 kubelet \u4f7f\u7528\u65b0\u7684 kubeconfig\uff0c\u6211\u4eec\u7f16\u8f91 kubelet \u670d\u52a1\u7684 drop-in \u6587\u4ef6(\u5373 ",(0,u.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf")," \u6216\u8005  ",(0,u.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf")," \u5728 CentOS \u7cfb\u7edf\u4e0a))\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n')),(0,u.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u91cd\u542f kubelet \u670d\u52a1\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n")),(0,u.kt)("p",null,"\u6700\u540e\uff0c\u5f53\u91cd\u542fKubelet\u4e4b\u540e\u9700\u8981\u786e\u8ba4\u8282\u70b9\u72b6\u6001\u662f\u5426Ready\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.20.11\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.20.11\n")),(0,u.kt)("h3",{id:"23-\u91cd\u5efa\u8282\u70b9\u4e0a\u7684pods"},"2.3 \u91cd\u5efa\u8282\u70b9\u4e0a\u7684Pods"),(0,u.kt)("p",null,"\u5f53\u5b89\u88c5\u5b8cYurthub\u5e76\u4e14\u8c03\u6574\u597dKubelet\u914d\u7f6e\u540e\uff0c\u4e3a\u4e86\u8ba9\u8282\u70b9\u4e0a\u6240\u6709Pods(Yurthub\u9664\u5916)\u90fd\u53ef\u4ee5\u901a\u8fc7Yurthub\u8bbf\u95eeKube-apiserver\uff0c\u6240\u6709\u9700\u8981\u91cd\u5efa\u8282\u70b9\u4e0a\u6240\u6709Pods(Yurthub pod\u9664\u5916)\u3002\u8bf7\u52a1\u5fc5\u786e\u8ba4\u8be5\u64cd\u4f5c\u5bf9\u751f\u4ea7\u73af\u5883\u7684\u5f71\u54cd\u540e\u518d\u6267\u884c\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6dk                             1/1     Running   0          19d     10.148.2.197   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j698r                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-f5qvr                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n\n// \u5220\u9664\u8282\u70b9\u4e0a\u6240\u6709pods(Yurthub pod\u9664\u5916)\n$ kubectl -n kube-system delete pod coredns-qq6dk kube-flannel-ds-j698r kube-proxy-f5qvr\n\n// \u786e\u8ba4\u8282\u70b9\u4e0a\u6240\u6709pods\u6b63\u5e38\u8fd0\u884c\n$ kubectl get pod -A -o wide | grep us-west-1.192.168.0.88\nkube-system   yurt-hub-us-west-1.192.168.0.88           1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   coredns-qq6ad                             1/1     Running   0          19d     10.148.2.198   us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-flannel-ds-j123d                     1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\nkube-system   kube-proxy-a2qdc                          1/1     Running   0          19d     172.16.0.32    us-west-1.192.168.0.88   <none>           <none>\n")))}p.isMDXComponent=!0}}]);