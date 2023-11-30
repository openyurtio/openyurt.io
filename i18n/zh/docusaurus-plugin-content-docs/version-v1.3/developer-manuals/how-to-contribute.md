---
title: 如何参与贡献
---

社区欢迎大家参与贡献，贡献的形式可以不只局限于代码，也欢迎大家在社区分享自己的实践经验，提出使用中遇到的问题，解决社区中的别人的疑问，帮助完善社区文档等等。这些方面的贡献在社区中最终都会以Issue，Pull Request，Review的形式呈现。 本文会介绍如何提交Issue，Pull Request以及如何进行Review。

## Issue

当你对OpenYurt项目有什么问题，建议或是需求，欢迎在社区提交Issue。步骤如下：

1. 点击[OpenYurt的Issue界面](https://github.com/openyurtio/openyurt/issues)中的`New issue`来新建一个Issue
2. 选择你要提交的Issue的种类，然后`Get started`
3. 填写Issue的标题，并在给出的Issue的模板中填充内容
4. 最后`Submit new issue`

## Pull Request

在写代码前，请先检查社区中是否已经有类似的问题正在解决，以免重复劳动。在提交Pull Request前，可以先更新一下本地仓库，使其尽量与OpenYurt最新状态一致，以免后续合入时发生冲突。另外还需要了解一些[CI Workflow](./ci-workflow.md)的过程，这将有助于Pull Request的合入。

当你往自己fork的仓库中提交了新的commit后，可以向OpenYurt仓库提交一个Pull Request，请求OpenYurt合并你的分支。具体步骤如下：

1. 通过`git push`将本地代码同步到fork的OpenYurt仓库中
2. 登录Github，进入fork的OpenYurt仓库
3. 在Pull requests界面中点击`New pull request`，然后可以在下拉列表中选择需要合入的分支
4. 点击`Create pull request`，根据模板填入相应信息
5. 最后点击`Create pull request`就可以提交Pull Request，提交后的Pull Request可以在[OpenYurt的Pull Request界面](https://github.com/openyurtio/openyurt/pulls)找到

一般来说一个Pull Request只做一件事，如修复一个bug。因此，一个Pull Request中通常只包含一个commit，如果发现其中包含多个commit，请调整为一个，这可以通过`git reset`和`git commit`完成。在本地调整完成后，通过`git push`（这里会要求强制推送，请确认后再进行）推送到fork的OpenYurt仓库中的相应分支（第3步中选择合入的分支）上，Pull Request中的commit会自动与该分支同步，无需重新提交Pull Request。

提交成功后需要查看CI Workflow的结果，其中的检查全部通后就只需等待社区成员的Review和Approve。社区觉得没问题会给你的Pull Request打上`lgtm`(looks good to me)和`approve`的标签，然后就能合入OpenYurt仓库了。

## Review

Review指审查Pull Request中提交的代码中是否存在问题，欢迎所有人参与Review。Review工作没有提交Pull Request那么复杂，你可以对你感兴趣的代码片段发表看法，具体步骤如下：

1. 在[OpenYurt的Pull Request界面](https://github.com/openyurtio/openyurt/pulls)中打开你感兴趣的Pull Request。
2. 点击`Files changed`查看该Pull Request引入了哪些改动
3. 点击代码行数左侧的"+"为该段代码添加评论（第一次需要`Start a review`，后续只需要`Add review comment`）
4. 点击右上角的`Finish your review`，并`Submit review`

之后就只需要等待Pull Request作者的回复。

## 最后

[OpenYurt组织](https://github.com/openyurtio)下不只包含OpenYurt这一个项目，比如现在看到的这个文档和网站是在[openyurt.io](https://github.com/openyurtio/openyurt.io)仓库中维护的。这些项目相辅相成共同构成了整个OpenYurt，欢迎大家探索各个项目的能力，一起让OpenYurt变得更加成熟。
