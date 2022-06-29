import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GitHubButton from 'react-github-btn';
import styles from './index.module.css';
import FeatureBlock from '../components/FeaturesList';


const Button = ({ children, href }) => {
    return (
        <div className="col col--2 margin-horiz--sm">
            <Link
                className="button button--outline button--primary button--lg"
                to={href}>
                {children}
            </Link>
        </div>
    );
};


export default function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
            <header className={clsx('hero', styles.hero)}>
                <div className="container text--center">
                    {/*<div className={styles.heroLogoWrapper}>*/}
                    {/*    <img className={styles.heroLogo} src={useBaseUrl('img/openyrut.png')} alt="OpenYurt Logo" />*/}
                    {/*</div>*/}
                    <h2 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h2>
                    <GitHubButton
                        href="https://github.com/openyurtio/openyurt"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star facebook/metro on GitHub">
                        Star
                    </GitHubButton>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div
                        className={clsx(styles.heroButtons, 'name', 'margin-vert--md')}>
                        <Button href={useBaseUrl('docs/installation/summary')}><Translate>Get Started</Translate></Button>
                        <Button href={useBaseUrl('docs/')}><Translate>Learn More</Translate></Button>
                    </div>
                </div>
            </header>

            <WhatIs />

            <FeatureBlock />

            <div className={clsx('hero', styles.hero)}>
                <div className="container text--center">
                    <h3 className="hero__subtitle">
                        <Translate>OpenYurt is a</Translate> <a href="https://cncf.io/">Cloud Native Computing Foundation</a> <Translate>sandbox project</Translate>
                    </h3>
                    <div className={clsx('cncf-logo', styles.cncfLogo)} />
                </div>
            </div>
        </Layout>
    );
}

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




