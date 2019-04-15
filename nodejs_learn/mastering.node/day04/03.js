let id = process.argv[2];
process.on("message", (n, socket) => {
	socket.write(`child ${id} was your server today.\r\n`);
	socket.end();
});
