//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// create an obj of cocktails that have a name, photo and instructions
// write a function that lets you search for a cocktail by name and brings it up
// maybe i should make a nested obj of cocktails
// innerText must be cocktail name

const cocktail = {
  'bloody mary':
  {
    photo: 'https://www.bhg.com/thmb/hOi3y8hR80GXSg7O6iZ34ykU2Kc=/1244x0/filters:no_upscale():strip_icc()/bloody-mary-mix-RU272432-844ec68c28e5457c8f26c1edbcf7f20f.jpg',
    instructions: 'For mix, in a large pitcher combine the first five ingredients (through celery salt). Cover and chill until ready to serve. For each drink, pour 1/2 cup drink mix into a glass filled with ice cubes and add desired amount of vodka. If desired, sprinkle with pepper and serve with Garnish.'
  },
  'sidecar':
  {
    photo: 'https://vinepair.com/wp-content/uploads/2018/03/Sidecar-Recipe-card.jpg',
    instructions: 'Combine all ingredients in shaker tin\nAdd ice to small shaker tin.\nShake vigorously, until tin is frosted over.\nStrain into chilled cocktail glass, rimmed with sugar\nGarnish with lemon twist and enjoy.'
  },
  'irish coffee':
  {
    photo: 'https://vinepair.com/wp-content/uploads/2022/01/50mostpopularcocktails2022_internal_irishcoffee.jpg',
    instructions: 'In a heatproof Georgian glass, add Slane Irish Whiskey, Demerara simple syrup and coffee.\nLeave room at the top for the heavy cream.\nStir gently.\nFloat a thin layer of cream on top.\nGarnish with a healthy grating of fresh cinnamon.'
  }
};

// when I type the name of cocktail in input and click btn I get name, photo, and instructions of cocktail


const drink = () => {
  const text = document.getElementById('type').value.trim().toLowerCase();
  let cocktailInfo = cocktail[text];

  if (cocktailInfo) {
    // update the drink details for the selected cocktail
    document.getElementById('shots').src = cocktailInfo.photo;
    document.getElementById('instructions').innerText = cocktailInfo.instructions;
  } else {
    alert('wrong drink'); 
  }
  console.log('text: ', text)
};


document.getElementById('btn').addEventListener('click', drink);


// document.getElementById('shots').src = cocktail.photo;
