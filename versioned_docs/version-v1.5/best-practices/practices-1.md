---
title: Cloud-Edge-Device DevOps Collaboration
---
## Background
Express delivery industry is a typical entity industry, providing point-to-point parcel transport services, derived  the acquisition, transfer and delivery links. With the positive economic development of the society, the volume of the express industry is growing. Shentong Express daily transfers 30 to 50 million packages, with an average daily track of about 500 million, nearly 1 billion during the promotion period. Automated sorting daily delivers more than 1 billion pieces of data, cross with hundreds of sets, the growth rate is estimated to be more than 20% per year, the future express must be digital system express, involving a large number of automation, IoT and human-machine assistance system interaction.

In the traditional cloud-end architecture, the transfer link has a strong edge characteristics. The current situation of traditional cloud - to - end architecture cannot meet the requirements of actual side - end scenarios. And these problems are the common problems of each domain. A hybrid cloud architecture with high availability, high stability and scalability for mass device access is urgently needed.

In the context of the rapid development and application of IoT and edge technology, the Paas platform on pure cloud is difficult to meet the strong demands of high response, low delay and large connection of the edge. Then, we adopt OpenYurt platform as the core of the edge architecture of STO Express IoT cloud, carrying edge resource hosting and application management. 

## cloud edge coordination
Where is the cloud side synergy capability of STO Express IoT cloud side architecture, and what are the advantages? The cloud-side collaboration architecture mainly uses OpenYurt to provide containerized isolation environment. Master clusters are uniformly deployed in the public cloud and Nodes are distributed to the edge (distributed in transport centers across the country). The edge development of STO Express is completely consistent with the cloud R&D system. Edge containers are generated with one click when releasing edge applications, and the PaaS platform provides unified deployment, log monitoring and other cloud management and control capabilities.

![flannel-architecture](../../../static/img/docs/best-practices/flannel-architecture.png)

On top of this, STO Express developed edge Paas platform for DevOps. In terms of edge resource control, STO Express divides four available areas for deployment according to the distribution of centers and real-time RT statistics, namely east China, southwest China, North China and South China. Developers can configure alarms and implement second-level service monitoring to quickly discover and handle faults.

![architecture](../../../static/img/docs/best-practices/architecture.png)


## Business value
STO Express IoT cloud side architecture is the first implementation scheme in the express industry about cloud native architecture. It provides a research and development model that is completely consistent with the on-cloud  development system. With OpenYurt as the technical base, it realizes the unified management of on-cloud and off-cloud resources and lays a solid hybrid cloud foundation.

- High availability

- Multiple environment isolation

- The value of cloud edge coordination architecture:
    - Stability increased from 99.9% to 99.95%.
    - Reduce waste of resources.
    - Consistent with cloud application development efficiency and experience.
