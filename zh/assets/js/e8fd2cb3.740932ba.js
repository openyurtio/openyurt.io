"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[21099],{78053:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(85893),s=a(11151);const r={},i="\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528 Kata Containers",l={id:"user-manuals/runtime/KataContainers",title:"\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528 Kata Containers",description:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 OpenYurt \u96c6\u7fa4\u4e2d\u5b89\u88c5\u548c\u8bbe\u7f6e\u6574\u4e2a\u5de5\u5177\u94fe\u7684\u6b65\u9aa4\uff0c\u4ee5\u8fd0\u884c\u4e00\u4e2a Kata Containers \u4f5c\u4e3a OCI \u8fd0\u884c\u65f6\u7684 Pod\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.6.0/user-manuals/runtime/KataContainers.md",sourceDirName:"user-manuals/runtime",slug:"/user-manuals/runtime/KataContainers",permalink:"/zh/docs/v0.6.0/user-manuals/runtime/KataContainers",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/runtime/KataContainers.md",tags:[],version:"v0.6.0",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171408076e4,frontMatter:{}},o={},c=[{value:"1 \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2 \u5b89\u88c5 OpenYurt",id:"2-\u5b89\u88c5-openyurt",level:2},{value:"3 \u8bbe\u7f6e\u4e00\u4e2a K8s \u96c6\u7fa4",id:"3-\u8bbe\u7f6e\u4e00\u4e2a-k8s-\u96c6\u7fa4",level:2},{value:"4 \u5b89\u88c5 Containerd",id:"4-\u5b89\u88c5-containerd",level:2},{value:"4.1 \u914d\u7f6e\u6587\u4ef6",id:"41-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"5 \u5b89\u88c5 Kata Containers",id:"5-\u5b89\u88c5-kata-containers",level:2},{value:"5.1 \u4e0b\u8f7d Kata Containers",id:"51-\u4e0b\u8f7d-kata-containers",level:3},{value:"5.2 \u914d\u7f6e kata \u4f5c\u4e3a runtime",id:"52-\u914d\u7f6e-kata-\u4f5c\u4e3a-runtime",level:3},{value:"6 \u8fd0\u884c\u4e00\u4e2a Kata Containers \u4f5c\u4e3a OCI \u8fd0\u884c\u65f6\u7684 Pod",id:"6-\u8fd0\u884c\u4e00\u4e2a-kata-containers-\u4f5c\u4e3a-oci-\u8fd0\u884c\u65f6\u7684-pod",level:2},{value:"6.1 \u521b\u5efa Kata \u7684 RuntimeClass \u8d44\u6e90",id:"61-\u521b\u5efa-kata-\u7684-runtimeclass-\u8d44\u6e90",level:3},{value:"6.2 \u4f7f\u7528 Kata \u4f5c\u4e3a\u8fd0\u884c\u65f6\u542f\u52a8 Pod",id:"62-\u4f7f\u7528-kata-\u4f5c\u4e3a\u8fd0\u884c\u65f6\u542f\u52a8-pod",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528-kata-containers",children:"\u8fb9\u7f18\u8282\u70b9\u4f7f\u7528 Kata Containers"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 OpenYurt \u96c6\u7fa4\u4e2d\u5b89\u88c5\u548c\u8bbe\u7f6e\u6574\u4e2a\u5de5\u5177\u94fe\u7684\u6b65\u9aa4\uff0c\u4ee5\u8fd0\u884c\u4e00\u4e2a Kata Containers \u4f5c\u4e3a OCI \u8fd0\u884c\u65f6\u7684 Pod\u3002"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://katacontainers.io/",children:"Kata Containers"})," \u662f\u7b26\u5408 OCI \u6807\u51c6\u7684\uff0c\u4e14",(0,t.jsx)(e.a,{href:"https://github.com/kata-containers/kata-containers/blob/main/docs/how-to/run-kata-with-k8s.md",children:"\u517c\u5bb9 k8s"})," \u7684\u8f7b\u91cf\u7ea7\u5b89\u5168\u5bb9\u5668\u3002\u76f8\u8f83\u4e8e Linux \u5bb9\u5668\uff0cKata Containers \u81f4\u529b\u4e8e\u4f7f\u7528\u8f7b\u91cf\u7ea7\u865a\u62df\u673a\u6784\u5efa\u5b89\u5168\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u4f7f\u7528\u8fd9\u4e9b\u865a\u62df\u673a\u7684\u65b9\u5f0f\u548c\u5176\u6027\u80fd\u7c7b\u4f3c\u4e8e\u5bb9\u5668\uff0c\u4f46\u4f7f\u7528\u786c\u4ef6\u865a\u62df\u5316\u6280\u672f\u4f5c\u4e3a\u7b2c\u4e8c\u5c42\u9632\u5fa1\u63d0\u4f9b\u66f4\u5f3a\u5927\u7684\u5de5\u4f5c\u8d1f\u8f7d\u9694\u79bb\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"1-\u51c6\u5907\u5de5\u4f5c",children:"1 \u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(e.p,{children:"\u9996\u5148\uff0c\u5173\u95ed swap \u5206\u533a\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sudo swapoff -a      \nfree -m    // \u9a8c\u8bc1\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7136\u540e\uff0c\u914d\u7f6e\u4e24\u4e2a\u8282\u70b9\u7684 ",(0,t.jsx)(e.code,{children:"/etc/hosts"})," \u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"127.0.0.1 localhost\n127.0.1.1 vagrant\n\n# The following lines are desirable for IPv6 capable hosts\n::1     ip6-localhost ip6-loopback\nfe00::0 ip6-localnet\nff00::0 ip6-mcastprefix\nff02::1 ip6-allnodes\nff02::2 ip6-allrouters\n127.0.2.1 k8s-node01 k8s-node01\n192.168.44.140 k8s-master\n192.168.44.141 k8s-node01\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4e4b\u540e\uff0c\u52a0\u8f7d\u5185\u6838\u6a21\u5757 ",(0,t.jsx)(e.code,{children:"br_netfilter"}),"\uff0c\u5e76\u8c03\u6574\u5185\u6838\u53c2\u6570\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"//load the module\nsudo modprobe br_netfilter\n\n//verify   \nlsmod | grep br_netfilter\n\n// create k8s.conf\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF\nsudo sysctl --system \n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u6700\u540e\uff0c\u8bbe\u7f6e ",(0,t.jsx)(e.code,{children:"rp-filter"})," \u503c\uff0c\u5c06\u6587\u4ef6 ",(0,t.jsx)(e.code,{children:"/etc/sysctl.d/10-network-security.conf"})," \u4e2d\u4e24\u4e2a\u53c2\u6570\u7684\u503c\u7531 2 \u6539\u4e3a 1\uff0c\u4e14\u5c06 ",(0,t.jsx)(e.code,{children:"/proc/sys/net/ipv4/ip_forward"})," \u8bbe\u7f6e\u4e3a 1\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"sudo vim /etc/sysctl.d/10-network-security.conf\necho 1 > /proc/sys/net/ipv4/ip_forward\nsudo sysctl --system\n"})}),"\n",(0,t.jsx)(e.h2,{id:"2-\u5b89\u88c5-openyurt",children:"2 \u5b89\u88c5 OpenYurt"}),"\n",(0,t.jsx)(e.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Edge \u8282\u70b9\u4e0a\u5b89\u88c5 OpenYurt \u6765\u63a7\u5236\u5b83\u4e0b\u9762\u7684 Containerd\u3001Kata Containers \u5806\u6808\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u6784\u5efa OpenYrut \u96c6\u7fa4\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 OpenYurt \u4f53\u9a8c\u4e2d\u5fc3\u3002 \u4f60\u53ea\u9700\u6ce8\u518c\u4e00\u4e2a\u7528\u4e8e\u6d4b\u8bd5\u7684\u5e10\u6237\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e2a OpenYurt \u96c6\u7fa4\u3002 \u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"yurtctl join"})," \u547d\u4ee4\u884c\u6765\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\u3002 \u5728",(0,t.jsx)(e.a,{href:"https://openyurt.io/docs/installation/openyurt-experience-center/overview/",children:"\u6b64\u5904"}),"\u67e5\u770b\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e",(0,t.jsx)(e.a,{href:"https://openyurt.io/zh/docs/installation/summary/",children:"\u6307\u5357"}),"\uff0c\u4f7f\u7528 yurtctl convert \u5c06 K8s \u96c6\u7fa4\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4\u5e76\u5b89\u88c5 OpenYurt \u7ec4\u4ef6\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"3-\u8bbe\u7f6e\u4e00\u4e2a-k8s-\u96c6\u7fa4",children:"3 \u8bbe\u7f6e\u4e00\u4e2a K8s \u96c6\u7fa4"}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"yurtctl convert"})," \u5c06 K8s \u96c6\u7fa4\u8f6c\u6362\u4e3a OpenYurt \u96c6\u7fa4\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5148\u642d\u5efa\u4e00\u4e2a K8s \u96c6\u7fa4\u3002 \u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\uff0c\u5982\u679c\u4f60\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"yurtctl init/join"})," \u6765\u8bbe\u7f6eOpenYurt \u96c6\u7fa4\u5e76\u52a0\u5165\u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"$ sudo apt-get update && sudo apt-get install -y ca-certificates curl software-properties-common apt-transport-https\n// add K8s source\n$ curl -s https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -\n$ sudo tee /etc/apt/sources.list.d/kubernetes.list <<EOF\n$ deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\n// install K8s components 1.18.9\n$ sudo apt-get update && sudo apt-get install -y kubelet=1.18.9-00 kubeadm=1.18.9-00 kubectl=1.18.9-00 \n// Initialize the master node\n$ sudo kubeadm init --pod-network-cidr 172.16.0.0/16 \\\n--apiserver-advertise-address=192.168.3.167 \\\n--image-repository registry.cn-hangzhou.aliyuncs.com/google_containers\n// join the work node\n$ kubeadm join 192.168.3.167:6443 --token 3zefbt.99e6denc1cxpk9fg \\\n   --discovery-token-ca-cert-hash sha256:8077d4e7dd6eee64a999d56866ae4336073ed5ffc3f23281d757276b08b9b195\n"})}),"\n",(0,t.jsx)(e.h2,{id:"4-\u5b89\u88c5-containerd",children:"4 \u5b89\u88c5 Containerd"}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u884c\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u5b89\u88c5 Containerd\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'export VERSION="1.5.7"\necho -e "Version: $VERSION"\necho -e "Installing libseccomp2 ..."\nsudo apt install -y libseccomp2\necho -e "Installing wget"\nsudo apt install -y wget\n\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nwget https://github.com/containerd/containerd/releases/download/v${VERSION}/cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\nsha256sum --check cri-containerd-cni-${VERSION}-linux-amd64.tar.gz.sha256sum\n\nsudo tar --no-overwrite-dir -C / -xzf cri-containerd-cni-${VERSION}-linux-amd64.tar.gz\nsudo systemctl daemon-reload\n'})}),"\n",(0,t.jsx)(e.h3,{id:"41-\u914d\u7f6e\u6587\u4ef6",children:"4.1 \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsxs)(e.p,{children:["Containerd \u542f\u52a8\u9700\u8981\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u5f53\u542f\u52a8 Containerd \u4e4b\u540e\u4f1a\u6839\u636e\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u53bb\u542f\u52a8\uff0c\u9ed8\u8ba4\u4f4d\u7f6e\u662f\uff1a ",(0,t.jsx)(e.code,{children:"/etc/containerd/config.toml"}),"\u3002\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u521b\u5efa\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"containerd config default > /etc/containerd/config.toml\n"})}),"\n",(0,t.jsx)(e.h2,{id:"5-\u5b89\u88c5-kata-containers",children:"5 \u5b89\u88c5 Kata Containers"}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528 Kata Containers \u4f5c\u4e3a OCI \u8fd0\u884c\u65f6\uff0c\u9700\u8981\u5728 Kubernetes \u96c6\u7fa4\u7684 node \u4e0a\u5b89\u88c5 Kata\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u91cc\u4f7f\u7528\u76f4\u63a5\u4ece GitHub \u4e0b\u8f7d\u6700\u65b0\u538b\u7f29\u5305\u7684\u65b9\u5f0f\u5b89\u88c5\uff0c\u5982\u6709\u9700\u8981\u4e5f\u53ef\u4ee5\u4e0b\u8f7d\u5176\u4ed6\u7248\u672c\u8fdb\u884c\u5b89\u88c5\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"51-\u4e0b\u8f7d-kata-containers",children:"5.1 \u4e0b\u8f7d Kata Containers"}),"\n",(0,t.jsx)(e.p,{children:"Ubuntu \u4e0a\u8fd8\u6ca1\u6709 2.x \u7684\u5b89\u88c5\u5305\uff0c\u5373\u901a\u8fc7 apt \u8fd8\u65e0\u6cd5\u5b89\u88c5\u3002\n\u4e0b\u8f7d\u5e76\u89e3\u538b\u7f29\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"wget https://github.com/kata-containers/kata-containers/releases/download/2.3.3/kata-static-2.3.3-x86_64.tar.xz\ntar -C / -Jxvf kata-static-2.3.3-x86_64.tar.xz\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Kata \u76f8\u5173\u6587\u4ef6\u90fd\u4f1a\u88ab\u89e3\u538b\u5230 ",(0,t.jsx)(e.code,{children:"/opt/kata/"})," \u4e0b\u9762\u3002Kata \u7684\u914d\u7f6e\u6587\u4ef6\u5728 ",(0,t.jsx)(e.code,{children:"/opt/kata/share/defaults/kata-containers/"})," \u4e0b\u9762\uff0c\u6bcf\u79cd Hypervisor \u90fd\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"QEMU"}),"\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"$ ls -tl /opt/kata/share/defaults/kata-containers/\n\ntotal 64\n-rw-r--r-- 1 1001 121 14828 Jan  6 11:55 configuration-fc.toml\n-rw-r--r-- 1 1001 121 24159 Jan  6 11:55 configuration-qemu.toml\nlrwxrwxrwx 1 1001 121    23 Jan  6 11:55 configuration.toml -> configuration-qemu.toml\n-rw-r--r-- 1 1001 121  9405 Jan  6 11:55 configuration-acrn.toml\n-rw-r--r-- 1 1001 121 11528 Jan  6 11:55 configuration-clh.toml\n"})}),"\n",(0,t.jsx)(e.h3,{id:"52-\u914d\u7f6e-kata-\u4f5c\u4e3a-runtime",children:"5.2 \u914d\u7f6e kata \u4f5c\u4e3a runtime"}),"\n",(0,t.jsxs)(e.p,{children:["\u4e3a containerd \u6dfb\u52a0 Kata \u8fd0\u884c\u65f6\u3002\u8fd9\u9700\u8981\u7f16\u8f91 ",(0,t.jsx)(e.code,{children:"/etc/containerd/config.toml"})," \u6587\u4ef6\uff0c\u5728\u5408\u9002\u7684\u4f4d\u7f6e\u6dfb\u52a0\u4e0b\u9762\u7684\u5185\u5bb9\uff08\u6ce8\u610f\u914d\u7f6e\u9879\u76ee\u7684\u5d4c\u5957\u5173\u7cfb\uff09\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'$ vim /etc/containerd/config.toml\n\n        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata]\n          runtime_type = "io.containerd.kata.v2"\n          pod_annotations = ["io.katacontainers.*"]\n          privileged_without_host_devices = true\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u4e4b\u540e\uff0c\u91cd\u542f containerd \u4f7f\u914d\u7f6e\u751f\u6548\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"systemctl start containerd\n"})}),"\n",(0,t.jsx)(e.h2,{id:"6-\u8fd0\u884c\u4e00\u4e2a-kata-containers-\u4f5c\u4e3a-oci-\u8fd0\u884c\u65f6\u7684-pod",children:"6 \u8fd0\u884c\u4e00\u4e2a Kata Containers \u4f5c\u4e3a OCI \u8fd0\u884c\u65f6\u7684 Pod"}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u5728 OpenYurt \u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e00\u4e2a Kata \u4f5c\u4e3a OCI \u8fd0\u884c\u65f6\u7684 Pod\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"61-\u521b\u5efa-kata-\u7684-runtimeclass-\u8d44\u6e90",children:"6.1 \u521b\u5efa Kata \u7684 RuntimeClass \u8d44\u6e90"}),"\n",(0,t.jsx)(e.p,{children:"RuntimeClass \u662f\u4e00\u4e2a\u7528\u4e8e\u9009\u62e9\u5bb9\u5668\u8fd0\u884c\u65f6\u914d\u7f6e\u7684\u7279\u6027\uff0c\u5bb9\u5668\u8fd0\u884c\u65f6\u914d\u7f6e\u7528\u4e8e\u8fd0\u884c Pod \u4e2d\u7684\u5bb9\u5668\u3002\u53ef\u4ee5\u5728\u4e0d\u540c\u7684 Pod \u8bbe\u7f6e\u4e0d\u540c\u7684 RuntimeClass\uff0c\u4ee5\u63d0\u4f9b\u6027\u80fd\u4e0e\u5b89\u5168\u6027\u4e4b\u95f4\u7684\u5e73\u8861\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u9488\u5bf9\u6bcf\u4e2a handler \u9700\u8981\u521b\u5efa\u4e00\u4e2a RuntimeClass \u5bf9\u8c61\u3002\nRuntimeClass \u8d44\u6e90\u5f53\u524d\u53ea\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u5b57\u6bb5\uff1aRuntimeClass \u540d (metadata.name) \u548c handler (handler)\u3002 \u5bf9\u8c61\u5b9a\u4e49\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"$ vim runtimeclass-kata.yaml\n\napiVersion: node.k8s.io/v1\nkind: RuntimeClass\nmetadata:\n  name: kata  # \u7528\u6765\u5f15\u7528 RuntimeClass \u7684\u540d\u5b57\nhandler: kata  # \u5bf9\u5e94\u7684 CRI \u914d\u7f6e\u7684\u540d\u79f0\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"kubectl apply"})," \u6765\u8f7d\u5165 RuntimeClass\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"kubectl apply -f runtimeclass-kata.yaml\n"})}),"\n",(0,t.jsx)(e.h3,{id:"62-\u4f7f\u7528-kata-\u4f5c\u4e3a\u8fd0\u884c\u65f6\u542f\u52a8-pod",children:"6.2 \u4f7f\u7528 Kata \u4f5c\u4e3a\u8fd0\u884c\u65f6\u542f\u52a8 Pod"}),"\n",(0,t.jsxs)(e.p,{children:["\u91c7\u7528 ",(0,t.jsx)(e.code,{children:"yaml"})," \u6587\u4ef6\u7684\u65b9\u5f0f\u914d\u7f6e Pod \u7684\u53c2\u6570\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"$ vim nginx-kata.yaml\n\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-kata\n  labels:\n    env: test\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  nodeSelector:\n    disktype: k8s-node01\t# \u8bbe\u7f6e\u5728 k8s-node01 \u4e0a\u8fd0\u884c Pod\n  runtimeClassName: kata\t# \u8bbe\u7f6e\u8fd0\u884c\u65f6\u4e3a Kata\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u521b\u5efa\u5e76\u542f\u52a8 Pod\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"$ kubectl create -f nginx-kata.yaml\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u67e5\u770b Pod\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"$ kubectl get pod -o wide\n\nNAME         READY   STATUS    RESTARTS   AGE   IP             NODE           NOMINATED NODE   READINESS GATES\nnginx-kata   1/1     Running   0          35s   192.168.1.21   k8s-worker01   <none>           <none>\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728 k8s-node01 \u8282\u70b9\u4e0a\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"crictl"})," \u67e5\u770b Pod \u4f7f\u7528\u7684\u8fd0\u884c\u65f6\u4e3a Kata\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"$ crictl pods\n\nPOD ID              CREATED              STATE               NAME                        NAMESPACE           ATTEMPT             RUNTIME\n7e74e3aba1cd9       49 seconds ago       Ready               nginx-kata                  default             0                   kata\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},11151:(n,e,a)=>{a.d(e,{a:()=>i});var t=a(67294);const s={},r=t.createContext(s);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}}}]);