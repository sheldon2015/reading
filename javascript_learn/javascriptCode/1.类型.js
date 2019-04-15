typeof null; //object

if (typeof debug === "undefined") {
	//debug模式时，环境中没有声明debug
} else {
	console.log("测试环境中是否有debug变量");
}

//变量提升
console.log(s);
var s = 1;

//变量不提升
// console.log(s1);
// s1 = 1;

// //变量不提升
// console.log(s2);
// let s2 = 1;

test();

function test() {
	console.log("提升");
}
