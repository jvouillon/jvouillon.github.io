// Sujet: objets et tableaux...
//
var balls = [];
var maxBalls;
//***************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  maxBalls = 500;
  for (var i = 0; i < maxBalls; i++) {
    balls[i] = new Ball();
    balls[i].init();
  }
}
//***************************************************
function draw() {
  clear();
  for (var i = 0; i < maxBalls; i++) {
    balls[i].drawBall();
  }
}
//***************************************************
function Ball() {
  this.posy = random(0, windowHeight);
  this.couleur = color(150, 150, 255);
  this.vx = 0;
  this.vy = 1;

  this.init = function() {
    this.posx = random(0, windowWidth);
    this.taille = random(2, 6);
    this.speed = random(3, 9);
  }

  this.drawBall = function() {
    fill(this.couleur);
    ellipse(this.posx, this.posy, this.taille);
    this.update();
  }
  this.update = function() {
    if (this.posy > windowHeight) {
      this.posy = 0;
      this.init();
    }
    this.posx += this.vx * this.speed;
    this.posy += this.vy * this.speed;
  }
}
//***************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//***************************************************