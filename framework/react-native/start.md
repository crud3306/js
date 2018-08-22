  
安装react-native-cli  
----------------
> npm install -g react-native-cli  
  
创建/初始化项目  
----------------
react-native init 项目名  
如：  
> react-native init FirstApp  
  
  
运行ios项目  
----------------
cd 进入项目中  
> react-native run-ios  
  
启动后，command+d 呼出ios模拟器中的调试菜单  
  
  
运行android项目   
----------------
注：先启动安卓模拟器，或安卓手机已连接电脑  
  
cd 进入项目中  
> react-native run-android  
  
启动后，command+m 呼出android模拟器中的调试菜单  
  
  
  
真机测试  
----------------
1 添加账号   
> xcode - 首选项 - accounts - 左下角加号添加  
  
2 把自已的iphone 设为可调试设备  
> window - devices and simulators - 勾选Connect via network   
> 然后就可以xcode左上角切换调试设备时选择该手机了  
   
3 为项目选择signing team  
> 点击xcode左侧树状目录中 该项目名称 - signing项目 选择你添加的账号对应的team  
  
设完1，2，3步，然后点击开始，就能在手机上测试了。  
注：  
本过程中可能会提示一权限问题，按提示操作即可。  
  
如：    
需手机设置信任本证书： 设置 - 通用 - 设备管理 - 选择对应证书 - 设置为信任  
  








取窗口尺寸与分辩率  
----------------
var Dimensions = require(‘Dimensions’);  
一次取一个  
var width = Dimensions.get(‘window’).width;  
或者一次取多个  
var {width, height, scale} = Dimensions.get(‘window’);  
  







