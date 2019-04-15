let {a, b} = {
  a: 1,
  b: 2
};

console.log(false || (false && true));

console.log(
  (a && b) || c
  ? (
    c || b
    ? a
    : c && b)
  : a);
while (a > 3) {
  console.log(a);
}

m = 1;
while (a > 3) {
  console.log(a);
}

m = 1;

console.log(typeof test);

{
  console.log(typeof m); //undefined
  var m = 1;
  console.log(typeof n); //报语法错误
  let n = 1;
}

var a2 = 1;

//

function test(a1 = 4, a2 = a2 + a1) {
  console.log("test");
}

test();

function test1(a) {
  a = 2;

  console.log(a);
  console.log(arguments[0]);
}

test1(1);
test1();

//严格模式

function test1(a) {
  "use strict";

  //a = 2;

  console.log(a);
  console.log(arguments[0]);
}

test1(1);
test1();

//

var f1 = function() {
  try {
    return 1;
  } catch (error) {
    return 2;
  } finally {}
};

console.log(f1());
