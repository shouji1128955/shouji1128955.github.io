最近發現在 Ubuntu 的設備上只要是 /var/log/*.log 的檔案跑 logrotate 都會失敗，但是 CentOS 的系統反而沒問題 
出現的訊息是：

error: skipping “/var/log/syslog” because parent directory has insecure permissions (It’s world writable or writable by group which is not “root”) Set “su” directive in config file to tell logrotate which user/group should be used for rotation.

但是執行 logrotate 的是 root，所以權限沒問題，問題是在於 logrotate 的安全性設計。

CentOS 在 /var/log 預設是 root:root 權限
Ubuntu 在 /var/log 預設是 root:syslog 權限
但是 logrotate 預設的安全性設計並不允許除了 root:root 以外的權限，如果權限非 root 就必須指定 su 參數讓 logrotate 不去判斷這個問題。

最簡單就是在 logrotate.conf 加上 su 設定


```shell

# /etc/logrotate.conf
compress
create
dateext
rotate 4
weekly
su root root

# configurable file rotations
include /etc/logrotate.d
```
