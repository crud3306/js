(function(){
	// 
	var Land = window.Land = function(){
		// 自已的背景
		this.image = game.R.land;

		this.x = 0;
		this.y = 0.75 * game.canvas.height;
		this.w = this.image.width;
		this.h = this.image.height;
	}

	// 更新
	Land.prototype.update = function(){
		this.x -= 2;
		if (this.x <= -this.w) {
			this.x = 0;
		}
	}

	// 渲染
	Land.prototype.render = function(){
		game.ctx.drawImage(this.image, this.x, this.y);
		game.ctx.drawImage(this.image, this.x + this.w, this.y);
		game.ctx.drawImage(this.image, this.x + this.w*2, this.y);


		// 渲染大地的猫腻矩形
		game.ctx.fillStyle = "#DED895";
		// console.log(game.canvas.height, this.h, this.y);
		game.ctx.fillRect(0, this.y + this.h, game.canvas.width, game.canvas.height * 0.25);
	}
})();

























