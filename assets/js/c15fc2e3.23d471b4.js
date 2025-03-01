"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[365],{1640:(t,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var n=e(4848),r=e(8453);const l={},s=void 0,a={permalink:"/blog/2026/logrotate",editUrl:"https://github.com/shouji1128955/bookshell/tree/main/blog/blog/2026/logrotate.md",source:"@site/blog/2026/logrotate.md",title:"2026/logrotate",description:"\u6700\u8fd1\u767c\u73fe\u5728 Ubuntu \u7684\u8a2d\u5099\u4e0a\u53ea\u8981\u662f /var/log/*.log \u7684\u6a94\u6848\u8dd1 logrotate \u90fd\u6703\u5931\u6557\uff0c\u4f46\u662f CentOS \u7684\u7cfb\u7d71\u53cd\u800c\u6c92\u554f\u984c",date:"2025-03-01T17:01:41.000Z",tags:[],readingTime:.995,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"npm\u5e38\u7528\u547d\u4ee4",permalink:"/blog/2024/10/11/npm\u64cd\u4f5c"}},c={authorsImageUrls:[]},i=[];function u(t){const o={code:"code",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"\u6700\u8fd1\u767c\u73fe\u5728 Ubuntu \u7684\u8a2d\u5099\u4e0a\u53ea\u8981\u662f /var/log/*.log \u7684\u6a94\u6848\u8dd1 logrotate \u90fd\u6703\u5931\u6557\uff0c\u4f46\u662f CentOS \u7684\u7cfb\u7d71\u53cd\u800c\u6c92\u554f\u984c\n\u51fa\u73fe\u7684\u8a0a\u606f\u662f\uff1a"}),"\n",(0,n.jsx)(o.p,{children:"error: skipping \u201c/var/log/syslog\u201d because parent directory has insecure permissions (It\u2019s world writable or writable by group which is not \u201croot\u201d) Set \u201csu\u201d directive in config file to tell logrotate which user/group should be used for rotation."}),"\n",(0,n.jsx)(o.p,{children:"\u4f46\u662f\u57f7\u884c logrotate \u7684\u662f root\uff0c\u6240\u4ee5\u6b0a\u9650\u6c92\u554f\u984c\uff0c\u554f\u984c\u662f\u5728\u65bc logrotate \u7684\u5b89\u5168\u6027\u8a2d\u8a08\u3002"}),"\n",(0,n.jsxs)(o.p,{children:["CentOS \u5728 /var/log \u9810\u8a2d\u662f root",":root"," \u6b0a\u9650\nUbuntu \u5728 /var/log \u9810\u8a2d\u662f root",":syslog"," \u6b0a\u9650\n\u4f46\u662f logrotate \u9810\u8a2d\u7684\u5b89\u5168\u6027\u8a2d\u8a08\u4e26\u4e0d\u5141\u8a31\u9664\u4e86 root",":root"," \u4ee5\u5916\u7684\u6b0a\u9650\uff0c\u5982\u679c\u6b0a\u9650\u975e root \u5c31\u5fc5\u9808\u6307\u5b9a su \u53c3\u6578\u8b93 logrotate \u4e0d\u53bb\u5224\u65b7\u9019\u500b\u554f\u984c\u3002"]}),"\n",(0,n.jsx)(o.p,{children:"\u6700\u7c21\u55ae\u5c31\u662f\u5728 logrotate.conf \u52a0\u4e0a su \u8a2d\u5b9a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"\n# /etc/logrotate.conf\ncompress\ncreate\ndateext\nrotate 4\nweekly\nsu root root\n\n# configurable file rotations\ninclude /etc/logrotate.d\n"})})]})}function g(t={}){const{wrapper:o}={...(0,r.R)(),...t.components};return o?(0,n.jsx)(o,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},8453:(t,o,e)=>{e.d(o,{R:()=>s,x:()=>a});var n=e(6540);const r={},l=n.createContext(r);function s(t){const o=n.useContext(l);return n.useMemo((function(){return"function"==typeof t?t(o):{...o,...t}}),[o,t])}function a(t){let o;return o=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),n.createElement(l.Provider,{value:o},t.children)}}}]);