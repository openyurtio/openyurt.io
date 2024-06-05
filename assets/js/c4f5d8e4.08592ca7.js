/*! For license information please see c4f5d8e4.08592ca7.js.LICENSE.txt */
"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[64195],{5532:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var r=o(67294),n=o(4999),a=o(95999),i=o(52263),c=o(44996),l=o(85893);const s=[{title:(0,l.jsx)(a.Z,{children:"Powerful edge autonomy capability"}),imgUrl:"img/edge-autonomy.png",description:(0,l.jsx)("p",{children:(0,l.jsx)(a.Z,{children:"In edge computing scenario, the network connections between edge and cloud are diversified (e.g. 5G, WIFI, etc.). Network jitter or node offline will lead to node heartbeat cannot be reported to the cloud in real time, which triggers the eviction and reconstruction of edge services. At the same time, in the abnormal state of cloud-edge network connection, edge services on the nodes will not be automatically restored when the edge nodes restart due to the inability to obtain workload data from the cloud, which leads to service interruption of the edge services. OpenYurt provides strong autonomy capability for edge services by enhancing the workload eviction control capability in the cloud and introducing local caching and heartbeat proxy reporting mechanisms at the edge to ensure the continuous and reliable operation of edge services. At the same time, when the edge node network is restored, the state of the edge service will be synchronized with the cloud control and ensure the data consistency."})})},{title:(0,l.jsx)(a.Z,{children:"Cross-region network communication capability"}),imgUrl:"img/edge-architecture.png",description:(0,l.jsx)("p",{children:(0,l.jsx)(a.Z,{children:"In the cloud edge scenario, the cloud to edge / edge to edge are in different physical network planes. Generally only the cloud side exposes public network service addresses, and the native CNI container network can only address data-plane communication in a single region (layer 2 or layer 3 connectivity scenario). The cloud to edge / edge to edge network communication capability built by raven not only elegantly solves the data-plane communication needs across geographies, but also maintains seamless compatibility with the native CNI container network solution. At the same time, the cloud-edge traffic reuse capability provided by pool-coordinator significantly reduces the amount of control plane communication data between cloud-edges."})}),reverse:!0},{title:(0,l.jsx)(a.Z,{children:"Multi-region resource and application management"}),imgUrl:"img/edge-applications.png",description:(0,l.jsx)("p",{children:(0,l.jsx)(a.Z,{children:"For edge scenarios, OpenYurt pioneers the concept of Unitization, which can close the loop of resources, applications, and service traffic in the unit. At the resource level, the ability of node pools is abstracted, and edge site resources can be classified and divided according to geographical distribution. At the application management level, a set of application deployment models, such as unitized   deployment(UnitedDeployment), united DaemonSet(YurtAppDaemon), and edge ingress(YurtIngress) models, are designed. At the traffic service level, traffic can be accessed in a closed loop within the node pool. At the application upgrading level, OTA and Auto upgrading strategies are designed which allow edge application owners to intervene in upgrade decisions addressings the issue that NodeNotReady may cause the native rolling upgrade model to block."})})},{title:(0,l.jsx)(a.Z,{children:"Cloud-native device management capability"}),imgUrl:"img/edge-storage.png",description:(0,l.jsx)("p",{children:(0,l.jsx)(a.Z,{children:"OpenYurt abstracts and defines a cloud native model of leaf devices in edge computing scenario from the following perspectives: basic properties, main capabilities and what information can be transmitted. In addition, with good compatibility, OpenYurt seamlessly integrates mainstream IoT device management solutions. Finally, through cloud native declarative API, OpenYurt provides developers the ability of data collection, processing and control over edge devices."})}),reverse:!0}],d=()=>(0,l.jsx)("div",{className:"hero",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("section",{className:"features",children:(0,l.jsx)("div",{className:"container",children:s.map(((e,t)=>{let{imgUrl:o,title:r,description:n,reverse:a}=e;return(0,l.jsxs)("div",{className:"row feature",children:[(0,l.jsx)("div",{className:"col col--3",children:(0,l.jsx)("div",{className:"text--center",children:o&&(0,l.jsx)("img",{className:"featureImage",src:o,alt:r})})}),(0,l.jsx)("div",{className:"col col--9 featureDesc",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:r}),(0,l.jsx)("div",{children:n})]})})]},t)}))})})})}),h=()=>(0,l.jsx)("div",{className:"hero",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col col--6",children:[(0,l.jsx)("h1",{children:(0,l.jsx)(a.Z,{children:"What is OpenYurt?"})}),(0,l.jsx)("p",{className:"hero__subtitle",children:(0,l.jsxs)("small",{children:[(0,l.jsx)(a.Z,{children:"OpenYurt is the intelligent edge computing platform which aims to extend the Cloud Native ecosystem to edge computing and IoT scenarios. By making non-intrusive enhancements, it empowers customer to manage large scale edge computing workloads in different architecture (e.g., ARM and X86)  in a native Kubernetes manner."}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)(a.Z,{children:"OpenYurt has been widely used in typical edge computing scenarios such as the IoT, distributed cloud , logistics, transportation, manufacturing, retail, CDN etc."})]})})]}),(0,l.jsx)("div",{className:"col",children:(0,l.jsx)("img",{className:"image",src:(0,c.ZP)("img/what-is-openyurt.png"),align:"right",alt:"what is OpenYurt"})})]})})});var u=o(33692);const g=e=>{let{children:t,href:o}=e;return(0,l.jsx)("div",{className:"col col--2 margin-horiz--sm",children:(0,l.jsx)(u.Z,{className:"button button--outline button--primary button--lg",to:o,children:t})})};class p extends r.PureComponent{constructor(e){super(e),this.$=r.createRef(),this._=r.createRef()}render(){return r.createElement("span",{ref:this.$},r.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(o.bind(o,9984)).then((({render:t})=>{null!=this._.current&&t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}const f=p,b=()=>(0,l.jsx)(f,{href:"https://github.com/openyurtio/openyurt","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star facebook/metro on GitHub",children:"Star"});function m(){const e=(0,i.Z)(),{siteConfig:t={}}=e;return(0,l.jsxs)(n.Z,{title:t.tagline,description:t.tagline,children:[(0,l.jsx)("header",{className:"hero",children:(0,l.jsxs)("div",{className:"container text--center",children:[(0,l.jsx)("h2",{className:"hero__title",children:t.title}),(0,l.jsx)(b,{}),(0,l.jsx)("p",{className:"hero__subtitle",children:t.tagline}),(0,l.jsxs)("div",{className:"heroButtons",children:[(0,l.jsx)(g,{href:(0,c.ZP)("docs/installation/summary"),children:(0,l.jsx)(a.Z,{children:"Get Started"})}),(0,l.jsx)(g,{href:(0,c.ZP)("docs/"),children:(0,l.jsx)(a.Z,{children:"Learn More"})})]})]})}),(0,l.jsx)(h,{}),(0,l.jsx)(d,{}),(0,l.jsx)("div",{className:"hero",children:(0,l.jsxs)("div",{className:"container text--center",children:[(0,l.jsxs)("h3",{className:"hero__subtitle",children:[(0,l.jsx)(a.Z,{children:"OpenYurt is a"})," ",(0,l.jsx)("a",{href:"https://cncf.io/",children:"Cloud Native Computing Foundation"})," ",(0,l.jsx)(a.Z,{children:"sandbox project"})]}),(0,l.jsx)("div",{className:"cncf-logo"})]})})]})}},9984:(e,t,o)=>{o.r(t),o.d(t,{render:()=>F});var r=window.document,n=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,c=function(e,t){for(var o=0,r=e.length;o<r;o++)t(e[o])},l=function(e){return function(t,o,r){var n=e.createElement(t);if(null!=o)for(var a in o){var i=o[a];null!=i&&(null!=n[a]?n[a]=i:n.setAttribute(a,i))}return null!=r&&c(r,(function(t){n.appendChild("string"==typeof t?e.createTextNode(t):t)})),n}},s=l(r),d=function(e,t){return{}.hasOwnProperty.call(e,t)},h=function(e){return(""+e).toLowerCase()},u="github.com",g="https://api."+u,p=i&&"prototype"in i&&"withCredentials"in i.prototype,f=p&&a&&"attachShadow"in a.prototype&&!("prototype"in a.prototype.attachShadow),b=function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)},m=function(e,t,o){e.removeEventListener?e.removeEventListener(t,o,!1):e.detachEvent("on"+t,o)},v={light:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e9ebef;background-position:0 -0.5em;border-color:#cbcdd1;border-color:rgba(31,35,40,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(31,35,40,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#dddedf;border-color:rgba(31,35,40,.15)}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",light_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:hover,.social-count:focus{color:#0349b4}.octicon-heart{color:#971368}",dark:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #2f81f7;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:hover,.social-count:focus{color:#2f81f7}.octicon-heart{color:#db61a2}",dark_dimmed:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #539bf5;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:hover,.social-count:focus{color:#539bf5}.octicon-heart{color:#c96198}",dark_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #71b7ff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#71b7ff}.octicon-heart{color:#ef6eb1}"},w=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+v[d(v,t)?t:e]+"}"},x=function(e){if(null==e)return v.light;if(d(v,e))return v[e];var t=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.decodeURIComponent);var n={};return c(e.split(t),(function(e){if(""!==e){var t=e.split(o);n[r(t[0])]=null!=t[1]?r(t.slice(1).join(o)):void 0}})),n}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return v[d(v,t["no-preference"])?t["no-preference"]:"light"]+w("light",t.light)+w("dark",t.dark)},y={"comment-discussion":{heights:{16:{width:16,path:'<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>'}}},download:{heights:{16:{width:16,path:'<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>'}}},eye:{heights:{16:{width:16,path:'<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>'}}},heart:{heights:{16:{width:16,path:'<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>'}}},package:{heights:{16:{width:16,path:'<path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>'}}},play:{heights:{16:{width:16,path:'<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"></path>'}}},star:{heights:{16:{width:16,path:'<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>'}}}},k=function(e,t){e=h(e).replace(/^octicon-/,""),d(y,e)||(e="mark-github");var o=t>=24&&24 in y[e].heights?24:16,r=y[e].heights[o];return'<svg viewBox="0 0 '+r.width+" "+o+'" width="'+t*r.width/o+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+r.path+"</svg>"},j={},C=function(e,t){var o=j[e]||(j[e]=[]);if(!(o.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete j[e];t=o.shift();)t.apply(null,arguments)}));if(p){var n=new i;b(n,"abort",r),b(n,"error",r),b(n,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void r(t)}r(200!==this.status,e)})),n.open("GET",e),n.send()}else{var a=this||window;a._=function(e){a._=null,r(200!==e.meta.status,e.data)};var c=l(a.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};b(c,"load",s),b(c,"error",s),function(e,t,o){if(null!=e.readyState){var r="readystatechange",n=function(){if(t.test(e.readyState))return m(e,r,n),o.apply(this,arguments)};b(e,r,n)}}(c,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(c)}}},Z=function(e,t,o){var r=l(e.ownerDocument),n=e.appendChild(r("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+x(t["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=a:n.appendChild(e.ownerDocument.createTextNode(a));var i="large"===h(t["data-size"]),c=r("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:k(t["data-icon"],i?16:14)+"&nbsp;"},[r("span",{},[t["data-text"]||""])]),s=e.appendChild(r("div",{className:"widget"+(i?" widget-lg":"")},[c])),d=c.hostname.replace(/\.$/,"");if(("."+d).substring(d.length-10)!=="."+u)return c.removeAttribute("href"),void o(s);var p=(" /"+c.pathname).split(/\/+/);if(((d===u||d==="gist."+u)&&"archive"===p[3]||d===u&&"releases"===p[3]&&("download"===p[4]||"latest"===p[4]&&"download"===p[5])||d==="codeload."+u)&&(c.target="_top"),"true"===h(t["data-show-count"])&&d===u&&"marketplace"!==p[1]&&"sponsors"!==p[1]&&"orgs"!==p[1]&&"users"!==p[1]&&"-"!==p[1]){var f,b;if(!p[2]&&p[1])b="followers",f="?tab=followers";else if(!p[3]&&p[2])b="stargazers_count",f="/stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void o(s);b="open_issues_count",f="/issues"}else b="forks_count",f="/forks";else b="subscribers_count",f="/watchers";var m=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];C.call(this,g+m,(function(e,t){if(!e){var n=t[b];s.appendChild(r("a",{className:"social-count",href:t.html_url+f,rel:"noopener",target:"_blank","aria-label":n+" "+b.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}o(s)}))}else o(s)},A=window.devicePixelRatio||1,N=function(e){return(A>1?n.ceil(n.round(e*A)/A*2)/2:n.ceil(e))||0},M=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},F=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return c(["icon","color-scheme","text","size","show-count"],(function(o){var r="data-"+o;t[r]=e.getAttribute(r)})),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),f){var o=s("span");Z(o.attachShadow({mode:"closed"}),e,(function(){t(o)}))}else{var a=s("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});M(a,[0,0]),a.style.border="none";var i=function(){var o,c=a.contentWindow;try{o=c.document.body}catch(l){return void r.body.appendChild(a.parentNode.removeChild(a))}m(a,"load",i),Z.call(c,o,e,(function(o){var r=function(e){var t=e.offsetWidth,o=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=n.max(t,N(r.width)),o=n.max(o,N(r.height))}return[t,o]}(o);a.parentNode.removeChild(a),function(e,t,o){var r=function(){return m(e,t,r),o.apply(this,arguments)};b(e,t,r)}(a,"load",(function(){M(a,r)})),a.src="https://unpkg.com/github-buttons@2.27.0/dist/buttons.html#"+(a.name=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.encodeURIComponent);var n=[];for(var a in e){var i=e[a];null!=i&&n.push(r(a)+o+r(i))}return n.join(t)}(e)),t(a)}))};b(a,"load",i),r.body.appendChild(a)}}}}]);