import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useIsBrowser from "@docusaurus/useIsBrowser";
import config from "./languages.json";
import Layout from "@theme/Layout";
import "./index.scss";
import Github from "./github.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function () {
  const isBrowser = useIsBrowser();
  const language =
    isBrowser && location.pathname.indexOf("/zh-CN/") === 0 ? "zh-CN" : "en";
  const dataSource = config?.[language];

  function getGitName(url) {
    return "@" + url.replace("https://github.com/", "");
  }

  function avatarUrl(id) {
    return "https://avatars.githubusercontent.com/u/" + id + "?v=4";
  }

  return (
    <Layout>
      <BrowserOnly>
        {() => {
          // AOS JS
          AOS.init({
            offset: 100,
            duration: 700,
            easing: "ease-out-quad",
            once: !0,
          });
          window.addEventListener("load", AOS.refresh);
          return (
            <div
              className="block team_page container overflow-hidden"
              style={{ padding: "10px 0 30px" }}
            >
              <h3 className="fs-2 mb-4 fw-bold text-center">OpenYurt Team</h3>
              <p className="team_desc team_indent">{dataSource.info.desc}</p>
              <h3 className="team_title">
                Reviewers
                <span className="desc">
                  Reviewers apply to all OpenYurt repositories.
                </span>
              </h3>

              <div className="team-group">
                {dataSource.reviewers.map((item, i) => (
                  <div
                    className="team-box my-3"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="hover-top-in text-center">
                      <div className="team-user overflow-hidden z-index-1 position-relative px-5 d-flex justify-content-center">
                        <img
                          className="team-user-img"
                          src={avatarUrl(item.githubId)}
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="position-relative bg-team text-center hover-top--in">
                        <h6 className="font-weight-bold team-name mb-1">
                          {item.name}
                        </h6>
                        <small>{getGitName(item.gitUrl)}</small>
                        <div className="pt-2">
                          <a className="icon-sm team-link" href={item.gitUrl}>
                            <Github className="github-icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="team_title">Approvers</h3>
              <div className="team-group">
                {dataSource.approvers.map((item, i) => (
                  <div
                    className="team-box my-3"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="hover-top-in text-center">
                      <div className="team-user overflow-hidden z-index-1 position-relative px-5 d-flex justify-content-center">
                        <img
                          className="team-user-img"
                          src={avatarUrl(item.githubId)}
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="position-relative bg-team text-center hover-top--in">
                        <h6 className="font-weight-bold team-name mb-1">
                          {item.name}
                        </h6>
                        <small>{getGitName(item.gitUrl)}</small>
                        <div className="pt-2">
                          <a className="icon-sm team-link" href={item.gitUrl}>
                            <Github className="github-icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="team_title">
                Maintainers
                <span className="desc">
                  Maintainers apply to all OpenYurt repositories.
                </span>
              </h3>
              <div className="team-group">
                {dataSource.maintainers.map((item, i) => (
                  <div
                    className="team-box my-3"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="hover-top-in text-center">
                      <div className="team-user overflow-hidden z-index-1 position-relative px-5 d-flex justify-content-center">
                        <img
                          className="team-user-img"
                          src={avatarUrl(item.githubId)}
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="position-relative bg-team text-center hover-top--in">
                        <h6 className="font-weight-bold team-name mb-1">
                          {item.name}
                        </h6>
                        <small>{getGitName(item.gitUrl)}</small>
                        <div className="pt-2">
                          <a className="icon-sm team-link" href={item.gitUrl}>
                            <Github className="github-icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="team_title">Contributors</h3>
              <span className="desc">{dataSource.info.contributors}</span>
              <div className="col py-5">
                <img src="https://contrib.rocks/image?repo=openyurtio/openyurt.io" />
                <img src="https://contrib.rocks/image?repo=openyurtio/openyurt" />
              </div>
            </div>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
