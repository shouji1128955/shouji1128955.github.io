"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[8812],{214:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=d(4848),l=d(8453);const s={},i=void 0,c={id:"Sre/\u65e5\u5e38\u8fd0\u7ef4/\u78c1\u76d8\u7ba1\u7406",title:"\u78c1\u76d8\u7ba1\u7406",description:"1\u3001\u521b\u5efa\u903b\u8f91\u5377",source:"@site/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/8.\u78c1\u76d8\u7ba1\u7406.md",sourceDirName:"Sre/1-\u65e5\u5e38\u8fd0\u7ef4",slug:"/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u78c1\u76d8\u7ba1\u7406",permalink:"/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u78c1\u76d8\u7ba1\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/8.\u78c1\u76d8\u7ba1\u7406.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1729354592e3,sidebarPosition:8,frontMatter:{},sidebar:"SreOper",previous:{title:"conflunce\u5b89\u88c5",permalink:"/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5"},next:{title:"\u8ba1\u7b97\u673a\u7f51\u7edc\u8f6f\u8003",permalink:"/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u8ba1\u7b97\u673a\u7f51\u7edc\u8f6f\u8003"}},t={},a=[{value:"1\u3001\u521b\u5efa\u903b\u8f91\u5377",id:"1\u521b\u5efa\u903b\u8f91\u5377",level:2},{value:"Parted\u5206\u533a\u548c\u521b\u5efa\u903b\u8f91\u5377LVM",id:"parted\u5206\u533a\u548c\u521b\u5efa\u903b\u8f91\u5377lvm",level:3},{value:"\u521b\u5efa\u903b\u8f91\u5377\u7684\u8fc7\u7a0b\uff1a",id:"\u521b\u5efa\u903b\u8f91\u5377\u7684\u8fc7\u7a0b",level:3},{value:"2\u3001\u903b\u8f91\u5377\u6269\u5c55",id:"2\u903b\u8f91\u5377\u6269\u5c55",level:2},{value:"3\u3001\u6839\u636e\u5377\u7ec4\u521b\u5efa\u903b\u8f91\u5377",id:"3\u6839\u636e\u5377\u7ec4\u521b\u5efa\u903b\u8f91\u5377",level:2},{value:"3.1\u3001\u68c0\u67e5\u5377\u7ec4\u7684\u53ef\u7528\u7a7a\u95f4",id:"31\u68c0\u67e5\u5377\u7ec4\u7684\u53ef\u7528\u7a7a\u95f4",level:3},{value:"2. \u521b\u5efa\u65b0\u7684\u903b\u8f91\u5377",id:"2-\u521b\u5efa\u65b0\u7684\u903b\u8f91\u5377",level:3},{value:"3. \u521b\u5efa\u6587\u4ef6\u7cfb\u7edf",id:"3-\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf",level:3},{value:"4. \u521b\u5efa\u6302\u8f7d\u70b9",id:"4-\u521b\u5efa\u6302\u8f7d\u70b9",level:3},{value:"5. \u6302\u8f7d\u65b0\u903b\u8f91\u5377",id:"5-\u6302\u8f7d\u65b0\u903b\u8f91\u5377",level:3},{value:"6. \u66f4\u65b0 <code>/etc/fstab</code>",id:"6-\u66f4\u65b0-etcfstab",level:3},{value:"7. \u9a8c\u8bc1\u6302\u8f7d",id:"7-\u9a8c\u8bc1\u6302\u8f7d",level:3},{value:"4\u3001\u8c03\u6574LVM\u5206\u533a\u6765\u6269\u5927/\u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f",id:"4\u8c03\u6574lvm\u5206\u533a\u6765\u6269\u5927\u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f",level:2},{value:"4.1 vg\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b",id:"41-vg\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b",level:3},{value:"4.1.1. \u68c0\u67e5\u53ef\u7528\u7a7a\u95f4",id:"411-\u68c0\u67e5\u53ef\u7528\u7a7a\u95f4",level:4},{value:"4.1.2. \u6269\u5c55\u903b\u8f91\u5377",id:"412-\u6269\u5c55\u903b\u8f91\u5377",level:4},{value:"4.1.3. \u6269\u5c55\u6587\u4ef6\u7cfb\u7edf",id:"413-\u6269\u5c55\u6587\u4ef6\u7cfb\u7edf",level:4},{value:"4.1.4. \u9a8c\u8bc1\u8c03\u6574\u540e\u7684\u5927\u5c0f",id:"414-\u9a8c\u8bc1\u8c03\u6574\u540e\u7684\u5927\u5c0f",level:4},{value:"4.2 vg\u6ca1\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b",id:"42-vg\u6ca1\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b",level:3},{value:"4.2.1. \u5907\u4efd\u91cd\u8981\u6570\u636e",id:"421-\u5907\u4efd\u91cd\u8981\u6570\u636e",level:4},{value:"4.2.2. \u5378\u8f7d <code>/data</code>",id:"422-\u5378\u8f7d-data",level:4},{value:"4.2.3. \u68c0\u67e5\u548c\u4fee\u590d\u6587\u4ef6\u7cfb\u7edf",id:"423-\u68c0\u67e5\u548c\u4fee\u590d\u6587\u4ef6\u7cfb\u7edf",level:4},{value:"4.2.4. \u7f29\u5c0f\u6587\u4ef6\u7cfb\u7edf",id:"424-\u7f29\u5c0f\u6587\u4ef6\u7cfb\u7edf",level:4},{value:"4.2.5. \u7f29\u5c0f\u903b\u8f91\u5377",id:"425-\u7f29\u5c0f\u903b\u8f91\u5377",level:4},{value:"4.2.6. \u6269\u5c55 <code>/</code> \u7684\u903b\u8f91\u5377",id:"426-\u6269\u5c55--\u7684\u903b\u8f91\u5377",level:4},{value:"4.2.7. \u6269\u5c55 <code>/</code> \u6587\u4ef6\u7cfb\u7edf",id:"427-\u6269\u5c55--\u6587\u4ef6\u7cfb\u7edf",level:4},{value:"4.2.8. \u6302\u8f7d <code>/data</code>",id:"428-\u6302\u8f7d-data",level:4},{value:"4.2.9. \u9a8c\u8bc1\u8c03\u6574",id:"429-\u9a8c\u8bc1\u8c03\u6574",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1\u521b\u5efa\u903b\u8f91\u5377",children:"1\u3001\u521b\u5efa\u903b\u8f91\u5377"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7c7b\u522b"}),(0,r.jsx)(n.th,{children:"\u4e3b\u5f15\u5bfc\u65b9\u5f0f"}),(0,r.jsx)(n.th,{children:"\u4e3b\u5206\u533a\u6570\u91cf"}),(0,r.jsx)(n.th,{children:"\u6700\u5927\u5bb9\u91cf"}),(0,r.jsx)(n.th,{children:"\u652f\u6301\u591a\u5c11\u4f4d\u7cfb\u7edf"}),(0,r.jsx)(n.th,{children:"\u5206\u533a\u65b9\u6cd5"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MBR"}),(0,r.jsx)(n.td,{children:"BIOS+MBR"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"2T"}),(0,r.jsx)(n.td,{children:"32\u548c64"}),(0,r.jsx)(n.td,{children:"fdisk"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GPT"}),(0,r.jsx)(n.td,{children:"UEFI+GPT"}),(0,r.jsx)(n.td,{children:"128"}),(0,r.jsx)(n.td,{children:"18EB\uff081EB=1024PB=1048576TB\uff09"}),(0,r.jsx)(n.td,{children:"64"}),(0,r.jsx)(n.td,{children:"parted"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"parted\u5206\u533a\u548c\u521b\u5efa\u903b\u8f91\u5377lvm",children:"Parted\u5206\u533a\u548c\u521b\u5efa\u903b\u8f91\u5377LVM"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"1. parted -l  #\u67e5\u770b\u6240\u6709\u78c1\u76d8\u72b6\u6001\r\n2. parted /dev/vdb   #\u901a\u8fc7parted\u5de5\u5177\u6765\u521b\u5efa\u5927\u4e8e2T\u7684\u5206\u533a\r\n3. mklabel gpt   #\u521b\u5efa\u521b\u5efa\u78c1\u76d8\u6807\u7b7e\r\n4. mkpart primary 0% 100% #\u521b\u5efa\u6574\u4e2a\u5206\u533a\r\n5. q #\u9000\u51fa\r\n\r\n#\u5176\u4ed6\u547d\u4ee4\r\n-------------------\r\n(parted) mklabel    #\u521b\u5efa\u521b\u5efa\u78c1\u76d8\u6807\u7b7e\r\nNew disk labeltype? gpt\r\n(parted) p  #\u67e5\u770b\u5206\u533a\u72b6\u6001\r\n(parted) mkpart\r\nPartition name? []? gpt2t   #\u6307\u5b9a\u5206\u533a\u540d\u79f0\r\nFile system type? [ext2]ext3    #\u6307\u5b9a\u5206\u533a\u7c7b\u578b\r\nStart? 1    #\u6307\u5b9a\u5f00\u59cb\u4f4d\u7f6e\r\nEnd? 2190GB #\u6307\u5b9a\u7ed3\u675f\u4f4d\u7f6e\r\n(parted) P  #\u663e\u793a\u5206\u533a\u4fe1\u606f\r\n(parted) Q  #\u9000\u51fa\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa\u903b\u8f91\u5377\u7684\u8fc7\u7a0b",children:"\u521b\u5efa\u903b\u8f91\u5377\u7684\u8fc7\u7a0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"1. fdiks -l #\u67e5\u770b\u5206\u533a\r\n2. pvcreate /dev/vdb1  #\u521b\u5efapv\u7269\u7406\u5377\r\n3. vgcreate vgdata /dev/vdb1  #\u521b\u5efavg\u5377\u7ec4\r\n4. lvcreate -l +100%FREE -n lvdata vgdata #\u521b\u5efalv\u903b\u8f91\u5377\r\n5. mkfs.xfs /dev/mapper/vgdata-lvdata #\u683c\u5f0f\u5316\u903b\u8f91\u5377\r\n6. mkdir /data   #\u521b\u5efa\u6570\u636e\u6587\u4ef6\u5939\r\n7. mount /dev/mapper/vgdata-lvdata /data #\u5c06\u903b\u8f91\u5377\u6302\u8f7d\u5230/data\r\n8. vim /etc/fastab  #\u6dfb\u52a0\u5f00\u673a\u6302\u8f7d\r\n\t/dev/mapper/vgdata-lvdata /data  xfs  defaults 0 0 \r\n9. mount -a #\u68c0\u67e5\u6302\u8f7d\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u53f7\u4e4b\u540e\u62d3\u5c55\r\n",(0,r.jsx)(n.a,{href:"https://blog.csdn.net/qq_25775675/article/details/122126865",children:"https://blog.csdn.net/qq_25775675/article/details/122126865"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://blog.csdn.net/qq_25775675/article/details/122126865",children:"https://blog.csdn.net/qq_25775675/article/details/122126865"}),"\r\n",(0,r.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/602888861",children:"https://zhuanlan.zhihu.com/p/602888861"})]}),"\n",(0,r.jsx)(n.h2,{id:"2\u903b\u8f91\u5377\u6269\u5c55",children:"2\u3001\u903b\u8f91\u5377\u6269\u5c55"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u662f\u521b\u5efa\u7cfb\u7edf\u7ed9\u4e863.7\u7684\u7a7a\u95f4\uff0c\u5728\u521b\u5efa\u5b8c\u7cfb\u7edf\u4e4b\u540e\u53ea\u6709200G,\u9700\u8981\u5982\u4e0b\u8fdb\u884c\u5904\u7406"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6269\u5c55\u903b\u8f91\u5377\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"lvdisplay"}),"\u547d\u4ee4\u67e5\u770b\u903b\u8f91\u5377\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u786e\u8ba4\u5377\u7ec4\u4e2d\u662f\u5426\u6709\u672a\u5206\u914d\u7684\u7a7a\u95f4\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u6709\u672a\u5206\u914d\u7684\u7a7a\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"lvextend"}),"\u547d\u4ee4\u6765\u6269\u5c55\u903b\u8f91\u5377\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u903b\u8f91\u5377\u540d\u4e3a",(0,r.jsx)(n.code,{children:"lv_root"}),"\uff0c\u5e76\u4e14\u6709\u672a\u5206\u914d\u7684\u7a7a\u95f4\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"lvextend -l +100%FREE /dev/mapper/vg_name-lv_root\n"})}),"\n",(0,r.jsx)(n.p,{children:"lvextend -l +100%FREE /dev/mapper/vg_name-lv_root"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6269\u5c55\u6587\u4ef6\u7cfb\u7edf\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u6210\u529f\u6269\u5c55\u4e86\u903b\u8f91\u5377\uff0c\u63a5\u4e0b\u6765\u9700\u8981\u6269\u5c55\u6587\u4ef6\u7cfb\u7edf\u4ee5\u4f7f\u7528\u65b0\u7684\u7a7a\u95f4\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fext4\u6587\u4ef6\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"resize2fs"}),"\u547d\u4ee4\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"resize2fs /dev/mapper/vg_name-lv_root\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fXFS\u6587\u4ef6\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"xfs_growfs"}),"\u547d\u4ee4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"xfs_growfs /dev/mapper/vg_name-lv_root\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17021046973425.png",alt:"img"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u4ee5\u4e0a\u547d\u4ee4\u4e2d\u7684",(0,r.jsx)(n.code,{children:"vg_name"}),"\u548c",(0,r.jsx)(n.code,{children:"lv_root"}),"\u53ef\u80fd\u9700\u8981\u6839\u636e\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u66ff\u6362\u3002\u786e\u4fdd\u5728\u6267\u884c\u4efb\u4f55\u6d89\u53ca\u78c1\u76d8\u548c\u5206\u533a\u64cd\u4f5c\u7684\u547d\u4ee4\u4e4b\u524d\u5907\u4efd\u91cd\u8981\u6570\u636e\uff0c\u4ee5\u9632\u4e07\u4e00\u53d1\u751f\u610f\u5916\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"3\u6839\u636e\u5377\u7ec4\u521b\u5efa\u903b\u8f91\u5377",children:"3\u3001\u6839\u636e\u5377\u7ec4\u521b\u5efa\u903b\u8f91\u5377"}),"\n",(0,r.jsx)(n.p,{children:"\u6bd4\u5982\u78c1\u76d8\u4fe1\u606f\u5982\u4e0b\uff0c\u9700\u8981\u5355\u72ec\u521b\u5efa\u4e00\u4e2a/data\u51fa\u6765"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"root@bj-master01-66:~# lsblk\r\nNAME                      MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\r\nsda                         8:0    0  300G  0 disk\r\n\u251c\u2500sda1                      8:1    0    1M  0 part\r\n\u251c\u2500sda2                      8:2    0    2G  0 part /boot\r\n\u2514\u2500sda3                      8:3    0  298G  0 part\r\n  \u2514\u2500ubuntu--vg-ubuntu--lv 252:0    0  100G  0 lvm  /\r\n  \n"})}),"\n",(0,r.jsx)(n.h3,{id:"31\u68c0\u67e5\u5377\u7ec4\u7684\u53ef\u7528\u7a7a\u95f4",children:"3.1\u3001\u68c0\u67e5\u5377\u7ec4\u7684\u53ef\u7528\u7a7a\u95f4"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u786e\u8ba4 ",(0,r.jsx)(n.code,{children:"ubuntu-vg"})," \u5377\u7ec4\u4e2d\u662f\u5426\u6709\u8db3\u591f\u7684\u7a7a\u95f4\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u68c0\u67e5 ",(0,r.jsx)(n.code,{children:"Free PE / Size"})," \u662f\u5426\u6709\u8db3\u591f\u7684\u53ef\u7528\u7a7a\u95f4\u3002\u4f60\u6709 198 GiB \u7684\u53ef\u7528\u7a7a\u95f4\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5927\u5c0f\u4e3a 200 GiB \u7684 ",(0,r.jsx)(n.code,{children:"/data"})," \u76ee\u5f55\u3002\u7531\u4e8e\u7a7a\u95f4\u7a0d\u5fae\u4e0d\u8db3 200 GiB\uff0c\u5efa\u8bae\u521b\u5efa 190 GiB \u7684\u903b\u8f91\u5377"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"root@bj-master01-66:~# sudo vgdisplay ubuntu-vg\r\n  --- Volume group ---\r\n  VG Name               ubuntu-vg\r\n  System ID\r\n  Format                lvm2\r\n  Metadata Areas        1\r\n  Metadata Sequence No  2\r\n  VG Access             read/write\r\n  VG Status             resizable\r\n  MAX LV                0\r\n  Cur LV                1\r\n  Open LV               1\r\n  Max PV                0\r\n  Cur PV                1\r\n  Act PV                1\r\n  VG Size               <298.00 GiB\r\n  PE Size               4.00 MiB\r\n  Total PE              76287\r\n  Alloc PE / Size       25600 / 100.00 GiB\r\n  Free  PE / Size       50687 / <198.00 GiB     #\u8fd9\u91cc\u662f\u663e\u793a\u53ef\u7528\u7a7a\u95f4   \r\n  VG UUID               tJDQ8o-IB8V-NdSI-W46L-TcBs-jdmc-YcG5a4\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-\u521b\u5efa\u65b0\u7684\u903b\u8f91\u5377",children:"2. \u521b\u5efa\u65b0\u7684\u903b\u8f91\u5377"}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u5927\u5c0f\u4e3a 190G \u7684\u903b\u8f91\u5377\uff0c\u7528\u4e8e ",(0,r.jsx)(n.code,{children:"/data"})," \u76ee\u5f55\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo lvcreate -L 200G -n lv_data ubuntu-vg\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-\u521b\u5efa\u6587\u4ef6\u7cfb\u7edf",children:"3. \u521b\u5efa\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u65b0\u521b\u5efa\u7684\u903b\u8f91\u5377\u4e0a\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\uff08\u4f8b\u5982 ext4\uff09\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo mkfs.ext4 /dev/ubuntu-vg/lv_data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-\u521b\u5efa\u6302\u8f7d\u70b9",children:"4. \u521b\u5efa\u6302\u8f7d\u70b9"}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6302\u8f7d\u70b9 ",(0,r.jsx)(n.code,{children:"/data"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo mkdir /data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"5-\u6302\u8f7d\u65b0\u903b\u8f91\u5377",children:"5. \u6302\u8f7d\u65b0\u903b\u8f91\u5377"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u65b0\u903b\u8f91\u5377\u6302\u8f7d\u5230 ",(0,r.jsx)(n.code,{children:"/data"})," \u76ee\u5f55\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo mount /dev/ubuntu-vg/lv_data /data\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"6-\u66f4\u65b0-etcfstab",children:["6. \u66f4\u65b0 ",(0,r.jsx)(n.code,{children:"/etc/fstab"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u5728\u7cfb\u7edf\u91cd\u542f\u540e\u4fdd\u6301\u6302\u8f7d\u72b6\u6001\uff0c\u9700\u8981\u5c06\u65b0\u6302\u8f7d\u70b9\u6dfb\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"/etc/fstab"})," \u4e2d\u3002\u7f16\u8f91\u6587\u4ef6\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/dev/ubuntu-vg/lv_data /data ext4 defaults 0 2\n"})}),"\n",(0,r.jsx)(n.h3,{id:"7-\u9a8c\u8bc1\u6302\u8f7d",children:"7. \u9a8c\u8bc1\u6302\u8f7d"}),"\n",(0,r.jsxs)(n.p,{children:["\u786e\u8ba4 ",(0,r.jsx)(n.code,{children:"/data"})," \u6302\u8f7d\u6210\u529f\u5e76\u4e14\u6709 200G \u7684\u53ef\u7528\u7a7a\u95f4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"root@bj-master01-66:~# df -HT\r\nFilesystem                        Type   Size  Used Avail Use% Mounted on\r\ntmpfs                             tmpfs  404M  1.1M  402M   1% /run\r\n/dev/mapper/ubuntu--vg-ubuntu--lv ext4   106G  8.6G   92G   9% /\r\ntmpfs                             tmpfs  2.1G     0  2.1G   0% /dev/shm\r\ntmpfs                             tmpfs  5.3M     0  5.3M   0% /run/lock\r\n/dev/sda2                         ext4   2.1G  191M  1.8G  10% /boot\r\ntmpfs                             tmpfs  404M   13k  404M   1% /run/user/0\r\n/dev/mapper/ubuntu--vg-lv_data    ext4   200G   29k  190G   1% /data\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4\u8c03\u6574lvm\u5206\u533a\u6765\u6269\u5927\u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f",children:"4\u3001\u8c03\u6574LVM\u5206\u533a\u6765\u6269\u5927/\u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f"}),"\n",(0,r.jsx)(n.h3,{id:"41-vg\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b",children:"4.1 vg\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b"}),"\n",(0,r.jsx)(n.h4,{id:"411-\u68c0\u67e5\u53ef\u7528\u7a7a\u95f4",children:"4.1.1. \u68c0\u67e5\u53ef\u7528\u7a7a\u95f4"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u786e\u8ba4 ",(0,r.jsx)(n.code,{children:"ubuntu-vg"})," \u5377\u7ec4\u4e2d\u662f\u5426\u6709\u8db3\u591f\u7684\u7a7a\u95f2\u7a7a\u95f4\u3002\u770b ",(0,r.jsx)(n.code,{children:"Free PE / Size"})," \u7684\u503c\uff0c\u786e\u4fdd\u6709\u8db3\u591f\u7684\u7a7a\u95f2\u7a7a\u95f4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"bash\r\n\u590d\u5236\u4ee3\u7801\r\nsudo vgdisplay ubuntu-vg\r\n\r\nroot@bj-master01-66:~# vgdisplay ubuntu-vg\r\n  --- Volume group ---\r\n  VG Name               ubuntu-vg\r\n  System ID\r\n  Format                lvm2\r\n  Metadata Areas        1\r\n  Metadata Sequence No  3\r\n  VG Access             read/write\r\n  VG Status             resizable\r\n  MAX LV                0\r\n  Cur LV                2\r\n  Open LV               2\r\n  Max PV                0\r\n  Cur PV                1\r\n  Act PV                1\r\n  VG Size               <298.00 GiB\r\n  PE Size               4.00 MiB\r\n  Total PE              76287\r\n  Alloc PE / Size       74240 / 290.00 GiB\r\n  Free  PE / Size       2047 / <8.00 GiB           #\u5c0f\u4e8e8G\r\n  VG UUID               tJDQ8o-IB8V-NdSI-W46L-TcBs-jdmc-YcG5a4\n"})}),"\n",(0,r.jsx)(n.h4,{id:"412-\u6269\u5c55\u903b\u8f91\u5377",children:"4.1.2. \u6269\u5c55\u903b\u8f91\u5377"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u8db3\u591f\u7684\u7a7a\u95f4\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6269\u5c55 ",(0,r.jsx)(n.code,{children:"/"})," \u5206\u533a\u7684\u5927\u5c0f\u3002\u4f8b\u5982\uff0c\u5c06\u5176\u6269\u5c55\u5230 60G\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo lvextend -L 60G /dev/ubuntu-vg/ubuntu-lv\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6216\u8005\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5377\u7ec4\u4e2d\u6240\u6709\u53ef\u7528\u7a7a\u95f4\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv\n"})}),"\n",(0,r.jsx)(n.h4,{id:"413-\u6269\u5c55\u6587\u4ef6\u7cfb\u7edf",children:"4.1.3. \u6269\u5c55\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.p,{children:"\u6269\u5c55\u6587\u4ef6\u7cfb\u7edf\u4ee5\u5229\u7528\u65b0\u589e\u52a0\u7684\u7a7a\u95f4\u3002\u5bf9\u4e8e Ext4 \u6587\u4ef6\u7cfb\u7edf\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo resize2fs /dev/ubuntu-vg/ubuntu-lv\n"})}),"\n",(0,r.jsx)(n.h4,{id:"414-\u9a8c\u8bc1\u8c03\u6574\u540e\u7684\u5927\u5c0f",children:"4.1.4. \u9a8c\u8bc1\u8c03\u6574\u540e\u7684\u5927\u5c0f"}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u68c0\u67e5 ",(0,r.jsx)(n.code,{children:"/"})," \u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"df -h /\n"})}),"\n",(0,r.jsx)(n.h3,{id:"42-vg\u6ca1\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b",children:"4.2 vg\u6ca1\u6709\u7a7a\u95f4\u60c5\u51b5\u4e0b"}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u5c06 ",(0,r.jsx)(n.code,{children:"/data"})," \u4e0b\u7684 100 GiB \u5206\u914d\u7ed9 ",(0,r.jsx)(n.code,{children:"/"}),"\uff0c\u4f60\u9700\u8981\u5148\u7f29\u51cf ",(0,r.jsx)(n.code,{children:"/data"})," \u7684\u903b\u8f91\u5377\u5927\u5c0f\uff0c\u7136\u540e\u6269\u5c55 ",(0,r.jsx)(n.code,{children:"/"})," \u7684\u903b\u8f91\u5377\u548c\u6587\u4ef6\u7cfb\u7edf\u3002\u4ee5\u4e0b\u662f\u6b65\u9aa4\uff1a"]}),"\n",(0,r.jsx)(n.h4,{id:"421-\u5907\u4efd\u91cd\u8981\u6570\u636e",children:"4.2.1. \u5907\u4efd\u91cd\u8981\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u7f29\u5c0f\u903b\u8f91\u5377\u6d89\u53ca\u98ce\u9669\uff0c\u5efa\u8bae\u5148\u5907\u4efd ",(0,r.jsx)(n.code,{children:"/data"})," \u4e2d\u7684\u91cd\u8981\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(n.h4,{id:"422-\u5378\u8f7d-data",children:["4.2.2. \u5378\u8f7d ",(0,r.jsx)(n.code,{children:"/data"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u5b89\u5168\u8c03\u6574\u903b\u8f91\u5377\u5927\u5c0f\uff0c\u9996\u5148\u5378\u8f7d ",(0,r.jsx)(n.code,{children:"/data"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo umount /data\n"})}),"\n",(0,r.jsx)(n.h4,{id:"423-\u68c0\u67e5\u548c\u4fee\u590d\u6587\u4ef6\u7cfb\u7edf",children:"4.2.3. \u68c0\u67e5\u548c\u4fee\u590d\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7f29\u5c0f\u6587\u4ef6\u7cfb\u7edf\u4e4b\u524d\uff0c\u68c0\u67e5\u5e76\u4fee\u590d\u6587\u4ef6\u7cfb\u7edf\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo e2fsck -f /dev/ubuntu-vg/lv_data\n"})}),"\n",(0,r.jsx)(n.h4,{id:"424-\u7f29\u5c0f\u6587\u4ef6\u7cfb\u7edf",children:"4.2.4. \u7f29\u5c0f\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06 ",(0,r.jsx)(n.code,{children:"/data"})," \u6587\u4ef6\u7cfb\u7edf\u7f29\u5c0f\u5230 90 GiB\uff08\u5047\u8bbe\u4f60\u60f3\u4fdd\u7559 90 GiB\uff09\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo resize2fs /dev/ubuntu-vg/lv_data 90G\n"})}),"\n",(0,r.jsx)(n.h4,{id:"425-\u7f29\u5c0f\u903b\u8f91\u5377",children:"4.2.5. \u7f29\u5c0f\u903b\u8f91\u5377"}),"\n",(0,r.jsx)(n.p,{children:"\u7f29\u5c0f\u903b\u8f91\u5377\u5230 90 GiB\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo lvreduce -L 90G /dev/ubuntu-vg/lv_data\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"426-\u6269\u5c55--\u7684\u903b\u8f91\u5377",children:["4.2.6. \u6269\u5c55 ",(0,r.jsx)(n.code,{children:"/"})," \u7684\u903b\u8f91\u5377"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u91ca\u653e\u7684 100 GiB \u5206\u914d\u7ed9 ",(0,r.jsx)(n.code,{children:"/"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo lvextend -L +100G /dev/ubuntu-vg/ubuntu-lv\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"427-\u6269\u5c55--\u6587\u4ef6\u7cfb\u7edf",children:["4.2.7. \u6269\u5c55 ",(0,r.jsx)(n.code,{children:"/"})," \u6587\u4ef6\u7cfb\u7edf"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6269\u5c55 ",(0,r.jsx)(n.code,{children:"/"})," \u6587\u4ef6\u7cfb\u7edf\u4ee5\u4f7f\u7528\u65b0\u589e\u7684\u7a7a\u95f4\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo resize2fs /dev/ubuntu-vg/ubuntu-lv\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"428-\u6302\u8f7d-data",children:["4.2.8. \u6302\u8f7d ",(0,r.jsx)(n.code,{children:"/data"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u91cd\u65b0\u6302\u8f7d ",(0,r.jsx)(n.code,{children:"/data"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo mount /data\n"})}),"\n",(0,r.jsx)(n.h4,{id:"429-\u9a8c\u8bc1\u8c03\u6574",children:"4.2.9. \u9a8c\u8bc1\u8c03\u6574"}),"\n",(0,r.jsxs)(n.p,{children:["\u68c0\u67e5 ",(0,r.jsx)(n.code,{children:"/"})," \u548c ",(0,r.jsx)(n.code,{children:"/data"})," \u7684\u5927\u5c0f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"df -h /\r\ndf -h /data\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u8fd9\u4e9b\u6b65\u9aa4\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,r.jsx)(n.code,{children:"/data"})," \u7684 100 GiB \u91cd\u65b0\u5206\u914d\u7ed9 ",(0,r.jsx)(n.code,{children:"/"})]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>c});var r=d(6540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);