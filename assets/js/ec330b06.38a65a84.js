"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[2193],{2751:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(4848),t=r(8453);const s={},l=void 0,o={id:"k8s/k8s_studay",title:"k8s_studay",description:"1\u3001\u5bb9\u5668\u8fd0\u884c\u65f6",source:"@site/docs/k8s/2.k8s_studay.mdx",sourceDirName:"k8s",slug:"/k8s/k8s_studay",permalink:"/docs/k8s/k8s_studay",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/k8s/2.k8s_studay.mdx",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:173246975e4,sidebarPosition:2,frontMatter:{},sidebar:"k8s",next:{title:"helm",permalink:"/docs/k8s/helm"}},a={},d=[{value:"1\u3001\u5bb9\u5668\u8fd0\u884c\u65f6",id:"1\u5bb9\u5668\u8fd0\u884c\u65f6",level:2},{value:"1.1\u3001Kubernetes Support",id:"11kubernetes-support",level:3},{value:"2\u3001affinity\u4eb2\u548c\u6027",id:"2affinity\u4eb2\u548c\u6027",level:2},{value:"2.1\u3001food-match \u6848\u4f8b\u8bb2\u89e3",id:"21food-match-\u6848\u4f8b\u8bb2\u89e3",level:3},{value:"2.2\u3001\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b",id:"22\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b",level:3},{value:"3\u3001\u955c\u50cf\u64cd\u4f5c",id:"3\u955c\u50cf\u64cd\u4f5c",level:2},{value:"3.1\u3001\u62c9\u53d6\u6307\u5b9a\u5e73\u53f0\u7684\u955c\u50cf",id:"31\u62c9\u53d6\u6307\u5b9a\u5e73\u53f0\u7684\u955c\u50cf",level:3},{value:"3.2\u3001\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165",id:"32\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165",level:3},{value:"3.3\u3001\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165\u811a\u672c",id:"33\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165\u811a\u672c",level:3},{value:"4\u3001\u670d\u52a1\u8c03\u5ea6\u7b56\u7565",id:"4\u670d\u52a1\u8c03\u5ea6\u7b56\u7565",level:2},{value:"4.1\u3001\u56de\u6eda\u7b56\u7565",id:"41\u56de\u6eda\u7b56\u7565",level:3},{value:"5\u3001\u8282\u70b9\u7ef4\u62a4\u64cd\u4f5c",id:"5\u8282\u70b9\u7ef4\u62a4\u64cd\u4f5c",level:2},{value:"5.1\u3001\u6c61\u70b9\u6dfb\u52a0",id:"51\u6c61\u70b9\u6dfb\u52a0",level:3},{value:"5.2\u3001\u6c61\u70b9\u53d6\u6d88",id:"52\u6c61\u70b9\u53d6\u6d88",level:3},{value:"6\u3001\u8282\u70b9\u6eda\u52a8\u66f4\u65b0",id:"6\u8282\u70b9\u6eda\u52a8\u66f4\u65b0",level:2},{value:"6.1 rollout restart",id:"61-rollout-restart",level:3},{value:"6.2 maxUnavailable",id:"62-maxunavailable",level:3},{value:"7\u3001\u5b58\u50a8",id:"7\u5b58\u50a8",level:2},{value:"7.1\u3001emptyDir",id:"71emptydir",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"1\u5bb9\u5668\u8fd0\u884c\u65f6",children:"1\u3001\u5bb9\u5668\u8fd0\u884c\u65f6"}),"\n",(0,i.jsx)(n.p,{children:"\u5bb9\u5668\u5728kubernetes\u4e2d\u51e0\u79cd\u573a\u666f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Docker \u4f5c\u4e3a k8s \u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u8c03\u7528\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.li,{children:"kubelet --\x3e docker shim \uff08\u5728 kubelet \u8fdb\u7a0b\u4e2d\uff09 --\x3e dockerd --\x3e containerd"}),"\n",(0,i.jsx)(n.li,{children:"Containerd \u4f5c\u4e3a k8s \u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u8c03\u7528\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.li,{children:"kubelet --\x3e cri plugin\uff08\u5728 containerd \u8fdb\u7a0b\u4e2d\uff09 --\x3e containerd"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5bb9\u5668\u8fd0\u884c\u65f6\u8ddfk8s\u7684\u7248\u672c\u7684\u5bf9\u5e94\u5173\u7cfb\u53c2\u8003"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/containerd/containerd/blob/main/RELEASES.md#deprecated-features",children:"https://github.com/containerd/containerd/blob/main/RELEASES.md#deprecated-features"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/containerd/containerd/blob/main/docs/getting-started.md",children:"https://github.com/containerd/containerd/blob/main/docs/getting-started.md"})}),"\n",(0,i.jsx)(n.h3,{id:"11kubernetes-support",children:"1.1\u3001Kubernetes Support"}),"\n",(0,i.jsxs)(n.p,{children:["The Kubernetes version matrix represents the versions of containerd which are recommended for a Kubernetes release. Any actively supported version of containerd may receive patches to fix bugs encountered in any version of Kubernetes, however, our recommendation is based on which versions have been the most thoroughly tested. See the ",(0,i.jsx)(n.a,{href:"https://testgrid.k8s.io/sig-node-containerd",children:"Kubernetes test grid"})," for the list of actively tested versions. Kubernetes only supports n-3 minor release versions and containerd will ensure there is always a supported version of containerd for every supported version of Kubernetes."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Kubernetes Version"}),(0,i.jsx)(n.th,{children:"containerd Version"}),(0,i.jsx)(n.th,{children:"CRI Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.26"}),(0,i.jsx)(n.td,{children:"1.7.0+, 1.6.15+"}),(0,i.jsx)(n.td,{children:"v1, v1alpha2 **"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.27"}),(0,i.jsx)(n.td,{children:"1.7.0+, 1.6.15+"}),(0,i.jsx)(n.td,{children:"v1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.28"}),(0,i.jsx)(n.td,{children:"1.7.0+, 1.6.15+"}),(0,i.jsx)(n.td,{children:"v1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.29"}),(0,i.jsx)(n.td,{children:"1.7.11+, 1.6.27+"}),(0,i.jsx)(n.td,{children:"v1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.30"}),(0,i.jsx)(n.td,{children:"2.0(wip), 1.7.13+, 1.6.28+"}),(0,i.jsx)(n.td,{children:"v1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1.31"}),(0,i.jsx)(n.td,{children:"2.0(wip), 1.7.20+, 1.6.34+"}),(0,i.jsx)(n.td,{children:"v1"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"2affinity\u4eb2\u548c\u6027",children:"2\u3001affinity\u4eb2\u548c\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u73b0\u5bf9Pod\u5747\u8861\u7684\u8c03\u5ea6\u5230\u67d0\u4e9b\u8282\u70b9"}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u5bf9\u8282\u70b9\u6dfb\u52a0\u6c61\u70b9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'  template:\r\n    metadata:\r\n      creationTimestamp: null\r\n      labels:\r\n        app: topo-dep\r\n\r\n# \u8f6f\u6027\u8981\u6c42\r\n# \u5982\u679c\u8282\u70b9\u4e0a\u7684pod\u6807\u7b7e\u5b58\u5728\u6ee1\u8db3app=topo-dep\uff0c\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230\u8282\u70b9\u4e0a\uff0c\u5c3d\u53ef\u80fd\u5148\u90e8\u7f72\u5230\u5176\u5b83\u8282\u70b9\uff0c\u5982\u679c\u6ca1\u6709\u6ee1\u8db3\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230\u6b64\u8282\u70b9\r\n    spec:\r\n      affinity:                  \r\n        podAntiAffinity:             #pod\u53cd\u4eb2\u548c\r\n          preferredDuringSchedulingIgnoredDuringExecution:\r\n          - weight: 100              #\u6839\u636e\u6743\u91cd\u5206\u914d\r\n            podAffinityTerm:\r\n              labelSelector:\r\n                matchExpressions:\r\n                - key: "app"        #\u5bf9\u4e8eapp=topo-dep\u7684pod\u5c3d\u91cf\u4e0d\u8c03\u5ea6\u5230\u8be5\u8282\u70b9\r\n                  operator: In\r\n                  values: \r\n                  - topo-dep\r\n              topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\u662f\u8f6f\u6027\u8981\u6c42\uff0c\u53ef\u4ee5\u914d\u7f6e\u786c\u6027\u8981\u6c42"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'# \u786c\u6027\u8981\u6c42\r\n# \u5982\u679c\u8282\u70b9\u4e0a\u7684pod\u6807\u7b7e\u5b58\u5728\u6ee1\u8db3app=nginx\uff0c\u5219\u4e0d\u80fd\u90e8\u7f72\u5230\u8282\u70b9\u4e0a\r\n    spec:\r\n      affinity:\r\n        podAntiAffinity:\r\n          requiredDuringSchedulingIgnoredDuringExecution:\r\n          - labelSelector:\r\n              matchExpressions:\r\n              - key: app\r\n                operator: In\r\n                values:\r\n                - nginx\r\n            topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"21food-match-\u6848\u4f8b\u8bb2\u89e3",children:"2.1\u3001food-match \u6848\u4f8b\u8bb2\u89e3"}),"\n",(0,i.jsx)(n.p,{children:"\u5148\u7ed9\u670d\u52a1\u5668\u6dfb\u52a0lable"}),"\n",(0,i.jsx)(n.p,{children:"kubec label nodes sanjiu-uat-0001 node_app=sanjiu"}),"\n",(0,i.jsx)(n.p,{children:"kubec label nodes sanjiu-uat-0002 node_app=sanjiu"}),"\n",(0,i.jsx)(n.p,{children:"kubec label nodes sanjiu-uat-0003 node_app=sanjiu"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u9700\u8981\u7ed9\u4e1a\u52a1\u5728\u90e8\u7f72\u7684\u65f6\u5019\u6dfb\u52a0label, \u6bd4\u5982\u7ed9deployment\u6587\u4ef6\u4e2d \u6dfb\u52a0 app=food-match"}),"\n",(0,i.jsx)(n.p,{children:"1.\u96c6\u7fa4\u65b0\u589e\u4e09\u4e2a\u8282\u70b9,sanjiu-uat-0001,sanjiu-uat-0002,sanjiu-uat-0003\uff0c\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e0d\u80fd\u8ba9\u5176\u4ed6\u670d\u52a1\u8c03\u5ea6\u8fc7\u6765"}),"\n",(0,i.jsx)(n.p,{children:"\u65b9\u6cd5\uff1a \u6dfb\u52a0\u6c61\u70b9"}),"\n",(0,i.jsxs)(n.p,{children:["kubectl taint nodes sanjiu-uat-0001 name=sanjiu",":NoSchedule"]}),"\n",(0,i.jsxs)(n.p,{children:["kubectl taint nodes sanjiu-uat-0002 name=sanjiu",":NoSchedule"]}),"\n",(0,i.jsxs)(n.p,{children:["kubectl taint nodes sanjiu-uat-0003 name=sanjiu",":NoSchedule"]}),"\n",(0,i.jsx)(n.p,{children:"deploy\u6587\u4ef6\u53c2\u8003\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'      tolerations:   #\u5bb9\u5fcd\u6c61\u70b9\r\n      - key: name\r\n        value: sanjiu\r\n        effect: NoSchedule\t\r\n      nodeSelector:  #\u9009\u62e9node\u5e26\u6807\u7b7e\u7684\u8282\u70b9\r\n        node_app: sanjiu\r\n      affinity:\r\n        podAntiAffinity: #pod\u53cd\u4eb2\u548c\r\n          preferredDuringSchedulingIgnoredDuringExecution:\r\n          - weight: 100\r\n            podAffinityTerm:\r\n              labelSelector:\r\n                matchExpressions:\r\n                - key: "app"      #\u5bf9\u4e8eapp=food-match\u8fdb\u884c\u53cd\u4eb2\u548c\uff0c\u5c31\u662f\u4e00\u4e2a\u8282\u70b9\u5c3d\u91cf\u4e00\u4e2apod\r\n                  operator: In\r\n                  values: \r\n                  - food-match\r\n              topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,i.jsx)(n.p,{children:"2.\u5148\u8c03\u5ea6\u5230sanjiu-uat-0001,sanjiu-uat-0002\uff0c\u5404\u4e00\u4e2aPod\uff0c\u4f46\u662f\u4e0d\u80fd\u8c03\u5ea6\u5230sanjiu-uat-0003"}),"\n",(0,i.jsx)(n.p,{children:"\u65b9\u6cd5:\r\n\u5728sanjiu-uat-0003\u6267\u884c\r\nkubec label nodes sanjiu-uat-0003 node_app=sanjiu-"}),"\n",(0,i.jsx)(n.p,{children:"deploy\u6587\u4ef6\u53c2\u8003\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'      tolerations:\r\n      - key: name\r\n        value: sanjiu\r\n        effect: NoSchedule\t\r\n      nodeSelector:\r\n        node_app: sanjiu\r\n      affinity:\r\n        podAntiAffinity:\r\n          preferredDuringSchedulingIgnoredDuringExecution:\r\n          - weight: 100\r\n            podAffinityTerm:\r\n              labelSelector:\r\n                matchExpressions:\r\n                - key: "app"\r\n                  operator: In\r\n                  values: \r\n                  - food-match\r\n              topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u200b"}),"\n",(0,i.jsx)(n.p,{children:"3.\u8c03\u5ea6\u5230sanjiu-uat-0001,sanjiu-uat-0002\uff0csanjiu-uat-0003\u5404\u4e00\u4e2aPod\r\n\u65b9\u6cd5:\r\n\u5728sanjiu-uat-0003\u6267\u884c\r\nkubec label nodes sanjiu-uat-0003 node_app=sanjiu-"}),"\n",(0,i.jsx)(n.p,{children:"deploy\u6587\u4ef6\u53c2\u8003\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'      tolerations:\r\n      - key: name\r\n        value: sanjiu\r\n        effect: NoSchedule\t\r\n      nodeSelector:\r\n        node_app: sanjiu\r\n      affinity:\r\n        podAntiAffinity:\r\n          preferredDuringSchedulingIgnoredDuringExecution:\r\n          - weight: 100\r\n            podAffinityTerm:\r\n              labelSelector:\r\n                matchExpressions:\r\n                - key: "app"\r\n                  operator: In\r\n                  values: \r\n                  - food-match\r\n              topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,i.jsx)(n.p,{children:"#io.rancher.scheduler.global: 'true'\r\n#io.rancher.scheduler.affinity:host_label: node=foodmatch"}),"\n",(0,i.jsx)(n.h3,{id:"22\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b",children:"2.2\u3001\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"ai-api/ai-admin"}),"\n",(0,i.jsx)(n.p,{children:"\u5747\u8861\u7684\u8c03\u5ea6\u6bcf\u4e2a\u8282\u70b9-pod\u53cd\u4eb2\u548c(\u8f6f)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"  \r\n    spec:    \r\n\t  nodeSelector:\r\n        node_app: sanjiu\r\n      tolerations:\r\n      - key: name\r\n        value: sanjiu\r\n        effect: NoSchedule \r\n      affinity:\r\n        podAntiAffinity:\r\n          preferredDuringSchedulingIgnoredDuringExecution:\r\n          - weight: 100\r\n            podAffinityTerm:\r\n              labelSelector:\r\n                matchExpressions:\r\n                - key: app\r\n                  operator: In\r\n                  values: \r\n                  - health-cloud-ai-activity-api\r\n              topologyKey: kubernetes.io/hostname\r\n\t\t\t  \n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5747\u8861\u7684\u8c03\u5ea6\u6bcf\u4e2a\u8282\u70b9-pod\u53cd\u4eb2\u548c(\u786c-\u8282\u70b9\u4e0a\u7684pod\u6807\u7b7e\u5b58\u5728\u6ee1\u8db3app=health-cloud-ai-activity-api\uff0c\u5219\u4e0d\u80fd\u90e8\u7f72\u5230\u8282\u70b9\u4e0a)\r\n\u90e8\u7f72\u5b9e\u4f8b\u6570\u9700\u8981\u5c0f\u4e8e\u5339\u914d\u6c61\u70b9\u7684\u56fa\u5b9a\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:' spec:\r\n      nodeSelector:\r\n        node_app: sanjiu\r\n      tolerations:\r\n      - key: name\r\n        value: sanjiu\r\n        effect: NoSchedule\r\n      affinity:\r\n        podAntiAffinity:\r\n          requiredDuringSchedulingIgnoredDuringExecution:\r\n          - labelSelector:\r\n              matchExpressions:\r\n              - key: app\r\n                operator: In\r\n                values: \r\n                - health-cloud-ai-activity-api\r\n            topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679cpod\u5b9e\u4f8b\u6570\u8ddf\u9700\u8981\u7ed1\u5b9a\u7684\u8282\u70b9\u6570\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u6b21\u90e8\u7f72\u6ca1\u6709\u95ee\u9898\uff0c\u5982\u679c\u9700\u8981\u66f4\u65b0\u5347\u7ea7\uff0c\u90a3\u4e48\u9700\u8981\u6709\u591a\u4f59\u5339\u914d\u7684\u8282\u70b9\u6570\uff0c\u5426\u5219\u4f1apending, \u56e0\u4e3a\u6eda\u52a8\u66f4\u65b0\u4e0d\u4f1a\u9996\u6b21\u5220\u9664\u8282\u70b9\uff0c\u6240\u4ee5\u4f1a\u989d\u5916\u7684\u7b5b\u9009\u8d44\u6e90\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u66f4\u65b0\u7b56\u7565\u6765\u5b9e\u73b0\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u5c31\u662f\u4fdd\u8bc1\u6253\u4e86\u6c61\u70b9\u7684\u8282\u70b9\u80fd\u591f\u6309\u7167\u671f\u671b\u7684\u503c\u53bb\u90e8\u7f72\u4e00\u4e2a\u8282\u70b9\uff0c\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u5220\u966430%\u7684pod\uff0c\u7136\u540e\u9010\u4e00\u66f4\u65b0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\r\n strategy:\r\n   type: RollingUpdate\r\n   rollingUpdate:\r\n     maxSurge: 0\r\n     maxUnavailable: 30%\r\n selector:\r\n   matchLabels:\r\n     app: topo-dep\r\n template:\r\n   metadata:\r\n     creationTimestamp: null\r\n     labels:\r\n       app: topo-dep\r\n   spec:\r\n     nodeSelector:\r\n       node_app: sanjiu\r\n     tolerations:\r\n     - key: name\r\n       value: sanjiu\r\n       effect: NoSchedule\r\n     affinity:\r\n       podAntiAffinity:\r\n         requiredDuringSchedulingIgnoredDuringExecution:\r\n         - labelSelector:\r\n             matchExpressions:\r\n             - key: app\r\n               operator: In\r\n               values: \r\n               - topo-dep\r\n           topologyKey: "kubernetes.io/hostname"\n'})}),"\n",(0,i.jsx)(n.p,{children:"maxSurge\uff1a  \u6307\u5b9a\u5347\u7ea7\u671f\u95f4\u5b58\u5728\u7684\u603bPod\u5bf9\u8c61\u6570\u91cf\u6700\u591a\u4ee5\u8d85\u51fa\u671f\u671b\u503c\u7684\u4e2a\u6570\uff0c\u5176\u503c\u53ef\u4ee5\u4e3a0\u6216\u8005\u6b63\u6574\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u671f\u671b\u503c\u7684\u767e\u5206\u6bd4\uff1a\u4f8b\u5982\u5982\u679c\u671f\u671b\u503c\u662f3\uff0c\u5f53\u524d\u7684\u5c5e\u6027\u503c\u4e3a1\uff0c\u5219\u8868\u793aPod\u5bf9\u8c61\u7684\u603b\u6570\u4e0d\u80fd\u8d85\u8fc74\u4e2a\u3002\r\nmaxUnavailable\uff1a\u5347\u7ea7\u671f\u95f4\u6b63\u5e38\u53ef\u7528\u7684Pod\u526f\u672c\u6570\uff08\u5305\u62ec\u65b0\u65e7\u7248\u672c\uff09\u6700\u591a\u4e0d\u80fd\u4f4e\u4e8e\u671f\u671b\u7684\u4e2a\u6570\u3001\u5176\u503c\u53ef\u4ee5\u662f0\u6216\u8005\u6b63\u6574\u6570\u3002\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u671f\u671b\u503c\u7684\u767e\u5206\u6bd4\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff1b\u8be5\u503c\u610f\u5473\u7740\u5982\u679c\u671f\u671b\u503c\u662f3\uff0c\u90a3\u4e48\u5728\u5347\u7ea7\u671f\u95f4\u81f3\u5c11\u8981\u6709\u4e24\u4e2aPod\u5bf9\u8c61\u5904\u4e8e\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u7684\u72b6\u6001\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"maxSurge\u548cmaxUnavailable\u7684\u6570\u91cf\u4e0d\u80fd\u540c\u65f6\u4e3a0\uff0c\u5426\u5219Pod\u5bf9\u8c61\u7684\u590d\u672c\u6570\u91cf\u5728\u7b26\u5408\u7528\u6237\u671f\u671b\u7684\u6570\u91cf\u540e\u65e0\u6cd5\u505a\u51fa\u5408\u7406\u53d8\u52a8\u4ee5\u8fdb\u884c\u6eda\u52a8\u66f4\u65b0\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2003  \u914d\u7f6e\u65f6\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u4f7f\u7528 Deployment\u63a7\u5236\u5668\u7684 spec.min.Ready.Seconds\u5c5e\u6027\u6765\u63a7\u5236\u5e94\u7528\u5347\u7ea7\u7684\u901f\u5ea6\u3002\u65b0\u65e7\u66f4\u66ff\u8fc7\u7a0b\u4e2d\uff0c\u65b0\u521b\u5efa\u7684Pod\u5bf9\u8c61\u4e00\u65e6\u6210\u529f\u54cd\u5e94\u5c31\u7eea\u63a2\u6d4b\u5373\u88ab\u89c6\u4f5c\u53ef\u7528\uff0c\u800c\u540e\u5373\u53ef\u7acb\u5373\u5f00\u59cb\u4e0b\u4e00\u8f6e\u7684\u66ff\u6362\u64cd\u4f5c\u3002\u800c spec.minReady.Seconds\u80fd\u591f\u5b9a\u4e49\u5728\u65b0\u7684Pod\u5bf9\u8c61\u521b\u5efa\u540e\u81f3\u5c11\u8981\u7b49\u5f85\u591a\u4e45\u624d\u4f1a\u5c06\u5176\u89c6\u4f5c\u5c31\u7eea\uff0c\u5728\u6b64\u671f\u95f4\uff0c\u66f4\u65b0\u64cd\u4f5c\u4f1a\u88ab\u963b\u585e\u3002\u56e0\u6b64\uff0c\u5b83\u53ef\u4ee5\u7528\u6765\u8ba9 Kubernetes\u5728\u6bcf\u6b21\u521b\u5efa\u51faPod\u8d44\u6e90\u540e\u90fd\u8981\u7b49\u4e0a\u4e00\u6bb5\u65f6\u957f\u540e\u518d\u5f00\u59cb\u4e0b\u4e00\u8f6e\u7684\u66f4\u66ff\uff0c\u8fd9\u4e2a\u65f6\u95f4\u957f\u5ea6\u7684\u7406\u60f3\u503c\u662f\u7b49\u5230Pod\u5bf9\u8c61\u4e2d\u7684\u5e94\u7528\u5df2\u7ecf\u53ef\u4ee5\u63a5\u53d7\u5e76\u5904\u7406\u8bf7\u6c42\u6d41\u91cf\u3002\u4e8b\u5b9e\u4e0a\uff0c\u4e00\u4e2a\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u7b49\u5f85\u65f6\u957f\u548c\u5c31\u7eea\u6027\u63a2\u6d4b\u80fd\u8ba9 Kubernetes\u7cfb\u7edf\u89c4\u907f\u4e00\u90e8\u5206\u56e0\u7a0b\u5e8fBug\u800c\u5bfc\u81f4\u7684\u5347\u7ea7\u6545\u969c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"3\u955c\u50cf\u64cd\u4f5c",children:"3\u3001\u955c\u50cf\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.h3,{id:"31\u62c9\u53d6\u6307\u5b9a\u5e73\u53f0\u7684\u955c\u50cf",children:"3.1\u3001\u62c9\u53d6\u6307\u5b9a\u5e73\u53f0\u7684\u955c\u50cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docker pull --platform amd64  docker.io/calico/kube-controllers:v3.26.3\r\n#docker \u5bfc\u51fa\u7684tar\u5305\u652f\u6301ctr\u5bfc\u5165\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"#\u6e05\u7406\u6ca1\u6709\u4f7f\u7528\u7684\u955c\u50cf\r\nctr -n k8s.io image prune --all\n"})}),"\n",(0,i.jsx)(n.h3,{id:"32\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165",children:"3.2\u3001\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"#\u5bfc\u51fa\u955c\u50cf\r\nctr -n k8s.io image   export  pause.tar  registry.k8s.io/pause:3.9\r\n\r\n#\u5bfc\u5165\u955c\u50cf\r\nctr -n k8s.io image import feature.tar\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'[root@master nginx-demo]# kubectl patch deployments myapp-deployment -p \'{"spec":{"minReadySeconds":8}}\'\r\ndeployment.extensions/myapp-deployment patched (change)\r\n[root@master nginx-demo]# kubectl set image deployments myapp-deployment myapp=ikubernetes/myapp:v2\r\ndeployment.extensions/myapp-deployment image updated\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6eda\u52a8\u66f4\u65b0\u65f6\uff0c myapp-deploy\u63a7\u5236\u5668\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ReplicaSe\u63a7\u5236\u5668\u5bf9\u8c61\u6765\u7ba1\u63a7\u65b0\u7248\u672c\u7684Pod\u5bf9\u8c61\uff0c\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u65e7\u7248\u672c\u7684 Replicase\u4f1a\u4fdd\u7559\u5728\u5386\u53f2\u8bb0\u5f55\u4e2d\uff0c\u4f46\u5176\u6b64\u524d\u7684\u7ba1\u63a7Pod\u5bf9\u8c61\u5c06\u4f1a\u88ab\u5220\u9664\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~# kubectl  get replicasets -l app=topo-dep\r\nNAME                  DESIRED   CURRENT   READY   AGE\r\ntopo-dep-54b55fb587   2         2         2       105m\r\ntopo-dep-6b66c5b6c7   0         0         0       103m\r\nroot@k8s-master:~#  kubectl get pods -l app=topo-dep\r\nNAME                        READY   STATUS    RESTARTS   AGE\r\ntopo-dep-54b55fb587-74vxp   1/1     Running   0          42m\r\ntopo-dep-54b55fb587-vc2cp   1/1     Running   0          42m\n"})}),"\n",(0,i.jsx)(n.h3,{id:"33\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165\u811a\u672c",children:"3.3\u3001\u955c\u50cf\u5bfc\u51fa\u5bfc\u5165\u811a\u672c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'root@node4:~/img_node/img_node# cat img_export.sh \r\n#!/bin/bash\r\nimages=$(ctr -n=k8s.io image ls -q|egrep -v \'sha256\')\r\nfor image in $images; do\r\n    echo "Exporting $image..."\r\n    ctr -n=k8s.io image export "$(echo $image | tr \'/\' \'_\').tar" $image\r\ndone\r\nroot@node4:~/img_node/img_node# cat img_import.sh \r\n#!/bin/bash\r\nfiles=(*.tar)\r\nfor file in "${files[@]}"; do\r\n    echo "Importing $file..."\r\n    ctr -n=k8s.io image import "$file"\r\ndone\n'})}),"\n",(0,i.jsx)(n.h2,{id:"4\u670d\u52a1\u8c03\u5ea6\u7b56\u7565",children:"4\u3001\u670d\u52a1\u8c03\u5ea6\u7b56\u7565"}),"\n",(0,i.jsx)(n.h3,{id:"41\u56de\u6eda\u7b56\u7565",children:"4.1\u3001\u56de\u6eda\u7b56\u7565"}),"\n",(0,i.jsx)(n.p,{children:"kubectl rollout history \u68c0\u67e5Deployment\u90e8\u7f72\u5386\u53f2"}),"\n",(0,i.jsx)(n.p,{children:"kubectl rollout undo deployment/\u2026   --revision=2"}),"\n",(0,i.jsx)(n.p,{children:"\u6682\u505c\u7b56\u7565\r\nkubectl roollout pause deployment/\u2026"}),"\n",(0,i.jsx)(n.h2,{id:"5\u8282\u70b9\u7ef4\u62a4\u64cd\u4f5c",children:"5\u3001\u8282\u70b9\u7ef4\u62a4\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.h3,{id:"51\u6c61\u70b9\u6dfb\u52a0",children:"5.1\u3001\u6c61\u70b9\u6dfb\u52a0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl taint nodes sanjiu-uat-0001 name=sanjiu:NoSchedule\r\n\r\nkubectl taint nodes sanjiu-uat-0002 name=sanjiu:NoSchedule\r\n\r\nkubectl taint nodes sanjiu-uat-0003 name=sanjiu:NoSchedule\n"})}),"\n",(0,i.jsx)(n.h3,{id:"52\u6c61\u70b9\u53d6\u6d88",children:"5.2\u3001\u6c61\u70b9\u53d6\u6d88"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl taint nodes sanjiu-uat-0003 name=sanjiu:NoSchedule-\n"})}),"\n",(0,i.jsx)(n.h2,{id:"6\u8282\u70b9\u6eda\u52a8\u66f4\u65b0",children:"6\u3001\u8282\u70b9\u6eda\u52a8\u66f4\u65b0"}),"\n",(0,i.jsx)(n.h3,{id:"61-rollout-restart",children:"6.1 rollout restart"}),"\n",(0,i.jsx)(n.p,{children:"\u5148\u521b\u5efa\u51fa\u6765\uff0c\u5728\u5220\u9664\u8001\u7684"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl rollout restart deploy/tob-priv-xxxx    -n  tob-private   --context=xxxxxxxxx\n"})}),"\n",(0,i.jsx)(n.h3,{id:"62-maxunavailable",children:"6.2 maxUnavailable"}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u4e3a0\uff0c\u8868\u793a\u4e0d\u53ef\u7528\u6570\u4e3a0\uff0c\u5728\u5347\u7ea7\u671f\u95f4\uff0c\u5148\u521b\u5efa\u51fa\u6765\uff0c\u5728\u5220\u9664\u8001\u7684"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"maxUnavailable: 0\n"})}),"\n",(0,i.jsx)(n.h2,{id:"7\u5b58\u50a8",children:"7\u3001\u5b58\u50a8"}),"\n",(0,i.jsx)(n.h3,{id:"71emptydir",children:"7.1\u3001emptyDir"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728 ",(0,i.jsx)(n.code,{children:"Kubernetes"})," \u4e2d\u8fd0\u884c TGI\uff0c\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u521b\u5efa\u5377\uff0c\u5c06\u5171\u4eab\u5185\u5b58\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- name: shm\r\n  emptyDir:\r\n   medium: Memory\r\n   sizeLimit: 1Gi\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06\u5b83\u6302\u8f7d\u5230 ",(0,i.jsx)(n.code,{children:"/dev/shm"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"NCCL_SHM_DISABLE=1"})," \u73af\u5883\u53d8\u91cf\u7981\u7528SHM\u5171\u4eab\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);