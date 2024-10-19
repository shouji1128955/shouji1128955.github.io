"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[2869],{2826:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(4848),s=r(8453);const a={},i=void 0,o={id:"DevOps/gitOps/tekton-results",title:"tekton-results",description:"\u4f7f\u7528 Results \u4f20\u9012\u6570\u636e",source:"@site/docs/DevOps/2-gitOps/2-tekton-results.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/tekton-results",permalink:"/en/docs/DevOps/gitOps/tekton-results",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/2-gitOps/2-tekton-results.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:17293594e5,sidebarPosition:2,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"tekton\u62c9\u53d6\u4ee3\u7801",permalink:"/en/docs/DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801"},next:{title:"Tekton-catalog",permalink:"/en/docs/DevOps/gitOps/Tekton-catalog"}},l={},c=[{value:"\u4f7f\u7528 Results \u4f20\u9012\u6570\u636e",id:"\u4f7f\u7528-results-\u4f20\u9012\u6570\u636e",level:2},{value:"\u6848\u4f8b \u4f7f\u7528results\u5b9e\u73b0 commit",id:"\u6848\u4f8b-\u4f7f\u7528results\u5b9e\u73b0-commit",level:2},{value:"\u83b7\u53d6commit\u4fe1\u606f",id:"\u83b7\u53d6commit\u4fe1\u606f",level:4},{value:"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f",id:"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f",level:4}];function p(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4f7f\u7528-results-\u4f20\u9012\u6570\u636e",children:"\u4f7f\u7528 Results \u4f20\u9012\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u5728build\u955c\u50cf\u7684\u65f6\u5019\uff0c\u56e0\u4e3a\u90fd\u662f\u56fa\u5b9a\u5199\u6b7b\u7684\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u73b0\u5728\u9700\u8981\u5b9e\u73b0\u4fee\u6539\u955c\u50cftag, \u9700\u8981\u7528\u5230results\u8fd9\u4e2a\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"\u4e24\u79cd\u65b9\u5f0f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u53ef\u4ee5\u901a\u8fc7Build-id\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7commit-id\u6765\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd8\u9700\u8981\u83b7\u53d6\u5230\u6784\u5efa\u7684\u65f6\u95f4"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u4e00\u4e2a Task \u4efb\u52a1\uff0c\u7136\u540e\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"script"})," \u811a\u672c\u53bb\u83b7\u53d6\u5230\u6570\u636e\u540e\u4f20\u5165\u5230 results \u4e2d\u53bb\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u8fd9\u4e9b results \u6570\u636e\u4f20\u9012\u5230\u6d41\u6c34\u7ebf\u4e2d\u7684\u5176\u4ed6\u4efb\u52a1\u4e2d\u53bb\uff0c\u6bd4\u5982\u6211\u4eec\u60f3\u8981\u83b7\u53d6 git commit \u7684 SHA \u503c\uff0c\u6216\u8005\u751f\u6210\u4e00\u4e2a\u968f\u673a\u7684 ID \u6765\u4f5c\u4e3a\u955c\u50cf TAG\uff0c\u6bd4\u5982\u8fd9\u91cc\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"generate-build-id"})," \u7684 Task \u4efb\u52a1\uff0c\u5b9a\u4e49\u4e86 ",(0,t.jsx)(n.code,{children:"get-timestamp"})," \u548c ",(0,t.jsx)(n.code,{children:"get-buildid"})," \u4e24\u4e2a Steps\uff0c\u4e00\u4e2a\u7528\u4e8e\u751f\u6210\u65f6\u95f4\u6233\uff0c\u4e00\u4e2a\u7528\u4e8e\u751f\u6210\u4e00\u4e2a\u5305\u542b\u57fa\u672c\u7248\u672c\u7684\u7ed3\u679c\u503c\uff0c\u5c06\u7ed3\u679c\u6dfb\u52a0\u5230 ",(0,t.jsx)(n.code,{children:"results"})," \u4e2d\u53bb\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"sa.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-results# cat sa.yaml \r\napiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: git-pull\r\nsecrets:\r\n  - name: basic-git\r\n  - name: basic-docker\n"})}),"\n",(0,t.jsx)(n.p,{children:"secret_docker.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-results# cat secret_docker.yaml \r\napiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-docker\r\n  annotations:\r\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: xxxxxxxxxx\r\n  password: xxxxxxxxxxx\n"})}),"\n",(0,t.jsx)(n.p,{children:"secret.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-results# cat secret.yaml \r\napiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-git\r\n  annotations:\r\n    tekton.dev/git-0: https://gitee.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: xxxxxxx\r\n  password: xxxxxxx\n"})}),"\n",(0,t.jsx)(n.p,{children:"task-pull-code.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-results# cat task-pull-code.yaml  \r\n# task-test.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: task-results\r\nspec:\r\n  resources:\r\n    inputs:\r\n      - name: git-res\r\n        type: git\r\n    outputs:\r\n      - name: builtImage\r\n        type: image\r\n\r\n  params:\r\n  - name: dockerfile-path #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\r\n    type: string\r\n    default: $(inputs.resources.golang-resource.path)/ # repo\u8d44\u6e90\u7684\u8def\u5f84\r\n    description: dockerfile path\r\n\r\n  steps:\r\n    - name: run-test\r\n      image: alpine:3.15\r\n      workingDir: /workspace/demo-resource\r\n      script: |\r\n        pwd  && ls -l\r\n        for i in $(seq 1 20); do\r\n          touch /root/.m2/$i.txt\r\n        done\r\n        ls -l  /root/.m2/\r\n      volumeMounts:\r\n        - name: m2\r\n          mountPath: /root/.m2 \r\n  volumes:\r\n    - name: m2\r\n      hostPath:\r\n        path: /root/.m2\r\n    - name: docker-sock\r\n      hostPath:\r\n        path: /var/run/docker.sock\n"})}),"\n",(0,t.jsx)(n.p,{children:"task-generate-build-id.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'root@k8s-master:~/tekton/demo/pipline-results# cat task-generate-build-id.yaml \r\n# generate-build-id.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: task-generate-build-id\r\nspec:\r\n  description: >-\r\n    Given a base version, this task generates a unique build id by appending\r\n    the base-version to the current timestamp.\r\n  params:\r\n    - name: base-version\r\n      description: Base product version\r\n      type: string\r\n      default: "1.0"\r\n  results:\r\n    - name: timestamp\r\n      description: Current timestamp\r\n    - name: build-id\r\n      description: ID of the current build\r\n    - name: hostname-ts\r\n      description: get hostname-ts\r\n  steps:\r\n    - name: get-timestamp\r\n      image: bash:5.0.18\r\n      script: |\r\n        #!/usr/bin/env bash\r\n        ts=`date "+%Y%m%d-%H%M%S"`\r\n        echo "Current Timestamp: ${ts}"\r\n        echo ${ts} | tr -d "\\n" | tee $(results.timestamp.path)\r\n    - name: get-buildid\r\n      image: bash:5.0.18\r\n      script: |\r\n        #!/usr/bin/env bash\r\n        ts=`cat $(results.timestamp.path)`\r\n        buildId=$(inputs.params.base-version)-${ts}\r\n        echo ${buildId} | tr -d "\\n" | tee $(results.build-id.path)\r\n\r\n    - name: hostname-ts\r\n      image: bash:5.0.18\r\n      script: |\r\n        #!/usr/bin/env bash\r\n        ts=`cat $(results.timestamp.path)`\r\n        hostname-name=`hostname`\r\n        hostnamets=${hostname-name}-${ts}\r\n        echo ${hostnamets} | tr -d "\\n" | tee $(results.hostname-ts.path)\r\n        echo \'[INFO]\' hostnamets: ${hostnamets}\n'})}),"\n",(0,t.jsx)(n.p,{children:"task-docker-build-push.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-results# cat task-docker-build-push.yaml  \r\n# task-build-push.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: task-build-and-push\r\nspec:\r\n  resources:\r\n    inputs: # \u5b9a\u4e49\u8f93\u5165\u8d44\u6e90\r\n      - name: repo #\u8f93\u5165\u8d44\u6e90\uff0c\u5c31\u662fgithub\u7684\u90a3\u4e2a\u4ed3\u5e93\r\n        type: git\r\n    outputs: # \u5b9a\u4e49\u8f93\u51fa\u8d44\u6e90\r\n      - name: builtImage # \u8f93\u51fa\u955c\u50cf\u540d\u5b57\r\n        type: image\r\n  params:\r\n    - name: pathToDockerfile #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\r\n      type: string\r\n      default: $(resources.inputs.repo.path)/Dockerfile # repo\u8d44\u6e90\u7684\u8def\u5f84\r\n      description: The path to the dockerfile to build\r\n    - name: pathToContext #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\r\n      type: string\r\n      default: $(resources.inputs.repo.path) # repo\u8d44\u6e90\u7684\u8def\u5f84\r\n      description: the build context used by docker daemon\r\n    - name: imageTag\r\n      type: string\r\n      default: \"v0.2.0\"\r\n      description: the docker image tag\r\n    - name: hostnamets\r\n      type: string\r\n      default: \"hello\"\r\n      description:  print host name\r\n  steps:\r\n    - name: build-and-push\r\n      image: docker:stable\r\n      script: |\r\n        #!/usr/bin/env sh\r\n        docker login registry.cn-hangzhou.aliyuncs.com\r\n        docker build -t $(resources.outputs.builtImage.url):$(params.imageTag) -f $(params.pathToDockerfile) $(params.pathToContext)\r\n        echo '[INFO]' pathToDockerfile $(resources.inputs.repo.path)/Dockerfile \r\n        echo '[INFO]' pathToContext    $(resources.inputs.repo.path)\r\n        docker push $(resources.outputs.builtImage.url):$(params.imageTag)  # \u8fd9\u8fb9\u7684\u53c2\u6570\u90fd\u662f\u5728 input \u548c output \u4e2d\u5b9a\u4e49\u7684\r\n        echo  '[INFO] hostname-ts:'  $(params.hostnamets)\r\n      volumeMounts:\r\n      - name: docker-sock # \u5c06docker.sock\u6587\u4ef6\u6302\u8f7d\u8fdb\u6765\uff0c\u4f7f\u7528\u5bbf\u4e3b\u673adocker daemon \u6784\u5efa\u955c\u50cf\r\n        mountPath: /var/run/docker.sock\r\n      - name: hosts # registry.nanjun\u7684\u89e3\u6790\u5728\u5916\u90e8\u5bbf\u4e3b\u673a\u7684hosts\u6587\u4ef6\u4e2d\uff0c\u8fd9\u8fb9\u4e5f\u8981\u6302\u8f7d\u8fdb\u6765\r\n        mountPath: /etc/host      \r\n  volumes:\r\n    - name: docker-sock\r\n      hostPath:\r\n        path: /var/run/docker.sock\r\n    - name: hosts\r\n      hostPath:\r\n        path: /etc/hosts\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u589e\u52a0task-generate-build-id \u4efb\u52a1\uff0c\u7528\u6765\u751f\u6210\u6784\u5efaid"}),"\n",(0,t.jsx)(n.p,{children:"pipeline.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'root@k8s-master:~/tekton/demo/pipline-results# cat pipeline.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: Pipeline\r\nmetadata:\r\n  name: pipeline-results\r\nspec:\r\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\r\n    - name: git-res\r\n      type: git\r\n    - name: harbor-image\r\n      type: image\r\n  params:\r\n    - name: image-tag\r\n      type: string\r\n\r\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\r\n\r\n    # \u62c9\u53d6\u4ee3\u7801\r\n    - name: clone-code\r\n      taskRef:\r\n        name: task-results\r\n      resources:\r\n        inputs:\r\n          - name: git-res # Task \u8f93\u5165\u540d\u79f0\r\n            resource: git-res # Pipeline \u8d44\u6e90\u540d\u79f0\r\n        outputs: \r\n          - name: builtImage\r\n            resource: harbor-image \r\n           \r\n    # \u83b7\u53d6\u6784\u5efaID\r\n    - name: get-build-id\r\n      taskRef:\r\n        name: task-generate-build-id\r\n      params:\r\n        - name: base-version\r\n          value: $(params.image-tag) \r\n         \r\n    # \u6784\u5efa\u5e76\u4e14\u63a8\u9001\u955c\u50cf\u5230\u4ed3\u5e93\r\n    - name: build-and-push\r\n      taskRef:\r\n        name: task-build-and-push\r\n      runAfter:\r\n        - clone-code\r\n        - get-build-id\r\n      resources:\r\n        inputs:\r\n          - name: repo\r\n            resource: git-res\r\n        outputs:\r\n          - name: builtImage\r\n            resource: harbor-image\r\n      params:\r\n        - name: imageTag\r\n          value: "$(tasks.get-build-id.results.build-id)"\r\n        - name: hostnamets\r\n          value: "$(tasks.get-build-id.results.hostname-ts)"  #\u83b7\u53d6\u4e0a\u4e00task\u53d8\u91cf\u503c\uff0c\u7136\u540e\u5728build-and-push\u4e2d\u5b9e\u73b0\u8c03\u7528\u548c\u6253\u5370\n'})}),"\n",(0,t.jsx)(n.p,{children:"pipelinerun.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'root@k8s-master:~/tekton/demo/pipline-results# cat pipelinerun.yaml \r\napiVersion: tekton.dev/v1beta1\r\nkind: PipelineRun\r\nmetadata:\r\n  name: pipelinerun-results\r\n  namespace: default\r\nspec:\r\n  serviceAccountName: git-pull\r\n  pipelineRef:\r\n    name: pipeline-results\r\n  resources:\r\n  - name: git-res  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\r\n    resourceRef:\r\n      name: git-res\r\n  - name: harbor-image\r\n    resourceRef:\r\n      name: harbor-image\r\n\r\n  params:\r\n    - name: image-tag\r\n      value: "v0.3.0"\n'})}),"\n",(0,t.jsx)(n.p,{children:"demo-rescource.yaml"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-results# cat demo-rescource.yaml \r\napiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata:\r\n  name: git-res  # resource\u7684\u540d\u5b57\r\nspec:\r\n  type: git\r\n  params:\r\n  - name: revision\r\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\r\n  - name: url\r\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\r\n\r\n---\r\napiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata: \r\n  name: harbor-image\r\nspec:\r\n  type: image\r\n  params:\r\n    - name: url\r\n      value: registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo\n"})}),"\n",(0,t.jsx)(n.p,{children:"start.sh"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-results# cat start.sh \r\nfor i in `ls *.yaml | grep -v  run`; do kubectl delete  -f $i; done\r\nfor i in `ls *.yaml | grep -v  run`; do kubectl apply  -f $i; done\r\n\r\nkubectl  delete  -f pipelinerun.yaml \r\nkubectl  apply   -f pipelinerun.yaml \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u6709\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u6267\u884c\u6211\u4eec\u7684\u6574\u4e2a\u6d41\u6c34\u7ebf\u5373\u53ef"}),"\n",(0,t.jsx)(n.p,{children:"tkn pipelinerun logs test-pipelinerun"}),"\n",(0,t.jsx)(n.h2,{id:"\u6848\u4f8b-\u4f7f\u7528results\u5b9e\u73b0-commit",children:"\u6848\u4f8b \u4f7f\u7528results\u5b9e\u73b0 commit"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u5904\uff0c\u901a\u8fc7\u5b9a\u4e49commit\u6765\u5b9e\u73b0\u5728docker build\u7684\u65f6\u5019\u6765\u901a\u8fc7commit\u6765\u5b9e\u73b0\u90e8\u7f72"}),"\n",(0,t.jsx)(n.h4,{id:"\u83b7\u53d6commit\u4fe1\u606f",children:"\u83b7\u53d6commit\u4fe1\u606f"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e00\u6b65\u9700\u8981\u5728clone\u4ee3\u7801\u7684\u65f6\u5019\u5c31\u9700\u8981\u83b7\u53d6\u5230\uff0c\u5177\u4f53\u7684yaml\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff0c\u7136\u540e\u8fdb\u884c\u4fee\u6539\u5373\u53ef\r\n",(0,t.jsx)(n.a,{href:"https://hub.tekton.dev/tekton/task/git-clone",children:"https://hub.tekton.dev/tekton/task/git-clone"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230917190859202",src:r(6261).A+"",width:"1172",height:"766"})}),"\n",(0,t.jsx)(n.h4,{id:"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f",children:"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a\u5728pipeline\u4e2d\uff0c\u901a\u8fc7task\u6765\u5b9a\u4e49\u6bcf\u4e2atask\u6267\u884c\u7684\u90e8\u5206\uff0c\u4e0b\u9762\u662f\u62c9\u53d6\u4ee3\u7801\u7684task ,\u7136\u540e\u5728pipeline\u4e2d\u547d\u540d\u4e3aclone ,\u5173\u8054\u4e86git-clone\u7684\u4efb\u52a1\u3002\u6240\u4ee5\u5982\u679c\u60f3\u8981\u83b7\u53d6commit\u4fe1\u606f\uff0c\u9700\u8981\u4ececlone\u4e2d\u83b7\u53d6\u53d8\u91cf\u4fe1\u606f"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230917191253053",src:r(5056).A+"",width:"800",height:"276"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u5728pipeline\u4e2d\u9700\u8981\u628a\u53d8\u91cf\u6ce8\u5165\u8fdb\u53bb\uff0c\u9700\u8981\u5b9a\u4e49\uff0c\u7136\u540e\u5173\u8054\u7684\u4efb\u52a1\u4e3adocker ,  \u65b9\u5f0f\u5982\u4e0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230917191754527",src:r(9694).A+"",width:"1130",height:"383"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728task-docker\u4e2d\u6dfb\u52a0\u6ce8\u5165\u7684\u53d8\u91cf"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230917191956662",src:r(7560).A+"",width:"1308",height:"873"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},6261:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/image-20230917190859202-552d93e92b3b377c4ea668acc4892842.png"},5056:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/image-20230917191253053-d35afa4ec69ef385f6d2e39d5aa03fdf.png"},9694:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/image-20230917191754527-800a432c500476429125b1c2ea4d1437.png"},7560:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/image-20230917191956662-4c95edc9594353739e3939c24a054cb7.png"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);