"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[428],{5454:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(4848),s=r(8453);const i={},t="Tektion-Workspaces",o={id:"DevOps/gitOps/Tekton-workspace",title:"Tektion-Workspaces",description:"workspace\u53ef\u4ee5\u5b9a\u4e49\u5728pipeline\u4e2d\uff0c\u7136\u540e\u5728\u591a\u4e2atask\u4e2d\u53ef\u4ee5\u5b9e\u73b0\u8c03\u7528\uff0c\u5c06\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\u4fdd\u5b58\u5230\u5176\u4e2d\u3002",source:"@site/docs/DevOps/2-gitOps/5-Tekton-workspace.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/Tekton-workspace",permalink:"/en/docs/DevOps/gitOps/Tekton-workspace",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/2-gitOps/5-Tekton-workspace.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:172935997e4,sidebarPosition:5,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"Tekton-sidecar",permalink:"/en/docs/DevOps/gitOps/Tekton-sidecar"},next:{title:"Tekton-triggers",permalink:"/en/docs/DevOps/gitOps/Tekton-triggers"}},p={},c=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"tektion-workspaces",children:"Tektion-Workspaces"})}),"\n",(0,a.jsx)(n.p,{children:"workspace\u53ef\u4ee5\u5b9a\u4e49\u5728pipeline\u4e2d\uff0c\u7136\u540e\u5728\u591a\u4e2atask\u4e2d\u53ef\u4ee5\u5b9e\u73b0\u8c03\u7528\uff0c\u5c06\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\u4fdd\u5b58\u5230\u5176\u4e2d\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u7684\u4e00\u4e2a\u529f\u80fd\u662f\u80fd\u591f\u5728\u4efb\u52a1\u4e4b\u95f4\u5171\u4eab\u5236\u54c1\uff0c\u4ee5\u4fbf\u7f13\u5b58\u6784\u5efa\u5de5\u5177\uff08\u6bd4\u5982 Maven \u548c NPM\uff09\u7684\u4f9d\u8d56\u9879\uff0c\u5728 Tekton 0.10 \u7248\u672c\u5c31\u53d1\u5e03\u589e\u52a0\u4e86\u5bf9 Workspaces \u7684\u652f\u6301\uff0c\u8fd9\u4f7f\u5f97\u6d41\u6c34\u7ebf\u4e2d\u7684\u4efb\u52a1\u53ef\u4ee5\u66f4\u52a0\u8f7b\u677e\u5730\u4f7f\u7528 PV \u6765\u5171\u4eab\u6570\u636e\u4e86\uff0cWorkspaces \u5141\u8bb8\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a pipeline \u4e2d task \u8fd0\u884c\u65f6\u9700\u8981\u7684 volume\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u6b64\u5904\uff0c\u6211\u4f7f\u7528\u7684\u662fjava\u9879\u76ee ",(0,a.jsx)(n.a,{href:"https://gitee.com/zhang_lai_qiang/springboot-helloworld.git%EF%BC%8Cmvn%E6%89%93%E5%8C%85%E5%90%8E%E4%BE%9D%E8%B5%96%E7%BC%93%E5%AD%98%E5%88%B0workspaces%E4%B8%AD%E3%80%82",children:"https://gitee.com/zhang_lai_qiang/springboot-helloworld.git\uff0cmvn\u6253\u5305\u540e\u4f9d\u8d56\u7f13\u5b58\u5230workspaces\u4e2d\u3002"})]}),"\n",(0,a.jsx)(n.p,{children:"Tekton Pipeline\u4e2d\u7684Workspace\u6307\u7684\u662fPipeline\u5728\u8fd0\u884c\u65f6\u9700\u8981\u7684\u5171\u4eab\u5377\u7684\u58f0\u660e\u3002\u5b83\u4eec\u7c7b\u4f3c\u4e8e\u5377\uff0c\u53ea\u662f\u4e0d\u63d0\u4f9b\u5b9e\u9645\u7684\u5377\uff0c\u800c\u53ea\u662f\u58f0\u660e\u610f\u56fe\u3002\u5728Pipeline\u5b9a\u4e49\u4e2d\uff0cWorkspaces\u53ef\u4ee5\u4f5c\u4e3a\u5171\u4eab\u5377\u4f20\u9012\u7ed9\u76f8\u5173Task\u3002\u5f53\u540c\u4e00\u4e2aWorkspaces\u63d0\u4f9b\u7ed9\u591a\u4e2aTask\u65f6\uff0c\u8fd9\u4e9bTask\u53ef\u4ee5\u4ece\u5b8c\u5168\u76f8\u540c\u7684\u5377\u4e2d\u8bfb\u5199\uff0c\u5e76\u6839\u636e\u9700\u8981\u5171\u4eab\u6587\u4ef6\u548c\u5de5\u4ef6\u3002\u5c3d\u7ba1\u4ee5\u4e0a\u7684\u201c\u5377\u201d\u6307\u7684\u662f\u7528\u4e8e\u7f13\u5b58Maven\u4f9d\u8d56\u5173\u7cfb\u7684\u6301\u4e45\u5316\u5377\uff0c\u4f46\u5b83\u4e5f\u53ef\u4ee5\u662fConfigMap\uff0c\u6216\u8005\u662f\u4f20\u9012\u7ed9Pipeline\u8fd0\u884c\u7684Secret\uff0c\u8fd9\u4e9b\u8d44\u6e90\u90fd\u53ef\u4ee5\u5728Task\u4e4b\u95f4\u5171\u4eab\u3002"}),"\n",(0,a.jsx)(n.p,{children:"demo-rescource.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata:\r\n  name: repo  # resource\u7684\u540d\u5b57\r\nspec:\r\n  type: git\r\n  params:\r\n  - name: revision\r\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\r\n  - name: url\r\n    #value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\r\n    value: https://gitee.com/zhang_lai_qiang/springboot-helloworld.git\r\n\r\n---\r\napiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata: \r\n  name: harbor-image\r\nspec:\r\n  type: image\r\n  params:\r\n    - name: url\r\n      value: registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo\n"})}),"\n",(0,a.jsx)(n.p,{children:"pipeline-mvn.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# workspace-mvn-pipeline.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Pipeline\r\nmetadata:\r\n  name: mvn-pipeline\r\nspec:\r\n  workspaces: # \u58f0\u660e workspaces\r\n    - name: local-maven-repo\r\n  resources: # \u58f0\u660e\u4f7f\u7528\u7684\u8d44\u6e90\r\n    - name: repo\r\n      type: git\r\n  tasks:\r\n\r\n    - name: build # \u6784\u5efa\u4efb\u52a1\r\n      taskRef:\r\n        name: mvn-task # \u5f15\u7528\u4e0a\u9762\u7684 mvn \u4efb\u52a1\r\n      resources: # \u4f20\u9012 resources \u8d44\u6e90\r\n        inputs:\r\n          - name: repo\r\n            resource: repo\r\n      params: # \u4f20\u9012 params \u53c2\u6570\r\n        - name: GOALS\r\n          value: ["package"]\r\n      workspaces: # \u4f20\u9012 workspaces\r\n        - name: maven-repo\r\n          workspace: local-maven-repo\r\n\r\n    - name: int-test # \u6d4b\u8bd5\u4efb\u52a1\r\n      taskRef:\r\n        name: mvn-task\r\n      runAfter: ["build"] # \u9700\u8981 build \u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\r\n      resources:\r\n        inputs:\r\n          - name: repo\r\n            resource: repo\r\n      params:\r\n        - name: GOALS\r\n          value: ["verify"]\r\n      workspaces:\r\n        - name: maven-repo\r\n          workspace: local-maven-repo\r\n\r\n#    - name: gen-report # \u6d4b\u8bd5\u62a5\u544a\r\n#      taskRef:\r\n#        name: mvn-task\r\n#      runAfter: ["build"] # \u9700\u8981 build \u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\r\n#      resources:\r\n#        inputs:\r\n#          - name: repo\r\n#            resource: repo\r\n#      params:\r\n#        - name: GOALS\r\n#          value: ["site"]\r\n#      workspaces:\r\n#        - name: maven-repo\r\n#          workspace: local-maven-repo\r\n#\n'})}),"\n",(0,a.jsx)(n.p,{children:"pipelinerun.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: tekton.dev/v1beta1\r\nkind: PipelineRun\r\nmetadata:\r\n  name: mvn-pipelinerun\r\n  namespace: default\r\nspec:\r\n  #serviceAccountName: git-pull\r\n  pipelineRef:\r\n    name: mvn-pipeline\r\n  resources:\r\n  - name: repo  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\r\n    resourceRef:\r\n      name: repo\r\n  workspaces:\r\n    - name: local-maven-repo\r\n      persistentVolumeClaim:\r\n        claimName: mvn-repo-pvc\n"})}),"\n",(0,a.jsx)(n.p,{children:"pvc.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# workspace-mvn-pvc.yaml\r\napiVersion: v1\r\nkind: PersistentVolumeClaim\r\nmetadata:\r\n  name: mvn-repo-pvc\r\nspec:\r\n  resources:\r\n    requests:\r\n      storage: 5Gi\r\n  volumeMode: Filesystem\r\n  storageClassName: nfs-storage # \u4f7f\u7528 StorageClass \u81ea\u52a8\u751f\u6210 PV\r\n  accessModes:\r\n    - ReadWriteOnce\n"})}),"\n",(0,a.jsx)(n.p,{children:"sa.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: git-pull\r\nsecrets:\r\n  - name: basic-git\r\n  - name: basic-docker\n"})}),"\n",(0,a.jsx)(n.p,{children:"secret_docker.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-docker\r\n  annotations:\r\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: xxxxxxxxx\r\n  password: xxxxxxxxx\n"})}),"\n",(0,a.jsx)(n.p,{children:"secret.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-git\r\n  annotations:\r\n    tekton.dev/git-0: https://gitee.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: xxxxxxxxx\r\n  password: xxxxxxxxx\n"})}),"\n",(0,a.jsx)(n.p,{children:"task-maven.yaml"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# workspace-mvn-task.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: mvn-task\r\nspec:\r\n  workspaces:\r\n    - name: maven-repo\r\n  resources:\r\n    inputs:\r\n      - name: repo\r\n        type: git\r\n  params:\r\n    - name: GOALS\r\n      description: The Maven goals to run\r\n      type: array\r\n      default: ["package"]\r\n  steps:\r\n    - name: mvn\r\n      #image: cnych/cloud-builders-mvn:tekton\r\n      image: zhanglaiqiang/mvn:v3.6.3.4\r\n      workingDir: /workspace/repo\r\n      command: ["/usr/bin/mvn"]\r\n      args:\r\n        - -Dmaven.repo.local=$(workspaces.maven-repo.path)\r\n        - "-s"\r\n        - "/usr/share/maven/ref/settings-docker.xml"   #\u6307\u5b9a\u4f7f\u7528\u963f\u91cc\u6e90\r\n        - "$(inputs.params.GOALS)"\r\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-Dmaven.repo.local=$(workspaces.maven-repo.path)"})," \u547d\u4ee4\u5c06\u5de5\u4f5c\u533a\u7684\u8def\u5f84\u4f5c\u4e3a\u672c\u5730\u7684 Maven \u5e93\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u914d\u7f6e Workspace \u6302\u8f7d\u7684\u8def\u5f84\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u7684\u662f\u9ed8\u8ba4\u7684\u8def\u5f84\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u521b\u5efa\u540e\u67e5\u770b\uff0c\u6b65\u9aa42\u4f7f\u7528\u7684\u65f6\u95f4\u4e00\u5171\u7528\u4e8617s\u5c31\u6267\u884c\u5b8c\u4e86\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image-20230910165137410",src:r(8996).A+"",width:"1491",height:"539"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"root@k8s-master:~/tekton/demo/pipline-workspaces# tkn  pr describe mvn-pipelinerun \r\nName:              mvn-pipelinerun\r\nNamespace:         default\r\nPipeline Ref:      mvn-pipeline\r\nService Account:   default\r\nTimeout:           1h0m0s\r\nLabels:\r\n tekton.dev/pipeline=mvn-pipeline\r\n\r\n\ud83c\udf21\ufe0f  Status\r\n\r\nSTARTED          DURATION     STATUS\r\n32 minutes ago   32 seconds   Succeeded\r\n\r\n\ud83d\udce6 Resources\r\n\r\n NAME     RESOURCE REF\r\n \u2219 repo   repo\r\n\r\n\u2693 Params\r\n\r\n No params\r\n\r\n\ud83d\udcdd Results\r\n\r\n No results\r\n\r\n\ud83d\udcc2 Workspaces\r\n\r\n NAME                 SUB PATH   WORKSPACE BINDING\r\n \u2219 local-maven-repo   ---        PersistentVolumeClaim (claimName=mvn-repo-pvc)\r\n\r\n\ud83d\uddc2  Taskruns\r\n\r\n NAME                         TASK NAME   STARTED          DURATION     STATUS\r\n \u2219 mvn-pipelinerun-int-test   int-test    32 minutes ago   17 seconds   Succeeded\r\n \u2219 mvn-pipelinerun-build      build       32 minutes ago   15 seconds   Succeeded\r\n\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8996:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/image-20230910165137410-95b99cc0affd6eca18969388a771addd.png"},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var a=r(6540);const s={},i=a.createContext(s);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);