var game = [];
var player;
var offsetx, offsety;
var playerSize, posI, posJ; // taille + position du joueur
var gameSize, gameTileSize;
/*************************************/
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  stroke(150);
  // taille de la mmatrice
  gameSize = 6;
  // taille des éléments de la matrice
  gameTileSize = 50;
  // position initiale du joueur dans le tableau Game
  posI = 1;
  posJ = 2;
  // taille du joueur
  playerSize = gameTileSize * 0.8;
  offsetx = 50;
  offsety = 50;
  game = [
    'W', 'W', 'W', 'W', 'W', 'W',
    'W', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', 'W', 'W', 'W', 'W',
    'W', ' ', ' ', ' ', ' ', 'W',
    'W', ' ', 'W', 'W', ' ', 'W',
    'W', 'W', 'W', 'W', 'B', 'W',
  ];
  player = new Player()
}
/*************************************/
function draw() {
  drawMaze();
  player.update();
}
/*************************************/
function Player() {
  this.vx = 0;
  this.vy = 0;
  this.x = 1;
  this.y = 2;

  this.update = function() {
    if (keyIsPressed) {
      switch (game[(this.y + this.vy) * gameSize + (this.x + this.vx)]) {
        case 'W':
          this.vx = 0;
          this.vy = 0;
          break;
        default:
          this.x += this.vx;
          this.y += this.vy;
          break;
      }
    }
    this.display();
  }
  this.display = function() {
    fill(255, 0, 0);
    ellipse(offsetx + this.x * gameTileSize, offsety + this.y * gameTileSize, playerSize);
  }
}
/*************************************/
function drawMaze() {
  for (i = 0; i < gameSize; i++) {
    for (j = 0; j < gameSize; j++) {
      switch (game[i * gameSize + j]) {
        case 'W':
          fill(0);
          break;
        case 'B':
          fill(255, 255, 0);
          break;
        default:
          fill(100);
          break;
      }
      rect(offsetx + j * gameTileSize, offsety + i * gameTileSize, gameTileSize, gameTileSize);
    }
  }
}
/*************************************/
function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      player.vx = -1;
      break;
    case RIGHT_ARROW:
      player.vx = 1;
      break;
    case UP_ARROW:
      player.vy = -1
      break;
    case DOWN_ARROW:
      player.vy = 1
      break;
    default:
      break;
  }
}
/*************************************/
function keyReleased() {
  player.vx = 0;
  player.vy = 0;
}
/*************************************/