// set the total
// on click, 0 should change the result to 0
// on click, +3 should add 3 to the total and get displayed as the result

let total = 0;

document.getElementById('#pumpkin').onclick = zero;
document.getElementById('#dominosPizza').onclick = addThree;
document.getElementById('#zebra').onclick = addNine;
document.getElementById('#cantThinkOfAnything').onclick = minusTwo;

function zero() {
  total += 0;
  return total;
};

function addThree() {
  total += 3;
  return total;
};

function addNine() {
  total += 9;
  return total;
};

function minusTwo() {
  total -= 2;
  return total;
};
// display total
let result = document.querySelector('#placeToPutResult');

result.innerText = total;