// *Variables*
// Declare a variable, assign it a value, and alert the value
let string = 'hello again';
alert(string);
// Create a variable, divide it by 10, and console log the value
let num = 30;
num /= 10;
console.log(num);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
const multiThree = (n1, n2, n3) => alert(`multi: ${n1 * n2 * n3}`);
multiThree(5, 10, 15);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
const addThenSub = (n1, n2, n3, n4) => console.log('addThenSub: ', n1 + n2 - n3 - n4);
addThenSub(10, 10, 10, 10);
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
const winna = (n1, n2, n3) => {
  let total = (n1 + 100 - n2) / n3;
  total > 25 ? console.log('WE HAVE A WINNNA: ', total) : console.log('total: ', total);
};
winna(3, 10, 2);
winna(3, 100, 3);
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
const checkWeekend = (dayOfWeek) => {
  let day = dayOfWeek.toLowerCase();
  day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday' ? alert('weekday') : day === 'saturday' || day === 'sunday' ? alert('weekend') : alert('Try again!');
};
checkWeekend('Monday');
checkWeekend('Sunday');
checkWeekend('no');
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
const loop = (input) => {
  let num = Number(input);
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
loop(10);