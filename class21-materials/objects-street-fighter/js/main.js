//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, style) {
  this.name = name
  this.style = style
  this.health = 100
  let superCount = 0
  this.punch = function(){
    superCount++;
    console.log('punch');
  }
  block = function(){
    console.log('block');
  }
  useUltimate = function(){
    if (superCount >= 3) {
      superCount = 0;
      console.log('ultimate used!');
    } else if (superCount === 2) {
      console.log('I need to throw 1 more punch to use my super.');
    } else if (superCount === 1) {
      console.log('I need to punch 2 more times to use my super.');
    } else {
      console.log('I need to throw 3 punches to use my super.');
    }
  }
};

const dudley = new StreetFighter('Dudley', 'Boxing');

const idleGif = 'https://media.tenor.com/O7gOeWT_c4sAAAAC/dudley-boxing.gif';
const punchGif = 'img/punch.gif';
const superGif = 'img/super.gif';

const changeImage = (src) => {
  document.getElementById('duds').src = src;
};

const throwPunch = () => {
  changeImage(punchGif);
  setTimeout(() => {
    changeImage(idleGif);
  }, 1000); // Change back to idle after 1 second (1000 milliseconds)
};

const rocketUpper = () => {
  changeImage(superGif);
  setTimeout(() => {
    changeImage(idleGif);
  }, 6000);
};

document.getElementById('punch').addEventListener('click', () => {
  dudley.punch();
  throwPunch();
});
document.getElementById('super').addEventListener('click', () => {
  if (dudley.superCount >= 3) {
    rocketUpper();
    dudley.useUltimate(); // Reset super value and show message
  } else {
    alert(`${dudley.useUltimate()}`);
  };
});