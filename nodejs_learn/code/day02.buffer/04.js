/**
 * 二进制数据转换为json数据
 */

const fs = require("fs");
const path = require("path");
const xlsx = require("node-xlsx");
// Parse a buffer
const file1 = xlsx.parse(fs.readFileSync("test.xls"));
console.log(file1);
// Parse a file
const file2 = xlsx.parse("test.xls");
console.log(file2);
/*

 */
// *换行符的ascII是13,
// *16进制在js中表示：0x**,在其他语言中比如汇编中可以这样表示：0*h
console.log(parseInt(0x0d));
/**
 * 自己写二进制文件的解析器，需要知道二级制文件的解码规范
 */
