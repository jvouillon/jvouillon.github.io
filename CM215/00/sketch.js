function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
  
}

function touchStarted() {
  textSize(32);
  
  text(touches[0].x, 100, 50);
  
}