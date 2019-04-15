/*
 *标准是入流、标准输出流、标准错误流
 */
process.stdin.on("data", buffer => {
	process.stdout.write(buffer.toString().toUpperCase());
	console.log(buffer.toString().toUpperCase());
	console.error(111111);
});
/*
 * console对象
 */
console.time();
console.time("label2");
console.timeEnd();
console.timeEnd("label2");
