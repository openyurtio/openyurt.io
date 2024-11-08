"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[4471],{92530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"core-concepts/yurt-device-controller","title":"YurtDeviceController","description":"Background","source":"@site/versioned_docs/version-v1.2/core-concepts/yurt-device-controller.md","sourceDirName":"core-concepts","slug":"/core-concepts/yurt-device-controller","permalink":"/docs/v1.2/core-concepts/yurt-device-controller","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/core-concepts/yurt-device-controller.md","tags":[],"version":"v1.2","lastUpdatedBy":"Ihor Sychevskyi","lastUpdatedAt":1731105403000,"frontMatter":{"title":"YurtDeviceController"},"sidebar":"docs","previous":{"title":"NodeResourceManager","permalink":"/docs/v1.2/core-concepts/node-resource-manager"},"next":{"title":"selfhealing from restarting during network disconnection","permalink":"/docs/v1.2/user-manuals/autonomy/selfhealing-during-network-disconnection"}}');var i=t(74848),o=t(28453);const c={title:"YurtDeviceController"},d=void 0,s={},a=[{value:"Background",id:"background",level:2},{value:"Abstraction",id:"abstraction",level:2},{value:"device management related CRDs",id:"device-management-related-crds",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Version",id:"version",level:3},{value:"EdgeX Foundry",id:"edgex-foundry",level:2},{value:"yurt-edgex-manager",id:"yurt-edgex-manager",level:3},{value:"Version",id:"version-1",level:3},{value:"References",id:"references",level:2}];function l(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(n.p,{children:'OpenYurt has been designed to meet various DevOps requirements against typical edge infrastructures. It provides the same user experience for managing the edge applications as if they were running in the cloud infrastructure.\nHowever, when the related management capability is extended to the edge "device" layer, the following problems may occur:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In order to support various edge devices, the existing framework must develop special adapters for each category of devices;"}),"\n",(0,i.jsx)(n.li,{children:"When adapting Kubernetes to the edge computing environments, existing solutions either change the system architecture or modify core components (such as kubelet) significantly."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'At the same time, we saw a lot of great edge device management platforms emerging in the community\uff0csuch as EdgeX Foundry. inspiring by the Unix philosophy, "Do one thing and do it well",\nwe believe that Kubernetes should focus on managing computing resources while edge devices management can be done by adopting existing edge computing platforms.'}),"\n",(0,i.jsx)(n.p,{children:"A overall architecture about cloud-edge-device depicted below"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:t(22371).A+"",width:"1412",height:"1402"})}),"\n",(0,i.jsx)(n.p,{children:"The communication range of edge devices is usually limited to a certain network area. Therefore, edge nodes in the same network area can be divided into a nodepool. So a device management platform and a yurt-device-controller\ncan be deployed in each nodepool.\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When communicating with kube-apiserver on the cloud, Yurt-Device-Controller only watches the device objects in its nodepool and synchronizes the updated specs to the corresponding devices through the corresponding device management platform."}),"\n",(0,i.jsx)(n.li,{children:"When communicating with the device management platform\uff0cYurtHub, NodePool, and UnitedDeployment capabilities are reused. The device information in the node pool is abstracted into device, deviceService, and deviceProfile objects and synchronized to the cloud."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"abstraction",children:"Abstraction"}),"\n",(0,i.jsx)(n.h3,{id:"device-management-related-crds",children:"device management related CRDs"}),"\n",(0,i.jsx)(n.p,{children:"To manage devices in the real world, we should make some abstractions\uff0cBeing a component connecting cloud and edge management platform, Yurt-device-controller proposed 3 CRDs: DeviceProfile\u3001DeviceService and Device\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DeviceProfile"}),"\uff1adefines a type of devices using same kind of protocol, which includes some generic information like the manufacturer's name, the device description, and the device model. DeviceProfile also defines what kind of resources (e.g., temperature, humidity) this type of device provided and how to read/write these resources."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DeviceService"}),"\uff1adefines the way of how to connect a device to the OpenYurt, like the URL of the device. The DeviceService can not exist alone. Every DeviceService must associate with a DeviceProfile."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Device"}),'\uff1ais used to refer to a sensor, actuator, or IoT "thing", it gives the detailed definition of a specific device, like which DeviceProfile it belongs to and which DeviceService it used to connect to the system.']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.p,{children:"The major Yurt-Device-Controller components consist of:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Device controller"}),": It can abstract device objects in the edge platform into device CRs and synchronize them to the cloud. With the support of device controller, users can influence the actual device on the edge platform through the operation of cloud device CR, such as creating a device, deleting a device, updating device attributes (such as setting the light on and off, etc.)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DeviceService controller"}),": It can abstract deviceService objects in the edge platform into deviceService CRs and synchronize them to the cloud. With the support of deviceService Controller, users can view deviceService information of edge platforms in the cloud, and create or delete deviceService CRs to affect the actual deviceService of edge platforms."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DeviceProfile controller"}),": It can abstract deviceProfile objects in the edge platform into deviceProfile CRs and synchronize them to the cloud. With the support of deviceProfile Controller, users can view deviceProfile information of edge platforms in the cloud, and create or delete deviceProfile CRs to affect the actual deviceService of edge platforms."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"version",children:"Version"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Version"}),(0,i.jsx)(n.th,{children:"Image"}),(0,i.jsx)(n.th,{children:"Release Date"}),(0,i.jsx)(n.th,{children:"Changes"}),(0,i.jsx)(n.th,{children:"Remark"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"v0.1.0"}),(0,i.jsxs)(n.td,{children:["openyurt/yurt-device-controller",":v0",".1.0"]}),(0,i.jsx)(n.td,{children:"2021.09"}),(0,i.jsx)(n.td,{children:"First Release"}),(0,i.jsx)(n.td,{children:"-"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"v0.2.0"}),(0,i.jsxs)(n.td,{children:["openyurt/yurt-device-controller",":v0",".1.0"]}),(0,i.jsx)(n.td,{children:"2022.05"}),(0,i.jsx)(n.td,{children:"Support EdgeX LTS Version"}),(0,i.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"edgex-foundry",children:"EdgeX Foundry"}),"\n",(0,i.jsx)(n.p,{children:"EdgeX Foundry is a vendor-neutral open source project hosted by The Linux Foundation building a common open framework for IoT edge computing. It's a framework hosted within a full hardware and OS-agnostic\nreference software platform to enable an ecosystem of plug-and-play components that unifies the marketplace and accelerates the deployment of IoT solutions\u3002In collaboration with the EdgeX Foundry community\uff0c\nOpenYurt integrated EdgeX since 0.5.0. In addition to yurt-device-controller, A yurt-edgex-manager component is also provided to simplify the deployment of the EdgeX Foundry in edge scenarios."}),"\n",(0,i.jsx)(n.p,{children:"Integration Architecture\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:t(58634).A+"",width:"1412",height:"1424"})}),"\n",(0,i.jsx)(n.h3,{id:"yurt-edgex-manager",children:"yurt-edgex-manager"}),"\n",(0,i.jsxs)(n.p,{children:["OpenYurt introduces a yurt-edgex-manager controller to manage the EdgeX Foundry instances. You can manipulate EdgeX CR to manage EdgeX deployment, update, delete.You just need to create a CR of EdgeX,\nthen yurt-edgex-manager will automatically deploy EdgeX according to the spec defined. You can also deploy multiple EdgeX in a cluster based on the number of Nodepool.\nThe version of each EdgeX and the included EdgeX service can be configured.\n",(0,i.jsx)(n.img,{alt:"img",src:t(45146).A+"",width:"1280",height:"720"})]}),"\n",(0,i.jsx)(n.p,{children:"In OpenYurt Cluster, EdgeX uses Kubernetes Service to provide access."}),"\n",(0,i.jsx)(n.h3,{id:"version-1",children:"Version"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Version"}),(0,i.jsx)(n.th,{children:"Image"}),(0,i.jsx)(n.th,{children:"Release Date"}),(0,i.jsx)(n.th,{children:"Changes"}),(0,i.jsx)(n.th,{children:"Remark"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"v0.1.0"}),(0,i.jsx)(n.td,{children:"openyurt/yurt-edgex-manager:0.1.0"}),(0,i.jsx)(n.td,{children:"2021.09"}),(0,i.jsx)(n.td,{children:"First Release"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"v0.2.0"}),(0,i.jsx)(n.td,{children:"openyurt/yurt-edgex-manager:0.2.0"}),(0,i.jsx)(n.td,{children:"2022.05"}),(0,i.jsx)(n.td,{children:"Support EdgeX LTS Version"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-edgex-manager",children:"Yurt-edgex-manager"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/openyurtio/yurt-device-controller",children:"Yurt-device-controller"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://openyurt.io/",children:"OpenYurt"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.edgexfoundry.org/",children:"EdgeX Foundry"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},22371:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cloud-edge-device-d7d6d132d9b49582462927972b8c094c.png"},58634:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/openyurt-edgex-integration-015fb09468c64253b81ebbf9531a1d86.png"},45146:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/yurt-edgex-manager-e0652972f3802d01698453c4d73880fe.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(96540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);