//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const calcSum = arr => arr.reduce((a, b) => a + b);
console.log(calcSum([1,2,3]));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const arraySquared = arr => arr.map(num => num ** 2);
console.log(arraySquared([1,2,3]));

//Create a function that takes string
//Print the reverse of that string to the console
const reverseStr = str =>  str.split('').reverse().join('');
console.log(reverseStr('hello'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const checkPalindrome = str => {
  if (str !== reverseStr(str)) {
    return false;
  } else {
    return true;
  }
}

console.log(checkPalindrome('hello'));
console.log(checkPalindrome('racecar'));