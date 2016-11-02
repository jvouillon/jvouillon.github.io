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

var obstacle_1x, obstacle_1y, obstacle_2x, obstacle_2y, obstacle_3x, obstacle_3y;
var obstacle_1Color, obstacle_2Color, obstacle_3Color;
var obstacleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;

  backgroundColor = color(255, 200, 200);
  rectMode(CENTER);
  textAlign(CENTER);
  
  obstacleSize = 40;
  
  obstacle_1x = random(obstacleSize,windowWidth-obstacleSize);
  obstacle_1y = random(obstacleSize,windowHeight-obstacleSize);
  obstacle_1Color = color(255,0,0);
  
  obstacle_2x = random(obstacleSize,windowWidth-obstacleSize);
  obstacle_2y = random(obstacleSize,windowHeight-obstacleSize);
  obstacle_2Color = color(0,255,0);
  
  obstacle_3x = random(obstacleSize,windowWidth-obstacleSize);
  obstacle_3y = random(obstacleSize,windowHeight-obstacleSize);
  obstacle_3Color = color(0,0,255);
}

function draw() {
  background(backgroundColor);

  setRotations();
  drawInfos();
  drawObstacles();
  ballMove();
  drawBall();
}

function drawInfos() {
  var mySize = 20
  textSize(mySize);
}


function setRotations() {
  deviceRotationX = rotationX;
  deviceRotationY = rotationY;
}

function ballMove() {
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

function drawBall(){
  noStroke();
  fill(60);
  ellipse(x, y + 5, 60, 60);
  fill(150);
  ellipse(x, y, 60, 60);
  fill(255);
  ellipse(x + 5, y - 17, 20, 20);
}

function drawObstacles(){
  noStroke();
  fill(obstacle_1Color);
  ellipse(obstacle_1x, obstacle_1y, obstacleSize, obstacleSize);
  
  fill(obstacle_2Color);
  ellipse(obstacle_2x, obstacle_2y, obstacleSize, obstacleSize);
  
  fill(obstacle_3Color);
  ellipse(obstacle_3x, obstacle_3y, obstacleSize, obstacleSize);
}

function deviceShaken() {
  //backgroundColor = color(random(150, 250));
}