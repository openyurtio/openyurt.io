/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
    title: 'OpenYurt',
    tagline: 'An open platform that extends upstream Kubernetes to Edge',
    url: 'https://openyurt.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/openyurt.ico',
    organizationName: 'openyurtio', // Usually your GitHub org/user name.
    projectName: 'openyurt.io', // Usually your repo name.
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            zh: {
                label: '简体中文',
            },
        },
    },
    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicons/apple-touch-icon.png",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicons/favicon-32x32.png",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicons/favicon-16x16.png",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "icon",
                type: "image/svg+xml",
                href: "/favicons/favicon.svg",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "icon",
                type: "image/png",
                href: "/favicons/favicon.png",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "shortcut icon",
                type: "image/x-icon",
                href: "/favicons/favicon.ico",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "manifest",
                href: "/favicons/site.webmanifest",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "mask-icon",
                color: "#ffffff",
                href: "/favicons/safari-pinned-tab.svg",
            },
        },
        {
            tagName: "meta",
            attributes: {
                name: "theme-color",
                content: "#ffffff",
            },
        },
        {
            tagName: "meta",
            attributes: {
                name: "msapplication-config",
                content: "/favicons/browserconfig.xml",
            },
        },
    ],
    themeConfig: {
        announcementBar: {
            id: 'start',
            content:
                '⭐️ If you like OpenYurt, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/openyurtio/openyurt">GitHub</a>! ⭐️',
        },
        algolia: {
            appId: '<NEW_APP_ID>',
            apiKey: '636381de756ade28690a2d37b6a9e117',
            indexName: 'openyurt',
        },
        navbar: {
            title: 'OpenYurt',
            logo: {
                alt: 'OpenYurt',
                src: 'img/openyurt.ico',
            },
            items: [
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                },
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    label: 'Experience-Center',
                    href: 'http://47.243.253.79/login',
                    position: 'left'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/openyurtio/openyurt',
                    className: 'header-github-link',
                    position: 'right',
                },
            ],
        },
        footer: {
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/installation/summary',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'CNCF Slack ( #openyurt channel )',
                            href: 'https://join.slack.com/t/openyurt/shared_invite/zt-rc5ecz4h-sEWU1vYx5gzc3_zx3En0jg',
                        },
                        {
                            label: 'DingTalk (31993519)',
                            href: '.',
                        },
                        {
                            label: 'Bi-week Meeting (APAC, Chinese)',
                            href: 'https://shimo.im/docs/rGK3cXYWYkPrvWp8',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/openyurtio/openyurt',
                        },
                        {
                            label: 'Community Membership',
                            href: 'https://github.com/openyurtio/community/blob/main/community-membership.md',
                        },
                        {
                            label: 'OpenYurt Experience Center',
                            href: 'http://47.243.253.79/login',
                        },
                    ],
                },
            ],
            copyright: `
        <br />
        <strong>Copyright © ${new Date().getFullYear()} The OpenYurt Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage/"> Trademark Usage</a> page.</strong
      `,
        },
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
        },
        zoom: {
            selector: '.markdown :not(em) > img',
            config: {
                background: {
                    light: 'rgb(255, 255, 255)',
                    dark: 'rgb(50, 50, 50)'
                }
            }
        }
    },
    plugins:
        [
            'docusaurus-plugin-sass',
            require.resolve("docusaurus-plugin-image-zoom"),
        ],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/openyurtio/openyurt.io/tree/master',
                    editUrl: function ({
                        locale,
                        docPath,
                    }) {
                        return `https://github.com/openyurtio/openyurt.io/edit/master/docs/${docPath}`;
                    },
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    includeCurrentVersion: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/openyurtio/openyurt.io/tree/master/blog',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
};

