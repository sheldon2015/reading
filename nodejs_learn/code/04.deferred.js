// *延迟任务
// * a list of all
// * requested nextTick callbacks are placed at the head of the event queue, and is
// * processed, in its entirety and in order, before I/O or timer events and after
// * execution of the current script (the JavaScript code executing synchronously on
// * the V8 thread).
// * 所有 nextTick 的回调函数都会置于 event queue 的顶部,早于 timers 和 IO 事件,晚于当前执行脚本。
// *setTimeout 与 setImmediate 执行顺序不定(待查资料解释)

// * Consider the following code: setTimeout(a, 1000);
// * setTimeout(b, 1001);
// * One would expect that function b would execute after function a . However, this
// * cannot be guaranteed — a may follow b , or the other way around.
// * Now, consider the subtle difference present in the following code snippet:
// * setTimeout(a, 1000);
// * setTimeout(b, 1000);
// * The execution order of a and b are predictable in this case. Node essentially
// * maintains an object map grouping callbacks with identical timeout lengths. Isaac
// * Schlueter, a former leader of the Node project and now CEO of npm Inc., puts it
// * in this way: As we can find on https://groups.google.com/forum/#!msg/nodejs-dev/kiowz4
// * iht4Q/T0RuSwAeJV0J , "[N]ode uses a single low level timer object for each timeout
// * value. If you attach multiple callbacks for a single timeout value, they'll occur in
// * order, because they're sitting in a queue. However, if they're on different timeout
// * values, then they'll be using timers in different threads, and are thus subject to
// * the vagaries of the [CPU] scheduler."

console.log(1111);

setImmediate(() => {
	console.log(555555);
});

setTimeout(() => {
	console.log(6666);
});
setTimeout(() => {
	console.log(77777);
}, 0);
setTimeout(() => {
	console.log(88888);
}, 1);
setTimeout(() => {
	console.log(99999);
}, 10);

process.nextTick(() => {
	console.log(22222);
});

console.log(3333);

function test() {
	try {
		console.log(111);
		console.log(m.s);
	} catch (error) {
		console.log(222);
	}
	console.log(33);
}
test();

async function testAsync() {
	let result;

	result = await new Promise(
		resolve => {
			resolve(222);
		},
		reject => reject(1111)
	);

	return result;
}

testAsync()
	.then(res => {
		console.log(res, "res");
	})
	.catch(function(res) {
		console.log(res);
	});
