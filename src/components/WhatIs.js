import clsx from "clsx";
import styles from "../pages/index.module.css";
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React from "react";

const WhatIs = () => (
    <div className={clsx('hero', styles.hero)}>
        <div className="container">
            <div className="row">
                <div className="col col--6">
                    <h1><Translate>What is OpenYurt?</Translate></h1>
                    <p className="hero__subtitle">
                        <small>
                            <Translate>
                                OpenYurt is the intelligent edge computing platform which aims to extend the Cloud Native ecosystem to edge computing and IoT scenarios. By making non-intrusive enhancements, it empowers customer to manage large scale edge computing workloads in different architecture (e.g., ARM and X86)  in a native Kubernetes manner.
                            </Translate>
                            <br />
                            <br />
                            <Translate>
                                OpenYurt has been widely used in typical edge computing scenarios such as the IoT, distributed cloud , logistics, transportation, manufacturing, retail, CDN etc.
                            </Translate>
                            {/*<br />*/}
                            {/*<br />*/}
                            {/*<Translate>*/}
                            {/*    OpenYurt committed to becoming the reference architecture  in edge computing infrastructure.*/}
                            {/*</Translate>*/}
                        </small>
                    </p>
                </div>
                <div className="col">
                    <img
                        className="image"
                        src={useBaseUrl("img/what-is-openyurt.png")}
                        align="right"
                        alt="what is OpenYurt"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default WhatIs