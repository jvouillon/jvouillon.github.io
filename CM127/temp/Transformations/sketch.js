function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  
  push();
  
  translate(200,200);
  rotate(10);
  
  line(0,-windowHeight,0,windowHeight);
  line(-windowWidth,0, windowWidth,0);
  rect(0,0,100,50);
  pop();
  rect(0,0,100,50);
  rect(200,200,100,50);
  
}