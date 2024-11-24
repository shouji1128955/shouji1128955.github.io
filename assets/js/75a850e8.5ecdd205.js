"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3296],{6817:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(4848),s=n(8453);const a={},t=void 0,l={id:"DevOps/skywalking/zookeeper\u5b89\u88c5",title:"zookeeper\u5b89\u88c5",description:"1\u3001zookeeper\u5b89\u88c5",source:"@site/docs/DevOps/4-skywalking/1-zookeeper\u5b89\u88c5.md",sourceDirName:"DevOps/4-skywalking",slug:"/DevOps/skywalking/zookeeper\u5b89\u88c5",permalink:"/docs/DevOps/skywalking/zookeeper\u5b89\u88c5",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/4-skywalking/1-zookeeper\u5b89\u88c5.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:173246975e4,sidebarPosition:1,frontMatter:{},sidebar:"DevOpsSkywalking",next:{title:"elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5",permalink:"/docs/DevOps/skywalking/elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5"}},d={},c=[{value:"1\u3001zookeeper\u5b89\u88c5",id:"1zookeeper\u5b89\u88c5",level:2},{value:"\u6240\u6709\u8282\u70b9\u6267\u884c",id:"\u6240\u6709\u8282\u70b9\u6267\u884c",level:4},{value:"\u5404\u4e2a\u8282\u70b9\u5206\u522b\u6267\u884c",id:"\u5404\u4e2a\u8282\u70b9\u5206\u522b\u6267\u884c",level:4},{value:"\u914d\u7f6e\u6587\u4ef6\u540c\u6b65",id:"\u914d\u7f6e\u6587\u4ef6\u540c\u6b65",level:4},{value:"2.\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",id:"2\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"1zookeeper\u5b89\u88c5",children:"1\u3001zookeeper\u5b89\u88c5"}),"\n",(0,o.jsx)(r.p,{children:"\u91c7\u7528\u9ad8\u53ef\u7528\u65b9\u6848\u5b89\u88c5"}),"\n",(0,o.jsxs)(r.p,{children:["\u5b98\u7f51\u955c\u50cf",(0,o.jsx)(r.a,{href:"https://hub.docker.com/_/zookeeper",children:"https://hub.docker.com/_/zookeeper"})]}),"\n",(0,o.jsx)(r.p,{children:"\u89c4\u5212"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"\u670d\u52a1\u5668Ip"}),(0,o.jsx)(r.th,{children:"\u8282\u70b9\u540d\u79f0"}),(0,o.jsx)(r.th,{children:"\u7aef\u53e3\u53f7"}),(0,o.jsx)(r.th,{children:"\u6587\u4ef6\u76ee\u5f55"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"10.51.8.110"}),(0,o.jsx)(r.td,{children:"zoo1"}),(0,o.jsx)(r.td,{children:"2181"}),(0,o.jsx)(r.td,{children:"/data/devops/skywalking/zookeeper"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"10.51.8.112"}),(0,o.jsx)(r.td,{children:"zoo2"}),(0,o.jsx)(r.td,{children:"2181"}),(0,o.jsx)(r.td,{children:"/data/devops/skywalking/zookeeper"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"10.51.8.113"}),(0,o.jsx)(r.td,{children:"zoo3"}),(0,o.jsx)(r.td,{children:"2181"}),(0,o.jsx)(r.td,{children:"/data/devops/skywalking/zookeeper"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"\u6240\u6709\u8282\u70b9\u6267\u884c",children:"\u6240\u6709\u8282\u70b9\u6267\u884c"}),"\n",(0,o.jsx)(r.p,{children:"\u521b\u5efa\u76ee\u5f55"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"mkdir -p /data/devops/skywalking/zookeeper\r\ncd /data/devops/skywalking/zookeeper\n"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"\u914d\u7f6ehosts\u89e3\u6790"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"[root@110 zookeeper]# cat /etc/hosts\r\n#...\r\n##\u53c2\u8003\u6dfb\u52a0ip\u89e3\u6790\r\n10.51.8.110  zoo1\r\n10.51.8.112  zoo2\r\n10.51.8.113  zoo3\r\n\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u53c2\u8003\u5b98\u65b9\u90e8\u7f72\u65b9\u5f0f\u90e8\u7f72zookeeper"}),"\n",(0,o.jsx)(r.h4,{id:"\u5404\u4e2a\u8282\u70b9\u5206\u522b\u6267\u884c",children:"\u5404\u4e2a\u8282\u70b9\u5206\u522b\u6267\u884c"}),"\n",(0,o.jsx)(r.p,{children:"10.51.8.110\u8282\u70b9\u64cd\u4f5c"}),"\n",(0,o.jsx)(r.p,{children:"docker-compose.yaml"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"tee  ./docker-compose.yaml <<-'EOF'\r\nversion: '3.1'\r\n\r\nservices:\r\n  zoo1:\r\n    image: zookeeper:3.9.0\r\n    restart: always\r\n    hostname: zoo1\r\n    network_mode: host\r\n    container_name: zoo1\r\n    restart: always\r\n    ports:\r\n      - 2181:2181\r\n      - 2888:2888\r\n      - 3888:3888\r\n    volumes:\r\n      - ./data:/data\r\n      - ./datalog:/datalog\r\n      - ./conf:/conf      \r\n    environment:\r\n      ZOO_MY_ID: 1\r\n      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181\r\nEOF\n"})}),"\n",(0,o.jsx)(r.p,{children:"10.51.8.112\u8282\u70b9\u64cd\u4f5c"}),"\n",(0,o.jsx)(r.p,{children:"docker-compose.yaml"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"tee  ./docker-compose.yaml <<-'EOF'\r\nversion: '3.1'\r\n\r\nservices:\r\n  zoo2:\r\n    image: zookeeper:3.9.0\r\n    restart: always\r\n    hostname: zoo2\r\n    network_mode: host\r\n    container_name: zoo2\r\n    restart: always\r\n    ports:\r\n      - 2182:2181\r\n      - 2888:2888\r\n      - 3888:3888      \r\n    volumes:\r\n      - ./data:/data\r\n      - ./datalog:/datalog\r\n      - ./conf:/conf\r\n    environment:\r\n      ZOO_MY_ID: 2\r\n      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181\r\nEOF\n"})}),"\n",(0,o.jsx)(r.p,{children:"10.51.8.113\u8282\u70b9\u64cd\u4f5c"}),"\n",(0,o.jsx)(r.p,{children:"docker-compose.yaml"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"tee  ./docker-compose.yaml <<-'EOF'\r\nversion: '3.1'\r\n\r\nservices:\r\n  zoo3:\r\n    image: zookeeper:3.9.0\r\n    restart: always\r\n    hostname: zoo3\r\n    network_mode: host\r\n    container_name: zoo3\r\n    restart: always\r\n    ports:\r\n      - 2181:2181\r\n      - 2888:2888\r\n      - 3888:3888      \r\n    volumes:\r\n      - ./data:/data\r\n      - ./datalog:/datalog\r\n      - ./conf:/conf\r\n    environment:\r\n      ZOO_MY_ID: 3\r\n      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181\r\nEOF\n"})}),"\n",(0,o.jsx)(r.h4,{id:"\u914d\u7f6e\u6587\u4ef6\u540c\u6b65",children:"\u914d\u7f6e\u6587\u4ef6\u540c\u6b65"}),"\n",(0,o.jsx)(r.p,{children:"\u56e0\u4e3a\u8fd9\u96c6\u7fa4\u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6zoo.cfg\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u6240\u4ee5\u5148\u542f\u52a8\u4e00\u4e2a\u8282\u70b9\uff0c\u7136\u540e\u62f7\u8d1d\u5176\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u7136\u540e\u540c\u6b65\u5230\u5176\u4ed6\u8282\u70b9\u5373\u53ef\u3002"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"#\u627e\u4e00\u53f0\u673a\u5668\u7136\u540e\u62f7\u8d1d\u51fa\u5176\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6bd4\u5982 zoo2\r\ncd /data/devops/skywalking/zookeeper\r\nroot docker cp zookeeper_zoo2_1:/conf .\r\n\r\n#\u7136\u540e\u628aconf\u6587\u4ef6\u5939\u540c\u6b65\u5230\u5176\u4ed6\u4e24\u53f0\u673a\u5668\r\nscp -r conf  10.51.8.110:/data/devops/skywalking/zookeeper/\r\nscp -r conf  10.51.8.113:/data/devops/skywalking/zookeeper/\r\n\r\n#\u7136\u540e\u518d\u5176\u4ed6\u4e24\u53f0\u673a\u5668\u521b\u5efa\u76ee\u5f55\r\n[root@110 zookeeper]# pwd\r\n/data/devops/skywalking/zookeeper\r\nmkdir -p data\r\nmkdir -p datalog\r\n\r\n\r\n#\u7136\u540e\u518d\u5176\u4ed6\u4e24\u53f0\u673a\u5668\u521b\u5efa\u76ee\u5f55\r\n[root@113 zookeeper]# pwd\r\n/data/devops/skywalking/zookeeper\r\nmkdir -p data\r\nmkdir -p datalog\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"[root@demo112 zookeeper]# cat conf/zoo.cfg \r\ndataDir=/data\r\ndataLogDir=/datalog\r\ntickTime=2000\r\ninitLimit=5\r\nsyncLimit=2\r\nautopurge.snapRetainCount=3\r\nautopurge.purgeInterval=0\r\nmaxClientCnxns=60\r\nstandaloneEnabled=true\r\nadmin.enableServer=true\r\nserver.1=zoo1:2888:3888;2181\r\nserver.2=zoo2:2888:3888;2181\r\nserver.3=zoo3:2888:3888;2181\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u96c6\u7fa4\u9a8c\u8bc1"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"[root@113 zookeeper]# docker exec -it zoo3 bash \r\nroot@zoo3:/apache-zookeeper-3.9.0-bin# zkServer.sh status\r\nZooKeeper JMX enabled by default\r\nUsing config: /conf/zoo.cfg\r\nClient port found: 2181. Client address: localhost. Client SSL: false.\r\nMode: follower\r\nroot@zoo3:/apache-zookeeper-3.9.0-bin#\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"root@zoo2:/apache-zookeeper-3.9.0-bin# zkServer.sh status \r\nZooKeeper JMX enabled by default\r\nUsing config: /conf/zoo.cfg\r\nClient port found: 2181. Client address: localhost. Client SSL: false.\r\nMode: leader\r\nroot@zoo2:/apache-zookeeper-3.9.0-bin\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"root@zoo1:/apache-zookeeper-3.9.0-bin# zkServer.sh status\r\nZooKeeper JMX enabled by default\r\nUsing config: /conf/zoo.cfg\r\nClient port found: 2181. Client address: localhost. Client SSL: false.\r\nMode: follower\r\nroot@zoo1:/apache-zookeeper-3.9.0-bin#\n"})}),"\n",(0,o.jsx)(r.h2,{id:"2\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",children:"2.\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e"}),"\n",(0,o.jsx)(r.p,{children:"\u8fd9\u91cc\u6211\u4f7f\u7528haproxy"}),"\n",(0,o.jsx)(r.p,{children:"\u53c2\u8003\u914d\u7f6e\uff0c\u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u5730\u5740"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"listen zk_server\r\n    bind 0.0.0.0:12181\r\n    mode tcp\r\n    server s1 10.51.8.110:2181  check fall 3 rise 5 inter 2000 weight 1\r\n    server s2 10.51.8.112:2181  check fall 3 rise 5 inter 2000 weight 1\r\n    server s3 10.51.8.113:2181  check fall 3 rise 5 inter 2000 weight 1\r\n\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>l});var o=n(6540);const s={},a=o.createContext(s);function t(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);