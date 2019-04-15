//  转换进制
console.log((8).toString(2));
console.log((0b1000).toString(10));
/**
 * 定制二进制协议
 */

const fs = require("fs");

const version = Buffer.alloc(1);
const author = Buffer.alloc(3);
const content = Buffer.from("this is my type");

console.log((content[0] += 1));
console.log(content.toString());

const container = Buffer.concat([version, author, content]);

fs.writeFile("test.xfile", container, err => {
	console.log(err);
});
