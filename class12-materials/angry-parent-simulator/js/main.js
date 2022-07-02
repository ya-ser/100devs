// goal: you done messed up "christopher gunther anthony smith"
// i want the names passed in the form to be displayed as the yell

// first make an event listener for the button click 
document.querySelector('#yell').addEventListener('click', run);

function run() {
  const fn = document.querySelector('#firstName').value;
  const fm = document.querySelector('#firstMiddle').value;
  const lm = document.querySelector('#lastMiddle').value;
  const ln = document.querySelector('#lastName').value;

  const h2 = document.querySelector('#placeToYell');

  h2.innerText = `${fn} ${fm} ${lm} ${ln}!!!`;
}

