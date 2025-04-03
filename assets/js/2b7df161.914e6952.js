"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[17470],{82055:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"faq/prometheus","title":"prometheus","description":"1. prometheus cannot get the edge node metrics","source":"@site/versioned_docs/version-v1.3/faq/prometheus.md","sourceDirName":"faq","slug":"/faq/prometheus","permalink":"/docs/v1.3/faq/prometheus","draft":false,"unlisted":false,"editUrl":"https://github.com/openyurtio/openyurt.io/edit/master/docs/faq/prometheus.md","tags":[],"version":"v1.3","lastUpdatedBy":"tnsimon","lastUpdatedAt":1743719911000,"frontMatter":{"title":"prometheus"},"sidebar":"docs","previous":{"title":"coredns","permalink":"/docs/v1.3/faq/coredns"}}');var s=t(74848),r=t(28453);const d={title:"prometheus"},c=void 0,i={},a=[];function l(A){const e={blockquote:"blockquote",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...A.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"1. prometheus cannot get the edge node metrics"})}),"\n",(0,s.jsx)(e.p,{children:"prometheus cannot get edge node metrics"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:t(64322).A+"",width:"1704",height:"547"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Troubleshooting method"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Log in to the node where the prometheus-pod is located, and check the running log of the prometheus container"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ crictl ps -a\n$ crictl logs $containerID<b9a9f9d9fdb1e>\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:t(34565).A+"",width:"1376",height:"124"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"check the prometheus container DNS configuration file resolv.conf to obtain the domain name resolution server address"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"crictl inspect $containerID<b9a9f9d9fdb1e>\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:t(85626).A+"",width:"1241",height:"193"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cat /var/lib/containerd/io.containerd.grpc.v1.cri/sandboxes/ebdbfc2212eb1390f24f02445e7737c62421c84caef92623/resolv.conf\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:t(92786).A+"",width:"544",height:"55"})}),"\n",(0,s.jsxs)(e.p,{children:["Get the domain name server ",(0,s.jsx)(e.code,{children:"nameserver"})," address of the prometheus pod"]}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsxs)(e.li,{children:["Use the ",(0,s.jsx)(e.code,{children:"dig"})," command, set the domain name resolution server to the ",(0,s.jsx)(e.code,{children:"nameserver"})," address of prometheus, resolve the domain name that the service cannot access, and get the corresponding resolved ip"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ dig @10.96.0.10$ Unreachable service domain name <edge-pi-node-02>\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:t(65902).A+"",width:"608",height:"374"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["If there is no ",(0,s.jsx)(e.code,{children:"dig"})," command, install the dns toolkit according to the corresponding system as follows"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ apt install dnsutils #ubuntu system\n$ yum install bind-utils #centos system\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["replace the unreachable service domain name with the ip address just resolved in ",(0,s.jsx)(e.code,{children:"curl"})," command and check if it can be accessed"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"https://edge-pi-node-02:10250/metrics"})," is replaced by: ",(0,s.jsx)(e.code,{children:"https://10.104.253.212:10250/metrics"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ curl -k -v https://10.104.253.212:10250/metrics\n"})}),"\n",(0,s.jsxs)(e.p,{children:["If it can be accessed normally, the result of the ",(0,s.jsx)(e.code,{children:"curl"})," command is as follows, and the node in ipvs mode should have created a virtual service forwarding rule corresponding to the ip"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"img",src:t(9997).A+"",width:"1113",height:"860"})})]})}function f(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,s.jsx)(e,{...A,children:(0,s.jsx)(l,{...A})}):l(A)}},92786:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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"},9997:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/crictl-curl-ipvs-shooting-59fecfcd4079138abd292d20106fde7f.png"},65902:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/crictl-dig-shooting-bac44326ae17158cdbcd44f8c3d99c47.png"},85626:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNkAAADBCAIAAAB9gPFVAAAgAElEQVR4nO3dq2/r2pfA8XXmXHzJaFglq8pBG5kOsQIilTlgWEhASFAkw5IAk0BL1oCSgBBzm1UKiIwGGlkaqVVl6ccumT9hQN7J3o7d5p3vB53juNtrL+84Xn7+enp6kjvkhllrag+SS8cBAAAAANj3b5cOAAAAAADwcKhFAQAAAADnRi0KAAAAADg3alEAAAAAwLlRiwIAAAAAzo1aFAAAAABwbn9dOoDjcsPMdxb/TqcXDQUAAAAAYPLrTt8vCgAAAAC4XlyjCwAAAAA4t99///33pWMwU8r9z//4/fuff/65dCQAAAAAgOO58vOiL61WfxRlsacuHQkAAAAA4Ghu4H5R5cXR89geJJcOBAAAAABwHFd+XhQAAAAAcIeoRQEAAAAA53YDtWj+WYjTci8dBgAAAADgWG6gFpXkbZg6fpbFcUhFCgAAAAB34K9LB1CB2/edYjJ8ff/I80vHAgAAAAD4uRs4L6oalqTjIMn3KlHFm14AAAAA4BbdQC1q4IZZFGVctQsAAAAAt+d2a9GPaZoWlw4CAAAAAPANt1uL5slgWhRfH5eOAwAAAABQ13U/u8gN455jWcWkk+x9pry4J+M2TzMCAAAAgJvz6+np6dIxfI9Sav9pRgAAAACAG3C7tSgAAAAA4Fbdxv2iSrmu6/IGFwAAAAC4D7///vvvS8dwgBtm//1fv3//+6//K/7nf/+5dDQAAAAAgB+77mcXiYiohiXpeDDYf3oRAAAAAOA23cY1ugAAAACAe0ItCgAAAAA4t+uvRf88W8XXx6WjAAAAAAAczxXfL6q8cNR0LKuYdAa8RxQAAAAA7sjVv19UeXHUnHXaAeUoAAAAANyLq79GN3+fFdbzn0uHAQAAAAA4nquvRQEAAAAAd4daFAAAAABwbtSiAAAAAIBzu/5aNH8fp5afZXHoqUvHAgAAAAA4hqt/ji4AAAAA4O5c/3lRAAAAAMC9ebxa1A2z+ERX+yrXVae8jvjU7UNDeXG2ELqXDmaL8sJ5aKcazwAAAMAJPV4tejrqpef3T/gm1FO3D508aNu2bXcmxaUj2eH2u9asY9u23Q7ySwcDAAAA1HVntajy4thT85NZpzmL5YbG82N50LYHyVW3f6z8HG6n6hJK+nsogms7T3leqmFJ8blThJ5+/AMAAABHcme1KK6E2+9a6fSnhXn99pVS57uMeXdJXEANAAAAVPYgtai7uLMui73G5nS1/iB01f7UzcnzGwd9R8Txd+8fdMP9Wwrn56YMC/DWk5c3+9Vtf/43+82XLLc8RUe889BtOcXkbV0q6vJc1t/N+XUh7bbvhlnoeXGcjUajUbRuqM76ncdUPW3KG0XbqzvqHzoVaepXrfU4T1zUtZaJ435RAAAA3KCHqEXd0HeKYce27c5Yms7G9MiXcce2bbszs/zRYpfe7fvWbGjbtm3br9PWy6LAmN84OExF0sWH6wtmk4G9+Gyb02tNX23btjvDwvGXpYr70pL5ZLszk+6ioqnfvhtG3Xn8neFG/Mblnovyek46Xt/EqM+zub9uGPnWbNiZrwB52Q1/t30REXGaz+NXu91ut+3Ookqtt37L8qmTv88Kp7Wqel+aB08Em/pVcz3OE9eZFMvEcb8oAAAAbtCd1aJ50G4H+c6tlYuTaLmI5EkwXhV0G9MlD8ap1XxZFgFWszF/ZG2eDIIfXGlazJbtJ9NUrMa8/SQYBPPJkgcb02va7ddG/PrlGvIzlwxqVDUl7Yi4/a5snbQ059ncr9dg2YFgdwXstr/TZZE8P7Rc7fotyac+CRvFaJVrkk39+sZ6NIZUtl4AAACAa/LXpQM4PdWwpJju11iqYYnlRFl3NaX4EhGRZNBphKPeqOtbUqST18H3TzvtPVxmzvXiXteydpZbk6lfJcs9h/lJy8F6+cY8mxoo6Zeu/bJ26qzfA8vVyINxmvU8lQR/Wk4x6ZQXf2Xj8ArXIwAAAHBaD1CL5p+FNBtKJN+fno61p4/yYNAORES5YeT33eC4p5jc0O8Ww057fsbLDbPet5ox9ev7lFqeUvw+t9+10uFmvkryrFXer/32y9qps36/k89kmvq9F/X57BSztwN/VzYOj7seTY6xfgEAAIAjubNrdLWSaWp1+64SEeV6PWdjuuMvnwijXC/0XBER5YWe+bk1H19F2bWSFS+3Lb7mlcdWPHXb3+1XMXv/QaXhhlkU/fhFILsPFVrEqcvznKa/yTS1uqPFOlCutzm7rn2Tuuu3NJ/5ZyHru0O3/qbZb2ly74Zxlm09AMnUr+OuR5PjrF8AAADgWB6hFpVk0JlYfpRlWdSTWbo5fSi9KMuyLBu1ZPqeiIjkwZu0Rlk2n33S2T6xlgfjVLqR7qG2kgyGRTM6+GTT5G1SNP3FUj9n2w8kqtN+MuhM5vFHfrMYvv7oETYfX0VR/PA1LNqHCpnyPKfrbzLoDIumHy3mX89uaN+k7votzWcyGKaWv7dyk2lqOfry0RKxtp7abOrXUdejycc0TYsTtAsAAAB8z6+np6dLx4A74YZZ76tzuqe6nrr9YzvHdbd1uGHceLud9AEAAOC+PcD9ojiPyg8VutL2j++qQlVe3JNx+6piAgAAwCPjvCjwCJRSOU8uAgAAwPWgFgUAAAAAnNtDPLvotikvPvD4U+W6qtLjeze5YfkTlgAAAADgdKhFb5966fn9P5eOAgAAAACqu7NaVHlx7CnduUQ33H9HyjmWe4Z28qBtD370LpajxQ8AAAAAldxZLQoAAAAAuAEPUIsqL86yzHdEHD/Lsmx1fnTnVOnynKDy4iz0vDDOsizL4tDduKlSuYvJO9NLuGGW/fzOzIY+HjfMtrq07oc+0PVUr/GzgAAAAADgBx6gFs2Dtm3bw1QkHdq2bdvLC1qTt0nhtJZFnNvvWul0camr032evtq23RnOLH+0LCTdMPJl3LFt2+5sTj89fTwiycBe9G1n/l5r+mrbtt0ZFo7fd5fx+04x7Ni23RlL0zlX8AAAAACw669LB3BcedBui4hI0LYrzP0+K6KWK0ki4rYcSYfLuy6LyVuSi0ieBONWt/eigjwXt+UUk06Szxc0TpfTy5ebDOzq93Ka2tHGU6KYvS3iTKap32soka34F+0cXC4AAAAAnMSd1aI15e+zIup5Kgn+zOu05QfF536ppxqWWE6UdVdTiq/zhKmPp+78qmFJMa3XDgAAAACcxK+np6dLx1DV1+2ECgAAAADY9Pyvf23+9wHuFwUAAAAAXBlqUQAAAADAud3k/aI753Z/SHlx9DxePlx3//9ww7jx1g641RQAAABAXaZ7LTkvuvUuF+xRXtyTMYUoAAAAgGO6yfOix+KGme9IkQ7blKJm76/t8hfIAAAAAEBdN/kc3eNeowsAAAAAOBFTHcc1ujgO5cXZQugaZnFdpbb+wDTnddqO/0TcMIu9aks5SzwndG35fDQXHT+r9XIr24GKcVbvl/LC+SbzOsfnxdfLsfJzojzXzc/R81m3X1c+3r7tyscJKnrs/FfYf76Qc62Xh75GF0eUB207WDz5ST+Heun5z+NkcKsX/F5b/NcWT123Hv+pKdf98/GRnOwCefJ/UW6/a8069unuxD/5+Dlt+9/Ij3LdP7Ib0snzfCF1+3XEPGjzXDL9pB5wnNTL8/G+pyddvzeU/1M4vP98IWdbL3d2XlR5ceypKzime8Cx4jzczqkzUaP9PGjXfzrxqeJ3w9rHn74V/7Fo8nDReHbdWj6vnhtGvu/3/5xuCaX5v/Yt6LGdvb+qYUnxWXFnMlweM49DVx2cLiLa8VM6f1268bleQBxuHkPfmB57m0leH3IPd4+5a/JzIH7ljfz9r0yNPG8vYBXQxhmLqmctSvqlm9nQfml/df0y5tkwvyHOb+V5f3rNvO3MvjoPY5pe1q/Nju11oM440bejHecH4jR1WtN+3fzX3Q6Yo9GOf+Nyj6rGeC7pb718mrZXWw0+1u/gHsN24wR11p3VomejlLqJyyO3nhK8G3GNHpj6e+qnEN/rU47rjp97zcOxnPr7eJL2zd9H5cW+labpERfFeCtzxf1VXr81fe3Ytm3bnZnlR4sff9P0+Wf746ds/voxacan8vqN6eu8/bF0V+0rb+Rbs/mCX2dNf7VcN4y6Muvszl8zD6uPR83Z5CffGOWNfKsYdhYL2AqomMwXbNsVDp/V65ep/drry5jnenF+M8/66TXylgdte22YSjF7z0umlyUijpoy7ti2bb9OGy/fHSeGdgzj/Fhx1s1/3e1ASTjm8X+M71ddhvFs7m/NfJq2V5tMvwtn3f//wX77LXmIWtR8HGV1GGXjg51af+t+MzfMQs+L42w0Go2i9WwVDghXPRDthtWOqFVrrOUUk7f5V0l5o53NVNRffitdTx+/qb+69kvjCA0HRxslxy817RvzbFyP+ytgfvzSd0QcfyeosjzsxW9qfzdOt0I+17N7DW3+dvJgyqcuD2UeNZ97efBW83uHvu/Ki7PQ04/bCgdaN5Zp/D6KyGzYHkyrhF66XHN+DN/H5edb463kuLJm/ZatR+N6MWwH9ONZefF6HW3/R7vYw+cDy7YzW39giLNWv+aDLepayy/Merzp1mMeDAbLq+LyYJyK1VBl0+f2x0/Z/HX7qx2feTAIkkX7yXTVvnppWunypWB5ME6d3rxr86QHuYjkydukcFrLnUdtfkr7q7xRsxgHn5vx1Myz/Hm2pJjOe5C/zwqpQJcfU79K87nP2F9Dv4x5NuXBEGftPJdNNzi0X6S8nqMr5bamG/vV71rpeLBYkUkQJJsNVB8npnYM47wsfu14M7RfN/91twPGeMrGv2H9Gn53jL/72vVeczwb+1s3nxXWo2a/6+D+f5XfnTr7aeX7CYa/OcJ+Xdn28yQeoRZ1+741G84PV71OW+vDZG4YdeeHUTrDmeWPKqXaaT6PX+12u922O4tR6oaRb82Gi+Mx8rLe44v8xWGaTuX2j0h5PWf1bZb8fbbxs6hemqsDPu5LS5YHiGa7B4g0/dW3XyYZLI4V7nC6z9NXY/532y/Js2E9Or3WvGOdYeH4/cVvbXsRSzrcPmJrzoMxfk37B9a7dvz4zvx4ZGcsTWcve/t51sdTdzw/aj41eega59eOf/24NeVTz/x9FMm3dqAqxG9erjZ+U/4XsWyPN/P207h+TevRtF6M+dSOwzxoD4vuyFPLVdeex2oYJ8b4Df0tGW+mOGv1a/6F6UyK5RdmEX6V8WO64nRn+sHxszV/3f4ebl+5LefQlbHbIeefxbrINuTH3F+33y3Guyfe6uY5maZitdxVAV18fazasrqRZtdOmx9jvwzzl7Wv7W+V/FTIQ1mc2uWKIc8l0/X9OrhftFWGGKeX9Cv9Eu1F0nXGSVk7q4D043wnfv14q9J+1fyb5td/T+uPf/1yjfsPht8Fw3qvO54N/f1OPleTtetRu39r2P+v87tTbz+tbD9B7zj7dT9aL99xZ7VoHrTbQb5/K5TVbMwfGZkng9W3c3HQY35cMBinVvOlQrFYzN6S5cYwX7fzGuwdP9toX/Lt9k1xymI3sepaL2lHxO13ZfOgzuag3rr2INk4QBTsHiDa76+p/W8ozf9u+xXyvNvOKnjTga8tpXnQx69rv2S9i3H8bMS/u5Cqea47nh81n9o8GOfXjn9tfkz5NDF+H2sqX675+2tsb3+8abefJev30HrczbM5n4bxnAyGRTeKY99Jh4PD21t9/Ib+lrRTKc5D/TLm/eD4mVfe+/uipunGJW3NX7e/ZRYXGEQ9mXQW7efvs2J5ik6U13PEev6z/ReLA+5b06vHL27oS53em/KcDDoz6UVZlmVRsxi+rs7JLC++7Az3Lt015kfbL+38Je3r+6t3IM8mZfmvmGfDdFO/yrfnYt4YVt9IOs3F1Zc7tVCtcWJsR7Tj3Bhnyffa2P4y4HrjvNp2oO74Ny3X3I7+d+Hget9WYTzv9bdePqV8Per3u0r3Nyr97tTdT6u7n3Dy/boDdcd3PcJzdJNBpxGOeqOub0mRTl4Hweo4SjH9eaVvakc1LLGcKOuuphRfP15YjbC8npOOtx6SmQfjNOt5Kgn+tJxi0llvLb2417WsWnFq2q+v5ND5XvtleTatx6oPrVionQfTKYo66/3AOKyc57rj+UHz+eP5Rcxx1mvH+H2s5VjbsWVze+PNsP2UkvVbNz/fyGfyNulFXZm8Jhvza8eJOX5tf8vG2zH6ZXJoPbph7FuTTnv/7IR+etV26va31PJpkK43imLpLHZYXifPoyjrihTpZJZKc+OE4/IvxBXZPBFZPX439K1J52Pj/i2lyg67GPOsvDh6nnXsQb7oQCg7O1p5Erw2mlHLlWQ+vSQ/2n4dyOde+7r+mv+6NM+14tQt15TnCvnf6tfB7blr2Biapmuk4+WueDBNu72GEsnrjhNTO/Meaca5Ic6y77Wxfak/zquOk7rj37Tckn5pfxdq7w8fGM+6/tbJ52IZpvVYa7+rzu/OqfcTzrBfdxqPUIuK5MGgHYiIcsPI77vBIJH5VSnNrdH6zcYN7eSfhaTj7xw2OLyNPMztd610uLvsZJr6vRf1+ewUs7fVHmXod4thpz3/Frth1vt2+3VZxvzvt1+W52Osx+/lYV/d9V4ef/U8183DY+bz5/OL6Mftd9rRfh9rOtr6EhHDeNNuP+uu37I46+dTeaNuMZlY3ZH3Pt+DKBkn+vgN/S0bb3XjNG/fNEGW9dcNY9+adfaulzFNN9HMX7e/VeRJMG51ey8qyHNZ519ElBd353tE2/2tuIem7W8hzdGoKSJiWSLij6Sxc8BhKzZDnrfvT0veZ72dolDj8HjY7lftfNZbv9o8G2cuy3+NPH8n/yXb8/mtlvsbQ9N0bfv6t2LUj/PQ2zV2xrk2zrLfWWP7dcd5jXFSf/wblmvaXhl+F76xP2wez4btWL18bixobz3W2++q87tz6v2Ek+/XHfTN+uXOrtHVUV7oae8PTqap1e27SkSUu77ZPP8sZHXbv+v1Dt5vlkxTqztaLEO5nre+/t7xV094cb1w9zHrWm6YRZqnBNVkeqhQMk2tZr+1+2CA4mvxi1Slv2Xtz7PXMka/c/pfl39j+yV5NrZj9PGluz/mYB4OX75Qf73vxr/52aGHQ23GU54HN4yzbOtG+UfMpzEPxvm1tPkx5dO03OXfaL6PJaqvxyp2868Zb8btp9TcbpTk2ZxP/ThcXGwVBO1hsboWyzBOyuI3bWdM461SnIf6VZofzXpUbpjpdqRM001M89ftr6n5jTzP87A82q68dadG62vM5nmbP6ekyrVnhviTQXtlftd621xgrJa7n+f5L9fymkB3dcPcVr824zflp6RfuvmN7dddv6Y8l+ZBE2fNPJumG/tVuj1XL01L+9Qiw3R9v5zeMhPe6kbA74wTXTvmcW6Is2z/UNN+7XFed5zUHP/G5Zb87mh/F2rvDxvGc9l2rEY+S9dj1YdylvSrbt0xZ9h/Nu8nnHi/rrbv1y8PUIvmwZu0RpnmsvBk0JnMr4+P/I3r45PBMJX5Pfej1ufs8GOsk0FnWDT9xV/I+8b198PF9ffZqCXT9ypj++OrKIofvl6g5KFCyTS1nO1hmLxNiqafVe9v6UOLksEwtXztY7eSwbBoRpsfpZOv1miZ//W2wtB+SZ5167FUHoyXK3n5xTmYh/349equ92TQmVh+NB+gs63HtZc+HGo3ngN5sESsxvbfP1g+53R5WMw/amnm19gat6v8mPJpWq6I9vsosnjOre8snmC3vWWvvB4P2cu/drwZt5+1txvm9aLfDpjGoRuubxNNBsPUWTzuXz9OzNv/su2MfryZ46zTr5L8aNajeuk564fAbKwsw/R5hvbHj3n+uv3Vt58Hb5+LPM/nX2U6DxYfRL3mbLgxgAadiTQj431328r6W4/h+7IOZ2vA5e9TWfVrs1vG/Jj7pZvf1H79/pryXJIHTZzHyrM5byXb8/mzUPe/KKbppn7Nnpf3PR4eWDXbMY9zU5wlv7Oa9uvmv+52oO74L82Pth3T70Ld33H9eC7djtXIZ8l6rP5QzpJ+1a47lh9q95/1+wkicuL9uto+pmla6RHke349PT0dOZiT+VqG+vyvf102kivnhlnvq/rh1Idr/1YcOw/nuD7jFpTm4WDSlRdHz9+79v5I+T/Veny0792j9RcAUO7Wfheubb/ODePGmzl9pjruAc6LPpqaB3Uerv1bcfw8PHxKF/aPunvrl6We6toV3XIv3M62R/vePVp/AQDlbu934apCVV7ck2+lj/OiAB6ccsOR71giUqTD10FStiX9/nlRAACAu6SUysufXGSq46hFAQAAAACnYqrjHuOdLkemXFc+kh+/duWk1q+DOnCUAgAAAADOj1q0PvXS85/HSYXX4F6MG0Y9Ky0KEfmavuWl1xwCAAAAwNnd2bOLlBfHnhJRXvzDV3S64e6rFFbyoH2qu8WOF78U48FgMBgMAgpRAAAAAFfnJu8XBQAAAADcFt7pAgAAAAC4MGpRAAAAAMC53dI1ut/lhlnvq9NevH519T/lxVFztj999Ue+DPX3hbph1pquP6rbvhtmvjUZvr6f7lG8OxECAAAAwHV5gPOiqmFJ8amv+kzTT9p+MuhMimZvFGVZFoee2p8DAAAAAO7bA9Si+WchVkNf8ZmmH6t9058Eg3a7bdudYeF0+5Wfl6soWwEAAADchweoRSWZpla37yoRUa7Xc4rZ+/JspWm6yMdXaYW5+VFJ+zrKCz23flXphlkU/fRFLwAAAABwFR6hFpVk0JlIL8qyLPKbxfA1WJWK6eSrNdJMF8mDcSrdKMuy/feMJoNh0YyyLMtiT5W2r5MHb9IaZVmWZVFPJp2Kd3V+fBVFkU65BRQAAADAHXiEZxcZKC+Onsf3+YAfnl0EAAAA4Ko9xHnRh+T4WbY+dQsAAAAA1+SvSweAU0gGNudEAQAAAFyvB75GFwAAAABwIVyjW5ny4gOPsVWuW/+1K27IZbQAAAAAHg216PGol57f/3PpKAAAAADg+j14Laq8OPZUlXOeFeRB+6ePrj1qPAAAAABwrR68Fj1IKVX/slsAAAAAQCmeo6vlhlnra2I1uyKFWFYxXJ7wbHhh3HUskSIdvg6SfD2/74iIpKs5F+8vHUrPdyzZ+QM3jBdTJ5PivF0DAAAAgMvjvKiJ03wev9rtdrttd96WV9463efpq23bneHM8kfrRw4lA9u27WG610ivNX21bdvuDAvH7y+uunVD3ymGHdu2O2NpOmfpDgAAAABckQc/L5oH7baIiARte+ejYva2PIuZ56uJk/nEPAnGrW7vRQXrz3RWjeTJNPV7DSWSi9tyiklns50q8QAAAADA/eC8aC3FZ2npWWl+1bBqtwMAAAAAd4VatBar8fMHGeWfxTfb4SlKAAAAAO4EtWgtVrfvKhFRrtdzitn73tnNKkVmMk232qm2aDfMoogXvQAAAAC4C9SitaSTr9Yoy7LIbxbDdrBTiiaDYdGMsizLYq+sJE0GnYnlR1mWRT2Z7T3wSO9jmqY8chcAAADAffj19PR06RhQkRvGjbe9ChgAAAAAbs6DP0f3higv7sm4TSEKAAAA4A5wXvRWKKXy8hfIAAAAAMCtoBYFAAAAAJwbzy46A+W6vI4FAAAAANaoRU9PvfT8/p9LRwEAAAAA1+PBa1HlxbGnRJQXn+7VnXnQtgfJDxtxw6xGhGfpFwAAAAB814PXogcppWpdXltp/t05uIAXAAAAwIPhnS5abpi1viZWsytSiGUVQ3uQKC+OnmcTaXYdS6RIh6+DJC+ZfzHdd0RE0uHq1KjyRtHzeOO/8eq/yvX6va5jiUiRTl4HQb6YoWuJiIifZf5WY8oNR/5i/s14AAAAAOCqcV7UxGk+j1/tdrvdtjtvyytsne7z9NW27c5wZvkjTx2aPxnYtm0P082G8/dZ4bSWF86ql6aVTufzuy8tmb7atm3bnZl0o/nVtXnQXrSRDm3btu1VGeuGkS/jznz+3XgAAAAA4Ho9eC2aB+12kGtv6Sxmb8vTjOvXehaT+cQ8Ccap1XxRB+bXL3SjGHX73VUpKkkwCBZt5ME0FatRWly6LWcZj+Tb8ZT0CwAAAAAuj2t0ayk+j3EVbB6M06znqST403KKSWdVLLpe3Ota1mppX2WtqIYllhNl3XV0pfMDAAAAwNWgFq3FaiiRI5SjyTT1ey/q89kpZm/rm079bjHstOdnOt0w65W2kX8Wko6/c9pTqUOnbgEAAADgpB78Gt26rG7fVSKiXK/nFLP3yhXd7uW2yTS1mv3WbhvF17zSVa7Xc7b+4OOr2G0kmaaOH7rzacr1Qq/K21vcMIsiXvQCAAAA4KKoRWtJJ1+tUZZlkd8shq9BxVI0GQyLZpRlWRavHi+UTFPL2S5Fk7dJ0fSzLMuyUetztvXAI8mDcSrdKMuy9XtGk0FnKL1o8Rcyfa9yivRjmqZFtbgBAAAA4ER+PT09XTqGG7H58pXb5oZx461dtZIGAAAAgKPjftFHo7y4J+M2hSgAAACAC6IWfTjvr22eXAQAAADgsrhGFwAAAABwbjy7CAAAAABwbtSiAAAAAIBze/BaVHlx7CkR5cU/euXmsdoBAAAAgIfw4LXoQUoppQ7PBgAAAACogefoarlh1vqaWM2uSCGWVQztt8be20Xv54WjAAAAAHBe1KImTvN5+GonuYgoJZK7hTQbSmT9OpQ/z1bx9XG5CAEAAADgVvFOFy03zHpfnXaQb09rTe1BsvxMvHgkr9vzAAAAAAAq4LxoZR9fhd9yRVpWIdaLepemVYwpRAEAAACgPp5dVFn+WYjV8FrW7HVcNF9enq10yq2iAAAAAPAN1KLVJdPUajat2XueTItmk5tFAQAAAOCbqEVr+PgqLKv4zEU+vmTxLwAAAABAbTy7CAAAAABwbkoc9HIAAANFSURBVJwXBQAAAACcG7UoAAAAAODcqEUBAAAAAOd2d+8XVUot/pXnPFoIAAAAAK7SndWiyuv3n0VELMspxvaA938CAAAAwBW6s1o0DwYDERFxw6x14VgAAAAAAAbcLwoAAAAAODdqUQAAAADAuVGLAgAAAADOjVoUAAAAAHBu1KIAAAAAgHOjFgUAAAAAnBu1KAAAAADg3KhFAQAAAADnRi0KAAAAADi3vy4dwHG5YeY7i3+n04uGAgAAAAAw+fX09HTpGAAAAAAAj4VrdAEAAAAA5/b777//vnQMZkq5//kfv3//888/l44EAAAAAHA8V35e9KXV6o+iLPbUpSMBAAAAABzNDdwvqrw4eh7bg+TSgQAAAAAAjuPKz4sCAAAAAO4QtSgAAAAA4NxuoBbNPwtxWu6lwwAAAAAAHMsN1KKSvA1Tx8+yOA6pSAEAAADgDvx16QAqcPu+U0yGr+8feX7pWAAAAAAAP3cD50VVw5J0HCT5XiWqeNMLAAAAANyiG6hFDdwwi6KMq3YBAAAA4Pbcbi36MU3T4tJBAAAAAAC+4XZr0TwZTIvi6+PScQAAAAAA6rruZxe5YdxzLKuYdJK9z5QX92Tc5mlGAAAAAHBzfj09PV06hu9RSu0/zQgAAAAAcANutxYFAAAAANyq27hfVCnXdV3e4AIAAAAA9+H333//fekYDnDD7L//6/fvf//1f8X//O8/l44GAAAAAPBj1/3sIhER1bAkHQ8G+08vAgAAAADcptu4RhcAAAAAcE+oRQEAAAAA53b9teifZ6v4+rh0FAAAAACA47ni+0WVF46ajmUVk86A94gCAAAAwB25+veLKi+OmrNOO6AcBQAAAIB7cfXX6Obvs8J6/nPpMAAAAAAAx3P1tSgAAAAA4O5QiwIAAAAAzo1aFAAAAABwbtdfi+bv49TysywOPXXpWAAAAAAAx3D1z9EFAAAAANyd6z8vCgAAAAC4N49Xi7phFp/oal/luuqU1xGfuv2zOGH+tykvzkL3DAsCAAAAUN/j1aKno156fv+Eb0I9dfsAAAAAcC53VosqL449dcpzYm6YmVrOg7Y9SK66/WPl53A7pz4reZr2Tz9+AAAAAIiIyP8DNyGftW5AN0UAAAAASUVORK5CYII="},34565:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/crictl-ps-shooting-6254cadae001877baa9324be728f8e01.png"},64322:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/prometheus-endpoint-shooting-54e7653ed721d47e265da0f43d885c1d.png"},28453:(A,e,t)=>{t.d(e,{R:()=>d,x:()=>c});var n=t(96540);const s={},r=n.createContext(s);function d(A){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function c(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:d(A.components),n.createElement(r.Provider,{value:e},A.children)}}}]);