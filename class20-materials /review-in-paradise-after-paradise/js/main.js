// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function hiOrBye(arr) {
  arr = [];
  let last = arr.length-1;
  if (arr[0] > last){
    alert('bye');
  } else if (arr[0] < last){
    alert('hi');
  } else {
    alert('we close')
  }
  // if first more then last, say by
  // if last more first, say hi
  // if same we close

}