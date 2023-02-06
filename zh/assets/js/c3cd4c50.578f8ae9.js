"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={title:"Raven"},l=void 0,i={unversionedId:"user-manuals/network/raven",id:"version-v1.2/user-manuals/network/raven",title:"Raven",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5Raven\u548c\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/user-manuals/network/raven.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/raven",permalink:"/zh/docs/user-manuals/network/raven",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/raven.md",tags:[],version:"v1.2",lastUpdatedBy:"rambohe-ch",lastUpdatedAt:1675160618,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{title:"Raven"},sidebar:"version-v1.2/docs",previous:{title:"\u8282\u70b9\u81ea\u6cbb",permalink:"/zh/docs/user-manuals/autonomy/node-autonomy"},next:{title:"\u8fb9\u7f18Pod\u7f51\u7edc",permalink:"/zh/docs/user-manuals/network/edge-pod-network"}},p={},s=[{value:"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df",level:2},{value:"2. \u5982\u4f55\u4f7f\u7528",id:"2-\u5982\u4f55\u4f7f\u7528",level:2},{value:"2.1 Gateways",id:"21-gateways",level:3},{value:"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027",id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027",level:3}],u={toc:s};function d(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b89\u88c5Raven\u548c\u4f7f\u7528Raven\u6765\u589e\u5f3a\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u7684\u8fb9-\u8fb9\u548c\u8fb9-\u4e91\u7f51\u7edc\u6253\u901a\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u8fb9\u7f18kubernetes\u96c6\u7fa4\uff0c\u8282\u70b9\u5206\u5e03\u5728\u4e0d\u540c\u7684\u7269\u7406\u533a\u57df\u5982\u56fe\u6240\u793a\uff0c\u5e76\u4e14\u5df2\u7ecf\u5728\u8fd9\u4e2a\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager")," \u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Raven Agent"),"\uff0c\u5982\u679c\u6ca1\u6709\u90e8\u7f72\u53ef\u4ee5\u53c2\u7167",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/installation/manually-setup"},"\u5b89\u88c5\u6559\u7a0b"),"\uff0c\u6709\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"Raven Controller Manager"),"\u7684\u8be6\u7ec6\u4fe1\u606f\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/README.md"},"\u8fd9\u91cc"),"\u53ef\u4ee5\u627e\u5230\u3002\n",(0,r.kt)("img",{alt:"raven_deploy",src:t(80736).Z,width:"720",height:"405"})),(0,r.kt)("h2",{id:"1-\u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df"},"1. \u8282\u70b9\u6253\u6807\u533a\u5206\u4e0d\u540c\u7f51\u7edc\u57df"),(0,r.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff0c\u5047\u8bbe\u4f60\u7684\u8fb9\u7f18\u96c6\u7fa4\u4e2d\u6709\u4e94\u4e2a\u8282\u70b9\uff0c\u5206\u5e03\u5728\u4e09\u4e2a\u4e0d\u540c\u7684\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\uff0c\u5176\u4e2d\u8282\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u8282\u70b9\u540c\u6837\u4e5f\u662f\u4e91\u7aef\u8282\u70b9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes -o wide\nNAME                      STATUS   ROLES                  AGE     VERSION    INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION                CONTAINER-RUNTIME\nizbp15inok0kbfkg3in52rz   Ready    Edge-HZ-1              27h     v1.22.11   172.16.2.103    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizbp15inok0kbfkg3in52sz   Ready    Edge-HZ-2              26h     v1.22.11   172.16.2.104    <none>        CentOS Linux 7 (Core)   3.10.0-1160.81.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnqzz   Ready    Edge-QD-1              29h     v1.22.11   172.16.1.89     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizm5eb24dmjfimuaybpnr0z   Ready    Edge-QD-2              29h     v1.22.11   172.16.1.90     <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://19.3.15\nizwz9dohcv74iegqecp4axz   Ready    control-plane,master   5d21h   v1.22.11   192.168.0.195   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\nizwz9ey0js5z7mornclpd6z   Ready    cloud                  3h3m    v1.22.11   192.168.0.196   <none>        CentOS Linux 7 (Core)   3.10.0-1160.80.1.el7.x86_64   docker://20.10.2\n")),(0,r.kt)("p",null,"\u6211\u4eec\u5bf9\u4f4d\u4e8e\u4e0d\u540c\u7269\u7406\uff08\u7f51\u7edc\uff09\u533a\u57df\u8282\u70b9\uff0c\u5206\u522b\u4f7f\u7528\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/raven-controller-manager/blob/main/pkg/ravencontroller/apis/raven/v1alpha1/gateway_types.go"},"Gateway")," CR\u6765\u8fdb\u884c\u7ba1\u7406\u3002\u901a\u8fc7\u7ed9\u8282\u70b9\u6253\u6807\u7684\u65b9\u5f0f\uff0c\u6765\u6807\u8bc6\u8282\u70b9\u7531\u54ea\u4e2aGateway\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u6211\u4eec\u7ed9\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"hangzhou"),"\u7684\u8282\u70b9\u6253",(0,r.kt)("inlineCode",{parentName:"p"},"gw-hangzhou"),"\u7684\u6807\u7b7e\uff0c\u6765\u8868\u660e\u8fd9\u4e9b\u8282\u70b9\u662f\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"gw-hangzhou"),"\u8fd9\u4e2aGateway CR\u6765\u7ba1\u7406\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes izbp15inok0kbfkg3in52rz izbp15inok0kbfkg3in52sz raven.openyurt.io/gateway=gw-hangzhou\nnode/izbp15inok0kbfkg3in52rz not labeled\nnode/izbp15inok0kbfkg3in52sz not labeled\n")),(0,r.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u5206\u522b\u4e3a\u4f4d\u4e8e\u4e91\u7aef\u8282\u70b9\u548cmaster\u8282\u70b9\u6253\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"gw-cloud"),"\uff0c\u548c\u7ed9\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"qingdao"),"\u7684\u8282\u70b9\u6253",(0,r.kt)("inlineCode",{parentName:"p"},"gw-qingdao"),"\u7684\u6807\u7b7e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes izwz9dohcv74iegqecp4axz izwz9ey0js5z7mornclpd6z raven.openyurt.io/gateway=gw-cloud\nnode/izwz9dohcv74iegqecp4axz labeled\nnode/izwz9ey0js5z7mornclpd6z labeled\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label nodes izm5eb24dmjfimuaybpnqzz izm5eb24dmjfimuaybpnr0z raven.openyurt.io/gateway=gw-qingdao\nnode/izm5eb24dmjfimuaybpnqzz  labeled\nnode/izm5eb24dmjfimuaybpnr0z  labeled\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u68c0\u67e5\u76f8\u5e94\u7684Raven Agent\u7684Pod\u662f\u5426\u6210\u529f\u8fd0\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -n kube-system | grep raven-agent-ds\nraven-agent-ds-4b587                              1/1     Running             0              25h\nraven-agent-ds-dmh66                              1/1     Running             0              25h\nraven-agent-ds-gb5qj                              1/1     Running             0              25h\nraven-agent-ds-gzpfh                              1/1     Running             0              170m\nraven-agent-ds-ksxq6                              1/1     Running             0              25h\nraven-agent-ds-qhjtb                              1/1     Running             0              25h\n")),(0,r.kt)("h2",{id:"2-\u5982\u4f55\u4f7f\u7528"},"2. \u5982\u4f55\u4f7f\u7528"),(0,r.kt)("h3",{id:"21-gateways"},"2.1 Gateways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7684Gateway CR")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat <<EOF | kubectl apply -f -\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-hangzhou\nspec:\n  endpoints:\n    - nodeName: izbp15inok0kbfkg3in52rz\n      underNAT: true\n    - nodeName: izbp14hrmgyfx2n3xdsl0hz\n      underNAT: true\n\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-cloud\nspec:\n  endpoints:\n    - nodeName: izwz9dohcv74iegqecp4axz\n      underNAT: false\n    - nodeName: izwz9ey0js5z7mornclpd6z\n      underNAT: false\n\n---\napiVersion: raven.openyurt.io/v1alpha1\nkind: Gateway\nmetadata:\n  name: gw-qingdao\nspec:\n  endpoints:\n    - nodeName: izm5eb24dmjfimuaybpnqzz\n      underNAT: true\n    - nodeName: izm5eb24dmjfimuaybpnr0z\n      underNAT: true\nEOF\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5404\u4e2aGateway CR\u7684\u72b6\u6001")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get gateways\n\nNAME          ACTIVEENDPOINT\ngw-cloud      izwz9dohcv74iegqecp4axz\ngw-hangzhou   izbp15inok0kbfkg3in52rz\ngw-qingdao    izm5eb24dmjfimuaybpnqzz\n")),(0,r.kt)("h3",{id:"22-\u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684pod\u7f51\u7edc\u8054\u901a\u6027"},"2.2 \u6d4b\u8bd5\u4f4d\u4e8e\u4e0d\u540c\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6d4b\u8bd5Pod")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat <<EOF | kubectl apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: busy-box\nspec:\n  replicas: 4\n  selector:\n    matchLabels:\n      app: busy-box\n  template:\n    metadata:\n      labels:\n        app: busy-box\n    spec:\n      containers:\n      - name: busy-box\n        image: busybox\n        command:\n        - /bin/sh\n        - -c\n        - sleep 3000\n      nodeSelector:\n        openyurt.io/is-edge-worker: "true"\nEOF\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u6d4b\u8bd5Pod\u6b63\u5e38\u8fd0\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -o wide\nbusy-box-6f46f8585b-48zb9   1/1     Running   0          76s   10.244.19.3     izbp15inok0kbfkg3in52sz   <none>           <none>\nbusy-box-6f46f8585b-9nm64   1/1     Running   0          76s   10.244.16.161   izm5eb24dmjfimuaybpnqzz   <none>           <none>\nbusy-box-6f46f8585b-kv4dw   1/1     Running   0          76s   10.244.17.19    izm5eb24dmjfimuaybpnr0z   <none>           <none>\nbusy-box-6f46f8585b-t5v9d   1/1     Running   0          76s   10.244.18.4     izbp15inok0kbfkg3in52rz   <none>           <none>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u8de8\u7f51\u7edc\u57df\u7684Pod\u7f51\u7edc\u8054\u901a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec -it busy-box-6f46f8585b-48zb9 -- sh\n/ # ping 10.244.17.19 -c 4\nPING 10.244.17.19 (10.244.17.19): 56 data bytes\n64 bytes from 10.244.17.19: seq=0 ttl=59 time=78.048 ms\n64 bytes from 10.244.17.19: seq=1 ttl=59 time=77.424 ms\n64 bytes from 10.244.17.19: seq=2 ttl=59 time=77.490 ms\n64 bytes from 10.244.17.19: seq=3 ttl=59 time=77.472 ms\n\n--- 10.244.17.19 ping statistics ---\n4 packets transmitted, 4 packets received, 0% packet loss\nround-trip min/avg/max = 77.424/77.608/78.048 ms\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u8de8\u7f51\u7edc\u57df\u7684\u8282\u70b9\u7f51\u7edc\u8054\u901a: \u767b\u9646\u5230\u975eGateway\u8282\u70b9Edge-HZ-2 ping \u975eGateway\u8282\u70b9Edge-QD-2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8282\u70b9Edge-HZ-2(\u975eGateway\u8282\u70b9)\uff1a\nping 172.16.1.90 -c 4\nPING 172.16.1.90 (172.16.1.90) 56(84) bytes of data.\n64 bytes from 172.16.1.90: icmp_seq=1 ttl=61 time=77.5 ms\n64 bytes from 172.16.1.90: icmp_seq=2 ttl=61 time=77.3 ms\n64 bytes from 172.16.1.90: icmp_seq=3 ttl=61 time=78.5 ms\n64 bytes from 172.16.1.90: icmp_seq=4 ttl=61 time=77.3 ms\n\n--- 172.16.1.90 ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3003ms\nrtt min/avg/max/mdev = 77.314/77.682/78.531/0.533 ms\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6293\u5305\n# \u8282\u70b9Edge-HZ-1(Gateway\u8282\u70b9)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.132496 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 1, length 64\n16:13:13.133606 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 2, length 64\n16:13:14.134172 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 3, length 64\n16:13:15.135570 IP 172.16.2.104 > 172.16.1.90: ICMP echo request, id 2, seq 4, length 64\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6293\u5305\n# \u8282\u70b9Edge-QD-1(Gateway\u8282\u70b9)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.174023 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.175096 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.176813 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.177024 IP 172.16.1.90 > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6293\u5305\n# \u8282\u70b9Edge-QD-2(\u975eGateway\u8282\u70b9)\uff1a\ntcpdump -i raven0\ntcpdump: verbose output suppressed, use -v or -vv for full protocol decode\nlistening on raven0, link-type EN10MB (Ethernet), capture size 262144 bytes\n16:13:12.173087 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 1, length 64\n16:13:13.174148 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 2, length 64\n16:13:14.175884 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 3, length 64\n16:13:15.176090 IP iZm5eb24dmjfimuaybpnr0Z > 172.16.2.104: ICMP echo reply, id 2, seq 4, length 64\n")),(0,r.kt)("h1",{id:"\u5176\u4ed6\u7279\u6027"},"\u5176\u4ed6\u7279\u6027\uff1a"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0craven \u4f7f\u7528 IPSec \u4f5c\u4e3a VPN \u540e\u7aef\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9bWireGuard\u4f5c\u4e3a\u66ff\u4ee3\u65b9\u6848\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5207\u6362\u5230 WireGuard \u540e\u7aef\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Raven \u9700\u8981\u5728\u96c6\u7fa4\u4e2d\u7684\u7f51\u5173\u8282\u70b9\u4e0a\u52a0\u8f7d WireGuard \u5185\u6838\u6a21\u5757\u3002\u4ece Linux 5.6 \u5f00\u59cb\uff0c\u5185\u6838\u5305\u542b WireGuard in-tree\uff1b\u5177\u6709\u65e7\u5185\u6838\u7684 Linux \u53d1\u884c\u7248\u5c06\u9700\u8981\u5b89\u88c5 WireGuard\u3002\u5bf9\u4e8e\u5927\u591a\u6570 Linux \u53d1\u884c\u7248\uff0c\u8fd9\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u5305\u7ba1\u7406\u5668\u6765\u5b8c\u6210\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b89\u88c5 WireGuard\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5173\u8282\u70b9\u5c06\u9700\u8981\u4e00\u4e2a\u5f00\u653e\u7684 UDP \u7aef\u53e3\u624d\u80fd\u8fdb\u884c\u901a\u4fe1\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cWireGuard \u4f7f\u7528 UDP \u7aef\u53e3 51820\u3002 \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd raven\ngit checkout v0.3.0\nVPN_DRIVER=wireguard make deploy\n")))))}d.isMDXComponent=!0},80736:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/raven_deploy-927ae3b6df8f739cdf6bc2909f20f17d.png"}}]);