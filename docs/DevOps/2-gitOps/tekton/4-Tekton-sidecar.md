## Tektion Sidecar

两种方式



- Dood : Docker Outside of Docker  (通过挂载宿主机docker daemon来实现)
- Dind  （通过docker中运行docker来实现）



以前我们在构建容器镜像的时候是通过挂载宿主机的 `docker.sock` 文件到容器中来执行的（上面我们是通过 `DOCKER_HOST` 环境变量来指定 Daemon 地址），严格意义上来说这种方式叫 `Dood - Docker Outside of Docker`，`DooD` 通过绑定安装 Docker 套接字来使用其底层宿主机的 Docker Daemon，而真正的 `DinD` 是在其中包含一个完整的 Docker 服务。显然 `DooD` 这种方式更快，因为可以利用它的缓存机制，而 `DinD` 显然更加安全、更加干净，对宿主机产生的影响更小，而且支持并行运行，因为每个容器里面都是一个独立的 Docker Daemon，互相不受影响，当然 `DooD` 更加简单易用。这里我们就来使用 Sidecar 的方式为 Tekton 中的容器构建提供一个 `DinD` 模式的构建服务。





root@k8s-master:~/tekton/demo/pipline-sidecar# 

demo-rescource.yaml

```yaml
apiVersion: tekton.dev/v1alpha1
kind: PipelineResource
metadata:
  name: git-res  # resource的名字
spec:
  type: git
  params:
  - name: revision
    value: master  #我要拉取仓库哪个分支的代码
  - name: url
    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #这是我Github的golang代码仓库，运行的gin框架代码

---
apiVersion: tekton.dev/v1alpha1
kind: PipelineResource
metadata: 
  name: harbor-image
spec:
  type: image
  params:
    - name: url
      value: registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo
```


pipelinerun.yaml
```yaml
apiVersion: tekton.dev/v1beta1
kind: PipelineRun
metadata:
  name: pipelinerun-results
  namespace: default
spec:
  serviceAccountName: git-pull
  pipelineRef:
    name: pipeline-results
  resources:
  - name: git-res  # 指定输入的git仓库资源
    resourceRef:
      name: git-res
  - name: harbor-image
    resourceRef:
      name: harbor-image

  params:
    - name: image-tag
      value: "v0.3.0"
    - name: image
      value: "registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo"
```


pipeline.yaml
```yaml
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: pipeline-results
spec:
  resources:  # 为 Tasks 提供输入和输出资源声明
    - name: git-res
      type: git
    - name: harbor-image
      type: image
  params:
    - name: image
      type: string
    - name: image-tag
      type: string
      default: "v0.4.0"
    - name: registry_url
      type: string
      default: "registry.cn-hangzhou.aliyuncs.com"
    - name: registry_mirror
      type: string
      default: "https://ot2k4d59.mirror.aliyuncs.com/"
    - name: insecure_registry
      type: string
      default: "harbor.k8s.local"
  tasks:  # 添加task到流水线中

    # 拉取代码
    - name: clone-code
      taskRef:
        name: task-results
      resources:
        inputs:
          - name: git-res # Task 输入名称
            resource: git-res # Pipeline 资源名称
        outputs: 
          - name: builtImage
            resource: harbor-image 
           
    # 获取构建ID
    - name: get-build-id
      taskRef:
        name: task-generate-build-id
      params:
        - name: base-version
          value: $(params.image-tag) 

    # 构建并且推送镜像到仓库
    - name: build-and-push
      taskRef:
        name: task-build-and-push
      runAfter:
        - clone-code
        - get-build-id
      resources:
        inputs:
          - name: repo
            resource: git-res
        outputs:
          - name: builtImage
            resource: harbor-image
      params:
        - name: imageTag
          value: "$(tasks.get-build-id.results.build-id)"
        - name: hostnamets
          value: "$(tasks.get-build-id.results.hostname-ts)"
        - name: image
          value: "$(params.image):$(tasks.get-build-id.results.build-id)"
        - name: registry_url
          value: $(params.registry_url)
        - name: insecure_registry
          value: $(params.insecure_registry)
        - name: registry_mirror
          value: $(params.registry_mirror)
```


sa.yaml
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: git-pull
secrets:
  - name: basic-git
  - name: basic-docker
```


secret_docker.yaml
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: basic-docker
  annotations:
    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below
type: kubernetes.io/basic-auth
stringData:
  username: xxxxxx
  password: xxxxxxx
```


secret.yaml
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: basic-git
  annotations:
    tekton.dev/git-0: https://gitee.com # Described below
type: kubernetes.io/basic-auth
stringData:
  username: xxxxxx
  password: xxxxxxx
```



需要在此处做适当的调整

task-docker-build-push.yaml

```yaml
# task-build-push.yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: task-build-and-push
spec:
  resources:
    inputs: # 定义输入资源
      - name: repo #输入资源，就是github的那个仓库
        type: git
    outputs: # 定义输出资源
      - name: builtImage # 输出镜像名字
        type: image
  params:
    - name: pathToDockerfile #指明 dockerfile 在仓库中的哪个位置
      type: string
      default: $(resources.inputs.repo.path)/Dockerfile # repo资源的路径
      description: The path to the dockerfile to build
    - name: builder_image
      description: The location of the docker builder image.
      default: docker:stable
    - name: pathToContext #指明 dockerfile 在仓库中的哪个位置
      type: string
      default: $(resources.inputs.repo.path) # repo资源的路径
      description: the build context used by docker daemon
    - name: imageTag
      type: string
      default: "v0.2.0"
      description: the docker image tag
    - name: hostnamets
      type: string
      default: "hello"
      description:  print host name
    - name: registry_url
      type: string
      description: harbor registry url
      default: "registry.cn-hangzhou.aliyuncs.com"  
    - name: build_extra_args
      description: Extra parameters passed for the build command when building images.
      default: ""
    - name: dockerfile
      description: Path to the Dockerfile to build.
      default: ./Dockerfile
    - name: image
      description: Reference of the image docker will produce.
    - name: context
      description: Path to the directory to use as context.
      default: .
    - name: push_extra_args
      description: Extra parameters passed for the push command when pushing images.
      default: ""
  steps:
    - name: docker-build # 构建步骤
      image: $(params.builder_image)
      env:
        - name: DOCKER_HOST # 用 TLS 形式通过 TCP 链接 sidecar
          value: tcp://localhost:2376
        - name: DOCKER_TLS_VERIFY # 校验 TLS
          value: "1"
        - name: DOCKER_CERT_PATH # 使用 sidecar 守护进程生成的证书
          value: /certs/client
      workingDir: $(resources.inputs.repo.path)
      script: | # docker 构建命令
        echo  '[INFO]'  '当前目录为:'  && pwd 
        ls -l 
        cat Dockerfile
        docker login $(params.registry_url)
        docker build \
          $(params.build_extra_args) \
          --no-cache \
          -f $(params.dockerfile) -t $(params.image) $(params.context)
      volumeMounts: # 声明挂载证书目录
        - mountPath: /certs/client
          name: dind-certs
    
    - name: docker-push #
      image: $(params.builder_image)
      env:
        - name: DOCKER_HOST
          value: tcp://localhost:2376
        - name: DOCKER_TLS_VERIFY
          value: "1"
        - name: DOCKER_CERT_PATH
          value: /certs/client
      workingDir: $(resources.inputs.repo.path)
      script: | # 推送 docker 镜像
        docker push $(params.push_extra_args) $(params.image)
      volumeMounts:
        - mountPath: /certs/client
          name: dind-certs

  sidecars: # sidecar 模式，提供 docker daemon服务，实现真正的 DinD 模式
    - image: docker:dind
      name: server
      args:
        - --storage-driver=vfs
        - --userland-proxy=false
        - --debug
        #- --insecure-registry=$(params.insecure_registry)
        - --registry-mirror=$(params.registry_mirror)
      securityContext:
        privileged: true
      env:
        - name: DOCKER_TLS_CERTDIR # 将生成的证书写入与客户端共享的路径
          value: /certs
      volumeMounts:
        - mountPath: /certs/client
          name: dind-certs
      readinessProbe: # 等待 dind daemon 生成它与客户端共享的证书
        periodSeconds: 1
        exec:
          command: ["ls", "/certs/client/ca.pem"]
  volumes: # 使用 emptyDir 的形式即可
    - name: dind-certs
      emptyDir: {}
```


task-generate-build-id.yaml
```yaml
# generate-build-id.yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: task-generate-build-id
spec:
  description: >-
    Given a base version, this task generates a unique build id by appending
    the base-version to the current timestamp.
  params:
    - name: base-version
      description: Base product version
      type: string
      default: "1.0"
  results:
    - name: timestamp
      description: Current timestamp
    - name: build-id
      description: ID of the current build
    - name: hostname-ts
      description: get hostname-ts
  steps:
    - name: get-timestamp
      image: bash:5.0.18
      script: |
        #!/usr/bin/env bash
        ts=`date "+%Y%m%d-%H%M%S"`
        echo "Current Timestamp: ${ts}"
        echo ${ts} | tr -d "\n" | tee $(results.timestamp.path)
    - name: get-buildid
      image: bash:5.0.18
      script: |
        #!/usr/bin/env bash
        ts=`cat $(results.timestamp.path)`
        buildId=$(inputs.params.base-version)-${ts}
        echo ${buildId} | tr -d "\n" | tee $(results.build-id.path)

    - name: hostname-ts
      image: bash:5.0.18
      script: |
        #!/usr/bin/env bash
        ts=`cat $(results.timestamp.path)`
        hostname-name=`hostname`
        hostnamets=${hostname-name}-${ts}
        echo ${hostnamets} | tr -d "\n" | tee $(results.hostname-ts.path)
        echo '[INFO]' hostnamets: ${hostnamets}
```


task-pull-code.yaml
```yaml
# task-test.yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: task-results
spec:
  resources:
    inputs:
      - name: git-res
        type: git
    outputs:
      - name: builtImage
        type: image

  params:
  - name: dockerfile-path #指明 dockerfile 在仓库中的哪个位置
    type: string
    default: $(inputs.resources.golang-resource.path)/ # repo资源的路径
    description: dockerfile path

  steps:
    - name: run-test
      image: alpine:3.15
      workingDir: /workspace/git-res/
      script: |
        ls -l
        #pwd  && ls -l
        for i in $(seq 1 20); do
          touch /root/.m2/$i.txt
        done
        #ls -l  /root/.m2/
      volumeMounts:
        - name: m2
          mountPath: /root/.m2 
  volumes:
    - name: m2
      hostPath:
        path: /root/.m2
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
```