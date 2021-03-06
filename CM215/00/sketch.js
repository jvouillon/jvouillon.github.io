var touchSize;

document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(100);
  strokeWeight(4);
  touchSize = 100;
  textSize(50);
}

function draw() {
  background(200);
  fill(100);
  text("version:1.1", 20, 20);
  
  fill(255, 0, 0);
  beginShape();
  for (var i = 0; i < touches.length; i++) {
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE)


noFill();
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, touchSize, touchSize);
    text("#"+i, touches[i].x+150, touches[i].y-150);
    text("x: "+touches[i].x, touches[i].x+150, touches[i].y-100);
    text("y: "+touches[i].y, touches[i].x+150, touches[i].y-50);
    
    if ((i + 1) < touches.length) {
      line(touches[i].x, touches[i].y, touches[i + 1].x, touches[i + 1].y);
    } else {
      line(touches[i].x, touches[i].y, touches[0].x, touches[0].y);
    }
  }

}

function touchStarted() {

}