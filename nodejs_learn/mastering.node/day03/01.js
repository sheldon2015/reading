const path = require("path");
const child = require("child_process").fork(path.join(__dirname, "./02.js"));
const net = require("http");
const server = net.createServer();

server.on("connection", socket => {
	socket.end("Parent handled connection");
});

server.listen(8080, () => {
	child.send("parent passing down server", server);
});
