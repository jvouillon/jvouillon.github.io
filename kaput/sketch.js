function setup() {
  createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
}

function draw() {
  //background(220);
	stroke(255,255,0);
	strokeWeight(random(0,4));
	fill(random(0,255),random(0,255),0,100);
	ellipse(mouseX,mouseY,random(20,100));
	
}
