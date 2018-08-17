(function(){
	// 管子类
	var Bird = window.Bird = function(){
		// 随机一种小鸟
		this.color = parseInt(Math.random()*3);

		this.imageArr = [
				game.R['bird'+this.color+"_0"],
				game.R['bird'+this.color+"_1"],
				game.R['bird'+this.color+"_2"],
			]
		
		// 翅膀状态
		this.wingStep = 0;

		// 小鸟位置，这个位置是真实物理地址
		// 小鸟图片宽48
		this.w = 48;
		this.x = game.canvas.width*(1-0.618) - this.w/2;
		this.y = 100;

		// 鸟帧
		this.fno = 1;
		// 角度
		this.d = 0;

		// 是否拥有能量
		this.hasEnergy = false;
	}

	// 更新
	Bird.prototype.update = function(){
		// 翅膀状态，每固定帖数扑打一次
		game.fno % 6 == 0 && this.wingStep++;
		if (this.wingStep > 2) {
			this.wingStep = 0;
		}

		// 如果没有能量
		if (!this.hasEnergy) {
			// 算法要掉落
			this.y += this.fno * 0.6;
			
		} else {
			this.y -= (20 - this.fno) * 0.8;
			if (this.fno > 20) {
				this.hasEnergy = false;
			}
		}

		this.d += 0.05;
			this.fno++;
	}

	

	// 渲染
	Bird.prototype.render = function(){
		game.ctx.save();

		game.ctx.translate(this.x-24, this.y-24);
		game.ctx.rotate(this.d);
		game.ctx.drawImage(this.imageArr[this.wingStep], -24, -24);

		game.ctx.restore();
	}
})();

























