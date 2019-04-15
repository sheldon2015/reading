var s = 1;

async function test() {
	// TODO  为了得到  异步的返回值需要用到promise包装

	var m = await new Promise(function(resolve) {
		setTimeout(function() {
			s++;
			resolve(1111);
		}, 10);
	});

	console.log("mmmmmmm", m); //111
	console.log("11111111", s);
	return 1;
}

test().then(function(v) {
	console.log("vvvvvvv", v);
});

console.log("aaa", s);
var s = 1;

function test() {
	console.log(s);
	var s = 2;
	console.log(s);
}
test();

setTimeout(() => {
	console.log(6);
});
console.log(1);

const p = new Promise((resolve, reject) => {
	console.log(2);

	resolve(3);
});

p.then(data => {
	console.log(data);
	console.log(5);
});
console.log(5);
