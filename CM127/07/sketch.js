// Sujet: interaction utilisateur clavier + detection collision
//
var posx, posy, taille;
var playerx, playery, playerTaille;
var vx, vy, speed;
var playervx, playervy, playerspeed;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);

  posx = windowWidth / 2;
  posy = windowHeight / 2;
  taille = 100;

  playerx = windowWidth / 2;
  playery = windowHeight / 2;
  playerTaille = 100;

  vx = random(-1, 1);
  vy = random(-1, 1);
  speed = 5;

  playervx = 0;
  playervy = 0;
  playerspeed = 5;
}
//***************************************************
function draw() {
  background(255);
  drawCollision();
  drawBall();
  drawPlayer();
  drawDistance();
}
//***************************************************
function drawCollision() {
  if (dist(posx, posy, playerx, playery) < (taille+playerTaille)/2) {
    background(255, 0, 0);
  }
}
//***************************************************
function drawDistance() {
  strokeWeight(2);
  line(posx, posy, playerx, playery);
}
//***************************************************
function drawPlayer() {
  fill(100, 100, 255);
  strokeWeight(3);

  playerx += playervx * playerspeed;
  playery += playervy * playerspeed;

  ellipse(playerx, playery, playerTaille);

  if (playerx > windowWidth) {
    playerx = 0;
  } else if (playerx < 0) {
    playerx = windowWidth;
  }

  if (playery > windowHeight) {
    playery = 0;
  } else if (playery < 0) {
    playery = windowHeight;
  }
}
//***************************************************
function drawBall() {
  fill(255, 0, 0);
  strokeWeight(3);

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
//***************************************************
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playervx = -1;
    playervy = 0;
  } else if (keyCode === RIGHT_ARROW) {
    playervx = 1;
    playervy = 0;
  } else if (keyCode === UP_ARROW) {
    playervx = 0;
    playervy = -1;
  } else if (keyCode === DOWN_ARROW) {
    playervx = 0;
    playervy = 1;
  }
}