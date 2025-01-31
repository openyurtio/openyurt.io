---
title: 无缝升级CRDs
---

## 背景介绍

目前不支持使用Helm升级或删除CRDs。由于数据意外丢失的风险，这是经过多次社区讨论后作出的明确决定。对于如何处理CRD及其生命周期， 目前社区还未达成共识。

因此，用户必须逐个手动申请更新CRDs。这是一件很繁琐的事情，升级过程应该自动化。

## 自动化实现
Init容器可以包含应用程序镜像中不存在的实用工具和安装脚本。
我们可以利用Init容器升级 CRD。我们可以将所有与 CRD 相关的文件复制到映像中，然后遍历每个crd yaml，使用服务器端应用更新 crd，如下所示：

```go
filepath.Walk(CRD_DIR, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return err
		}
		switch {
		case info.Mode().IsDir():
			return nil
		case info.Mode().IsRegular():
            // ...
			// client apply crd to upgrade
		}
		return nil
})
```

## 如何使用

以 yurt-manager 为例，我们只需复制二进制文件并在命令中执行即可。

```yaml
initContainers:
- image: {{ .Values.image.registry }}/{{ .Values.image.repository }}:{{ .Values.image.tag }}
  name: crd-upgrader
  imagePullPolicy: IfNotPresent
  command:
  - /usr/local/bin/crd-upgrader
```

需要注意的是，我们还应确保为服务账户提供与 CRD 相关的权限。