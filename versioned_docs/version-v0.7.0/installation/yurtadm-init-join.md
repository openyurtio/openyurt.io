---
title: Yurtadm init/join
---

## 1.Background

In order to allow users to quickly obtain an OpenYurt test cluster, OpenYurt provides the command Yurtadm init to initialize the cluster. Users only need to select the version of the OpenYurt cluster mirror to create the corresponding version of OpenYurt. Then Yurt-APP-Manager, Yurt-Controller-Manager, Yurttunnel -Server, Yurttunnel-Agent components will be automatically deployed.

To expand the cluster later, users can use the Yurtadm join command to add edge nodes or cloud nodes to the cluster.

## 2.Process

### 2.1 Compile Yurtadm
When initializing the cluster, you need to obtain the Yurtadm executable first. To quickly build and install yurtadm, you can execute the following command to complete the installation if the build system has golang 1.13+ and bash installed:

```sh
$ git clone https://github.com/openyurtio/openyurt.git
$ cd openyurt
$ make build WHAT="yurtadm" ARCH="amd64" REGION=cn
```

The executable will be stored in the `_output/local/bin/` directory, depends on the platform.

### 2.2 Initialize the cluster

Execute the following command to initialize the cluster:

```sh
$ _output/local/bin/linux/amd64/yurtadm init --apiserver-advertise-address 1.2.3.4 --openyurt-version latest --passwd 1234
```

The main parameters are:

```sh
 --apiserver-advertise-address    IP address of the master node
 --passwd                         ssh password of the master node
 --openyurt-version               version of the OpenYurt cluster
```

Use `-h`  to configure more information.

### 2.3Joining nodes to cluster

Users can join cloud nodes and edge nodes to the OpenYurt cluster using Yurtadm join. Note that when joining a node, the runtime needs to be installed on the node and the swap partition is turned off.

Execute the following command to join the edge node to cluster:

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --v=5
```

Execute the following command to join the cloud node to cluster:

```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud --discovery-token-unsafe-skip-ca-verification --v=5
```

When the runtime of the edge node is containerd, the `cri-socket` parameter needs to be configured. For example, change the command above of joining the edge node to:
```sh
$ _output/local/bin/linux/amd64/yurtadm join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge --discovery-token-unsafe-skip-ca-verification --cri-socket=/run/containerd/containerd.sock --v=5
```


## 3.Implement details
### 3.1 Yurtadm init
In order to reduce the difficulty of using Yurtadm init and improve the success probability of cluster installation, Yurtadm init initializes the OpenYurt cluster through the open source tool [sealer](https://github.com/alibaba/sealer). In terms of implementation, Yurtadm init will download the sealer binary file, and sealer will download the cluster image officially provided by OpenYurt and install the cluster. In addition, Yurtadm init also supports user-specific configuration of OpenYurt cluster images.
