// Sujet: branchements conditionnels et operateurs logiques...
//
var posx, posy, taille;
var vx, vy, speed;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 0, 0);
  strokeWeight(3);
  posx = windowWidth / 2;
  posy = windowHeight / 2;
  taille = 100;
  vx = random(-1, 1);
  vy = random(-1, 1);
  speed = random(10, 20);
}
//***************************************************
function draw() {
  background(255);
  drawBall();
}
//***************************************************
function drawBall() {
  ellipse(posx, posy, taille);
  if (posx > windowWidth - taille / 2 || posx < taille / 2) {
    vx = -vx;
  }
  if (posy > windowHeight - taille / 2 || posy < taille / 2) {
    vy = -vy;
  }
  posx += vx * speed;
  posy += vy * speed;
}