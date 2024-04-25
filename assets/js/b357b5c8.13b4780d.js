"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[37724],{81559:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(85893),o=s(11151);const t={title:"Edge Ingress"},i=void 0,l={id:"user-manuals/network/edge-ingress",title:"Edge Ingress",description:"This document introduces how to access Edge services through Edge Ingress in Cloud Edge scenarios.",source:"@site/versioned_docs/version-v1.3/user-manuals/network/edge-ingress.md",sourceDirName:"user-manuals/network",slug:"/user-manuals/network/edge-ingress",permalink:"/docs/v1.3/user-manuals/network/edge-ingress",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/network/edge-ingress.md",tags:[],version:"v1.3",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171408076e4,frontMatter:{title:"Edge Ingress"}},c={},a=[{value:"1.Enable the ingress feature on NodePools which provide your desired services",id:"1enable-the-ingress-feature-on-nodepools-which-provide-your-desired-services",level:2},{value:"2.Create and apply the ingress rule as K8S to access your desired services",id:"2create-and-apply-the-ingress-rule-as-k8s-to-access-your-desired-services",level:2}];function d(e){const n={br:"br",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document introduces how to access Edge services through Edge Ingress in Cloud Edge scenarios.\nUsers can access the Edge services from inside or outside of the NodePools, and for the condition\nfrom outside of the NodePools, only NodePort type ingress controller service is supported by now."}),"\n",(0,r.jsx)(n.p,{children:"Generally, it only needs 2 steps to use the Edge Ingress feature:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Enable the ingress feature on NodePools which provide your desired services."}),"\n",(0,r.jsx)(n.li,{children:"Create and apply the ingress rule as K8S to access your desired services."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Follow the steps below to try the Edge Ingress feature:"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1enable-the-ingress-feature-on-nodepools-which-provide-your-desired-services",children:"1.Enable the ingress feature on NodePools which provide your desired services"}),"\n",(0,r.jsx)(n.p,{children:"YurtIngress operator is responsible for orchestrating multi ingress controllers to the corresponding NodePools.\nSuppose you have created 4 NodePools in your OpenYurt cluster: pool01, pool02, pool03, pool04, and you want to\nenable edge ingress feature on pool01 and pool03, you can create the YurtIngress CR as below:"}),"\n",(0,r.jsx)(n.p,{children:"1). Create the YurtIngress CR yaml file:"}),"\n",(0,r.jsx)(n.p,{children:"1.1). A simple CR definition with some default configurations:"}),"\n",(0,r.jsx)(n.p,{children:"apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtIngress\nmetadata:\nname: yurtingress-test\nspec:\npools:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name: pool01"}),"\n",(0,r.jsx)(n.li,{children:"name: pool03"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The default nginx ingress controller replicas per pool is 1.",(0,r.jsx)(n.br,{}),"\n","The default nginx ingress controller image is controller",":v0",".48.1 from dockerhub.",(0,r.jsx)(n.br,{}),"\n","The default nginx ingress webhook certgen image is kube-webhook-certgen",":v0",".48.1 from dockerhub."]}),"\n",(0,r.jsx)(n.p,{children:"1.2). If users want to make personalized configurations about the default options, the YurtIngress CR can be defined as below:"}),"\n",(0,r.jsxs)(n.p,{children:["apiVersion: apps.openyurt.io/v1alpha1\nkind: YurtIngress\nmetadata:\nname: yurtingress-test\nspec:\ningress_controller_replicas_per_pool: 2\ningress_controller_image: k8s.gcr.io/ingress-nginx/controller",":v0",".49.0\ningress_webhook_certgen_image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen",":v0",".49.0\npools:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["name: pool01\ningress_ips:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"xxx.xxx.xxx.xxx"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"name: pool03"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'"ingress_ips" represents the IPs if users want to expose the nginx ingress controller service through externalIPs for a specified nodepool.'}),"\n",(0,r.jsx)(n.p,{children:"Notes:"}),"\n",(0,r.jsx)(n.p,{children:"a). User can define different YurtIngress CRs for personalized configurations, for example set different ingress controller replicas\nfor different nodepools."}),"\n",(0,r.jsx)(n.p,{children:'b). In spec, the "ingress_controller_replicas_per_pool" represents the ingress controller replicas deployed on every pool,\nIt is used for the HA usage scenarios.'}),"\n",(0,r.jsx)(n.p,{children:'c). In spec, the "pools" represents the pools list on which you want to enable ingress feature.\nCurrently it supports the pool name and the nginx ingress controller service externalIPs.'}),"\n",(0,r.jsxs)(n.p,{children:["2). Apply the YurtIngress CR yaml file:",(0,r.jsx)(n.br,{}),"\n","Assume the file name is yurtingress-test.yaml:"]}),"\n",(0,r.jsx)(n.p,{children:"#kubectl apply -f yurtingress-test.yaml\nyurtingress.apps.openyurt.io/yurtingress-test created"}),"\n",(0,r.jsx)(n.p,{children:"Then you can get the YurtIngress CR to check the status:"}),"\n",(0,r.jsx)(n.p,{children:"#kubectl get ying\nNAME                  REPLICAS-PER-POOL   READYNUM   NOTREADYNUM   AGE\nyurtingress-test      1                   2          0             3m13s"}),"\n",(0,r.jsx)(n.p,{children:"When the ingress controller is enabled successfully, a per-pool NodePort service is created to expose the ingress controller serivce:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    #kubectl get svc -n ingress-nginx\n    ingress-nginx   pool01-ingress-nginx-controller   NodePort    192.167.107.123   <none>    80:32255/TCP,443:32275/TCP   53m\n    ingress-nginx   pool03-ingress-nginx-controller   NodePort    192.167.48.114    <none>    80:30531/TCP,443:30916/TCP   53m\n"})}),"\n",(0,r.jsx)(n.p,{children:"Notes:"}),"\n",(0,r.jsx)(n.p,{children:'a). "ying" is the shortName of YurtIngress resource.'}),"\n",(0,r.jsx)(n.p,{children:'b). When the "READYNUM" equals the pools number you defined in the YurtIngress CR, it represents the ingress feature is ready on all your spec pools.'}),"\n",(0,r.jsx)(n.p,{children:'c). If the "NOTREADYNUM" is not 0 all the times, you can check the YurtIngress CR for the the status infomation.\nAlso you can check the corresponding deployments and pods to figure out why the ingress is not ready yet.'}),"\n",(0,r.jsx)(n.p,{children:"d). For every NodePool which ingress is enabled successfully, it exposes a NodePort type service for users to access the nginx ingress controller."}),"\n",(0,r.jsx)(n.p,{children:'e). When the ingress controllers are orchestrated to the specified NodePools, an "ingress-nginx" namespace will be created, and all the namespace\nrelated resources will be created under it.'}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2create-and-apply-the-ingress-rule-as-k8s-to-access-your-desired-services",children:"2.Create and apply the ingress rule as K8S to access your desired services"}),"\n",(0,r.jsx)(n.p,{children:"When the step 1 above is done, you have successfully deployed the nginx ingress controller to the related NodePools, and the following\ningress user experience is totally consistent with K8S."}),"\n",(0,r.jsx)(n.p,{children:"Suppose your app workload is deployed to several NodePools and it exposes a global service, for example:"}),"\n",(0,r.jsx)(n.p,{children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: pool01-deployment\nlabels:\napp: echo\nspec:\nreplicas: 2\nselector:\nmatchLabels:\napp: echo\ntemplate:\nmetadata:\nlabels:\napp: echo\nspec:\ncontainers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["name: echo-app\nimage: hashicorp/http-echo\nargs:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"-text=echo from nodepool pool01"\nimagePullPolicy: IfNotPresent\nnodeSelector:\napps.openyurt.io/nodepool: pool01'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: pool03-deployment\nlabels:\napp: echo\nspec:\nreplicas: 2\nselector:\nmatchLabels:\napp: echo\ntemplate:\nmetadata:\nlabels:\napp: echo\nspec:\ncontainers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["name: echo-app\nimage: hashicorp/http-echo\nargs:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"-text=echo from nodepool pool03"\nimagePullPolicy: IfNotPresent\nnodeSelector:\napps.openyurt.io/nodepool: pool03'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"kind: Service\napiVersion: v1\nmetadata:\nname: echo-service\nspec:\nselector:\napp: echo\nports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"port: 5678"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you want to access the service provided by pool01:"}),"\n",(0,r.jsx)(n.p,{children:"1). Create the ingress rule yaml file:"}),"\n",(0,r.jsx)(n.p,{children:"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\nname: ingress-pool01\nannotations:\nkubernetes.io/ingress.class: pool01\ningress.kubernetes.io/rewrite-target: /\nspec:\nrules:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["http:\npaths:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"path: /echo\nbackend:\nserviceName: echo-service\nservicePort: 5678"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Notes:"}),"\n",(0,r.jsx)(n.p,{children:"a). Ingress class decides which NodePool to provide the ingress capability, so you need to define the ingress class to your desired NodePool name."}),"\n",(0,r.jsx)(n.p,{children:"b). The ingress CR definition may be different for different K8S versions, so you need ensure the CR definition matches with your cluster K8S version."}),"\n",(0,r.jsxs)(n.p,{children:["2). Apply the ingress rule yaml file:",(0,r.jsx)(n.br,{}),"\n","Assume the file name is ingress-myapp.yaml:"]}),"\n",(0,r.jsx)(n.p,{children:"#kubectl apply -f ingress-myapp.yaml\ningress.extensions/ingress-myapp created"}),"\n",(0,r.jsx)(n.p,{children:"After all the steps above are done successfully, you can verify the edge ingress feature through the ingress controller NodePort service:"}),"\n",(0,r.jsx)(n.p,{children:"#curl xxx:32255/echo"}),"\n",(0,r.jsx)(n.p,{children:'"xxx" \trepresents any NodeIP in NodePool pool01\n"32255" \trepresents the NodePort which pool01 nginx ingress controller service exposes'}),"\n",(0,r.jsx)(n.p,{children:'It should return "echo from nodepool pool01" all the times.'})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{a:()=>i});var r=s(67294);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);