var game = [];
var offsetx, offsety;
var playerSize, posI, posJ; // taille + position du joueur
var gameSize, gameTileSize;
var nbtrace, traceTimer, traces = [];

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
    "W", "W", "W", "W", "W", "W",
    "W", "F", "F", "F", "F", "W",
    "W", "F", "W", "W", "W", "W",
    "W", "F", "F", "F", "F", "W",
    "W", "F", "W", "W", "F", "W",
    "W", "W", "W", "W", "B", "W",
  ];
  nbtrace = 0;
  traceTimer = 5;
}
/*************************************/
function draw() {
  for (i = 0; i < gameSize; i++) {
    for (j = 0; j < gameSize; j++) {
      if (game[i * gameSize + j] == "W") {
        fill(0);
      } else if (game[i * gameSize + j] == "B") {
        fill(255, 255, 0);
      } else if (game[i * gameSize + j] == "T") {
        fill(220);
      } else {
        fill(100);
      }
      rect(offsetx + j * gameTileSize, offsety + i * gameTileSize, gameTileSize, gameTileSize);
    }
  }
  fill(255, 0, 0);
  ellipse(offsetx + posJ * gameTileSize, offsety + posI * gameTileSize, playerSize);


  if (traceTimer < 0) {
    if (nbtrace > 0) {
      game[traces[0]] = "F";
      nbtrace--;
      for (var i = 0; i < nbtrace; i++) {
        traces[i] = traces[i + 1];
      }
    }
    traceTimer = 30;
  }
  traceTimer--;




}
/*************************************/
function keyReleased() {
  switch (keyCode) {
    case LEFT_ARROW:
      if (game[posI * gameSize + posJ - 1] != "W") {
        game[posI * gameSize + posJ] = "T";
        traces[nbtrace] = posI * gameSize + posJ;
        nbtrace++;
        posJ--;
      }
      break;
    case RIGHT_ARROW:
      if (game[posI * gameSize + posJ + 1] != "W") {
        game[posI * gameSize + posJ] = "T";
        traces[nbtrace] = posI * gameSize + posJ;
        nbtrace++;
        posJ++;
      }
      break;
    case UP_ARROW:
      if (game[(posI - 1) * gameSize + posJ] != "W") {
        game[posI * gameSize + posJ] = "T";
        traces[nbtrace] = posI * gameSize + posJ;
        nbtrace++;
        posI--;
      }
      break;
    case DOWN_ARROW:
      if (game[(posI + 1) * gameSize + posJ] != "W") {
        game[posI * gameSize + posJ] = "T";
        traces[nbtrace] = posI * gameSize + posJ;
        nbtrace++;
        posI++;
      }
      break;
    default:
      break;
  }
}