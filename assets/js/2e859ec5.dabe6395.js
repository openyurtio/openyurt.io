"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6495],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},24754:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s}});var n=o(87462),r=(o(67294),o(3905));const i={title:"How to Contribute"},l=void 0,a={unversionedId:"developer-manuals/how-to-contribute",id:"version-v0.5.0/developer-manuals/how-to-contribute",title:"How to Contribute",description:"Contributions are welcome! Besides committing the code, you can also share your practice experience, ask questions you encountered in use, solve exsiting problems and improve the OpenYurt documentations in the community. All of these contributions will eventually be in the form of issue, pull request and review. This article will give an introduction of how to sumbit issus, pull request and review.",source:"@site/versioned_docs/version-v0.5.0/developer-manuals/how-to-contribute.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-contribute",permalink:"/docs/v0.5.0/developer-manuals/how-to-contribute",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-contribute.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Congrool",lastUpdatedAt:1643526184,formattedLastUpdatedAt:"Jan 30, 2022",frontMatter:{title:"How to Contribute"},sidebar:"version-v0.5.0/docs",previous:{title:"CI Workflow",permalink:"/docs/v0.5.0/developer-manuals/ci-workflow"},next:{title:"FAQ",permalink:"/docs/v0.5.0/faq"}},u={},s=[{value:"Issue",id:"issue",level:2},{value:"Pull Request",id:"pull-request",level:2},{value:"Review",id:"review",level:2},{value:"At Last",id:"at-last",level:2}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contributions are welcome! Besides committing the code, you can also share your practice experience, ask questions you encountered in use, solve exsiting problems and improve the OpenYurt documentations in the community. All of these contributions will eventually be in the form of issue, pull request and review. This article will give an introduction of how to sumbit issus, pull request and review."),(0,r.kt)("h2",{id:"issue"},"Issue"),(0,r.kt)("p",null,"You can submit a issue of the problem you encountered, your suggestion and the capability you need. Steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"New issue")," at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/openyurt/issue"},"the issue interface")," to create a new issue."),(0,r.kt)("li",{parentName:"ol"},"Select the kind of the issue and ",(0,r.kt)("inlineCode",{parentName:"li"},"Get started"),"."),(0,r.kt)("li",{parentName:"ol"},"Fill the title of the issue and the content of the given issue template."),(0,r.kt)("li",{parentName:"ol"},"Finally ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit new issue"),".")),(0,r.kt)("h2",{id:"pull-request"},"Pull Request"),(0,r.kt)("p",null,"Before coding, in order to avoid duplication of work, you had better to search the community to check if someone has been working on a same problem. Before submitting a Pull Request, you should check your local git repository and keep pace with the OpenYurt repo to avoid the merge conflict. In addition, you should have some knowledge of how does the OpenYurt ",(0,r.kt)("a",{parentName:"p",href:"/docs/v0.5.0/developer-manuals/ci-workflow"},"CI Workflow")," work."),(0,r.kt)("p",null,"After committing to your forked OpenYurt repository, you can submit a pull request to the official OpenYurt repository, asking for the merge of your change. Steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Push the code at your local host to your forked OpenYurt repository."),(0,r.kt)("li",{parentName:"ol"},"Login the Github and enter your OpenYurt repository."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"New pull request")," at the pull request interface and select your branch to merge."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create pull request")," and fill the content of the given pull request template."),(0,r.kt)("li",{parentName:"ol"},"Finally click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create pull request")," to submit the pull request, and you can find it at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/openyurt/pulls"},"the pull request interface of OpenYurt"),".")),(0,r.kt)("p",null,"In most cases, one pull request should only focus on one work, such as fixing a bug. Thus, only one commit should be contained in one pull request. You should amend your pull request if you find that there are more than one commits in it, using ",(0,r.kt)("inlineCode",{parentName:"p"},"git reset")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit")," at your local host. After your amending, you can push it to your forked openyurt repository through ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),"(usually need to do forcely, take caution). The submitted pull request will sync with the branch you select to merge(at step 3), and no need to create a new pull request."),(0,r.kt)("p",null,"You should check the CI workflow after submitting your pull request and make all the check passed. Then, you just need to wait for the review and approval from community members. If the community accepts your pull request, it will be labeled as ",(0,r.kt)("inlineCode",{parentName:"p"},"lgtm"),"(looks good to me) and ",(0,r.kt)("inlineCode",{parentName:"p"},"approve"),"."),(0,r.kt)("h2",{id:"review"},"Review"),(0,r.kt)("p",null,"Review means check others' pull requests. Everyone are welcome to take part in the review work. It's simple than pull request. You can leave your comment at the code you have interest in. Steps are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select a pull request at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openyurtio/openyurt/pulls"},"the pull request interface"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Files changed")," to check what change the pull request introduced."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," at the left of the code line and leave your comment. At the first time, you need to click ",(0,r.kt)("inlineCode",{parentName:"li"},"Start a review"),", and later you can click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add review comment"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Finish your review")," on the top right and ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit review"),".")),(0,r.kt)("p",null,"Then you can just wait for the reply from the author of this pull request."),(0,r.kt)("h2",{id:"at-last"},"At Last"),(0,r.kt)("p",null,"The openyurt is the only one of the repositories under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio"},"the openyurtio organization"),", for example the website you are browsing are mantained in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt.io"},"openyurt.io repository"),". All of these repositories consist the OpenYurt. Welcome to explore capabilities of each repository and make OpenYurt better."))}c.isMDXComponent=!0}}]);