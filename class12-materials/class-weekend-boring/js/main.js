document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  const h2 = document.querySelector('#placeToSee')

  //Conditionals go here
  if (day === "Monday" || day === "monday") {
    h2.innerText = "day is monday"
  } else if (day === "Tuesday" || day === "tuesday") {
    h2.innerText = "day is tuesday"
  } else if (day === "Wednesday" || day === "wednesday") {
    h2.innerText = "day is wednesday"
  } else if (day === "Thursday" || day === "thursday") {
    h2.innerText = "day is thursday"
  } else if (day === "Friday" || day === "friday") {
    h2.innerText = "day is friday"
  } else if (day === "Saturday" || day === "saturday" || "Sunday" || day === "sunday") {
    h2.innerText = "its the weekend"
  }

}
