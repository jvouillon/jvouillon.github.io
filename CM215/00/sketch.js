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
  posY += 50;
  text(touches[0].x, 50, posY);
  text(touches[0].y, 200, posY);
  posY += 50;
  
}