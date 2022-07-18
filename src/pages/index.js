import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FeatureBlock from '../components/FeaturesList';
import WhatIs from '../components/WhatIs';
import Button from '../components/Button';
import GhButton from '../components/GitHubButton'

export default function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
            <header className="hero">
                <div className="container text--center">
                    {/*<div className={styles.heroLogoWrapper}>*/}
                    {/*    <img className={styles.heroLogo} src={useBaseUrl('img/openyrut.png')} alt="OpenYurt Logo" />*/}
                    {/*</div>*/}
                    <h2 className="hero__title">{siteConfig.title}</h2>

                    <GhButton />

                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div
                        className="heroButtons">
                        <Button href={useBaseUrl('docs/installation/summary')}><Translate>Get Started</Translate></Button>
                        <Button href={useBaseUrl('docs/')}><Translate>Learn More</Translate></Button>
                    </div>
                </div>
            </header>

            <WhatIs />

            <FeatureBlock />

            <div className="hero">
                <div className="container text--center">
                    <h3 className="hero__subtitle">
                        <Translate>OpenYurt is a</Translate> <a href="https://cncf.io/">Cloud Native Computing Foundation</a> <Translate>sandbox project</Translate>
                    </h3>
                    <div className="cncf-logo" />
                </div>
            </div>
        </Layout>
    );
}
