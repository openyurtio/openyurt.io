"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[77887],{40273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"installation/yurtctl-convert-revert","title":"Yurtctl convert/revert","description":"1.\u80cc\u666f\u8bf4\u660e","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/installation/yurtctl-convert-revert.md","sourceDirName":"installation","slug":"/installation/yurtctl-convert-revert","permalink":"/zh/docs/v0.6.0/installation/yurtctl-convert-revert","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtctl-convert-revert.md","tags":[],"version":"v0.6.0","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1734214326000,"frontMatter":{"title":"Yurtctl convert/revert"},"sidebar":"docs","previous":{"title":"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4","permalink":"/zh/docs/v0.6.0/installation/yurtcluster"},"next":{"title":"\u624b\u52a8\u8f6c\u6362","permalink":"/zh/docs/v0.6.0/installation/manually-setup"}}');var o=t(74848),s=t(28453);const a={title:"Yurtctl convert/revert"},u=void 0,l={},d=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",level:2},{value:"2.\u4f7f\u7528\u6d41\u7a0b",id:"2\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"2.1\u7f16\u8bd1 Yurtctl",id:"21\u7f16\u8bd1-yurtctl",level:3},{value:"2.2 Kubernetes To OpenYurt",id:"22-kubernetes-to-openyurt",level:3},{value:"2.3 OpenYurt To Kubernetes",id:"23-openyurt-to-kubernetes",level:3}];function i(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"1\u80cc\u666f\u8bf4\u660e",children:"1.\u80cc\u666f\u8bf4\u660e"}),"\n",(0,o.jsx)(n.p,{children:"\u7531\u4e8e OpenYurt \u5bf9 Kubernetes \u65e0\u4fb5\u5165\uff0c\u6240\u4ee5 OpenYurt \u63d0\u4f9b\u4e86 Yurtctl convert/revert \u547d\u4ee4\uff0c\u7528\u4e8e Kubernetes \u96c6\u7fa4\u548c OpenYurt \u96c6\u7fa4\u7684\u8f6c\u6362\u3002\u8be5\u547d\u4ee4\u9002\u7528\u4e8e\u6d4b\u8bd5\u73af\u5883\uff0c\u4e0d\u63a8\u8350\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"2\u4f7f\u7528\u6d41\u7a0b",children:"2.\u4f7f\u7528\u6d41\u7a0b"}),"\n",(0,o.jsx)(n.h3,{id:"21\u7f16\u8bd1-yurtctl",children:"2.1\u7f16\u8bd1 Yurtctl"}),"\n",(0,o.jsxs)(n.p,{children:["\u8981\u5feb\u901f\u6784\u5efa\u548c\u5b89\u88c5\u8bbe\u7f6e ",(0,o.jsx)(n.code,{children:"yurtctl"})," \uff0c\u5728\u7f16\u8bd1\u7cfb\u7edf\u5df2\u5b89\u88c5\u4e86 golang 1.13+ \u548c bash \u7684\u524d\u63d0\u4e0b\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\u5b89\u88c5\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'```sh\n$ git clone https://github.com/openyurtio/openyurt.git\n$ cd openyurt\n$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn\n```\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5c06\u5b58\u653e\u5728 ",(0,o.jsx)(n.code,{children:"_output/bin/"})," \u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"22-kubernetes-to-openyurt",children:"2.2 Kubernetes To OpenYurt"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u5f53\u7528\u6237\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 Yurtctl convert \u547d\u4ee4\uff0c\u5feb\u901f\u5730\u5c06\u96c6\u7fa4\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4\u3002\u76ee\u524d\uff0cOpenYurt \u652f\u6301 minkube\u3001kind \u4ee5\u53ca\u624b\u52a8\u642d\u5efa\u7684 Kubernetes \u96c6\u7fa4\u7684\u8f6c\u6362\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u67e5\u770b\u539f\u751f Kubernetes \u96c6\u7fa4\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ kubectl get node\nNAME     STATUS   ROLES                  AGE   VERSION\nmaster   Ready    control-plane,master   24d   v1.20.0\nnode1    Ready    <none>                 24d   v1.20.0\nnode2    Ready    <none>                 24d   v1.20.0\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528 Yurtctl convert \u547d\u4ee4\u8fdb\u884c\u96c6\u7fa4\u8f6c\u6362\u3002\u8f6c\u6362\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u96c6\u7fa4\u4e2d\u7684\u4e91\u7aef\u8282\u70b9\u5217\u8868\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ _output/bin/yurtctl convert --provider ack --cloud-nodes master\n[preflight] Running pre-flight checks\n[preflight] Running node-servant-preflight-convert jobs to check on edge and cloud nodes. Job running may take a long time, and job failure will affect the execution of the next stage\n[runConvert] Label all nodes with edgeworker label, annotate all nodes with autonomy annotation\n[runConvert] Deploying yurt-controller-manager\n[runConvert] Running jobs for convert. Job running may take a long time, and job failure will not affect the execution of the next stage\n[runConvert] Running disable-node-controller jobs to disable node-controller\n\t[INFO] servant job(yurtctl-disable-node-controller-master) has succeeded\n[runConvert] Running node-servant-convert jobs to deploy the yurt-hub and reset the kubelet service on edge and cloud nodes\n\t[INFO] servant job(node-servant-convert-node1) has succeeded\n\t[INFO] servant job(node-servant-convert-node2) has succeeded\n\t[INFO] servant job(node-servant-convert-master) has succeeded\n[runConvert] If any job fails, you can get job information through 'kubectl get jobs -n kube-system' to debug.\n\tNote that before the next conversion, please delete all related jobs so as not to affect the conversion.\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f6c\u6362\u5b8c\u6210\u4e4b\u540e\uff0c\u96c6\u7fa4\u4e2d\u4f1a\u90e8\u7f72 yurt-controller-manager\uff0cyurt-hub \u7b49\u7ec4\u4ef6\u3002\u6b64\u5916\uff0c\u8fb9\u7f18\u8282\u70b9\u4f1a\u81ea\u52a8\u5f00\u542f\u8282\u70b9\u81ea\u6cbb\u529f\u80fd\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u8f6c\u6362\u65f6 Yurtctl \u63d0\u4f9b\u4e86\u9009\u9879\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u8bbe\u7f6e OpenYurt \u96c6\u7fa4\u7684\u914d\u7f6e\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"--deploy-yurttunnel\t\t\t\t\u662f\u5426\u90e8\u7f72 yurttunnel-server \u4ee5\u53ca yurttunnel-agent\n--enable-app-manager\t\t\t\u662f\u5426\u90e8\u7f72 yurt-app-manager\n--yurthub-image\t\t\t\t\t\t\t\t\t\tyurthub \u955c\u50cf\n--yurt-controller-manager-image\t\tyurt-controller-manager \u955c\u50cf\n--yurt-tunnel-server-image\t\t\t\tyurttunnel-server \u955c\u50cf\n--yurt-tunnel-agent-image\t\t\t\t\tyurttunnel-agent \u955c\u50cf\n--yurt-app-manager-image\t\t\t\t\tyurt-app-manager-image \u955c\u50cf\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u66f4\u591a\u914d\u7f6e\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"yurtctl convert -h"})," \u83b7\u53d6\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u5982\u679c\u8f6c\u6362\u5931\u8d25\uff0c\u8bf7\u67e5\u8be2\u5931\u8d25\u7684 Job \u7684\u8fd0\u884c\u60c5\u51b5\u8fdb\u884c\u9519\u8bef\u6392\u67e5\uff0c\u5e76\u5220\u9664\u76f8\u5173\u7684 Job\uff0c\u4ee5\u907f\u514d\u4e0b\u4e00\u6b21\u8f6c\u6362\u53d1\u751f\u9519\u8bef\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"23-openyurt-to-kubernetes",children:"2.3 OpenYurt To Kubernetes"}),"\n",(0,o.jsx)(n.p,{children:"OpenYurt \u96c6\u7fa4\u72b6\u51b5\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ kubectl get pod -A\nNAMESPACE     NAME                                       READY   STATUS    RESTARTS   AGE\nkube-system   coredns-54d67798b7-28r2s                   1/1     Running   0          24d\nkube-system   coredns-54d67798b7-wlmh8                   1/1     Running   0          24d\nkube-system   etcd-master                                1/1     Running   0          24d\nkube-system   kube-apiserver-master                      1/1     Running   0          24d\nkube-system   kube-controller-manager-master             1/1     Running   0          13d\nkube-system   kube-flannel-ds-4fmxr                      1/1     Running   0          24d\nkube-system   kube-flannel-ds-7r2fh                      1/1     Running   0          24d\nkube-system   kube-flannel-ds-j2xs5                      1/1     Running   0          24d\nkube-system   kube-proxy-6jh7s                           1/1     Running   0          24d\nkube-system   kube-proxy-9zdnz                           1/1     Running   0          24d\nkube-system   kube-proxy-trw2v                           1/1     Running   0          24d\nkube-system   kube-scheduler-master                      1/1     Running   0          24d\nkube-system   yurt-controller-manager-77b97fd47b-mhhxq   1/1     Running   0          13d\nkube-system   yurt-hub-master                            1/1     Running   0          13d\nkube-system   yurt-hub-node1                             1/1     Running   0          13d\nkube-system   yurt-hub-node2                             1/1     Running   0          13d\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06 OpenYurt \u96c6\u7fa4\u8f6c\u6362\u4e3a Kubernetes \u96c6\u7fa4\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"$ ./yurtctl revert\nI0107 11:36:25.694505    8473 revert.go:169] yurt controller manager is removed\nI0107 11:36:25.703390    8473 revert.go:178] serviceaccount for yurt controller manager is removed\nI0107 11:36:25.706450    8473 revert.go:187] clusterrole for yurt controller manager is removed\nI0107 11:36:25.709956    8473 revert.go:196] clusterrolebinding for yurt controller manager is removed\nI0107 11:36:25.720702    8473 revert.go:356] deployment for yurt app manager is removed\nI0107 11:36:25.721580    8473 revert.go:366] Role for yurt app manager is removed\nI0107 11:36:25.722411    8473 revert.go:375] ClusterRole for yurt app manager is removed\nI0107 11:36:25.723257    8473 revert.go:384] ClusterRoleBinding for yurt app manager is removed\nI0107 11:36:25.724132    8473 revert.go:394] RoleBinding for yurt app manager is removed\nI0107 11:36:25.870416    8473 revert.go:404] secret for yurt app manager is removed\nI0107 11:36:26.070564    8473 revert.go:414] Service for yurt app manager is removed\nI0107 11:36:26.071558    8473 revert.go:424] MutatingWebhookConfiguration for yurt app manager is removed\nI0107 11:36:26.072505    8473 revert.go:434] ValidatingWebhookConfiguration for yurt app manager is removed\nI0107 11:36:26.082843    8473 revert.go:443] crd for yurt app manager is removed\nI0107 11:36:26.092951    8473 revert.go:452] UnitedDeploymentcrd for yurt app manager is removed\nI0107 11:36:26.092968    8473 revert.go:212] yurt app manager is removed\n\t[INFO] servant job(yurtctl-enable-node-controller-master) has succeeded\nI0107 11:36:56.118458    8473 revert.go:226] complete enabling node-controller\n\t[INFO] servant job(node-servant-revert-node1) has succeeded\n\t[INFO] servant job(node-servant-revert-node2) has succeeded\n\t[INFO] servant job(node-servant-revert-master) has succeeded\nI0107 11:37:16.135272    8473 revert.go:239] complete removing yurt-hub and resetting kubelet service\nI0107 11:37:16.148484    8473 revert.go:246] delete yurthub clusterrole and clusterrolebinding\nI0107 11:37:16.155288    8473 revert.go:262] label openyurt.io/is-edge-worker is removed from node master\nI0107 11:37:16.155303    8473 revert.go:264] annotation node.beta.openyurt.io/autonomy is removed from node master\nI0107 11:37:16.159211    8473 revert.go:262] label openyurt.io/is-edge-worker is removed from node node1\nI0107 11:37:16.159229    8473 revert.go:264] annotation node.beta.openyurt.io/autonomy is removed from node node1\nI0107 11:37:16.163365    8473 revert.go:262] label openyurt.io/is-edge-worker is removed from node node2\nI0107 11:37:16.163384    8473 revert.go:264] annotation node.beta.openyurt.io/autonomy is removed from node node2\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u5728\u6267\u884c\u524d\u9700\u8981\u786e\u4fdd\u6240\u6709\u8fb9\u7f18\u8282\u70b9\u72b6\u6001\u6b63\u5e38\uff0c\u4ee5\u907f\u514d\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\u3002"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>u});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);