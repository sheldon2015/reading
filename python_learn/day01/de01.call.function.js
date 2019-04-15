function test(s = result()) {
	s.push("end");
	console.log(s);
}
function result() {
	console.log("1111111");
	return [1, 2];
}

test([1, 27]);
test([1, 27]);
test([1, 27]);

try {
	throw 11111;
} catch (error) {
	console.log(error);
}
console.log(2);
