document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toUpperCase()

  const h2 = document.querySelector('#placeToSee')

  //Conditionals go here
  if (day === "MONDAY") {
    h2.innerText = "day is monday"
  } else if (day === "TUESDAY") {
    h2.innerText = "day is tuesday"
  } else if (day === "WEDNESDAY") {
    h2.innerText = "day is wednesday"
  } else if (day === "THURSDAY") {
    h2.innerText = "day is thursday"
  } else if (day === "FRIDAY") {
    h2.innerText = "day is friday"
  } else if (day === "SATURDAY" || day === "SUNDAY") {
    h2.innerText = "its the weekend"
  }

}
