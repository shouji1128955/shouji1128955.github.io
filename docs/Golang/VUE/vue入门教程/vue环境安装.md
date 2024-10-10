

## nrm安装



```txt
D:\demo>npm  install nrm -g
added 17 packages in 1s

D:\demo>nrm ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```



比如，我想使用taobao这个，如何使用呢?

```txt
D:\demo>nrm use taobao
 SUCCESS  The registry has been changed to 'taobao'.

#验证
D:\demo>nrm  ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
* taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```





## npm安装

卸载老版本

```shell
npm uninstall vue-cli -g
yarn global remove vue-cli
```





安装指定版本npm

```
npm install npm@6.0.0
```

npm config edit 

查看配置信息的指令：

```
npm config list 
```

设置淘宝镜像

```html
npm config set registry https://registry.npm.taobao.org
```

可以通过下面的命令查看淘宝镜像是否安装成功

```
npm config get registry
```

全局安装vue-cli

```html
npm install -g @vue/cli
npm install  @vue/cli@4.5.9 -g  //安装指定指定版本
```

查看vue-cli的版本

```
vue -V
```





