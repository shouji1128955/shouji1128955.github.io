







## elasticsearch容器集群部署



#### 系统配置

1、准备机器
准备3台机器，安装CentOS7.9。ip计划如下

```shell
[root@110 elasticsearch]# cat /etc/hosts
10.51.8.110  nacos1
10.51.8.110  zoo1 es01   #主节点
10.51.8.112  zoo2 es02   #数据节点
10.51.8.113  zoo3 es03   #主节点

```



2、关闭防火墙

```shell
systemctl stop firewalld
systemctl disable firewalld
```



3、禁用SELINUX

```shell
vim /etc/selinux/config
将SELINUX设置为disabled：
SELINUX=disabled
```





4、修改主机名

```shell
#设置主机名
10.51.8.110 
hostnamectl set-hostname es01
10.51.8.112
hostnamectl set-hostname es02
10.51.8.113
hostnamectl set-hostname es03
通过hostname命令查看主机名。
```



4、配置IP映射

vim /etc/hosts
最后增加以下内容：

```shell
[root@110 elasticsearch]# cat /etc/hosts
10.51.8.110  zoo1 es01   #主节点
10.51.8.112  zoo2 es02   #数据节点
10.51.8.113  zoo3 es03   #主节点

```



修改打开文件最大数

```shell
vi /etc/security/limits.conf
# 在end前追加下面内容 
* soft nofile 65536
* hard nofile 65536
```

修改后重新登录，使用如下命令查看是否修改成功

ulimit -Hn



 提高vm.max_map_count 的大小

```shell
vi /etc/sysctl.conf 
# 在最后面追加下面内容 
vm.max_map_count=262144 
```

使用 [sysctl](https://so.csdn.net/so/search?q=sysctl&spm=1001.2101.3001.7020) -p 查看修改后的结果

```
sysctl -p
```



#### 服务部署

创建目录

```shell
sudo mkdir -p /app/server/elasticsearch/temp/config
sudo mkdir -p /app/server/elasticsearch/temp/data
sudo mkdir -p /app/server/elasticsearch/temp/logs
```
修改权限

```shell
sudo chmod 777 /app/server/elasticsearch/temp/config
sudo chmod 777 /app/server/elasticsearch/temp/data
sudo chmod 777 /app/server/elasticsearch/temp/logs
```


配置文件参考，每台服务器根据实际情况进行调整

```shell
[root@110 elasticsearch]# cat /app/server/elasticsearch/temp/config/elasticsearch.yml
cluster.name: skywalking_demo
node.name: es01  #当前主机名，每台机器都需要修改
node.master: true
node.data: true
network.host: 0.0.0.0
http.port: 9200 #外部监听端口
transport.port: 9300 #集群内部通信端口
discovery.seed_hosts: ["10.51.8.110:9300","10.51.8.112:19300","10.51.8.113:9300"]  #候选 master
cluster.initial_master_nodes: ["10.51.8.110","10.51.8.113"]  #初始化 master
http.cors.enabled: true  #允许head插件访问es
http.cors.allow-origin: "*"

```
磁盘挂载： 
```shell
/app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
/app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data
/app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs
```
容器启动： 
```shell
[root@110 elasticsearch]# cat docker-compose.yaml  
version: '3'
services:
  es_node01:
    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3
    restart: always
    hostname: es01
    network_mode: host
    container_name: es01
    environment:
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data
      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs
    network_mode: host 
networks:
  es-net:
    driver: bridge


 
[root@demo112 elasticsearch]# cat docker-compose.yaml  
version: '3'
services:
  es_node01:
    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3
    hostname: es02
    restart: always
    network_mode: host
    container_name: es02
    environment:
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data
      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs
    network_mode: host 
networks:
  es-net:
    driver: bridge

 
 
 
[root@113 elasticsearch]# cat docker-compose.yaml  
version: '3'
services:
  es_node01:
    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3
    hostname: es03
    restart: always
    network_mode: host
    container_name: es03
    environment:
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data
      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs
    network_mode: host 
networks:
  es-net:
    driver: bridge
```





启动后验证： 

```shell
curl -l http://192.168.20.20:19200
查看集群状态
curl -X GET "192.168.20.20:19200/_cat/health?v"
查看节点
curl -X GET "192.168.20.20:19200/_cat/nodes?v&pretty"
查看所有索引
curl -XGET "http://192.168.20.20:19200/_cat/indices?v&pretty"

GET /_cat/nodes: 查看所有节点
GET/_cat/health:查看es健康状况
GET /_cat/master:查看主节点

查看ES健康状态
[root@test apps]# curl localhost:9300/_cluster/health?pretty
{
  "cluster_name" : "skywalking_elasticsearch",
  "status" : "yellow",
  "timed_out" : false,
  "number_of_nodes" : 2,
  "number_of_data_nodes" : 2,
  "active_primary_shards" : 156,
  "active_shards" : 296,
  "relocating_shards" : 0,
  "initializing_shards" : 1,
  "unassigned_shards" : 0,
  "delayed_unassigned_shards" : 0,
  "number_of_pending_tasks" : 0,
  "number_of_in_flight_fetch" : 0,
  "task_max_waiting_in_queue_millis" : 0,
  "active_shards_percent_as_number" : 99.66329966329967
}

查看ES集群的设置
[root@test apps]# curl localhost:9300/_cluster/settings?pretty
{
  "persistent" : { },
  "transient" : { }
}
其中persistent为永久设置，重启仍然有效；trainsient为临时设置，重启失效


#查看ES在线的节点
[root@test apps]# curl localhost:9300/_cat/nodes?v
ip             heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name
172.17.113.125           67          99   7    1.34    2.85     2.31 mdi       -      node-2
172.17.224.119           48          99   6    1.55    3.54     3.08 mdi       *      node-1
#存在节点缺失的情况可用该命令查看缺失节点为哪些


相关文档 
https://zhuanlan.zhihu.com/p/360762412
```
可视化工具安装
```shell
####### kibana 安装

1 创建文件夹
sudo mkdir -p /app/server/elasticsearch/kibana/config

2 配置文件，kibana.yml
sudo vi /app/server/elasticsearch/kibana/config/kibana.yml

server.port: 9901
server.name: kibana
server.host: "0"
elasticsearch.hosts: ["http://192.168.20.20:19200"]
xpack.monitoring.ui.container.elasticsearch.enabled: true

3 启动配置
/app/server/elasticsearch/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml


######## elasticsearch-hq 安装

docker run -d -p 9900:5000 elastichq/elasticsearch-hq:release-v3.5.12
```











配置文件参考

主节点

```shell
cluster.name: "docker-cluster"               #集群名，同一集群必须相同
node.name: 10.0.13.124                       #指定节点主机名
node.master: true                            #允许成为主节点
node.data: true                              #数据节点
path.data: /usr/share/elasticsearch/data                #数据存放路径
path.logs: /usr/share/elasticsearch/logs                #日志路径
bootstrap.memory_lock: false                            #关闭锁定内存，设置为true会报错
network.host: 0.0.0.0                                   #监听ip
network.publish_host: 10.0.13.124                       #集群通讯ip
http.port: 9200                                         #http端口
transport.tcp.port: 9300
cluster.initial_master_nodes: ["10.0.13.124:9300"]      #初始主结点列表
discovery.zen.ping.unicast.hosts: ["10.0.13.103:9300","10.0.13.123:9300","10.0.13.124:9300"]     #初始主机列表
discovery.zen.minimum_master_nodes: 2               # n/2+1
http.cors.enabled: true                             #允许head插件访问es
http.cors.allow-origin: "*"
xpack:
  ml.enabled: false
  monitoring.enabled: false
  security.enabled: false
  watcher.enabled: false
```



数据节点

```shell
cluster.name: "docker-cluster"               #集群名，同一集群必须相同
node.name: 10.0.13.123                       #指定节点主机名
node.master: false                           #允许成为主节点
node.data: true                              #数据节点
path.data: /usr/share/elasticsearch/data                #数据存放路径
path.logs: /usr/share/elasticsearch/logs                #日志路径
bootstrap.memory_lock: false                            #关闭锁定内存，设置为true会报错
network.host: 0.0.0.0                                   #监听ip
network.publish_host: 10.0.13.123                       #集群通讯ip
http.port: 9200                                         #http端口
transport.tcp.port: 9300
cluster.initial_master_nodes: ["10.0.13.124:9300"]      #初始主结点列表
discovery.zen.ping.unicast.hosts: ["10.0.13.103:9300","10.0.13.123:9300","10.0.13.124:9300"]     #初始主机列表
discovery.zen.minimum_master_nodes: 2               # n/2+1
http.cors.enabled: true                             #允许head插件访问es
http.cors.allow-origin: "*"
xpack:
  ml.enabled: false
  monitoring.enabled: false
  security.enabled: false
  watcher.enabled: false
```



## 单机部署

配置文件参考

```shell
# 新建目录
mkdir /home/southgisdata/elasticsearch/config
# 新建文件
vi /home/southgisdata/elasticsearch/config/elasticsearch.yml
# 文件中写入
network.host: 0.0.0.0
cluster.name: "docker-cluster"
http.cors.enabled: true
http.cors.allow-origin: "*"
#cluster.initial_master_nodes: ["node-1"]
xpack:
  ml.enabled: false
  monitoring.enabled: false
  security.enabled: false
  watcher.enabled: false
# 文件目录赋权
chmod -R 777 /home/southgisdata/elasticsearch/config/elasticsearch.yml 
```

创建数据目录

```shell
# 新建数据目录
mkdir /home/southgisdata/elasticsearch/data
# 文件目录赋权
chmod -R 777 /home/southgisdata/elasticsearch/data
```



启动-未验证

```shell
docker run -d --restart=always --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v /home/southgisdata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml -v /home/southgisdata/elasticsearch/data:/usr/share/elasticsearch/data 172.16.51.238:1180/product/elasticsearch:7.4.1
```



