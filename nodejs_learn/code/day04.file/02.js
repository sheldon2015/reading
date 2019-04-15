/*
 *文件描述符是一个很重要的概念
 *管道、文件夹、socket套接字等等一切皆是文件
 * 0代表stdin,1代表stdout,2代表stderr
 */
const fs = require("fs");
// fs.createReadStream(__filename).pipe(process.stdout);
// process.stdout.write(fs.readFileSync(__filename));
//* console.log("logging from fs")
fs.writeSync(1, "logging from fs");
