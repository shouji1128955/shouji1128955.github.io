````handlebars
-- 今天是2025年1月1日

-- 课程目标：通过gin框架的学习实现一个学生选课系统的实战项目
-- 1. 学习gin的路由，请求与响应，模板以及最重要的gorm完成选课系统的关于班级，课程以及学员的基本增删改查
-- 2. 通过gorm的进阶学习【全站最好的gorm课程】,完成了像搜索框以及选课等数据库查询
-- 3. 学习cookie，session会话技术实现项目的登录验证
-- 4. 通过中间件的学习实现基于rbac的权限访问控制

-- 即一边学课程，一边写项目，课程结束，golang开发便是小菜一碟
````

**预备知识点**

1. **Golang基础（数据类型，流程控制语句，函数，结构体等）**
2. **Mysql的基本sql语句**
3. **HTML + CSS**



**什么是框架，类似写作文的模板一样，比如入党申请书....**

![](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/gin%E5%92%8Cgo-0245512-0245514.png)

# Gin框架入门到精通

# 一、Gin开篇

## 1.1、web应用程序



![image-20220901214542004](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20220901214542004.png)

```go
package main

import (
	"fmt"
	"net"
)

func main() {

	listener, err := net.Listen("tcp", "127.0.0.1:8888")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer listener.Close()
	// 2.服务端不断等待请求处理
	for {
		// 阻塞等待客户端连接
		fmt.Println("server is waiting...")
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println(err)
			continue
		}
		data := make([]byte, 1024)
		n, err := conn.Read(data)
		fmt.Println("receive data:\n", string(data[:n]))
		conn.Write([]byte("HTTP/1.1 200 OK\r\n\r\n<h1>Welcome to Web World!</h1>"))
		conn.Close()
	}

}
```

## 1.2、http协议

#### （1）简介

HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于万维网（WWW:World Wide Web ）服务器与本地浏览器之间传输超文本的传送协议。HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。HTTP协议工作于客户端-服务端架构为上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。Web服务器根据接收到的请求后，向客户端发送响应信息。

![截屏2022-08-28 20.18.31](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/%E6%88%AA%E5%B1%8F2022-08-28%2020.18.31.png)

#### （2）http协议特性

 ```text
(1) 基于TCP/IP协议

http协议是基于TCP/IP协议之上的应用层协议。

(2) 基于请求－响应模式

HTTP协议规定,请求从客户端发出,最后服务器端响应该请求并 返回。换句话说,肯定是先从客户端开始建立通信的,服务器端在没有 接收到请求之前不会发送响应

 (3) 无状态保存

HTTP是一种不保存状态,即无状态(stateless)协议。HTTP协议 自身不对请求和响应之间的通信状态进行保存。也就是说在HTTP这个 级别,协议对于发送过的请求或响应都不做持久化处理。

使用HTTP协议,每当有新的请求发送时,就会有对应的新响应产 生。协议本身并不保留之前一切的请求或响应报文的信息。这是为了更快地处理大量事务,确保协议的可伸缩性,而特意把HTTP协议设计成 如此简单的。

 (4) 短连接和长连接

HTTP1.0默认使用的是短连接。浏览器和服务器每进行一次HTTP操作，就建立一次连接，任务结束就中断连接。
HTTP/1.1起，默认使用长连接。要使用长连接，客户端和服务器的HTTP首部的Connection都要设置为keep-alive，才能支持长连接。
HTTP长连接，指的是复用TCP连接。多个HTTP请求可以复用同一个TCP连接，这就节省了TCP连接建立和断开的消耗。
 ```

#### （3）http请求协议与响应协议

http协议包含由浏览器发送数据到服务器需要遵循的请求协议与服务器发送数据到浏览器需要遵循的请求协议。用于HTTP协议交互的信被为HTTP报文。请求端(客户端)的HTTP报文 做请求报文,响应端(服务器端)的 做响应报文。HTTP报文本身是由多行数据构成的字文本。

![http协议](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/http%E5%8D%8F%E8%AE%AE.png)

1. 一个完整的URL包括：协议、ip、端口、路径、参数  

```shell
例如： https://www.baidu.com/s?wd=yuan     其中https是协议，www.baidu.com 是IP，端口默认80，/s是路径，参数是wd=yuan
```

2. 请求方式: get与post请求

- GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连，如EditBook?name=test1&id=123456. POST方法是把提交的数据放在HTTP包的请求体中.
- GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制

3. 响应状态码：状态码的职 是当客户端向服务器端发送请求时, 返回的请求 结果。借助状态码,用户可以知道服务器端是正常 理了请求,还是出 现了 。状态码如200 OK,以3位数字和原因 组成。

## 1.3、quick start

Gin 是一个用 Go (Golang) 编写的 web 框架（web框架就是web应用程序框架）。 它是一个类似于 [martini](https://github.com/go-martini/martini) 但拥有更好性能的 API 框架, 由于 [httprouter](https://github.com/julienschmidt/httprouter)，速度提高了近 40 倍。 如果你是性能和高效的追求者, 你会爱上 Gin.

### 1.3.1、安装

要安装 Gin 软件包，需要先安装 Go 并设置 Go 工作区。

1.下载并安装 gin：

```sh
$ go get -u github.com/gin-gonic/gin
```

2.将 gin 引入到代码中：

```go
import "github.com/gin-gonic/gin"
```

3.（可选）如果使用诸如 `http.StatusOK` 之类的常量，则需要引入 `net/http` 包：

```go
import "net/http"
```

### 1.3.2、quick start

```go
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	// 返回一个json数据
	r.GET("/user", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"user": "yuan",
		})
	})

	// 返回一个html页面
	r.LoadHTMLGlob("templates/*")
	r.GET("/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	r.Run() // 监听并在 0.0.0.0:8080 上启动服务
}
```

### 1.3.3、mvc

广义看MVC，M是指业务模型，V是指用户界面，C则是控制器，使用MVC的目的是将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。其中，View的定义比较清晰，就是用户界面。

![img](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ3NzE0Mjg4,size_16,color_FFFFFF,t_70-9027201-9027242.png)

> - 视图层（View）：负责格式化数据并把它们呈现给用户，包括数据展示、用户交互、数据验证、界面设计等功能。
> - 控制层（Controller）：负责接收并转发请求，对请求进行处理后，指定视图并将响应结果发送给客户端。
> - 数据模型层（Model）：模型对象拥有最多的处理任务，是应用程序的主体部分，它负责数据逻辑（业务规则）的处理和实现数据操作（即对数据库中的数据增删改查）。
>

MVC(Model-View-Controller) 模式的基本思想是：数据 ，显示和处理相分离。

Gin框架的流程图:

![Gin框架流程图](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/Gin%E6%A1%86%E6%9E%B6%E6%B5%81%E7%A8%8B%E5%9B%BE-5321444-5321446.png)

### 1.3.3、timer案例

```

```

### 1.3.4、登陆案例

```

```



# 二、Gin路由

## 2.1、路由方法

路由系统支持任意方式的请求，如下的方法用来提供对应方法来接收请求：

```go

func (group *RouterGroup) DELETE(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) GET(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) HEAD(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) OPTIONS(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) PATCH(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) POST(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) PUT(relativePath string, handlers ...HandlerFunc) IRoutes
// 任意路由
func (group *RouterGroup) ANY(relativePath string, handlers ...HandlerFunc) IRoutes

```

案例：

```golang
func main() {
	r := gin.Default()
	r.GET("/book", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "GET",
		})
	})

	r.POST("/book", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "POST",
		})
	})

	r.PUT("/book", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "PUT",
		})
	})

	r.DELETE("/book", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "DELETE",
		})
	})
  
  // 路由匹配不成功
	r.NoRoute(func(c *gin.Context) {
		c.HTML(http.StatusNotFound, "404.html", nil)
	})
  
}
```

## 2.2、路由分组

路由分组用于将多个路由进行统一的处理

```go
// 书籍相关的路由
r := gin.Default()

bookRoute := r.Group("/books")
{
  bookRoute.GET("/", GetBook)
	bookRoute.POST("/add", AddBook)
	bookRoute.GET("/edit", EditBook)
	bookRoute.GET("/delete", DeleteBook)
}

// 出版社相关的路由
publishRoute := r.Group("/publish")
{
  publishRoute.GET("/", GetPublish)
	publishRoute.POST("/add", AddPublish)
	publishRoute.GET("/edit",EditPublish)
	publishRoute.GET("/delete",DeletePublish)
}
r.Run(":8080")


```

# 三、请求与响应

## 3.1、请求数据

### （1）获取基本请求数据

```golang
  r.GET("/test", func(c *gin.Context) {
  // 获取基本请求信息
  fmt.Println(c.Request.Method)     // GET
  fmt.Println(c.Request.URL)        // /test
  fmt.Println(c.Request.RemoteAddr) // 127.0.0.1:58581
  fmt.Println(c.ClientIP())         // 127.0.0.1
  // 获取请求头
  fmt.Println(c.Request.Header)
  fmt.Println(c.Request.Header["User-Agent"])
  fmt.Println(c.GetHeader("User-Agent"))

  c.String(200, "test OK!") 

})
```

### （2）获取路径参数

获取URL路径参数，指的是获取/user/:id这类型路由绑定的参数，这个例⼦绑定了⼀个参数id，获取url路径参数常⽤函数：

```go
func(c*Context)Param(keystring)string
```

```go
// 例⼦：
r:=gin.Default()
r.GET("/user/:id",func(c*gin.Context){
    //获取url参数id
    id:=c.Param("id")
})
```

### （3）获取查询参数

Get请求url例子：`/path?kd=yuan`

获取Get请求参数的常用函数：

```haskell
func(c*Context)Query(keystring)string
func(c*Context)DefaultQuery(key,defaultValuestring)string
func(c*Context)GetQuery(keystring)(string,bool)
```

````golang
// 例⼦：
funcHandler(c *gin.Context){
    //获取name参数,通过Query获取的参数值是String类型。
    name:=c.Query("name")
    //获取name参数,跟Query函数的区别是，可以通过第⼆个参数设置默认值。
    name:=c.DefaultQuery("name","root")
    //获取id参数,通过GetQuery获取的参数值也是String类型,
    //区别是GetQuery返回两个参数，第⼀个是参数值，第⼆个参数是参数是否存在的bool值，可以⽤来判断参数是否存在。
    id,ok:=c.GetQuery("id")
    if!ok{
    //参数不存在
    }
}
// 提⽰：GetQuery函数，判断参数是否存在的逻辑是，参数值为空，参数也算存在，只有没有提交参数，才算参数不存在。
````

### （4）获取PostForm数据

获取Post请求参数的常用函数：

```golang
func(c*Context)PostForm(keystring)string
func(c*Context)DefaultPostForm(key,defaultValuestring)string
func(c*Context)GetPostForm(keystring)(string,bool)
```

```golang
// 例⼦：
funcHandler(c *gin.Context){
    //获取name参数,通过PostForm获取的参数值是String类型。
    name:=c.PostForm("name")
    //跟PostForm的区别是可以通过第⼆个参数设置参数默认值
    name:=c.DefaultPostForm("name","root")
    //获取id参数,通过GetPostForm获取的参数值也是String类型,
        //区别是GetPostForm返回两个参数，第⼀个是参数值，第⼆个参数是参数是否存在的bool值，可以⽤来判断参数是否存在。
    id,ok:=c.GetPostForm("id")
    if!ok{
    //参数不存在
    }
    // 获取PostForm的数组值
    names:=c.PostFormArray("names")
}
```

### （5）ShouldBind函数

前⾯获取参数的⽅式都是⼀个个参数的读取，⽐较⿇烦，Gin框架⽀持将请求参数⾃动绑定到⼀个struct对象，这种⽅式⽀持Get/Post请求，也⽀持http请求body内容为json/xml格式的参数。

**ShouldBind**强大的功能，可以基于请求的**Content-Type**识别请求数据类型并利用反射机制自动提取请求中querystring、form表单、JSON、XML等参数到结构体中。能够基于请求自动提取JSON、form表单和querystring类型的数据，并把值绑定到指定的结构体对象。

> struct标签说明：
> （1）json:"name" 数据格式为json格式，并且json字段名为name
> （2）form:"name" 表单参数名为name
> 提⽰：你可以根据⾃⼰的需要选择⽀持的数据类型，例如需要⽀持json数据格式，可以这样定义字段标签:json:"name"

```golang
package main

import (
	"github.com/gin-gonic/gin"
	"log"
)

type User struct {
	Name  string `json:"name" form:"name"`
	Age   int    `json:"age" form:"age"`
	Email string `json:"email" form:"email"`
}

func main() {
	// 1.创建路由
	r := gin.Default()

	r.POST("/user/", func(c *gin.Context) {
		//初始化User
		user := User{}
		//通过ShouldBind函数，将请求参数绑定到struct对象，处理json请求代码是⼀样的。
		//如果是post请求则根据Content-Type判断，接收的是json数据，还是普通的http请求参数
		if c.ShouldBind(&user) == nil {
			//绑定成功，打印请求参数
			log.Println("user:", user)
		}
		//http请求返回⼀个字符串
		c.JSON(200, gin.H{
			"msg":             "parser Success",
			"请求的content-type": c.ContentType(),
			"解构后的数据":          user,
		})
	})

	r.Run(":8080")
}
```

![image-20221202134138674](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20221202134138674-9959700-9959848.png)

![image-20221202134224622](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20221202134224622-9959745-9959864.png)

![image-20221202134317876](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20221202134317876-9959799.png)

ShouldBind有⼀系列函数，⼤致就是把前⾯的⽅式绑定到结构体的⽅式，如：ShouldBindUri()、ShouldBindQuery()等等，⽤法和ShouldBind类似，这⾥就不展开介绍了。

> 提⽰：如果你通过http请求body传递json格式的请求参数，并且通过post请求的⽅式提交参数，则需要将Content-Type设置为application/json,如果是xml格式的数据，则设置为application/xml

## 3.2、响应数据

### 3.2.1、响应不同的数据格式

#### （1）响应简单字符串

```golang
r.GET("/str", func(c *gin.Context) {
		c.String(200, "hello world!")
})
```

#### （2）响应html页面

````golang
  r.LoadHTMLGlob("templates/*")
	r.GET("/index", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html",nil)
	})
````

#### （3）响应json

```go
// 返回一个json数据
	r.GET("/json", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "json数据",
		})
	})
```

#### （4）响应xml数据

```golang
// 返回一个xml数据
	r.GET("/xml", func(c *gin.Context) {
		c.XML(http.StatusOK, gin.H{"message": "xml消息"})
	})
```

#### （5）响应protobuf格式

```golang
func indexHandler(c *gin.Context) {

	//c.XML(http.StatusOK, gin.H{"message":"消息"})
	//c.YAML(http.StatusOK, gin.H{"message":"消息"})
	reps := []int64{int64(9),int64(55)}

	// 自定义数据
	label := "你好啊,今天天气挺好的"

	// 传protobuf格式数据
	data := &protoexample.Test{
		Label: &label,
		Reps: reps,
	}
	fmt.Println(data)
	c.ProtoBuf(200,data)
}
```

### 3.2.2、静态文件

```go
// 静态文件配置
r.Static("/static", "./static")
```

### 3.2.3、重定向

```go
c.Redirect(http.StatusMovedPermanently, "http://www.baidu.com")
c.Redirect(http.StatusMovedPermanently, "/xml")
```

### 3.2.4、异步响应

```golang
package main

import (
	"log"
	"time"
	"github.com/gin-gonic/gin"
)

func main() {
	// 1.创建路由
	// 默认使用了2个中间件Logger(), Recovery()
	r := gin.Default()
	// 1.异步
	r.GET("/async", func(c *gin.Context) {
		// 需要搞一个副本
		copyContext := c.Copy()
		// 异步处理
		go func() {
			time.Sleep(3 * time.Second)
			log.Println("异步执行：" + copyContext.Request.URL.Path)
		}()

		c.JSON(200, gin.H{"msg": "异步执行中"})

	})
	// 2.同步
	r.GET("/sync", func(c *gin.Context) {
		time.Sleep(3 * time.Second)
		log.Println("同步执行：" + c.Request.URL.Path)
		c.JSON(200, gin.H{"msg": "同步执行结束"})
	})

	r.Run(":8080")
}

```

# 四、Gin模板

模板在web开发中⼴泛使⽤，它能够有效的将业务逻辑和页⾯逻辑分开，使代码可读性增强、并且更加容易理解和维护。 模板简单来说就是⼀个其中包涵占位变量表⽰动态的部分的⽂件，模板⽂件在经过动态赋值后，返回给⽤户。

## 4.1 、变量渲染

视图部分：

````go
package main

import "github.com/gin-gonic/gin"

type Student struct {
	Name string
	Age  int
}

func main() {
	// 基于获取引擎对象，可以理解为路由对象
	r := gin.Default()
	// 加载模板文件
	r.LoadHTMLGlob("templates/*")

	r.GET("/index", func(context *gin.Context) {

		context.HTML(200, "index.html", gin.H{
			"user":       "yuan",
			"state":      "在线",
			"booksSlice": []string{"金瓶梅", "聊斋", "剪灯新话", "国色天香"},
			"stuMap": map[string]interface{}{
				"name":  "rain",
				"age":   22,
				"hobby": []string{"足球", "篮球", "双色球"},
			},
			"stuStruct": Student{Name: "yuan", Age: 22},
		})
	})

	// 启动:默认本机的8080端口
	r.Run()
}

````

模板html文件：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h3>变量渲染</h3>
{{ . }}
<p>{{.booksSlice}}</p>
<p>{{index .booksSlice 0 }}</p>
<p>{{index .booksSlice 1}}</p>
<p>{{index .booksSlice 2}}</p>
<p>{{.stuMap}}</p>
<p>{{.stuMap.name}}</p>
<p>{{.stuStruct}}</p>
<p>{{.stuStruct.Name}}</p>

</body>
</html>
```

> 切片的深度查询依靠内置函数index，map对象和结构体对象的深度查询通过句点符实现！

## 4.2 、控制结构

#### （1）分支结构

```go
{{if  pipeline}} T1 {{end}}
{{if  pipeline}} T1 {{else}} T0 {{end}}
{{if  pipeline}} T1 {{else if pipeline}} T0 {{end}}
```

> 1. if类似与Go的if语句，它也具有单分⽀，多分⽀等多种结构，不同的是需要使⽤end关键字结束。
> 2. 表达式为false的情况是各种数据对象的0值：数值0，指针或接口是nil，数组、slice、map或string则是len为0。

```golang
<h3>分支结构</h3>
{{if gt .stuStruct.Age 18 }}
<p>{{index .booksSlice 0 }}</p>
<p>{{index .booksSlice 1}}</p>
<p>{{index .booksSlice 2}}</p>
<p>{{index .booksSlice 3}}</p>
{{else}}
<p>未成年区</p>
{{end}}
```

#### （2）循环结构

> 表达式为false的情况是各种数据对象的0值：数值0，指针或接口是nil，数组、slice、map或string则是len为0。

```go 
{{range $value := .}} {{end}}
{{range $key,$value := .}} {{end}}
```

> 1. 如果range中只赋值给一个变量，则这个变量是当前正在迭代元素的值。如果赋值给两个变量，则第一个变量是索引值，第二个变量是当前正在迭代元素的值。
> 2. 变量名以`$`开头

````go 
<h3>循环结构</h3>
<p>四大名著</p>
{{range $index,$value := .booksSlice}}
<p>{{$index}} : {{$value}} </p>
{{end}}

<p>stuMap学生的所有爱好</p>
{{range $index,$value := .stuMap.hobby}}
<p>{{$index}} : {{$value}} </p>
{{end}}
````

#### （3）变量赋值

可以在template中定义变量：

```go 
// 未定义过的变量
{{$var := pipeline}}
```

> . 是有作用域的

```golang
// 展示年龄大于rain的所有学生
// "students": []Student{{Name: "yuan", Age: 22}, {Name: "alvin", Age: 16}, {Name: "eric", Age: 23}},

// 错误写法
{{range $index,$student := .students}}

{{if gt $student.Age .stuMap.age }}   // 此时的.已经不是全局的对象，而是当前遍历的$student对象
<p>{{$student.Name}},{{$student.Age}}</p>
{{end}}

{{end}}

// 正确写法
{{$rainAge := .stuMap.age}}
{{range $index,$student := .students}}
{{if gt $student.Age $rainAge }}
<p>{{$student.Name}},{{$student.Age}}</p>
{{end}}
{{end}}
```

#### （4）注释

注释，执行时会忽略。可以多行。注释不能嵌套，并且必须紧贴分界符始止。

```go 
{{/* a comment */}}   

> {/ 一定要紧贴

```

## 4.3、Gin的模板函数

#### （1）默认模板函数

语法格式：

```
functionName [Argument...]
```

Argument参数是可选的，如果有多个参数，参数直接用空格分隔。

```go
| 函数名   | 函数调用格式        | 对应关系运算         | 说明                                       |
| :------- | :------------------ | :------------------- | :----------------------------------------- |
| eq       | eq arg1 arg2        | arg1 == arg2         | arg1等于arg2则返回true                     |
| ne       | ne arg1 arg2        | arg1 != arg2         | arg1不等于arg2则返回true                   |
| lt       | lt arg1 arg2        | arg1 < arg2          | arg1小于arg2则返回true                     |
| le       | le arg1 arg2        | arg1 <= arg2         | arg1小于等于arg2则返回true                 |
| gt       | gt arg1 arg2        | arg1 > arg2          | arg1大于arg2则返回true                     |
| ge       | ge arg1 arg2        | arg1 >= arg2         | arg1大于等于arg2则返回true                 |
| and      | and 表达式1 表达式2 | 表达式1 && 表达式2   | 表达式1和表达式2都为真的时候返回true       |
| or       | or 表达式1 表达式2  | 表达式1 \|\| 表达式2 | 表达式1和表达式2其中一个为真的时候返回true |
| not      | not 表达式          | !表达式              | 表达式为false则返回true, 反之返回false     |
| index    | index  arg 索引/键  | index x 2 即x[2]     | 每个被索引的主体必须是数组、切片或者字典   |
| len      | len arg             | len x 即x的元素个数  | 用于计算数组大小                           |
| urlquery | urlquery arg        | urlquery url         | 用于url编码                                |
```
#### （2）自定义模板函数

视图部分：

```go 
func main() {

	router := gin.Default()
	router.SetFuncMap(template.FuncMap{
		"add": func(x, y int) int {
			return x + y
		},
	})
	// 返回一个html页面
	router.LoadHTMLGlob("templates/*")
	router.GET("/index", index)
	router.Run() // 监听并在 0.0.0.0:8080 上启动服务
}
```

模板部分：

```go 
{{add 2 3}}
```

## 4.4、嵌套与继承

Gin框架默认都是使用单模板，如果需要使用`block template`功能，可以通过`"https://github.com/gin-contrib/multitemplate"`库实现

```golang
import (
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
)
```

#### （1） 嵌套：define和template

在实际项目中，我们不可能只有一个模板，一般来说都有很多个模板，而且这些模板也会共享一些公共的模板，这些公共的模板我们都可以定义成子模板，在需要的时候调用子模板，就可以将子模板的内容嵌入当前模板中。

> 提示：在项目中使用子模板，可以让项目模板具有模块化的能力，提高模块复用能力和可维护性。

define可以直接在待解析内容中定义一个模板,定义了模板之后，可以使用template这个action来执行模板。template有两种格式：

```go 
{{template "name"}}
{{template "name" pipeline}}
```

第一种是直接执行名为name的template，点设置为nil。第二种是点"."设置为pipeline的值，并执行名为name的template。可以将template看作是函数：

```go 
template("name)
template("name",pipeline)
```

示例：在t1页面中和t2页面中嵌入一个广告页面。

```go
package main

import (
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
)

func createMyRender() multitemplate.Renderer {
	r := multitemplate.NewRenderer()
	r.AddFromFiles("t1.html", "templates/t1.html", "templates/adv.html")
	r.AddFromFiles("t2.html", "templates/t2.html", "templates/adv.html")
	return r
}

func main() {
	// 基于获取引擎对象，可以理解为路由对象
	r := gin.Default()
	// 加载模板文件
	//r.LoadHTMLGlob("templates/*")
	r.HTMLRender = createMyRender()

	r.GET("/test01", func(context *gin.Context) {
		context.HTML(200, "t1.html", nil)
	})
	r.GET("/test02", func(context *gin.Context) {
		context.HTML(200, "t2.html", nil)
	})

	// 启动:默认本机的8080端口
	r.Run()
}

```

t1.html,t2.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <title>Go Web Programming</title>
</head>

<body>

<div>This is t1.html</div>
{{ template "adv.html" }}

</body>

</html>
```

````html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <title>Go Web Programming</title>
</head>

<body>

<div>This is t2.html</div>
{{ template "adv.html" }}

</body>

</html>
````

adv.html

```html
<div style="background-color: rebeccapurple;line-height: 200px;color: white;text-align: center">
    这是一条广告信息<br/>
</div>
```

#### （2）继承：block块

根据官方文档的解释：block等价于define定义一个模板，并在"有需要"的地方执行这个模板，执行时将"."设置为pipeline的值。

但应该注意，block的第一个动作是执行名为name的模板，如果不存在，则在此处自动定义这个模板，并执行这个临时定义的模板。换句话说，block可以认为是设置一个默认模板。

例如：

```go 
{{block "T1" .}} one {{end}}
```

它首先表示`{{template "T1" .}}`，也就是说先找到T1模板，如果T1存在，则执行找到的T1，如果没找到T1，则临时定义一个`{{define "T1"}} one {{end}}`，并执行它。

在此文件中指定了要执行一个名为"content"的模板，但此文件中没有使用define定义该模板，所以需要在其它文件中定义名为content的模板。现在分别在两个文件中定义两个content模板：

```
{{ define "content" }}

{{ end }}
```

如果使用block，那么可以设置默认的content模板。例如将原本定义在blue.html中的content设置为默认模板。

[模板解析原理](https://www.cnblogs.com/f-ck-need-u/p/10035768.html)

#### （3）继承案例

![截屏2022-11-19 21.31.18](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/%E6%88%AA%E5%B1%8F2022-11-19%2021.31.18-8864689.png)

**base.html**

```jinja2 
...

{{block "title" .}}
<title>Theme Template for Bootstrap</title>
{{end}}  

...

<div class="content">
  {{block "content" .}}
  {{end}}
</div>

```

**student.html**

```jinja2 
{{template "base.html" .}}

{{define "title"}}
<title>学生管理</title>
{{end}}

{{define "content"}}
<h3>学生管理</h3>
{{end}}
```

**course.html**

```jinja2 
{{template "base.html" .}}

{{define "title"}}
<title>课程管理</title>
{{end}}

{{define "content"}}
<h3>课程管理</h3>
{{end}}
```

**class.html**

```jinja2
{{template "base.html" .}}

{{define "content"}}
<h3>班级管理</h3>
{{end}}

{{define "title"}}
<title>班级管理</title>
{{end}}
```

**main.go**

```go 
package main

import (
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
	"net/http"
)

func index(c *gin.Context) {
	c.HTML(http.StatusOK, "index", gin.H{})
}
func student(c *gin.Context) {
	c.HTML(http.StatusOK, "student", gin.H{})
}

func course(c *gin.Context) {
	c.HTML(http.StatusOK, "course", gin.H{})
}

func class(c *gin.Context) {
	c.HTML(http.StatusOK, "class", gin.H{})
}

func createMyRender() multitemplate.Renderer {
	r := multitemplate.NewRenderer()
	r.AddFromFiles("index", "templates/base.html", "templates/index.html")
	r.AddFromFiles("student", "templates/base.html", "templates/student.html")
	r.AddFromFiles("course", "templates/base.html", "templates/course.html")
	r.AddFromFiles("class", "templates/base.html", "templates/class.html")

	return r
}

func main() {

	router := gin.Default()
	// 返回一个html页面
	// router.LoadHTMLGlob("templates/*")  // 继承会发生block覆盖
	router.HTMLRender = createMyRender()
	router.GET("/", index)
	router.GET("/student", student)
	router.GET("/course", course)
	router.GET("/class", class)
	router.Run() // 监听并在 0.0.0.0:8080 上启动服务
}

```

# 五、Gorm

## 5.1、gorm介绍

![image-20221103182526222](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20221103182526222-7471127.png)

是当今比较热门的 golang 的 orm 操作数据库的工具，使用上主要是把 struct 类和数据库表进行映射，操作数据库时无需手写 sql。本质就是提供一组函数来帮助我们快速拼接 sql 语句，尽量减少 sql 的编写。

[gorm文档](https://gorm.io/)和[gorm中文文档]( https://www.kancloud.cn/sliver_horn/gorm/1861152)

安装包：

```golang
go get -u gorm.io/gorm
go get -u gorm.io/driver/mysql
```

## 5.2、连接数据库

### 5.2.1、连接数据库

```go
package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	// 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情
	dsn := "user:pwd@tcp(127.0.0.1:3306)/database?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	fmt.Println(db, err)
}
```

### 5.2.2、配置日志连接

```golang
package main

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"os"
)

func main() {
	// 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情
	dsn := "root:yuan0316@tcp(127.0.0.1:3306)/go10?charset=utf8mb4&parseTime=True&loc=Local"
	// 创建日志对象
	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			//SlowThreshold: time.Second,   // 慢 SQL 阈值
			LogLevel: logger.Info, // Log level
		},
	)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: newLogger, // 日志配置
	})

	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println(db)
}
```

### 5.2.3、数据库连接池

```go
// 全局数据库 db
var db *gorm.DB

// 包初始化函数，可以用来初始化 gorm
func init() {
  // 配置 dsn

  // err
  var err error
  // 连接 mysql 获取 db 实例
  db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
  if err != nil {
    panic("连接数据库失败, error=" + err.Error())
  }

  // 设置数据库连接池参数
  sqlDB, _ := db.DB()
  // 设置数据库连接池最大连接数
  sqlDB.SetMaxOpenConns(100)
  // 连接池最大允许的空闲连接数，如果没有sql任务需要执行的连接数大于20，超过的连接会被连接池关闭
  sqlDB.SetMaxIdleConns(20)
}

// 获取 gorm db，其他包调用此方法即可拿到 db
// 无需担心不同协程并发时使用这个 db 对象会公用一个连接，因为 db 在调用其方法时候会从数据库连接池获取新的连接
func GetDB() *gorm.DB {
  return db
}

```

```golang
func main() {
  // 获取 db
  db := tools.GetDB()
  // 执行数据库查询操作
}
```

## 5.3、数据库表操作

### 5.3.1、模型声明

我们以选课系统为例子：

> 学生表
>
> 老师表
>
> 班级表
>
> 课程表

```go
package main

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"os"
	"time"
)

type BaseModel struct {
	ID         int       `gorm:"primaryKey"`
	CreateTime *time.Time `gorm:"autoCreateTime"`
	UpdateTime *time.Time `gorm:"autoCreateTime"`
	Name       string     `gorm:"type:varchar(32);unique;not null"`
}


type Teacher struct {
	BaseModel
	Tno    int
	Pwd    string `gorm:"type:varchar(100);not null"`
	Tel    string `gorm:"type:char(11);"`
	Birth  *time.Time
	Remark string `gorm:"type:varchar(255);"`
}


type Class struct {
	BaseModel
	Num     int
	TutorID int
	Tutor   Teacher
}

type Course struct {
	BaseModel
	Credit int
	Period int

	// 多对一
	TeacherID int
	Teacher   Teacher
}

type Student struct {
	BaseModel
	Sno    int
	Pwd    string `gorm:"type:varchar(100);not null"`
	Tel    string `gorm:"type:char(11);"`
	Gender byte   `gorm:"default:1"`
	Birth  *time.Time
	Remark string `gorm:"type:varchar(255);"`

	// 多对一
	ClassID int
	Class   Class `gorm:"foreignKey:ClassID"`
	// 多对多
	Courses []Course `gorm:"many2many:student2course;constraint:OnDelete:CASCADE;"`
}


```

注意事项：

> 1. 默认情况下，GORM 使用 `ID` 作为主键，使用结构体名的 `蛇形复数` 作为表名，字段名的 `蛇形` 作为列名，并使用 `CreatedAt`、`UpdatedAt` 字段追踪创建、更新时间。
>
> 2. 单独设置表名：
>
>    ```go
>    func (u User) TableName() string {
>      return "user"
>    }
>    ```
>
> 3. GORM 定义一个 `gorm.Model` 结构体，其包括字段 `ID`、`CreatedAt`、`UpdatedAt`、`DeletedAt`
>
>    ```go
>    // gorm.Model 的定义
>    type Model struct {
>      ID        uint           `gorm:"primaryKey"`
>      CreatedAt time.Time
>      UpdatedAt time.Time
>      DeletedAt gorm.DeletedAt `gorm:"index"`
>    }
>    ```

### 5.3.2、模型迁移

 ```golang
 func main() {
 
 	dsn := "root:yuan0316@tcp(127.0.0.1:3306)/go10?charset=utf8mb4&parseTime=True&loc=Local"
 	// 创建日志对象
 	newLogger := logger.New(
 		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
 		logger.Config{
 			// SlowThreshold: time.Second,   // 慢 SQL 阈值
 			LogLevel: logger.Info, // Log level
 		},
 	)
 
 	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
 		Logger: newLogger, // 日志配置
 	})
 
 	if err != nil {
 		panic("failed to connect database")
 	}
 
 	// 自动迁移
 	db.AutoMigrate(&Teacher{})
 	db.AutoMigrate(&Course{})
 	db.AutoMigrate(&Class{})
 	db.AutoMigrate(&Student{})
 }
 
 ```

AutoMigrate 支持建表，如果表存在则不会再创建

```haskell
-- 建表
db.AutoMigrate(&Teacher{})
-- 建表
db.Migrator().CreateTable(&Teacher{})
-- 建 3 表
db.AutoMigrate(&Teacher{}, &Class{}, &Course{})
-- 可以通过 Set 设置附加参数，下面设置表的存储引擎为 InnoDB
db.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&Teacher{})
```

检测表存在：
```golang
// 检测Teacher结构体对应的表是否存在
db.Migrator().HasTable(&Teacher{})
// 检测表名teachers是否存在
db.Migrator().HasTable("teachers")
```

### 5.3.3、表字段操作

AutoMigrate不支持字段修改删除，为避免数据意外丢失.

```haskell
-- 删除 Teacher 结构体对应的表
db.Migrator().DropTable(&Teacher{})
-- 依据表名删除表
db.Migrator().DropTable("teachers")
-- 删除字段
db.Migrator().DropColumn(&Teacher{}, "Name")
-- 为字段添加索引
db.Migrator().CreateIndex(&Teacher{}, "Name")
-- 修改索引名
db.Migrator().RenameIndex(&Teacher{}, "Name", "Name2")
-- 为字段删除索引
db.Migrator().DropIndex(&Teacher{}, "Name")
-- 检查索引存在
db.Migrator().HasIndex(&Teacher{}, "Name")
```

## 5.4、数据库表记录操作

这是重点

### 5.4.1、添加记录

#### （1）添加单表记录

```go
t1 := Teacher{BaseModel: BaseModel{Name: "yuan"}, Tno: 1001, Pwd: "123"}
db.Create(&t1)
fmt.Println(t1.ID)
t2 := Teacher{BaseModel: BaseModel{Name: "rain"}, Tno: 1002, Pwd: "234"}
db.Create(&t2)
t3 := Teacher{BaseModel: BaseModel{Name: "eric"}, Tno: 1002, Pwd: "345"}
db.Create(&t3)
```

GORM 将生成一条 SQL 语句来插入数据并**回填主键值**

> `db.Debug()` 会打印sql日志

#### （2）批量添加多对一关联表的记录

要有效地插入大量记录，请将切片传递给该Create方法。

```golang
class01 := Class{BaseModel: BaseModel{Name: "软件1班"}, TutorID: 1}
class02 := Class{BaseModel: BaseModel{Name: "软件2班"}, TutorID: 1}
class03 := Class{BaseModel: BaseModel{Name: "计算机科学与技术1班"}, TutorID: 2}
class04 := Class{BaseModel: BaseModel{Name: "计算机科学与技术2班"}, TutorID: 2}
classes := []Class{class01, class02, class03, class04}
db.Create(&classes)

for _, class := range classes {
fmt.Println(class.ID) // 1,2,3
}

course01 := Course{BaseModel: BaseModel{Name: "计算机网络"}, Credit: 3, Period: 16, TeacherID: 1}
course02 := Course{BaseModel: BaseModel{Name: "数据结构"}, Credit: 2, Period: 24, TeacherID: 1}
course03 := Course{BaseModel: BaseModel{Name: "数据库"}, Credit: 2, Period: 16, TeacherID: 2}
course04 := Course{BaseModel: BaseModel{Name: "数字电路"}, Credit: 3, Period: 12, TeacherID: 2}
course05 := Course{BaseModel: BaseModel{Name: "模拟电路"}, Credit: 1, Period: 8, TeacherID: 2}
courses := []Course{course01, course02, course03, course04, course05}
db.Create(&courses)
```

> 指定批量大小：db.CreateInBatches(users, 100 )

#### （3）添加多对多关联表的记录

```golang
// 绑定课程对象切片
var courses []Course
db.Where("name in ?", []string{"数据结构", "数据库"}).Find(&courses)
fmt.Println("courses:", courses)

// 添加学生1
s1 := Student{BaseModel: BaseModel{Name: "张三"}, Sno: 2001, Pwd: "123", ClassID: 1}
db.Create(&s1)

// 多对多添加方式1
s2 := Student{BaseModel: BaseModel{Name: "李四"},
              Sno:     2002,
              Pwd:     "234",
              ClassID: 1,
              Courses: courses,
             }
db.Create(&s2)

// 多对多添加方式2
s3 := Student{BaseModel: BaseModel{Name: "王五"}, Sno: 2003, Pwd: "234", ClassID: 1}
db.Create(&s3)
fmt.Println("s3 id:", s3.ID)
db.Model(&s3).Association("Courses").Append(courses) // 注意：Courses是多对多关联字段，不是关联表

// 先查询再操作添加方式3
var student = Student{}
db.Where("name = ?", "王五").First(&student)
fmt.Println(student)
db.Model(&student).Association("Courses").Clear()
var courses []Course
db.Where("name in ?", []string{"数字电路", "模拟电路"}).Find(&courses)
db.Model(&student).Association("Courses").Append(courses)

```

### 5.4.2、单表查询

gorm 使用链式函数来查询的。

#### （1） 查询全部记录

```go 
// Find 查询多条记录，返回数组
// select * from students;
students := []Student{}  // 使用Find要声明数组，如果声明一个对象（var s Student），就会将第一个对象
result := db.Find(&students)
fmt.Println(result.RowsAffected)
fmt.Println(students)

for _, student := range students {
  fmt.Println(student.ID, student.Name, student.Sno)
}

/*   

    students := []Student{} 
    db.Find(&students)
     
    (1) select * from students;
    5,2022-11-29 16:53:23.823,2022-11-29 16:53:23.823,张三,2001,123,"",1,2022-11-15 00:00:00,"",1,1
    6,2022-11-29 16:53:50.756,2022-11-29 16:53:50.756,李四,2002,123,"",1,2022-11-10 00:00:00,"",3,2
    7,2022-11-29 16:54:11.471,2022-11-29 16:54:11.471,王五,2003,123,"",1,2022-11-18 00:00:00,"",2,3

    (2) 
    [
		Student{
			BaseModel：		{1 2022-11-03 17:59:02.188 +0800 CST 2022-11-03 17:59:02.188 +0800 CST 张三}
			Sno:				   2001
			Pwd:				   123
			Gender:				   1
			Birth:				 <nil>
			ClassID:				 1
			Class对象:			{
                        BaseModel: {0 <nil> <nil> }
                        Num: 0
                        TutorID: 0
                        Tutor对象: {{0 <nil> <nil> } 0 <nil>}
                        students: []
							  		 }
			Courses:				[]

		 },
		 ...
		 ]
*/
```

#### （2）查询单条记录

```golang
student := Student{}
// Take 查询一条记录
// SELECT * FROM `user` LIMIT 1
db.Take(&student)

// First 根据主键 id 排序后的第一条
// SELECT * FROM `user` ORDER BY `id` LIMIT 1
db.First(&student)

// Last 根据主键 id 排序后最后一条
// SELECT * FROM `user` ORDER BY `id` DESC LIMIT 1
db.Last(&student)

// Where 表示条件，其中写 sql 部分
// SELECT * FROM `user` WHERE (id = '10') LIMIT 1
db.Where("id = ?", 10).Take(&user)
```

#### （3） Where查询

**基于string的where语句**

```golang
var student Student
db.Where("name = ?", "李四").First(&student)
fmt.Println(student)

var students []Student
db.Where("Sno between ? and ?", 2001, 2003).Find(&students)
fmt.Println(students)

var students []Student
db.Where("Sno in ?", []int64{2001, 2003}).Find(&students)
fmt.Println(students)

var students []Student
db.Where("name like  ?", "李%").Find(&students)
fmt.Println(students)

var students []Student
db.Where("create_time >  ?", "2021-01-01 00:00:00").Find(&students)
fmt.Println(students)

var students []Student
db.Where("create_time > ? AND create_time < ?", "2022-01-01 00:00:00", "2022-12-31 00:00:00").Find(&students)
fmt.Println(students)
```

**基于Struct & Map 条件的where语句**

```golang
// Struct条件
var students []Student
db.Where(&Student{BaseModel: BaseModel{Name: "张三"}, Gender: 1}).Find(&students)
fmt.Println(students)

// 注意: 使用结构作为条件查询时，GORM 只会查询非零值字段。例如：
db.Where(&Student{BaseModel: BaseModel{Name: "张三"}, Gender: 0}).Find(&students)
fmt.Println(students)
// SELECT * FROM `students` WHERE `students`.`name` = '张三'

// Map条件
db.Where(map[string]interface{}{"Name": "张三", "Gender": 0}).Find(&students)
fmt.Println(students)
```

#### （4）其他查询语句

````haskell
-- Select语句 表示选择，其中写 sql 部分
-- SELECT name,sno FROM `students` WHERE id = 10 LIMIT 1
var student Student
db.Select("name,sno").Where("id = ?", 10).Take(&student)
log.Println(student)
db.Omit("name", "sno").Find(&students)
fmt.Println(students)

-- Not语句  
var students []Student
db.Not("sno between ? and ?", 2001, 2002).Find(&students) --  Not语句:用法类似于Where
fmt.Println(students)

-- Or语句  
var students []Student
db.Where("sno = ?", 2001).Or("name like  ?", "王%").Find(&students)
fmt.Println(students)

-- Order 表示排序方式，其中写 sql 部分
-- SELECT * FROM `students` WHERE create_time >= '2018-11-06 00:00:00' ORDER BY create_time desc,id
var students []Student
db.Where("create_time >= ?", "2018-11-06 00:00:00").Order("create_time desc,id").Find(&students)
log.Println(students)

-- Limit Offset 分页常用
--SELECT * FROM `students` ORDER BY create_time desc LIMIT 10 OFFSET 1
var students []Student
db.Order("create_time desc").Limit(10).Offset(1).Find(&students)
log.Println(students)

-- Count 计算行数
-- SELECT count(*) FROM `students`
var total int64
db.Model(&Student{}).Where("age >= ?", 18).Count(&total)
fmt.Println(total)

-- Group Having 分组查询，其中写 sql 部分,Group 必须和 Select 一起连用
type Result struct {
		ClassID int
		Total   int
	}
var results []Result
--  SELECT class_id, Count(*) as total FROM `students` GROUP BY `class_id` HAVING total>1
db.Model(Student{}).Select("class_id,Count(*) as total").Group("class_id").Having("total>0").Scan(&results)
log.Println(results)

````

在GORM中，`db.Model`方法接受一个参数，用于指定要执行操作的模型或表名。这个参数可以是一个实例指针，也可以是一个字符串。如果你传递一个实例指针作为参数，你可以选择是否要在指针前面加上`&`符号。在大多数情况下，这并不会产生明显的区别，因为指针本身也是一个地址。

例如，假设你有一个名为`User`的模型，并且你想查询所有用户记录。你可以使用以下代码：

```go
var users []User
db.Model(&User{}).Find(&users)
var userDetails []UserDetails
db.Model("user_details").Find(&userDetails)
```

在这个例子中，`&User{}`表示一个`User`类型的实例指针，它被传递给了`db.Model`方法。你可以在`&User{}`前面加上`&`符号，也可以省略它，这不会影响结果。

### 5.4.3、删除记录

```go
// 删除一条记录
student := Student{BaseModel: BaseModel{ID: 3}}
db.Delete(&student)
// 按条件删除
db.Where("sno between ? and ?", 2001, 2002).Delete(Student{})
// 删除所有记录
db.Where("1 = 1").Delete(&Student{})
```

### 5.4.4、更新记录

```go
// Save 更新某条记录的所有字段
stu01 := Student{}
db.First(&stu01)
stu01.Name = "张三三"
db.Save(&stu01)

// Update 基于主键更新某条记录的单个字段
stu02 := Student{BaseModel: BaseModel{ID: 1}}
db.Model(&stu02).Update("name", "张三")

// Update 跟新所有记录的单个字段
db.Model(&Student{}).Update("price", 25)

// Update 自定义条件而非主键记录更新某字段
db.Model(&Student{}).Where("create_time > ?", "2018-11-06 20:00:00").Update("price", 25)

// Update 更新多个字段
// 通过 `struct` 更新多个字段，不会更新零值字段
db.Model(&Student{}).Where("id = ?", 2).Updates(Student{Sno: 2002, Gender: 0})
// 通过 `map` 更新多个字段，零值字段也会更新
db.Model(&Student{}).Where("id = ?", 2).Updates(map[string]interface{}{"gender": 1, "sno": 2002})

// 更新表达式
Update("stock", gorm.Expr("stock + 1"))
db.Model(&Class{}).Update("Num", gorm.Expr("Num+1"))
db.Model(&Student{}).Update("Pwd", gorm.Expr("Sno"))
```

### 5.4.5、关联表查询

#### （1）Preload

在GORM中，`Preload`方法用于预加载关联的数据。预加载的目的是在减少数据库查询的同时，提高查询效率，避免出现N+1查询问题。

通常情况下，在查询主要模型的同时，如果你需要查询关联的数据，可以使用`Preload`方法来一起查询。例如，假设你有一个名为`User`的模型，它与`Address`模型存在一对多关系，一个用户可以有多个地址。如果你想查询所有用户的地址信息，可以使用以下代码：

```go
var users []User
db.Preload("Addresses").Find(&users)
```

在这个例子中，我们使用`Preload("Addresses")`方法来预加载`User`模型的`Addresses`关联。这将在查询用户记录的同时，一起查询它们的关联地址记录。这样就可以避免出现N+1查询问题，提高查询效率。

你也可以在`Preload`方法中指定查询条件，例如：

```go
db.Preload("Addresses", "city = ?", "New York").Find(&users)
```

这将只查询位于纽约的地址记录，并将它们与用户记录一起返回。

需要注意的是，`Preload`方法只能预加载直接关联的数据，不能预加载间接关联的数据。如果你需要预加载多层关联的数据，应该使用`Preload`方法的链式调用。例如：

```go
db.Preload("Addresses").Preload("Addresses.City").Find(&users)
```

这将预加载用户的地址和地址的城市信息，并将它们一起返回。

**案例1：查询李四的班级的名称**

```go 
// 手动查询
s := Student{}
db.Where("name = ?", "李四").Find(&s)
fmt.Println(s)
class := Class{}
db.Where("id = ?", s.ClassID).Find(&class)
fmt.Println(class.Name)

// Preload 预加载
s := Student{}
db.Where("name = ?", "李四").Preload("Class").Find(&s)
// SELECT * FROM `students` WHERE name = '李四'
// SELECT * FROM `classes` WHERE `classes`.`id` = 1
fmt.Println(s)
fmt.Println(s.Sno)
fmt.Println(s.Class.Name)
fmt.Println(s.Courses)
```

**案例2：查询张三的班级和所选课程**

````go 
s := Student{}
db.Where("name = ?", "李四").Preload("Class").Preload("Courses").Find(&s)
// "gorm.io/gorm/clause"
// db.Where("name = ?", "lisi").Preload(clause.Associations).Find(&s)

// SELECT * FROM `students` WHERE name = '李四'
// SELECT * FROM `classes` WHERE `classes`.`id` = 2
// SELECT * FROM `student2course` WHERE `student2course`.`student_id` = 11
// SELECT * FROM `courses` WHERE `courses`.`id` IN (2,3)
fmt.Println(s)
fmt.Println(s.Sno)
fmt.Println(s.Class.Name)
fmt.Println(s.Courses)
fmt.Println(s.Courses[1])


// 预加载所有直接关联
db.Where("name = ?", "李四").Preload(clause.Associations).Find(&s)

// 查询张三的班级,班主任和所选课程
db.Where("name = ?", "李四").Preload("Class").Preload("Class.Teacher").Preload("Courses").Find(&s)
fmt.Println(">>>", s.Class.Teacher.Name)
````

**案例3：查询软件一班所有学生【反向查询】**

> ```go
> // class表添加成员变量：Students
> type Class struct {
>    BaseModel
>    Num     int
>    TutorID int
>    Tutor   Teacher
>    // 一对多
>    Students []Student    // 反向查询字段
> }
> ```

```golang
class := Class{}
db.Where("name", "软件1班").Preload("Students").Find(&class)
// SELECT * FROM `classes` WHERE `name` = '软件1班'
// SELECT * FROM `students` WHERE `students`.`class_id` = 1
fmt.Println(class)
fmt.Println(class.Students)
for _, stu := range class.Students {
    fmt.Println(stu.ID,stu.Name)
}
```

**案例4：查询软件一班所有学生以及所学课程【嵌套预加载】**

```go 
class := Class{}
db.Where("name", "软件1班").Preload("Students.Courses").Find(&class)
fmt.Println(class)
fmt.Println(class.Students)
for _, stu := range class.Students {
  fmt.Println(stu.ID, stu.Name, stu.Courses)
}
```

**案例5：哪些学生报了数据结构课程**

> // Course表添加成员变量：Students
>
> ```golang
> type Course struct {
> 	BaseModel
> 	Credit int8
> 	Period int8
> 
> 	// 多对一
> 	TeacherID int
> 	Teacher   Teacher
> 
> 	// 多对多
>      Students []Student `gorm:"many2many:student2course;"`
> }
> ```

```golang
course := Course{}
db.Where("name", "数据结构").Preload("Students").Find(&course)
// db.Where("name", "数据结构").Preload("Students.Courses").Find(&course)
fmt.Println(course)
fmt.Println(course.Students)
for _, stu := range course.Students {
  fmt.Println(stu.ID, stu.Name, stu.Courses)
}
```

#### （2）Joins 查询

`Preload` 在一个单独查询中加载关联数据。而 `Join Preload` 会使用 inner join 加载关联数据

```golang
var students []Student
db.Preload("Courses").Joins("JOIN student2course ON students.id = student2course.student_id").
  Joins("JOIN courses ON courses.id = student2course.course_id").
  Joins("JOIN teachers ON courses.teacher_id = teachers.id").
  Find(&students)

fmt.Println(">>", students)
```

## 5.5、章节作业

学生选课系统

![截屏2022-11-19 18.44.41](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/%E6%88%AA%E5%B1%8F2022-11-19%2018.44.41-8854690.png)

![截屏2022-11-19 18.43.49](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/%E6%88%AA%E5%B1%8F2022-11-19%2018.43.49.png)

# 七、进阶课程

## 7.1、会话技术

大家在学习 HTTP 超文本传输协议的时候，就已经知道 HTTP 是一种无状态的传输协议，对于事务处理没有记忆能力。对于客户端浏览器发出的请求，Web 服务器无法区分是不是源自于同一个浏览器。所以，这时就需要额外的数据用于维持会话。

### 7.1.1、Cookie

#### **1.** Cookie是什么

> 1. HTTP是无状态协议，服务器不能记录浏览器的访问状态，也就是说服务器不能区分两次请求是否由同一个客户端发出
>
> 2. Cookie就是解决HTTP协议无状态的方案之一，中文是小甜饼的意思
>
> 3. Cookie实际上就是服务器保存在浏览器上的一段信息。浏览器有了Cookie之后，每次向服务器发送请求时都会同时将该信息发送给服务器，服务器收到请求后，就可以根据该信息处理请求
>
> 4. Cookie由服务器创建，并发送给浏览器，最终由浏览器保存

#### **2.** 读写Cookie

```go 
// 设置Cookie
c.SetCookie("xxx","yyy")
// 获取Cookie
c.Cookie("xxx")   // "yyy"
```

![image-20210829101115420](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20210829101115420.png)

#### （1）登录案例

````golang 
package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func index(c *gin.Context) {

	isLogin, _ := c.Cookie("isLogin")

	if isLogin == "true" {
		user, _ := c.Cookie("username")
		c.HTML(http.StatusOK, "index.html", gin.H{
			"username":user,
		})
	} else {
		c.Redirect(302, "/login")
	}
}

func login(c *gin.Context) {
	if c.Request.Method == "GET" {
		c.HTML(http.StatusOK, "login.html", nil)
	} else {
		user := c.PostForm("user")
		pwd := c.PostForm("pwd")
		if user == "yuan" && pwd == "123" {
			// 给客户端设置cookie
			// maxAge int, 单位 s
			// path cookie  所在目录
			// domain string  域名
			// secure  是否只能通过https访问
			// httponly bool  是否允许别人通过js获取自己的cookie
			c.SetCookie("isLogin", "true", 2000000, "/", "127.0.0.1", false, true)
			c.SetCookie("username", user, 20000000, "/", "127.0.0.1", false, true)
			//c.Redirect(302, "/index")
			c.Redirect(302, "/index")
		} else {
			c.Redirect(302, "/login")
		}
	}
}

func main() {
	r := gin.Default()
	// 返回一个html页面
	r.LoadHTMLGlob("templates/*")
	r.Any("/login", login)
	r.GET("/index", index)
	r.Run() // 监听并在 0.0.0.0:8080 上启动服务
}

````

#### （2）最后访问时间案例

```go 
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"time"
)

func index(c *gin.Context) {

	// 获取cookie
	lastVist, _ := c.Cookie("lastVist")
	fmt.Println("lastVist",lastVist)

	// 设置cookie
	now := time.Now().String()[:19]
	c.SetCookie("lastVist", now, 100, "/", "127.0.0.1", false, true)

	c.HTML(200, "index.html", gin.H{
		"lastVist": lastVist,
	})

}

func main() {
	r := gin.Default()
	// 返回一个html页面
	r.LoadHTMLGlob("templates/*")
	r.GET("/index", index)
	r.Run() // 监听并在 0.0.0.0:8080 上启动服务
}

```

### 7.1.2、session

gin框架在处理session时有专门的中间件，我们可以直接使用。

中间件： `github.com/gin-contrib/sessions` ， 我们直接安装依赖： `go get github.com/gin-contrib/sessions` 即可引入使用

我们参考官网案例：

```golang
package main

import (
        // 导入session包
	"github.com/gin-contrib/sessions"
       // 导入session存储引擎
	"github.com/gin-contrib/sessions/cookie"
        // 导入gin框架包
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

        // 创建基于cookie的存储引擎，yuan 参数是用于加密的密钥，可以随便填写
	store := cookie.NewStore([]byte("yuan"))

        // 设置session中间件，参数mysession，指的是session的名字，也是cookie的名字
       // store是前面创建的存储引擎
	r.Use(sessions.Sessions("mysession", store))

	r.GET("/test", func(c *gin.Context) {
                // 初始化session对象
		session := sessions.Default(c)
                
                // 通过session.Get读取session值
                // session是键值对格式数据，因此需要通过key查询数据

		if session.Get("hello") != "world" {
                        // 设置session数据,()
			                  session.Set("hello", "world")
                        // 删除session数据
                        session.Delete("tizi365")
                        // 删除整个session
                        session.Clear()
                        // 保存session数据
		                   	session.Save()
		}
                
		c.JSON(200, gin.H{"hello": session.Get("hello")})
	})
	r.Run(":8000")
  
}

```

**使用sessions 中间件注意要点：**

> 1. session 仓库其实就是一个 map[interface]interface 对象，所有 session可以存储任意数据
> 2. session 使用的编解码器是自带的gob，所以存储类似： struct、map 这些对象时需要先注册对象，不然会报错 `gob: type not registered for...`
> 3. session 存储引擎支持： cookie、内存、mongodb、redis、postgres、memstore、memcached 以及 gorm 支持的各类数据库（mysql、sqlite）
> 4. session 在创建时有一个配置项，可以配置session过期时间、cookie、domain、secure、path等参数
> 5. **调用 session 方法： Set()、 Delete()、 Clear()、方法后，必须调用一次 Save() 方法。否则session数据不会更新**

**gob注册案例**

```haskell
type User struct{
  Name string
}

gob.Register(User{})
```

**session配置项案例**

```yaml
// store 就是前面创建的存储引擎
store.Options(sessions.Options{
		Secure:   true,
		SameSite: 4,
		Path:     "/",
		MaxAge:   m.MaxAge,
	})
```

Cookie和Session的区别

> - Session存储数据在服务器端，Cookie在客户端
> - Session没有数据大小限制，Cookie有
> - Session数据更安全

### 7.1.3、基于session的登录验证

```golang
func LoginHtml(context *gin.Context) {
	context.HTML(200, "login.html", nil)
}
func Login(context *gin.Context) {
	// 获取登陆信息
	//roleId := context.PostForm("role_id")
	account := context.PostForm("user")
	pwd := context.PostForm("pwd")
	// 数据库查询
	var user User
	DB.Where("account = ? and pwd = ?", account, pwd).Find(&user)

	if user.ID != 0 {
		userId := strconv.Itoa(user.ID)
		//  登录成功
		// 初始化session对象
		session := sessions.Default(context)
		// 设置session数据,()
		session.Set("user_id", userId)
		session.Save()

		context.Redirect(http.StatusMovedPermanently, "/")

	} else {
		// 登录失败
		context.HTML(200, "login.html", gin.H{
			"err": "用户名或者密码错误",
		})

	}
}

func Logout(context *gin.Context) {

	// 初始化session对象
	session := sessions.Default(context)
	// 设置session数据,()
	session.Delete("user_id")

	context.Redirect(http.StatusMovedPermanently, "/login")

}

```

## 7.2、中间件

### 7.2.1、中间件语法

```golang
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func main()  {
  // 默认使用了2个中间件Logger(), Recovery()
	app := gin.Default()
	// 全局注册中间件
	app.Use(M1())
	app.Use(M2())
	app.GET("/", func(context *gin.Context) {
		fmt.Println("Hello yuan")
		context.Writer.WriteString("Hello World")
	})
	app.Run()
}

func M1() gin.HandlerFunc {
	return func(context *gin.Context) {
		// 路由处理前执行
		fmt.Printf("M1视图函数前执行\n")
		// context.Abort()
		context.Next()
		// 路由处理后执行
		fmt.Printf("M1视图函数后执行\n")
	}
}

func M2() gin.HandlerFunc {
	return func(context *gin.Context) {
		// 路由处理前执行
		fmt.Printf("M2视图函数前执行\n")
		context.Next()
		// 路由处理后执行
		fmt.Printf("M2视图函数后执行\n")
	}
}

```

### 7.2.2、中间件应用一：CORS

`gin.Default()`默认使用了`Logger`和`Recovery`中间件，其中：

- `Logger`中间件将日志写入`gin.DefaultWriter`，即使配置了`GIN_MODE=release`。
- `Recovery`中间件会recover任何`panic`。如果有panic的话，会写入500响应码。

如果不想使用上面两个默认的中间件，可以使用`gin.New()`新建一个没有任何默认中间件的路由。

注意：当在中间件或`handler`中启动新的`goroutine`时，**不能使用**原始的上下文（c *gin.Context），必须使用其只读副本（`c.Copy()`）。

**跨域配置中间件**

```golang
// 定义全局的CORS中间件
func Cors() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Add("Access-Control-Allow-Origin", "*")
        c.Next()
    }
}
```

**跨域配置中间件（高级请求配置）**

```go
func(c *gin.Context) {
		method := c.Request.Method
		origin := c.GetHeader("Origin")
		c.Header("Access-Control-Allow-Origin", origin) // 注意这一行，不能配置为通配符“*”号
		c.Header("Access-Control-Allow-Credentials", "true") // 注意这一行，必须设定为 true
		c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Cookie, Origin, X-Requested-With, Content-Type, Accept, Authorization, Token, Timestamp, UserId") // 我们自定义的header字段都需要在这里声明
		c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS,DELETE,PUT")
		c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type,cache-control")

		// 放行所有OPTIONS方法
		if method == "OPTIONS" {
			//c.AbortWithStatus(http.StatusNoContent)
			c.AbortWithStatus(http.StatusOK)
		}
		// 处理请求
		c.Next()
	}
```

### 7.2.3、中间件应用二：权限访问控制

```golang
package model

type User struct {
	ID      int    `gorm:"primaryKey"`
	Account string // 账号
	Pwd     string `gorm:"type:varchar(100);not null"`

	// 多对一
	RoleID int
	Role   Role
}

type Role struct {
	BaseModel
	Permissions []Permission `gorm:"many2many:role2permission;constraint:OnDelete:CASCADE;"`
}

type Permission struct {
	BaseModel
	Url string `gorm:"not null;"`
}

```

权限访问控制中间件：

```golang
package middlewares

import (
	. "css/database"
	. "css/model"
	"fmt"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm/clause"
	"net/http"
	"regexp"
	"strconv"
	"strings"
)

func PermissionMD() gin.HandlerFunc {
	return func(context *gin.Context) {

		// 1. 获取请求路径
		path := context.Request.URL.Path
		fmt.Println("path:::", path)
		// 2. 校验路径是否在白名单
		validUrlSlice := []string{"/login", "/reg", "^/static/.*", "/logout"}
		for _, validUrl := range validUrlSlice {
			// 自由路径
			re := regexp.MustCompile(validUrl)
			ret := re.FindAllStringSubmatch(path, -1)
			if len(ret) != 0 {
				context.Next()
				return
			}
		}
		// 3. 校验是否登录成功
		// 初始化session对象
		session := sessions.Default(context)
		userID := session.Get("user_id")
		fmt.Println("userID::::::", userID)
		if userID == nil {
			context.Redirect(http.StatusMovedPermanently, "/login")
			return
		}
		// 4. 判断登录用户是否拥有该路径权限

		var user User
		DB.Where("ID = ?", userID).Preload("Role.Permissions").Find(&user)
		fmt.Println("user permissions:", user.Role.Permissions)

		if user.RoleID == 1 || user.RoleID == 2 {
			fmt.Println("in student role......")
			// 登录人是学生
			// 当前登陆学生的学号
			var student Student
			DB.Where("user_id = ?", user.ID).Preload(clause.Associations).Find(&student)
			snoStr := strconv.Itoa(student.Sno)
			// 权限匹配
			for _, permission := range user.Role.Permissions {
				permissionUrlReg := strings.Replace(permission.Url, "\\d+", snoStr, -1)
				fmt.Println("permissionUrlReg", permissionUrlReg, path)

				re := regexp.MustCompile("^" + permissionUrlReg + "$")
				results := re.FindAllStringSubmatch(path, -1)

				if len(results) != 0 {
					// 拥有该路径权限并放行
					context.Keys["loginUser"] = student
					context.Next()
					return
				}
			}

		} else {
			fmt.Println("in admin role......")
			// 登录人为管理员admin
			var admin Admin
			DB.Where("user_id = ?", user.ID).Preload(clause.Associations).Find(&admin)
			// 正则匹配成功即可
			for _, permission := range user.Role.Permissions {
				re := regexp.MustCompile("^" + permission.Url + "$")
				results := re.FindAllStringSubmatch(path, -1)

				if len(results) != 0 {
					context.Keys["loginUser"] = admin
					context.Next()
					return
				}
			}
		}

		context.String(http.StatusForbidden, "Forbidden!!!")
		context.Abort()

	}
}

```

## 7.3、validator

`go-playground/validator`是一个用于Go语言的数据验证库，可以用于验证各种数据类型的内容，包括结构体、切片、数组、映射、字符串等等。

### 安装

您可以使用以下命令在Go中安装`go-playground/validator`：

```bash
go get github.com/go-playground/validator/v10
```

### 基本使用

下面是一个使用`go-playground/validator`的示例：

```go
package main

import (
	"fmt"
	"github.com/go-playground/validator/v10"
)

type User struct {
	Name  string `validate:"required"`
  Age   int    `validate:"required,gte=18,lte=30"`
	Email string `validate:"required,email"`
}

func main() {
	user := &User{
		Name:  "John Doe",
    Age:   16,
		Email: "johndoe@example.com",
	}

	validate := validator.New()
	err := validate.Struct(user)
	if err != nil {
		// Handle validation error
		fmt.Println(err)
    // Handle validation error
		for _, err := range err.(validator.ValidationErrors) {
			fmt.Printf("Field %s failed validation with error '%s'\n", err.Field(), err.Tag())
		}
	}
}
```

在上面的示例中，我们定义了一个名为`User`的结构体，该结构体包含两个字段`Name`和`Email`。`Name`字段使用`required`标记来确保它的值不为空，`Email`字段使用`required`和`email`标记来确保它的值不为空并且是一个有效的电子邮件地址。

我们使用`validator.New()`创建了一个新的验证器实例，然后使用`validate.Struct()`方法对`user`进行验证。如果验证失败，`validate.Struct()`方法将返回一个`validator.ValidationErrors`类型的错误，其中包含有关验证失败的字段以及错误消息的详细信息。

可以在下面的示例中找到更多关于如何使用`go-playground/validator`的信息：

### 自定义验证器

可以使用`go-playground/validator`创建自定义验证器来验证不同类型的数据。例如，以下是一个使用自定义验证器验证URL的示例：

```go
package main

import (
	"fmt"
	"github.com/go-playground/validator/v10"
	"net/url"
)

func validateURL(fl validator.FieldLevel) bool {
	value := fl.Field().String()
	_, err := url.ParseRequestURI(value)
	return err == nil
}

type User struct {
	Name string `validate:"required"`
	URL  string `validate:"required,url"`
}

func main() {
	user := &User{
		Name: "John Doe",
		URL:  "invalid-url",
	}

	validate := validator.New()
	validate.RegisterValidation("url", validateURL)

	err := validate.Struct(user)
	if err != nil {
		// Handle validation error
		for _, err := range err.(validator.ValidationErrors) {
			fmt.Printf("Field %s failed validation with error '%s'\n", err.Field(), err.Tag())
		}
	}
}
```

在上面的示例中，我们定义了一个名为`validateURL`的自定义验证器函数，该函数接受`validator.FieldLevel`类型的参数，该参数包含了有关正在验证的字段的信息。在此示例中，我们使用该函数来验证`URL`字段的值是否是一个有效的URL。我们使用`validator.RegisterValidation()`方法将该自定义验证器注册为`url`标记的值，以便在结构体上使用。

### 跨字段验证

有时，您可能需要验证多个字段之间的关系，例如，确保两个字段的值相等。`go-playground/validator`允许您定义跨字段验证器来验证多个字段之间的关系。以下是一个使用`eqfield`标记验证两个字段值相等的示例：

```go
package main

import (
	"fmt"
	"github.com/go-playground/validator/v10"
)

type User struct {
	Password         string `validate:"required"`
	PasswordConfirm  string `validate:"required,eqfield=Password"`
}

func main() {
	user := &User{
		Password:        "password",
		PasswordConfirm: "wrong-password",
	}

	validate := validator.New()
	err := validate.Struct(user)
	if err != nil {
		// Handle validation error
		for _, err := range err.(validator.ValidationErrors) {
			fmt.Printf("Field %s failed validation with error '%s'\n", err.Field(), err.Tag())
		}
	}
}
```

在上面的示例中，我们定义了一个名为`User`的结构体，其中包含两个字段`Password`和`PasswordConfirm`。`Password`字段使用`required`标记来确保它的值不为空，`PasswordConfirm`字段使用`required`和`eqfield=Password`标记来确保它的值不为空并且等于`Password`字段的值。

我们使用`validator.Struct()`方法对`user`进行验证，如果验证失败，我们将遍历错误列表并输出有关验证失败的字段以及错误消息的详细信息。

### 结论

以上是`go-playground/validator`的详细文档和示例代码。`go-playground/validator`是一个非常强大和灵活的数据验证库，可以用于验证各种数据类型的内容。它支持标记验证器、自定义验证器和跨字段验证器等功能，可以满足您在实际项目开发中的需求。

## 7.4 、Ajax方法

### Ajax介绍

客户端（浏览器）向服务端发起请求的形式：

> 1. 地址栏：GET
> 2. 超链接标签：GET
> 3. form表单：GET或POST
> 4. Ajax（重要）：GET或POST或PUT或DELETE

AJAX（Asynchronous Javascript And XML）翻译成中文就是“异步Javascript和XML”。即使用Javascript语言与服务器进行异步交互，传输的数据为XML（当然，传输的数据不只是XML,现在更多使用json数据）。

AJAX的特点和优点：

- 异步
- 局部刷新

应用：

![image-20210812104733820](http://www.yuan316.com/post/Django3.2%E6%A1%86%E6%9E%B6/assets/image-20210812104733820.png)

### axios模块

```js
axios({
  method: 'get', // 请求方法默认是get
  url: 'https://example.com/api', // 请求的URL
  params: { // GET请求时的参数
    id: 123,
    name: 'example'
  },
  data: { // POST请求时的数据
    id: 123,
    name: 'example'
  },
  headers: { // 请求头
    'Content-Type': 'application/json'
  },
  responseType: 'json', // 响应数据的类型
  timeout: 10000, // 超时时间
  withCredentials: true // 是否携带cookie
})
.then(function (response) { // 响应成功回调
  console.log(response);
})
.catch(function (error) { // 响应失败回调
  console.log(error);
});
```

### 应用案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.global.js"></script>
    <script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script>
    <style>
        #app {
            font-family: 'Helvetica Neue', sans-serif;
            font-size: 16px;
            margin: 0 auto;
            max-width: 800px;
            padding: 50px 20px;
        }

        input[type=text] {
            padding: 10px;
            margin-right: 10px;
            border-radius: 5px;
            border: none;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            font-size: 14px;
            width: 200px;
        }

        button {
            background-color: #369;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 30px;
        }

        th {
            background-color: #369;
            color: white;
            font-weight: bold;
            text-align: center;
            padding: 10px;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #e2e2e2;
        }

        td:nth-child(1) {
            width: 25%;
        }

        td:nth-child(2) {
            width: 25%;
        }

        td:nth-child(3) {
            width: 25%;
        }

        td:nth-child(4) {
            width: 25%;
        }
    </style>

</head>
<body>

<div id="app">
    <div>
        <p><input type="text" v-model="city">
            <button @click="get_weather">获取天气</button>
        </p>
        <table v-if="weather_list.length>1">
            <tr>
                <th>日期</th>
                <th>天气</th>
                <th>温度</th>
                <th>风向</th>
            </tr>
            <tr v-for="weather in weather_list">
                <td>{{weather.day}}</td>
                <td>{{weather.wea_day}}</td>
                <td>{{weather.tem2}}-{{weather.tem1}}</td>
                <td>{{weather.air_level}}</td>
            </tr>
        </table>
    </div>
</div>

<script>

    vm = Vue.createApp({
        data() {
            return {
                city: "北京",
                weather_list: [],
            }
        },
        methods: {
            get_weather() {
                // 发送http请求获取天气
                axios.get("https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=47284135&appsecret=jlmX3A6s", {
                    params: {
                        city: this.city,
                    }
                }).then(response => {
                    console.log(response.data.data);
                    this.weather_list = response.data.data;
                }).catch(error => {
                    console.log(error);
                })
            }
        },
        created(){
            this.get_weather()
        }

    }).mount('#app')
</script>

</body>
</html><!DOCTYPE html>

```

![image-20230723133607017](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/image-20230723133607017-0090568.png)

# 八、前后端分离

## 8.1、web应用模式

在开发Web应用中，有两种应用模式：

1. 前后端不分离[客户端看到的内容和所有界面效果都是由服务端提供出来的。]

![前后端不分离](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/depended_frontend_backend.png)

2. 前后端分离【把前端的界面效果(html，css，js分离到另一个服务端，python服务端只需要返回数据即可)】

前端形成一个独立的网站，服务端构成一个独立的网站

![前后端分离](https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/golang/assets/indepent_frontend_backend-16318493319127.png)

应用程序编程接口（Application Programming Interface，API接口），就是应用程序对外提供了一个操作数据的入口，这个入口可以是一个函数或类方法，也可以是一个url地址或者一个网络地址。当客户端调用这个入口，应用程序则会执行对应代码操作，给客户端完成相对应的功能。

## 8.2、restful api规范

当然，api接口在工作中是比较常见的开发内容，有时候，我们会调用其他人编写的api接口，有时候，我们也需要提供api接口给其他人操作。由此就会带来一个问题，api接口往往都是一个函数、类方法、或者url或其他网络地址，不断是哪一种，当api接口编写过程中，我们都要考虑一个问题就是这个接口应该怎么编写？接口怎么写的更加容易维护和清晰，这就需要大家在调用或者编写api接口的时候要有一个明确的编写规范！！！

为了在团队内部形成共识、防止个人习惯差异引起的混乱，我们都需要找到一种大家都觉得很好的接口实现规范，而且这种规范能够让后端写的接口，用途一目了然，减少客户端和服务端双方之间的合作成本。

目前市面上大部分公司开发人员使用的接口实现规范主要有：restful、RPC。

REST全称是Representational State Transfer，中文意思是表述（编者注：通常译为表征）性状态转移。 它首次出现在2000年Roy Fielding的博士论文中。

RESTful是一种专门为Web 开发而定义API接口的设计风格，尤其适用于前后端分离的应用模式中。

关键：**面向资源开发**

这种风格的理念认为后端开发任务就是提供数据的，对外提供的是数据资源的访问接口，所以在定义接口时，客户端访问的URL路径就表示这种要操作的数据资源。

而对于数据资源分别使用POST、DELETE、GET、UPDATE等请求动作来表达对数据的增删查改。

| 请求方法 | 请求地址   | 后端操作        |
| :------- | :--------- | :-------------- |
| POST     | /student/  | 增加学生        |
| GET      | /student/  | 获取所有学生    |
| GET      | /student/1 | 获取id为1的学生 |
| PUT      | /student/1 | 修改id为1的学生 |
| DELETE   | /student/1 | 删除id为1的学生 |

restful规范是一种通用的规范，不限制语言和开发框架的使用。事实上，我们可以使用任何一门语言，任何一个框架都可以实现符合restful规范的API接口。

