import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';


const features = [
    {
        title: <><Translate>Out-of-the-box cloud-edge-device collaboration capability</Translate></>,
        imgUrl: 'img/edge-architecture.png',
        description: (
            <>
                <p>
                    <Translate>
                        OpenYurt adopts an integrated cloud-edge-device architecture, which enables the unified management of massive edge resources and services in the cloud.
                    </Translate>
                    <br />
                    <Translate>
                        On the one hand, it seamlessly integrates existing capabilities on the cloud such as elastic expansion, intelligent operation, logging, and DevOps, ensuring high availability of edge services.
                    </Translate>
                    <Translate>
                        On the other hand, with the help of the cloud-edge-device integration channel, a large number of cloud-based capabilities, including middleware, security, AI, storage, and network management capabilities, are sunk to the edge, reducing the cost of self-construction of common cloud services on the edge side.
                    </Translate>
                </p>
            </>
        ),
    },
    {
        title: <><Translate>Powerful edge service self-healing capability</Translate></>,
        imgUrl: 'img/edge-autonomy.png',
        description: (
            <>
                <p>
                    <Translate>
                        In Kubernetes, if the edge node restarts when offline, the service will be interrupted because it cannot be automatically restored. With the powerful edge service self-healing capability in OpenYurt, it can be easily resolved the impact of node offline and node restart on edge services and ensure the service runs reliably. When the edge node network is restored, the status of edge services will be synchronized with cloud management and data consistency will be maintained.
                    </Translate>
                </p>
            </>
        ),
        reverse: true,
    },
    {
        title: <><Translate>Rich edge service orchestration capability</Translate></>,
        imgUrl: 'img/edge-applications.png',
        description: (
            <>
                <p>
                    <Translate>
                        For edge scenarios, OpenYurt pioneers the concept of Unitization, which can close the loop of resources, applications, and service traffic in the unit. At the resource level, the ability of node pools is abstracted, and edge site resources can be classified and divided according to geographical distribution. At the application management level, a set of application deployment models, such as unitized   deployment(UnitedDeployment), united DaemonSet(YurtAppDaemon), and edge ingress(YurtIngress) models, are designed. At the traffic service level, traffic can be accessed in a closed loop within the node pool.
                    </Translate>
                </p>
            </>
        ),
    },
    {
        title: <><Translate>Cloud-native device management capability</Translate></>,
        imgUrl: 'img/edge-storage.png',
        description: (
            <>
                <p>
                    <Translate>
                        OpenYurt abstracts and defines a cloud native model of leaf devices in edge computing scenario from the following perspectives: basic properties, main capabilities and what information can be transmitted. In addition, with good compatibility, OpenYurt seamlessly integrates mainstream IoT device management solutions. Finally, through cloud native declarative API, OpenYurt provides developers the ability of data collection, processing and control over edge devices.
                    </Translate>
                </p>
            </>
        ),
        reverse: true,
    },
]
export default features
