# Running WasmEdge runtime on the Edge Node

In this article, we will cover the steps to install and set up the entire toolchain for running a WasmEdge application in OpenYurt Cluster.

[WasmEdge](https://wasmedge.org/)(Project under CNCF) is a [OCI-compliant and k8s compatible](https://wasmedge.org/book/en/kubernetes.html) lightweight WebAssembly runtime. It provides an alternative to [Linux containers](https://wasmedge.org/wasm_linux_container/) for containerized apps on edge. WasmEdge provides capability-based secure sandboxes, makes a very little assumption about the underlying OS services, and at the same time, supports [multiple programming languages](https://wasmedge.org/book/en/dev.html) on the front end. 

### Before we start

Close the swap space of the master and node firstly.

```
sudo swapoff -a
//verify    
free -m
```

Next, let’s configure the file `/etc/hosts` of two nodes.


Then, load the `br_netfilter` Kernel module and modify the Kernel parameter.

```
//load the module
sudo modprobe br_netfilter
//verify   
lsmod | grep br_netfilter
// create k8s.conf
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sudo sysctl --system 
```

Last, setup the value of  `rp-filter` - adjusting the value of two parameters in `/etc/sysctl.d/10-network-security.conf` from 2 to 1 and setting up the value of `/proc/sys/net/ipv4/ip_forward` to 1.

```
sudo vi /etc/sysctl.d/10-network-security.conf 
echo 1 > /proc/sys/net/ipv4/ip_forward
sudo sysctl --system
```

#### Install OpenYurt

An easier way to set up an OpenYurt Cluster is to go to the OpenYurt Experience Center. All you need to do is to sign up for an account for testing, and then you will get an OpenYurt cluster. Next, you could just use `yurtctl join` command line to join an edge node. [See more details here](https://openyurt.io/docs/installation/openyurt-experience-center/overview/).

Alternatively, you can convert a K8s  cluster to an OpenYurt cluster using `yurtctl convert` from scratch according to [the guide](https://openyurt.io/docs/next/installation/yurtctl-convert-revert).

### Install containerd

Use the following commands to install containerd on your edge node.

```
export VERSION="1.5.7"
echo -e "Version: $VERSION"
echo -e "Installing libseccomp2 ..."
sudo apt install -y libseccomp2
echo -e "Installing wget"
sudo apt install -y wget

wget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz
wget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum 
sha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum

sudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz
sudo systemctl daemon-reload
```


As the crun project support WasmEdge as default, we just need to configure the containerd configuration for runc. So we need to modify the runc parameters in `/etc/containerd/config.toml` to curn and add `pod_annotation`.

```
sudo mkdir -p /etc/containerd/
sudo bash -c "containerd config default > /etc/containerd/config.toml"
wget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/containerd/containerd_config.diff
sudo patch -d/ -p0 < containerd_config.diff
```

After that, restart containerd to make the configuration take effect.

```
sudo systemctl start containerd
```

### Install WasmEdge

Use the [simple install script](https://wasmedge.org/book/en/start/install.html) to install WasmEdge on your edge node. 

```
curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash
```

### Build and install crun

We need a crun binary that supports WasmEdge on the edge node. For now, the most straightforward approach is to build it yourself from the source. First, let's ensure that crun dependencies are installed on your Ubuntu 20.04. For other Linux distributions, please [see here](https://github.com/containers/crun#readme).

```
sudo apt update
sudo apt install -y make git gcc build-essential pkgconf libtool \
    libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \
    go-md2man libtool autoconf python3 automake
```

Next, configure, build, and install a crun binary with WasmEdge support.

```
git clone https://github.com/containers/crun
cd crun
./autogen.sh
./configure --with-wasmedge
make
sudo make install
```

### Run a simple WebAssembly app

Next, let's run a WebAssembly program through the Kubernetes cluster as a container in the pod. This section will start off pulling this WebAssembly-based container image from Docker hub. If you want to learn how to compile, package, and publish the WebAssembly program as a container image to Docker hub, please refer to [WasmEdge Book](https://wasmedge.org/book/en/kubernetes/demo/wasi.html).

Enter the following commands from another terminal window in the master node, and start using the cluster.

```
root@master:~# kubectl cluster-info
Kubernetes master is running at https://192.168.3.167:6443
KubeDNS is running at https://192.168.3.167:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
```

Because the kubectl 1.18.9 missed annotations parameters, we need to adjust the command line here. If you are using OpenYurt Experience Center with OpenYurt 0.6.0 and Kubernetes 1.20.11 by default, please refer to the [Kubernetes sections](https://wasmedge.org/book/en/kubernetes/kubernetes.html) in the WasmEdge book to run the wasm app.

```
// kubectl 1.18.9
$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation  --overrides='{"kind":"Pod","metadata":{"annotations":{"module.wasm.image/variant":"compat"}} , "apiVersion":"v1", "spec": {"hostNetwork": true}}' /wasi_example_main.wasm 50000000

// kubectl 1.20.11
$ ​​sudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation --annotations="module.wasm.image/variant=compat" --overrides='{"kind":"Pod", "apiVersion":"v1", "spec": {"hostNetwork": true}}' /wasi_example_main.wasm 50000000
```

The output from the containerized application is printed into the console. It is the same for all Kubernetes versions.

```
Random number: 1123434661
Random bytes: [25, 169, 202, 211, 22, 29, 128, 133, 168, 185, 114, 161, 48, 154, 56, 54, 99, 5, 229, 161, 225, 47, 85, 133, 90, 61, 156, 86, 3, 14, 10, 69, 185, 225, 226, 181, 141, 67, 44, 121, 157, 98, 247, 148, 201, 248, 236, 190, 217, 245, 131, 68, 124, 28, 193, 143, 215, 32, 184, 50, 71, 92, 148, 35, 180, 112, 125, 12, 152, 111, 32, 30, 86, 15, 107, 225, 39, 30, 178, 215, 182, 113, 216, 137, 98, 189, 72, 68, 107, 246, 108, 210, 148, 191, 28, 40, 233, 200, 222, 132, 247, 207, 239, 32, 79, 238, 18, 62, 67, 114, 186, 6, 212, 215, 31, 13, 53, 138, 97, 169, 28, 183, 235, 221, 218, 81, 84, 235]
Printed from wasi: This is from a main function
This is from a main function
The env vars are as follows.
The args are as follows.
/wasi_example_main.wasm
50000000
File content is This is in a file
pod "wasi-demo" deleted
```

You can now check out the pod status through the Kubernetes command line.

```
crictl ps -a
```

You can see the events from scheduling to running the WebAssembly workload in the log. 

```
CONTAINER           IMAGE               CREATED             STATE               
NAME                 ATTEMPT             POD ID
0c176ed65599a       0423b8eb71e31       8 seconds ago       Exited              wasi-demo    
```

That's it!


