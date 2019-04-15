process.on("message", function(message, server) {

	server.on("connection", function(socket) {
		socket.end("Child handled connection");
	});
});
