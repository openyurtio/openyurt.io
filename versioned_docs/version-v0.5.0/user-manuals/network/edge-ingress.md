---
title: Edge Ingress
---

This document introduces how to access Edge services through Edge Ingress in Cloud Edge scenarios.

Generally, it only needs 2 steps to use the Edge Ingress feature:
1. Enable the ingress feature on NodePools which provide your desired services.
2. Create and apply the ingress rule as K8S to access your desired services.

Follow the details below to try the Edge Ingress feature:

---
1.Enable the ingress feature on NodePools which provide your desired services
---
YurtIngress operator is responsible for deploying the nginx ingress controller to the corresponding NodePools.
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
    Currently it only supports the pool name, but it can be extended to support pool personalized configruations in future.


2). Apply the YurtIngress CR yaml file

    kubectl apply -f yurtingress-test.yaml
    yurtingress.apps.openyurt.io/yurtingress-singleton created

Then you can get the YurtIngress CR to check the status:

    kubectl get ying
    NAME                    NGINX-INGRESS-VERSION   REPLICAS-PER-POOL   READYNUM   NOTREADYNUM   AGE
    yurtingress-singleton   0.48.1                  1                   2          0             3m13s

When the ingress controller is enabled successfully, a per-pool NodePort service is created to expose the ingress controller serivce:

    kubectl get svc -A
    ingress-nginx   pool01-ingress-nginx-controller   NodePort    192.167.107.123   <none>    80:32255/TCP,443:32275/TCP   53m
    ingress-nginx   pool03-ingress-nginx-controller   NodePort    192.167.48.114    <none>    80:30531/TCP,443:30916/TCP   53m

Notes:

a). "ying" is the shortName of YurtIngress resource.

b). Currently YurtIngress only supports the fixed nginx ingress controller version, we will enhance it in future to support user configurable
    nginx ingress controller images/versions.

c). When the "READYNUM" equals the pool number you defined in the YurtIngress CR, it represents the ingress feature is ready on all the pool you defined.

d). If the "NOTREADYNUM" is not 0 all the times, you can use "kubectl describe ying yurtingress-singleton" to check the details for the reasons.
    Also you can check the corresponding deployment (xxx-ingress-nginx-controller, "xxx" represents the pool name) to figure out the reasons why the
    ingress is not ready yet.

e). For every NodePool which ingress is enable successfully, it exposes a NodePort type service for users to access the nginx ingress controller.

---
2.Create and apply the ingress rule as K8S to access your desired services
---
When the step 1 above is done, you have successfully deployed the nginx ingress controller to the related NodePools, and the following
ingress user experience is totally consistent with K8S.

Suppose your app workload is deployed to several NodePools(e.g. pool01 and pool03), and it exposes a global service(e.g. myapp service), and you
want to access the service provided by pool01:

1). Create the ingress rule yaml file: (for example: ingress-myapp.yaml)

    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
      name: ingress-myapp
      annotations:
        ingress.kubernetes.io/rewrite-target: /
    spec:
      ingressclassName: pool01
      rules:
      - http:
          paths:
            - path: /myapp
              backend:
              serviceName: myapp-service
              servicePort: xxx

Notes:

a). Ingress class decides which NodePool to provide the ingress capability, so you need to define the ingress class to your desired NodePool name.

b). The ingress CR definition may be different for different K8S versions, so you need ensure the CR definition matches with your cluster K8S version.


2). Apply the ingress rule yaml file:

      kubectl apply -f ingress-myapp.yaml
      ingress.extensions/ingress-myapp created



After all the steps above are done successfully, you can verify the edge ingress feature through the ingress controller NodePort service:

      curl xxx:32255/myapp

      "xxx" 	represents any NodeIP in NodePool pool01
      "32255" 	represents the NodePort which pool01 nginx ingress controller service exposes
