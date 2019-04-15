let obj = {
  a: 1,
  b: 2
};

// 对象不可迭代
try {
  for (v of obj) {
    console.log(v);
  }
} catch (e) {
  console.log(e);
}

let arry = [1, 2, 3];

for (v of arry) {
  console.log(v);
}
