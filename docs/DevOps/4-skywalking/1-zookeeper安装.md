
## 1、zookeeper安装

采用高可用方案安装

官网镜像https://hub.docker.com/_/zookeeper

规划

| 服务器Ip    | 节点名称 | 端口号 | 文件目录                          |
| ----------- | -------- | ------ | --------------------------------- |
| 10.51.8.110 | zoo1     | 2181   | /data/devops/skywalking/zookeeper |
| 10.51.8.112 | zoo2     | 2181   | /data/devops/skywalking/zookeeper |
| 10.51.8.113 | zoo3     | 2181   | /data/devops/skywalking/zookeeper |



#### 所有节点执行

创建目录

```shell
mkdir -p /data/devops/skywalking/zookeeper
cd /data/devops/skywalking/zookeeper
```



**配置hosts解析**

```shell
[root@110 zookeeper]# cat /etc/hosts
#...
##参考添加ip解析
10.51.8.110  zoo1
10.51.8.112  zoo2
10.51.8.113  zoo3

```



参考官方部署方式部署zookeeper 



#### 各个节点分别执行

10.51.8.110节点操作

docker-compose.yaml

```shell
tee  ./docker-compose.yaml <<-'EOF'
version: '3.1'

services:
  zoo1:
    image: zookeeper:3.9.0
    restart: always
    hostname: zoo1
    network_mode: host
    container_name: zoo1
    restart: always
    ports:
      - 2181:2181
      - 2888:2888
      - 3888:3888
    volumes:
      - ./data:/data
      - ./datalog:/datalog
      - ./conf:/conf      
    environment:
      ZOO_MY_ID: 1
      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181
EOF
```



10.51.8.112节点操作

docker-compose.yaml

```shell
tee  ./docker-compose.yaml <<-'EOF'
version: '3.1'

services:
  zoo2:
    image: zookeeper:3.9.0
    restart: always
    hostname: zoo2
    network_mode: host
    container_name: zoo2
    restart: always
    ports:
      - 2182:2181
      - 2888:2888
      - 3888:3888      
    volumes:
      - ./data:/data
      - ./datalog:/datalog
      - ./conf:/conf
    environment:
      ZOO_MY_ID: 2
      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181
EOF
```





10.51.8.113节点操作

docker-compose.yaml

```shell
tee  ./docker-compose.yaml <<-'EOF'
version: '3.1'

services:
  zoo3:
    image: zookeeper:3.9.0
    restart: always
    hostname: zoo3
    network_mode: host
    container_name: zoo3
    restart: always
    ports:
      - 2181:2181
      - 2888:2888
      - 3888:3888      
    volumes:
      - ./data:/data
      - ./datalog:/datalog
      - ./conf:/conf
    environment:
      ZOO_MY_ID: 3
      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181
EOF
```



#### 配置文件同步

因为这集群节点的配置文件zoo.cfg都是一致的，所以先启动一个节点，然后拷贝其配置文件后，然后同步到其他节点即可。

```shell
#找一台机器然后拷贝出其中的配置文件，比如 zoo2
cd /data/devops/skywalking/zookeeper
root docker cp zookeeper_zoo2_1:/conf .

#然后把conf文件夹同步到其他两台机器
scp -r conf  10.51.8.110:/data/devops/skywalking/zookeeper/
scp -r conf  10.51.8.113:/data/devops/skywalking/zookeeper/

#然后再其他两台机器创建目录
[root@110 zookeeper]# pwd
/data/devops/skywalking/zookeeper
mkdir -p data
mkdir -p datalog


#然后再其他两台机器创建目录
[root@113 zookeeper]# pwd
/data/devops/skywalking/zookeeper
mkdir -p data
mkdir -p datalog
```



配置文件参考

```shell
[root@demo112 zookeeper]# cat conf/zoo.cfg 
dataDir=/data
dataLogDir=/datalog
tickTime=2000
initLimit=5
syncLimit=2
autopurge.snapRetainCount=3
autopurge.purgeInterval=0
maxClientCnxns=60
standaloneEnabled=true
admin.enableServer=true
server.1=zoo1:2888:3888;2181
server.2=zoo2:2888:3888;2181
server.3=zoo3:2888:3888;2181
```



集群验证

```shell
[root@113 zookeeper]# docker exec -it zoo3 bash 
root@zoo3:/apache-zookeeper-3.9.0-bin# zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Client port found: 2181. Client address: localhost. Client SSL: false.
Mode: follower
root@zoo3:/apache-zookeeper-3.9.0-bin#
```



```shell
root@zoo2:/apache-zookeeper-3.9.0-bin# zkServer.sh status 
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Client port found: 2181. Client address: localhost. Client SSL: false.
Mode: leader
root@zoo2:/apache-zookeeper-3.9.0-bin
```



```shell
root@zoo1:/apache-zookeeper-3.9.0-bin# zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Client port found: 2181. Client address: localhost. Client SSL: false.
Mode: follower
root@zoo1:/apache-zookeeper-3.9.0-bin#
```



## 2.负载均衡配置

这里我使用haproxy 

参考配置，替换为实际的地址
```shell
listen zk_server
    bind 0.0.0.0:12181
    mode tcp
    server s1 10.51.8.110:2181  check fall 3 rise 5 inter 2000 weight 1
    server s2 10.51.8.112:2181  check fall 3 rise 5 inter 2000 weight 1
    server s3 10.51.8.113:2181  check fall 3 rise 5 inter 2000 weight 1

```

