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
                    'Installation': [
                        'installation/summary',
                        {
                            "OpenYurt Experience Center": [
                                'installation/openyurt-experience-center/overview',
                                'installation/openyurt-experience-center/user',
                                'installation/openyurt-experience-center/web_console',
                                'installation/openyurt-experience-center/kubeconfig',
                            ]
                        },
                        'installation/yurtctl-init-join',
                        {
                            'Conversion between OpenYurt and Kubernetes': [
                                'installation/yurtcluster',
                                'installation/yurtctl-convert-revert',
                                'installation/manually-setup',

                            ]
                        },
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
                {
                    'Components': [
                        'core-concepts/yurthub',
                        'core-concepts/yurttunnel',
                        'core-concepts/yurt-app-manager',
                        'core-concepts/yurt-controller-manager',
                        'core-concepts/node-resource-manager',
                        'core-concepts/yurt-device-controller',
                    ]
                }

            ],
        },
        {
            type: 'category',
            label: 'User Manuals',
            collapsed: true,
            items: [
                {
                    'Autonomy': [
                        'user-manuals/autonomy/node-autonomy',
                    ]
                },
                {
                    'Network': [
                        'user-manuals/network/edge-pod-network',
                        'user-manuals/network/service-topology',
                        'user-manuals/network/edge-ingress'
                    ]
                },
                {
                    'Storage': [
                        'user-manuals/storage/edge-local-storage',
                    ]
                },
                {
                    'Workload': [
                        'user-manuals/workload/node-pool-management',
                        'user-manuals/workload/uniteddeployment',
                        'user-manuals/workload/yurt-app-daemon',
                    ]
                },
                {
                    'Monitoring': [
                        'user-manuals/monitoring/prometheus',
                    ]
                },
                {
                    'IOT': [
                        'user-manuals/iot/edgex-foundry',
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'Best Practices',
            collapsed: false,
            items: [
                'best-practices/practices-1'
            ],
        },
        {
            type: 'category',
            label: 'Developer Manuals',
            collapsed: true,
            items: [
                'developer-manuals/how-to-build-and-test',
                'developer-manuals/local-up-openyurt',
                'developer-manuals/ci-workflow',
                'developer-manuals/how-to-contribute'
            ],
        },
        {
            type: 'doc',
            id: 'faq'
        },
    ],
};
