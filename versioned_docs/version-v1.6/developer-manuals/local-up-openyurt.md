---
title: Local Up OpenYurt
---

## How to use

If you don't have the openyurt cluster, you can run the bash shell [`local-up-openyurt.sh`](https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local-up-openyurt.sh) to quickly set up the openyurt cluster at your local host.
Assuming that you've entered the openyurt work path, the command is as simple as follows:

```bash
# build OpenYurt components images and startup a OpenYurt cluster
make docker-build-and-up-openyurt

# startup a OpenYurt cluster based on prepared images
make local-up-openyurt
```
Then you can use `kubectl` to interact with your OpenYurt cluster.

> Note:
> By default, the above commands run on Linux/AMD64 platform. If you need to specify platform information when running on MAC, run the following command: 'make local-up-openyurt TARGET_PLATFORMS= Linux /arm64'.

## What does the shell do for you

In summary, the `local-up-openyurt.sh` will use the local files under the openyurt work path to set up the cluster.  And you can specify the behavior of the shell through setting environment variables.

It will use `kind` to set up the kubernetes cluster. You can set `KUBERNETESVERSION` to specify the kubernetes version to use. For instance, `export KUBERNETESVERSION=1.23` before running the shell will enable you to use kubernetes v1.23. In addition, you can set `NODES_NUM` to specify the number of nodes the cluster will contain.
>Note:
>1. The format of `KUBERNETESVERSION` is `1.xx`, other formats will not be accepted. The default KUBERNETESVERSION is `1.22`.
>2. `NODES_NUM` should not be less than 2. Finally, the cluster will contains one control-plane node and `NODES_NUM-1` woker nodes. The default `NODES_NUM` is 2.

At last, Finally, OpenYurt components will be installed in kubernetes cluster, including 'Yurthub', 'Yurt-Controller-Manager', 'Yurt-tunnel-Agent' and 'Yurt-Tunnel-Server'.

By now, you've got the OpenYurt cluster at your local host and you can interact with it using `kubectl`. `kind` will automatically stored the kubeconfig at your `KUBECONFIG` path (default path is `${HOME}/.kube/config)`. If you already have the `KUBECONFIG` to interact with other clusters, `kind` will add a new context of openyurt cluster into the `KUBECONFIG` and automatically switch to it. You can manually switch back to the previous context using command `kubectl config use-context ${PREVIOUS_CONTEXT_NAME}`. For more details, you can see the [documentation](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/). You can store the kubeconfig at another path through setting `KIND_KUBECONFIG`.

## Reference

Reference gives descriptions of all used environment variables.

1. **KIND_KUBECONFIG**

KIND_KUBECONFIG represents the path to store the kubeconfig file of the cluster which is created by this shell. The default value is `"$HOME/.kube/config"`.

2. **NODES_NUM**

NODES_NUM represents the number of nodes to set up in the new-created cluster. There are one control-plane node and NODES_NUM-1 worker nodes. Thus, NODES_NUM must not be less than 2. The default value is 2.

3. **KUBERNETESVERSION**

KUBERNETESVERSION declares the kubernetes version the cluster will use. The format is "1.XX". Now from 1.17 to 1.23 are supported. The default value is 1.22.

4. **TIMEOUT**

TIMEOUT represents the time to wait for the kind control-plane, yurt-tunnel-server and yurt-tunnel-agent to be ready. If they are not ready after the duration, the shell will exit. The default value is 120s.
