/**
 * *1.非流动模式，需要主动去拉取数据，通过read方法
 * *2.过程分析：当数据源头的内部缓冲区可以读取数据时候，会触发readable事件，在readable事件中处理业务逻辑
 * *3.非流动模式为默认工作模式，要启用流动模式需要绑定data事件或者调用resume方法，要中断data事件需要调用pause方法
 * *4.缓冲区的大小为16kb
 **/

process.stdin
	.on("readable", () => {
		let chunk;
		console.log("New1 data available");
		while ((chunk = process.stdin.read()) !== null) {
			console.log(`Chunk1 read: (${chunk.length}) "${chunk.toString()}"`);
		}
	})
	.on("end", () => process.stdout.write("End of stream1"));
/**
 * *1.流动模式，主动去推送数据
 * *2.过程分析：当数据源头的内部缓冲区可以读取数据时候，会触发data事件，在data事件中处理业务逻辑
 *
 */

process.stdin
	.on("data", chunk => {
		console.log("New2 data available");
		console.log(`Chunk2 read: (${chunk.length}) "${chunk.toString()}"`);
	})
	.on("end", () => process.stdout.write("End of stream2"));
