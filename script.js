"use-strict";

// question
console.log(`Question: Fibonacci`);
const fibonacci = function (n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};
// console.log(fibonacci(10));

const fibIteration = function (n) {
  let sum = 0;
  let last = 1;
  let lastlast = 0;

  // here the first sum gives us the second number in the fibonacci series
  for (let i = 2; i <= n; i++) {
    sum = last + lastlast;
    lastlast = last;
    last = sum;
  }

  return sum;
};
// console.log(fibIteration(10));

console.log("------------------------");
// question
console.log(`Question: N to 1`);
const fun = function (n) {
  if (n === 1) return console.log(n);

  console.log(n);
  return fun(n - 1);
};

console.log("------------------------");
// question
console.log(`Question: 1 to N`);
const revFun = function (n) {
  if (n === 0) return;
  revFun(n - 1);
  console.log(n);
};
// revFun(10);

console.log("------------------------");
// question
console.log(`Question: Product n to 1`);
const product = function (n) {
  if (n === 1) return 1;
  return product(n - 1) * n;
};
// console.log(product(5));

console.log("------------------------");
// question
console.log(`Question: Sum n to 1`);
const sum = function (n) {
  if (n === 1) return 1;
  return sum(n - 1) + n;
};
// console.log(sum(10));

console.log("------------------------");
// question
// find a better way to solve for this
// this is very complicated with the implementation
console.log(`Question: Sum of digits`);
const sumDigits = function (n) {
  if (n.toString().length === 1) {
    return n;
  }
  return Number(n.toString()[0]) + sumDigits(Number(n.toString().slice(1)));
};

console.log(sumDigits(9999999999));
