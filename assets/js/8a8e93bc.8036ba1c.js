"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[5845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=d(r),p=a,m=f["".concat(s,".").concat(p)]||f[p]||c[p]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"reference/yurtadm/yurtadm_renew",id:"reference/yurtadm/yurtadm_renew",title:"yurtadm_renew",description:"yurtadm renew",source:"@site/docs/reference/yurtadm/yurtadm_renew.md",sourceDirName:"reference/yurtadm",slug:"/reference/yurtadm/yurtadm_renew",permalink:"/docs/next/reference/yurtadm/yurtadm_renew",draft:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/reference/yurtadm/yurtadm_renew.md",tags:[],version:"current",lastUpdatedBy:"Liang Deng",lastUpdatedAt:1686203432,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{},sidebar:"docs",previous:{title:"yurtadm_renew_certificate",permalink:"/docs/next/reference/yurtadm/yurtadm_renew_certificate"},next:{title:"yurtadm_reset",permalink:"/docs/next/reference/yurtadm/yurtadm_reset"}},s={},d=[{value:"yurtadm renew",id:"yurtadm-renew",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 8-Jun-2023",id:"auto-generated-by-spf13cobra-on-8-jun-2023",level:6}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"yurtadm-renew"},"yurtadm renew"),(0,a.kt)("p",null,"Renew something like certificate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yurtadm renew [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for renew\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --add_dir_header                   If true, adds the file directory to the header of the log messages\n      --alsologtostderr                  log to standard error as well as files\n      --kubeconfig string                The path to the kubeconfig file\n      --log_backtrace_at traceLocation   when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                   If non-empty, write log files in this directory\n      --log_file string                  If non-empty, use this log file\n      --log_file_max_size uint           Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                      log to standard error instead of files (default true)\n      --one_output                       If true, only write logs to their native severity level (vs also writing to each lower severity level)\n      --skip_headers                     If true, avoid header prefixes in the log messages\n      --skip_log_headers                 If true, avoid headers when opening log files\n      --stderrthreshold severity         logs at or above this threshold go to stderr (default 2)\n  -v, --v Level                          number for the log level verbosity\n      --vmodule moduleSpec               comma-separated list of pattern=N settings for file-filtered logging\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/reference/yurtadm/"},"yurtadm"),"\t - yurtadm administers the yurt cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/reference/yurtadm/yurtadm_renew_certificate"},"yurtadm renew certificate"),"\t - Create bootstrap file for yurthub to update certificate")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-8-jun-2023"},"Auto generated by spf13/cobra on 8-Jun-2023"))}c.isMDXComponent=!0}}]);