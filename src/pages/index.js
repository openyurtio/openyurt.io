import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GitHubButton from 'react-github-btn';
import styles from './index.module.css';
import FeatureBlock from '../components/FeaturesList';
import WhatIs from '../components/WhatIs';
import Button from "../components/Button";

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
