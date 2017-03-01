//
// PROTOYPE JEU 
//
var stars = [],
  maxStars;
var lasers = [],
  maxLasers, nbLasers, totalLasers, needUpdateLasersArray, fire, reload, reloadTime;
var exhaust = [],
  maxExhaust;
var mines = [],
  maxMines;
var shipx, shipy, shipvx, shipvy, shipSize;
var mainLoop, timer, score, damages, energy, ammo, hitpercent, hits;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Orbitron");
  initGame();
}
//***************************************************
//
// INITIALISATION
//
//***************************************************
function initGame() {
  shipx = windowWidth / 2;
  shipy = windowHeight / 2; // initial position
  shipvx = 0;
  shipvy = 0;
  shipSize = 10;

  maxStars = 40;
  maxExhaust = 100;
  maxMines = 10;
  nbLasers = 0;
  totalLasers = 0;
  maxLasers = 100;
  reload = 0;
  reloadTime = 5; //delay between 2 fires
  needUpdateLasersArray = false; // update array when laser exits window or explode
  fire = false;

  mainLoop = true;
  timer = 10 * 60;
  score = 0;
  damages = 0;
  energy = 100;
  ammo = maxLasers;
  hitpercent = 0;
  hits = 0;

  initStars();
  initExhaust();
  initMines();
}
//***************************************************
//
// MAIN LOOP
//
//***************************************************
function draw() {
  clear();
  if (mainLoop) {
    updateGame();
    updateLasers();
    updateStars();
    updateExhaust();
    updateMines();
    updateShip();
    updateDisplay();
  } else {
    updateStars();
    updateDisplay();
    displayMessageGameOver();
  }
}
//***************************************************
function updateGame() {
  timer--;
  energy -= 0.01;
  if (timer <= 0 || energy <= 0) {
    mainLoop = false;
  }
}
//***************************************************
function displayMessageGameOver() {
  textSize(100);
  textAlign(CENTER);
  fill(255, 150, 0);
  stroke(0);
  strokeWeight(6);
  text("GAME OVER", windowWidth / 2, windowHeight / 2 + 25);
  textSize(20);
  strokeWeight(3);
  text("PRESS ANY KEY TO PLAY", windowWidth / 2, windowHeight / 2 + 50);
}
//***************************************************
function updateDisplay() {
  var infosx = 50;
  var infosy = windowHeight - 10;

  textSize(10);
  fill(255, 150, 0);
  text("| TIME: " + floor(timer / 60), infosx, infosy);
  text("| SCORE: " + score, infosx + 100, infosy);
  text("| ENERGY: " + floor(energy) + " %", infosx + 200, infosy);
  text("| DAMAGES: " + damages + " %", infosx + 300, infosy);
  text("| AMMO: " + ammo, infosx + 400, infosy);
  if (ammo < maxLasers) {
    text("| HITS: " + floor(100 * hits / (maxLasers - ammo)) + " %", infosx + 500, infosy);
  } else {
    text("| HITS: " + 0 + " %", infosx + 500, infosy);
  }
}
//***************************************************
function Laser() {
  this.posx = shipx + 40;
  this.posy = shipy;
  this.couleur = color(255, 255, 255);
  this.vx = 10;
  this.taille = random(2, 8);
  this.life = true;
  this.maxlife = this.life;

  this.display = function() {
    if (this.life) {
      noFill();
      strokeWeight(3);
      stroke(this.couleur);
      line(this.posx, this.posy, this.posx + this.taille, this.posy);
      this.testCollision();
      this.update();
    }
  }
  this.update = function() {
    if (this.posx > windowWidth) {
      this.life = false;
    }
    this.posx += this.vx;
  }
  this.testCollision = function() {
    for (var i = 0; i < maxMines; i++) {
      if (mines[i].posx < windowWidth) {
        if (dist(this.posx, this.posy, mines[i].posx, mines[i].posy) < 10) {
          mines[i].life = false;
          this.life = false;
          drawExplosion(this.posx, this.posy);
          score += mines[i].bonus;
          hits++;
          break;
        }
      }
    }
  }
}
//***************************************************
function updateLasers() {
  updateLasersArray();
  if (reload > 0) {
    reload--;
  }
  fire = keyIsDown(32);
  if (fire && reload === 0 && ammo) {
    lasers[nbLasers] = new Laser();
    reload = reloadTime;
    ammo--;
    nbLasers++;
  }
  for (var i = 0; i < nbLasers; i++) {
    lasers[i].display();
  }
}
//***************************************************
// Cleanup the laser array, by removing "dead" lasers
//
function updateLasersArray() {
  for (var i = 0; i < nbLasers; i++) {
    if (lasers[i].life == false) {
      nbLasers--;
      for (var j = i; j < nbLasers; j++) {
        lasers[j] = lasers[j + 1];
      }
    }
  }
}
//***************************************************
//
// STARS...
//
function Star() {
  this.posx = random(0, windowWidth);
  this.init = function() {
    var alea = random(50, 200);
    this.couleur = color(alea, alea, 255);
    this.posy = random(0, windowHeight - 20);
    this.taille = random(1, 6);
    this.speed = random(-9, -3);
  }
  this.display = function() {
    this.drawShape();
    this.update();
  }
  this.drawShape = function() {
    noStroke();
    fill(this.couleur);
    ellipse(this.posx, this.posy, this.taille);
  }
  this.update = function() {
    if (this.posx < 0) {
      this.posx = random(windowWidth, windowWidth + 500);
      this.init();
    }
    this.posx += this.speed;
  }
}
//***************************************************
function initStars() {
  for (var i = 0; i < maxStars; i++) {
    stars[i] = new Star();
    stars[i].init();
  }
}
//***************************************************
function updateStars() {
  for (var i = 0; i < maxStars; i++) {
    stars[i].display();
  }
}
//***************************************************
//
// MINES...
//
function Mine() {
  this.damage = 5;
  this.bonus = 5;
  this.taille = 10;

  this.init = function() {
    this.posy = random(0, windowHeight - 40);
    this.posx = random(windowWidth, 2 * windowWidth);
    this.speed = random(-5, -2);
    this.life = true;
  }
  this.display = function() {
    this.drawShape();
    this.update();
    this.testCollision();
  }
  this.drawShape = function() {
    noStroke();

    fill(200);
    beginShape();
    vertex(this.posx, this.posy);
    vertex(this.posx - this.taille, this.posy);
    vertex(this.posx, this.posy - this.taille);
    endShape(CLOSE);

    fill(255);
    beginShape();
    vertex(this.posx, this.posy);
    vertex(this.posx, this.posy - this.taille);
    vertex(this.posx + this.taille, this.posy);
    endShape(CLOSE);

    fill(150);
    beginShape();
    vertex(this.posx, this.posy);
    vertex(this.posx + this.taille, this.posy);
    vertex(this.posx, this.posy + this.taille);
    endShape(CLOSE);

    fill(80);
    beginShape();
    vertex(this.posx, this.posy);
    vertex(this.posx, this.posy + this.taille);
    vertex(this.posx - this.taille, this.posy);
    endShape(CLOSE);
  }
  this.update = function() {
    if (this.posx <= 0 || !this.life) {
      this.init();
    }
    this.posx += this.speed;
  }
  this.testCollision = function() {
    if (dist(this.posx, this.posy, shipx, shipy) < 20) {
      this.life = false;
      damages += this.damage;
      drawExplosion(shipx, shipy);
    }
  }
}
//***************************************************
function initMines(){
  for (var i = 0; i < maxMines; i++) {
    mines[i] = new Mine();
    mines[i].init();
  }
}
//***************************************************
function updateMines() {
  for (var i = 0; i < maxMines; i++) {
    mines[i].display();
  }
}
//***************************************************
//
// EXHAUST...
//
function Exhaust() {
  this.init = function() {
    this.vx = random(-10, -2);
    this.vy = random(-1, 1);
    this.life = random(2, 15);
    this.maxlife = this.life;
    this.posx = random(-2, 2);
    this.posy = random(-2, 2);
    this.pposx = this.posx;
    this.pposy = this.posy;
    this.color = color(255, 255, 255, 100);
  }
  this.display = function() {
    this.drawShape();
    this.update();
  }
  this.drawShape = function() {
    noFill();
    strokeWeight(2);
    stroke(this.color);
    line(this.pposx + shipx, this.pposy + shipy, this.posx + shipx, this.posy + shipy);
  }
  this.update = function() {
    //this.vx -= shipvx * 0.1;
    this.pposx = this.posx;
    this.pposy = this.posy;
    this.posx += this.vx;
    this.posy += this.vy;
    this.life--;
    this.color = color(255, 255 * (this.life / this.maxlife) * 1.5, 255 * this.life / this.maxlife, 100);
    if (this.life < 0) {
      this.init();
    }
  }
}
//***************************************************
function initExhaust() {
  for (var i = 0; i < maxExhaust; i++) {
    exhaust[i] = new Exhaust();
    exhaust[i].init();
  }
}
//***************************************************
function updateExhaust() {
  for (var i = 0; i < maxExhaust; i++) {
    exhaust[i].display();
  }
}
//***************************************************
function updateShip() {
  if (shipx < 15 && shipvx < 0 || shipx > windowWidth - 50 && shipvx > 0) {
    shipvx = 0;
  }
  if (shipy < 20 && shipvy < 0 || shipy > windowHeight - 50 && shipvy > 0) {
    shipvy = 0;
  }
  shipx += shipvx;
  shipy += shipvy;
  drawShip(shipx, shipy);
}
//***************************************************
function drawShip(x, y) {
  noStroke();
  fill(150);
  beginShape();
  vertex(x, y);
  vertex(x - 3, y - 5);
  vertex(x + 7, y - 8);
  vertex(x - 10, y - 15);
  vertex(x + 20, y - 15);
  vertex(x + 5, y - 14);
  vertex(x + 40, y);
  endShape(CLOSE);

  fill(100);
  beginShape();
  vertex(x + 40, y);
  vertex(x + 5, y + 14);
  vertex(x + 20, y + 15);
  vertex(x - 10, y + 15);
  vertex(x + 7, y + 8);
  vertex(x - 3, y + 5);
  vertex(x, y);
  endShape(CLOSE);
}
//***************************************************
function drawExplosion(x, y) {
  noStroke();
  fill(255, 0, 0, 50);
  ellipse(x, y, 120);
  fill(255, 100, 0, 150);
  ellipse(x, y, 60);
  fill(255, 200, 0, 200);
  ellipse(x, y, 30);
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//***************************************************
function keyPressed() {
  switch (keyCode) {
    case DOWN_ARROW:
      shipvy += 2;
      break;
    case UP_ARROW:
      shipvy -= 2;
      break;
    case LEFT_ARROW:
      shipvx -= 5;
      break;
    case RIGHT_ARROW:
      shipvx += 5;
      break;
    default:
      if (!mainLoop) {
        initGame();
      }
      break;
  }
}
//***************************************************
function keyReleased() {
  shipvx = 0;
  shipvy = 0;
}
//***************************************************