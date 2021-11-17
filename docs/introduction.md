---
title: Introduction
slug: /
---

## What is OpenYurt?
OpenYurt follows the philosophy of "integrating cloud and edge". It is an open platform that embraces the powerful 
orchestration capabilities of upstream Kubernetes. OpenYurt empowers users to manage large scale edge computing 
workloads with ease. Users can deliver, manage and monitor the edge workloads using the same upstream Kubernetes APIs. 

From the architectural perspective, OpenYurt provides edge computing capabilities via add-on mechanism rather than 
changing the upstream Kubernetes components. It is an open source project under Apache 2.0 License. Welcome to join us!


## Key features

- **Edge Autonomy**
  
  When edge nodes are offline or the cloud-to-node networking is not stable, it is important to make sure the workloads 
  are not being disrupted. When the connection resumes, the status of edge workloads will be synced with the cloud 
  control plane and remain consistent.
  
- **Edge and Cloud Synchronization**
  
  OpenYurt provides mutually encrypted tunnel and reverse proxy between edge nodes and the cloud control plane. 
  When ingress traffic is blocked due to networking policy, the cloud control plane can still retrieve heartbeat and 
  monitor the workloads. And users will still be able to use Kubectl and other monitoring tools such as prometheus, 
  metrics-server to manage and monitor the edge workloads.
  
- **Edge Zoning Unit**
  
  OpenYurt allows users to group workloads into different units distributed in different geo-locations. Out of box, 
  OpenYurt is able to provide users individual lifecycle management and operational policies based on the unit zoning.
  
- **Seamless Conversion**
  
  With yurtctl, a CLI tool, users can easily convert an upstream Kubernetes cluster into an OpenYurt one, and vice versa. 
  The add-ons by OpenYurt is low maintenance as well.
  

## Why OpenYurt?

- **Kubernetes native**

  OpenYurt is fully compatible with upstream Kubernetes. It supports all Kubernetes APIs as well as all the Workload 
types, Service, CSI plugin etc.

- **Highly reliable**

  Built upon edge autonomy and zoning unit, OpenYurt ensures high reliability in large scaled use cases. 
It supports most popular AI platforms，such as Tensorflow and Pytorch.

- **Platform agnostic**

  OpenYurt can be deployed on any Kubernetes cluster in public cloud or onprem datacenter.

- **Supports different edge architectures**
  
  OpenYurt supports arm, arm64 and x86 edge nodes.



## What's Next

Here are some recommended next steps:

- Start to [install OpenYurt](./manually-setup).
- Learn OpenYurt's [Architecture](core-concepts/architecture).

