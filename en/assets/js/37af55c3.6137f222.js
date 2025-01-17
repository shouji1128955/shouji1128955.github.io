"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[848],{3750:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>v,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var a=i(4848),r=i(8453);const t={},s=void 0,d={id:"k8s/nvidia",title:"nvidia",description:"\u5b89\u88c5nvidia-fabricmanager",source:"@site/docs/k8s/7.nvidia.md",sourceDirName:"k8s",slug:"/k8s/nvidia",permalink:"/en/docs/k8s/nvidia",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/k8s/7.nvidia.md",tags:[],version:"current",lastUpdatedBy:"shouji1128955",lastUpdatedAt:1737132563e3,sidebarPosition:7,frontMatter:{},sidebar:"k8s",previous:{title:"ansible\u5b89\u88c5k8s-1.24.12",permalink:"/en/docs/k8s/ansible\u5b89\u88c5k8s-1.24.12"},next:{title:"operator",permalink:"/en/docs/k8s/k8s develop/operator"}},o={},c=[{value:"\u5b89\u88c5nvidia-fabricmanager",id:"\u5b89\u88c5nvidia-fabricmanager",level:3},{value:"\u542f\u52a8 nvidia-fabricmanager \u670d\u52a1",id:"\u542f\u52a8-nvidia-fabricmanager-\u670d\u52a1",level:3}];function l(e){const n={code:"code",h3:"h3",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u5b89\u88c5nvidia-fabricmanager",children:"\u5b89\u88c5nvidia-fabricmanager"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"centos:\nversion=520.60.13\n(\u7248\u672c\u770b\u81ea\u5df1nvidia\u9a71\u52a8\u7248\u672c\uff0c\u5426\u5219\u62a5\u9519\uff09\nyum -y install yum-utils\nyum-config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel7/x86_64/cuda-rhel7.repo\nyum install -y nvidia-fabric-manager-${version}-1\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ubuntu\uff1a\ndriver_version=525.60.13\n\ndriver_version_main=$(echo $driver_version | awk -F '.' '{print $1}')\n\n#nvidia-fabricmanager-\u540e\u9762525_525.60.13\nwget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/nvidia-fabricmanager-${driver_version_main}_${driver_version}-1_amd64.deb\n\ndpkg -i nvidia-fabricmanager-${driver_version_main}_${driver_version}-1_amd64.deb\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u542f\u52a8-nvidia-fabricmanager-\u670d\u52a1",children:"\u542f\u52a8 nvidia-fabricmanager \u670d\u52a1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"systemctl daemon-reload #\u5237\u65b0\u670d\u52a1\u914d\u7f6e\u6587\u4ef6\nsystemctl enable nvidia-fabricmanager\nsystemctl start nvidia-fabricmanager.service\n\u67e5\u770b nvidia-fabricmanager \u670d\u52a1\u72b6\u6001\nsystemctl status nvidia-fabricmanager\n"})})]})}function v(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var a=i(6540);const r={},t=a.createContext(r);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);