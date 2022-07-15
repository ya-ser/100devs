// selects everything with the class .contestant
const contestants = document.querySelectorAll('.contestant')

//puts a smurf on all elements with a class of constestant
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click) {
	// does the thing we selected have a class of rose?
	if (click.target.classList.contains('rose')) {
		// then show us the picture
		document.querySelector('#nikki').classList.toggle('hidden')
	} else {
		// if it doesn't have the class of rose, show us that its wrong
		alert("Wrong!");
	}
}
