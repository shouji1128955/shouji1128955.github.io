"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[7698],{9660:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=n(4848),a=n(8453);const t={},c=void 0,l={id:"Sre/\u4e2d\u95f4\u4ef6/Elasticsearch",title:"Elasticsearch",description:"1\u3001\u96c6\u7fa4\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/2.Elasticsearch.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Elasticsearch",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Elasticsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/2-\u4e2d\u95f4\u4ef6/2.Elasticsearch.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1734371096e3,sidebarPosition:2,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"Harbor",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Harbor"},next:{title:"Redis",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Redis"}},i={},o=[{value:"1\u3001\u96c6\u7fa4\u90e8\u7f72",id:"1\u96c6\u7fa4\u90e8\u7f72",level:2},{value:"2\u3001\u5bb9\u5668\u90e8\u7f72",id:"2\u5bb9\u5668\u90e8\u7f72",level:2},{value:"3\u3001\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72",id:"3\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72",level:2},{value:"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8eES 7.x",id:"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8ees-7x",level:6},{value:"4\u3001head\u90e8\u7f72",id:"4head\u90e8\u7f72",level:2},{value:"5\u3001es\u7d22\u5f15\u5bfc\u51fa",id:"5es\u7d22\u5f15\u5bfc\u51fa",level:2},{value:"6\u3001ES\u7d22\u5f15\u65e5\u5fd7\u6e05\u7406",id:"6es\u7d22\u5f15\u65e5\u5fd7\u6e05\u7406",level:2}];function h(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"1\u96c6\u7fa4\u90e8\u7f72",children:"1\u3001\u96c6\u7fa4\u90e8\u7f72"}),"\n",(0,s.jsx)(r.p,{children:"1.1\u3001\u90e8\u7f72\u8bf4\u660e\r\n\u751f\u4ea7\u673a\u5668\u5efa\u8bae\u914d\u7f6e\uff1a  \u6700\u4f4e 8C / 16 G"}),"\n",(0,s.jsx)(r.p,{children:"\u4e09\u8282\u70b9\uff1a\r\n10.51.8.120\r\n10.51.8.121\r\n10.51.8.122\r\n\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'[root@es001 ~]# cat /usr/local/elasticsearch-8.2.0/config/elasticsearch.yml  | grep -v "#"\r\ncluster.name: my-elasticsearch\r\nnode.name: es001   #\u6bcf\u53f0\u673a\u5668\u53ea\u9700\u8981\u4fee\u6539\u6b64\u5904\r\nnetwork.host: 0.0.0.0\r\nhttp.port: 9200\r\ndiscovery.seed_hosts: ["10.51.8.120","10.51.8.121","10.51.8.122"]\r\n#master\u9009\u4e3e\u6700\u5c11\u7684\u8282\u70b9\u6570\uff0c\u8fd9\u4e2a\u4e00\u5b9a\u8981\u8bbe\u7f6e\u4e3aN/2+1\uff0c\u5176\u4e2dN\u662f\uff1a\u5177\u6709master\u8d44\u683c\u7684\u8282\u70b9\u7684\u6570\u91cf\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e2a\u6570\u3002\r\ncluster.initial_master_nodes: ["10.51.8.120","10.51.8.121","10.51.8.122"]\r\n\r\n\r\nxpack.security.enabled: false\r\n\r\nxpack.security.enrollment.enabled: false\r\n\r\nxpack.security.http.ssl:\r\n  enabled: true\r\n  keystore.path: certs/http.p12\r\n\r\nxpack.security.transport.ssl:\r\n  enabled: true\r\n  verification_mode: certificate\r\n  keystore.path: certs/transport.p12\r\n  truststore.path: certs/transport.p12\r\n\r\nhttp.host: 0.0.0.0\r\n\r\ntransport.host: 0.0.0.0\r\n\r\n#\u6bcf\u53f0\u673a\u5668\u9700\u8981\u6dfb\u52a0\r\n[root@es001 ~]# cat /etc/hosts\r\n127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\r\n10.51.8.121 es002\r\n10.51.8.122 es003\r\n10.51.8.120 es001\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u5355\u8282\u70b9\u542f\u52a8\u96c6\u7fa4\uff1a\r\n\u8bf4\u660e\uff1a \u5b88\u62a4\u8fdb\u7a0b\u65b9\u5f0f\u542f\u52a8\uff1a\r\n\u8fdb\u5165\u8f6f\u4ef6\u7684\u5b89\u88c5\u76ee\u5f55\uff0c\u8fdb\u5165\u5230bin\r\n\u6267\u884c\uff1ash elasticsearch -d -p pid"}),"\n",(0,s.jsxs)(r.p,{children:["[es@es001 elasticsearch-8.2.0]$ ./bin/elasticsearch",(0,s.jsx)(r.br,{}),"\n","\u539f\u56e0\uff1a \u5c1a\u672a\u53d1\u73b0\u6216\u9009\u62e9\u4e3b\u8282\u70b9\uff0c\u4e00\u6b21\u9009\u62e9\u81f3\u5c11\u9700\u89812\u4e2aID\u4e3a\u7684\u8282\u70b9"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_bb053d409437a74a57f4939a31835e20_r.png",alt:""})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_bb053d409437a74a57f4939a31835e20_r.png",alt:""})}),"\n",(0,s.jsxs)(r.p,{children:["\u542f\u52a8\u4e4b\u540e\u8fc7\u4e00\u6bb5\u65f6\u95f4\u62a5\u9519\uff1a\u627e\u4e0d\u5230\u8282\u70b9\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_ea9f34a30c3fdb68dcaebda54a1ade40_r.png",alt:""}),"\r\n\u6309\u7167\u4e0a\u9762\u65b9\u5f0f\uff0c\u9996\u5148\u4f46\u8282\u70b9\u542f\u52a8\u96c6\u7fa4\uff0c\u5982\u679c\u5176\u4ed6\u8282\u70b9\u6ca1\u6709\u542f\u52a8\uff0c\u9996\u5148\u4f1a\u6709\u56fe1\u7684\u63d0\u793a\uff0c\u8fc7\u4e00\u6bb5\u65f6\u95f4\u4f1a\u6709\u56fe2\u63d0\u793a\u8fde\u63a5\u4e0d\u5230\u8282\u70b9\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u7136\u540e\u542f\u52a8\u7b2c\u4e8c\u4e2a\u8282\u70b9\r\n\u7136\u540e\u5728\u8282\u70b91\u770b\u65e5\u5fd7\uff0c\u663e\u793a\u5df2\u7ecf\u6709\u4e00\u4e2a\u8282\u70b9\u52a0\u8fdb\u6765 \uff0c\u663e\u793a\u4e3b\u8282\u70b9\u5df2\u66f4\u6539\uff0c\u5f53\u524d\u662fes002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_49526a6d7e4ae7e4df3f680ce2f64626_r.png",alt:""}),"\r\n\u65e5\u5fd7\u63d0\u793a\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'current.health="GREEN" message="Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.geoip_databases][0]]])." previous.health="YELLOW" reason="shards started [[.geoip_databases][0]]"\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u73b0\u5728\u7684health=\u201cGREEN\u201dmessage=\u201c\u7fa4\u96c6\u8fd0\u884c\u72b6\u51b5\u4ece[\u9ec4\u8272]\u66f4\u6539\u4e3a[\u7eff\u8272]\uff08\u539f\u56e0\uff1a[\u788e\u7247\u5df2\u542f\u52a8[.geoip_\u6570\u636e\u5e93][0]]\uff09\u4ee5\u524d\u7684health=\u201cYELLOW\u201dreason=\u201c\u788e\u7247\u5df2\u542f\u52a8[.geoip_\u6570\u636e\u5e93][0]\u3002\u201d"}),"\n",(0,s.jsxs)(r.p,{children:["\u7136\u540e\u5728es003\u52a0\u5165\u7b2c\u4e09\u4e2a\u8282\u70b9\uff1a\r\n\u5728es001\u4e0a\u770b\u5230\u7684\u65e5\u5fd7\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_71a499c460edb7a07fb3821a08ceee1c_r.png",alt:""}),"\r\n\u5728es002\u4e0a\u770b\u5230\u7684\u65e5\u5fd7"]}),"\n",(0,s.jsxs)(r.p,{children:["es002\u4e3a\u4e3b\u8282\u70b9\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_1a0cc3e5b76c5ee4b02b351dbd7f4d1d_r.png",alt:""}),"\r\n\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\uff1a\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_9a4330a8494853119feb1088f2a415d0_r.png",alt:""}),"\r\n",(0,s.jsx)(r.a,{href:"https://github.com/didi/LogiEM",children:"https://github.com/didi/LogiEM"})]}),"\n",(0,s.jsx)(r.p,{children:"\u5206\u7247\u5728\u521b\u5efa\u597d\uff0c\u540e\u671f\u4e0d\u80fd\u4fee\u6539"}),"\n",(0,s.jsx)(r.p,{children:"GET /_cat/indices"}),"\n",(0,s.jsxs)(r.p,{children:["1\u3001\u521b\u5efa\u6570\u636e\u5e93\r\n\u521b\u5efa\u6570\u636e\u5e93\u5c31\u662f\u5728es\u4e2d\u521b\u5efa\u7d22\u5f15\uff0c\u4e0b\u9762\u521b\u5efa\u7d22\u5f15testdb\r\n\u5411ES\u670d\u52a1\u5668\u53d1\u9001PUT\u8bf7\u6c42\uff1a  ",(0,s.jsx)(r.a,{href:"http://x.x.x.x:9200/testdb",children:"http://x.x.x.x:9200/testdb"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_6efbc75e6bce3a032d948c9c008bcf9a_r.png",alt:""}),"\r\n\u67e5\u770b\u6240\u6709\u7684\u7d22\u5f15\uff1a\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_7c5f8a212ef4ceeba5a69650b86d27ac_r.png",alt:""}),"''"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5220\u9664\u7d22\u5f15\uff1a\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_6c73efe34c9fb98b91b6d89f96d7670c_r.png",alt:""})]}),"\n",(0,s.jsx)(r.p,{children:"2\u3001\u6dfb\u52a0\u6570\u636e doc  \u6587\u6863\r\n\u5728\u65b0\u7248\u672c\u4e2d\u6ca1\u6709type\u6982\u5ff5\uff0c\u5c31\u662f\u6ca1\u6709\u8868\u7684\u6982\u5ff5\u3002"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_c408ddf36ec47598299db76d3156c3d2_r.png",alt:""})}),"\n",(0,s.jsx)(r.p,{children:"\u4ee5\u4e0a_id\u662f\u81ea\u52a8\u751f\u6210\u7684\u3002\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_9ec589505ac2ba76cf66d41576000514_r.png",alt:""}),"\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_0d64d766ad5006f73c29f4398ecf5892_r.png",alt:""}),"\r\n\u64cd\u4f5c\u8bb0\u5f55"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'GET /_cat/indices?v\r\nDELETE  /testdb1\r\n#\u6dfb\u52a0shopping\u7d22\u5f15\r\nPUT  /shopping\r\n#\u6dfb\u52a0\u6570\u636e\r\nPOST  /shopping/_doc\r\n{\r\n  "title": "\u5c0f\u7c73\u624b\u673a",\r\n  "dianchi": "45000mh",\r\n  "price":"4999.00"\r\n  \r\n}\r\n#\u6dfb\u52a0\u6587\u6863\u81ea\u5b9a\u4e49\u7d22\u5f15id\r\nPOST /shopping/_create/11004\r\n{\r\n  "title": "\u5c0f\u7c73\u624b\u673a",\r\n  "dianch": "45000mh",\r\n  "price":"4999.00"\r\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u67e5\u8be2\u4e00\u6761\u7d22\u5f15\u6587\u6863"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_a46f00cbf5e65487f0bc6ab8e99fb31a_r.png",alt:""})}),"\n",(0,s.jsxs)(r.p,{children:["\u67e5\u8be2\u6240\u6709\u7684\u7d22\u5f15\u6587\u6863\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_86d5aa3a2415377072935a07f7b73f99_r.png",alt:""}),"\r\n\u4fee\u6539\u5168\u90e8\u6570\u636e\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_2b6bcfddcb7c9c0c342ba0267d9c1c97_r.png",alt:""}),"\r\n\u4fee\u6539\u5c40\u90e8\u6570\u636e\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_977b59a5a64246385effeb8f880a0c58_r.png",alt:""})]}),"\n",(0,s.jsx)(r.p,{children:"cur /_cat/nodes  #\u67e5\u770b\u8282\u70b9"}),"\n",(0,s.jsx)(r.p,{children:"es\u9ed8\u8ba4\u662f\u4e00\u4e2a\u5206\u7247\uff0c\u4e00\u4e2a\u526f\u672c\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_982df7c7b25ee1624aff3ca0a3ec95c5_r.png",alt:""}),"\r\n\u4e00\u4e9b\u8bf4\u660e\uff1a\r\n",(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_b99901484bd6f55da40f095194c5bd19_r.png",alt:""}),"\r\n\u4e3b\u5206\u7247\u5728\u521b\u5efa\u7d22\u5f15\u7684\u65f6\u5019\u5df2\u7ecf\u5b9a\u4e0b\u6765\uff0c\u540e\u7eed\u6ca1\u6cd5\u4fee\u6539\uff0c\u4f46\u662f\u4fee\u6539\u5176\u526f\u672c\uff0c\u4e5f\u53ef\u4ee5\u63d0\u9ad8\u8bbf\u95ee\u91cf\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'PUT  /user/_settings \r\n{\r\n   "number_of_replicas": 2 \r\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_b4bc53f40d2ecc53780e3f3c2dd233c3_r.png",alt:""})}),"\n",(0,s.jsx)(r.p,{children:"\u5f53\u4e00\u4e2a\u8282\u70b9\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u91cd\u542f\u6545\u969c\u8282\u70b9\uff0c\u4e00\u5b9a\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2ddiscover\u4e2d\u6dfb\u52a0\u96c6\u7fa4\u8282\u70b9\u4fe1\u606f\uff0c\u5426\u5219\u65e0\u6cd5\u627e\u5230\u96c6\u7fa4\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"2\u5bb9\u5668\u90e8\u7f72",children:"2\u3001\u5bb9\u5668\u90e8\u7f72"}),"\n",(0,s.jsx)(r.p,{children:"\u4e09\u53f0\u673a\u5668\uff1a\r\n\u521b\u5efa\u76ee\u5f55"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"sudo mkdir -p /app/server/elasticsearch/temp/config\r\nsudo mkdir -p /app/server/elasticsearch/temp/data\r\nsudo mkdir -p /app/server/elasticsearch/temp/logs\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4fee\u6539\u6743\u9650"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"sudo chmod 777 /app/server/elasticsearch/temp/config\r\nsudo chmod 777 /app/server/elasticsearch/temp/data\r\nsudo chmod 777 /app/server/elasticsearch/temp/logs\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'cluster.name: skywalking_demo\r\nnode.name: beijing-k8s-node01  #\u5f53\u524d\u4e3b\u673a\u540d\r\nnode.master: true\r\nnode.data: true\r\nnetwork.host: 0.0.0.0\r\nhttp.port: 9200 #\u5916\u90e8\u76d1\u542c\u7aef\u53e3\r\ntransport.port: 9300 #\u96c6\u7fa4\u5185\u90e8\u901a\u4fe1\u7aef\u53e3\r\ndiscovery.seed_hosts: ["10.51.8.112:9300","10.51.8.113:19300","10.51.8.114:9300"]  #\u5019\u9009 master\r\ncluster.initial_master_nodes: ["10.51.8.112","10.51.8.113"]  #\u521d\u59cb\u5316 master\r\nhttp.cors.enabled: true\r\nhttp.cors.allow-origin: "*"\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u78c1\u76d8\u6302\u8f7d\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"/app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\r\n/app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\r\n/app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5bb9\u5668\u542f\u52a8\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'[root@beijing-k8s-node01 ~]# cat es_compose.yaml \r\nversion: \'3\'\r\nservices:\r\n  es_node01:\r\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\r\n    environment:\r\n      - bootstrap.memory_lock=true\r\n      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"\r\n    ulimits:\r\n      memlock:\r\n        soft: -1\r\n        hard: -1\r\n    volumes:\r\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\r\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\r\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\r\n    network_mode: host \r\nnetworks:\r\n  es-net:\r\n    driver: bridge\r\n\r\n\r\n \r\n [root@beijing-k8s-node02 ~]# cat es_compose.yaml \r\nversion: \'3\'\r\nservices:\r\n  es_node02:\r\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\r\n    environment:\r\n      - bootstrap.memory_lock=true\r\n      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"\r\n    ulimits:\r\n      memlock:\r\n        soft: -1\r\n        hard: -1\r\n    volumes:\r\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\r\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\r\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\r\n    network_mode: "host"\r\n[root@beijing-k8s-node02 ~]#\r\n \r\n \r\n \r\n [root@beijing-k8s-node03 ~]# cat es_compose.yaml \r\nversion: \'3\'\r\nservices:\r\n  es_node03:\r\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\r\n    environment:\r\n      - bootstrap.memory_lock=true\r\n      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"\r\n    ulimits:\r\n      memlock:\r\n        soft: -1\r\n        hard: -1\r\n    volumes:\r\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\r\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\r\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\r\n    network_mode: "host"\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u542f\u52a8\u540e\u9a8c\u8bc1\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'curl -l http://192.168.20.20:19200\r\n\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\r\ncurl -X GET "192.168.20.20:19200/_cat/health?v"\r\n\u67e5\u770b\u8282\u70b9\r\ncurl -X GET "192.168.20.20:19200/_cat/nodes?v&pretty"\r\n\u67e5\u770b\u6240\u6709\u7d22\u5f15\r\ncurl -XGET "http://192.168.20.20:19200/_cat/indices?v&pretty"\r\n\r\nGET /_cat/nodes: \u67e5\u770b\u6240\u6709\u8282\u70b9\r\nGET/_cat/health:\u67e5\u770bes\u5065\u5eb7\u72b6\u51b5\r\nGET /_cat/master:\u67e5\u770b\u4e3b\u8282\u70b9\r\n\r\n\u67e5\u770bES\u5065\u5eb7\u72b6\u6001\r\n[root@test apps]# curl localhost:9300/_cluster/health?pretty\r\n{\r\n  "cluster_name" : "skywalking_elasticsearch",\r\n  "status" : "yellow",\r\n  "timed_out" : false,\r\n  "number_of_nodes" : 2,\r\n  "number_of_data_nodes" : 2,\r\n  "active_primary_shards" : 156,\r\n  "active_shards" : 296,\r\n  "relocating_shards" : 0,\r\n  "initializing_shards" : 1,\r\n  "unassigned_shards" : 0,\r\n  "delayed_unassigned_shards" : 0,\r\n  "number_of_pending_tasks" : 0,\r\n  "number_of_in_flight_fetch" : 0,\r\n  "task_max_waiting_in_queue_millis" : 0,\r\n  "active_shards_percent_as_number" : 99.66329966329967\r\n}\r\n\r\n\u67e5\u770bES\u96c6\u7fa4\u7684\u8bbe\u7f6e\r\n[root@test apps]# curl localhost:9300/_cluster/settings?pretty\r\n{\r\n  "persistent" : { },\r\n  "transient" : { }\r\n}\r\n\u5176\u4e2dpersistent\u4e3a\u6c38\u4e45\u8bbe\u7f6e\uff0c\u91cd\u542f\u4ecd\u7136\u6709\u6548\uff1btrainsient\u4e3a\u4e34\u65f6\u8bbe\u7f6e\uff0c\u91cd\u542f\u5931\u6548\r\n\r\n\r\n#\u67e5\u770bES\u5728\u7ebf\u7684\u8282\u70b9\r\n[root@test apps]# curl localhost:9300/_cat/nodes?v\r\nip             heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name\r\n172.17.113.125           67          99   7    1.34    2.85     2.31 mdi       -      node-2\r\n172.17.224.119           48          99   6    1.55    3.54     3.08 mdi       *      node-1\r\n#\u5b58\u5728\u8282\u70b9\u7f3a\u5931\u7684\u60c5\u51b5\u53ef\u7528\u8be5\u547d\u4ee4\u67e5\u770b\u7f3a\u5931\u8282\u70b9\u4e3a\u54ea\u4e9b\r\n\r\n\r\n\u76f8\u5173\u6587\u6863 \r\nhttps://zhuanlan.zhihu.com/p/360762412\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u53ef\u89c6\u5316\u5de5\u5177\u5b89\u88c5"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'####### kibana \u5b89\u88c5\r\n\r\n1 \u521b\u5efa\u6587\u4ef6\u5939\r\nsudo mkdir -p /app/server/elasticsearch/kibana/config\r\n\r\n2 \u914d\u7f6e\u6587\u4ef6\uff0ckibana.yml\r\nsudo vi /app/server/elasticsearch/kibana/config/kibana.yml\r\n\r\nserver.port: 9901\r\nserver.name: kibana\r\nserver.host: "0"\r\nelasticsearch.hosts: ["http://192.168.20.20:19200"]\r\nxpack.monitoring.ui.container.elasticsearch.enabled: true\r\n\r\n3 \u542f\u52a8\u914d\u7f6e\r\n/app/server/elasticsearch/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml\r\n\r\n\r\n######## elasticsearch-hq \u5b89\u88c5\r\n\r\ndocker run -d -p 9900:5000 elastichq/elasticsearch-hq:release-v3.5.12\n'})}),"\n",(0,s.jsx)(r.h2,{id:"3\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72",children:"3\u3001\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72"}),"\n",(0,s.jsx)(r.h6,{id:"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8ees-7x",children:"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8eES 7.x"}),"\n",(0,s.jsx)(r.p,{children:"\u6b65\u9aa4"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u62f7\u8d1delasticsearch\u5b89\u88c5\u53053\u4efd\uff0c\u5206\u522b\u547d\u540des-a, es-b,es-c"}),"\n",(0,s.jsx)(r.li,{children:"\u5206\u522b\u4fee\u6539config\u6587\u4ef6\u5939\u4e0b\u7684elasticsearch.yml\u6587\u4ef6\u5185\u5bb9\uff08\u5982\u4e0b\uff09"}),"\n",(0,s.jsx)(r.li,{children:"\u5206\u522b\u542f\u52a8a ,b ,c \u4e09\u4e2a\u8282\u70b9"}),"\n",(0,s.jsxs)(r.li,{children:["\u6253\u5f00\u6d4f\u89c8\ufa38\u8f93\u5165\uff1a ",(0,s.jsx)(r.a,{href:"http://localhost:9200/_cat/health?v",children:"http://localhost:9200/_cat/health?v"})," ,\u5982\u679c\u8fd4\u56de\u7684node.total\u662f3\uff0c\u4ee3\u8868\u96c6\u7fa4\u642d\u5efa\u6210\u529f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528head\u8fdb\u884c\u8fde\u63a5es\uff0c\u5982\u679c\u51fa\u73b0\u96c6\u7fa4\u4fe1\u606f\uff0c\u5219\u642d\u5efa\u6210\u529f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"\u6ce8\u610f\uff1a\u5982\u679cdata\u76ee\u5f55\u6709\u5df2\u7ecf\u5efa\u7acb\u597d\u7684\u7d22\u5f15\u5e93\u7684\u8bdd\uff0c\u9700\u8981\u628adata\u76ee\u5f55\u6e05\u7a7a\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6ELASTICSEARCH.YML\r\na\u8282\u70b9"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'http.cors.enabled: true\r\nhttp.cors.allow-origin: "*"\r\n#\u8282\u70b91\u7684\u914d\u7f6e\u4fe1\u606f\uff1a\r\n#\u96c6\u7fa4\u540d\u79f0\r\ncluster.name: elasticsearch\r\n#\u8282\u70b9\u540d\u79f0\r\nnode.name: node-a\r\n#\u662f\u4e0d\u662f\u6709\u8d44\u683c\u7ade\u9009\u4e3b\u8282\u70b9\r\nnode.master: true\r\n#\u662f\u5426\u5b58\u50a8\u6570\u636e\r\nnode.data: true\r\n#\u6700\u5927\u96c6\u7fa4\u8282\u70b9\u6570\r\nnode.max_local_storage_nodes: 3\r\n#\u7f51\u5173\u5730\u5740\r\nnetwork.host: 127.0.0.1\r\n#\u7aef\u53e3\r\nhttp.port: 9201\r\n#\u5185\u90e8\u8282\u70b9\u4e4b\u95f4\u6c9f\u901a\u7aef\u53e3\r\ntransport.tcp.port: 9301\r\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u5199\u5165\u5019\u9009\u4e3b\u8282\u70b9\u7684\u8bbe\u5907\u5730\u5740\uff0c\u5728\u5f00\u542f\u670d\u52a1\u540e\u53ef\u4ee5\u88ab\u9009\u4e3a\u4e3b\u8282\u70b9\r\ndiscovery.seed_hosts: ["127.0.0.1:9301","127.0.0.1:9302","127.0.0.1:9303"]\r\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u65f6\u9700\u8981\u6b64\u914d\u7f6e\u6765\u9009\u4e3emaster\r\ncluster.initial_master_nodes: ["node-a", "node-b","node-c"]\r\n#\u6570\u636e\u5b58\u50a8\u8def\u5f84\r\npath.data: /home/es/software/es/data\r\n#\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\r\npath.logs: /home/es/software/es/logs\n'})}),"\n",(0,s.jsx)(r.p,{children:"b\u8282\u70b9"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'http.cors.enabled: true\r\nhttp.cors.allow-origin: "*"\r\n#\u8282\u70b91\u7684\u914d\u7f6e\u4fe1\u606f\uff1a\r\n#\u96c6\u7fa4\u540d\u79f0\r\ncluster.name: elasticsearch\r\n#\u8282\u70b9\u540d\u79f0\r\nnode.name: node-b\r\n#\u662f\u4e0d\u662f\u6709\u8d44\u683c\u7ade\u9009\u4e3b\u8282\u70b9\r\nnode.master: true\r\n#\u662f\u5426\u5b58\u50a8\u6570\u636e\r\nnode.data: true\r\n#\u6700\u5927\u96c6\u7fa4\u8282\u70b9\u6570\r\nnode.max_local_storage_nodes: 3\r\n#\u7f51\u5173\u5730\u5740\r\nnetwork.host: 127.0.0.1\r\n#\u7aef\u53e3\r\nhttp.port: 9202\r\n#\u5185\u90e8\u8282\u70b9\u4e4b\u95f4\u6c9f\u901a\u7aef\u53e3\r\ntransport.tcp.port: 9302\r\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u5199\u5165\u5019\u9009\u4e3b\u8282\u70b9\u7684\u8bbe\u5907\u5730\u5740\uff0c\u5728\u5f00\u542f\u670d\u52a1\u540e\u53ef\u4ee5\u88ab\u9009\u4e3a\u4e3b\u8282\u70b9\r\ndiscovery.seed_hosts: ["127.0.0.1:9301","127.0.0.1:9302","127.0.0.1:9303"]\r\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u65f6\u9700\u8981\u6b64\u914d\u7f6e\u6765\u9009\u4e3emaster\r\ncluster.initial_master_nodes: ["node-a", "node-b","node-c"]\r\n#\u6570\u636e\u5b58\u50a8\u8def\u5f84\r\npath.data: /home/es/software/es/data\r\n#\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\r\npath.logs: /home/es/software/es/logs\n'})}),"\n",(0,s.jsx)(r.p,{children:"c\u8282\u70b9"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'http.cors.enabled: true\r\nhttp.cors.allow-origin: "*"\r\n#\u8282\u70b91\u7684\u914d\u7f6e\u4fe1\u606f\uff1a\r\n#\u96c6\u7fa4\u540d\u79f0\r\ncluster.name: elasticsearch\r\n#\u8282\u70b9\u540d\u79f0\r\nnode.name: node-c\r\n#\u662f\u4e0d\u662f\u6709\u8d44\u683c\u7ade\u9009\u4e3b\u8282\u70b9\r\nnode.master: true\r\n#\u662f\u5426\u5b58\u50a8\u6570\u636e\r\nnode.data: true\r\n#\u6700\u5927\u96c6\u7fa4\u8282\u70b9\u6570\r\nnode.max_local_storage_nodes: 3\r\n#\u7f51\u5173\u5730\u5740\r\nnetwork.host: 127.0.0.1\r\n#\u7aef\u53e3\r\nhttp.port: 9203\r\n#\u5185\u90e8\u8282\u70b9\u4e4b\u95f4\u6c9f\u901a\u7aef\u53e3\r\ntransport.tcp.port: 9303\r\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u5199\u5165\u5019\u9009\u4e3b\u8282\u70b9\u7684\u8bbe\u5907\u5730\u5740\uff0c\u5728\u5f00\u542f\u670d\u52a1\u540e\u53ef\u4ee5\u88ab\u9009\u4e3a\u4e3b\u8282\u70b9\r\ndiscovery.seed_hosts: ["127.0.0.1:9301","127.0.0.1:9302","127.0.0.1:9303"]\r\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u65f6\u9700\u8981\u6b64\u914d\u7f6e\u6765\u9009\u4e3emaster\r\ncluster.initial_master_nodes: ["node-a", "node-b","node-c"]\r\n#\u6570\u636e\u5b58\u50a8\u8def\u5f84\r\npath.data: /home/es/software/es/data\r\n#\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\r\npath.logs: /home/es/software/es/logs\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u4f7f\u7528HEAD\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f\u5982\u4e0b\uff0c\u8bf4\u660e\u642d\u5efa\u6210\u529f"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_a1ec268b5c670e3703315e69f3ad9a41_r.png",alt:""})}),"\n",(0,s.jsx)(r.h2,{id:"4head\u90e8\u7f72",children:"4\u3001head\u90e8\u7f72"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"sudo docker run -d \\\r\n  --name=elasticsearch-head \\\r\n  --restart=always \\\r\n  -p 9500:9100 \\\r\n  registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch-head:5-alpine\n"})}),"\n",(0,s.jsx)(r.h2,{id:"5es\u7d22\u5f15\u5bfc\u51fa",children:"5\u3001es\u7d22\u5f15\u5bfc\u51fa"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'elasticdump  --input="http://$esAccount:$esPassword@$esIp:$esPort/${index_name}" --output=${back_es_dir}/$index_name.json.bak_$NOW --type=data\n'})}),"\n",(0,s.jsx)(r.h2,{id:"6es\u7d22\u5f15\u65e5\u5fd7\u6e05\u7406",children:"6\u3001ES\u7d22\u5f15\u65e5\u5fd7\u6e05\u7406"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'root@jkyy01:~# cat clean-es-index.sh\r\n#!/bin/bash\r\n# Elasticsearch \u76f8\u5173\u914d\u7f6e\r\nES_URL="http://es-cn-7pp2o23h0000e3fk7.public.elasticsearch.aliyuncs.com:9200"\r\nES_USER="xxxx"\r\nES_PASS=\'xxxxxxxxxx\'\r\n \r\n# \u5b9a\u4e49\u9700\u8981\u5220\u9664\u7684\u7d22\u5f15\u5339\u914d\u5217\u8868\r\nINDEX_EXP_LIST=( [1]=".security_audit_log-2023.05" \\\r\n                 [2]=".security_audit_log-2023.06" \\\r\n                 [3]=".security_audit_log-2023.07" \\\r\n                 [4]=".security_audit_log-2023.08" \\\r\n            )\r\n \r\n# \u4e34\u65f6\u6587\u4ef6\u8def\u5f84\r\nTMP_FILE="/tmp/indexlogs-es.txt"\r\n#echo \'\' > "${TMP_FILE}"\r\n \r\n \r\n# \u6e05\u7406\u7d22\u5f15\u51fd\u6570\r\nfunction delindex {\r\n \r\n# \u83b7\u53d6\u7d22\u5f15\u5217\u8868\r\ncurl -s -XGET -u "${ES_USER}:${ES_PASS}" "${ES_URL}/_cat/indices?v" > "${TMP_FILE}" \r\n \r\nfor list in "${!INDEX_EXP_LIST[@]}"; do\r\n    indexname="${INDEX_EXP_LIST[$list]}"\r\n    echo "[INFO] #################\u5f00\u59cb\u6e05\u7406 ${indexname}* \u76f8\u5173\u7d22\u5f15#####################"\r\n \r\n    # \u63d0\u53d6\u8981\u5220\u9664\u7684\u7d22\u5f15\u5217\u8868\r\n    INDEX_EXP_LIST_ALL=$(grep -n "${indexname}" "${TMP_FILE}" | awk -F \' \' \'{print $3}\')\r\n      \r\n \r\n    if [ -z "${INDEX_EXP_LIST_ALL}" ]; then\r\n      echo "[INFO] ${indexname} \u76f8\u5173\u7d22\u5f15\u4e0d\u5b58\u5728!"\r\n      echo -e "\\n"\r\n      continue\r\n    else\r\n       echo INDEX_EXP_LIST_ALL: $INDEX_EXP_LIST_ALL\r\n       for index  in ${INDEX_EXP_LIST_ALL}; do\r\n           echo index: $index\r\n           if [[ $index =~ ${indexname} ]]; then\r\n                echo "[INFO] \u5f00\u59cb\u6e05\u7406\u7d22\u5f15 ${index}"\r\n                curl -s -XDELETE -u "${ES_USER}:${ES_PASS}" "${ES_URL}/${index}"\r\n                echo -e ""\r\n            else\r\n              echo "[INFO] \u8df3\u8fc7 ${index}, \u4e0d\u5728\u8303\u56f4\u5185"\r\n             continue          \r\n           fi\r\n \r\n       done\r\n    fi\r\ndone\r\n \r\n}\r\n \r\n \r\n# \u6267\u884c\u6e05\u7406\u7d22\u5f15\u51fd\u6570\r\ndelindex\n'})})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>l});var s=n(6540);const a={},t=s.createContext(a);function c(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);