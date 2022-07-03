const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext() {
	// we want to add the hidden class to sharleen and claire so that both of them go away when andi is clicked
	// you don't need the . before hidden even tho its a class bc you already told it that by using the classList prop so adding a . would be redundent
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	//toggle is like a light switch, what we're doing here is toggling the hidden class off
	andi.classList.toggle('hidden')
}

function claireNext() {
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext() {
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}
