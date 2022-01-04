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
                        'core-concepts/node-resource-manager',
                        {
                            "Edge Device": [
                                'core-concepts/edge-device/edgex-foundry',
                            ]
                        }
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
                        'user-manuals/workload/in-pool-deployment',
                        'user-manuals/workload/node-pool-management',
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
            ],
        },
        {
            type: 'doc',
            id: 'faq'
        },
    ],
};
