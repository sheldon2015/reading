var s = {
	a: 1
};
console.log(s);
++s.a;

var eventLoop = [];

eventLoop.push(() => {
	console.log(1);
});
var event;
// “永远”执行
// while (true) {
// 	// 一次tick
// 	if (eventLoop.length > 0) {
// 		// 拿到队列中的下一个事件
// 		event = eventLoop.shift();
// 		// 现在，执行下一个事件
// 		try {
// 			event();
// 		} catch (err) {
// 			reportError(err);
// 		}
// 	}
// }

console.log("222");

var b = 1,
	a = 1;

b = ++a + a;
console.log(b);
//-----------------------

var s = 1;

var p = new Promise(function (resolve) {
	s++;
	resolve();
});

console.log(s);

p.then(function () {
	p.then(function () {
		console.log("C");
	});
	console.log("A");
});
p.then(function () {
	p.then(function () {
		console.log("C1");
	});
	console.log("B");
});
p.then(function () {
	p.then(function () {
		console.log("C2");
	});
	console.log("D");
});

console.log("e");
// A B C

var pm = new Promise(function (resolve) {
	resolve();
});

//then链式调用返回不同的promise，同一个promise上注册的then方法会同时调用

var pm2 = pm.then(function () {
	console.log(1);
});

pm2.then(function () {
	console.log(3);
});
pm2.then(function () {
	console.log(4);
});

pm.then(function () {
	console.log(2);
});

var pr = new Promise(function (resolve) {
	resolve();
});

var pr2 = Promise.resolve(pr);

console.log(pr2 === pr);

//-------------------------------------------------------------------------

//then方法

var ob = {
	a: 1,
	then: function (cb) {
		console.log("cb");

		cb();
	}
};

Promise.resolve(ob).then(function (arg) {
	console.log("11111");

	console.log(arg);
});

//-------------------

setTimeout(
	function (arg) {
		console.log(arg);
	},
	10,
	1
);

new Promise(function (resolve, reject) {
	resolve(1);
})
	.then(function (arg) {
		console.log(arg);
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve(100);
			}, 1000);
		});
	})
	.then(arg => {
		console.log(arg);
	});

Promise.race();

promise.all();

new Promise(function (resolve, reject) {
	resolve(Promise.reject(1));
})
	.then(
	arg => {
		console.log(1);

		console.log(arg);
	},
	arg => {
		console.log(2);

		console.log(arg);
	}
	)
	.then(arg => {
		console.log(3);
		console.log(arg);
	});
