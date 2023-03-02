//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  color: 'black',
  brand: 'tickwatch',
  shape: 'round',
  buttons: 2
};
stopwatch.color = 'black';
stopwatch.time = 1;
stopwatch.buttons = 2;
stopwatch.bandMaterial = 'plastic';

stopwatch.whatColor = function(color){
  console.log(`the watch is ${color}.`);
}
stopwatch.buttonCount = function(buttons){
  console.log(`the watch has ${buttons} buttons.`);
}
stopwatch.bandMaterial = function(material){

}