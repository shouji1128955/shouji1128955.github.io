

## 1、操作使用

项目练习

####  语法： 

在Vue中，使用`export default`关键字用于导出一个默认的模块。在Vue的组件中，通常会使用`export default`来导出一个Vue组件定义对象。例如，下面是一个简单的Vue组件定义对象的例子

```
<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  }
}
</script>
```



在上面的代码中，`export default`关键字用于导出一个包含Vue组件选项的对象。在这个例子中，Vue组件有一个`data`选项，该选项返回一个对象，该对象包含一个名为`message`的属性。

当使用`export default`导出一个Vue组件时，可以在其他Vue组件中使用该组件。例如，下面的代码演示了如何在另一个Vue组件中使用上面定义的Vue组件：

```
<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  }
}
</script>

```



在上面的代码中，我们使用`import`关键字将`HelloWorld`组件导入到当前组件中，并将其注册为当前组件的子组件。这样，我们就可以在当前组件中使用`HelloWorld`组件了。



直接在屏幕上打印

![image-20230314160748797](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230314160748797.png)













![image-20230310192543077](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310192543077.png)



对比

![image-20230310192613255](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310192613255.png)

vue安装

npm install  -g @vue/cli

yarn按转

npm  i -g yarn 



npm config get registry  --> 输出镜像下载的地址，默认是国外的地址



![image-20230310194245072](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310194245072.png)

修改地址

npm config set  registry  https://registry.npmmirror.com/





https://element.eleme.cn/#/zh-CN/component/installation

![image-20230310195012515](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310195012515.png)



https://cdnjs.com/

如果地址找不到，可以在这个地址中找到



![image-20230310195538963](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310195538963.png)

拷贝到本地直接使用本地的地址



![image-20230310195648569](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310195648569.png)



#### 安装

```golang
npm i element-ui -S
```



![image-20230310224756309](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310224756309.png)

## 2、Element



#### 1、引入Element

![image-20230310200127875](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310200127875.png)

添加到main.js文件中

```vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);  //表示组件全局注入到vue中,还需要添加这一段
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```



![image-20230310225650100](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310225650100.png)

把下面的代码赋值到 App.vue文件中。

```vue
<template>
 <div id="app">
   <el-row>
     <el-button>默认按钮</el-button>
     <el-button type="primary">主要按钮</el-button>
     <el-button type="success">成功按钮</el-button>
     <el-button type="info">信息按钮</el-button>
     <el-button type="warning">警告按钮</el-button>
     <el-button type="danger">危险按钮</el-button>
   </el-row>
 </div>
</template>
<script>
export  default{
  name: 'APP'
}
</script>
```



然后启动： npm run serve

#### 2、访问 

127.0.0.1:8080/



![image-20230310225605056](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310225605056.png)

![image-20230310230335913](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310230335913.png)



以上这个就是全局引入，**有全局引入，就有按需引入** 他们的区别是什么呢  ？



#### 3、按需引入



参考官方文档，第一步需要安装一个插件



![image-20230310230402958](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310230402958.png)



```vue
npm install babel-plugin-component -D
```



修改文件

![image-20230310230540503](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310230540503.png)



修改后如下

![image-20230310230653527](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310230653527.png)



接下来按照官方文档进行操作

![image-20230310230927597](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310230927597.png)

参考修改后如下

![image-20230310230954368](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230310230954368.png)





启动的时候会报错，然后需要修改babel.config.js文件如下： 

```vue
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [["@balel/preset-env", { "modules": false }]],

  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

```



#### 4、路由

通过路由实现跳转到不同的页面

床架两个页面，一个是home,一个是about 

必须需要安装vue-router 

https://v3.router.vuejs.org/zh/guide/#javascript

router/index.js 

```vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)


const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
]

const index = new VueRouter({
    mode: "history",   //注意访问模式
    routes // (缩写) 相当于 routes: routes
})



export default index
```



views/home.vue 

```vue
<template>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

</template>


<script>

export  default{
  data(){
    return {}
  }
}
</script>
```



views/about.vue

```vue
<template>

 <h1> 我是About </h1>

</template>


<script>

export  default{
  data(){
    return {}
  }
}
</script>
```



App.vue

```

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>
```



main.js

```golang
import Vue from 'vue'
import App from './App'
import index from './router/index.js'
//import ElementUI from 'element-ui';
import { Row,Button } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
//Vue.use(ElementUI)  //表示全局注入到组件中去
Vue.use(Row)
Vue.use(Button)


new Vue({
  router: index,
  render: h => h(App),
}).$mount('#app')
```



![image-20230311193226092](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311193226092.png)





![image-20230311193244548](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311193244548.png)





## 3、嵌套路由

#### 3.1、嵌套路由使用

在一般的项目中，左边菜单栏跟导航栏都是固定不变的，只是内容区域变化，这时候为了更好的实现这种需求，就是需要用到了到嵌套路由。

官方地址： 

https://v3.router.vuejs.org/zh/guide/essentials/nested-routes.html





![image-20230311201713163](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311201713163.png)





views/main.vue 

在由于main文件是页面中需要每次展示的, 所以需要引入```html <router-view> ``` ，在这里，内容我引入了一个循环进度条。 然后在main.vue文件中引入即可

![image-20230311220453476](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311220453476.png)



```
<template>
  <div class="demo-fit">


    <div>
      <router-view></router-view>
    </div>
    <br>
    <br>
    <br>


    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>

  </div>

</template>
<script>

export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>
```

因为我使用的是按需引入，需要在main.js文件中引入即可

![image-20230311220601179](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311220601179.png)



创建路由，然后按照下面添加子路由，参考官方文档 https://v3.router.vuejs.org/zh/guide/essentials/nested-routes.html

![image-20230311220709709](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311220709709.png)



## 4、网站布局





#### 1、布局搭建

官网选择布局方式--倒数第二个

![image-20230311221751312](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311221751312.png)



views/main.vue中增加 ```html <template>```中的布局代码以及style中的样式代码 

```vue
<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
                 <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
export default {
   data() {
    return {}
   }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
```





然后根据下图，在main.js中文件中增加如下配置，导入相关的依赖

说明： 如果依赖找不到，则在浏览器会加载不全，通过console中可以查看报错，根据报错导入相关的包。

导入的包名称是```html <template> ```中代码中引入el-后面的部分，每次都导入即可。

![image-20230311224902539](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311224902539.png)



浏览访问

![image-20230311230145264](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311230145264.png)



#### 2、左侧菜单栏布局

接下来需要对Aside部分进行布局，然后到官方网站找到一个比较适合自己的菜单组件

选择下面这个菜单组件，然后赋值代码

![image-20230311230559510](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230311230559510.png)





拷贝上面的的代码，参考下面的方式，创建文件见，然后把代码粘贴到对应的文件中。

注意： components中放的代码都是小组件的代码，大的框架代码都是放在views中的。



![image-20230312001259855](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312001259855.png)



注意引入所需要的依赖包，我当前的环境已调整为全局引入，因为需要引入的文件比较多。

components/CommonAside.vue

```vue
<template>

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>



</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
```



参考下面的方式修改main.vue中的代码



![image-20230312001701338](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312001701338.png)



然后启动服务

![image-20230312001834647](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312001834647.png)

#### 3、一级菜单的实现

因为菜单的有两种，就是一级跟二级菜单之分，因为这两级所填充的数据也是不一样的。

然后默认上面的菜单时折叠起来的，我们需要打开，首先还是需要查看官方文档

https://element.eleme.cn/#/zh-CN/component/menu

然后找到collapse ，并且将其设置为false 即可

![image-20230312003435051](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312003435051.png)



参考下面进行修改即可

![image-20230312003630661](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312003630661.png)



然后访问页面就自动打开了

![image-20230312003720300](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312003720300.png)

接下来就是调整导航顺序，调整导航1和导航2顺序，删掉导航3，4，并且在导航1中留一个选项1 即可，就是留一个子菜单

优化后的代码如下

components/CommonAside.vue

```vue
<template>

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">选项1</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>



</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
```



然后访问查看

![image-20230312004450450](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312004450450.png)



接下来就是实现一个对文件内容的渲染

数据准备：

```map
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/main',
          name: 'mail',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
```



实现一级目录跟二级目录

![image-20230312020825232](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312020825232.png)



代码参考下面

components/CommonAside.vue

```vue
<template>

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

    <el-menu-item  v-for="item in noChildre" :key="item.name"  :index="item.name">   <!--key用于当前标记的唯一性-->
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu  v-for="item in hasChildren" :key="item.label"  :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="chkey in item.children" :key="chkey.path" >
        <el-menu-item :index="chkey.path">{{ chkey.name }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>



</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/main',
          name: 'mail',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  //computed实现对数据的计算
  computed: {
   //没有子菜单
    noChildre(){
      //filter是一个数组的一个函数进行过滤，item表示某一项的值children，然后根据true和false然后返回，不存在children就表示返回
     return this.menuData.filter(item => !item.children)
    },
    hasChildren(){
      return this.menuData.filter(item => item.children)
      //有子菜单
    }


  }
}
</script>
```



页面访问

![image-20230312020937706](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312020937706.png)



5、样式调整以及高度调整

找到官网的代码部分，然后找到样式部分进行优化

![image-20230312021456592](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312021456592.png)



复制下面三行代码到components/CommonAside.vue，

![image-20230312021525537](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312021525537.png)



参考下面添加即可

![image-20230312021627041](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312021627041.png)



技巧调节高度，通过浏览器

![image-20230312021956069](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312021956069.png)



但是通过以上调节高度，可以通过style来实现，可以定义高度，还有就是单独添加 “通用系统管理平台” 标题，使用```<h3> ```标签，但是如果通过以下定义是实现不了的。

```
.el-menu {
 height: 100vh; 
 h3{
    color: #fff;
 }
}
```

以上这种方式只对侧边栏的高度进行调整，但是对于h3这种没法识别，所以，可以使用另一种方式less 

![image-20230312110351820](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312110351820.png)



访问查看，但是定义的style不生效

![image-20230312110336574](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312110336574.png)



安装指定版本less版本

```
npm  i less@4.1.2
npm  i  less-loader@6.0.0
```

参考下面修改代码， 如果在goland中提示错误，这里就换成了vscode开发工具没有报错



![image-20230312114331642](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312114331642.png)





修改增改样式，全局

App.vue

![image-20230312115312597](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312115312597.png)

字体大写和字体居中对齐

components/CommonAside.vue

![image-20230312115414191](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312115414191.png)



然后访问查看样式

![image-20230312115501433](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312115501433.png)



#### 4、左侧菜单的跳转

这一环节要实现的就是路由的跳转，根据上面的数据信息，我们首先要创建5张页面，然后配置路由信息，让后做事件相应。

##### 4.1 创建路由页面

Main.vue页面是之前创建好的，可以说是主页面，此处就不需要创建

![image-20230312122857445](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312122857445.png)



```vue
const routes = [
    {    //注意 redirect 表示访问 '/'时候重定向到'home' .
        path: '/',
        component:  Main,
        redirect: '/home',  //表示重定向
        //子路由
        children: [
                { path: 'home', component: Home },
                { path: 'mail', component: Mail },
                { path: 'user', component: User },
                { path: 'page1', component: Page1 },
                { path: 'page2', component: Page2 }
        ]
    }

]
```



##### 4.2 导入创建的页面以及创建路由

参考下面的代码然后进行修改

router/index.js

![image-20230312123119295](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312123119295.png)



##### 4.3 跳转绑定-事件

**这个非常重要**



点击的事件是需要在菜单上进行绑定，然后修改下面的文件

注意：  

1、 @click="CheckMenu"  就等于 v-on:click="CheckMenu"

2、 然后把CheckMenu定义在method下面，点击上面的按钮会自动执行对应的函数CheckMenu

3 、需要跳转到哪里，是根据传入的数据进行判断的

4、 通过下面的修改，我们现在控制台打印校验下过程具体怎么样的



components/CommonAside.vue  

修改第一处：

![image-20230312124340491](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312124340491.png)

修改第二处：



![image-20230312124416615](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312124416615.png)



然后在页面点击按钮，通过控制台打印查看是否拿到结果

![image-20230312124502374](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312124502374.png)



显然易见已经获取到了结果。紧接着修改push路由



components/CommonAside.vue  

```vue
    //点击菜单
    CheckMenu(item){
      console.log(item)
      this.$router.push(item.path)
    }
  },
```



参考修改

![image-20230312125758587](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312125758587.png)



修改后的代码如下：



components/CommonAside.vue  

```vue
<template>

  <el-menu default-active="1-4-1"  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
  >
    <h3>通用后台管理系统</h3>
    <el-menu-item   @click="CheckMenu(item)"  v-for="item in noChildre" :key="item.name"  :index="item.name">   <!--key用于当前标记的唯一性-->
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu  v-for="item in hasChildren" :key="item.label"  :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group  v-for="chkey in item.children" :key="chkey.path" >
        <el-menu-item  @click="CheckMenu(chkey)" :index="chkey.path">{{ chkey.name }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>



</template>

<style lang="less" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    color: aliceblue;
    text-align: center;
    line-height: 48px;
    font-size: 16px; 
    font-weight: 400px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mail',
          name: 'mail',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }, 
    //点击菜单
    CheckMenu(item){
      console.log(item)
      this.$router.push(item.path)
    }
  },
  //computed实现对数据的计算
  computed: {
   //没有子菜单
    noChildre(){
      //filter是一个数组的一个函数进行过滤，item表示某一项的值children，然后根据true和false然后返回，不存在children就表示返回
     return this.menuData.filter(item => !item.children)
    },
    hasChildren(){
      return this.menuData.filter(item => item.children)
      //有子菜单
    }


  }
}
</script>
```



根据网友所述，使用element的router属性更方便--可以留作研究的点

解决首页访问报错的问题，因为需要判断，跳转的页面是否与此时的页面是否一致，否则就不需要跳转，这个如果使用element的router可能 不会出现这个错误。

还有网友所说可以添加.once应该就可以，相同的就只能点击一次。 



![image-20230312130240549](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312130240549.png)



修改方式如下

需要注意 $route ，是this的一个方法，跟 router的区别，这是两个不同的方法，this.$route.path 是获取当前访问的路径

components/CommonAside.vue  

```vue
    //点击菜单
    CheckMenu(item){

    //当页面的路由与跳转的路由不一致才允许跳转
      //  console.log(item)
      if (this.$route.path !== item.path && !(this.$route.path==='/home' && (item.path === '/'))) {
       this.$router.push(item.path)
      }
```



#### 5、Head部分的准备



##### 5.1左边图标跟首页字体的创建



第一步 :创建页面

components/CommonHeader.vue

```
<template>
    <div class="header-container">
        <div class="l-content" > left  </div>
        <div class="r-content"> right </div>
    </div>
  </template>
  

<style lang="less" scoped>
 .header-container {
    background-color: #333;
    height: 60px;
    .el-header {
        padding: 0 0px;
    }   
    
}

</style>  
```



第二步： 修改views/Main.vue 中的代码，参考如下

![image-20230312142442554](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312142442554.png)



修改后的代码如下

views/Main.vue 

```vue
<template>
  <div>
    <el-container>
      <el-aside width="200px">
                  <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
                  <common-header/>
        </el-header>
        
        <el-main>
                 <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>

import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue';
export default {
   data() {
    return {}
   },
   components: {
    CommonAside,
    CommonHeader,
}
}
</script>

<style scoped> 
 .el-header{
  padding: 0px;
 }
</style>
```



第三步： 取消中间的间隙



![image-20230312142348013](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312142348013.png)



views/Main.vue 

```vue
<template>
  <div>
    <el-container>
      <el-aside width="200px">
                  <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
                  <common-header/>
        </el-header>
        
        <el-main>
                 <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>

import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue';
export default {
   data() {
    return {}
   },
   components: {
    CommonAside,
    CommonHeader,
}
}
</script>


<style scoped> 
 .el-header{
  padding: 0px;
 }
</style>
```



第五步： 插入图表

需要到官网去找图标，然后插入图标

找到官网，选择一个图片



![image-20230312144052676](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312144052676.png)





components\CommonHeader.vue

```html
<template>
    <div class="header-container">
        <div class="l-content" > 
            <el-button icon="el-icon-search"></el-button>   <!--添加在此处-->
        </div>
        <div class="r-content"> right </div>
    </div>
  </template>
  

<style lang="less" scoped>
 .header-container {
    background-color: #333;
    height: 60px;
    .el-header {
        padding: 0 0px;
    }   
    
}

</style>  
```



访问展示查看

![image-20230312144303973](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312144303973.png)



修改启动的图片，需要到官网找到合适的图片。这里使用   el-icon-menu 图标

components\CommonHeader.vue  修改部分代码

```
<template>
    <div class="header-container">
        <div class="l-content" > 
            <el-button icon="el-icon-menu" size="mini"></el-button>
        </div>
        <div class="r-content"> right </div>
    </div>
  </template>
```

 size 表示修改图标大小

调整图标上下居中，左右不要靠边

components\CommonHeader.vue  修改部分代码



新增代码： 

        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center ;
 增加的位置： 

```
<style lang="less" scoped>
 .header-container {
    background-color: #333;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    .el-header {
        padding: 0 0px;
    }   
    
}

</style>  
```



在图标旁边添加一个面包屑，“首页”

![image-20230312150105725](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312150105725.png)



components\CommonHeader.vue

```vue
<template>
    <div class="header-container">
        <div class="l-content" > 
            <el-button icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="r-content"> right </div>
    </div>
  </template>
  

<style lang="less" scoped>
 .header-container {

    background-color: #333;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    .el-header {
        padding: 0 0px;
    } 
    .text{
        color: #fff; 
        font-size: 14px;
        margin-left: 10px;
    }
    
}

</style>  
```



##### 5.2 头像以及下拉框的创建

官方文档

https://element.eleme.cn/#/zh-CN/component/dropdown

使用组件 Dropdown 下拉菜单

复制内容即可

![image-20230312150459428](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312150459428.png)



粘贴到对应的位置即可



components\CommonHeader.vue

```vue
<template>
    <div class="header-container">
        <div class="l-content">
            <el-button icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>
  

<style lang="less" scoped>
.header-container {

    background-color: #333;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-header {
        padding: 0 0px;
    }

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>  
```



查看，然后对内容进行修改即可

![image-20230312150707574](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312150707574.png)



增加图片到assets目录下,然后修改代码

components\CommonHeader.vue

```vue
<template>
    <div class="header-container">
        <div class="l-content">
            <el-button icon="el-icon-menu" size="mini"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">  <!--修改这里-->
                    <img class="user" src="@/assets/user.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>
  

<style lang="less" scoped>
.header-container {

    background-color: #333;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    //新增这个部分
    .r-content{
        .user{
        width: 40px;
        height: 40px;
        border-radius: 50%; 
  }

    }
}
</style>  
```





##### 5.3、实现左侧栏的折叠

这里使用vuex 

比如：  父盒子中有一些状态信息，然后再父盒子中有a,b,c三个盒子，那么再这三个盒子中都是共享的。



第一步： 引入： 

```
npm i vuex@3.6.2
```



创建文件夹和文件，在src目录下

```
store\index.js
```

store\index.js

```
import Vue  from "vue";
import  Vuex from "vuex";
import  tab  from "./tab"
 
Vue.use(Vuex)



export default  new Vuex.Store({

    modules:{
      tab 
    }
})
```



store\tab.js

```
export default {
   state: {
    isCollapse: false,  //控制head头部菜单的展开还是折叠
   },
   //定义一个修改这个字段的方法
   
   mutations: {
    collapseMenu(state){
        state.isCollapse = !state.isCollapse

    }
   }
}
```



注入到vue

![image-20230312231928367](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312231928367.png)



components\CommonHeader.vue

![image-20230312232015836](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312232015836.png)

components\CommonHeader.vue

![image-20230312232100984](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312232100984.png)



点击折叠按钮，触发CommonHeader 中click事件，然后执行 store中tab.js文件的方法，然后修改值，就是修改了state的值，然后在components/CommonAside.vue中 :collapse="isCollapse" 中调用state中定义的值 



过程就是点击按钮触发store当中state的修改方法，然后在aside组件当中获取并且使用state的变化结果



components\CommonAside.vue

![image-20230312232158415](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312232158415.png)





components\CommonAside.vue

![image-20230312232241830](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312232241830.png)



然后访问：

![image-20230312232931441](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312232931441.png)

上面红框表示存在的问题，需要修改，这种问题首先需要在浏览器f12中定位是那个样式，就是查看class名称是什么，然后根据名称在找到对应的文件，进行修改，这里就修改为auto即可。 看图修改

![image-20230312233938363](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312233938363.png)



修改字体折叠后的字数

components\CommonAside.vue

![image-20230312234716737](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312234716737.png)





修改白色间隙

![image-20230312235725751](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230312235725751.png)





加快侧边栏文字消失的速度

components\CommonAside.vue  样式代码

```vue
.el-menu {
  height: 100vh;
  border-right: none;
  transition: all 10ms; //添加此行代码即可加快速度
  h3 {
    color: aliceblue;
    text-align: center;
    line-height: 48px;
    font-size: 16px; 
    font-weight: 400px;
    
  }
```



至此，侧边栏部分结束，接下来，将会围绕内容区进行展开。



#### 6、Home组件布局



内容区域，首先需要自适应，需要用到一个组件就是Layout布局

官网： https://element.eleme.cn/#/zh-CN/component/layout

![image-20230313103819358](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230313103819358.png)



views\Home.vue

```
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
```



对于左边的卡片，个人信息，需要引入一个样式 Card卡片，鼠标点击的时候显示阴影的效果

![image-20230313104305159](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230313104305159.png)

引用下面的样式

```vue
<el-card class="box-card">

</el-card>
```



views\Home.vue

```vue
<template>

    <el-row>
      <el-row>
                <el-col :span="6"><div class="grid-content bg-purple"> 
                  
                  <el-card class="box-card">
                       <div class="user">
                        <img src="../assets/andun.jpg" alt="">
                        <div class="userinfo">
                           <p class="name"> Admin</p>
                           <p class="access"> 超级管理员</p>
                          </div>
                       </div>

                       <div  class="login-info"> 
                           <p> 上次登录时间: <span>2022-12-21</span></p>
                           <p> 上次登录地点: <span>北京</span></p>
                       </div>

                  </el-card>

                </div></el-col>
                <el-col :span="18"><div class="grid-content bg-purple-light">
                  
                  
                  right
                  <br>
                  <h1>test</h1>
                </div></el-col>
      </el-row>
    </el-row>


    
</template>
<style  lang="less" scoped>


.login-info{
   
   p{
         line-height: 28px;
         font-size: 14px; 
         color: #999999;
         span {
           color: #666666; 
           margin-left: 60px;
        }
     }
    }

.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display:  flex;
    align-items: center;
    img{
      margin-right: 40px;
      width: 150px;
      height: 150px;
      border-radius: 50%;

    }   
.userinfo{
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
 }


}
</style>

<script>

export  default{
  data(){
    return {}
  }
}
</script>
```



购买部分的编写，需要用到数据table组件

官方文档：

https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot

![image-20230313115300647](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230313115300647.png)

参考代码，然后拷贝到对应的标签中

views\Home.vue

```vue
<template>
  <el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">

              <el-card class="box-card">
                <div class="user">
                  <img src="../assets/andun.jpg" alt="">
                  <div class="userinfo">
                    <p class="name">Admin</p>
                    <p class="access">超级管理员</p>
                  </div>
                </div>
                <div class="login-info">
                  <p> 上次登录时间: <span>2022-12-21</span></p>
                  <p> 上次登录地点: <span>北京</span></p>
                </div>
              </el-card>

              <el-card style="margin-top: 20px ; height: 460px;">
                  <el-table :data="tableData"  style="width: auto">
                  <el-table-column prop="name" label="课程">
                  </el-table-column>
                  <el-table-column prop="todayBuy" label="今日购买">
                  </el-table-column>
                  <el-table-column prop="monthBuy" label="本月购买">
                  </el-table-column>
                  <el-table-column prop="totalBuy" label="总购买">
                  </el-table-column>
                </el-table>
              </el-card>
        </div>
      </el-col>
       
      <el-col :span="18">
        <div class="grid-content bg-purple-light">
          right
        </div>
      </el-col>
    </el-row>
  </el-row>
</template>
<style  lang="less" scoped>
.login-info {

  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;

    .span {
      color: #666666;
      margin-left: 60px;
    }
  }
}

.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;

  }

  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .access {
      color: #999999;
    }
  }
.table-show {
   margin-top: 20px;
   height: 460px;
}
.el-card__body{
  margin-top: 20px;
}

}
</style>

<script>

export default {
  data() {
    return {
      tableData: [
      {
	name: 'oppo',
	todayBuy: 100,
	monthBuy: 300,
	totalBuy: 800,
	},
	{
	name: 'vivo',
	todayBuy: 100,
	monthBuy: 300,
	totalBuy: 800,
	},
    {
	name: 'apple',
	todayBuy: 100,
	monthBuy: 300,
	totalBuy: 400,
	},
    {
	name: 'huawei',
	todayBuy: 130,
	monthBuy: 230,
	totalBuy: 900,
	}
    ]
    }
  }
}
</script>
```



实现右边第一部分的功能

右边部分： 补录



![image-20230314004125245](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230314004125245.png)



D:\developer\golang\src\YateOps\my-app\src\views\Home.vue

```vue
      <el-col :span="16">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex'}"> 
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"> </i>
            <div class="detail"> 
              <p class="price">¥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
      </el-col>
```





增加样式:

css样式部分: D:\developer\golang\src\YateOps\my-app\src\views\Home.vue

```
//右边部分

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  .icon {
    width: 80px; 
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
   }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    .price{
      font-size: 30px ; 
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc{
      font-size: 14px; 
      color: #999;
      text-align: center;
    }
  } 

  .el-card {
  width: 32%;
  height: 146px ;
  margin-bottom: 20px;
  
}
}
```



数据部分:  D:\developer\golang\src\YateOps\my-app\src\views\Home.vue

```vue
//右边部分

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  .icon {
    width: 80px; 
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
   }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    .price{
      font-size: 30px ; 
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc{
      font-size: 14px; 
      color: #999;
      text-align: center;
    }
  } 

  .el-card {
  width: 32%;
  height: 146px ;
  margin-bottom: 20px;
  
}
}
```



访问样式： 

![image-20230314134406535](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230314134406535.png)





#### 7、axios 



```
D:\developer\golang\src\YateOps\my-app>npm install axios
```



中文文档： http://axios-js.com/zh-cn/docs/index.html

![image-20230314140739884](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230314140739884.png)



D:\developer\golang\src\YateOps\my-app\src\utils\request.js

```vue
import axios from 'axios'

const http = axios.create({
    //通用请求的地址前缀
    baseURL: '/api',
    timeout: 1000, //超时时间
})

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
  
//   });

export default http
```





D:\developer\golang\src\YateOps\my-app\src\api\index.js

```
import http from '../utils/request'


export const getData = () => {
   return http.get('/home/getData')
}
```



D:\developer\golang\src\YateOps\my-app\src\views\Home.vue



![image-20230314172932044](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230314172932044.png)



发送异步请求, 显示成功



<img src="https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230314172705979.png" alt="image-20230314172705979"  />



#### 8、Mock数模拟实战

##### 8.1、初期环境部署对接调试

  实现数据接口的准备

https://github.com/nuysoft/Mock/wiki/Mock.mock()

用来前端不依赖后端的情况下，模拟后端数据接口的一个工具

安装

```
npm  i mockjs
```





D:\developer\golang\src\YateOps\my-app\src\api\mock.js

```
import mock  from 'mockjs'
mock.mock(
    '/api/home/getData', 
    'get',  //默认请求为get
     function(){
        //拦截请求后处理
        console.log(
        "拦截到了",
        )
        return 'hellworld'
    }
)
```



D:\developer\golang\src\YateOps\my-app\src\main.js

```
import "./api/mock"
```



访问刷新显示

![image-20230314234636588](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230314234636588.png)







##### 8.2 创建数据

在api下创建mockServeData目录 ，然后创建两个文件 home.js和 permission.js文件



D:\developer\golang\src\YateOps\my-app\src\api\mockServeData\home.js

```vue

import Mock from 'mockjs'


//图标数据
let List = []

export default {  // export default 是暴露的一个对象
    getStatisticalData: () => {  //这个是定义的数据的方法
        //mock.Random.float  产生随机数100到8000之间，保留小数
        for (let i =0 ; i< 7 ; i++) {
            List.push(
                Mock.mock({
                    苹果:   Mock.Random.float(100,80000,0,0),
                    vivo:  Mock.Random.float(100,80000,0,0),
                    oppo:  Mock.Random.float(100,80000,0,0),
                    魅族:  Mock.Random.float(100,80000,0,0),
                    三星:  Mock.Random.float(100,80000,0,0),
                    小米:  Mock.Random.float(100,80000,0,0),
                })
            )
        }

    return {
        code: 20000,
        data: {
            videoData: [
                {
                    name: '小米',
                    value: 29999
                },
                {
                    name: '苹果',
                    value: 29999
                },
                {
                    name: 'vivo',
                    value: 29999
                },
                {
                    name: 'oppo',
                    value: 29999
                }, 
                {
                    name: '魅族',
                    value: 29999
                }, 
                {
                    name: '三星',
                    value: 29999
                }                           
            ],
            userData: [
                {
                    data: '周一',
                    new: '5',
                    active: 200
                },
                {
                    data: '周二',
                    new: '5',
                    active: 200
                },
                {
                    data: '周三',
                    new: '5',
                    active: 200
                },
                {
                    data: '周四',
                    new: '5',
                    active: 200
                },
                {
                    data: '周五',
                    new: '5',
                    active: 200
                },
                {
                    data: '周六',
                    new: '5',
                    active: 200
                },
                {
                    data: '周日',
                    new: '5',
                    active: 200
                },
            ],
            orderData: {
                data: ['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
                data: List
            },
            tableData: [
                    {
                      name: 'oppo',
                      todayBuy: 100,
                      monthBuy: 300,
                      totalBuy: 800,
                    },
                    {
                      name: 'vivo',
                      todayBuy: 100,
                      monthBuy: 300,
                      totalBuy: 800,
                    },
                    {
                      name: 'apple',
                      todayBuy: 100,
                      monthBuy: 300,
                      totalBuy: 400,
                    },
                    {
                      name: 'huawei',
                      todayBuy: 130,
                      monthBuy: 230,
                      totalBuy: 900,
                    }
            ]
        }
     }    
  }
}
```



D:\developer\golang\src\YateOps\my-app\src\api\mock.js

```vue
import mock  from 'mockjs'

import mockApi from './mockServeData/home'  //新增此处

// mock.mock(
//     '/api/home/getData', 
//     'get',  //默认请求为get
//      function(){
//         //拦截请求后处理
//         console.log(
//         "拦截到了",
//         )
//         return 'hellworld'
//     }
// )

mock.mock('/api/home/getData', mockApi.getStatisticalData) //调用对象中的方法
```



然后在浏览器访问，查看是否获取到数据，明显已经拿到了数据

![image-20230315001654240](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230315001654240.png)



orderData 表示折线图的数据



参考修改左边的数据为动态数据

D:\developer\golang\src\YateOps\my-app\src\views\Home.vue

![image-20230315004135920](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230315004135920.png)





增加下面有间隙，需要修改代码如下

![image-20230315005339515](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230315005339515.png)



D:\developer\golang\src\YateOps\my-app\src\views\Home.vue



![image-20230315005411472](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230315005411472.png)





![image-20230315005520192](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230315005520192.png)



##### 8.3 折线图，柱状图，圆饼图









## 问题记录

图片动态传递

getImgSrc('icon2') 这个里面传递的就是实参

```htm
<template>
  <div>
    <img :src="getImgSrc('icon2')" alt="Icon">
  </div>
</template>

<script> 
//图片动态更换
export default {
    setup() {
        const getImgSrc = (imageName) => {
        //console.log('hello',(import.meta.url).href);
        //console.log(new URL(`../assets/images/${icon}.jpg`,import.meta.url));
        return new URL(`../assets/images/${imageName}.jpg`,import.meta.url).href;
    };
    return {
        getImgSrc
    }
    }
}

</script>
```





## Mockjs  

拦截请求，通过mock来返回数据

在开发初期阶段，后端开发先出接口文档



安装

```
npm install mockjs -S 
```

创建文档home.js,先创建文件夹 api\mockData

![image-20231115001143381](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231115001143381.png)





### 本地mock的使用

操作方式

![image-20231115004000457](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231115004000457.png)









调用



![image-20231115004048753](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231115004048753.png)





![image-20231115004135640](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231115004135640.png)







Home.vue代码修改

```html
<script>
import axios from "axios"
import { defineComponent, onMounted, ref} from 'vue';
export default defineComponent({
    setup() {
        let tableData = ref([]);  //这里定义，需要研究
        // const tableData = [
        //     {
        //         name: "oppo",
        //         todayBuy: 500,
        //         monthDay: 3500,
        //         totalDay: 22000
        //     },
        //     {
        //         name: "vivo",
        //         todayBuy: 510,
        //         monthDay: 3300,
        //         totalDay: 27000
        //     }

        // ];
        const tableLabel ={
            name: '课程',
            todayBuy: '今日购买',
            monthDay: '本月购买',
            totalDay: '总购买'
            
        }
        const getTableList = async () => { 
            await axios.get("/home/getData").then((res) =>{
                console.log(res)
                tableData.value = res.data.data.tableData
            })
        }
        onMounted(() =>{
            getTableList()
        })
        return {
            tableData,
            tableLabel

        }
    }
})

</script>
```





### 线上mock的使用

登录下面的在线网址，进行操作

fastmock.site 

















