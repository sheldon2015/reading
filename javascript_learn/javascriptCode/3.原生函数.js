var s = new String("test string interface");

console.log(s.toString());

console.log((s = 1111));

console.log(Object.prototype.toString.call(s));

console.log(s instanceof String); //true
console.log("ssss" instanceof String); //false

//封装基本数据类型成为一个对象

var s = "abc";
console.log(typeof s);
console.log(typeof new String(s));
console.log(typeof Object(s));

//将对象拆封成基本数据类型

var s1 = new String("12233");

console.log(typeof s1);

console.log(Object("123"));

//拆封成对应的基本数据类型
console.log(typeof s1.valueOf());

//   Array()

var a1 = new Array(1, 2);

console.log(a1);
console.log(a1.length);

//当只有一个参数时，指定的是数组的长度

var a2 = new Array(4);

console.log(a2);
console.log(a2.length);

var a3 = new Array();

console.log(a3);
console.log(a3.length);

var a4 = [undefined, undefined];

console.log(a4);
console.log(a4.length);

var f = new Function("x,y", "return y");

console.log(f(1, 5));

console.log(f.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__);
