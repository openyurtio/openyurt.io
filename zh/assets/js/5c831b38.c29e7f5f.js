"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[28856],{66402:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"user-manuals/iot/edgex-foundry","title":"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907","description":"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u4f7f\u7528PlatformAdmin\u90e8\u7f72EdgeX\u7cfb\u7edf\u548cYurtIoTDock\u7ec4\u4ef6\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/iot/edgex-foundry.md","sourceDirName":"user-manuals/iot","slug":"/user-manuals/iot/edgex-foundry","permalink":"/zh/docs/next/user-manuals/iot/edgex-foundry","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/iot/edgex-foundry.md","tags":[],"version":"current","lastUpdatedBy":"tnsimon","lastUpdatedAt":1740095325000,"frontMatter":{"title":"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907"},"sidebar":"docs","previous":{"title":"Prometheus\u6536\u96c6\u8fb9\u7f18\u8bbe\u5907\u6570\u636e","permalink":"/zh/docs/next/user-manuals/observability/prometheus"},"next":{"title":"YurtHub Performance Test","permalink":"/zh/docs/next/test-report/yurthub-performance-test"}}');var r=o(74848),t=o(28453);const d={title:"\u4e91\u539f\u751f\u7ba1\u7406\u7aef\u8bbe\u5907"},i=void 0,l={},c=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u5b89\u88c5YurtIoTDock\u73af\u5883",id:"\u5b89\u88c5yurtiotdock\u73af\u5883",level:2},{value:"\u7aef\u8bbe\u5907\u5e73\u53f0\u7ba1\u7406",id:"\u7aef\u8bbe\u5907\u5e73\u53f0\u7ba1\u7406",level:2},{value:"1. \u521b\u5efa\u8282\u70b9\u6c60",id:"1-\u521b\u5efa\u8282\u70b9\u6c60",level:3},{value:"2. \u5728\u8282\u70b9\u6c60\u5185\u521b\u5efaIoT\u7cfb\u7edfPlatformAdmin",id:"2-\u5728\u8282\u70b9\u6c60\u5185\u521b\u5efaiot\u7cfb\u7edfplatformadmin",level:3},{value:"3. \u90e8\u7f72\u53ef\u9009\u7ec4\u4ef6",id:"3-\u90e8\u7f72\u53ef\u9009\u7ec4\u4ef6",level:3},{value:"4. \u4fee\u6539\u7ec4\u4ef6\u914d\u7f6e",id:"4-\u4fee\u6539\u7ec4\u4ef6\u914d\u7f6e",level:3},{value:"5. \u624b\u52a8\u6dfb\u52a0\u7ec4\u4ef6",id:"5-\u624b\u52a8\u6dfb\u52a0\u7ec4\u4ef6",level:3},{value:"\u914d\u7f6ePlatformAdmin",id:"\u914d\u7f6eplatformadmin",level:4},{value:"\u586b\u5199PlatformAdminFramework",id:"\u586b\u5199platformadminframework",level:4},{value:"\u7aef\u8bbe\u5907\u7ba1\u7406",id:"\u7aef\u8bbe\u5907\u7ba1\u7406",level:2},{value:"1. \u624b\u52a8\u6dfb\u52a0 device-virtual \u7ec4\u4ef6",id:"1-\u624b\u52a8\u6dfb\u52a0-device-virtual-\u7ec4\u4ef6",level:3},{value:"2. \u521b\u5efa Device, DeviceProfile",id:"2-\u521b\u5efa-device-deviceprofile",level:3},{value:"4. \u8bfb\u53d6\u8bbe\u5907\u751f\u6210\u7684\u6570\u636e",id:"4-\u8bfb\u53d6\u8bbe\u5907\u751f\u6210\u7684\u6570\u636e",level:3},{value:"5. \u66f4\u65b0\u8bbe\u5907\u5c5e\u6027",id:"5-\u66f4\u65b0\u8bbe\u5907\u5c5e\u6027",level:3}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u8bb2\u8ff0\u5982\u4f55\u5728\u5df2\u6709\u7684OpenYurt\u96c6\u7fa4\u4e0a\u4f7f\u7528PlatformAdmin\u90e8\u7f72EdgeX\u7cfb\u7edf\u548cYurtIoTDock\u7ec4\u4ef6\u3002\n\u5728 OpenYurt v1.4 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5347\u7ea7\u4e86\u539f\u6765\u7684 yurt-edgex-manager \u548c yurt-device-controller \u7ec4\u4ef6\u3002\u524d\u8005\u5df2\u7ecf\u5185\u7f6e\u4e8e yurt-manager \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199 Yaml \u6587\u4ef6\u6765\u521b\u5efa PlatformAdmin \u8d44\u6e90\uff0c\u7b80\u5355\u51e0\u884c\u914d\u7f6e\u5c31\u53ef\u4ee5\u5f80\u8282\u70b9\u6c60\u5185\u6784\u5efa\u4e00\u5957\u5b8c\u6574\u7684 EdgeX \u7cfb\u7edf\uff1b\u540e\u8005\u66f4\u540d\u4e3a yurt-iot-dock \uff0c\u4f1a\u5728 PlatformAdmin \u521b\u5efa\u65f6\u81ea\u52a8\u4e0b\u53d1\u5230\u8fb9\u7f18\u4fa7\uff0c\u5b9e\u73b0\u5e2e\u52a9\u7528\u6237\u4e00\u952e\u5b9e\u73b0\u7aef\u8bbe\u5907\u6258\u7ba1\u7684\u80fd\u529b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709OpenYurt\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528yurtadm\u5de5\u5177\u6765\u521d\u59cb\u5316\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u6216\u5c06\u4e00\u4e2aKubernetes\u96c6\u7fa4\u8f6c\u6362\u4e3aOpenYurt\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"OpenYurt v1.4.0+"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5b89\u88c5\u4e86",(0,r.jsx)(n.code,{children:"yurt-manager"}),"\u7ec4\u4ef6"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0emaster\u4e0d\u5728\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u7684\u8282\u70b9\u90fd\u9700\u8981\u90e8\u7f72coreDNS pod"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c06\u8bbf\u95eecoreDNS service\u7684\u6d41\u91cf\u6539\u4e3a\u8282\u70b9\u6c60\u5185\u95ed\u73af\uff0c\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/docs/tutorial/service-topology.md",children:"\u6559\u7a0b"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88c5yurtiotdock\u73af\u5883",children:"\u5b89\u88c5YurtIoTDock\u73af\u5883"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u4f7f\u7528PlatformAdmin\u6765\u90e8\u7f72yurt-iot-dock\uff0c\u9700\u8981\u5148\u5c06yurt-iot-dock\u76f8\u5173\u7684helm\u5305\u5b89\u88c5\u5230\u96c6\u7fa4\u4e2d\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"helm install yurt-iot-dock ./charts/yurt-iot-dock\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7aef\u8bbe\u5907\u5e73\u53f0\u7ba1\u7406",children:"\u7aef\u8bbe\u5907\u5e73\u53f0\u7ba1\u7406"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u521b\u5efa\u8282\u70b9\u6c60",children:"1. \u521b\u5efa\u8282\u70b9\u6c60"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\u521b\u5efa\u4e24\u4e2a\u8282\u70b9\u6c60\uff0c\u4e00\u4e2a\u662f\u540d\u4e3abeijing\u7684\u4e91\u7aef\u8282\u70b9\u6c60\uff0c\u4e00\u4e2a\u662f\u540d\u4e3ahangzhou\u7684\u8fb9\u7f18\u8282\u70b9\u6c60\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u521b\u5efabeijing\u8282\u70b9\u6c60\ncat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n\n# \u521b\u5efahangzhou\u8282\u70b9\u6c60\ncat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\nEOF\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u5c06\u6307\u5b9a\u7684\u8282\u70b9\u52a0\u5165\u8282\u70b9\u6c60\uff0c\u6807\u8bb0openyurt-worker\u8282\u70b9\u4e3a\u4e91\u7aef\u8282\u70b9\uff0c\u6807\u8bb0openyurt-worker2\u8282\u70b9\u4e3a\u8fb9\u7f18\u8282\u70b9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u5c06openyurt-worker\u6807\u8bb0\u4e3a\u4e91\u7aef\u8282\u70b9\nkubectl label node openyurt-worker apps.openyurt.io/nodepool=beijing\n# \u5c06openyurt-worker2\u6807\u8bb0\u4e3a\u8fb9\u7f18\u8282\u70b9\nkubectl label node openyurt-worker2 apps.openyurt.io/nodepool=hangzhou\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\u68c0\u67e5\u8282\u70b9\u6c60\u72b6\u6001\uff0c\u786e\u4fdd\u8282\u70b9\u6c60\u72b6\u6001\u6b63\u5e38"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u68c0\u67e5\u8282\u70b9\u6c60\u72b6\u6001\nkubectl get np\nNAME       TYPE    READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud   1            0               4d18h\nhangzhou   Edge    1            0               4d18h\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-\u5728\u8282\u70b9\u6c60\u5185\u521b\u5efaiot\u7cfb\u7edfplatformadmin",children:"2. \u5728\u8282\u70b9\u6c60\u5185\u521b\u5efaIoT\u7cfb\u7edfPlatformAdmin"}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u597d\u4f7f\u7528EdgeX\u7248\u672c\uff0c\u9009\u62e9\u5728hangzhou\u8282\u70b9\u6c60\u4e2d\u521b\u5efa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u5728\u8282\u70b9\u6c60hangzhou\u4e2d\u521b\u5efaminnesota\u7248\u672c\u7684EdgeX\ncat <<EOF | kubectl apply -f -\napiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\nEOF\n\n# \u68c0\u67e5\u90e8\u7f72\u60c5\u51b5\nkubectl get po\nNAME                                                              READY   STATUS    RESTARTS   AGE\nedgex-core-command-hangzhou-4j6pz-8668ff94d7-hqw2r                1/1     Running   0          61s\nedgex-core-common-config-bootstrapper-hangzhou-jnw2q-57bd99xr9p   1/1     Running   0          61s\nedgex-core-consul-hangzhou-6p9tj-798489c647-6xz4m                 1/1     Running   0          61s\nedgex-core-metadata-hangzhou-6l7v5-6f964fc4f-67f9p                1/1     Running   0          61s\nedgex-redis-hangzhou-cwgsw-5c7d7fc478-fsgp9                       1/1     Running   0          61s\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-\u90e8\u7f72\u53ef\u9009\u7ec4\u4ef6",children:"3. \u90e8\u7f72\u53ef\u9009\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524dv1.4.0\u7684PlatformAdmin\u652f\u6301\u901a\u8fc7components\u5b57\u6bb5\u4e00\u952e\u90e8\u7f72\u53ef\u9009\u7ec4\u4ef6\uff0c\u4e0b\u9762\u662f\u901a\u8fc7components\u5b57\u6bb5\u90e8\u7f72yurt-iot-dock\u3001edgex-device-virtual\u3001edgex-device-rest\u7684\u4f8b\u5b50"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53ef\u9009\u7ec4\u4ef6\u7684\u7ec4\u4ef6\u540d\u53c2\u8003",(0,r.jsx)(n.a,{href:"/zh/docs/next/reference/iot/components",children:"Component\u6587\u6863"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u5728\u521a\u624d\u90e8\u7f72\u7684PlatformAdmin\u4e4b\u4e0a\u589e\u52a0components\u5b57\u6bb5\ncat <<EOF | kubectl apply -f -\napiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n  - name: edgex-device-virtual\n  - name: edgex-device-rest\nEOF\n\n# \u53ef\u4ee5\u770b\u5230\u53ef\u9009\u7684components\u5df2\u7ecf\u90e8\u7f72\u8d77\u6765\u4e86\nkubectl get po\nNAME                                                              READY   STATUS    RESTARTS   AGE\nedgex-core-command-hangzhou-cwgs2-77bb5d9cdd-zp89r                1/1     Running   0          20m\nedgex-core-common-config-bootstrapper-hangzhou-bqhnb-57bd9c4q5q   1/1     Running   0          20m\nedgex-core-consul-hangzhou-5rl7c-66dbc9c7d7-dqvm8                 1/1     Running   0          20m\nedgex-core-metadata-hangzhou-srpff-dd6c6f9cb-2cj9k                1/1     Running   0          20m\nedgex-device-rest-hangzhou-v7p99-7b8bb4f5d4-kz8sq                 1/1     Running   0          7m49s\nedgex-device-virtual-hangzhou-ssz59-796f948c69-5k4tc              1/1     Running   0          7m49s\nedgex-redis-hangzhou-bk5g5-5fbdf6fffb-cmf6d                       1/1     Running   0          20m\nyurt-iot-dock-hangzhou-56f98-8549f848f5-v2pjn                     1/1     Running   0          7m49s\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-\u4fee\u6539\u7ec4\u4ef6\u914d\u7f6e",children:"4. \u4fee\u6539\u7ec4\u4ef6\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"PlatfromAdmin\u7ed9\u9ad8\u9636\u7528\u6237\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u5165\u53e3\uff0c\u6240\u6709PlatformAdmin\u7684\u914d\u7f6e\u90fd\u901a\u8fc7\u4e00\u4e2a\u540d\u4e3aplatformadmin-framework\u7684configmap\u63a7\u5236\uff0c\u901a\u8fc7\u4fee\u6539\u8fd9\u4e2aconfigmap\u7684\u503c\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u914d\u7f6e\uff0c\u4e0b\u9762\u662fplatformadmin-framework\u7684\u4e00\u4e2a\u4f8b\u5b50"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\ndata:\n  framework: |\n    components:\n    - deployment:\n        selector:\n          matchLabels:\n            app: edgex-core-command\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: edgex-core-command\n          spec:\n            containers:\n            - env:\n              - name: SERVICE_HOST\n                value: edgex-core-command\n              - name: EXTERNALMQTT_URL\n                value: tcp://edgex-mqtt-broker:1883\n              envFrom:\n              - configMapRef:\n                  name: common-variables\n              image: openyurt/core-command:3.0.0\n              imagePullPolicy: IfNotPresent\n              name: edgex-core-command\n              ports:\n              - containerPort: 59882\n                name: tcp-59882\n                protocol: TCP\n              resources: {}\n            hostname: edgex-core-command\n      name: edgex-core-command\n      service:\n        ports:\n        - name: tcp-59882\n          port: 59882\n          protocol: TCP\n          targetPort: 59882\n        selector:\n          app: edgex-core-command\n...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"5-\u624b\u52a8\u6dfb\u52a0\u7ec4\u4ef6",children:"5. \u624b\u52a8\u6dfb\u52a0\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u8003\u8651\u5230\u67d0\u4e9b\u7528\u6237\u53ef\u80fd\u9700\u8981\u65b0\u589e\u4e00\u4e9b\u81ea\u5df1\u7f16\u5199\u6216\u4fee\u6539\u7684\u7ec4\u4ef6\uff0cPlatformAdmin\u7684component\u673a\u5236\u4e5f\u652f\u6301\u7528\u6237\u65b0\u589e\u7ec4\u4ef6\u3002\u65b0\u589e\u7ec4\u4ef6\u9700\u8981\u9075\u5b88\u5982\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsx)(n.h4,{id:"\u914d\u7f6eplatformadmin",children:"\u914d\u7f6ePlatformAdmin"}),"\n",(0,r.jsx)(n.p,{children:"\u5728PlatformAdmin\u7684components\u5b57\u6bb5\u4e2d\u52a0\u5165\u9700\u8981\u65b0\u589e\u7684\u7ec4\u4ef6\u7684\u540d\u5b57\uff0c\u6bd4\u5982\u6211\u4eec\u60f3\u8981\u589e\u52a0\u4e00\u4e2a\u540d\u4e3anginx-demo\u7684\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u5728components\u5b57\u6bb5\u4e2d\u589e\u52a0nginx-demo\ncat <<EOF | kubectl apply -f -\napiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n  - name: edgex-device-virtual\n  - name: edgex-device-rest\n  - name: nginx-demo\nEOF\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u586b\u5199platformadminframework",children:"\u586b\u5199PlatformAdminFramework"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8eAutoCollector\u6536\u96c6\u7684\u6807\u51c6\u914d\u7f6e\u6587\u4ef6\u5e76\u4e0d\u5b58\u5728nginx-demo\u8fd9\u4e2a\u7ec4\u4ef6\uff0c\u6240\u4ee5platformadmin-framework\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u914d\u7f6e\uff0c\u8fd9\u65f6\u7528\u6237\u53ef\u4ee5\u624b\u52a8\u589e\u52a0\u8fd9\u4e2a\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# \u4f7f\u7528kubectl edit\u4fee\u6539configmap\u4e2d\u7684\u5185\u5bb9\nkubectl edit cm platformadmin-framework\n\n# \u65b0\u589enginx-demo\u914d\u5957\u7684deployment\u548cservice\napiVersion: v1\ndata:\n  framework: |\n    components:\n    - deployment:\n        selector:\n          matchLabels:\n            app: nginx-demo\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: nginx-demo\n          spec:\n            containers:\n            - image: nginx\n              imagePullPolicy: IfNotPresent\n              name: nginx-demo\n              ports:\n              - containerPort: 80\n                name: nginx\n                protocol: TCP\n              resources: {}\n            hostname: nginx-demo\n      name: nginx-demo\n      service:\n        ports:\n        - name: nginx\n          port: 80\n          protocol: TCP\n          targetPort: 80\n        selector:\n          app: nginx-demo\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4fdd\u5b58\u9000\u51fa\u540e\u53ef\u4ee5\u770b\u5230nginx-demo\u8fd9\u4e2a\u7ec4\u4ef6\u5df2\u7ecf\u88ab\u90e8\u7f72\u8d77\u6765\u4e86"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# deployment\u6210\u529f\u521b\u5efa\uff0cpod\u5df2\u7ecf\u6210\u529f\u90e8\u7f72\nkubectl get po\nNAME                                                              READY   STATUS    RESTARTS   AGE\nedgex-core-command-hangzhou-2mvhc-77bb5d9cdd-7xtgp                1/1     Running   0          4m17s\nedgex-core-common-config-bootstrapper-hangzhou-tp2qc-57bd9cpj8p   1/1     Running   0          4m17s\nedgex-core-consul-hangzhou-hhnvv-66dbc9c7d7-cp5c9                 1/1     Running   0          4m17s\nedgex-core-metadata-hangzhou-pd9b2-dd6c6f9cb-xzx45                1/1     Running   0          4m17s\nedgex-device-rest-hangzhou-l55qd-7b8bb4f5d4-s7pw6                 1/1     Running   0          4m17s\nedgex-device-virtual-hangzhou-ftrg9-796f948c69-rfpnk              1/1     Running   0          4m17s\nedgex-redis-hangzhou-9hnpn-5fbdf6fffb-vzh5k                       1/1     Running   0          4m17s\nnginx-demo-hangzhou-p5p2k-5cd7c897d6-49ss9                        1/1     Running   0          108s\nyurt-iot-dock-hangzhou-gg85j-8549f848f5-sbhmk                     1/1     Running   0          4m17s\n\n# \u5bf9\u5e94\u7684service\u4e5f\u6210\u529f\u521b\u5efa\nkubectl get svc\nNAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE\nedgex-core-command     ClusterIP   10.96.146.121   <none>        59882/TCP   4m54s\nedgex-core-consul      ClusterIP   10.96.39.123    <none>        8500/TCP    4m54s\nedgex-core-metadata    ClusterIP   10.96.58.12     <none>        59881/TCP   4m54s\nedgex-device-rest      ClusterIP   10.96.39.152    <none>        59986/TCP   4m54s\nedgex-device-virtual   ClusterIP   10.96.165.130   <none>        59900/TCP   4m54s\nedgex-redis            ClusterIP   10.96.159.68    <none>        6379/TCP    4m54s\nkubernetes             ClusterIP   10.96.0.1       <none>        443/TCP     8d\nnginx-demo             ClusterIP   10.96.40.228    <none>        80/TCP      2m25s\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u4e00\u952e\u79fb\u9664\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u8bdd\uff0c\u53ea\u9700\u8981\u5728components\u5b57\u6bb5\u4e2d\u53bb\u6389\u5bf9\u5e94\u7684name\u5c31\u884c\uff0cPlatformAdmin\u4f1a\u81ea\u52a8\u56de\u6536\u5bf9\u5e94\u540d\u5b57\u7684\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u5728components\u5b57\u6bb5\u4e2d\u5220\u9664nginx-demo\ncat <<EOF | kubectl apply -f -\napiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n  - name: edgex-device-virtual\n  - name: edgex-device-rest\n  # - name: nginx-demo\nEOF\n\n# \u53ef\u4ee5\u770b\u5230\u5bf9\u5e94\u7684deployment\u548cservice\u90fd\u56de\u6536\u4e86\nkubectl get deploy\nNAME                                                   READY   UP-TO-DATE   AVAILABLE   AGE\nedgex-core-command-hangzhou-2mvhc                      1/1     1            1           7m50s\nedgex-core-common-config-bootstrapper-hangzhou-tp2qc   1/1     1            1           7m50s\nedgex-core-consul-hangzhou-hhnvv                       1/1     1            1           7m50s\nedgex-core-metadata-hangzhou-pd9b2                     1/1     1            1           7m50s\nedgex-device-rest-hangzhou-l55qd                       1/1     1            1           7m50s\nedgex-device-virtual-hangzhou-ftrg9                    1/1     1            1           7m50s\nedgex-redis-hangzhou-9hnpn                             1/1     1            1           7m50s\nyurt-iot-dock-hangzhou-gg85j                           1/1     1            1           7m50s\n\nkubectl get svc\nNAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE\nedgex-core-command     ClusterIP   10.96.146.121   <none>        59882/TCP   8m1s\nedgex-core-consul      ClusterIP   10.96.39.123    <none>        8500/TCP    8m1s\nedgex-core-metadata    ClusterIP   10.96.58.12     <none>        59881/TCP   8m1s\nedgex-device-rest      ClusterIP   10.96.39.152    <none>        59986/TCP   8m1s\nedgex-device-virtual   ClusterIP   10.96.165.130   <none>        59900/TCP   8m1s\nedgex-redis            ClusterIP   10.96.159.68    <none>        6379/TCP    8m1s\nkubernetes             ClusterIP   10.96.0.1       <none>        443/TCP     8d\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\uff1a\u4e0d\u5efa\u8bae\u5728platformadmin-framework\u4e2d\u76f4\u63a5\u4fee\u6539\u7ec4\u4ef6\u540d\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u8131\u79bbplatformadmin\u7ba1\u63a7\uff01"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7aef\u8bbe\u5907\u7ba1\u7406",children:"\u7aef\u8bbe\u5907\u7ba1\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ee5\u865a\u62df\u8bbe\u5907\u4e3a\u4f8b\uff0c\u4ecb\u7ecd yurt-iot-dock \u5728\u7aef\u8bbe\u5907\u7ba1\u7406\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u624b\u52a8\u6dfb\u52a0-device-virtual-\u7ec4\u4ef6",children:"1. \u624b\u52a8\u6dfb\u52a0 device-virtual \u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u53ea\u9700\u90e8\u7f72\u4e00\u4e2a\u865a\u62df\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f device-virtual-go\u3002\n\u5b83\u53ef\u4ee5\u6a21\u62df\u4e0d\u540c\u7c7b\u578b\u7684\u8bbe\u5907\uff0c\u751f\u6210\u8bbe\u5907\u6570\u636e\uff0c\u7528\u6237\u53ef\u4ee5\u53d1\u9001\u547d\u4ee4\uff0c\u4ece\u8bbe\u5907\u83b7\u5f97\u54cd\u5e94\u6216\u5bf9\u8bbe\u5907\u6267\u884c\u63a7\u5236\u6307\u4ee4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u786e\u4fdd\u5728 PlatformAdmin \u6846\u67b6\u7684 configmap \u4e2d\u5b58\u5728 edgex-device-virtual\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# \u4f7f\u7528 kubectl edit \u83b7\u53d6 configmap \u4e2d\u7684\u5185\u5bb9\nkubectl get cm platformadmin-framework -o yaml\n\napiVersion: v1\ndata:\n  framework: |\n    components:\n    - deployment:\n        selector:\n          matchLabels:\n            app: edgex-device-virtual\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: edgex-device-virtual\n          spec:\n            containers:\n            - env:\n              - name: SERVICE_HOST\n                value: edgex-device-virtual\n              envFrom:\n              - configMapRef:\n                  name: common-variables\n              image: openyurt/device-virtual:3.0.0\n              imagePullPolicy: IfNotPresent\n              name: edgex-device-virtual\n              ports:\n              - containerPort: 59900\n                name: tcp-59900\n                protocol: TCP\n              resources: {}\n            hostname: edgex-device-virtual\n      name: edgex-device-virtual\n      service:\n        ports:\n        - name: tcp-59900\n          port: 59900\n          protocol: TCP\n          targetPort: 59900\n        selector:\n          app: edgex-device-virtual\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"device-virtual-go \u7ec4\u4ef6\u4f1a\u5728\u542f\u52a8\u65f6\u81ea\u52a8\u521b\u5efa\u5e76\u6ce8\u518c deviceservice\u30015 \u79cd\u4e0d\u540c\u7c7b\u578b\u7684 device \u53ca\u5176 deviceprofiles\uff0c\u800c yurt-iot-dock \u7ec4\u4ef6\u4f1a\u5c06\u5b83\u4eec\u90fd\u540c\u6b65\u5230 OpenYurt\u4e2d\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u7528 kubectl \u8fdb\u884c\u68c0\u67e5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"$ kubectl get deviceservice\nNAME                      NODEPOOL   SYNCED   AGE\nhangzhou-device-virtual   hangzhou   true     2d1h\n\n$ kubectl get device\nNAME                                     NODEPOOL   SYNCED   AGE\nhangzhou-random-binary-device            hangzhou   true     2d1h\nhangzhou-random-boolean-device           hangzhou   true     2d1h\nhangzhou-random-float-device             hangzhou   true     2d1h\nhangzhou-random-integer-device           hangzhou   true     2d1h\nhangzhou-random-unsignedinteger-device   hangzhou   true     2d1h\n\n$ kubectl get deviceprofile\nNAME                                     NODEPOOL   SYNCED   AGE\nhangzhou-random-binary-device            hangzhou   true     2d1h\nhangzhou-random-boolean-device           hangzhou   true     2d1h\nhangzhou-random-float-device             hangzhou   true     2d1h\nhangzhou-random-integer-device           hangzhou   true     2d1h\nhangzhou-random-unsignedinteger-device   hangzhou   true     2d1h\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-\u521b\u5efa-device-deviceprofile",children:"2. \u521b\u5efa Device, DeviceProfile"}),"\n",(0,r.jsx)(n.p,{children:"\u9664\u4e86\u901a\u8fc7\u9884\u914d\u7f6e\u5728 edgex \u4e2d\u540c\u6b65\u8bbe\u5907\u3001\u8bbe\u5907\u914d\u7f6e\u6587\u4ef6\u548c\u8bbe\u5907\u670d\u52a1\u5916\uff0cOpenyurt \u4fa7\u8fd8\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u901a\u7528\u7684\u65b9\u6cd5\u6765\u521b\u5efa\u8bbe\u5907\u548c\u8bbe\u5907\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa DeviceProfile"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: iot.openyurt.io/v1alpha1\nkind: DeviceProfile\nmetadata:\n  name: openyurt-created-random-boolean-deviceprofile\nspec:\n  description: Example of Device-Virtual Created By OpenYurt\n  deviceCommands:\n  - isHidden: false\n    name: WriteBoolValue\n    readWrite: W\n    resourceOperations:\n    - defaultValue: ""\n      deviceResource: Bool\n    - defaultValue: "false"\n      deviceResource: EnableRandomization_Bool\n  - isHidden: false\n    name: WriteBoolArrayValue\n    readWrite: W\n    resourceOperations:\n    - defaultValue: ""\n      deviceResource: BoolArray\n    - defaultValue: "false"\n      deviceResource: EnableRandomization_BoolArray\n  deviceResources:\n  - description: used to decide whether to re-generate a random value\n    isHidden: true\n    name: EnableRandomization_Bool\n    properties:\n      defaultValue: "true"\n      readWrite: W\n      valueType: Bool\n  - description: Generate random boolean value\n    isHidden: false\n    name: Bool\n    properties:\n      defaultValue: "true"\n      readWrite: RW\n      valueType: Bool\n  - description: used to decide whether to re-generate a random value\n    isHidden: true\n    name: EnableRandomization_BoolArray\n    properties:\n      defaultValue: "true"\n      readWrite: W\n      valueType: Bool\n  - description: Generate random boolean array value\n    isHidden: false\n    name: BoolArray\n    properties:\n      defaultValue: \'[true]\'\n      readWrite: RW\n      valueType: BoolArray\n  labels:\n  - openyurt-created-device-virtual-example\n  manufacturer: OpenYurt Community\n  model: OpenYurt-Device-Virtual-01\n  nodePool: hangzhou\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64 DeviceProfile \u53ea\u662f device-virtual-go \u4e3a\u6f14\u793a\u76ee\u7684\u800c\u521b\u5efa\u7684 random-boolean DeviceProfile \u7684\u526f\u672c\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u521b\u5efa Device"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u9884\u5148\u540c\u6b65\u7684 DeviceService \u548c\u4e0a\u9762\u521b\u5efa\u7684 DeviceProfile \u521b\u5efa\u4e00\u4e2a\u865a\u62df\u7684bool Device\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: iot.openyurt.io/v1alpha1\nkind: Device\nmetadata:\n  name: openyurt-created-random-boolean-device\nspec:\n  adminState: UNLOCKED\n  description: Example of Device Virtual\n  labels:\n  - openyurt-created-device-virtual-example\n  managed: true\n  nodePool: hangzhou\n  notify: true\n  operatingState: UP\n  profileName: openyurt-created-random-boolean-deviceprofile\n  protocols:\n    other:\n      Address: openyurt-created-device-virtual-bool-01\n      Port: "300"\n  serviceName: device-virtual\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 kubectl \u67e5\u770b OpenYurt \u4e2d\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deviceprofile openyurt-created-random-boolean-deviceprofile\nNAME                                            NODEPOOL   SYNCED   AGE\nopenyurt-created-random-boolean-deviceprofile   hangzhou   true     15h\n\n$ kubectl get device openyurt-created-random-boolean-device\nNAME                                     NODEPOOL   SYNCED   AGE\nopenyurt-created-random-boolean-device   hangzhou   true     14h\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-\u8bfb\u53d6\u8bbe\u5907\u751f\u6210\u7684\u6570\u636e",children:"4. \u8bfb\u53d6\u8bbe\u5907\u751f\u6210\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u5df2\u7ecf\u5efa\u7acb\u4e86\u73af\u5883\u5e76\u6a21\u62df\u4e86\u4e00\u4e2a\u865a\u62df\u7684\u5e03\u5c14\u8bbe\u5907\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 OpenYurt \u4e2d\uff0c\u6211\u4eec\u53ea\u9700\u50cf\u8fd9\u6837\u68c0\u67e5\u8bbe\u5907\u8d44\u6e90\u5bf9\u8c61\u7684\u72b6\u6001\u5b50\u8d44\u6e90\uff0c\u5c31\u80fd\u8f7b\u677e\u83b7\u53d6\u8bbe\u5907\u751f\u6210\u7684\u6700\u65b0\u6570\u636e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ kubectl get device openyurt-created-random-boolean-device -o yaml\napiVersion: iot.openyurt.io/v1alpha1\nkind: Device\nmetadata:\n  annotations:\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"iot.openyurt.io/v1alpha1","kind":"Device","metadata":{"annotations":{},"name":"openyurt-boolean-device","namespace":"default"},"spec":{"adminState":"UNLOCKED","description":"Example of Device Virtual","labels":["openyurt-device-boolean-virtual"],"managed":true,"nodePool":"hangzhou","notify":true,"operatingState":"UP","profileName":"Random-Boolean-Device","protocols":{"other":{"Address":"openyurt-device-boolean-virtual-01","Port":"301"}},"serviceName":"openyurt-boolean-device"}}\n  creationTimestamp: "2023-09-14T06:25:10Z"\n  finalizers:\n  - iot.openyurt.io/device\n  generation: 2\n  name: openyurt-boolean-device\n  namespace: default\n  resourceVersion: "1717015"\n  uid: 6677eb4a-b644-4d5d-970a-1446f141a353\nspec:\n  adminState: UNLOCKED\n  description: Example of Device Virtual\n  deviceProperties:\n    Bool:\n      desiredValue: "true"\n      name: Bool\n  labels:\n  - openyurt-created-device-virtual-example\n  managed: false\n  nodePool: hangzhou\n  notify: true\n  operatingState: UP\n  profileName: openyurt-created-random-boolean-deviceprofile\n  protocols:\n    other:\n      Address: openyurt-created-device-virtual-bool-01\n      Port: "300"\n  serviceName: device-virtual\nstatus:\n  adminState: UNLOCKED\n  deviceProperties:\n    Bool:\n      actualValue: "true"\n      getURL: http://edgex-core-command:59882/api/v3/device/name/openyurt-boolean-device/Bool\n      name: Bool\n    BoolArray:\n      actualValue: \'[true, true, true, false, false]\'\n      getURL: http://edgex-core-command:59882/api/v3/device/name/openyurt-boolean-device/BoolArray\n      name: BoolArray\n  edgeId: 5e63effd-deeb-4505-890e-17ec32f02511\n  operatingState: UP\n  synced: true\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"deviceProperties \u663e\u793a\u8be5\u8bbe\u5907\u7684\u6240\u6709\u5c5e\u6027\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0cBool \u5c5e\u6027\u7684\u6700\u65b0\u503c\u662f false\uff0c\u8be5\u503c\u662f\u4ece EdgeX rest api ",(0,r.jsx)(n.a,{href:"http://edgex-core-command:59882/api/v2/device/name/openyurt-created-random-boolean-device/Bool",children:"http://edgex-core-command:59882/api/v2/device/name/openyurt-created-random-boolean-device/Bool"})," \u83b7\u53d6\u7684\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"5-\u66f4\u65b0\u8bbe\u5907\u5c5e\u6027",children:"5. \u66f4\u65b0\u8bbe\u5907\u5c5e\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8981\u901a\u8fc7\u66f4\u65b0\u8bbe\u5907\u7684\u53ef\u5199\u5c5e\u6027\u6765\u63a7\u5236\u8be5\u8bbe\u5907\uff0c\u5e94\u9996\u5148\u5c06 Device.Spec.Managed \u5b57\u6bb5\u8bbe\u7f6e\u4e3a true\uff0c\u4ee5\u8868\u793a yurt-iot-dock \u63a5\u7ba1\u8bbe\u5907\uff0c\u5426\u5219\u6240\u6709\u66f4\u65b0\u64cd\u4f5c\u90fd\u5c06\u88ab\u5ffd\u7565\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5c06\u8bbe\u5907\u7684 managed \u5b57\u6bb5\u8bbe\u7f6e\u4e3a true"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'kubectl patch device openyurt-created-random-boolean-device -p \'{"spec":{"managed":true}}\'  --type=merge\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u66f4\u6539\u8bbe\u5907\u7684\u7ba1\u7406\u72b6\u6001"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'\u7ba1\u7406\u72b6\u6001\uff08\u53c8\u79f0 admin \u72b6\u6001\uff09\u53ef\u7531\u4eba\u5de5\u6216\u5176\u4ed6\u7cfb\u7edf\u63a7\u5236\u8bbe\u5907\u670d\u52a1\u3002\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u4e3a "\u9501\u5b9a"\uff08LOCKED\uff09\u6216 "\u89e3\u9501"\uff08UNLOCKED\uff09\u3002\u5f53\u8bbe\u5907\u670d\u52a1\u88ab\u8bbe\u7f6e\u4e3a\u9501\u5b9a\u72b6\u6001\u65f6\uff0c\u5b83\u4e0d\u80fd\u54cd\u5e94\u4efb\u4f55\u547d\u4ee4\u8bf7\u6c42\uff0c\u4e5f\u4e0d\u80fd\u4ece\u8bbe\u5907\u53d1\u9001\u6570\u636e\u3002'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'kubectl patch device openyurt-created-random-boolean-device -p \'{"spec":{"adminState":"UNLOCKED"}}\'  --type=merge\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8bbe\u7f6e\u8bbe\u5907\u5c5e\u6027\u4ee5\u63a7\u5236/\u66f4\u65b0\u8bbe\u5907"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'kubectl patch device openyurt-created-random-boolean-device --type=merge -p \'{"spec":{"managed":true,"deviceProperties":{"Bool": {"name":"Bool", "desiredValue":"false"}}}}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u5c06 Bool DeviceProperty \u503c\u8bbe\u7f6e\u4e3a false\uff0cyurt-iot-dock \u5c31\u4f1a\u89e6\u53d1 EdgeX \u547d\u4ee4\u5e76\u66f4\u6539\u8bbe\u5907\u5c5e\u6027\u3002\u6211\u4eec\u53ef\u4ee5\u591a\u6b21\u89c2\u5bdf\u8bbe\u5907\u7684\u72b6\u6001\u6765\u68c0\u67e5\u8fd9\u4e00\u70b9\uff0c\u4f60\u4f1a\u53d1\u73b0\u8be5\u503c\u59cb\u7ec8\u4e3a false\uff0c\u9664\u975e\u4f60\u518d\u6b21\u5c06\u8be5\u5c5e\u6027\u6539\u4e3a true\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"watch \"kubectl get device openyurt-created-random-boolean-device -o json | jq '.status.deviceProperties.Bool.actualValue'\"\n\n# output\nEvery 2.0s: kubectl get device openyurt-boolean-device -o json | jq '.status.deviceProperties.Bool.actualValue'                                VM-16-6-ubuntu: Sat Sep 16 16:39:58 2023\n\n\"false\"\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>i});var a=o(96540);const r={},t=a.createContext(r);function d(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);