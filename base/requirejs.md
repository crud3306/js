
requireJs
--------------
nodejs 里才有 var xxx = require("xxxx.js")，在js里面没有。

但js里可以借助require.js 来实现js模块化。

  
  
普通编写方式
--------------
index.html  
```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="a.js"></script>
    </head>
    <body>
      <span>body</span>
    </body>
</html>
```

a.js   
```js
function fun1(){
  alert("it works");
}
fun1();

// 可能你更喜欢这样写

(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})()
```
第二种方法使用了块作用域来申明function防止污染全局变量，本质还是一样的，当运行上面两种例子时不知道你是否注意到，alert执行的时候，html内容是一片空白的，即<span>body</span>并未被显示，当点击确定后，才出现，这就是JS阻塞浏览器渲染导致的结果。  
  
  
  
requirejs写法
--------------
当然首先要到requirejs的网站去下载js -> requirejs.org  
index.html:  
```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="require.js"></script>
        <script type="text/javascript">
          // 通过define函数定义了一个模块，然后再页面中使用：require(["xxx/a"]) 来加载
          require(["a"]);
        </script>
    </head>
    <body>
      <span>body</span>
    </body>
</html>
```
a.js:  
```js
define(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})
```
浏览器提示了"it works"，说明运行正确，但是有一点不一样，这次浏览器并不是一片空白，body已经出现在页面中。  
  
目前为止可以知道requirejs具有如下优点：  
  
防止js加载阻塞页面渲染  
使用程序调用的方式加载js，防止出现如下丑陋的场景  
```html
<script type="text/javascript" src="a.js"></script>
<script type="text/javascript" src="b.js"></script>
<script type="text/javascript" src="c.js"></script>
<script type="text/javascript" src="d.js"></script>
<script type="text/javascript" src="e.js"></script>
<script type="text/javascript" src="f.js"></script>
<script type="text/javascript" src="g.js"></script>
<script type="text/javascript" src="h.js"></script>
<script type="text/javascript" src="i.js"></script>
<script type="text/javascript" src="j.js"></script>
```
  

上面说的是加载本地的文件，如果加载远程的文程。以jquery为例： 
```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
    }
})
require(["jquery","js/a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

这边涉及了require.config，require.config是用来配置模块加载位置，简单点说就是给模块起一个更短更好记的名字，比如将百度的jquery库地址标记为jquery，这样在require时只需要写["jquery"]就可以加载该js，本地的js我们也可以这样配置：  
```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

通过paths的配置会使我们的模块名字更精炼，paths还有一个重要的功能，就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库，如：
```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```
  
这样配置后，当百度的jquery没有加载成功后，会加载本地js目录下的jquery。

注意：
在使用requirejs时，加载模块时不用写.js后缀的，当然也是不能写后缀
上面例子中的callback函数中发现有$参数，这个就是依赖的jquery模块的输出变量，如果你依赖多个模块，可以依次写入多个参数来使用：
```js
require(["jquery","underscore"],function($, _){
    $(function(){
        _.each([1,2,3],alert);
    })
})
```

全局配置 (在script 标签上加 data-main属性)
--------------
上面的例子中重复出现了require.config配置，如果每个页面中都加入配置，必然显得十分不雅，requirejs提供了一种叫"主数据"的功能，我们首先创建一个main.js：
```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
```
然后再页面中使用下面的方式来使用requirejs：
```html
<script data-main="js/main" src="js/require.js"></script>
```
解释一下，加载requirejs脚本的script标签加入了data-main属性，这个属性指定的js将在加载完reuqire.js后处理，我们把require.config的配置加入到data-main后，就可以使每一个页面都使用这个配置，然后页面中就可以直接使用require来加载所有的短模块名。
  
   
   
   
入门例子：
--------------
https://www.jb51.net/article/119496.htm












