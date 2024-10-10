

web应用程序：处理来自浏览器的请求响应的服务

浏览器本质是一个解释器



标签分为：
   块级标签（block）
      1. 独占一行
      2. 可以设置长宽

      h1-h6
      p
      div
      ul
      li

   内联标签（inline）

      1. 按内容占宽
      2. 不可以设置长宽
    
      b strong
      a
      img
      input



嵌套原则：
    块级标签可以嵌套内联 ，也可以嵌套块级（p标签除外）
    内联嵌套内联



向服务器发送请求的形式：

1. 浏览器的地址栏    GET
2. a标签    GET
3. form表单   GET/POST

4. ajax请求   GET/POST   js的技术



css选择器优先级
行内式：1000
id：100
class：10
标签名：1
!important



css布局： 如何将多个可以设置长宽的元素在一行显示


div+css （基于盒模型）



超链接： 

```html
 <p> <a> href="https://www.zlqit.com"</a> </p>
```



img标签

```html
<p> <a href="https://www.zlqit.com"> 基本标签a</a> </p>
    <a href="https://picx.zhimg.com/70/v2-2003d5ac020c637c011f8d43616a4012_1440w.avis?source=172ae18b&biz_tag=Post"><img width="100px" height="100px" src="https://pica.zhimg.com/v2-1b18950ad61cdfd9bdae1968f082a4f0_r.webp?source=172ae18b&consumer=ZHI_MENG"></a>

//可以添加title，悬浮显示 
```



列表

```html
<ol> 
    <li> 河北省</li>
    <li> 北京市</li>
    <li> 山东省</li>
</ol>
---有序
<ul> 
    <li> 河北省</li>
    <li> 北京市</li>
    <li> 山东省</li>
</u1>
---无序
```





table 

rowspan可以实现合并占几行

```html
<table border="1">  
   <tr> 
     <td> 姓名</td>
     <td> 年龄</td>
     <td> 薪资</td>
   </tr>

   <tr> 
    <td> 张三</td>
    <td> 22</td>
    <td> 23</td>
  </tr>

  <tr> 
    <td> 王五</td>
    <td> 23</td>
    <td rowspan="2"> 22</td>
  </tr>

  <tr> 
    <td> 李四</td>
    <td> 24</td>
  </tr>
</table>
```



表单标签

```html
<form action=""> 
    <p> 姓名： <input type="text"></p>
    <p> 密码:  <input type="password"></p>
    <p> 提交： <input type="submit"></p>
</form>

submit 点击提交之后，会打包form表单中的键值对，发送给浏览器，如果没有键，就会打包失败
默认请求方式就是get
get和post区别在于: 请求放在url中是get请求，如果放在请求体中，属于post请求


```



```html
   <form action="">
        <p> 姓名: <input type="text" name="user"></p>
        <p> 密码: <input type="password" name="pwd"></p>
        <p>
            爱好: 
            <input type="checkbox" name="hobby" value="lanqiu" checked> 篮球
            <input type="checkbox" name="hobby" value="zuqiu"> 足球 
        </p>
        <p> 
            性别: 
            <input type="radio", name="sex" value="1" checked> 男
            <input type="radio", name="sex" value="0" > 女
        </p>
        <p>
            生日: 
            <input type="date" name="birth" value="2012-12-12">
        </p>

        <p> 
            <input type="button"   value="button" onclick="alert(123)">
        </p>

        <p>
            <select name="province" multiple>
                <option> 河北省</option>
                <option selected> 甘肃省</option>
                <option> 青海省</option>
            </select>
        </p>
        <p> 
           <textarea placeholder="简介" name="jianjie" cols="30" rows="10">afsfddfsdfdsfsd</textarea>
        </p>
        <p><input type="submit"></p>
    </form>
```



