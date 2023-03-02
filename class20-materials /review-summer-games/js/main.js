//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function muliplyAndAlertArray(arr){
  //give sum a starting value
  let sum = 1;
  for(let i = 0; i < arr.length; i++){
    //assign and update the sum by multiplying it to 
    sum *= arr[i];
  }
  return sum;
}

console.log(muliplyAndAlertArray([1,2,3,4]))