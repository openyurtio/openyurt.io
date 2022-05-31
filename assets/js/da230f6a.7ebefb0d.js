"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[3930],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9746:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"Raven"},s=void 0,d={unversionedId:"user-manuals/network/raven",id:"version-v0.7.0/user-manuals/network/raven",isDocsHomePage:!1,title:"Raven",description:"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster.",source:"@site/versioned_docs/version-v0.7.0/user-manuals/network/raven.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/raven",permalink:"/docs/user-manuals/network/raven",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md",tags:[],version:"v0.7.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1653913201,formattedLastUpdatedAt:"5/30/2022",frontMatter:{title:"Raven"},sidebar:"version-v0.7.0/docs",previous:{title:"Node Autonomy",permalink:"/docs/user-manuals/autonomy/node-autonomy"},next:{title:"Edge Pod Network",permalink:"/docs/user-manuals/network/edge-pod-network"}},u=[{value:"Label nodes in different physical regions",id:"label-nodes-in-different-physical-regions",children:[{value:"install raven agent",id:"install-raven-agent",children:[],level:3}],level:2},{value:"How to Use",id:"how-to-use",children:[{value:"Gateways",id:"gateways",children:[],level:3},{value:"Test pod-to-pod networking",id:"test-pod-to-pod-networking",children:[],level:3}],level:2}],c={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document introduces how to install raven and use raven to enhance edge-edge and edge-cloud network communication in an edge cluster."),(0,o.kt)("p",null,"Suppose you have an edge kubernetes cluster with nodes in different physical regions, and already deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager")," in this cluster, the details of ",(0,o.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager")," are in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/README.md"},"here"),"."),(0,o.kt)("h2",{id:"label-nodes-in-different-physical-regions"},"Label nodes in different physical regions"),(0,o.kt)("p",null,"As follows, suppose the cluster has five nodes, located in three different regions, where the node ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," is cloud node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes -o wide\n\nNAME         STATUS   ROLES    AGE   VERSION   INTERNAL-IP    \nhhht-node1   Ready    <none>   20d   v1.16.2   10.48.115.9    \nhhht-node2   Ready    <none>   20d   v1.16.2   10.48.115.10\nmaster       Ready    master   20d   v1.16.2   10.48.115.8\nwlcb-node1   Ready    <none>   20d   v1.16.2   10.48.115.11\nwlcb-node2   Ready    <none>   20d   v1.16.2   10.48.115.12    \n")),(0,o.kt)("p",null,"We use a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go"},"Gateway")," CR to manage nodes in different physical regions, and label nodes to indicate which ",(0,o.kt)("inlineCode",{parentName:"p"},"Gateway")," these nodes are managed by."),(0,o.kt)("p",null,"For example, We label nodes in region ",(0,o.kt)("inlineCode",{parentName:"p"},"cn-huhehaote")," with value ",(0,o.kt)("inlineCode",{parentName:"p"},"gw-hhht"),", indicating that these nodes are managed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"gw-hhht")," gateway."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes hhht-node1 hhht-node2 raven.openyurt.io/gateway=gw-hhht\nhhht-node1 labeled\nhhht-node2 labeled\n")),(0,o.kt)("p",null,"Similarly, we label node in ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud")," with value ",(0,o.kt)("inlineCode",{parentName:"p"},"gw-cloud"),", and nodes in region ",(0,o.kt)("inlineCode",{parentName:"p"},"cn-wulanchabu")," with value ",(0,o.kt)("inlineCode",{parentName:"p"},"gw-wlcb"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes master raven.openyurt.io/gateway=gw-cloud\nmaster labeled\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes wlcb-node1 wlcb-node2 raven.openyurt.io/gateway=gw-wlcb\nwlcb-node1 labeled\nwlcb-node2 labeled\n")),(0,o.kt)("h3",{id:"install-raven-agent"},"install raven agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/openyurtio/raven.git\ncd raven\nmake deploy\n")),(0,o.kt)("p",null,"Wait for the raven agent daemon to be created successfully"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-2jw47                           1/1     Running   0          91s\nraven-agent-ds-bq8zc                           1/1     Running   0          91s\nraven-agent-ds-cj7k4                           1/1     Running   0          91s\nraven-agent-ds-p9fk9                           1/1     Running   0          91s\nraven-agent-ds-rlb9q                           1/1     Running   0          91s\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("h3",{id:"gateways"},"Gateways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create gateways")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-hhht\nspec:\n  endpoints:\n    - nodeName: hhht-node1\n      underNAT: true\n    - nodeName: hhht-node2\n      underNAT: true\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  endpoints:\n    - nodeName: master\n      underNAT: false\n      \n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-wlcb\nspec:\n  endpoints:\n    - nodeName: wlcb-node1\n      underNAT: true\n    - nodeName: wlcb-node2\n      underNAT: true\n\nEOF\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get gateways")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get gateways\n\nNAME      ACTIVEENDPOINT\ngw-hhht   hhht-node1\ngw-master master\ngw-wlcb   wlcb-node1\n")),(0,o.kt)("h3",{id:"test-pod-to-pod-networking"},"Test pod-to-pod networking"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create test pod")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-1\nspec:\n  nodeName: hhht-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n---\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: fedora-2\nspec:\n  nodeName: wlcb-node2\n  containers:\n    - name: fedora\n      image: njucjc/fedora:latest\n      imagePullPolicy: Always\n\n\nEOF\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get test pod")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -o wide\nNAME       READY   STATUS    RESTARTS   AGE     IP            NODE                  NOMINATED NODE   READINESS GATES\nfedora-1   1/1     Running   0          46s     10.14.10.67   hhht-node2            <none>           <none>\nfedora-2   1/1     Running   0          46s     10.14.2.70    wlcb-node2            <none>           <none>\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test networking across edge")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec -it fedora-1 -- bash\n[root@fedora-1]# ping 10.14.2.70 -c 4\nPING 10.14.2.70 (10.14.2.70) 56(84) bytes of data.\n64 bytes from 10.14.2.70: icmp_seq=1 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=2 ttl=60 time=32.2 ms\n64 bytes from 10.14.2.70: icmp_seq=3 ttl=60 time=32.0 ms\n64 bytes from 10.14.2.70: icmp_seq=4 ttl=60 time=32.1 ms\n\n--- 10.14.2.70 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 32.047/32.136/32.246/0.081 ms\n\n")))}p.isMDXComponent=!0}}]);