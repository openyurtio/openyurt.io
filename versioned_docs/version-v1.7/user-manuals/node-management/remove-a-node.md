---
title: Remove a node
---

## Removing a Node with `yurtadm reset`

**On the master node:**
```bash
# Drain the node and delete its data
kubectl drain <NodeName> --delete-emptydir-data --force --ignore-daemonsets

# Delete the node from the cluster
kubectl delete node <NodeName>
```

**On the node to be removed:**
```bash
# 1. Run yurtadm reset
yurtadm reset

# 2. Clean up CNI configuration files
rm -rf /etc/cni/net.d
```
