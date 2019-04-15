process.on("message", function(message, server) {
	console.log(message);
	server.on("connection", function(socket) {
		socket.end("Child handled connection");
	});
});
