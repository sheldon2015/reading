/**
 * *实现自己的可读流：
 * *可读流是数据的源头，他的内部结构是怎么实现的,怎么定义数据源中的数据加载到缓存区
 * *背景知识：了解生产者消费者问题也称有限缓冲区问题     (https://zh.wikipedia.org/zh-hans/%E7%94%9F%E4%BA%A7%E8%80%85%E6%B6%88%E8%B4%B9%E8%80%85%E9%97%AE%E9%A2%98)
 * *原理讲解:(http://taobaofed.org/blog/2017/08/31/nodejs-stream/)
 */
/**
 * *1.继承stream.readable接口
 * *2.重写_read方法
 */

const { Readable } = require("stream");
let i = 0;
class MyStream extends Readable {
	constructor(options) {
		super(options);
		console.log("initilize", this.readableFlowing);
	}
	_read(size) {
		// *push可以同步调用，也可异步调用
		console.log("_read");
		console.log("_read", this.readableFlowing);
		console.log(
			"buffer before push",
			this._readableState.buffer,
			this._readableState.length
		);
		console.log(this.push("a"));
		console.log(this.push("b"));
		console.log(this.push("c"));
		console.log(this.push("d"));
		console.log(this.push("e"));
		console.log(this.push("f"));
		console.log(this.push("g"));
		console.log(this.push("h"));
		console.log(this.push("i"));
		console.log(this.push("j"));
		console.log(this.push("k"));
		console.log(
			"buffer after push",
			this._readableState.buffer,
			this._readableState.length
		);

		i++;
		if (i > 100) {
			console.log(i);
			console.log(this.push(null));
		}
	}
}

const my_stream = new MyStream({ highWaterMark: 4 });

my_stream.on("readable", () => {
	// *readable事件表示流中产生了新数据，或是到了流的尽头
	console.log("readable---------");
	console.log(
		"readable",
		my_stream._readableState.buffer,
		my_stream._readableState.length
	);
	while ((chunk = my_stream.read(100)) !== null) {
		console.log(`Chunk received: ${chunk.toString()}`);
	}
});
my_stream.on("end", () => {
	// *用end事件的条件：
	// *1.已经调用push(null)，声明不会再有任何新的数据产生
	// *2.缓存中的数据也被读取完
	console.log("end");
});
