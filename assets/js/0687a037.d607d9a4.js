"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3695],{8368:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var r=t(4848),i=t(8453);const o={},c=void 0,s={id:"k8s/k8s develop/Client-go",title:"Client-go",description:"1.Client-go\u7684\u56db\u79cd\u65b9\u5f0f",source:"@site/docs/k8s/k8s develop/2.Client-go.md",sourceDirName:"k8s/k8s develop",slug:"/k8s/k8s develop/Client-go",permalink:"/docs/k8s/k8s develop/Client-go",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/k8s/k8s develop/2.Client-go.md",tags:[],version:"current",lastUpdatedBy:"shouji1128955",lastUpdatedAt:1737132563e3,sidebarPosition:2,frontMatter:{},sidebar:"k8s",previous:{title:"operator",permalink:"/docs/k8s/k8s develop/operator"},next:{title:"\u63a7\u5236\u5668 CRD \u4ecb\u7ecd",permalink:"/docs/k8s/k8s develop/Controller"}},l={},a=[{value:"1.Client-go\u7684\u56db\u79cd\u65b9\u5f0f",id:"1client-go\u7684\u56db\u79cd\u65b9\u5f0f",level:2},{value:"1.1 RestClient",id:"11-restclient",level:3},{value:"1.2 ClientSet",id:"12-clientset",level:3},{value:"1.3DynamicClient",id:"13dynamicclient",level:3},{value:"1.3.1 \u4f7f\u7528DynamicClient\u6765\u83b7\u53d6\u8d44\u6e90",id:"131-\u4f7f\u7528dynamicclient\u6765\u83b7\u53d6\u8d44\u6e90",level:4},{value:"1.3.2 \u8bfb\u53d6yaml\u6587\u4ef6\u6765\u521b\u5efa\u8d44\u6e90",id:"132-\u8bfb\u53d6yaml\u6587\u4ef6\u6765\u521b\u5efa\u8d44\u6e90",level:4},{value:"2.Client-gowatch",id:"2client-gowatch",level:2},{value:"2.1 \u4f7f\u7528go-watch\u5b9e\u73b0\u76d1\u542c",id:"21-\u4f7f\u7528go-watch\u5b9e\u73b0\u76d1\u542c",level:3},{value:"2.2 \u4f7f\u7528Informer\u4ee3\u66ff",id:"22-\u4f7f\u7528informer\u4ee3\u66ff",level:3},{value:"2.3 \u5f15\u5165RateLimitingQueue",id:"23-\u5f15\u5165ratelimitingqueue",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"1client-go\u7684\u56db\u79cd\u65b9\u5f0f",children:"1.Client-go\u7684\u56db\u79cd\u65b9\u5f0f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"ClientSent"}),"\n",(0,r.jsx)(e.li,{children:"DynamicClient"}),"\n",(0,r.jsx)(e.li,{children:"RESTClient"}),"\n",(0,r.jsx)(e.li,{children:"DiscoveryClient"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e00\u822c\u6211\u4eec\u4f7f\u7528\u524d\u4e24\u79cd\u5c31\u591f\u4e86\uff0c\u7b2c\u4e09\u79cd\u4e5f\u4f7f\u7528\u5f88\u5c11\uff0c\u7b2c\u56db\u79cd\u6211\u4eec\u4f5c\u4e3a\u4e86\u89e3\u5373\u53ef\u3002\u901a\u8fc7\u4e0b\u9762\u7684\u903b\u8f91\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0c\u6700\u7ec8\u524d\u9762\u4e09\u95e8\u90fd\u4f1a\u8bf7\u6c42RestClient\u3002\u6700\u7ec8RestClient\u53bb\u8bf7\u6c42API server\u3002\u91cd\u70b9\u53ef\u4ee5\u4e86\u89e3ClientSet\u548cDynamicClient\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/202411232305444.png",alt:""})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"flag"\n\tcorev1 "k8s.io/api/core/v1"\n\tmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n\t"k8s.io/client-go/rest"\n\t"k8s.io/client-go/tools/clientcmd"\n)\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"11-restclient",children:"1.1 RestClient"}),"\n",(0,r.jsx)(e.p,{children:"RestClient\u662f\u5c5e\u4e8e\u6bd4\u8f83\u5e95\u5c42\u7684\u5ba2\u6237\u7aef\uff0c\u4e0b\u9762\u901a\u8fc7RestClient\u6765\u5b9e\u73b0\u4e00\u4e2a\u5ba2\u6237\u7aef\u7684\u7b80\u5355\u5b9e\u73b0"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n    "context"\n    "flag"\n    "fmt"\n    corev1 "k8s.io/api/core/v1"\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n    "k8s.io/client-go/kubernetes/scheme"\n    "k8s.io/client-go/rest"\n    "k8s.io/client-go/tools/clientcmd"\n)\n\nfunc main() {\n    kubeconfig := flag.String("kubeconfig", "/etc/rancher/k8s/k8s_test.yaml", "absolute path to the kubeconfig file")\n    config, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)\n    if err != nil {\n       fmt.Printf("error: %s", err.Error())\n    }\n    config.APIPath = "api"\n    config.GroupVersion = &corev1.SchemeGroupVersion\n    //\u6307\u5b9a\u7f16\u7801\u5668\n    config.NegotiatedSerializer = scheme.Codecs\n    //\u521d\u59cb\u5316 restClient\n    restClient, err := rest.RESTClientFor(config)\n    if err != nil {\n       fmt.Printf("error: %s", err.Error())\n    }\n\n    //\u56e0\u4e3aRestClient\u83b7\u53d6\u5230\u7684\u662f\u4e00\u4e2ajson ,\u9700\u8981 unmashl\n    //\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u7a7a\u7ed3\u6784\u4f53\uff0c\u7528\u6237\u5b58\u50a8pod\u5217\u8868\n    podList := &corev1.PodList{}\n    restClient.Get().Namespace("monitoring").Resource("pods").VersionedParams(&metav1.ListOptions{Limit: 500}, scheme.ParameterCodec).Do(context.Background()).Into(podList)\n    for _, pod := range podList.Items {\n       fmt.Println(pod.Name, pod.Namespace, pod.Status.Phase, pod.Status.PodIP)\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u70b9Get()\u65b9\u6cd5\u8fdb\u53bb\u4e4b\u540e\u67e5\u770b\u8fd8\u6709\u5f88\u591a\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7rest\u7684\u65b9\u5f0f\u5b9e\u73b0\u3002 \u6bd4\u8f83\u5e95\u5c42\uff0c\u5b9e\u73b0\u8d77\u6765\u9700\u8981\u5b9a\u4e49\u7ed3\u6784\u4f53\uff0c \u4e5f\u6bd4\u8f83\u9ebb\u70e6"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/202411240024308.png",alt:""})}),"\n",(0,r.jsx)(e.h3,{id:"12-clientset",children:"1.2 ClientSet"}),"\n",(0,r.jsx)(e.p,{children:"\u6e90\u7801\u5730\u5740:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/client-go/blob/master/kubernetes/clientset.go",children:"https://github.com/kubernetes/client-go/blob/master/kubernetes/clientset.go"})}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u5e38\u7528\u7684Client, \u5b9e\u73b0\u4e86\u6240\u6709k8s\u6807\u51c6\u5bf9\u8c61\u7684\u63a5\u53e3"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"flag"\n\t"fmt"\n\tappsv1 "k8s.io/api/apps/v1"\n\tcorev1 "k8s.io/api/core/v1"\n\tmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n\t"k8s.io/client-go/kubernetes"\n\t"k8s.io/client-go/tools/clientcmd"\n\t"k8s.io/utils/pointer"\n)\n\n// \u901a\u8fc7clientSet\u5b9e\u73b0\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\nfunc main() {\n\tkubeconfig := flag.String("kubeconfig", "/etc/rancher/k8s/k8s_test.yaml", "absolute path to the kubeconfig file")\n\tconfig, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tclientset, err := kubernetes.NewForConfig(config)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\n\t//\u5b9a\u4e49\u4e00\u4e2anginx deployment\n\tdeployment := &appsv1.Deployment{\n\t\tObjectMeta: metav1.ObjectMeta{\n\t\t\tName: "nginx-clientset",\n\t\t},\n\t\tSpec: appsv1.DeploymentSpec{\n\t\t\tReplicas: pointer.Int32Ptr(1),\n\t\t\tSelector: &metav1.LabelSelector{\n\t\t\t\tMatchLabels: map[string]string{\n\t\t\t\t\t"app": "nginx",\n\t\t\t\t},\n\t\t\t},\n\t\t\tTemplate: corev1.PodTemplateSpec{\n\t\t\t\tObjectMeta: metav1.ObjectMeta{\n\t\t\t\t\tLabels: map[string]string{\n\t\t\t\t\t\t"app": "nginx",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\tSpec: corev1.PodSpec{\n\t\t\t\t\tContainers: []corev1.Container{\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tName:  "nginx",\n\t\t\t\t\t\t\tImage: "nginx:1.7.9",\n\t\t\t\t\t\t\tPorts: []corev1.ContainerPort{\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tContainerPort: 80,\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t}\n\n\t//\u521b\u5efanginx deployment\n\tdeploymentClient := clientset.AppsV1().Deployments(corev1.NamespaceDefault)\n\tresult, err := deploymentClient.Create(context.TODO(), deployment, metav1.CreateOptions{})\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tfmt.Printf("Deployment created: %s", result.GetObjectMeta().GetName())\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"go mod init && go run main.go"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u4f55\u60f3\u8981\u5b9a\u4e49\u4e00\u4e2aservice\uff0c\u5176\u5b9e\u8ddf\u4e0a\u9762\u662f\u7c7b\u4f3c\u7684"}),"\n",(0,r.jsx)(e.p,{children:"\u603b\u7ed3:  ClientSet\u57fa\u672c\u4e0a\u53ef\u4ee5\u5bf9\u6240\u6709k8s\u7684\u8d44\u6e90\u8fdb\u884c\u589e\u5220\u6539\u67e5\uff0c\u4f46\u662f\u53ea\u6709\u4e00\u79cd\u4f8b\u5916\uff0c\u5c31\u662fcrd\u3002 ClientSet\u4e2d\u5c01\u88c5\u7684\u90fd\u662fk8s\u6807\u51c6\u7684\u4e00\u4e9b\u8d44\u6e90\uff0c\u6240\u4ee5\u4e0d\u4f1a\u81ea\u5b9a\u4e49\u7684crd\u8d44\u6e90\u5c01\u88c5\uff0c\u5982\u679c\u60f3\u8981\u5b9e\u73b0\u64cd\u4f5c\u81ea\u5b9a\u4e49crd\u8d44\u6e90\uff0c\u90a3\u4e48\u5728\u4e0b\u9762\u7684\u65b9\u5f0f\u4e2d\uff0c\u901a\u8fc7NynamicClient\u6765\u5b9e\u73b0\uff0c\u90a3\u4e48\u5728\u4e0b\u9762\u7684\u65b9\u5f0f\u4e2d\u6211\u5c06\u4f1a\u8fdb\u884c\u6f14\u793a\u8bf4\u660e\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"13dynamicclient",children:"1.3DynamicClient"}),"\n",(0,r.jsx)(e.p,{children:"\u6e90\u7801\u5730\u5740:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/kubernetes/client-go/tree/master/dynamic",children:"https://github.com/kubernetes/client-go/tree/master/dynamic"})}),"\n",(0,r.jsx)(e.p,{children:"\u52a8\u6001\u5ba2\u6237\u7aef:  \u53ef\u4ee5\u5bf9\u4efb\u4f55\u8d44\u6e90\u8fdb\u884c\u64cd\u4f5c(\u5305\u62ec\u6807\u51c6k8s\u8d44\u6e90\u4ee5\u53ca\u81ea\u5b9a\u4e49crd)"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u7684\u6240\u6709\u6570\u636e\u7ed3\u6784\u90fd\u662fUnstructured struct"}),"\n",(0,r.jsx)(e.h4,{id:"131-\u4f7f\u7528dynamicclient\u6765\u83b7\u53d6\u8d44\u6e90",children:"1.3.1 \u4f7f\u7528DynamicClient\u6765\u83b7\u53d6\u8d44\u6e90"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"flag"\n\t"fmt"\n\t"golang.org/x/net/context"\n\tcorev1 "k8s.io/api/core/v1"\n\tmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n\t"k8s.io/apimachinery/pkg/runtime"\n\t"k8s.io/apimachinery/pkg/runtime/schema"\n\t"k8s.io/client-go/dynamic"\n\t"k8s.io/client-go/tools/clientcmd"\n)\n\nfunc main() {\n\t//\u53ef\u901a\u8fc7GVR\u6765\u521b\u5efa\u4efb\u4f55\u8d44\u6e90\n\tkubeconfig := flag.String("kubeconfig", "/etc/rancher/k8s/k8s_test.yaml", "absolute path to the kubeconfig file")\n\tconfig, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tdynamicClient, err := dynamic.NewForConfig(config)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\t//\u6307\u5b9aGVR\n\tgvr := schema.GroupVersionResource{\n\t\tGroup:    "",\n\t\tVersion:  "v1",\n\t\tResource: "pods",\n\t}\n\n\t//\u83b7\u53d6pod \u5217\u8868,\u8fd9\u91cc\u6240\u8c13\u7684podlist\u662f\u6ca1\u6709unStruct\uff0c\u662f\u5c5e\u4e8e\u975e\u7ed3\u6784\u5316\u6570\u636e\n\tunStructPodList, err := dynamicClient.Resource(gvr).Namespace("kube-system").List(context.TODO(), metav1.ListOptions{})\n\tif err != nil {\n\t\tfmt.Printf("error: %s" + err.Error())\n\t}\n\t//\u5b9a\u4e49\u4e00\u4e2apodList Struct\n\tPodList := &corev1.PodList{}\n\t//\u5c06Unstructured \u8f6c\u6362\u4e3aPodList\n\n\terr = runtime.DefaultUnstructuredConverter.FromUnstructured(unStructPodList.UnstructuredContent(), PodList)\n\tif err != nil {\n\t\tfmt.Printf("error: %s" + err.Error())\n\t}\n\tfor _, Pod := range PodList.Items {\n\t\tfmt.Println(Pod.Name, Pod.Namespace, Pod.Status.Phase)\n\t}\n}\n\n'})}),"\n",(0,r.jsx)(e.h4,{id:"132-\u8bfb\u53d6yaml\u6587\u4ef6\u6765\u521b\u5efa\u8d44\u6e90",children:"1.3.2 \u8bfb\u53d6yaml\u6587\u4ef6\u6765\u521b\u5efa\u8d44\u6e90"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t_ "embed"\n\t"flag"\n\t"fmt"\n\tv1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n\t"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"\n\t"k8s.io/apimachinery/pkg/runtime/schema"\n\t"k8s.io/apimachinery/pkg/util/yaml"\n\t"k8s.io/client-go/dynamic"\n\t"k8s.io/client-go/tools/clientcmd"\n\t"strings"\n)\n\nvar (\n\t//go:embed nginx.yaml\n\tdeployYaml string\n)\n\nfunc main() {\n\t//\u53ef\u901a\u8fc7GVR\u6765\u521b\u5efa\u4efb\u4f55\u8d44\u6e90\n\tkubeconfig := flag.String("kubeconfig", "/etc/rancher/k8s/k8s_test.yaml", "absolute path to the kubeconfig file")\n\tconfig, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tdynamicClient, err := dynamic.NewForConfig(config)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\n\t//\u89e3\u6790yaml  \u8f6c\u6210Unstructured\n\tdeployObj := &unstructured.Unstructured{}\n\tif err = yaml.Unmarshal([]byte(deployYaml), deployObj); err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\n\t//\u6307\u5b9aGVR\n\tapiVersion, found, err := unstructured.NestedString(deployObj.Object, "apiVersion")\n\tif err != nil || !found {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tkind, found, err := unstructured.NestedString(deployObj.Object, "kind")\n\tif err != nil || !found {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\n\tgvr := schema.GroupVersionResource{}\n\tversionParts := strings.Split(apiVersion, "/")\n\tif len(versionParts) == 2 {\n\t\tgvr.Group = versionParts[0]\n\t\tgvr.Version = versionParts[1]\n\t} else {\n\t\tgvr.Group = versionParts[0]\n\t}\n\tswitch kind {\n\tcase "Deployment":\n\t\tgvr.Resource = "deployments"\n\tcase "pod":\n\t\tgvr.Resource = "pods"\n\tdefault:\n\t\tfmt.Printf("Unsupported kind: %s", kind)\n\t}\n\t//\u4f7f\u7528dynamicClient\u521b\u5efa\u8d44\u6e90\n\t_, err = dynamicClient.Resource(gvr).Namespace("default").Create(context.TODO(), deployObj, v1.CreateOptions{})\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tfmt.Printf("Create deployment successfully")\n}\n\n'})}),"\n",(0,r.jsx)(e.p,{children:"Nginx.yaml"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-dynamic-2\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 2 # tells deployment to run 2 pods matching the template\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n"})}),"\n",(0,r.jsx)(e.h2,{id:"2client-gowatch",children:"2.Client-gowatch"}),"\n",(0,r.jsx)(e.h3,{id:"21-\u4f7f\u7528go-watch\u5b9e\u73b0\u76d1\u542c",children:"2.1 \u4f7f\u7528go-watch\u5b9e\u73b0\u76d1\u542c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"flag"\n\t"fmt"\n\tcorev1 "k8s.io/api/core/v1"\n\tmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n\t"k8s.io/apimachinery/pkg/watch"\n\t"k8s.io/client-go/kubernetes"\n\t"k8s.io/client-go/tools/clientcmd"\n)\n\nfunc main() {\n\tkubeconfig := flag.String("kubeconfig", "/etc/rancher/k8s/k8s_test.yaml", "absolute path to the kubeconfig file")\n\tconfig, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tclientSet, err := kubernetes.NewForConfig(config)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\ttimeout := int64(600)\n\twatcher, _ := clientSet.CoreV1().Pods("default").Watch(context.TODO(), metav1.ListOptions{TimeoutSeconds: &timeout})\n\tfor event := range watcher.ResultChan() {\n\t\titem := event.Object.(*corev1.Pod)\n\t\tswitch event.Type {\n\t\tcase watch.Added:\n\t\t\tprocessPod(item.GetName())\n\t\tcase watch.Modified:\n\t\tcase watch.Deleted:\n\n\t\t}\n\t}\n\n}\n\nfunc processPod(podName string) {\n\tfmt.Printf("processing pod %s\\n", podName)\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"timeout := int64(600)"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b9a\u4e49\u4e86watch\u7684\u65f6\u95f4"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4ec0\u4e48\u4e0d\u63a8\u8350\u76f4\u63a5\u4f7f\u7528Watch"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5904\u7406watch\u8d85\u65f6\uff0c\u65ad\u5f00\u91cd\u8fde\u7b49\u60c5\u51b5\u7684\u5904\u7406\u6bd4\u8f83\u590d\u6742"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Watch\u673a\u5236\u76f4\u63a5\u8bf7\u6c42K8s API Server,\u589e\u52a0\u4e86\u96c6\u7fa4\u8d1f\u8f7d"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e\u5e0c\u671b\u5bf9\u591a\u4e2a\u8d44\u6e90Watch\u65f6\u9700\u8981\u521b\u5efa\u5355\u72ec\u7684\u8fde\u63a5\u800c\u65e0\u6cd5\u5171\u4eab,\u589e\u52a0\u8d44\u6e90\u6d88\u8017\u548c\u96c6\u7fa4\u8d1f\u8f7d"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u91cd\u8fde\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e8b\u4ef6\u4e22\u5931"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5927\u91cf\u4e8b\u4ef6\u4ea7\u751f\u65f6\u65e0\u9650\u6d41\u903b\u8f91\uff0c\u53ef\u80fd\u5bfc\u81f4\u4e1a\u52a1\u8fc7\u8f7d\u5d29\u6e83"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e1a\u52a1\u83b7\u5f97\u4e8b\u4ef6\u4fe1\u53f7\u540e\uff0c\u5982\u679c\u5904\u7406\u5931\u8d25\uff0c\u6ca1\u6709\u7b2c\u4e8c\u6b21\u5904\u7406\u673a\u4f1a"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"22-\u4f7f\u7528informer\u4ee3\u66ff",children:"2.2 \u4f7f\u7528Informer\u4ee3\u66ff"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528Informer\u7684\u4e00\u4e9b\u7279\u70b9"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u57fa\u4e8eWatch\u5b9e\u73b0\uff0c\u63d0\u4f9b\u66f4\u9ad8\u5c42\u6b21\u7684\u62bd\u8c61\uff0c\u66f4\u7b80\u5355\uff0c\u5b89\u5168\uff0c\u9ad8\u6027\u80fd"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u81ea\u52a8\u5904\u7406\u8d85\u65f6\u548c\u91cd\u8fde\u673a\u5236"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u672c\u5730\u7f13\u5b58\u673a\u5236\uff0c\u65e0\u987b\u9891\u7e41\u8c03\u7528API Server"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5185\u7f6e\u5168\u91cf\u548c\u589e\u91cf\u540c\u6b65\u673a\u5236\uff0c\u786e\u4fdd\u4e8b\u4ef6\u4e0d\u4e22\u5931"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53ef\u7ed3\u5408Rate Limiting\u548c\u5ef6\u8fdf\u961f\u5217\uff0c\u63a7\u5236\u65f6\u95f4\u5904\u7406\u901f\u7387\uff0c\u907f\u514d\u4e1a\u52a1\u8fc7\u8f7d\uff0c\u540c\u65f6\u652f\u6301\u9519\u8bef\u548c\u91cd\u8bd5"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528SharedlnformerFactory\u521b\u5efa\u4e00\u4e2a\u5171\u4eab\u7684Informer\u5b9e\u4f8b\n\u53ef\u4ee5\u5b9e\u73b0\u76d1\u542c\u591a\u4e2a\u8d44\u6e90\uff0c\u6bd4\u5982\u76d1\u542cDeployment,Service\u7b49\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u7f51\u7edc\u548c\u8d44\u6e90\u6d88\u8017\uff0c\u51cf\u8f7bK8s API\u8d1f\u8f7d"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u9762\u901a\u8fc7Informer\u6765\u5b9e\u73b0\uff0c\u53ef\u4ee5\u89e3\u51b3\u4e0a\u9762watch\u7684\u5b58\u5728\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u6bd4\u5982\uff0cinformer\u53ef\u4ee5\u901a\u8fc7\u7f13\u5b58\u6765\u51cf\u8f7b\u591aapi-server\u7684\u538b\u529b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"flag"\n\t"fmt"\n\t"k8s.io/apimachinery/pkg/labels"\n\t"k8s.io/client-go/informers"\n\t"k8s.io/client-go/kubernetes"\n\t"k8s.io/client-go/tools/cache"\n\t"k8s.io/client-go/tools/clientcmd"\n\t"time"\n)\n\nfunc main() {\n\tkubeconfig := flag.String("kubeconfig", "/etc/rancher/k8s/k8s_test.yaml", "absolute path to the kubeconfig file")\n\tconfig, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tclientSet, err := kubernetes.NewForConfig(config)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tinformerFactory := informers.NewSharedInformerFactory(clientSet, time.Minute*12) //\u5168\u91cf\u540c\u6b65\u65f6\u95f4\n\n\t//deployment \u53ef\u4ee5\u5bf9deployment\u8fdb\u884c\u76d1\u542c\n\tdeploymentInformer := informerFactory.Apps().V1().Deployments()\n\tinformer := deploymentInformer.Informer()\n\n\tdeployLister := deploymentInformer.Lister()\n\tinformer.AddEventHandler(cache.ResourceEventHandlerFuncs{\n\t\tAddFunc: func(obj interface{}) {\n\t\t\tfmt.Println("Add obj:")\n\t\t},\n\t\tUpdateFunc: func(old, new interface{}) {\n\t\t\tfmt.Println("Update old:")\n\t\t},\n\t\tDeleteFunc: func(obj interface{}) {\n\t\t\tfmt.Println("Delete obj:")\n\t\t},\n\t})\n\n\t//service \u53ef\u4ee5\u5bf9service\u8fdb\u884c\u76d1\u542c\n\tserviceInformer := informerFactory.Core().V1().Services()\n\tinformer = serviceInformer.Informer()\n\tinformer.AddEventHandler(cache.ResourceEventHandlerFuncs{\n\t\tAddFunc: func(obj interface{}) {\n\t\t\tfmt.Println("Add obj:")\n\t\t},\n\t\tUpdateFunc: func(old, new interface{}) {\n\t\t\tfmt.Println("Update old")\n\t\t},\n\t\tDeleteFunc: func(obj interface{}) {\n\t\t\tfmt.Println("Delete obj:")\n\t\t},\n\t})\n\tstopper := make(chan struct{})\n\tdefer close(stopper)\n\t//\u542f\u52a8informer, List & watch\n\tinformerFactory.Start(stopper)\n\tinformerFactory.WaitForCacheSync(stopper) //\u7b49\u5f85Informer\u7684\u6240\u6709\u7f13\u5b58\n\tdeployments, err := deployLister.List(labels.Everything())\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tfor idx, deploy := range deployments {\n\t\tfmt.Println(idx, deploy.Name)\n\t}\n\t<-stopper\n}\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"23-\u5f15\u5165ratelimitingqueue",children:"2.3 \u5f15\u5165RateLimitingQueue"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u4e0a\u9762\u7684\u4e00\u4e2a\u5217\u5b50\uff0cEventHandler\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u5931\u8d25\u4e86\u600e\u4e48\u529e?"}),"\n",(0,r.jsx)(e.p,{children:"\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\uff0c\u6ca1\u6709\u4e8c\u6b21\u5904\u7406\u673a\u4f1a"}),"\n",(0,r.jsx)(e.p,{children:"\u5f15\u5165WorkQueue(RateLimitingQueue)\u5904\u7406\u4e1a\u52a1\u903b\u8f91\uff1a \u9519\u8bef\u91cd\u8bd5\uff0c\u9632\u6b62Hot Loop(\u8fc7\u8f7d)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"flag"\n\t"fmt"\n\tappsv1 "k8s.io/api/apps/v1"\n\t"k8s.io/client-go/informers"\n\t"k8s.io/client-go/kubernetes"\n\t"k8s.io/client-go/tools/cache"\n\t"k8s.io/client-go/tools/clientcmd"\n\t"k8s.io/client-go/util/workqueue"\n\t"time"\n)\n\nfunc main() {\n\n\tkubeconfig := flag.String("kubeconfig", "/etc/rancher/k8s/k8s_test.yaml", "absolute path to the kubeconfig file")\n\tconfig, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tclientSet, err := kubernetes.NewForConfig(config)\n\tif err != nil {\n\t\tfmt.Printf("error: %s", err.Error())\n\t}\n\tinformerFactory := informers.NewSharedInformerFactory(clientSet, time.Second*30)\n\n\t//ratelimitqueue\n\tqueue := workqueue.NewTypedRateLimitingQueue(workqueue.DefaultTypedControllerRateLimiter[string]())\n\t//\u5bf9 deployment\u76d1\u542c\n\tdeployInformer := informerFactory.Apps().V1().Deployments()\n\tinformer := deployInformer.Informer()\n\tinformer.AddEventHandler(&cache.ResourceEventHandlerFuncs{\n\t\tAddFunc:    func(obj interface{}) { onAddDeployment(obj, queue) },\n\t\tUpdateFunc: func(old, new interface{}) { onUpdateDeployment(new, queue) },\n\t\tDeleteFunc: func(obj interface{}) { onDeleteDeployment(obj, queue) },\n\t})\n\n\tcontroller := NewController(queue, deployInformer.Informer().GetIndexer(), informer)\n\tstopper := make(chan struct{})\n\tdefer close(stopper)\n\n\t//\u542f\u52a8informer\n\tinformerFactory.Start(stopper)\n\tinformerFactory.WaitForCacheSync(stopper)\n\n\t//\u5904\u7406\u961f\u5217\u91cc\u7684\u4e8b\u4ef6\n\tgo func() {\n\t\tfor {\n\t\t\tif !controller.processNextItem() {\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\t}()\n\t<-stopper\n}\n\ntype Controller struct {\n\tindexer  cache.Indexer\n\tqueue    workqueue.TypedRateLimitingInterface[string]\n\tinformer cache.Controller\n}\n\nfunc NewController(qeue workqueue.TypedRateLimitingInterface[string], indexer cache.Indexer, informer cache.Controller) *Controller {\n\treturn &Controller{\n\t\tindexer:  indexer,\n\t\tqueue:    qeue,\n\t\tinformer: informer,\n\t}\n}\nfunc (c *Controller) processNextItem() bool {\n\tkey, quit := c.queue.Get()\n\tif quit {\n\t\treturn false\n\t}\n\tdefer c.queue.Done(key)\n\terr := c.syncToStdout(key)\n\tc.handleErr(err, key)\n\treturn true\n}\n\nfunc (c *Controller) syncToStdout(key string) error {\n\t//\u901a\u8fc7key \u76f4\u63a5\u4eceindexer\u4e2d\u83b7\u53d6\u5bf9\u8c61\n\tobj, exists, err := c.indexer.GetByKey(key)\n\tif err != nil {\n\t\tfmt.Printf("error getting object with key %s from store: % v\\n", key, err)\n\t\treturn err\n\t}\n\n\tif !exists {\n\t\tfmt.Printf("key %s does not exist anymore\\n", key)\n\t} else {\n\t\tdeployment := obj.(*appsv1.Deployment)\n\t\tfmt.Printf("sync object %s to stdout\\n", deployment.GetName())\n\t\tif deployment.Name == "test-deployment" {\n\t\t\treturn fmt.Errorf("test-deployment is not allowed")\n\t\t}\n\t}\n\treturn nil\n}\n\nfunc (c *Controller) handleErr(err error, key string) {\n\tif err == nil {\n\t\tc.queue.Forget(key)\n\t\treturn\n\t}\n\tif c.queue.NumRequeues(key) < 5 {\n\t\tfmt.Printf("Error syncing pod %v: %v", key, err)\n\t\tc.queue.AddRateLimited(key)\n\t}\n\tc.queue.Forget(key)\n\tfmt.Printf("Error syncing pod %v: %v", key, err)\n}\n\nfunc onAddDeployment(obj interface{}, queue workqueue.TypedRateLimitingInterface[string]) {\n\tkey, err := cache.MetaNamespaceKeyFunc(obj)\n\tif err == nil {\n\t\tqueue.Add(key)\n\t}\n}\n\nfunc onUpdateDeployment(newobj interface{}, queue workqueue.TypedRateLimitingInterface[string]) {\n\tkey, err := cache.MetaNamespaceKeyFunc(newobj)\n\tif err == nil {\n\t\tqueue.Add(key)\n\t}\n}\n\nfunc onDeleteDeployment(obj interface{}, queue workqueue.TypedRateLimitingInterface[string]) {\n\tkey, err := cache.DeletionHandlingMetaNamespaceKeyFunc(obj)\n\tif err == nil {\n\t\tqueue.Add(key)\n\t}\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u4e2a\u4ee3\u7801\u7684\u6548\u679c\u5982\u679c\u521b\u5efatest-deployment\uff0c \u5219\u4f1a\u5c06\u4ed6\u91cd\u65b0\u653e\u5165\u5904\u7406\u961f\u5217\uff0c\u6a21\u62df\u91cd\u8bd5\u673a\u5236"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"kubectl create deploy test-deployment --image nginx\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);