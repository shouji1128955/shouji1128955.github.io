"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[522],{4151:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=n(4848),l=n(8453);const i={},a=void 0,c={id:"Sre/\u4e2d\u95f4\u4ef6/pulsar",title:"pulsar",description:"nomad\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/14.pulsar.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/pulsar",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/pulsar",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/2-\u4e2d\u95f4\u4ef6/14.pulsar.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:172933664e4,sidebarPosition:14,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"nomad",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/nomad"},next:{title:"zookeeper",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/zookeeper"}},d={},o=[{value:"nomad\u90e8\u7f72",id:"nomad\u90e8\u7f72",level:2},{value:"\u89c4\u5212\u7aef\u53e3:",id:"\u89c4\u5212\u7aef\u53e3",level:3},{value:"1.\u90e8\u7f72\u89c4\u5212",id:"1\u90e8\u7f72\u89c4\u5212",level:3},{value:"2.\u8282\u70b9\u89c4\u5212",id:"2\u8282\u70b9\u89c4\u5212",level:3},{value:"3.\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305",id:"3\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305",level:3},{value:"4.\u90e8\u7f72 Zookeeper \u96c6\u7fa4",id:"4\u90e8\u7f72-zookeeper-\u96c6\u7fa4",level:3},{value:"5.\u90e8\u7f72 Bookeeper \u96c6\u7fa4",id:"5\u90e8\u7f72-bookeeper-\u96c6\u7fa4",level:3},{value:"6.\u90e8\u7f72 Pulsar \u96c6\u7fa4",id:"6\u90e8\u7f72-pulsar-\u96c6\u7fa4",level:3},{value:"7.\u5ba2\u6237\u7aef\u8fde\u63a5 Pulsar \u96c6\u7fa4",id:"7\u5ba2\u6237\u7aef\u8fde\u63a5-pulsar-\u96c6\u7fa4",level:3},{value:"8.\u90e8\u7f72 Pulsar manager",id:"8\u90e8\u7f72-pulsar-manager",level:3},{value:"9.Perf \u538b\u529b\u6d4b\u8bd5",id:"9perf-\u538b\u529b\u6d4b\u8bd5",level:3}];function t(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"nomad\u90e8\u7f72",children:"nomad\u90e8\u7f72"}),"\n",(0,s.jsx)(r.h3,{id:"\u89c4\u5212\u7aef\u53e3",children:"\u89c4\u5212\u7aef\u53e3:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bookie\u4e24\u4e2a\u7aef\u53e3\r\n8000\r\n3181\r\nzookeeper\u7aef\u53e3\r\n8100\r\n2181\r\n9990\r\neth0IP:38888\r\n\r\nbroker\u7aef\u53e3\r\n6650\r\n8080\n"})}),"\n",(0,s.jsx)(r.h3,{id:"1\u90e8\u7f72\u89c4\u5212",children:"1.\u90e8\u7f72\u89c4\u5212"}),"\n",(0,s.jsx)(r.p,{children:"\u90e8\u7f72 Pulsar \u96c6\u7fa4\u5305\u62ec\u4ee5\u4e0b\u6b65\u9aa4(\u6309\u987a\u5e8f)\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"1.\u90e8\u7f72\u4e00\u4e2a ZooKeeper \u96c6\u7fa4\uff0c\u521d\u59cb\u5316 Pulsar \u96c6\u7fa4\u5143\u6570\u636e\u3002"}),"\n",(0,s.jsx)(r.li,{children:"2.\u90e8\u7f72\u4e00\u4e2a Bookeeper \u96c6\u7fa4\u3002"}),"\n",(0,s.jsx)(r.li,{children:"3.\u90e8\u7f72\u4e00\u4e2a\u6216\u591a\u4e2a Pulsar brokers\u3002"}),"\n",(0,s.jsx)(r.li,{children:"4.\u90e8\u7f72 Pulsar manager\uff08\u53ef\u9009\uff09"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"2\u8282\u70b9\u89c4\u5212",children:"2.\u8282\u70b9\u89c4\u5212"}),"\n",(0,s.jsx)(r.p,{children:"\u6b64\u5904\u4ee5\u4e09\u8282\u70b9\u4e3a\u4f8b"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u4e3b\u673a\u540d"}),(0,s.jsx)(r.th,{children:"IP\u5730\u5740"}),(0,s.jsx)(r.th,{children:"\u89d2\u8272"}),(0,s.jsx)(r.th,{children:"\u7aef\u53e3\u53f7"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"zookeeper1"}),(0,s.jsx)(r.td,{children:"192.168.1.191"}),(0,s.jsx)(r.td,{children:"zookeeper"}),(0,s.jsx)(r.td,{children:"2181"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"zookeeper2"}),(0,s.jsx)(r.td,{children:"192.168.1.192"}),(0,s.jsx)(r.td,{children:"zookeeper"}),(0,s.jsx)(r.td,{children:"2181"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"zookeeper3"}),(0,s.jsx)(r.td,{children:"192.168.1.193"}),(0,s.jsx)(r.td,{children:"zookeeper"}),(0,s.jsx)(r.td,{children:"2181"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bookeeper1"}),(0,s.jsx)(r.td,{children:"192.168.1.194"}),(0,s.jsx)(r.td,{children:"bookeeper"}),(0,s.jsx)(r.td,{children:"3181"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bookeeper2"}),(0,s.jsx)(r.td,{children:"192.168.1.195"}),(0,s.jsx)(r.td,{children:"bookeeper"}),(0,s.jsx)(r.td,{children:"3181"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bookeeper3"}),(0,s.jsx)(r.td,{children:"192.168.1.196"}),(0,s.jsx)(r.td,{children:"bookeeper"}),(0,s.jsx)(r.td,{children:"3181"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar1"}),(0,s.jsx)(r.td,{children:"192.168.1.147"}),(0,s.jsx)(r.td,{children:"broker"}),(0,s.jsx)(r.td,{children:"8080\uff08http\u534f\u8bae\uff09\uff0c6650\uff08pulsar\u534f\u8bae\uff09"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar2"}),(0,s.jsx)(r.td,{children:"192.168.1.148"}),(0,s.jsx)(r.td,{children:"broker"}),(0,s.jsx)(r.td,{children:"8080\uff08http\u534f\u8bae\uff09\uff0c6650\uff08pulsar\u534f\u8bae\uff09"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar3"}),(0,s.jsx)(r.td,{children:"192.168.1.149"}),(0,s.jsx)(r.td,{children:"broker"}),(0,s.jsx)(r.td,{children:"8080\uff08http\u534f\u8bae\uff09\uff0c6650\uff08pulsar\u534f\u8bae\uff09"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pulsar1"}),(0,s.jsx)(r.td,{children:"192.168.1.149"}),(0,s.jsx)(r.td,{children:"pulsar-manager"}),(0,s.jsx)(r.td,{children:"7750"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"3\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305",children:"3.\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305"}),"\n",(0,s.jsx)(r.p,{children:"\u4e0b\u8f7d pulsar \u53d1\u884c\u7248\u7684\u4e8c\u8fdb\u5236\u7684\u5305\uff0c\u91cc\u9762\u5305\u542b\u4e86 zookeeper\uff0cbookeeper\uff0cpulsar \u6240\u9700\u8981\u7684\u6587\u4ef6\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"wget https://archive.apache.org/dist/pulsar/pulsar-2.7.1/apache-pulsar-2.7.1-bin.tar.gz\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5305\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u89e3\u538b\u5e76\u8fdb\u5165\u5230\u89e3\u538b\u540e\u7684\u76ee\u5f55\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"tar xvzf apache-pulsar-2.7.1-bin.tar.gz\r\ncd apache-pulsar-2.7.1\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u89e3\u538b\u540e\u7684\u6587\u4ef6\u76ee\u5f55\u5305\u542b\u4ee5\u4e0b\u5b50\u76ee\u5f55"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u76ee\u5f55"}),(0,s.jsx)(r.th,{children:"\u5185\u5bb9"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"bin"}),(0,s.jsx)(r.td,{children:"Pulsar \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6bd4\u5982 pulsar \u548c pulsar-admin"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"conf"}),(0,s.jsx)(r.td,{children:"\u914d\u7f6e\u6587\u4ef6\uff0c\u5305\u542bZooKeeper\uff0cBookeeper\uff0cPulsar \u7b49\u7b49"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"data"}),(0,s.jsx)(r.td,{children:"Zookeeper \u548c Bookeeper \u4fdd\u5b58\u6570\u636e\u7684\u76ee\u5f55"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"lib"}),(0,s.jsx)(r.td,{children:"Pulsar \u4f7f\u7528\u7684 JAR \u6587\u4ef6"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"logs"}),(0,s.jsx)(r.td,{children:"\u65e5\u5fd7\u76ee\u5f55"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"4\u90e8\u7f72-zookeeper-\u96c6\u7fa4",children:"4.\u90e8\u7f72 Zookeeper \u96c6\u7fa4"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u4fee\u6539 Zookeeper \u914d\u7f6e\u6587\u4ef6"}),"\r\n\u4fee\u6539\u6240\u6709 Zookeeper \u8282\u70b9\u7684 conf/zookeeper.conf \u914d\u7f6e\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# \u8bbe\u7f6eZookeeper\u6570\u636e\u5b58\u653e\u76ee\u5f55\u3002\r\ndataDir=data/zookeeper\r\n\r\n# \u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6dfb\u52a0\u4e00\u4e2a server.N\u884c\uff0c\u5176\u4e2dN\u662fZooKeeper\u8282\u70b9\u7684\u7f16\u53f7\u3002\r\nserver.1=192.168.1.191:2888:3888\r\nserver.2=192.168.1.192:2888:3888\r\nserver.3=192.168.1.193:2888:3888\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5728\u6bcf\u4e2a Zookeeper \u8282\u70b9\u7684 myid \u6587\u4ef6\u4e2d\u914d\u7f6e\u8be5\u8282\u70b9\u5728\u96c6\u7fa4\u4e2d\u7684\u552f\u4e00ID\u3002myid \u6587\u4ef6\u5e94\u653e\u5728 dataDir \u6307\u5b9a\u7684\u76ee\u5f55\u4e0b\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# \u521b\u5efa\u76ee\u5f55\r\nmkdir -p data/zookeeper\r\n# \u6bcf\u4e2aZookeeper\u8282\u70b9\u7684ID\u53f7\u4e0d\u80fd\u91cd\u590d\uff0c\u5e76\u4e14\u548cserver.N\u7684\u7f16\u53f7\u5bf9\u5e94\uff0c\u4f9d\u6b21\u4e3a1\uff0c2\uff0c3\r\necho 1 > data/zookeeper/myid\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u542f\u52a8 Zookeeper \u96c6\u7fa4"}),"\r\n\u5728\u6bcf\u53f0 Zookeeper \u8282\u70b9\u542f\u52a8 Zookeeper \u670d\u52a1\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-daemon start zookeeper\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u521d\u59cb\u5316\u96c6\u7fa4\u5143\u6570\u636e"}),"\r\nZookeeper \u96c6\u7fa4\u542f\u52a8\u6210\u529f\u540e\uff0c\u9700\u8981\u5c06\u4e00\u4e9b Pulsar \u96c6\u7fa4\u7684\u5143\u4fe1\u606f\u5199\u5165 ZooKeeper \u96c6\u7fa4\u7684\u6bcf\u4e2a\u8282\u70b9\uff0c\u7531\u4e8e\u6570\u636e\u5728 ZooKeeper \u96c6\u7fa4\u5185\u90e8\u4f1a\u4e92\u76f8\u540c\u6b65\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u5c06\u5143\u4fe1\u606f\u5199\u5165 ZooKeeper \u7684\u4e00\u4e2a\u8282\u70b9\u5373\u53ef\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bin/pulsar initialize-cluster-metadata \\\r\n  --cluster pulsar-cluster-1 \\\r\n  --zookeeper 192.168.1.191:2181 \\\r\n  --configuration-store 192.168.1.191:2181 \\\r\n  --web-service-url http://192.168.1.147:8080,192.168.1.148:8080,192.168.1.149:8080 \\\r\n  --broker-service-url pulsar://192.168.1.147:6650,192.168.1.148:6650,192.168.1.149:6650\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u53c2\u6570"}),(0,s.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"\u2014cluster"}),(0,s.jsx)(r.td,{children:"pulsar \u96c6\u7fa4\u540d\u5b57"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"\u2013zookeeper"}),(0,s.jsx)(r.td,{children:"zookeeper \u5730\u5740\uff0c\u53ea\u9700\u8981\u5305\u542b zookeeer \u96c6\u7fa4\u4e2d\u7684\u4efb\u610f\u4e00\u53f0\u673a\u5668\u5373\u53ef"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"\u2013configuration-store"}),(0,s.jsx)(r.td,{children:"\u914d\u7f6e\u5b58\u50a8\u5730\u5740\uff0c\u53ea\u9700\u8981\u5305\u542b zookeeer \u96c6\u7fa4\u4e2d\u7684\u4efb\u610f\u4e00\u53f0\u673a\u5668\u5373\u53ef"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"\u2013web-service-url"}),(0,s.jsx)(r.td,{children:"pulsar \u96c6\u7fa4 web \u670d\u52a1\u7684 URL \u4ee5\u53ca\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7684\u7aef\u53e3\u662f8080"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"\u2013broker-service-url"}),(0,s.jsx)(r.td,{children:"broker \u670d\u52a1\u7684URL\uff0c\u7528\u4e8e\u4e0e pulsar \u96c6\u7fa4\u4e2d\u7684 brokers \u8fdb\u884c\u4ea4\u4e92\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f 6650"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"5\u90e8\u7f72-bookeeper-\u96c6\u7fa4",children:"5.\u90e8\u7f72 Bookeeper \u96c6\u7fa4"}),"\n",(0,s.jsx)(r.p,{children:"Pulsar \u96c6\u7fa4\u4e2d\u6240\u6709\u6301\u4e45\u6570\u636e\u7684\u5b58\u50a8\u90fd\u7531 Bookeeper \u8d1f\u8d23\u3002"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u4fee\u6539 Bookeeper \u914d\u7f6e\u6587\u4ef6"}),"\r\n\u4fee\u6539\u6240\u6709 Bookeeper \u8282\u70b9\u7684 conf/bookeeper.conf \u914d\u7f6e\u6587\u4ef6\uff0c\u8bbe\u7f6e Bookeeper \u96c6\u7fa4\u8fde\u63a5\u7684 Zookeeper \u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"zkServers=192.168.1.191:2181,192.168.1.192:2181,192.168.1.193:2181\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u542f\u52a8 Bookeeper \u96c6\u7fa4"}),"\r\n\u5728\u6bcf\u53f0 Bookeeper \u8282\u70b9\u542f\u52a8 Bookeeper \u670d\u52a1\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-daemon start bookie\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u9a8c\u8bc1 Bookeeper \u96c6\u7fa4\u72b6\u6001"}),"\r\n\u5728\u4efb\u610f\u4e00\u53f0 Bookeeper \u8282\u70b9\u4e0a\u4f7f\u7528 Bookeeper shell \u7684 simpletest \u547d\u4ee4\uff0c\u53bb\u6821\u9a8c\u96c6\u7fa4\u5185\u6240\u6709\u7684 bookie \u662f\u5426\u90fd\u5df2\u7ecf\u542f\u52a8\uff0c3 \u4e3a Bookeeper \u8282\u70b9\u6570\u91cf\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bin/bookkeeper shell simpletest --ensemble 3 --writeQuorum 3 --ackQuorum 3 --numEntries 3\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5728\u96c6\u7fa4\u4e0a\u521b\u5efa\u548c bookie \u540c\u7b49\u6570\u91cf\u7684 ledger\uff0c\u5e76\u5f80\u91cc\u9762\u5199\u4e00\u4e9b\u6761\u76ee\uff0c\u7136\u540e\u8bfb\u53d6\u5b83\uff0c\u6700\u540e\u5220\u9664\u8fd9\u4e2a ledger\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"-a,--ackQuorum <arg>     Ack quorum size (default 2)  \u5f53\u6307\u5b9a\u6570\u91cf\u7684 bookie ack \u54cd\u5e94\u65f6\uff0c\u8ba4\u4e3a\u6d88\u606f\u5199\u5165\u6210\u529f\r\n-e,--ensemble <arg>      Ensemble size (default 3)  \u5199\u5165\u6570\u636e\u7684 bookie \u8282\u70b9\u6570\u91cf\r\n-n,--numEntries <arg>    Entries to write (default 1000) \u4e00\u6279\u6d88\u606f\u7684\u6d88\u606f\u6570\u91cf\r\n-w,--writeQuorum <arg>   Write quorum size (default 2) \u6bcf\u6761\u6d88\u606f\u526f\u672c\u6570\u91cf\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5728\u96c6\u7fa4\u4e0a\u521b\u5efa\u548c bookie \u540c\u7b49\u6570\u91cf\u7684 ledger\uff0c\u5e76\u5f80\u91cc\u9762\u5199\u4e00\u4e9b\u6761\u76ee\uff0c\u7136\u540e\u8bfb\u53d6\u5b83\uff0c\u6700\u540e\u5220\u9664\u8fd9\u4e2a ledger\u3002"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20240329195550437.png",alt:"image-20240329195550437"})}),"\n",(0,s.jsx)(r.h3,{id:"6\u90e8\u7f72-pulsar-\u96c6\u7fa4",children:"6.\u90e8\u7f72 Pulsar \u96c6\u7fa4"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u4fee\u6539 Pulsar \u914d\u7f6e\u6587\u4ef6"}),"\r\n\u4fee\u6539\u6240\u6709 Pulsar \u8282\u70b9\u7684 conf/broker.conf \u914d\u7f6e\u6587\u4ef6\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# \u914d\u7f6epulsar broker\u8fde\u63a5\u7684zookeeper\u96c6\u7fa4\u5730\u5740\r\nzookeeperServers=192.168.1.191:2181,192.168.1.192:2181,192.168.1.193:2181\r\nconfigurationStoreServers=192.168.1.191:2181,192.168.1.192:2181,192.168.1.193:2181\r\n\r\n# broker\u6570\u636e\u7aef\u53e3\r\nbrokerServicePort=6650\r\n\r\n# broker web\u670d\u52a1\u7aef\u53e3\r\nwebServicePort=8080\r\n\r\n# pulsar \u96c6\u7fa4\u540d\u5b57\uff0c\u548c\u524d\u9762zookeeper\u521d\u59cb\u5316\u96c6\u7fa4\u5143\u6570\u636e\u65f6\u914d\u7f6e\u7684\u4e00\u6837\r\nclusterName=pulsar-cluster-1\r\n\r\n# \u521b\u5efa\u4e00\u4e2aledger\u65f6\u4f7f\u7528\u7684bookie\u6570\u91cf\r\nmanagedLedgerDefaultEnsembleSize=2\r\n\r\n# \u6bcf\u4e2a\u6d88\u606f\u7684\u526f\u672c\u6570\u91cf\r\nmanagedLedgerDefaultWriteQuorum=2\r\n\r\n# \u5b8c\u6210\u5199\u64cd\u4f5c\u524d\u7b49\u5f85\u526f\u672cack\u7684\u6570\u91cf\r\nmanagedLedgerDefaultAckQuorum=2\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u542f\u52a8 Pulsar \u96c6\u7fa4"}),"\r\n\u5728\u6bcf\u53f0 Pulsar \u8282\u70b9\u542f\u52a8 broker\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-daemon start broker\n"})}),"\n",(0,s.jsx)(r.h3,{id:"7\u5ba2\u6237\u7aef\u8fde\u63a5-pulsar-\u96c6\u7fa4",children:"7.\u5ba2\u6237\u7aef\u8fde\u63a5 Pulsar \u96c6\u7fa4"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u4fee\u6539\u5ba2\u6237\u7aef\u914d\u7f6e\u6587\u4ef6"}),"\r\n\u4fee\u6539 conf/client.conf \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# pulsar\u96c6\u7fa4web\u670d\u52a1url\r\nwebServiceUrl=http://192.168.1.147:8080,192.168.1.148:8080,192.168.1.149:8080\r\n\r\n# pulsar\u670d\u52a1\u7aef\u53e3\r\n# URL for Pulsar Binary Protocol (for produce and consume operations)\r\nbrokerServiceUrl=pulsar://192.168.1.147:6650,192.168.1.148:6650,192.168.1.149:6650\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u5ba2\u6237\u7aef\u751f\u4ea7\u548c\u6d88\u8d39\u6d88\u606f"}),"\r\nconsumer \u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8ba2\u9605 pulsar-test \u8fd9\u4e2a\u4e3b\u9898\u7684\u6d88\u606f\uff1a"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"-n\uff1a\u8ba2\u9605\u6d88\u606f\u7684\u6570\u91cf"}),"\n",(0,s.jsx)(r.li,{children:"-s\uff1a\u8ba2\u9605\u7ec4\u540d"}),"\n",(0,s.jsx)(r.li,{children:"-t\uff1a\u8ba2\u9605\u7c7b\u578b\uff0c\u6709\u4ee5\u4e0b\u503cExclusive, Shared, Failover, Key_Share"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'bin/pulsar-client consume \\\r\n  persistent://public/default/pulsar-test \\\r\n  -n 100 \\\r\n  -s "consumer-test" \\\r\n  -t "Exclusive"\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c\u4e0d\u6307\u5b9a --url \u53c2\u6570\u5e76\u4e14\u6ca1\u6709\u5728 conf/client.conf \u6587\u4ef6\u4e2d\u6307\u5b9a pulsar \u96c6\u7fa4\u8fde\u63a5\u4fe1\u606f\uff0c\u5219\u9ed8\u8ba4\u8fde\u63a5\u7684\u662f pulsar://localhost:6650/\u3002\u53ef\u4ee5\u6307\u5b9a --url pulsar://192.168.1.147:6650 \u6216\u8005 --url ",(0,s.jsx)(r.a,{href:"http://192.168.1.147:8080",children:"http://192.168.1.147:8080"})," \u4e0e broker \u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u65b0\u5f00\u4e00\u4e2a\u7ec8\u7aef\uff0c producer \u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5411 pulsar-test \u4e3b\u9898\u751f\u4ea7\u4e00\u6761\u6d88\u606f\uff0c\u6d88\u606f\u5185\u5bb9\u4e3a \u201cHello Pulsar\u201d\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"-n\uff1a\u751f\u4ea7\u6d88\u606f\u7684\u6570\u91cf"}),"\n",(0,s.jsx)(r.li,{children:"-m\uff1a\u6d88\u606f\u5185\u5bb9"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'bin/pulsar-client produce \\\r\n  persistent://public/default/pulsar-test \\\r\n  -n 1 \\\r\n  -m "Hello Pulsar"\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u5728 consumer \u7ec8\u7aef\u53ef\u4ee5\u770b\u5230\u6210\u529f\u6d88\u8d39\u5230\u4e86\u6d88\u606f\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"23:20:47.418 [pulsar-client-io-1-1] INFO  com.scurrilous.circe.checksum.Crc32cIntChecksum - SSE4.2 CRC32C provider initialized\r\n----- got message -----\r\nkey:[null], properties:[], content:Hello Pulsar\n"})}),"\n",(0,s.jsx)(r.h3,{id:"8\u90e8\u7f72-pulsar-manager",children:"8.\u90e8\u7f72 Pulsar manager"}),"\n",(0,s.jsxs)(r.p,{children:["Pulsar manager \u662f\u7528\u4e8e\u7ba1\u7406\u548c\u76d1\u63a7 Pulsar \u96c6\u7fa4\u7684 WebUI \u5de5\u5177\u3002Pulsar manager \u53ef\u4ee5\u7ba1\u7406\u591a\u4e2a Pulsar \u96c6\u7fa4\u3002github \u5730\u5740\uff1a",(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-manager",children:"https://github.com/apache/pulsar-manager"})]}),"\n",(0,s.jsx)(r.p,{children:"\u5b89\u88c5 Pulsar manager"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"wget https://dist.apache.org/repos/dist/release/pulsar/pulsar-manager/pulsar-manager-0.2.0/apache-pulsar-manager-0.2.0-bin.tar.gz\r\ntar -zxvf apache-pulsar-manager-0.2.0-bin.tar.gz\r\ncd pulsar-manager\r\ntar -xvf pulsar-manager.tar\r\ncd pulsar-manager\r\ncp -r ../dist ui\r\n./bin/pulsar-manager\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u521b\u5efa Pulsar manager \u8d26\u53f7"}),"\r\n\u521b\u5efa\u7528\u6237\u540d\u4e3a admin\uff0c\u5bc6\u7801\u4e3a apachepulsar \u7684\u8d85\u7ea7\u7ba1\u7406\u5458\u8d26\u53f7\uff1a"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'CSRF_TOKEN=$(curl http://192.168.1.147:7750/pulsar-manager/csrf-token)\r\ncurl \\\r\n    -H "X-XSRF-TOKEN: $CSRF_TOKEN" \\\r\n    -H "Cookie: XSRF-TOKEN=$CSRF_TOKEN;" \\\r\n    -H \'Content-Type: application/json\' \\\r\n    -X PUT http://192.168.1.147:7750/pulsar-manager/users/superuser \\\r\n    -d \'{"name": "admin", "password": "apachepulsar", "description": "myuser", "email": "chengzw258@163.com"}\'\n'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Pulsar manager \u754c\u9762"}),"\r\n\u8bbf\u95ee ",(0,s.jsx)(r.a,{href:"http://192.168.1.147:7750/ui/index.html",children:"http://192.168.1.147:7750/ui/index.html"})," \u767b\u5f55 Pulsar manager\uff1a"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20240329195920351.png",alt:"image-20240329195920351"})}),"\n",(0,s.jsx)(r.p,{children:"\u70b9\u51fb New Environment \u6dfb\u52a0 Pulsar \u96c6\u7fa4\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20240329195940599.png",alt:"image-20240329195940599"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6dfb\u52a0\u5b8c\u6210\u540e\u53ef\u4ee5\u67e5\u770b\u5e76\u8bbe\u7f6e Pulsar \u96c6\u7fa4\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u4f8b\u5982\u67e5\u770b ",(0,s.jsx)(r.a,{href:"https://so.csdn.net/so/search?q=topic&spm=1001.2101.3001.7020",children:"topic"})," \u4fe1\u606f\uff1a"]}),"\n",(0,s.jsxs)(r.p,{children:["\u8bbf\u95ee ",(0,s.jsx)(r.a,{href:"http://192.168.1.147:7750/bkvm",children:"http://192.168.1.147:7750/bkvm"})," \u67e5\u770b bookie \u4fe1\u606f\uff0c\u7528\u6237\u540d\uff1aadmin\uff0c\u5bc6\u7801\uff1aadmin\u3002"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20240329200005585.png",alt:"image-20240329200005585"})}),"\n",(0,s.jsx)(r.p,{children:"\u67e5\u770b ledger \u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20240329200027722.png",alt:"image-20240329200027722"})}),"\n",(0,s.jsxs)(r.h3,{id:"9perf-\u538b\u529b\u6d4b\u8bd5",children:["9.Perf ",(0,s.jsx)(r.a,{href:"https://so.csdn.net/so/search?q=%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95&spm=1001.2101.3001.7020",children:"\u538b\u529b\u6d4b\u8bd5"})]}),"\n",(0,s.jsx)(r.p,{children:"pulsar \u63d0\u4f9b\u4e86\u538b\u529b\u6d4b\u8bd5\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u751f\u4ea7\u6d88\u606f\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"-r\uff1a\u6bcf\u79d2\u751f\u4ea7\u7684\u6d88\u606f\u603b\u6570\uff08\u6240\u6709\u751f\u4ea7\u8005\uff09"}),"\n",(0,s.jsx)(r.li,{children:"-n\uff1a\u751f\u4ea7\u8005\u6570\u91cf"}),"\n",(0,s.jsx)(r.li,{children:"-s\uff1a\u6bcf\u6761\u6d88\u606f\u7684\u5927\u5c0f\uff08bytes\uff09"}),"\n",(0,s.jsx)(r.li,{children:"\u6700\u540e\u8ddf\u4e0a topic \u540d\u5b57"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-perf produce -r 100 -n 2 -s 1024 test-perf\r\n\r\n# \u8f93\u51fa\u5185\u5bb9\uff0c\u4ece\u5de6\u5230\u53f3\u4f9d\u6b21\u662f\uff1a\r\n# \u6bcf\u79d2\u751f\u4ea7\u7684\u6d88\u606f\u6570\u91cf\uff1a87.2\u6761\r\n# \u6bcf\u79d2\u6d41\u91cf\u5927\u5c0f\uff1a0.7Mb\r\n# \u6bcf\u79d2\u751f\u4ea7\u5931\u8d25\u7684\u6d88\u606f\u6570\uff1a0\r\n# \u5e73\u5747\u5ef6\u8fdf\uff1a5.478ms\r\n# \u5ef6\u8fdf\u4e2d\u4f4d\u6570\uff1a4.462ms\r\n# 95%\u7684\u5ef6\u8fdf\u5728 11.262ms\u4ee5\u5185\r\n# 99%\u7684\u5ef6\u8fdf\u5728 25.802ms\u4ee5\u5185\r\n# 99.9%\u7684\u5ef6\u8fdf\u5728 43.757ms\u4ee5\u5185\r\n# 99.99%\u7684\u5ef6\u8fdf\u5728 51.956ms\u4ee5\u5185\r\n# \u6700\u5927\u5ef6\u8fdf\uff1a51.956ms\r\n\r\n... Throughput produced:   87.2  msg/s ---      0.7 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   5.478 ms - med:   4.642 - 95pct:  11.263 - 99pct:  25.802 - 99.9pct:  43.757 - 99.99pct:  51.956 - Max:  51.956\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6d88\u8d39\u6d88\u606f"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-perf consume test-perf\r\n\r\n\r\n# \u8f93\u51fa\u5185\u5bb9\uff0c\u4ece\u5de6\u5230\u53f3\u4f9d\u6b21\u662f\uff1a\r\n# \u6bcf\u79d2\u6d88\u8d39\u7684\u6d88\u606f\u6570\u91cf\uff1a100.007\u6761\r\n# \u6bcf\u79d2\u6d41\u91cf\u5927\u5c0f\uff1a0.781Mb\r\n# \u5e73\u5747\u5ef6\u8fdf\uff1a9.273ms\r\n# \u5ef6\u8fdf\u4e2d\u4f4d\u6570\uff1a9ms\r\n# 95%\u7684\u5ef6\u8fdf\u5728 14ms\u4ee5\u5185\r\n# 99%\u7684\u5ef6\u8fdf\u5728 15ms\u4ee5\u5185\r\n# 99.9%\u7684\u5ef6\u8fdf\u5728 28ms\u4ee5\u5185\r\n# 99.99%\u7684\u5ef6\u8fdf\u5728 34ms\u4ee5\u5185\r\n# \u6700\u5927\u5ef6\u8fdf\uff1a34ms\r\n... Throughput received: 100.007  msg/s -- 0.781 Mbit/s --- Latency: mean: 9.273 ms - med: 9 - 95pct: 14 - 99pct: 15 - 99.9pct: 28 - 99.99pct: 34 - Max: 34\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5728 Pulsar manager \u754c\u9762\u53ef\u4ee5 test-perf \u8fd9\u4e2a topic \u6709\u4e24\u4e2a\u751f\u4ea7\u8005\u5728\u751f\u4ea7\u6d88\u606f\uff0c\u6709\u4e00\u4e2a\u6d88\u8d39\u8005\u6b63\u5728\u6d88\u8d39\u6d88\u606f\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20240329200118810.png",alt:"image-20240329200118810"})}),"\n",(0,s.jsx)(r.p,{children:"\u67e5\u770b topic \u7684 \u5b58\u50a8\u72b6\u51b5\uff1a"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20240329200141713.png",alt:"image-20240329200141713"})})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var s=n(6540);const l={},i=s.createContext(l);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);