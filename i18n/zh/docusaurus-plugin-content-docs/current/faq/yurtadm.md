---
title: yurtadm
---

**1. yurtadm join 报错：crictl not found in system path**

节点没有安装好container runtime(如docker)，节点接入前请先自行安装好container runtime。

**2. yurtadm join 报错：[ERROR FileExisting-conntrack]: conntrack not found in system path**

执行 `yum install -y conntrack` 然后重新执行 yurtadm join 命令即可。

**3. yurtadm join如何支持用户提供的cni插件**

`yurtadm join`默认会拉取经过特殊修改的cni二进制文件，修改的内容可以参考[链接]。如果你想要使用预先准备好的cni二进制文件，应该将它们放置在目录`/opt/cni/bin`下，接着在使用`yurtadm join`时添加`--reuse-cni-bin=true`参数。

**4. yurtadm join如何支持用户提供的kubelet/kubeadm等组件**

用户可以将`kubelet`和`kubeadm`组件提前预置在PATH环境变量中。不过对于`kubelet`和`kubeadm`的版本有一些限制，`yurtadm`会检查组件的`major version`和`minor version`是否与集群Kubernetes Server版本相同(这遵循semver规范)，如何版本不一致，yurtadm会根据Kubernetes Server版本从官方链接中拉取kubelet/kubeadm。

**5. yurtadm join接入节点失败，如何解决**

首先可以分析yurtadm join的错误日志，定位是在哪个阶段出错。如果和yurthub组件无法正常启动，可以参考[yurthub faq](./yurthub.md)