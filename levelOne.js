"use-strict";

/////////////////////////////////////////
// QUESTION 01 => Fibonacci Series
const fibo = function (n) {
  if (n <= 1) return n;

  return fibo(n - 1) + fibo(n - 2);
};
// console.log(fibo(10));
// console.log(fibo(1));
// console.log(fibo(2));
// console.log(fibo(5));

/////////////////////////////////////////
// QUESTION 02 => Print 1 to N

/////////////////////////////////////////
// QUESTION 03 => Print N to 1
const printNum = function (n) {
  if (n === 1) return console.log(1);

  console.log(n);
  return printNum(n - 1);
};
// printNum(10);

/////////////////////////////////////////
// QUESTION 04 => Product for N
const product = function (n) {
  if (n === 1) return 1;

  return product(n - 1) * n;
};

console.log(product(5));

/////////////////////////////////////////
// QUESTION 05 => Sum of N

/////////////////////////////////////////
// QUESTION 06 => Product of Digits

/////////////////////////////////////////
// QUESTION 07 => Sum of Digits

/////////////////////////////////////////
// QUESTION 08 => Reverse of a Number

/////////////////////////////////////////
// QUESTION 09 => Reverse of a String

/////////////////////////////////////////
// QUESTION 10 => Reverse of an Array

/////////////////////////////////////////
// QUESTION 11 => Palindrome String

/////////////////////////////////////////
// QUESTION 12 => Count Zeros

/////////////////////////////////////////
// QUESTION 13 => Count Steps

/////////////////////////////////////////
// QUESTION 14 => Product of an Array

/////////////////////////////////////////
// QUESTION 15 => Recursive Range
