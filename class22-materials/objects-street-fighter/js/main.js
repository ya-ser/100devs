//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, style) {
  this.name = name
  this.style = style
  this.health = 100
  let superCount = 0
  this.punch = function(){
    this.superCount++;
    console.log('punch');
  }
  block = function(){
    console.log('block');
  }
  let useUltimate = function(){
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

// hide super, ultimate, 

const dudley = new StreetFighter('Dudley', 'Boxing');
const sakura = new StreetFighter('Sakura', 'Karate');