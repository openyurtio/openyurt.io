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
                        When edge nodes are offline or the cloud-to-node networking is not stable, it is important to make sure the workloads are not being disrupted. When the connection resumes, the status of edge workloads will be synced with the cloud control plane and remain consistent.
                    </Translate>
                </p>
            </>
        ),
    },
    {
        title: <><Translate>Edge and Cloud Synchronization</Translate></>,
        imgUrl: 'img/edge-and-cloud-synchronization.png',
        description: (
            <>
                <p>
                    <Translate>
                        OpenYurt provides mutually encrypted tunnel and reverse proxy between edge nodes and the cloud control plane. When ingress traffic is blocked due to networking policy, the cloud control plane can still retrieve heartbeat and monitor the workloads. And users will still be able to use Kubectl and other monitoring tools such as prometheus, metrics-server to manage and monitor the edge workloads.
                    </Translate>
                </p>
            </>
        ),
        reverse: true,
    },
    {
        title: <><Translate>Edge Zoning Unit</Translate></>,
        imgUrl: 'img/edge-zoning-unit.png',
        description: (
            <>
                <p>
                    <Translate>
                        OpenYurt allows users to group workloads into different units distributed in different geo-locations. Out of box, OpenYurt is able to provide users individual lifecycle management and operational policies based on the unit zoning.
                    </Translate>
                </p>
            </>
        ),
    },
]
export default features
