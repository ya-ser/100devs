document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === "Monday" || "monday") {
    console.log("day is monday")
  } else if (day === "Tuesday" || "tuesday") {
    console.log("day is tuesday")
  } else if (day === "Wednesday" || "wednesday") {
    console.log("day is wednesday")
  } else if (day === "Thursday" || "thursday") {
    console.log("day is thursday")
  } else if (day === "Friday" || "friday") {
    console.log("day is friday")
  }

}
