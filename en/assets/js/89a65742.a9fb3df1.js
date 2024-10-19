"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[6585],{7177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(4848),o=t(8453);const r={},i=void 0,c={id:"DevOps/gitOps/tekton\u5b89\u88c5",title:"tekton\u5b89\u88c5",description:"npm \u5b89\u88c5\u6307\u5b9a\u963f\u91cc\u4e91",source:"@site/docs/DevOps/2-gitOps/0-tekton\u5b89\u88c5.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/tekton\u5b89\u88c5",permalink:"/en/docs/DevOps/gitOps/tekton\u5b89\u88c5",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/2-gitOps/0-tekton\u5b89\u88c5.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:172933664e4,sidebarPosition:0,frontMatter:{},sidebar:"DevOpsGitOps",next:{title:"tekton\u62c9\u53d6\u4ee3\u7801",permalink:"/en/docs/DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801"}},l={},d=[];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"npm \u5b89\u88c5\u6307\u5b9a\u963f\u91cc\u4e91"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["npm install --save @docusaurus/plugin-content-docs  --registry=",(0,s.jsx)(n.a,{href:"https://registry.npmmirror.com",children:"https://registry.npmmirror.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\u5b98\u65b9\uff0c\u6709\u53ea\u8bfb\u548c\u8bfb\u5199\u6a21\u5f0f\u4e24\u79cd"}),"\n",(0,s.jsx)(n.p,{children:"\u5b98\u65b9\u5b89\u88c5\u6587\u6863\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/tektoncd/pipeline/blob/main/docs/install.md",children:"https://github.com/tektoncd/pipeline/blob/main/docs/install.md"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20230917235256038",src:t(7119).A+"",width:"1350",height:"759"})}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u6211\u8fd9\u8fb9\u5df2\u7ecf\u540c\u6b65\u5230github."}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5\u7248\u672c:   dashboard  0.32.1"}),"\n",(0,s.jsx)(n.p,{children:"controller:  0.41.0"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u955c\u50cf\u5df2\u7ecf\u66ff\u6362\u4e3a\u963f\u91cc\u4e91\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubeclt apply -f  https://raw.githubusercontent.com/shouji1128955/bookcode/main/kubernetes/tekton/tekton-pipeline-release.yaml\r\n\r\nkjubectl  apply  -f  https://raw.githubusercontent.com/shouji1128955/bookcode/main/kubernetes/tekton/release-full.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u9700\u8981\u5bf9service\u8fdb\u884c\u4fee\u6539\u4e3anodePort \u65b9\u5f0f\u8fdb\u884c\u8bbf\u95ee"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl  edit svc tekton-dashboard  -n tekton-pipelines\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20230917235815693",src:t(3151).A+"",width:"1140",height:"398"})}),"\n",(0,s.jsx)(n.p,{children:"\u9a8c\u8bc1\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"s-master:~/tekton# kubectl  get service  -n tekton-pipelines\r\nNAME                                TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                              AGE\r\ntekton-dashboard                    NodePort    10.102.87.91    <none>        9097:41877/TCP                       22m\r\ntekton-pipelines-controller         ClusterIP   10.108.43.105   <none>        9090/TCP,8008/TCP,8080/TCP           28d\r\ntekton-pipelines-webhook            ClusterIP   10.97.167.64    <none>        9090/TCP,8008/TCP,443/TCP,8080/TCP   28d\r\ntekton-triggers-controller          ClusterIP   10.104.231.2    <none>        9000/TCP                             6d2h\r\ntekton-triggers-core-interceptors   ClusterIP   10.109.59.53    <none>        8443/TCP                             6d2h\r\ntekton-triggers-webhook             ClusterIP   10.99.38.160    <none>        443/TCP                              6d2h\r\nroot@k8s-master:~/tekton# kubectl  get  pods    -n tekton-pipelines\r\nNAME                                                 READY   STATUS    RESTARTS      AGE\r\ntekton-dashboard-86dc7648d5-zp4kn                    1/1     Running   0             23m\r\ntekton-pipelines-controller-6bcb64d9b9-stpbm         1/1     Running   30 (8h ago)   28d\r\ntekton-pipelines-webhook-787486d884-x2v7b            1/1     Running   28 (8h ago)   28d\r\ntekton-triggers-controller-74dccbdd79-cslr8          1/1     Running   7 (8h ago)    6d2h\r\ntekton-triggers-core-interceptors-579b9cd556-mdb4v   1/1     Running   7 (8h ago)    6d2h\r\ntekton-triggers-webhook-86d487889-h6xg9              1/1     Running   7 (8h ago)    6d2h\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7119:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/image-20230917235256038-9adaa774cf07937f3a6dc371af1dd345.png"},3151:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/image-20230917235815693-58adcecb5e0551f9e29392fc0ea76655.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);