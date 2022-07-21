//---Easy
//create a function that subtracts two numbers and alerts the difference
let subtractTwo = (n1, n2) => alert(n1 - n2);
subtractTwo(50, 30);
//create a function that divides three numbers and console logs the quotient
let divideThree = (n1, n2, n3) => console.log(n1 / n2 / n3);
divideThree(10, 20, 30);
//create a function that multiplys three numbers and returns the product
let multiplyThree = (n1, n2, n3) => {
  return n1 * n2 * n3;
};
console.log(multiplyThree(5, 5, 5));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
let remainder = (n1, n2, n3) => {
  let sum = n1 + n2;
  let mod = sum % n3;
  return mod;
};
console.log(remainder(1, 3, 5));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

let hard = (n1, n2, n3, n4) => {
  let multi = n1 * n2;
  multi > 100 ? console.log(n3 + n4) : multi < 100 ? console.log(n3 - n4) : alert((n1 * n2 * n3) % n4);
};

hard(10, 10, 30, 2);