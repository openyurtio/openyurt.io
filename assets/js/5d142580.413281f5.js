"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[93998],{54485:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=o(85893),a=o(11151);const r={title:"EdgeX Foundry"},i=void 0,d={id:"user-manuals/iot/edgex-foundry",title:"EdgeX Foundry",description:"This document mainly describes how to deploy the EdgeX system and YurtIoTDock component on an existing OpenYurt cluster using PlatformAdmin.",source:"@site/versioned_docs/version-v1.4/user-manuals/iot/edgex-foundry.md",sourceDirName:"user-manuals/iot",slug:"/user-manuals/iot/edgex-foundry",permalink:"/docs/user-manuals/iot/edgex-foundry",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/user-manuals/iot/edgex-foundry.md",tags:[],version:"v1.4",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:1720854915e3,frontMatter:{title:"EdgeX Foundry"},sidebar:"docs",previous:{title:"prometheus",permalink:"/docs/user-manuals/monitoring/prometheus"},next:{title:"YurtHub Performance Test",permalink:"/docs/test-report/yurthub-performance-test"}},l={},c=[{value:"Environment",id:"environment",level:2},{value:"Install yurt-iot-dock environment",id:"install-yurt-iot-dock-environment",level:2},{value:"Device platform management",id:"device-platform-management",level:2},{value:"1. Create Node Pool",id:"1-create-node-pool",level:3},{value:"2. Create the IoT system PlatformAdmin within the node pool",id:"2-create-the-iot-system-platformadmin-within-the-node-pool",level:3},{value:"3. Deploy optional components",id:"3-deploy-optional-components",level:3},{value:"4. Modify component configuration",id:"4-modify-component-configuration",level:3},{value:"5. Add components manually",id:"5-add-components-manually",level:3},{value:"Configure PlatformAdmin",id:"configure-platformadmin",level:4},{value:"Edit PlatformAdminFramework",id:"edit-platformadminframework",level:4},{value:"End device management",id:"end-device-management",level:2},{value:"1. Add device-virtual components manually",id:"1-add-device-virtual-components-manually",level:3},{value:"2. Create Device, DeviceProfile",id:"2-create-device-deviceprofile",level:3},{value:"4. Retrieve device generated data",id:"4-retrieve-device-generated-data",level:3},{value:"5. Update the properties of device",id:"5-update-the-properties-of-device",level:3}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This document mainly describes how to deploy the EdgeX system and YurtIoTDock component on an existing OpenYurt cluster using PlatformAdmin."}),"\n",(0,t.jsx)(n.p,{children:"In OpenYurt v1.4, we have upgraded the original yurt-edgex-manager and yurt-device-controller components. The former is now built-in within yurt-manager, allowing users to create PlatformAdmin resources by writing YAML files. With just a few lines of configuration, a complete EdgeX system can be built within the node pool. The latter has been renamed as yurt-iot-dock and will be automatically deployed to the edge side when PlatformAdmin is created. This facilitates the one-click management of edge devices for users."}),"\n",(0,t.jsx)(n.p,{children:"If you don't have an OpenYurt cluster yet, you can use the yurtadm tool to initialize an OpenYurt cluster or convert an existing Kubernetes cluster into an OpenYurt cluster."}),"\n",(0,t.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OpenYurt v1.4.0+"}),"\n",(0,t.jsxs)(n.li,{children:["You should first install ",(0,t.jsx)(n.code,{children:"yurt-manager"})]}),"\n",(0,t.jsx)(n.li,{children:"Nodes outside the same local network as the master node need to deploy a coreDNS pod."}),"\n",(0,t.jsxs)(n.li,{children:["Set ServiceTopology to ",(0,t.jsx)(n.code,{children:"kubernetes.io/hostname"})," for CoreDNS service. For details, please refer to ",(0,t.jsx)(n.a,{href:"https://openyurt.io/docs/user-manuals/network/service-topology",children:"ServiceTopology"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-yurt-iot-dock-environment",children:"Install yurt-iot-dock environment"}),"\n",(0,t.jsx)(n.p,{children:"To deploy yurt-iot-dock using PlatformAdmin, you first need to install the helm chart for yurt-iot-dock into your Kubernetes cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"helm install yurt-iot-dock ./charts/yurt-iot-dock\n"})}),"\n",(0,t.jsx)(n.h2,{id:"device-platform-management",children:"Device platform management"}),"\n",(0,t.jsx)(n.h3,{id:"1-create-node-pool",children:"1. Create Node Pool"}),"\n",(0,t.jsx)(n.p,{children:'First, create two nodepools: one is a cloud nodepool named "beijing", and the other is an edge nodepool named "hangzhou".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Create beijing nodepool\ncat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: beijing\nspec:\n  type: Cloud\nEOF\n\n# Create hangzhou nodepool\ncat << EOF | kubectl apply -f -\napiVersion: apps.openyurt.io/v1beta1\nkind: NodePool\nmetadata:\n  name: hangzhou\nspec:\n  type: Edge\nEOF\n"})}),"\n",(0,t.jsx)(n.p,{children:'Next, add the specified nodes to their respective node pools. Label the node "openyurt-worker" as a cloud node, and label the node "openyurt-worker2" as an edge node.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# Mark "openyurt-worker" as a cloud node\nkubectl label node openyurt-worker apps.openyurt.io/nodepool=beijing\n# Mark "openyurt-worker2" as an edge node\nkubectl label node openyurt-worker2 apps.openyurt.io/nodepool=hangzhou\n'})}),"\n",(0,t.jsx)(n.p,{children:"Finally, check the status of the nodepools to ensure they are in a healthy state."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Check the status of the nodepools\nkubectl get np\nNAME       TYPE    READYNODES   NOTREADYNODES   AGE\nbeijing    Cloud   1            0               4d18h\nhangzhou   Edge    1            0               4d18h\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-create-the-iot-system-platformadmin-within-the-node-pool",children:"2. Create the IoT system PlatformAdmin within the node pool"}),"\n",(0,t.jsx)(n.p,{children:'Configure the use of the EdgeX version and select to create it within the "hangzhou" nodepool.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# Create an EdgeX deployment of the "Minnesota" version within the "hangzhou" node pool\ncat <<EOF | kubectl apply -f -\napiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\nEOF\n\n# Verify the deployment status to ensure everything is set up correctly\nkubectl get po\nNAME                                                              READY   STATUS    RESTARTS   AGE\nedgex-core-command-hangzhou-4j6pz-8668ff94d7-hqw2r                1/1     Running   0          61s\nedgex-core-common-config-bootstrapper-hangzhou-jnw2q-57bd99xr9p   1/1     Running   0          61s\nedgex-core-consul-hangzhou-6p9tj-798489c647-6xz4m                 1/1     Running   0          61s\nedgex-core-metadata-hangzhou-6l7v5-6f964fc4f-67f9p                1/1     Running   0          61s\nedgex-redis-hangzhou-cwgsw-5c7d7fc478-fsgp9                       1/1     Running   0          61s\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-deploy-optional-components",children:"3. Deploy optional components"}),"\n",(0,t.jsx)(n.p,{children:'In the current version (v1.4.0) of PlatformAdmin, you can use the "components" field to deploy optional components with a single command. Below is an example of deploying "yurt-iot-dock," "edgex-device-virtual," and "edgex-device-rest" using the "components" field:'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"/docs/reference/iot/components",children:"Components Documentation"})," for component names for optional components."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# Add the "components" field on top of the previously deployed PlatformAdmin\ncat <<EOF | kubectl apply -f -\napiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n  - name: edgex-device-virtual\n  - name: edgex-device-rest\nEOF\n\n# You can see that the optional components have been deployed\nkubectl get po\nNAME                                                              READY   STATUS    RESTARTS   AGE\nedgex-core-command-hangzhou-cwgs2-77bb5d9cdd-zp89r                1/1     Running   0          20m\nedgex-core-common-config-bootstrapper-hangzhou-bqhnb-57bd9c4q5q   1/1     Running   0          20m\nedgex-core-consul-hangzhou-5rl7c-66dbc9c7d7-dqvm8                 1/1     Running   0          20m\nedgex-core-metadata-hangzhou-srpff-dd6c6f9cb-2cj9k                1/1     Running   0          20m\nedgex-device-rest-hangzhou-v7p99-7b8bb4f5d4-kz8sq                 1/1     Running   0          7m49s\nedgex-device-virtual-hangzhou-ssz59-796f948c69-5k4tc              1/1     Running   0          7m49s\nedgex-redis-hangzhou-bk5g5-5fbdf6fffb-cmf6d                       1/1     Running   0          20m\nyurt-iot-dock-hangzhou-56f98-8549f848f5-v2pjn                     1/1     Running   0          7m49s\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4-modify-component-configuration",children:"4. Modify component configuration"}),"\n",(0,t.jsx)(n.p,{children:'PlatformAdmin provides advanced users with an entry point for custom configurations. All configurations of PlatformAdmin are controlled by a configmap named "platformadmin-framework". By modifying the values of this configmap, users can modify the configuration of each component. Here is an example of the "platformadmin-framework" configmap:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\ndata:\n  framework: |\n    components:\n    - deployment:\n        selector:\n          matchLabels:\n            app: edgex-core-command\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: edgex-core-command\n          spec:\n            containers:\n            - env:\n              - name: SERVICE_HOST\n                value: edgex-core-command\n              - name: EXTERNALMQTT_URL\n                value: tcp://edgex-mqtt-broker:1883\n              envFrom:\n              - configMapRef:\n                  name: common-variables\n              image: openyurt/core-command:3.0.0\n              imagePullPolicy: IfNotPresent\n              name: edgex-core-command\n              ports:\n              - containerPort: 59882\n                name: tcp-59882\n                protocol: TCP\n              resources: {}\n            hostname: edgex-core-command\n      name: edgex-core-command\n      service:\n        ports:\n        - name: tcp-59882\n          port: 59882\n          protocol: TCP\n          targetPort: 59882\n        selector:\n          app: edgex-core-command\n...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"5-add-components-manually",children:"5. Add components manually"}),"\n",(0,t.jsx)(n.p,{children:"Considering that some users may need to add their own custom components or modify existing components, the component mechanism of PlatformAdmin also supports adding new components. To add a new component, please follow these steps:"}),"\n",(0,t.jsx)(n.h4,{id:"configure-platformadmin",children:"Configure PlatformAdmin"}),"\n",(0,t.jsx)(n.p,{children:'Add the name of the component you want to add to the "components" field in PlatformAdmin. For example, if we want to add a component named "nginx-demo."'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# Add nginx-demo in components\ncat <<EOF | kubectl apply -f -\napiVersion: iot.openyurt.io/v1alpha2\nkind: PlatformAdmin\nmetadata:\n  name: edgex-sample\nspec:\n  version: minnesota\n  poolName: hangzhou\n  components:\n  - name: yurt-iot-dock\n  - name: edgex-device-virtual\n  - name: edgex-device-rest\n  - name: nginx-demo\nEOF\n"})}),"\n",(0,t.jsx)(n.h4,{id:"edit-platformadminframework",children:"Edit PlatformAdminFramework"}),"\n",(0,t.jsx)(n.p,{children:'Since the AutoCollector does not collect a standard configuration file for the "nginx-demo" component, there is no corresponding configuration in the platformadmin-framework. In this case, users can manually add this component.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# Modify the contents of the configmap using kubectl edit\nkubectl edit cm platformadmin-framework\n\n# Added deployment and service for nginx-demo\napiVersion: v1\ndata:\n  framework: |\n    components:\n    - deployment:\n        selector:\n          matchLabels:\n            app: nginx-demo\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: nginx-demo\n          spec:\n            containers:\n            - image: nginx\n              imagePullPolicy: IfNotPresent\n              name: nginx-demo\n              ports:\n              - containerPort: 80\n                name: nginx\n                protocol: TCP\n              resources: {}\n            hostname: nginx-demo\n      name: nginx-demo\n      service:\n        ports:\n        - name: nginx\n          port: 80\n          protocol: TCP\n          targetPort: 80\n        selector:\n          app: nginx-demo\n...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"end-device-management",children:"End device management"}),"\n",(0,t.jsx)(n.p,{children:"Next, we introduce the end-device management function of yurt-iot-dock, using virtual devices as a case study."}),"\n",(0,t.jsx)(n.h3,{id:"1-add-device-virtual-components-manually",children:"1. Add device-virtual components manually"}),"\n",(0,t.jsx)(n.p,{children:"To make things easy, we just deploy a virtual device driver device-virtual-go."}),"\n",(0,t.jsx)(n.p,{children:"It simulates different kinds of devices to generate device data, and users can send commands to get responses from or conduct control instructions to the devices."}),"\n",(0,t.jsx)(n.p,{children:"First, we need to ensure that edgex-device-virtual is existing in the configmap of the PlatformAdmin framework:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# Get the contents of the configmap using kubectl edit\nkubectl get cm platformadmin-framework -o yaml\n\napiVersion: v1\ndata:\n  framework: |\n    components:\n    - deployment:\n        selector:\n          matchLabels:\n            app: edgex-device-virtual\n        strategy: {}\n        template:\n          metadata:\n            creationTimestamp: null\n            labels:\n              app: edgex-device-virtual\n          spec:\n            containers:\n            - env:\n              - name: SERVICE_HOST\n                value: edgex-device-virtual\n              envFrom:\n              - configMapRef:\n                  name: common-variables\n              image: openyurt/device-virtual:3.0.0\n              imagePullPolicy: IfNotPresent\n              name: edgex-device-virtual\n              ports:\n              - containerPort: 59900\n                name: tcp-59900\n                protocol: TCP\n              resources: {}\n            hostname: edgex-device-virtual\n      name: edgex-device-virtual\n      service:\n        ports:\n        - name: tcp-59900\n          port: 59900\n          protocol: TCP\n          targetPort: 59900\n        selector:\n          app: edgex-device-virtual\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"The device-virtual-go component automatically creates and registers the deviceservice, the 5 different types of devices and their deviceprofiles at startup, and the yurt-iot-dock component synchronizes them all to OpenYurt. So you can check it with kubectl:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"$ kubectl get deviceservice\nNAME                      NODEPOOL   SYNCED   AGE\nhangzhou-device-virtual   hangzhou   true     2d1h\n\n$ kubectl get device\nNAME                                     NODEPOOL   SYNCED   AGE\nhangzhou-random-binary-device            hangzhou   true     2d1h\nhangzhou-random-boolean-device           hangzhou   true     2d1h\nhangzhou-random-float-device             hangzhou   true     2d1h\nhangzhou-random-integer-device           hangzhou   true     2d1h\nhangzhou-random-unsignedinteger-device   hangzhou   true     2d1h\n\n$ kubectl get deviceprofile\nNAME                                     NODEPOOL   SYNCED   AGE\nhangzhou-random-binary-device            hangzhou   true     2d1h\nhangzhou-random-boolean-device           hangzhou   true     2d1h\nhangzhou-random-float-device             hangzhou   true     2d1h\nhangzhou-random-integer-device           hangzhou   true     2d1h\nhangzhou-random-unsignedinteger-device   hangzhou   true     2d1h\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-create-device-deviceprofile",children:"2. Create Device, DeviceProfile"}),"\n",(0,t.jsx)(n.p,{children:"In addition to synchronizing devices, device profiles, and device services in edgex by means of preconfigured configurations, the Openyurt side also provides a more general way to create devices and deviceprofiles."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a DeviceProfile"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: iot.openyurt.io/v1alpha1\nkind: DeviceProfile\nmetadata:\n  name: openyurt-created-random-boolean-deviceprofile\nspec:\n  description: Example of Device-Virtual Created By OpenYurt\n  deviceCommands:\n  - isHidden: false\n    name: WriteBoolValue\n    readWrite: W\n    resourceOperations:\n    - defaultValue: ""\n      deviceResource: Bool\n    - defaultValue: "false"\n      deviceResource: EnableRandomization_Bool\n  - isHidden: false\n    name: WriteBoolArrayValue\n    readWrite: W\n    resourceOperations:\n    - defaultValue: ""\n      deviceResource: BoolArray\n    - defaultValue: "false"\n      deviceResource: EnableRandomization_BoolArray\n  deviceResources:\n  - description: used to decide whether to re-generate a random value\n    isHidden: true\n    name: EnableRandomization_Bool\n    properties:\n      defaultValue: "true"\n      readWrite: W\n      valueType: Bool\n  - description: Generate random boolean value\n    isHidden: false\n    name: Bool\n    properties:\n      defaultValue: "true"\n      readWrite: RW\n      valueType: Bool\n  - description: used to decide whether to re-generate a random value\n    isHidden: true\n    name: EnableRandomization_BoolArray\n    properties:\n      defaultValue: "true"\n      readWrite: W\n      valueType: Bool\n  - description: Generate random boolean array value\n    isHidden: false\n    name: BoolArray\n    properties:\n      defaultValue: \'[true]\'\n      readWrite: RW\n      valueType: BoolArray\n  labels:\n  - openyurt-created-device-virtual-example\n  manufacturer: OpenYurt Community\n  model: OpenYurt-Device-Virtual-01\n  nodePool: hangzhou\n'})}),"\n",(0,t.jsx)(n.p,{children:"This DeviceProfile is just a copy of random-boolean DeviceProfile created by device-virtual-go for demo purpose."}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create a Device"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Create a virtual device using the pre-synchronized DeviceService and the DeviceProfile created above:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: iot.openyurt.io/v1alpha1\nkind: Device\nmetadata:\n  name: openyurt-created-random-boolean-device\nspec:\n  adminState: UNLOCKED\n  description: Example of Device Virtual\n  labels:\n  - openyurt-created-device-virtual-example\n  managed: true\n  nodePool: hangzhou\n  notify: true\n  operatingState: UP\n  profileName: openyurt-created-random-boolean-deviceprofile\n  protocols:\n    other:\n      Address: openyurt-created-device-virtual-bool-01\n      Port: "300"\n  serviceName: device-virtual\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then, we can see the resource objects in OpenYurt through kubectl as below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deviceprofile openyurt-created-random-boolean-deviceprofile\nNAME                                            NODEPOOL   SYNCED   AGE\nopenyurt-created-random-boolean-deviceprofile   hangzhou   true     15h\n\n$ kubectl get device openyurt-created-random-boolean-device\nNAME                                     NODEPOOL   SYNCED   AGE\nopenyurt-created-random-boolean-device   hangzhou   true     14h\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4-retrieve-device-generated-data",children:"4. Retrieve device generated data"}),"\n",(0,t.jsx)(n.p,{children:"We have already set up the environment and simulated a virtual bool device."}),"\n",(0,t.jsx)(n.p,{children:"In OpenYurt, we can easily get the latest data generated by devices just by checking the status sub-resource of Device resource object like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ kubectl get device openyurt-created-random-boolean-device -o yaml\napiVersion: iot.openyurt.io/v1alpha1\nkind: Device\nmetadata:\n  annotations:\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"iot.openyurt.io/v1alpha1","kind":"Device","metadata":{"annotations":{},"name":"openyurt-boolean-device","namespace":"default"},"spec":{"adminState":"UNLOCKED","description":"Example of Device Virtual","labels":["openyurt-device-boolean-virtual"],"managed":true,"nodePool":"hangzhou","notify":true,"operatingState":"UP","profileName":"Random-Boolean-Device","protocols":{"other":{"Address":"openyurt-device-boolean-virtual-01","Port":"301"}},"serviceName":"openyurt-boolean-device"}}\n  creationTimestamp: "2023-09-14T06:25:10Z"\n  finalizers:\n  - iot.openyurt.io/device\n  generation: 2\n  name: openyurt-boolean-device\n  namespace: default\n  resourceVersion: "1717015"\n  uid: 6677eb4a-b644-4d5d-970a-1446f141a353\nspec:\n  adminState: UNLOCKED\n  description: Example of Device Virtual\n  deviceProperties:\n    Bool:\n      desiredValue: "true"\n      name: Bool\n  labels:\n  - openyurt-created-device-virtual-example\n  managed: false\n  nodePool: hangzhou\n  notify: true\n  operatingState: UP\n  profileName: openyurt-created-random-boolean-deviceprofile\n  protocols:\n    other:\n      Address: openyurt-created-device-virtual-bool-01\n      Port: "300"\n  serviceName: device-virtual\nstatus:\n  adminState: UNLOCKED\n  deviceProperties:\n    Bool:\n      actualValue: "true"\n      getURL: http://edgex-core-command:59882/api/v3/device/name/openyurt-boolean-device/Bool\n      name: Bool\n    BoolArray:\n      actualValue: \'[true, true, true, false, false]\'\n      getURL: http://edgex-core-command:59882/api/v3/device/name/openyurt-boolean-device/BoolArray\n      name: BoolArray\n  edgeId: 5e63effd-deeb-4505-890e-17ec32f02511\n  operatingState: UP\n  synced: true\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"The deviceProperties shows all the properties of this device."}),"\n",(0,t.jsxs)(n.p,{children:["For example, the Bool property has the latest value false and the value is retrieved from the EdgeX rest api ",(0,t.jsx)(n.a,{href:"http://edgex-core-command:59882/api/v2/device/name/openyurt-created-random-boolean-device/Bool",children:"http://edgex-core-command:59882/api/v2/device/name/openyurt-created-random-boolean-device/Bool"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"5-update-the-properties-of-device",children:"5. Update the properties of device"}),"\n",(0,t.jsx)(n.p,{children:"If you want to control the device by updating its writable attributes, you should first set the Device.Spec.Managed field to true to indicate that yurt-iot-dock takes over the device, otherwise all update operations will be ignored."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Set the managed field of device to true"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl patch device openyurt-created-random-boolean-device -p \'{"spec":{"managed":true}}\'  --type=merge\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Change the adminState of device"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The administrative state (aka admin state) provides control of the device service by man or other systems. It can be set to LOCKED or UNLOCKED. When a device service is set to locked, it is not supposed to respond to any command requests nor send data from the devices."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl patch device openyurt-created-random-boolean-device -p \'{"spec":{"adminState":"UNLOCKED"}}\'  --type=merge\n'})}),"\n",(0,t.jsx)(n.p,{children:"Set the DeviceProperties to control/update device"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'kubectl patch device openyurt-created-random-boolean-device --type=merge -p \'{"spec":{"managed":true,"deviceProperties":{"Bool": {"name":"Bool", "desiredValue":"false"}}}}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"In the command, we set the Bool DeviceProperty value to false, yurt-iot-dock will trigger a EdgeX command and change the property of the device. We can check this by watch the status of device for multiple times, you will find the value is always false unless you change this property to true again."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"watch \"kubectl get device openyurt-created-random-boolean-device -o json | jq '.status.deviceProperties.Bool.actualValue'\"\n\n# output\nEvery 2.0s: kubectl get device openyurt-boolean-device -o json | jq '.status.deviceProperties.Bool.actualValue'                                VM-16-6-ubuntu: Sat Sep 16 16:39:58 2023\n\n\"false\"\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},11151:(e,n,o)=>{o.d(n,{a:()=>i});var t=o(67294);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);