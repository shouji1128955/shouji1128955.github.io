"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3862],{9411:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>x});var t=n(4848),s=n(8453);const l={},d=void 0,a={id:"DevOps/ELK/ELK\u65e5\u5fd7\u544a\u8b66",title:"ELK\u65e5\u5fd7\u544a\u8b66",description:"1\u3001ES\u5355\u8282\u70b9\u5b89\u88c5",source:"@site/docs/DevOps/3-ELK/2-ELK\u65e5\u5fd7\u544a\u8b66.md",sourceDirName:"DevOps/3-ELK",slug:"/DevOps/ELK/ELK\u65e5\u5fd7\u544a\u8b66",permalink:"/en/docs/DevOps/ELK/ELK\u65e5\u5fd7\u544a\u8b66",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/3-ELK/2-ELK\u65e5\u5fd7\u544a\u8b66.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:173246975e4,sidebarPosition:2,frontMatter:{},sidebar:"DevOpsElk",previous:{title:"ELK\u6d4b\u8bd5\u90e8\u7f72",permalink:"/en/docs/DevOps/ELK/ELK\u6d4b\u8bd5\u90e8\u7f72"},next:{title:"elasticsearch\u64cd\u4f5c",permalink:"/en/docs/DevOps/ELK/elasticsearch\u64cd\u4f5c"}},i={},x=[{value:"1\u3001ES\u5355\u8282\u70b9\u5b89\u88c5",id:"1es\u5355\u8282\u70b9\u5b89\u88c5",level:2},{value:"2\u3001Elsticalert \u544a\u8b66",id:"2elsticalert-\u544a\u8b66",level:2},{value:"2.1\u3001elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f",id:"21elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f",level:3},{value:"2.2\u3001\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f",id:"22\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f",level:3},{value:"2.3\u3001\u6e05\u7406elastalert\u76f8\u5173\u72b6\u6001\u4fe1\u606f",id:"23\u6e05\u7406elastalert\u76f8\u5173\u72b6\u6001\u4fe1\u606f",level:3},{value:"3\u3001kibana\u5b89\u88c5",id:"3kibana\u5b89\u88c5",level:2},{value:"4\u3001Esheader",id:"4esheader",level:2},{value:"5\u3001filebeat\u5b89\u88c5",id:"5filebeat\u5b89\u88c5",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"1es\u5355\u8282\u70b9\u5b89\u88c5",children:"1\u3001ES\u5355\u8282\u70b9\u5b89\u88c5"}),"\n",(0,t.jsx)(r.p,{children:"\u521d\u59cb\u5316\u914d\u7f6e"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"echo 262144 > /proc/sys/vm/max_map_count\r\nsysctl -w vm.max_map_count=262144 \r\nsysctl -p\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u521b\u5efa\u6301\u4e45\u76ee\u5f55"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"mkdir -p   /mydata/elasticsearch/config\r\nmkdir -p   /mydata/elasticsearch/data\r\nmkdir -p   /mydata/elasticsearch/plugins\r\nchmod 777 /mydata/elasticsearch/ -R\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u4fee\u6539\u914d\u7f6e"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'echo "http.host: 0.0.0.0" >> /mydata/elasticsearch/config/elasticsearch.yml\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u670d\u52a1\u542f\u52a8"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'\r\ndocker run --name elasticsearch -p 9200:9200 -p 9300:9300   \\\r\n -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx128m"  \\\r\n -v /mydata/elasticsearch/config/:/usr/share/elasticsearch/config/  \\\r\n -v /mydata/elasticsearch/data:/usr/share/elasticsearch/data    \\\r\n -v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins -d elasticsearch:7.6.2  \n'})}),"\n",(0,t.jsx)(r.h2,{id:"2elsticalert-\u544a\u8b66",children:"2\u3001Elsticalert \u544a\u8b66"}),"\n",(0,t.jsx)(r.h3,{id:"21elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f",children:"2.1\u3001elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"yum -y install wget openssl openssl-devel gcc gcc-c++\r\nyum -y install python3  git python3-devel\r\npip3 install --upgrade pip\r\nyum -y install python-pip python-devel\r\n\r\n\r\npip3 install elastalert\r\n\r\n2.2.3 config.yaml \u914d\u7f6e\u6587\u4ef6\r\n\r\n[root@110 elastalert-master]# cat config.yaml\r\n# \u7528\u6765\u52a0\u8f7drule\u7684\u76ee\u5f55\uff0c\u9ed8\u8ba4\u662fexample_rules\r\nrules_folder: rules\r\n# \u7528\u6765\u8bbe\u7f6e\u5b9a\u65f6\u5411elasticsearch\u53d1\u9001\u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f\u544a\u8b66\u6267\u884c\u7684\u9891\u7387\r\nrun_every:\r\n  seconds: 15\r\n# \u7528\u6765\u8bbe\u7f6e\u8bf7\u6c42\u91cc\u65f6\u95f4\u5b57\u6bb5\u7684\u8303\u56f4\r\nbuffer_time:\r\n  seconds: 15\r\nes_host: 10.51.8.112\r\nes_port: 9200\r\nwriteback_index: elastalert_status\r\nwriteback_alias: elastalert_alerts\r\n# \u5931\u8d25\u91cd\u8bd5\u7684\u65f6\u95f4\u9650\u5236\r\nalert_time_limit:\r\n  days: 2\n"})}),"\n",(0,t.jsx)(r.p,{children:"rules\u89c4\u5219\u6587\u4ef6,rules\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u89c4\u5219\u6587\u4ef6\uff0c\u4f46\u662f\u6bcf\u4e2a\u89c4\u5219"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'[root@110 elastalert-master]# cat rules/error_alert_rule.yaml \r\nes_host: 10.51.8.112\r\nes_port: 9200\r\nname: ErrorAlertRule_elk\r\ntype: frequency\r\nindex: nginx_access*\r\nnum_events: 1\r\ntimeframe:\r\n  minutes: 5\r\nfilter:\r\n- query_string:\r\n    query: "tags:error_alert"\r\nalert:\r\n- "elastalert_modules.dingtalk_alert.DingTalkAlerter"\r\n- "email"\r\nemail:\r\n- "409003604@qq.com"\r\nsmtp_host: smtp.qq.com\r\nsmtp_port: 25\r\nsmtp_auth_file: /opt/elastalert-master/email_auth.yaml\r\nfrom_addr: 409003604@qq.com\r\ndingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=1fa27134e7f6cd127f70ec34093a86cc4b833f421743581c561d8c3245ca25f7"\r\ndingtalk_msgtype: "text"\r\nalert_text: "\r\n\u3010\u544a\u8b66\u9879\u3011 Error_keywords_alert_elk \\n\r\n\u3010\u544a\u8b66\u65f6\u95f4\u3011 {} \\n\r\n\u3010message\u3011 \\n\r\n{}\\n\r\n\u3010\u65e5\u5fd7\u8def\u52b2\u3011 {} \\n\r\n\u3010\u670d\u52a1\u5668\u3011 {}\r\n"\r\nalert_text_type: alert_text_only\r\nalert_text_args:\r\n- "@timestamp"\r\n- message\r\n- log.file.path\r\n- agent.hostname\r\nmatch_enhancements:\r\n- "elastalert.enhancements.TimeEnhancement"\r\ndingtalk_isAtAll: true\r\n\r\ndocker push  zhanglaiqiang/elastalert:v1.0\n'})}),"\n",(0,t.jsx)(r.h3,{id:"22\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f",children:"2.2\u3001\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f"}),"\n",(0,t.jsx)(r.p,{children:"\u521b\u5efadockerfiele\u6587\u4ef6"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'[root@110 elk]# cat Dockerfile  \r\nFROM python:3.6.15\r\nADD  elastalert-master.tar.gz  /opt/  \r\nRUN  cd  /opt/elastalert-master && \\\r\n     python3 -m pip install --upgrade pip && \\\r\n     pip install "setuptools>=11.3"  -i https://mirrors.aliyun.com/pypi/simple/  && \\\r\n     pip install "setuptools_rust" -i https://mirrors.aliyun.com/pypi/simple/  && \\\r\n     pip3 install "elasticsearch>=7.0.0,<8.0.0"  &&\\\r\n     pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/ && \\\r\n     python3 setup.py install && \\\r\n     ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone\r\nWORKDIR /opt/elastalert-master     \r\nCMD ["python", "-m", "elastalert.elastalert","--config", "config.yaml"]\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"docker pull  zhanglaiqiang/elastalert:v1.0\r\n#\u8fd9\u4e2a\u955c\u50cf\u5df2\u7ecf\u5305\u542b\u4e86\u6240\u6709\u7684\u914d\u7f6e\u6587\u4ef6\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u518d\u672c\u5730\u90e8\u7f72\u7684\u65b9\u5f0f"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"mkdir  /data/project/\r\ndocker run --rm  --name elastalert-to-dingding  zhanglaiqiang/elastalert:v1.0\r\ncd /data/project/\r\ndocker cp elastalert-to-dingding:/opt/elastalert-master  .\r\n#\u5220\u9664elastalert-to-dingding ctrl -C\r\ndocker run -d  -v ./elastalert-master:/opt/elastalert-master --name elastalert-to-dingding  registry.cn-hangzhou.aliyuncs.com/zlq_registry/elk-dingtalk:v1.2\n"})}),"\n",(0,t.jsx)(r.p,{children:"**\u5982\u4e0b\u914d\u7f6e\u6ca1\u4f7f\u7528\uff0c\u53ea\u4f5c\u4ecb\u7ecd **web"}),"\n",(0,t.jsx)(r.h3,{id:"23\u6e05\u7406elastalert\u76f8\u5173\u72b6\u6001\u4fe1\u606f",children:"2.3\u3001\u6e05\u7406elastalert\u76f8\u5173\u72b6\u6001\u4fe1\u606f"}),"\n",(0,t.jsx)(r.p,{children:"\u9700\u8981\u6e05\u7406es\u4e2d\u4e2d\u7d22\u5f15\u7684\u6587\u6863\u6570\u636e\uff0c\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'\r\n\u6e05\u7406 elastalert_status_status\r\nPOST elastalert_status_status/_delete_by_query\r\n{\r\n  "query": {\r\n    "match_all": {}\r\n  }\r\n}\r\n\r\n\u6e05\u7406elastalert_status\r\nPOST elastalert_status/_delete_by_query\r\n{\r\n  "query": {\r\n    "match_all": {}\r\n  }\r\n}\r\n\r\n\u6e05\u7406elastalert_status_silence\r\nPOST elastalert_status_silence/_delete_by_query\r\n{\r\n  "query": {\r\n    "match_all": {}\r\n  }\r\n}\r\n\n'})}),"\n",(0,t.jsx)(r.h2,{id:"3kibana\u5b89\u88c5",children:"3\u3001kibana\u5b89\u88c5"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'\u7248\u672ckibana-7.6.2\r\n\u914d\u7f6e\u6587\u4ef6\r\n[root@demo112 kibana-7.6.2-linux-x86_64]# cat config/kibana.yml | grep -Ev \'#|^$\'\r\nserver.port: 5601\r\nserver.host: "10.51.8.112"\r\nelasticsearch.hosts: ["http://10.51.8.112:9200"]\r\n\r\n\u542f\u52a8\r\n[root@demo112 kibana-7.6.2-linux-x86_64]# ./bin/kibana --allow-root\r\n\u8bbf\u95ee\u5730\u5740: x.x.x.x:5601\n'})}),"\n",(0,t.jsx)(r.h2,{id:"4esheader",children:"4\u3001Esheader"}),"\n",(0,t.jsxs)(r.p,{children:["esheader download\r\n",(0,t.jsx)(r.a,{href:"https://github.com/qax-os/ElasticHD/releases/download/1.4/elasticHD_linux_amd64.zip",children:"https://github.com/qax-os/ElasticHD/releases/download/1.4/elasticHD_linux_amd64.zip"})]}),"\n",(0,t.jsx)(r.p,{children:"yum install xdg-utils\r\nexec ./ElasticHD -p 0.0.0.0:9800"}),"\n",(0,t.jsx)(r.p,{children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'curl -X POST "http://elastic:passwd@127.0.0.1:9200/test-alert/test" -H \'Content-Type: application/json\' -d \'{"@timestamp": "\'$(date --iso-8601=seconds)\'", "field": "value"}\'\r\n\r\n\r\n\r\n{"_index":"test-alert","_type":"test","_id":"9y2NJYoB8Mxxn1vtZDO2","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}[root@demo112 elastalert]#\n'})}),"\n",(0,t.jsxs)(r.p,{children:["es\u8ddf\u5176\u4ed6\u7ec4\u4ef6\u7248\u672c\u5bf9\u5e94\r\n",(0,t.jsx)(r.a,{href:"https://blog.csdn.net/vtopqx/article/details/105410814",children:"https://blog.csdn.net/vtopqx/article/details/105410814"})]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Elasticsearch"}),(0,t.jsx)(r.th,{children:"Kibana"}),(0,t.jsx)(r.th,{children:"X-Pack"}),(0,t.jsx)(r.th,{children:"Beats^*"}),(0,t.jsx)(r.th,{children:"Logstash^*"}),(0,t.jsx)(r.th,{children:"ES-Hadoop  (jar)*"}),(0,t.jsx)(r.th,{children:"APM Server"}),(0,t.jsx)(r.th,{children:"App Search"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.0.x"}),(0,t.jsx)(r.td,{children:"5.0.x"}),(0,t.jsx)(r.td,{children:"5.0.x"}),(0,t.jsx)(r.td,{children:"1.3.x-5.6.x"}),(0,t.jsx)(r.td,{children:"2.4.x-5.6.x"}),(0,t.jsx)(r.td,{children:"5.0.x-5.6.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.1.x"}),(0,t.jsx)(r.td,{children:"5.1.x"}),(0,t.jsx)(r.td,{children:"5.1.x"}),(0,t.jsx)(r.td,{children:"1.3.x-5.6.x"}),(0,t.jsx)(r.td,{children:"2.4.x-5.6.x"}),(0,t.jsx)(r.td,{children:"5.0.x-5.6.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.2.x"}),(0,t.jsx)(r.td,{children:"5.2.x"}),(0,t.jsx)(r.td,{children:"5.2.x"}),(0,t.jsx)(r.td,{children:"1.3.x-5.6.x"}),(0,t.jsx)(r.td,{children:"2.4.x-5.6.x"}),(0,t.jsx)(r.td,{children:"5.0.x-5.6.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.3.x"}),(0,t.jsx)(r.td,{children:"5.3.x"}),(0,t.jsx)(r.td,{children:"5.3.x"}),(0,t.jsx)(r.td,{children:"1.3.x-5.6.x"}),(0,t.jsx)(r.td,{children:"2.4.x-5.6.x"}),(0,t.jsx)(r.td,{children:"5.0.x-5.6.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.4.x"}),(0,t.jsx)(r.td,{children:"5.4.x"}),(0,t.jsx)(r.td,{children:"5.4.x"}),(0,t.jsx)(r.td,{children:"1.3.x-5.6.x"}),(0,t.jsx)(r.td,{children:"2.4.x-5.6.x"}),(0,t.jsx)(r.td,{children:"5.0.x-5.6.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.5.x"}),(0,t.jsx)(r.td,{children:"5.5.x"}),(0,t.jsx)(r.td,{children:"5.5.x"}),(0,t.jsx)(r.td,{children:"1.3.x-5.6.x"}),(0,t.jsx)(r.td,{children:"2.4.x-5.6.x"}),(0,t.jsx)(r.td,{children:"5.0.x-5.6.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.6.x"}),(0,t.jsx)(r.td,{children:"5.6.x"}),(0,t.jsx)(r.td,{children:"5.6.x"}),(0,t.jsx)(r.td,{children:"1.3.x-6.0.x"}),(0,t.jsx)(r.td,{children:"2.4.x-6.0.x"}),(0,t.jsx)(r.td,{children:"5.0.x-6.0.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.0.x"}),(0,t.jsx)(r.td,{children:"6.0.x"}),(0,t.jsx)(r.td,{children:"6.0.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.1.x"}),(0,t.jsx)(r.td,{children:"6.1.x"}),(0,t.jsx)(r.td,{children:"6.1.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.2.x"}),(0,t.jsx)(r.td,{children:"6.2.x"}),(0,t.jsx)(r.td,{children:"6.2.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.2.x-6.8.x"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.3.x"}),(0,t.jsx)(r.td,{children:"6.3.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.2.x-6.8.x"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.4.x"}),(0,t.jsx)(r.td,{children:"6.4.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.2.x-6.8.x"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.5.x"}),(0,t.jsx)(r.td,{children:"6.5.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.2.x-6.8.x"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.6.x"}),(0,t.jsx)(r.td,{children:"6.6.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.2.x-6.8.x"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.7.x"}),(0,t.jsx)(r.td,{children:"6.7.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.2.x-6.8.x"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.8.x"}),(0,t.jsx)(r.td,{children:"6.8.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"5.6.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.0.x-6.8.x"}),(0,t.jsx)(r.td,{children:"6.2.x-6.8.x"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.0.x"}),(0,t.jsx)(r.td,{children:"7.0.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"7.0.x-7.6.x***"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.1.x"}),(0,t.jsx)(r.td,{children:"7.1.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"7.0.x-7.6.x***"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.2.x"}),(0,t.jsx)(r.td,{children:"7.2.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"7.0.x-7.6.x***"}),(0,t.jsx)(r.td,{children:"7.2.x"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.3.x"}),(0,t.jsx)(r.td,{children:"7.3.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"7.0.x-7.6.x***"}),(0,t.jsx)(r.td,{children:"7.3.x"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.4.x"}),(0,t.jsx)(r.td,{children:"7.4.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"7.0.x-7.6.x***"}),(0,t.jsx)(r.td,{children:"7.4.x"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.5.x"}),(0,t.jsx)(r.td,{children:"7.5.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"7.0.x-7.6.x***"}),(0,t.jsx)(r.td,{children:"7.5.x"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.6.x"}),(0,t.jsx)(r.td,{children:"7.6.x"}),(0,t.jsx)(r.td,{children:"N/A**"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"6.8.x-7.6.x"}),(0,t.jsx)(r.td,{children:"7.0.x-7.6.x***"}),(0,t.jsx)(r.td,{children:"7.6.x"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["\u53c2\u8003\u6587\u6863\uff1a\r\n",(0,t.jsx)(r.a,{href:"https://blog.csdn.net/qq_49296785/article/details/108657758",children:"https://blog.csdn.net/qq_49296785/article/details/108657758"})]}),"\n",(0,t.jsxs)(r.p,{children:["nginx\u65e5\u5fd7\u6536\u96c6\u6574\u7406\r\n",(0,t.jsx)(r.a,{href:"https://www.cpweb.top/1233",children:"https://www.cpweb.top/1233"})]}),"\n",(0,t.jsx)(r.p,{children:"logstash    \u914d\u7f6e\u6587\u4ef6\u68c0\u67e5\r\nlogstash     -f      xxx.conf     -t"}),"\n",(0,t.jsxs)(r.p,{children:["set from=",(0,t.jsx)(r.a,{href:"mailto:409003604@qq.com",children:"409003604@qq.com"}),"\r\nset smtp=smtp.qq.com\r\nset smtp-auth-user=",(0,t.jsx)(r.a,{href:"mailto:409003604@qq.com",children:"409003604@qq.com"}),"\r\nset smtp-auth-password=xxxxxxxxxxxxxxxx  #\u6388\u6743\u7801\r\nset smtp-auth=login\r\nset ssl-verify=ignore"]}),"\n",(0,t.jsx)(r.p,{children:"\u90ae\u7bb1\u544a\u8b66\u914d\u7f6e\r\nelastalert"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'\u5168\u5c40\u542f\u52a8-\u89c4\u5219\u6587\u4ef6\u90fd\u5728rules\u76ee\u5f55\u4e0b\r\n/usr/bin/python3 -m elastalert.elastalert --verbose --config config.yaml\r\nelastalert --config /opt/soft/elastalert/config.yaml --rule /opt/soft/elastalert/example_rules/nginx_frequency.yaml --verbose\r\n\r\nname: prod\u5b58\u5728"ERROR","Exception"\u5173\u952e\u5b57\u65e5\u5fd7,\u8bf7\u767b\u9646kibana\u53ca\u65f6\u67e5\u770b,\u5730\u5740\uff1ahttp://152.32.142.164:5601/\r\ntype: frequency\r\nindex: erp-cod-prod_zooqeer-service-log*\r\n#\u5728\u4e00\u4e2a\u65f6\u95f4\u8303\u56f4\u5185\u51fa\u73b0\u8fd9\u4e48\u591a\u4e0e\u67e5\u8be2\u5339\u914d\u7684\u6587\u6863\u65f6\u53d1\u51fa\u8b66\u62a5\r\nnum_events: 1\r\n#5\u5206\u949f\u53d1\u4e00\u6b21\r\ntimeframe:\r\n    minutes: 5\r\nfilter:\r\n\r\n- query:\r\n  query_string:\r\n    query: "ERROR"\r\n  query_string:\r\n    query: "Exception"\r\n#\u53ea\u9700\u8981\u7684\u5b57\u6bb5 https://elastalert.readthedocs.io/en/latest/ruletypes.html#include\r\ninclude: ["method", "url_path", "url_args", "status", "request_time"]\r\nalert:\r\n  "elastalert_modules.dingtalk_alert.DingTalkAlerter"\r\n\r\n#dingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=11dd40a2482d889c45a2c16ee3cefea5c1fa7368f8841fdf98bf95d571c98dc9"\r\n\r\ndingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=3c7a159c14cf39f0b8e9bd26806d3a96831e4b843c2d5123ccc5eeb232520f11"\r\ndingtalk_msgtype: "text"\r\n#\u9489\u9489\u667a\u80fd\u673a\u5668\u4eba\u7684\u5173\u952e\u5b57\r\ncontent: elk    \n'})}),"\n",(0,t.jsx)(r.h2,{id:"5filebeat\u5b89\u88c5",children:"5\u3001filebeat\u5b89\u88c5"}),"\n",(0,t.jsx)(r.p,{children:"\u4ee5\u4e0a\u7684\u914d\u7f6e\u90fd\u662f\u57fa\u4e8elogstash\u6765\u6536\u96c6\u65e5\u5fd7\uff0c\u63a5\u4e0b\u6765\uff0c\u8c03\u6574\u4e3a\u4f7f\u7528filebeat\u6765\u6536\u96c6\uff0c\u53d1\u9001\u7ed9logstash\uff0c\u7136\u540e\u901a\u8fc7logstash\u518d\u53d1\u9001\u7ed9ES"}),"\n",(0,t.jsx)(r.p,{children:"\u4e0b\u8f7dfilebeat \u548ces \u60f3\u5bf9\u5e94\u7684\u7248\u672c"}),"\n",(0,t.jsx)(r.p,{children:"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u5bf9\u5e94\u7684\u7248\u672c7.6.2"}),"\n",(0,t.jsxs)(r.p,{children:["\u4e0b\u8f7d\u5730\u5740\uff1a",(0,t.jsx)(r.a,{href:"https://www.elastic.co/cn/downloads/past-releases#filebeat",children:"https://www.elastic.co/cn/downloads/past-releases#filebeat"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"[root@demo112 filebeat]# ls -l\r\ntotal 76696\r\ndrwxr-x---  3 root root       60 Aug 29 17:24 data\r\n-rw-r--r--  1 root root   500235 Mar 26  2020 fields.yml\r\n-rwxr-xr-x  1 root root 77562560 Mar 26  2020 filebeat\r\n-rw-r--r--  1 root root    89359 Mar 26  2020 filebeat.reference.yml\r\n-rw-------  1 root root      913 Aug 29 17:04 filebeat.yml\r\n-rw-------  1 root root     8341 Aug 29 16:59 filebeat.yml.bak\r\ndrwxr-xr-x  3 root root       15 Mar 26  2020 kibana\r\n-rw-r--r--  1 root root    13675 Mar 26  2020 LICENSE.txt\r\ndrwxr-xr-x 39 root root     4096 Mar 26  2020 module\r\ndrwxr-xr-x  2 root root     4096 Mar 26  2020 modules.d\r\n-rw-r--r--  1 root root   328580 Mar 26  2020 NOTICE.txt\r\n-rw-r--r--  1 root root      802 Mar 26  2020 README.md\r\n\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u4fee\u6539\u914d\u7f6e"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"[root@demo112 filebeat]# cat filebeat.yml\r\nfilebeat.inputs:\r\n- type: log\r\n  enabled: true\r\n  paths:\r\n  - /var/log/nginx/*.log\r\n  multiline:\r\n    pattern: (^\\|[0-9]{4}-[0-9]{2}-[0-9]{2} |^[0-9]{2}\\:[0-9]{2}\\:[0-9]{2}\\.[0-9]+ [A-Z]+|^\\|TID)\r\n    negate: true\r\n    match: after\r\n  exclude_files: ['nacos.*.log','^info.log$','^error.log$']\r\n  exclude_lines: ['api/ping\\|', 'api/health\\|']\r\n  scan_frequency: 30s\r\n  ignore_older: 24h\r\n  close_inactive: 3h\r\n  close_removed: true\r\n  clean_inactive: 48h\r\n  clean_removed: true\r\n\r\n\r\nfilebeat.config.modules:\r\n  path: ${path.config}/modules.d/*.yml\r\n  reload.enabled: false\r\nsetup.template.settings:\r\n  index.number_of_shards: 1\r\n\r\noutput.logstash:\r\n  hosts: [\"10.51.8.112:5044\"]\r\n\r\nprocessors:\r\n  - add_fields:\r\n      target: agent\r\n      fields:\r\n        server_name: \"demo112-prod\"\r\n  - add_fields:\r\n      target: agent \r\n      fields:\r\n        env_name: prod\r\n  - drop_fields:\r\n      fields: [\"agent.id\",\"agent.ephemeral_id\"]\r\n        \r\nmax_procs: 1 \n"})}),"\n",(0,t.jsx)(r.p,{children:"\u542f\u52a8\u65b9\u5f0f"}),"\n",(0,t.jsx)(r.p,{children:"filebeat -e -c myfilebeat.yml"}),"\n",(0,t.jsx)(r.p,{children:"\u4fee\u6539logstash\u7684\u914d\u7f6e"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'[root@demo112 config]# cat nginx.conf\r\ninput {\r\n  beats {\r\n    port => 5044\r\n  }\r\n}\r\n\r\nfilter {\r\n#  grok {\r\n#     match => { "message" => "\\|%{TIMESTAMP_ISO8601:timestamp}\\|%{WORD:loglevel}\\|%{WORD:application}\\|%{GREEDYDATA:error_message}" }\r\n#  } \r\n  grok {\r\n    match => {\r\n      "message" => [\r\n       "^\\|%{TIMESTAMP_ISO8601:logdate}\\|%{LOGLEVEL:log_level}\\s?\\|%{USERNAME:app_name}\\|%{URIPATH:request_uri}\\|%{URIPROTO:http_method}\\|%{BASE16NUM:request_id}\\|%{DATA:request_app_name}\\|%{GREEDYDATA:ms_describe}"\r\n      ]\r\n    }\r\n    }\r\n   ##gateway\u7f51\u5173\u544a\u8b66\u5904\u7406\r\n  if [app_name] == "gateway-next-prod" {  \r\n\r\n          if [message] =~ "ERROR" and [message] !~ /(405|\u4ea7\u54c1\u4e0d\u5728\u670d\u52a1\u671f\u5185|\u5e94\u7528\u4fe1\u606f\u4e0d\u5b58\u5728| \\n\r\n                                           \u5237\u65b0\u7528\u6237\u7684\u70ed\u91cf\u6d88\u8017\u4fe1\u606f \u8fd0\u8425\u6d3b\u52a8\u7684\u5065\u6b65\u8d70 \u5931\u8d25| \\n\r\n                                           health-cloud-yxtx-web)/ {\r\n            mutate {\r\n                    add_tag => ["error_alert"]\r\n        }\r\n       }\r\n\r\n  }\r\n}\r\n\r\n\r\noutput {\r\n  elasticsearch {\r\n    hosts => ["http://10.51.8.112:9200"]\r\n    index => "nginx_access-%{+YYYY.MM.dd}"\r\n  }\r\n  stdout { codec => rubydebug }\r\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:' "^\\|%{TIMESTAMP_ISO8601:logdate}\\|%{LOGLEVEL:log_level}\\s?\\|%{USERNAME:app_name}\\|%{URIPATH:request_uri}\\|%{URIPROTO:http_method}\\|%{BASE16NUM:request_id}\\|%{DATA:request_app_name}\\|%{GREEDYDATA:ms_describe}"\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"\u8fd9\u90e8\u5206\u5185\u5bb9\u662f\u5339\u914d\u65e5\u5fd7\u683c\u5f0f, \u5176\u4e2d%{DATA:request_app_name}\u7528\u6765\u53ef\u4ee5\u5339\u914d\u7a7a\u683c\u5b57\u7b26\uff0c%{GREEDYDATA:ms_describe}\u7528\u6765\u914d\u7f6e\u5269\u4f59\u6240\u6709\u7684\u65e5\u5fd7\u5185\u5bb9\u3002\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u6d4b\u8bd5\u65e5\u5fd7\u683c\u5f0f"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'[root@demo112 nginx]# cat test.log\r\n|2023-08-29 19:04:31.550|ERROR |gateway-next-prod|/food-match03/meal/v3/api/recipes/detail|POST|338bdfaea1fe408992c1421a888ef391|606ffc2e837fee6eca5c1ed0|\u63a5\u53e3\u8c03\u7528\u8bb0\u5f55 mq \u6d88\u606f\u53d1\u9001\uff1a{"appId":"606ffc2e837fee6eca5c1ed0","bizType":"020501","developerId":"606ffc2e837fee6eca5c1ed1","interfaceCode":"020501","interfaceUrl":"/food-match/meal/v3/api/recipes/detail?bizType=020501","invokeDate":"2023-08-24","invokeStatus":"1","invokeTime":"2023-08-24 16:39:31","sn":"338bdfaea1fe408992c142","timeLength":147}|\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u544a\u8b66\u4f18\u5316\r\n",(0,t.jsx)(r.a,{href:"https://blog.csdn.net/lihaipeng0417/article/details/118340478",children:"https://blog.csdn.net/lihaipeng0417/article/details/118340478"})]}),"\n",(0,t.jsx)(r.p,{children:"##6\u3001header\u90e8\u7f72"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"\r\nsudo docker run -d \\\r\n  --name=elasticsearch-head \\\r\n  --restart=always \\\r\n  -p 9500:9100 \\\r\n  registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch-head:5-alpine\r\n\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>a});var t=n(6540);const s={},l=t.createContext(s);function d(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);