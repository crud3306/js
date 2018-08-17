//JS封装类逐步优化：可直接看最后
 
//向对象强大的优点之一是能够创建自己专用的类或者对象，封装一组属性和行为。抛开性能来说，JS要比面向对象语言如JAVA要灵活好用的多，组装数据结构很灵活方便。那么我们如何来用面向对象的思维来定义JavaScript的类或对象呢？

//问题的出现

//========================
// 如果要抽象出来一个人，那么简单的属性为:name,sex,birthday等，方法为:sayHi,最初级的写法就是
//========================
var oPerson = new Object;  
oPerson.name = "zs";  
oPerson.sex = 'boy';  
oPerson.birthday = '2001-02-03';  
oPerson.sayHi = function()  
{  
   alert("Hi ! I am "+this.name);  
}  
//那么我们要多创建几个人，怎么办呢？就得再写几个Object,那得哭死，那么怎么办呢？看下面的几种解决方案：

 

//========================
// 改进版
//========================
functon createPerson(name,sex,birthday)  
{  
  var oPerson = new Object;  
  oPerson.name =name;  
  oPerson.sex = sex;  
  oPerson.birthday = birthday;  
   
  oPerson.sayHi = function()  
  {  
    alert("Hi ! I am "+this.name);  
  }  
  return oPerson;  
}  
  
//那么我们多创建几个人的话，就可以  
var person1 = new createPerson('zs','boy','2001-02-03');  
var person2 = new createPerson('ls','boy','2001-02-04');  
person1.sayHi();  
person2.sayHi();  
//看上去，似乎解决了，但是问题是 你创建几个人就创建了几个sayHi行为，但是他们都是一个功能，怎么办呢？JS的灵活造就了下面的解决方法，把方法作为一个对象的属性：

//========================
// 方案继续改进
//========================
function sayHi()  
{  
  alert("Hi ! I am "+this.name);  
}  
  
functon createPerson(name,sex,birthday,fn)  
{  
  var oPerson = new Object;  
  oPerson.name =name;  
  oPerson.sex = sex;  
  oPerson.birthday = birthday;  
  oPerson.sayHi = sayHi;//这里是个函数引用  
  return oPersn;  
}  
var person1 = new createPerson('zs','boy','2001-02-03');  
var person2 = new createPerson('ls','boy','2001-02-04');  
person1.sayHi(); //outputs "Hi ! I am zs"  
person2.sayHi(); //outputs "Hi ! I am ls"  
//问题似乎解决了，但是，你参见prototype就会发现人家有更高明的解决方案，所有函数只创建一次，而每个对象都具有自己的对象属性实例，看下面的代码：


//========================
// 优化方案1
//========================
functon CreatePerson(name,sex,birthday,fn)  
{  
  this.name =name;  
  this.sex = sex;  
  this.birthday = birthday;  
}  
CreatePerson.prototype.sayHi = function ()  
{  
  alert("Hi ! I am "+this.name);  
}  
CreatePerson.prototype.sayBye = function ()  
{  
  alert("Byebye ");  
}  
  
// 使用 
var person1 = new CreatePerson('zs','boy','2001-02-03');  
var person2 = new CreatePerson('ls','boy','2001-02-04');  
person1.sayHi(); //outputs "Hi ! I am zs"  
person2.sayHi(); //outputs "Hi ! I am ls"  
person2.sayBye(); //outputs "Byebye"  
  

//一般情况下，一个对象或者类不只一个方法，需要多个方法配合使用，那么  
//========================
// 优化方案2
//========================
functon CreatePerson(name,sex,birthday,fn)  
{  
  this.name =name;  
  this.sex = sex;  
  this.birthday = birthday;  
} 
CreatePerson.prototype={  
  sayHi:function()  
  {  
    alert("Hi ! I am "+this.name);  
  },  
  sayBye:function()  
  {  
    alert("Byebye");  
  },  
  //……  
}  

// 使用 
var person1 = new CreatePerson('zs','boy','2001-02-03');  
var person2 = new CreatePerson('ls','boy','2001-02-04');  
person1.sayHi(); //outputs "Hi ! I am zs"  
person2.sayHi(); //outputs "Hi ! I am ls"  
person2.sayBye(); //outputs "Byebye"  


// 注意：使用prototype属性定义的对象方法，是非静态方法，只有在实例化后才能使用！其方法内部可以this来引用对象自身中的其他属性。
// 




