"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4359],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(87462),o=(n(67294),n(3905));const a={title:"Local Up OpenYurt"},l=void 0,i={unversionedId:"developer-manuals/local-up-openyurt",id:"version-v0.5.0/developer-manuals/local-up-openyurt",title:"Local Up OpenYurt",description:"How to use",source:"@site/versioned_docs/version-v0.5.0/developer-manuals/local-up-openyurt.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/local-up-openyurt",permalink:"/docs/v0.5.0/developer-manuals/local-up-openyurt",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/local-up-openyurt.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Congrool",lastUpdatedAt:1641225234,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{title:"Local Up OpenYurt"},sidebar:"version-v0.5.0/docs",previous:{title:"How to Build and Test",permalink:"/docs/v0.5.0/developer-manuals/how-to-build-and-test"},next:{title:"CI Workflow",permalink:"/docs/v0.5.0/developer-manuals/ci-workflow"}},u={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"What does the shell do for you",id:"what-does-the-shell-do-for-you",level:2},{value:"Reference",id:"reference",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"If you don't have the openyurt cluster, you can run the bash shell ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/hack/local_up_openyurt.sh"},(0,o.kt)("inlineCode",{parentName:"a"},"local_up_openyurt.sh"))," to quickly set up the openyurt cluster at your local host.\nAssuming that you've entered the openyurt work path, the commad is as simple as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash hack/local_up_openyurt.sh\n")),(0,o.kt)("p",null,"Then you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to interact with your OpenYurt cluster."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note:\nThis script has only been tested on linux/amd64. If you encoutered \"ERROR: failed to load image ... not found\", it's possibly because of the compatibility problem of your platform. You'd better set up the cluster manually.")),(0,o.kt)("h2",{id:"what-does-the-shell-do-for-you"},"What does the shell do for you"),(0,o.kt)("p",null,"In summary, the ",(0,o.kt)("inlineCode",{parentName:"p"},"local_up_openyurt.sh")," will use the local files under the openyurt work path to set up the cluster.  And you can specify the behavior of the shell through setting environment variables."),(0,o.kt)("p",null,"First, it will set up a docker container to build required binaries and images. The Arch and OS platform of built binaries and images is the same as your local host. For instance, if your local host is linux/amd64, then only binaries for linux/amd64 will be built. Built binaries and images will be saved under ",(0,o.kt)("inlineCode",{parentName:"p"},"_output")," directory."),(0,o.kt)("p",null,"Second, it will use ",(0,o.kt)("inlineCode",{parentName:"p"},"kind")," to set up the kubernetes cluster. You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETESVERSION")," to specify the kubernetes version to use. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"export KUBERNETESVERSION=1.18")," before running the shell will enable you to use kubernetes v1.18. In addition, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"NODES_NUM")," to specify the number of nodes the cluster will contain."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note:"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"The format of ",(0,o.kt)("inlineCode",{parentName:"li"},"KUBERNETESVERSION")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"1.xx"),", other formats will not be accepted. The default KUBERNETESVERSION is ",(0,o.kt)("inlineCode",{parentName:"li"},"1.20"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"NODES_NUM")," should not be less than 2. Finally, the cluster will contains one control-plane node and ",(0,o.kt)("inlineCode",{parentName:"li"},"NODES_NUM-1")," woker nodes. The default ",(0,o.kt)("inlineCode",{parentName:"li"},"NODES_NUM")," is 2."))),(0,o.kt)("p",null,"Third, ",(0,o.kt)("inlineCode",{parentName:"p"},"yurtctl")," will be used to convert the Kubernetes cluster into OpenYurt cluter. It will use images built earlier to deploy OpenYurt components, including ",(0,o.kt)("inlineCode",{parentName:"p"},"yurthub"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-controller-manager"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-agent"),". You can disable ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel")," through ",(0,o.kt)("inlineCode",{parentName:"p"},"export YURTTUNNEL=disable"),"."),(0,o.kt)("p",null,"By now, you've got the OpenYurt cluster at your local host and you can interact with it using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"kind")," will automatically stored the kubeconfig at your ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," path (default path is ${HOME}/.kube/config). If you already have the ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," to interact with other clusters, ",(0,o.kt)("inlineCode",{parentName:"p"},"kind")," will add a new context of openyurt cluster into the ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," and automatically switch to it. You can manually switch back to the previous context using command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config use-context ${PREVIOUS_CONTEXT_NAME}"),". For more details, you can see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/"},"documentation"),". You can store the kubeconfig at another path through setting ",(0,o.kt)("inlineCode",{parentName:"p"},"KIND_KUBECONFIG"),"."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"Reference gives descriptions of all used environment variables."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"REGION"),(0,o.kt)("br",{parentName:"p"}),"\n",'REGION affects the GOPROXY to use. You can set it to "cn" to use GOPROXY="',(0,o.kt)("a",{parentName:"p",href:"https://goproxy.cn%22"},'https://goproxy.cn"'),'. Default value is "us", which means using GOPROXY="',(0,o.kt)("a",{parentName:"p",href:"https://goproxy.io%22"},'https://goproxy.io"'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KIND_KUBECONFIG"),(0,o.kt)("br",{parentName:"p"}),"\n",'KIND_KUBECONFIG represents the path to store the kubeconfig file of the cluster which is created by this shell. The default value is "$HOME/.kube/config".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NODES_NUM"),(0,o.kt)("br",{parentName:"p"}),"\n","NODES_NUM represents the number of nodes to set up in the new-created cluster. There are one control-plane node and NODES_NUM-1 worker nodes. Thus, NODES_NUM must not be less than 2. The default value is 2."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KUBERNETESVERSION"),(0,o.kt)("br",{parentName:"p"}),"\n",'KUBERNETESVERSION declares the kubernetes version the cluster will use. The format is "1.XX". Now only 1.18, 1.19 and 1.20 are supported. The default value is 1.20.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TIMEOUT"),(0,o.kt)("br",{parentName:"p"}),"\n","TIMEOUT represents the time to wait for the kind control-plane, yurt-tunnel-server and yurt-tunnel-agent to be ready. If they are not ready after the duration, the shell will exit. The default value is 120s."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"YURTTUNNEL"),(0,o.kt)("br",{parentName:"p"}),"\n",'If set YURTTUNNEL=disable, the yurt-tunnel-agent and yurt-tunnel-server will not be deployed in the openyurt cluster. The default value is "enable".'))}c.isMDXComponent=!0}}]);