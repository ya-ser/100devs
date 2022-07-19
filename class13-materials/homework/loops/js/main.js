// print each incrementing value passed in by user

//select the button and put a smurf on it
document.querySelector('#loop').addEventListener('click', fizzBuzzTern);

function isOdd() {
  const input = document.querySelector('#num').value;
  for (let i = 1; i <= input; i++) {
    if (i % 2 !== 0) {
      console.log(`${i} is odd`);
    }
  }
};

//create a function that takes the value from the input fields and loops until its reached, outputing the result to the console

function checkNum() {
  const input = document.querySelector('#num').value;
  let num = parseInt(input);
  while (num <= 50 || num >= 100) {
    num = prompt('number must be between 50 and 100');
  }
};

// program that shows multiples of inputed number up to 10

function calcMulti() {
  const input = document.querySelector('#num').value;
  // convert input from string to number
  let num = parseInt(input);
  if (num >= 2 && num <= 9) {
    for (let i = 1; i <= 10; i++) {
      // at each interation, return the muli
      console.log(num * i);
    }
  } else {
    alert('number must be between 2 and 9!');
  }
};

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

function checkStr() {
  let string = '';
  //
  while (!string.toLowerCase().includes('yes') && !string.toLowerCase().includes('no')) {
    string = prompt('Neither yes or no');
  }
};

// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    }
    console.log(i);
  }
};

// dryer
function fizzBuzzNew() {
  for (let i = 1; i <= 100; i++) {
    let fizz = (i % 3 === 0);
    let buzz = (i % 5 === 0);
    if (fizz && buzz) {
      console.log("FizzBuzz");
    } else if (fizz) {
      console.log('Fizz');
    } else if (buzz) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

function fizzBuzzTern() {
  for (let i = 1; i <= 100; i++) {
    let fizz = (i % 3 === 0);
    let buzz = (i % 5 === 0);
    fizz && buzz ? console.log("FizzBuzz") : fizz ? console.log('Fizz') : buzz ? console.log('Buzz') : console.log(i);
  }
};