(function(){
	// 背景类
	var Background = window.Background = function(){
		// 自已的背景
		this.image = game.R.bg_day;

		// 自已的x, y (396是北京图片中草地以上的部分的高度，0.75这个小数可以按自已喜好来设)
		this.x = 0;
		this.y = 0.75 * game.canvas.height - 396;
		this.w = 288;	// 图片真实宽
		this.h = 512;	// 图片真实高

		this.speed = 1; // 速度
	}

	// 更新
	Background.prototype.update = function(){
		this.x -= this.speed;

		// 跑马灯原理，克隆图片，等克隆的图片左边到达边线，瞬间拉回
		if (this.x < -this.w) {
			this.x = 0;
		}
	}

	// 渲染
	Background.prototype.render = function(){

		// 渲染天空的猫腻矩形
		game.ctx.fillStyle = "#4EC0CA";
		game.ctx.fillRect(0, 0, game.canvas.width, this.y + 10);


		// 渲染草丛的猫腻矩形
		game.ctx.fillStyle = "#5EE270";
		// console.log(game.canvas.height, this.h, this.y);
		game.ctx.fillRect(0, this.y + this.h, game.canvas.width, game.canvas.height - this.h - this.y);


		// 渲染背景图片
		game.ctx.drawImage(this.image, this.x, this.y);
		game.ctx.drawImage(this.image, this.x + this.w, this.y);
		game.ctx.drawImage(this.image, this.x + this.w * 2, this.y);

	}
})();




























