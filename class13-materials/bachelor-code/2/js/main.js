// when you click on a name, show the picture of the person

// 1. Store all image selectors in variables to avoid repetition
// 2. add smurfs on each h2
// 3. Create functions for each name, that reveals image of person selected and hides other ones

const andi = document.querySelector('#andi');

const claire = document.querySelector('#claire');

const sharleen = document.querySelector('#sharleen');

document.querySelector('#andiNext').addEventListener('click', andiNext);

document.querySelector('#claireNext').addEventListener('click', claireNext);

document.querySelector('#sharleenNext').addEventListener('click', sharleenNext);

// need to add (hidden) to the other ones so they go away when the one we want gets selected
function andiNext() {
	claire.classList.add('hidden');
	sharleen.classList.add('hidden');
	andi.classList.toggle('hidden');
}

function claireNext() {
	andi.classList.add('hidden');
	sharleen.classList.add('hidden');
	claire.classList.toggle('hidden');
}

function sharleenNext() {
	claire.classList.add('hidden');
	andi.classList.add('hidden');
	sharleen.classList.toggle('hidden');
}