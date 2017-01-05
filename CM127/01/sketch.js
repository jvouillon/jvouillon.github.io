function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //background(255);
  fill(255,255,0,200);
  stroke(0,0,255);
  strokeWeight(5);
  ellipse(mouseX,mouseY,100,100);
  rect(100,100,100,100);
  line(100,100,200,200);
  line(0,0,windowWidth,windowHeight);
}