"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3252],{62387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(85893),s=t(11151);const o={title:"YurtTunnel"},i=void 0,c={id:"core-concepts/yurttunnel",title:"YurtTunnel",description:"1. Background",source:"@site/versioned_docs/version-v1.4/core-concepts/yurttunnel.md",sourceDirName:"core-concepts",slug:"/core-concepts/yurttunnel",permalink:"/docs/core-concepts/yurttunnel",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurttunnel.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1712305043e3,frontMatter:{title:"YurtTunnel"}},l={},a=[{value:"1. Background",id:"1-background",level:2},{value:"2. Reverse Tunnel",id:"2-reverse-tunnel",level:2},{value:"3. Implementation",id:"3-implementation",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-background",children:"1. Background"}),"\n",(0,r.jsxs)(n.p,{children:["During application deployment and maintenance, users often need to obtain application logs, or directly log in to the running environment of the application for debugging. In Kubernetes cluster, we usually use ",(0,r.jsx)(n.code,{children:"kubectl log"}),", ",(0,r.jsx)(n.code,{children:"kubectl exec"})," and other command to debug. As following picture, on ",(0,r.jsx)(n.code,{children:"kubelet"})," will act as a server, responsible for processing requests forwarded by ",(0,r.jsx)(n.code,{children:"kube-apiserver"})," (KAS), which requires a network path between ",(0,r.jsx)(n.code,{children:"KAS"})," and ",(0,r.jsx)(n.code,{children:"kubelet"})," to allow ",(0,r.jsx)(n.code,{children:"KAS"})," to actively access ",(0,r.jsx)(n.code,{children:"kubelet"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(73898).Z+"",width:"1570",height:"464"})}),"\n",(0,r.jsx)(n.p,{children:"Cloud and edge are in different network domains, and edge nodes are inside the firewall. The cloud (center) edge collaborative architecture will lead to the following challenges in the maintenance monitoring capabilities of the native K8s system:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["K8s native maintenance capabilities are lacking (such as ",(0,r.jsx)(n.code,{children:"kubectl logs/exec"})," cannot be executed)"]}),"\n",(0,r.jsx)(n.li,{children:"Community monitoring maintenance components cannot work (such as Prometheus/metrics-server)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In order to support the maintenance of edge applications through cloud nodes, we must establish a reverse maintenance tunnel between the cloud and the edge."}),"\n",(0,r.jsx)(n.h2,{id:"2-reverse-tunnel",children:"2. Reverse Tunnel"}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"OpenYurt"}),", we introduced a special component ",(0,r.jsx)(n.code,{children:"YurtTunnel"})," to deal with the cloud-side communication. ",(0,r.jsx)(n.code,{children:"Reverse tunnel"})," is a common way to solve cross-network communication, and ",(0,r.jsx)(n.code,{children:"YurtTunnel"})," is also a ",(0,r.jsx)(n.code,{children:"reverse tunnel"}),". It is a typical C/S structure component, consisting of ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," deployed in the cloud and ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Agent"})," deployed on edge nodes. The deployment structure of YurtTunnel is following picture. The whole workflow of the ",(0,r.jsx)(n.code,{children:"reverse tunnel"})," has the following steps:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Deploy ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," on the management and control network plane."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," opens an IP accessible from the public network."]}),"\n",(0,r.jsxs)(n.li,{children:["Deploy a ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Agent"})," on each edge node, and establish a long connection with the Server through the Server's public IP."]}),"\n",(0,r.jsxs)(n.li,{children:["Access requests from the management and control components to edge nodes will be forwarded to ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," sends the request to the target node through the long connection."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(16879).Z+"",width:"2128",height:"1142"})}),"\n",(0,r.jsx)(n.h2,{id:"3-implementation",children:"3. Implementation"}),"\n",(0,r.jsx)(n.p,{children:"To create a secure, non-intrusive, and scalable reverse tunnel in the K8s cloud-edge architecture, it needs to include at least the following three capabilities."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tunnel"}),"\n",(0,r.jsx)(n.li,{children:"Self-management of certificates at both ends of the tunnel"}),"\n",(0,r.jsx)(n.li,{children:"Cloud component requests are forwarded to the tunnel"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Architecture of ",(0,r.jsx)(n.code,{children:"YurtTunnel"})," is as follows:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(57553).Z+"",width:"2016",height:"1576"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Tunnel"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Agent"})," on the edge starts up, it will establish a connection and register with the ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," according to the access address, and periodically check the health status of the connection and rebuild the connection."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Agent"})," registered is as follows\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'"agentID": {NodeName}\n"agentIdentifiers": ipv4={nodeIP}&host={NodeName}"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," receives a request from a cloud component, it needs to forward the request to the ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Agent"}),". Because in addition to forwarding the request, the ",(0,r.jsx)(n.code,{children:"session"})," is followed by data return or continuous data forwarding (such as ",(0,r.jsx)(n.code,{children:"kubectl exec"})," ). So it is necessary to forward data in both directions. At the same time, it is necessary to support concurrent forwarding of requests from cloud components, which means that an unique ID needs to be established for each request life cycle. So there are two designs."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Option 1: The initial cloud-side connection only informs the forwarding request, and ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Agent"})," will establish a new connection with the cloud to process the request. Through the new connection, the problem of requesting unique ID can be resolved, and concurrency can also be resolved. But a connection needs to be established for each request, which will consume a lot of resources."]}),"\n",(0,r.jsx)(n.p,{children:"Option 2: Only the initial cloud-edge connection is used to forward requests. In order to reuse the same connection for a large number of requests, it is necessary to encapsulate each request and add an unique ID to solve the concurrent forwarding. At the same time, since a connection needs to be reused, it is necessary to decouple connection management and request lifecycle management. That is to manage the transition of request forwarding. This option involves packet and unpacket, request processing state machine, etc. The option will be a little more complicated."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"ANP"})," component selected by OpenYurt adapts the above option 2, which also satisfies our original design intention."]}),"\n",(0,r.jsxs)(n.li,{children:["Request forwarding is encapsulated in ",(0,r.jsx)(n.code,{children:"Packet_DialRequest"})," and ",(0,r.jsx)(n.code,{children:"Packet_DialResponse"}),", where ",(0,r.jsx)(n.code,{children:"Packet_DialResponse.ConnectID"})," is used to identify ",(0,r.jsx)(n.code,{children:"request"}),", which is like ",(0,r.jsx)(n.code,{children:"requestID"})," in ",(0,r.jsx)(n.code,{children:"tunnel"}),". The request and data are encapsulated in ",(0,r.jsx)(n.code,{children:"Packet_Data"}),". ",(0,r.jsx)(n.code,{children:"Packet_CloseRequest"})," and ",(0,r.jsx)(n.code,{children:"Packet_CloseResponse"})," are used to forward and recycle resource. For details, please refer to the following sequence diagram:"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(4089).Z+"",width:"1080",height:"997"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RequestInterceptor"})," module"]}),"\n",(0,r.jsxs)(n.p,{children:["It can be seen from the above analysis that before ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," forwards the request, the client needs to make an ",(0,r.jsx)(n.code,{children:"Http Connect"})," request to create a forwarding path. However, it is difficult to do some work for open source components such as ",(0,r.jsx)(n.code,{children:"Prometheus"})," and ",(0,r.jsx)(n.code,{children:"metrics-server"}),". Therefore, a request hijacking module ",(0,r.jsx)(n.code,{children:"Interceptor"})," is added to ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," to make ",(0,r.jsx)(n.code,{children:"Http Connect"})," requests."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Certificate management"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In order to keep long and secure communication of cloud-edge, and also to support https request forwarding, ",(0,r.jsx)(n.code,{children:"YurtTunnel"})," needs to generate its own certificate and maintain the automatic rotation of the certificate. The details are as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'# 1. Yurt-Tunnel-Server server certificate:\n# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-server/app/start.go#L120-L139\n- certificate path: /var/lib/yurt-tunnel-server/pki/yurt-tunnel-server-xxx.pem\n- SignerName: "kubernetes.io/kubelet-serving"\n- CommonName: "system:node:tunnel-server"\n- Organization: {"system:nodes"}\n- Subject Alternate Name values: {x-tunnel-server-svc, x-tunnel-server-internal-svc\u7684ips\u548cdns names}\n- KeyUsage: ["key encipherment", "digital signature", "server auth"]\n\n# 2. tunnel proxy client certificate: is used by yurt-tunnel-server in order to make connection with components on edge nodes(like kubelet) for forwarding requests.\n# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-server/app/start.go#L146-L152\n- certificate path: /var/lib/yurt-tunnel-server/pki/yurt-tunnel-server-proxy-client-xxx.pem\n- SignerName: "kubernetes.io/kube-apiserver-client"\n- CommonName: "tunnel-proxy-client"\n- Organization: {"openyurt:yurttunnel"}\n- KeyUsage: ["key encipherment", "digital signature", "client auth"]\n\n# 3. Yurt-Tunnel-Agent client certificate\uff1a\n# https://github.com/openyurtio/openyurt/blob/master/cmd/yurt-tunnel-agent/app/start.go#L99-L107\n- certificate path: /var/lib/yurt-tunnel-agent/pki/yurt-tunnel-agent-xxx.pem\n- SignerName: "kubernetes.io/kube-apiserver-client"\n- CommonName: "tunnel-agent-client"\n- Organization: {"openyurt:yurttunnel"}\n- KeyUsage: ["key encipherment", "digital signature", "client auth"]\n\n# 4. Yurt-tunnel Certificate Signing Request (CSR) is approved by Yurt-Controller-Manager\n# https://github.com/openyurtio/openyurt/blob/master/pkg/controller/certificates/csrapprover.go\n\n# 5. certificate automatic rotation\n# https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/client-go/util/certificate/certificate_manager.go#L224\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"transfer cloud component requests to the tunnel"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Because the request of the cloud component needs to be forwarded to the ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"}),", it also means that no modification to the cloud component is required. So it is necessary to analyze the requests of cloud components. Currently the maintenance requests of components have the following two types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["type 1: access using IP address, such as: ",(0,r.jsx)(n.code,{children:"http://{nodeIP}:{port}/{path}"})]}),"\n",(0,r.jsxs)(n.li,{children:["type 2: access using domain name, such as: ",(0,r.jsx)(n.code,{children:"http://{NodeName}:{port}/{path}"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Different solutions need to be adopted for different types of requests."}),"\n",(0,r.jsxs)(n.p,{children:["Solution 1: Use iptables dnat rules to ensure that type 1 requests are forwarded to ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"# iptables rules code: https://github.com/openyurtio/openyurt/blob/master/pkg/yurttunnel/iptables/iptables.go\n# The iptables dnat rules maintained by Yurt-Tunnel-Server are as follows:\n[root@xxx /]# iptables -nv -t nat -L OUTPUT\nTUNNEL-PORT  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* edge tunnel server port */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-10255  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10255 /* jump to port 10255 */\nTUNNEL-PORT-10250  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:10250 /* jump to port 10250 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-10255\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:10255\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:10255\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:10255 to:172.16.6.156:10264\n"})}),"\n",(0,r.jsx)(n.p,{children:"Solution 2: Use dns domain name to resolve NodeName as the access address of Yurt-Tunnel-Server, so that type 2 requests can be forwarded to yurt-tunnel. Its working principle is as follows:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img",src:t(84897).Z+"",width:"2582",height:"1358"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," maintains two Service addresses\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"x-tunnel-server-svc: expose port 10262/10263 used to access from the public networkYurt-Tunnel-Server. Such as Yurt-Tunnel-Agent"}),"\n",(0,r.jsx)(n.li,{children:"x-tunnel-server-internal-svc: cloud components is accessed from the internal network, such as prometheus, metrics-server"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," has a DNS Controller, dynamically configures Core DNS Host records, and maintains the mapping relationship between NodeName and IP (Cloud Node is directly reachable according to IP, directly mapped to Node IP; Edge Node needs to communicate through the Tunnel tunnel agent, mapping to the cluster ip of ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," Internal Service)"]}),"\n",(0,r.jsxs)(n.li,{children:["When the cloud component accesses the Edge node through NodeName, it will do domain name resolution through CoreDNS by default, and the request for the Edge Node will be directed to the ClusterIP of the internal service of ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"}),", and then use the forwarding ability of kube-proxy to forward the request Load balancing to healthy Yurt-Tunnel-Server Pods"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"})," will check the requested Host. When the Host is NodeName, it will find the correct Agent backend through the node name and forward the data"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"port extension"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If users need to access other ports(like 9051 for http requests) on the edge (other than 10250 and 10255), they need to add dnat rules in iptables or add port mapping in x-tunnel-server-internal-svc, as shown following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"\n# For example, access port 9051 of the edge\n# add iptables dnat rule:\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT\nTUNNEL-PORT-9051  tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:9051 /* jump to port 9051 */\n\n[root@xxx /]# iptables -nv -t nat -L TUNNEL-PORT-9051\nRETURN     tcp  --  *      *       0.0.0.0/0            127.0.0.1            /* return request to access node directly */ tcp dpt:9051\nRETURN     tcp  --  *      *       0.0.0.0/0            172.16.6.156         /* return request to access node directly */ tcp dpt:9051\nDNAT       tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            /* dnat to tunnel for access node */ tcp dpt:9051 to:172.16.6.156:10264\n\n# add port mapping in x-tunnel-server-internal-svc\nspec:\n  ports:\n  - name: https\n    port: 10250\n    protocol: TCP\n    targetPort: 10263\n  - name: http\n    port: 10255\n    protocol: TCP\n    targetPort: 10264\n  - name: dnat-9051 # add port mapping\n    port: 9051\n    protocol: TCP\n    targetPort: 10264\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above iptables dnat rules and service port mapping are automatically updated by ",(0,r.jsx)(n.code,{children:"Yurt-Tunnel-Server"}),". Users only need to add port configuration in ",(0,r.jsx)(n.code,{children:"yurt-tunnel-server-cfg"})," configmap in ",(0,r.jsx)(n.code,{children:"kube-system"}),". details as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:'apiVersion: v1\ndata:\n  http-proxy-ports: "9051" # ports for HTTP requests \n  https-proxy-ports: "" # ports for HTTPs requests\nkind: ConfigMap\nmetadata:\n  name: yurt-tunnel-server-cfg\n  namespace: kube-system\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},73898:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/kubectl-4a135b776e4058dae26cb98067a28d99.jpg"},16879:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_arch-f5523df0a26022bbc4a94960802f2c40.jpg"},57553:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_components-98b2297c73ddbafee663f1dacf5ec19d.jpg"},84897:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_dns-3f45c486b188e1dd9e5b254ba516e10f.jpg"},4089:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/tunnel_sequence_diag-385d8a83150e7246026538e7948dd738.jpg"},11151:(e,n,t)=>{t.d(n,{a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);