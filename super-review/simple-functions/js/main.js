//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(one, two) {
  console.log(one - two);
}
sub(3, 2);
//create a function that divides three numbers and console logs the quotient
function divs(num1, num2, num3) {
  console.log(num1 / num2 / num3);
}
divs(10, 2, 1);
//create a function that multiplys three numbers and returns the product

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function med(n1, n2, n3) {
  let add = n1 + n2;
  let remainder = add % n3;
  console.log(remainder);
  // return (n1 + n2) % n3;
}

med(10, 10, 2);
// let remainder = med(10, 10, 2);
// console.log(remainder);

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(n1, n2, n3, n4) {
  let multi = n1 * n2;
  if (multi > 100) {
    let add = n3 + n4;
    console.log(add)
  } else if (multi < 100) {
    let sub = n3 - n4;
    console.log(sub)
  } else {
    let multhree = n1 * n2 * n3;
    let remainder = multhree / n4;
    console.log(remainder);
  }
}

hard(10, 9, 11, 10)