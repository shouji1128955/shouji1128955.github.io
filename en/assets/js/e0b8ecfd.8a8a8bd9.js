"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[1008],{9617:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var i=l(4848),s=l(8453);const n={},c=void 0,r={id:"Sre/\u4e2d\u95f4\u4ef6/cilium",title:"cilium",description:"cilium\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/16.cilium.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/cilium",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/cilium",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/2-\u4e2d\u95f4\u4ef6/16.cilium.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:173246975e4,sidebarPosition:16,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"zookeeper",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/zookeeper"}},d={},h=[{value:"cilium\u90e8\u7f72",id:"cilium\u90e8\u7f72",level:3},{value:"cilium\u5378\u8f7d",id:"cilium\u5378\u8f7d",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"cilium\u90e8\u7f72",children:"cilium\u90e8\u7f72"}),"\n",(0,i.jsx)(t.h3,{id:"cilium\u5378\u8f7d",children:"cilium\u5378\u8f7d"}),"\n",(0,i.jsx)(t.p,{children:"\u5b8c\u5168\u5378\u8f7d\u4f7f\u7528 Helm \u5b89\u88c5\u7684 Cilium"}),"\n",(0,i.jsx)(t.p,{children:"\u6587\u6863\u517c\u5bb9\u6027"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"\u4e3b\u4f53"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"\u7248\u672c\u53f7"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"\u6587\u6863\u5730\u5740\uff08\u5982\u679c\u6709\uff09"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Debian"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"11"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Kubernetes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1.28"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://v1-28.docs.kubernetes.io/",children:"https://v1-28.docs.kubernetes.io/"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Docker"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"24.0.2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://docs.docker.com/",children:"https://docs.docker.com/"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"containerd"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1.7.6"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Linux kernel"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5.10.0"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Cilium"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1.14.2"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://docs.cilium.io/en/v1.14/",children:"https://docs.cilium.io/en/v1.14/"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"helm"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"v3.9.0"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://helm.sh/docs/",children:"https://helm.sh/docs/"})})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"sudo cilium uninstall\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"sudo helm uninstall cilium -n kube-system\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"sudo kubectl get crd | grep cilium | awk '{print $1}' | xargs sudo kubectl delete crd\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u68c0\u67e5\u4e00\u4e0b\u540d\u5b57\u4e2d\u542b\u6709 cilium \u7684\u8d44\u6e90\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'sudo kubectl get all --all-namespaces | egrep "cilium"\n'})}),"\n",(0,i.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u6e05\u7406 CNI \u914d\u7f6e\uff1a"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo rm -rf /etc/cni/net.d/\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"\u5b8c\u5168\u6e05\u7406\u7f51\u5361\uff1a"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"sudo ip link list | grep lxc | awk '{print $2}' | cut -c 1-15 | xargs -I {} sudo ip link delete {}\nsudo ip link list | grep cilium_net@cilium_host | awk '{print $2}' | cut -c 1-10 | xargs -I {} sudo ip link delete {}\nsudo ip link list | grep cilium_host@cilium_net | awk '{print $2}' | cut -c 1-11 | xargs -I {} sudo ip link delete {}\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"\u66f4\u65b0\u8def\u7531\uff1a"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"sudo ip route flush proto bird\n"})}),"\n",(0,i.jsx)(t.p,{children:"4.\u91cd\u542f\u8282\u70b9"})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>c,x:()=>r});var i=l(6540);const s={},n=i.createContext(s);function c(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);