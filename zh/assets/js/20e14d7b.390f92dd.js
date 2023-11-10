"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6447],{71435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(85893),a=t(11151);const s={slug:"Enable-MetalLB-in-OpenYurt",title:"Edge LoadBalancer service support based on MetalLB",authors:["zzguang"],tags:["openyurt"]},l=void 0,o={permalink:"/zh/blog/Enable-MetalLB-in-OpenYurt",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2022-06-28-Enable-Edge-LoadBalancer-Service-based-on-MetalLB.md",source:"@site/blog/2022-06-28-Enable-Edge-LoadBalancer-Service-based-on-MetalLB.md",title:"Edge LoadBalancer service support based on MetalLB",description:"\u80cc\u666f\u4ecb\u7ecd",date:"2022-06-28T00:00:00.000Z",formattedDate:"2022\u5e746\u670828\u65e5",tags:[{label:"openyurt",permalink:"/zh/blog/tags/openyurt"}],readingTime:10.7,hasTruncateMarker:!0,authors:[{name:"zzguang",title:"Reviewer of OpenYurt",url:"https://github.com/zzguang",imageURL:"https://github.com/zzguang.png",key:"zzguang"}],frontMatter:{slug:"Enable-MetalLB-in-OpenYurt",title:"Edge LoadBalancer service support based on MetalLB",authors:["zzguang"],tags:["openyurt"]},unlisted:!1,nextItem:{title:"Kubernetes\u4e0eOpenYurt\u65e0\u7f1d\u8f6c\u6362\uff08\u547d\u4ee4\u5f0f\uff09",permalink:"/zh/blog/How-to-use-yurtctl-convert-revert"}},i={authorsImageUrls:[void 0]},u=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2}];function c(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u867d\u7136\u4e91\u7aef\u5df2\u7ecf\u5177\u5907\u4e86\u8f83\u4e3a\u5168\u9762\u7684\u4e91\u539f\u751f\u80fd\u529b\uff0c\u4f46\u8fb9\u7f18\u4fa7\u7531\u4e8e\u7279\u5b9a\u7684\u7f51\u7edc\u73af\u5883\u53ca\u5e94\u7528\u573a\u666f\u7684\u9650\u5236\uff0c\u5f80\u5f80\u65e0\u6cd5\u63d0\u4f9b\u50cf\u4e91\u7aef\u4e00\u6837\u4e30\u5bcc\u7684\u80fd\u529b\uff0c\u800c\u5b9e\u9645\u4e0a\u7528\u6237\u4e1a\u52a1\u5e94\u7528\u7684\u4e3b\u6218\u573a\u5374\u5728\u8fb9\u7f18\u4fa7\uff0c\n\u8fd9\u5c31\u5bfc\u81f4\u8fb9\u7f18\u4fa7\u5728\u4f7f\u7528\u4e91\u539f\u751f\u80fd\u529b\u7684\u65f6\u5019\u6216\u591a\u6216\u5c11\u5b58\u5728\u4e00\u4e9bgaps\uff0c\u800c\u5982\u4f55\u89e3\u51b3\u8fd9\u4e9bgaps\u4e5f\u6210\u4e3a\u4e91\u8fb9\u534f\u540c\u57fa\u7840\u8bbe\u65bd\u8f6f\u4ef6\u529b\u6c42\u89e3\u51b3\u7684\u5173\u952e\u95ee\u9898\u3002\u672c\u6587\u9488\u5bf9\u8fb9\u7f18\u4fa7\u670d\u52a1\u66b4\u9732\u7ed9\u96c6\u7fa4\u5916\u8bbf\u95ee\u7684\u573a\u666f\uff0c\u6765\u63a2\u8ba8\u4e00\u4e0b\u5728\nOpenYurt\u8fb9\u7f18\u4fa7\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u7684\u65b9\u6cd5\uff0c\u5e0c\u671b\u80fd\u8d77\u5230\u629b\u7816\u5f15\u7389\u7684\u6548\u679c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u539f\u751fKubernetes\u96c6\u7fa4\u4e2d\uff0c\u5982\u679c\u60f3\u5c06\u670d\u52a1\u66b4\u9732\u51fa\u6765\u4f9b\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee\uff0c\u901a\u5e38\u53ef\u4ee5\u8003\u8651\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HostNetwork"}),"\n",(0,r.jsx)(n.li,{children:"ExternalIPs"}),"\n",(0,r.jsx)(n.li,{children:"NodePort"}),"\n",(0,r.jsx)(n.li,{children:"LoadBalancer"}),"\n",(0,r.jsx)(n.li,{children:"Ingress"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\u524d\u4e09\u79cd\u65b9\u5f0f\uff0c\u7531\u4e8e\u81ea\u8eab\u5b58\u5728\u4e00\u5b9a\u7684\u5c40\u9650\u6027\uff0c\u5728\u6761\u4ef6\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u5e38\u7528\u6237\u66f4\u503e\u5411\u4e8e\u9009\u62e9\u540e\u4e24\u79cd\u65b9\u5f0f\u3002\u800c\u5bf9Ingress\u65b9\u5f0f\u800c\u8a00\uff0c\u4e91\u7aefIngress\u529f\u80fd\u901a\u5e38\u4f1a\u642d\u914d\u4e91\u7aefSLB\u670d\u52a1\u4e00\u8d77\u4f7f\u7528\uff0c\nSLB\u8d1f\u8d23\u4ece\u7528\u6237\u8bf7\u6c42\u5230\u8282\u70b9\u7ef4\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u800cIngress\u8d1f\u8d23\u4ece\u8282\u70b9\u5230pod\u7ef4\u5ea6\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u4ece\u7528\u6237\u8bf7\u6c42\u5230\u5e94\u7528pod\u7684\u5168\u94fe\u8def\u7684\u8d1f\u8f7d\u5747\u8861\u529f\u80fd\u3002\u7136\u800c\u5728\u4e91\u8fb9\u534f\u540c\u573a\u666f\u4e0b\uff0c\u7531\u4e8e\u8fb9\u7f18\u4fa7\u5e76\u4e0d\u5177\u5907\u4e91\u7aefSLB\u670d\u52a1\u7684\u80fd\u529b\uff0c\u8fb9\u7f18Ingress\u6216\u8fb9\u7f18\u5e94\u7528\u65e0\u6cd5\u66b4\u9732LoadBalancer\u7c7b\u578b\u7684\u670d\u52a1\u4f9b\u96c6\u7fa4\u5916\u8bbf\u95ee\uff0c\u8fd9\u4e5f\u6210\u4e3a\u4e86\u8fb9\u7f18\u4fa7\u5bf9\u5916\u66b4\u9732\u670d\u52a1\u7684\u4e00\u5927\u75db\u70b9\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u75db\u70b9\uff0c\u76ee\u524d\u5728\u5f00\u6e90\u793e\u533a\uff0c\u6709\u51e0\u4e2a\u65b9\u6848\u53ef\u4f9b\u9009\u62e9\uff1aMetalLB, PureLB\u548cOpenELB\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["MetalLB:  ",(0,r.jsx)(n.a,{href:"https://github.com/metallb",children:"https://github.com/metallb"})]}),"\n",(0,r.jsxs)(n.li,{children:["PureLB:   ",(0,r.jsx)(n.a,{href:"https://github.com/purelb",children:"https://github.com/purelb"})]}),"\n",(0,r.jsxs)(n.li,{children:["OpenELB:  ",(0,r.jsx)(n.a,{href:"https://github.com/openelb",children:"https://github.com/openelb"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5173\u4e8e\u4e09\u4e2a\u9879\u76ee\u4e4b\u95f4\u7684\u6bd4\u8f83\uff0c\u53ef\u4ee5\u4ece\u7f51\u4e0a\u67e5\u5230\u4e00\u4e9b\u76f8\u5173\u4ecb\u7ecd\uff0c\u6574\u4f53\u6765\u8bf4\uff0c\u5b83\u4eec\u5b9e\u73b0\u7684\u529f\u80fd\u5927\u540c\u5c0f\u5f02\uff0c\u4ece\u9879\u76ee\u6210\u719f\u5ea6\u53ca\u6d41\u884c\u5ea6\u7684\u89d2\u5ea6\u8003\u8651\uff0c\u6211\u4eec\u9009\u62e9\u4ee5MetalLB\u4e3a\u4f8b\uff0c\u63a2\u8ba8\u4e00\u4e0b\u5982\u4f55\u901a\u8fc7MetalLB\u5728OpenYurt\n\u8fb9\u7f18\u4fa7\u5b9e\u73b0\u5bf9LoadBalancer\u7c7b\u578bservice\u7684\u652f\u6301\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);