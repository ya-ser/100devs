// *Variables*
// Create a variable and console log the value
let string = 'hello world';
console.log(string);
// Create a variable, add 10 to it, and alert the value
let numb = 1;
numb += 10;
alert(numb);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let sub = (n1, n2, n3, n4) => alert(`sub: ${n1 - n2 - n3 - n4}`);
sub(10, 2, 5, 3);
// Create a function that divides one number by another and returns the remainder
let remainder = (n1, n2) => {
  return n1 % n2;
};

console.log('remainder: ', remainder(10, 2));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let sumOrJumanji = (n1, n2) => {
  let sum = n1 + n2;
  sum > 50 ? alert('Jumanji!') : console.log('sum: ', sum);
};

sumOrJumanji(30, 40);
sumOrJumanji(10, 20);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

let multiOrZebra = (n1, n2, n3) => {
  let multi = n1 * n2 * n3;
  multi % 3 === 0 ? alert('ZEBRA') : console.log('multi: ', multi);
};

multiOrZebra(6, 10, 1);
multiOrZebra(1, 1, 1);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
let wordLoop = () => {
  let word = 'loop';
  for (let i = 1; i <= 10; i++) {
    console.log(word);
  }
};

wordLoop();