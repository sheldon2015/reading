const net = require("net");
let clientId = 0;
net
	.createServer(client => {
		clientId++;
		client.on("end", () => {
			console.log("disnectted  " + clientId);
		});

		client.write("welcome to china" + clientId);

		client.pipe(client);
	})
	.listen(80);
