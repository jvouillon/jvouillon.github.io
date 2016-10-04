 var posY;
 
 function setup() {
 createCanvas(windowWidth,windowHeight); 
 
posY=50;

}

function draw() {

}

function touchStarted() {
  textSize(32);
  
  text(touches[0].x, 100, 50);
  text(touches[0].y, 200, 50);
  posY += 50;
  
}