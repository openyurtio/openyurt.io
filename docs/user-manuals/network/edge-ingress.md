---
title: Edge Ingress
---

This document introduces how to access Edge services through Edge Ingress in Cloud Edge scenarios.
Users can access the Edge services from inside or outside of the NodePools, and for the condition
from outside of the NodePools, only NodePort type ingress controller service is supported by now.

Generally, it only needs 2 steps to use the Edge Ingress feature:

  1. Enable the ingress feature on NodePools which provide your desired services.
  2. Create and apply the ingress rule as K8S to access your desired services.

Follow the steps below to try the Edge Ingress feature:

---
1.Enable the ingress feature on NodePools which provide your desired services
---
YurtIngress operator is responsible for orchestrating multi ingress controllers to the corresponding NodePools.
Suppose you have created 4 NodePools in your OpenYurt cluster: pool01, pool02, pool03, pool04, and you want to
enable edge ingress feature on pool01 and pool03, you can create the YurtIngress CR as below:

1). Create the YurtIngress CR yaml file: (for example: yurtingress-test.yaml)

      apiVersion: apps.openyurt.io/v1alpha1
      kind: YurtIngress
      metadata:
        name: yurtingress-singleton
      spec:
          ingress_controller_replicas_per_pool: 1
          pools:
            - name: pool01
            - name: pool03

Notes:

a). YurtIngress CR is a singleton instance from the cluster level, and the CR name must be "yurtingress-singleton".

b). In spec, the "ingress_controller_replicas_per_pool" represents the ingress controller replicas deployed on every pool,
It is used for the HA usage scenarios.

c). In spec, the "pools" represents the pools list on which you want to enable ingress feature.
Currently it only supports the pool name, and it can be extended to support pool personalized configurations in future.


2). Apply the YurtIngress CR yaml file

    #kubectl apply -f yurtingress-test.yaml
    yurtingress.apps.openyurt.io/yurtingress-singleton created

Then you can get the YurtIngress CR to check the status:

    #kubectl get ying
    NAME                    NGINX-INGRESS-VERSION   REPLICAS-PER-POOL   READYNUM   NOTREADYNUM   AGE
    yurtingress-singleton   0.48.1                  1                   2          0             3m13s

When the ingress controller is enabled successfully, a per-pool NodePort service is created to expose the ingress controller serivce:

    #kubectl get svc -n ingress-nginx
    ingress-nginx   pool01-ingress-nginx-controller   NodePort    192.167.107.123   <none>    80:32255/TCP,443:32275/TCP   53m
    ingress-nginx   pool03-ingress-nginx-controller   NodePort    192.167.48.114    <none>    80:30531/TCP,443:30916/TCP   53m

Notes:

a). "ying" is the shortName of YurtIngress resource.

b). Currently YurtIngress only supports the fixed nginx ingress controller version, it can be enhanced to support user configurable
nginx ingress controller images/versions in future.

c). When the "READYNUM" equals the pools number you defined in the YurtIngress CR, it represents the ingress feature is ready on all your spec pools.

d). If the "NOTREADYNUM" is not 0 all the times, you can check the YurtIngress CR for the the status infomation.
Also you can check the corresponding deployments and pods to figure out why the ingress is not ready yet.

e). For every NodePool which ingress is enabled successfully, it exposes a NodePort type service for users to access the nginx ingress controller.

f). When the ingress controllers are orchestrated to the specified NodePools, an "ingress-nginx" namespace will be created, and all the namespace
related resources will be created under it.

---
2.Create and apply the ingress rule as K8S to access your desired services
---
When the step 1 above is done, you have successfully deployed the nginx ingress controller to the related NodePools, and the following
ingress user experience is totally consistent with K8S.

Suppose your app workload is deployed to several NodePools and it exposes a global service, for example:

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


If you want to access the service provided by pool01:

1). Create the ingress rule yaml file: (for example: ingress-myapp.yaml)

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

Notes:

a). Ingress class decides which NodePool to provide the ingress capability, so you need to define the ingress class to your desired NodePool name.

b). The ingress CR definition may be different for different K8S versions, so you need ensure the CR definition matches with your cluster K8S version.


2). Apply the ingress rule yaml file:

      #kubectl apply -f ingress-myapp.yaml
      ingress.extensions/ingress-myapp created



After all the steps above are done successfully, you can verify the edge ingress feature through the ingress controller NodePort service:

      #curl xxx:32255/echo

      "xxx" 	represents any NodeIP in NodePool pool01
      "32255" 	represents the NodePort which pool01 nginx ingress controller service exposes

      It should return "echo from nodepool pool01" all the times.
