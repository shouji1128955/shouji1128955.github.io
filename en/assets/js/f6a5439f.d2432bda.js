"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[8367],{6594:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(4848),a=n(8453);const l={},t=void 0,o={id:"Sre/\u4e2d\u95f4\u4ef6/Postgresql",title:"Postgresql",description:"\u5e38\u7528\u64cd\u4f5c\u547d\u4ee4:",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/5.Postgresql.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Postgresql",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Postgresql",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/2-\u4e2d\u95f4\u4ef6/5.Postgresql.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:172933664e4,sidebarPosition:5,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"Mysql",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Mysql"},next:{title:"YAPI",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/YAPI"}},p={},c=[{value:"\u5e38\u7528\u64cd\u4f5c\u547d\u4ee4:",id:"\u5e38\u7528\u64cd\u4f5c\u547d\u4ee4",level:2},{value:"1\u3001\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5",id:"1\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5",level:2},{value:"1.1 \u90e8\u7f72\u89c4\u5212",id:"11-\u90e8\u7f72\u89c4\u5212",level:3},{value:"1.2 \u5b89\u88c5",id:"12-\u5b89\u88c5",level:3},{value:"1.3 \u6570\u636e\u5e93\u5b9e\u4f8b\u5316",id:"13-\u6570\u636e\u5e93\u5b9e\u4f8b\u5316",level:3},{value:"1.4 \u542f\u52a8\u6570\u636e\u5e93",id:"14-\u542f\u52a8\u6570\u636e\u5e93",level:3},{value:"2\u3001\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c",id:"2\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c",level:2},{value:"2.2 \u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237",id:"22-\u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237",level:3},{value:"2.3   pg_hba.conf \u914d\u7f6e",id:"23---pg_hbaconf-\u914d\u7f6e",level:3},{value:"2.4 postgresql.conf\u914d\u7f6e",id:"24-postgresqlconf\u914d\u7f6e",level:3},{value:"2.5 \u91cd\u542f\u4e3b\u5e93",id:"25-\u91cd\u542f\u4e3b\u5e93",level:3},{value:"3. \u4ece\u6570\u636e\u5e93\u64cd\u4f5c",id:"3-\u4ece\u6570\u636e\u5e93\u64cd\u4f5c",level:2},{value:"3.1 \u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e",id:"31-\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e",level:3},{value:"3.2 postgresql.conf\u914d\u7f6e",id:"32-postgresqlconf\u914d\u7f6e",level:3},{value:"3.3 \u521b\u5efa standby.signal",id:"33-\u521b\u5efa-standbysignal",level:3},{value:"3.4 \u542f\u52a8\u4ece\u5e93",id:"34-\u542f\u52a8\u4ece\u5e93",level:3},{value:"4.\u4e3b\u4ece\u9a8c\u8bc1",id:"4\u4e3b\u4ece\u9a8c\u8bc1",level:2},{value:"4.1 \u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f",id:"41-\u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f",level:3},{value:"4.2 \u4ece\u5e93\u9a8c\u8bc1",id:"42-\u4ece\u5e93\u9a8c\u8bc1",level:3},{value:"5.\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f",id:"5\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f",level:2},{value:"6\u3001\u4e3b\u4ece\u5207\u6362",id:"6\u4e3b\u4ece\u5207\u6362",level:3}];function i(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u5e38\u7528\u64cd\u4f5c\u547d\u4ee4",children:"\u5e38\u7528\u64cd\u4f5c\u547d\u4ee4:"}),"\n",(0,s.jsx)(r.p,{children:"\u9700\u8981\u8d85\u7ea7\u7528\u6237\u767b\u5f55\u5230\u6570\u636e\u5e93\u4e2d"}),"\n",(0,s.jsx)(r.p,{children:"\u5e93\u7684\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\\l         #\u663e\u793a\u5e93\r\n\\c dbname  #\u8fdb\u5165\u5e93\r\n\\d         #\u67e5\u770b\u8868\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u521b\u5efa\u53ea\u8bfb\u8d26\u53f7\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"create user ro_user password 'readonly';\r\n# \u8bbe\u7f6ePostgres\u6570\u636e\u5e93\u4e3a\u53ea\u8bfb\u7684transaction\r\nalter user ro_user set default_transaction_read_only=on;\r\n\r\n# \u8d4b\u4e88\u7528\u6237\u6743\u9650\uff0c\u67e5\u770bpublic\u6a21\u5f0f\u4e0b\u6240\u6709\u8868\uff1a(\u65b0\u5efa\u8868\u4e5f\u4f1a\u6709\u53ea\u8bfb\u6743\u9650)\r\ngrant usage on schema public to ro_user;\r\nalter default privileges in schema public grant select on tables to ro_user;\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u6388\u6743\u53ea\u8bfb\u8d26\u53f7slave:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# \u8d4b\u4e88\u7528\u6237\u8fde\u63a5\u6570\u636e\u5e93\u6743\u9650 (\u9996\u6b21\u9700\u8981\u914d\u7f6e)\r\ngrant connect on database zhong to ro_user;\r\n# \u5207\u6362\u5230\u6307\u5b9a\u6570\u636e\u5e93\r\n\\c zhong\r\n\r\n#\u7ed9pg\u4e2dsalve\u53ea\u8bfb\u7528\u6237\u6dfb\u52a0\u6743\u9650 \r\ngrant USAGE on SCHEMA public to slave;   #public\u662fSchema ,\u53ef\u4ee5\u901a\u8fc7\\c  dbname ; \\d\u6765\u67e5\u770b\u8868\u5728\u7684Schema\r\ngrant SELECT on ALL tables in schema public  to slave\r\n\r\n\r\n#\u5e8f\u5217\u67e5\u770b\u6743\u9650\u6388\u6743\r\ngrant SELECT on ALL sequences in schema public  to slave\n"})}),"\n",(0,s.jsx)(r.p,{children:"PostgreSQL\u662f\u4e00\u4e2a\u6bd4\u8f83\u9ad8\u6027\u80fd\u7684\u6570\u636e\u5e93\uff0c \u7ed3\u5408PostGIS\u63d2\u4ef6\uff0c \u4f7fPostgreSQL\u6210\u4e3a\u4e86\u4e00\u4e2a\u7a7a\u95f4\u6570\u636e\u5e93\uff0c\u80fd\u591f\u8fdb\u884c\u7a7a\u95f4\u6570\u636e\u7ba1\u7406\u3001\u6570\u91cf\u6d4b\u91cf\u4e0e\u51e0\u4f55\u62d3\u6251\u5206\u6790\u3002PostgreSQL\u4ece9.3\u5f00\u59cb\u652f\u6301JSON\u6570\u636e\u7c7b\u578b\uff0c 9.4\u5f00\u59cb\u652f\u6301JSONB\uff0c \u5177\u5907NoSQL\u6570\u636e\u5e93\u529f\u80fd\uff0c \u5728\u6027\u80fd\u4e0a\u751a\u81f3\u8d85\u8fc7MongoDB\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u4e8c\u8fdb\u5236\u5305\u4e0b\u8f7d\u5730\u5740"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.postgresql.org/ftp/source/",children:"https://www.postgresql.org/ftp/source/"})}),"\n",(0,s.jsx)(r.p,{children:"\u6b64\u5904\u4e0b\u8f7d\u7248\u672c13.1"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://ftp.postgresql.org/pub/source/v13.1/postgresql-13.1.tar.gz",children:"https://ftp.postgresql.org/pub/source/v13.1/postgresql-13.1.tar.gz"})}),"\n",(0,s.jsx)(r.h2,{id:"1\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5",children:"1\u3001\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5"}),"\n",(0,s.jsx)(r.p,{children:"\u817e\u8baf\u4e91\u670d\u52a1\u5668\uff0c\u7cfb\u7edf\u7248\u672ccentos7.9 2c4g"}),"\n",(0,s.jsx)(r.h3,{id:"11-\u90e8\u7f72\u89c4\u5212",children:"1.1 \u90e8\u7f72\u89c4\u5212"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4e3b\u8282\u70b9\uff1a 172.21.48.6"}),"\n",(0,s.jsx)(r.li,{children:"\u4ece\u8282\u70b9\uff1a 172.21.48.5"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"12-\u5b89\u88c5",children:"1.2 \u5b89\u88c5"}),"\n",(0,s.jsx)(r.p,{children:"\u5728\u4e3b\u4ece\u90e8\u7f72\u5b89\u88c5\u4e4b\u524d\uff0c \u5148\u8981\u5728\u4e24\u53f0\u8282\u70b9\u4e0a\u5206\u522b\u90fd\u5b89\u88c5Postgresql\uff0c \u8fd9\u91cc\u4ee5\u5b89\u88c5Postgresql13.1\u7248\u672c\u4e3a\u4f8b\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"yum install gcc-c++ -y\r\nyum install perl-ExtUtils-Embed -y\r\nyum install readline-devel -y\r\nyum install zlib-devel -y\r\nyum install python-devel -y\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u521b\u5efa\u7528\u6237"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'groupadd postgres\r\nuseradd -g postgres postgres\r\necho "postgres"|passwd postgres --stdin\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u89e3\u538b\uff0c\u7f16\u8bd1\u5b89\u88c5"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"root@server01 ~]# tar xf postgresql-13.1.tar.gz  \r\n[root@server01 ~]# cd postgresql-13.1/ \r\n./configure --prefix=/usr/local/pgsql13.1  --with-perl --with-python\r\nmake && make install\r\nln -sf /usr/local/pgsql13.1 /usr/local/pgsql\r\n\r\nchown -R postgres:postgres /usr/local/pgsql13.1/\r\nchown -R postgres:postgres /usr/local/pgsql/\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5b89\u88c5contrib\u76ee\u5f55\u4e0b\u7684\u5de5\u5177"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"cd postgresql-13.1/contrib\r\nmake && make install\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5207\u6362\u7528\u6237postgres\uff0c\u521b\u5efa\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"su   -   postgres\r\nvim .bash_profile\r\nexport PATH=/usr/local/pgsql/bin:$PATH\r\nexport LD_LIBRARY_PATH=/usr/local/pgsql/lib\r\nexport PGHOST=/tmp\r\nexport LANG=en_US.UTF-8\r\nexport PGDATA=/postgres/\r\n\r\nvim /etc/profile\r\nexport PATH=/usr/local/pgsql/bin:$PATH\r\nexport LD_LIBRARY_PATH=/usr/local/pgsql/lib:$LD_LIBRARY_PATH\n"})}),"\n",(0,s.jsx)(r.h3,{id:"13-\u6570\u636e\u5e93\u5b9e\u4f8b\u5316",children:"1.3 \u6570\u636e\u5e93\u5b9e\u4f8b\u5316"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'[root@server01 contrib]# mkdir -p  /data/appData/postgreSql\r\n[root@server01 contrib]# chown -R postgres:postgres /data/appData/postgreSql\r\n\r\nsu  -  posrgres\r\n\r\nexport PGDATA=/data/appData/postgreSql\r\ninitdb -k   #\u5bf9\u4e8e\u6570\u636e\u53ef\u9760\u6027\u8981\u6c42\u5f88\u9ad8\u7684\u5c1d\u5c3d\uff0c\u5efa\u8bae\u6253\u5f00\u6570\u636e\u5757checksum\u6821\u9a8c\u529f\u80fd\r\n[postgres@server02 ~]$ /usr/local/pgsql13.1/bin/initdb  -D  /data/appData/postgreSql --encoding=UTF8 --lc-collate=en_US.UTF-8 --lc-ctype=en_US.UTF-8\r\nThe files belonging to this database system will be owned by user "postgres".\r\nThis user must also own the server process.\r\n\r\nThe database cluster will be initialized with locale "en_US.UTF-8".\r\nThe default text search configuration will be set to "english".\r\n\r\nData page checksums are disabled.\r\n\r\nfixing permissions on existing directory /data/appData/postgreSql ... ok\r\ncreating subdirectories ... ok\r\nselecting dynamic shared memory implementation ... posix\r\nselecting default max_connections ... 100\r\nselecting default shared_buffers ... 128MB\r\nselecting default time zone ... Asia/Shanghai\r\ncreating configuration files ... ok\r\nrunning bootstrap script ... ok\r\nperforming post-bootstrap initialization ... ok\r\nsyncing data to disk ... ok\r\n\r\ninitdb: warning: enabling "trust" authentication for local connections\r\nYou can change this by editing pg_hba.conf or using the option -A, or\r\n--auth-local and --auth-host, the next time you run initdb.\r\n\r\nSuccess. You can now start the database server using:\r\n\r\n    /usr/local/pgsql13.1/bin/pg_ctl -D /data/appData/postgreSql -l logfile start\n'})}),"\n",(0,s.jsx)(r.h3,{id:"14-\u542f\u52a8\u6570\u636e\u5e93",children:"1.4 \u542f\u52a8\u6570\u636e\u5e93"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'###1.\u542f\u52a8\u670d\u52a1: \u6dfb\u52a0-l logfile start \u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7\r\n#\u8fd9\u79cd\u60c5\u51b5\u4e0b\u670d\u52a1\u662f\u76d1\u542c\u5728127.0.0.1:5432\u4e0b\uff0c\u6240\u4ee5\u9700\u8981\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u8fdc\u7a0b\u53ef\u4ee5\u8fde\u63a5\r\n[postgres@server01 ~]$ pg_ctl start -D /data/appData/postgreSql/\r\nwaiting for server to start....2023-06-24 22:00:22.629 CST [20378] LOG:  starting PostgreSQL 13.1 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 4.8.5 20150623 (Red Hat 4.8.5-44), 64-bit\r\n2023-06-24 22:00:22.629 CST [20378] LOG:  listening on IPv6 address "::1", port 5432\r\n2023-06-24 22:00:22.629 CST [20378] LOG:  listening on IPv4 address "127.0.0.1", port 5432\r\n2023-06-24 22:00:22.632 CST [20378] LOG:  listening on Unix socket "/tmp/.s.PGSQL.5432"\r\n2023-06-24 22:00:22.634 CST [20379] LOG:  database system was shut down at 2023-06-24 21:52:19 CST\r\n2023-06-24 22:00:22.637 CST [20378] LOG:  database system is ready to accept connections\r\n done\r\nserver started\r\n\r\n#####\u67e5\u770b\u7aef\u53e3\u76d1\u542c\u7684\u60c5\u51b5\r\n[postgres@server01 ~]$ netstat  -ntlp\r\n(Not all processes could be identified, non-owned process info\r\n will not be shown, you would have to be root to see it all.)\r\nActive Internet connections (only servers)\r\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \r\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -                   \r\ntcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN      20378/postgres      \r\ntcp6       0      0 ::1:5432                :::*                    LISTEN      20378/postgres\r\n\r\n###2.\u7136\u540e\u505c\u6b62\u670d\u52a1\r\n[postgres@server01 ~]$ pg_ctl stop   -D /data/appData/postgreSql/\r\nwaiting for server to shut down....2023-06-24 22:03:24.367 CST [20378] LOG:  received fast shutdown request\r\n2023-06-24 22:03:24.368 CST [20378] LOG:  aborting any active transactions\r\n2023-06-24 22:03:24.369 CST [20378] LOG:  background worker "logical replication launcher" (PID 20385) exited with exit code 1\r\n2023-06-24 22:03:24.369 CST [20380] LOG:  shutting down\r\n2023-06-24 22:03:24.378 CST [20378] LOG:  database system is shut down\r\n done\r\nserver stopped\r\n##\r\n\r\n####\u4fee\u6539\u8fdc\u7a0b\u53ef\u4ee5\u8fde\u63a5\r\n\u4fee\u6539listen\u76d1\u542c\u4e3a0.0.0.0 \r\n[postgres@server01 ~]$ cat  /data/appData/postgreSql/postgresql.conf  | grep listen\r\nlisten_addresses = \'0.0.0.0\'\t\t# what IP address(es) to listen on;\r\n\r\n####\u4fee\u6539pg_hba.conf\uff0c\u589e\u52a0host    all             all             0.0.0.0/0               trust\r\n[postgres@server01 ~]$ cat   /data/appData/postgreSql/pg_hba.conf  | grep host | grep -v "^#"\r\nhost    all             all            0.0.0.0/0                trust\r\nhost    all             all             ::1/128                 trust\r\nhost    all             all             0.0.0.0/0               trust\r\n[postgres@server01 ~]$ \n'})}),"\n",(0,s.jsx)(r.p,{children:"\u521b\u5efa\u6d4b\u8bd5\u8d26\u53f7-\u6b64\u90e8\u53ef\u4ee5\u5ffd\u7565"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# \u521b\u5efa\u7528\u6237\r\ncreateuser -U commonuser -h127.0.0.1 -p5432 -s postgres\r\npsql -d postgres -U commonuser -h127.0.0.1 -p5432 -c \"create user synthetic_user with superuser password '123456';\"\n"})}),"\n",(0,s.jsx)(r.h2,{id:"2\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c",children:"2\u3001\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c"}),"\n",(0,s.jsx)(r.p,{children:"\u4e3b\u5e93\u64cd\u4f5c"}),"\n",(0,s.jsx)(r.p,{children:"\u4e00\u5b9a\u8981\u4fdd\u5b58\u597d\u8fd9\u4e2a\u6587\u4ef6 all_DB.sql"}),"\n",(0,s.jsx)(r.h3,{id:"22-\u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237",children:"2.2 \u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237"}),"\n",(0,s.jsx)(r.p,{children:"create role repl login replication encrypted password '123456';  ###\u975e\u5e38\u5173\u952e"}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u679c\u5df2\u5b89\u88c5postgresql\u5efa\u8bae\u5148\u8fdb\u884c\u5907\u4efd\u64cd\u4f5c\uff0c\u5907\u4efd\u64cd\u4f5c\u53c2\u8003\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"# \u521b\u5efa\u5907\u4efdSQL\u6587\u4ef6\u5b58\u653e\u76ee\u5f55\r\nmkdir -p /data/appData/backup /data/app/backup /data/tmp\r\n\r\n## \u5bfc\u51fa\u7cfb\u7edf\u5e93-\u975e\u5e38\u5173\u952e\r\ncd /data/appData/postgreSql/\r\npg_dumpall -U postgres -h 127.0.0.1 -p 5432 -f /data/appData/postgreSql/all_DB.sql\r\n\r\n# \u505c\u6b62\u670d\u52a1\r\npg_ctl stop -D /data/appData/postgreSql/\r\n\r\n# \u5907\u4efd\u6587\u4ef6\r\ncd /data/app\r\ncp -arp /data/app/postgreSql  /data/app/backup/\r\ncp -arp /data/appData/postgreSql  /data/appData/backup/\r\n\r\n# \u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237\r\ncreate role repl login replication encrypted password '123456';\n"})}),"\n",(0,s.jsx)(r.h3,{id:"23---pg_hbaconf-\u914d\u7f6e",children:"2.3   pg_hba.conf \u914d\u7f6e"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'# \u6dfb\u52a0\u4ece\u5e93\u7f51\u6bb5\r\necho "host    replication     repl            172.21.48.5/24        md5" >> /data/appData/postgreSql/pg_hba.conf\r\n\r\n# \u67e5\u770b\r\n[postgres@server01 ~]$ cat /data/appData/postgreSql/pg_hba.conf    | grep md5\r\n# METHOD can be "trust", "reject", "md5", "password", "scram-sha-256",\r\n# Note that "password" sends passwords in clear text; "md5" or\r\nhost    replication     repl            172.21.48.5/24        md5\r\n\n'})}),"\n",(0,s.jsx)(r.h3,{id:"24-postgresqlconf\u914d\u7f6e",children:"2.4 postgresql.conf\u914d\u7f6e"}),"\n",(0,s.jsx)(r.p,{children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"mkdir -p  /data/appData/postgreSql/pg_archive/xlog_files\r\n\r\nvim /data/appData/postgreSql/postgresql.conf\r\nlisten_addresses = '*'      # \u76d1\u542c\u6240\u6709ip\r\nwal_level = hot_standby     # \u70ed\u5907\u6a21\u5f0f\r\narchive_mode = on           #\u5141\u8bb8\u5f52\u6863\r\narchive_command = 'cp %p /data/appData/postgreSql/pg_archive/xlog_files/%f' # \u6b64\u76ee\u5f55\u9700\u8981\u521b\u5efa\r\nmax_wal_senders = 32        #\u540c\u6b65\u6700\u5927\u7684\u8fdb\u7a0b\u6570\u91cf\r\nwal_sender_timeout = 60s    #\u6d41\u590d\u5236\u4e3b\u673a\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\r\nmax_connections = 200       #\u6700\u5927\u8fde\u63a5\u6570\uff0c\u4ece\u5e93\u7684max_connections\u5fc5\u987b\u8981\u5927\u4e8e\u4e3b\u5e93\u7684\n"})}),"\n",(0,s.jsx)(r.h3,{id:"25-\u91cd\u542f\u4e3b\u5e93",children:"2.5 \u91cd\u542f\u4e3b\u5e93"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"pg_ctl restart -D /data/appData/postgreSql/\n"})}),"\n",(0,s.jsx)(r.h2,{id:"3-\u4ece\u6570\u636e\u5e93\u64cd\u4f5c",children:"3. \u4ece\u6570\u636e\u5e93\u64cd\u4f5c"}),"\n",(0,s.jsx)(r.p,{children:"\u6ce8\u610f\u4ece\u5e93\u65e0\u9700\u4e0a\u6587\u4e3b\u5e93\u5b89\u88c5\u6d41\u7a0b\u4e2d\u7684\u521d\u59cb\u5316\u6b65\u9aa4\uff0c\u4f7f\u7528pg_basebackup\u547d\u4ee4\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e"}),"\n",(0,s.jsx)(r.h3,{id:"31-\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e",children:"3.1 \u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"###\u5907\u4efd\u4ece\u5e93\u6570\u636e\r\npg_ctl stop     -D /data/appData/postgreSql/\r\ncd /data/appData/postgreSql \r\ntar all.tar.gz ./*   && mv all.tar.gz  ~/  ##\u5907\u4efd\r\n\r\n###\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e\r\npg_basebackup -h  172.21.48.6  -p 5432 -U repl -F p -P -D /data/appData/postgreSql \r\n# \u8f93\u5165repl\u7528\u6237\u5bc6\u7801\uff1a123456\r\n\r\n\r\n###\u53c2\u6570\u8bf4\u660e\uff1a\r\n\r\n-h \u6307\u5b9a\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7684\u4e3b\u673a\u540d\u6216IP\u5730\u5740\r\n-U \u6307\u5b9a\u8fde\u63a5\u7684\u7528\u6237\u540d\r\n-F \u6307\u5b9a\u4e86\u8f93\u51fa\u7684\u683c\u5f0f\uff0c\u652f\u6301p\uff08\u539f\u6837\u8f93\u51fa\uff09\u6216\u8005t\uff08tar\u683c\u5f0f\u8f93\u51fa\uff09\u3002\r\n-P \u8868\u793a\u5141\u8bb8\u5728\u5907\u4efd\u8fc7\u7a0b\u4e2d\u5b9e\u65f6\u7684\u6253\u5370\u5907\u4efd\u7684\u8fdb\u5ea6\u3002\r\n-D \u6307\u5b9a\u628a\u5907\u4efd\u5199\u5230\u54ea\u4e2a\u76ee\u5f55\uff0c\u5fc5\u987b\u4e3a\u7a7a\u76ee\u5f55\n"})}),"\n",(0,s.jsx)(r.h3,{id:"32-postgresqlconf\u914d\u7f6e",children:"3.2 postgresql.conf\u914d\u7f6e"}),"\n",(0,s.jsxs)(r.p,{children:["\u4ece PostgreSQL 12 \u5f00\u59cb\u5df2\u7ecf\u79fb\u9664\u4e86 ",(0,s.jsx)(r.a,{href:"https://so.csdn.net/so/search?q=recovery&spm=1001.2101.3001.7020",children:"recovery"}),".conf \u6587\u4ef6,\u76f8\u5173\u914d\u7f6e\u5408\u5e76\u5230\u4e86 postgresql.conf \u4e2d,\u56e0\u4e3a\u914d\u7f6epostgresql.conf  \u662f\u4ece\u4e3b\u5e93\u540c\u6b65\u8fc7\u6765\u7684\uff0c\u8fd9\u91cc\u9700\u8981\u4fee\u6539\u4e00\u4e9b\u914d\u7f6e\uff0c\u6539\u4e3a\u4ece\u5e93\u7684\u914d\u7f6e"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"vim /data/appData/postgreSql/postgresql.conf\r\n\r\n## \u79fb\u9664\u6216\u6ce8\u91ca wal_level\uff0c\u4ece\u5e93\u4e0d\u9700\u8981\u8fd9\u4e2a\u914d\u7f6e\r\n# wal_level = hot_standby\r\n\r\n## \u4fee\u6539\u6216\u6dfb\u52a0\u4ee5\u4e0b\r\nmax_standby_streaming_delay=30s #\u53ef\u9009\uff0c\u6d41\u590d\u5236\u6700\u5927\u5ef6\u8fdf\r\nwal_receiver_status_interval=10s #\u53ef\u9009\uff0c\u5411\u4e3b\u5e93\u62a5\u544a\u72b6\u6001\u7684\u6700\u5927\u95f4\u9694\u65f6\u95f4\r\nhot_standby_feedback=on #\u53ef\u9009\uff0c\u67e5\u8be2\u51b2\u7a81\u65f6\u5411\u4e3b\u5e93\u53cd\u9988\r\nmax_connections=1000 #\u6700\u5927\u8fde\u63a5\u6570\u4e00\u822c\u5927\u4e8e\u4e3b\u5e93\u5c31\u884c\r\nprimary_conninfo = 'host=host=172.21.48.6 port=5432 user=repl password=123456'  # \u8868\u793a\u4e3b\u5e93\u8fde\u63a5\u4fe1\u606f\r\nrecovery_target_timeline = 'latest'     # \u8868\u793a\u6062\u590d\u6700\u65b0\u7684\u6570\u636e\r\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"33-\u521b\u5efa-standbysignal",children:"3.3 \u521b\u5efa standby.signal"}),"\n",(0,s.jsx)(r.p,{children:"\u521b\u5efa standby.signal \u6587\u4ef6,\u58f0\u660e\u4ece\u5e93"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'[postgres@server02 ~]$ echo "standby_mode = on" >> /data/appData/postgreSql/standby.signal\n'})}),"\n",(0,s.jsx)(r.h3,{id:"34-\u542f\u52a8\u4ece\u5e93",children:"3.4 \u542f\u52a8\u4ece\u5e93"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"pg_ctl start -D /data/appData/postgreSql/\n"})}),"\n",(0,s.jsx)(r.h2,{id:"4\u4e3b\u4ece\u9a8c\u8bc1",children:"4.\u4e3b\u4ece\u9a8c\u8bc1"}),"\n",(0,s.jsx)(r.h3,{id:"41-\u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f",children:"4.1 \u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f"}),"\n",(0,s.jsx)(r.p,{children:"4.1.1 \u67e5\u770b\u8fdb\u7a0b"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'[postgres@server01 ~]$ ps aux |grep "sender"|grep -v "grep"\r\npostgres 24020  0.0  0.0 274820  2588 ?        Ss   23:03   0:00 postgres: walsender repl 172.21.48.5(60640) streaming 0/3000148\r\n# \u8fd4\u56de postgres: walsender repl 172.16.98.201(53768) streaming\n'})}),"\n",(0,s.jsx)(r.p,{children:"4.1.2 \u67e5\u8868\u9a8c\u8bc1"}),"\n",(0,s.jsx)(r.p,{children:"\u767b\u5f55\u4e3b\u5e93"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'[postgres@server01 ~]$ psql -h 127.0.0.1 -p 5432 -U postgres\r\npsql (13.1)\r\nType "help" for help.\r\n\r\npostgres=# select pid,application_name,state,client_addr,sync_priority,sync_state from pg_stat_replication;\r\n  pid  | application_name |   state   | client_addr | sync_priority | sync_state \r\n-------+------------------+-----------+-------------+---------------+------------\r\n 24020 | walreceiver      | streaming | 172.21.48.5 |             0 | async\r\n(1 row)\r\n\r\npostgres=#\r\n\r\n\r\n## \u8fd4\u56de async\r\n## \u5982\u679c\u8be5\u5b57\u6bb5\u7684\u503c\u4e3a "sync"\uff0c\u5219\u8868\u793a\u4f7f\u7528\u7269\u7406\u590d\u5236\u3002\u5982\u679c\u503c\u4e3a "async"\uff0c\u5219\u8868\u793a\u4f7f\u7528\u903b\u8f91\u590d\u5236\u3002\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u4e3b\u4ece\u590d\u5236\u7684\u6a21\u5f0f\uff0c\u5728\u4ece\u670d\u52a1\u4e0a\u662f\u65e0\u6cd5\u5b9e\u73b0\u6570\u636e\u7684\u5199\u5165\uff0c\u5982\u679c\u60f3\u505c\u6b62\u4ece\u670d\u52a1\u7684\u590d\u5236\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u8bed\u53e5"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'#\u505c\u6b62\u590d\u5236\u8fdb\u7a0b\uff1a\u5728\u8fde\u63a5\u5230\u4ece\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\u4f1a\u8bdd\u4e2d\uff0c\u6267\u884c\u4ee5\u4e0b SQL \u547d\u4ee4\u6765\u505c\u6b62\u590d\u5236\u8fdb\u7a0b\r\n#\u8be5\u547d\u4ee4\u5c06\u6682\u505c\u590d\u5236\u8fdb\u7a0b\uff0c\u5e76\u505c\u6b62\u5e94\u7528\u4e3b\u670d\u52a1\u5668\u4e0a\u7684\u4e8b\u52a1\u65e5\u5fd7\u3002\r\nSELECT pg_wal_replay_pause();\r\n\r\n#\u5982\u679c\u8be5\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u4e3a "true"\uff0c\u5219\u8868\u793a\u590d\u5236\u8fdb\u7a0b\u5df2\u6210\u529f\u505c\u6b62\r\nSELECT pg_is_wal_replay_paused();\r\n\n'})}),"\n",(0,s.jsx)(r.h3,{id:"42-\u4ece\u5e93\u9a8c\u8bc1",children:"4.2 \u4ece\u5e93\u9a8c\u8bc1"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'[postgres@server02 postgreSql]$ ps aux |grep "receiver" |grep -v "grep"\r\npostgres 24574  0.0  0.0 323388  1888 ?        Ss   23:03   0:00 postgres: walreceiver streaming 0/3000148\r\n[postgres@server02 postgreSql]$\r\n\r\n# \u8fd4\u56de postgres: walreceiver streaming\n'})}),"\n",(0,s.jsx)(r.h2,{id:"5\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f",children:"5.\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://www.cnblogs.com/uniqid/p/4154598.html",children:"https://www.cnblogs.com/uniqid/p/4154598.html"})}),"\n",(0,s.jsx)(r.p,{children:"\u6570\u636e\u5e93\u5bfc\u51fa"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'#\u5907\u4efd\u5bfc\u51fa\u6570\u636e\r\npg_dump  -U postgres -c  gyjtcq -f /home/postgres/gangyan0623.sql\r\n\r\n#-U, --username=USERNAME  database user name (default: "postgres")\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u6570\u636e\u5e93\u8fd8\u539f"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'psql  -d  gyjtcq  -f   /home/postgres/gangyan0623.sql  postgres\r\n#-d, --dbname=DBNAME      database name to connect to (default: "postgres")\n'})}),"\n",(0,s.jsx)(r.p,{children:"5.1 \u5173\u4e8e\u5907\u4efd\u7684\u4e00\u4e9b\u8bf4\u660e"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"Pg_restore \u6062\u590d\u3002\r\n\r\nTo dump a database into a custom-format archive file:\r\n\r\n\u4e00\u5b9a\u8981dump\u6210custom\u683c\u5f0f\u624d\u80fd\u7528pg_restore\u6062\u590d\u3002\r\n\r\npg_dump -Fc -U postgres -t test -t test1 -t test2 postgres  > c:\\test012-1.sql\r\n\r\nPassword:\r\n\r\npg_restore -d postgres -U postgres -t test1  c:\\test012-1.sql\n"})}),"\n",(0,s.jsx)(r.p,{children:"pg_dumpall\u5bfc\u51fa"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"pg_dump \u4e00\u6b21\u53ea\u80fd\u5bfc\u51fa\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u800c\u4e14\u4e0d\u80fd\u5bfc\u51fa\u5173\u4e8e\u89d2\u8272\u548c\u8868\u7a7a\u95f4\u4fe1\u606f\u3002\uff08\u56e0\u4e3a\u8868\u7a7a\u95f4\u548c\u89d2\u8272\u8de8\u8d8a\u5355\u4e2a\u6570\u636e\u5e93\uff0c\u5c5e\u4e8ecluster\u6570\u636e \u5e93\u7684\u3002\uff09pg_dumpall  \u80fd\u591f\u5e2e\u4f60\u5bfc\u51facluster\u6570\u636e\u5e93\u7684\u5b8c\u6574\u5185\u5bb9\u3002\u4e5f\u53ef\u4ee5\u5355\u72ec\u5bfc\u51fa\u5355\u4e00\u6570\u636e\u5e93\uff0c\u89d2\u8272\u548c\u8868\u7a7a\u95f4\u7684\u5185\u5bb9\u3002(\u7531\u4e8ecluster\u4e0d \u597d\u7ffb\u8bd1\u3002\u53ef\u4ee5\u7406\u89e3\u4e3a\u591a\u6570\u636e\u5e93\u3002\u96c6\u7fa4\uff0c\u7c07\u6570\u636e\u5e93\uff0c\u4e0d\u77e5\u9053\u54ea\u4e2a\u66f4\u8d34\u5207\uff0c\u5c31\u4e0d\u7ffb\u8bd1\u4e86)\r\n\r\npg_dumpall > outfile\r\n\r\nThe resulting dump can be restored with psql: \u5bfc\u51fa\u7ed3\u679c\u80fd\u7528psql\u6062\u590d\u3002\r\n\r\npsql -f infile postgres\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4ece\u8282\u70b9\uff1a"}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u679c\u8ba9\u4ece\u8282\u70b9\u63d0\u5347\u4e3a\u4e3b\u8282\u70b9\u6267\u884c\u4e0b\u9762\u8bed\u53e5"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"SELECT pg_promote();\r\n\r\nselect pg_is_in_recovery();   \u7ed3\u679c\u662ff\u5219\u4e3a\u4e3b\u5e93\uff0ct\u4e3a\u5907\u5e93\r\n\r\n\r\ncreate database ilync  #\u6d4b\u8bd5\u662f\u5426\u6210\u529f\n"})}),"\n",(0,s.jsx)(r.h3,{id:"6\u4e3b\u4ece\u5207\u6362",children:"6\u3001\u4e3b\u4ece\u5207\u6362"}),"\n",(0,s.jsx)(r.p,{children:"\u5148\u505c\u6b62\u4ece\u5e93"}),"\n",(0,s.jsx)(r.p,{children:"\u4ece\u64cd\u4f5c"}),"\n",(0,s.jsx)(r.p,{children:"\u5907\u4efd\u539f\u76ee\u5f55\u6587\u4ef6"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"###\u5907\u4efd\u4ece\u5e93\u6570\u636e\r\npg_ctl stop     -D /data/appData/postgreSql/\r\ncd /data/appData/postgreSql \r\ntar all.tar.gz ./*   && mv all.tar.gz  ~/  ##\u5907\u4efd\r\n\r\n###\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e\r\npg_basebackup -h  172.21.48.6  -p 5432 -U repl -F p -P -D /data/appData/postgreSql \n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5220\u9664\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"rm -f /data/appData/postgreSql/standby.signal\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u6ce8\u91ca\u6389\u4e3b\u8282\u70b9\u4fe1\u606f"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"vim /data/appData/postgreSql/postgresql.conf\r\n\r\n## \u79fb\u9664\u6216\u6ce8\u91ca wal_level\uff0c\u4ece\u5e93\u4e0d\u9700\u8981\u8fd9\u4e2a\u914d\u7f6e\r\nwal_level = hot_standby\r\nmax_connections=1000 #\u6700\u5927\u8fde\u63a5\u6570\u4e00\u822c\u5927\u4e8e\u4e3b\u5e93\u5c31\u884c\r\n#primary_conninfo = 'host=host=172.21.48.6 port=5432 user=repl password=123456'  # \u8868\u793a\u4e3b\u5e93\u8fde\u63a5\u4fe1\u606f\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u7136\u540e\u91cd\u65b0\u542f\u52a8\u4ece\u5e93\uff0c\u505c\u6b62\u4e3b\u5e93"})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>o});var s=n(6540);const a={},l=s.createContext(a);function t(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);