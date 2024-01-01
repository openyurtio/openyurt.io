---
title: PlatformAdmin组件库
---

这里是PlatformAdmin的组件库列表，只要在PlatformAdmin的spec中的components字段增加组件名即可部署到对应节点池，比如

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

同样，在components中移除掉对应组件名就可以取消对应节点池中该组件的部署。

**具体的步骤请参考[云原生管理端设备](../../user-manuals/iot/edgex-foundry.md)**

## 必备组件

以下为PlatformAdmin的必备组件，默认部署，**用户无需填写**

|                          组件名                          |
| :------------------------------------------------------: |
|                    edgex-core-command                    |
|                    edgex-core-consul                     |
|                   edgex-core-metadata                    |
|                       edgex-redis                        |
| edgex-core-common-config-bootstrapper（仅minnesota版本） |

## 可选组件

以下为PlatformAdmin的可选组件，**需要用户在components字段中显式指定才可部署**

|           组件名            |
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

## 参考

目前组件库中组件均为edgex生态相关组件，各组件的介绍请参考[edgex官方文档](https://docs.edgexfoundry.org/3.0/)。
