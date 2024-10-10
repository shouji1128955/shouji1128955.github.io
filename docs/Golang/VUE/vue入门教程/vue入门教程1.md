学习课件 

https://www.bilibili.com/cheese/play/ep43199?csource=common_hp_favorite_null&spm_id_from=333.999.0.0

https://www.bilibili.com/video/BV1Th411G7iN?p=1&vd_source=7434cfee3c0d52d31452f06dad54119f



## vue语法体验





NVM USE NODE_VERSION

nvm use 16.14.0 可以切换多个nvm版本



### vue的基本结构

先写一个简单的hello,world来看下结构,当前主要分为三个部分组成

1.首先created是最先执行的，它是一个生命周期，也叫钩子函数，用于页面还没加载完毕时发送请求，初始化data里的值。

2.data一般用来存放vue中的变量，通过return将数据返回到created中

3.methods用来写相关模块的函数以及功能的实现，格式为async+方法名，通常通过发送请求请求到后台数据

4.computed是界于created和mounted之间发生的，此时正是页面进行渲染的时候

5.mounted是加载完dom操作后才会触发，它和created一样只会执行一次，此时页面已经渲染完成，通常用于存放需要渲染的内容



下面是一个电简单的自加计算器



![image-20231031223432263](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231031223432263.png)



按照传统的做法就是

```txt
document.getElementById('root').innerHTML(3)  //这种是手动操作的一种方式
```

之前我们是面向Dom编程，现在是面向数据编程

总结： 

数据定义： 通过data()来实现

template： 指的就是在root节点下需要渲染什么样的内容,具体是由mount中的参数来决定

mounted(): 表示页面加载完成后自动执行的命令





思考的一些问题：

我们知道一般vue使用[ajax](https://so.csdn.net/so/search?q=ajax&spm=1001.2101.3001.7020)或者axios来获取后端数据，并且好像放在created里面和mounted里面都可以获取数据并正确渲染。那么放在created里面和mounted里面有什么区别呢？

参考： 

[javascript - Vue.nextTick 的原理和用途 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000012861862)

简单来说：如果你修改了某个dom中的数据，视图并不会立即更新。Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。，此时获取关于此dom的一切操作都是无效的，怎么办？在nextTick的回调中执行即可。$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM。









js字符串反转的几种方式

1. 第一种：

**字符串转数组，反转数组，数组转字符串。**

- split(“”)：根据空字符串拆分数组
- reverse()：数组反转元素位置
- join(“”)：数组转回字符串,且不带分隔符



```shell
let str = "hello world";
let newStr = str.split("").reverse().join("");
console.log(newStr);
```

2. 第二种：

**使用遍历以及api `charAt()`**

```txt
let str = "hello world";
let newStr = "";
for(let i=0;i<i.length;i++){
	let s = str.charAt(str.length-i-1);
	newStr += s;
}
console.log(newStr);
```



### 2.v-on编写字符串反转



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./js/vue.global.js"></script>
</head>
<body>
    <div id="root"></div>

</body>

<script>
   Vue.createApp({

    data(){
        return {
          content: 'hello, world'  //为什么这里定义的数据在通过console来打印不显示?
        }
    }
    ,

    // mounted(){
    // setInterval(() =>{
    //       console.log
    
    // }, 1000)
   //  },

   methods:  {
     handleBtnClick(){
        
      let newStr =   this.content.split("").reverse().join("")
      //说明: split("")意思就是按照空字符串进行打散，然后反转然后再聚合为字符串不带分隔符
      /*
split(“”)：根据空字符串拆分数组
reverse()：数组反转元素位置
join(“”)：数组转回字符串,且不带分隔符
      
      
      
      */
          console.log(newStr)
           this.content = newStr
    }
   },

   template: `
       <div>
        {{ content }}
       <button v-on:click="handleBtnClick"> 反转 </button>

       </div>
       `

   }).mount('#root')


  
</script>
</html>
```



v-on:click 用于绑定事件，相当于html中的on-click





### 3.show-内容展示或者隐藏



```txt
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./js/vue.global.js"></script>
</head>
<body>
    <div id="root"></div>

</body>

<script>
   Vue.createApp({

    data(){
        return {
          show: true
        }
    }
    ,

    // mounted(){
    // setInterval(() =>{
    //       console.log
    
    // }, 1000)
   //  },

   methods:  {
     handleBtnClick(){

    /*
    写法1
      if (this.show == true) {
        console.log(this.show)
        this.show = false
       
       } else {
        console.log(this.show)
         this.show = true
       }
    */
     //写法2
     this.show = !this.show


    }
   },

   template: `
       <div>
        <span v-if="show"> hello, world !</span>
       <button v-on:click="handleBtnClick"> 展示/隐藏 </button>

       </div>
       `

   }).mount('#root')


  
</script>
</html>
```



总结：  

通过 true或者false来控制span标签是否展示



补充: 

this.show = !this.show  用于true跟false之间的互换



## vue基础语法

### todolist和v-model双向绑定







```txt

<body>
    <div id="root"></div>

</body>

<script>
   Vue.createApp({

    data(){
        return {
           //list: ['hello','world','dell','lee']
           list: [],
           inputValue: ''
        }
    }
    ,
    methods: {
      handleAddClick(){
        this.list.push(this.inputValue)  //把值进行赋值增加到list[]中即可 
      }
    },

   template: `
       <div>
        <input v-model="inputValue"/>   <!--v-model中的inputValue跟data中的这个值做了双向绑定----->
        <button v-on:click="handleAddClick">增加</button>
       </div>
       <div>
        <ul>
        <!---<li v-for="item of list"> {{item}}</li>--->
        <li v-for="(item,index) of list"> {{item}}  {{index}}</li>
        </ul>
       </div>
       `

   }).mount('#root')


  
</script>
```



todolist:  用于循环一个数组列表

可以使用

```txt
v-for="item of list" 
或者
v-for="(item,index) of list">  这种可以携带索引
```



v-model： 用于实现对template中的元素跟data中的数据进行绑定，输入框中输入的数据通过函数写入到data中的list表中







一个标签上的属性如果想要跟data中的数据进行绑定，需要用到的v-bind这个属性



### v-bind属性

![image-20231101114607453](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101114607453.png)

代码参考

```txt
<script>
   Vue.createApp({

    data(){
        return {
           //list: ['hello','world','dell','lee']
           list: [],
           inputValue: ''
        }
    }
    ,
    methods: {
      handleAddClick(){
        this.list.push(this.inputValue)  //把值进行赋值增加到list[]中即可 
      }
    },

   template: `
       <div>
        <input v-model="inputValue"/>   <!--v-model中的inputValue跟data中的这个值做了双向绑定----->
        <button v-on:click="handleAddClick" v-bind:title="inputValue">增加</button>
       </div>
       <div>
        <ul>
        <!---<li v-for="item of list"> {{item}}</li>--->
        <li v-for="(item,index) of list"> {{item}}  {{index}}</li>
        </ul>
       </div>
       `

   }).mount('#root')
```



### 组件的概念1

页面上的一部分都可以看作是一部分，页面的所有的文件写到一个文件中很难维护，所哟对列表项都可以拆分为组件

每一个最小的组件就是一个Dom的一个标签

就像下面这个列表就可以拆分为一个组件出来

![image-20231101120943109](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101120943109.png)







如何对下面的代码进行拆分呢

```txt
<body>
    <div id="root"></div>

</body>

<script>
   Vue.createApp({

    data(){
        return {
           //list: ['hello','world','dell','lee']
           list: [],
           inputValue: ''
        }
    }
    ,
    methods: {
      handleAddClick(){
        this.list.push(this.inputValue)  //把值进行赋值增加到list[]中即可 
      }
    },

   template: `
       <div>
        <input v-model="inputValue"/>   <!--v-model中的inputValue跟data中的这个值做了双向绑定----->
        <button v-on:click="handleAddClick" v-bind:title="inputValue">增加</button>
       </div>
       <div>
        <ul>
        <!---<li v-for="item of list"> {{item}}</li>--->
        <li v-for="(item,index) of list"> 
          <div>
           <span>{{index}} </span>
           <span> --- </span>
           <span> {{item}} </span>
            </div>
        </ul>
       </div>
       `

   }).mount('#root')


  
</script>
```



把下面的部分需要单独去维护

```txt
         <div>
           <span>{{index}} </span>
           <span> --- </span>
           <span> {{item}} </span>
            </div>
```

拆分后的参考

```txt
<body>
    <div id="root"></div>

</body>

<script>
   const  App =  Vue.createApp({

    data(){
        return {
           //list: ['hello','world','dell','lee']
           list: [],
           inputValue: ''
        }
    }
    ,
    methods: {
      handleAddClick(){
        this.list.push(this.inputValue)  //把值进行赋值增加到list[]中即可 
      }
    },

   template: `
       <div>
        <input v-model="inputValue"/>   <!--v-model中的inputValue跟data中的这个值做了双向绑定----->
        <button v-on:click="handleAddClick" v-bind:title="inputValue">增加</button>
       </div>
       <div>
        <ul>
        <todo-item v-for="(item,index) of list" v-bind:content="item" v-bind:index="index"> 
        </ul>
       </div>
       `

   })

   App.component('todo-item',{
    props: ['content','index'],  //在这里用于接收传递过来的两个值
    // data() {
    //     return {
    //       item: 'hello qiang'
    //     }
    // },
    template: `<div>
      <li>
        {{ content }} -- {{ index }}
      </li>
      </div>`
   })

   App.mount('#root')  //最后挂在实例
  
</script>
```



初始化一个vue实例出来

 const  App =  Vue.createApp( xxx

 App.component  用于注册组件到vue中

 App.mount('#root')  //最后挂在实例







### 组件的概念2



代码如下: 

```html
<body>
    <div id="root"></div>

</body>

<script>
   const  App =  Vue.createApp({

    data(){
        return {
          message: 'hello, world'
        }
    }
    ,

   template: '<div>{{message}}</div>'

   })

   
  const vm = App.mount('#root')
</script>
</html>
```



vm 的使用：

如何操作vue组件的数据属性，通过vm.$data 这种方式来访问，必须需要添加$





![image-20231101130854854](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101130854854.png)





总结: 

createApp表示创建一个Vue应用,存储到app变量中

传入参数的表示，这个应用最外层的组件，应该如何展示

mvvm模式，设计模式. m -> model数据(data)， v-> view视图，vm-> viewMode视图数据连接层(vue的组件来操作)

vm代表的就是vue应用的根组件







### vue生命周期函数





![](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-24.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./js/vue.global.js"></script>
</head>
<body>
    <div id="root"></div>

</body>

<script>
   const  App =  Vue.createApp({
    data(){
        return {
          message: 'hello, world'
        }
    }
    ,
    //在实例生成之前自动执行的函数
    beforeCreate(){
      console.log('beforeCreate')
    },

    //在实例生成之后回自动执行的函数
    created(){
      console.log('created')
    },
    
    //在组件内被渲染到页面之前自动执行的函数
    beforeMount(){
      console.log(document.getElementById('root').innerHTML,'beforeMount')
    },
    //在组件内容被渲染到页面之后自动执行的函数
    mounted(){
      console.log(document.getElementById('root').innerHTML,'mounted')
    },   
    //当数据发生变化时会立即自动执行的函数
    beforeUpdate(){
      console.log(document.getElementById('root').innerHTML,'beforeUpdate')
    }, 
   
    //当数据发生变化，页面重新渲染后，会自动执行的函数
      updated(){
      console.log(document.getElementById('root').innerHTML,'updated')
    }, 
    //当vue应用失效时，自动执行的函数
   beforeUnmount(){
      console.log(document.getElementById('root').innerHTML,'beforeUnmount')
    }, 
    //当vue应用失效时,且dom完全销毁之后，自动执行的函数
    unmounted(){
      console.log(document.getElementById('root').innerHTML,'unmounted')
    },        
   template: '<div>{{message}}</div>'

   })

   
  const vm = App.mount('#root')
</script>
</html>
```



注意
![image-20231101132719012](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101132719012.png)



在这张图中，在判断时，如果template不存在时，则在body中寻找匹配的模板



```html
<body>
    <div id="root">
      <div>{{message}}</div>
    </div>

</body>
```





v-html语法



```html
<body>
    <div id="root">


      <div>{{message}}</div>
    </div>

</body>

<script>
   const  App =  Vue.createApp({
    data(){
        return {
          message: '<strong> hello, world </strong>'
        }
    }
    ,    
   template: '<div>{{message}}</div>'

   })

   
  const vm = App.mount('#root')
</script>
```

但是这样不会展示加粗的效果，浏览器展示 <strong> hello, world </strong> 这样的效果

如何实现浏览器能够识别加粗呢

```html
<script>
   const  App =  Vue.createApp({
    data(){
        return {
          message: '<strong> hello, world </strong>'
        }
    }
    ,    
   template: '<div v-html="message">{{message}}</div>'

   })

   
  const vm = App.mount('#root')
</script>
```







### 模板语法一些细节

```txt
<script>
   const  App =  Vue.createApp({
    data(){
        return {
          message: '<strong> hello, world </strong>',
          disabled: true,
          name: 'title',
          event: 'mouseenter'  //鼠标划入的时候进行展示
        }
    }
    ,    
  methods: {
    handleClick(){
     alert('handleClick')
    }
  },
   template: `
   <div>
    <div v-html="message">
      {{message}}
    </div>
    <div>
      <input v-bind:disabled="disabled"/>   //控制输出的一些状态
    </div>
    <br>
    <div @[event]="handleClick" :[name]="message">
      {{message}}
      </div>


   <!----修饰符---->
   <br>
   <br>
   <div>
    <form action="https://www.baiduc.com" @click.prevent="handleClick">
       <button type="submit"> 提交 </button>
    </form>
  </div>

  </div>`

   })

   
  const vm = App.mount('#root')
</script>
```





v-on --> 简写为@

v-bind -> 简写为:



还可以通过 @[event]（v-on），:[name] （v-bind） 这种方式，通过data中定义的变量来获取。



修饰符： 比如提交跳转后，我们不让他进行调整，可以使用修饰符 @click.prevent ，通过调用函数实现修饰





### data,methods属性

data:

我们前面学习了基础的一些属性，那么了解了data的一些基本用法，在vue中是通过数据编程的一种思想,所以除了`return` 返回数据外，我们也可以修改data的属性



![image-20231101154051766](http://minio.zlqit.com:80/file/202311011540408.png)





通过vm.$data 来访问和修改



methods:

也可以在`{{}}`内部使用方法

```html
   template: `
   <div >
    {{formatString(message)}}
  </div>`
```





计算属性和方法的区别：

比如，当内容发生变更时，计算属性和方法重新渲染网页是有区别的



1. 计算属性 computed 定义如下：

```html
  computed: {
    total(){
      // return Date.now() + this.count;  
      return Date.now()
    }
  }


  template: `
   <div >
    {{formatString(message)}}
    {{total}}
  </div>`
```


```shell
当发生下列操作时，页面的{{formatString(message)}} 会发生改变，但是total获取到的时间戳没有发生改变这个是为什么呢?
vm.$data.message="change string 2"
```


2. 定义方法,然后通过方法的方式进行同样的操作  

```html
  methods: {
    getTotal(){
      return Data.now();
    }

  template: `
   <div >
    {{formatString(message)}}
    {{getTotal}}
  </div>`
```

vm.$data.message="change string 2"

得到的结果就是，获取到的时间戳发生改变。





总结： 

当计算属性依赖的内容发生变更时，才会重新执行计算

定义方法，只要页面重新渲染，才会重新计算



### watch监听器



监听当一个值发生改变时，然后进行重新渲染



方式1 

```html
  const App = Vue.createApp({
    data() {
      return {
        message: '<strong> hello, world </strong>',
        count: 2,
        price: 5,
        newTotal: 10 ,
      }
    },
    watch: {
          //price 发生变化时，函数会执行
          price(current, oldvalue) { //其中price表示监听的变量为5
            console.log('正在打印')
            console.log(current,oldvalue)
            this.newTotal = current * this.count
          }
    },

    template: `
   <div >
    {{newTotal}}
  </div>`
```

其中price表示监听的变量为5，这个值发生改变的时候，在console中执行vm.$data.price=x,然后将进行重新计算，并且将重新计算后的结构同步到newTotal中





方式2 通过计算属性computed来完成，同样的，因为当在console中执行vm.$data.price=x时， computed中的total方法也会重新计算，将结果输入到 newTotal中，页面中也会进行重现加载展示新值

有个问题就是主要缓存问题，比如单纯如何watch时间戳，没有依赖其他值的时候，这个时候不会执行页面重现渲染

```html
  const App = Vue.createApp({
    data() {
      return {
        message: '<strong> hello, world </strong>',
        count: 2,
        price: 5,
        newTotal: 10 ,
      }
    },
computed: {
      total() {
        // return Date.now() + this.count;  //时间计算问题-当计算属性依赖的内容发生变更时，才会重新执行计算
        // return Date.now()  
         return  this.count * this.price  //也可以通过这种方式来监听
      }
    },


    template: `
   <div >
    {{newTotal}}
  </div>`

```



总结:

1.computed和methmod都能实现的一个功能，建议使用computed,因为有缓存

2.computed和watch 都能实现的功能，建议使用computed因为更加简洁



### 样式绑定语法

需要定义

```html
<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
```



定义颜色可以通过字符串变量，对象，数组来实现，但是这里也可以使用原生的css来定义

颜色当然可以继承组件的

```html
<script>
  const App = Vue.createApp({
    data() {
      return {
        classString: 'red',
        classObject: {red: false, green: true},
        classArray: ['red','green',{brown: false}],
      }
    },
 
    template: `<div :class="classArray">
       hello, world 
      <demo />   <!----//demo是被调用的，我们称之为子组件--->
      </div>`
,

  })

    //注册一个组件
    App.component('demo',{
      template: `
      <!---div style="color: red"--->
      <div :class="$attrs.class">  <!---跟父级颜色一样--->
        one
      </div>
      <div class="red">
        two
      </div>     
      `
    })

  const vm = App.mount('#root')
</script>
```



注意: 

```html
<div :class="$attrs.class">  
```



### if-else条件判断



详情如下：

```html
<script>
  const App = Vue.createApp({
    data() {
      return {
        show: false,
        conditionOne: false,
        conditionTwo: true,
      }
    },

    //如果是false，展示if if if if，如果是v-else-if 则展示 elseif，否则展示else
 
    template: `<div>

           <div  v-if="show">hello,world</div>



           <div  v-if="conditionOne">if if if if</div>
           <div  v-else-if="conditionTwo">elseif</div>
           <div v-else>else </div>

      </div>`

,

  })

const vm = App.mount('#root')
```



在上面的展示中，我们也可以通过v-if 或者 v-else-if 这样的组合条件来实现逻辑的选择





### 列表循环



注意，在列表循环的时候，vue为了提升性能，对于之前列表中存在的数据就不需要重新渲染，只需要在index新增的数据进行渲染

可以使用一个 :key="item"

![image-20231101205436378](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101205436378.png)







示例代码如下

```html
<script>
  const App = Vue.createApp({
    data() {
      return {
         listArray: ['ilync','22','teacher'],
         listobject: {
            name: 'ilync',
            age: '28',
            email: 'ilync@zlqit.cn'
         }
      }
    },
  

    methods: {
      handerClick(){
        //使用数组的变更函数 push,shift,unshift, splice,sort,reverse
        //this.listArray.push('hello')    //从最后增加
        //this.listArray.pop()            //从后往前删除
        //this.listArray.shift()          //从前往后删
        //this.listArray.unshift('hello')   //从前往后增加
        //this.listArray.reverse()            //最前面和最后一个互换
      }
    },
    //如果是false，展示if if if if，否则展示else
 
    template: `<div>
          <h3>循环list表</h3>
              <div v-for="(item,index) in listArray" :key="item"> 
            {{ item }} -- {{ index }}   <!---list循环----->
            </div>

            <button v-on:click="handerClick">增加</button>


           <br>
           <h3>循环object表</h3>
           <div v-for="(value,key,index) in listobject"> {{value}} --- {{key}} -- {{index}} </div>

           <br> 

      </div>`
,
  })

  const vm = App.mount('#root')
```



对于这些方法需要研究

        //this.listArray.push('hello')    //从最后增加
        //this.listArray.pop()            //从后往前删除
        //this.listArray.shift()          //从前往后删
        //this.listArray.unshift('hello')   //从前往后增加
        //this.listArray.reverse()            //最前面和最后一个互换




v-for跟v-if在同一个dev中无法同时兼容，所以可以在v-for的dev下在创建一个dev,然后在子的dev中定义，但是这样引来一个问题，就是多了一次dev,本身就是应该在一层显示，为了解决这个问题。这里用到了template占位符，来解决这个问题





![image-20231101212708632](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101212708632.png)

部分代码参考

```html
<script>
  const App = Vue.createApp({
    data() {
      return {
         listArray: ['ilync','22','teacher'],
         listobject: {
            name: 'ilync',
            age: '28',
            email: 'ilync@zlqit.cn',
         }
      }
    },
  
    methods: {
      handerClick(){
        //使用数组的变更函数 push,shift,unshift, splice,sort,reverse
        //this.listArray.push('hello')    //从最后增加
        //this.listArray.pop()            //从后往前删除
        //this.listArray.shift()          //从前往后删
        //this.listArray.unshift('hello')   //从前往后增加
        //this.listArray.reverse()            //最前面和最后一个互换
         
        //1. 直接替换数组
        //this.listArray = ['byte','world']
        

        //2.更新数组的内容
       // this.listArray[1] = 'hello'

      },

      hanleAddBtnClick(){
        //3.直接添加对象的内容，也可以自动的展示出来---此处有问题，我验证没有通过
         this.listObject.age="20";
         this.listObject.address="甘肃";
      }
    },
    //如果是false，展示if if if if，否则展示else
 
    template: `<div>

      <h3>循环list表</h3>
              <div v-for="(item,index) in listArray" :key="item"> 
            {{ item }} -- {{ index }}   <!---list循环----->
            </div>

            <button v-on:click="handerClick">增加</button>

           <br>
           <h3>循环object表</h3>
           <div v-for="(value,key,index) in listobject" :key="index"> {{value}} --- {{key}} </div>
           <button @click="hanleAddBtnClick">新增</button>
           <br> 

      </div>`
,
  })

  const vm = App.mount('#root')
```





### 事件绑定

同时传递变量和event方法

实例代码

```html
    data() {
      return {
              counter: 0
         }
      },
  
    methods: {
      handleBtnClick(num, event){
        console.log(event);
        this.counter += num;
      }
    },
    //如果是false，展示if if if if，否则展示else
 
    template: `<div>
          {{counter}}
          <button @click="handleBtnClick(2,$event)"> button</button>
          </div>`
```



![image-20231101215528551](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101215528551.png)









click传递多个方法

```html
    methods: {
      handleBtnClick(num, event){
        console.log(event);
        this.counter += num;
        alert("hellow01")
      },


      handleBtnClick2(num, event){
        console.log(event);
        this.counter += num;
        alert("hellow02")
      }
    },
    //如果是false，展示if if if if，否则展示else
 
    template: `<div>
          {{counter}}
          <button @click="handleBtnClick(2,$event),handleBtnClick2(4,$event)"> button</button>
          </div>`
```



重点在于： @click="handleBtnClick(2,$event),handleBtnClick2(4,$event)"



修饰符 -重要

```html
<script>
  const App = Vue.createApp({
    data() {
      return {
              counter: 0
         }
      },
  
    methods: {
      handleDivClick(){
        alert('div clicked')
      },
      handleBtinClick3(){
        this.counter += 1;
      }
    },
    //如果是false，展示if if if if，否则展示else
 
    template:  `<div>
          <!------
          {{counter}}
          <button @click="handleBtnClick(2,$event),handleBtnClick2(4,$event)"> button</button>
          ---------->

          <div @click="handleDivClick">
            {{counter}}
            <button @click="handleBtinClick3">button</button>
            </div>

          </div>` 
  });

  const vm = App.mount('#root')
</script>
```



因为有个连锁反应，在点击handleBtinClick3之后，会连带触发 handleDivClick ，所以解决这个问题，需要用到下面的代码

```txt
    template:  `<div>
          <!------
          {{counter}}
          <button @click="handleBtnClick(2,$event),handleBtnClick2(4,$event)"> button</button>
          ---------->

          <div @click.self="handleDivClick">
            {{counter}}
            <button @click="handleBtinClick3">button</button>
            </div>

          </div>` 
```



添加一个@click.self 就能解决这个问题，如果这个事件不是自己触发的，就不会执行，这个因为是button触发的。所以就不会在有连锁反应



![](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101215528552.gif)

常见的修饰符还有以下： 



事件修饰符:stop,prevent(阻止默认行为的),capture(绑定按照冒泡的方式),self,once(点击事件只执行一次),passive
按键修饰符:enter,tab,delete,esc,up,down,letft, right  --> 当按下键盘的时候做响应
鼠标修饰符:left,  right,  middle
精确修饰符:exact



案例： 当按下enter就提示信息

```html
    methods: {
      handleKeyDown(){
        alert("你按下了回车键")
      }
    },  

template:  `<div> 
           <br> 
          <h3> 按键修饰符</h3>
          <div> <input @keydown.enter="handleKeyDown"/> </div>
          </div>`  
```









### 表单中的双向绑定



**在输入框中是使用双向绑定**

```html
<script>
  const App = Vue.createApp({
    data() {
      return {
              message: 'hello'
         }
      },
  
    methods: {
    },
    //如果是false，展示if if if if，否则展示else
 
    template:  `<div>
          <div> {{message}} <input v-model="message"/> </div>
          </div>`
  });

  const vm = App.mount('#root')
```



**在textarea中使用双向绑定**

```html
    template:  `<div>
          <div> {{message}} <input v-model="message"/> </div>

          <br>
          <br>
          <h3> textarea中使用双向绑定</h3> 
          <textarea v-model="message">
          </div>`
  });
```



**在checkbox中使用**

有两种，第一种就是true或者false ,第二种就是通过数组的方式

![image-20231101223702621](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101223702621.png)

```htmml
     data() {
      return {
              message: false
         }
      },
 template:  `<div>
          <div> {{message}} <input v-model="message"/> </div>

          <br>
          <br>
          <h3> textarea中使用双向绑定</h3> 
          <textarea v-model="message"/>

          <br>
          <h3>checkbox用法</h3> 
          {{message}}
          jack  <input type=checkbox  v-model="message" value="jack" /> 
     
          </div>`
```



第二种

定义为一个数组

![image-20231101223802007](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101223802007.png)

```html
    data() {
      return {
              message: [] //定义
         }
      },
  
    methods: {
    },
    //如果是false，展示if if if if，否则展示else
 
    template:  `<div>
          <div> {{message}} <input v-model="message"/> </div>

          <br>
          <br>
          <h3> textarea中使用双向绑定</h3> 
          <textarea v-model="message"/>

          <br>
          <h3>checkbox用法</h3> 
          {{message}}
          jack  <input type=checkbox  v-model="message" value="jack" /> 
          dell  <input type=checkbox  v-model="message" value="dell" /> 
          lee   <input type=checkbox  v-model="message" value="lee" /> 
          </div>
```



radio中使用

由于radio只能单选，不像checkbox， 所以radio定义为一个字符串即可

![image-20231101224422904](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101224422904.png)



```html
const App = Vue.createApp({
    data() {
      return {
              message: ''
         }
      },
  
    methods: {
    },
    //如果是false，展示if if if if，否则展示else
 
    template:  `<div>
          <div> {{message}} <input v-model="message"/> </div>
          <h3>radio用法</h3> 
          {{message}}
          jack  <input type=radio v-model="message" value="jack" /> 
          dell  <input type=radio  v-model="message" value="dell" /> 
          lee   <input type=radio  v-model="message" value="lee" /> 
          </div>`

  });
```



select选择用法

![image-20231101225724208](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101225724208.png)





```html
    data() {
      return {
              message: '',
              messageSelect: ''
         }
      },

<div>
            {{messageSelect}}
          <select v-model="messageSelect">
           <option disabled value='' > 请选择内容 </option>
           <option value='A' > A </option>
           <option value='B' > B </option>
           <option value='C' > C </option>
          </select>
             </div>
```



select多选择





![image-20231101230334886](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101230334886.png)







```html
  const App = Vue.createApp({
    data() {
      return {
              message: '',
              messageSelect: '',
              messageSelectMany: [],
         }
      },
  
    methods: {
    },
    //如果是false，展示if if if if，否则展示else
 
    template:  `<div>

         <h3>select多选择用法</h3> 
         <div>
           {{messageSelectMany}}
         <select v-model="messageSelectMany" multiple>
          <option value='A' > A </option>
          <option value='B' > B </option>
          <option value='C' > C </option>
         </select>
            </div>             
          </div>` 
  });
```



第二种定义的方式

![image-20231101231558806](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101231558806.png)



代码如下

```html
  const App = Vue.createApp({
    data() {
      return {
              messout: [],
              message: '',
              messageSelect: '',
              messageSelectMany: [],
              messageSelectMany2: [{
                text: 'A',value: 'A',
              },
              { 
                text: 'B',value: 'B',
              },
              { 
                text: 'C',value: 'C',
              },
            ]
         }
      },
  
    methods: {
    },
    //如果是false，展示if if if if，否则展示else
 
    template:  `<div>  
            <h3>select多选择用法2</h3> 
         <div>
           {{messout}}
          <select v-model="messout" multiple>  
           <option v-for="item in messageSelectMany2" :value="item.value"> {{item.text}}</option>
         </select>
            </div>              
          </div>` 
  });

  const vm = App.mount('#root')
```





### checkbox的一些特性



当选中的时候，展示为hello, 当没有选中的时候显示world,不用true或者false来表示

```html
<script>
  const App = Vue.createApp({
    data() {
      return {
              message: 'world',
         }
      },
  
    methods: {
    },
    template:  `<div>
          <div>
             {{message}}

             <input type="checkbox" true-value="hello" false-value="world" v-model="message"/>  
          </div>
          </div>` 
  });

  const vm = App.mount('#root')
</script>
```



修饰符lazy

效果如下

![](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101231558807.gif)

```html
    template:  `<div>
          <div>
             {{message}}

             <input  true-value="hello" v-model.lazy="message"/>  
          </div>
          </div>` 
```



修饰符-number 

只能输入number ，并且以number的方式存储到message中



![image-20231101234111112](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101234111112.png)

使用的方法就是 v-model.number

```html
  const App = Vue.createApp({
    data() {
      return {
              message: 'world',
         }
      },
  
    methods: {
    },
    template:  `<div>
          <br>
          <div>
             {{ typeof message}}
             <input type="number" v-model.number="message"/>  
          </div>          
          </div>` 
  });

```



修饰符-trim 

功能，去除输入字符前后的空格，但是中间的不会

![image-20231101234616357](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231101234616357.png)



这个比较好用

使用方法v-model.trim

```html
          <br>
          <h3> 去除空格</h3>
          <div>
             {{message}}
             <input v-model.trim="message"/>  
          </div>              
          </div>` 
```









## 组件





### 全局和局部组件



把一个复杂的网页拆分成小的部分来进行维护，这些小的部分就是组件，最顶端那个就是根组件，组件是可以复用的，但是组件中变量等数据是隔离的







![image-20231102101137076](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231102101137076.png)





**全局组件**

定义： App.component ,引用 <counter />

```html
 template:  `<div>
          <div>
             {{message}} 
             <counter />
          </div>` 
  });

  App.component('counter',{
    data() {
      return {
        count: 1
      }
    },
    template: `<div @click="count +=1">{{count}}</div>`
  })

```





组件可以多次复用，但是数据是隔离的，当然，子组件也可以引用用其他全局组件，所以，即便不使用全局组件，也是挂载到vue中的，只要定义了全局组件，处处都可以使用，缺点就是影响性能。



```html
    template:  `<div>
          <div>
             {{message}} 
             <counter />
             <counter />
             <counter />
             <counter />
          </div>` 
```



![](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231102101137077.gif)





#### 注册组件的几种方式

个人总结

 全局注册-方式1 

这种是vue2的写法

可使用 `app.component(name, Component)`注册组件的方法，在此应用的任意组件的模板中使用

- `name`：注册的名字
- `Component`：需要注册的组件

```shell
// 在 main.js 中注册全局组件
import { createApp } from 'vue'
import App from './App.vue'
// 1：引入需要被注册的组件
import Login from './components/Login.vue' 

const app = createApp(App)

// 2：全局注册组件
app.component('MLogin', Login)

app.mount('#app')
```



```shell
// 我们使用注册的组件
<template>
    <h3>登录系统</h3>
    <!-- 使用全局注册的组件 -->
    <MLogin />
</template>
```



方式2

```shell
javascriptCopy code
// 定义一个 Vue 组件
const MyComponent = {
  template: '<div>Hello, World!</div>'
};

// 将组件注册到全局
Vue.component('my-component', MyComponent);

// 创建 Vue 实例
new Vue({
  el: '#app',
  template: '<my-component />'
});
```





方式3

![image-20231109092104696](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231109092104696.png)





### 局部注册

方式1 

局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用

> 在组合式 `API` 中的 `` 内，直接导入的组件就可以在模板中直接可用，无需注册。



```shell
<script setup>
// 1：引入需要注册的组件，无需注册
import LoginVue from './components/Login.vue';
</script>

<template>
    <h3>登录系统</h3>
    <!-- 2：使用全局注册的组件 -->
    <LoginVue />
</template>
```









**局部组件**

注册局部组件 const App = Vue.createApp

引用局部组件： 
```html
const App = Vue.createApp({
    components: {  helloworld2:  helloWorld },

<script>

    const  helloWorld = {
      template: `<div>xxxxxxxxxxxxxxxxxxxxxxxxxx</div>`
  };

  const App = Vue.createApp({
    components: {  helloworld2:  helloWorld },

    template:  `<div>
             <helloworld2 />
             <counter />
             <counter />
             <counter />
          </div>` 
  });

  App.component('counter',{
    data() {
      return {
        count: 1
      }
    },
    template: `<div @click="count +=1">{{count}}</div>`
  })

   
  const vm = App.mount('#root')
</script>
```





优缺点： 

组件的定义
组件具备复用性
全局组件,只要定义了,处处可以使用,性能不高,但是使用起来简单,名字建议小写字母单词,中间横线间隔
局部组件,定义了,要注册之后才能使用,性能比较高,,使用起来有些麻烦,建议大些字母开头,驼峰命名
局部组件使用时,要做一个名字和组件间的映射对象,你不写映射,Vue底层也会自动尝试帮你做映射



### 组件值传递

父组件传递过来的值如何在组件中调用呢,在使用组件test时，直接使用content给子组件传递一个变量，然后子组件拿到之后，在模板中进行渲染 ，这就是数据传递

```html
<script>

  const App = Vue.createApp({
    template:  `<div>
             <test content="hello,world" />
          </div>` 
  })

  App.component('test',{
    props: ['content'],
    template: `<div>{{content}}</div>`
  })


  const vm = App.mount('#root')
</script>
```



如何把整数类型进行传递呢，通过定义一个data数据来实现，这样就可以实现动态传参

```txt
 <test :content="num"/>
```


这里带 : 表示动态参数，动态的数据可以修改，比较灵活。 不带: 表示静态，以字符串的方式

```html
<script>

  const App = Vue.createApp({
    data (){
         return { num: 123 }
    },
    template:  `<div>
             <test :content="num"/>  
          </div>` 
  })

  App.component('test',{
    props: ['content'],
    template: `<div>{{typeof content}}  {{content}}</div>`
  })


  const vm = App.mount('#root')
</script>
```



值传递过程中的值类型校验, props: `{content: String}`,  表示检验传递过来的值是字符串，如果是整数，则提示类型对不上

```html
<script>

  const App = Vue.createApp({
    data (){
         return { num: 123 }
    },
    template:  `<div>
             <test :content="num"/>
          </div>` 
  })

  App.component('test',{
    // props: ['content'],
    props: {content: String},
    template: `<div>{{typeof content}}  {{content}}</div>`
  })


  const vm = App.mount('#root')
</script>
```



如果传递的值跟校验的值不相等，提示警告

![image-20231102112500526](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231102112500526.png)

支持的类型

string , Boolean , Array , `Object`, Function, Symbol



当然，还有其他的一些用法

```vue
props: {
  content:{ 
      type: Number,
      required: true //必须传递这个参数
      default: 789   //默认值
      validator: function(value) {
       return value < 1000; //小于1000的值
}
}},
//当然 default也可以写成一个函数
default: () => {
     return 123; 
}



```













### 单项数据流的理解



多个参数的取值



```html
//: content="params.content" :a="params.a"  :b="params.b"  :c="params.c" 
<script>

  const App = Vue.createApp({
    data (){
      //写法1
      // return {
      //    a: 123,
      //    b: 456,
      //    d: 789,
      // }
       return  {
        params: {
          content: 123345,
          a: 123,
          b: 234,
          c: 456
        }
       }

    },
    template:  `<div>
             <!---test :a="a" :b="b"/--->
             <test :="params" :content-abc="params.content"/>
          </div>` 
  })

  App.component('test',{
    // props: ['content'],
    props: ['contentAbc','a','b'],
    template: `<div>{{contentAbc}}-{{a}}-{{b}}</div>`
  })


  const vm = App.mount('#root')
</script>
```









因为vue标签在命名的时候不支持驼峰命名法，所以使用 '-' ，然后再使用的使用可以使用驼峰命名是支持的





![image-20231104114532693](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231104114532693.png)





###### 单项数据流的概念

子组件可以使用父组件传递过来的数据，但是绝对不能修改传递过来的数据

```html
<script>

  const App = Vue.createApp({
    data (){
       return  {
        num: 1,
       }

    },
    template:  `<div>
             <!---test :a="a" :b="b"/--->
             <counter :count="num" />
          </div>` 
  })


  App.component('counter',{
    // props: ['content'],
    props: ['count'],
 
    template: `<div @click="count += 1">{{count}}</div>`
  })

  const vm = App.mount('#root')
</script>
```



所以，修改父组件的变量是无法修改的，可以使用定义自己的变量来实现

```html

<script>

  const App = Vue.createApp({
    data ()
       return  {
        num: 1,
       }

    },
    template:  `<div>
             <!---test :a="a" :b="b"/--->
             <counter :count="num" />
          </div>` 
  })

  App.component('counter',{
    // props: ['content'],
    props: ['count'],
    data (){
      return {
        myCount: this.count,
      }
    },
    template: `<div @click="myCount += 1">{{myCount}}</div>`
  })

  const vm = App.mount('#root')
</script>
```





如果子组件真的可以修改父组件的变量，那其他组件调用这个父组件的时候，那这个数据如果被修改了，就会产生问题，所以避免数据产生的耦合和问题。





### Non-Props属性



这里主要演示，在父组件给子组件传递值的时候哪些可以使用，哪些可以不使用。



![image-20231104122151150](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231104122151150.png)





查看展示如下， div标签明显展示msg="hello"，如果不需要继承，则可以通过修改 inheritAttrs: false, 来设置



![image-20231104122121423](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231104122121423.png)





参考代码: 

```html

<script>

  const App = Vue.createApp({

    template:  `<div>
         
             <counter msg="hello" msgs="helloTow"/>
          </div>` 
  })


  App.component('counter',{
   // inheritAttrs: false,
    mounted() {
      console.log(this.$attrs.msg) //在js的一些方法中使用
    },      
    template: `
    <div :msg="$attrs.msg">Counter</div>     <!--取其中的某一个属性--->
    <div v-bind="$attrs">Counter</div> <!--全部的用在某个标签上--->
    <div :msg1="$attrs.msg1">Counter</div>    
    `
  })
  const vm = App.mount('#root')
</script>
```





![image-20231104122449164](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231104122449164.png)







### update:modelValue



作用域插槽



### 动态组件和异步组件

动态组件: 

根据数据的变化，结果compoent这个标签，来随时动态的切换组件的实现

下面的案例，实现两个组件的之间的自动切换

```html
<script>

  const App = Vue.createApp({
   data() {
     return {
      currentItem: 'input-item'
     }
   },
   methods: {
    handleClick() {
      if (this.currentItem == 'input-item') {
        this.currentItem = 'common-item';
      }else{
        this.currentItem = 'input-item';
      }
    },

   },
    template:  `<div>
          <keep-alive>
           <component :is=currentItem  />
          </keep-alive>
           <button @click="handleClick"> 切换<button/>
          </div>` 
  })


  App.component('input-item',{
    template: `
    <input />
    `
  })

  App.component('common-item',{
    template: `
    <div>hello, world </div>
    `
  })
  const vm = App.mount('#root')
</script>
```



 ```txt <keep-alive> ``` 的作用，就是实现能够保持之前输入的值还能够存在，还不是切换之后就不见了



![](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231104122449165.gif)



当前上面的展示，还可以使用另一种方式

```html
template: `
<input-item v-show="currentItem === 'input-item'" />
<common-item v-show="currentItem === 'common-item'" />
<button @click="handleClick">切换</button>
`
```





异步组件： 根据设定的延迟时间之后进行加载内容

日常开发中，同步组件可能使用的是最多的一些



### 基础语法补充

v-once 让某个元素标签只渲染一次,计算器案例

```html
<script>

  const App = Vue.createApp({
   data() {
     return {
      
      count: 1
     }
   },
   
    template:  `<div v-once @click="count += 1">
            
            {{count}}
          </div>` 
  })
  const vm = App.mount('#root')
</script>
```





**如果想操作Dom中的标签元素，只有在mounted能够获取到dom中的元素，因为mounted是加载完了所有的标签元素**



ref获取dom节点的引用



```html
   mounted(){
    console.log(this.$refs.count)
   },

template:  `<div ref='count' v-once @click="count += 1">
            
            {{count}}
          </div>` 
  })

```



![image-20231104234334053](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231104234334053.png)







第二种，调用方法

```html
<script>

  const App = Vue.createApp({
   data() {
     return {
      
      count: 1
     }
   },
   mounted(){
   // console.log(this.$refs.count)
   console.log(this.$refs.common.sayHello())
   },
   
    template:  `<div>
             <common-item ref="common"/>
          </div>` 
  })

  App.component('common-item',{
    methods: {
      sayHello() {
         alert('hello')
      }
    },
    template: `<div>hello,world</div>`
  })
  const vm = App.mount('#root')
</script>
```



```html this.$refs.common.sayHello() ``` 直接可以调用执行组件中定义的方法







provide 和 inject 

多层组件之间传递的时候，为了避免冗余，可以使用provide 和 inject 的方法，但是孙子组件中引用的值是第一次的，不是双向绑定，这个问题可以解决， 在后续文章会展开

常规方法就是下面这种一层一层传递下去。但是显得比较冗余

```html
<script>

  const App = Vue.createApp({
   data() {
     return {
      
      count: 1
     }
   },
   
    template:  `<div>
             <br>
             <h3>孙子组件之间的传递</h3>
             <child :count="count" />
          </div>` 
  })

  App.component('common-item',{
    methods: {
      sayHello() {
         alert('hello')
      }
    },
    template: `<div>hello,world</div>`
  })


  App.component('child',{
      props: ["count"],
      template: `<child-child :count="count"/>`
  })
  
  App.component('child-child',{
    props: ["count"],
    template: `<div>{{count}}</div>`
  })
  const vm = App.mount('#root')
</script>
```





使用provide 和 inject 



```html
<script>

  const App = Vue.createApp({
   data() {
     return {
      
      count: 1
     }
   },

   provide: {
    count: 1
   },

   mounted(){
   // console.log(this.$refs.count)
   console.log(this.$refs.common.sayHello())
   },
   
    template:  `<div>
             <common-item ref="common"/>
             <br>
             <h3>孙子组件之间的传递</h3>
             <child :count="count" />
          </div>` 
  })

  App.component('common-item',{
    methods: {
      sayHello() {
         alert('hello')
      }
    },
    template: `<div>hello,world</div>`
  })


  App.component('child',{
      props: ["count"],
      template: `<child-child :count="count"/>`
  })
  
  App.component('child-child',{
  //  props: ["count"],
    inject: ['count'],
    template: `<div>{{count}}</div>`
  })
  const vm = App.mount('#root')
```



## Composition API

### 问题笔记：

先看一个问题

```html
export default defineComponent({
     CommonHeader,
})

和下面的这种方式有什么区别
export default {
   components: {
    CommonHeader
   }
}

ChatGPT
这两种方式
```

这两种方式都用于注册子组件，但有一些区别：

1. Vue 3 Composition API 风格（`defineComponent`）：

   ```
   javascriptCopy codeexport default defineComponent({
       components: {
           CommonHeader
       }
   })
   ```

   这种方式是使用 Vue 3 的 Composition API 风格来定义组件。在这里，`components` 是一个选项，你将子组件（例如 `CommonHeader`）添加到该选项中。这是Vue 3中的一种推荐方式，特别是当你使用Composition API来构建组件时。

2. 传统 Vue 2 风格：

   ```
   javascriptCopy codeexport default {
       components: {
           CommonHeader
       }
   }
   ```

   这种方式是在传统的 Vue 2 风格中定义组件，其中 `components` 是Vue 2 组件选项的一部分。这是Vue 2中的一种方式。

实际上，Vue 3 的 `defineComponent` 方法是用来模拟 Vue 2 风格的组件选项，但它更适合与 Composition API 一起使用。两种方式都可以用来注册子组件，但如果你正在使用Vue 3和Composition API，推荐使用第一种方式，因为它更与Vue 3的新特性兼容。如果你在使用Vue 2，那么第二种方式是合适的。

总之，区别主要在于Vue版本和风格，以及是否使用Composition API。第一种方式更适合Vue 3和Composition API，而第二种方式更适合Vue 2。

第二种方式在vue中也是常用的









## VUE中的动画



### css过度与动画效果

  



## vue-cli



异步加载，只有当访问这个页面的时候在加载，如果访问首页，下面的login这种页面其实已经加载到浏览器本地了，所以加载了很多没有使用的页面，所以可以降低这种代码量，提上访问效率，可以使用异步加载的方式，提升访问速度。

![image-20231105162938621](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231105162938621.png)



### VueX

#### 1、VueX是什么

Vuex 是数据管理框架



个人疑问： 

Vuex中的数据是从哪里来？

Vuex 中的数据通常来自前端应用内部，而不是直接从外部源（如数据库）获取。Vuex 的核心概念是将应用的状态（或数据）集中管理，这些数据可以在应用的各个组件中共享和使用。

在一个典型的 Vue.js 应用中，你可以在组件中定义本地数据，然后通过 Vuex 来集中管理这些数据。这些本地数据可以是应用的状态、用户信息、购物车内容、设置选项等等。

Vuex 将这些数据存储在一个全局的状态树（state tree）中，这个状态树可以通过 Vuex 的 API 进行修改和访问。当你需要更新应用的状态时，你可以通过触发 mutations 来修改状态，然后在组件中使用 getters 来获取状态的值。

虽然 Vuex 的数据通常不直接来自数据库，但你可以使用异步操作来从数据库或其他外部数据源获取数据，然后将这些数据存储在 Vuex 中。这通常涉及到在 Vuex 中定义 actions，这些 actions 可以发起异步请求并在数据返回后触发 mutations 来更新状态。

总结来说，Vuex 中的数据主要来自前端应用内部，但可以通过异步操作从外部数据源（如数据库）获取数据，然后集中管理和使用这些数据。这种方式有助于更好地组织和维护应用的状态和数据。

#### 2、创建项目

选择Router和Vuex



![image-20231105213515892](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231105213515892.png)



选择vue版本

![image-20231105220757157](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231105220757157.png)



![image-20231105225418329](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231105225418329.png)



![image-20231105225510355](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231105225510355.png)



store中的代码

```js title="store/index.js" 
import { createStore } from 'vuex'

//VueX数据管理框架
//VueX创建了一个全局唯一的仓库，用来存放全局的数据  
export default createStore({
  state: {
    name: 'dell'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```



或者说，多个页面之间的数据能够共享一组数据

实现在Home和about两个页面数据展示



```vue title=&quot;store/about.vue&quot; 
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ myName }}</h3>
  </div>

</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',

  computed: {
    
    myName(){
       return this.$store.state.name;
    }
  }
}
</script>
```



home.vue

```vue  title=&quot;store/home.vue&quot;
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <h3>{{ myName }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  computed: {
    
    myName(){
       return this.$store.state.name;
    }
  }
}
</script>

```







![image-20231105165539391](http://minio.zlqit.com/file/202311052139551.png)

项目引用

![image-20231105165648329](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20231105165648329.png)





#### 3.如何修改数据

如何修改全局数据

所以，这里有一套对全局数据进行修改的机制，不能直接修改，下面的修改流程需要背过，无论如何都要记住





```html title=&quot;about.vue&quot;
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ myName }}</h3>
    <h1 @click="handleClick">点击修改数据</h1>
  </div>

</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',

  computed: {
    
    myName(){
       return this.$store.state.name;
    }
  },

  methods: {
    handleClick(){
      //1. dispatch 方法，派发一个 action,名字叫做change
      //2. 感知到change这个action,执行的store中的actions下面的change
      //3. commit 提交一个叫做 change的数据改变
      //4. mutation 感知到提交的change改变，执行change方法
      this.$store.dispatch('change')
        
        
    }
  }
}
</script>
```



```txt  this.$store.dispatch('change') `` 调用修改链比较长，其实可以通过   ```   ```js   this.$store.commit('change')``` commit这样来修改，但是这个是有区别的。如果业务只涉及同步的操作，不涉及异步的操作，可以简化下上面的代码 ，就不需要actions。





```vue title=&quot;store/index.js&quot;
import { createStore } from 'vuex'

//VueX数据管理框架
//VueX创建了一个全局唯一的仓库，用来存放全局的数据  
export default createStore({
  state: {
    name: 'dell'
  },
  mutations: {
    change(){
      //第四步 对应的mutation被执行
      console.log('mutation')
      
      //第五步 在mutation里面修改数据
      this.state.name='ilync'
    }

    },
  actions: {
    //第二步 store 感知到你触发了一个叫做change的action，执行change方法
    change(){

      //第三步，提交一个commit 触发一个mutation
      this.commit('change')
    }
  },
  modules: {
  }
})
```

