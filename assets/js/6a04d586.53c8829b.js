"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[43868],{29126:(e,A,r)=>{r.r(A),r.d(A,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var n=r(85893),s=r(11151);const t={slug:"Edge-gateway-caching-capabilities",title:"Elegant realization of edge gateway caching capabilities",authors:["rambohe-ch"],tags:["yurthub"]},i=void 0,o={permalink:"/blog/Edge-gateway-caching-capabilities",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2021-03-29-Edge-gateway-caching-capabilities.md",source:"@site/blog/2021-03-29-Edge-gateway-caching-capabilities.md",title:"Elegant realization of edge gateway caching capabilities",description:"image",date:"2021-03-29T00:00:00.000Z",tags:[{label:"yurthub",permalink:"/blog/tags/yurthub"}],readingTime:6.935,hasTruncateMarker:!0,authors:[{name:"rambohe",title:"Maintainer of OpenYurt",url:"https://github.com/rambohe-ch",imageURL:"https://github.com/rambohe-ch.png",key:"rambohe-ch"}],frontMatter:{slug:"Edge-gateway-caching-capabilities",title:"Elegant realization of edge gateway caching capabilities",authors:["rambohe-ch"],tags:["yurthub"]},unlisted:!1,prevItem:{title:"How Openyurt runs the business pod in edge scenarios",permalink:"/blog/How-run-business-pod-in-edge-scenarios"},nextItem:{title:"Getting Started with OpenYurt:play with OpenYurt on Raspberry Pi",permalink:"/blog/Play-with-OpenYurt-on-Raspberry-Pi"}},a={authorsImageUrls:[void 0]},d=[{value:"OpenYurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898",id:"openyurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898",level:2},{value:"1\uff09Yurthub\u67b6\u6784",id:"1yurthub\u67b6\u6784",level:3},{value:"2\uff09\u7b2c\u4e00\u60f3\u6cd5",id:"2\u7b2c\u4e00\u60f3\u6cd5",level:3},{value:"3) \u4f18\u96c5\u5b9e\u73b0\u63a2\u8ba8",id:"3-\u4f18\u96c5\u5b9e\u73b0\u63a2\u8ba8",level:3},{value:"YurtHub\u5b9e\u73b0",id:"yurthub\u5b9e\u73b0",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function l(e){const A={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"image",src:r(73467).Z+"",width:"865",height:"203"})}),"\n",(0,n.jsx)(A.h2,{id:"openyurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898",children:"OpenYurt\u5982\u4f55\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u95ee\u9898"}),"\n",(0,n.jsx)(A.p,{children:"\u60f3\u8981\u5b9e\u73b0\u5c06 Kubernetes \u7cfb\u7edf\u5ef6\u5c55\u5230\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\uff0c\u90a3\u4e48\u8fb9\u7f18\u8282\u70b9\u5c06\u901a\u8fc7\u516c\u7f51\u548c\u4e91\u7aef\u8fde\u63a5\uff0c\u7f51\u7edc\u8fde\u63a5\u6709\u5f88\u5927\u4e0d\u53ef\u63a7\u56e0\u7d20\uff0c\u53ef\u80fd\u5e26\u6765\u8fb9\u7f18\u4e1a\u52a1\u8fd0\u884c\u7684\u4e0d\u7a33\u5b9a\u56e0\u7d20\uff0c\u8fd9\u662f\u4e91\u539f\u751f\u548c\u8fb9\u7f18\u8ba1\u7b97\u878d\u5408\u7684\u4e3b\u8981\u96be\u70b9\u4e4b\u4e00\u3002"}),"\n",(0,n.jsx)(A.p,{children:"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u9700\u8981\u4f7f\u8fb9\u7f18\u4fa7\u5177\u6709\u81ea\u6cbb\u80fd\u529b\uff0c\u5373\u5f53\u4e91\u8fb9\u7f51\u7edc\u65ad\u5f00\u6216\u8005\u8fde\u63a5\u4e0d\u7a33\u5b9a\u65f6\uff0c\u786e\u4fdd\u8fb9\u7f18\u4e1a\u52a1\u53ef\u4ee5\u6301\u7eed\u8fd0\u884c\u3002\u5728 OpenYurt \u4e2d\uff0c\u8be5\u80fd\u529b\u7531 yurt-controller-manager \u548c YurtHub \u7ec4\u4ef6\u63d0\u4f9b\u3002"}),"\n",(0,n.jsx)(A.h3,{id:"1yurthub\u67b6\u6784",children:"1\uff09Yurthub\u67b6\u6784"}),"\n",(0,n.jsx)(A.p,{children:"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u8be6\u7ec6\u4ecb\u7ecd\u4e86YurtHub \u7ec4\u4ef6\u7684\u80fd\u529b\u3002\u5176\u67b6\u6784\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.img,{alt:"image",src:r(27521).Z+"",width:"739",height:"570"}),"\nYurtHub\u662f\u4e00\u4e2a\u5e26\u6709\u6570\u636e\u7f13\u5b58\u529f\u80fd\u7684\u201c\u900f\u660e\u7f51\u5173\u201d\uff0c\u548c\u4e91\u7aef\u7f51\u7edc\u65ad\u8fde\u72b6\u6001\u4e0b\uff0c\u5982\u679c\u8282\u70b9\u6216\u8005\u7ec4\u4ef6\u91cd\u542f\uff0c\u5404\u4e2a\u7ec4\u4ef6\uff08kubelet/kube-proxy \u7b49)\u5c06\u4ece YurtHub \u4e2d\u83b7\u53d6\u5230\u4e1a\u52a1\u5bb9\u5668\u76f8\u5173\u6570\u636e\uff0c\u6709\u6548\u89e3\u51b3\u8fb9\u7f18\u81ea\u6cbb\u7684\u95ee\u9898\u3002\u8fd9\u4e5f\u610f\u5473\u7740\u6211\u4eec\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u8f7b\u91cf\u7684\u5e26\u6570\u636e\u7f13\u5b58\u80fd\u529b\u7684\u53cd\u5411\u4ee3\u7406\u3002"]}),"\n",(0,n.jsx)(A.h3,{id:"2\u7b2c\u4e00\u60f3\u6cd5",children:"2\uff09\u7b2c\u4e00\u60f3\u6cd5"}),"\n",(0,n.jsx)(A.p,{children:"\u5b9e\u73b0\u4e00\u4e2a\u7f13\u5b58\u6570\u636e\u7684\u53cd\u5411\u4ee3\u7406\uff0c\u7b2c\u4e00\u60f3\u6cd5\u5c31\u662f\u4ece response.Body \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u7136\u540e\u5206\u522b\u8fd4\u56de\u7ed9\u8bf7\u6c42 client \u548c\u672c\u5730\u7684 Cache \u6a21\u5757\u3002\u4f2a\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{children:"func HandleResponse(rw http.ResponseWriter, resp *http.Response) {\n        bodyBytes, _ := ioutil.ReadAll(resp.Body)\n        go func() {\n                // cache response on local disk\n                cacher.Write(bodyBytes)\n        }\n\n        // client reads data from response\n        rw.Write(bodyBytes)\n}\n"})}),"\n",(0,n.jsx)(A.p,{children:"\u5f53\u6df1\u5165\u601d\u8003\u540e\uff0c\u5728 Kubernetes \u7cfb\u7edf\u4e2d\uff0c\u4e0a\u8ff0\u5b9e\u73b0\u4f1a\u5f15\u53d1\u4e0b\u9762\u7684\u95ee\u9898\uff1a"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsxs)(A.li,{children:["\n",(0,n.jsx)(A.p,{children:"\u95ee\u9898 1\uff1a\u6d41\u5f0f\u6570\u636e\u9700\u8981\u5982\u4f55\u5904\u7406(\u5982: K8s \u4e2d\u7684 watch \u8bf7\u6c42)\uff0c\u610f\u5473 ioutil.ReadAll() \u4e00\u6b21\u8c03\u7528\u65e0\u6cd5\u8fd4\u56de\u6240\u6709\u6570\u636e\u3002\u5373\u5982\u4f55\u53ef\u4ee5\u8fd4\u56de\u6d41\u6570\u636e\u540c\u65f6\u53c8\u7f13\u5b58\u6d41\u6570\u636e\u3002"}),"\n"]}),"\n",(0,n.jsxs)(A.li,{children:["\n",(0,n.jsx)(A.p,{children:"\u95ee\u9898 2\uff1a\u540c\u65f6\u5728\u672c\u5730\u7f13\u5b58\u6570\u636e\u524d\uff0c\u6709\u53ef\u80fd\u9700\u8981\u5bf9\u4f20\u5165\u7684 byte slice \u6570\u636e\u5148\u8fdb\u884c\u6e05\u6d17\u5904\u7406\u3002\u8fd9\u610f\u5473\u7740\u9700\u8981\u4fee\u6539 byte slice\uff0c\u6216\u8005\u5148\u5907\u4efd byte slice \u518d\u5904\u7406\u3002\u8fd9\u6837\u4f1a\u9020\u6210\u5185\u5b58\u7684\u5927\u91cf\u6d88\u8017\uff0c\u540c\u65f6\u9488\u5bf9\u6d41\u5f0f\u6570\u636e\uff0c\u5230\u5e95\u7533\u8bf7\u591a\u5927\u7684 slice \u4e5f\u4e0d\u597d\u5904\u7406\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(A.h3,{id:"3-\u4f18\u96c5\u5b9e\u73b0\u63a2\u8ba8",children:"3) \u4f18\u96c5\u5b9e\u73b0\u63a2\u8ba8"}),"\n",(0,n.jsx)(A.p,{children:"\u9488\u5bf9\u4e0a\u9762\u7684\u95ee\u9898\uff0c\u6211\u4eec\u5c06\u95ee\u9898\u9010\u4e2a\u62bd\u8c61\uff0c\u53ef\u4ee5\u53d1\u73b0\u66f4\u4f18\u96c5\u7684\u5b9e\u73b0\u65b9\u6cd5\u3002"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"\u95ee\u9898 1\uff1a\u5982\u4f55\u5bf9\u6d41\u6570\u636e\u540c\u65f6\u8fdb\u884c\u8bfb\u5199"}),"\n"]}),"\n",(0,n.jsx)(A.p,{children:"\u9488\u5bf9\u6d41\u5f0f\u6570\u636e\u7684\u8bfb\u5199(\u4e00\u8fb9\u8fd4\u56de\u4e00\u8fb9\u7f13\u5b58)\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5176\u5b9e\u9700\u8981\u7684\u4e0d\u8fc7\u662f\u628a response.Body(io.Reader) \u8f6c\u6362\u6210\u4e00\u4e2a io.Reader \u548c\u4e00\u4e2a io.Writer\u3002\u6216\u8005\u8bf4\u662f\u4e00\u4e2a io.Reader \u548c io.Writer \u5408\u6210\u4e00\u4e2a io.Reader\u3002\u8fd9\u5f88\u5bb9\u6613\u5c31\u8054\u60f3\u5230 Linux \u91cc\u9762\u7684 Tee \u547d\u4ee4\u3002"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"image",src:r(3109).Z+"",width:"743",height:"259"})}),"\n",(0,n.jsx)(A.p,{children:"\u800c\u5728 Golang \u4e2d Tee \u547d\u4ee4\u662f\u5b9e\u73b0\u5c31\u662f io.TeeReader\uff0c\u90a3\u95ee\u9898 1 \u7684\u4f2a\u4ee3\u7801\u5982\u4e0b:"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{children:"func HandleResponse(rw http.ResponseWriter, resp *http.Response) {\n        // create TeeReader with response.Body and cacher\n        newRespBody := io.TeeReader(resp.Body, cacher)\n\n        // client reads data from response\n        io.Copy(rw, newRespBody)\n}\n"})}),"\n",(0,n.jsx)(A.p,{children:"\u901a\u8fc7 TeeReader \u7684\u5bf9 Response.Body \u548c Cacher \u7684\u6574\u5408\uff0c\u5f53\u8bf7\u6c42 client \u7aef\u4ece response.Body \u4e2d\u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u5c06\u540c\u65f6\u5411 Cache \u4e2d\u5199\u5165\u8fd4\u56de\u6570\u636e\uff0c\u4f18\u96c5\u7684\u89e3\u51b3\u4e86\u6d41\u5f0f\u6570\u636e\u7684\u5904\u7406\u3002"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"\u95ee\u9898 2\uff1a\u5982\u4f55\u5728\u7f13\u5b58\u524d\u5148\u6e05\u6d17\u6d41\u6570\u636e"}),"\n"]}),"\n",(0,n.jsx)(A.p,{children:"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u7f13\u5b58\u524d\u5148\u6e05\u6d17\u6d41\u6570\u636e\uff0c\u8bf7\u6c42\u7aef\u548c\u8fc7\u6ee4\u7aef\u9700\u8981\u540c\u65f6\u8bfb\u53d6 response.Body\uff082 \u6b21\u8bfb\u53d6\u95ee\u9898\uff09\u3002\u4e5f\u5c31\u662f\u9700\u8981\u5c06 response.Body(io.Reader) \u8f6c\u6362\u6210\u4e24\u4e2a io.Reader\u3002"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"image",src:r(25943).Z+"",width:"446",height:"250"})}),"\n",(0,n.jsx)(A.p,{children:"\u4e5f\u610f\u5473\u7740\u95ee\u9898 2 \u8f6c\u5316\u6210\uff1a\u95ee\u9898 1 \u4e2d\u7f13\u5b58\u7aef\u7684 io.Writer \u8f6c\u6362\u6210 Data Filter \u7684 io.Reader\u3002\u5176\u5b9e\u5728 Linux \u547d\u4ee4\u4e2d\u4e5f\u80fd\u627e\u5230\u7c7b\u4f3c\u547d\u4ee4\uff0c\u5c31\u662f\u7ba1\u9053\u3002\u56e0\u6b64\u95ee\u9898 2 \u7684\u4f2a\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{children:"func HandleResponse(rw http.ResponseWriter, resp *http.Response) {\n        pr, pw := io.Pipe()\n        // create TeeReader with response.Body and Pipe writer\n        newRespBody := io.TeeReader(resp.Body, pw)\n        go func() {\n                // filter reads data from response \n                io.Copy(dataFilter, pr)\n        }\n\n        // client reads data from response\n        io.Copy(rw, newRespBody)\n}\n"})}),"\n",(0,n.jsx)(A.p,{children:"\u901a\u8fc7 io.TeeReader \u548c io.PiPe\uff0c\u5f53\u8bf7\u6c42 client \u7aef\u4ece response.Body \u4e2d\u8bfb\u53d6\u6570\u636e\u65f6\uff0cFilter \u5c06\u540c\u65f6\u4ece Response \u8bfb\u53d6\u5230\u6570\u636e\uff0c\u4f18\u96c5\u7684\u89e3\u51b3\u4e86\u6d41\u5f0f\u6570\u636e\u7684 2 \u6b21\u8bfb\u53d6\u95ee\u9898\u3002"}),"\n",(0,n.jsx)(A.h2,{id:"yurthub\u5b9e\u73b0",children:"YurtHub\u5b9e\u73b0"}),"\n",(0,n.jsx)(A.p,{children:"\u6700\u540e\u770b\u4e00\u4e0b YurtHub \u4e2d\u76f8\u5173\u5b9e\u73b0\uff0c\u7531\u4e8e Response.Body \u4e3a io.ReadCloser\uff0c\u6240\u4ee5\u5b9e\u73b0\u4e86 dualReadCloser\u3002\u540c\u65f6 YurtHub \u53ef\u80fd\u4e5f\u9762\u4e34\u5bf9 http.Request \u7684\u7f13\u5b58\uff0c\u6240\u4ee5\u589e\u52a0\u4e86 isRespBody \u53c2\u6570\u7528\u4e8e\u5224\u5b9a\u662f\u5426\u9700\u8981\u8d1f\u8d23\u5173\u95ed response.Body\u3002"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{children:'// https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/util/util.go#L156\n// NewDualReadCloser create an dualReadCloser object\nfunc NewDualReadCloser(rc io.ReadCloser, isRespBody bool) (io.ReadCloser, io.ReadCloser) {\n    pr, pw := io.Pipe()\n    dr := &dualReadCloser{\n        rc:         rc,\n        pw:         pw,\n        isRespBody: isRespBody,\n    }\n\n    return dr, pr\n}\n\ntype dualReadCloser struct {\n    rc io.ReadCloser\n    pw *io.PipeWriter\n    // isRespBody shows rc(is.ReadCloser) is a response.Body\n    // or not(maybe a request.Body). if it is true(it\'s a response.Body),\n    // we should close the response body in Close func, else not,\n    // it(request body) will be closed by http request caller\n    isRespBody bool\n}\n\n// Read read data into p and write into pipe\nfunc (dr *dualReadCloser) Read(p []byte) (n int, err error) {\n    n, err = dr.rc.Read(p)\n    if n > 0 {\n        if n, err := dr.pw.Write(p[:n]); err != nil {\n            klog.Errorf("dualReader: failed to write %v", err)\n            return n, err\n        }\n    }\n\n    return\n}\n\n// Close close two readers\nfunc (dr *dualReadCloser) Close() error {\n    errs := make([]error, 0)\n    if dr.isRespBody {\n        if err := dr.rc.Close(); err != nil {\n            errs = append(errs, err)\n        }\n    }\n\n    if err := dr.pw.Close(); err != nil {\n        errs = append(errs, err)\n    }\n\n    if len(errs) != 0 {\n        return fmt.Errorf("failed to close dualReader, %v", errs)\n    }\n\n    return nil\n}\n'})}),"\n",(0,n.jsx)(A.p,{children:"\u5728\u4f7f\u7528 dualReadCloser \u65f6\uff0c\u53ef\u4ee5\u5728 httputil.NewSingleHostReverseProxy \u7684 modifyResponse() \u65b9\u6cd5\u4e2d\u770b\u5230\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(A.pre,{children:(0,n.jsx)(A.code,{children:'// https://github.com/openyurtio/openyurt/blob/master/pkg/yurthub/proxy/remote/remote.go#L85\nfunc (rp *RemoteProxy) modifyResponse(resp *http.Response) error {rambohe-ch, 10 months ago: \u2022 hello openyurt\n            // \u7701\u7565\u90e8\u5206\u524d\u7f6e\u68c0\u67e5                                                          \n            rc, prc := util.NewDualReadCloser(resp.Body, true)\n            go func(ctx context.Context, prc io.ReadCloser, stopCh <-chan struct{}) {\n                err := rp.cacheMgr.CacheResponse(ctx, prc, stopCh)\n                if err != nil && err != io.EOF && err != context.Canceled {\n                    klog.Errorf("%s response cache ended with error, %v", util.ReqString(req), err)\n                }\n            }(ctx, prc, rp.stopCh)\n\n            resp.Body = rc\n}\n'})}),"\n",(0,n.jsx)(A.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,n.jsx)(A.p,{children:"OpenYurt \u4e8e 2020 \u5e74 9 \u6708\u8fdb\u5165 CNCF \u6c99\u7bb1\u540e\uff0c\u6301\u7eed\u4fdd\u6301\u4e86\u5feb\u901f\u53d1\u5c55\u548c\u8fed\u4ee3\uff0c\u5728\u793e\u533a\u540c\u5b66\u4e00\u8d77\u52aa\u529b\u4e0b\uff0c\u76ee\u524d\u5df2\u7ecf\u5f00\u6e90\u7684\u80fd\u529b\u6709\uff1a"}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsx)(A.li,{children:"\u8fb9\u7f18\u81ea\u6cbb"}),"\n",(0,n.jsx)(A.li,{children:"\u8fb9\u7f18\u5355\u5143\u5316\u7ba1\u7406"}),"\n",(0,n.jsx)(A.li,{children:"\u4e91\u8fb9\u534f\u540c\u8fd0\u7ef4"}),"\n",(0,n.jsx)(A.li,{children:"\u4e00\u952e\u5f0f\u65e0\u7f1d\u8f6c\u6362\u80fd\u529b"}),"\n"]}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.a,{href:"https://mp.weixin.qq.com/s/vdFrCDiIhPLVbOnf6vRxEw",children:"\u539f\u6587\u94fe\u63a5"})})]})}function c(e={}){const{wrapper:A}={...(0,s.a)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},73467:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/OpenYurt-de0f93f0c16ddb05b6782cbe66107b22.png"},3109:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/responsebody_write-624eba73126f446b3e854e546b75d539.png"},25943:(e,A,r)=>{r.d(A,{Z:()=>n});const n="data:image/png;base64,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"},27521:(e,A,r)=>{r.d(A,{Z:()=>n});const n=r.p+"assets/images/yurthub-40267e14a620859d35d3085eb5de2d24.png"},11151:(e,A,r)=>{r.d(A,{a:()=>i});var n=r(67294);const s={},t=n.createContext(s);function i(e){const A=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}}}]);