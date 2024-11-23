"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[69],{2003:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=n(4848),c=n(8453);const i={},l="\u63a7\u5236\u5668 CRD \u4ecb\u7ecd",s={id:"k8s/k8s develop/Controller",title:"\u63a7\u5236\u5668 CRD \u4ecb\u7ecd",description:"1\u3001\u63a7\u5236\u5668\u7406\u89e3",source:"@site/docs/k8s/k8s develop/7.Controller.md",sourceDirName:"k8s/k8s develop",slug:"/k8s/k8s develop/Controller",permalink:"/en/docs/k8s/k8s develop/Controller",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/k8s/k8s develop/7.Controller.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1732372501e3,sidebarPosition:7,frontMatter:{},sidebar:"k8s",previous:{title:"Client-go",permalink:"/en/docs/k8s/k8s develop/Client-go"}},o={},a=[{value:"1\u3001\u63a7\u5236\u5668\u7406\u89e3",id:"1\u63a7\u5236\u5668\u7406\u89e3",level:2},{value:"1.1 \u9879\u76ee\u67b6\u6784\u63cf\u8ff0",id:"11-\u9879\u76ee\u67b6\u6784\u63cf\u8ff0",level:3},{value:"1.2 \u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0",id:"12-\u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0",level:3},{value:"1.3 \u4e3b\u8981\u6587\u4ef6\u793a\u4f8b",id:"13-\u4e3b\u8981\u6587\u4ef6\u793a\u4f8b",level:3},{value:"<code>api/v1alpha1/appservice_types.go</code> (\u7b80\u5316\u7248\u672c)",id:"apiv1alpha1appservice_typesgo-\u7b80\u5316\u7248\u672c",level:4},{value:"<code>controllers/appservice_controller.go</code>",id:"controllersappservice_controllergo",level:4},{value:"1.4 \u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6",id:"14-\u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6",level:3},{value:"2\u3001\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5",id:"2\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5",level:2},{value:"2.1 informer\u4f7f\u7528",id:"21-informer\u4f7f\u7528",level:3},{value:"2.2 Reflector",id:"22-reflector",level:3},{value:"2.2.1 Reflector \u7684\u5de5\u4f5c\u539f\u7406",id:"221-reflector-\u7684\u5de5\u4f5c\u539f\u7406",level:4},{value:"2.2.2 Reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316",id:"222-reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316",level:4},{value:"1. \u4f7f\u7528 Watch API",id:"1-\u4f7f\u7528-watch-api",level:5},{value:"2. \u5904\u7406\u4e8b\u4ef6",id:"2-\u5904\u7406\u4e8b\u4ef6",level:5},{value:"3. \u8fde\u63a5\u7ba1\u7406",id:"3-\u8fde\u63a5\u7ba1\u7406",level:5},{value:"2.2.3 watch\u7684demo\u5b9e\u73b0",id:"223-watch\u7684demo\u5b9e\u73b0",level:4}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"\u63a7\u5236\u5668-crd-\u4ecb\u7ecd",children:"\u63a7\u5236\u5668 CRD \u4ecb\u7ecd"})}),"\n",(0,t.jsx)(r.h2,{id:"1\u63a7\u5236\u5668\u7406\u89e3",children:"1\u3001\u63a7\u5236\u5668\u7406\u89e3"}),"\n",(0,t.jsxs)(r.p,{children:["\u5b66\u4e60demo\u5730\u5740: ",(0,t.jsx)(r.a,{href:"https://github.com/schwarzeni/kubebuilder-appservice",children:"https://github.com/schwarzeni/kubebuilder-appservice"})]}),"\n",(0,t.jsx)(r.h3,{id:"11-\u9879\u76ee\u67b6\u6784\u63cf\u8ff0",children:"1.1 \u9879\u76ee\u67b6\u6784\u63cf\u8ff0"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:" +---------------------+               +-----------------------------+\r\n |                     |  (1) Create   |                             |\r\n |      User (kubectl)  +---------------\x3e      Kubernetes API         |\r\n |                     |               |                             |\r\n +---------------------+               +-----------------------------+\r\n                                                ^\r\n                                                |\r\n                                                | (2) Watch\r\n                                                |\r\n+----------------------+          +-------------+-------------------+\r\n|                      |          |                                 |\r\n|     Operator         +-----------\x3e     Operator Controller         |\r\n|  Controller (Reconcile)          |                                 |\r\n|                      |          |    (Reconcile AppService)        |\r\n+----------------------+          +-------------+-------------------+\r\n                                                |\r\n                                                | (3) Create/Update\r\n                                                |\r\n                      +-----------------------+ |                +------------------+\r\n                      |                       | |                |                  |\r\n                      |   Kubernetes          | +----------------\x3e  Deployment      |\r\n                      |   Resources (Service, |                  |                  |\r\n                      |   Deployment, etc.)   |                  +------------------+\r\n                      +-----------------------+\r\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"12-\u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0",children:"1.2 \u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:".\r\n\u251c\u2500\u2500 Dockerfile                   # Docker \u6587\u4ef6\uff0c\u7528\u4e8e\u6253\u5305 Operator \u955c\u50cf\r\n\u251c\u2500\u2500 Makefile                     # \u6784\u5efa\u548c\u7ba1\u7406\u9879\u76ee\u7684 Makefile\r\n\u251c\u2500\u2500 PROJECT                      # kubebuilder \u9879\u76ee\u7684\u5b9a\u4e49\u6587\u4ef6\r\n\u251c\u2500\u2500 config/                      # \u914d\u7f6e\u76ee\u5f55\uff0c\u5b58\u653e CRD\u3001RBAC\u3001Webhook \u7b49\u914d\u7f6e\r\n\u2502   \u251c\u2500\u2500 crd/\r\n\u2502   \u2502   \u251c\u2500\u2500 bases/\r\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 <group>_<version>_<resource>.yaml  # \u751f\u6210\u7684 CRD \u5b9a\u4e49\r\n\u2502   \u251c\u2500\u2500 default/\r\n\u2502   \u2502   \u2514\u2500\u2500 kustomization.yaml   # \u9ed8\u8ba4\u7684 kustomize \u6587\u4ef6\uff0c\u7528\u4e8e\u751f\u6210 YAML \u6e05\u5355\r\n\u2502   \u251c\u2500\u2500 manager/\r\n\u2502   \u2502   \u2514\u2500\u2500 manager.yaml         # \u7ba1\u7406\u5668 Deployment \u7684 YAML \u6587\u4ef6\r\n\u2502   \u251c\u2500\u2500 rbac/\r\n\u2502   \u2502   \u2514\u2500\u2500 role.yaml            # \u751f\u6210\u7684 RBAC \u6743\u9650\u63a7\u5236\u6587\u4ef6\r\n\u2502   \u251c\u2500\u2500 samples/\r\n\u2502   \u2502   \u2514\u2500\u2500 <group>_<version>_<resource>.yaml  # \u793a\u4f8b CRD \u6587\u4ef6\r\n\u251c\u2500\u2500 go.mod                       # Go \u4f9d\u8d56\u7ba1\u7406\u6587\u4ef6\r\n\u251c\u2500\u2500 go.sum                       # Go \u4f9d\u8d56\u7248\u672c\u9501\u5b9a\u6587\u4ef6\r\n\u251c\u2500\u2500 hack/                        # \u8f85\u52a9\u811a\u672c\r\n\u2502   \u2514\u2500\u2500 boilerplate.go.txt\r\n\u251c\u2500\u2500 api/                         # API \u5b9a\u4e49\u76ee\u5f55\r\n\u2502   \u251c\u2500\u2500 v1alpha1/                # \u5b9a\u4e49\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u7248\u672c\r\n\u2502   \u2502   \u251c\u2500\u2500 appservice_types.go  # AppService CRD \u7684\u7ed3\u6784\u5b9a\u4e49\r\n\u2502   \u2502   \u251c\u2500\u2500 groupversion_info.go # \u6ce8\u518c API \u7ec4\u548c\u7248\u672c\u4fe1\u606f\r\n\u2502   \u2502   \u2514\u2500\u2500 zz_generated.deepcopy.go  # \u81ea\u52a8\u751f\u6210\u7684 deepcopy \u51fd\u6570\r\n\u251c\u2500\u2500 controllers/                 # \u63a7\u5236\u5668\u903b\u8f91\u76ee\u5f55\r\n\u2502   \u2514\u2500\u2500 appservice_controller.go # \u4e0a\u9762\u63d0\u4f9b\u7684 Reconcile \u4ee3\u7801\u5e94\u8be5\u653e\u5728\u8fd9\u91cc\r\n\u2514\u2500\u2500 main.go                      # \u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\r\n\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u7cbe\u7b80\u7248\u672c"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:".\r\n\u251c\u2500\u2500 config/                        # \u914d\u7f6e\u76ee\u5f55\r\n\u2502   \u251c\u2500\u2500 crd/                       # CRD \u5b9a\u4e49\r\n\u2502   \u2502   \u2514\u2500\u2500 bases/\r\n\u2502   \u2502       \u2514\u2500\u2500 batch.example.com_appservices.yaml  # CRD YAML \u6587\u4ef6\r\n\u2502   \u251c\u2500\u2500 manager/                   # \u7ba1\u7406\u5668\u914d\u7f6e\r\n\u2502   \u2502   \u2514\u2500\u2500 manager.yaml           # \u90e8\u7f72\u63a7\u5236\u5668\u7684 YAML \u6587\u4ef6\r\n\u2502   \u251c\u2500\u2500 rbac/                      # RBAC \u914d\u7f6e\r\n\u2502   \u2502   \u2514\u2500\u2500 role.yaml              # \u63a7\u5236\u5668\u9700\u8981\u7684\u6743\u9650\r\n\u251c\u2500\u2500 api/                           # API \u5b9a\u4e49\u76ee\u5f55\r\n\u2502   \u2514\u2500\u2500 v1alpha1/\r\n\u2502       \u251c\u2500\u2500 appservice_types.go    # \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u7ed3\u6784\u5b9a\u4e49\r\n\u2502       \u2514\u2500\u2500 groupversion_info.go   # API \u7ec4\u548c\u7248\u672c\u7684\u6ce8\u518c\r\n\u251c\u2500\u2500 controllers/                   # \u63a7\u5236\u5668\u903b\u8f91\u76ee\u5f55\r\n\u2502   \u2514\u2500\u2500 appservice_controller.go   # AppService \u63a7\u5236\u5668\u903b\u8f91\r\n\u251c\u2500\u2500 go.mod                         # Go \u4f9d\u8d56\u7ba1\u7406\u6587\u4ef6\r\n\u251c\u2500\u2500 go.sum                         # Go \u4f9d\u8d56\u7248\u672c\u9501\u5b9a\u6587\u4ef6\r\n\u2514\u2500\u2500 main.go                        # \u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\r\n\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u76ee\u5f55\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"config/"}),": \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u5305\u542b CRD \u5b9a\u4e49\u3001RBAC \u548c\u63a7\u5236\u5668\u90e8\u7f72\u7b49\u76f8\u5173 YAML \u6587\u4ef6\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"api/v1alpha1/"}),": API \u5b9a\u4e49\u76ee\u5f55\uff0c\u5305\u62ec\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684 ",(0,t.jsx)(r.code,{children:"Spec"})," \u548c ",(0,t.jsx)(r.code,{children:"Status"})," \u7ed3\u6784\u4f53\uff0c\u4ee5\u53ca\u6ce8\u518c API \u7ec4\u548c\u7248\u672c\u7684\u4ee3\u7801\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"controllers/"}),": \u63a7\u5236\u5668\u903b\u8f91\u6240\u5728\u76ee\u5f55\uff0c",(0,t.jsx)(r.code,{children:"appservice_controller.go"})," \u5b9e\u73b0\u4e86 ",(0,t.jsx)(r.code,{children:"Reconcile"})," \u903b\u8f91\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"main.go"}),": \u9879\u76ee\u5165\u53e3\u6587\u4ef6\uff0c\u542f\u52a8\u63a7\u5236\u5668\u7ba1\u7406\u5668\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"13-\u4e3b\u8981\u6587\u4ef6\u793a\u4f8b",children:"1.3 \u4e3b\u8981\u6587\u4ef6\u793a\u4f8b"}),"\n",(0,t.jsxs)(r.h4,{id:"apiv1alpha1appservice_typesgo-\u7b80\u5316\u7248\u672c",children:[(0,t.jsx)(r.code,{children:"api/v1alpha1/appservice_types.go"})," (\u7b80\u5316\u7248\u672c)"]}),"\n",(0,t.jsxs)(r.p,{children:["\u8fd9\u662f\u5b9a\u4e49 ",(0,t.jsx)(r.code,{children:"AppService"})," \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package v1alpha1\r\n\r\nimport (\r\n\tmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\r\n)\r\n\r\n// AppServiceSpec defines the desired state of AppService\r\ntype AppServiceSpec struct {\r\n\t// \u5b9a\u4e49\u4f60\u7684 AppService \u7684 Spec \u5b57\u6bb5\r\n\tReplicas int32 `json:"replicas"`\r\n}\r\n\r\n// AppServiceStatus defines the observed state of AppService\r\ntype AppServiceStatus struct {\r\n\t// \u5b9a\u4e49\u4f60\u7684 AppService \u7684 Status \u5b57\u6bb5\r\n\tAvailableReplicas int32 `json:"availableReplicas"`\r\n}\r\n\r\n// +kubebuilder:object:root=true\r\n// +kubebuilder:subresource:status\r\n\r\n// AppService is the Schema for the appservices API\r\ntype AppService struct {\r\n\tmetav1.TypeMeta   `json:",inline"`\r\n\tmetav1.ObjectMeta `json:"metadata,omitempty"`\r\n\r\n\tSpec   AppServiceSpec   `json:"spec,omitempty"`\r\n\tStatus AppServiceStatus `json:"status,omitempty"`\r\n}\r\n\r\n// +kubebuilder:object:root=true\r\n\r\n// AppServiceList contains a list of AppService\r\ntype AppServiceList struct {\r\n\tmetav1.TypeMeta `json:",inline"`\r\n\tmetav1.ListMeta `json:"metadata,omitempty"`\r\n\tItems           []AppService `json:"items"`\r\n}\r\n\r\nfunc init() {\r\n\tSchemeBuilder.Register(&AppService{}, &AppServiceList{})\r\n}\n'})}),"\n",(0,t.jsx)(r.h4,{id:"controllersappservice_controllergo",children:(0,t.jsx)(r.code,{children:"controllers/appservice_controller.go"})}),"\n",(0,t.jsxs)(r.p,{children:["\u8fd9\u5c31\u662f\u4f60\u7ed9\u51fa\u7684 ",(0,t.jsx)(r.code,{children:"Reconcile"})," \u51fd\u6570\u7684\u5730\u65b9"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-go",children:'package controllers\r\n\r\nimport (\r\n\t"context"\r\n\t"encoding/json"\r\n\t"reflect"\r\n\r\n\t"k8s.io/apimachinery/pkg/api/errors"\r\n\t"k8s.io/apimachinery/pkg/types"\r\n\tappsv1 "k8s.io/api/apps/v1"\r\n\tcorev1 "k8s.io/api/core/v1"\r\n\t"sigs.k8s.io/controller-runtime/pkg/client"\r\n\t"sigs.k8s.io/controller-runtime/pkg/reconcile"\r\n\r\n\tbatchv1alpha1 "example.com/api/v1alpha1"\r\n\tctrl "sigs.k8s.io/controller-runtime"\r\n)\r\n\r\nfunc (r *AppServiceReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {\r\n\tinstance := &batchv1alpha1.AppService{}\r\n\tif err := r.Client.Get(ctx, req.NamespacedName, instance); err != nil {\r\n\t\tif errors.IsNotFound(err) {\r\n\t\t\treturn reconcile.Result{}, nil\r\n\t\t}\r\n\t\treturn reconcile.Result{}, err\r\n\t}\r\n\r\n\tif instance.DeletionTimestamp != nil {\r\n\t\treturn reconcile.Result{}, nil\r\n\t}\r\n\r\n\tdeployment := &appsv1.Deployment{}\r\n\tif err := r.Client.Get(ctx, req.NamespacedName, deployment); err != nil {\r\n\t\tif !errors.IsNotFound(err) {\r\n\t\t\treturn ctrl.Result{}, err\r\n\t\t}\r\n\r\n\t\tdeployment = NewDeployment(instance)\r\n\t\tif err := r.Client.Create(ctx, deployment); err != nil {\r\n\t\t\treturn ctrl.Result{}, err\r\n\t\t}\r\n\r\n\t\tsvc := NewService(instance)\r\n\t\tif err := r.Client.Create(ctx, svc); err != nil {\r\n\t\t\treturn ctrl.Result{}, err\r\n\t\t}\r\n\t} else {\r\n\t\toldSpec := &batchv1alpha1.AppServiceSpec{}\r\n\t\tif err := json.Unmarshal([]byte(instance.Annotations["spec"]), oldSpec); err != nil {\r\n\t\t\treturn ctrl.Result{}, err\r\n\t\t}\r\n\t\tif !reflect.DeepEqual(instance.Spec, *oldSpec) {\r\n\t\t\tnewDeployment := NewDeployment(instance)\r\n\t\t\tcurrDeployment := &appsv1.Deployment{}\r\n\t\t\tif err := r.Client.Get(ctx, req.NamespacedName, currDeployment); err != nil {\r\n\t\t\t\treturn ctrl.Result{}, err\r\n\t\t\t}\r\n\t\t\tcurrDeployment.Spec = newDeployment.Spec\r\n\t\t\tif err := r.Client.Update(ctx, currDeployment); err != nil {\r\n\t\t\t\treturn ctrl.Result{}, err\r\n\t\t\t}\r\n\r\n\t\t\tnewService := NewService(instance)\r\n\t\t\tcurrService := &corev1.Service{}\r\n\t\t\tif err := r.Client.Get(ctx, req.NamespacedName, currService); err != nil {\r\n\t\t\t\treturn ctrl.Result{}, err\r\n\t\t\t}\r\n\t\t\tcurrIP := currService.Spec.ClusterIP\r\n\t\t\tcurrService.Spec = newService.Spec\r\n\t\t\tcurrService.Spec.ClusterIP = currIP\r\n\t\t\tif err := r.Client.Update(ctx, currService); err != nil {\r\n\t\t\t\treturn ctrl.Result{}, err\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tdata, _ := json.Marshal(instance.Spec)\r\n\tif instance.Annotations != nil {\r\n\t\tinstance.Annotations["spec"] = string(data)\r\n\t} else {\r\n\t\tinstance.Annotations = map[string]string{"spec": string(data)}\r\n\t}\r\n\tif err := r.Client.Update(ctx, instance); err != nil {\r\n\t\treturn ctrl.Result{}, err\r\n\t}\r\n\r\n\treturn ctrl.Result{}, nil\r\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"14-\u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6",children:"1.4 \u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"kubebuilder"})," \u5de5\u5177\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6\uff1a"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsxs)(r.strong,{children:["\u5b89\u88c5 ",(0,t.jsx)(r.code,{children:"kubebuilder"})]}),"\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"go install sigs.k8s.io/kubebuilder/cmd@latest\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u521b\u5efa\u9879\u76ee"}),"\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"kubebuilder init --domain example.com --repo example.com/api\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u521b\u5efa API \u548c\u63a7\u5236\u5668"}),"\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"kubebuilder create api --group batch --version v1alpha1 --kind AppService\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u7f16\u8f91\u751f\u6210\u7684\u63a7\u5236\u5668\u6587\u4ef6\u548c API \u6587\u4ef6"}),"\uff1a\u6839\u636e\u4f60\u7684\u903b\u8f91\uff0c\u4fee\u6539\u63a7\u5236\u5668\u6587\u4ef6\u5e76\u6dfb\u52a0 ",(0,t.jsx)(r.code,{children:"AppService"})," \u8d44\u6e90\u7684\u4e1a\u52a1\u903b\u8f91\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"2\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5",children:"2\u3001\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5"}),"\n",(0,t.jsx)(r.h3,{id:"21-informer\u4f7f\u7528",children:"2.1 informer\u4f7f\u7528"}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2a\u63a7\u5236\u5668\u6bcf\u6b21\u83b7\u53d6\u5bf9\u8c61\u7684\u65f6\u5019\u90fd\u8981\u8bbf\u95eeAPIServer\uff0c\u8fd9\u4f1a\u7ed9\u7cfb\u7edf\u5e26\u6765\u5f88\u9ad8\u7684\u8d1f\u8f7d\uff0c Informers\u7684\u5185\u5b58\u7f13\u5b58\u5c31\u662f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u3002Informers\u8fd8\u53ef\u4ee5\u51e0\u4e4e\u5b9e\u65f6\u7684\u76d1\u63a7\u5bf9\u8c61\u7684\u53d8\u5316\uff0c\u800c\u4e0d\u9700\u8981\u8f6e\u8bad\u8bf7\u6c42\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u5ba2\u6237\u7aef\u7684\u7f13\u5b58\u6570\u636e\u548c\u670d\u52a1\u7aef\u7684\u6570\u636e\u4e00\u81f4\u3002\u5c31\u53ef\u4ee5\u5927\u5927\u964d\u4f4eAPIServer\u7684\u538b\u529b\u3002"}),"\n",(0,t.jsx)(r.h3,{id:"22-reflector",children:"2.2 Reflector"}),"\n",(0,t.jsx)(r.p,{children:"Relector\u53cd\u5c04\u5668\u4ed6\u80fd\u611f\u77e5\u5230k8s\u4e2d\u7684\u4e8b\u4ef6\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4ed6\u80fd\u591f\u81ea\u52a8\u62c9\u53d6\u6700\u65b0\u7684\u6570\u636e\u5230Delta\u4e2d\uff0c\u8fd9\u4e2a\u903b\u8f91\u539f\u7406\u662f\u4ec0\u4e48\u5462\uff1f"}),"\n",(0,t.jsx)(r.h4,{id:"221-reflector-\u7684\u5de5\u4f5c\u539f\u7406",children:"2.2.1 Reflector \u7684\u5de5\u4f5c\u539f\u7406"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u76d1\u89c6 API Server"}),"\uff1aReflector \u4f1a\u4f7f\u7528 Kubernetes \u7684 Watch \u63a5\u53e3\uff0c\u6301\u7eed\u76d1\u63a7\u7279\u5b9a\u8d44\u6e90\u7684\u53d8\u5316\uff08\u5982 Pod\u3001Service \u7b49\uff09\u3002\u901a\u8fc7 Watch\uff0cReflector \u53ef\u4ee5\u63a5\u6536\u4e8b\u4ef6\u901a\u77e5\uff0c\u800c\u4e0d\u9700\u8981\u9891\u7e41\u5730\u5411 API Server \u67e5\u8be2\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u4e8b\u4ef6\u5904\u7406"}),"\uff1a\u5f53 Kubernetes \u4e2d\u53d1\u751f\u4e8b\u4ef6\uff08\u4f8b\u5982\u8d44\u6e90\u7684\u521b\u5efa\u3001\u66f4\u65b0\u6216\u5220\u9664\uff09\u65f6\uff0cReflector \u4f1a\u6536\u5230\u76f8\u5e94\u7684\u901a\u77e5\u3002\u8fd9\u4e9b\u901a\u77e5\u901a\u5e38\u662f\u57fa\u4e8e WebSocket \u6216 HTTP/2 \u7684\u957f\u8fde\u63a5\uff0c\u786e\u4fdd\u80fd\u5373\u65f6\u611f\u77e5\u53d8\u5316\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u66f4\u65b0\u672c\u5730\u7f13\u5b58"}),"\uff1a\u4e00\u65e6\u6536\u5230\u4e8b\u4ef6\uff0cReflector \u4f1a\u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\uff08\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u5bf9\u672c\u5730\u7f13\u5b58\u8fdb\u884c\u76f8\u5e94\u7684\u66f4\u65b0\u3002\u8fd9\u662f\u901a\u8fc7\u8c03\u7528\u76f8\u5e94\u7684\u5904\u7406\u51fd\u6570\uff08\u901a\u5e38\u662f\u540c\u6b65\u5230 Delta FIFO \u961f\u5217\uff09\u6765\u5b8c\u6210\u7684\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Delta FIFO \u961f\u5217"}),"\uff1aDelta FIFO \u961f\u5217\u662f\u7528\u6765\u5b58\u50a8\u6700\u65b0\u7684\u6570\u636e\u53d8\u66f4\uff0c\u5b83\u53ef\u4ee5\u6309\u987a\u5e8f\u5904\u7406\u4e8b\u4ef6\u5e76\u63d0\u4f9b\u7ed9\u4e0b\u6e38\u7684\u6d88\u8d39\u8005\uff08\u5982 Informer\uff09\u3002\u8fd9\u6837\uff0c\u6d88\u8d39\u8005\u5c31\u80fd\u5904\u7406\u6700\u65b0\u7684\u72b6\u6001\uff0c\u800c\u4e0d\u9700\u8981\u76f4\u63a5\u4e0e API Server \u4ea4\u4e92\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u4e3a\u4ec0\u4e48\u80fd\u591f\u81ea\u52a8\u62c9\u53d6\u6700\u65b0\u6570\u636e"}),"\n",(0,t.jsx)(r.p,{children:"Reflector \u4e0d\u9700\u8981\u624b\u52a8\u62c9\u53d6\u6700\u65b0\u6570\u636e\u7684\u539f\u56e0\u5728\u4e8e\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u4e8b\u4ef6\u9a71\u52a8"}),"\uff1aReflector \u901a\u8fc7 Watch \u63a5\u53e3\u83b7\u53d6\u5b9e\u65f6\u4e8b\u4ef6\uff0c\u8fd9\u6837\u5b83\u4e0d\u9700\u8981\u4f9d\u8d56\u5b9a\u65f6\u62c9\u53d6\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u9ad8\u6548\u7684\u8d44\u6e90\u7ba1\u7406"}),"\uff1a\u5b83\u80fd\u8fc5\u901f\u53cd\u5e94\u5230\u72b6\u6001\u53d8\u5316\uff0c\u786e\u4fdd\u672c\u5730\u7f13\u5b58\u548c Kubernetes \u96c6\u7fa4\u7684\u72b6\u6001\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u673a\u5236\uff0cKubernetes \u7684 Informer \u80fd\u591f\u9ad8\u6548\u5730\u7ef4\u62a4\u72b6\u6001\u4e00\u81f4\u6027\uff0c\u540c\u65f6\u51cf\u5c11\u5bf9 API Server \u7684\u538b\u529b\u3002\u8fd9\u6837\u8bbe\u8ba1\u4f7f\u5f97\u7cfb\u7edf\u66f4\u4e3a\u9ad8\u6548\u4e14\u54cd\u5e94\u8fc5\u901f\u3002"}),"\n",(0,t.jsx)(r.h4,{id:"222-reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316",children:"2.2.2 Reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316"}),"\n",(0,t.jsxs)(r.p,{children:["Reflector \u5b9e\u73b0\u76d1\u89c6 Kubernetes \u4e2d\u8d44\u6e90\u7684\u53d8\u5316\u4e3b\u8981\u4f9d\u8d56\u4e8e ",(0,t.jsx)(r.strong,{children:"Watch"})," API\uff0c\u800c\u4e0d\u662f\u5b9a\u65f6\u62c9\u53d6\u3002\u5177\u4f53\u6765\u8bf4\uff0cReflector \u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u76d1\u89c6\u53d8\u5316\uff1a"]}),"\n",(0,t.jsx)(r.h5,{id:"1-\u4f7f\u7528-watch-api",children:"1. \u4f7f\u7528 Watch API"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u5efa\u7acb\u8fde\u63a5"}),"\uff1aReflector \u5411 API Server \u53d1\u9001\u4e00\u4e2a Watch \u8bf7\u6c42\u3002\u8fd9\u4e2a\u8bf7\u6c42\u662f\u901a\u8fc7 HTTP/1.1 \u6216 HTTP/2 \u5efa\u7acb\u7684\u957f\u8fde\u63a5\u3002\u4e00\u65e6\u8fde\u63a5\u5efa\u7acb\uff0cAPI Server \u4f1a\u4fdd\u6301\u8be5\u8fde\u63a5\u5f00\u653e\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u5b9e\u65f6\u63a8\u9001\u4e8b\u4ef6"}),"\uff1a\u5f53\u8d44\u6e90\uff08\u5982 Pod\u3001Service \u7b49\uff09\u53d1\u751f\u53d8\u5316\u65f6\uff0cAPI Server \u4f1a\u7acb\u5373\u5c06\u8fd9\u4e9b\u53d8\u5316\uff08\u4e8b\u4ef6\uff09\u63a8\u9001\u5230 Reflector\uff0c\u800c\u4e0d\u662f\u8ba9 Reflector \u5b9a\u671f\u8be2\u95ee\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.h5,{id:"2-\u5904\u7406\u4e8b\u4ef6",children:"2. \u5904\u7406\u4e8b\u4ef6"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u4e8b\u4ef6\u7c7b\u578b"}),"\uff1a\u6bcf\u5f53 Reflector \u6536\u5230\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u6839\u636e\u4e8b\u4ef6\u7684\u7c7b\u578b\uff08\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u6765\u66f4\u65b0\u5176\u672c\u5730\u7f13\u5b58\u6216 Delta FIFO \u961f\u5217\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u9ad8\u6548\u5904\u7406"}),"\uff1a\u8fd9\u79cd\u65b9\u5f0f\u5141\u8bb8 Reflector \u51e0\u4e4e\u5b9e\u65f6\u5730\u611f\u77e5\u53d8\u5316\uff0c\u786e\u4fdd\u672c\u5730\u72b6\u6001\u4e0e\u96c6\u7fa4\u72b6\u6001\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.h5,{id:"3-\u8fde\u63a5\u7ba1\u7406",children:"3. \u8fde\u63a5\u7ba1\u7406"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u91cd\u8fde\u673a\u5236"}),"\uff1a\u5982\u679c\u8fde\u63a5\u610f\u5916\u4e2d\u65ad\uff08\u5982\u7f51\u7edc\u95ee\u9898\u6216 API Server \u91cd\u542f\uff09\uff0cReflector \u4f1a\u5c1d\u8bd5\u91cd\u65b0\u5efa\u7acb\u8fde\u63a5\uff0c\u5e76\u4ece\u4e0a\u4e00\u6b21\u7684\u72b6\u6001\u5f00\u59cb\u7ee7\u7eed\u76d1\u542c\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"\u521d\u59cb\u6570\u636e\u540c\u6b65"}),"\uff1a\u5728\u5efa\u7acb Watch \u8fde\u63a5\u4e4b\u524d\uff0cReflector \u901a\u5e38\u4f1a\u5148\u4ece API Server \u62c9\u53d6\u5f53\u524d\u8d44\u6e90\u7684\u5b8c\u6574\u5217\u8868\uff0c\u4ee5\u4fbf\u5728\u540e\u7eed\u7684\u4e8b\u4ef6\u5904\u7406\u4e2d\u6709\u4e00\u4e2a\u521d\u59cb\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u5728kubernetes\u4e2d\uff0cwatch\u8fd9\u7c7b\u63a5\u53e3\u5f88\u591a\uff0c\u6bd4\u5982\u6709\u4e0b\u9762:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"kubernetes controller\r\ninformer\r\nkubelet\r\n  \u901a\u8fc7Watch\u63a5\u53e3\u76d1\u89c6\u4e0e\u5176\u76f8\u5173\u7684Pod\u548cNode\u72b6\u6001\u53d8\u5316\uff0c\u4ee5\u4fbf\u53ca\u65f6\u54cd\u5e94\r\nCustom Resource Definitions(CRD)\r\nKubectl\u547d\u4ee4\r\n  kubect get\u547d\u4ee4\u65f6\uff0c\u53ef\u4ee5\u52a0\u4e0a--watch\u9009\u9879\uff0c\u8fd9\u5b9e\u9645\u4e0a\u5229\u7528\u4e86Watch\u63a5\u53e3\u6765\u5b9e\u73b0\u663e\u793a\u8d44\u6e90\u72b6\u6001\u7684\u53d8\u5316\r\nMetrics Server\r\n  \u76d1\u89c6\u8282\u70b9\u548cPod\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u63d0\u4f9b\u96c6\u7fa4\u7684\u6027\u80fd\u6570\u636e\r\nKubernetes Dashboard\r\n  web ui \u4e5f\u4f1a\u4f7f\u7528Watch\u63a5\u53e3\u6765\u5b9e\u65f6\u66f4\u65b0\u754c\u9762\u4e0a\u7684\u8d44\u6e90\u72b6\u6001\n"})}),"\n",(0,t.jsx)(r.p,{children:"Watch\u7684\u57fa\u672c\u539f\u7406"}),"\n",(0,t.jsx)(r.p,{children:"\u53cd\u5411\u63a8\u9001\uff1a\u4e0e\u4f20\u7edf\u7684\u62c9\u53d6\u6a21\u578b\uff08\u5ba2\u6237\u7aef\u5b9a\u671f\u8bf7\u6c42\u670d\u52a1\u5668\uff09\u4e0d\u540c\uff0cWatch \u4f7f\u7528\u957f\u8fde\u63a5\uff0cAPI Server \u4f1a\u4e3b\u52a8\u5c06\u53d8\u5316\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef\u3002\u8fd9\u79cd\u65b9\u5f0f\u663e\u8457\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u7f51\u7edc\u8bf7\u6c42\u548c\u5ef6\u8fdf\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u4e8b\u4ef6\u9a71\u52a8\uff1a\u5f53 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u67d0\u4e2a\u8d44\u6e90\uff08\u5982 Pod\u3001Service \u7b49\uff09\u53d1\u751f\u53d8\u5316\u65f6\uff0cAPI Server \u4f1a\u7acb\u5373\u5c06\u76f8\u5173\u4e8b\u4ef6\uff08\u5982\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u53d1\u9001\u5230\u5df2\u5efa\u7acb Watch \u7684\u5ba2\u6237\u7aef\u3002"}),"\n",(0,t.jsx)(r.h4,{id:"223-watch\u7684demo\u5b9e\u73b0",children:"2.2.3 watch\u7684demo\u5b9e\u73b0"}),"\n",(0,t.jsx)(r.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u6a21\u62df Watch \u673a\u5236\uff0c\u76d1\u542c Pod \u7684\u53d8\u5316"}),"\n",(0,t.jsx)(r.p,{children:"go get k8s.io/client-go@v0.23.0  # \u786e\u4fdd\u7248\u672c\u4e0e\u4f60\u7684\u96c6\u7fa4\u517c\u5bb9"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-golang",children:'package main\r\n\r\nimport (\r\n    "context"\r\n    "fmt"\r\n    "log"\r\n    "time"\r\n\r\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\r\n    "k8s.io/apimachinery/pkg/watch"\r\n    "k8s.io/client-go/kubernetes"\r\n    "k8s.io/client-go/tools/clientcmd"\r\n)\r\n\r\nfunc main() {\r\n    // \u52a0\u8f7d kubeconfig\r\n    kubeconfig := "/path/to/your/kubeconfig"  // \u66ff\u6362\u4e3a\u4f60\u7684 kubeconfig \u8def\u5f84\r\n    config, err := clientcmd.BuildConfigFromFlags("", kubeconfig)\r\n    if err != nil {\r\n        log.Fatalf("Failed to build kubeconfig: %v", err)\r\n    }\r\n\r\n    // \u521b\u5efa Kubernetes \u5ba2\u6237\u7aef\r\n    clientset, err := kubernetes.NewForConfig(config)\r\n    if err != nil {\r\n        log.Fatalf("Failed to create clientset: %v", err)\r\n    }\r\n\r\n    // \u8bbe\u7f6e Watch \u9009\u9879\r\n    options := metav1.ListOptions{\r\n        Watch: true,\r\n    }\r\n\r\n    // \u542f\u52a8 Watch\r\n    watchPods(clientset, options)\r\n}\r\n\r\nfunc watchPods(clientset *kubernetes.Clientset, options metav1.ListOptions) {\r\n    // \u76d1\u542c Pod \u53d8\u5316\r\n    watchInterface, err := clientset.CoreV1().Pods("").Watch(context.TODO(), options)\r\n    if err != nil {\r\n        log.Fatalf("Failed to watch pods: %v", err)\r\n    }\r\n\r\n    fmt.Println("Watching for pod changes...")\r\n\r\n    // \u5904\u7406\u4e8b\u4ef6\r\n    for event := range watchInterface.ResultChan() {\r\n        pod, ok := event.Object.(*metav1.Pod)\r\n        if !ok {\r\n            log.Fatalf("Unexpected type")\r\n        }\r\n\r\n        switch event.Type {\r\n        case watch.Added:\r\n            fmt.Printf("Pod added: %s\\n", pod.Name)\r\n        case watch.Modified:\r\n            fmt.Printf("Pod modified: %s\\n", pod.Name)\r\n        case watch.Deleted:\r\n            fmt.Printf("Pod deleted: %s\\n", pod.Name)\r\n        }\r\n    }\r\n}\r\n\n'})}),"\n",(0,t.jsx)(r.h5,{id:""})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>s});var t=n(6540);const c={},i=t.createContext(c);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);