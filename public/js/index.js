// var socket = io.connect('http://150.253.89.241:8000');

function setup(){
  createCanvas(windowWidth,windowHeight)
}
function draw(){
  background(255,0,0)
  text('this is the p5canvas', 50,50)
}

$("#testButton").click(function() {
  console.log("Test Clicked");
  socket.emit('testSent', "This is a Test-should be stored inside the function");
});
