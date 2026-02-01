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
                        'core-concepts/yurt-manager',
                        'core-concepts/yurthub',
                        'core-concepts/raven',
                        'core-concepts/yurt-iot-dock',
                        'core-concepts/yurt-coordinator',
                        'core-concepts/node-resource-manager',
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
                    'Node pool management': [
                        'user-manuals/node-pool-management/node-pool-management-overview',
                        'user-manuals/node-pool-management/create-a-node-pool',
                        'user-manuals/node-pool-management/edit-a-node-pool',
                        `user-manuals/node-pool-management/delete-a-node-pool`
                    ]
                },
                {
                    'Node management': [
                        'user-manuals/node-management/node-management-overview',
                        'user-manuals/node-management/join-a-node',
                        'user-manuals/node-management/remove-a-node',
                        'user-manuals/node-management/configure-node-autonomy'
                    ]
                },
                {
                    'Workload management': [
                        'user-manuals/workload/workload-management-overview',
                        'user-manuals/workload/yurt-app-set',
                        'user-manuals/workload/yurt-static-set',
                        'user-manuals/workload/daemon-pod-updater'
                    ]
                },
                {
                    'Network management': [
                        'user-manuals/network/network-management-overview',
                        'user-manuals/network/network-ports-list',
                        {
                            'Container network': [
                                'user-manuals/network/container-network/hostnetwork',
                                'user-manuals/network/container-network/flannel'
                            ]
                        },
                        {
                            'Service': [
                                'user-manuals/network/service/service-topology',
                                'user-manuals/network/service/nodeport-isolation'
                            ]
                        },
                        'user-manuals/network/raven'
                    ]
                },
                {
                    'Storage': [
                        'user-manuals/storage/edge-local-storage',
                    ]
                },
                {
                    'Observability': [
                        'user-manuals/observability/prometheus',
                    ]
                },
                {
                    'IoT': [
                        'user-manuals/iot/edgex-foundry',
                    ]
                },
                {
                    'crd-upgrade': [
                        'user-manuals/crd-upgrade/yurtmanager-crd-upgrade',
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
                'test-report/yurt-coordinator-test',
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
                'developer-manuals/how-to-contribute',
                'developer-manuals/code-of-conduct',
                'developer-manuals/how-to-write-a-filter'
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
                        "reference/yurtadm/yurtadm_join",
                        "reference/yurtadm/yurtadm_renew_certificate",
                        "reference/yurtadm/yurtadm_renew",
                        "reference/yurtadm/yurtadm_reset",
                        "reference/yurtadm/yurtadm_token",
                    ],
                    'iot': [
                        "reference/iot/components",
                    ]
                }
            ],
        },
        {
            type: 'category',
            label: 'Integrations',
            collapsed: true,
            items: [
              'integrations/integrations'
            ]
          },
        {
            type: 'category',
            label: 'FAQ',
            collapsed: true,
            items: [
                'faq/yurthub',
                'faq/yurtadm',
                'faq/yurt-tunnel',
                'faq/coredns',
                'faq/prometheus',
            ],
        },
    ],
};
