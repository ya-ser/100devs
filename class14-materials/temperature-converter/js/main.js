//Write your pseduo code first! 
/*
put a smurf on button that runs the function on click
get val out of input

create a func with 1 param
set it so that the param is passed to a fomula that calulates the conversion
return the conversion
*/

document.querySelector('#convert').addEventListener('click', tempConverter)

function tempConverter(cels) {
  cels = document.querySelector('#num').value
  let h2 = document.querySelector('#placeToSee')
  let fahr = (cels * 9.0 / 5.0) + 32.0;
  h2.innerText = fahr;
};

