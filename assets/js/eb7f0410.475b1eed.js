"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[1550],{3959:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var t=o(4848),i=o(8453);const r={},s=void 0,c={id:"Prometheus/prometheus/ServiceMoinitor",title:"ServiceMoinitor",description:"ServiceMonitor",source:"@site/docs/Prometheus/prometheus/3-ServiceMoinitor.md",sourceDirName:"Prometheus/prometheus",slug:"/Prometheus/prometheus/ServiceMoinitor",permalink:"/docs/Prometheus/prometheus/ServiceMoinitor",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Prometheus/prometheus/3-ServiceMoinitor.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:172935997e4,sidebarPosition:3,frontMatter:{},sidebar:"PrometheusServer",previous:{title:"prometheus\u6307\u6807",permalink:"/docs/Prometheus/prometheus/prometheus\u6307\u6807"}},l={},m=[{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"1\u3001\u901a\u8fc7ServiceMoinitor\u76d1\u63a7\u670d\u52a1",id:"1\u901a\u8fc7servicemoinitor\u76d1\u63a7\u670d\u52a1",level:3},{value:"1\u3001secret\u6587\u4ef6",id:"1secret\u6587\u4ef6",level:4},{value:"2\u3001\u521b\u5efa\u7aef\u70b9",id:"2\u521b\u5efa\u7aef\u70b9",level:4},{value:"3\u3001\u521b\u5efaServiceMonitor",id:"3\u521b\u5efaservicemonitor",level:4},{value:"4\u3001\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u6ca1\u6709\u751f\u6210target",id:"4\u521b\u5efa\u5b8c\u6210\u540e\u6ca1\u6709\u751f\u6210target",level:4}];function a(e){const n={code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"servicemonitor",children:"ServiceMonitor"}),"\n",(0,t.jsx)(n.h3,{id:"1\u901a\u8fc7servicemoinitor\u76d1\u63a7\u670d\u52a1",children:"1\u3001\u901a\u8fc7ServiceMoinitor\u76d1\u63a7\u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u7684\uff1a \u5b9e\u73b0etcd\u7684\u76d1\u63a7"}),"\n",(0,t.jsx)(n.h4,{id:"1secret\u6587\u4ef6",children:"1\u3001secret\u6587\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5728master\u8282\u70b9,\u9700\u8981\u521b\u5efa\u8fde\u63a5etcd\u7684secret\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl -n monitoring create secret generic etcd-certs --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.key --from-file=/etc/kubernetes/pki/etcd/ca.crt\n"})}),"\n",(0,t.jsx)(n.h4,{id:"2\u521b\u5efa\u7aef\u70b9",children:"2\u3001\u521b\u5efa\u7aef\u70b9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: etcd-k8s\n  namespace: kube-system\n  labels:\n    k8s-app: etcd\nspec:\n  type: ClusterIP\n  clusterIP: None\n  ports:\n    - name: port\n      port: 2379\n      protocol: TCP\n\n---\napiVersion: v1\nkind: Endpoints\nmetadata:\n  name: etcd-k8s\n  namespace: kube-system\n  labels:\n    k8s-app: etcd\nsubsets:\n  - addresses:\n      - ip: 10.51.10.61\n    ports:\n      - name: port\n        port: 2379\n        protocol: TCP\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u786e\u8ba4\u670d\u52a1\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@bj-master01-61:/apps/prometheus# kubectl get ep  -l k8s-app=etcd -n   kube-system --show-labels\nNAME       ENDPOINTS          AGE   LABELS\netcd-k8s   10.51.10.61:2379   47h   k8s-app=etcd\n"})}),"\n",(0,t.jsx)(n.h4,{id:"3\u521b\u5efaservicemonitor",children:"3\u3001\u521b\u5efaServiceMonitor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"root@bj-master01-61:/apps/prometheus# cat etcd-k8s.yaml\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: prometheus\n    meta.helm.sh/release-namespace: monitoring\n  name: etcd-k8s\n  namespace: monitoring\n  labels:\n    release: prometheus\nspec:\n  jobLabel: k8s-app\n  endpoints:\n    - port: port\n      interval: 30s\n      scheme: https\n      tlsConfig:\n        caFile: /etc/prometheus/secrets/etcd-certs/ca.crt\n        certFile: /etc/prometheus/secrets/etcd-certs/healthcheck-client.crt\n        keyFile: /etc/prometheus/secrets/etcd-certs/healthcheck-client.key\n        insecureSkipVerify: true\n  selector:\n    matchLabels:\n      k8s-app: etcd\n  namespaceSelector:\n    matchNames:\n      - kube-system\n"})}),"\n",(0,t.jsx)(n.h4,{id:"4\u521b\u5efa\u5b8c\u6210\u540e\u6ca1\u6709\u751f\u6210target",children:"4\u3001\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u6ca1\u6709\u751f\u6210target"}),"\n",(0,t.jsx)(n.p,{children:"\u95ee\u9898\u6392\u67e5\uff0c\u56e0\u4e3a\u662fkube-prometheus-stack\u90e8\u7f72\u7684prometheus,\u6240\u4ee5\u9700\u8981\u786e\u8ba4prometheus\u662f\u5982\u4f55\u53d1\u73b0Servicemonitor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"root@bj-master01-61:/apps/prometheus# kubectl  get crd\nNAME                                         CREATED AT\nalertmanagerconfigs.monitoring.coreos.com    2024-08-09T17:16:53Z\nalertmanagers.monitoring.coreos.com          2024-08-09T17:16:53Z\nciliumcidrgroups.cilium.io                   2024-07-13T16:29:38Z\nciliumclusterwidenetworkpolicies.cilium.io   2024-07-13T16:29:39Z\nciliumendpoints.cilium.io                    2024-07-13T16:29:38Z\nciliumexternalworkloads.cilium.io            2024-07-13T16:29:38Z\nciliumidentities.cilium.io                   2024-07-13T16:29:38Z\nciliuml2announcementpolicies.cilium.io       2024-07-13T16:29:38Z\nciliumloadbalancerippools.cilium.io          2024-07-13T16:29:38Z\nciliumnetworkpolicies.cilium.io              2024-07-13T16:29:39Z\nciliumnodeconfigs.cilium.io                  2024-07-13T16:29:38Z\nciliumnodes.cilium.io                        2024-07-13T16:29:38Z\nciliumpodippools.cilium.io                   2024-07-13T16:29:38Z\npodmonitors.monitoring.coreos.com            2024-08-09T17:16:53Z\nprobes.monitoring.coreos.com                 2024-08-09T17:16:53Z\nprometheusagents.monitoring.coreos.com       2024-08-09T17:16:53Z\nprometheuses.monitoring.coreos.com           2024-08-09T17:16:53Z\nprometheusrules.monitoring.coreos.com        2024-08-09T17:16:53Z\nscrapeconfigs.monitoring.coreos.com          2024-08-09T17:16:53Z\nservicemonitors.monitoring.coreos.com        2024-08-09T17:16:53Z\nthanosrulers.monitoring.coreos.com           2024-08-09T17:16:54Z\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u786e\u8ba4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"root@bj-master01-61:/apps/prometheus# kubectl  get  prometheuses.monitoring.coreos.com/prometheus-kube-prometheus-prometheus -n monitoring -o yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/202408122026209.png",alt:"image-20240812202611853"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ed6\u7684\u8d44\u6e90\u7c7b\u4f3c\u7684\u64cd\u4f5c"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);