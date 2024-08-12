import React from "react";
import HomePageFeatures from "../data/HomePageFeatures";

const FeatureBlock = () => {
  return (
    <div className="hero" data-aos="fade-up">
      <div className="container">
        <section className="features">
          <div className="container">
            {HomePageFeatures.map(
              ({ imgUrl, title, description, reverse }, index) => (
                <div
                  key={index}
                  className={`row feature ${reverse ? "reverse" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200} // Optional delay based on index
                >
                  <div className="col col--3" data-aos="fade-right">
                    <div className="text--center">
                      {imgUrl && (
                        <img
                          className="featureImage"
                          src={imgUrl}
                          alt={title}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col col--9 featureDesc" data-aos="fade-left">
                    <div>
                      <h2>{title}</h2>
                      <div>{description}</div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeatureBlock;
