"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[9155],{9927:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=t(4848),r=t(8453);const c={},o=void 0,i={id:"Sre/\u65e5\u5e38\u8fd0\u7ef4/\u7f51\u7edc\u76f8\u5173",title:"\u7f51\u7edc\u76f8\u5173",description:"cURL",source:"@site/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/12.\u7f51\u7edc\u76f8\u5173.md",sourceDirName:"Sre/1-\u65e5\u5e38\u8fd0\u7ef4",slug:"/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u7f51\u7edc\u76f8\u5173",permalink:"/en/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u7f51\u7edc\u76f8\u5173",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/12.\u7f51\u7edc\u76f8\u5173.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1734371096e3,sidebarPosition:12,frontMatter:{},sidebar:"SreOper",previous:{title:"\u5b89\u5168\u914d\u7f6e",permalink:"/en/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u5b89\u5168\u914d\u7f6e"}},l={},a=[{value:"cURL",id:"curl",level:2},{value:"httpstat",id:"httpstat",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"iperf3",id:"iperf3",level:2},{value:"Socks5\u4ee3\u7406\u914d\u7f6e",id:"socks5\u4ee3\u7406\u914d\u7f6e",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"curl",children:"cURL"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"vim curl.format\ntime_namelookup:  %{time_namelookup}\\n\n       time_connect:  %{time_connect}\\n\n    time_appconnect:  %{time_appconnect}\\n\n      time_redirect:  %{time_redirect}\\n\n   time_pretransfer:  %{time_pretransfer}\\n\n time_starttransfer:  %{time_starttransfer}\\n\n                    ----------\\n\n         time_total:  %{time_total}\\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884ccurl\u547d\u4ee4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:' curl -w "@curl.format" -s https://qq.com   -I\nHTTP/2 302\ndate: Thu, 06 Aug 2020 13:07:14 GMT\ncontent-type: text/html\nserver: squid/3.5.24\nlocation: https://www.qq.com?fromdefault\nexpires: Thu, 06 Aug 2020 13:08:15 GMT\ncache-control: max-age=60\nvary: Accept-Encoding\nx-cache: EXPIRED from shenzhen.qq.com\n\ntime_namelookup:  0.005594\n        time_connect:  0.014348\n     time_appconnect:  0.053759\n       time_redirect:  0.000000\n    time_pretransfer:  0.053873\n  time_starttransfer:  0.099312\n                     ----------\n          time_total:  0.099468\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u9762\u51e0\u4e2a\u53c2\u6570\u7684\u89e3\u91ca"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["time_namelookup\uff1aDNS \u57df d\u540d\u89e3\u6790\u7684\u65f6\u5019\uff0c\u5c31\u662f\u628a ",(0,s.jsx)(e.a,{href:"https://links.jianshu.com/go?to=https%3A%2F%2Fqq.com",children:"https://qq.com"})," \u8f6c\u6362\u6210 ip \u5730\u5740\u7684\u8fc7\u7a0b"]}),"\n",(0,s.jsx)(e.li,{children:"time_connect\uff1aTCP \u8fde\u63a5\u5efa\u7acb\u7684\u65f6\u95f4\uff0c\u5c31\u662f\u4e09\u6b21\u63e1\u624b\u7684\u65f6\u95f4"}),"\n",(0,s.jsx)(e.li,{children:"time_appconnect\uff1aSSL/SSH \u7b49\u4e0a\u5c42\u534f\u8bae\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u95f4\uff0c\u6bd4\u5982 connect/handshake \u7684\u65f6\u95f4"}),"\n",(0,s.jsx)(e.li,{children:"time_redirect\uff1a\u4ece\u5f00\u59cb\u5230\u6700\u540e\u4e00\u4e2a\u8bf7\u6c42\u4e8b\u52a1\u7684\u65f6\u95f4"}),"\n",(0,s.jsx)(e.li,{children:"time_pretransfer\uff1a\u4ece\u8bf7\u6c42\u5f00\u59cb\u5230\u54cd\u5e94\u5f00\u59cb\u4f20\u8f93\u7684\u65f6\u95f4"}),"\n",(0,s.jsx)(e.li,{children:"time_starttransfer\uff1a\u4ece\u8bf7\u6c42\u5f00\u59cb\u5230\u7b2c\u4e00\u4e2a\u5b57\u8282\u5c06\u8981\u4f20\u8f93\u7684\u65f6\u95f4"}),"\n",(0,s.jsx)(e.li,{children:"time_total\uff1a\u672c\u6b21\u8bf7\u6c42\u82b1\u8d39\u7684\u5168\u90e8\u65f6\u95f4"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"httpstat",children:"httpstat"}),"\n",(0,s.jsx)(e.p,{children:"httpstat \u662fPython\u5c01\u88c5\u7684\u5de5\u5177\uff0c\u672c\u8d28\u4e0a\u5c01\u88c5\u7684cURL\u547d\u4ee4"}),"\n",(0,s.jsx)(e.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"pip install httpstat\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-\u4f7f\u7528shell",children:"httpstat https://www.taobao.com\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/202408061837071.webp",alt:""})}),"\n",(0,s.jsx)(e.h2,{id:"iperf3",children:"iperf3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"iperf3 -c 42.193.116.59 -p 5201 -u -b 5M -t 240 -i 5\n"})}),"\n",(0,s.jsx)(e.p,{children:"-p \u6267\u884c\u7aef\u53e3\u53f7\n-u \u4f7f\u7528udp\n-b \u6307\u5b9aMiB\u5305\n-t \u6301\u7eed\u65f6\u95f4/s"}),"\n",(0,s.jsx)(e.h2,{id:"socks5\u4ee3\u7406\u914d\u7f6e",children:"Socks5\u4ee3\u7406\u914d\u7f6e"}),"\n",(0,s.jsx)(e.p,{children:"\u7cfb\u7edf: ubuntu: 22.0.4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"apt update\napt install dante-server\nsystemctl status danted.service\n\nvim /etc/danted.conf\n\nlogoutput: /tmp/socks.log\n\ninternal: eth0 port = 1082\n\nexternal: eth0\n\nclientmethod: none\n\nsocksmethod: username\n\nuser.privileged: root\n\nuser.notprivileged: nobody\n\n\nclient pass {\n\n        from: 0.0.0.0/0 to: 0.0.0.0/0\n\n        log: error connect disconnect\n\n}\nclient block {\n\n        from: 0.0.0.0/0 to: 0.0.0.0/0\n\n        log: connect error\n\n}\nsocks pass {\n\n        from: 0.0.0.0/0 to: 0.0.0.0/0\n\n        command: bind connect udpassociate\n\n        log: error connect disconnect\n\n        socksmethod: username\n\n}\nsocks block {\n\n        from: 0.0.0.0/0 to: 0.0.0.0/0\n\n        log: connect error\n\n}\n\n\nsudo useradd -r -s /bin/false danted\nsudo passwd danted\nsudo systemctl disable ufw\nsudo systemctl restart danted.service\n\ncurl -v -x socks5://danted:\u5bc6\u7801@\u670d\u52a1\u5668\u5730\u5740:\u7aef\u53e3 http://www.xxxx.com/\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var s=t(6540);const r={},c=s.createContext(r);function o(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);