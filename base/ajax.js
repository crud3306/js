
// ===================
// 原生ajax
// ===================
var xhr = new XMLHttpRequest();

// 如果是get 
// --------------
// xhr.open("POST", url, true);

// 如果是post
// --------------
xhr.open("POST", url, true);
// 添加http头，发送信息至服务器时内容编码类型
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  

xhr.onreadystatechange = function() {
  // console.log(xhr);
  if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {

  	console.log(xhr.responseText);
  	// json字串转为json对象
	// var R_Obj = JSON.parse(xhr.responseText);
	// console.log(R_Obj);
  }
};

// 如果为get，get的参数要直接拼在url后面
// xhr.send();

// 如果为post
// 原生ajax传递的data 应为'a=a1&b=b1'这种字符串格式
var data = 'a=a1&b=b1';
xhr.send(data);



// 封装get 与 post
// ===================
var Ajax={
  get: function(url, fn) {
    // XMLHttpRequest对象用于在后台与服务器交换数据   
    var xhr = new XMLHttpRequest();            
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
      // console.log(xhr);
      // readyState == 4说明请求已完成
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 

      	// json字串转为json对象
		// var R_Obj = JSON.parse(xhr.responseText);
		// console.log(R_Obj);

        // 从服务器获得数据 
        fn.call(this, xhr.responseText);  
      }
    };

    xhr.send();
    // xhr.send(null);
  },
  // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    xhr.onreadystatechange = function() {
      // console.log(xhr);
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
      	// json字串转为json对象
		// var R_Obj = JSON.parse(xhr.responseText);
		// console.log(R_Obj);

        fn.call(this, xhr.responseText);
      }
    };

    xhr.send(data);
  }
}




// ===================
// jquery ajax
// ===================
$.ajax({
    url: ,
    type: '',
    dataType: '',
    data: {
          
    },
    success: function(){
         
    },
    error: function(){
          
    }
 })

// 例：
	









