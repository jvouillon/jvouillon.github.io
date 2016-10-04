 var posY;
 
 function setup() {
 createCanvas(windowWidth,windowHeight); 
 
posY=50;

}

function draw() {

}

function touchStarted() {
  textSize(40);
  text(touches[0].id, 100, posY);
  text(touches[0].x, 200, posY);
  text(touches[0].y, 300, posY);
  posY += 50;
  
}