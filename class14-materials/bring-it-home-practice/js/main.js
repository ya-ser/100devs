// *Variables*
// Create a variable and console log the value
const greeting = "hey";
console.log(greeting);

// Create a variable, add 10 to it, and alert the value

let num = 1;
num += 10;
alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

const subtractFourNums = (n1, n2, n3, n4) => alert(n1 - n2 - n3 - n4);

subtractFourNums(10, 2, 4, 5);

// Create a function that divides one number by another and returns the remainder

const remainderTwoNum = (n1, n2) => n1 % n2;

console.log(remainderTwoNum(10, 2));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

const checkNum = (n1, n2) => {
  const sum = n1 + n2;
  if (sum > 50) {
    alert('Jumanji');
  } else {
    return sum;
  }
}

console.log(checkNum(45, 10));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

const checkMulti = (n1, n2, n3) => {
  const multi = n1 * n2 * n3;
  if (multi % 3 === 0) {
    alert('ZEBRA');
  } else {
    return multi;
  }
}

console.log(checkMulti(3, 9, 7));