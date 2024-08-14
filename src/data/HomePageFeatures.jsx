import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';


const features = [
    {
        title: <Translate>Powerful edge autonomy capability</Translate>,
        imgUrl: 'img/edge-autonomy.png',
        description: (
            <p>
                <Translate>
                    In edge computing scenario, the network connections between edge and cloud are diversified (e.g. 5G, WIFI, etc.). Network jitter or node offline will lead to node heartbeat cannot be reported to the cloud in real time, which triggers the eviction and reconstruction of edge services. At the same time, in the abnormal state of cloud-edge network connection, edge services on the nodes will not be automatically restored when the edge nodes restart due to the inability to obtain workload data from the cloud, which leads to service interruption of the edge services. OpenYurt provides strong autonomy capability for edge services by enhancing the workload eviction control capability in the cloud and introducing local caching and heartbeat proxy reporting mechanisms at the edge to ensure the continuous and reliable operation of edge services. At the same time, when the edge node network is restored, the state of the edge service will be synchronized with the cloud control and ensure the data consistency.
                </Translate>
            </p>
        ),
    },
    {
        title: <Translate>Cross-region network communication capability</Translate>,
        imgUrl: 'img/edge-architecture.png',
        description: (
            <p>
                <Translate>
                    In the cloud edge scenario, the cloud to edge / edge to edge are in different physical network planes. Generally only the cloud side exposes public network service addresses, and the native CNI container network can only address data-plane communication in a single region (layer 2 or layer 3 connectivity scenario). The cloud to edge / edge to edge network communication capability built by raven not only elegantly solves the data-plane communication needs across geographies, but also maintains seamless compatibility with the native CNI container network solution. At the same time, the cloud-edge traffic reuse capability provided by pool-coordinator significantly reduces the amount of control plane communication data between cloud-edges.
                </Translate>
            </p>
        ),
        reverse: true,
    },
    {
        title: <Translate>Multi-region resource and application management</Translate>,
        imgUrl: 'img/edge-applications.png',
        description: (
            <p>
                <Translate>
                    For edge scenarios, OpenYurt pioneers the concept of Unitization, which can close the loop of resources, applications, and service traffic in the unit. At the resource level, the ability of node pools is abstracted, and edge site resources can be classified and divided according to geographical distribution. At the application management level, a set of application deployment models, such as unitized   deployment(UnitedDeployment), united DaemonSet(YurtAppDaemon), and edge ingress(YurtIngress) models, are designed. At the traffic service level, traffic can be accessed in a closed loop within the node pool. At the application upgrading level, OTA and Auto upgrading strategies are designed which allow edge application owners to intervene in upgrade decisions addressings the issue that NodeNotReady may cause the native rolling upgrade model to block.
                </Translate>
            </p>
        ),
    },
    {
        title: <Translate>Cloud-native device management capability</Translate>,
        imgUrl: 'img/edge-storage.png',
        description: (
            <p>
                <Translate>
                    OpenYurt abstracts and defines a cloud native model of leaf devices in edge computing scenario from the following perspectives: basic properties, main capabilities and what information can be transmitted. In addition, with good compatibility, OpenYurt seamlessly integrates mainstream IoT device management solutions. Finally, through cloud native declarative API, OpenYurt provides developers the ability of data collection, processing and control over edge devices.
                </Translate>
            </p>
        ),
        reverse: true,
    },
]
export default features
