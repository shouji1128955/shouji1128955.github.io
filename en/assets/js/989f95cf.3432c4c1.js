"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[5072],{3028:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var r=o(4848),c=o(8453);const s={},t=void 0,a={id:"Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5",title:"conflunce\u5b89\u88c5",description:"\u670d\u52a1\u90e8\u7f72",source:"@site/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/7.conflunce\u5b89\u88c5.md",sourceDirName:"Sre/1-\u65e5\u5e38\u8fd0\u7ef4",slug:"/Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5",permalink:"/en/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/7.conflunce\u5b89\u88c5.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1729354592e3,sidebarPosition:7,frontMatter:{},sidebar:"SreOper",previous:{title:"clickhouse\u96c6\u7fa4\u8282\u70b9\u91cd\u65b0\u52a0\u5165",permalink:"/en/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/clickhouse\u96c6\u7fa4\u8282\u70b9\u91cd\u65b0\u52a0\u5165"},next:{title:"\u78c1\u76d8\u7ba1\u7406",permalink:"/en/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u78c1\u76d8\u7ba1\u7406"}},l={},i=[];function d(e){const n={code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u670d\u52a1\u90e8\u7f72"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"cat > docker-compose.yam <<EOF\r\nversion: '3'\r\nservices:\r\n  confluence:\r\n    image: atlassian/confluence-server:6.15.6\r\n    ports:\r\n      - '8090:8090'\r\n    volumes:\r\n      - '/data/confluence/data:/var/atlassian/application-data/confluence'\r\n    environment:\r\n      - JVM_MINIMUM_MEMORY=1024m\r\n      - JVM_MAXIMUM_MEMORY=4096m\r\n      - JVM_SUPPORT_RECOMMENDED_ARGS=-Dfile.encoding=UTF8\r\nEOF\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"wget  https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64\r\nroot@mongo:/data/confluence# mv docker-compose-linux-x86_64  /usr/bin/docker-compose\r\nroot@mongo:/data/confluence# chmod +x  /usr/bin/docker-compose\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u63d2\u4ef6\u5b89\u88c5\u9875\u9762,\u8df3\u8fc7\u63d2\u4ef6\u5b89\u88c5,\u76f4\u63a5\u70b9\u51fb\u4e0b\u4e00\u6b65"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20231126125733322.png",alt:"image-20231126125733322"})}),"\n",(0,r.jsx)(n.p,{children:"\u6388\u6743\u7801\u9875\u9762,\u9700\u8bb0\u4f4f\u670d\u52a1\u5668ID\u7559\u4f5c\u5907\u7528"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Confluence\u7834\u89e3"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"root@mongo:/data/confluence# docker cp confluence-confluence-1:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar .\r\nroot@mongo:/data/confluence# ls -l \r\ntotal 16\r\n-rw-r--r-- 1 root root 6982 Jun 20  2019 atlassian-extras-decoder-v2-3.4.1.jar\r\ndrwx------ 6 2002 2002 4096 Nov 26 13:02 data\r\n-rw-r--r-- 1 root root  343 Nov 26 12:54 docker-compose.yaml\r\nroot@mongo:/data/confluence# \r\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bfc\u51fa\u5230\u672c\u5730\uff0c\u9700\u8bb0\u4f4f\u5bfc\u51fa\u6587\u4ef6\u7684\u8def\u5f84"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"root@mongo:/data/confluence# sz atlassian-extras-decoder-v2-3.4.1.jar\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6253\u5f00\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\uff0c\u8fd0\u884c\u7834\u89e3\u5668confluence_keygen.jar"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"java -jarconfluence_keygen.jar"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>a});var r=o(6540);const c={},s=r.createContext(c);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);