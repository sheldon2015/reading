/**
 **利用Object.create()来创建继承的对象
 *
 */

s = { a: 1 };
const n = { c: 1 };
const n1 = { b: 2 };
const m = Object.create(s);
console.log(m.constructor);



