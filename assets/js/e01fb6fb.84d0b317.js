"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[2485],{2877:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var s=n(4848),i=n(8453);const l={},d=void 0,t={id:"k8s/ansible\u5b89\u88c5k8s-1.24.12",title:"ansible\u5b89\u88c5k8s-1.24.12",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/k8s/6.ansible\u5b89\u88c5k8s-1.24.12.md",sourceDirName:"k8s",slug:"/k8s/ansible\u5b89\u88c5k8s-1.24.12",permalink:"/docs/k8s/ansible\u5b89\u88c5k8s-1.24.12",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/k8s/6.ansible\u5b89\u88c5k8s-1.24.12.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1729354592e3,sidebarPosition:6,frontMatter:{},sidebar:"k8s",previous:{title:"\u66f4\u65b0\u5185\u6838",permalink:"/docs/k8s/\u66f4\u65b0\u5185\u6838"},next:{title:"\u63a7\u5236\u5668 CRD \u4ecb\u7ecd",permalink:"/docs/k8s/Controller"}},c={},a=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:4},{value:"\u4e00.\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived",id:"\u4e00\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived",level:4},{value:"1.\u5b89\u88c5keepalived",id:"1\u5b89\u88c5keepalived",level:5},{value:"2.master1\u4e0a\u914d\u7f6ekeepalived",id:"2master1\u4e0a\u914d\u7f6ekeepalived",level:5},{value:"3.master2\u4e0a\u914d\u7f6ekeepalived",id:"3master2\u4e0a\u914d\u7f6ekeepalived",level:5},{value:"4.\u91cd\u542fkeepalived",id:"4\u91cd\u542fkeepalived",level:5},{value:"\u4e8c.\u914d\u7f6ehaproxy",id:"\u4e8c\u914d\u7f6ehaproxy",level:4},{value:"1.master1\u4e0a\u914d\u7f6ehaproxy",id:"1master1\u4e0a\u914d\u7f6ehaproxy",level:5},{value:"2.master2\u4e0a\u914d\u7f6ehaproxy",id:"2master2\u4e0a\u914d\u7f6ehaproxy",level:5},{value:"3.\u91cd\u542fhaproxy",id:"3\u91cd\u542fhaproxy",level:5},{value:"\u4e09.\u5b89\u88c5k8s(master\u4e0a\u914d\u7f6e)",id:"\u4e09\u5b89\u88c5k8smaster\u4e0a\u914d\u7f6e",level:4},{value:"1.\u5b89\u88c5ansible",id:"1\u5b89\u88c5ansible",level:5},{value:"2.\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646",id:"2\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646",level:5},{value:"3.yum\u5b89\u88c5docker",id:"3yum\u5b89\u88c5docker",level:5},{value:"3.1\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6",id:"31\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6",level:6},{value:"3.2\u4e0b\u8f7ddocker\u6e90",id:"32\u4e0b\u8f7ddocker\u6e90",level:6},{value:"3.3\u5b89\u88c5docker",id:"33\u5b89\u88c5docker",level:6},{value:"3.54.\u914d\u7f6e\u955c\u50cf\u52a0\u901f\uff0c\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55",id:"354\u914d\u7f6e\u955c\u50cf\u52a0\u901f\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55",level:6},{value:"3.6\u91cd\u542fdocker",id:"36\u91cd\u542fdocker",level:6},{value:"4.\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6",id:"4\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6",level:5},{value:"4.1\u5b89\u88c5ezdown",id:"41\u5b89\u88c5ezdown",level:6},{value:"4.2\u521d\u59cb\u5316ezdown",id:"42\u521d\u59cb\u5316ezdown",level:6},{value:"4.3\u751f\u6210ansible hosts\u6587\u4ef6",id:"43\u751f\u6210ansible-hosts\u6587\u4ef6",level:6},{value:"4.4\u7f16\u8f91ansible hosts\u6587\u4ef6",id:"44\u7f16\u8f91ansible-hosts\u6587\u4ef6",level:6},{value:"4.5\u7f16\u8f91config.yml\u6587\u4ef6",id:"45\u7f16\u8f91configyml\u6587\u4ef6",level:6},{value:"4.6\u914d\u7f6e\u542f\u52a8\u73af\u5883",id:"46\u914d\u7f6e\u542f\u52a8\u73af\u5883",level:6},{value:"4.7\u914d\u7f6eetcd",id:"47\u914d\u7f6eetcd",level:6},{value:"4.8\u5b89\u88c5containerd",id:"48\u5b89\u88c5containerd",level:6},{value:"4.9\u5b89\u88c5master\u8282\u70b9",id:"49\u5b89\u88c5master\u8282\u70b9",level:6},{value:"4.10\u5b89\u88c5node\u8282\u70b9",id:"410\u5b89\u88c5node\u8282\u70b9",level:6},{value:"5.\u90e8\u7f72\u7f51\u7edc\u670d\u52a1",id:"5\u90e8\u7f72\u7f51\u7edc\u670d\u52a1",level:4},{value:"1.\u90e8\u7f72calico(\u4fee\u6539\u955c\u50cf)",id:"1\u90e8\u7f72calico\u4fee\u6539\u955c\u50cf",level:5},{value:"6.\u90e8\u7f72coredns\u548cmetrics(\u4fee\u6539\u955c\u50cf)",id:"6\u90e8\u7f72coredns\u548cmetrics\u4fee\u6539\u955c\u50cf",level:5}];function o(e){const r={code:"code",h4:"h4",h5:"h5",h6:"h6",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h4,{id:"\u73af\u5883\u914d\u7f6e",children:"\u73af\u5883\u914d\u7f6e"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u89d2\u8272"}),(0,s.jsx)(r.th,{children:"IP"}),(0,s.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K8s-master1"}),(0,s.jsx)(r.td,{children:"192.168.10.10"}),(0,s.jsx)(r.td,{children:"kube-scheduler\uff0ckubelet\uff0ckube-proxy\uff0cdocker\uff0ckeepalived\uff0cetcd"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K8s-master2"}),(0,s.jsx)(r.td,{children:"192.168.10.11"}),(0,s.jsx)(r.td,{children:"kube-scheduler\uff0ckubelet\uff0ckube-proxy\uff0cdocker\uff0ckeepalived\uff0cetcd"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K8s-node1"}),(0,s.jsx)(r.td,{children:"192.168.10.12"}),(0,s.jsx)(r.td,{children:"kubelet\uff0ckube-proxy\uff0cdocker"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ansible"}),(0,s.jsx)(r.td,{children:"192.168.10.100"}),(0,s.jsx)(r.td,{children:"ansible"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"\u4e00\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived",children:"\u4e00.\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived"}),"\n",(0,s.jsx)(r.h5,{id:"1\u5b89\u88c5keepalived",children:"1.\u5b89\u88c5keepalived"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"yum -y install ipvsadm keepalived haproxy\n"})}),"\n",(0,s.jsx)(r.h5,{id:"2master1\u4e0a\u914d\u7f6ekeepalived",children:"2.master1\u4e0a\u914d\u7f6ekeepalived"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 ~]# vim /etc/keepalived/keepalived.conf\r\nvrrp_instance VI_1 {\r\n    state MASTER\r\n    interface eth0\r\n    virtual_router_id 88\r\n    priority 100\r\n    advert_int 2\r\n    authentication {\r\n        auth_type PASS\r\n        auth_pass 1111\r\n    }\r\n    virtual_ipaddress {\r\n        192.168.10.88\r\n    }\r\n}\n"})}),"\n",(0,s.jsx)(r.h5,{id:"3master2\u4e0a\u914d\u7f6ekeepalived",children:"3.master2\u4e0a\u914d\u7f6ekeepalived"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master2 ~]# cat  /etc/keepalived/keepalived.conf\r\nvrrp_instance VI_1 {\r\n    state BACKUP\r\n    interface eth0\r\n    virtual_router_id 88\r\n    priority 80\r\n    advert_int 2\r\n    authentication {\r\n        auth_type PASS\r\n        auth_pass 1111\r\n    }\r\n    virtual_ipaddress {\r\n        192.168.10.88\r\n    }\r\n}\r\n\n"})}),"\n",(0,s.jsx)(r.h5,{id:"4\u91cd\u542fkeepalived",children:"4.\u91cd\u542fkeepalived"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"systemctl restart keepalived\r\nsystemctl enable  keepalived\n"})}),"\n",(0,s.jsx)(r.h4,{id:"\u4e8c\u914d\u7f6ehaproxy",children:"\u4e8c.\u914d\u7f6ehaproxy"}),"\n",(0,s.jsx)(r.h5,{id:"1master1\u4e0a\u914d\u7f6ehaproxy",children:"1.master1\u4e0a\u914d\u7f6ehaproxy"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 ~]# vim /etc/haproxy/haproxy.cfg\r\nlisten k8s_6443\r\n  mode tcp\r\n  bind 192.168.10.88:6443\r\n  server 192.168.10.10 192.168.10.10:6443 check inter 5s rise 2 fall 3\r\n  server 192.168.10.11 192.168.10.11:6443 check inter 5s rise 2 fall 3\n"})}),"\n",(0,s.jsx)(r.h5,{id:"2master2\u4e0a\u914d\u7f6ehaproxy",children:"2.master2\u4e0a\u914d\u7f6ehaproxy"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 ~]# vim /etc/haproxy/haproxy.cfg\r\nlisten k8s_6443\r\n  mode tcp\r\n  bind 192.168.10.88:6443\r\n  server 192.168.10.10 192.168.10.10:6443 check inter 5s rise 2 fall 3\r\n  server 192.168.10.11 192.168.10.11:6443 check inter 5s rise 2 fall 3\n"})}),"\n",(0,s.jsx)(r.h5,{id:"3\u91cd\u542fhaproxy",children:"3.\u91cd\u542fhaproxy"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"systemctl restart haproxy\r\nsystemctl enable haproxy\n"})}),"\n",(0,s.jsx)(r.h4,{id:"\u4e09\u5b89\u88c5k8smaster\u4e0a\u914d\u7f6e",children:"\u4e09.\u5b89\u88c5k8s(master\u4e0a\u914d\u7f6e)"}),"\n",(0,s.jsx)(r.h5,{id:"1\u5b89\u88c5ansible",children:"1.\u5b89\u88c5ansible"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"yum -y install ansible\n"})}),"\n",(0,s.jsx)(r.h5,{id:"2\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646",children:"2.\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"ssh-keygen -t rsa\r\nssh-copy-id -i .ssh/id_rsa.pub root@192.168.10.10\r\nssh-copy-id -i .ssh/id_rsa.pub root@192.168.10.11\r\nssh-copy-id -i .ssh/id_rsa.pub root@192.168.10.12\n"})}),"\n",(0,s.jsx)(r.h5,{id:"3yum\u5b89\u88c5docker",children:"3.yum\u5b89\u88c5docker"}),"\n",(0,s.jsx)(r.h6,{id:"31\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6",children:"3.1\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@jenkins ~]# yum install -y yum-utils device-mapper-persistent-data lvm2\n"})}),"\n",(0,s.jsx)(r.h6,{id:"32\u4e0b\u8f7ddocker\u6e90",children:"3.2\u4e0b\u8f7ddocker\u6e90"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo \n"})}),"\n",(0,s.jsx)(r.h6,{id:"33\u5b89\u88c5docker",children:"3.3\u5b89\u88c5docker"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@jenkins ~]# yum -y install docker-ce docker-ce-cli containerd.io\n"})}),"\n",(0,s.jsx)(r.h6,{id:"354\u914d\u7f6e\u955c\u50cf\u52a0\u901f\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55",children:"3.54.\u914d\u7f6e\u955c\u50cf\u52a0\u901f\uff0c\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'cat > /etc/docker/daemon.json << EOF\r\n{\r\n  "registry-mirrors": ["https://7jauxlsb.mirror.aliyuncs.com"],\r\n  "insecure-registries":["192.168.3.133"],\r\n  "data-root": "/data/docker"\r\n}\r\nEOF\n'})}),"\n",(0,s.jsx)(r.h6,{id:"36\u91cd\u542fdocker",children:"3.6\u91cd\u542fdocker"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"systemctl daemon-reload \r\nsystemctl enable docker \r\nsystemctl restart docker\n"})}),"\n",(0,s.jsx)(r.h5,{id:"4\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6",children:"4.\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6"}),"\n",(0,s.jsx)(r.h6,{id:"41\u5b89\u88c5ezdown",children:"4.1\u5b89\u88c5ezdown"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"wget https://github.com/easzlab/kubeasz/releases/download/3.3.5/ezdown\r\nchmod +x ./ezdown\n"})}),"\n",(0,s.jsx)(r.h6,{id:"42\u521d\u59cb\u5316ezdown",children:"4.2\u521d\u59cb\u5316ezdown"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 ~]# vim ezdown\r\nDOCKER_VER=20.10.22\r\nKUBEASZ_VER=3.3.5\r\nK8S_BIN_VER=v1.24.12\r\n[root@k8s-master1 ~]# ./ezdown -D\n"})}),"\n",(0,s.jsx)(r.h6,{id:"43\u751f\u6210ansible-hosts\u6587\u4ef6",children:"4.3\u751f\u6210ansible hosts\u6587\u4ef6"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 ~]# cd /etc/kubeasz/\r\n[root@k8s-master1 kubeasz]# ./ezctl new k8s-cluster1\n"})}),"\n",(0,s.jsx)(r.h6,{id:"44\u7f16\u8f91ansible-hosts\u6587\u4ef6",children:"4.4\u7f16\u8f91ansible hosts\u6587\u4ef6"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'[etcd]\r\n192.168.10.10\r\n192.168.10.11\r\n192.168.10.12\r\n\r\n[kube_master]\r\n192.168.10.10 k8s_nodename=\'master01\'\r\n192.168.10.11 k8s_nodename=\'master02\'\r\n\r\n[kube_node]\r\n192.168.10.12 k8s_nodename=\'node01\'\r\n\r\n[harbor]\r\n\r\n[ex_lb]\r\n192.168.10.11 LB_ROLE=backup EX_APISERVER_VIP=192.168.10.88 EX_APISERVER_PORT=8443\r\n192.168.10.10 LB_ROLE=master EX_APISERVER_VIP=192.168.10.88 EX_APISERVER_PORT=8443\r\n\r\n[chrony]\r\n\r\n[all:vars]\r\nSECURE_PORT="6443"\r\n\r\nCONTAINER_RUNTIME="containerd"\r\n\r\nCLUSTER_NETWORK="calico"\r\n\r\nPROXY_MODE="ipvs"\r\n\r\nSERVICE_CIDR="10.10.0.0/16"\r\n\r\nCLUSTER_CIDR="172.10.0.0/16"\r\n\r\nNODE_PORT_RANGE="1-65535"\r\n\r\nCLUSTER_DNS_DOMAIN="cluster.local"\r\n\r\nbin_dir="/usr/bin"\r\n\r\nbase_dir="/etc/kubeasz"\r\n\r\ncluster_dir="{{ base_dir }}/clusters/1.24.12"\r\n\r\nca_dir="/etc/kubernetes/ssl"\r\n\r\nk8s_nodename=\'\'\r\n\n'})}),"\n",(0,s.jsx)(r.h6,{id:"45\u7f16\u8f91configyml\u6587\u4ef6",children:"4.5\u7f16\u8f91config.yml\u6587\u4ef6"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'INSTALL_SOURCE: "online"\r\n\r\nOS_HARDEN: false\r\n\r\n\r\nCA_EXPIRY: "876000h"\r\nCERT_EXPIRY: "438000h"\r\n\r\nCHANGE_CA: false\r\n\r\nCLUSTER_NAME: "cluster1"\r\nCONTEXT_NAME: "context-{{ CLUSTER_NAME }}"\r\n\r\nK8S_VER: "1.24.12"\r\n\r\nK8S_NODENAME: "{%- if k8s_nodename != \'\' -%} \\\r\n                    {{ k8s_nodename|replace(\'_\', \'-\')|lower }} \\\r\n               {%- else -%} \\\r\n                    {{ inventory_hostname }} \\\r\n               {%- endif -%}"\r\n\r\nETCD_DATA_DIR: "/var/lib/etcd"\r\nETCD_WAL_DIR: ""\r\n\r\n\r\nENABLE_MIRROR_REGISTRY: true\r\n\r\nSANDBOX_IMAGE: "192.168.3.133/tools/pause:3.9"\r\n\r\nCONTAINERD_STORAGE_DIR: "/data/containerd"\r\n\r\nDOCKER_STORAGE_DIR: "/data/docker"\r\n\r\nENABLE_REMOTE_API: false\r\n\r\nINSECURE_REG: \'["192.168.3.133"]\'\r\n\r\n\r\nMASTER_CERT_HOSTS:\r\n  - "10.1.1.1"\r\n  - "k8s.easzlab.io"\r\n\r\nNODE_CIDR_LEN: 24\r\n\r\n\r\nKUBELET_ROOT_DIR: "/var/lib/kubelet"\r\n\r\nMAX_PODS: 300\r\n\r\nKUBE_RESERVED_ENABLED: "no"\r\n\r\nSYS_RESERVED_ENABLED: "no"\r\n\r\n\r\nFLANNEL_BACKEND: "vxlan"\r\nDIRECT_ROUTING: false\r\n\r\nflannel_ver: "v0.19.2"\r\n\r\nCALICO_IPV4POOL_IPIP: "Always"\r\n\r\nIP_AUTODETECTION_METHOD: "can-reach={{ groups[\'kube_master\'][0] }}"\r\n\r\nCALICO_NETWORKING_BACKEND: "brid"\r\n\r\nCALICO_RR_ENABLED: false\r\n\r\nCALICO_RR_NODES: []\r\n\r\ncalico_ver: "v3.24.5"\r\n\r\ncalico_ver_main: "{{ calico_ver.split(\'.\')[0] }}.{{ calico_ver.split(\'.\')[1] }}"\r\n\r\ncilium_ver: "1.12.4"\r\ncilium_connectivity_check: true\r\ncilium_hubble_enabled: false\r\ncilium_hubble_ui_enabled: false\r\n\r\nOVN_DB_NODE: "{{ groups[\'kube_master\'][0] }}"\r\n\r\nkube_ovn_ver: "v1.5.3"\r\n\r\nOVERLAY_TYPE: "full"\r\n\r\nFIREWALL_ENABLE: true\r\n\r\nkube_router_ver: "v0.3.1"\r\nbusybox_ver: "1.28.4"\r\n\r\n\r\ndns_install: "yes"\r\ncorednsVer: "1.9.3"\r\nENABLE_LOCAL_DNS_CACHE: true\r\ndnsNodeCacheVer: "1.22.13"\r\nLOCAL_DNS_CACHE: "10.10.0.2"\r\n\r\nmetricsserver_install: "yes"\r\nmetricsVer: "v0.5.2"\r\n\r\ndashboard_install: "no"\r\ndashboardVer: "v2.7.0"\r\ndashboardMetricsScraperVer: "v1.0.8"\r\n\r\nprom_install: "no"\r\nprom_namespace: "monitor"\r\nprom_chart_ver: "39.11.0"\r\n\r\nnfs_provisioner_install: "no"\r\nnfs_provisioner_namespace: "kube-system"\r\nnfs_provisioner_ver: "v4.0.2"\r\nnfs_storage_class: "managed-nfs-storage"\r\nnfs_server: "192.168.1.10"\r\nnfs_path: "/data/nfs"\r\n\r\nnetwork_check_enabled: false\r\nnetwork_check_schedule: "*/5 * * * *"\r\n\r\nHARBOR_VER: "v2.6.3"\r\nHARBOR_DOMAIN: "harbor.easzlab.io.local"\r\nHARBOR_PATH: /var/data\r\nHARBOR_TLS_PORT: 8443\r\nHARBOR_REGISTRY: "{{ HARBOR_DOMAIN }}:{{ HARBOR_TLS_PORT }}"\r\n\r\nHARBOR_SELF_SIGNED_CERT: true\r\n\r\nHARBOR_WITH_NOTARY: false\r\nHARBOR_WITH_TRIVY: false\r\nHARBOR_WITH_CHARTMUSEUM: true\r\n\n'})}),"\n",(0,s.jsx)(r.h6,{id:"46\u914d\u7f6e\u542f\u52a8\u73af\u5883",children:"4.6\u914d\u7f6e\u542f\u52a8\u73af\u5883"}),"\n",(0,s.jsxs)(r.p,{children:["\u4e00\u952e\u90e8\u7f72",":ezctl"," setup k8s-01 all"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 01\n"})}),"\n",(0,s.jsx)(r.h6,{id:"47\u914d\u7f6eetcd",children:"4.7\u914d\u7f6eetcd"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 02\r\n//\u67e5\u770betcd\u72b6\u6001\r\netcdctl --cacert=/etc/kubernetes/ssl/ca.pem --cert=/etc/kubernetes/ssl/etcd.pem --key=/etc/kubernetes/ssl/etcd-key.pem --endpoints="https://192.168.3.10.10:2379,https://192.168.10.11:2379,https://192.168.10.12:2379" endpoint health --write-out=table\n'})}),"\n",(0,s.jsx)(r.h6,{id:"48\u5b89\u88c5containerd",children:"4.8\u5b89\u88c5containerd"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 03\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5b89\u88c5\u5b8ccontainerd\u540e\uff0c\u4fee\u6539containerd\u7684\u955c\u50cf\u5730\u5740"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'[root@localhost ~]# vim /etc/containerd/config.toml\r\n   [plugins."io.containerd.grpc.v1.cri".registry]\r\n     [plugins."io.containerd.grpc.v1.cri".registry.mirrors]\r\n       [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]\r\n         endpoint = ["https://8aj710su.mirror.aliyuncs.com" ,"https://registry-1.docker.io"]\r\n        [plugins."io.containerd.grpc.v1.cri".registry.mirrors."192.168.3.133"]\r\n          endpoint = ["http://192.168.3.133:80"]\r\n      [plugins."io.containerd.grpc.v1.cri".registry.configs]\r\n        [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.3.133".tls]\r\n          insecure_skip_verify = true\r\n        [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.3.133".auth]\r\n          username = "admin"\r\n          password = "123456"\r\n[root@k8s-master1 ]# systemctl restart containerd\r\n[root@k8s-master1 ]# systemctl enable containerd\n'})}),"\n",(0,s.jsx)(r.h6,{id:"49\u5b89\u88c5master\u8282\u70b9",children:"4.9\u5b89\u88c5master\u8282\u70b9"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 04\n"})}),"\n",(0,s.jsx)(r.h6,{id:"410\u5b89\u88c5node\u8282\u70b9",children:"4.10\u5b89\u88c5node\u8282\u70b9"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 05\n"})}),"\n",(0,s.jsx)(r.h4,{id:"5\u90e8\u7f72\u7f51\u7edc\u670d\u52a1",children:"5.\u90e8\u7f72\u7f51\u7edc\u670d\u52a1"}),"\n",(0,s.jsx)(r.p,{children:"\u4e0b\u8f7d\u955c\u50cf\u540e\u4e0a\u4f20\u5230\u81ea\u5df1\u7684harbor\u4ed3\u5e93"}),"\n",(0,s.jsx)(r.h5,{id:"1\u90e8\u7f72calico\u4fee\u6539\u955c\u50cf",children:"1.\u90e8\u7f72calico(\u4fee\u6539\u955c\u50cf)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 06\n"})}),"\n",(0,s.jsx)(r.h5,{id:"6\u90e8\u7f72coredns\u548cmetrics\u4fee\u6539\u955c\u50cf",children:"6.\u90e8\u7f72coredns\u548cmetrics(\u4fee\u6539\u955c\u50cf)"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 07\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>t});var s=n(6540);const i={},l=s.createContext(i);function d(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);