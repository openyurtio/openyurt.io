---
title: yurtadm
---

**1. yurtadm join error: crictl not found in system path**

The node has not installed the container runtime (such as docker), please install the container runtime before joining the node.

**2. yurtadm join error: [ERROR FileExisting-conntrack]: conntrack not found in system path**

Execute `yum install -y conntrack` and then re-execute the yurtadm join command.

**3. How does yurtadm join support user-provided cni plugins**

`yurtadm join` will pull the specially modified cni binary files by default. For the modified content, please refer to [link](../user-manuals/network/container-network/flannel.md). If you want to use pre-prepared cni binaries, they should be placed in the directory `/opt/cni/bin`, and then add the `--reuse-cni-bin=true` parameter when using `yurtadm join` .

**4. How does yurtadm join support components such as kubelet/kubeadm provided by users**

Users can prepare the `kubelet` and `kubeadm` components in the PATH environment variable. However, there are some restrictions on the versions of `kubelet` and `kubeadm`. `yurtadm` will check whether the `major version` and `minor version` of the component are the same as the cluster Kubernetes Server version (this follows the semver specification). If the versions are inconsistent, Prepared kubelet/kubeadm will be skipped and kubelet/kubeadm will be pulled from the official link according to the Kubernetes Server version.

**5. yurtadm join failed to access the node, how to solve it**

First, you can analyze the error log of `yurtadm join` to locate the stage where the error occurred. If the yurthub component cannot be started normally, please refer to [yurthub faq](./yurthub.md)