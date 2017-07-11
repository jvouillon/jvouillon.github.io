var drag = false;
var dragOffset = 0;
var dragPos = 0;
var imageWidth, imageHeight;
var imagesMax = 20;
//*****************************************************//
function setup() {
  createCanvas(windowWidth, windowHeight);
  setImageSize();
}
//*****************************************************//
function draw() {
  clear();
  drawDiagonals();

  if (drag) {
    dragPos = mouseX - dragOffset;
    if(dragPos>0){
      dragPos=0;
    }
    if(dragPos<-imageWidth*(imagesMax-1)+(windowWidth-imageWidth)){
      dragPos=-imageWidth*(imagesMax-1)+(windowWidth-imageWidth);
    }
     //if(dragPos<-imageWidth)dragPos+=2*imageWidth;
     //if(dragPos>imageWidth)dragPos-=2*imageWidth;
  }
/*
  if (dragPos < 0) {
    noStroke();
    fill(0, 0, 255, 100);
    rect(dragPos, 0, imageWidth, imageHeight);
    fill(150, 0, 255, 100);
    rect(dragPos + imageWidth, 0, imageWidth, imageHeight);
  } else {
    noStroke();
    fill(0, 0, 255, 100);
    rect(dragPos, 0, imageWidth, imageHeight);
    fill(150, 0, 255, 100);
    rect(dragPos - imageWidth, 0, imageWidth, imageHeight);
  }
  */
  //noStroke();
  
  for (var i = 0;i<imagesMax;i++){
    fill(0, 0, (i*(255/imagesMax)), 100);
    rect(dragPos+i*imageWidth, 0, imageWidth, imageHeight);
  }
}
//*****************************************************//
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setImageSize();
}
//*****************************************************//
function setImageSize(){
  var imageRatio = 1.33;
  imageHeight = windowHeight;
  imageWidth = windowHeight * imageRatio;
}
//*****************************************************//
function mousePressed() {
  drag = true;
  dragOffset = mouseX - dragPos;
}
//*****************************************************//
function mouseReleased() {
  drag = false;
  dragOffset = 0;
}
//*****************************************************//
function drawDiagonals(){
  stroke(255, 0, 0);
  line(0, 0, windowWidth, windowHeight);
  stroke(0, 255, 0);
  line(windowWidth, 0, 0, windowHeight);
}
//*****************************************************//