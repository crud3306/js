  
webpack 入门参考地址：  
--------------
https://segmentfault.com/a/1190000006178770 （快速入门）  
https://segmentfault.com/a/1190000008584933  
   
  
  
什么是Webpack  
--------------
WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。  
  
  
  
// 一个常见的`webpack`配置文件  
```nodejs
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
        output: {
            path: __dirname + "/build",
            filename: "bundle-[hash].js"
        },
        devtool: 'none',
        devServer: {
            contentBase: "./public", //本地服务器所加载的页面所在的目录
            historyApiFallback: true, //不跳转
            inline: true,
            hot: true
        },
        module: {
            rules: [{
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }, {
                            loader: "postcss-loader"
                        }],
                    })
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
};
```
  
注：react脚手架创建的react项目，自动就安装了webpack及webpack的一些插件。  
  
如果是从零开始搭建项目，则需一步步安装  
  
创建项目目录，并进入项目目录中  
> mkdir hello_project  
> cd hello_project  
> npm init // 初始化项目，自动生成package.json文件  
  
安装webpack可以选择全部安装，也可以仅为该项目安装，方式如下：  
// 全局安装  webpack  
> npm install -g webpack   
  
// 安装到你的项目目录    
> npm install --save-dev webpack    
  

  



  







