let a = 1;

function* genenrator() {
	a++;
	return a++ + (yield 1);
}
let it = genenrator();

//启动生成器函数，并且运行到yield，生成器的值为yield

console.log(it.next());
console.log(a);

//给yield赋值，继续运行到下一个yield，return返回值作为生成器的值

console.log(it.next(7));
console.log(a);

console.log(it.next(1));
console.log(a);

//--------------------------

let s = { m: 1, n: 2 };
//对象没有想数组类似的迭代期，所以不鞥想数组像那样直接用forof迭代

for (let item of s) {
	console.log(item);
}

let s1 = [1, 2];

let it = s1[Symbol.iterator]();

console.log(it.next());

//

function* test() {
	var s = 1;
	while (true) {
		console.log(s++);
		var s;
		s = yield 1;
		console.log("test", s);
	}
	return 1;
}

let it = test();
console.log(it.next());
console.log(it.next(10));
console.log(it.next());
console.log(it.next());

console.log(typeof test);

function* test1() {
	var s = yield 1;

	console.log(s);
}

let t1 = test1();

console.log(t1.next());
console.log(t1.next(10));
