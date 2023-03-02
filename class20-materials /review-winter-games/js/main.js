//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function extractEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(extractEvenNumbers([1,2,3,4,10,11,12,101,102]));
