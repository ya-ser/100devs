//Write your pseduo code first! 
// enter in val
// have val convert from cels to fahr
// have result output in dom

// create a function with a celcius param
// create a variable called toFahr that calculates the formula to convert
// return the result

document.querySelector('#convert').addEventListener('click', run);

function run() {
  const cels = document.querySelector('#cels').value;
  const toFahr = cels * 1.8 + 32;

  const h2 = document.querySelector('#result');

  h2.innerText = `${toFahr}`;
}