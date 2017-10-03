var touchSize;

document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(100);
  strokeWeight(4);
  touchSize = 60;
  textSize = 20;
}

function draw() {
  background(255);
  fill(255, 0, 0);
  beginShape();
  for (var i = 0; i < touches.length; i++) {
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE)


noFill();
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, touchSize, touchSize);
    text(touches[i].x+20, touches[i].y, "# "+i);
    text(touches[i].x+20, touches[i].y+10, " x: "+touches[i].x);
    text(touches[i].x+20, touches[i].y+20, " y: "+touches[i].y);
    
    if ((i + 1) < touches.length) {
      line(touches[i].x, touches[i].y, touches[i + 1].x, touches[i + 1].y);
    } else {
      line(touches[i].x, touches[i].y, touches[0].x, touches[0].y);
    }
  }

}

function touchStarted() {

}