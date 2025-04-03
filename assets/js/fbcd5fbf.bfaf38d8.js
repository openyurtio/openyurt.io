"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[71475],{86462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"user-manuals/runtime/WasmEdge","title":"Running WasmEdge runtime on the Edge Node","description":"In this article, we will cover the steps to install and set up the entire toolchain for running a WasmEdge application in OpenYurt Cluster.","source":"@site/versioned_docs/version-v0.6.0/user-manuals/runtime/WasmEdge.md","sourceDirName":"user-manuals/runtime","slug":"/user-manuals/runtime/WasmEdge","permalink":"/docs/v0.6.0/user-manuals/runtime/WasmEdge","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/runtime/WasmEdge.md","tags":[],"version":"v0.6.0","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{},"sidebar":"docs","previous":{"title":"containerd","permalink":"/docs/v0.6.0/user-manuals/runtime/containerd"},"next":{"title":"Cloud-Edge-Device DevOps Collaboration","permalink":"/docs/v0.6.0/best-practices/practices-1"}}');var s=t(74848),i=t(28453);const a={},o="Running WasmEdge runtime on the Edge Node",d={},l=[{value:"Before we start",id:"before-we-start",level:3},{value:"Install OpenYurt",id:"install-openyurt",level:4},{value:"Install containerd",id:"install-containerd",level:3},{value:"Install WasmEdge",id:"install-wasmedge",level:3},{value:"Build and install crun",id:"build-and-install-crun",level:3},{value:"Run a simple WebAssembly app",id:"run-a-simple-webassembly-app",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"running-wasmedge-runtime-on-the-edge-node",children:"Running WasmEdge runtime on the Edge Node"})}),"\n",(0,s.jsx)(n.p,{children:"In this article, we will cover the steps to install and set up the entire toolchain for running a WasmEdge application in OpenYurt Cluster."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://wasmedge.org/",children:"WasmEdge"}),"(Project under CNCF) is a ",(0,s.jsx)(n.a,{href:"https://wasmedge.org/book/en/kubernetes.html",children:"OCI-compliant and k8s compatible"})," lightweight WebAssembly runtime. It provides an alternative to ",(0,s.jsx)(n.a,{href:"https://wasmedge.org/wasm_linux_container/",children:"Linux containers"})," for containerized apps on edge. WasmEdge provides capability-based secure sandboxes, makes a very little assumption about the underlying OS services, and at the same time, supports ",(0,s.jsx)(n.a,{href:"https://wasmedge.org/book/en/dev.html",children:"multiple programming languages"})," on the front end."]}),"\n",(0,s.jsx)(n.h3,{id:"before-we-start",children:"Before we start"}),"\n",(0,s.jsx)(n.p,{children:"Close the swap space of the master and node firstly."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo swapoff -a\r\n//verify    \r\nfree -m\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, let\u2019s configure the file ",(0,s.jsx)(n.code,{children:"/etc/hosts"})," of two nodes."]}),"\n",(0,s.jsxs)(n.p,{children:["Then, load the ",(0,s.jsx)(n.code,{children:"br_netfilter"})," Kernel module and modify the Kernel parameter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"//load the module\r\nsudo modprobe br_netfilter\r\n//verify   \r\nlsmod | grep br_netfilter\r\n// create k8s.conf\r\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\r\nnet.bridge.bridge-nf-call-ip6tables = 1\r\nnet.bridge.bridge-nf-call-iptables = 1\r\nEOF\r\nsudo sysctl --system \n"})}),"\n",(0,s.jsxs)(n.p,{children:["Last, setup the value of  ",(0,s.jsx)(n.code,{children:"rp-filter"})," - adjusting the value of two parameters in ",(0,s.jsx)(n.code,{children:"/etc/sysctl.d/10-network-security.conf"})," from 2 to 1 and setting up the value of ",(0,s.jsx)(n.code,{children:"/proc/sys/net/ipv4/ip_forward"})," to 1."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo vi /etc/sysctl.d/10-network-security.conf \r\necho 1 > /proc/sys/net/ipv4/ip_forward\r\nsudo sysctl --system\n"})}),"\n",(0,s.jsx)(n.h4,{id:"install-openyurt",children:"Install OpenYurt"}),"\n",(0,s.jsxs)(n.p,{children:["An easier way to set up an OpenYurt Cluster is to go to the OpenYurt Experience Center. All you need to do is to sign up for an account for testing, and then you will get an OpenYurt cluster. Next, you could just use ",(0,s.jsx)(n.code,{children:"yurtctl join"})," command line to join an edge node. ",(0,s.jsx)(n.a,{href:"https://openyurt.io/docs/installation/openyurt-experience-center/overview/",children:"See more details here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can convert a K8s  cluster to an OpenYurt cluster using ",(0,s.jsx)(n.code,{children:"yurtctl convert"})," from scratch according to ",(0,s.jsx)(n.a,{href:"https://openyurt.io/docs/next/installation/yurtctl-convert-revert",children:"the guide"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"install-containerd",children:"Install containerd"}),"\n",(0,s.jsx)(n.p,{children:"Use the following commands to install containerd on your edge node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'export VERSION="1.5.7"\r\necho -e "Version: $VERSION"\r\necho -e "Installing libseccomp2 ..."\r\nsudo apt install -y libseccomp2\r\necho -e "Installing wget"\r\nsudo apt install -y wget\r\n\r\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\r\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum \r\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\r\n\r\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\r\nsudo systemctl daemon-reload\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As the crun project support WasmEdge as default, we just need to configure the containerd configuration for runc. So we need to modify the runc parameters in ",(0,s.jsx)(n.code,{children:"/etc/containerd/config.toml"})," to curn and add ",(0,s.jsx)(n.code,{children:"pod_annotation"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'sudo mkdir -p /etc/containerd/\r\nsudo bash -c "containerd config default > /etc/containerd/config.toml"\r\nwget https://raw.githubusercontent.com/second-state/wasmedge-containers-examples/main/containerd/containerd_config.diff\r\nsudo patch -d/ -p0 < containerd_config.diff\n'})}),"\n",(0,s.jsx)(n.p,{children:"After that, restart containerd to make the configuration take effect."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo systemctl start containerd\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install-wasmedge",children:"Install WasmEdge"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"https://wasmedge.org/book/en/start/install.html",children:"simple install script"})," to install WasmEdge on your edge node."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash\n"})}),"\n",(0,s.jsx)(n.h3,{id:"build-and-install-crun",children:"Build and install crun"}),"\n",(0,s.jsxs)(n.p,{children:["We need a crun binary that supports WasmEdge on the edge node. For now, the most straightforward approach is to build it yourself from the source. First, let's ensure that crun dependencies are installed on your Ubuntu 20.04. For other Linux distributions, please ",(0,s.jsx)(n.a,{href:"https://github.com/containers/crun#readme",children:"see here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo apt update\r\nsudo apt install -y make git gcc build-essential pkgconf libtool \\\r\n    libsystemd-dev libprotobuf-c-dev libcap-dev libseccomp-dev libyajl-dev \\\r\n    go-md2man libtool autoconf python3 automake\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, configure, build, and install a crun binary with WasmEdge support."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/containers/crun\r\ncd crun\r\n./autogen.sh\r\n./configure --with-wasmedge\r\nmake\r\nsudo make install\n"})}),"\n",(0,s.jsx)(n.h3,{id:"run-a-simple-webassembly-app",children:"Run a simple WebAssembly app"}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's run a WebAssembly program through the Kubernetes cluster as a container in the pod. This section will start off pulling this WebAssembly-based container image from Docker hub. If you want to learn how to compile, package, and publish the WebAssembly program as a container image to Docker hub, please refer to ",(0,s.jsx)(n.a,{href:"https://wasmedge.org/book/en/kubernetes/demo/wasi.html",children:"WasmEdge Book"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Enter the following commands from another terminal window in the master node, and start using the cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"root@master:~# kubectl cluster-info\r\nKubernetes master is running at https://192.168.3.167:6443\r\nKubeDNS is running at https://192.168.3.167:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Because the kubectl 1.18.9 missed annotations parameters, we need to adjust the command line here. If you are using OpenYurt Experience Center with OpenYurt 0.6.0 and Kubernetes 1.20.11 by default, please refer to the ",(0,s.jsx)(n.a,{href:"https://wasmedge.org/book/en/kubernetes/kubernetes.html",children:"Kubernetes sections"})," in the WasmEdge book to run the wasm app."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// kubectl 1.18.9\r\n$ sudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation  --overrides=\'{"kind":"Pod","metadata":{"annotations":{"module.wasm.image/variant":"compat"}} , "apiVersion":"v1", "spec": {"hostNetwork": true}}\' /wasi_example_main.wasm 50000000\r\n\r\n// kubectl 1.20.11\r\n$ \u200b\u200bsudo kubectl run -it --rm --restart=Never wasi-demo --image=hydai/wasm-wasi-example:with-wasm-annotation --annotations="module.wasm.image/variant=compat" --overrides=\'{"kind":"Pod", "apiVersion":"v1", "spec": {"hostNetwork": true}}\' /wasi_example_main.wasm 50000000\n'})}),"\n",(0,s.jsx)(n.p,{children:"The output from the containerized application is printed into the console. It is the same for all Kubernetes versions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Random number: 1123434661\r\nRandom bytes: [25, 169, 202, 211, 22, 29, 128, 133, 168, 185, 114, 161, 48, 154, 56, 54, 99, 5, 229, 161, 225, 47, 85, 133, 90, 61, 156, 86, 3, 14, 10, 69, 185, 225, 226, 181, 141, 67, 44, 121, 157, 98, 247, 148, 201, 248, 236, 190, 217, 245, 131, 68, 124, 28, 193, 143, 215, 32, 184, 50, 71, 92, 148, 35, 180, 112, 125, 12, 152, 111, 32, 30, 86, 15, 107, 225, 39, 30, 178, 215, 182, 113, 216, 137, 98, 189, 72, 68, 107, 246, 108, 210, 148, 191, 28, 40, 233, 200, 222, 132, 247, 207, 239, 32, 79, 238, 18, 62, 67, 114, 186, 6, 212, 215, 31, 13, 53, 138, 97, 169, 28, 183, 235, 221, 218, 81, 84, 235]\r\nPrinted from wasi: This is from a main function\r\nThis is from a main function\r\nThe env vars are as follows.\r\nThe args are as follows.\r\n/wasi_example_main.wasm\r\n50000000\r\nFile content is This is in a file\r\npod "wasi-demo" deleted\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can now check out the pod status through the Kubernetes command line."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"crictl ps -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can see the events from scheduling to running the WebAssembly workload in the log."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CONTAINER           IMAGE               CREATED             STATE               \r\nNAME                 ATTEMPT             POD ID\r\n0c176ed65599a       0423b8eb71e31       8 seconds ago       Exited              wasi-demo    \n"})}),"\n",(0,s.jsx)(n.p,{children:"That's it!"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);