"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[38945],{46455:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>i});var s=r(85893),c=r(11151);const l={title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4"},o=void 0,t={id:"developer-manuals/local-up-openyurt",title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4",description:"\u4f7f\u7528\u65b9\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/developer-manuals/local-up-openyurt.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/local-up-openyurt",permalink:"/zh/docs/v0.5.0/developer-manuals/local-up-openyurt",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/local-up-openyurt.md",tags:[],version:"v0.5.0",lastUpdatedBy:"huiwq1990",lastUpdatedAt:1704852908,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"\u672c\u5730\u542f\u52a8\u96c6\u7fa4"},sidebar:"docs",previous:{title:"\u672c\u5730\u6784\u5efa\u548c\u6d4b\u8bd5",permalink:"/zh/docs/v0.5.0/developer-manuals/how-to-build-and-test"},next:{title:"CI Workflow",permalink:"/zh/docs/v0.5.0/developer-manuals/ci-workflow"}},d={},i=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u73af\u5883\u53d8\u91cf\u8bf4\u660e",id:"\u73af\u5883\u53d8\u91cf\u8bf4\u660e",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,s.jsxs)(n.p,{children:["OpenYurt\u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u672c\u5730\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u8fd0\u884c\u811a\u672c",(0,s.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/blob/master/hack/local_up_openyurt.sh",children:"local_up_openyurt.sh"}),"\uff0c\u53ef\u4ee5\u81ea\u52a8\u5b8c\u6210\u5bf9\u6e90\u7801\u7684\u7f16\u8bd1\u3001\u955c\u50cf\u6253\u5305\u3001\u542f\u52a8OpenYurt\u96c6\u7fa4\u7b49\u5de5\u4f5c\u3002\u8be5\u811a\u672c\u6b63\u786e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7kubectl\u547d\u4ee4\u8bbf\u95ee\u96c6\u7fa4\u3002\u5728\u8fd0\u884c\u524d\u9700\u8981\u5b89\u88c5docker\u3001kubectl\u3001go\u548ckind\u7b49\u4f9d\u8d56\u8f6f\u4ef6\u3002\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -E REGION=cn bash hack/local_up_openyurt.sh\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'\u6ce8\u610f\u8be5\u811a\u672c\u53ea\u80fd\u4fdd\u8bc1\u5728linux/amd64\u4e0a\u7684\u53ef\u7528\u6027\uff0c\u5176\u4ed6\u5e73\u53f0\u672a\u7ecf\u8fc7\u6d4b\u8bd5\u3002\u5982\u679c\u5728\u8fd0\u884clocal_up_openyurt.sh\u65f6\u51fa\u73b0\u201cERROR: failed to load image .. not found"\uff0c\u90a3\u5f88\u53ef\u80fd\u662f\u56e0\u4e3a\u4e0e\u8fd0\u884c\u5e73\u53f0\u4e0d\u517c\u5bb9\uff0c\u8bf7\u5728linux/amd64\u4e0a\u8fd0\u884c\uff0c\u6216\u8005\u624b\u52a8\u90e8\u7f72\u3002'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9e\u73b0\u539f\u7406",children:"\u5b9e\u73b0\u539f\u7406"}),"\n",(0,s.jsxs)(n.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c",(0,s.jsx)(n.code,{children:"local_up_openyurt.sh"}),"\u4f1a\u4f7f\u7528\u5f53\u524dopenyurt\u76ee\u5f55\u4e0b\u7684\u6e90\u6587\u4ef6\u542f\u52a8OpenYurt\u96c6\u7fa4\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u6765\u63a7\u5236\u811a\u672c\u7684\u884c\u4e3a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u811a\u672c\u4f1a\u542f\u52a8\u4e00\u4e2adocker\u5bb9\u5668\u6765\u6784\u5efa\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u955c\u50cf\u3002\u8fd9\u4e9b\u6784\u5efa\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u955c\u50cf\u8fd0\u884c\u7684\u76ee\u6807\u5e73\u53f0\u548c\u672c\u5730\u5e73\u53f0\u4e00\u6837\u3002\u6bd4\u5982\u8bf4\uff0c\u5982\u679c\u672c\u5730\u662flinux/amd64\uff0c\u90a3\u4e48\u53ea\u6709linux/amd64\u76f8\u5173\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u955c\u50cf\u4f1a\u88ab\u6784\u5efa\u3002\u6784\u5efa\u51fa\u6765\u7684\u53ef\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u955c\u50cf\u653e\u5728",(0,s.jsx)(n.code,{children:"_output"}),"\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u811a\u672c\u4f1a\u901a\u8fc7",(0,s.jsx)(n.code,{children:"kind"}),"\u6765\u542f\u52a8\u4e00\u4e2akubernetes\u96c6\u7fa4\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"KUBERNETESVERSION"}),"\u6765\u6307\u5b9a\u96c6\u7fa4\u7684kubernetes\u7684\u7248\u672c\u3002\u5982\uff0c\u901a\u8fc7\u8fd0\u884c",(0,s.jsx)(n.code,{children:"export KUBERNETESVERSION=1.18"}),"\u53ef\u4ee5\u6307\u5b9a\u4f7f\u75281.18\u7248\u672c\u7684kind\u955c\u50cf\u3002\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"NODES_NUM"}),"\u6765\u6307\u5b9a\u542f\u52a8\u96c6\u7fa4\u4e2d\u5305\u542b\u8282\u70b9\u7684\u6570\u91cf\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"KUBERNETESVERSION"}),"\u7684\u683c\u5f0f\u53ea\u80fd\u662f",(0,s.jsx)(n.code,{children:"1.xx"}),"\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,s.jsx)(n.code,{children:"1.20"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NODES_NUM"}),"\u7684\u503c\u4e0d\u80fd\u5c0f\u4e8e2\u3002\u542f\u52a8\u7684\u96c6\u7fa4\u4e2d\u6700\u540e\u4f1a\u5305\u542b1\u4e2acontrol-plane\u8282\u70b9\uff0c",(0,s.jsx)(n.code,{children:"NODES_NUM-1"}),"\u4e2aworker\u8282\u70b9\u3002\u9ed8\u8ba4\u503c\u4e3a2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u901a\u8fc7",(0,s.jsx)(n.code,{children:"yurtctl"}),"\u5de5\u5177\u5c06kubernetes\u96c6\u7fa4\u8f6c\u6362\u4e3aOpenYurt\u96c6\u7fa4\u3002",(0,s.jsx)(n.code,{children:"yurtctl"}),"\u4f1a\u4f7f\u7528\u521a\u521a\u6784\u5efa\u597d\u7684\u955c\u50cf\u6765\u8f6c\u6362\u96c6\u7fa4\uff0c\u5305\u62ec",(0,s.jsx)(n.code,{children:"yurthub"}),"\uff0c",(0,s.jsx)(n.code,{children:"yurt-controller-manager"}),"\uff0c",(0,s.jsx)(n.code,{children:"yurt-tunnel-agent"}),"\u548c",(0,s.jsx)(n.code,{children:"yurt-tunnel-server"}),"\u3002\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"export YURTTUNNEL=disable"}),"\u547d\u4ee4\u8df3\u8fc7",(0,s.jsx)(n.code,{children:"yurt-tunnel"}),"\u76f8\u5173\u7ec4\u4ef6\u7684\u90e8\u7f72\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u4e00\u4e2aOpenYurt\u96c6\u7fa4\u5c31\u542f\u52a8\u5b8c\u6210\u4e86\u3002\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"kubectl"}),"\u547d\u4ee4\u6765\u4e0e\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002",(0,s.jsx)(n.code,{children:"kind"}),"\u4f1a\u81ea\u52a8\u5c06\u542f\u52a8\u7684\u96c6\u7fa4\u7684kubeconfig\u50a8\u5b58\u5728",(0,s.jsx)(n.code,{children:"KUBECONFIG"}),"\u6240\u6307\u8def\u5f84\uff08\u9ed8\u8ba4\u4e3a",(0,s.jsx)(n.code,{children:"${HOME}/.kube/config"}),"\uff09\u3002\u5982\u679c\u5728\u8be5\u76ee\u5f55\u4e0b\u5df2\u7ecf\u6709\u4e86kubeconfig\uff0c",(0,s.jsx)(n.code,{children:"kind"}),"\u4f1a\u4e3a\u8be5kubeconfig\u589e\u52a0\u65b0\u7684context\uff0c\u5e76\u5207\u6362current-context\u6307\u5411\u521a\u521a\u521b\u5efa\u7684\u96c6\u7fa4\u3002\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"kubectl config use-context ${PREVIOUS_CONTEXT_NAME}"}),"\u547d\u4ee4\u5207\u56de\u539f\u6765\u7684\u96c6\u7fa4\u3002context\u76f8\u5173\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003\u8be5",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters",children:"\u6587\u6863"}),"\u3002\u53e6\u5916\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"KIND_KUBECONFIG"}),"\u6765\u6307\u5b9a\u5176\u4ed6\u7684\u8def\u5f84\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf\u8bf4\u660e",children:"\u73af\u5883\u53d8\u91cf\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u6765\u63a7\u5236\u811a\u672c\u7684\u884c\u4e3a\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"REGION"}),(0,s.jsx)(n.br,{}),"\n","REGION\u53ef\u4ee5\u8bbe\u4e3acn\u548cus\uff0c\u6765\u51b3\u5b9a\u4f7f\u7528\u54ea\u4e2aGOPROXY\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,s.jsx)(n.code,{children:"us"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"KIND_KUBECONFIG"}),(0,s.jsx)(n.br,{}),"\n","KIND_KUBECONFIG\u8868\u793akind\u4e3a\u65b0\u96c6\u7fa4\u521b\u5efa\u7684kubeconfig\u6587\u4ef6\u7684\u8def\u5f84\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,s.jsx)(n.code,{children:"$HOME/.kube/config"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NODES_NUM"}),(0,s.jsx)(n.br,{}),"\n","NODES_NUM\u8868\u793a\u521b\u5efa\u7684\u96c6\u7fa4\u4e2d\u5305\u542b\u7684\u8282\u70b9\u7684\u6570\u91cf\uff0c\u6700\u540e\u96c6\u7fa4\u4e2d\u4f1a\u67091\u4e2acontrol-plane\u8282\u70b9\u548cNODES_NUM-1\u4e2aworker\u8282\u70b9\u3002\u56e0\u6b64NODES_NUM\u7684\u503c\u4e0d\u80fd\u5c0f\u4e8e2\uff0c\u9ed8\u8ba4\u503c\u4e3a",(0,s.jsx)(n.code,{children:"2"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"KUBERNETESVERSION"}),(0,s.jsx)(n.br,{}),"\n",'KUBERNETESVERSION\u8868\u793a\u521b\u5efa\u7684\u96c6\u7fa4\u4f7f\u7528\u7684kubernetes\u7248\u672c\uff0c\u683c\u5f0f\u4e3a"1.xx"\u3002\u76ee\u524d\u80fd\u6307\u5b9a\u7684\u7248\u672c\u67091.18\uff0c1.19\u548c1.20\u3002\u9ed8\u8ba4\u503c\u4e3a',(0,s.jsx)(n.code,{children:"1.20"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TIMEOUT"}),(0,s.jsx)(n.br,{}),"\n","TIMEOUT\u8868\u793a\u5728\u521b\u5efa\u96c6\u7fa4\u671f\u95f4\u7b49\u5f85\u7ec4\u4ef6\uff08control-plane\uff0cyurt-tunnel-server\uff0cyurt-tunnel-agent\uff09\u5c31\u7eea\u7684\u6700\u957f\u65f6\u95f4\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,s.jsx)(n.code,{children:"120s"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"YURTTUNNEL"}),(0,s.jsx)(n.br,{}),"\n","YURTTUNNEL\u7528\u4e8e\u5224\u65ad\u662f\u5426\u9700\u8981\u90e8\u7f72yurt-tunnel-server\u548cyurt-tunnel-agent\uff0c\u901a\u8fc7\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"YURTTUNNEL=disable"}),"\u53ef\u4ee5\u4e0d\u90e8\u7f72yurt-tunnel\u76f8\u5173\u7ec4\u4ef6\u3002\u9ed8\u8ba4\u503c\u4e3a",(0,s.jsx)(n.code,{children:"enable"}),"\u3002"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>o});var s=r(67294);const c={},l=s.createContext(c);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);