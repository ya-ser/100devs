// put a smurf on btn

document.querySelector('#loop').addEventListener('click', fizzBuzz);

// carousel function on user input

function carousel() {
  let input = document.querySelector('#num').value;
  for (let i = 0; i <= input; i++) {
    console.log(i);
  }
}

// even or odd

function evenOdd() {
  let input = document.querySelector('#num').value;
  for (let i = 1; i <= input; i++) {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
  }
}

// user input checker

function checkInput() {
  let input = document.querySelector('#num').value;
  let num = parseInt(input);
  while (num <= 100) {
    num = prompt('please enter in a num less than or equal to 100');
  }
}

// create a multiplication table for numbers between 2 and 9

function multiTable() {
  let input = document.querySelector('#num').value;
  if (input >= 2 && input <= 9) {
    for (let i = 1; i <= 10; i++) {
      console.log(input * i);
    }
  } else {
    alert('Please enter a number between 2 and 9');
  }
}

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

function yesNo() {
  let input = document.querySelector('#num').value.toLowerCase();
  while (input !== 'yes' && input !== 'no') {
    input = prompt('Please enter either "yes" or "no" to exit.');
  }
}

function fizzBuzz() {
  let input = document.querySelector('#num').value;
  for (let i = 1; i <= input; i++) {
    let fizz = (i % 3 === 0);
    let buzz = (i % 5 === 0);
    // want to check if both fizz and buzz are true from the start since testing either fizz or buzz seperately will log the first one that is true
    fizz && buzz ? console.log('FizzBuzz') : fizz ? console.log('Fizz') : buzz ? console.log('Buzz') : console.log(i);
  }
}