//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopSnacking);

function stopSnacking() {
  let numOfSnacks = Number(document.querySelector('input').value)
  let stop = document.querySelector('#stops');
  // clears out the field on click
  stop.innerText = '';
  for (let i = 1; i <= numOfSnacks; i++) {
    // concats the word stop for each iteration in the loop
    stop.innerText += ' stop'
  }
};