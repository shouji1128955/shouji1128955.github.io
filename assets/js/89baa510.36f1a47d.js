"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1536],{9927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(4848),r=n(8453);const s={},c=void 0,l={id:"Sre/\u65e5\u5e38\u8fd0\u7ef4/\u7f51\u7edc\u76f8\u5173",title:"\u7f51\u7edc\u76f8\u5173",description:"cURL",source:"@site/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/12.\u7f51\u7edc\u76f8\u5173.md",sourceDirName:"Sre/1-\u65e5\u5e38\u8fd0\u7ef4",slug:"/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u7f51\u7edc\u76f8\u5173",permalink:"/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u7f51\u7edc\u76f8\u5173",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/12.\u7f51\u7edc\u76f8\u5173.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1728577361e3,sidebarPosition:12,frontMatter:{},sidebar:"SreOper",previous:{title:"\u5b89\u5168\u914d\u7f6e",permalink:"/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u5b89\u5168\u914d\u7f6e"}},o={},a=[{value:"cURL",id:"curl",level:2},{value:"httpstat",id:"httpstat",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"iperf3",id:"iperf3",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"curl",children:"cURL"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"vim curl.format\ntime_namelookup:  %{time_namelookup}\\n\n       time_connect:  %{time_connect}\\n\n    time_appconnect:  %{time_appconnect}\\n\n      time_redirect:  %{time_redirect}\\n\n   time_pretransfer:  %{time_pretransfer}\\n\n time_starttransfer:  %{time_starttransfer}\\n\n                    ----------\\n\n         time_total:  %{time_total}\\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u6267\u884ccurl\u547d\u4ee4"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:' curl -w "@curl.format" -s https://qq.com   -I\nHTTP/2 302\ndate: Thu, 06 Aug 2020 13:07:14 GMT\ncontent-type: text/html\nserver: squid/3.5.24\nlocation: https://www.qq.com?fromdefault\nexpires: Thu, 06 Aug 2020 13:08:15 GMT\ncache-control: max-age=60\nvary: Accept-Encoding\nx-cache: EXPIRED from shenzhen.qq.com\n\ntime_namelookup:  0.005594\n        time_connect:  0.014348\n     time_appconnect:  0.053759\n       time_redirect:  0.000000\n    time_pretransfer:  0.053873\n  time_starttransfer:  0.099312\n                     ----------\n          time_total:  0.099468\n'})}),"\n",(0,i.jsx)(t.p,{children:"\u4e0a\u9762\u51e0\u4e2a\u53c2\u6570\u7684\u89e3\u91ca"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["time_namelookup\uff1aDNS \u57df d\u540d\u89e3\u6790\u7684\u65f6\u5019\uff0c\u5c31\u662f\u628a ",(0,i.jsx)(t.a,{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fqq.com",children:"https://qq.com"})," \u8f6c\u6362\u6210 ip \u5730\u5740\u7684\u8fc7\u7a0b"]}),"\n",(0,i.jsx)(t.li,{children:"time_connect\uff1aTCP \u8fde\u63a5\u5efa\u7acb\u7684\u65f6\u95f4\uff0c\u5c31\u662f\u4e09\u6b21\u63e1\u624b\u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(t.li,{children:"time_appconnect\uff1aSSL/SSH \u7b49\u4e0a\u5c42\u534f\u8bae\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u95f4\uff0c\u6bd4\u5982 connect/handshake \u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(t.li,{children:"time_redirect\uff1a\u4ece\u5f00\u59cb\u5230\u6700\u540e\u4e00\u4e2a\u8bf7\u6c42\u4e8b\u52a1\u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(t.li,{children:"time_pretransfer\uff1a\u4ece\u8bf7\u6c42\u5f00\u59cb\u5230\u54cd\u5e94\u5f00\u59cb\u4f20\u8f93\u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(t.li,{children:"time_starttransfer\uff1a\u4ece\u8bf7\u6c42\u5f00\u59cb\u5230\u7b2c\u4e00\u4e2a\u5b57\u8282\u5c06\u8981\u4f20\u8f93\u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(t.li,{children:"time_total\uff1a\u672c\u6b21\u8bf7\u6c42\u82b1\u8d39\u7684\u5168\u90e8\u65f6\u95f4"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"httpstat",children:"httpstat"}),"\n",(0,i.jsx)(t.p,{children:"httpstat \u662fPython\u5c01\u88c5\u7684\u5de5\u5177\uff0c\u672c\u8d28\u4e0a\u5c01\u88c5\u7684cURL\u547d\u4ee4"}),"\n",(0,i.jsx)(t.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"pip install httpstat\n"})}),"\n",(0,i.jsx)(t.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-\u4f7f\u7528shell",children:"httpstat https://www.taobao.com\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/202408061837071.webp",alt:""})}),"\n",(0,i.jsx)(t.h2,{id:"iperf3",children:"iperf3"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"iperf3 -c 42.193.116.59 -p 5201 -u -b 5M -t 240 -i 5\n"})}),"\n",(0,i.jsx)(t.p,{children:"-p \u6267\u884c\u7aef\u53e3\u53f7\n-u \u4f7f\u7528udp\n-b \u6307\u5b9aMiB\u5305\n-t \u6301\u7eed\u65f6\u95f4/s"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);