Promise.resolve(Promise.reject(11))
	.then(
		arg => {
			console.log(1);
			console.log(arg);
		},
		arg => {
			console.log(2);
			console.log(arg);
		}
	)
	.then(arg => {
		console.log(arg);
	});

console.log(Promise.reject(1111111));
console.log(Promise.resolve(1111111));

Promise.reject(11)
	.then(
		arg => {
			console.log(1);
			console.log(arg);
		},
		arg => {
			console.log(2);
			console.log(arg);
		}
	)
	.then(arg => {
		console.log(arg);
	});




