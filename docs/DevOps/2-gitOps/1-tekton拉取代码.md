





## 1、Tekton代码拉取实现

Tekton 的前身是 Knative 的子项目 build-pipeline，主要用来给 Kantive 的 build 模块增加 pipeline 功能。之后独立出来，Tekton 的目标是一个通用的 CI/CD 工具。这是一种常见的产品孵化机制。

目前，私有云市场占有率比较高的 CICD 工具对 Kubernetes 都有所支持，比如 Jenkins、GitLab CI。但是，这些工具只是将 Kubernetes 作为其扩展的一个方面，Kubernetes 作为新的基础设施，需要原生的 CICD 方案。

另一方面，Jenkins 的子项目 JenkinsX 也开始默认使用 Tekton 作为 CI 引擎。使用云原生一等公民 CRD + Controller 实现的 Tekton ，无疑有机会成为云原生的主流编排引擎。 



创建demo

task

```shell
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: demo-task
spec:
  params:
    - name: message
      description: The message to print
      type: string
    - name: hostname
      description:  this is hostname
      type: string
  steps:
    - name: print-message
      image: busybox
      script: |
        #!/bin/sh
        echo "Message: $(params.message)" 
        echo "Hostname: $(params.hostname)"
```



创建task-run

```yaml
root@k8s-master:~/tekton/demo# cat task01-run.yaml 
apiVersion: tekton.dev/v1beta1
kind: TaskRun
metadata:
  name: demo-taskrun
spec:
  taskRef:
    name: demo-task
  params:
    - name: message
      value: "Hello, Tekton!"
    - name: hostname
      value: "www.zlqit.com"
```



Task主要包括以下元素：

- Parameters：用于定义params参数
- Resources：定义输入、输出资源，老版本由PipelineResources定义，不过在新版本中PipelineResources将被弃用
- Steps：定义具体的操作步骤
- Workspaces：定义工作区，Task可以共享工作区
- Results：定义结果输出，可以用于展示或者给另外的Task使用



演示workingDir

```shell
#注意，script和command不能同时使用
root@k8s-master:~/tekton/demo# cat task01.yaml 
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: demo-task
spec:
  params:
    - name: message
      description: The message to print
      type: string
    - name: hostname
      description:  this is hostname
      type: string
  steps:
    - name: print-message
      image: busybox
      script: |
        #!/bin/sh
        echo "Message: $(params.message)" 
        echo "Hostname: $(params.hostname)"
        pwd
      workingDir: /usr/local
root@k8s-master:~/tekton/demo# kubectl  logs  -f demo-taskrun-pod
Message: Hello, Tekton!
Hostname: www.zlqit.com
/usr/local
```



[Tekton系列之理论篇 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/477393232)





## 2、代码拉取

```shell
root@k8s-master:~/tekton/demo/only-pull-code# ls -l
total 28
-rw-r--r-- 1 root root 356 Sep  5 17:01 demo-rescource.yaml
-rw-r--r-- 1 root root 282 Sep  5 18:08 pipelinerun.yaml
-rw-r--r-- 1 root root 444 Sep  5 18:13 pipeline.yaml
-rw-r--r-- 1 root root  92 Sep  4 03:04 sa.yaml
-rw-r--r-- 1 root root 227 Sep  4 03:04 secret.yaml
-rw-r--r-- 1 root root 266 Sep  5 18:12 taskrun.yaml
-rw-r--r-- 1 root root 573 Sep  5 18:29 task.yaml
root@k8s-master:~/tekton/demo/only-pull-code# pwd
/root/tekton/demo/only-pull-code
```



sa.yaml 

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat sa.yaml 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: git-pull
secrets:
  - name: basic-git
```



 secret.yaml 

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat secret.yaml 
apiVersion: v1
kind: Secret
metadata:
  name: basic-git
  annotations:
    tekton.dev/git-0: https://gitee.com # Described below
type: kubernetes.io/basic-auth
stringData:
  username: 409003604@qq.com
  password: xxxxxxxxxxxxxxx

```



task.yaml 

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat task.yaml 
# task-test.yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: test
spec:
  resources:
    inputs:
      - name: demo-resource
        type: git
  steps:
    - name: run-test
      image: alpine:3.15
      workingDir: /workspace/demo-resource
      script: |
        pwd  && ls -l
        for i in $(seq 1 20); do
          touch /root/.m2/$i.txt
        done
        ls -l  /root/.m2/
                
      #args: ['-l']
      volumeMounts:
        - name: m2
          mountPath: /root/.m2
  volumes:
    - name: m2
      hostPath:
        path: /root/.m2

```



taskrun.yaml 

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat taskrun.yaml 
apiVersion: tekton.dev/v1beta1
kind: TaskRun
metadata:
  generateName: test-run-
  namespace: default
spec:
  resources:
    inputs:
    - name: demo-resource 
      resourceRef:
        name: demo-resource
  serviceAccountName: "git-pull"
  taskRef:
    name: test
root@k8s-master:~/tekton/demo/only-pull-code# ls -l

```





pipeline.yaml 

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat pipeline.yaml 
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: test-git
spec:
  resources:  # 为 Tasks 提供输入和输出资源声明
    - name: demo-resource
      type: git
  tasks:  # 添加task到流水线中
    # 运行应用测试
    - name: test-git
      taskRef:
        name: test
      resources:
        inputs:
          - name: demo-resource # Task 输入名称
            resource: demo-resource # Pipeline 资源名称
```



pipelinerun.yaml 

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat pipelinerun.yaml 
apiVersion: tekton.dev/v1beta1
kind: PipelineRun
metadata:
  name: test-git
  namespace: default
spec:
  serviceAccountName: git-pull
  pipelineRef:
    name: test-git
  resources:
  - name: demo-resource  # 指定输入的git仓库资源
    resourceRef:
      name: demo-resource


```



demo-rescource.yaml 

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat demo-rescource.yaml 
apiVersion: tekton.dev/v1alpha1
kind: PipelineResource
metadata:
  name: demo-resource  # resource的名字
spec:
  type: git
  params:
  - name: revision
    value: master  #我要拉取仓库哪个分支的代码
  - name: url
    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #这是我Github的golang代码仓库，运行的gin框架代码
```



## 3、git拉取和harbor登录



```
root@k8s-master:~/tekton/demo/only-pull-code# cat demo-rescource.yaml 
apiVersion: tekton.dev/v1alpha1
kind: PipelineResource
metadata:
  name: demo-resource  # resource的名字
spec:
  type: git
  params:
  - name: revision
    value: master  #我要拉取仓库哪个分支的代码
  - name: url
    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #这是我Github的golang代码仓库，运行的gin框架代码

```

 	

```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat sa.yaml 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: git-pull
secrets:
  - name: basic-git
  - name: basic-docker	
```



需要注意的地方： 

> annotations: 需要对授权的类型进行说明，官网是根据这个去登录和访问harbor和git仓库



```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat secret.yaml 
apiVersion: v1
kind: Secret
metadata:
  name: basic-git
  annotations:
    tekton.dev/git-0: https://gitee.com # Described below
type: kubernetes.io/basic-auth
stringData:
  username: 409003604@qq.com
  password: xxxxxxxxxxxxxxx
```



需要注意的地方： 

> annotations: 需要对授权的类型进行说明，官网是根据这个去登录和访问harbor和git仓库

我们这里在 Secret 对象中添加了一个 tekton.dev/docker-0 的 annotation，该注解信息是用来告诉 Tekton 这些认证信息所属的 Docker 镜像仓库。



```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat secret_docker.yaml 
apiVersion: v1
kind: Secret
metadata:
  name: basic-docker
  annotations:
    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below
type: kubernetes.io/basic-auth
stringData:
  username: xxxxxxxxxxx@126.com
  password: xxxxxxxxxxxxxxx
```



```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat taskrun.yaml 
apiVersion: tekton.dev/v1beta1
kind: TaskRun
metadata:
  generateName: test-run-
  namespace: default
spec:
  resources:
    inputs:
    - name: demo-resource 
      resourceRef:
        name: demo-resource
  serviceAccountName: "git-pull"
  taskRef:
    name: test
```



```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat task.yaml 
# task-test.yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: test
spec:
  resources:
    inputs:
      - name: demo-resource
        type: git
  params:
  - name: dockerfile-path #指明 dockerfile 在仓库中的哪个位置
    type: string
    default: $(inputs.resources.golang-resource.path)/ # repo资源的路径
    description: dockerfile path

  steps:
    - name: run-test
      image: alpine:3.15
      workingDir: /workspace/demo-resource
      script: |
        pwd  && ls -l
        for i in $(seq 1 20); do
          touch /root/.m2/$i.txt
        done
        ls -l  /root/.m2/
                
      #args: ['-l']
      volumeMounts:
        - name: m2
          mountPath: /root/.m2
    - name: docker-login
      image: docker:stable
      env: 
        - name: DOCKER_USER
          valueFROM:
            secretKeyRef:
              name:  basic-docker
              key: username
        - name: DOCKER_PASSWORD
          valueFROM:
            secretKeyRef:
              name: basic-docker
              key: password  
      workingDir: /workspace/demo-resource
      volumeMounts:
      - name: docker-sock
        mountPath: /var/run/docker.sock
      script: | 
        docker login registry.cn-hangzhou.aliyuncs.com # -u $DOCKER_USER -p $DOCKER_PASSWORD
  volumes:
    - name: m2
      hostPath:
        path: /root/.m2
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
```



```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat pipelinerun.yaml 
apiVersion: tekton.dev/v1beta1
kind: PipelineRun
metadata:
  name: test-git
  namespace: default
spec:
  serviceAccountName: git-pull
  pipelineRef:
    name: test-git
  resources:
  - name: demo-resource  # 指定输入的git仓库资源
    resourceRef:
      name: demo-resource
```



```shell
root@k8s-master:~/tekton/demo/only-pull-code# cat pipeline.yaml 
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: test-git
spec:
  resources:  # 为 Tasks 提供输入和输出资源声明
    - name: demo-resource
      type: git
  tasks:  # 添加task到流水线中
    # 运行应用测试
    - name: test-git
      taskRef:
        name: test
      resources:
        inputs:
          - name: demo-resource # Task 输入名称
            resource: demo-resource # Pipeline 资源名称
```



参考链接 

https://blog.51cto.com/u_14813740/4247653

https://www.infvie.com/ops-notes/kubernetes-tekton.html