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
                    'Usage Conditions': [
                        'usage-conditions/resource-and-system-requirements'
                    ]
                },
                {
                    "Installation": [
                        "installation/summary",
                        {
                            "Install Control Plane Components": [
                                "installation/manually-setup",
                            ]
                        },
                        "installation/yurtadm-join"
                    ]
                },
                {
                    "OpenYurt Experience Center": [
                        "installation/openyurt-experience-center/overview",
                        "installation/openyurt-experience-center/user",
                        "installation/openyurt-experience-center/web_console",
                        "installation/openyurt-experience-center/kubeconfig"
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
                        'core-concepts/raven',
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
                        'user-manuals/autonomy/selfhealing-during-network-disconnection',
                        'user-manuals/autonomy/heartbeat-delegation-for-disconnected-nodes',
                        'user-manuals/autonomy/node-pod-binding'
                    ]
                },
                {
                    'Network': [
                        'user-manuals/network/raven',
                        'user-manuals/network/bandwidth-reduction',
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
                        'user-manuals/workload/daemon-pod-updater',
                        'user-manuals/workload/node-pool-management',
                        'user-manuals/workload/yurt-app-set',
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
            label: 'Test Report',
            collapsed: true,
            items: [
                'test-report/yurthub-performance-test',
                'test-report/pod-recover-efficiency-test',
            ],
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
            type: 'category',
            label: 'Reference',
            collapsed: true,
            items: [
                'reference/api_reference',
                {
                    'yurtadm': [
                        "reference/yurtadm/yurtadm",
                        "reference/yurtadm/yurtadm_completion",
                        "reference/yurtadm/yurtadm_completion_bash",
                        "reference/yurtadm/yurtadm_completion_fish",
                        "reference/yurtadm/yurtadm_completion_powershell",
                        "reference/yurtadm/yurtadm_completion_zsh",
                        "reference/yurtadm/yurtadm_docs",
                        "reference/yurtadm/yurtadm_init",
                        "reference/yurtadm/yurtadm_join",
                        "reference/yurtadm/yurtadm_reset",
                        "reference/yurtadm/yurtadm_token",
                    ]
                }
            ],
        },
        {
            type: 'doc',
            id: 'faq'
        },
    ],
};
