---
title: How to Contribute
---

Contributions are welcome! Besides committing the code, you can also share your practice experience, ask questions you encountered in use, solve exsiting problems and improve the OpenYurt documentations in the community. All of these contributions will eventually be in the form of issue, pull request and review. This article will give an introduction of how to sumbit issus, pull request and review.

## Issue

You can submit a issue of the problem you encountered, your suggestion and the capability you need. Steps are as follows:

1. Click `New issue` at [the issue interface](https://github.com/openyurtio/openyurt/issue) to create a new issue.
2. Select the kind of the issue and `Get started`.
3. Fill the title of the issue and the content of the given issue template.
4. Finally `Submit new issue`.

## Pull Request

Before coding, in order to avoid duplication of work, you had better to search the community to check if someone has been working on a same problem. Before submitting a Pull Request, you should check your local git repository and keep pace with the OpenYurt repo to avoid the merge conflict. In addition, you should have some knowledge of how does the OpenYurt [CI Workflow](./ci-workflow.md) work.

After committing to your forked OpenYurt repository, you can submit a pull request to the official OpenYurt repository, asking for the merge of your change. Steps are as follows:

1. Push the code at your local host to your forked OpenYurt repository.
2. Login the Github and enter your OpenYurt repository.
3. Click `New pull request` at the pull request interface and select your branch to merge.
4. Click `Create pull request` and fill the content of the given pull request template.
5. Finally click `Create pull request` to submit the pull request, and you can find it at [the pull request interface of OpenYurt](https://github.com/openyurtio/openyurt/pulls).

In most cases, one pull request should only focus on one work, such as fixing a bug. Thus, only one commit should be contained in one pull request. You should amend your pull request if you find that there are more than one commits in it, using `git reset` and `git commit` at your local host. After your amending, you can push it to your forked openyurt repository through `git push`(usually need to do forcely, take caution). The submitted pull request will sync with the branch you select to merge(at step 3), and no need to create a new pull request.

You should check the CI workflow after submitting your pull request and make all the check passed. Then, you just need to wait for the review and approval from community members. If the community accepts your pull request, it will be labeled as `lgtm`(looks good to me) and `approve`.

## Review

Review means check others' pull requests. Everyone are welcome to take part in the review work. It's simple than pull request. You can leave your comment at the code you have interest in. Steps are as follows:

1. Select a pull request at [the pull request interface](https://github.com/openyurtio/openyurt/pulls).
2. Click `Files changed` to check what change the pull request introduced.
3. Click `+` at the left of the code line and leave your comment. At the first time, you need to click `Start a review`, and later you can click `Add review comment`.
4. Click `Finish your review` on the top right and `Submit review`.

Then you can just wait for the reply from the author of this pull request.

## At Last

The openyurt is the only one of the repositories under [the openyurtio organization](https://github.com/openyurtio), for example the website you are browsing are mantained in [openyurt.io repository](https://github.com/openyurtio/openyurt.io). All of these repositories consist the OpenYurt. Welcome to explore capabilities of each repository and make OpenYurt better.
