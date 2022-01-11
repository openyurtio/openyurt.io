import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';


const features = [
    {
        title: <><Translate>Edge Autonomy</Translate></>,
        imgUrl: 'img/edge-autonomy.png',
        description: (
            <>
                <p>
                    <Translate>
                        In native Kubernetes, edge-cloud-edge network anomalies often occur, such as edge nodes being offline or network instability between edge nodes and cloud. This may trigger eviction and re-establishment of services on edge nodes. Through the edge autonomy capability of OpenYurt, the impact of cloud-edge network exceptions on edge services can be easily resolved, ensuring that workloads are not interrupted. At the same time, when the cloud-edge network is restored, the status of edge workloads will be synchronized with cloud management and control and maintain data consistency.
                    </Translate>
                </p>
            </>
        ),
    },
    {
        title: <><Translate>Edge Network</Translate></>,
        imgUrl: 'img/edge-network.png',
        description: (
            <>
                <p>
                    <Translate>
                        OpenYurt provides edge network governance capabilities and solves the problem of establishing network connections between cloud management and edge nodes in private networks. OpenYurt can meet the operation and maintenance requirements of the edge in an imperceptible state, and will also support business access between cloud-edge and edge-to-edge across the public network.
                    </Translate>
                </p>
            </>
        ),
        reverse: true,
    },
    {
        title: <><Translate>Edge Applications</Translate></>,
        imgUrl: 'img/edge-applications.png',
        description: (
            <>
                <p>
                    <Translate>
                        In edge scenarios, edge nodes usually have strong regional, regional, or other logical grouping characteristics. OpenYurt supports node unit management, and designs a series of unit resources to provide large-scale management of nodes and applications in edge scenarios.
                    </Translate>
                </p>
            </>
        ),
    },
]
export default features
