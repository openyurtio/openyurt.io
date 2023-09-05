---
title: PlatformAdmin Component Library
---

Here is the component library for PlatformAdmin. You can deploy a component to the corresponding node pool by adding its name to the "components" field in the spec of PlatformAdmin. For example:

```yaml
apiVersion: iot.openyurt.io/v1alpha2
kind: PlatformAdmin
metadata:
  name: edgex-sample
spec:
  version: minnesota
  poolName: hangzhou
  components:
  - name: yurt-iot-dock
```

Similarly, by removing the corresponding component name from the "components" field, you can cancel the deployment of that component in the respective nodepool.

**For details, see [Cloud Native Device Management](../../user-manuals/iot/edgex-foundry.md).**

## Required Components

The following are the essential components of PlatformAdmin that are deployed by default. **Users do not need to specify them**.

|                      Component Name                      |
| :------------------------------------------------------: |
|                    edgex-core-command                    |
|                    edgex-core-consul                     |
|                   edgex-core-metadata                    |
|                       edgex-redis                        |
| edgex-core-common-config-bootstrapper（仅minnesota版本） |

## Optional Components

The following are optional components for PlatformAdmin, **which require explicit specification in the components field by the user in order to be deployed**.

|      Component Name         |
| :-------------------------: |
|        yurt-iot-dock        |
|      edgex-device-rest      |
|   edgex-support-scheduler   |
|         edgex-ui-go         |
|    edgex-sys-mgmt-agent     |
|    edgex-device-virtual     |
|       edgex-core-data       |
|   edgex-app-rules-engine    |
|        edgex-kuiper         |
| edgex-support-notifications |

## Reference

Currently, all the components in the component library are related to the EdgeX ecosystem. For detailed descriptions of each component, please refer to the [official documentation of EdgeX](https://docs.edgexfoundry.org/3.0/).
