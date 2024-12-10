"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[59537],{48923:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-manuals/network/raven","title":"Raven","description":"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster.","source":"@site/versioned_docs/version-v1.3/user-manuals/network/raven.md","sourceDirName":"user-manuals/network","slug":"/user-manuals/network/raven","permalink":"/docs/v1.3/user-manuals/network/raven","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md","tags":[],"version":"v1.3","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"Raven"},"sidebar":"docs","previous":{"title":"pod node binding","permalink":"/docs/v1.3/user-manuals/autonomy/node-pod-binding"},"next":{"title":"bandwidth-reduction","permalink":"/docs/v1.3/user-manuals/network/bandwidth-reduction"}}');var t=a(74848),i=a(28453);const o={title:"Raven"},r=void 0,d={},l=[{value:"Label nodes in different physical regions",id:"label-nodes-in-different-physical-regions",level:2},{value:"How to Use",id:"how-to-use",level:2},{value:"Gateways",id:"gateways",level:3},{value:"Test pod-to-pod networking",id:"test-pod-to-pod-networking",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster."}),"\n",(0,t.jsxs)(n.p,{children:["Suppose you have an edge kubernetes cluster with nodes in different physical regions, and already deploy the ",(0,t.jsx)(n.code,{children:"Raven Controller Manager"})," and ",(0,t.jsx)(n.code,{children:"Raven Agent"})," in this cluster,You can refer to the  ",(0,t.jsx)(n.a,{href:"/docs/v1.3/installation/manually-setup",children:"installation tutorial"})," if you do not have Raven installed, the details of ",(0,t.jsx)(n.code,{children:"Raven Controller Manager"})," are in ",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/README.md",children:"here"}),".\n",(0,t.jsx)(n.img,{alt:"raven_deploy",src:a(37906).A+"",width:"720",height:"405"})]}),"\n",(0,t.jsx)(n.h2,{id:"label-nodes-in-different-physical-regions",children:"Label nodes in different physical regions"}),"\n",(0,t.jsxs)(n.p,{children:["As follows, suppose the cluster has five nodes, located in three different regions, where the node ",(0,t.jsx)(n.code,{children:"master"})," is cloud node."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes -o wide\nNAME                      STATUS   ROLES                  AGE     VERSION    INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION                CONTAINER-RUNTIME\nizbp15inok0kbfkg3in52rz   Ready    Edge-HZ-1              27h     v1.22.11   172.16.2.103    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizbp15inok0kbfkg3in52sz   Ready    Edge-HZ-2              26h     v1.22.11   172.16.2.104    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnqzz   Ready    Edge-QD-1              29h     v1.22.11   172.16.1.89     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnr0z   Ready    Edge-QD-2              29h     v1.22.11   172.16.1.90     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   5d21h   v1.22.11   192.168.0.195   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\nizwz9ey0js5z7mornclpd6z   Ready    cloud                  3h3m    v1.22.11   192.168.0.196   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We use a ",(0,t.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway"})," CR to manage nodes in different physical regions, and label nodes to indicate which ",(0,t.jsx)(n.code,{children:"Gateway"})," these nodes are managed by."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, We label nodes in region ",(0,t.jsx)(n.code,{children:"hangzhou"})," with value ",(0,t.jsx)(n.code,{children:"gw-hangzhou"}),", indicating that these nodes are managed by the ",(0,t.jsx)(n.code,{children:"gw-hangzhou"})," gateway."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes izbp15inok0kbfkg3in52rz izbp15inok0kbfkg3in52sz raven.openyurt.io/gateway=gw-hangzhou\nnode/izbp15inok0kbfkg3in52rz not labeled\nnode/izbp15inok0kbfkg3in52sz not labeled\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Similarly, we label node in ",(0,t.jsx)(n.code,{children:"cloud"})," with value ",(0,t.jsx)(n.code,{children:"gw-cloud"}),", and nodes in region ",(0,t.jsx)(n.code,{children:"qingdao"})," with value ",(0,t.jsx)(n.code,{children:"gw-qingdao"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes izwz9dohcv74iegqecp4axz izwz9ey0js5z7mornclpd6z raven.openyurt.io/gateway=gw-cloud\nnode/izwz9dohcv74iegqecp4axz labeled\nnode/izwz9ey0js5z7mornclpd6z labeled\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes izm5eb24dmjfimuaybpnqzz izm5eb24dmjfimuaybpnr0z raven.openyurt.io/gateway=gw-qingdao\nnode/izm5eb24dmjfimuaybpnqzz  labeled\nnode/izm5eb24dmjfimuaybpnr0z  labeled\n"})}),"\n",(0,t.jsx)(n.p,{children:"Apply the following command to check that raven is running properly"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-4b587                              1/1     Running             0              25h\nraven-agent-ds-dmh66                              1/1     Running             0              25h\nraven-agent-ds-gb5qj                              1/1     Running             0              25h\nraven-agent-ds-gzpfh                              1/1     Running             0              170m\nraven-agent-ds-ksxq6                              1/1     Running             0              25h\nraven-agent-ds-qhjtb                              1/1     Running             0              25h\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,t.jsx)(n.h3,{id:"gateways",children:"Gateways"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"create gateways"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-hangzhou\nspec:\n  endpoints:\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n    - nodeName: izbp14hrmgyfx2n3xdsl0hz\n      underNAT: true\n\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  endpoints:\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n    - nodeName: izwz9ey0js5z7mornclpd6z\n      underNAT: false\n\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-qingdao\nspec:\n  endpoints:\n    - nodeName: izm5eb24dmjfimuaybpnqzz\n      underNAT: true\n    - nodeName: izm5eb24dmjfimuaybpnr0z\n      underNAT: true\nEOF\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get gateways"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl get gateways\n\nNAME          ACTIVEENDPOINT\ngw-cloud      izwz9dohcv74iegqecp4axz\ngw-hangzhou   izbp15inok0kbfkg3in52rz\ngw-qingdao    izm5eb24dmjfimuaybpnqzz\n"})}),"\n",(0,t.jsx)(n.h3,{id:"test-pod-to-pod-networking",children:"Test pod-to-pod networking"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create test pod"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: busy-box\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: busy-box\n  template:\n    metadata:\n      labels:\n        app: busy-box\n    spec:\n      containers:\n      - name: busy-box\n        image: busybox\n        command:\n        - /bin/sh\n        - -c\n        - sleep 3000\n      nodeSelector:\n        openyurt.io/is-edge-worker: "true"\nEOF\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get test pod"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -o wide\nbusy-box-6f46f8585b-48zb9   1/1     Running   0          76s   10.244.19.3     izbp15inok0kbfkg3in52sz   <none>           <none>\nbusy-box-6f46f8585b-9nm64   1/1     Running   0          76s   10.244.16.161   izm5eb24dmjfimuaybpnqzz   <none>           <none>\nbusy-box-6f46f8585b-kv4dw   1/1     Running   0          76s   10.244.17.19    izm5eb24dmjfimuaybpnr0z   <none>           <none>\nbusy-box-6f46f8585b-t5v9d   1/1     Running   0          76s   10.244.18.4     izbp15inok0kbfkg3in52rz   <none>           <none>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Test networking across edge"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh\n/ # ping 10.244.17.19 -c 4\nPING 10.244.17.19 (10.244.17.19): 56 data bytes\n64 bytes from 10.244.17.19: seq=0 ttl=59 time=78.048 ms\n64 bytes from 10.244.17.19: seq=1 ttl=59 time=77.424 ms\n64 bytes from 10.244.17.19: seq=2 ttl=59 time=77.490 ms\n64 bytes from 10.244.17.19: seq=3 ttl=59 time=77.472 ms\n\n--- 10.244.17.19 ping statistics ---\n4 packets transmitted, 4 packets received, 0% packet loss\nround-trip min/avg/max = 77.424/77.608/78.048 ms\n\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Log in to the non-gateway node Edge-HZ-2 and ping the non-gateway node Edge-QD-2 to test the connectivity of nodes across network domains,"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Edge-HZ-2(Non-Gateway)\uff1a\nping 172.16.1.90 -c 4\nPING 172.16.1.90 (172.16.1.90) 56(84) bytes of data.\n64 bytes from 172.16.1.90: icmp_seq=1 ttl=61 time=77.5 ms\n64 bytes from 172.16.1.90: icmp_seq=2 ttl=61 time=77.3 ms\n64 bytes from 172.16.1.90: icmp_seq=3 ttl=61 time=78.5 ms\n64 bytes from 172.16.1.90: icmp_seq=4 ttl=61 time=77.3 ms\n\n--- 172.16.1.90 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 77.314/77.682/78.531/0.533 ms\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Capture package\n# Edge-HZ-1 (Gateway)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.132496 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 1, length 64\n16:13:13.133606 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 2, length 64\n16:13:14.134172 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 3, length 64\n16:13:15.135570 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 4, length 64\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Capture package\n# Edge-QD-1 (Gateway)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.174023 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.175096 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.176813 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.177024 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Capture package\n# Edge-QD-2(Non-Gateway)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.173087 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.174148 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.175884 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.176090 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n"})}),"\n",(0,t.jsx)(n.h1,{id:"other-features",children:"Other Features\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"By default, raven uses IPSec as the VPN back end, and we also provide WireGuard as an alternative. You can do the following to switch to the WireGuard back end."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Raven requires the WireGuard kernel module to be loaded on the gateway node in the cluster. As of Linux 5.6, the kernel includes WireGuard in-tree; Linux distributions with older kernels will need WireGuard installed. For most Linux distributions, this can be done using the system package manager. For more information, see Installing WireGuard."}),"\n",(0,t.jsxs)(n.li,{children:["The gateway node will require an open UDP port to communicate. By default, the WireGuard uses UDP port 51820. Run the following command.","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd raven\ngit checkout v0.3.0\nVPN_DRIVER=wireguard make deploy\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},37906:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/raven_deploy-927ae3b6df8f739cdf6bc2909f20f17d.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);