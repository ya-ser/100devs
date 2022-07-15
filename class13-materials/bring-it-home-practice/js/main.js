// *Variables*
// Create a variable and console log the value
let val = 1;
console.log(val);

// Create a variable, add 10 to it, and alert the value
let num = 1;
num += 10;
alert(num);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(a, b, c, d) {
  let result = a - b - c - d;
  alert(result);
}
// Create a function that divides one number by another and returns the remainder
function calcRemainder(a, b) {
  let remainder = a % b;
  return remainder;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function checkSum(a, b) {
  let total = a + b;
  if (total > 50) {
    alert('Jumanji')
  } else {
    return total;
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function checkMulti(a, b, c) {
  let total = a * b * c;
  if (total % 3 === 0) {
    alert('ZEBRA');
  } else {
    return total;
  }
}