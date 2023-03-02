//Create a mouse object that has four properties and three methods
function mouse(size, color, cute) {
  this.size = size
  this.color = color
  this.cute = cute
  this.sound = function squeek() {
    console.log('squeek')
  }
  this.poop = function poop() {
    console.log('poop')
  }
  this.sleep = function sleep(){
    console.log('zzz')
  }
}

let jimmy = new mouse('big', 'black', false);

console.log(jimmy);