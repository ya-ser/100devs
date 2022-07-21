document.querySelector('h1').addEventListener('click', checkAge);
//Create a conditonal that checks their age

function checkAge() {
  let input = document.querySelector('#danceDanceRevolution').value;
  let p = document.querySelector('p');
  input < 16 ? p.innerText = 'Cannot drive' : input < 18 ? p.innerText = "can't hate from outside the club, because they can't even get in" : input < 21 ? p.innerText = "cannot drink" : input < 25 ? p.innerText = "cannot rent cars afforably" : input < 30 ? p.innerText = "cannot rent fancy cars afforably" : input >= 30 ? p.innerText = "there is nothing left to look forward too" : p.innerText = "enter an age";
}

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
