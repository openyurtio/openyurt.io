"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[60011],{11465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=n(85893),i=n(11151);const l={title:"\u5982\u4f55\u5728YurtHub\u4e2d\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668"},s=void 0,c={id:"developer-manuals/how-to-write-a-filter",title:"\u5982\u4f55\u5728YurtHub\u4e2d\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668",description:"\u5982\u679c\u9700\u8981\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668\uff0c\u60a8\u9700\u8981\u7406\u89e3 OpenYurt \u7684\u4ee3\u7801\u5e93\uff0c\u5e76\u53ef\u80fd\u9700\u8981\u5411\u5176\u8d21\u732e\u4ee3\u7801\u3002\u4ee5\u4e0b\u662f\u60a8\u901a\u5e38\u9700\u8981\u9075\u5faa\u7684\u6b65\u9aa4\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer-manuals/how-to-write-a-filter.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/how-to-write-a-filter",permalink:"/zh/docs/next/developer-manuals/how-to-write-a-filter",draft:!1,unlisted:!1,editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/developer-manuals/how-to-write-a-filter.md",tags:[],version:"current",lastUpdatedBy:"Ihor Sychevskyi",lastUpdatedAt:171831465e4,frontMatter:{title:"\u5982\u4f55\u5728YurtHub\u4e2d\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668"},sidebar:"docs",previous:{title:"\u5982\u4f55\u53c2\u4e0e\u8d21\u732e",permalink:"/zh/docs/next/developer-manuals/how-to-contribute"},next:{title:"API Reference",permalink:"/zh/docs/next/reference/api_reference"}},u={},o=[{value:"1. \u8bbe\u7f6e OpenYurt \u5f00\u53d1\u73af\u5883",id:"1-\u8bbe\u7f6e-openyurt-\u5f00\u53d1\u73af\u5883",level:2},{value:"2. \u7406\u89e3\u8fc7\u6ee4\u5668\u7684ObjectFilter\u63a5\u53e3",id:"2-\u7406\u89e3\u8fc7\u6ee4\u5668\u7684objectfilter\u63a5\u53e3",level:2},{value:"3. \u7f16\u5199\u60a8\u7684\u8fc7\u6ee4\u5668",id:"3-\u7f16\u5199\u60a8\u7684\u8fc7\u6ee4\u5668",level:2},{value:"4. \u914d\u7f6e\u60a8\u7684\u8fc7\u6ee4\u5668",id:"4-\u914d\u7f6e\u60a8\u7684\u8fc7\u6ee4\u5668",level:2},{value:"5. \u6784\u5efa\u548c\u6d4b\u8bd5\u60a8\u7684\u66f4\u6539",id:"5-\u6784\u5efa\u548c\u6d4b\u8bd5\u60a8\u7684\u66f4\u6539",level:2},{value:"6. \u5728\u6b63\u5728\u8fd0\u884c\u7684\u8282\u70b9\u4e2d\u542f\u7528\u60a8\u7684\u8fc7\u6ee4\u5668",id:"6-\u5728\u6b63\u5728\u8fd0\u884c\u7684\u8282\u70b9\u4e2d\u542f\u7528\u60a8\u7684\u8fc7\u6ee4\u5668",level:2},{value:"7. \u8d21\u732e\u5230 OpenYurt\uff08\u53ef\u9009\uff09",id:"7-\u8d21\u732e\u5230-openyurt\u53ef\u9009",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\u5982\u679c\u9700\u8981\u65b0\u589e\u4e00\u4e2a\u8fc7\u6ee4\u5668\uff0c\u60a8\u9700\u8981\u7406\u89e3 OpenYurt \u7684\u4ee3\u7801\u5e93\uff0c\u5e76\u53ef\u80fd\u9700\u8981\u5411\u5176\u8d21\u732e\u4ee3\u7801\u3002\u4ee5\u4e0b\u662f\u60a8\u901a\u5e38\u9700\u8981\u9075\u5faa\u7684\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsx)(t.h2,{id:"1-\u8bbe\u7f6e-openyurt-\u5f00\u53d1\u73af\u5883",children:"1. \u8bbe\u7f6e OpenYurt \u5f00\u53d1\u73af\u5883"}),"\n",(0,r.jsx)(t.p,{children:"\u9996\u5148\uff0c\u8bbe\u7f6e\u60a8\u7684\u5f00\u53d1\u73af\u5883\u4ee5\u4fbf\u5728 OpenYurt \u4e0a\u5de5\u4f5c\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u5728 GitHub \u4e0a Fork ",(0,r.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt",children:"OpenYurt \u4ed3\u5e93"}),"\u3002"]}),"\n",(0,r.jsx)(t.li,{children:"\u514b\u9686\u60a8\u7684 Fork \u5230\u672c\u5730\u73af\u5883\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u5b89\u88c5 Go\uff08\u7531 OpenYurt \u6307\u5b9a\u7684\u7248\u672c\uff09\u5e76\u8bbe\u7f6e\u60a8\u7684 GOPATH\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"2-\u7406\u89e3\u8fc7\u6ee4\u5668\u7684objectfilter\u63a5\u53e3",children:"2. \u7406\u89e3\u8fc7\u6ee4\u5668\u7684ObjectFilter\u63a5\u53e3"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u7f16\u5199\u60a8\u7684\u8fc7\u6ee4\u5668\u4e4b\u524d\uff0c\u60a8\u5e94\u8be5\u4e86\u89e3\u73b0\u6709\u7684ObjectFilter\u63a5\u53e3\u3002\u8fd9\u4e9b\u63a5\u53e3\u4f4d\u4e8e ",(0,r.jsx)(t.a,{href:"https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/filter/interfaces.go#L53",children:"https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/filter/interfaces.go#L53"})," \u5177\u4f53\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"type ObjectFilter interface {\n\tName() string\n\t// SupportedResourceAndVerbs is used to specify which resource and request verb is supported by the filter.\n\t// Because each filter can make sure what requests with resource and verb can be handled.\n\tSupportedResourceAndVerbs() map[string]sets.String\n\t// Filter is used for filtering runtime object\n\t// all filter logic should be located in it.\n\tFilter(obj runtime.Object, stopCh <-chan struct{}) runtime.Object\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u60a8\u7684\u65b0\u8fc7\u6ee4\u5668\u5c06\u9700\u8981\u5b9e\u73b0\u4e0a\u8ff0\u63a5\u53e3\u7684\u4e09\u4e2a\u65b9\u6cd5\uff0c\u5176\u4e2d:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Name: \u8fd4\u56de\u8fc7\u6ee4\u5668\u7684\u540d\u79f0"}),"\n",(0,r.jsx)(t.li,{children:"SupportedResourceAndVerbs: \u7528\u4e8e\u6307\u5b9a\u8bf7\u6c42\u7684\u5173\u8054\u7684\u8d44\u6e90\u548c\u8bf7\u6c42\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Filter: \u5305\u542b\u6240\u6709\u5173\u4e8e\u7684\u8d44\u6e90\u4fee\u6539\u7684\u903b\u8f91\u5904\u7406"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"3-\u7f16\u5199\u60a8\u7684\u8fc7\u6ee4\u5668",children:"3. \u7f16\u5199\u60a8\u7684\u8fc7\u6ee4\u5668"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728 OpenYurt \u4ed3\u5e93\u4e2d\u5bfc\u822a\u5230 ",(0,r.jsx)(t.code,{children:"pkg/yurthub/filter"})," \u76ee\u5f55\u3002\u60a8\u53ef\u4ee5\u53c2\u8003\u73b0\u6709\u7684\u8fc7\u6ee4\u5668\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u901a\u8fc7\u4e3a\u60a8\u7684\u8fc7\u6ee4\u5668\u521b\u5efa\u4e00\u4e2a\u65b0\u76ee\u5f55\u5e76\u5b9e\u73b0\u6240\u9700\u7684\u63a5\u53e3\u3002\u4f8b\u5982\u5b9e\u73b0\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(t.code,{children:"myfilter"}),"\u7684\u7528\u4e8e\u5904\u7406 list/watch service\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u7684\u8fc7\u6ee4\u5668\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package myfilter\n\nimport (\n\t"k8s.io/apimachinery/pkg/runtime"\n\t"k8s.io/apimachinery/pkg/util/sets"\n\t"k8s.io/client-go/kubernetes"\n\n\t"github.com/openyurtio/openyurt/pkg/yurthub/filter"\n\t"github.com/openyurtio/openyurt/pkg/yurthub/filter/base"\n)\n\nconst (\n\tFilterName = "myfilter"\n)\n\n// Register registers a filter\nfunc Register(filters *base.Filters) {\n\tfilters.Register(FilterName, func() (filter.ObjectFilter, error) {\n\t\treturn NewMyFilter()\n\t})\n}\n\ntype myFilter struct {\n\tclient kubernetes.Interface\n}\n\nfunc NewMyFilter() (filter.ObjectFilter, error) {\n\treturn &myFilter{}, nil\n}\n\nfunc (mf *myFilter) Name() string {\n\treturn FilterName\n}\n\nfunc (mf *myFilter) SupportedResourceAndVerbs() map[string]sets.String {\n\treturn map[string]sets.String{\n\t\t"services": sets.NewString("list", "watch"),\n\t}\n}\n\nfunc (mf *myFilter) Filter(obj runtime.Object, stopCh <-chan struct{}) runtime.Object {\n\t// Your logic here\n\treturn obj\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u540c\u65f6\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0 ",(0,r.jsx)(t.code,{children:"pkg/yurthub/filter/initializer"})," \u4e2d\u7684\u65b9\u6cd5\uff0c\u6765\u5b8c\u6210\u9700\u8981\u7684\u53d8\u91cf\u6ce8\u5165\u3002\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"func (mf *myFilter) SetKubeClient(client kubernetes.Interface) error {\n    mf.client = client\n    return nil\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"4-\u914d\u7f6e\u60a8\u7684\u8fc7\u6ee4\u5668",children:"4. \u914d\u7f6e\u60a8\u7684\u8fc7\u6ee4\u5668"}),"\n",(0,r.jsxs)(t.p,{children:["\u60a8\u9700\u8981\u6ce8\u518c\u60a8\u7684\u8fc7\u6ee4\u5668\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u5728YurtHub\u8fd0\u884c\u65f6\u88ab\u542f\u52a8\u3002\u4ece\u4ed3\u5e93\u5bfc\u822a\u5230 ",(0,r.jsx)(t.code,{children:"cmd/yurthub/app/options/filter.go"})," \u6587\u4ef6\uff0c\u5b8c\u6210\u5982\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u60a8\u7684\u8fc7\u6ee4\u5668\u662f\u5426\u9700\u8981\u8fd0\u884c\u5728\u4e91\u7aef\u8282\u70b9\u4e0a\u7684YurtHub\u4e2d\u8fd0\u884c\uff0c\u5982\u679c\u4e0d\u9700\u8981\u7684\u8bdd\uff0c\u53ef\u4ee5Append\u5728\u53d8\u91cf DisabledInCloudMode \u540e\u9762\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u60a8\u7684\u8fc7\u6ee4\u5668\u9ed8\u8ba4\u9700\u8981\u5904\u7406\u54ea\u4e2a\u7ec4\u4ef6\u53d1\u8d77\u8bf7\u6c42(list/watch service\u8bf7\u6c42)\u7684\u8fd4\u56de\u6570\u636e\uff0c\u8bf7\u5728\u53d8\u91cf SupportedComponentsForFilter \u4e2d\u6307\u5b9a\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u5728\u65b9\u6cd5 RegisterAllFilters \u4e2d\u6ce8\u518c\u60a8\u7684\u8fc7\u6ee4\u5668"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"5-\u6784\u5efa\u548c\u6d4b\u8bd5\u60a8\u7684\u66f4\u6539",children:"5. \u6784\u5efa\u548c\u6d4b\u8bd5\u60a8\u7684\u66f4\u6539"}),"\n",(0,r.jsx)(t.p,{children:"\u786e\u4fdd\u60a8\u80fd\u591f\u4f7f\u7528\u60a8\u7684\u66f4\u6539\u6784\u5efa\u6574\u4e2a YurtHub \u53ef\u6267\u884c\u6587\u4ef6\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"make build WHAT=cmd/yurthub\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u540c\u65f6\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5\u4ee5\u786e\u4fdd\u60a8\u7684\u66f4\u6539\u6ca1\u6709\u7834\u574f\u73b0\u6709\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"6-\u5728\u6b63\u5728\u8fd0\u884c\u7684\u8282\u70b9\u4e2d\u542f\u7528\u60a8\u7684\u8fc7\u6ee4\u5668",children:"6. \u5728\u6b63\u5728\u8fd0\u884c\u7684\u8282\u70b9\u4e2d\u542f\u7528\u60a8\u7684\u8fc7\u6ee4\u5668"}),"\n",(0,r.jsxs)(t.p,{children:["\u73b0\u5728\uff0cYurtHub\u4e2d\u6ce8\u518c\u7684\u8fc7\u6ee4\u5668\u9ed8\u8ba4\u90fd\u662f\u542f\u52a8\u7684\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528YurtHub\u7684\u542f\u52a8\u53c2\u6570 ",(0,r.jsx)(t.code,{children:"--disabled-resource-filters"})," \u6765\u5173\u95ed\u60a8\u4e0d\u9700\u8981\u7684\u8fc7\u6ee4\u5668\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"7-\u8d21\u732e\u5230-openyurt\u53ef\u9009",children:"7. \u8d21\u732e\u5230 OpenYurt\uff08\u53ef\u9009\uff09"}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u60a8\u8ba4\u4e3a\u60a8\u7684\u8fc7\u6ee4\u5668\u5bf9\u66f4\u5e7f\u6cdb\u7684\u793e\u533a\u6709\u76ca\uff0c\u8bf7\u8003\u8651\u5c06\u5176\u8d21\u732e\u56de\u5b98\u65b9 OpenYurt \u9879\u76ee\u3002\u4e3a\u6b64\uff0c\u60a8\u9700\u8981\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u5411 OpenYurt \u4e3b\u4ed3\u5e93\u6253\u5f00\u4e00\u4e2a Pull Request (PR)\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u9075\u5faa OpenYurt \u8d21\u732e\u6307\u5357\u548c PR \u6d41\u7a0b\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u4e0e\u7ef4\u62a4\u8005\u548c\u793e\u533a\u4e92\u52a8\uff0c\u4ee5\u4fbf\u60a8\u7684 PR \u88ab\u5ba1\u67e5\u5e76\u6700\u7ec8"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{a:()=>s});var r=n(67294);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);