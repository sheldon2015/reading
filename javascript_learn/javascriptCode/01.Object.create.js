s = { a: 1 };
//* m的__proto__指向s



const n = { a: 1 };
const m = Object.create(n);
console.log(n)
console.log(m.__proto__)
