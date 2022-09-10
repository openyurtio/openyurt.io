---
title: Yurtadm init
---

## 1. Background

In order to allow users to quickly obtain an OpenYurt test cluster, OpenYurt provides the command Yurtadm init to initialize the cluster. Users only need to select the version of the OpenYurt cluster mirror to create the corresponding version of OpenYurt. Then Yurt-APP-Manager, Yurt-Controller-Manager, Yurttunnel -Server, Yurttunnel-Agent components will be automatically deployed.

To expand the cluster later, users can use the Yurtadm join command to add edge nodes or cloud nodes to the cluster.

## 2. Process

### 2.1 Compile yurtadm

When initializing the cluster, you need to obtain the Yurtadm executable first. To quickly build and install yurtadm, you can execute the following command to complete the installation if the build system has golang at least 1.13 up to 1.17 and bash installed:

```
git clone https://github.com/openyurtio/openyurt.git
cd openyurt
make build WHAT="yurtadm" ARCH="amd64" REGION=cn
```

The executable will be stored in the `_output/local/bin/linux/amd64/` directory, depends on the platform.

```
cp _output/local/bin/linux/amd64/yurtadm /usr/local/bin/
```

### 2.2 Yurtadm init

`yurtadm init` can initialize an openyurt cluster with the latest version (the current kubernetes version is 1.22.8).

Example：

```
yurtadm init --apiserver-advertise-address=47.115.228.119 --yurt-tunnel-server-address=47.115.228.119 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/12
```

Explanation of parameters:

- `--apiserver-advertise-address`：The ip address of the master node of the cluster to be installed
- `--yurt-tunnel-server-address`：The address of yurt-tunnel-server
- `--pod-network-cidr`：PodSubnet
- `--service-cidr`：ServiceSubnet

`yurtadm init` installs the cluster using sealer. This process automatically installs the following components:

- kubeadm
- kubectl
- kubelet
- kube-proxy
- docker

**Additional Operations**

The k8s base image in sealer (current v0.8.6 version) will be stored in the sea.hub:5000 registry, so the `sea.hub:5000/kube-proxy:v1.22.8` image pull of the edge node will be ImagePullBackOff. So here you need to manually `kubectl edit ds kube-proxy -n kube-system`, and replace the image with `registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.22.8`

## 3. Implementation details

`yurtadm init` is implemented using `sealer run`.

The related files of the openyurt cluster image produced by sealer will be placed in the `/var/lib/sealer/data/my-cluster/rootfs` directory. See all file related information: ：https://github.com/windydayc/openyurt-cluster-image



## 4. FAQ

**1\. helm installation error during yurtadm init： Release "yurt-app-manager" does not exist. Installing it now.**
**Error: failed to download "openyurt/yurt-app-manager" (hint: running `helm repo update` may help)**

Manually execute the process of helm to install yurt-app-manager：

```bash
cd /var/lib/sealer/data/my-cluster/rootfs
helm upgrade --install yurt-app-manager openyurt/yurt-app-manager -n kube-system -f manifests/yurt-app-manager-values.yaml
```



**2. yurtadm init failed, how to clean up the environment?**

http://sealer.cool/zh/help/faq.html#how-to-clean-host-environment-manually-when-sealer-apply-failed
