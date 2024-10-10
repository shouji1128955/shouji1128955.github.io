## 1、ES单节点安装

初始化配置

```shell
echo 262144 > /proc/sys/vm/max_map_count
sysctl -w vm.max_map_count=262144 
sysctl -p
```



创建持久目录

```shell
mkdir -p   /mydata/elasticsearch/config
mkdir -p   /mydata/elasticsearch/data
mkdir -p   /mydata/elasticsearch/plugins
chmod 777 /mydata/elasticsearch/ -R
```



修改配置

```shell
echo "http.host: 0.0.0.0" >> /mydata/elasticsearch/config/elasticsearch.yml
```



服务启动

```shell

docker run --name elasticsearch -p 9200:9200 -p 9300:9300   \
 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx128m"  \
 -v /mydata/elasticsearch/config/:/usr/share/elasticsearch/config/  \
 -v /mydata/elasticsearch/data:/usr/share/elasticsearch/data    \
 -v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins -d elasticsearch:7.6.2  
```





## 2、Elsticalert 告警



### 2.1、elsticalert手动安装方式



```shell
yum -y install wget openssl openssl-devel gcc gcc-c++
yum -y install python3  git python3-devel
pip3 install --upgrade pip
yum -y install python-pip python-devel


pip3 install elastalert

2.2.3 config.yaml 配置文件

[root@110 elastalert-master]# cat config.yaml
# 用来加载rule的目录，默认是example_rules
rules_folder: rules
# 用来设置定时向elasticsearch发送请求，也就是告警执行的频率
run_every:
  seconds: 15
# 用来设置请求里时间字段的范围
buffer_time:
  seconds: 15
es_host: 10.51.8.112
es_port: 9200
writeback_index: elastalert_status
writeback_alias: elastalert_alerts
# 失败重试的时间限制
alert_time_limit:
  days: 2
```



rules规则文件,rules中可以添加多个规则文件，但是每个规则

```shell
[root@110 elastalert-master]# cat rules/error_alert_rule.yaml 
es_host: 10.51.8.112
es_port: 9200
name: ErrorAlertRule_elk
type: frequency
index: nginx_access*
num_events: 1
timeframe:
  minutes: 5
filter:
- query_string:
    query: "tags:error_alert"
alert:
- "elastalert_modules.dingtalk_alert.DingTalkAlerter"
- "email"
email:
- "409003604@qq.com"
smtp_host: smtp.qq.com
smtp_port: 25
smtp_auth_file: /opt/elastalert-master/email_auth.yaml
from_addr: 409003604@qq.com
dingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=1fa27134e7f6cd127f70ec34093a86cc4b833f421743581c561d8c3245ca25f7"
dingtalk_msgtype: "text"
alert_text: "
【告警项】 Error_keywords_alert_elk \n
【告警时间】 {} \n
【message】 \n
{}\n
【日志路劲】 {} \n
【服务器】 {}
"
alert_text_type: alert_text_only
alert_text_args:
- "@timestamp"
- message
- log.file.path
- agent.hostname
match_enhancements:
- "elastalert.enhancements.TimeEnhancement"
dingtalk_isAtAll: true

docker push  zhanglaiqiang/elastalert:v1.0
```



### 2.2、通过容器部署方式



创建dockerfiele文件

```shell
[root@110 elk]# cat Dockerfile  
FROM python:3.6.15
ADD  elastalert-master.tar.gz  /opt/  
RUN  cd  /opt/elastalert-master && \
     python3 -m pip install --upgrade pip && \
     pip install "setuptools>=11.3"  -i https://mirrors.aliyun.com/pypi/simple/  && \
     pip install "setuptools_rust" -i https://mirrors.aliyun.com/pypi/simple/  && \
     pip3 install "elasticsearch>=7.0.0,<8.0.0"  &&\
     pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/ && \
     python3 setup.py install && \
     ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone
WORKDIR /opt/elastalert-master     
CMD ["python", "-m", "elastalert.elastalert","--config", "config.yaml"]
```



```shell
docker pull  zhanglaiqiang/elastalert:v1.0
#这个镜像已经包含了所有的配置文件
```



再本地部署的方式

```shell
mkdir  /data/project/
docker run --rm  --name elastalert-to-dingding  zhanglaiqiang/elastalert:v1.0
cd /data/project/
docker cp elastalert-to-dingding:/opt/elastalert-master  .
#删除elastalert-to-dingding ctrl -C
docker run -d  -v ./elastalert-master:/opt/elastalert-master --name elastalert-to-dingding  registry.cn-hangzhou.aliyuncs.com/zlq_registry/elk-dingtalk:v1.2
```



**如下配置没使用，只作介绍 **web



## 3、kibana安装

```shell
版本kibana-7.6.2
配置文件
[root@demo112 kibana-7.6.2-linux-x86_64]# cat config/kibana.yml | grep -Ev '#|^$'
server.port: 5601
server.host: "10.51.8.112"
elasticsearch.hosts: ["http://10.51.8.112:9200"]

启动
[root@demo112 kibana-7.6.2-linux-x86_64]# ./bin/kibana --allow-root
访问地址: x.x.x.x:5601
```



## 4、Esheader

esheader download
https://github.com/qax-os/ElasticHD/releases/download/1.4/elasticHD_linux_amd64.zip

yum install xdg-utils
exec ./ElasticHD -p 0.0.0.0:9800



测试

```shell
curl -X POST "http://elastic:passwd@127.0.0.1:9200/test-alert/test" -H 'Content-Type: application/json' -d '{"@timestamp": "'$(date --iso-8601=seconds)'", "field": "value"}'



{"_index":"test-alert","_type":"test","_id":"9y2NJYoB8Mxxn1vtZDO2","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}[root@demo112 elastalert]#
```








es跟其他组件版本对应
https://blog.csdn.net/vtopqx/article/details/105410814

| Elasticsearch | Kibana | X-Pack | Beats^*     | Logstash^*  | ES-Hadoop  (jar)* | APM Server     | App Search |
| ------------- | ------ | ------ | ----------- | ----------- | ----------------- | -------------- | ---------- |
| 5.0.x         | 5.0.x  | 5.0.x  | 1.3.x-5.6.x | 2.4.x-5.6.x | 5.0.x-5.6.x       |                |            |
| 5.1.x         | 5.1.x  | 5.1.x  | 1.3.x-5.6.x | 2.4.x-5.6.x | 5.0.x-5.6.x       |                |            |
| 5.2.x         | 5.2.x  | 5.2.x  | 1.3.x-5.6.x | 2.4.x-5.6.x | 5.0.x-5.6.x       |                |            |
| 5.3.x         | 5.3.x  | 5.3.x  | 1.3.x-5.6.x | 2.4.x-5.6.x | 5.0.x-5.6.x       |                |            |
| 5.4.x         | 5.4.x  | 5.4.x  | 1.3.x-5.6.x | 2.4.x-5.6.x | 5.0.x-5.6.x       |                |            |
| 5.5.x         | 5.5.x  | 5.5.x  | 1.3.x-5.6.x | 2.4.x-5.6.x | 5.0.x-5.6.x       |                |            |
| 5.6.x         | 5.6.x  | 5.6.x  | 1.3.x-6.0.x | 2.4.x-6.0.x | 5.0.x-6.0.x       |                |            |
| 6.0.x         | 6.0.x  | 6.0.x  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       |                |            |
| 6.1.x         | 6.1.x  | 6.1.x  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       |                |            |
| 6.2.x         | 6.2.x  | 6.2.x  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       | 6.2.x-6.8.x    |            |
| 6.3.x         | 6.3.x  | N/A**  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       | 6.2.x-6.8.x    |            |
| 6.4.x         | 6.4.x  | N/A**  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       | 6.2.x-6.8.x    |            |
| 6.5.x         | 6.5.x  | N/A**  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       | 6.2.x-6.8.x    |            |
| 6.6.x         | 6.6.x  | N/A**  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       | 6.2.x-6.8.x    |            |
| 6.7.x         | 6.7.x  | N/A**  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       | 6.2.x-6.8.x    |            |
| 6.8.x         | 6.8.x  | N/A**  | 5.6.x-6.8.x | 5.6.x-6.8.x | 6.0.x-6.8.x       | 6.2.x-6.8.x    |            |
| 7.0.x         | 7.0.x  | N/A**  | 6.8.x-7.6.x | 6.8.x-7.6.x | 6.8.x-7.6.x       | 7.0.x-7.6.x*** |            |
| 7.1.x         | 7.1.x  | N/A**  | 6.8.x-7.6.x | 6.8.x-7.6.x | 6.8.x-7.6.x       | 7.0.x-7.6.x*** |            |
| 7.2.x         | 7.2.x  | N/A**  | 6.8.x-7.6.x | 6.8.x-7.6.x | 6.8.x-7.6.x       | 7.0.x-7.6.x*** | 7.2.x      |
| 7.3.x         | 7.3.x  | N/A**  | 6.8.x-7.6.x | 6.8.x-7.6.x | 6.8.x-7.6.x       | 7.0.x-7.6.x*** | 7.3.x      |
| 7.4.x         | 7.4.x  | N/A**  | 6.8.x-7.6.x | 6.8.x-7.6.x | 6.8.x-7.6.x       | 7.0.x-7.6.x*** | 7.4.x      |
| 7.5.x         | 7.5.x  | N/A**  | 6.8.x-7.6.x | 6.8.x-7.6.x | 6.8.x-7.6.x       | 7.0.x-7.6.x*** | 7.5.x      |
| 7.6.x         | 7.6.x  | N/A**  | 6.8.x-7.6.x | 6.8.x-7.6.x | 6.8.x-7.6.x       | 7.0.x-7.6.x*** | 7.6.x      |



参考文档：
https://blog.csdn.net/qq_49296785/article/details/108657758




nginx日志收集整理
https://www.cpweb.top/1233

logstash    配置文件检查
logstash     -f      xxx.conf     -t





set from=409003604@qq.com
set smtp=smtp.qq.com
set smtp-auth-user=409003604@qq.com
set smtp-auth-password=xxxxxxxxxxxxxxxx  #授权码
set smtp-auth=login
set ssl-verify=ignore 



邮箱告警配置
elastalert

```shell
全局启动-规则文件都在rules目录下
/usr/bin/python3 -m elastalert.elastalert --verbose --config config.yaml
elastalert --config /opt/soft/elastalert/config.yaml --rule /opt/soft/elastalert/example_rules/nginx_frequency.yaml --verbose

name: prod存在"ERROR","Exception"关键字日志,请登陆kibana及时查看,地址：http://152.32.142.164:5601/
type: frequency
index: erp-cod-prod_zooqeer-service-log*
#在一个时间范围内出现这么多与查询匹配的文档时发出警报
num_events: 1
#5分钟发一次
timeframe:
    minutes: 5
filter:

- query:
  query_string:
    query: "ERROR"
  query_string:
    query: "Exception"
#只需要的字段 https://elastalert.readthedocs.io/en/latest/ruletypes.html#include
include: ["method", "url_path", "url_args", "status", "request_time"]
alert:
  "elastalert_modules.dingtalk_alert.DingTalkAlerter"

#dingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=11dd40a2482d889c45a2c16ee3cefea5c1fa7368f8841fdf98bf95d571c98dc9"

dingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=3c7a159c14cf39f0b8e9bd26806d3a96831e4b843c2d5123ccc5eeb232520f11"
dingtalk_msgtype: "text"
#钉钉智能机器人的关键字
content: elk    
```



## 5、filebeat安装



  以上的配置都是基于logstash来收集日志，接下来，调整为使用filebeat来收集，发送给logstash，然后通过logstash再发送给ES 

下载filebeat 和es 想对应的版本

从官网下载对应的版本7.6.2

  下载地址：https://www.elastic.co/cn/downloads/past-releases#filebeat

```shell
[root@demo112 filebeat]# ls -l
total 76696
drwxr-x---  3 root root       60 Aug 29 17:24 data
-rw-r--r--  1 root root   500235 Mar 26  2020 fields.yml
-rwxr-xr-x  1 root root 77562560 Mar 26  2020 filebeat
-rw-r--r--  1 root root    89359 Mar 26  2020 filebeat.reference.yml
-rw-------  1 root root      913 Aug 29 17:04 filebeat.yml
-rw-------  1 root root     8341 Aug 29 16:59 filebeat.yml.bak
drwxr-xr-x  3 root root       15 Mar 26  2020 kibana
-rw-r--r--  1 root root    13675 Mar 26  2020 LICENSE.txt
drwxr-xr-x 39 root root     4096 Mar 26  2020 module
drwxr-xr-x  2 root root     4096 Mar 26  2020 modules.d
-rw-r--r--  1 root root   328580 Mar 26  2020 NOTICE.txt
-rw-r--r--  1 root root      802 Mar 26  2020 README.md

```





修改配置

```shell
[root@demo112 filebeat]# cat filebeat.yml
filebeat.inputs:
- type: log
  enabled: true
  paths:
  - /var/log/nginx/*.log
  multiline:
    pattern: (^\|[0-9]{4}-[0-9]{2}-[0-9]{2} |^[0-9]{2}\:[0-9]{2}\:[0-9]{2}\.[0-9]+ [A-Z]+|^\|TID)
    negate: true
    match: after
  exclude_files: ['nacos.*.log','^info.log$','^error.log$']
  exclude_lines: ['api/ping\|', 'api/health\|']
  scan_frequency: 30s
  ignore_older: 24h
  close_inactive: 3h
  close_removed: true
  clean_inactive: 48h
  clean_removed: true


filebeat.config.modules:
  path: ${path.config}/modules.d/*.yml
  reload.enabled: false
setup.template.settings:
  index.number_of_shards: 1

output.logstash:
  hosts: ["10.51.8.112:5044"]

processors:
  - add_fields:
      target: agent
      fields:
        server_name: "demo112-prod"
  - add_fields:
      target: agent 
      fields:
        env_name: prod
  - drop_fields:
      fields: ["agent.id","agent.ephemeral_id"]
        
max_procs: 1 
```

启动方式

filebeat -e -c myfilebeat.yml



修改logstash的配置

```shell
[root@demo112 config]# cat nginx.conf
input {
  beats {
    port => 5044
  }
}

filter {
#  grok {
#     match => { "message" => "\|%{TIMESTAMP_ISO8601:timestamp}\|%{WORD:loglevel}\|%{WORD:application}\|%{GREEDYDATA:error_message}" }
#  } 
  grok {
    match => {
      "message" => [
       "^\|%{TIMESTAMP_ISO8601:logdate}\|%{LOGLEVEL:log_level}\s?\|%{USERNAME:app_name}\|%{URIPATH:request_uri}\|%{URIPROTO:http_method}\|%{BASE16NUM:request_id}\|%{DATA:request_app_name}\|%{GREEDYDATA:ms_describe}"
      ]
    }
    }
   ##gateway网关告警处理
  if [app_name] == "gateway-next-prod" {  

          if [message] =~ "ERROR" and [message] !~ /(405|产品不在服务期内|应用信息不存在| \n
                                           刷新用户的热量消耗信息 运营活动的健步走 失败| \n
                                           health-cloud-yxtx-web)/ {
            mutate {
                    add_tag => ["error_alert"]
        }
       }

  }
}


output {
  elasticsearch {
    hosts => ["http://10.51.8.112:9200"]
    index => "nginx_access-%{+YYYY.MM.dd}"
  }
  stdout { codec => rubydebug }
}
```



注意： 

```shell
 "^\|%{TIMESTAMP_ISO8601:logdate}\|%{LOGLEVEL:log_level}\s?\|%{USERNAME:app_name}\|%{URIPATH:request_uri}\|%{URIPROTO:http_method}\|%{BASE16NUM:request_id}\|%{DATA:request_app_name}\|%{GREEDYDATA:ms_describe}"
```

```shell
这部分内容是匹配日志格式, 其中%{DATA:request_app_name}用来可以匹配空格字符，%{GREEDYDATA:ms_describe}用来配置剩余所有的日志内容。
```


测试日志格式

```shell
[root@demo112 nginx]# cat test.log
|2023-08-29 19:04:31.550|ERROR |gateway-next-prod|/food-match03/meal/v3/api/recipes/detail|POST|338bdfaea1fe408992c1421a888ef391|606ffc2e837fee6eca5c1ed0|接口调用记录 mq 消息发送：{"appId":"606ffc2e837fee6eca5c1ed0","bizType":"020501","developerId":"606ffc2e837fee6eca5c1ed1","interfaceCode":"020501","interfaceUrl":"/food-match/meal/v3/api/recipes/detail?bizType=020501","invokeDate":"2023-08-24","invokeStatus":"1","invokeTime":"2023-08-24 16:39:31","sn":"338bdfaea1fe408992c142","timeLength":147}|
```







告警优化
https://blog.csdn.net/lihaipeng0417/article/details/118340478



