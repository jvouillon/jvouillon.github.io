// Ball Position
var x = 0;
var y = 0;

// Ball Velocity
var vx = 0;
var vy = 0;

// Ball Acceleration
var ax = 0;
var ay = 0;

var vMultiplier = 0.01; // deplacement
var bMultiplier = 0.6; // rebond

var deviceRotationX, deviceRotationY;

var backgroundColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;

  backgroundColor = color(255, 200, 200);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(backgroundColor);
  setRotations();
  drawInfos();
  moveBall();
  drawBall();
}

function drawBall() {
  noStroke();
  fill(60);
  ellipse(x, y + 5, 60, 60);
  fill(150);
  ellipse(x, y, 60, 60);
  fill(255);
  ellipse(x + 5, y - 17, 20, 20);
}

function drawInfos() {
  var mySize = 20
  textSize(mySize);


  if (deviceRotationX < 0) {
    fill(255);
    rect(windowWidth / 2, mySize / 2, 200, mySize);
    fill(0);
    text(floor(deviceRotationX) + "°", windowWidth / 2, mySize);
  } else if (deviceRotationX > 0) {
    fill(255);
    rect(windowWidth / 2, windowHeight - mySize / 2, 200, mySize);
    fill(0);
    text(floor(deviceRotationX) + "°", windowWidth / 2, windowHeight);
  }

  if (deviceRotationY < 0) {
    text(floor(deviceRotationY) + "°", 0, windowHeight / 2);
  } else if (deviceRotationY > 0) {
    text(floor(deviceRotationY) + "°", windowWidth - mySize, windowHeight / 2);
  }

  text(floor(vx), windowWidth / 2 - mySize, windowHeight / 2);
  text(floor(vy), windowWidth / 2, windowHeight / 2);

  //text(floor(ax),windowWidth/2-mySize,windowHeight/2+mySize);
  //text(floor(ay),windowWidth/2,windowHeight/2+mySize);
}


function setRotations() {
  deviceRotationX = rotationX;
  deviceRotationY = rotationY;
}

function moveBall() {
  ax = deviceRotationY * vMultiplier;
  ay = deviceRotationX * vMultiplier;

  vx += ax;
  vy += ay;

  y = y + vy;
  x = x + vx;

  // Bounce when touch the edge of the canvas
  if (x < 0) {
    x = 0;
    vx = -vx * bMultiplier;
  }
  if (y < 0) {
    y = 0;
    vy = -vy * bMultiplier;
  }
  if (x > width - 20) {
    x = width - 20;
    vx = -vx * bMultiplier;
  }
  if (y > height - 20) {
    y = height - 20;
    vy = -vy * bMultiplier;
  }

}

function deviceShaken() {
  backgroundColor = color(random(150, 250));
}