"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[9457],{691:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(4848),t=n(8453);const s={},a=void 0,l={id:"DevOps/gitOps/Tekton-triggers",title:"Tekton-triggers",description:"Triggers\u4ecb\u7ecd",source:"@site/docs/DevOps/2-gitOps/6-Tekton-triggers.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/Tekton-triggers",permalink:"/en/docs/DevOps/gitOps/Tekton-triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/2-gitOps/6-Tekton-triggers.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1729360781e3,sidebarPosition:6,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"Tektion-Workspaces",permalink:"/en/docs/DevOps/gitOps/Tekton-workspace"}},o={},c=[{value:"Triggers\u4ecb\u7ecd",id:"triggers\u4ecb\u7ecd",level:2},{value:"triggers\u5b89\u88c5",id:"triggers\u5b89\u88c5",level:2},{value:"\u5b89\u88c5\u89e6\u53d1\u5668",id:"\u5b89\u88c5\u89e6\u53d1\u5668",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"triggers\u4ecb\u7ecd",children:"Triggers\u4ecb\u7ecd"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230910223545524",src:n(3816).A+"",width:"1342",height:"663"})}),"\n",(0,i.jsx)(r.p,{children:"Triggers \u540c\u6837\u901a\u8fc7\u4e0b\u9762\u7684\u51e0\u4e2a CRD \u5bf9\u8c61\u5bf9 Tekton \u8fdb\u884c\u4e86\u4e00\u4e9b\u6269\u5c55\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"TriggerTemplate"}),": \u521b\u5efa\u8d44\u6e90\u7684\u6a21\u677f\uff0c\u6bd4\u5982\u7528\u6765\u521b\u5efa ",(0,i.jsx)(r.code,{children:"PipelineResource"})," \u548c ",(0,i.jsx)(r.code,{children:"PipelineRun"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"TriggerBinding"}),": \u6821\u9a8c\u4e8b\u4ef6\u5e76\u63d0\u53d6\u76f8\u5173\u5b57\u6bb5\u5c5e\u6027"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"ClusterTriggerBinding"}),": \u548c ",(0,i.jsx)(r.code,{children:"TriggerBinding"})," \u7c7b\u4f3c\uff0c\u53ea\u662f\u662f\u5168\u5c40\u7684"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"Interceptor"}),": \u5904\u7406\u4e8b\u4ef6\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u6216\u8fc7\u6ee4\u7684\u62e6\u622a\u5668"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"EventListener"}),": \u8fde\u63a5 ",(0,i.jsx)(r.code,{children:"TriggerBinding"})," \u548c ",(0,i.jsx)(r.code,{children:"TriggerTemplate"})," \u5230\u4e8b\u4ef6\u63a5\u6536\u5668\uff0c\u4f7f\u7528\u4ece\u5404\u4e2a ",(0,i.jsx)(r.code,{children:"TriggerBinding"})," \u4e2d\u63d0\u53d6\u7684\u53c2\u6570\u6765\u521b\u5efa ",(0,i.jsx)(r.code,{children:"TriggerTemplate"})," \u4e2d\u6307\u5b9a\u7684 resources\uff0c\u540c\u6837\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"interceptor"})," \u5b57\u6bb5\u6765\u6307\u5b9a\u5916\u90e8\u670d\u52a1\u5bf9\u4e8b\u4ef6\u5c5e\u6027\u8fdb\u884c\u9884\u5904\u7406"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230910184456555",src:n(8897).A+"",width:"849",height:"339"})}),"\n",(0,i.jsx)(r.p,{children:"\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u89e6\u53d1\u5668\u5b9e\u73b0\u4ee5\u4e0b CI/CD \u5de5\u4f5c\u6d41\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Triggers \u76d1\u542c ",(0,i.jsx)(r.code,{children:"git commit"})," \u6216 ",(0,i.jsx)(r.code,{children:"git pull request"})," \u4e8b\u4ef6\u3002\u5f53\u68c0\u6d4b\u5230\u65f6\uff0c\u5b83\u4f1a\u4f7f\u7528\u63d0\u4ea4\u7684\u4ee3\u7801\u6267\u884c\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7684 ",(0,i.jsx)(r.code,{children:"Pipeline"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Triggers \u76d1\u542c\u6307\u793a\u6d4b\u8bd5\u6210\u529f\u5b8c\u6210\u7684 ",(0,i.jsx)(r.code,{children:"git push"})," \u4e8b\u4ef6\uff0c\u5f53\u5b83\u68c0\u6d4b\u5230\u65f6\uff0c\u5b83\u4f1a\u9a8c\u8bc1\u6d4b\u8bd5\u7684\u7ed3\u679c\u5e76\u6267\u884c\u6784\u5efa\u6d4b\u8bd5\u4ee3\u7801\u7684 ",(0,i.jsx)(r.code,{children:"Pipeline"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\u5f53\u5173\u8054\u7684 ",(0,i.jsx)(r.code,{children:"PipelineRun"})," \u6267\u884c\u5b8c\u6210\u65f6\uff0cTriggers \u68c0\u67e5\u6784\u5efa\u7684\u7ed3\u679c\uff0c\u5982\u679c\u6210\u529f\uff0c\u5219\u6267\u884c\u4e00\u4e2a ",(0,i.jsx)(r.code,{children:"Task"}),"\uff0c\u5c06\u6784\u5efa\u7ed3\u679c\u4e0a\u4f20\u5230\u5bf9\u5e94\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\u6700\u540e\uff0cDocker registry \u53d1\u9001\u4e00\u4e2a\u4e8b\u4ef6\u5230 ",(0,i.jsx)(r.code,{children:"Pub/Sub"}),"\uff0c\u8be5\u4e8b\u4ef6\u89e6\u53d1\u4e00\u4e2a\u5c06\u6784\u5efa\u955c\u50cf\u63a8\u9001\u5230 staging \u73af\u5883\u7684 ",(0,i.jsx)(r.code,{children:"Pipeline"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"triggers\u5b89\u88c5",children:"triggers\u5b89\u88c5"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://github.com/tektoncd/triggers/blob/main/releases.md",children:"https://github.com/tektoncd/triggers/blob/main/releases.md"})}),"\n",(0,i.jsx)(r.p,{children:"\u8fd9\u91cc\u6211\u4f7f\u7528\u7684\u662fv0.22.2\u7248\u672c"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"kubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.2/release.yaml\r\nkubectl apply -f https://storage.googleapis.com/tekton-releases/triggers/previous/v0.22.2/interceptors.yaml\n"})}),"\n",(0,i.jsx)(r.p,{children:"kubernetes\u96c6\u7fa4\u7248\u672c: v1.23.6"}),"\n",(0,i.jsx)(r.p,{children:"Triggers\u7248\u672c: 0.22.2"}),"\n",(0,i.jsx)(r.p,{children:"\u56e0\u4e3a\u7f51\u7edc\u539f\u56e0\uff0c\u6211\u5df2\u7ecf\u540c\u6b65\u5230\u963f\u91cc\u4e91\uff0c\u6839\u636e\u4e0a\u9762\u7248\u672c\u8fdb\u884c\u66ff\u6362\u4e0b\u9762\u7248\u672c\u5373\u53ef"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:'image: "registry.cn-hangzhou.aliyuncs.com/zlq_registry/interceptors:v0.22.2"\r\nimage: "registry.cn-hangzhou.aliyuncs.com/zlq_registry/controller:v0.22.2"\r\nregistry.cn-hangzhou.aliyuncs.com/zlq_registry/eventlistenersink:v0.22.2\r\n\r\nimage: "registry.cn-hangzhou.aliyuncs.com/zlq_registry/webhook:v0.22.2"\n'})}),"\n",(0,i.jsx)(r.p,{children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"https://www.zlqit.com/devops/kubernetes/tekton/release.yaml\r\nhttps://www.zlqit.com/devops/kubernetes/tekton/interceptors.yaml\n"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230910180912288",src:n(9767).A+"",width:"1178",height:"896"})}),"\n",(0,i.jsx)(r.p,{children:"\u5b89\u88c5"}),"\n",(0,i.jsxs)(r.p,{children:["\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b Triggers \u7684\u76f8\u5173\u7ec4\u4ef6\u5b89\u88c5\u72b6\u6001\uff0c\u76f4\u5230\u90fd\u4e3a ",(0,i.jsx)(r.code,{children:"Running"})," \u72b6\u6001\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-triggers# kubectl  get pods -n tekton-pipelines\r\nNAME                                                 READY   STATUS    RESTARTS        AGE\r\ntekton-dashboard-86dc7648d5-gjx6q                    1/1     Running   9 (126m ago)    7d20h\r\ntekton-pipelines-controller-6bcb64d9b9-stpbm         1/1     Running   23 (128m ago)   21d\r\ntekton-pipelines-webhook-787486d884-x2v7b            1/1     Running   21 (125m ago)   21d\r\ntekton-triggers-controller-74dccbdd79-md6sb          1/1     Running   0               13m\r\ntekton-triggers-core-interceptors-579b9cd556-d6n96   1/1     Running   0               9m6s\r\ntekton-triggers-webhook-86d487889-rs4t6              1/1     Running   0               13m\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u73b0\u5728\u6211\u4eec\u6765\u5c06\u524d\u9762\u7684 Jenkins Pipeline \u6d41\u6c34\u7ebf\u8f6c\u6362\u6210\u4f7f\u7528 Tekton \u6765\u6784\u5efa\uff0c\u4ee3\u7801\u6211\u4eec\u5df2\u7ecf\u63a8\u9001\u5230\u4e86\u79c1\u6709\u4ed3\u5e93 GitLab\uff0c\u5730\u5740\u4e3a\uff1a",(0,i.jsx)(r.a,{href:"https://gitee.com/zhang_lai_qiang/golang-test.git%E3%80%82",children:"https://gitee.com/zhang_lai_qiang/golang-test.git\u3002"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u9996\u5148\u6211\u4eec\u9700\u8981\u5b8c\u6210\u89e6\u53d1\u5668\u7684\u914d\u7f6e\uff0c\u5f53\u6211\u4eec\u63d0\u4ea4\u6e90\u4ee3\u7801\u5230 GitLab \u7684\u65f6\u5019\uff0c\u9700\u8981\u89e6\u53d1 Tekton \u7684\u4efb\u52a1\u8fd0\u884c\uff0c\u6240\u4ee5\u9996\u5148\u9700\u8981\u5b8c\u6210\u8fd9\u4e2a\u89e6\u53d1\u5668\u3002\u8fd9\u91cc\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u8fd9\u4e2a\u8d44\u6e90\u5bf9\u8c61\u6765\u5b8c\u6210\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(r.code,{children:"gitlab-listener"})," \u7684 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u8d44\u6e90\u5bf9\u8c61\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(r.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e9b\u62e6\u622a\u5668\u7684\u8d44\u6e90"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-triggers# kubectl  get clusterinterceptor\r\nNAME        AGE\r\nbitbucket   3h3m\r\ncel         3h3m\r\ngithub      3h3m\r\ngitlab      3h3m\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u5b89\u88c5\u89e6\u53d1\u5668",children:"\u5b89\u88c5\u89e6\u53d1\u5668"}),"\n",(0,i.jsxs)(r.p,{children:["\u9996\u5148\u6211\u4eec\u9700\u8981\u5b8c\u6210\u89e6\u53d1\u5668\u7684\u914d\u7f6e\uff0c\u5f53\u6211\u4eec\u63d0\u4ea4\u6e90\u4ee3\u7801\u5230 GitLab \u7684\u65f6\u5019\uff0c\u9700\u8981\u89e6\u53d1 Tekton \u7684\u4efb\u52a1\u8fd0\u884c\uff0c\u6240\u4ee5\u9996\u5148\u9700\u8981\u5b8c\u6210\u8fd9\u4e2a\u89e6\u53d1\u5668\u3002\u8fd9\u91cc\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u8fd9\u4e2a\u8d44\u6e90\u5bf9\u8c61\u6765\u5b8c\u6210\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(r.code,{children:"gitlab-listener"})," \u7684 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u8d44\u6e90\u5bf9\u8c61\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(r.p,{children:"\u200b"}),"\n",(0,i.jsx)(r.p,{children:"root@k8s-master:~/tekton/demo/pipline-triggers# cat ~/markdown.md"}),"\n",(0,i.jsx)(r.p,{children:"event-listener-rbac.yaml"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'apiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: tekton-triggers-gitlab-sa\r\nsecrets:\r\n  - name: gitlab-auth\r\n  - name: gitlab-secret\r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: Role\r\nmetadata:\r\n  name: tekton-triggers-gitlab-minimal\r\nrules:\r\n  # EventListeners need to be able to fetch all namespaced resources\r\n  - apiGroups: ["triggers.tekton.dev"]\r\n    resources:\r\n      ["eventlisteners", "triggerbindings","interceptors","triggertemplates", "triggers"]\r\n    verbs: ["get", "list", "watch"]\r\n  - apiGroups: [""]\r\n    # configmaps is needed for updating logging config\r\n    resources: ["configmaps"]\r\n    verbs: ["get", "list", "watch"]\r\n  # Permissions to create resources in associated TriggerTemplates\r\n  - apiGroups: ["tekton.dev"]\r\n    resources: ["pipelineruns", "pipelineresources", "taskruns"]\r\n    verbs: ["create"]\r\n  - apiGroups: [""]\r\n    resources: ["serviceaccounts"]\r\n    verbs: ["impersonate"]\r\n  - apiGroups: ["policy"]\r\n    resources: ["podsecuritypolicies"]\r\n    resourceNames: ["tekton-triggers"]\r\n    verbs: ["use"]\r\n  - apiGroups: ["interceptors.triggers.tekton.dev"]\r\n    resources:\r\n      ["eventlisteners", "triggerbindings", "triggertemplates", "interceptors"]\r\n    verbs: ["get", "list", "watch"]    \r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: RoleBinding\r\nmetadata:\r\n  name: tekton-triggers-gitlab-binding\r\nsubjects:\r\n  - kind: ServiceAccount\r\n    name: tekton-triggers-gitlab-sa\r\nroleRef:\r\n  apiGroup: rbac.authorization.k8s.io\r\n  kind: Role\r\n  name: tekton-triggers-gitlab-minimal\r\n---\r\nkind: ClusterRole\r\napiVersion: rbac.authorization.k8s.io/v1\r\nmetadata:\r\n  name: tekton-triggers-gitlab-clusterrole\r\nrules:\r\n  # EventListeners need to be able to fetch any clustertriggerbindings\r\n  - apiGroups: ["triggers.tekton.dev"]\r\n    resources: ["clustertriggerbindings", "clusterinterceptors"]\r\n    verbs: ["get", "list", "watch"]\r\n  - apiGroups: ["interceptors.triggers.tekton.dev"]\r\n    resources:\r\n      ["eventlisteners", "triggerbindings", "triggertemplates", "interceptors"]\r\n    verbs: ["get", "list", "watch"]\r\n\r\n---\r\napiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRoleBinding\r\nmetadata:\r\n  name: tekton-triggers-gitlab-clusterbinding\r\nsubjects:\r\n  - kind: ServiceAccount\r\n    name: tekton-triggers-gitlab-sa\r\n    namespace: default\r\nroleRef:\r\n  apiGroup: rbac.authorization.k8s.io\r\n  kind: ClusterRole\r\n  name: tekton-triggers-gitlab-clusterrole\n'})}),"\n",(0,i.jsxs)(r.p,{children:["\u73b0\u5728\u6211\u4eec\u6765\u5c06\u524d\u9762\u7684 Jenkins Pipeline \u6d41\u6c34\u7ebf\u8f6c\u6362\u6210\u4f7f\u7528 Tekton \u6765\u6784\u5efa\uff0c\u4ee3\u7801\u6211\u4eec\u5df2\u7ecf\u63a8\u9001\u5230\u4e86\u79c1\u6709\u4ed3\u5e93 GitLab\uff0c\u5730\u5740\u4e3a\uff1a",(0,i.jsx)(r.code,{children:"http://git.k8s.local/course/devops-demo.git"}),"\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u9996\u5148\u6211\u4eec\u9700\u8981\u5b8c\u6210\u89e6\u53d1\u5668\u7684\u914d\u7f6e\uff0c\u5f53\u6211\u4eec\u63d0\u4ea4\u6e90\u4ee3\u7801\u5230 GitLab \u7684\u65f6\u5019\uff0c\u9700\u8981\u89e6\u53d1 Tekton \u7684\u4efb\u52a1\u8fd0\u884c\uff0c\u6240\u4ee5\u9996\u5148\u9700\u8981\u5b8c\u6210\u8fd9\u4e2a\u89e6\u53d1\u5668\u3002\u8fd9\u91cc\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u8fd9\u4e2a\u8d44\u6e90\u5bf9\u8c61\u6765\u5b8c\u6210\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(r.code,{children:"gitlab-listener"})," \u7684 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u8d44\u6e90\u5bf9\u8c61\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(r.p,{children:"gitee-push-listener.yaml"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"# gitlab-push-listener.yaml\r\napiVersion: triggers.tekton.dev/v1beta1\r\nkind: EventListener\r\nmetadata:\r\n  name: gitlab-listener # \u8be5\u4e8b\u4ef6\u76d1\u542c\u5668\u4f1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a el-gitlab-listener \u7684Service\u5bf9\u8c61\r\nspec:\r\n  serviceAccountName: tekton-triggers-gitlab-sa \r\n  triggers:\r\n    - name: gitlab-push-events-trigger\r\n      interceptors:\r\n        - ref:\r\n            name: gitlab\r\n          params:\r\n            - name: secretRef # \u5f15\u7528 gitlab-secret \u7684 Secret \u5bf9\u8c61\u4e2d\u7684 secretToken \u7684\u503c\r\n              value:\r\n                secretName: gitlab-secret\r\n                secretKey: secretToken\r\n            - name: eventTypes\r\n              value:\r\n                - Push Hook # \u53ea\u63a5\u6536 GitLab Push \u4e8b\u4ef6\r\n      bindings:\r\n        - ref: devops-demo-binding\r\n      template:\r\n        ref: devops-demo-template\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u7531\u4e8e ",(0,i.jsx)(r.code,{children:"EventListener"})," \u521b\u5efa\u5b8c\u6210\u540e\u4f1a\u751f\u6210\u4e00\u4e2a Listener \u7684\u670d\u52a1\uff0c\u7528\u6765\u5bf9\u5916\u66b4\u9732\u7528\u4e8e\u63a5\u6536\u4e8b\u4ef6\u54cd\u5e94\uff0c\u6bd4\u5982\u4e0a\u9762\u6211\u4eec\u521b\u5efa\u7684\u5bf9\u8c61\u540d\u4e3a ",(0,i.jsx)(r.code,{children:"gitlab-listener"}),"\uff0c\u521b\u5efa\u5b8c\u6210\u540e\u4f1a\u751f\u6210\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(r.code,{children:"el-gitlab-listener"})," \u7684 Service \u5bf9\u8c61\uff0c\u7531\u4e8e\u6211\u4eec GitLab \u672c\u8eab\u5c31\u5728\u96c6\u7fa4\u5185\u90e8\uff0c\u6240\u4ee5\u6211\u4eec\u7528 Service \u7684 DNS \u5f62\u5f0f\u6765\u8bbf\u95ee ",(0,i.jsx)(r.code,{children:"EventListener"})," \u5373\u53ef\uff0c\u5982\u679c\u4f60\u60f3\u66b4\u9732\u5230\u96c6\u7fa4\u5916\u90e8\u5219\u53ef\u4ee5\u4f7f\u7528 NodePort \u6216\u8005 Ingress \u7684\u5f62\u5f0f\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\u5728\u4e0a\u9762\u7684 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u5bf9\u8c61\u4e2d\u6211\u4eec\u6dfb\u52a0\u4e86 ",(0,i.jsx)(r.code,{children:"interceptors"})," \u5c5e\u6027\uff0c\u5176\u4e2d\u6709\u4e00\u4e2a\u5185\u7f6e\u7684 ",(0,i.jsx)(r.code,{children:"gitlab"})," \u62e6\u622a\u5668\uff0cGitLab \u62e6\u622a\u5668\u5305\u542b\u9a8c\u8bc1\u548c\u8fc7\u6ee4\u6765\u81ea GitLab \u7684\u8bf7\u6c42\u903b\u8f91\uff0c \u6bd4\u5982\u6211\u4eec\u53ef\u4ee5\u914d\u7f6e WebHook \u7684 ",(0,i.jsx)(r.code,{children:"Secret Token"}),"\uff0c\u53ef\u4ee5\u901a\u8fc7 Secret \u5bf9\u8c61\u5f15\u5165\u8fdb\u6765\uff1a"]}),"\n",(0,i.jsxs)(r.p,{children:["\u5bf9\u5e94\u7684 Secret \u8d44\u6e90\u5bf9\u8c61\u5982\u4e0b\u6240\u793a\uff0c\u4e00\u4e2a\u7528\u4e8e WebHook \u7684 ",(0,i.jsx)(r.code,{children:"Secret Token"}),"\uff0c\u53e6\u5916\u4e00\u4e2a\u662f\u7528\u4e8e GitLab \u767b\u5f55\u8ba4\u8bc1\u4f7f\u7528\u7684\uff1a"]}),"\n",(0,i.jsx)(r.p,{children:"secret-gitlab.yaml"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'apiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: gitlab-secret\r\ntype: Opaque\r\nstringData:\r\n  secretToken: "1234567"\n'})}),"\n",(0,i.jsx)(r.p,{children:"secret.yaml"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: gitlab-auth\r\n  annotations:\r\n    tekton.dev/git-0: http://gitlab.kube-ops.svc.cluster.local # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: root\r\n  password: admin321\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u8fd9\u6837\u5c31\u53ef\u4ee5\u5c06 ",(0,i.jsx)(r.code,{children:"TriggerBinding"})," \u4e2d\u7684\u53c2\u6570\u4f20\u9012\u5230 ",(0,i.jsx)(r.code,{children:"TriggerTemplate"})," \u5bf9\u8c61\u4e2d\u8fdb\u884c\u6a21\u677f\u5316\u3002\u6bd4\u5982\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u5982\u4e0b\u6240\u793a\u7684 ",(0,i.jsx)(r.code,{children:"TriggerBinding"})," \u5bf9\u8c61\uff1a"]}),"\n",(0,i.jsx)(r.p,{children:"TriggerBinding.yaml"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: triggers.tekton.dev/v1beta1\r\nkind: TriggerBinding\r\nmetadata:\r\n  name: devops-demo-binding\r\nspec:\r\n  params:\r\n    - name: gitrevision\r\n      value: $(body.checkout_sha)\r\n    - name: gitrepositoryurl\r\n      value: $(body.repository.git_http_url)\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\u53c2\u6570\u7684\u503c\u6211\u4eec\u662f\u901a\u8fc7\u8bfb\u53d6 ",(0,i.jsx)(r.code,{children:"GitLab WebHook"})," \u53d1\u9001\u8fc7\u6765\u7684\u6570\u636e\u503c\uff0c\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"$()"})," \u5305\u88f9\u7684 JSONPath \u8868\u8fbe\u5f0f\u6765\u63d0\u53d6\u7684\uff0c\u5173\u4e8e\u8868\u8fbe\u5f0f\u7684\u66f4\u591a\u7528\u6cd5\u53ef\u4ee5\u67e5\u770b",(0,i.jsx)(r.a,{href:"https://github.com/tektoncd/triggers/blob/master/docs/triggerbindings.md#event-variable-interpolation",children:"\u5b98\u65b9\u6587\u6863\u8bf4\u660e"}),"\uff0c\u81f3\u4e8e\u80fd\u591f\u63d0\u53d6\u54ea\u4e9b\u53c2\u6570\u503c\uff0c\u5219\u53ef\u4ee5\u67e5\u770b WebHook \u7684\u8bf4\u660e\uff0c\u6bd4\u5982\u8fd9\u91cc\u6211\u4eec\u662f GitLab Webhook \u7684 ",(0,i.jsx)(r.code,{children:"Push Hook"}),"\uff0c\u5bf9\u5e94\u7684\u8bf7\u6c42\u4f53\u6570\u636e\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:'{\r\n  "object_kind": "push",\r\n  "before": "95790bf891e76fee5e1747ab589903a6a1f80f22",\r\n  "after": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",\r\n  "ref": "refs/heads/master",\r\n  "checkout_sha": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",\r\n  "user_id": 4,\r\n  "user_name": "John Smith",\r\n  "user_username": "jsmith",\r\n  "user_email": "john@example.com",\r\n  "user_avatar": "https://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=8://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6?s=80",\r\n  "project_id": 15,\r\n  "project": {\r\n    "id": 15,\r\n    "name": "Diaspora",\r\n    "description": "",\r\n    "web_url": "http://example.com/mike/diaspora",\r\n    "avatar_url": null,\r\n    "git_ssh_url": "git@example.com:mike/diaspora.git",\r\n    "git_http_url": "http://example.com/mike/diaspora.git",\r\n    "namespace": "Mike",\r\n    "visibility_level": 0,\r\n    "path_with_namespace": "mike/diaspora",\r\n    "default_branch": "master",\r\n    "homepage": "http://example.com/mike/diaspora",\r\n    "url": "git@example.com:mike/diaspora.git",\r\n    "ssh_url": "git@example.com:mike/diaspora.git",\r\n    "http_url": "http://example.com/mike/diaspora.git"\r\n  },\r\n  "repository": {\r\n    "name": "Diaspora",\r\n    "url": "git@example.com:mike/diaspora.git",\r\n    "description": "",\r\n    "homepage": "http://example.com/mike/diaspora",\r\n    "git_http_url": "http://example.com/mike/diaspora.git",\r\n    "git_ssh_url": "git@example.com:mike/diaspora.git",\r\n    "visibility_level": 0\r\n  },\r\n  "commits": [\r\n    {\r\n      "id": "b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",\r\n      "message": "Update Catalan translation to e38cb41.\\n\\nSee https://gitlab.com/gitlab-org/gitlab for more information",\r\n      "title": "Update Catalan translation to e38cb41.",\r\n      "timestamp": "2011-12-12T14:27:31+02:00",\r\n      "url": "http://example.com/mike/diaspora/commit/b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",\r\n      "author": {\r\n        "name": "Jordi Mallach",\r\n        "email": "jordi@softcatala.org"\r\n      },\r\n      "added": ["CHANGELOG"],\r\n      "modified": ["app/controller/application.rb"],\r\n      "removed": []\r\n    },\r\n    {\r\n      "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",\r\n      "message": "fixed readme",\r\n      "title": "fixed readme",\r\n      "timestamp": "2012-01-03T23:36:29+02:00",\r\n      "url": "http://example.com/mike/diaspora/commit/da1560886d4f094c3e6c9ef40349f7d38b5d27d7",\r\n      "author": {\r\n        "name": "GitLab dev user",\r\n        "email": "gitlabdev@dv6700.(none)"\r\n      },\r\n      "added": ["CHANGELOG"],\r\n      "modified": ["app/controller/application.rb"],\r\n      "removed": []\r\n    }\r\n  ],\r\n  "total_commits_count": 4\r\n}\r\n\n'})}),"\n",(0,i.jsxs)(r.p,{children:["\u8bf7\u6c42\u4f53\u4e2d\u7684\u4efb\u4f55\u5c5e\u6027\u90fd\u53ef\u4ee5\u63d0\u53d6\u51fa\u6765\uff0c\u4f5c\u4e3a ",(0,i.jsx)(r.code,{children:"TriggerBinding"})," \u7684\u53c2\u6570\uff0c\u5982\u679c\u662f\u5176\u4ed6\u7684 Hook \u4e8b\u4ef6\uff0c\u5bf9\u5e94\u7684\u8bf7\u6c42\u4f53\u7ed3\u6784\u53ef\u4ee5",(0,i.jsx)(r.a,{href:"https://docs.gitlab.com/ce/user/project/integrations/webhooks.html",children:"\u67e5\u770b GitLab \u6587\u6863\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 ",(0,i.jsx)(r.code,{children:"TriggerTemplate"})," \u5bf9\u8c61\u4e2d\u901a\u8fc7\u53c2\u6570\u6765\u8bfb\u53d6\u4e0a\u9762 ",(0,i.jsx)(r.code,{children:"TriggerBinding"})," \u4e2d\u5b9a\u4e49\u7684\u53c2\u6570\u503c\u4e86\uff0c\u5b9a\u4e49\u4e00\u4e2a\u5982\u4e0b\u6240\u793a\u7684 ",(0,i.jsx)(r.code,{children:"TriggerTemplate"})," \u5bf9\u8c61\uff0c\u58f0\u660e\u4e00\u4e2a ",(0,i.jsx)(r.code,{children:"TaskRun"})," \u7684\u6a21\u677f\uff0c\u5b9a\u4e49\u7684 Task \u4efb\u52a1\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u5bb9\u5668\u4e2d\u6253\u5370\u51fa\u4ee3\u7801\u7684\u76ee\u5f55\u7ed3\u6784\u5373\u53ef\uff1a"]}),"\n",(0,i.jsx)(r.p,{children:"TriggerTemplate.yaml"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: triggers.tekton.dev/v1beta1\r\nkind: TriggerTemplate\r\nmetadata:\r\n  name: devops-demo-template\r\nspec:\r\n  params: # \u5b9a\u4e49\u53c2\u6570\uff0c\u548c TriggerBinding \u4e2d\u7684\u4fdd\u6301\u4e00\u81f4\r\n    - name: gitrevision\r\n    - name: gitrepositoryurl\r\n  resourcetemplates: # \u5b9a\u4e49\u8d44\u6e90\u6a21\u677f\r\n    - apiVersion: tekton.dev/v1beta1\r\n      kind: TaskRun # \u5b9a\u4e49 TaskRun \u6a21\u677f\r\n      metadata:\r\n        generateName: gitlab-run- # TaskRun \u540d\u79f0\u524d\u7f00\r\n      spec:\r\n        serviceAccountName: tekton-triggers-gitlab-sa\r\n        taskSpec: # Task \u4efb\u52a1\u58f0\u660e\r\n          resources:\r\n            inputs: # \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a source \u7684 git \u8f93\u5165\u8d44\u6e90\r\n              - name: source\r\n                type: git\r\n          steps:\r\n            - name: show-path\r\n              image: ubuntu # \u5b9a\u4e49\u4e00\u4e2a\u6267\u884c\u6b65\u9aa4\uff0c\u5217\u51fa\u4ee3\u7801\u76ee\u5f55\u7ed3\u6784\r\n              script: |\r\n                #! /bin/bash\r\n                ls -la $(resources.inputs.source.path)\r\n        resources: # \u58f0\u660e\u5177\u4f53\u7684\u8f93\u5165\u8d44\u6e90\u53c2\u6570\r\n          inputs:\r\n            - name: source # \u548c Task \u4e2d\u7684\u8d44\u6e90\u540d\u4fdd\u6301\u4e00\u76f4\r\n              resourceSpec: # \u8d44\u6e90\u58f0\u660e\r\n                type: git\r\n                params:\r\n                  - name: revision\r\n                    value: $(tt.params.gitrevision) # \u8bfb\u53d6\u53c2\u6570\u503c\r\n                  - name: url\r\n                    value: $(tt.params.gitrepositoryurl)\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u9700\u8981\u6ce8\u610f\u5728\u6700\u540e\u7684 pipelineresource \u4e2d\u5f15\u7528\u53c2\u6570\u503c\u7684\u65f6\u5019\u4f7f\u7528\u4e86\u4e00\u4e2a ",(0,i.jsx)(r.code,{children:"tt"})," \u7684\u524d\u7f00\u3002\u5b9a\u4e49\u5b8c\u8fc7\u540e\uff0c\u76f4\u63a5\u521b\u5efa\u4e0a\u9762\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u521b\u5efa\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u751f\u6210 ",(0,i.jsx)(r.code,{children:"EventListener"})," \u7684 Pod \u548c Service \u5bf9\u8c61\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"\r\nroot@k8s-master:~/gitlab-install# kubectl get svc -l eventlistener=gitlab-listener\r\nNAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)             AGE\r\nel-gitlab-listener   ClusterIP   10.107.99.121   <none>        8080/TCP,9000/TCP   135m\r\nroot@k8s-master:~/gitlab-install# kubectl get pod -l eventlistener=gitlab-listener\r\nNAME                                 READY   STATUS    RESTARTS   AGE\r\nel-gitlab-listener-cff57b6cf-qpdsr   1/1     Running   0          135m\r\nroot@k8s-master:~/gitlab-install# kubectl get eventlistener\r\nNAME              ADDRESS                                                    AVAILABLE   REASON                     READY   REASON\r\ngitlab-listener   http://el-gitlab-listener.default.svc.cluster.local:8080   True        MinimumReplicasAvailable   True \n"})}),"\n",(0,i.jsx)(r.p,{children:"gitlab\u914d\u7f6e"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230912011738813",src:n(1518).A+"",width:"956",height:"113"})}),"\n",(0,i.jsx)(r.p,{children:"\u9996\u5148\u6307\u5b9agitlab\u5730\u5740\uff0c\u8fd9\u4e2a\u5730\u5740\u5c31\u4f1alistener\u62c9\u53d6\u4ee3\u7801\u7684\u65f6\u5019\u4f1a\u7528\u5230\u3002\u6211\u8fd9\u91cc\u914d\u7f6e\u4e3asvc\u5730\u5740\uff0c\u751f\u4ea7\u73af\u5883\u76f4\u63a5\u53ef\u4ee5\u914d\u7f6e\u4e3a\u80fd\u591f\u901a\u8fc7\u5916\u7f51\u8bbf\u95ee\u7684\u5730\u5740\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u786e\u8ba4\u8bbf\u95ee\u5730\u5740"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230912012207070",src:n(2245).A+"",width:"1257",height:"494"})}),"\n",(0,i.jsx)(r.p,{children:"\u786e\u4fdd\u914d\u7f6e\u540e\u5982\u4e0a\u56fe\uff0c\u80fd\u591f\u5728\u96c6\u7fa4\u4e2d\u670d\u52a1\u80fd\u591f\u8bf7\u6c42\u5230\u4ed3\u5e93\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230911231017910",src:n(6659).A+"",width:"1729",height:"864"})}),"\n",(0,i.jsx)(r.p,{children:"\u6d4b\u8bd5"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230911231102745",src:n(9914).A+"",width:"1809",height:"856"})}),"\n",(0,i.jsx)(r.p,{children:"\u6dfb\u52a0webhook"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230911231137011",src:n(7566).A+"",width:"1338",height:"814"})}),"\n",(0,i.jsxs)(r.p,{children:["\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u6d4b\u8bd5\u4e0b\u8be5 WebHook \u7684 ",(0,i.jsx)(r.code,{children:"Push events"})," \u4e8b\u4ef6\uff0c\u76f4\u63a5\u70b9\u51fb\u6d4b\u8bd5\u5373\u53ef\uff08\u5982\u679c\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u57df\u540d\u5219\u9700\u8981\u5728 coredns \u4e2d\u6dfb\u52a0\u6620\u5c04\uff09\uff0c\u6b63\u5e38\u4f1a\u8fd4\u56de ",(0,i.jsx)(r.code,{children:"Hook executed successfully: HTTP 202"})," \u7684\u63d0\u793a\u4fe1\u606f\uff0c\u8fd9\u4e2a\u65f6\u5019\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5c31\u4f1a\u51fa\u73b0\u5982\u4e0b\u6240\u793a\u7684\u4efb\u52a1 Pod"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:'root@k8s-master:~/gitlab-install# kubectl get pods -l triggers.tekton.dev/eventlistener=gitlab-listener\r\nNAME                   READY   STATUS      RESTARTS   AGE\r\ngitlab-run-228g4-pod   0/2     Completed   0          10m\r\n\r\nroot@k8s-master:~/gitlab-install# kubectl get taskrun -l triggers.tekton.dev/eventlistener=gitlab-listener\r\nNAME               SUCCEEDED   REASON      STARTTIME   COMPLETIONTIME\r\ngitlab-run-228g4   True        Succeeded   11m         10m\r\n\r\nroot@k8s-master:~/gitlab-install# tkn taskrun logs gitlab-run-228g4\r\n[git-source-source-j4jkp] {"level":"info","ts":1694452832.0582829,"caller":"git/git.go:176","msg":"Successfully cloned http://gitlab.kube-ops.svc.cluster.local/root/springboot-helloworld.git @ 41c7823dddbef43680a0726ccea0631519b9d3c1 (grafted, HEAD) in path /workspace/source"}\r\n[git-source-source-j4jkp] {"level":"info","ts":1694452832.0842206,"caller":"git/git.go:215","msg":"Successfully initialized and updated submodules in path /workspace/source"}\r\n\r\n[show-path] total 40\r\n[show-path] drwxr-xr-x 4 root root 4096 Sep 11 17:20 .\r\n[show-path] drwxrwxrwx 3 root root 4096 Sep 11 17:20 ..\r\n[show-path] drwxr-xr-x 8 root root 4096 Sep 11 17:20 .git\r\n[show-path] -rw-r--r-- 1 root root   18 Sep 11 17:20 .gitignore\r\n[show-path] -rw-r--r-- 1 root root  408 Sep 11 17:20 .travis.yml\r\n[show-path] -rw-r--r-- 1 root root  537 Sep 11 17:20 Dockerfile\r\n[show-path] -rw-r--r-- 1 root root   38 Sep 11 17:20 Procfile\r\n[show-path] -rw-r--r-- 1 root root  969 Sep 11 17:20 README.md\r\n[show-path] -rw-r--r-- 1 root root 2160 Sep 11 17:20 pom.xml\r\n[show-path] drwxr-xr-x 4 root root 4096 Sep 11 17:20 src\n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230911231212394",src:n(5040).A+"",width:"1906",height:"563"})}),"\n",(0,i.jsx)(r.p,{children:"\u5230\u8fd9\u91cc\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u901a\u8fc7 GitLab \u7684 Push \u4e8b\u4ef6\u6765\u89e6\u53d1 Tekton \u7684\u4e00\u4e2a\u4efb\u52a1\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230912013041954",src:n(3827).A+"",width:"1890",height:"684"})}),"\n",(0,i.jsx)(r.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(r.p,{children:"\u5751\uff1a rbac\u7684\u6388\u6743\uff0c\u6839\u636e\u62a5\u9519\u8fdb\u884c\u5904\u7406\uff0c\u5426\u5219\u670d\u52a1\u542f\u52a8"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"image-20230912014829531",src:n(9285).A+"",width:"1920",height:"309"})}),"\n",(0,i.jsx)(r.p,{children:"gitlab\u5728k8s\u96c6\u7fa4\u5185\u90e8\u80fd\u591f\u8bbf\u95ee\u5230\u5373\u53ef"})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9767:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230910180912288-d752f6b4a03ca240bd7c1d4b59d5c492.png"},8897:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230910184456555-ac0ab20bdde41d4007c0e1b0b968bb27.png"},3816:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230910223545524-ef3c14023a6a01d7c0bade2cf5f277b2.png"},6659:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230911231017910-6ca4bdd05c8a1c6ae13b3ef413cd8960.png"},9914:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230911231102745-d077b3acff95a75b986703f963c7ba48.png"},7566:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230911231137011-aedde0d7240c46607ca9b9764f9d0d31.png"},5040:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230911231212394-b40e88396b2b7f54b6ef2cb2cd15a407.png"},1518:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230912011738813-587fd74553f999a2b0f077ea53c3903a.png"},2245:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230912012207070-6eb83f7d24931169c510e1e03617a768.png"},3827:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230912013041954-aba093c9686e1b6fcff7fc76b6c12fbb.png"},9285:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/image-20230912014829531-c281527e82caa7940a0bcd083f600372.png"},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var i=n(6540);const t={},s=i.createContext(t);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);