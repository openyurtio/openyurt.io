"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[93526],{84618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"developer-manuals/how-to-contribute","title":"How to Contribute","description":"Welcome to join OpenYurt project. Here is the contributing guide for you.","source":"@site/docs/developer-manuals/how-to-contribute.md","sourceDirName":"developer-manuals","slug":"/developer-manuals/how-to-contribute","permalink":"/docs/next/developer-manuals/how-to-contribute","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-contribute.md","tags":[],"version":"current","lastUpdatedBy":"Liang Deng","lastUpdatedAt":1733802663000,"frontMatter":{"title":"How to Contribute"},"sidebar":"docs","previous":{"title":"CI Workflow","permalink":"/docs/next/developer-manuals/ci-workflow"},"next":{"title":"Code of Conduct","permalink":"/docs/next/developer-manuals/code-of-conduct"}}');var o=t(74848),r=t(28453);const s={title:"How to Contribute"},l=void 0,c={},a=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Topics",id:"topics",level:2},{value:"Reporting security issues",id:"reporting-security-issues",level:2},{value:"Reporting general issues",id:"reporting-general-issues",level:2},{value:"Code and doc contribution",id:"code-and-doc-contribution",level:2},{value:"Workspace Preparation",id:"workspace-preparation",level:3},{value:"Branch Definition",id:"branch-definition",level:3},{value:"Commit Rules",id:"commit-rules",level:3},{value:"Commit Message",id:"commit-message",level:4},{value:"Commit Content",id:"commit-content",level:4},{value:"PR Guidelines",id:"pr-guidelines",level:3},{value:"Review",id:"review",level:2},{value:"Engage to help anything",id:"engage-to-help-anything",level:2},{value:"At Last",id:"at-last",level:2}];function d(e){const n={a:"a",code:"code",del:"del",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Welcome to join OpenYurt project. Here is the contributing guide for you."}),"\n",(0,o.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,o.jsxs)(n.p,{children:["Please do check our ",(0,o.jsx)(n.a,{href:"/docs/next/developer-manuals/code-of-conduct",children:"Code of Conduct"})," before making contributions."]}),"\n",(0,o.jsx)(n.h2,{id:"topics",children:"Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#reporting-security-issues",children:"Reporting security issues"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#reporting-general-issues",children:"Reporting general issues"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#code-and-doc-contribution",children:"Code and doc contribution"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#review",children:"Review"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#engage-to-help-anything",children:"Engage to help anything"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#at-last",children:"At Last"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"reporting-security-issues",children:"Reporting security issues"}),"\n",(0,o.jsxs)(n.p,{children:["We take security issues seriously and discourage anyone to spread security issues. If you find a security issue in OpenYurt, please do not discuss it in public and even do not open a public issue. Instead we encourage you to send us a private email to ",(0,o.jsx)(n.a,{href:"mailto:security@mail.openyurt.io",children:"security@mail.openyurt.io"})," to report the security issue."]}),"\n",(0,o.jsx)(n.h2,{id:"reporting-general-issues",children:"Reporting general issues"}),"\n",(0,o.jsx)(n.p,{children:"Any OpenYurt user can potentially be a contributor. If you have any feedback for the project, feel free to open an issue. Steps are as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"New issue"})," at ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/issue",children:"the issue interface"})," to create a new issue."]}),"\n",(0,o.jsxs)(n.li,{children:["Select the kind of the issue and ",(0,o.jsx)(n.code,{children:"Get started"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Fill the title of the issue and the content of the given issue template."}),"\n",(0,o.jsxs)(n.li,{children:["Finally ",(0,o.jsx)(n.code,{children:"Submit new issue"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Since OpenYurt development will be collaborated in a distributed manner, we appreciate ",(0,o.jsx)(n.strong,{children:"WELL-WRITTEN"}),", ",(0,o.jsx)(n.strong,{children:"DETAILED"}),", ",(0,o.jsx)(n.strong,{children:"EXPLICIT"})," issue reports. To make communication more efficient, we suggest everyone to search if your issue is an existing one before filing a new issue. If you find it to be existing, please append your details in the issue comments."]}),"\n",(0,o.jsx)(n.p,{children:"There are lot of cases for which you could open an issue:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Bug report"}),"\n",(0,o.jsx)(n.li,{children:"Feature request"}),"\n",(0,o.jsx)(n.li,{children:"Performance issues"}),"\n",(0,o.jsx)(n.li,{children:"Feature proposal"}),"\n",(0,o.jsx)(n.li,{children:"Feature design"}),"\n",(0,o.jsx)(n.li,{children:"Help wanted"}),"\n",(0,o.jsx)(n.li,{children:"Doc incomplete"}),"\n",(0,o.jsx)(n.li,{children:"Test improvement"}),"\n",(0,o.jsx)(n.li,{children:"Any questions about the project, and so on"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Please remind that when filing a new issue, do remove the sensitive data from your post. Sensitive data could be password, secret key, network locations, private business data and so on."}),"\n",(0,o.jsx)(n.h2,{id:"code-and-doc-contribution",children:"Code and doc contribution"}),"\n",(0,o.jsx)(n.p,{children:"Any action that may make OpenYurt better is encouraged. The action can be realized via a PR (short for pull request)."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If you find a typo, try to fix it!"}),"\n",(0,o.jsx)(n.li,{children:"If you find a bug, try to fix it!"}),"\n",(0,o.jsx)(n.li,{children:"If you find some redundant codes, try to remove them!"}),"\n",(0,o.jsx)(n.li,{children:"If you find some test cases missing, try to add them!"}),"\n",(0,o.jsxs)(n.li,{children:["If you could enhance a feature, please ",(0,o.jsx)(n.strong,{children:"DO NOT"})," hesitate!"]}),"\n",(0,o.jsx)(n.li,{children:"If you find code implicit, try to add comments to make it clear!"}),"\n",(0,o.jsx)(n.li,{children:"If you find tech debts, try to refactor them!"}),"\n",(0,o.jsx)(n.li,{children:"If you find document incorrect, please fix that!"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"It is impossible to list them completely, we are looking forward to your pull requests.\r\nBefore coding, in order to avoid duplication of work, you had better to search the community to check if someone has been working on a same problem.\r\nBefore submitting a PR, we suggest you could take a look at the PR rules here."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#workspace-preparation",children:"Workspace Preparation"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#branch-definition",children:"Branch Definition"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#commit-rules",children:"Commit Rules"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#pr-guidelines",children:"PR Guidelines"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"workspace-preparation",children:"Workspace Preparation"}),"\n",(0,o.jsx)(n.p,{children:"We assume you have a GitHub ID already, then you could finish the preparation in the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"FORK"})," OpenYurt to your repository. To make this work, you just need to click the button ",(0,o.jsx)(n.code,{children:"Fork"})," in top-right corner of ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt",children:"openyurt"})," main page. Then you will end up with your repository in ",(0,o.jsx)(n.code,{children:"https://github.com/<username>/openyurt"}),", in which ",(0,o.jsx)(n.code,{children:"username"})," is your GitHub ID."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CLONE"})," your own repository to develop locally. Use ",(0,o.jsx)(n.code,{children:"git clone https://github.com/<username>/openyurt.git"})," to clone repository to your local machine. Then you can create new branches to finish the change you wish to make."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Set Remote"})," upstream to be openyurt using the following two commands:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git remote add upstream https://github.com/openyurtio/openyurt.git\r\ngit remote set-url --push upstream no-pushing\n"})}),"\n",(0,o.jsx)(n.p,{children:"With this remote setting, you can check your git remote configuration like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ git remote -v\r\norigin     https://github.com/<username>/openyurt.git (fetch)\r\norigin     https://github.com/<username>/openyurt.git (push)\r\nupstream   https://github.com/openyurtio/openyurt.git (fetch)\r\nupstream   no-pushing (push)\n"})}),"\n",(0,o.jsx)(n.p,{children:"With above, we can easily synchronize local branches with upstream branches."}),"\n",(0,o.jsx)(n.h3,{id:"branch-definition",children:"Branch Definition"}),"\n",(0,o.jsxs)(n.p,{children:["Right now we assume every contribution via pull request is for the ",(0,o.jsx)(n.code,{children:"master"})," branch in OpenYurt.\r\nThere are several other branches such as rc branches, release branches and backport branches.\r\nBefore officially releasing a version, we may checkout a rc (release candidate) branch for more testings.\r\nWhen officially releasing a version, there may be a release branch before tagging which will be deleted after tagging.\r\nWhen backporting some fixes to existing released version, we will checkout backport branches."]}),"\n",(0,o.jsx)(n.h3,{id:"commit-rules",children:"Commit Rules"}),"\n",(0,o.jsx)(n.p,{children:"In OpenYurt, we take two rules seriously for submitted PRs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#commit-message",children:"Commit Message"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#commit-content",children:"Commit Content"})}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"commit-message",children:"Commit Message"}),"\n",(0,o.jsxs)(n.p,{children:["Commit message could help reviewers better understand what the purpose of submitted PR is. It could help accelerate the code review procedure as well. We encourage contributors to use ",(0,o.jsx)(n.strong,{children:"EXPLICIT"})," commit message rather than ambiguous message. In general, we advocate the following commit message type:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Docs: xxxx. For example, "Docs: add docs about storage installation".'}),"\n",(0,o.jsx)(n.li,{children:'Feature: xxxx.For example, "Feature: make result show in sorted order".'}),"\n",(0,o.jsx)(n.li,{children:'Bugfix: xxxx. For example, "Bugfix: fix panic when input nil parameter".'}),"\n",(0,o.jsx)(n.li,{children:'Style: xxxx. For example, "Style: format the code style of Constants.java".'}),"\n",(0,o.jsx)(n.li,{children:'Refactor: xxxx. For example, "Refactor: simplify to make codes more readable".'}),"\n",(0,o.jsx)(n.li,{children:'Test: xxx. For example, "Test: add unit test case for func InsertIntoArray".'}),"\n",(0,o.jsx)(n.li,{children:"Other readable and explicit expression ways."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"On the other hand, we discourage contributors to write committing messages using the following ways:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.del,{children:"fix bug"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.del,{children:"update"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.del,{children:"add doc"})}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"commit-content",children:"Commit Content"}),"\n",(0,o.jsx)(n.p,{children:"Commit content represents all content changes included in one commit. We had better include things in one single commit which could support reviewer's complete review without any other commits' help. In another word, contents in one single commit can pass the CI to avoid code mess. In brief, there are two minor rules for us to keep in mind:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Avoid very large change in a commit;"}),"\n",(0,o.jsx)(n.li,{children:"Be complete and reviewable for each commit."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"pr-guidelines",children:"PR Guidelines"}),"\n",(0,o.jsxs)(n.p,{children:["PR is the only way to make change to OpenYurt project. Before submitting a Pull Request, you should check your local git repository and keep pace with the OpenYurt repo to avoid the merge conflict. In addition, you should have some knowledge of how does the OpenYurt ",(0,o.jsx)(n.a,{href:"/docs/next/developer-manuals/ci-workflow",children:"CI Workflow"})," work."]}),"\n",(0,o.jsx)(n.p,{children:"After committing to your forked OpenYurt repository, you can submit a pull request to the official OpenYurt repository, asking for the merge of your change. Steps are as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Push the code at your local host to your forked OpenYurt repository."}),"\n",(0,o.jsx)(n.li,{children:"Login the Github and enter your OpenYurt repository."}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"New pull request"})," at the pull request interface and select your branch to merge."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"Create pull request"})," and fill the content of the given pull request template."]}),"\n",(0,o.jsxs)(n.li,{children:["Finally click ",(0,o.jsx)(n.code,{children:"Create pull request"})," to submit the pull request, and you can find it at ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/pulls",children:"the pull request interface of OpenYurt"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In most cases, one pull request should only focus on one work, such as fixing a bug. Thus, only one commit should be contained in one pull request. You should amend your pull request if you find that there are more than one commits in it, using ",(0,o.jsx)(n.code,{children:"git reset"})," and ",(0,o.jsx)(n.code,{children:"git commit"})," at your local host. After your amending, you can push it to your forked openyurt repository through ",(0,o.jsx)(n.code,{children:"git push"}),"(usually need to do forcely, take caution). The submitted pull request will sync with the branch you select to merge(at step 3), and no need to create a new pull request."]}),"\n",(0,o.jsxs)(n.p,{children:["You should check the CI workflow after submitting your pull request and make all the check passed. Then, you just need to wait for the review and approval from community members. If the community accepts your pull request, it will be labeled as ",(0,o.jsx)(n.code,{children:"lgtm"}),"(looks good to me) and ",(0,o.jsx)(n.code,{children:"approve"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"review",children:"Review"}),"\n",(0,o.jsx)(n.p,{children:"Review means check others' pull requests. Everyone are welcome to take part in the review work. It's simple than pull request. You can leave your comment at the code you have interest in. Steps are as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Select a pull request at ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt/pulls",children:"the pull request interface"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"Files changed"})," to check what change the pull request introduced."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"+"})," at the left of the code line and leave your comment. At the first time, you need to click ",(0,o.jsx)(n.code,{children:"Start a review"}),", and later you can click ",(0,o.jsx)(n.code,{children:"Add review comment"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"Finish your review"})," on the top right and ",(0,o.jsx)(n.code,{children:"Submit review"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Then you can just wait for the reply from the author of this pull request."}),"\n",(0,o.jsx)(n.h2,{id:"engage-to-help-anything",children:"Engage to help anything"}),"\n",(0,o.jsx)(n.p,{children:"GitHub is the primary place for OpenYurt contributors to collaborate. Although contributions via PR is an explicit way to help, we still call for any other types of helps."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Reply to other's issues if you could;"}),"\n",(0,o.jsx)(n.li,{children:"Help solve other user's problems;"}),"\n",(0,o.jsx)(n.li,{children:"Help review other's PR design;"}),"\n",(0,o.jsx)(n.li,{children:"Help review other's codes in PR;"}),"\n",(0,o.jsx)(n.li,{children:"Discuss about OpenYurt to make things clearer;"}),"\n",(0,o.jsx)(n.li,{children:"Advocate OpenYurt technology beyond GitHub;"}),"\n",(0,o.jsx)(n.li,{children:"Write blogs on OpenYurt, and so on."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In a word, ",(0,o.jsx)(n.strong,{children:"ANY HELP CAN BE A CONTRIBUTION."})]}),"\n",(0,o.jsx)(n.h2,{id:"at-last",children:"At Last"}),"\n",(0,o.jsxs)(n.p,{children:["The openyurt is the only one of the repositories under ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio",children:"the openyurtio organization"}),", for example the website you are browsing are mantained in ",(0,o.jsx)(n.a,{href:"https://github.com/openyurtio/openyurt.io",children:"openyurt.io repository"}),". All of these repositories consist the OpenYurt. Welcome to explore capabilities of each repository and make OpenYurt better."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);