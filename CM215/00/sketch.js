 var posY;
 
 function setup() {
 createCanvas(windowWidth,windowHeight); 
 
posY=50;

}

function draw() {

}

function touchStarted() {
  textSize(40);
  text(touches[0].id, 50, posY);
  text(touches[0].x, 500, posY);
  text(touches[0].y, 600, posY);
  posY += 50;
  
}