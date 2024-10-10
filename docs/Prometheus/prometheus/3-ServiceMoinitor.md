### ServiceMonitor

### 1、通过ServiceMoinitor监控服务

目的： 实现etcd的监控

#### 1、secret文件

在master节点,需要创建连接etcd的secret文件

```shell
kubectl -n monitoring create secret generic etcd-certs --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.crt --from-file=/etc/kubernetes/pki/etcd/healthcheck-client.key --from-file=/etc/kubernetes/pki/etcd/ca.crt
```



#### 2、创建端点

```yaml
apiVersion: v1
kind: Service
metadata:
  name: etcd-k8s
  namespace: kube-system
  labels:
    k8s-app: etcd
spec:
  type: ClusterIP
  clusterIP: None
  ports:
    - name: port
      port: 2379
      protocol: TCP

---
apiVersion: v1
kind: Endpoints
metadata:
  name: etcd-k8s
  namespace: kube-system
  labels:
    k8s-app: etcd
subsets:
  - addresses:
      - ip: 10.51.10.61
    ports:
      - name: port
        port: 2379
        protocol: TCP
```

确认服务是否存在 

```shell
root@bj-master01-61:/apps/prometheus# kubectl get ep  -l k8s-app=etcd -n   kube-system --show-labels
NAME       ENDPOINTS          AGE   LABELS
etcd-k8s   10.51.10.61:2379   47h   k8s-app=etcd
```



#### 3、创建ServiceMonitor

```yaml
root@bj-master01-61:/apps/prometheus# cat etcd-k8s.yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  annotations:
    meta.helm.sh/release-name: prometheus
    meta.helm.sh/release-namespace: monitoring
  name: etcd-k8s
  namespace: monitoring
  labels:
    release: prometheus
spec:
  jobLabel: k8s-app
  endpoints:
    - port: port
      interval: 30s
      scheme: https
      tlsConfig:
        caFile: /etc/prometheus/secrets/etcd-certs/ca.crt
        certFile: /etc/prometheus/secrets/etcd-certs/healthcheck-client.crt
        keyFile: /etc/prometheus/secrets/etcd-certs/healthcheck-client.key
        insecureSkipVerify: true
  selector:
    matchLabels:
      k8s-app: etcd
  namespaceSelector:
    matchNames:
      - kube-system
```



#### 4、创建完成后，没有生成target

问题排查，因为是kube-prometheus-stack部署的prometheus,所以需要确认prometheus是如何发现Servicemonitor

```yaml
root@bj-master01-61:/apps/prometheus# kubectl  get crd
NAME                                         CREATED AT
alertmanagerconfigs.monitoring.coreos.com    2024-08-09T17:16:53Z
alertmanagers.monitoring.coreos.com          2024-08-09T17:16:53Z
ciliumcidrgroups.cilium.io                   2024-07-13T16:29:38Z
ciliumclusterwidenetworkpolicies.cilium.io   2024-07-13T16:29:39Z
ciliumendpoints.cilium.io                    2024-07-13T16:29:38Z
ciliumexternalworkloads.cilium.io            2024-07-13T16:29:38Z
ciliumidentities.cilium.io                   2024-07-13T16:29:38Z
ciliuml2announcementpolicies.cilium.io       2024-07-13T16:29:38Z
ciliumloadbalancerippools.cilium.io          2024-07-13T16:29:38Z
ciliumnetworkpolicies.cilium.io              2024-07-13T16:29:39Z
ciliumnodeconfigs.cilium.io                  2024-07-13T16:29:38Z
ciliumnodes.cilium.io                        2024-07-13T16:29:38Z
ciliumpodippools.cilium.io                   2024-07-13T16:29:38Z
podmonitors.monitoring.coreos.com            2024-08-09T17:16:53Z
probes.monitoring.coreos.com                 2024-08-09T17:16:53Z
prometheusagents.monitoring.coreos.com       2024-08-09T17:16:53Z
prometheuses.monitoring.coreos.com           2024-08-09T17:16:53Z
prometheusrules.monitoring.coreos.com        2024-08-09T17:16:53Z
scrapeconfigs.monitoring.coreos.com          2024-08-09T17:16:53Z
servicemonitors.monitoring.coreos.com        2024-08-09T17:16:53Z
thanosrulers.monitoring.coreos.com           2024-08-09T17:16:54Z
```

查看确认

```
root@bj-master01-61:/apps/prometheus# kubectl  get  prometheuses.monitoring.coreos.com/prometheus-kube-prometheus-prometheus -n monitoring -o yaml
```



![image-20240812202611853](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/202408122026209.png)

其他的资源类似的操作

