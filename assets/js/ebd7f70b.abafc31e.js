"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[78362],{70119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"developer-manuals/local-up-openyurt","title":"Local Up OpenYurt","description":"How to use","source":"@site/versioned_docs/version-v1.4/developer-manuals/local-up-openyurt.md","sourceDirName":"developer-manuals","slug":"/developer-manuals/local-up-openyurt","permalink":"/docs/developer-manuals/local-up-openyurt","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/local-up-openyurt.md","tags":[],"version":"v1.4","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1743848435000,"frontMatter":{"title":"Local Up OpenYurt"},"sidebar":"docs","previous":{"title":"How to Build and Test","permalink":"/docs/developer-manuals/how-to-build-and-test"},"next":{"title":"CI Workflow","permalink":"/docs/developer-manuals/ci-workflow"}}');var s=n(74848),l=n(28453);const r={title:"Local Up OpenYurt"},c=void 0,i={},a=[{value:"How to use",id:"how-to-use",level:2},{value:"What does the shell do for you",id:"what-does-the-shell-do-for-you",level:2},{value:"Reference",id:"reference",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsxs)(t.p,{children:["If you don't have the openyurt cluster, you can run the bash shell ",(0,s.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local-up-openyurt.sh",children:(0,s.jsx)(t.code,{children:"local-up-openyurt.sh"})})," to quickly set up the openyurt cluster at your local host.\nAssuming that you've entered the openyurt work path, the command is as simple as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# build OpenYurt components images and startup a OpenYurt cluster\nmake docker-build-and-up-openyurt\n\n# startup a OpenYurt cluster based on prepared images\nmake local-up-openyurt\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then you can use ",(0,s.jsx)(t.code,{children:"kubectl"})," to interact with your OpenYurt cluster."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Note:\nBy default, the above commands run on Linux/AMD64 platform. If you need to specify platform information when running on MAC, run the following command: 'make local-up-openyurt TARGET_PLATFORMS= Linux /arm64'."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"what-does-the-shell-do-for-you",children:"What does the shell do for you"}),"\n",(0,s.jsxs)(t.p,{children:["In summary, the ",(0,s.jsx)(t.code,{children:"local-up-openyurt.sh"})," will use the local files under the openyurt work path to set up the cluster.  And you can specify the behavior of the shell through setting environment variables."]}),"\n",(0,s.jsxs)(t.p,{children:["It will use ",(0,s.jsx)(t.code,{children:"kind"})," to set up the kubernetes cluster. You can set ",(0,s.jsx)(t.code,{children:"KUBERNETESVERSION"})," to specify the kubernetes version to use. For instance, ",(0,s.jsx)(t.code,{children:"export KUBERNETESVERSION=1.23"})," before running the shell will enable you to use kubernetes v1.23. In addition, you can set ",(0,s.jsx)(t.code,{children:"NODES_NUM"})," to specify the number of nodes the cluster will contain."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Note:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The format of ",(0,s.jsx)(t.code,{children:"KUBERNETESVERSION"})," is ",(0,s.jsx)(t.code,{children:"1.xx"}),", other formats will not be accepted. The default KUBERNETESVERSION is ",(0,s.jsx)(t.code,{children:"1.22"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"NODES_NUM"})," should not be less than 2. Finally, the cluster will contains one control-plane node and ",(0,s.jsx)(t.code,{children:"NODES_NUM-1"})," woker nodes. The default ",(0,s.jsx)(t.code,{children:"NODES_NUM"})," is 2."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"At last, Finally, OpenYurt components will be installed in kubernetes cluster, including 'Yurthub', 'Yurt-Controller-Manager', 'Yurt-tunnel-Agent' and 'Yurt-Tunnel-Server'."}),"\n",(0,s.jsxs)(t.p,{children:["By now, you've got the OpenYurt cluster at your local host and you can interact with it using ",(0,s.jsx)(t.code,{children:"kubectl"}),". ",(0,s.jsx)(t.code,{children:"kind"})," will automatically stored the kubeconfig at your ",(0,s.jsx)(t.code,{children:"KUBECONFIG"})," path (default path is ",(0,s.jsx)(t.code,{children:"${HOME}/.kube/config)"}),". If you already have the ",(0,s.jsx)(t.code,{children:"KUBECONFIG"})," to interact with other clusters, ",(0,s.jsx)(t.code,{children:"kind"})," will add a new context of openyurt cluster into the ",(0,s.jsx)(t.code,{children:"KUBECONFIG"})," and automatically switch to it. You can manually switch back to the previous context using command ",(0,s.jsx)(t.code,{children:"kubectl config use-context ${PREVIOUS_CONTEXT_NAME}"}),". For more details, you can see the ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/",children:"documentation"}),". You can store the kubeconfig at another path through setting ",(0,s.jsx)(t.code,{children:"KIND_KUBECONFIG"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.p,{children:"Reference gives descriptions of all used environment variables."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"KIND_KUBECONFIG"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["KIND_KUBECONFIG represents the path to store the kubeconfig file of the cluster which is created by this shell. The default value is ",(0,s.jsx)(t.code,{children:'"$HOME/.kube/config"'}),"."]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"NODES_NUM"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"NODES_NUM represents the number of nodes to set up in the new-created cluster. There are one control-plane node and NODES_NUM-1 worker nodes. Thus, NODES_NUM must not be less than 2. The default value is 2."}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"KUBERNETESVERSION"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'KUBERNETESVERSION declares the kubernetes version the cluster will use. The format is "1.XX". Now from 1.17 to 1.23 are supported. The default value is 1.22.'}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"TIMEOUT"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"TIMEOUT represents the time to wait for the kind control-plane, yurt-tunnel-server and yurt-tunnel-agent to be ready. If they are not ready after the duration, the shell will exit. The default value is 120s."})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const s={},l=o.createContext(s);function r(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);