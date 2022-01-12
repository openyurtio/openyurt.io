import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';


const features = [
    {
        title: <><Translate>Elegant and simple cloud-edge architecture</Translate></>,
        imgUrl: 'img/edge-architecture.png',
        description: (
            <>
                <p>
                    <Translate>
                        As the industry's first non-intrusive edge computing cloud-native platform, OpenYurt components are deployed in the cloud and at the edge in the form of plug-ins, achieving zero modification to Kubernetes. This allows developers and users to quickly understand and use OpenYurt.
                    </Translate>
                    <br />
                    <Translate>
                        In addition, OpenYurt introduces data filtering and permission management modules at the edge, so that users can enjoy the same experience as the Kubernetes cluster on the cloud without being aware of it.
                    </Translate>
                </p>
            </>
        ),
    },
    {
        title: <><Translate>Stable offline autonomy</Translate></>,
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
        reverse: true,
    },
    {
        title: <><Translate>Strong edge governance capabilities</Translate></>,
        imgUrl: 'img/edge-applications.png',
        description: (
            <>
                <p>
                    <Translate>
                        For edge scenarios, OpenYurt provides capabilities such as large-scale edge business management, cloud-edge traffic governance across network domains, and dynamic configuration of edge local storage. In addition, OpenYurt actively cooperates with other open source communities to expand the support for heterogeneous resources and the management capabilities of edge devices.
                    </Translate>
                    <br />
                    <Translate>
                        The strong edge governance capabilities of OpenYurt can effectively help users solve the problems of large-scale application delivery, operation and maintenance, and management and control on massive edge and terminal resources.
                    </Translate>
                </p>
            </>
        ),
    },
]
export default features
