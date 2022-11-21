"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[9361],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=(n(67294),n(3905));const a={title:"YurtTunnel"},l=void 0,s={unversionedId:"core-concepts/yurttunnel",id:"version-v0.6.0/core-concepts/yurttunnel",title:"YurtTunnel",description:"1. Background",source:"@site/versioned_docs/version-v0.6.0/core-concepts/yurttunnel.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurttunnel",permalink:"/docs/v0.6.0/core-concepts/yurttunnel",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurttunnel.md",tags:[],version:"v0.6.0",lastUpdatedBy:"BLAKECHIANG4",lastUpdatedAt:1642921514,formattedLastUpdatedAt:"Jan 23, 2022",frontMatter:{title:"YurtTunnel"},sidebar:"version-v0.6.0/docs",previous:{title:"YurtHub",permalink:"/docs/v0.6.0/core-concepts/yurthub"},next:{title:"YurtAppManager",permalink:"/docs/v0.6.0/core-concepts/yurt-app-manager"}},i={},u=[{value:"1. Background",id:"1-background",level:2},{value:"2. Reverse Channel",id:"2-reverse-channel",level:2},{value:"3. Implementation Mode",id:"3-implementation-mode",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-background"},"1. Background"),(0,o.kt)("p",null,"During the deployment and operation of the application, users often get the logs of the application or log in to the application's running environment for debugging. In Kubernetes, we usually use kubectl log, kubectl exec, etc. to implement these requirements. As shown below, on the kubectl request link, kubelet will act as a server to handle requests forwarded by kube-apiserver (KAS), which requires a network path between KAS and kubelet to allow KAS to access kubelet.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(73898).Z,width:"1570",height:"464"})),(0,o.kt)("p",null,"Cloud and edge are generally located on different network planes, and edge nodes are generally located inside the firewall. Using the cloud-edge (center-edge) collaboration structure will lead to the following challenges in operation and monitoring capabilities of the native K8s system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lack of native operation capabilities of K8s( such as kubectl logs/exec etc. can't work )"),(0,o.kt)("li",{parentName:"ul"},"The main monitoring and operation components of the community can't work( such as Prometheus/metrics-server )")),(0,o.kt)("p",null,"In order to support operating edge applications through cloud nodes, we must establish a reverse operation channel between cloud and edge."),(0,o.kt)("h2",{id:"2-reverse-channel"},"2. Reverse Channel"),(0,o.kt)("p",null,"In OpenYurt\uff0cwe introduce a special component\u2014\u2014YurtTunnel to solve the problem of cloud-edge communication. Reverse channel is a common way to solve cross network communication, and the essence of YurtTunnel is also a reverse channel. It's a typical C/S structure component, consisting of Yurt-Tunnel-Server deployed on cloud and Yurt-Tunnel-Agent deployed on edge. The structure of YurtTunnel is shown in the figure below, the workflow of the reverse channel includes the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy Yurt-Tunnel-Server on the network plane where the control components are located."),(0,o.kt)("li",{parentName:"ul"},"Yurt-Tunnel-Server opens an IP that can be accessed by the public network."),(0,o.kt)("li",{parentName:"ul"},"Deploy Yurt-Tunnel-Agent on each edge node\uff0cand establish a long connection with the server through the public IP of the server."),(0,o.kt)("li",{parentName:"ul"},"The request from control components to edge nodes will be forwarded to Yurt-Tunnel-Server."),(0,o.kt)("li",{parentName:"ul"},"Then Yurt-Tunnel-Server sends the request to the target edge node through the long connection.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(16879).Z,width:"2128",height:"1142"})),(0,o.kt)("h2",{id:"3-implementation-mode"},"3. Implementation Mode"),(0,o.kt)("p",null,"To build a secure, non-invasive and scalable reverse channel solution in the k8s cloud-edge integration structure, the solution includes at least the following three capabilities."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tunnel construction"),(0,o.kt)("li",{parentName:"ul"},"Self-management of certificates at both ends of the tunnel"),(0,o.kt)("li",{parentName:"ul"},"Requests of cloud components are seamlessly routed to the tunnel")),(0,o.kt)("p",null,"The structure modules of YurtTunnel are as follows\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(57553).Z,width:"2016",height:"1576"})),(0,o.kt)("p",null,"1) Tunnel construction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When Yurt-Tunnel-Agent on the edge is started\uff0cit will establish a connection with Yurt-Tunnel-Server according to the access address and register. Then the agent will periodically detect the health status of the connection, rebuild the connection, and so on.")),(0,o.kt)("p",null,"The identity information registered by Yurt-Tunnel-Agent is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Plain"},'"agentID": {NodeName}\n"agentIdentifiers": ipv4={nodeIP}&host={NodeName}"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When Yurt-Tunnel-Server receives a request from the cloud component, it should forward the request to corresponding Yurt-Tunnel-Agent. In addition to forwarding the initial request, the session of the request will also have data returns or continuous data forwarding( such as kubectl exec ) later. Therefore, it should forward data in both directions. At the same time, it is necessary to support and forward requests from cloud components, which means that it should establish an independent identifier for each request life cycle. So there are generally two plans in the design.")),(0,o.kt)("p",null,"Plan 1: The initial cloud-edge connection only informs the forwarding request, Yurt-Tunnel-Agent will establish a new connection with cloud to process the request. The problem of requesting independent identification can be well solved through the new connection, and concurrency can also be well resolved. But establishing a connection for each request will consume lots of resources."),(0,o.kt)("p",null,"Plan 2: Only the initial cloud-edge connection is used to forward requests. In order to reuse the same connection for many requests, it is necessary to encapsulate each request and add an independent identifier to solve the demand for concurrent forwarding. At the same time, we should decouple connection management and request lifecycle management since a connection needs to be reused. That is, the state transition of request forwarding should be managed independently. This plan involves packet and unpack, request processing state machine, etc., which will be more complicated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OpenYurt chooses the ANP component, which adopts the above plan 2. This is also consistent with our original design intention. "),(0,o.kt)("li",{parentName:"ul"},"The construction of the request forwarding link is encapsulated in Packet_DialRequest and Packet_DialResponse. Packet_DialResponse.ConnectID is used to identify request, which is equal to the requestID in tunnel. Requests and associated data are encapsulated in Packet_Data. Packet_CloseRequest and Packet_CloseResponse are used to forward link resource reclamation. Please refer to the following timing diagram for details:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(4089).Z,width:"1080",height:"997"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Function of RequestInterceptor\uff1a\nFrom the above analysis, It can be seen that the requester should initiate an Http Connect request to build a forwarding link before Yurt-Tunnel-Server forwards the request. However, it's difficult to add corresponding processing to open source components such as Prometheus and metrics-server. Therefore, the request hijacking module\u2014\u2014Interceptor is added to Yurt-Tunnel-Server to initiate Http Connect requests.")),(0,o.kt)("p",null,"2) Certificate management"),(0,o.kt)("p",null,"In order to ensure the long-term secure communication of the cloud-edge channel and support https request forwarding, YurtTunnel needs to generate its own certificate and maintain the automatic rotation of the certificate. The specific details are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Plain"},'# 1. Yurt-Tunnel-Server certificate:\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L45-90\n- Certificate store location: /var/lib/yurt-tunnel-server/pki\n- CommonName: "kube-apiserver-kubelet-client"  // webhook validation for kubelet server\n- Organization: {"system:masters", "openyurt:yurttunnel"} // webhook checksum for kubelet server and auto approve for Yurt-Tunnel-Server certificate\n- Subject Alternate Name values: {x-tunnel-server-svc, x-tunnel-server-internal-svc\'s ips and dns names}\n- KeyUsage: "any"\n\n# 2. Yurt-Tunnel-Agent certificate\uff1a\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/certmanager.go#L94-112\n- Certificate store location: /var/lib/yurt-tunnel-agent/pki\n- CommonName: "yurttunnel-agent"\n- Organization: {"openyurt:yurttunnel"} // auto approve for Yurt-Tunnel-Agent certificate\n- Subject Alternate Name values: {NodeName, nodeIP}\n- KeyUsage: "any"\n\n# 3. yurt-tunnel certificate application (CSR) is approved by Yurt-Tunnel-Server\n# https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/pki/certmanager/csrapprover.go#L115\n- monitor csr resources\n- filter non yurt-tunnel\'s csr (no "openyurt:yurttunnel" in Organization)\n- approve csrs that have not been approved\n\n# 4. Certificate auto-rotation\n# https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/client-go/util/certificate/certificate_manager.go#L224\n')),(0,o.kt)("p",null,"3) Seamlessly route requests of cloud components to the tunnel"),(0,o.kt)("p",null,"Because the requests of cloud components need to be seamlessly forwarded to Yurt-Tunnel-Server, it also means that there is no need to modify the cloud components. Therefore, it is necessary to analyze the requests of cloud components. At present, the operation requests of components mainly include the following two types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type 1: Use Ip address directly, for example: http://{nodeIP}:{port}/{path}"),(0,o.kt)("li",{parentName:"ul"},"Type 2: Use domain name, for example: http://{NodeName}:{port}/{path}")),(0,o.kt)("p",null,"For different types of requests, it needs different plans."),(0,o.kt)("p",null,"Plan 1: Use iptables dnat rules to ensure that type 1 requests are seamlessly forwarded to Yurt-Tunnel-Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Shell"},"# related iptables rules maintenance code: https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/iptables/iptables.go\n# iptables dnat rules maintained by Yurt-Tunnel-Server are as follows:\n[root@xxx /]# iptables -nv -t nat -L OUTPUT\nTUNNEL-PORT  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* edge tunnel server port */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-10255  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10255 /* jump to port 10255 */\nTUNNEL-PORT-10250  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10250 /* jump to port 10250 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-10255\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:10255\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:10255\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:10255 to:172.16.6.156:10264\n")),(0,o.kt)("p",null,"Plan 2: Use dns domain name resolution to solve NodeName to access address of Yurt-Tunnel-Server, so that type 2 requests can be seamlessly forwarded to yurt-tunnel. Its working principle is shown in the figure:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(84897).Z,width:"2582",height:"1358"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Yurt-Tunnel-Server will maintain two Service addresses\uff1a ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"x-tunnel-server-svc: Mainly expose port 10262/10263, used to access Yurt-Tunnel-Server from the public network. Such as Yurt-Tunnel-Agent."),(0,o.kt)("li",{parentName:"ul"},"x-tunnel-server-internal-svc: Mainly used for cloud components access from the internal network, such as prometheus, metrics-server, etc."))),(0,o.kt)("li",{parentName:"ul"},"Yurt-Tunnel-Server has a built-in DNS Controller, dynamically configures Core DNS Host records, and maintains the mapping relationship between NodeName and IP(Cloud Node can reach directly according to IP, that is directly mapped to Node IP;Edge Node needs to communicate through the Tunnel agent, that is mapping to cluster ip of Yurt-Tunnel-Server Internal Service)"),(0,o.kt)("li",{parentName:"ul"},"When the cloud component access the Edge Node by NodeName, it will solve domain names through CoreDNS by default. The request for the Edge Node will be directed to the ClusterIP of the internal service of Yurt-Tunnel-Server, and use the forwarding ability of kube-proxy to load the request Balanced into healthy Yurt-Tunnel-Server Pods."),(0,o.kt)("li",{parentName:"ul"},"Yurt-Tunnel-Server will check the requested Host format. When the Host format is NodeName, it will find the correct Agent backend through the node name and forward the data.")),(0,o.kt)("p",null,"4) Port extension"),(0,o.kt)("p",null,"If users want to access other ports on the edge (other than 10250 and 10255), they need to add corresponding dnat rules in iptables or add corresponding port mapping in x-tunnel-server-internal-svc, as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Shell"},"\n# access port 9051 of the edge for example.\n# add iptables dnat rule:\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-9051  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:9051 /* jump to port 9051 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-9051\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:9051\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:9051\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:9051 to:172.16.6.156:10264\n\n# add port mapping in x-tunnel-server-internal-svc\nspec:\n  ports:\n  - name: https\n    port: 10250\n    protocol: TCP\n    targetPort: 10263\n  - name: http\n    port: 10255\n    protocol: TCP\n    targetPort: 10264\n  - name: dnat-9051 # add mapping\n    port: 9051\n    protocol: TCP\n    targetPort: 10264\n")),(0,o.kt)("p",null,"The above iptables dnat rules and service port mapping are automatically updated by Yurt-Tunnel-Server. Users just add port configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"yurt-tunnel-server-cfg")," configmap that is under ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," . The details are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Yaml"},"# Note\uff1aSince uncontrollable factors of the certificate, the new port currently only supports forwarding from 10264 of Yurt-Tunnel-Server\napiVersion: v1\ndata:\n  dnat-ports-pair: 9051=10264 # add port=10264(Only support port 10264 to forward)\nkind: ConfigMap\nmetadata:\n  name: yurt-tunnel-server-cfg\n  namespace: kube-system\n")))}p.isMDXComponent=!0},73898:function(e,t,n){t.Z=n.p+"assets/images/kubectl-4a135b776e4058dae26cb98067a28d99.jpg"},16879:function(e,t,n){t.Z=n.p+"assets/images/tunnel_arch-f5523df0a26022bbc4a94960802f2c40.jpg"},57553:function(e,t,n){t.Z=n.p+"assets/images/tunnel_components-98b2297c73ddbafee663f1dacf5ec19d.jpg"},84897:function(e,t,n){t.Z=n.p+"assets/images/tunnel_dns-3f45c486b188e1dd9e5b254ba516e10f.jpg"},4089:function(e,t,n){t.Z=n.p+"assets/images/tunnel_sequence_diag-385d8a83150e7246026538e7948dd738.jpg"}}]);