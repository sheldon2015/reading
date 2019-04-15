var arr = [1, 3];
console.log(arr.length);

//delete操作符
delete arr[1];
console.log(arr.length);

//数组是通过数字索引，但是数组也是对象，也可以通过附加其他类型的键值
arr["test"] = 33;

console.log(arr.length);

var s = Array.from([1, 2, 3]);

console.log(s);

//字符串的翻转

var s = "abcd我们efg";

console.log(s.split("").reverse().join(""));

console.log(42.000000000000000001 === 42);

//js中浮点数精度考察

console.log(0.2 + 0.1); //0.30000000000000004

console.log(0.2 + 0.1 == 0.3); //false

//要判断这种浮点数精度的问题，通常的做法就是设置一个精度范围,就是中有这样一个机器精度的常量

var diff = 0.2 + 0.1 - 0.3;

console.log(Number.EPSILON);

console.log(diff < Number.EPSILON);


