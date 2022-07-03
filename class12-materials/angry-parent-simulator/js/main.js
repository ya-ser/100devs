// goal: you done messed up "christopher gunther anthony smith"
// i want the names passed in the form to be displayed as the yell

// first make an event listener for the button click 
// document.querySelector('#yell').addEventListener('click', run);

// function run() {
//   const fn = document.querySelector('#firstName').value;
//   const fm = document.querySelector('#firstMiddle').value;
//   const lm = document.querySelector('#lastMiddle').value;
//   const ln = document.querySelector('#lastName').value;

//   const h2 = document.querySelector('#placeToYell');

//   h2.innerText = `${fn} ${fm} ${lm} ${ln}!!!`;
// }

const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`

  document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
