  
安装react官方Create React App 脚手架  
------------
> npm install -g create-react-app  
注：npm较慢，可以更改淘宝镜像  
  

通过脚手脚快速创建项目  
------------
> create-react-app my-app  
  
  
进入项目目录   
------------ 
> cd my-app  

目录：    
node_modules： 这里面包含了react项目中会用到的一些组件，install的时候下载下来的；  
  
public：里面包含了我们项目中的启动页面，react比较适合单页面项目应用开发，所以暂时只包含一个index.html，并且这也是react工程的入口页面，入口页面怎么理解，就是你启动项目后，打开的首页，第一眼呈现的那个页面；  
  
src：里面包含了一些我们自己使用的js文件，css文件，img文件等等，但你打开src文件夹你会发现很混乱，不要管什么app.js，你就看到index.js即可，系统默认将index.html对准了index.js，index.js也就是我们的入口js，他和public/index.html所对应。   
   
我们可以自已重新更改目录结构。  
src文件夹下原来的所有东西，除了index.js之外，都可以删掉。但是需要更改index.js文件，去掉引改app.js，然后自已在src下建几个想要的目录，比如：js, img ,css等  
  
  
启动项目  
------------
> npm start  
然后http://localhost:3000就可以访问项目了  
  
打包发布  
------------
> npm run build  
注：发布后的代码，一般在工程目录的的build目录中  
  
  
本地调试时api代理地址  
------------
打开node_modules/react-scripts/config/webpackDevServer.config.js  
```nodejs
proxy : {
	'/api': {
		target: 'http://xxxx.com',
		secure: false,
		changeOrigin: true
	}
}
```
  


  


