"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[8373],{4982:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(4848),t=o(8453);const s={},l=void 0,a={id:"Sre/\u4e2d\u95f4\u4ef6/nomad",title:"nomad",description:"nomad\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/13.nomad.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/nomad",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/nomad",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/2-\u4e2d\u95f4\u4ef6/13.nomad.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:17293594e5,sidebarPosition:13,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"clickhouse",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/clickhouse"},next:{title:"pulsar",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/pulsar"}},d={},c=[{value:"nomad\u90e8\u7f72",id:"nomad\u90e8\u7f72",level:2},{value:"nomad\u5220\u9664job",id:"nomad\u5220\u9664job",level:2},{value:"\u67e5\u770bpeer id",id:"\u67e5\u770bpeer-id",level:2},{value:"\u5220\u9664\u8282\u70b9",id:"\u5220\u9664\u8282\u70b9",level:2}];function i(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"nomad\u90e8\u7f72",children:"nomad\u90e8\u7f72"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5904\u4ee5\u4e09\u8282\u70b9\u4e3a\u4f8b"}),"\n",(0,r.jsx)(n.h2,{id:"nomad\u5220\u9664job",children:"nomad\u5220\u9664job"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"nomad job stop -detach sys-pulsar-zk \r\nnomad job stop -purge sys-pulsar-zk \n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u770bpeer-id",children:"\u67e5\u770bpeer id"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"root@ekc02:~# nomad operator raft list-peers\r\nNode          ID                 Address            State     Voter  RaftProtocol\r\nekc04.global  172.19.49.42:4647  172.19.49.42:4647  follower  true   2\r\nekc03.global  172.19.49.41:4647  172.19.49.41:4647  follower  true   2\r\nekc02.global  172.19.49.40:4647  172.19.49.40:4647  leader    true   2\r\nh5s.global    172.19.49.38:4647  172.19.49.38:4647  follower  true   2\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5220\u9664\u8282\u70b9",children:"\u5220\u9664\u8282\u70b9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'root@ekc02:~# nomad operator raft remove-peer -address="http://172.19.49.40:4646"  -peer-address="172.19.49.39:4647"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var r=o(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);