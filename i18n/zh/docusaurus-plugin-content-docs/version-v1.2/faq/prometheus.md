---
title: prometheus
---

**1. prometheus无法访问边缘节点**

prometheus无法获得边缘节点node-exporter信息

![img](../../../../../static/img/docs/faq/prometheus-endpoint-shooting.png)

**排查方式**

1、登录到prometheus-pod所在节点，查看prometheus容器的运行日志

```shell
$ crictl ps -a
$ crictl logs $containerID<b9a9f9d9fdb1e>
```

![img](../../../../../static/img/docs/faq/crictl-ps-shooting.png)

2、查看prometheus容器DNS配置文件resolv.conf，获得域名解析服务器地址

```shell
crictl inspect $containerID<b9a9f9d9fdb1e>
```

![img](../../../../../static/img/docs/faq/crictl-inspect-shooting.png)

```shell
$ cat /var/lib/containerd/io.containerd.grpc.v1.cri/sandboxes/ebdbfc2212eb1390f24f02445e7737c62421c84caef92623/resolv.conf
```

![img](../../../../../static/img/docs/faq/crictl-cat-resolv-shooting.png)

获知prometheus pod 的域名解析服务器`nameserver`地址

3、使用`dig`命令，域名解析服务器设置为prometheus的`nameserver`地址，解析服务无法访问的域名，得到其对应解析出的ip

```shell
$ dig @10.96.0.10 $无法访问的服务域名名称<edge-pi-node-02>
```

![img](../../../../../static/img/docs/faq/crictl-dig-shooting.png)

> **若没有`dig`命令则按照对应系统如下安装dns工具包**
>
> ```shell
> $ apt install dnsutils  #ubuntu系统
> $ yum install bind-utils  #centos系统
> ```

4、用`curl`命令，使用刚刚解析的ip地址替换之前不可达的服务域名，看是否可以进行访问

`https://edge-pi-node-02:10250/metrics ` 替换为：`https://10.104.253.212:10250/metrics`

```shell
$ curl -k -v https://10.104.253.212:10250/metrics
```

如果可以正常访问则`curl`命令结果如下，且ipvs模式下节点应该有创建对应ip的虚拟服务转发规则

![img](../../../../../static/img/docs/faq/crictl-curl-ipvs-shooting.png)