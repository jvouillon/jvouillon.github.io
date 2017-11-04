var game = [];
var playerSize, posI, posJ; // taille + position du joueur
var gameSize, gameTileSize;
/*************************************/
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
  // taille de la mmatrice
  gameSize = 6;
  // taille des éléments de la matrice
  gameTileSize = 50;
  // position initiale du joueur dans le tableau Game
  posI = 1;
  posJ = 2;
  // taille du joueur
  playerSize = gameTileSize * 0.8;

  game = [
    "W", "W", "W", "W", "W", "W",
    "W", "F", "F", "F", "F", "W",
    "W", "F", "W", "W", "W", "W",
    "W", "F", "F", "F", "F", "W",
    "W", "F", "W", "W", "F", "W",
    "W", "W", "W", "W", "B", "W",
  ];
}
/*************************************/
function draw() {
  for (i = 0; i < gameSize; i++) {
    for (j = 0; j < gameSize; j++) {
      if (game[i * gameSize + j] == "W") {
        fill(0);
      } else if (game[i * gameSize + j] == "B") {
        fill(255, 255, 0);
      } else {
        fill(100);
      }
      rect(j * gameTileSize, i * gameTileSize, gameTileSize, gameTileSize);
    }
  }
  fill(255, 0, 0);
  ellipse(posJ * gameTileSize, posI * gameTileSize, playerSize);
}
/*************************************/
function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    if (game[posI * gameSize + posJ - 1] == "W") {
      //...
    } else {
      posJ--;
    }
  }
  if (keyCode == RIGHT_ARROW) {
    if (game[posI * gameSize + posJ + 1] == "W") {
      //...
    } else {
      posJ++;
    }
  }
  if (keyCode == UP_ARROW) {
    if (game[(posI - 1) * gameSize + posJ] == "W") {
      //...
    } else {
      posI--;
    }
  }
  if (keyCode == DOWN_ARROW) {
    if (game[(posI + 1) * gameSize + posJ] == "W") {
      //...
    } else {
      posI++;
    }
  }
}