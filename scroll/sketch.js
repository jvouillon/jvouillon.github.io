var drag = false;
var dragOffset = 0;
var dragPos = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  stroke(255, 0, 0);
  line(0, 0, windowWidth, windowHeight);
  stroke(0, 255, 0);
  line(windowWidth, 0, 0, windowHeight);



  if (drag) {
    dragPos = mouseX - dragOffset;
     if(dragPos<-windowWidth)dragPos+=2*windowWidth;
     if(dragPos>windowWidth)dragPos-=2*windowWidth;
  }

  if (dragPos < 0) {
    noStroke();
    fill(0, 0, 255, 100);
    rect(dragPos, 0, windowWidth, windowHeight);
    fill(150, 0, 255, 100);
    rect(dragPos + windowWidth, 0, windowWidth, windowHeight);
  } else {
    noStroke();
    fill(0, 0, 255, 100);
    rect(dragPos, 0, windowWidth, windowHeight);
    fill(150, 0, 255, 100);
    rect(dragPos - windowWidth, 0, windowWidth, windowHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  drag = true;
  dragOffset = mouseX - dragPos;
}

function mouseReleased() {
  drag = false;
  dragOffset = 0;
}