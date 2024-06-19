---
title: seamless CRDs upgrade
---

## Brackgound introduction

There is no support at this time for upgrading Custom Resource Definitions (CRDs) using Helm. This was an explicit decision after much community discussion due to the danger for unintentional data loss. Furthermore, there is currently no community consensus around how to handle CRDs and their lifecycle. 

As a consequence, it is necessary to manually apply to update CRDs one by one. It is troublesome and the upgrade process should be automated.

## Automation Implementation
Init containers can contain utilities or setup scripts not present in an app image.
We can utilize init container to upgrade CRDs. We can copy all CRDs related files into images and iterate through each crd yaml to update the crd using server side apply, as follows:

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

## How to use

Using yurt-manager as an example, we only need to copy the binary in and execute it in the command.

```yaml
initContainers:
- image: {{ .Values.image.registry }}/{{ .Values.image.repository }}:{{ .Values.image.tag }}
  name: crd-upgrader
  imagePullPolicy: IfNotPresent
  command:
  - /usr/local/bin/crd-upgrader
```

We also should make sure to provide CRD-related permissions to the service account.