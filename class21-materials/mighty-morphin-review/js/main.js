// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'family day';
favHoliday = 'Eid';
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'hello there';
console.log(str.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const findDiff = arr => {
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(`100 - ${sum}`);
  return 100 - sum;
}

console.log(findDiff([1,2,3,4,5]))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const sortNums = nums => nums.length !== 3 ? console.log('invalid, need 3 nums') : nums.sort((a, b) => a - b);

console.log(sortNums([2,1,3]));

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const headsOrTails = _ => Math.random() > 0.5 ? 'heads' : 'tails';
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
const flip = num => {
  for (let i = 1; i <= num; i++){
    let result = headsOrTails();
    console.log(result);
  }
};

flip(5);