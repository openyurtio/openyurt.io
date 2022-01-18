---
title: OpenYurt Experience Center Introduction
---

> [Experience Center-Beta](http://139.224.236.157/) has been ready, feel free to use and submit feedback. The domain name is under applying, and the subsequent release version will use `lab.openyurt.io` as the domain name.

## Overview

As an edge cloud native project, OpenYurt involves both edge computing and cloud native areas, many edge computing developers are not familiar with cloud native related technologies. In order to lower the threshold of using OpenYurt and help more developers get started with OpenYurt quickly, our community has launched a platform called OpenYurt Experience Center. Instead of building an OpenYurt cluster from scratch, new users who want to try out OpenYurt's features can simply apply for a test account on the platform and have an available OpenYurt cluster right away.

![](../../../../static/img/docs/installation/openyurt-experience-center/register_blank.png)

## Features

Platform will assign an OpenYurt cluster to each [registered user](./user.md). (Note that this cluster is not a full-featured K8s cluster and this means users can only be active under their own namespace; see the Experience Center's architecture for details)

OpenYurt Experience Center has provided two ways to use OpenYurt cluster:

1. Users can use the [Web Console](./web_console.md) provided by platform to manage the cluster. The console displays the status of the cluster and provides some common operations, such as: user management, node access, node autonomy settings, lab quick deployment, and so on.

![](../../../../static/img/docs/installation/openyurt-experience-center/web_overview.png)

2. The Experience Center also provides access via [`kubeconfig`](./kubeconfig.md), where users can configure `kubeconfig` locally and operate the cluster via the `kubectl` command.

![](../../../../static/img/docs/installation/openyurt-experience-center/web_kubeconfig.png)

## Architecture

![](../../../../static/img/docs/installation/openyurt-experience-center/arch.png)

> [Yurt-dashboard](https://github.com/openyurtio/yurt-dashboard) is open source and welcomes your feedback.
> Besides, if you are interested in the implementation of the experience center, you can refer to the [video discussion](https://www.bilibili.com/video/BV1pf4y1K7M4) of biweekly meetings.

The experience center consists of three main parts:

1. Yurt Dashboard: yurt-dashboard is a web console similar to the kubernetes dashboard that contains front-end and back-end web applications. The front-end provides a graphical interface, while the back-end is responsible for communicating with the cluster's API Server.
2. Account Controller: user information of the platform is stored in the cluster as CRD. Account Controller is responsible for managing the creation and deletion of user accounts and related resources (e.g. namespace, certificates, etc).
3. Autonomy Sidecar: all users in experience center share the same OpenYurt cluster. The Autonomy component implements multi-tenant isolation of the cluster, so that each user shares the same Master, but has exclusive access to its own edge resources.
