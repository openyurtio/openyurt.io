---
title: FAQ
---


## **yurtadm**

**1. yurtadm join error：crictl not found in system path**

The node does not have docker installed, and installing docker can solve this problem.


**2. yurtadm join error：[ERROR FileExisting-conntrack]: conntrack not found in system path**

Execute `yum install -y conntrack` and then retry the yurtadm join command again.


**3. helm installation error during yurtadm init： Release "yurt-app-manager" does not exist. Installing it now.**
**Error: failed to download "openyurt/yurt-app-manager" (hint: running `helm repo update` may help)**

Perform the helm installation process manually：

```bash
cd /var/lib/sealer/data/my-cluster/rootfs
helm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml
```

**4. yurtadm init failed, how to clean up the environment?**

Since `yurtadm init` uses [sealer](http://sealer.cool/) to create an OpenYurt cluster from scratch, you can refer to [this](http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed) to clean up the environment.


## **yurt-tunnel**

**1. kubectl logs edge node error：error: Error from server (ServiceUnavailable): the server is currently unable to handle the request ( pods/log xxx)** 

For more details about this problem, you can refer to [issue 984](https://github.com/openyurtio/openyurt/issues/984).

Please make sure that you are using the latest `yurt-tunnel-server/agent` image (the latest tag of image is confusing, please check the created time).

**2. kubectl logs edge node error：error: You must be logged in to the server (the server has asked for the client to provide credentials ( pods/log xxx))** 

For more details about this problem, you can refer to [issue 984](https://github.com/openyurtio/openyurt/issues/984).

This is most likely to be an issue caused by outdated tunnel server certificate. You can clean up the tunnel server certificate and redeploy yurt-tunnel-server.

```bash
rm -rf /var/lib/yurttunnel-server/pki
kubectl delete pod yurt-tunnel-server-xxxxxx -n kube-system
```