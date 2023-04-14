---
title: yurthub
---

** 1. yurthub data cache directory **

The metadata cache path on the edge node is: /etc/kubernetes/cache/{componentName}/{resource}/{namespace}/{name}

** 2. yurthub component certificate storage directory**

- client certificate: /var/lib/yurthub/pki/yurthub-current.pem
  Used to access the cloud kube-apiserver, the authority is the same as the kubelet node certificate
- server certificate: /var/lib/yurthub/pki/yurthub-server-current.pem
  Used for yurthub to start https server, providing TLS verification for each component on the edge node

At present, the validity period of the certificate is uniformly determined by the kube-controller-manager component (1 year by default), and user self-configuration is not supported for the time being.
At the same time, yurthub will perform a certificate rotation request to update the certificate before the certificate expires. If the certificate rotation fails due to network reasons, yurthub will use the bootstrap token to re-apply for the certificate.
Of course, if the bootstrap token also expires, the user needs to execute on the edge node: POST http://127.0.0.1:10267/v1/token -D "jointoken:
{bootstrap token}" to update the bootstrap token. Note that the previous {bootstrap token} is replaced with valid The bootstrap token.

** 3. how to check which requests are forwarded to kube-apiserver through yurthub**

Execute on the edge node: `curl http://127.0.0.1:10267/metrics`, and check the following content:

![img](../../../static/img/docs/faq/flight-requests-in-yurthub.png)

Each line of node_yurthub_in_flight_requests_collector represents a type of request, determined by the client/resource/verb triplet. The following number 0 indicates that the request has occurred, but it is currently over. The number 1 means that there is currently one request.

be careful:
- list/watch requests usually appear together. If there is only list request but no watch request, it may mean that the list request has not ended and is stuck in yurthub. For example, when there is no NodePool resource in the cluster, the servicetopology filter of yurthub will depend on the NodePool resource. Therefore, the servicetopology filter of yurthub has not been ready, and it will block the coredns/kube-proxy list endpointslices request.
- If yurthub restarts, there may be only watch requests but no list requests, which is normal.

** 4. How to check the communication traffic between each component of the edge node and the kube-apiserver **

Execute on the edge node: `curl http://127.0.0.1:10267/metrics`, and check the following content:

![img](../../../static/img/docs/faq/response-traffic-in-yurthub.png)

Through the information of node_yurthub_proxy_traffic_collector, you can get the total traffic of each request returning data from the cloud. The unit is Byte
Therefore, the components on the edge nodes must reduce the full list requests for large-scale resources (such as nodes, pods, endpoint slices, etc.), otherwise a large amount of public network bandwidth will be occupied.

** 5. The Pod using InClusterConfig does not access the cloud kube-apiserver through yurthub **

If the node is installed by `yurtadm join` command, when the pod on the node accesses the kube-apiserver through InClusterConfig, the request will be automatically forwarded through yurthub, so as to reuse a series of capabilities such as data caching, filtering, and traffic statistics of yurthub. If you find that there is no relevant request record in the metrics of yurthub, you can confirm the following:
- Determine whether the pod is using InClusterConfig, or directly using the kube-apiserver address to access. If InClusterConfig is not used, first adjust the Pod to use InClusterConfig, and then restart the Pod.
- Confirm the cache data on the node /etc/kubernetes/cache/kubelet/services/default/kubernetes, whether the ClusterIP and Port of the Service are the yurthub listening address (default: 169.254.2.1:10268). If the content is incorrect, please restart the kubelet (systemctl restart kubelet) and check whether the cached data is updated.
- Check the environment variables in the Pod (container): KUBERNETES_SERVICE_HOST and KUBERNETES_SERVICE_PORT, whether their values correspond to the listening address of yurthub (default: 169.254.2.1:10268). If the content is incorrect, please rebuild the pod (kubectl delete pod) to check whether the environment variables are updated.

** 6. On the edge node, the service topology capability does not take effect**

- Check the metrics of yurthub to see if the kube-proxy list endpointslice request is over (the number is 0 to indicate the end). If the list request is not over, it means that the servicetopology filter in yurthub is not ready yet, usually because the NodePool resource in the cluster has not been created caused by.
- Check whether the corresponding endpointslice data under /etc/kubernetes/cache/kube-proxy directory conforms to the service topology. When the data does not meet expectations, restart kube-proxy and check to see if the data is updated.

** 7. yurthub failed to start normally, and Exited yurthub container was not found on the node**

- `docker ps -a` to check if there are yurthub containers in the Exited state on the node
- If there is no yurthub container in Exited state, please check the reason why yurthub cannot start in the kubelet log(`journalctl -u kubelet`)
- If there is a yurthub container in the Exited state, check the Exited yurthub container log in docker logs to analyze the reason why it cannot be started.

** 8. yurthub cannot start normally, and yurthub log shows that it is waiting for the certificate to be prepared **

The certificate required by yurthub has not been generated successfully, you can locate it by the following method:
- Execute on the cluster: `kubectl get csr`, check whether the certificate signing request of the relevant node is created
- If the csr is not created, the bootstrap token passed in is generally an invalid token. After cleaning the node, use a valid bootstrap token to join again.
- If the csr has been created, but the status is always pending, it means that csr approver has not been able to approve the csr. Check whether yurt-manager component is installed and working normally.

** 9. The metadata of a component in the yurthub cache on the edge node is deleted, how to restore it**

When the node and the cloud network are connected normally, rebuild the corresponding pod to restore the relevant cached metadata.

** 10. When the node is connected, yurthub starts successfully, but all requests keep reporting certificate errors? **

This situation may be due to the old remained yurthub certificates on the node are used by yurthub, resulting in a certificate error problem. You can execute `ls -la /var/lib/yurthub/pki` to check the generation time of each file and see if the generation time is reasonable.
At the same time, If join a node that has been operated in the history into the cluster, it is recommended to perform a `yurtadm reset` first to clean up the data on the node.

** 11. The user's own pod accesses the kube-apiserver in the cloud through Yurthub, but there is no cached data of the pod on the edge node**

By default, yurthub will only cache data for kubelet, kube-proxy, coredns, flannel, and tunnel-agent components (confirmed by the User-Agent in the http request header). Take client-A(such as User-Agent is client-A) for example, user should add client-A to the cache_agents field in kube-system/yurthub-cfg configmap, then delete and rebuild the client-A Pod.
At the same time, cache_agents also supports general configuration symbols: *, so that responses from all clients will be automatically cached, but users need to focus on the disk usage of the cache.

** 12. How to use the yurthub image of the private image registry**

First of all, the images provided by the community have passed `trivy` security scan, and users can use them with confidence. Since yurthub is deployed in static pod mode, it cannot support private image registry through imagePullSecrets.
Users need to configure the runtime on the node in advance to support private image registry. For example, Containerd runtime private image registry configuration, you can refer to: https://github.com/containerd/cri/blob/release/1.4/docs/registry.md#configure-registry-credentials

** 13. The component has accessed the cloud kube-apiserver through yurthub, but the relevant cache data cannot be found in the cache directory on the edge node**

To reduce the local disk cache load, yurthub only caches components by default [`kubelet`, `kube-proxy`, `flannel`, `coredns`, `yurt-tunnel-agent`, `yurthub`, `leader-yurthub`]( https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/util/util.go#L84) metadata obtained from the cloud.
If the metadata of other components also needs to be cached, enable way is as follows:
- Make sure that the HTTP request header sent by this component contains `User-Agent` information, and yurthub will determine the {componentName} in the cache directory according to the content before the first `/` in the `User-Agent header`. Component metadata will not be cached when `User-Agent` is empty
- Manually configure the `cache_agents` field of `configmap kube-system/yurt-hub-cfg` to add {componentName}.
- When `cache_agents: "*"`, it means that all components (must have User-Agent header) get metadata from the cloud will be cached. Since many components have a large number of list/watch requests, all caches will put pressure on the local disk, so it is necessary to configure `*` carefully.
- Configure multiple components separated by `,`. For example, the `User-Agent header` of the two components is `foo/v1.0.0` and `bar123/v1.0.0` respectively. The configuration information is as follows:
```
    cache_agents: "foo, bar123"
```