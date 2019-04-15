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

const stream = require("stream");
const array = ["a", "b", "c", "d", "e", "f"];
class MyStream extends stream.Readable {
	constructor(options) {
		super(options);
	}
	_read(size) {
		console.log("_read");
		let random_num = parseInt(Math.random() * 6);
		console.log(random_num);
		let chunk = array[random_num];
		this.push(chunk, "utf8");
		this.push('')
		if (random_num === 4) {
			this.push(null);
		}
	}
}

const my_stream = new MyStream();
my_stream.on("readable", () => {
	let chunk;
	console.log(111111111111111)
	while ((chunk = my_stream.read()) !== null) {
		console.log("readable---------------------------");
		console.log(`Chunk received: ${chunk.toString()}`);
	}
});
my_stream.on("end", () => {
	console.log("end");
});
