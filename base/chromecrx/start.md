
  
参考地址：  
------------
https://www.w3cschool.cn/kesyi/kesyi-m5uo24rx.html  
   
  
在应用商店中下载下来的插件基本上都是以.crx为文件后缀，该文件其实就是一个压缩包，包括插件所需要的html、css、javascript、图片资源等等文件。解压后目录中的文件如下面文件清单。  
  
文件清单
------------
manifest.json是整个插件的功能及文件配置清单，非常重要。  
static目录是放置整个插件的静态资源文件的，包括css、js、图片等等资源  
template目录是放置整个插件的功能页面模板的。  
_locales目录是放置整个插件的国际化语言脚本的。  
  
  
manifest.json  
------------
```json
{  
  	"name": "coffee",
  	"manifest_version":2,
	"version": "1.0",  
	"description": "coffee test",  
	"browser_action": {  
	   "default_icon": "icon.png" ,
	   //"default_title": "My Task List",
       //"default_popup": "popup.html"
	 },
	 //"background": {
	    //"page": "background.html"	// 也可以在该页面中引入相关js
	 //},
	 "content_scripts": [{
	     "matches": ["http://*/*","https://*/*"], 	// 这里指定生区配的网址，这里设的是全部
	     "js": ["js/jquery-1.9.1.min.js", "js/test.js"], //这里指定的js, 会自动载入并运行
	     //"run_at": "document_start",
	     //"all_frames": true 
	}],
  	//"permissions": [   
   	 	//"tabs", "http://*/*","https://*/*"  
  	//]
}
```

  





