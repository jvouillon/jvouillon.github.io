function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {

  
}

function touchStarted(){
  background(random(255));
  textSize(100);
  text(touches.length, 100, 100);
}