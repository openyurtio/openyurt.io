---
title: Workload management overview
---

In cloud-edge environments, OpenYurt extends native Kubernetes workload types to address heterogeneous node pools, unstable cloud-edge bandwidth, and the need for fine-grained upgrade control across distributed edge nodes.

## YurtAppSet

YurtAppSet enables unitized application deployment based on NodePool. Instead of using uniform configuration across all pools, it creates a sub-workload (Deployment or StatefulSet) for each matched NodePool and allows per-pool overrides through `workloadTweaks`, such as replicas, container images, and arbitrary field patches.

For detailed usage, see [YurtAppSet](./yurt-app-set.md).

## YurtStaticSet

YurtStaticSet takes over the management of static pods, which are normally created and upgraded manually on each node via files in `/etc/kubernetes/manifests`. It distributes pod templates centrally and supports both AdvancedRollingUpdate and OTA upgrade strategies.

For detailed usage, see [YurtStaticSet](./yurt-static-set.md).

## DaemonSet Upgrade Model

OpenYurt extends native DaemonSet with two upgrade modes via the `daemonPodUpdater` controller:

- **AdvancedRollingUpdate** — Automatically skips `Not-Ready` nodes during rolling upgrades and resumes when they recover.
- **OTA** — Sets a `PodNeedUpgrade` condition on pod status; YurtHub exposes REST APIs for on-demand, per-pod upgrades.

To enable either mode, annotate the DaemonSet with `apps.openyurt.io/update-strategy` and set `.spec.updateStrategy.type` to `OnDelete`.

For detailed usage, see [DaemonSet Upgrade Model](./daemon-pod-updater.md).
