---
title: 移除节点
---

## 使用 `yurtadm reset` 移除节点

**在主节点上执行：**

```bash
# 驱逐节点并删除其数据
kubectl drain <NodeName> --delete-emptydir-data --force --ignore-daemonsets

# 从集群中删除节点
kubectl delete node <NodeName>
```

**在待移除节点上执行：**

```bash
# 1. 运行 yurtadm reset
yurtadm reset

# 2. 清理 CNI 配置文件
rm -rf /etc/cni/net.d
```
