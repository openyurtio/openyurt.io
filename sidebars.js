const { Component } = require("react");

module.exports = {
    docs: [
        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'introduction',
                {
                    'Install': [
                        'manually-setup',
                        'openyurt-install/yurtctl-convert-revert',
                    ]
                }
            ],
        },
        {
            type: 'category',
            label: 'Core Concepts',
            collapsed: false,
            items: [
                'core-concepts/architecture',
            ],
        },
        {
            type: 'category',
            label: 'Best Practices',
            collapsed: false,
            items: [
                'best-practices/yurt-app-manager',
                'best-practices/yurt-tunnel',
                'best-practices/yurtctl',
            ],
        },
        {
            type: 'category',
            label: 'User Manuals',
            collapsed: true,
            items: [
                {
                    'Yurt App Manager': [
                        'user-manuals/yurt-app-manager/yurt-app-manager-dev',
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'Developer Manuals',
            collapsed: true,
            items: [
                'developer-manuals/developer-guide',
                'developer-manuals/yurt-e2e-test',
            ],
        },

        {
            type: 'category',
            label: 'Roadmap',
            items: [
                'roadmap/README',
            ],
        },
        {
            type: 'doc',
            id: 'faq'
        },
    ],
};
