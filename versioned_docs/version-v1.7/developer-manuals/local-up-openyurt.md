---
title: Local Up OpenYurt
---

## Environment preparation

Before you run the local cluster scripts, set up your environment as follows.

1. **Install Go** — Download and install a supported Go toolchain from [go.dev/dl](https://go.dev/dl/), then confirm with `go version`.

2. **Install Docker** — Install Docker Engine and ensure the Docker daemon is running. See [Get Docker](https://docs.docker.com/get-docker/).

3. **Add `GOPATH/bin` to `PATH`** — Binaries installed with `go install` (for example `kind`) are written to `$(go env GOPATH)/bin`. Add that directory to your `PATH` so your shell can find them. 

```bash
export PATH="$(go env GOPATH)/bin:$PATH"
```

Reload the shell configuration or open a new terminal, then verify with `echo "$PATH"` or by running a tool you installed with `go install`.

## How to use

If you don't have the openyurt cluster, you can run the bash shell [`local-up-openyurt.sh`](https://github.com/openyurtio/openyurt/blob/master/hack/make-rules/local-up-openyurt.sh) to quickly set up the openyurt cluster at your local host.
Assuming that you've entered the openyurt work path, the command is as simple as follows:

```bash
# build OpenYurt components images and startup a OpenYurt cluster
make docker-build

# startup a OpenYurt cluster based on prepared images
NODES_NUM=5 DISABLE_DEFAULT_CNI=true make local-up-openyurt

# run e2e test
make e2e-tests
```
Then you can use `kubectl` to interact with your OpenYurt cluster.

> Note:
> By default, the above commands run on Linux/AMD64 platform. If you need to specify platform information when running on MAC, run the following command: 'make local-up-openyurt TARGET_PLATFORMS= Linux /arm64'.

## What does the shell do for you

In summary, the `local-up-openyurt.sh` will use the local files under the openyurt work path to set up the cluster.  And you can specify the behavior of the shell through setting environment variables.

It will use `kind` to set up the kubernetes cluster. You can set `KUBERNETESVERSION` to specify the kubernetes version to use. For instance, `export KUBERNETESVERSION=1.34` before running the shell will enable you to use kubernetes v1.23. In addition, you can set `NODES_NUM` to specify the number of nodes the cluster will contain.
>Note:
>1. The format of `KUBERNETESVERSION` is `1.xx`, other formats will not be accepted. The default KUBERNETESVERSION is `1.34`.
>2. `NODES_NUM` should not be less than 2. Finally, the cluster will contains one control-plane node and `NODES_NUM-1` woker nodes. The default `NODES_NUM` is 2.

At last, Finally, OpenYurt components will be installed in kubernetes cluster, including 'Yurthub', 'Yurt-Manager', 'Raven'.

By now, you've got the OpenYurt cluster at your local host and you can interact with it using `kubectl`. `kind` will automatically stored the kubeconfig at your `KUBECONFIG` path (default path is `${HOME}/.kube/config)`. If you already have the `KUBECONFIG` to interact with other clusters, `kind` will add a new context of openyurt cluster into the `KUBECONFIG` and automatically switch to it. You can manually switch back to the previous context using command `kubectl config use-context ${PREVIOUS_CONTEXT_NAME}`. For more details, you can see the [documentation](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/). You can store the kubeconfig at another path through setting `KIND_KUBECONFIG`.

## Reference

Reference gives descriptions of all used environment variables.

1. **KIND_KUBECONFIG**

KIND_KUBECONFIG represents the path to store the kubeconfig file of the cluster which is created by this shell. The default value is `"$HOME/.kube/config"`.

2. **NODES_NUM**

NODES_NUM represents the number of nodes to set up in the new-created cluster. There are one control-plane node and NODES_NUM-1 worker nodes. Thus, NODES_NUM must not be less than 2. The default value is 2.

3. **KUBERNETESVERSION**

KUBERNETESVERSION declares the kubernetes version the cluster will use. The format is "1.XX". Now from 1.32 and 1.34 are supported. The default value is 1.34.

4. **TIMEOUT**

TIMEOUT represents the time to wait for the kind control-plane, Yurt-Manager to be ready. If they are not ready after the duration, the shell will exit. The default value is 120s.

## Tips

When you start an OpenYurt cluster (for example with `local-up-openyurt`), tune the following `inotify`-related kernel parameters on the host. Raising these limits helps avoid watch-queue exhaustion when many files are monitored (for example by container runtimes or development tools).

Recommended values:

| Parameter | Value |
|-----------|-------|
| `fs.inotify.max_user_watches` | 524288 |
| `fs.inotify.max_user_instances` | 2048 |
| `fs.inotify.max_queued_events` | 524288 |

To apply until reboot:

```bash
sudo sysctl -w fs.inotify.max_user_watches=524288
sudo sysctl -w fs.inotify.max_user_instances=2048
sudo sysctl -w fs.inotify.max_queued_events=524288
```

To persist across reboots, add the same `key=value` lines under `/etc/sysctl.d/` (for example `/etc/sysctl.d/99-openyurt-local.conf`) and run `sudo sysctl --system`.
