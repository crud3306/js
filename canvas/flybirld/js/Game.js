(function(){
	var Game = window.Game = function(params){

		// 数据地址
		this.Rjsonurl = params.Rjsonurl;

		// 得到画布
		this.canvas = document.querySelector(params.canvasId);
		// 如果不带#号
		// this.canvas = document.getElementById(id);

		// 上下文
		this.ctx = this.canvas.getContext("2d");

		// 帧编号
		this.fno = 0;

		// 设置宽高
		this.init();

		var self = this;

		// 读取资源
		this.loadAllResource(function(){
			self.start();
		});
	}

	// 初始化，设置画布宽高
	Game.prototype.init = function(){
		// 读取视口的宽度与高度
		var windowW = document.documentElement.clientWidth;
		var windowH = document.documentElement.clientHeight;

		if (windowW > 414) {
			windowW = 414;
		} else if (windowW < 320) {
			windowW = 320;
		}

		// 736，开发时可以临时用660，为了不显示竖向滑动条
		if (windowH > 736) {
			windowH = 736;
		} else if (windowH < 500) {
			windowH = 500;
		}

		this.canvas.width = windowW;
		this.canvas.height = windowH;
	}

	// 读取资源
	Game.prototype.loadAllResource = function(callback){
		// 准备一个R对象
		this.R = {};
		var self = this;

		// 图片加载计数器
		var alreadyDoneNum = 0;

		// 发出请求，请求json文件
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {

				console.log(xhr.responseText);

				// json字串转为json对象
				var Robj = JSON.parse(xhr.responseText);
				// console.log(Robj);
				var imgLength = Robj.images.length;

				for (var i = 0; i < imgLength; i++) {
					// 创建一个同名的key
					self.R[Robj.images[i].name] = new Image();

					// 请求
					self.R[Robj.images[i].name].src = staticUrl + Robj.images[i].url;
					// 监听
					self.R[Robj.images[i].name].onload = function(){
						// 图片加载计数器加1
						alreadyDoneNum++;

						// 清屏
						self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

						// 提示文字
						var txt  = "正在加载资源 " + alreadyDoneNum + "/" + imgLength + "，请稍后...";
						self.ctx.textAlign = "center";
						self.ctx.font = "16px 微软雅黑";
						// 0.618 黄金分割点
						self.ctx.fillText(txt, self.canvas.width/2, self.canvas.height*(1-0.618));

						// 是否加载完毕
						if (alreadyDoneNum == imgLength) {
							console.log("资源加载完毕");
							callback();
						}
					}
				}

			}
		}
		// xhr.open("get", "json/r.json", true);
		xhr.open("get", staticUrl+this.Rjsonurl, true);
		xhr.send(null);
	}

	// 开始游戏
	Game.prototype.start = function(){
		var self = this;

		// 实例化背景
		this.background = new Background();
		// 实例化大地
		this.land = new Land();

		this.pipArr = [];

		// 实例化小鸟
		this.bird = new Bird();
		

		// 设置定时器
		this.timer = setInterval(function(){
			// 清屏
			self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

			// 帧编号加1
			self.fno++;


			// 更新、渲染背景
			self.background.update();
			self.background.render();

			// 更新、渲染大地
			self.land.update();
			self.land.render();

			// 更新、渲染小鸟
			self.bird.update();
			self.bird.render();

			// 更新、渲染管子
			for (var i = 0; i < self.pipArr.length; i++) {
				self.pipArr[i].update();
				self.pipArr[i] && self.pipArr[i].render();
			}
			// 每多帧实例化一个管子
			self.fno % 100 == 0 && new Pipe();


			// 显示帧编号
			self.ctx.font = "16px consolas";
			self.ctx.textAlign = "left";
			self.ctx.fillText('当前帖：'+self.fno, 10, 20);

		}, 20);
	}

})();





























