(function(){
	// 管子类
	var Pipe = window.Pipe = function(){
		// 自已的背景
		this.imageup = game.R.pipe_up;
		this.imagedown = game.R.pipe_down;

		// 图片本身的真实高度
		this.picheight = 320;
		// 图片本身的真实宽度
		this.picwidth = 52;

		// 总高 包括上管子高度 + 空隙 + 下管子的高度
		this.allheight = game.canvas.height * 0.75;
		// 空隙
		this.interspace = 120;
		
		// 随机一个上管子高度
		this.height1 = this.interspace + parseInt(Math.random()*(this.picheight - this.interspace));
		// 下管子的高度
		this.height2 = this.allheight - this.interspace - this.height1;

		// 自已的位置
		this.x = game.canvas.width;

		// 将自已推入管子数组
		game.pipArr.push(this);
	}

	// 更新
	Pipe.prototype.update = function(){
		this.x -= 2;

		// 移动到看不见后，删除
		if (this.x <= -game.canvas.width) {
			this.godie();
		}
	}

	// 自杀
	Pipe.prototype.godie = function() {
		for (var i = 0; i < game.pipArr.length; i++) {
			if (game.pipArr[i] === this) {
				game.pipArr.splice(i, 1);
			}
		}
	}

	// 渲染
	Pipe.prototype.render = function(){
		game.ctx.drawImage(this.imagedown, 0, this.picheight - this.height1, this.picwidth, this.height1, this.x, 0, this.picwidth, this.height1);
		game.ctx.drawImage(this.imageup, 0, 0, this.picwidth, this.height2, this.x, this.interspace+this.height1, this.picwidth, this.height2);


		// 渲染大地的猫腻矩形
	}
})();

























