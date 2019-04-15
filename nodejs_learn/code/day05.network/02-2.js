const net = require("net");
const client = net.connect(80);
client.on("data", data => {
	console.log(date);
	client.end();
});
client.on("end", arg => {
	console.log(arg);
});
