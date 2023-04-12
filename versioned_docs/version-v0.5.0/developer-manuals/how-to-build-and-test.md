---
title: How to Build and Test
---

In [OpenYurt repository](https://github.com/openyurtio/openyurt), currently(v0.5.0, `commit: ef26d5c6`) 5 components are contained, including:

1. yurthub
2. yurt-controller-manager
3. yurt-tunnel-server
4. yurt-tunnel-agent
5. yurtctl
6. yurt-node-servant

This artical will give you an introduction of how to build and test the code after development of above components.

## How to build

Many approaches of building OpenYurt have been provided in the [Makefile](https://github.com/openyurtio/openyurt/blob/master/Makefile). The most often used approach is `make release`, which will compile the code and build images for you. Here's the use case:

```bash
make release WHAT="${components[@]}" ARCH="${archs[@]}" REGION="${your_region}"
```

`WHAT` represents components that you want to build, as mentioned at the beginning of the artical.
`ARCH` represents archtectures of target platforms, including `amd64`, `arm` and `arm64`.
`REGION` will affect the `GOPROXY` when compiling the code. Currently, `cn` and `us` are supported, representing using  `GOPROXY=https://goproxy.cn` and `GOPROXY=https://proxy.golang.org` respectively. Its default value is `us`. It's recommanded that developers in China should always set `REGION=cn` explicitly to ensure the successful build.

eg.

```bash
make release WHAT="yurtctl yurthub" ARCH="arm64 amd64" REGION=cn
```

After the successful build, we can find images and binaries under `_output` folder, dockerfiles under `dockerbuild` folder. All of these images are built based on the Linux platform. Currently, we cannot change the target OS platform. If you actually want to do it, please refer to the following approach.

Another build approach is provided in Makefile, using `make build` command. With this command, we can compile the code for any archtecture and any platform. We will take `yurtctl` as an example, and other components can be built in the same way.

### Build based on the loacl platform

```bash
make build WHAT=yurtctl
```

This command will build the yurtctl binary according to the archtecture and OS of your local host. The output binary can be found under the `_output` folder.

### Cross Compilation

#### Mac

```bash
GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtctl
```

This command will enable the built yurtctl binary to run on any platform as you want, through setting the `target_os` and `target_arch`. To avoid some problems of compatibility, we'd better set `CGO_ENABLED=0`.

#### Windows

Because there's no make command on Windows(if you don't have Cygwin), we have to run `go build` manually to compile the code. Steps in powershell(run as administrator) are as follows:

1. prepare environment variables
   Replace `target_os` and `target_arch` as what you want.

```powershell
$Env:GOOS = $Env:target_os
$Env:GOARCH = $Env:target_arch
$Env:CGO_ENABLED = 0
$Env:GOLDFLAGS = "-s -w
-X github.com/openyurtio/openyurt/pkg/projectinfo.projectPrefix=yurt
-X github.com/openyurtio/openyurt/pkg/projectinfo.labelPrefix=openyurt.io
-X github.com/openyurtio/openyurt/pkg/projectinfo.gitVersion=$(git describe --abbrev=0)
-X github.com/openyurtio/openyurt/pkg/projectinfo.gitCommit=$(git rev-parse HEAD)
-X github.com/openyurtio/openyurt/pkg/projectinfo.buildDate=$(date -u +'%Y-%m-%dT%H:%M:%SZ')"
```

2. run go build
   Run `go build` to compile the code, with the `-ldflags=$Env:GOLDFLAGS` option.

```powershell
go build -ldflags=$Env:GOLDFLAGS cmd/yurtctl/yurtctl.go
```

### Build images manually

In this section, we can find the dockerfile for each component. It will help you use `docker build` to build images. Here's the table giving base images `yurtctl` and `yurt-node-servant` will use.

| Arch  | Base Image         |
| ----- | ------------------ |
| amd64 | amd64/alpine:3.9   |
| arm64 | arm64v8/alpine:3.9 |
| arm   | arm32v7/alpine:3.9 |

#### yurtctl(yurt-servant) dockerfile

```dockerfile
FROM ${baseimage}
ADD yurtctl /usr/local/bin/yurtctl
```

#### yurt-node-servant dockerfile

```dockerfile
FROM ${baseimage}
ADD entry.sh /usr/local/bin/entry.sh
RUN chmod +x /usr/local/bin/entry.sh
ADD yurt-node-servant /usr/local/bin/node-servant
```

#### dockerfiles of other components

Other components use the different base image. We use `${arch}` to represent the target arch(including amd64, arm and arm64), `${component}` to represent the component to built(as mentioned at the beginning of this artical). Then the dockerfile is as follows:

```dockerfile
FROM registry.k8s.io/debian-iptables-${arch}:v11.0.2
COPY ${component} /usr/local/bin/${component}
ENTRYPOINT ["/usr/local/bin/${component}"]
```

## How to test

There are tests of two types: unit test and e2e test.

### Unit test

In unit test, it will run the test code under cmd and pkg folder, whose names have the suffix of `_test.go`.

```bash
make test
```

### e2e test

This section shows how to build and run the e2e test for OpenYurt. The test for node autonomy is still under development.

If you have already set up the OpenYurt cluster, you can immediately follow the steps to test your cluster. Otherwise, you can quickly set up the OpenYurt at your local host with instructions at [Local Up OpenYurt](./local-up-openyurt.md).

You can use the following command to run e2e tests. Assuming that you've entered the openyurt work path, run

```bash
make e2e-tests
```

This command will help you run e2e tests on OpenYurt cluster. It will use kubeconfig at `${KUBECONFIG}`, default path is `$HOME/.kube/config`. If there's no config found, it will end with error. The test result will show on the stdout:

```bash
Ran 5 of 5 Specs in 82.279 seconds
SUCCESS! -- 5 Passed | 0 Failed | 0 Pending | 0 Skipped
PASS
```

If you need further configuration for yurt-e2e-test to specify its behavior(such as running autonomy e2e test case), you can manually run the e2e test as we will introduce in the next section.

### Run e2e test manually

Let's build the e2e binary yurt-e2e-test as follows:

1) entering the openyurt work path:
```bash
$ cd openyurt
```

2) building the binary:
```bash
$ make e2e
```

Then, you can use yurt-e2e-test binary to test OpenYurt.
1) If you run yurt-e2e-test without node autonomy test, such as:
```bash
$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./
```
This will run some basic tests after k8s is converted to openyurt. It refers to the operation of namespace and pod.

2) If you run yurt-e2e-test, and want to test yurt node autonomy on local machine.In this way, it depends on yourself to restart node. And yurt-e2e-test will wait for restarting node and checking pod status to test yurt node autonomy.
```bash
$ ./_output/bin/linux/amd64/yurt-e2e-test --kubeconfig=$HOME/.kube/config  --report-dir=./  --enable-yurt-autonomy=true
```

3) If you want to test yurt node autonomy on aliyun ecs or aliyun ens with binary of yurt-e2e-test, TBD.

Note:
The path of yurt-e2e-test binary depends on the platform of your local host.

Finally, you can check test result in stdout or in file yurt-e2e-test-report_01.xml(specified by the `--report-dir` option).

## Troubleshooting

1. "go: github.com...unknown revision xxx" occurs during build
   It's often caused for too low git version on your host. You can try to update git.

2. "unsupported GOOS/GOARCH pair xxx/xxx" occurs during compilation
   Not all GOOS/GOARCH pairs are supported by go, such as go1.17.3 cannot support windows/arm64. You can check all supported pairs through `go tool dist list`.

3. "cannot execute binary file: Exec format error" occurs when running binaries built on other platform.
   It's often caused by an unsuccessful cross compilation, and the OS cannot recoginze the file format. When you run cross compilation on Windows, please ensure that you run it as an administractor.
