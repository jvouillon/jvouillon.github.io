// Sujet: objets et tableaux...
// SPACE BAR to shoot
// LEFT / RIGHT ARROWs to move
var balls = [], needUpdateBallsArray;
var fire, nbBalls, maxBalls;
var gunx, gunvx, reload;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  nbBalls = 0;
  maxBalls = 50;
  needUpdateBalls = false;
  gunx = windowWidth / 2;
  gunvx = 0;
  fire = false;
  reload = 0;
}
//***************************************************
function draw() {
  background(0);

  for (var i = 0; i < nbBalls; i++) {
    balls[i].drawBall();
  }

  if (fire && reload === 0) {
    balls[nbBalls] = new Ball();
    nbBalls++;
    reload = 15;
  }

  drawGun();

  if (reload > 0){reload--;}
  fire = keyIsDown(32);
  
  if(needUpdateBallsArray){updateBallsArray()}
}
//***************************************************
function drawGun() {
  stroke(100);
  strokeWeight(8);
  line(gunx, windowHeight, gunx, windowHeight - 20);
  gunx += gunvx;
  gunvx *= 1.02;

  if (gunx < 0 && gunvx < 0) {
    gunx = 0;
    gunvx = 0;
  } else if (gunx > windowWidth && gunvx > 0) {
    gunx = windowWidth;
    gunvx = 0;
  }
}
//***************************************************
function Ball() {
  this.posx = gunx;
  this.posy = windowHeight - 20;
  this.couleur = color(255, 255, 255);
  this.vy = -10;
  this.taille = 4;
  this.life = windowHeight / 10;
  this.maxlife = this.life;

  this.drawBall = function() {
    if (this.life > 0) {
      strokeWeight(4);
      noFill();
      stroke(this.couleur);
      line(this.posx, this.posy, this.posx, this.posy - 2);
      this.update();
    }
  }
  this.update = function() {
    if (this.posy < 0) {
      this.life = 0;
      needUpdateBallsArray = true;
    }
    this.posy += this.vy;
    this.life--;
    this.couleur = color(255, 255 * this.life / this.maxlife, 255 * this.life / this.maxlife);
  }
}
//***************************************************
function updateBallsArray(){
  for (var i = 1; i < nbBalls; i++) {
    balls[i-1] = balls[i];
  }
  nbBalls--;
  needUpdateBallsArray = false;
}
//***************************************************
function keyPressed() {
  switch (keyCode) {
    case 37:
      gunvx = -1;
      break;
    case 39:
      gunvx = 1;
      break
    default:
      break;
  }
}
//***************************************************
function keyReleased() {
  gunvx = 0;
  fire = false;
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//***************************************************