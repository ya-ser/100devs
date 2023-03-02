//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = arr => arr.forEach(shows => console.log(shows));
tvShows(['the glory', 'reborn rich', 'itaewon class']);
//Create and array of numbers
let numbers = [1,2,3,4];
//Return a new array of numbers that includes every even number from the previous Arrays
let even = numbers.filter(num => num % 2 === 0);
console.log(even);
//Create a function that takes in an array of numbers
const sumLowToHigh = arr => {
  let sorted = arr.sort((a,b) => a - b);
  return sorted[1] + sorted[sorted.length-2];
}
// const sumLowToHigh = arr => Math.min(...arr) + Math.max(...arr);
console.log(sumLowToHigh([3,4,1,6,5]));
//Alert the sum of the second lowest and the second highest number
