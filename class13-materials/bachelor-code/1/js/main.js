// create a function that allows you to click final rose and then hides 2 of the 3 contestants revealing the winner

// put a smurf on the finalRose text
// run a function that hides the other 2 photos 
document.querySelector('#finalRose').addEventListener('click', hide)

function hide() {
	document.querySelector('#claire').style.display = 'none';
	document.querySelector('#nikki').style.display = 'none';
}
