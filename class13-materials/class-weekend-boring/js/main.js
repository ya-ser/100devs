//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// create a function that lets you enter the day and tells you that its a weekday or weekend depending on the day

// putting a smurf on the button
document.querySelector('#check').addEventListener('click', run);

function run() {
  // pull the value the user inputed and lowercase it
  let dayEntered = document.querySelector('#day').value.toLowerCase();
  // select the currently empty h2
  let h2 = document.querySelector('#placeToSee');
  // check the if the day entered by the user is equal to a weekday
  if (dayEntered === 'monday' || dayEntered === 'tuesday' || dayEntered === 'wednesday' || dayEntered === 'thursday' || dayEntered === 'friday') {
    // fill the empty h2 with weekday
    h2.innerText = 'weekday';
  } else if (dayEntered === 'saturday' || dayEntered === 'sunday') {
    h2.innerText = 'weekend';
  }
}