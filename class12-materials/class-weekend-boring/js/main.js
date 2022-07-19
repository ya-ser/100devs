// get the button to interact with new func, put a smurf on button
document.querySelector('#check').addEventListener('click', checkDay)

// get the input form our form
function checkDay() {
  const day = document.querySelector('#day').value.toLowerCase();
  const h2 = document.querySelector('#placeToSee')
  day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday' ? h2.innerText = 'weekday' :
    day === 'monday' || day === 'tuesday' ? h2.innerText = 'weekend' :
      h2.innerText = 'wrong';
}