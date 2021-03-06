var ballRadius = 30;
var ballSize;
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
/************************************************************/
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;

  ballSize = 2 * ballRadius;

  backgroundColor = color(255, 255, 200);
  rectMode(CENTER);
  textAlign(CENTER);

  obstacleSize = 40;

  obstacle_1x = random(obstacleSize, windowWidth - obstacleSize);
  obstacle_1y = random(obstacleSize, windowHeight - obstacleSize);
  obstacle_1Color = color(255, 0, 0);

  obstacle_2x = random(obstacleSize, windowWidth - obstacleSize);
  obstacle_2y = random(obstacleSize, windowHeight - obstacleSize);
  obstacle_2Color = color(0, 255, 0);

  obstacle_3x = random(obstacleSize, windowWidth - obstacleSize);
  obstacle_3y = random(obstacleSize, windowHeight - obstacleSize);
  obstacle_3Color = color(0, 0, 255);
}
/************************************************************/
function draw() {
  background(backgroundColor);

  setRotations();
  drawInfos();
  drawObstacles();
  ballMove();
  drawBall();
}
/************************************************************/
function drawInfos() {
  var mySize = 12
  textSize(mySize);
  text("version: 3", 20, 20)
}
/************************************************************/
function setRotations() {
  deviceRotationX = floor(rotationX);
  deviceRotationY = floor(rotationY);
}
/************************************************************/
function ballMove() {
  ax = deviceRotationY * vMultiplier;
  ay = deviceRotationX * vMultiplier;

  vx += ax;
  vy += ay;

  y = y + vy;
  x = x + vx;

  if (x <= ballRadius) {
    x = ballRadius;
    vx = -vx * bMultiplier;
  }
  if (y <= ballRadius) {
    y = ballRadius;
    vy = -vy * bMultiplier;
  }
  if (x >= width - ballRadius) {
    x = width - ballRadius;
    vx = -vx * bMultiplier;
  }
  if (y >= height - ballRadius) {
    y = height - ballRadius;
    vy = -vy * bMultiplier;
  }
}
/************************************************************/
function drawBall() {
  noStroke();
  fill(150);
  ellipse(x, y, ballSize, ballSize);
}
/************************************************************/
function drawObstacles() {
  noStroke();
  fill(obstacle_1Color);
  ellipse(obstacle_1x, obstacle_1y, obstacleSize, obstacleSize);

  fill(obstacle_2Color);
  ellipse(obstacle_2x, obstacle_2y, obstacleSize, obstacleSize);

  fill(obstacle_3Color);
  ellipse(obstacle_3x, obstacle_3y, obstacleSize, obstacleSize);
}
/************************************************************/
function deviceShaken() {
  //backgroundColor = color(random(150, 250));
}