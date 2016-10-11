var touchSize;

document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(5);
  touchSize = 100;
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

    if ((i + 1) < touches.length) {
      line(touches[i].x, touches[i].y, touches[i + 1].x, touches[i + 1].y);
    } else {
      line(touches[i].x, touches[i].y, touches[0].x, touches[0].y);
    }
  }

}

function touchStarted() {

}