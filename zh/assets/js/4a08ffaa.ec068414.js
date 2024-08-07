"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[39729],{39897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const i={title:"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c"},c=void 0,a={id:"best-practices/practices-1",title:"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c",description:"\u80cc\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/best-practices/practices-1.md",sourceDirName:"best-practices",slug:"/best-practices/practices-1",permalink:"/zh/docs/v1.1/best-practices/practices-1",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/best-practices/practices-1.md",tags:[],version:"v1.1",lastUpdatedBy:"zyjhtangtang",lastUpdatedAt:1722997831e3,frontMatter:{title:"OpenYurt \u52a9\u529b\u7533\u901a\u5feb\u9012\u4e91\u8fb9\u7aefDevOps\u534f\u540c"},sidebar:"docs",previous:{title:"\u8282\u70b9\u91cd\u542f\u65f6Pod\u6062\u590d\u6548\u7387\u6d4b\u8bd5",permalink:"/zh/docs/v1.1/test-report/pod-recover-efficiency-test"},next:{title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5",permalink:"/zh/docs/v1.1/developer-manuals/how-to-build-and-test"}},l={},d=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4e91\u8fb9\u534f\u540c\u80fd\u529b",id:"\u4e91\u8fb9\u534f\u540c\u80fd\u529b",level:2},{value:"\u4e1a\u52a1\u4ef7\u503c",id:"\u4e1a\u52a1\u4ef7\u503c",level:2}];function o(e){const n={br:"br",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,s.jsxs)(n.p,{children:["\u2003\u2003\u5feb\u9012\u884c\u4e1a\u662f\u5178\u578b\u7684\u5b9e\u4f53\u884c\u4e1a\uff0c\u63d0\u4f9b\u70b9\u5bf9\u70b9\u7684\u5305\u88f9\u8fd0\u8f93\u670d\u52a1\uff0c\u884d\u751f\u51fa\u63fd\u6536\u3001\u4e2d\u8f6c\u3001\u6d3e\u9001\u73af\u8282\u3002\u968f\u7740\u793e\u4f1a\u6574\u4f53\u7ecf\u6d4e\u53d1\u5c55\u5229\u597d\uff0c\u5feb\u9012\u884c\u4e1a\u7684\u4f53\u91cf\u5728\u4e0d\u65ad\u589e\u957f\uff0c\u7533\u901a\u5feb\u9012\u65e5\u5e38\u6d41\u8f6c3000~5000\u4e07\u5305\u88f9\uff0c\u5e73\u5747\u65e5\u5e38\u8f68\u8ff9\u7ea65\u4ebf\u5de6\u53f3\uff0c\u5927\u4fc3\u671f\u95f4\u8fd110\u4ebf\uff0c\u81ea\u52a8\u5316\u5206\u62e3\u65e5\u5747\u4e0b\u53d1\u6570\u636e\u5341\u51e0\u4ebf\u6761(\u7ea6\u51e0\u767eG)\uff0c\u8fd110\u4e07\u626b\u63cf\u5df4\u67aa(Lemo/PDA)\uff0c\u51e0\u4e07+Windows\u626b\u63cf\u5ba2\u6237\u7aef\uff0c\u4ea4\u53c9\u5e26\u4e0a\u767e\u5957\uff0c\u589e\u901f\u9884\u4f30\u5e7420%\u4ee5\u4e0a\uff0c\u80cc\u540e\u9762\u4e34\u7684\u662f\u4e00\u4e2a\u5e9e\u5927\u7684\u6570\u5b57\u4f53\u7cfb\uff0c\u672a\u6765\u7684\u5feb\u9012\u4e00\u5b9a\u662f\u6570\u5b57\u4f53\u7cfb\u7684\u5feb\u9012\uff0c\u6d89\u53ca\u5230\u5927\u91cf\u7684\u81ea\u52a8\u5316\u3001IoT\u53ca\u4eba\u673a\u8f85\u52a9\u7b49\u7cfb\u7edf\u4ea4\u4e92\u3002\u800c\u8fd9\u4e9b\u7cfb\u7edf\u4ea4\u4e92\u7684\u80cc\u540e\u672c\u8d28\u4e0a\u90fd\u662f\u5728\u4e3a\u5305\u88f9\u5b9e\u64cd\u670d\u52a1\uff0c\u56f4\u7ed5\u7740\u4eba\uff0c\u8d27\uff0c\u673a\uff0c\u8f66\u56db\u4e2a\u7ef4\u5ea6\u5c55\u5f00\u3002\u5728\u6574\u4f53\u5355\u91cf\u6301\u7eed\u4e0d\u65ad\u589e\u957f\u7684\u524d\u63d0\u4e0b\uff0c\u4e0d\u540c\u7684\u5b9e\u64cd\u7ef4\u5ea6\u9762\u4e34\u7684\u6311\u6218\u4e0d\u540c\uff0c\u5bf9\u65f6\u5ef6\uff0c\u7a33\u5b9a\u6027\uff0c\u9ad8\u53ef\u7528\uff0c\u4ee5\u53ca\u6269\u5c55\u6027\u8981\u6c42\u4e5f\u4e0d\u540c\u3002",(0,s.jsx)(n.br,{}),"\n","\u2003\u2003\u5728\u4f20\u7edf\u4e91\u5230\u7aef\u7684\u67b6\u6784\u4e0b\uff0c\u4e2d\u8f6c\u73af\u8282\u4f5c\u4e3a\u6700\u6838\u5fc3\u7684\u8def\u7531\u548c\u5b9e\u64cd\u804c\u80fd\uff0c\u4e14\u6709\u6781\u5f3a\u7684\u8fb9\u7aef\u7279\u6027\u3002\u627f\u8f7d\u4e2d\u8f6c\u73af\u8282(\u5305\u88f9\u7ecf\u8fc7\u8f6c\u8fd0\u4e2d\u5fc3/\u7f51\u70b9\u6d41\u8f6c\u73af\u8282)\u7684\u6838\u5fc3\u8282\u70b9\u662f\u7f51\u70b9\u548c\u8f6c\u8fd0\u4e2d\u5fc3\uff0c\u6d89\u53ca\u4e0d\u540c\u7684\u4e1a\u52a1\u57df\u5bf9\u5206\u5e03\u5728\u5168\u56fd100+\u8f6c\u8fd0\u4e2d\u5fc3\uff0c3000+\u7f51\u70b9\u5404\u573a\u5730\u5185\u7684\u5341\u51e0\u79cd\u5f02\u6784\u8bbe\u5907/\u7cfb\u7edf\u7684\u8fb9\u7f18\u4e1a\u52a1\u4e0b\u6c89\u3002\u4e0d\u540c\u573a\u5730\u7684\u57fa\u7840\u8bbe\u65bd\u6761\u4ef6\u53c2\u5dee\u4e0d\u9f50\uff0c\u4e1a\u52a1\u7cfb\u7edf\u5bf9\u8d44\u6e90\u9700\u6c42\u4e0d\u540c\uff0c\u540c\u65f6\u5065\u58ee\u6027\u4e5f\u65e0\u6cd5\u4fdd\u8bc1\uff0c\u5728\u5355\u91cf\u6301\u7eed\u589e\u957f\u7684\u57fa\u7840\u4e0a\uff0c\u5df2\u7ecf\u51fa\u73b0\u4e25\u91cd\u7684\u8fb9\u7aef\u4e1a\u52a1\u53d1\u5c55\u74f6\u9888\uff0c\u51fa\u73b0\u8d44\u6e90\u77ed\u7f3a/\u7ade\u4e89\uff0c\u65f6\u5ef6\u9ad8\uff0c\u7a33\u5b9a\u6027\u5dee\uff0c\u53ef\u7528\u6027\u7f3a\u5931\uff0cCI/CD\u56f0\u96be\u7b49\u4e00\u7cfb\u5217\u74f6\u9888\u95ee\u9898\u3002\u4e14\u5728\u6301\u7eed\u4e0d\u65ad\u7684\u5f15\u5165\u5404\u79cdIoT\u5f02\u6784\u8bbe\u5907/\u7cfb\u7edf(Lemo\u3001PDA\u3001\u4ea4\u53c9\u5e26\uff0cDWS\u7b49\u8bbe\u5907\u53ca\u914d\u5957\u7cfb\u7edf\uff0c\u6709windows,Android\u548c\u81ea\u7814OS\u51e0\u7c7b)\u7684\u538b\u529b\u4e0b\uff0c\u4f20\u7edf\u4e91\u5230\u7aef\u7684\u67b6\u6784\u73b0\u72b6\u6839\u672c\u65e0\u6cd5\u6ee1\u8db3\u5b9e\u9645\u8fb9\u7aef\u573a\u666f\u9700\u6c42\u3002\u4e14\u8fd9\u4e9b\u95ee\u9898\u90fd\u662f\u5404\u4e2a\u57df\u7684\u5171\u6027\u95ee\u9898\u3002\u4e9f\u9700\u4e00\u5957\u9762\u5411\u6d77\u91cf\u8bbe\u5907\u63a5\u5165\u7684\u9ad8\u53ef\u7528\u3001\u9ad8\u7a33\u5b9a\u6027\u3001\u53ef\u6269\u5c55\u7684\u4e91\u8fb9\u7aef\u4e00\u4f53\u7684\u6df7\u5408\u4e91\u67b6\u6784\u3002",(0,s.jsx)(n.br,{}),"\n","\u2003\u2003\u57282019\u5e74\u7533\u901a\u5feb\u9012\u5168\u9762\u6570\u5b57\u53161.0\u65f6\u671f\uff0c\u57fa\u4e8eKubernetes\u5efa\u8bbe\u4e86\u7533\u901a\u4e91\u4e91\u539f\u751fPaaS\u5e73\u53f0\uff0c\u6ee1\u8db3\u4e86\u4e91\u4e0a\u5e94\u7528\u7684\u8bc9\u6c42\uff0c\u5145\u5206\u4eab\u53d7\u5230\u4e86\u4e91\u539f\u751f\u5e26\u6765\u7684\u4fbf\u5229\u3002\u4f46\u662f\u5728\u6570\u5b57\u53162.0\u65f6\u671f\uff0c\u5728IoT\u53ca\u8fb9\u7aef\u6280\u672f\u5feb\u901f\u53d1\u5c55\u548c\u5e94\u7528\u7684\u80cc\u666f\u4e0b\uff0c\u5355\u7eaf\u4e91\u4e0aPaas\u5e73\u53f0\u96be\u4ee5\u6ee1\u8db3\u8fb9\u7aef\u7684\u9ad8\u54cd\u5e94\uff0c\u4f4e\u65f6\u5ef6\uff0c\u5927\u8fde\u63a5\u7684\u5f3a\u8bc9\u6c42\uff0c\u4e4b\u540e\u6211\u4eec\u91c7\u7528 OpenYurt \u5e73\u53f0\u4f5c\u4e3a\u7533\u901a\u5feb\u9012IoT\u4e91\u8fb9\u7aef\u67b6\u6784\u7684\u6838\u5fc3\u4e00\u73af\uff0c\u627f\u8f7d\u4e86\u8fb9\u7f18\u4fa7\u8d44\u6e90\u6258\u7ba1\uff0c\u5e94\u7528\u7ba1\u7406\uff0c\u4e91\u7ba1\u8fb9\u7aef\u7684\u4e91\u8fb9\u534f\u540c\u7684\u804c\u8d23\uff0c\u5229\u7528 OpenYurt  \u7684\u80fd\u529b\uff0c\u5c06\u4e91\u539f\u751f\u7684\u80fd\u529b\u6269\u5c55\u5230\u4e86\u5728\u8fb9\u7f18\u4fa7\uff0c\u7ee7\u627f\u4e86\u4e91\u5e73\u53f0\u7684\u4f17\u591a\u4f18\u52bf\u548c\u4fbf\u5229\uff0c\u6253\u9020\u9762\u5411\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u7684\u4e91\u8fb9\u7aef\u67b6\u6784\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4e91\u8fb9\u534f\u540c\u80fd\u529b",children:"\u4e91\u8fb9\u534f\u540c\u80fd\u529b"}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u7533\u901a\u5feb\u9012IoT\u4e91\u8fb9\u7aef\u67b6\u6784\u7684\u4e91\u8fb9\u534f\u540c\u80fd\u529b\u5177\u4f53\u4f53\u73b0\u5728\u54ea\u91cc\u5462\uff0c\u53c8\u6709\u54ea\u4e9b\u4f18\u52bf\uff1f\u6574\u4f53\u67b6\u6784\u4e2d\u4e91\u8fb9\u534f\u540c\u6709\u4e24\u5c42\u542b\u4e49\uff0c\u4e00\u662f\u8d1f\u8d23\u8fb9\u7f18\u8d44\u6e90\u8fd0\u7ef4\u7ba1\u63a7\u7684\u8fb9\u7f18PaaS\u5e73\u53f0\u7684\u4e91\u8fb9\u534f\u540c\u80fd\u529b\uff0c\u4e8c\u662f\u8fb9\u7f18\u7f51\u5173\u670d\u52a1\u7684\u4e91\u8fb9\u534f\u540c\u80fd\u529b\u3002\u91cd\u70b9\u4ecb\u7ecd\u8fb9\u7f18PaaS\u5e73\u53f0\u7684\u4e91\u8fb9\u534f\u540c\u3002\u5b83\u4e3b\u8981\u804c\u8d23\u662f\u5229\u7528 OpenYurt \u63d0\u4f9b\u5bb9\u5668\u5316\u7684\u9694\u79bb\u73af\u5883\uff0c\u5c06Master\u96c6\u7fa4\u7edf\u4e00\u90e8\u7f72\u5728\u516c\u6709\u4e91\uff0c\u5c06Node\u7ed3\u70b9\u4e0b\u6c89\u5230\u8fb9\u7f18\u7aef\uff0c\u4e5f\u5c31\u662f\u5206\u5e03\u5728\u5168\u56fd\u5404\u5730\u7684\u8f6c\u8fd0\u4e2d\u5fc3\uff0c\u91cd\u5199Node\u7ed3\u70b9\u7684\u5fc3\u8df3\u68c0\u6d4b\u673a\u5236\u548c\u81ea\u6cbb\u903b\u8f91\uff0c\u901a\u8fc7\u53cd\u5411\u4ee3\u7406\u8bbe\u8ba1\u8ba9\u8fb9\u7f18\u5bb9\u5668\u5728\u76f8\u5bf9\u7a33\u5b9a\u7684\u5c40\u57df\u7f51\u7edc\u73af\u5883\u91cc\u53ef\u4ee5\u81ea\u8fd0\u884c\u3002\u6838\u5fc3\u96c6\u6210\u4e86Devops\u3001\u5355\u5143\u5316\u53d1\u5e03\u3001\u751f\u4ea7\u65e5\u5e38\u73af\u5883\u9694\u79bb\u3001\u8d44\u6e90\u76d1\u63a7\u7b49\u6a21\u5757\u3002\u4f7f\u7533\u901a\u5feb\u9012\u7684\u8fb9\u7f18\u5f00\u53d1\uff0c\u540c\u4e91\u4e0a\u7814\u53d1\u4f53\u7cfb\u5b8c\u5168\u4e00\u81f4\uff0c\u53d1\u5e03\u8fb9\u7f18\u5e94\u7528\u65f6\u4e00\u952e\u751f\u6210\u8fb9\u7f18\u5bb9\u5668\uff0c\u5e76\u7531PaaS\u5e73\u53f0\u63d0\u4f9b\u7edf\u4e00\u90e8\u7f72\uff0c\u65e5\u5fd7\u76d1\u63a7\u7b49\u4e91\u7ba1\u63a7\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"flannel-architecture",src:t(46066).Z+"",width:"1126",height:"1078"})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u5728\u6b64\u4e4b\u4e0a\uff0c\u7533\u901a\u5feb\u9012\u81ea\u7814\u7684\u8fb9\u7f18Paas\u5e73\u53f0\u6765\u505a\u8fb9\u7f18DevOps\uff0c\u5e95\u5c42\u4f7f\u7528gitlab-runner\u6765\u505a\u6301\u7eed\u96c6\u6210\u5f15\u64ce\u3002CI \u5c42\u9762\u62c9\u53d6gitlab\u4ee3\u7801\u3001Docker\u505amaven\u6253\u5305\u3001\u6784\u5efa\u955c\u50cf\u5e76\u4e0a\u4f20\uff1bCD \u5c42\u9762\u5f15\u5165\u5f00\u53d1\u4eba\u5458\u63d0\u524d\u5199\u597dhelm charts\uff0c\u4f7f\u7528helm\u540c\u65f6\u64cd\u4f5c\u591a\u5355\u5143\u7684\u3001\u591a\u53ef\u7528\u533a\u7684\u591a\u4e2a OpenYurt \u96c6\u7fa4\u6765\u505a\u5bb9\u5668\u5316\u53d1\u5e03\uff0c\u4f7f\u7528OpenYurt\u672c\u8eab\u7684\u8d44\u6e90\u8c03\u5ea6\u80fd\u529b\uff0c\u5b8c\u6210\u6700\u5408\u7406\u7684\u8d44\u6e90\u8c03\u5ea6\u4e0e\u89c4\u5212\u3002\u5728\u8fb9\u7f18\u8d44\u6e90\u7ba1\u63a7\u5c42\u9762\uff0c\u7533\u901a\u5feb\u9012\u6839\u636e\u4e2d\u5fc3\u4e0e\u7f51\u70b9\u7684\u5206\u5e03\u60c5\u51b5\u4e0e\u5b9e\u65f6\u7684rt\u7edf\u8ba1\uff0c\u5212\u5206\u4e86\u56db\u5927\u53ef\u7528\u533a\u8fdb\u884c\u90e8\u7f72\uff0c\u5206\u522b\u4e3a\u534e\u4e1c\uff0c\u897f\u5357\uff0c\u534e\u5317\uff0c\u534e\u5357\u53ef\u7528\u533a\uff0c\u6bcf\u4e2a\u53ef\u7528\u533a\u4e00\u5957OpenYurt \u96c6\u7fa4\uff0c\u6bcf\u5957\u96c6\u7fa4\u7528\u6765\u7ba1\u7406\u672c\u533a\u57df\u5206\u6563\u7684\u7269\u7406\u8d44\u6e90\u30024\u5957\u96c6\u7fa4\u7edf\u4e00\u901a\u8fc7\u4e0a\u5c42\u7684\u8fb9\u7f18PAAS\u5e73\u53f0\u7edf\u4e00\u63a7\u5236\u3002\u5bf9\u7533\u901a\u5feb\u9012\u6765\u8bf4\uff0c\u8fb9\u7f18\u5bb9\u5668\u5316\u5c06\u8fb9\u7f18\u7269\u7406\u8d44\u6e90\u5145\u5206\u5229\u7528\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u57fa\u4e8e\u57fa\u7840\u955c\u50cf\uff0c\u4ea7\u51fa\u4e86\u8fb9\u7f18sls\u65e5\u5fd7\u670d\u52a1\u3001\u8fb9\u7f18sunfire\u4e1a\u52a1\u76d1\u63a7\u7b49\u3002\u5f00\u53d1\u4eba\u5458\u53ef\u968f\u610f\u914d\u7f6e\u544a\u8b66\uff0c\u642d\u914d\u79d2\u7ea7\u4e1a\u52a1\u76d1\u63a7\uff0c\u5b9e\u73b0\u5feb\u901f\u7684\u6545\u969c\u53d1\u73b0\u4e0e\u5904\u7406\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"architecture",src:t(98516).Z+"",width:"1103",height:"868"})}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u7533\u901a\u5feb\u9012\u4e1a\u52a1\u4e0a\uff0c\u5c06\u5feb\u9012\u5b9e\u64cd\u7684\u6838\u5fc3\u626b\u63cf\u6821\u9a8c\u4e1a\u52a1\uff0c\u901a\u8fc7\u4e91\u8fb9\u534f\u540c\u80fd\u529b\uff0c\u5c06\u626b\u63cf\u6821\u9a8c\u6574\u4e2a\u6838\u5fc3\u6d41\u7a0b\u5728\u8fb9\u7f18\u5b8c\u6210\uff0c\u652f\u6491\u5feb\u9012\u4e1a\u52a1\u62e6\u622a\u4ef6\u3001\u9884\u552e\u7b49\u4e1a\u52a1\uff0c\u4ece\u5bb9\u5e94\u5bf9\u53cc\u5341\u4e00\u7b49\u6d77\u91cf\u6570\u636e\u5927\u4fc3\uff0c\u4f7f\u5feb\u9012\u5b9e\u64cd\u626b\u63cf\u7528\u6237\u4f53\u9a8c\u4e0a\u4e00\u5c42\u65b0\u53f0\u9636\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e1a\u52a1\u4ef7\u503c",children:"\u4e1a\u52a1\u4ef7\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u7533\u901a\u5feb\u9012IoT\u4e91\u8fb9\u7aef\u67b6\u6784\u662f\u5feb\u9012\u884c\u4e1a\u5728\u8fb9\u7f18\u4fa7\u6f14\u8fdb\u4e91\u539f\u751f\u67b6\u6784\u7684\u9996\u4f8b\u843d\u5730\u65b9\u6848\u3002\u63d0\u4f9b\u540c\u4e91\u4e0a\u7814\u53d1\u4f53\u7cfb\u5b8c\u5168\u4e00\u81f4\u7684\u7814\u53d1\u6a21\u578b\uff0c\u4ee5 OpenYurt \u4e3a\u6280\u672f\u5e95\u5ea7\uff0c\u5b9e\u73b0\u4e91\u4e0a\u548c\u4e91\u4e0b\u8d44\u6e90\u7684\u7edf\u4e00\u7ba1\u7406\uff0c\u6253\u4e0b\u575a\u5b9e\u7684\u6df7\u5408\u4e91\u57fa\u7840\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u533a\u57df\u5bb9\u707e"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7533\u901a\u5feb\u9012\u6839\u636e\u4e2d\u5fc3\u4e0e\u7f51\u70b9\u7684\u5206\u5e03\u60c5\u51b5\u4e0e\u5b9e\u65f6\u7684rt\u7edf\u8ba1\uff0c\u540c\u65f6\u4e3a\u4e86\u51cf\u5c11\u7206\u70b8\u534a\u5f84\uff0c\u5c06\u96c6\u7fa4\u62c6\u5206\u4e3a4\u5927\u533a\u57df\u8fdb\u884c\u90e8\u7f72\uff0c\u53734\u5957OpenYurt\u96c6\u7fa4\u30024\u5957\u96c6\u7fa4\u7edf\u4e00\u901a\u8fc7\u8fb9\u7f18paas\u5e73\u53f0\u7edf\u4e00\u63a7\u5236\uff0c\u5b9e\u73b0runtime\u6700\u5c0f\u5316\u3002\u56db\u5957\u96c6\u7fa4\u5206\u522b\u4e3a\uff1a\u534e\u4e1c(\u4e0a\u6d77)\uff0c\u897f\u5357\uff08\u6210\u90fd\uff09\uff0c\u534e\u5317\uff08\u5317\u4eac\uff09\u534e\u5357\uff08\u6df1\u5733\uff09\u3002\u56db\u5957\u96c6\u7fa4\u7531\u66f4\u4e0a\u5c42\u7684\u8fb9\u7f18PAAS\u5e73\u53f0\u7edf\u4e00\u7ba1\u7406\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u591a\u73af\u5883\u9694\u79bb"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u6839\u636e\u4e0d\u540c\u573a\u5730\u7684\u8bbe\u5907\u548c\u5e94\u7528\u60c5\u51b5\uff0c\u914d\u7f6e\u65e5\u5e38\uff0c\u9884\u53d1\uff0c\u7ebf\u4e0a\u73af\u5883\u5bf9\u4e8e\u7533\u901a\u5feb\u9012\u4e0d\u540c\u7684\u573a\u5730\uff0c\u56e0\u4e3a\u4e1a\u52a1\u5bf9\u8bbe\u5907\u7684\u8981\u6c42\u573a\u666f\u4e0d\u540c(\u6bd4\u5982\u5317\u4eac\u8f6c\u8fd0\u4e2d\u5fc3\u6709\u4ea4\u53c9\u5e26\uff0c\u5e7f\u4e1c\u8f6c\u8fd0\u4e2d\u5fc3\u6ca1\u6709)\uff0c\u903b\u8f91\u5c42\u9762\u5219\u4e3a\u4e0d\u540c\u7684\u5355\u5143\uff0c\u53ef\u9009\u4e0d\u540c\u7684\u914d\u7f6e\uff0c\u540c\u65f6\u5f00\u53d1\u73af\u5883\u5206\u4e3a3\u5957\u65e5\u5e38\u3001\u9884\u53d1\u3001\u7ebf\u4e0a\u73af\u5883\u3002\u4e0d\u540c\u73af\u5883\u5728\u7269\u7406\u5c42\u9762\u548c\u903b\u8f91\u5c42\u9762\u5b9e\u73b0\u53cc\u5c42\u7684\u73af\u5883\u9694\u79bb\u3001\u7f51\u7edc\u9694\u79bb\u3002\u66f4\u751a\u53ef\u652f\u6301\u4e0d\u540c\u5355\u5143\uff0c\u4e1a\u52a1\u914d\u7f6e\u3001\u6570\u636e\u5e93\u914d\u7f6e\u3001pod\u89c4\u683c\u3001\u5fc3\u8df3\u7b49\u622a\u7136\u4e0d\u540c\uff0c\u5b9e\u73b0\u5e94\u7528\u5355\u5143\u81ea\u5b9a\u4e49\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["IoT\u4e91\u8fb9\u7aef\u67b6\u6784\u4e91\u8fb9\u534f\u540c\u5e26\u6765\u7684\u5f88\u591a\u660e\u663e\u7684\u4ef7\u503c:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u89e3\u51b3\u539f\u59cb\u8fdb\u7a0b\u9694\u79bb\u6a21\u5f0f\u5e26\u6765\u7684\u7a33\u5b9a\u6027\u5dee\u95ee\u9898\uff0c\u63d2\u4ef6\u5316\u67b6\u6784\u8bbe\u8ba1\uff0c\u8fdb\u7a0b\u9694\u79bb\u548c\u5bb9\u5668\u5316\u9694\u79bb\u6a21\u5f0f\u968f\u610f\u5207\u6362\u3002\u63d0\u4f9b\u4e00\u952e\u521d\u59cb\u88c5\u673a\u3001\u5f00\u7bb1\u5373\u7528\u7684\u5bb9\u5668\u5316\u9694\u79bb\u5e94\u7528\u73af\u5883\uff0c\u8fb9\u7aef\u5e94\u7528\u76f8\u4e92\u95f4\u5f71\u54cd\u8303\u56f4\u5927\u5e45\u7f29\u5c0f\uff0c\u8fb9\u7f18\u9ad8\u53ef\u7528\uff0c\u7a33\u5b9a\u6027\u4ece99.9%\u63d0\u9ad8\u523099.95%\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u51cf\u5c11\u8fb9\u7aef\u670d\u52a1\u5668\u88f8\u673a\u8d44\u6e90\u6d6a\u8d39\uff0c\u901a\u8fc7\u63a7\u5236\u5f39\u6027\u7b56\u7565\u548c\u8d85\u5356\u6bd4\u53ef\u5408\u7406\u5229\u7528\u8d44\u6e90\uff0c\u964d\u4f4e\u957f\u671f\u6574\u4f53\u6295\u5165\u6210\u672c\u3002\u63d0\u4f9b\u4e91\u7ba1\u8fb9\u7aef\uff0c\u8fb9\u7f18\u81ea\u6cbb\u7684\u6df7\u5408\u4e91\u67b6\u6784\u57fa\u7840\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e91\u8fb9\u534f\u540c\u7684\u4e00\u4f53\u6a21\u5f0f\uff0c\u7edf\u4e00\u7684\u76d1\u63a7\u4f53\u7cfb\uff0c\u7814\u53d1\u6a21\u578b\uff0c\u540c\u4e91\u5e94\u7528\u5f00\u53d1\u6548\u7387\u548c\u4f53\u9a8c\u4e00\u81f4\uff0c\u4e91\u539f\u751f\u8fb9\u7f18Devops\u5e73\u53f0\uff0c\u7edf\u4e00\u5feb\u9012\u884c\u4e1a\u9762\u5411\u8fb9\u7f18IoT\u573a\u666f\u7684\u7814\u53d1\uff0c\u8fd0\u7ef4\u573a\u666f\uff0c\u6574\u4f53\u8fb9\u7aef\u4f53\u7cfbRT\u964d\u4f4e\u5230\u5e73\u574750ms\u4ee5\u4e0b\uff0c\u4e14\u6d88\u9664\u6296\u52a8\u5e26\u6765\u7684\u989d\u5916\u5f71\u54cd\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7f51\u7edc\u72b6\u51b5\u3001\u53cc\u5341\u4e00\u6d77\u91cf\u62e6\u622a\u6570\u636e\u91cf\u3001\u5b9e\u64cd\u626b\u63cf\u901f\u5ea6\u4e09\u8005\u5728\u53ea\u6709\u4e91\u7aef\u60c5\u51b5\u4e0b\u5bf9\u5feb\u9012\u516c\u53f8\u6765\u8bf4\u5fc5\u987b\u505a\u53d6\u820d\u3002\u8fb9\u7f18\u7aef\u7684\u5f15\u5165\uff0c\u5c06\u4e09\u8005\u540c\u65f6\u89e3\u51b3\u3002\u5bf9\u5f62\u6210\u5185\u805a\u7684\u4e91\u8fb9\u4e00\u4f53\u7684\u8f6f\u4ef6\u67b6\u6784\uff0c\u6269\u5c55\u5de5\u7a0b\u5e08\u8bbe\u8ba1\u601d\u7ef4\u8d77\u5230\u63a8\u52a8\u4f5c\u7528\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u2003\u2003\u8fb9\u7f18\u7aef\u5bb9\u5668\u5316\u4e5f\u662f\u5feb\u9012\u884c\u4e1a\u76ee\u524d\u5728\u8fb9\u7f18\u7aef\u6f14\u8fdb\u4e91\u539f\u751f\u6280\u672f\u7684\u9996\u4f8b\uff0c\u57282021\u5e746\u670830\u53f7\u6574\u4e2aIoT\u4e91\u8fb9\u7aef\u67b6\u6784\u5168\u7f51\u94fa\u5f00\u540e\uff0c\u5728\u5feb\u9012\u884c\u4e1a\u7684\u8fb9\u7aef\u573a\u666f\u662f\u9886\u5148\u6c34\u5e73\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},98516:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/architecture-7286811f9736df3e95245cae161fbd50.png"},46066:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/flannel-architecture-8ff678588806991eb06a5367037069e8.png"},11151:(e,n,t)=>{t.d(n,{a:()=>c});var s=t(67294);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);