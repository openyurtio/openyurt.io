# Running Kata Containers runtime on the Edge Node

In this article, we will cover the steps to install and set up the entire toolchain for running Kata Containers as a Pod for the OCI runtime in an OpenYurt cluster. 

[Kata Containers](https://katacontainers.io/) are lightweight and secure containers that are OCI compliant and [k8s compatible](https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/run-kata-with-k8s.md). Compared to Linux containers, Kata Containers works to build a secure container runtime with lightweight virtual machines that feel and perform like containers but provide stronger workload isolation using hardware virtualization technology as a second layer of defense.

## 1 Before we start

Close the swap space of the master and node firstly.

```shell
sudo swapoff -a      
free -m    // verify
```

Next, configure the file `/etc/hosts` of two nodes.

```
127.0.0.1 localhost
127.0.1.1 vagrant

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
127.0.2.1 k8s-node01 k8s-node01
192.168.44.140 k8s-master
192.168.44.141 k8s-node01
```

Then, load the `br_netfilter` Kernel module and modify the Kernel parameter.

```shell
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

```shell
sudo vim /etc/sysctl.d/10-network-security.conf
echo 1 > /proc/sys/net/ipv4/ip_forward
sudo sysctl --system
```

## 2 Install OpenYurt

Now, we can install OpenYurt on the Edge node to control the Containerd, Kata Containers stack below it. 

An easier way to set up an OpenYurt Cluster is to go to the OpenYurt Experience Center. All you need to do is to sign up for an account for testing, and then you will get an OpenYurt cluster. Next, you could just use `yurtctl join` command line to join an edge node. [See more details here](https://openyurt.io/docs/installation/openyurt-experience-center/overview/).

Alternatively, you can convert a K8s  cluster to an OpenYurt cluster using `yurtctl convert` from scratch according to [the guide](https://openyurt.io/docs/next/installation/yurtctl-convert-revert).

## 3 Set up a K8s cluster

Here we use `yurtctl convert` to convert the k8s cluster to an OpenYurt cluster, so we need to build a k8s cluster first. One thing to note, if you used `yurtctl init/join` to set up an OpenYurt cluster and join nodes, you can skip this step. 

```shell
$ sudo apt-get update && sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https
// add K8s source
$ curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -
$ sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF
$ deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
// install K8s components 1.18.9
$ sudo apt-get update && sudo apt-get install -y kubelet=1.18.9-00 kubeadm=1.18.9-00 kubectl=1.18.9-00 
// Initialize the master node
$ sudo kubeadm init --pod-network-cidr 172.16.0.0/16 \
--apiserver-advertise-address=192.168.3.167 \
--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers
// join the work node
$ kubeadm join 192.168.3.167:6443 --token 3zefbt.99e6denc1cxpk9fg \
   --discovery-token-ca-cert-hash sha256:8077d4e7dd6eee64a999d56866ae4336073ed5ffc3f23281d757276b08b9b195
```

## 4 Install Containerd

Use the following commands to install containerd on your edge node.

```shell
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

### 4.1 Configuration file

The Containerd needs a configuration file to start. When Containerd is started, it will start according to this configuration file. The default location is: `/etc/containerd/config.toml`.
Created with the following command: 

```shell
containerd config default > /etc/containerd/config.toml
```

## 5 Install Kata Containers

Using Kata Containers as an OCI runtime requires Kata to be installed on the nodes of the Kubernetes cluster. 

Install by downloading the latest compressed package from GitHub, or download other versions for installation if necessary. 

### 5.1 Download Kata Containers

There is no Kata 2.x version of the installation package on Ubuntu, that is, it cannot be installed through `apt`. 
Download and unzip: 

```shell
wget https://github.com/kata-containers/kata-containers/releases/download/2.3.3/kata-static-2.3.3-x86_64.tar.xz
tar -C / -Jxvf kata-static-2.3.3-x86_64.tar.xz
```

All Kata files will be extracted to `/opt/kata/`. Kata's configuration files are under `/opt/kata/share/defaults/kata-containers/`, each Hypervisor has a corresponding file, and `QEMU` is used by default.

```shell
$ ls -tl /opt/kata/share/defaults/kata-containers/

total 64
-rw-r--r-- 1 1001 121 14828 Jan  6 11:55 configuration-fc.toml
-rw-r--r-- 1 1001 121 24159 Jan  6 11:55 configuration-qemu.toml
lrwxrwxrwx 1 1001 121    23 Jan  6 11:55 configuration.toml -> configuration-qemu.toml
-rw-r--r-- 1 1001 121  9405 Jan  6 11:55 configuration-acrn.toml
-rw-r--r-- 1 1001 121 11528 Jan  6 11:55 configuration-clh.toml
```

### 5.2 Configure `kata` as `runtime`

Add Kata runtime for `containerd`. This requires editing the `/etc/containerd/config.toml` file and adding the following content in the appropriate location (note the nesting relationship of the configuration items).

```shell
$ vim /etc/containerd/config.toml

        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata]
          runtime_type = "io.containerd.kata.v2"
          pod_annotations = ["io.katacontainers.*"]
          privileged_without_host_devices = true
```

Then restart `containerd`: 

```shell
systemctl start containerd
```

## 6 Run a Kata Containers as a Pod for the OCI runtime 

Next, let's run a pod with Kata as the OCI runtime in the OpenYurt cluster. 

### 6.1 Create Kata Runtime Class resource

RuntimeClass is a feature used to select the container runtime configuration used to run the containers in the Pod. Different RuntimeClasses can be set on different Pods to provide a balance between performance and security. 

A RuntimeClass object needs to be created for each handler.
The RuntimeClass resource currently has only two important fields: the RuntimeClass name (metadata.name) and handler (handler). The object definition looks like this: 

```shell
$ vim runtimeclass-kata.yaml

apiVersion: node.k8s.io/v1
kind: RuntimeClass
metadata:
  name: kata  # The name used to refer to the RuntimeClass 
handler: kata  # The name of the corresponding CRI configuration
```

Use `kubectl apply` to load the RuntimeClass: 

```shell
kubectl apply -f runtimeclass-kata.yaml
```

### 6.2 Start a Pod with Kata as the runtime

Use the `yaml` file to configure the parameters of the Pod: 

```shell
$ vim nginx-kata.yaml

apiVersion: v1
kind: Pod
metadata:
  name: nginx-kata
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  nodeSelector:
    disktype: k8s-node01	# Set up running pods on k8s-node01 
  runtimeClassName: kata	# Set the runtime to Kata 
```

Create and start a Pod: 

```shell
$ kubectl create -f nginx-kata.yaml
```

Get Pod info: 

```shell
$ kubectl get pod -o wide

NAME         READY   STATUS    RESTARTS   AGE   IP             NODE           NOMINATED NODE   READINESS GATES
nginx-kata   1/1     Running   0          35s   192.168.1.21   k8s-worker01   <none>           <none>
```

Use `crictl` on the k8s-node01 node to see that the runtime used by the Pod is Kata: 

```shell
$ crictl pods

POD ID              CREATED              STATE               NAME                        NAMESPACE           ATTEMPT             RUNTIME
7e74e3aba1cd9       49 seconds ago       Ready               nginx-kata                  default             0                   kata
```