"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[8750],{1894:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=n(4848),o=n(8453);const l={},a=void 0,t={id:"Sre/\u4e2d\u95f4\u4ef6/Harbor",title:"Harbor",description:"1\u3001Harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/1.Harbor.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Harbor",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Harbor",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/2-\u4e2d\u95f4\u4ef6/1.Harbor.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:17293594e5,sidebarPosition:1,frontMatter:{},sidebar:"SreMiddleSoft",next:{title:"Elasticsearch",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Elasticsearch"}},d={},c=[{value:"1\u3001Harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4",id:"1harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4",level:2},{value:"1. \u8fc1\u79fb\u8001\u6570\u636e(registry+database)",id:"1-\u8fc1\u79fb\u8001\u6570\u636eregistrydatabase",level:3},{value:"2. \u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0Harbor\u73af\u5883",id:"2-\u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0harbor\u73af\u5883",level:3},{value:"3. \u8fc1\u79fbpg\u6570\u636e",id:"3-\u8fc1\u79fbpg\u6570\u636e",level:3},{value:"4. \u91cd\u542f\u6240\u6709\u670d\u52a1",id:"4-\u91cd\u542f\u6240\u6709\u670d\u52a1",level:3},{value:"5. \u6ce8\u610f\u4e8b\u9879",id:"5-\u6ce8\u610f\u4e8b\u9879",level:3},{value:"2\u3001Nexus\u95ee\u9898",id:"2nexus\u95ee\u9898",level:2}];function i(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"1harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4",children:"1\u3001Harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4"}),"\n",(0,s.jsx)(e.p,{children:"\u73af\u5883\u8bf4\u660e\uff1a\r\n\u56e0\u4e3a\u4e4b\u524d\u7684harbor\u670d\u52a1\u6302\u4e86\uff0c \u6570\u636e\u76ee\u5f55\u5728/data/\u4e0b\uff0c \u7136\u540e\u6570\u636e\u662f\u5b58\u5728\u7684\uff0c\u540e\u6765\u90e8\u7f72\u65b0\u73af\u5883\u4e4b\u540e\uff0c\u5c06\u6570\u636e\u8fc1\u79fb\u8fc7\u53bb\u4e4b\u540e\uff0c\u670d\u52a1\u542f\u52a8\u5404\u79cd\u95ee\u9898\uff0c\u5f88\u591a\u60c5\u51b5\u4e0b\u5c31\u662fpg\u6570\u636e\u5e93\u7684\u95ee\u9898\u4ee5\u53ca\u6743\u9650\u95ee\u9898\uff0c\u6240\u4ee5\uff0c\u8e29\u4e86\u5f88\u591a\u5751\uff0c\u73b0\u5728\u628a\u4e00\u79cd\u6700\u6709\u6548\u7684\u65b9\u5f0f\u4ecb\u7ecd\u4e0b\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"1-\u8fc1\u79fb\u8001\u6570\u636eregistrydatabase",children:"1. \u8fc1\u79fb\u8001\u6570\u636e(registry+database)"}),"\n",(0,s.jsx)(e.p,{children:"1\u3001\u5bfc\u51fadatabase\r\n\u5c31\u662f\u8fc1\u79fb\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u8fc1\u79fb\u65b9\u5f0f\u5c31\u662f\uff0c\u5148\u4f7f\u7528docker\u90e8\u7f72\u4e00\u4e2a\u8ddf\u8001\u7248\u672c\u4e00\u81f4\u7684postgresql\uff0c\u7136\u540e\u628a\u6570\u636e\u6302\u5230\u6570\u636e\u5e93\u4e2d\r\n\u7136\u540e\u5c31\u662f\u5bfc\u51fa\u6570\u636e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"     \u4f7f\u7528docker\u90e8\u7f72\u4e34\u65f6\u8001\u7248\u672c\u7684postgresql\r\n\t mkdir  /postgres  #\u5c06\u6570\u636e\u540c\u6b65\u5230\u6b64\u76ee\u5f55 \u4f7f\u7528rsync\r\n\t docker run -d \\\r\n    --name postgres \\\r\n    -p 15432:5432 \\\r\n    -e POSTGRES_PASSWORD=123456.Com \\\r\n    -v ./postgres:/var/lib/postgresql/data \\\r\n    postgres:13.10\r\n     docker exec -it postgres bash  \r\n\t pg_dumpall -U postgres > /tmp/all.sql\r\n\t docker cp   postgres:/tmp/all.sql  .\n"})}),"\n",(0,s.jsx)(e.p,{children:"2\u3001 \u5907\u4efdregistry\r\n\u628a\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4f7f\u7528rsync\u8fc1\u79fb\u5230 \u65b0\u7248\u672c\u7684\u5bf9\u5e94\u76ee\u5f55\r\n\u7136\u540e\u6dfb\u52a0\u6743\u9650"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"   chmod -R 777 v2\n"})}),"\n",(0,s.jsx)(e.h3,{id:"2-\u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0harbor\u73af\u5883",children:"2. \u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0Harbor\u73af\u5883"}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\u4fee\u6539harbor.yml\u4e2d\u7684\u8bbf\u95eeharbor\u8bbf\u95ee\u7684\u57df\u540d\u6216\u8005ip\r\n\u6ce8\u610f\u4fee\u6539\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u4e3a80\r\n\u6ce8\u610f\u4fee\u6539\u6570\u636e\u6301\u4e45\u5316\u76ee\u5f55\uff0c\u8981\u653e\u5728\u54ea\u4e2a\u4f4d\u7f6e"}),"\n",(0,s.jsx)(e.h3,{id:"3-\u8fc1\u79fbpg\u6570\u636e",children:"3. \u8fc1\u79fbpg\u6570\u636e"}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u5e93\u6709\u591a\u5c11\u4e2a\r\nSELECT datname FROM pg_database;"}),"\n",(0,s.jsx)(e.p,{children:"\uff11.\u3000\u505c\u6b62\u9664\u4e86harbor-db\u7684\u9879\u76ee"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"docker stop harbor-jobservice nginx harbor-core registryctl registry redis harbor-portal harbor-log\n"})}),"\n",(0,s.jsx)(e.p,{children:"2.\u5220\u9664\u5f53\u524d\u65b0\u5e93\u4e2d\u751f\u6210\u7684harbor\u6570\u636e"}),"\n",(0,s.jsxs)(e.p,{children:["\u767b\u5f55\u65b0\u90e8\u7f72\u73af\u5883\u7684harbor-db\u5bb9\u5668\r\n\u5220\u9664\u73b0\u6709\u7684\u5e93 \uff08\u9664\u4e86\u8fd9\u4e09\u4e2a\u5e93postgres  template0 template1\uff09 \uff0c\u5176\u4f59\u90fd\u5220\u6389\uff0c\u56e0\u4e3apg\u5982\u679c\u8981\u5220\u9664\u6307\u5b9a\u5e93\uff0c\u5c31\u9700\u8981\u8fdb\u53bb\u5176\u4ed6\u5e93\uff0c\u4e0d\u80fd\u8fdb\u5165\u5f53\u524d\u5e93\u8fdb\u884c\u5220\u9664\uff0ctemplate0 template1\u8fd9\u4e24\u4e2a\u5e93\u5220\u9664\u6709\u7279\u6b8a\u6027\uff0c\u6b64\u5904\u4e0d\u9700\u8981\u5220\u9664\u3002\r\n\u53c2\u8003\u6587\u6863: ",(0,s.jsx)(e.a,{href:"https://www.modb.pro/db/88534",children:"https://www.modb.pro/db/88534"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\tpsql -U postgres -h 127.0.01 -p 5432 -d postgres\r\n\tdrop database   xnotaryserver;\r\n\tdrop database   notarysigner\r\n\tdrop database   registry\n"})}),"\n",(0,s.jsx)(e.p,{children:"3 \u5c06\u65e7\u5e93\u7684\u6570\u636e\u6062\u590d\u5230\u65b0\u5e93"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\u628a\u4ece\u65e7\u5e93\u7684\u5907\u4efd\u6587\u4ef6\u8fc1\u79fb\u5230\u5f53\u524d\u65b0\u5e93\u4e2d\r\npsql -U postgres /tmp/all.sql\n"})}),"\n",(0,s.jsx)(e.h3,{id:"4-\u91cd\u542f\u6240\u6709\u670d\u52a1",children:"4. \u91cd\u542f\u6240\u6709\u670d\u52a1"}),"\n",(0,s.jsx)(e.p,{children:"\u767b\u5f55\u9a8c\u8bc1\u670d\u52a1\u662f\u5426\u662f\u6210\u529f\u7684\r\ndocker pull\r\ndocker push"}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b\u65e5\u5fd7\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"docker logs -f --tail=100 harbor-core\r\ndocker logs -f --tail=100 registry\r\ndocker logs -f --tail=100 harbor-db\n"})}),"\n",(0,s.jsx)(e.h3,{id:"5-\u6ce8\u610f\u4e8b\u9879",children:"5. \u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsx)(e.p,{children:"harbor\u5982\u679c\u9700\u8981\u6539\u53d8\u914d\u7f6e\uff0c\u8bbf\u95ee\u57df\u540d\uff0c\u7aef\u53e3\u53f7\uff0c\u8d26\u53f7\u5bc6\u7801\u7b49\r\n\u53ef\u4ee5\u627e\u5b89\u88c5harbor\u7684\u76ee\u5f55 /apps/"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"[root@beijing-physicalsvr04 harbor]# ls -l \r\n\u603b\u7528\u91cf 755616\r\ndrwxr-xr-x 3 root root        20 6\u6708  14 20:55 common\r\n-rwxr-xr-x 1 root root      3639 6\u6708  14 18:11 common.sh\r\n-rw-r--r-- 1 root root      5977 6\u6708  14 20:56 docker-compose.yml\r\n-rw-r--r-- 1 root root 773689398 2\u6708  20 16:51 harbor.v2.6.4.tar.gz\r\n-rw-r--r-- 1 root root     10669 6\u6708  14 18:09 harbor.yml\r\n-rw-r--r-- 1 root root     10649 2\u6708  20 16:50 harbor.yml.tmpl\r\n-rwxr-xr-x 1 root root      3171 2\u6708  20 16:50 install.sh\r\n-rw-r--r-- 1 root root     11347 2\u6708  20 16:50 LICENSE\r\n-rwxr-xr-x 1 root root      1881 2\u6708  20 16:50 prepare\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u6b21\u53d8\u66f4\u914d\u7f6e\uff0c\u90fd\u9700\u8981\u9996\u5148\u6267\u884c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"rm -rf common\r\n./prepare\r\n./install.sh\n"})}),"\n",(0,s.jsx)(e.h2,{id:"2nexus\u95ee\u9898",children:"2\u3001Nexus\u95ee\u9898"}),"\n",(0,s.jsx)(e.p,{children:"\u5907\u4efd\u6570\u636e\u8fc1\u79fb\u5230\u653e\u5230/usr/local/nexus3/nexus-data \u76ee\u5f55\u4e0b\r\nchmod -R  777 /usr/local/nexus3/nexus-data"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"docker rm -f docker-nexus3 || true\r\ndocker run --name docker-nexus3 \\\r\n-p 8081:8081 \\\r\n-v /usr/local/nexus3/nexus-data:/nexus-data \\\r\n--restart=always \\\r\n-d sonatype/nexus3\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["\u751f\u4ea7\u62a5\u9519\r\n",(0,s.jsx)(e.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_0b13b1f0e2cbd2de896e439790507db1_r.png",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u89e3\u51b3\u65b9\u5f0f\uff1a\r\n",(0,s.jsx)(e.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_3ab44e29f78a9938df4ed405c43d9eab_r.png",alt:""})]}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u540e\u521b\u5efa"}),"\n",(0,s.jsxs)(e.p,{children:["\u6b65\u9aa41\r\n",(0,s.jsx)(e.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_32413b650ae3a11070713beb00a42628_r.png",alt:""})]}),"\n",(0,s.jsx)(e.p,{children:"\u6b65\u9aa42\r\n\u7248\u672c\u53c2\u8003\u4e0a\u9762: 2.2.9"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/m_a3d23d532af8b053799e7a7faa26119a_r.png",alt:""})})]})}function h(r={}){const{wrapper:e}={...(0,o.R)(),...r.components};return e?(0,s.jsx)(e,{...r,children:(0,s.jsx)(i,{...r})}):i(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>a,x:()=>t});var s=n(6540);const o={},l=s.createContext(o);function a(r){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function t(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:a(r.components),s.createElement(l.Provider,{value:e},r.children)}}}]);