"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"yurthub"},i=void 0,s={unversionedId:"faq/yurthub",id:"faq/yurthub",title:"yurthub",description:"1. yurthub data cache directory",source:"@site/docs/faq/yurthub.md",sourceDirName:"faq",slug:"/faq/yurthub",permalink:"/docs/next/faq/yurthub",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/yurthub.md",tags:[],version:"current",lastUpdatedBy:"rambohe",lastUpdatedAt:1681438419,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{title:"yurthub"},sidebar:"docs",previous:{title:"yurtadm_token",permalink:"/docs/next/reference/yurtadm/yurtadm_token"},next:{title:"yurtadm",permalink:"/docs/next/faq/yurtadm"}},l={},u=[],c={toc:u};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 1. yurthub data cache directory ")),(0,a.kt)("p",null,"The metadata cache path on the edge node is: /etc/kubernetes/cache/{componentName}/{resource}/{namespace}/{name}"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 2. yurthub component certificate storage directory")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client certificate: /var/lib/yurthub/pki/yurthub-current.pem\nUsed to access the cloud kube-apiserver, the authority is the same as the kubelet node certificate"),(0,a.kt)("li",{parentName:"ul"},"server certificate: /var/lib/yurthub/pki/yurthub-server-current.pem\nUsed for yurthub to start https server, providing TLS verification for each component on the edge node")),(0,a.kt)("p",null,"At present, the validity period of the certificate is uniformly determined by the kube-controller-manager component (1 year by default), and user self-configuration is not supported for the time being.\nAt the same time, yurthub will perform a certificate rotation request to update the certificate before the certificate expires. If the certificate rotation fails due to network reasons, yurthub will use the bootstrap token to re-apply for the certificate.\nOf course, if the bootstrap token also expires, the user needs to execute on the edge node: POST ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:10267/v1/token"},"http://127.0.0.1:10267/v1/token"),' -D "jointoken:\n{bootstrap token}" to update the bootstrap token. Note that the previous {bootstrap token} is replaced with valid The bootstrap token.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 3. how to check which requests are forwarded to kube-apiserver through yurthub")),(0,a.kt)("p",null,"Execute on the edge node: ",(0,a.kt)("inlineCode",{parentName:"p"},"curl http://127.0.0.1:10267/metrics"),", and check the following content:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(78957).Z,width:"1500",height:"345"})),(0,a.kt)("p",null,"Each line of node_yurthub_in_flight_requests_collector represents a type of request, determined by the client/resource/verb triplet. The following number 0 indicates that the request has occurred, but it is currently over. The number 1 means that there is currently one request."),(0,a.kt)("p",null,"be careful:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"list/watch requests usually appear together. If there is only list request but no watch request, it may mean that the list request has not ended and is stuck in yurthub. For example, when there is no NodePool resource in the cluster, the servicetopology filter of yurthub will depend on the NodePool resource. Therefore, the servicetopology filter of yurthub has not been ready, and it will block the coredns/kube-proxy list endpointslices request."),(0,a.kt)("li",{parentName:"ul"},"If yurthub restarts, there may be only watch requests but no list requests, which is normal.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 4. How to check the communication traffic between each component of the edge node and the kube-apiserver ")),(0,a.kt)("p",null,"Execute on the edge node: ",(0,a.kt)("inlineCode",{parentName:"p"},"curl http://127.0.0.1:10267/metrics"),", and check the following content:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(88540).Z,width:"1500",height:"200"})),(0,a.kt)("p",null,"Through the information of node_yurthub_proxy_traffic_collector, you can get the total traffic of each request returning data from the cloud. The unit is Byte\nTherefore, the components on the edge nodes must reduce the full list requests for large-scale resources (such as nodes, pods, endpoint slices, etc.), otherwise a large amount of public network bandwidth will be occupied."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 5. The Pod using InClusterConfig does not access the cloud kube-apiserver through yurthub ")),(0,a.kt)("p",null,"If the node is installed by ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm join")," command, when the pod on the node accesses the kube-apiserver through InClusterConfig, the request will be automatically forwarded through yurthub, so as to reuse a series of capabilities such as data caching, filtering, and traffic statistics of yurthub. If you find that there is no relevant request record in the metrics of yurthub, you can confirm the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Determine whether the pod is using InClusterConfig, or directly using the kube-apiserver address to access. If InClusterConfig is not used, first adjust the Pod to use InClusterConfig, and then restart the Pod."),(0,a.kt)("li",{parentName:"ul"},"Confirm the cache data on the node /etc/kubernetes/cache/kubelet/services/default/kubernetes, whether the ClusterIP and Port of the Service are the yurthub listening address (default: 169.254.2.1:10268). If the content is incorrect, please restart the kubelet (systemctl restart kubelet) and check whether the cached data is updated."),(0,a.kt)("li",{parentName:"ul"},"Check the environment variables in the Pod (container): KUBERNETES_SERVICE_HOST and KUBERNETES_SERVICE_PORT, whether their values correspond to the listening address of yurthub (default: 169.254.2.1:10268). If the content is incorrect, please rebuild the pod (kubectl delete pod) to check whether the environment variables are updated.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 6. On the edge node, the service topology capability does not take effect")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check the metrics of yurthub to see if the kube-proxy list endpointslice request is over (the number is 0 to indicate the end). If the list request is not over, it means that the servicetopology filter in yurthub is not ready yet, usually because the NodePool resource in the cluster has not been created caused by."),(0,a.kt)("li",{parentName:"ul"},"Check whether the corresponding endpointslice data under /etc/kubernetes/cache/kube-proxy directory conforms to the service topology. When the data does not meet expectations, restart kube-proxy and check to see if the data is updated.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 7. yurthub failed to start normally, and Exited yurthub container was not found on the node")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker ps -a")," to check if there are yurthub containers in the Exited state on the node"),(0,a.kt)("li",{parentName:"ul"},"If there is no yurthub container in Exited state, please check the reason why yurthub cannot start in the kubelet log(",(0,a.kt)("inlineCode",{parentName:"li"},"journalctl -u kubelet"),")"),(0,a.kt)("li",{parentName:"ul"},"If there is a yurthub container in the Exited state, check the Exited yurthub container log in docker logs to analyze the reason why it cannot be started.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 8. yurthub cannot start normally, and yurthub log shows that it is waiting for the certificate to be prepared ")),(0,a.kt)("p",null,"The certificate required by yurthub has not been generated successfully, you can locate it by the following method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute on the cluster: ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get csr"),", check whether the certificate signing request of the relevant node is created"),(0,a.kt)("li",{parentName:"ul"},"If the csr is not created, the bootstrap token passed in is generally an invalid token. After cleaning the node, use a valid bootstrap token to join again."),(0,a.kt)("li",{parentName:"ul"},"If the csr has been created, but the status is always pending, it means that csr approver has not been able to approve the csr. Check whether yurt-manager component is installed and working normally.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 9. The metadata of a component in the yurthub cache on the edge node is deleted, how to restore it")),(0,a.kt)("p",null,"When the node and the cloud network are connected normally, rebuild the corresponding pod to restore the relevant cached metadata."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 10. When the node is connected, yurthub starts successfully, but all requests keep reporting certificate errors? ")),(0,a.kt)("p",null,"This situation may be due to the old remained yurthub certificates on the node are used by yurthub, resulting in a certificate error problem. You can execute ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -la /var/lib/yurthub/pki")," to check the generation time of each file and see if the generation time is reasonable.\nAt the same time, If join a node that has been operated in the history into the cluster, it is recommended to perform a ",(0,a.kt)("inlineCode",{parentName:"p"},"yurtadm reset")," first to clean up the data on the node."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 11. The user's own pod accesses the kube-apiserver in the cloud through Yurthub, but there is no cached data of the pod on the edge node")),(0,a.kt)("p",null,"By default, yurthub will only cache data for kubelet, kube-proxy, coredns, flannel, and tunnel-agent components (confirmed by the User-Agent in the http request header). Take client-A(such as User-Agent is client-A) for example, user should add client-A to the cache_agents field in kube-system/yurthub-cfg configmap, then delete and rebuild the client-A Pod.\nAt the same time, cache_agents also supports general configuration symbols: *, so that responses from all clients will be automatically cached, but users need to focus on the disk usage of the cache."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 12. How to use the yurthub image of the private image registry")),(0,a.kt)("p",null,"First of all, the images provided by the community have passed ",(0,a.kt)("inlineCode",{parentName:"p"},"trivy")," security scan, and users can use them with confidence. Since yurthub is deployed in static pod mode, it cannot support private image registry through imagePullSecrets.\nUsers need to configure the runtime on the node in advance to support private image registry. For example, Containerd runtime private image registry configuration, you can refer to: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/cri/blob/release/1.4/docs/registry.md#configure-registry-credentials"},"https://github.com/containerd/cri/blob/release/1.4/docs/registry.md#configure-registry-credentials")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 13. The component has accessed the cloud kube-apiserver through yurthub, but the relevant cache data cannot be found in the cache directory on the edge node")),(0,a.kt)("p",null,"To reduce the local disk cache load, yurthub only caches components by default ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/util/util.go#L84"},(0,a.kt)("inlineCode",{parentName:"a"},"kubelet"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"kube-proxy"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"flannel"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"coredns"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"yurt-tunnel-agent"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"yurthub"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"leader-yurthub"))," metadata obtained from the cloud.\nIf the metadata of other components also needs to be cached, enable way is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure that the HTTP request header sent by this component contains ",(0,a.kt)("inlineCode",{parentName:"li"},"User-Agent")," information, and yurthub will determine the {componentName} in the cache directory according to the content before the first ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"User-Agent header"),". Component metadata will not be cached when ",(0,a.kt)("inlineCode",{parentName:"li"},"User-Agent")," is empty"),(0,a.kt)("li",{parentName:"ul"},"Manually configure the ",(0,a.kt)("inlineCode",{parentName:"li"},"cache_agents")," field of ",(0,a.kt)("inlineCode",{parentName:"li"},"configmap kube-system/yurt-hub-cfg")," to add {componentName}."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},'cache_agents: "*"'),", it means that all components (must have User-Agent header) get metadata from the cloud will be cached. Since many components have a large number of list/watch requests, all caches will put pressure on the local disk, so it is necessary to configure ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," carefully."),(0,a.kt)("li",{parentName:"ul"},"Configure multiple components separated by ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example, the ",(0,a.kt)("inlineCode",{parentName:"li"},"User-Agent header")," of the two components is ",(0,a.kt)("inlineCode",{parentName:"li"},"foo/v1.0.0")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"bar123/v1.0.0")," respectively. The configuration information is as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    cache_agents: "foo, bar123"\n')))}h.isMDXComponent=!0},78957:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flight-requests-in-yurthub-157930bc6238883bbcafc66294f11720.png"},88540:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/response-traffic-in-yurthub-2b7d371bc2fc30a8370af3e25e5061fc.png"}}]);