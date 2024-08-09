import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

const WhatIs = () => (
  <div className="hero" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col col--6" data-aos="fade-right">
          <h1>
            <Translate>What is OpenYurt?</Translate>
          </h1>
          <p className="hero__subtitle">
            <small>
              <Translate>
                OpenYurt is the intelligent edge computing platform which aims
                to extend the Cloud Native ecosystem to edge computing and IoT
                scenarios. By making non-intrusive enhancements, it empowers
                customer to manage large scale edge computing workloads in
                different architecture (e.g., ARM and X86) in a native
                Kubernetes manner.
              </Translate>
              <br />
              <br />
              <Translate>
                OpenYurt has been widely used in typical edge computing
                scenarios such as the IoT, distributed cloud, logistics,
                transportation, manufacturing, retail, CDN etc.
              </Translate>
            </small>
          </p>
        </div>
        <div className="col" data-aos="fade-left">
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

export default WhatIs;
