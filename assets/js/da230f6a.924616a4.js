"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[41598],{79993:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"user-manuals/network/raven","title":"Raven","description":"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster.","source":"@site/versioned_docs/version-v0.7.0/user-manuals/network/raven.md","sourceDirName":"user-manuals/network","slug":"/user-manuals/network/raven","permalink":"/docs/v0.7.0/user-manuals/network/raven","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md","tags":[],"version":"v0.7.0","lastUpdatedBy":"Cookie","lastUpdatedAt":1733885620000,"frontMatter":{"title":"Raven"},"sidebar":"docs","previous":{"title":"Node Autonomy","permalink":"/docs/v0.7.0/user-manuals/autonomy/node-autonomy"},"next":{"title":"Edge Pod Network","permalink":"/docs/v0.7.0/user-manuals/network/edge-pod-network"}}');var s=a(74848),o=a(28453);const d={title:"Raven"},r=void 0,l={},i=[{value:"Label nodes in different physical regions",id:"label-nodes-in-different-physical-regions",level:2},{value:"install raven agent",id:"install-raven-agent",level:3},{value:"How to Use",id:"how-to-use",level:2},{value:"Gateways",id:"gateways",level:3},{value:"Test pod-to-pod networking",id:"test-pod-to-pod-networking",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster."}),"\n",(0,s.jsxs)(n.p,{children:["Suppose you have an edge kubernetes cluster with nodes in different physical regions, and already deploy the ",(0,s.jsx)(n.code,{children:"Raven Controller Manager"})," in this cluster, the details of ",(0,s.jsx)(n.code,{children:"Raven Controller Manager"})," are in ",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/README.md",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"label-nodes-in-different-physical-regions",children:"Label nodes in different physical regions"}),"\n",(0,s.jsxs)(n.p,{children:["As follows, suppose the cluster has five nodes, located in three different regions, where the node ",(0,s.jsx)(n.code,{children:"master"})," is cloud node."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get nodes -o wide\n\nNAME         STATUS   ROLES    AGE   VERSION   INTERNAL-IP    \nhhht-node1   Ready    <none>   20d   v1.16.2   10.48.115.9    \nhhht-node2   Ready    <none>   20d   v1.16.2   10.48.115.10\nmaster       Ready    master   20d   v1.16.2   10.48.115.8\nwlcb-node1   Ready    <none>   20d   v1.16.2   10.48.115.11\nwlcb-node2   Ready    <none>   20d   v1.16.2   10.48.115.12    \n"})}),"\n",(0,s.jsxs)(n.p,{children:["We use a ",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go",children:"Gateway"})," CR to manage nodes in different physical regions, and label nodes to indicate which ",(0,s.jsx)(n.code,{children:"Gateway"})," these nodes are managed by."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, We label nodes in region ",(0,s.jsx)(n.code,{children:"cn-huhehaote"})," with value ",(0,s.jsx)(n.code,{children:"gw-hhht"}),", indicating that these nodes are managed by the ",(0,s.jsx)(n.code,{children:"gw-hhht"})," gateway."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes hhht-node1 hhht-node2 raven.openyurt.io/gateway=gw-hhht\nhhht-node1 labeled\nhhht-node2 labeled\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Similarly, we label node in ",(0,s.jsx)(n.code,{children:"cloud"})," with value ",(0,s.jsx)(n.code,{children:"gw-cloud"}),", and nodes in region ",(0,s.jsx)(n.code,{children:"cn-wulanchabu"})," with value ",(0,s.jsx)(n.code,{children:"gw-wlcb"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes master raven.openyurt.io/gateway=gw-cloud\nmaster labeled\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl label nodes wlcb-node1 wlcb-node2 raven.openyurt.io/gateway=gw-wlcb\nwlcb-node1 labeled\nwlcb-node2 labeled\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-raven-agent",children:"install raven agent"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openyurtio/raven.git\ncd raven\nmake deploy\n"})}),"\n",(0,s.jsx)(n.p,{children:"Wait for the raven agent daemon to be created successfully"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-2jw47                           1/1     Running   0          91s\nraven-agent-ds-bq8zc                           1/1     Running   0          91s\nraven-agent-ds-cj7k4                           1/1     Running   0          91s\nraven-agent-ds-p9fk9                           1/1     Running   0          91s\nraven-agent-ds-rlb9q                           1/1     Running   0          91s\n"})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(n.h3,{id:"gateways",children:"Gateways"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"create gateways"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-hhht\nspec:\n  endpoints:\n    - nodeName: hhht-node1\n      underNAT: true\n    - nodeName: hhht-node2\n      underNAT: true\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  endpoints:\n    - nodeName: master\n      underNAT: false\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-wlcb\nspec:\n  endpoints:\n    - nodeName: wlcb-node1\n      underNAT: true\n    - nodeName: wlcb-node2\n      underNAT: true\n\nEOF\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Get gateways"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get gateways\n\nNAME      ACTIVEENDPOINT\ngw-hhht   hhht-node1\ngw-master master\ngw-wlcb   wlcb-node1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"test-pod-to-pod-networking",children:"Test pod-to-pod networking"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create test pod"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-1\nspec:\n  nodeName: hhht-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n---\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-2\nspec:\n  nodeName: wlcb-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n\nEOF\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Get test pod"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl get pod -o wide\nNAME       READY   STATUS    RESTARTS   AGE     IP            NODE                  NOMINATED NODE   READINESS GATES\nfedora-1   1/1     Running   0          46s     10.14.10.67   hhht-node2            <none>           <none>\nfedora-2   1/1     Running   0          46s     10.14.2.70    wlcb-node2            <none>           <none>\n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Test networking across edge"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec -it fedora-1 -- bash\n[root@fedora-1]# ping 10.14.2.70 -c 4\nPING 10.14.2.70 (10.14.2.70) 56(84) bytes of data.\n64 bytes from 10.14.2.70: icmp_seq=1 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=2 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=3 ttl=60 time=32.0 ms\n64 bytes from 10.14.2.70: icmp_seq=4 ttl=60 time=32.1 ms\n\n--- 10.14.2.70 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 32.047/32.136/32.246/0.081 ms\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>r});var t=a(96540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);