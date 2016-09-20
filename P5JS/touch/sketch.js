function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {

  
}

function touchStarted(){
  background(random(255));
  textSize(32);
  text(touches.length, 10, 10);
}