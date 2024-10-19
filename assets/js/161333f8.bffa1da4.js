"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3602],{4741:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(4848),a=r(8453);const o={},s=void 0,l={id:"Prometheus/alertManager/alertmanager\u544a\u8b66\u914d\u7f6e",title:"alertmanager\u544a\u8b66\u914d\u7f6e",description:"\u544a\u8b66\u6a21\u677f\u53c2\u8003",source:"@site/docs/Prometheus/alertManager/1.alertmanager\u544a\u8b66\u914d\u7f6e.md",sourceDirName:"Prometheus/alertManager",slug:"/Prometheus/alertManager/alertmanager\u544a\u8b66\u914d\u7f6e",permalink:"/docs/Prometheus/alertManager/alertmanager\u544a\u8b66\u914d\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Prometheus/alertManager/1.alertmanager\u544a\u8b66\u914d\u7f6e.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:17293594e5,sidebarPosition:1,frontMatter:{},sidebar:"PrometheusAlert"},i={},c=[{value:"\u544a\u8b66\u6a21\u677f\u53c2\u8003",id:"\u544a\u8b66\u6a21\u677f\u53c2\u8003",level:2}];function u(e){const n={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u544a\u8b66\u6a21\u677f\u53c2\u8003",children:"\u544a\u8b66\u6a21\u677f\u53c2\u8003"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-golang",children:'\r\ngroups:\r\nname: clickhouse-rules\r\nrules:\r\nalert: clickhouse\u5f53\u524d\u6d3b\u8dc3\u7684\u8fde\u63a5\u6570\u8fc7\u591a\r\nexpr: ClickHouseMetrics_TCPConnection > 2\r\nfor: 1m\r\nlabels:\r\nlevel: warning\r\nannotations:\r\ndescription: "clickhouse\u6570\u636e\u5e93\u5f53\u524d\u6d3b\u8dc3\u7684\u8fde\u63a5\u6570: {{ $ value }}" \r\n\u8fd9\u662f\u544a\u8b66\u8868\u8fbe\u5f0f\r\n \r\n\u8fd9\u4e0b\u9762\u662f\u6211\u7684\u6a21\u677f\uff1a\r\n{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}{{if eq $v.status "resolved"}}**[Prometheus\u6062\u590d\u4fe1\u606f]({{$v.generatorURL}})**\r\n*[{{$v.labels.alertname}}]({{$var}})*\r\n\u544a\u8b66\u72b6\u6001\uff1a<font color="green">\u5df2\u6062\u590d</font>\r\n\u5f00\u59cb\u65f6\u95f4\uff1a{{$v.startsAt}}\r\n\u7ed3\u675f\u65f6\u95f4\uff1a{{$v.endsAt}} \r\n\u6545\u969c\u4e3b\u673aIP\uff1a{{$v.labels.instance}}\r\n**{{$v.annotations.description}}**{{else}}\ud83d\udd14\ud83d\udd14\ud83d\udd14**[Prometheus \u62a5\u8b66\u901a\u77e5]({{ $v.generatorURL }})**\ud83d\udd14\ud83d\udd14\ud83d\udd14\r\n\u544a\u8b66\u540d\u79f0\uff1a**[{{$v.labels.alertname}}]({{$var}})**\r\n\u544a\u8b66\u72b6\u6001\uff1a{{ $v.labels.level }}\r\n\u5f00\u59cb\u65f6\u95f4\uff1a{{ TimeFormat $v.startsAt "2006-01-02 15:04:05" }}\r\n\u5b9e\u4f8b\u5730\u5740\uff1a{{ $v.labels.instance }}\r\n\u6545\u969c\u8be6\u60c5\uff1a**{{ $v.annotations.description }}**\r\n{{end }}\r\n<font color="red">\uff01\uff01\uff01\u8bf7\u53ca\u65f6\u5904\u7406\uff01\uff01\uff01</font>\r\n{{end }}\r\n\r\n\u6211\u5b9e\u9645\u8fde\u63a5\u6570\u662f1\u4e86\u3002\u4e3a\u5565\u63a8\u9001\u7684\u6587\u672c\u8fd8\u662f3\u5462\uff1f\r\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(6540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);