// 闭包

// 函数的自我调用
// ===================
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
console.log(add());
console.log(add());
console.log(add());
// 最后：counter为 3


// 封装单个闭包类
// ===================
(function(){
	var QTest = window.QTest = function(){
		this.x = 1;
	}

	QTest.prototype.play = function(){
		this.x = 2;
		console.log(this.x);
	}

	QTest.prototype.play1 = function(){
		this.x = 3;
		console.log(this.x);
	}
})();

// 外面使用时 
// -------------------
// 通过<script src="xxx.js"></script> 加载到模板
// 然后直接用 
// QTest.play(); 
// QTest.play1();





















