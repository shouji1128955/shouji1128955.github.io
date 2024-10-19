"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[7755],{2679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(4848),s=n(8453);const o={},i=void 0,a={id:"Sre/\u4e2d\u95f4\u4ef6/nginx",title:"nginx",description:"Nginx\u65e5\u5fd7\u683c\u5f0f",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/11.nginx.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/nginx",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/nginx",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/2-\u4e2d\u95f4\u4ef6/11.nginx.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:172933664e4,sidebarPosition:11,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"openvpn",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/openvpn"},next:{title:"clickhouse",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/clickhouse"}},d={},c=[{value:"Nginx\u65e5\u5fd7\u683c\u5f0f",id:"nginx\u65e5\u5fd7\u683c\u5f0f",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"nginx\u65e5\u5fd7\u683c\u5f0f",children:"Nginx\u65e5\u5fd7\u683c\u5f0f"}),"\n",(0,r.jsx)(t.p,{children:"log_format  access  '$remote_addr $remote_user [$time_local] \"$request\" '\r\n'$status $body_bytes_sent \"$http_referer\" '\r\n'$http_user_agent $http_x_forwarded_for $request_time $upstream_response_time $upstream_addr $upstream_status';"}),"\n",(0,r.jsx)(t.h1,{id:"\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f",children:"\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f"}),"\n",(0,r.jsx)(t.p,{children:"log_format  access_jkyy  '$remote_addr - $remote_user [$time_local] \"$request\" '\r\n'$status $body_bytes_sent \"$http_referer\" '\r\n'$http_user_agent $http_x_forwarded_for $request_time  $upstream_addr $upstream_status $upstream_response_time';"}),"\n",(0,r.jsx)(t.p,{children:"\u65e5\u5fd7grok"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'    "^\\|TID: (?<trace_id>.*)\\|%{TIMESTAMP_ISO8601:logdate}\\|%{LOGLEVEL:log_level}\\s?\\|%{USERNAME:app_name}\\|%{URIPATH:request_uri}?\\|%{URIPROTO:http_method}?\\|%{IP:client_ip}?\\|%{USERNAME:thread_name}?\\|%{DATA:package_name_and_line}?\\|%{BASE16NUM:request_id}?\\|(?<msg>.*?(?<json_msg>[\\{|\\[]\\"resultCode\\".*[\\}|\\]])?)\\|"      \n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);