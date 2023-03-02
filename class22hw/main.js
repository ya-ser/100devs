// obj literals

/* const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
}; */

// circle.draw();

// if odj has 1 or more methods (behavior), use a contrutor method instead of obj literal notation

// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log(first);
    }
  }
}
const circle = createCircle(1);

// contructor function
function Circle(radius) {
  // reference to 
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1);

let num = {val: 10};
function increase(num){
  return ++num.val;
}
increase(num);
console.log(num);

