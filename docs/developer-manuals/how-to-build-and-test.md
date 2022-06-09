---
title: How to Build and Test
---

In [OpenYurt repository](https://github.com/openyurtio/openyurt), currently`(v0.7.0, commit: 68a18ee)` 7 components are contained, including:

1. yurthub
2. yurt-controller-manager
3. yurt-tunnel-server
4. yurt-tunnel-agent
5. yurtctl
6. yurtadm
7. yurt-node-servant

This article will give you an introduction of how to build and test the code after development of above components.

## How to build

### Build Binary

OpenYurt [Makefile](https://github.com/openyurtio/openyurt/blob/master/Makefile) provides a ` make build ` command, can be completed by the command to the compilation of various components. The following uses yurtadm as an example to explain how to use 'make build', similar to other components.

```bash
make build WHAT=cmd/yurtadm
```

This command compiles yurtadm based on the OS and architecture of the local host and places the compiled executable binary in the _output directory.

### Build Image

`make docker-build` is the most convenient image building command, including the steps of compiling and packaging images, can cover most scenarios. Its use is as follows:

```bash
make docker-build TARGET_PLATFORMS="${TARGET_PLATFORMS}" REGION="${your_region}"
```

`TARGET_PLATFORMS`: indicates the OS and architecture to which the component will run. Currently, Linux/amd64, Linux/arm, and Linux/arm64 are supported.

`REGION`: This parameter affects the GOPROXY used during compilation. Users in China are advised to set `REGION=cn` to ensure proper construction (cn indicates `GOPROXY=https://goproxy.cn`).

Use cases:

```bash
make docker-build TARGET_PLATFORMS=linux/amd64 REGION=cn
```

After the command is executed, local images of each component of OpenYurt are generated, which can be viewed using `docker images`.

### Cross Compilation

#### Mac

```bash
GOOS=${target_os} GOARCH=${target_arch} CGO_ENABLED=0 make build WHAT=yurtadm
```

This command will enable the built yurtadm binary to run on any platform as you want, through setting the `target_os` and `target_arch`. To avoid some problems of compatibility, we'd better set `CGO_ENABLED=0`.

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
go build -ldflags=$Env:GOLDFLAGS cmd/yurtadm/yurtadm.go
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

## Troubleshooting

1. "go: github.com...unknown revision xxx" occurs during build  
   It's often caused for too low git version on your host. You can try to update git.

2. "unsupported GOOS/GOARCH pair xxx/xxx" occurs during compilation  
   Not all GOOS/GOARCH pairs are supported by go, such as go1.17.3 cannot support windows/arm64. You can check all supported pairs through `go tool dist list`.

3. "cannot execute binary file: Exec format error" occurs when running binaries built on other platform.  
   It's often caused by an unsuccessful cross compilation, and the OS cannot recoginze the file format. When you run cross compilation on Windows, please ensure that you run it as an administractor.
