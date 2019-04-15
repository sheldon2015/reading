const foo = () => {
	console.log("foo");
	new Promise((resolve, reject) => {
		console.log(1111);
		resolve("333");
	}).then(resolve => console.log(resolve));
	console.log("222");
};
foo();
console.log("444");
