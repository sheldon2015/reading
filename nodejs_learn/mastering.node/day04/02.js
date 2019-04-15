const fork = require("child_process").fork;
const net = require("net");
let children = [];
require("os")
	.cpus()
	.forEach((f, idx) => {
		children.push(fork("./03.js", [idx]));
	});
net
	.createServer(socket => {
		let rand = Math.floor(Math.random() * children.length);
		children[rand].send(null, socket);
	})
	.listen(8080);
