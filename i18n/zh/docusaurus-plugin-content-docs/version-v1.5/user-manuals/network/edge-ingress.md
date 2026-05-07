---
title: 边缘Ingress
---

本文档介绍如何在云边协同场景下通过边缘Ingress访问指定节点池提供的服务。

具体应用场景为：
1. 节点池内或节点池外通过边缘ingress访问节点池内提供的服务。
2. 节点池外访问nginx ingress controller，目前支持通过NodePort Service及externalIPs的方式。

具体用法为：
1. 启用指定节点池上的边缘Ingress功能。
2. 同K8S一样创建并部署ingress规则以访问相应的服务。


请按以下步骤尝试使用边缘Ingress功能：

---
1.启用指定节点池上的边缘Ingress功能
---
YurtIngress opeator负责将nginx ingress controller编排到需要启用边缘Ingress功能的节点池中。
假设您的OpenYurt集群中有4个节点池：pool01、pool02、pool03、pool04，如果您想要在pool01和pool03上启用边缘ingress功能，可以按如下方式创建YurtIngress CR：

1). 创建YurtIngress CR yaml文件:

1.1）. YurtIngress CR的简单定义:

      apiVersion: apps.openyurt.io/v1alpha1
      kind: YurtIngress
      metadata:
        name: yurtingress-test
      spec:
          pools:
            - name: pool01
            - name: pool03

默认为每个节点池创建的nginx ingress控制器副本数为1  
默认的ingress控制器docker image为：k8s.gcr.io/ingress-nginx/controller:v0.48.1  
默认的生成ingress控制器webhook证书的docker image为：k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v0.48.1

1.2）. 如果用户不想使用默认的配置，而是想对节点池做一些个性化配置，可以如下定义CR:

      apiVersion: apps.openyurt.io/v1alpha1
      kind: YurtIngress
      metadata:
        name: yurtingress-test
      spec:
          ingress_controller_replicas_per_pool: 2
          ingress_controller_image: k8s.gcr.io/ingress-nginx/controller:v0.49.0
          ingress_webhook_certgen_image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v0.49.0
          pools:
            - name: pool01
              ingress_ips:
                - xxx.xxx.xxx.xxx
            - name: pool03

其中：  
`igress_controller_replicas_per_pool`/`ingress_controller_image`/`ingress_webhook_certgen_image`可供用户自定义相关默认配置，
`ingress_ips` 代表如果用户想通过externalIPs的方式为某个特定的节点池对外暴露nginx ingress控制器服务的公网IP地址。


提示：

a). 用户可以通过定义不同的YurtIngress CRs来对不同节点池做一些个性化配置，比如通过定义不同的CR来对不同的节点池配置不同的ingress控制器副本数。

b). 在spec中，“ingress_controller_replicas_per_pool”表示部署在每个节点池上的ingress控制器副本数，它主要用于HA高可用场景。

c). 在spec中，“pools”表示要在其上开启ingress功能的节点池列表，目前支持节点池名及针对该节点池的ingress服务公网IP配置。

2). 部署YurtIngress CR yaml文件：  
    假定CR文件名为yurtingress-test.yaml：

    #kubectl apply -f yurtingress-test.yaml
    yurtingress.apps.openyurt.io/yurtingress-test created

然后您可以查看YurtIngress CR的状态:

```
    #kubectl get ying
    NAME                 REPLICAS-PER-POOL   READYNUM   NOTREADYNUM   AGE
    yurtingress-test     1                   2          0             3m13s
```

成功编排ingress controller后，每个节点池将暴露一个NodePort类型的Service服务：

```
    #kubectl get svc -n ingress-nginx
    ingress-nginx  pool01-ingress-nginx-controller  NodePort  192.167.107.123  <none>   80:32255/TCP,443:32275/TCP  53m
    ingress-nginx  pool03-ingress-nginx-controller  NodePort  192.167.48.114   <none>   80:30531/TCP,443:30916/TCP  53m
```

提示:

a). “ying”是YurtIngress资源的简称

b). 当“READYNUM”与您部署的节点池数量一致时，表示ingress功能在您定义的所有节点池上已就绪。

c). 当“NOTREADYNUM”一直不为0时，可以查看CR的状态了解相关信息，您还可以查看相应的deployment及pod以获取更详细的错误信息，从而找出ingress功能尚未就绪的原因。

d). 对于成功启用ingress功能的每个NodePool，会为用户暴露一个NodePort类型的服务用来访问nginx ingress controller。

e). YurtIngress operator会创建一个"ingress-nginx"的namespace，编排nginx ingress controller时，所有跟namespace相关的resource都会被部署在这个namespace下。

---
2.同K8S一样创建并部署ingress规则以访问相应的服务
---

当上述步骤1完成后，您已经通过Yurtingress成功的将nginx ingress controller部署到相应的节点池中。接下来的用法就和K8S中使用ingress的体验一致了。

假设您的业务应用被部署到了多个节点池中，并且它们通过一个全局的service对外暴露，举个例子：

      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: pool01-deployment
        labels:
          app: echo
      spec:
        replicas: 2
        selector:
          matchLabels:
            app: echo
        template:
          metadata:
            labels:
              app: echo
          spec:
            containers:
            - name: echo-app
              image: hashicorp/http-echo
              args:
                - "-text=echo from nodepool pool01"
              imagePullPolicy: IfNotPresent
            nodeSelector:
              apps.openyurt.io/nodepool: pool01
      ---

      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: pool03-deployment
        labels:
          app: echo
      spec:
        replicas: 2
        selector:
          matchLabels:
            app: echo
        template:
          metadata:
            labels:
              app: echo
          spec:
            containers:
            - name: echo-app
              image: hashicorp/http-echo
              args:
                - "-text=echo from nodepool pool03"
              imagePullPolicy: IfNotPresent
            nodeSelector:
              apps.openyurt.io/nodepool: pool03
      ---

      kind: Service
      apiVersion: v1
      metadata:
        name: echo-service
      spec:
        selector:
          app: echo
        ports:
          - port: 5678

当您想要访问pool01提供的服务时，您可以如下操作：

1). 创建ingress规则yaml文件:

      apiVersion: extensions/v1beta1
      kind: Ingress
      metadata:
        name: ingress-pool01
        annotations:
          kubernetes.io/ingress.class: pool01
          ingress.kubernetes.io/rewrite-target: /
      spec:
        rules:
        - http:
            paths:
              - path: /echo
                backend:
                  serviceName: echo-service
                  servicePort: 5678

提示:

a). 由哪个节点池提供ingress功能是由ingress class决定的，因此您需要将ingress class定义为您想要访问服务的节点池名称。

b). 不同K8S版本的ingress CR定义可能不同，您需要确保ingress CR的定义与集群K8S版本匹配。

2). 部署ingress规则yaml文件:  
    假定yaml文件名为ingress-myapp.yaml：

      #kubectl apply -f ingress-myapp.yaml
      ingress.extensions/ingress-myapp created


成功完成上述所有步骤后，您就可以通过ingress controller NodePort service验证边缘Ingress功能了：

      #curl xxx:32255/echo

      "xxx"       代表节点池pool01中的节点IP地址
      "32255"     代表对应节点池中ingress controller暴露的service NodePort

      返回结果应该一直为： “echo from nodepool pool01”。
