---
title: 如何参与贡献
---

欢迎加入 OpenYurt 项目。以下是为您准备的贡献指南。

## Code of Conduct

在进行贡献之前，请务必查看我们的 [Code of Conduct](./code-of-conduct.md)。

## Topics

* [报告安全问题](#报告安全隐患问题)
* [报告常规问题](#报告常规问题)
* [代码与文档贡献](#代码与文档贡献)
* [Review](#review)
* [参与并提供任何帮助](#参与并提供任何帮助)
* [写在最后](#写在最后)

## 报告安全问题

我们非常重视安全问题，并且不鼓励公开传播安全问题。如果你发现 OpenYurt 存在安全问题，请不要在公开场合讨论，更不要创建公开问题。相反，我们鼓励你通过电子邮件私密地向我们报告安全问题，邮件地址是 [security@mail.openyurt.io](mailto:security@mail.openyurt.io)。

## 报告常规问题

当你对OpenYurt项目有什么问题，建议或是需求，欢迎在社区提交Issue。步骤如下：

1. 点击[OpenYurt的Issue界面](https://github.com/openyurtio/openyurt/issues)中的`New issue`来新建一个Issue
2. 选择你要提交的Issue的种类，然后`Get started`
3. 填写Issue的标题，并在给出的Issue的模板中填充内容
4. 最后`Submit new issue`

由于 OpenYurt 开发将以分布式方式进行，我们非常感谢 **写得清晰**、**详细**、**明确** 的问题报告。为了提高沟通效率，我们建议在提交新问题之前，先搜索一下是否已有类似的问题。如果你找到了相似的问题，请将你的细节补充到该问题的评论中。

以下是一些可以创建问题的场景：

* Bug 报告
* 功能请求
* 性能问题
* 功能提案
* 功能设计
* 求助
* 文档不完整
* 测试改进
* 关于项目的任何问题，等等

请记住，在提交新问题时，务必删除其中的敏感数据。敏感数据可能包括密码、密钥、网络地址、私人商业数据等。

## 代码和文档贡献

我们鼓励任何能够使 OpenYurt 更好的行动，这些行动可以通过 PR（即拉取请求）来实现。

* 如果你发现了拼写错误，试着修正它！
* 如果你发现了 bug，试着修复它！
* 如果你发现了一些冗余的代码，试着去除它们！
* 如果你发现缺少测试用例，试着添加它们！
* 如果你能够增强某个功能，**不要**犹豫！
* 如果你发现代码不清晰，试着添加注释来让它更明了！
* 如果你发现技术债务，试着重构它们！
* 如果你发现文档有错误，请修正它！

这些只是一些例子，无法完全列举所有情况，我们期待着你的拉取请求。
在写代码前，请先检查社区中是否已经有类似的问题正在解决，以免重复劳动。
在提交 PR 之前，我们建议你先查看以下的 PR 规则。

* [工作区准备](#workspace-preparation)
* [分支定义](#branch-definition)
* [提交规则](#commit-rules)
* [PR 指南](#pr-guidelines)

### 工作区准备

我们假设你已经有了一个 GitHub 账号，接下来可以通过以下步骤完成准备工作：

1. **Fork** OpenYurt 到你的仓库。只需要点击 [openyurt](https://github.com/openyurtio/openyurt) 主页面右上角的 `Fork` 按钮。这样你将拥有一个位于 `https://github.com/<username>/openyurt` 的仓库，其中 `username` 是你的 GitHub ID。
2. **Clone** 你的仓库到本地进行开发。使用 `git clone https://github.com/<username>/openyurt.git` 将仓库克隆到本地机器。然后你可以创建新分支来完成你想要的更改。
3. **设置 Remote**：将 upstream 设置为 OpenYurt，使用以下两个命令：

```
git remote add upstream https://github.com/openyurtio/openyurt.git
git remote set-url --push upstream no-pushing
```

通过这个 remote 配置，你可以通过以下命令查看你的 git remote 配置：

```
$ git remote -v
origin     https://github.com/<username>/openyurt.git (fetch)
origin     https://github.com/<username>/openyurt.git (push)
upstream   https://github.com/openyurtio/openyurt.git (fetch)
upstream   no-pushing (push)
```

有了上述设置，你可以轻松地同步本地分支与 upstream 分支。

### 分支定义

目前我们假设所有通过拉取请求（PR）的贡献都是针对 OpenYurt 的 `master` 分支。
除了 `master` 分支外，还有一些其他分支，如 RC 分支、发布分支和回溯分支。
在正式发布版本之前，我们可能会检查一个 RC（发布候选）分支进行更多测试。
正式发布版本时，可能会先创建一个发布分支，在标记版本之后会删除。
当需要将一些修复回溯到已发布版本时，我们会创建回溯分支。

### 提交规则

在 OpenYurt 项目中，我们对提交 PR 有两个规则要求严格遵守：

* [提交信息](#commit-message)
* [提交内容](#commit-content)

#### 提交信息

提交信息能够帮助审核者更好地理解提交 PR 的目的，也有助于加快代码审查的流程。我们鼓励贡献者使用 **明确** 的提交信息，而不是模糊的描述。一般来说，我们提倡使用以下格式的提交信息：

* Docs: xxxx. For example, "Docs: add docs about storage installation".
* Feature: xxxx.For example, "Feature: make result show in sorted order".
* Bugfix: xxxx. For example, "Bugfix: fix panic when input nil parameter".
* Style: xxxx. For example, "Style: format the code style of Constants.java".
* Refactor: xxxx. For example, "Refactor: simplify to make codes more readable".
* Test: xxx. For example, "Test: add unit test case for func InsertIntoArray".
* 其他可读且明确的表达方式。

另一方面，我们不鼓励贡献者使用以下方式编写提交信息：

* ~~fix bug~~
* ~~update~~
* ~~add doc~~

#### 提交内容

提交内容表示一个提交中包含的所有内容变更。我们最好将一个提交的内容控制在可以支持审核者独立审核的范围内，而不依赖于其他提交。换句话说，单个提交中的内容应当能够通过 CI 测试，以避免代码杂乱。简而言之，有两条小规则需要记住：

* 避免在一个提交中进行非常大的更改；
* 每个提交应当是完整且可审查的。

### PR 指南

PR 是对 OpenYurt 项目进行更改的唯一方式。在提交拉取请求之前，你应该检查本地的 git 仓库，并确保与 OpenYurt 仓库保持同步，以避免合并冲突。此外，你应该了解 OpenYurt 的 [CI 工作流](./ci-workflow.md)，这将有助于Pull Request的合入。

在将更改提交到你 fork 的 OpenYurt 仓库后，你可以向官方 OpenYurt 仓库提交一个拉取请求，要求合并你的更改。步骤如下：

1. 将代码推送到你的 fork 仓库。
2. 登录 GitHub 并进入你的 OpenYurt 仓库。
3. 在拉取请求界面点击 `New pull request`，选择要合并的分支。
4. 点击 `Create pull request` 并填写拉取请求模板中的内容。
5. 最后点击 `Create pull request` 提交拉取请求，你可以在 [OpenYurt 的拉取请求界面](https://github.com/openyurtio/openyurt/pulls) 中查看它。

通常，一个拉取请求应该只聚焦于一个任务，例如修复一个 bug。因此，一个拉取请求中应该只包含一个提交。如果你发现拉取请求中包含多个提交，你应该使用 `git reset` 和 `git commit` 在本地进行修正，然后将更改推送到你的 fork 仓库（通常需要强制推送，请小心）。提交的拉取请求将同步到你在步骤 3 中选择的分支，且不需要重新创建新的拉取请求。

提交拉取请求后，你应该检查 CI 工作流，确保所有检查都通过。然后，你只需要等待社区成员的审核和批准。如果社区接受你的拉取请求，它将被标记为 `lgtm`（Looks good to me）和 `approve`。

## Review

Review指审查Pull Request中提交的代码中是否存在问题，欢迎所有人参与Review。Review工作没有提交Pull Request那么复杂，你可以对你感兴趣的代码片段发表看法，具体步骤如下：

1. 在[OpenYurt的Pull Request界面](https://github.com/openyurtio/openyurt/pulls)中打开你感兴趣的Pull Request。
2. 点击`Files changed`查看该Pull Request引入了哪些改动
3. 点击代码行数左侧的"+"为该段代码添加评论（第一次需要`Start a review`，后续只需要`Add review comment`）
4. 点击右上角的`Finish your review`，并`Submit review`

之后就只需要等待Pull Request作者的回复。

## 参与并提供任何帮助

GitHub 是 OpenYurt 贡献者合作的主要平台。尽管通过 PR 进行贡献是明确的方式，我们仍然欢迎任何其他形式的帮助。

* 如果有能力，请帮助我们回复他人的问题；
* 帮助解决其他用户的疑难问题；
* 帮助审查他人 PR 设计；
* 帮助审查 PR 中的代码；
* 讨论 OpenYurt 的技术细节，帮助他人更好地理解；
* 在 GitHub 以外宣传 OpenYurt 技术；
* 撰写关于 OpenYurt 的博客，等等。

总之，**任何帮助都可以视为一种贡献。**

## 写在最后

[OpenYurt组织](https://github.com/openyurtio)下不只包含OpenYurt这一个项目，比如现在看到的这个文档和网站是在[openyurt.io](https://github.com/openyurtio/openyurt.io)仓库中维护的。这些项目相辅相成共同构成了整个OpenYurt，欢迎大家探索各个项目的能力，一起让OpenYurt变得更加成熟。
