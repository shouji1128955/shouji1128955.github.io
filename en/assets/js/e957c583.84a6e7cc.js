"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4314],{8217:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(4848),s=r(8453);const a={},o=void 0,i={id:"DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801",title:"tekton\u62c9\u53d6\u4ee3\u7801",description:"1\u3001Tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0",source:"@site/docs/DevOps/2-gitOps/1-tekton\u62c9\u53d6\u4ee3\u7801.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801",permalink:"/en/docs/DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/2-gitOps/1-tekton\u62c9\u53d6\u4ee3\u7801.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:17293594e5,sidebarPosition:1,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"tekton\u5b89\u88c5",permalink:"/en/docs/DevOps/gitOps/tekton\u5b89\u88c5"},next:{title:"tekton-results",permalink:"/en/docs/DevOps/gitOps/tekton-results"}},l={},c=[{value:"1\u3001Tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0",id:"1tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0",level:2},{value:"2\u3001\u4ee3\u7801\u62c9\u53d6",id:"2\u4ee3\u7801\u62c9\u53d6",level:2},{value:"3\u3001git\u62c9\u53d6\u548charbor\u767b\u5f55",id:"3git\u62c9\u53d6\u548charbor\u767b\u5f55",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0",children:"1\u3001Tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.p,{children:"Tekton \u7684\u524d\u8eab\u662f Knative \u7684\u5b50\u9879\u76ee build-pipeline\uff0c\u4e3b\u8981\u7528\u6765\u7ed9 Kantive \u7684 build \u6a21\u5757\u589e\u52a0 pipeline \u529f\u80fd\u3002\u4e4b\u540e\u72ec\u7acb\u51fa\u6765\uff0cTekton \u7684\u76ee\u6807\u662f\u4e00\u4e2a\u901a\u7528\u7684 CI/CD \u5de5\u5177\u3002\u8fd9\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u4ea7\u54c1\u5b75\u5316\u673a\u5236\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\uff0c\u79c1\u6709\u4e91\u5e02\u573a\u5360\u6709\u7387\u6bd4\u8f83\u9ad8\u7684 CICD \u5de5\u5177\u5bf9 Kubernetes \u90fd\u6709\u6240\u652f\u6301\uff0c\u6bd4\u5982 Jenkins\u3001GitLab CI\u3002\u4f46\u662f\uff0c\u8fd9\u4e9b\u5de5\u5177\u53ea\u662f\u5c06 Kubernetes \u4f5c\u4e3a\u5176\u6269\u5c55\u7684\u4e00\u4e2a\u65b9\u9762\uff0cKubernetes \u4f5c\u4e3a\u65b0\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u9700\u8981\u539f\u751f\u7684 CICD \u65b9\u6848\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53e6\u4e00\u65b9\u9762\uff0cJenkins \u7684\u5b50\u9879\u76ee JenkinsX \u4e5f\u5f00\u59cb\u9ed8\u8ba4\u4f7f\u7528 Tekton \u4f5c\u4e3a CI \u5f15\u64ce\u3002\u4f7f\u7528\u4e91\u539f\u751f\u4e00\u7b49\u516c\u6c11 CRD + Controller \u5b9e\u73b0\u7684 Tekton \uff0c\u65e0\u7591\u6709\u673a\u4f1a\u6210\u4e3a\u4e91\u539f\u751f\u7684\u4e3b\u6d41\u7f16\u6392\u5f15\u64ce\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u521b\u5efademo"}),"\n",(0,t.jsx)(n.p,{children:"task"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'apiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: demo-task\r\nspec:\r\n  params:\r\n    - name: message\r\n      description: The message to print\r\n      type: string\r\n    - name: hostname\r\n      description:  this is hostname\r\n      type: string\r\n  steps:\r\n    - name: print-message\r\n      image: busybox\r\n      script: |\r\n        #!/bin/sh\r\n        echo "Message: $(params.message)" \r\n        echo "Hostname: $(params.hostname)"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u521b\u5efatask-run"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'root@k8s-master:~/tekton/demo# cat task01-run.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: TaskRun\r\nmetadata:\r\n  name: demo-taskrun\r\nspec:\r\n  taskRef:\r\n    name: demo-task\r\n  params:\r\n    - name: message\r\n      value: "Hello, Tekton!"\r\n    - name: hostname\r\n      value: "www.zlqit.com"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Task\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u5143\u7d20\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parameters\uff1a\u7528\u4e8e\u5b9a\u4e49params\u53c2\u6570"}),"\n",(0,t.jsx)(n.li,{children:"Resources\uff1a\u5b9a\u4e49\u8f93\u5165\u3001\u8f93\u51fa\u8d44\u6e90\uff0c\u8001\u7248\u672c\u7531PipelineResources\u5b9a\u4e49\uff0c\u4e0d\u8fc7\u5728\u65b0\u7248\u672c\u4e2dPipelineResources\u5c06\u88ab\u5f03\u7528"}),"\n",(0,t.jsx)(n.li,{children:"Steps\uff1a\u5b9a\u4e49\u5177\u4f53\u7684\u64cd\u4f5c\u6b65\u9aa4"}),"\n",(0,t.jsx)(n.li,{children:"Workspaces\uff1a\u5b9a\u4e49\u5de5\u4f5c\u533a\uff0cTask\u53ef\u4ee5\u5171\u4eab\u5de5\u4f5c\u533a"}),"\n",(0,t.jsx)(n.li,{children:"Results\uff1a\u5b9a\u4e49\u7ed3\u679c\u8f93\u51fa\uff0c\u53ef\u4ee5\u7528\u4e8e\u5c55\u793a\u6216\u8005\u7ed9\u53e6\u5916\u7684Task\u4f7f\u7528"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6f14\u793aworkingDir"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'#\u6ce8\u610f\uff0cscript\u548ccommand\u4e0d\u80fd\u540c\u65f6\u4f7f\u7528\r\nroot@k8s-master:~/tekton/demo# cat task01.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: demo-task\r\nspec:\r\n  params:\r\n    - name: message\r\n      description: The message to print\r\n      type: string\r\n    - name: hostname\r\n      description:  this is hostname\r\n      type: string\r\n  steps:\r\n    - name: print-message\r\n      image: busybox\r\n      script: |\r\n        #!/bin/sh\r\n        echo "Message: $(params.message)" \r\n        echo "Hostname: $(params.hostname)"\r\n        pwd\r\n      workingDir: /usr/local\r\nroot@k8s-master:~/tekton/demo# kubectl  logs  -f demo-taskrun-pod\r\nMessage: Hello, Tekton!\r\nHostname: www.zlqit.com\r\n/usr/local\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/477393232",children:"Tekton\u7cfb\u5217\u4e4b\u7406\u8bba\u7bc7 - \u77e5\u4e4e (zhihu.com)"})}),"\n",(0,t.jsx)(n.h2,{id:"2\u4ee3\u7801\u62c9\u53d6",children:"2\u3001\u4ee3\u7801\u62c9\u53d6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# ls -l\r\ntotal 28\r\n-rw-r--r-- 1 root root 356 Sep  5 17:01 demo-rescource.yaml\r\n-rw-r--r-- 1 root root 282 Sep  5 18:08 pipelinerun.yaml\r\n-rw-r--r-- 1 root root 444 Sep  5 18:13 pipeline.yaml\r\n-rw-r--r-- 1 root root  92 Sep  4 03:04 sa.yaml\r\n-rw-r--r-- 1 root root 227 Sep  4 03:04 secret.yaml\r\n-rw-r--r-- 1 root root 266 Sep  5 18:12 taskrun.yaml\r\n-rw-r--r-- 1 root root 573 Sep  5 18:29 task.yaml\r\nroot@k8s-master:~/tekton/demo/only-pull-code# pwd\r\n/root/tekton/demo/only-pull-code\n"})}),"\n",(0,t.jsx)(n.p,{children:"sa.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat sa.yaml \r\napiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: git-pull\r\nsecrets:\r\n  - name: basic-git\n"})}),"\n",(0,t.jsx)(n.p,{children:"secret.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat secret.yaml \r\napiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-git\r\n  annotations:\r\n    tekton.dev/git-0: https://gitee.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: 409003604@qq.com\r\n  password: xxxxxxxxxxxxxxx\r\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"task.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat task.yaml \r\n# task-test.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: test\r\nspec:\r\n  resources:\r\n    inputs:\r\n      - name: demo-resource\r\n        type: git\r\n  steps:\r\n    - name: run-test\r\n      image: alpine:3.15\r\n      workingDir: /workspace/demo-resource\r\n      script: |\r\n        pwd  && ls -l\r\n        for i in $(seq 1 20); do\r\n          touch /root/.m2/$i.txt\r\n        done\r\n        ls -l  /root/.m2/\r\n                \r\n      #args: ['-l']\r\n      volumeMounts:\r\n        - name: m2\r\n          mountPath: /root/.m2\r\n  volumes:\r\n    - name: m2\r\n      hostPath:\r\n        path: /root/.m2\r\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"taskrun.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'root@k8s-master:~/tekton/demo/only-pull-code# cat taskrun.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: TaskRun\r\nmetadata:\r\n  generateName: test-run-\r\n  namespace: default\r\nspec:\r\n  resources:\r\n    inputs:\r\n    - name: demo-resource \r\n      resourceRef:\r\n        name: demo-resource\r\n  serviceAccountName: "git-pull"\r\n  taskRef:\r\n    name: test\r\nroot@k8s-master:~/tekton/demo/only-pull-code# ls -l\r\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"pipeline.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat pipeline.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: Pipeline\r\nmetadata:\r\n  name: test-git\r\nspec:\r\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\r\n    - name: demo-resource\r\n      type: git\r\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\r\n    # \u8fd0\u884c\u5e94\u7528\u6d4b\u8bd5\r\n    - name: test-git\r\n      taskRef:\r\n        name: test\r\n      resources:\r\n        inputs:\r\n          - name: demo-resource # Task \u8f93\u5165\u540d\u79f0\r\n            resource: demo-resource # Pipeline \u8d44\u6e90\u540d\u79f0\n"})}),"\n",(0,t.jsx)(n.p,{children:"pipelinerun.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat pipelinerun.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: PipelineRun\r\nmetadata:\r\n  name: test-git\r\n  namespace: default\r\nspec:\r\n  serviceAccountName: git-pull\r\n  pipelineRef:\r\n    name: test-git\r\n  resources:\r\n  - name: demo-resource  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\r\n    resourceRef:\r\n      name: demo-resource\r\n\r\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"demo-rescource.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat demo-rescource.yaml \r\napiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata:\r\n  name: demo-resource  # resource\u7684\u540d\u5b57\r\nspec:\r\n  type: git\r\n  params:\r\n  - name: revision\r\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\r\n  - name: url\r\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3git\u62c9\u53d6\u548charbor\u767b\u5f55",children:"3\u3001git\u62c9\u53d6\u548charbor\u767b\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"root@k8s-master:~/tekton/demo/only-pull-code# cat demo-rescource.yaml \r\napiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata:\r\n  name: demo-resource  # resource\u7684\u540d\u5b57\r\nspec:\r\n  type: git\r\n  params:\r\n  - name: revision\r\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\r\n  - name: url\r\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\r\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat sa.yaml \r\napiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: git-pull\r\nsecrets:\r\n  - name: basic-git\r\n  - name: basic-docker\t\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"annotations: \u9700\u8981\u5bf9\u6388\u6743\u7684\u7c7b\u578b\u8fdb\u884c\u8bf4\u660e\uff0c\u5b98\u7f51\u662f\u6839\u636e\u8fd9\u4e2a\u53bb\u767b\u5f55\u548c\u8bbf\u95eeharbor\u548cgit\u4ed3\u5e93"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat secret.yaml \r\napiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-git\r\n  annotations:\r\n    tekton.dev/git-0: https://gitee.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: 409003604@qq.com\r\n  password: xxxxxxxxxxxxxxx\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"annotations: \u9700\u8981\u5bf9\u6388\u6743\u7684\u7c7b\u578b\u8fdb\u884c\u8bf4\u660e\uff0c\u5b98\u7f51\u662f\u6839\u636e\u8fd9\u4e2a\u53bb\u767b\u5f55\u548c\u8bbf\u95eeharbor\u548cgit\u4ed3\u5e93"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u8fd9\u91cc\u5728 Secret \u5bf9\u8c61\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e2a tekton.dev/docker-0 \u7684 annotation\uff0c\u8be5\u6ce8\u89e3\u4fe1\u606f\u662f\u7528\u6765\u544a\u8bc9 Tekton \u8fd9\u4e9b\u8ba4\u8bc1\u4fe1\u606f\u6240\u5c5e\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat secret_docker.yaml \r\napiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-docker\r\n  annotations:\r\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: xxxxxxxxxxx@126.com\r\n  password: xxxxxxxxxxxxxxx\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'root@k8s-master:~/tekton/demo/only-pull-code# cat taskrun.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: TaskRun\r\nmetadata:\r\n  generateName: test-run-\r\n  namespace: default\r\nspec:\r\n  resources:\r\n    inputs:\r\n    - name: demo-resource \r\n      resourceRef:\r\n        name: demo-resource\r\n  serviceAccountName: "git-pull"\r\n  taskRef:\r\n    name: test\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat task.yaml \r\n# task-test.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: test\r\nspec:\r\n  resources:\r\n    inputs:\r\n      - name: demo-resource\r\n        type: git\r\n  params:\r\n  - name: dockerfile-path #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\r\n    type: string\r\n    default: $(inputs.resources.golang-resource.path)/ # repo\u8d44\u6e90\u7684\u8def\u5f84\r\n    description: dockerfile path\r\n\r\n  steps:\r\n    - name: run-test\r\n      image: alpine:3.15\r\n      workingDir: /workspace/demo-resource\r\n      script: |\r\n        pwd  && ls -l\r\n        for i in $(seq 1 20); do\r\n          touch /root/.m2/$i.txt\r\n        done\r\n        ls -l  /root/.m2/\r\n                \r\n      #args: ['-l']\r\n      volumeMounts:\r\n        - name: m2\r\n          mountPath: /root/.m2\r\n    - name: docker-login\r\n      image: docker:stable\r\n      env: \r\n        - name: DOCKER_USER\r\n          valueFROM:\r\n            secretKeyRef:\r\n              name:  basic-docker\r\n              key: username\r\n        - name: DOCKER_PASSWORD\r\n          valueFROM:\r\n            secretKeyRef:\r\n              name: basic-docker\r\n              key: password  \r\n      workingDir: /workspace/demo-resource\r\n      volumeMounts:\r\n      - name: docker-sock\r\n        mountPath: /var/run/docker.sock\r\n      script: | \r\n        docker login registry.cn-hangzhou.aliyuncs.com # -u $DOCKER_USER -p $DOCKER_PASSWORD\r\n  volumes:\r\n    - name: m2\r\n      hostPath:\r\n        path: /root/.m2\r\n    - name: docker-sock\r\n      hostPath:\r\n        path: /var/run/docker.sock\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat pipelinerun.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: PipelineRun\r\nmetadata:\r\n  name: test-git\r\n  namespace: default\r\nspec:\r\n  serviceAccountName: git-pull\r\n  pipelineRef:\r\n    name: test-git\r\n  resources:\r\n  - name: demo-resource  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\r\n    resourceRef:\r\n      name: demo-resource\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/only-pull-code# cat pipeline.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: Pipeline\r\nmetadata:\r\n  name: test-git\r\nspec:\r\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\r\n    - name: demo-resource\r\n      type: git\r\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\r\n    # \u8fd0\u884c\u5e94\u7528\u6d4b\u8bd5\r\n    - name: test-git\r\n      taskRef:\r\n        name: test\r\n      resources:\r\n        inputs:\r\n          - name: demo-resource # Task \u8f93\u5165\u540d\u79f0\r\n            resource: demo-resource # Pipeline \u8d44\u6e90\u540d\u79f0\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://blog.51cto.com/u_14813740/4247653",children:"https://blog.51cto.com/u_14813740/4247653"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.infvie.com/ops-notes/kubernetes-tekton.html",children:"https://www.infvie.com/ops-notes/kubernetes-tekton.html"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);