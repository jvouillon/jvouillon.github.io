function setup() {
 createCanvas(windowWidth,windowHeight); 
 
 var posY = 50;
}

function draw() {
  
}

function touchStarted() {
  textSize(32);
  
  text(touches[0].x, 100, posY);
  text(touches[0].y, 200, posY);
  posY += 50;
  
}