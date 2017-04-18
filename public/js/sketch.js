var socket = io.connect();
var socket = io.connect('http://150.253.88.129:3000'); //USE FOR LOCAL TESTING

// ======= TURN OFF TOUCH SCROLLING ========

var defaultPrevent=function(e){e.preventDefault();}
document.body.parentElement.addEventListener("touchstart", defaultPrevent);
document.body.parentElement.addEventListener("touchmove" , defaultPrevent);
document.body.addEventListener("touchstart", defaultPrevent);
document.body.addEventListener("touchmove" , defaultPrevent);

// ======= ALL P5 STUFF ==========

function setup(){
  createCanvas(windowWidth,windowHeight)
}
$('.pageinstruct').delay(5000).fadeOut('medium');


function draw(){
  if( mouseIsPressed || touchIsDown){
      var dataToSend = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY
      }
    socket.emit('clientDraw', dataToSend)
    }
  }
}
