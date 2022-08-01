"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[1123],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={},i="Running Kata Containers runtime on the Edge Node",l={unversionedId:"user-manuals/runtime/KataContainers",id:"version-v0.6.0/user-manuals/runtime/KataContainers",title:"Running Kata Containers runtime on the Edge Node",description:"In this article, we will cover the steps to install and set up the entire toolchain for running Kata Containers as a Pod for the OCI runtime in an OpenYurt cluster.",source:"@site/versioned_docs/version-v0.6.0/user-manuals/runtime/KataContainers.md",sourceDirName:"user-manuals/runtime",slug:"/user-manuals/runtime/KataContainers",permalink:"/docs/v0.6.0/user-manuals/runtime/KataContainers",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/runtime/KataContainers.md",tags:[],version:"v0.6.0",lastUpdatedBy:"yaoyinnan@foxmail.com",lastUpdatedAt:1647771005,formattedLastUpdatedAt:"Mar 20, 2022",frontMatter:{}},s={},u=[{value:"1 Before we start",id:"1-before-we-start",level:2},{value:"2 Install OpenYurt",id:"2-install-openyurt",level:2},{value:"3 Set up a K8s cluster",id:"3-set-up-a-k8s-cluster",level:2},{value:"4 Install Containerd",id:"4-install-containerd",level:2},{value:"4.1 Configuration file",id:"41-configuration-file",level:3},{value:"5 Install Kata Containers",id:"5-install-kata-containers",level:2},{value:"5.1 Download Kata Containers",id:"51-download-kata-containers",level:3},{value:"5.2 Configure <code>kata</code> as <code>runtime</code>",id:"52-configure-kata-as-runtime",level:3},{value:"6 Run a Kata Containers as a Pod for the OCI runtime",id:"6-run-a-kata-containers-as-a-pod-for-the-oci-runtime",level:2},{value:"6.1 Create Kata Runtime Class resource",id:"61-create-kata-runtime-class-resource",level:3},{value:"6.2 Start a Pod with Kata as the runtime",id:"62-start-a-pod-with-kata-as-the-runtime",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-kata-containers-runtime-on-the-edge-node"},"Running Kata Containers runtime on the Edge Node"),(0,r.kt)("p",null,"In this article, we will cover the steps to install and set up the entire toolchain for running Kata Containers as a Pod for the OCI runtime in an OpenYurt cluster. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://katacontainers.io/"},"Kata Containers")," are lightweight and secure containers that are OCI compliant and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/run-kata-with-k8s.md"},"k8s compatible"),". Compared to Linux containers, Kata Containers works to build a secure container runtime with lightweight virtual machines that feel and perform like containers but provide stronger workload isolation using hardware virtualization technology as a second layer of defense."),(0,r.kt)("h2",{id:"1-before-we-start"},"1 Before we start"),(0,r.kt)("p",null,"Close the swap space of the master and node firstly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo swapoff -a      \nfree -m    // verify\n")),(0,r.kt)("p",null,"Next, configure the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," of two nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1 localhost\n127.0.1.1 vagrant\n\n# The following lines are desirable for IPv6 capable hosts\n::1     ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n127.0.2.1 k8s-node01 k8s-node01\n192.168.44.140 k8s-master\n192.168.44.141 k8s-node01\n")),(0,r.kt)("p",null,"Then, load the ",(0,r.kt)("inlineCode",{parentName:"p"},"br_netfilter")," Kernel module and modify the Kernel parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"//load the module\nsudo modprobe br_netfilter\n\n//verify   \nlsmod | grep br_netfilter\n\n// create k8s.conf\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsudo sysctl --system \n")),(0,r.kt)("p",null,"Last, setup the value of  ",(0,r.kt)("inlineCode",{parentName:"p"},"rp-filter")," - adjusting the value of two parameters in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d/10-network-security.conf")," from 2 to 1 and setting up the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/sys/net/ipv4/ip_forward")," to 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/sysctl.d/10-network-security.conf\necho 1 > /proc/sys/net/ipv4/ip_forward\nsudo sysctl --system\n")),(0,r.kt)("h2",{id:"2-install-openyurt"},"2 Install OpenYurt"),(0,r.kt)("p",null,"Now, we can install OpenYurt on the Edge node to control the Containerd, Kata Containers stack below it. "),(0,r.kt)("p",null,"An easier way to set up an OpenYurt Cluster is to go to the OpenYurt Experience Center. All you need to do is to sign up for an account for testing, and then you will get an OpenYurt cluster. Next, you could just use ",(0,r.kt)("inlineCode",{parentName:"p"},"yurtctl join")," command line to join an edge node. ",(0,r.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/installation/openyurt-experience-center/overview/"},"See more details here"),"."),(0,r.kt)("p",null,"Alternatively, you can convert a K8s  cluster to an OpenYurt cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"yurtctl convert")," from scratch according to ",(0,r.kt)("a",{parentName:"p",href:"https://openyurt.io/docs/next/installation/yurtctl-convert-revert"},"the guide"),"."),(0,r.kt)("h2",{id:"3-set-up-a-k8s-cluster"},"3 Set up a K8s cluster"),(0,r.kt)("p",null,"Here we use ",(0,r.kt)("inlineCode",{parentName:"p"},"yurtctl convert")," to convert the k8s cluster to an OpenYurt cluster, so we need to build a k8s cluster first. One thing to note, if you used ",(0,r.kt)("inlineCode",{parentName:"p"},"yurtctl init/join")," to set up an OpenYurt cluster and join nodes, you can skip this step. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get update && sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https\n// add K8s source\n$ curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\n$ sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF\n$ deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\n// install K8s components 1.18.9\n$ sudo apt-get update && sudo apt-get install -y kubelet=1.18.9-00 kubeadm=1.18.9-00 kubectl=1.18.9-00 \n// Initialize the master node\n$ sudo kubeadm init --pod-network-cidr 172.16.0.0/16 \\\n--apiserver-advertise-address=192.168.3.167 \\\n--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers\n// join the work node\n$ kubeadm join 192.168.3.167:6443 --token 3zefbt.99e6denc1cxpk9fg \\\n   --discovery-token-ca-cert-hash sha256:8077d4e7dd6eee64a999d56866ae4336073ed5ffc3f23281d757276b08b9b195\n")),(0,r.kt)("h2",{id:"4-install-containerd"},"4 Install Containerd"),(0,r.kt)("p",null,"Use the following commands to install containerd on your edge node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export VERSION="1.5.7"\necho -e "Version: $VERSION"\necho -e "Installing libseccomp2 ..."\nsudo apt install -y libseccomp2\necho -e "Installing wget"\nsudo apt install -y wget\n\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\n\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nsudo systemctl daemon-reload\n')),(0,r.kt)("h3",{id:"41-configuration-file"},"4.1 Configuration file"),(0,r.kt)("p",null,"The Containerd needs a configuration file to start. When Containerd is started, it will start according to this configuration file. The default location is: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config.toml"),".\nCreated with the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"containerd config default > /etc/containerd/config.toml\n")),(0,r.kt)("h2",{id:"5-install-kata-containers"},"5 Install Kata Containers"),(0,r.kt)("p",null,"Using Kata Containers as an OCI runtime requires Kata to be installed on the nodes of the Kubernetes cluster. "),(0,r.kt)("p",null,"Install by downloading the latest compressed package from GitHub, or download other versions for installation if necessary. "),(0,r.kt)("h3",{id:"51-download-kata-containers"},"5.1 Download Kata Containers"),(0,r.kt)("p",null,"There is no Kata 2.x version of the installation package on Ubuntu, that is, it cannot be installed through ",(0,r.kt)("inlineCode",{parentName:"p"},"apt"),".\nDownload and unzip: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/kata-containers/kata-containers/releases/download/2.3.3/kata-static-2.3.3-x86_64.tar.xz\ntar -C / -Jxvf kata-static-2.3.3-x86_64.tar.xz\n")),(0,r.kt)("p",null,"All Kata files will be extracted to ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/kata/"),". Kata's configuration files are under ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/kata/share/defaults/kata-containers/"),", each Hypervisor has a corresponding file, and ",(0,r.kt)("inlineCode",{parentName:"p"},"QEMU")," is used by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ls -tl /opt/kata/share/defaults/kata-containers/\n\ntotal 64\n-rw-r--r-- 1 1001 121 14828 Jan  6 11:55 configuration-fc.toml\n-rw-r--r-- 1 1001 121 24159 Jan  6 11:55 configuration-qemu.toml\nlrwxrwxrwx 1 1001 121    23 Jan  6 11:55 configuration.toml -> configuration-qemu.toml\n-rw-r--r-- 1 1001 121  9405 Jan  6 11:55 configuration-acrn.toml\n-rw-r--r-- 1 1001 121 11528 Jan  6 11:55 configuration-clh.toml\n")),(0,r.kt)("h3",{id:"52-configure-kata-as-runtime"},"5.2 Configure ",(0,r.kt)("inlineCode",{parentName:"h3"},"kata")," as ",(0,r.kt)("inlineCode",{parentName:"h3"},"runtime")),(0,r.kt)("p",null,"Add Kata runtime for ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd"),". This requires editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/containerd/config.toml")," file and adding the following content in the appropriate location (note the nesting relationship of the configuration items)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ vim /etc/containerd/config.toml\n\n        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata]\n          runtime_type = "io.containerd.kata.v2"\n          pod_annotations = ["io.katacontainers.*"]\n          privileged_without_host_devices = true\n')),(0,r.kt)("p",null,"Then restart ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start containerd\n")),(0,r.kt)("h2",{id:"6-run-a-kata-containers-as-a-pod-for-the-oci-runtime"},"6 Run a Kata Containers as a Pod for the OCI runtime"),(0,r.kt)("p",null,"Next, let's run a pod with Kata as the OCI runtime in the OpenYurt cluster. "),(0,r.kt)("h3",{id:"61-create-kata-runtime-class-resource"},"6.1 Create Kata Runtime Class resource"),(0,r.kt)("p",null,"RuntimeClass is a feature used to select the container runtime configuration used to run the containers in the Pod. Different RuntimeClasses can be set on different Pods to provide a balance between performance and security. "),(0,r.kt)("p",null,"A RuntimeClass object needs to be created for each handler.\nThe RuntimeClass resource currently has only two important fields: the RuntimeClass name (metadata.name) and handler (handler). The object definition looks like this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim runtimeclass-kata.yaml\n\napiVersion: node.k8s.io/v1\nkind: RuntimeClass\nmetadata:\n  name: kata  # The name used to refer to the RuntimeClass \nhandler: kata  # The name of the corresponding CRI configuration\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," to load the RuntimeClass: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f runtimeclass-kata.yaml\n")),(0,r.kt)("h3",{id:"62-start-a-pod-with-kata-as-the-runtime"},"6.2 Start a Pod with Kata as the runtime"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," file to configure the parameters of the Pod: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim nginx-kata.yaml\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-kata\n  labels:\n    env: test\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  nodeSelector:\n    disktype: k8s-node01    # Set up running pods on k8s-node01 \n  runtimeClassName: kata    # Set the runtime to Kata \n")),(0,r.kt)("p",null,"Create and start a Pod: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create -f nginx-kata.yaml\n")),(0,r.kt)("p",null,"Get Pod info: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod -o wide\n\nNAME         READY   STATUS    RESTARTS   AGE   IP             NODE           NOMINATED NODE   READINESS GATES\nnginx-kata   1/1     Running   0          35s   192.168.1.21   k8s-worker01   <none>           <none>\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"crictl")," on the k8s-node01 node to see that the runtime used by the Pod is Kata: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ crictl pods\n\nPOD ID              CREATED              STATE               NAME                        NAMESPACE           ATTEMPT             RUNTIME\n7e74e3aba1cd9       49 seconds ago       Ready               nginx-kata                  default             0                   kata\n")))}d.isMDXComponent=!0}}]);