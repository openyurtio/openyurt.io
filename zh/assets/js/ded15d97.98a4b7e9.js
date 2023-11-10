"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[2627],{26772:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var t=l(85893),a=l(11151);const r={slug:"Enable-MetalLB-in-OpenYurt",title:"Edge LoadBalancer service support based on MetalLB",authors:["zzguang"],tags:["openyurt"]},s=void 0,i={permalink:"/zh/blog/Enable-MetalLB-in-OpenYurt",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2022-06-28-Enable-Edge-LoadBalancer-Service-based-on-MetalLB.md",source:"@site/blog/2022-06-28-Enable-Edge-LoadBalancer-Service-based-on-MetalLB.md",title:"Edge LoadBalancer service support based on MetalLB",description:"\u80cc\u666f\u4ecb\u7ecd",date:"2022-06-28T00:00:00.000Z",formattedDate:"2022\u5e746\u670828\u65e5",tags:[{label:"openyurt",permalink:"/zh/blog/tags/openyurt"}],readingTime:10.7,hasTruncateMarker:!0,authors:[{name:"zzguang",title:"Reviewer of OpenYurt",url:"https://github.com/zzguang",imageURL:"https://github.com/zzguang.png",key:"zzguang"}],frontMatter:{slug:"Enable-MetalLB-in-OpenYurt",title:"Edge LoadBalancer service support based on MetalLB",authors:["zzguang"],tags:["openyurt"]},unlisted:!1,nextItem:{title:"Kubernetes\u4e0eOpenYurt\u65e0\u7f1d\u8f6c\u6362\uff08\u547d\u4ee4\u5f0f\uff09",permalink:"/zh/blog/How-to-use-yurtctl-convert-revert"}},c={authorsImageUrls:[void 0]},o=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u521d\u8bc6MetalLB",id:"\u521d\u8bc6metallb",level:2},{value:"\u4e24\u4e2a\u4efb\u52a1",id:"\u4e24\u4e2a\u4efb\u52a1",level:3},{value:"\u4e24\u7c7b\u7ec4\u4ef6",id:"\u4e24\u7c7b\u7ec4\u4ef6",level:3},{value:"\u4e24\u79cd\u6a21\u5f0f",id:"\u4e24\u79cd\u6a21\u5f0f",level:3},{value:"\u4e24\u4e2a\u914d\u7f6e",id:"\u4e24\u4e2a\u914d\u7f6e",level:3},{value:"\u90e8\u7f72MetalLB",id:"\u90e8\u7f72metallb",level:2},{value:"\u4f7f\u7528MetalLB",id:"\u4f7f\u7528metallb",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u867d\u7136\u4e91\u7aef\u5df2\u7ecf\u5177\u5907\u4e86\u8f83\u4e3a\u5168\u9762\u7684\u4e91\u539f\u751f\u80fd\u529b\uff0c\u4f46\u8fb9\u7f18\u4fa7\u7531\u4e8e\u7279\u5b9a\u7684\u7f51\u7edc\u73af\u5883\u53ca\u5e94\u7528\u573a\u666f\u7684\u9650\u5236\uff0c\u5f80\u5f80\u65e0\u6cd5\u63d0\u4f9b\u50cf\u4e91\u7aef\u4e00\u6837\u4e30\u5bcc\u7684\u80fd\u529b\uff0c\u800c\u5b9e\u9645\u4e0a\u7528\u6237\u4e1a\u52a1\u5e94\u7528\u7684\u4e3b\u6218\u573a\u5374\u5728\u8fb9\u7f18\u4fa7\uff0c\n\u8fd9\u5c31\u5bfc\u81f4\u8fb9\u7f18\u4fa7\u5728\u4f7f\u7528\u4e91\u539f\u751f\u80fd\u529b\u7684\u65f6\u5019\u6216\u591a\u6216\u5c11\u5b58\u5728\u4e00\u4e9bgaps\uff0c\u800c\u5982\u4f55\u89e3\u51b3\u8fd9\u4e9bgaps\u4e5f\u6210\u4e3a\u4e91\u8fb9\u534f\u540c\u57fa\u7840\u8bbe\u65bd\u8f6f\u4ef6\u529b\u6c42\u89e3\u51b3\u7684\u5173\u952e\u95ee\u9898\u3002\u672c\u6587\u9488\u5bf9\u8fb9\u7f18\u4fa7\u670d\u52a1\u66b4\u9732\u7ed9\u96c6\u7fa4\u5916\u8bbf\u95ee\u7684\u573a\u666f\uff0c\u6765\u63a2\u8ba8\u4e00\u4e0b\u5728\nOpenYurt\u8fb9\u7f18\u4fa7\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u7684\u65b9\u6cd5\uff0c\u5e0c\u671b\u80fd\u8d77\u5230\u629b\u7816\u5f15\u7389\u7684\u6548\u679c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u539f\u751fKubernetes\u96c6\u7fa4\u4e2d\uff0c\u5982\u679c\u60f3\u5c06\u670d\u52a1\u66b4\u9732\u51fa\u6765\u4f9b\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee\uff0c\u901a\u5e38\u53ef\u4ee5\u8003\u8651\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HostNetwork"}),"\n",(0,t.jsx)(n.li,{children:"ExternalIPs"}),"\n",(0,t.jsx)(n.li,{children:"NodePort"}),"\n",(0,t.jsx)(n.li,{children:"LoadBalancer"}),"\n",(0,t.jsx)(n.li,{children:"Ingress"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\u524d\u4e09\u79cd\u65b9\u5f0f\uff0c\u7531\u4e8e\u81ea\u8eab\u5b58\u5728\u4e00\u5b9a\u7684\u5c40\u9650\u6027\uff0c\u5728\u6761\u4ef6\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u5e38\u7528\u6237\u66f4\u503e\u5411\u4e8e\u9009\u62e9\u540e\u4e24\u79cd\u65b9\u5f0f\u3002\u800c\u5bf9Ingress\u65b9\u5f0f\u800c\u8a00\uff0c\u4e91\u7aefIngress\u529f\u80fd\u901a\u5e38\u4f1a\u642d\u914d\u4e91\u7aefSLB\u670d\u52a1\u4e00\u8d77\u4f7f\u7528\uff0c\nSLB\u8d1f\u8d23\u4ece\u7528\u6237\u8bf7\u6c42\u5230\u8282\u70b9\u7ef4\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u800cIngress\u8d1f\u8d23\u4ece\u8282\u70b9\u5230pod\u7ef4\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u4ece\u7528\u6237\u8bf7\u6c42\u5230\u5e94\u7528pod\u7684\u5168\u94fe\u8def\u7684\u8d1f\u8f7d\u5747\u8861\u529f\u80fd\u3002\u7136\u800c\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u7531\u4e8e\u8fb9\u7f18\u4fa7\u5e76\u4e0d\u5177\u5907\u4e91\u7aefSLB\u670d\u52a1\u7684\u80fd\u529b\uff0c\u8fb9\u7f18Ingress\u6216\u8fb9\u7f18\u5e94\u7528\u65e0\u6cd5\u66b4\u9732LoadBalancer\u7c7b\u578b\u7684\u670d\u52a1\u4f9b\u96c6\u7fa4\u5916\u8bbf\u95ee\uff0c\u8fd9\u4e5f\u6210\u4e3a\u4e86\u8fb9\u7f18\u4fa7\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u7684\u4e00\u5927\u75db\u70b9\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u75db\u70b9\uff0c\u76ee\u524d\u5728\u5f00\u6e90\u793e\u533a\uff0c\u6709\u51e0\u4e2a\u65b9\u6848\u53ef\u4f9b\u9009\u62e9\uff1aMetalLB, PureLB\u548cOpenELB\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["MetalLB:  ",(0,t.jsx)(n.a,{href:"https://github.com/metallb",children:"https://github.com/metallb"})]}),"\n",(0,t.jsxs)(n.li,{children:["PureLB:   ",(0,t.jsx)(n.a,{href:"https://github.com/purelb",children:"https://github.com/purelb"})]}),"\n",(0,t.jsxs)(n.li,{children:["OpenELB:  ",(0,t.jsx)(n.a,{href:"https://github.com/openelb",children:"https://github.com/openelb"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u4e8e\u4e09\u4e2a\u9879\u76ee\u4e4b\u95f4\u7684\u6bd4\u8f83\uff0c\u53ef\u4ee5\u4ece\u7f51\u4e0a\u67e5\u5230\u4e00\u4e9b\u76f8\u5173\u4ecb\u7ecd\uff0c\u6574\u4f53\u6765\u8bf4\uff0c\u5b83\u4eec\u5b9e\u73b0\u7684\u529f\u80fd\u5927\u540c\u5c0f\u5f02\uff0c\u4ece\u9879\u76ee\u6210\u719f\u5ea6\u53ca\u6d41\u884c\u5ea6\u7684\u89d2\u5ea6\u8003\u8651\uff0c\u6211\u4eec\u9009\u62e9\u4ee5MetalLB\u4e3a\u4f8b\uff0c\u63a2\u8ba8\u4e00\u4e0b\u5982\u4f55\u901a\u8fc7MetalLB\u5728OpenYurt\n\u8fb9\u7f18\u4fa7\u5b9e\u73b0\u5bf9LoadBalancer\u7c7b\u578bservice\u7684\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u521d\u8bc6metallb",children:"\u521d\u8bc6MetalLB"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e24\u4e2a\u4efb\u52a1",children:"\u4e24\u4e2a\u4efb\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"MetalLB\u7684\u5de5\u4f5c\u539f\u7406\u53ef\u4ee5\u603b\u4f53\u5f52\u7eb3\u4e3a\u5b8c\u6210\u4e24\u4e2a\u4efb\u52a1\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1\uff09. \u4e3aLoadBalancer\u7c7b\u578b\u7684service\u5206\u914d\u5916\u7f51\u53ef\u8bbf\u95ee\u7684IP\u5730\u5740\n2\uff09. \u5206\u914dIP\u5730\u5740\u540e\uff0c\u8ba9\u96c6\u7fa4\u5916\u90e8\u77e5\u6653\u8be5IP\u5730\u5740\u5b58\u5728\u4e8e\u96c6\u7fa4\u4e2d\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e24\u7c7b\u7ec4\u4ef6",children:"\u4e24\u7c7b\u7ec4\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"MetalLB\u901a\u8fc7\u4e24\u7c7b\u7ec4\u4ef6\u5b9e\u73b0\u4e0a\u8ff0\u4efb\u52a1\uff1aController\u548cSpeaker"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Controller\u8d1f\u8d23\u76d1\u542cservice\u7684\u53d8\u5316\uff0c\u4e3aLoadBalancer\u7c7b\u578b\u7684service\u5206\u914dIP\u5730\u5740\u5e76\u8fdb\u884cIP\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002\nSpeaker\u5219\u4f9d\u636eservice\u7684\u53d8\u5316\uff0c\u6309\u5177\u4f53\u7684\u534f\u8bae\u53d1\u8d77\u76f8\u5e94\u7684\u5e7f\u64ad\u6216\u5e94\u7b54\uff0c\u6839\u636e\u5de5\u4f5c\u6a21\u5f0f\uff08Layer2/BGP\uff09\u7684\u4e0d\u540c\uff0c\u53ef\u91c7\u7528Leader\u8282\u70b9\u6216\u8d1f\u8f7d\u5747\u8861\u7684\u65b9\u5f0f\u6765\u54cd\u5e94\u8bf7\u6c42\uff0c\n\u4ece\u800c\u5b9e\u73b0\u4e86\u5c06\u5206\u914d\u7684IP\u5730\u5740\u8ba9\u96c6\u7fa4\u5916\u77e5\u6653\u7684\u76ee\u7684\u3002\u5176\u4e2dController\u662f\u4ee5Deployment\u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u800cSpeaker\u5219\u662f\u4ee5Daemonset\u7684\u65b9\u5f0f\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d\u5404\u4e2a\u8282\u70b9\u4e0a\u3002\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e24\u79cd\u6a21\u5f0f",children:"\u4e24\u79cd\u6a21\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"MetalLB\u6709\u4e24\u79cd\u5de5\u4f5c\u6a21\u5f0f\uff1aLayer2\u548cBGP"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Layer2\u6a21\u5f0f\u6307\u7684\u662f\u9009\u53d6\u96c6\u7fa4\u4e2d\u67d0\u4e2a\u8282\u70b9\u4f5c\u4e3aLeader\u6765\u63a5\u6536\u6240\u6709\u5bf9LoadBalancer service\u7684\u8bbf\u95ee\u6d41\u91cf\uff0c\u5b83\u4f7f\u7528\u6807\u51c6\u7684\u5730\u5740\u53d1\u73b0\u534f\u8bae\u5b9e\u73b0\u670d\u52a1IP\u5bf9\u96c6\u7fa4\u5916\u53ef\u8fbe\u3002\nBGP\u6a21\u5f0f\u6307\u7684\u662f\u5728\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u4e0e\u5468\u8fb9\u8fde\u63a5\u7684\u8def\u7531\u5668\u5efa\u7acbBGP\u4f1a\u8bdd\uff0c\u5e76\u544a\u77e5\u8def\u7531\u5668\u5982\u4f55\u8f6c\u53d1\u6d41\u91cf\u5230LoadBalancer service\u5bf9\u5e94\u7684IP\u5730\u5740\u3002\n\nLayer2\u6a21\u5f0f\u548cBGP\u6a21\u5f0f\u5404\u6709\u4f18\u7f3a\u70b9\uff1a\nLayer2\u6a21\u5f0f\u7684\u4f18\u70b9\u5728\u4e8e\u5176\u666e\u9002\u6027\uff0c\u5b83\u53ef\u4ee5\u5728\u4efb\u610f\u4ee5\u592a\u7f51\u73af\u5883\u4e0b\u5de5\u4f5c\uff0c\u4e0d\u4f9d\u8d56\u7279\u5b9a\u7684\u786c\u4ef6\uff0c\u751a\u81f3\u4e0d\u9700\u8981\u8def\u7531\u5668\u3002\n\u7f3a\u70b9\u662f\u5b83\u5e76\u672a\u5b9e\u73b0\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u6240\u6709\u5bf9service\u7684\u8bbf\u95ee\u6d41\u91cf\u90fd\u5c06\u8def\u7531\u5230Leader\u8282\u70b9\u4e0a\uff0c\u518d\u7531\u8be5\u8282\u70b9\u4e0a\u7684kube-prox\u5c06\u6d41\u91cf\u5206\u53d1\u5230\u5bf9\u5e94\u7684\u540e\u7aefpod\u4e0a\uff0c\n\u800c\u5f53Leader\u8282\u70b9\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u4f1a\u5207\u6362\u5230\u5176\u4ed6\u8282\u70b9\u63a5\u7ba1\u670d\u52a1\uff0c\u56e0\u6b64Layer2\u6a21\u5f0f\u5b58\u5728\u5355\u8282\u70b9\u6d41\u91cf\u74f6\u9888\u53ca\u8282\u70b9\u6545\u969c\u5207\u6362\u4e0d\u53ca\u65f6\u7684\u5c40\u9650\u6027\u3002\nBGP\u6a21\u5f0f\u7684\u4f18\u52bf\u5728\u4e8e\u5b83\u5b9e\u73b0\u4e86\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u6d41\u91cf\u4e0d\u518d\u50cfLayer2\u6a21\u5f0f\u4e00\u6837\u53ea\u80fd\u8def\u7531\u5230Leader\u8282\u70b9\uff0c\u800c\u662f\u96c6\u7fa4\u4e2d\u6240\u6709\u8282\u70b9\u90fd\u6709\u673a\u4f1a\u53c2\u4e0e\u6d41\u91cf\u8f6c\u53d1\u3002\n\u5176\u7f3a\u70b9\u4e00\u662f\u4f9d\u8d56\u786c\u4ef6\u8def\u7531\u5668\u8bbe\u5907\uff0c\u4e8c\u662f\u65e0\u6cd5\u4f18\u96c5\u7684\u5e94\u5bf9\u8282\u70b9IP\u5730\u5740\u540e\u7aef\u96c6\u7684\u53d8\u5316\uff0c\u5f53\u96c6\u7fa4\u6709\u8282\u70b9\u5b95\u673a\u65f6\uff0c\u4e0eLoadBalancer service\u5173\u8054\u7684\u6240\u6709\u8fde\u63a5\u90fd\u5c06\u4e2d\u65ad\u3002\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e24\u4e2a\u914d\u7f6e",children:"\u4e24\u4e2a\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u4ecb\u7ecd\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4f7f\u7528MetalLB\u7684\u65f6\u5019\uff0c\u7528\u6237\u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u4e24\u4e2a\u914d\u7f6e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1\uff09. \u914d\u7f6eIP\u5730\u5740\u6c60\uff0c\u4f9bMetalLB\u7ed9LoadBalancer service\u5206\u914dIP\u5730\u5740\u65f6\u4f7f\u7528\n2\uff09. \u914d\u7f6eMetalLB\u7684\u5de5\u4f5c\u6a21\u5f0f\uff0c\u9009\u62e9\u91c7\u7528Layer2\u6216\u8005BGP\u6a21\u5f0f\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u90e8\u7f72metallb",children:"\u90e8\u7f72MetalLB"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd0\u884cMetalLB\u73af\u5883\u8981\u6c42\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1). \u8fd0\u884cKubernetes 1.13.0\u6216\u66f4\u9ad8\u7248\u672c\u7684\u96c6\u7fa4\n2). \u96c6\u7fa4\u7f51\u7edc\u914d\u7f6e\uff0cMetalLB\u517c\u5bb9\u5927\u90e8\u5206\u7f51\u7edcCNI\u65b9\u6848\uff0c\u4f46\u5bf9\u6709\u4e9bCNI\u7684\u517c\u5bb9\u53ef\u80fd\u5b58\u5728\u4e2a\u522b\u95ee\u9898\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\uff1a\n    https://metallb.universe.tf/installation/network-addons/\n3). \u4f9bMetalLB\u4f7f\u7528\u7684\u4e00\u7ec4IP\u5730\u5740\n4). \u5982\u679c\u4f7f\u7528BGP\u6a21\u5f0f\uff0c\u60a8\u8fd8\u9700\u8981\u4e00\u4e2a\u6216\u591a\u4e2a\u80fd\u591f\u652f\u6301BGP\u534f\u8bae\u7684\u8def\u7531\u5668\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u6211\u4eec\u4ee5k8s 1.18.20\uff0c MetalLB 0.11.0\u4e3a\u4f8b\u6765\u5177\u4f53\u770b\u4e00\u4e0bMetalLB\u5728OpenYurt\u73af\u5883\u4e0b\u7684\u90e8\u7f72\u548c\u7528\u6cd5\u3002",(0,t.jsx)(n.br,{}),"\n","\u8981\u90e8\u7f72MetalLB\u5230OpenYurt\u96c6\u7fa4\u7684\u8fb9\u7f18\u4fa7\uff0c\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4f9b\u9009\u62e9\uff0c\u65e0\u8bba\u9009\u62e9\u4f55\u79cd\u65b9\u5f0f\uff0c\u90e8\u7f72MetalLB\u610f\u5473\u7740\u90e8\u7f72\u4ee5\u4e0b\u8d44\u6e90\u5230\u96c6\u7fa4\u4e2d\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1\uff09. \u521b\u5efametallb-system namespace\n2\uff09. \u90e8\u7f72MetalLb Controller Deployment\uff0c\u5b83\u4f5c\u7528\u4e8e\u96c6\u7fa4\u8303\u56f4\uff0c\u8d1f\u8d23\u4e3a\u76f8\u5173service\u5206\u914dIP\u5730\u5740\n3) . \u90e8\u7f72MetalLb Speaker Daemonset\u5230\u5404\u4e2a\u8282\u70b9\u4e0a\uff0c\u5b83\u8d1f\u8d23\u6839\u636e\u7528\u6237\u9009\u62e9\u7684\u5de5\u4f5c\u6a21\u5f0f\u4f7f\u7528\u5bf9\u5e94\u7684\u534f\u8bae\u8ba9service\u5bf9\u5916\u53ef\u8fbe\n4) . \u90e8\u7f72Controller\u548cSpeaker\u5bf9\u5e94\u7684service account\u4ee5\u53ca\u7ec4\u4ef6\u8fd0\u884c\u6240\u9700\u7684RBAC\u6743\u9650\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u6211\u4eec\u4e0d\u9700\u8981\u5728\u4e91\u7aef\u90e8\u7f72\uff0c\u6211\u4eec\u9700\u8981\u9488\u5bf9\u539f\u751f\u7684MetalLB\u7a0d\u4f5c\u8c03\u6574\uff0c\u786e\u4fdd\u76f8\u5173\u8d44\u6e90\u53ea\u4f1a\u90e8\u7f72\u5230\u8fb9\u7f18\u4fa7\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u5c31\u4ee5Manifest\u90e8\u7f72\u65b9\u5f0f\u4e3a\u4f8b\uff0c\u770b\u4e00\u4e0b\u5982\u4f55\u90e8\u7f72MetalLB\u5230OpenYurt\u96c6\u7fa4\u4e2d\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u521b\u5efametallb-system namespace:\n    kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/namespace.yaml\n\n\u62c9\u53d6metallb yaml\uff1a\n    wget https://raw.githubusercontent.com/metallb/metallb/v0.11.0/manifests/metallb.yaml\n\n\u4fee\u6539metallb.yaml, Controller\u548cSpeaker\u7684nodeSelector\u4e2d\u6dfb\u52a0\u53ea\u90e8\u7f72\u5230\u8fb9\u7f18\u8282\u70b9\u7684\u9650\u5236\uff1a\n    nodeSelector:\n      openyurt.io/is-edge-worker\uff1a'true'\n\n\u90e8\u7f72metallb\u76f8\u5173\u8d44\u6e90\uff1a\n    kubectl apply -f metallb.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u65f6MetalLB\u76f8\u5173\u7684\u7ec4\u4ef6\u5df2\u7ecf\u90e8\u7f72\u5b8c\u6bd5\u5e76\u5f00\u59cb\u8fd0\u884c\uff0c\u4f46\u7531\u4e8e\u6211\u4eec\u5e76\u6ca1\u6709\u8fdb\u884c\u4e0a\u8ff0\u4e24\u4e2a\u914d\u7f6e\uff08IP\u5730\u5740\u6c60\u3001MetalLB\u5de5\u4f5c\u6a21\u5f0f\uff09\uff0cController\u548cSpeaker\u4e00\u76f4\u5904\u4e8eidle\u72b6\u6001\u3002\n\u56e0\u6b64\u8981\u4f7fMetalLB\u6b63\u5e38\u5de5\u4f5c\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u6839\u636e\u672c\u5730\u7f51\u7edc\u60c5\u51b5\u90e8\u7f72\u4e00\u4e2a\u76f8\u5e94\u7684configmap\uff08\u4ee5Layer2\u6a21\u5f0f\u4e3a\u4f8b\uff09\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cat <<EOF | kubectl apply -f -\n\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: metallb-system\n  name: config\ndata:\n  config: |\n    address-pools:\n    - name: default\n      protocol: layer2\n      addresses:\n      - 192.168.122.90-192.168.122.100\n\nEOF\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u81f3\u6b64\uff0cMetalLB\u7684Controller\u548cSpeaker\u771f\u6b63\u8fdb\u5165\u4e86\u5de5\u4f5c\u5c31\u7eea\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528metallb",children:"\u4f7f\u7528MetalLB"}),"\n",(0,t.jsxs)(n.p,{children:["MetalLB\u90e8\u7f72\u6210\u529f\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u8fb9\u7f18\u4fa7\u521b\u5efaLoadBalancer\u7c7b\u578b\u7684service\u4e86\uff0c\u4e3e\u4f8b\u8bf4\u660e\u5982\u4e0b\uff1a",(0,t.jsx)(n.br,{}),"\n","\u521b\u5efa\u4e00\u4e2a\u5e94\u7528Deployment\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cat <<EOF | kubectl apply -f -\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: edgeapp-deployment\n  labels:\n    app: edgeapp\nspec:\n  selector:\n    matchLabels:\n      app: edgeapp\n  template:\n    metadata:\n      labels:\n        app: edgeapp\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.19.4\n        ports:\n        - containerPort: 80\n      nodeSelector:\n        openyurt.io/is-edge-worker: 'true'\n\nEOF\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u4e0e\u8be5Deployment\u5bf9\u5e94\u7684LoadBalancer service\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cat <<EOF | kubectl apply -f -\n\napiVersion: v1\nkind: Service\nmetadata:\n  name: edgeapp-svc\nspec:\n  selector:\n    app: edgeapp\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n  type: LoadBalancer\n\nEOF\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u9a8c\u8bc1LoadBalancer service\u662f\u5426\u521b\u5efa\u6210\u529f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#kubectl get service\nNAMESPACE     NAME              TYPE           CLUSTER-IP        EXTERNAL-IP        PORT(S)           AGE\ndefault       kubernetes        ClusterIP      192.167.0.1       <none>             443/TCP           10d\ndefault       edgeapp-svc       LoadBalancer   192.167.188.185   192.168.122.90     80:31378/TCP      9s\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4eceEXTERNAL-IP\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230LoadBalancer service\u5df2\u7ecf\u4eceIP\u5730\u5740\u6c60\u4e2d\u83b7\u53d6\u4e86IP\u5730\u5740\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9a8c\u8bc1LoadBalancer service\u662f\u5426\u53ef\u4ee5\u8bbf\u95ee\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#curl 192.168.122.90\n<!DOCTYPE html>\n<html>\n<head>\n<title>Welcome to nginx!</title>\n<style>\n    body {\n        width: 35em;\n        margin: 0 auto;\n        font-family: Tahoma, Verdana, Arial, sans-serif;\n    }\n</style>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(n.p,{children:"1). \u4eceKubernetes v1.14.2\u5f00\u59cb\uff0c\u5982\u679ckube-proxy\u91c7\u7528IPVS\u6a21\u5f0f\uff0c\u5fc5\u987b\u6253\u5f00strict ARP\u6a21\u5f0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'    kubectl edit configmap -n kube-system kube-proxy\n\n    apiVersion: kubeproxy.config.k8s.io/v1alpha1\n    kind: KubeProxyConfiguration\n    mode: "ipvs"\n    ipvs:\n      strictARP: true\n'})}),"\n",(0,t.jsxs)(n.p,{children:["2). \u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2aIP\u5730\u5740\u6c60\uff0c\u521b\u5efaLoadBalancer service\u7684\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7annotations\u9009\u62e9\u4f7f\u7528\u54ea\u4e2a\u5730\u5740\u6c60",(0,t.jsx)(n.br,{}),"\n","3). \u914d\u7f6eIP\u5730\u5740\u6c60\u65f6\uff0c\u901a\u5e38IP\u5730\u5740\u662f\u516c\u7f51IP\u4ee5\u4fbf\u96c6\u7fa4\u5916\u53ef\u4ee5\u8bbf\u95ee\uff0c\u5982\u679c\u914d\u6210\u96c6\u7fa4\u5185\u79c1\u7f51IP\uff0c\u90a3\u8be5\u670d\u52a1\u53ea\u80fd\u5728\u96c6\u7fa4\u5185\u88ab\u8bbf\u95ee"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://metallb.universe.tf/",children:"https://metallb.universe.tf/"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://www.51cto.com/article/707574.html",children:"https://www.51cto.com/article/707574.html"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://blog.csdn.net/shigiaz/article/details/118390917",children:"https://blog.csdn.net/shigiaz/article/details/118390917"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>i,a:()=>s});var t=l(67294);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);