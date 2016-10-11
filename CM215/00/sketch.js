document.ontouchmove = function(event) {
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  stroke(0);
  fill(255, 0, 0, 0.5);
  strokeWeight(5);
}

function draw() {
  background(255);

  beginShape();
  for (var i = 0; i < touches.length; i++) {
    vertex(touches[i].x, touches[i].y);
  }
  endShape(CLOSE)



  for (var i = 0; i < touches.length; i++) {
    rect(touches[i].x, touches[i].y, 150, 150);

    if ((i + 1) < touches.length) {
      line(touches[i].x, touches[i].y, touches[i + 1].x, touches[i + 1].y);
    } else {
      line(touches[i].x, touches[i].y, touches[0].x, touches[0].y);
    }
  }

}

function touchStarted() {

}